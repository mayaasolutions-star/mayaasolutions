import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const markets = [
  { file: 'AbuDhabiMarketPage.tsx', slug: 'abu-dhabi', name: 'Abu Dhabi' },
  { file: 'AustraliaMarketPage.tsx', slug: 'australia', name: 'Australia' },
  { file: 'AustriaMarketPage.tsx', slug: 'austria', name: 'Austria' },
  { file: 'BelgiumMarketPage.tsx', slug: 'belgium', name: 'Belgium' },
  { file: 'DenmarkMarketPage.tsx', slug: 'denmark', name: 'Denmark' },
  { file: 'DubaiMarketPage.tsx', slug: 'dubai', name: 'Dubai' },
  { file: 'FinlandMarketPage.tsx', slug: 'finland', name: 'Finland' },
  { file: 'GermanyMarketPage.tsx', slug: 'germany', name: 'Germany' },
  { file: 'IrelandMarketPage.tsx', slug: 'ireland', name: 'Ireland' },
  { file: 'LuxembourgMarketPage.tsx', slug: 'luxembourg', name: 'Luxembourg' },
  { file: 'NetherlandsMarketPage.tsx', slug: 'netherlands', name: 'Netherlands' },
  { file: 'NorwayMarketPage.tsx', slug: 'norway', name: 'Norway' },
  { file: 'ParisMarketPage.tsx', slug: 'paris', name: 'Paris' },
  { file: 'PolandMarketPage.tsx', slug: 'poland', name: 'Poland' },
  { file: 'SaudiArabiaMarketPage.tsx', slug: 'saudi-arabia', name: 'Saudi Arabia' },
  { file: 'SingaporeMarketPage.tsx', slug: 'singapore', name: 'Singapore' },
  { file: 'SwedenMarketPage.tsx', slug: 'sweden', name: 'Sweden' },
  { file: 'SwitzerlandMarketPage.tsx', slug: 'switzerland', name: 'Switzerland' },
  { file: 'UkMarketPage.tsx', slug: 'uk', name: 'United Kingdom' },
  { file: 'UsaMarketPage.tsx', slug: 'usa', name: 'United States' },
];

for (const m of markets) {
  const filePath = path.join(__dirname, '..', 'src', 'pages', m.file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Add getBreadcrumbSchema import if missing
  if (!content.includes('getBreadcrumbSchema')) {
    content = content.replace(
      "import { SEO } from '../components/SEO';",
      "import { SEO } from '../components/SEO';\nimport { getBreadcrumbSchema } from '../utils/seoMetadata';"
    );
  }

  // 2. Add canonicalUrl and schema to <SEO ... />
  const canonicalUrl = `https://mayaasolutions.in/global-markets/${m.slug}`;
  const schemaSnippet = `        canonicalUrl="${canonicalUrl}"\n        schema={[\n          getBreadcrumbSchema([\n            { name: 'Home', urlPath: '/' },\n            { name: 'Global Markets', urlPath: '/global-markets' },\n            { name: '${m.name}', urlPath: '/global-markets/${m.slug}' },\n          ]),\n        ]}\n      />`;

  // Replace closing '/>' of SEO tag
  const seoStart = content.indexOf('<SEO');
  if (seoStart !== -1) {
    const seoEnd = content.indexOf('/>', seoStart);
    if (seoEnd !== -1 && !content.includes(`canonicalUrl="${canonicalUrl}"`)) {
      // Find the last line before '/>'
      const beforeClose = content.slice(seoStart, seoEnd);
      content = content.slice(0, seoStart) + beforeClose + schemaSnippet.trimStart() + content.slice(seoEnd + 2);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${m.file} with canonical and breadcrumb schema`);
    } else {
      console.log(`Skipped ${m.file} (already updated or pattern mismatch)`);
    }
  } else {
    console.error(`ERROR: <SEO not found in ${m.file}`);
  }
}
