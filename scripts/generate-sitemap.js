import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const CANONICAL_ROUTES = [
  // Core & Capabilities
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: 'brand', changefreq: 'monthly', priority: '0.9' },
  { path: 'websites', changefreq: 'monthly', priority: '0.9' },
  { path: 'business-systems', changefreq: 'monthly', priority: '0.9' },

  // Services Directory & Category Pages
  { path: 'services', changefreq: 'weekly', priority: '0.8' },
  { path: 'services/marketing', changefreq: 'monthly', priority: '0.8' },
  { path: 'services/growth', changefreq: 'monthly', priority: '0.8' },
  { path: 'services/ai-video-content', changefreq: 'monthly', priority: '0.8' },

  // Intent Specific Landing Pages
  { path: 'intent/build-my-brand', changefreq: 'monthly', priority: '0.7' },
  { path: 'intent/build-my-website', changefreq: 'monthly', priority: '0.7' },
  { path: 'intent/design-my-logo', changefreq: 'monthly', priority: '0.7' },
  { path: 'intent/make-my-brand-premium', changefreq: 'monthly', priority: '0.7' },
  { path: 'intent/name-my-business', changefreq: 'monthly', priority: '0.7' },

  // Industries & Portfolio
  { path: 'industries', changefreq: 'monthly', priority: '0.8' },
  { path: 'our-work', changefreq: 'monthly', priority: '0.8' },

  // Global Markets Hub & Country/City Specific Pages
  { path: 'global-markets', changefreq: 'weekly', priority: '0.9' },
  { path: 'global-markets/india', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/uae', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/usa', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/australia', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/uk', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/singapore', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/germany', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/paris', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/netherlands', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/saudi-arabia', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/denmark', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/sweden', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/norway', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/switzerland', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/ireland', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/belgium', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/austria', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/finland', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/poland', changefreq: 'monthly', priority: '0.85' },
  { path: 'global-markets/luxembourg', changefreq: 'monthly', priority: '0.85' },

  // Company & Contact & Legal
  { path: 'about', changefreq: 'monthly', priority: '0.8' },
  { path: 'contact', changefreq: 'monthly', priority: '0.8' },
  { path: 'terms-conditions', changefreq: 'yearly', priority: '0.3' },

  // Insights Hub & Articles
  { path: 'insights', changefreq: 'weekly', priority: '0.8' },
  { path: 'insights/before-you-build-a-brand', changefreq: 'monthly', priority: '0.75' },
  { path: 'insights/before-you-design', changefreq: 'monthly', priority: '0.75' },
  { path: 'insights/pm-behind-the-interview', changefreq: 'monthly', priority: '0.75' },

  // Products Hub & 13 Starter Packages / Digital Guides
  { path: 'products', changefreq: 'weekly', priority: '0.8' },
  { path: 'products/build-my-brand', changefreq: 'monthly', priority: '0.7' },
  { path: 'products/build-my-website', changefreq: 'monthly', priority: '0.7' },
  { path: 'products/design-my-logo', changefreq: 'monthly', priority: '0.7' },
  { path: 'products/make-my-brand-premium', changefreq: 'monthly', priority: '0.7' },
  { path: 'products/name-my-business', changefreq: 'monthly', priority: '0.7' },
  { path: 'products/before-you-publish', changefreq: 'monthly', priority: '0.7' },
  { path: 'products/before-you-design', changefreq: 'monthly', priority: '0.7' },
  { path: 'products/before-you-prompt', changefreq: 'monthly', priority: '0.7' },
  { path: 'products/before-you-build-a-brand', changefreq: 'monthly', priority: '0.7' },
  { path: 'products/before-you-build-a-crm', changefreq: 'monthly', priority: '0.7' },
  { path: 'products/before-you-market', changefreq: 'monthly', priority: '0.7' },
  { path: 'products/pm-interview-guide', changefreq: 'monthly', priority: '0.7' },
  { path: 'products/system-design-interview-guide', changefreq: 'monthly', priority: '0.7' },
];

export function generateSitemap() {
  const baseUrl = 'https://mayaasolutions.in';
  const lastmod = new Date().toISOString().split('T')[0];

  const xmlUrls = CANONICAL_ROUTES.map(item => {
    const loc = item.path ? `${baseUrl}/${item.path}` : `${baseUrl}/`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`;
  }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;

  const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(outPath, sitemapXml, 'utf8');
  console.log(`Generated sitemap with ${CANONICAL_ROUTES.length} canonical URLs at ${outPath}`);
}

generateSitemap();
