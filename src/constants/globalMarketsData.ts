export interface RelevantProject {
  id: string;
  name: string;
  tagline: string;
  category: string;
  summary: string;
  image: string;
  link: string;
  linkText: string;
}

export interface TargetMarket {
  id: string;
  slug: string;
  name: string;
  displayName: string;
  navLabel: string;
  marketType: 'country' | 'city' | 'emirate';
  country?: string;
  flag: string;
  sublabel: string;
  seoTitle: string;
  seoDescription: string;
  keywords?: string;
}

export type MarketData = TargetMarket;

export const RELEVANT_WORK_DATA: RelevantProject[] = [
  {
    id: 'myma',
    name: 'Myma Platform',
    tagline: 'Digital Product · Marketplace · Operations',
    category: 'Digital Product & Operations',
    summary: 'Architected business strategy, product workflows, intuitive UX/UI and scalable systems connecting 2,500+ home chefs and 100k+ customer interactions.',
    image: '/images/about_mayaa_solutions.webp',
    link: '/our-work',
    linkText: 'View Case Details',
  },
  {
    id: 'sems-bms',
    name: 'SEMS (Business Management System)',
    tagline: 'Business Management · CRM · Operations',
    category: 'Business Management Systems',
    summary: 'A unified business management system replacing scattered spreadsheets with centralized lead management, team coordination, task tracking and operational reporting.',
    image: '/images/service_business_growth.webp',
    link: '/business-systems',
    linkText: 'Explore Business Systems',
  },
  {
    id: 'mototrek',
    name: 'MotoTrek Platform',
    tagline: 'E-Commerce · Digital Experience · Platform',
    category: 'Digital Experience & Commerce',
    summary: 'Engineered a modern web platform and booking experience for adventure expeditions, uniting catalog management, customer bookings and digital community.',
    image: '/images/creative_page_work_thumbnail_mototrek.webp',
    link: '/websites',
    linkText: 'View Website Experience',
  },
  {
    id: 'selected-websites',
    name: 'Selected B2B Websites',
    tagline: 'Corporate · Industrial · Luxury Storefronts',
    category: 'Custom B2B Websites',
    summary: 'Engineered bespoke digital storefronts and corporate websites for manufacturing, technology and retail brands including Swaati Enterprises, Ajavu Tech, and G1 Gold.',
    image: '/images/websites/swaatienterprises.png',
    link: '/websites',
    linkText: 'View Selected Websites',
  },
];

export const TARGET_MARKETS: Record<string, TargetMarket> = {
  dubai: {
    id: 'dubai',
    slug: 'dubai',
    name: 'Dubai',
    displayName: 'Dubai',
    navLabel: 'Dubai',
    marketType: 'emirate',
    country: 'United Arab Emirates',
    flag: '/flags/ae.svg',
    sublabel: 'Emirate · UAE',
    seoTitle: 'Strategic Brand, Digital Experience & Business Systems for Dubai | Mayaa Solutions',
    seoDescription: 'Built around how Dubai businesses actually operate. Strategic brand design, high-conversion digital experiences, and personalised business management systems.',
    keywords: 'Dubai business systems, Dubai business software, custom CRM Dubai, website design Dubai, branding Dubai, Dubai architecture software, Dubai fit out systems, Mayaa Solutions Dubai',
  },

  usa: {
    id: 'usa',
    slug: 'usa',
    name: 'USA',
    displayName: 'United States',
    navLabel: 'USA',
    marketType: 'country',
    flag: '/flags/us.svg',
    sublabel: 'Country · North America',
    seoTitle: 'Brand, Digital Experiences & Business Systems for USA | Mayaa Solutions',
    seoDescription: 'Your business is moving fast. Your system should too. Mayaa builds brands, high-performing digital experiences, and personalized business management systems for growing US businesses.',
    keywords: 'business management systems USA, custom business software USA, custom CRM USA, personalized business management system USA, business automation USA, business management software USA, website design USA, web design USA, brand design USA, branding agency USA, digital experience agency USA, custom business systems USA, business software USA, Mayaa Solutions USA',
  },

  australia: {
    id: 'australia',
    slug: 'australia',
    name: 'Australia',
    displayName: 'Australia',
    navLabel: 'Australia',
    marketType: 'country',
    flag: '/flags/au.svg',
    sublabel: 'Country · Asia-Pacific',
    seoTitle: 'Brand, Digital Experiences & Business Systems for Australia | Mayaa Solutions',
    seoDescription: 'Built around how Australian businesses actually operate. Strategic brand design, high-clarity websites, and personalised business management systems for growing construction, trade, architecture, property, and professional service companies.',
    keywords: 'Australia business management systems, custom business software Australia, business management software Australia, custom CRM Australia, website design Australia, business systems Australia, digital experience Australia, construction business systems Australia, Mayaa Solutions Australia',
  },

  uk: {
    id: 'uk',
    slug: 'uk',
    name: 'UK',
    displayName: 'United Kingdom',
    navLabel: 'UK',
    marketType: 'country',
    flag: '/flags/gb.svg',
    sublabel: 'Country · Europe',
    seoTitle: 'Brand, Digital Experiences & Business Systems for the UK | Mayaa Solutions',
    seoDescription: 'Good business should feel good to deal with. Mayaa helps UK businesses bring their brand, digital experience and internal operations into better alignment with the way the business actually works.',
    keywords: 'business management systems UK, custom business software UK, custom CRM UK, bespoke software UK, business automation UK, business management software UK, custom business systems UK, website design UK, web design UK, brand design UK, branding agency UK, digital experience UK, personalised business management system UK, Mayaa Solutions UK',
  },

  singapore: {
    id: 'singapore',
    slug: 'singapore',
    name: 'Singapore',
    displayName: 'Singapore',
    navLabel: 'Singapore',
    marketType: 'country',
    flag: '/flags/sg.svg',
    sublabel: 'Country · Southeast Asia',
    seoTitle: 'Strategic Brand, Digital Experience & Business Systems for Singapore | Mayaa Solutions',
    seoDescription: 'Built for Singapore businesses that have outgrown disconnected tools. Strategic brand design, high-clarity websites, and personalised business management systems engineered for operational efficiency, integration, and management visibility.',
    keywords: 'Singapore business management systems, custom business software Singapore, business management software Singapore, custom CRM Singapore, website design Singapore, business systems Singapore, digital experience Singapore, business automation Singapore, custom software Singapore, SME software Singapore, Mayaa Solutions Singapore',
  },

  germany: {
    id: 'germany',
    slug: 'germany',
    name: 'Germany',
    displayName: 'Germany',
    navLabel: 'Germany',
    marketType: 'country',
    flag: '/flags/de.svg',
    sublabel: 'Country · Europe',
    seoTitle: 'Brand, Digital Experiences & Business Systems for Germany | Mayaa Solutions',
    seoDescription: 'Built with precision. Run with clarity. Mayaa connects brand, digital experience and business operations around how German businesses actually work.',
    keywords: 'business management systems Germany, custom business software Germany, custom CRM Germany, Mittelstand software, Mittelstand business systems, manufacturing business software Germany, engineering business software Germany, website design Germany, branding agency Germany, digital experience Germany, Mayaa Solutions Germany',
  },

  paris: {
    id: 'paris',
    slug: 'paris',
    name: 'Paris',
    displayName: 'Paris, France',
    navLabel: 'Paris',
    marketType: 'city',
    country: 'France',
    flag: '/flags/fr.svg',
    sublabel: 'City Market · France',
    seoTitle: 'Brand, Digital Experiences & Business Systems for Paris | Mayaa Solutions',
    seoDescription: 'Mayaa builds distinctive brands, digital experiences and personalised business systems for ambitious businesses in Paris. Crafted for architecture, luxury, hospitality and creative practices.',
    keywords: 'Paris business management systems, custom business software Paris, website design Paris, branding Paris, digital experience Paris, luxury business systems Paris, Mayaa Solutions Paris',
  },

  netherlands: {
    id: 'netherlands',
    slug: 'netherlands',
    name: 'Netherlands',
    displayName: 'Netherlands',
    navLabel: 'Netherlands',
    marketType: 'country',
    flag: '/flags/nl.svg',
    sublabel: 'Country · Europe',
    seoTitle: 'Business Flow, Digital Systems & Connected Operations for the Netherlands | Mayaa Solutions',
    seoDescription: 'Make business flow. Mayaa connects digital experiences and business systems for forward-thinking Dutch companies. Eliminate friction, reduce manual handoffs, and unite teams, processes, and customer touchpoints.',
    keywords: 'Netherlands business systems, Dutch digital agency, business flow software Netherlands, custom business software Netherlands, ERP CRM integration Netherlands, digital experience Netherlands, Amsterdam business software, Rotterdam business systems, Utrecht enterprise software, Eindhoven tech business systems, CBS digital maturity SME, Mayaa Solutions Netherlands',
  },

  'saudi-arabia': {
    id: 'saudi-arabia',
    slug: 'saudi-arabia',
    name: 'Saudi Arabia',
    displayName: 'Saudi Arabia',
    navLabel: 'Saudi Arabia',
    marketType: 'country',
    flag: '/flags/sa.svg',
    sublabel: 'Country · Middle East',
    seoTitle: 'Brand, Digital Experiences & Business Systems for Saudi Arabia | Mayaa Solutions',
    seoDescription: 'Built for businesses growing in Saudi Arabia. Strategic brand design, high-clarity websites, and personalised business management systems engineered for scaling operations, reputation, and management visibility.',
    keywords: 'Saudi Arabia business management systems, custom business software Saudi Arabia, business management software Saudi Arabia, custom CRM Saudi Arabia, website design Saudi Arabia, branding Saudi Arabia, digital experience Saudi Arabia, business systems Riyadh, business software Jeddah, Mayaa Solutions Saudi Arabia',
  },

  denmark: {
    id: 'denmark',
    slug: 'denmark',
    name: 'Denmark',
    displayName: 'Denmark',
    navLabel: 'Denmark',
    marketType: 'country',
    flag: '/flags/dk.svg',
    sublabel: 'Country · Scandinavia',
    seoTitle: 'Good Work. Less Unnecessary Complexity. | Mayaa Solutions Denmark',
    seoDescription: 'Thoughtful brand design, digital experiences, and personalised business management systems for Danish businesses. Engineered for clarity, employee autonomy, and operational flow across Copenhagen, Aarhus, Odense, and Aalborg.',
    keywords: 'Mayaa Solutions Denmark, business management systems Denmark, custom business software Denmark, custom CRM Denmark, business automation Denmark, website design Denmark, brand design Denmark, branding agency Denmark, digital experience Denmark, Skræddersyet software, CRM-system, Automatisering af arbejdsprocesser, Copenhagen business software, Aarhus digital agency, Odense software, Aalborg business systems',
  },

  'abu-dhabi': {
    id: 'abu-dhabi',
    slug: 'abu-dhabi',
    name: 'Abu Dhabi',
    displayName: 'Abu Dhabi, UAE',
    navLabel: 'Abu Dhabi',
    marketType: 'emirate',
    country: 'UAE',
    flag: '/flags/ae.svg',
    sublabel: 'Emirate Market · UAE',
    seoTitle: 'Brand, Digital Experiences & Business Systems for Abu Dhabi | Mayaa Solutions',
    seoDescription: 'Built for businesses where trust matters. Strategic brand design, high-clarity websites, and personalised business management systems engineered for established organisations and growing enterprises in Abu Dhabi.',
    keywords: 'Abu Dhabi business software, business management systems Abu Dhabi, custom business software Abu Dhabi, enterprise CRM Abu Dhabi, website design Abu Dhabi, branding Abu Dhabi, digital experience Abu Dhabi, custom CRM Abu Dhabi, construction business systems Abu Dhabi, architecture business systems Abu Dhabi, real estate business systems Abu Dhabi, B2B business systems Abu Dhabi, Mayaa Solutions Abu Dhabi',
  },

  sweden: {
    id: 'sweden',
    slug: 'sweden',
    name: 'Sweden',
    displayName: 'Sweden',
    navLabel: 'Sweden',
    marketType: 'country',
    flag: '/flags/se.svg',
    sublabel: 'Country · Scandinavia',
    seoTitle: 'Innovation Is Only The Beginning | Mayaa Solutions Sweden',
    seoDescription: 'Good ideas deserve better execution. Mayaa helps Swedish businesses turn the quality of what they build into stronger brands, better digital experiences, and business systems designed around how they work across Stockholm, Gothenburg, and Malmö.',
    keywords: 'Mayaa Solutions Sweden, business management systems Sweden, custom business software Sweden, custom CRM Sweden, business automation Sweden, website design Sweden, brand design Sweden, branding agency Sweden, digital experience Sweden, Skräddarsydd programvara, Affärssystem, CRM-system, Automatisering av arbetsflöden, Stockholm digital agency, Gothenburg business software, Malmo tech systems',
  },

  norway: {
    id: 'norway',
    slug: 'norway',
    name: 'Norway',
    displayName: 'Norway',
    navLabel: 'Norway',
    marketType: 'country',
    flag: '/flags/no.svg',
    sublabel: 'Country · Scandinavia',
    seoTitle: 'Brand, Digital Experiences & Business Systems for Norway | Mayaa Solutions',
    seoDescription: 'Good technology should make business simpler. Mayaa builds brands, digital experiences and personalised business systems for Norwegian businesses that value clarity, quality and sustainable growth.',
    keywords: 'Norway business systems, Norwegian businesses software, custom business software Norway, business management systems Norway, custom CRM Norway, website design Norway, branding Norway, digital experience Norway, business software Oslo, business software Bergen, business software Stavanger, construction business systems Norway, architecture business systems Norway, maritime business systems Norway, Mayaa Solutions Norway',
  },

  switzerland: {
    id: 'switzerland',
    slug: 'switzerland',
    name: 'Switzerland',
    displayName: 'Switzerland',
    navLabel: 'Switzerland',
    marketType: 'country',
    flag: '/flags/ch.svg',
    sublabel: 'Country · Europe',
    seoTitle: 'The Standard Is in the Details | Mayaa Solutions Switzerland',
    seoDescription: 'Brand design, high-clarity websites, and personalised business management systems for ambitious Swiss businesses. Built for precision engineering, life sciences, professional services, and architecture across Zurich, Basel, Geneva, and Lausanne.',
    keywords: 'Mayaa Solutions Switzerland, business management systems Switzerland, custom business software Switzerland, custom CRM Switzerland, website design Switzerland, brand design Switzerland, precision digital agency Zurich, Basel business software, Geneva B2B digital systems, Swiss SME digital solutions, KMU software Schweiz',
  },

  ireland: {
    id: 'ireland',
    slug: 'ireland',
    name: 'Ireland',
    displayName: 'Ireland',
    navLabel: 'Ireland',
    marketType: 'country',
    flag: '/flags/ie.svg',
    sublabel: 'Country · Europe',
    seoTitle: 'Brand, Digital Experiences & Business Systems for Ireland | Mayaa Solutions',
    seoDescription: 'Make the business easier to run. Mayaa builds brands, digital experiences and personalised business systems for growing businesses in Ireland that value relationships, reputation and operational clarity.',
    keywords: 'Ireland business software, Irish businesses software, custom business software Ireland, business management systems Ireland, custom CRM Ireland, website design Ireland, branding Ireland, digital experience Ireland, business software Dublin, business software Cork, business software Galway, construction business systems Ireland, architecture business systems Ireland, professional services software Ireland, B2B business systems Ireland, Mayaa Solutions Ireland',
  },

  belgium: {
    id: 'belgium',
    slug: 'belgium',
    name: 'Belgium',
    displayName: 'Belgium',
    navLabel: 'Belgium',
    marketType: 'country',
    flag: '/flags/be.svg',
    sublabel: 'Country · Europe',
    seoTitle: 'Your Business Has Many Sides. Make Them Work As One. | Mayaa Solutions Belgium',
    seoDescription: 'Brand design, high-clarity digital experiences, and personalised business management systems for Belgian businesses. Bringing brand perception, customer journeys, and internal operations into alignment across Brussels, Antwerp, Ghent, and Liège.',
    keywords: 'Mayaa Solutions Belgium, business management systems Belgium, custom business software Belgium, custom CRM Belgium, website design Belgium, brand design Belgium, B2B website design Belgium, Brussels digital agency, Antwerp logistics business software, Ghent tech systems, Belgian SME digital solutions, Statbel business digital',
  },

  austria: {
    id: 'austria',
    slug: 'austria',
    name: 'Austria',
    displayName: 'Austria',
    navLabel: 'Austria',
    marketType: 'country',
    flag: '/flags/at.svg',
    sublabel: 'Country · Europe',
    seoTitle: 'Brand, Digital Experiences & Business Systems for Austria | Mayaa Solutions',
    seoDescription: 'Quality, precision and dependable systems. Mayaa builds brands, digital experiences and personalised business management systems for established and growing businesses across Austria.',
    keywords: 'Austria business systems, Austrian businesses software, custom business software Austria, business management systems Austria, custom CRM Austria, website design Austria, branding Austria, digital experience Austria, business software Vienna, business software Linz, business software Graz, business software Salzburg, construction business systems Austria, architecture business systems Austria, manufacturing business systems Austria, Mayaa Solutions Austria',
  },

  finland: {
    id: 'finland',
    slug: 'finland',
    name: 'Finland',
    displayName: 'Finland',
    navLabel: 'Finland',
    marketType: 'country',
    flag: '/flags/fi.svg',
    sublabel: 'Country · Scandinavia',
    seoTitle: 'Less Noise. More That Works. | Mayaa Solutions Finland',
    seoDescription: 'Brand design, high-clarity digital experiences, and personalised business management systems for Finnish businesses. Helping ambitious enterprises cut through software sprawl and turn capability into commercial clarity across Helsinki, Espoo, Tampere, and Oulu.',
    keywords: 'Mayaa Solutions Finland, business management systems Finland, custom business software Finland, custom CRM Finland, website design Finland, brand design Finland, B2B software Finland, Helsinki digital agency, Espoo cleantech business software, Tampere manufacturing systems, Oulu tech systems, Tilastokeskus digital maturity, Finnish enterprise systems',
  },

  poland: {
    id: 'poland',
    slug: 'poland',
    name: 'Poland',
    displayName: 'Poland',
    navLabel: 'Poland',
    marketType: 'country',
    flag: '/flags/pl.svg',
    sublabel: 'Country · Europe',
    seoTitle: 'Brand, Digital Experiences & Business Systems for Poland | Mayaa Solutions',
    seoDescription: 'Strong business. Clearer structure. Mayaa builds brands, digital experiences and personalised business management systems for growing Polish enterprises competing domestically and internationally.',
    keywords: 'Poland business systems, Polish businesses software, custom business software Poland, business management systems Poland, custom CRM Poland, website design Poland, branding Poland, digital experience Poland, business software Warsaw, business software Kraków, business software Wrocław, business software Poznań, business software Gdańsk, business software Katowice, manufacturing business systems Poland, engineering business systems Poland, Mayaa Solutions Poland',
  },

  luxembourg: {
    id: 'luxembourg',
    slug: 'luxembourg',
    name: 'Luxembourg',
    displayName: 'Luxembourg',
    navLabel: 'Luxembourg',
    marketType: 'country',
    flag: '/flags/lu.svg',
    sublabel: 'Country · Europe',
    seoTitle: 'Local Presence. International Perspective. | Mayaa Solutions Luxembourg',
    seoDescription: 'Brand design, high-clarity digital experiences, and personalised business management systems for Luxembourg businesses. Helping enterprises turn local capability into wider commercial reach across Luxembourg City, Kirchberg, Belval, and Europe.',
    keywords: 'Mayaa Solutions Luxembourg, brand design Luxembourg, website design Luxembourg, business management systems Luxembourg, custom business software Luxembourg, B2B website design Luxembourg, digital agency Luxembourg, workflow software Luxembourg, Luxembourg SME software, Kirchberg business systems, STATEC Luxembourg enterprise, Greater Region business systems',
  },
};

// Aliases for safe property indexing
TARGET_MARKETS.uae = TARGET_MARKETS.dubai;
TARGET_MARKETS.saudi_arabia = TARGET_MARKETS['saudi-arabia'];
TARGET_MARKETS.abu_dhabi = TARGET_MARKETS['abu-dhabi'];

// The exact 20 Target Markets in specified order
export const TARGET_MARKETS_LIST: TargetMarket[] = [
  TARGET_MARKETS.dubai,
  TARGET_MARKETS.usa,
  TARGET_MARKETS.australia,
  TARGET_MARKETS.uk,
  TARGET_MARKETS.singapore,
  TARGET_MARKETS.germany,
  TARGET_MARKETS.paris,
  TARGET_MARKETS.netherlands,
  TARGET_MARKETS['saudi-arabia'],
  TARGET_MARKETS.denmark,
  TARGET_MARKETS['abu-dhabi'],
  TARGET_MARKETS.sweden,
  TARGET_MARKETS.norway,
  TARGET_MARKETS.switzerland,
  TARGET_MARKETS.ireland,
  TARGET_MARKETS.belgium,
  TARGET_MARKETS.austria,
  TARGET_MARKETS.finland,
  TARGET_MARKETS.poland,
  TARGET_MARKETS.luxembourg,
];

// Compatibility alias for COUNTRIES_LIST
export const COUNTRIES_LIST = TARGET_MARKETS_LIST;
export const GLOBAL_MARKETS_DATA = TARGET_MARKETS as any;
