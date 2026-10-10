import fs from 'fs';

const marketPages = [
  'IndiaMarketPage.tsx', 'DubaiMarketPage.tsx', 'UsaMarketPage.tsx',
  'AustraliaMarketPage.tsx', 'UkMarketPage.tsx', 'SingaporeMarketPage.tsx',
  'GermanyMarketPage.tsx', 'ParisMarketPage.tsx', 'SaudiArabiaMarketPage.tsx',
  'AbuDhabiMarketPage.tsx', 'NorwayMarketPage.tsx', 'IrelandMarketPage.tsx',
  'AustriaMarketPage.tsx', 'PolandMarketPage.tsx', 'SwitzerlandMarketPage.tsx',
  'NetherlandsMarketPage.tsx', 'DenmarkMarketPage.tsx', 'SwedenMarketPage.tsx',
  'BelgiumMarketPage.tsx', 'FinlandMarketPage.tsx', 'LuxembourgMarketPage.tsx'
];

for (const p of marketPages) {
  const content = fs.readFileSync('src/pages/' + p, 'utf8');
  const sections = content.match(/<section[\s\S]*?>/g) || [];
  const lines = content.split('\n');
  const sectionStarts = [];
  lines.forEach((l, idx) => {
    if (/<section/i.test(l)) {
      sectionStarts.push({ line: idx + 1, text: l.trim().slice(0, 80) });
    }
  });
  console.log('=== ' + p + ' (' + sectionStarts.length + ' sections) ===');
  sectionStarts.forEach((s, idx) => {
    console.log(`  Sec ${idx + 1} [L${s.line}]: ${s.text}`);
  });
}
