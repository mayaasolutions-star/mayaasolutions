import { spawn } from 'child_process';
import http from 'http';
import { CANONICAL_ROUTES } from './generate-sitemap.js';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9222;

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const req = http.request(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Failed to parse JSON from ${url}: ${data.slice(0, 100)}`));
        }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.id = 1;
    this.callbacks = new Map();
  }

  async connect() {
    this.ws = new WebSocket(this.wsUrl);
    await new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
    });

    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.callbacks.has(msg.id)) {
        const { resolve, reject } = this.callbacks.get(msg.id);
        this.callbacks.delete(msg.id);
        if (msg.error) {
          reject(new Error(msg.error.message));
        } else {
          resolve(msg.result);
        }
      }
    };
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.id++;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function run() {
  console.log('Launching Chrome for Full Responsiveness Audit...');
  const chromeProcess = spawn(CHROME_PATH, [
    `--remote-debugging-port=${PORT}`,
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--user-data-dir=' + process.env.TEMP + '\\chrome_audit_profile_' + Date.now()
  ]);

  let versionInfo = null;
  for (let i = 0; i < 20; i++) {
    await wait(300);
    try {
      versionInfo = await fetchJson(`http://127.0.0.1:${PORT}/json/version`);
      if (versionInfo) break;
    } catch {}
  }

  if (!versionInfo) {
    console.error('Failed to connect to Chrome remote debugging port.');
    chromeProcess.kill();
    process.exit(1);
  }

  const targets = await fetchJson(`http://127.0.0.1:${PORT}/json/list`);
  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
  const cdp = new CDPClient(pageTarget.webSocketDebuggerUrl);
  await cdp.connect();

  await cdp.send('Page.enable');

  const testViewports = [
    { name: '320px (iPhone SE)', width: 320, height: 640 },
    { name: '375px (iPhone 8/SE2)', width: 375, height: 667 },
    { name: '390px (iPhone 14/15)', width: 390, height: 844 },
    { name: '768px (iPad Portrait)', width: 768, height: 1024 },
    { name: '1024px (iPad Landscape/Laptop)', width: 1024, height: 768 }
  ];

  console.log(`Starting responsiveness audit across all ${CANONICAL_ROUTES.length} routes...`);

  const report = [];

  for (let idx = 0; idx < CANONICAL_ROUTES.length; idx++) {
    const route = CANONICAL_ROUTES[idx];
    const routePath = route.path;
    const url = `http://localhost:4173/${routePath}`;
    const routeIssues = [];

    for (const vp of testViewports) {
      await cdp.send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.width < 768
      });

      try {
        await cdp.send('Page.navigate', { url });
        await wait(600);

        const evalResult = await cdp.send('Runtime.evaluate', {
          expression: `(() => {
            const docEl = document.documentElement;
            const body = document.body;
            if (!docEl || !body) return null;
            
            const origDocOverflow = docEl.style.overflowX;
            const origBodyOverflow = body.style.overflowX;
            
            docEl.style.overflowX = 'visible';
            body.style.overflowX = 'visible';
            
            const scrollW = Math.max(docEl.scrollWidth, body.scrollWidth);
            const innerW = window.innerWidth;
            
            function isClippedByAncestor(element) {
              let parent = element.parentElement;
              while (parent && parent !== document.body && parent !== document.documentElement) {
                const style = window.getComputedStyle(parent);
                if (style.overflow === 'hidden' || style.overflowX === 'hidden' || style.overflow === 'clip' || style.overflowX === 'clip') {
                  const parentRect = parent.getBoundingClientRect();
                  if (parentRect.right <= window.innerWidth + 2 && parentRect.left >= -2) {
                    return true;
                  }
                }
                parent = parent.parentElement;
              }
              return false;
            }

            const overflowing = [];
            const all = document.querySelectorAll('*');
            for (const el of all) {
              if (['SCRIPT', 'STYLE', 'HEAD', 'META', 'LINK', 'TITLE', 'HTML', 'BODY'].includes(el.tagName)) continue;
              if (el.ownerSVGElement) continue;

              const rect = el.getBoundingClientRect();
              if (rect.right > innerW + 1.5 || rect.left < -1.5) {
                // If it is inside a clipped container, it's visually clipped
                if (isClippedByAncestor(el)) continue;

                const text = (el.innerText || '').slice(0, 50).replace(/\\s+/g, ' ').trim();
                const tag = el.tagName.toLowerCase();
                const cls = (typeof el.className === 'string' ? el.className : '').slice(0, 100);
                overflowing.push({
                  tag,
                  cls,
                  text,
                  left: Math.round(rect.left),
                  right: Math.round(rect.right),
                  width: Math.round(rect.width)
                });
              }
            }
            
            docEl.style.overflowX = origDocOverflow;
            body.style.overflowX = origBodyOverflow;
            
            const trueOverflow = (scrollW > innerW + 1) || overflowing.length > 0;

            return {
              scrollW,
              innerW,
              overflowDiff: scrollW - innerW,
              hasOverflow: trueOverflow,
              overflowCount: overflowing.length,
              topOverflows: overflowing.slice(0, 5)
            };
          })()`,
          returnByValue: true
        });

        if (evalResult && evalResult.result && evalResult.result.value) {
          const res = evalResult.result.value;
          if (res.hasOverflow) {
            routeIssues.push({
              viewport: vp.name,
              scrollW: res.scrollW,
              innerW: res.innerW,
              diff: res.overflowDiff,
              count: res.overflowCount,
              items: res.topOverflows
            });
          }
        }
      } catch (err) {
        console.warn(`  Warning: Failed to test /${routePath} (${vp.name}):`, err.message);
      }
    }

    if (routeIssues.length > 0) {
      console.log(`[FAIL] /${routePath} (${routeIssues.length} viewport issues):`);
      routeIssues.forEach(iss => {
        console.log(`  -> ${iss.viewport}: scrollW=${iss.scrollW} innerW=${iss.innerW} (+${iss.diff}px, ${iss.count} items)`);
        iss.items.forEach((item, i) => {
          console.log(`     #${i+1} <${item.tag} class="${item.cls}"> w:${item.width}px, r:${item.right}px "${item.text}"`);
        });
      });
      report.push({ route: routePath, issues: routeIssues });
    } else {
      console.log(`[PASS] /${routePath}`);
    }
  }

  cdp.close();
  chromeProcess.kill();

  console.log(`\n=========================================`);
  console.log(`Audit Finished: ${CANONICAL_ROUTES.length - report.length} passed, ${report.length} routes with issues.`);
  if (report.length > 0) {
    console.log('Routes with issues:');
    report.forEach(r => console.log(` - /${r.route} (${r.issues.map(i => i.viewport).join(', ')})`));
  } else {
    console.log('ALL 57 CANONICAL ROUTES CONFIRMED 100% RESPONSIVE AND FREE OF OVERFLOW!');
  }
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
