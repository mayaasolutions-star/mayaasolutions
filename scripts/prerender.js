import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CANONICAL_ROUTES } from './generate-sitemap.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, '..', 'dist');

// Baseline verified Organization & WebSite schemas
const BASE_URL = 'https://mayaasolutions.in';

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Mayaa Solutions',
  legalName: 'Mayaa Solutions',
  url: `${BASE_URL}/`,
  logo: `${BASE_URL}/images/favicon-32x32.png`,
  description: 'Enterprise brand strategy, bespoke high-performance websites, and custom business management systems.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bangalore Headquarters',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    postalCode: '560001',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Customer Support & Inquiries',
      email: 'contact@mayaasolutions.in',
      availableLanguage: ['English', 'Hindi', 'Kannada'],
    },
  ],
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: `${BASE_URL}/`,
  name: 'Mayaa Solutions',
  publisher: {
    '@id': `${BASE_URL}/#organization`,
  },
};

const PROFESSIONAL_SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${BASE_URL}/#professionalservice`,
  name: 'Mayaa Solutions',
  url: `${BASE_URL}/`,
  image: `${BASE_URL}/images/og-image.jpg`,
  description: 'High-performance web development, brand identity design, and custom business management systems.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '12.9716',
    longitude: '77.5946',
  },
  priceRange: '₹₹₹',
};

function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.urlPath.startsWith('http') ? item.urlPath : `${BASE_URL}${item.urlPath.startsWith('/') ? item.urlPath : `/${item.urlPath}`}`,
    })),
  };
}

function getServiceSchema({ id, name, description, serviceType, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/#service-${id}`,
    name,
    description,
    serviceType,
    url,
    provider: {
      '@id': `${BASE_URL}/#organization`,
    },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'AdministrativeArea', name: 'Global' },
    ],
  };
}

// Route metadata dictionary
const ROUTE_METADATA = {
  '': {
    title: 'Mayaa Solutions | Strategic Brand, Digital Experiences & Business Systems',
    description: 'Bespoke brand building, high-converting website design, and custom business management systems engineered for ambitious businesses in India and global markets.',
    ogImage: '/images/og-image.jpg',
    schemas: [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, PROFESSIONAL_SERVICE_SCHEMA],
  },
  'brand': {
    title: 'Brand Strategy, Identity & Positioning | Mayaa Solutions',
    description: 'Transform your business into an authoritative brand. Research-driven visual systems, distinct positioning, brand architecture, and messaging manuals built to endure.',
    ogImage: '/images/og-image.jpg',
    schemas: [
      getServiceSchema({
        id: 'brand-strategy',
        name: 'Brand Strategy & Identity Design',
        description: 'Comprehensive brand positioning, identity frameworks, style manuals, and corporate asset packages.',
        serviceType: 'Branding & Design',
        url: `${BASE_URL}/brand`,
      }),
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Brand', urlPath: '/brand' },
      ]),
    ],
  },
  'websites': {
    title: 'High-Performance Websites & Digital Experiences | Mayaa Solutions',
    description: 'Bespoke digital headquarters engineered for conversions. React architectures, sub-second load times, fluid micro-interactions, and conversion-optimized UX.',
    ogImage: '/images/og-image.jpg',
    schemas: [
      getServiceSchema({
        id: 'web-development',
        name: 'High-Performance Website Development',
        description: 'Bespoke web platforms built with React, Tailwind CSS, and headless architectures with sub-second speeds.',
        serviceType: 'Web Development',
        url: `${BASE_URL}/websites`,
      }),
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Websites', urlPath: '/websites' },
      ]),
    ],
  },
  'business-systems': {
    title: 'Custom Business Management Systems & CRM | Mayaa Solutions',
    description: 'Replace spreadsheets and rigid SaaS with software tailored to your workflows. Unified pipelines, role-based access, automated notifications, and real-time operational analytics.',
    ogImage: '/images/og-image.jpg',
    schemas: [
      getServiceSchema({
        id: 'business-systems',
        name: 'Custom Business Management Systems (BMS / CRM)',
        description: 'Bespoke operational ERP, CRM, and automation software designed around company-specific workflows.',
        serviceType: 'Software Development',
        url: `${BASE_URL}/business-systems`,
      }),
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Business Systems', urlPath: '/business-systems' },
      ]),
    ],
  },
  'services': {
    title: 'End-to-End Capabilities & Engineering Services | Mayaa Solutions',
    description: 'Discover Mayaa Solutions capabilities spanning brand strategy, digital experience engineering, custom business software, and enterprise growth advisory.',
    ogImage: '/images/og-image.jpg',
    schemas: [
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Services', urlPath: '/services' },
      ]),
    ],
  },
  'services/marketing': {
    title: 'Performance Growth & Digital Marketing Advisory | Mayaa Solutions',
    description: 'Strategic customer acquisition, retention mechanics, conversion rate optimization, and multi-channel marketing campaigns.',
    ogImage: '/images/og-image.jpg',
    schemas: [
      getServiceSchema({
        id: 'services-marketing',
        name: 'Digital Growth & Acquisition Advisory',
        description: 'Data-driven customer acquisition, conversion optimization, and strategic performance marketing.',
        serviceType: 'Growth Marketing',
        url: `${BASE_URL}/services/marketing`,
      }),
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Services', urlPath: '/services' },
        { name: 'Marketing & Growth', urlPath: '/services/marketing' },
      ]),
    ],
  },
  'services/growth': {
    title: 'Business Scale & Commercial Growth Architecture | Mayaa Solutions',
    description: 'Scale business operations with precision. Unified customer funnels, retention architectures, and strategic advisory for scaling businesses.',
    ogImage: '/images/og-image.jpg',
    schemas: [
      getServiceSchema({
        id: 'services-growth',
        name: 'Commercial Growth Architecture',
        description: 'Operational scaling advisory, pipeline acceleration, and enterprise digital transformation.',
        serviceType: 'Business Growth Advisory',
        url: `${BASE_URL}/services/growth`,
      }),
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Services', urlPath: '/services' },
        { name: 'Growth', urlPath: '/services/growth' },
      ]),
    ],
  },
  'services/ai-video-content': {
    title: 'AI Video & Visual Content for Brands | Mayaa Solutions',
    description: 'Explore AI-powered advertising films and visual content for real estate, architecture, interiors, hospitality, fashion, jewellery and product brands.',
    ogImage: '/images/og-image.jpg',
    schemas: [
      getServiceSchema({
        id: 'services-ai-video-content',
        name: 'AI Video & Visual Content Creation',
        description: 'AI-powered advertising films and visual content crafted for brands that want to stand apart. High-impact commercial films for architecture, real estate, hospitality, fashion, jewellery, and luxury products.',
        serviceType: 'Visual Production & AI Film Direction',
        url: `${BASE_URL}/services/ai-video-content`,
      }),
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Services', urlPath: '/services' },
        { name: 'AI Video & Visual Content', urlPath: '/services/ai-video-content' },
      ]),
    ],
  },
  'industries': {
    title: 'Tailored Industry Solutions & Workflows | Mayaa Solutions',
    description: 'Specialized digital infrastructure, branding, and management systems engineered for manufacturing, healthcare, professional services, retail, and real estate.',
    ogImage: '/images/og-image.jpg',
    schemas: [
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Industries', urlPath: '/industries' },
      ]),
    ],
  },
  'our-work': {
    title: 'Selected Client Case Studies & Portfolio | Mayaa Solutions',
    description: 'Explore our track record of custom business management software, high-conversion web platforms, and brand design projects for ambitious clients.',
    ogImage: '/images/og-image.jpg',
    schemas: [
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Our Work', urlPath: '/our-work' },
      ]),
    ],
  },
  'global-markets': {
    title: 'Global Markets Directory | Mayaa Solutions International Reach',
    description: 'Mayaa Solutions serves businesses across India and 20 major international commercial hubs with tailored software, brand strategy, and high-performance websites.',
    ogImage: '/images/og-image.jpg',
    schemas: [
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Global Markets', urlPath: '/global-markets' },
      ]),
    ],
  },
  'about': {
    title: 'About Mayaa Solutions | Company, Philosophy & Engineering Standards',
    description: 'Learn about Mayaa Solutions: our mission to eliminate operational friction, build meaningful brands, and engineer durable software for businesses in India and globally.',
    ogImage: '/images/og-image.jpg',
    schemas: [
      ORGANIZATION_SCHEMA,
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'About', urlPath: '/about' },
      ]),
    ],
  },
  'contact': {
    title: 'Contact Mayaa Solutions | Project Consultation & Enterprise Inquiries',
    description: 'Get in touch with the Mayaa Solutions team in Bangalore, India. Discuss your brand, web platform, or custom business management system project with our specialists.',
    ogImage: '/images/og-image.jpg',
    schemas: [
      ORGANIZATION_SCHEMA,
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Contact', urlPath: '/contact' },
      ]),
    ],
  },
  'terms-conditions': {
    title: 'Terms and Conditions | Mayaa Solutions',
    description: 'Read the terms and conditions, client engagement policies, and legal framework governing Mayaa Solutions products, advisory, and engineering services.',
    ogImage: '/images/og-image.jpg',
    schemas: [
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Terms and Conditions', urlPath: '/terms-conditions' },
      ]),
    ],
  },
  'insights': {
    title: 'Insights & Architectural Frameworks | Mayaa Solutions',
    description: 'In-depth perspectives, architectural frameworks, and strategic guides on brand positioning, custom CRM design, and B2B web performance.',
    ogImage: '/images/og-image.jpg',
    schemas: [
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Insights', urlPath: '/insights' },
      ]),
    ],
  },
  'products': {
    title: 'Software Solutions & Starter Frameworks | Mayaa Solutions',
    description: 'Explore modular business software foundations, workflow accelerators, and strategic branding toolkits created by Mayaa Solutions.',
    ogImage: '/images/og-image.jpg',
    schemas: [
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Products', urlPath: '/products' },
      ]),
    ],
  },
};

// Country Markets
const MARKETS_LIST = [
  { slug: 'india', name: 'India (Bharat)', title: 'India (Bharat) | Brand Building, Websites & Custom Business Systems | Mayaa Solutions', desc: 'Mayaa Solutions helps businesses across India build distinctive brands, professional digital experiences, and custom operational software designed for sustainable growth.' },
  { slug: 'uae', name: 'UAE', title: 'Business Management Systems & Digital Solutions UAE | Mayaa Solutions', desc: 'Mayaa Solutions helps businesses across the UAE build stronger brands, high-clarity digital experiences, and custom business management systems. Serving companies in Dubai, Abu Dhabi, and across the Emirates.' },
  { slug: 'usa', name: 'United States', title: 'Brand, Digital Experiences & Business Systems for USA | Mayaa Solutions', desc: 'Your business is moving fast. Your system should too. Mayaa builds brands, high-performing digital experiences, and personalized business management systems for growing US businesses.' },
  { slug: 'australia', name: 'Australia', title: 'Brand, Digital Experiences & Business Systems for Australia | Mayaa Solutions', desc: 'Built around how Australian businesses actually operate. Strategic brand design, high-clarity websites, and personalised business management systems.' },
  { slug: 'uk', name: 'United Kingdom', title: 'Brand, Digital Experiences & Business Systems for the UK | Mayaa Solutions', desc: 'Good business should feel good to deal with. Mayaa helps UK businesses bring their brand, digital experience and internal operations into better alignment.' },
  { slug: 'singapore', name: 'Singapore', title: 'Strategic Brand, Digital Experience & Business Systems for Singapore | Mayaa Solutions', desc: 'Built for Singapore businesses that have outgrown disconnected tools. Strategic brand design, high-clarity websites, and personalised business management systems.' },
  { slug: 'germany', name: 'Germany', title: 'Brand, Digital Experiences & Business Systems for Germany | Mayaa Solutions', desc: 'Precision in design. Reliability in code. Mayaa builds brands, digital experiences and personalised business management systems for ambitious German enterprises.' },
  { slug: 'paris', name: 'Paris', title: 'Brand, Digital Experiences & Business Systems for Paris | Mayaa Solutions', desc: 'Mayaa builds distinctive brands, digital experiences and personalised business systems for ambitious businesses in Paris. Crafted for architecture, luxury, and creative practices.' },
  { slug: 'netherlands', name: 'Netherlands', title: 'Brand, Digital Experiences & Business Systems for the Netherlands | Mayaa Solutions', desc: 'Built for practical innovation. Mayaa designs distinctive brands, digital experiences and personalised business systems for Dutch companies.' },
  { slug: 'saudi-arabia', name: 'Saudi Arabia', title: 'Brand, Digital Experiences & Business Systems for Saudi Arabia | Mayaa Solutions', desc: 'Built for businesses growing in Saudi Arabia. Strategic brand design, high-clarity websites, and personalised business management systems.' },
  { slug: 'denmark', name: 'Denmark', title: 'Denmark | Strategic Brand, Digital Experiences & Business Systems | Mayaa Solutions', desc: 'Clarity, functionality, and calm design. Mayaa builds brands, digital experiences and personalised business management systems for Danish businesses.' },
  { slug: 'sweden', name: 'Sweden', title: 'Sweden | Strategic Brand, Digital Experiences & Business Systems | Mayaa Solutions', desc: 'Good ideas deserve better execution. Mayaa helps Swedish businesses turn quality into stronger brands, better digital experiences, and tailored business systems.' },
  { slug: 'norway', name: 'Norway', title: 'Brand, Digital Experiences & Business Systems for Norway | Mayaa Solutions', desc: 'Good technology should make business simpler. Mayaa builds brands, digital experiences and personalised business systems for Norwegian businesses.' },
  { slug: 'switzerland', name: 'Switzerland', title: 'Switzerland | Strategic Brand, Digital Experiences & Business Systems | Mayaa Solutions', desc: 'Brand design, high-clarity websites, and personalised business management systems for ambitious Swiss businesses. Built for precision engineering and services.' },
  { slug: 'ireland', name: 'Ireland', title: 'Brand, Digital Experiences & Business Systems for Ireland | Mayaa Solutions', desc: 'Growing businesses need systems that can keep up. Mayaa builds brands, digital experiences and personalised business systems for Irish enterprises.' },
  { slug: 'belgium', name: 'Belgium', title: 'Belgium | Strategic Brand, Digital Experiences & Business Systems | Mayaa Solutions', desc: 'Bespoke brand design, high-clarity web platforms, and tailored business management software for Belgian enterprises.' },
  { slug: 'austria', name: 'Austria', title: 'Brand, Digital Experiences & Business Systems for Austria | Mayaa Solutions', desc: 'Quality, structure, and digital clarity. Mayaa builds brands, digital experiences and personalised business systems for Austrian enterprises.' },
  { slug: 'finland', name: 'Finland', title: 'Finland | Strategic Brand, Digital Experiences & Business Systems | Mayaa Solutions', desc: 'Built for clarity and efficiency. Mayaa designs brands, digital experiences and personalised business systems for Finnish businesses.' },
  { slug: 'poland', name: 'Poland', title: 'Brand, Digital Experiences & Business Systems for Poland | Mayaa Solutions', desc: 'Strong business. Clearer structure. Mayaa builds brands, digital experiences and personalised business management systems for growing Polish enterprises.' },
  { slug: 'luxembourg', name: 'Luxembourg', title: 'Luxembourg | Strategic Brand, Digital Experiences & Business Systems | Mayaa Solutions', desc: 'Sophisticated digital systems for Luxembourg financial services, legal practices, and specialist enterprises.' },
];

for (const m of MARKETS_LIST) {
  ROUTE_METADATA[`global-markets/${m.slug}`] = {
    title: m.title,
    description: m.desc,
    ogImage: '/images/og-image.jpg',
    schemas: [
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Global Markets', urlPath: '/global-markets' },
        { name: m.name, urlPath: `/global-markets/${m.slug}` },
      ]),
    ],
  };
}

// 5 Dedicated Intent Routes
const INTENT_ROUTES = [
  { slug: 'build-my-brand', title: 'Build My Brand | Bespoke Brand Strategy Package', desc: 'Complete brand building package by Mayaa Solutions. Positioning, visual identity, and brand guidelines for ambitious businesses.' },
  { slug: 'build-my-website', title: 'Build My Website | Custom High-Performance Web Design', desc: 'Bespoke website design & development package by Mayaa Solutions. High-converting React web platforms built for performance.' },
  { slug: 'design-my-logo', title: 'Design My Logo | Premium Logo Identity Design', desc: 'Professional logo design and visual mark creation by Mayaa Solutions.' },
  { slug: 'make-my-brand-premium', title: 'Make Brand Premium | Luxury Brand Elevation Package', desc: 'Elevate your brand aesthetic and market positioning with Mayaa Solutions.' },
  { slug: 'name-my-business', title: 'Name My Business | Strategic Naming & Brand Tagline Package', desc: 'Strategic business naming, domain availability verification, and tagline architecture by Mayaa Solutions.' },
];

for (const i of INTENT_ROUTES) {
  ROUTE_METADATA[`intent/${i.slug}`] = {
    title: `${i.title} | Mayaa Solutions`,
    description: i.desc,
    ogImage: '/images/og-image.jpg',
    schemas: [
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Services', urlPath: '/services' },
        { name: i.title.split('|')[0].trim(), urlPath: `/intent/${i.slug}` },
      ]),
    ],
  };
}

// 3 Insights Articles
const ARTICLE_ROUTES = [
  { slug: 'before-you-build-a-brand', title: 'Before You Build a Brand | Mayaa Solutions Insights', desc: 'The strategic mindset required before designing a single logo. Brand positioning, audience clarity, and core value propositions.' },
  { slug: 'before-you-design', title: 'Before You Design a Website | Mayaa Solutions Insights', desc: 'Why user experience and conversion paths matter more than visual trends. Planning website architecture before coding.' },
  { slug: 'pm-behind-the-interview', title: 'Behind Product Leadership | Mayaa Solutions Insights', desc: 'Practical frameworks for product growth, structuring product decisions, and measuring real success metrics.' },
];

for (const a of ARTICLE_ROUTES) {
  ROUTE_METADATA[`insights/${a.slug}`] = {
    title: a.title,
    description: a.desc,
    ogImage: '/images/og-image.jpg',
    schemas: [
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Insights', urlPath: '/insights' },
        { name: a.title.split('|')[0].trim(), urlPath: `/insights/${a.slug}` },
      ]),
    ],
  };
}

// 13 Products
const PRODUCT_ROUTES = [
  { slug: 'build-my-brand', title: 'Build My Brand | Starter Brand Concept Service | Mayaa Solutions', desc: 'Experience 3 personalized brand concepts created for your business in 72 hours. Fee credited toward complete branding.' },
  { slug: 'build-my-website', title: 'Build My Website | Starter Website Demo | Mayaa Solutions', desc: 'Get a personalized homepage demo within 24 hours. Fee credited toward full website development.' },
  { slug: 'design-my-logo', title: 'Design My Logo | 3 Original Logo Concepts | Mayaa Solutions', desc: '3 original logo concepts designed for your business within 24 hours with full commercial vector files.' },
  { slug: 'make-my-brand-premium', title: 'Make My Brand Premium | Visual Elevation Report | Mayaa Solutions', desc: 'Personalized brand makeover report with 2 design directions, color updates, and elevation guidance.' },
  { slug: 'name-my-business', title: 'Name My Business | Strategic Business Naming | Mayaa Solutions', desc: '3 personalized business name ideas with domain availability verification and trademark screening.' },
  { slug: 'before-you-publish', title: 'Before You Publish | Professional Review Guide | Mayaa Solutions', desc: 'Comprehensive digital publication and launch verification checklist for founders and creators.' },
  { slug: 'before-you-design', title: 'Before You Design | UX & Design System Blueprint | Mayaa Solutions', desc: 'Core UX wireframing and design preparation manual to prevent costly redesigns.' },
  { slug: 'before-you-prompt', title: 'Before You Prompt | AI Workflow & Prompting Architecture | Mayaa Solutions', desc: 'Strategic prompt engineering frameworks to generate high-quality business assets with AI.' },
  { slug: 'before-you-build-a-brand', title: 'Before You Build a Brand | Diagnostic Guidebook | Mayaa Solutions', desc: 'Strategic brand building guidebook on positioning, market differentiation, and brand manuals.' },
  { slug: 'before-you-build-a-crm', title: 'Before You Build a CRM | System Architecture Framework | Mayaa Solutions', desc: 'Bespoke business management and CRM architecture guide on defining operational pipelines.' },
  { slug: 'before-you-market', title: 'Before You Market | Demand Generation Blueprint | Mayaa Solutions', desc: 'Foundational marketing and customer acquisition playbook for emerging businesses.' },
  { slug: 'pm-interview-guide', title: 'Product Management Career & Interview Guidebook | Mayaa Solutions', desc: 'Strategic frameworks for product management interviews, product teardowns, and execution strategy.' },
  { slug: 'system-design-interview-guide', title: 'System Design Architecture & Technical Guidebook | Mayaa Solutions', desc: 'High-level system design patterns, distributed databases, and architectural trade-offs.' },
];

for (const p of PRODUCT_ROUTES) {
  ROUTE_METADATA[`products/${p.slug}`] = {
    title: p.title,
    description: p.desc,
    ogImage: '/images/og-image.jpg',
    schemas: [
      getBreadcrumbSchema([
        { name: 'Home', urlPath: '/' },
        { name: 'Products', urlPath: '/products' },
        { name: p.title.split('|')[0].trim(), urlPath: `/products/${p.slug}` },
      ]),
    ],
  };
}

export function prerender() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf8');

  let generatedCount = 0;

  for (const item of CANONICAL_ROUTES) {
    const routePath = item.path;
    const meta = ROUTE_METADATA[routePath] || {
      title: 'Mayaa Solutions | Strategic Brand, Digital Experiences & Business Systems',
      description: 'Bespoke brand building, high-converting website design, and custom business management systems.',
      ogImage: '/images/og-image.jpg',
      schemas: [],
    };

    const canonicalUrl = routePath ? `${BASE_URL}/${routePath}` : `${BASE_URL}/`;
    const ogImage = meta.ogImage.startsWith('http') ? meta.ogImage : `${BASE_URL}${meta.ogImage}`;

    let html = baseHtml
      .replace(/\r{2,}\n/g, '\r\n')
      .replace(/^[ \t]+$/gm, '');

    // Replace Title
    html = html.replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`);

    // Replace Meta Description
    html = html.replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${meta.description}" />`);

    // Replace Open Graph Tags
    html = html.replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${canonicalUrl}" />`);
    html = html.replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${meta.title}" />`);
    html = html.replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${meta.description}" />`);
    html = html.replace(/<meta property="og:image" content=".*?" \/>/s, `<meta property="og:image" content="${ogImage}" />`);

    // Prepare Head Injection: Canonical Link & JSON-LD Scripts
    const schemaScripts = (meta.schemas || [])
      .map(s => `    <script type="application/ld+json">${JSON.stringify(s)}</script>`)
      .join('\n');

    const injection = `    <link rel="canonical" href="${canonicalUrl}" />\n${schemaScripts}\n  </head>`;
    html = html.replace('</head>', injection);

    if (!routePath) {
      // Overwrite dist/index.html for root
      fs.writeFileSync(templatePath, html, 'utf8');
      generatedCount++;
    } else {
      const targetDir = path.join(distDir, routePath);
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
      generatedCount++;
    }
  }

  // Generate permanent redirect entrypoints for deprecated Dubai and Abu Dhabi pages -> /global-markets/uae
  const deprecatedRoutes = [
    { from: 'dubai', message: 'The Dubai market page has been consolidated into our UAE country page.' },
    { from: 'abu-dhabi', message: 'The Abu Dhabi market has been consolidated into our UAE country page.' },
  ];

  for (const dep of deprecatedRoutes) {
    const redirectTargetDir = path.join(distDir, 'global-markets', dep.from);
    fs.mkdirSync(redirectTargetDir, { recursive: true });
    const redirectHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting to UAE Market | Mayaa Solutions</title>
    <meta http-equiv="refresh" content="0; url=/global-markets/uae" />
    <link rel="canonical" href="${BASE_URL}/global-markets/uae" />
    <script type="text/javascript">
      window.location.replace('/global-markets/uae');
    </script>
  </head>
  <body>
    <p>${dep.message} Redirecting to <a href="/global-markets/uae">/global-markets/uae</a>...</p>
  </body>
</html>`;
    fs.writeFileSync(path.join(redirectTargetDir, 'index.html'), redirectHtml, 'utf8');
  }

  console.log(`Prerendering complete! Generated ${generatedCount} static HTML entrypoints in dist/ (plus ${deprecatedRoutes.length} redirect entrypoints)`);
}

prerender();
