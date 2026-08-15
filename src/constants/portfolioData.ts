export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categorySlug: 'branding' | 'website' | 'marketing' | 'growth' | 'product';
  client: string;
  year: string;
  image: string; // Must be logo thumbnail webp
  cardType?: 'hero' | 'landscape' | 'portrait' | 'square';
  summary: string;
  overview?: string;
  problem?: string;
  solution?: string;
  deliverables?: string[];
  galleryImages?: string[];
  metrics?: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; title: string };
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'ajavu',
    title: 'Ajavu Tech',
    category: 'Brand Building • Website Design • Growth',
    categorySlug: 'branding',
    client: 'Ajavu Organics & Tech',
    year: '2025',
    image: '/images/creative_page_work_thumbnail_ajavu.webp',
    cardType: 'landscape',
    summary: 'Built Ajavu from the ground up by defining business strategy, brand identity, digital experience, website, marketing communication, and product direction.',
    overview: 'Ajavu required a comprehensive brand system and digital ecosystem to position itself as a trusted leader in organic products and tech solutions.',
    problem: 'Existing digital touchpoints lacked consistency, leading to fragmented customer perceptions and low conversion rates.',
    solution: 'Engineered a unified brand identity, high-converting digital storefront, and integrated marketing campaign strategy.',
    deliverables: ['Brand Architecture & Guidelines', 'E-Commerce Website & UI/UX', 'Product Packaging Strategy', 'Digital Marketing Campaigns'],
    metrics: [
      { label: 'Growth Velocity', value: '+240%' },
      { label: 'Brand Recall', value: '88%' }
    ],
    galleryImages: ['/images/creative_page_work_thumbnail_ajavu.webp']
  },
  {
    id: 'mototrek',
    title: 'MotoTrek',
    category: 'Website Design • Brand Identity',
    categorySlug: 'website',
    client: 'MotoTrek Motorcycle Expeditions',
    year: '2024',
    image: '/images/creative_page_work_thumbnail_mototrek.webp',
    cardType: 'landscape',
    summary: 'Designed MotoTrek brand identity and web platform to create a unified digital presence reflecting its adventure-driven community.',
    overview: 'MotoTrek needed an immersive digital hub to showcase motorcycle tours, equipment, and rider stories.',
    problem: 'Generic website templates failed to express the rugged spirit of motorcycle expeditions.',
    solution: 'Crafted a bold dark-mode web application with seamless tour booking integration.',
    deliverables: ['Brand Identity & Logo Architecture', 'Custom Web Application (React)', 'Mobile UI/UX Design'],
    metrics: [
      { label: 'Booking Rate', value: '+180%' },
      { label: 'Community Engagement', value: '4.9/5' }
    ],
    galleryImages: ['/images/creative_page_work_thumbnail_mototrek.webp']
  },
  {
    id: 'ks',
    title: 'KS Engineers',
    category: 'Creative Design • Brand Communication',
    categorySlug: 'branding',
    client: 'KS Engineering Solutions',
    year: '2025',
    image: '/images/creative_page_work_thumbnail_ks_engineers.webp',
    cardType: 'square',
    summary: 'Developed creative concepts and digital communication that strengthened professional identity through consistent visual design.',
    overview: 'KS Engineers needed to modernize its B2B presence to win industrial contracts and communicate technical capabilities.',
    deliverables: ['Corporate Visual Identity', 'B2B Technical Collateral', 'Industrial Presentation Decks'],
    galleryImages: ['/images/creative_page_work_thumbnail_ks_engineers.webp']
  },
  {
    id: 'myma',
    title: 'MYMA App',
    category: 'Brand Building • Product • Growth',
    categorySlug: 'product',
    client: 'MYMA Culinary Platform',
    year: '2024',
    image: '/images/creative_page_work_largethumbnail_myma.webp',
    cardType: 'portrait',
    summary: 'Shaped business strategy, product vision, UX/UI design, brand identity, and growth initiatives, reaching 100k+ home chef connections.',
    overview: 'MYMA connected home chefs with food enthusiasts through an intuitive mobile ordering platform.',
    problem: 'Complex user onboarding caused drop-offs during registration.',
    solution: 'Redesigned the multi-step mobile workflow and established a warm, authentic culinary brand.',
    deliverables: ['Mobile Product UX/UI', 'Brand Guidelines & Design System', 'Growth Marketing Funnels'],
    metrics: [
      { label: 'App Installs', value: '100,000+' },
      { label: 'Active Home Chefs', value: '2,500+' }
    ],
    galleryImages: ['/images/creative_page_work_largethumbnail_myma.webp']
  },
  {
    id: 'swayampoorna',
    title: 'Swayampoorna Foundation',
    category: 'Brand Building • Marketing • Growth',
    categorySlug: 'growth',
    client: 'Swayampoorna Foundation',
    year: '2024',
    image: '/images/creative_page_work_thumbnail_swayampoorna_foundation.webp',
    cardType: 'square',
    summary: 'Built the foundation brand identity, communication strategy, marketing initiatives, and community growth framework.',
    deliverables: ['Brand Positioning Strategy', 'Community Outreach Assets', 'Impact Reporting Collateral'],
    galleryImages: ['/images/creative_page_work_thumbnail_swayampoorna_foundation.webp']
  },
  {
    id: 'g1gold',
    title: 'G1 Gold',
    category: 'Brand Building • Website Design • Strategy',
    categorySlug: 'branding',
    client: 'G1 Gold Retail & Bullion',
    year: '2024',
    image: '/images/creative_page_work_thumbnail_g1gold.webp',
    cardType: 'landscape',
    summary: 'Defined luxury brand positioning, visual identity, website storefront, and retail packaging for high-trust bullion brand.',
    deliverables: ['Luxury Brand Strategy', 'Logo & Emblem Architecture', 'Custom E-Commerce Website & UI/UX', 'Gold Packaging Design', 'Store Front Graphics'],
    galleryImages: ['/images/creative_page_work_thumbnail_g1gold.webp']
  },
  {
    id: 'firstock',
    title: 'Firstock Broking',
    category: 'Creative Design • Campaign Communication',
    categorySlug: 'marketing',
    client: 'Firstock Financial Services',
    year: '2024',
    image: '/images/creative_page_work_thumbnail_firstock_broking.webp',
    cardType: 'square',
    summary: 'Conceptualized and designed digital campaigns simplifying financial communication through engaging visuals.',
    deliverables: ['Digital Ad Campaigns', 'Social Media Templates', 'Financial Educational Infographics'],
    galleryImages: ['/images/creative_page_work_thumbnail_firstock_broking.webp']
  },
  {
    id: 'pavanraje',
    title: 'Pavanraje Multi-State',
    category: 'Brand Building • Product • Growth',
    categorySlug: 'growth',
    client: 'Pavanraje Management System',
    year: '2024',
    image: '/images/creative_page_work_thumbnail_pavanraje_multistate.webp',
    cardType: 'landscape',
    summary: 'Built business management platform from concept to execution, shaping product strategy, brand identity, and customer workflows.',
    deliverables: ['Product Architecture & Strategy', 'Operational Web Dashboard UI', 'Brand Communication System'],
    galleryImages: ['/images/creative_page_work_thumbnail_pavanraje_multistate.webp']
  },
  {
    id: 'swaatienterprises',
    title: 'Swaati Enterprises',
    category: 'Website Design • Brand Identity',
    categorySlug: 'website',
    client: 'Swaati Enterprises Industrial Manufacturing',
    year: '2024',
    image: '/images/creative_page_work_thumbnail_swaatienterprises.webp',
    cardType: 'square',
    summary: 'Designed corporate brand identity and website showcasing industrial manufacturing capabilities with absolute clarity.',
    deliverables: ['Industrial Brand Guidelines', 'Corporate Responsive Website', 'Product Catalogue Design'],
    galleryImages: ['/images/creative_page_work_thumbnail_swaatienterprises.webp']
  },
  {
    id: 'identity',
    title: 'Identity Design Collection',
    category: 'Identity Design • Brand Systems',
    categorySlug: 'branding',
    client: 'Selected Clients across Tech, Retail, & Hospitality',
    year: '2023-2025',
    image: '/images/Identity_Design.webp',
    cardType: 'landscape',
    summary: 'A curated collection of logo identities crafted to capture brand personalities through distinctive visual symbols.',
    deliverables: ['Logo System Architecture', 'Typography Guidelines', 'Vector Assets & Brand Marks'],
    galleryImages: ['/images/Identity_Design.webp']
  },
  {
    id: 'bikerschoice',
    title: 'Biker\'s Choice',
    category: 'Marketing • Creative Communication',
    categorySlug: 'marketing',
    client: 'Biker\'s Choice Dealership',
    year: '2024',
    image: '/images/BikersChoiceLogo large.webp',
    cardType: 'square',
    summary: 'Developed marketing campaigns, creative social content, and showroom promo collaterals engaging motorcycle enthusiasts.',
    deliverables: ['Social Media Campaigns', 'Showroom Promotional Assets', 'Digital Ad Creatives'],
    galleryImages: ['/images/BikersChoiceLogo large.webp']
  },
  {
    id: 'chandrapur',
    title: 'Chandrapur Urban',
    category: 'Marketing • Brand Communication',
    categorySlug: 'marketing',
    client: 'Chandrapur Urban Co-Op Bank',
    year: '2024',
    image: '/images/creative_page_work_thumbnail_chandrapur_urban.webp',
    cardType: 'square',
    summary: 'Conceptualized integrated marketing campaigns strengthening regional banking presence across print and digital media.',
    deliverables: ['Print & Digital Ad Campaigns', 'Customer Onboarding Collateral', 'Banking Product Brochures'],
    galleryImages: ['/images/creative_page_work_thumbnail_chandrapur_urban.webp']
  },
  {
    id: 'aarogya',
    title: 'Aarogya Club',
    category: 'Brand Building • Product • Growth',
    categorySlug: 'growth',
    client: 'Aarogya Club Health & Wellness',
    year: '2024',
    image: '/images/creative_page_work_thumbnail_aarogya_club.webp',
    cardType: 'square',
    summary: 'Built brand identity, product experience, communication strategy, and wellness community engagement tools.',
    deliverables: ['Wellness Brand Positioning', 'Mobile Web App UI', 'Community Engagement Campaign'],
    galleryImages: ['/images/creative_page_work_thumbnail_aarogya_club.webp']
  },
  {
    id: 'godocs',
    title: 'GoDocs',
    category: 'Product Concept • Creative Design',
    categorySlug: 'product',
    client: 'GoDocs Digital Platform',
    year: '2024',
    image: '/images/godocs_services.webp',
    cardType: 'square',
    summary: 'Conceptualized product UX, brand communication, and visual assets for digital documentation platform focusing on simplicity.',
    deliverables: ['Product UX Wireframes', 'Brand Identity', 'Feature UI Screenshots'],
    galleryImages: ['/images/godocs_services.webp']
  },
  {
    id: 'onlineparayan',
    title: 'Online Parayan',
    category: 'Brand Building • Digital Experience',
    categorySlug: 'growth',
    client: 'Online Parayan Foundation',
    year: '2024',
    image: '/images/online_parayan.webp',
    cardType: 'square',
    summary: 'Shaped brand identity, digital portal experience, and community engagement for spiritual connection platform.',
    deliverables: ['Brand Architecture', 'Community Web Portal', 'Event Outreach Graphics'],
    galleryImages: ['/images/online_parayan.webp']
  },
  {
    id: 'nakhara',
    title: 'Nakhara Fashion',
    category: 'Fashion Branding',
    categorySlug: 'branding',
    client: 'Nakhara Couture',
    year: '2024',
    image: '/images/creative_page_work_thumbnail_nakhara.webp',
    cardType: 'square',
    summary: 'Brand identity and creative communication for fashion & lifestyle label delivering bold visual personality.',
    deliverables: ['Fashion Brand Identity', 'Packaging & Tags', 'Lookbook & Social Assets'],
    galleryImages: ['/images/creative_page_work_thumbnail_nakhara.webp']
  },
  {
    id: 'ozo',
    title: 'OZO Packaging',
    category: 'Packaging Design • Brand Communication',
    categorySlug: 'branding',
    client: 'OZO Consumer Goods',
    year: '2024',
    image: '/images/creative_page_work_thumbnail_ozo.webp',
    cardType: 'landscape',
    summary: 'Conceptualized packaging, brand communication, and visual assets for consumer product brand enhancing retail shelf appeal.',
    deliverables: ['Retail Packaging System', 'Brand Identity', 'Product Visual Assets'],
    galleryImages: ['/images/creative_page_work_thumbnail_ozo.webp']
  },
  {
    id: 'kathakali',
    title: 'Kathakali Restaurant',
    category: 'Creative Design • Brand Communication',
    categorySlug: 'branding',
    client: 'Kathakali Authentic Cuisine',
    year: '2023',
    image: '/images/creative_page_work_thumbnail_kathakali_restaurant.webp',
    cardType: 'square',
    summary: 'Designed creative assets, menu designs, and brand communication celebrating authentic culinary traditions.',
    deliverables: ['Restaurant Brand Identity', 'Print & Digital Menus', 'Dining Ambience Collateral'],
    galleryImages: ['/images/creative_page_work_thumbnail_kathakali_restaurant.webp']
  },
  {
    id: 'rejoyce',
    title: 'Rejoyce Healthcare',
    category: 'Creative Design • Brand Communication',
    categorySlug: 'branding',
    client: 'Rejoyce Healthcare',
    year: '2023',
    image: '/images/creative_page_work_thumbnail_rejoyce.webp',
    cardType: 'square',
    summary: 'Designed creative campaigns, marketing collateral, and brand assets establishing trustworthy healthcare presence.',
    deliverables: ['Healthcare Brand Identity', 'Patient Educational Brochures', 'Digital Campaign Creatives'],
    galleryImages: ['/images/creative_page_work_thumbnail_rejoyce.webp']
  },
  {
    id: 'unique',
    title: 'Unique Academy',
    category: 'Creative Design • Marketing Communication',
    categorySlug: 'marketing',
    client: 'Unique MPSC / UPSC Academy',
    year: '2023',
    image: '/images/creative_page_work_largethumbnail_unique_mpsc_upsc_academy.webp',
    cardType: 'portrait',
    summary: 'Designed admission campaigns, marketing creatives, and educational assets for competitive exam coaching institute.',
    deliverables: ['Admission Campaign Creatives', 'Social Media Assets', 'Educational Banners'],
    galleryImages: ['/images/creative_page_work_largethumbnail_unique_mpsc_upsc_academy.webp']
  },
  {
    id: 'biba',
    title: 'BIBA Fashion',
    category: 'Creative Design • Brand Communication',
    categorySlug: 'marketing',
    client: 'BIBA Ethnic Wear',
    year: '2023',
    image: '/images/creative_page_work_thumbnail_biba.webp',
    cardType: 'landscape',
    summary: 'Designed campaign creatives, promotional assets, and retail communication celebrating vibrant fashion heritage.',
    deliverables: ['Seasonal Campaign Creatives', 'In-Store Promotional Signage', 'Social Media Assets'],
    galleryImages: ['/images/creative_page_work_thumbnail_biba.webp']
  },
  {
    id: 'senses',
    title: 'Senses Spa & Salon',
    category: 'Marketing • Creative Communication',
    categorySlug: 'marketing',
    client: 'Senses Spa & Salon',
    year: '2023',
    image: '/images/creative_page_work_thumbnail_senses_spalon.webp',
    cardType: 'square',
    summary: 'Conceptualized marketing campaigns, social media creatives, and print collaterals for luxury salon brand.',
    deliverables: ['Luxury Campaign Creatives', 'Salon Service Menu', 'Social Media Templates'],
    galleryImages: ['/images/creative_page_work_thumbnail_senses_spalon.webp']
  },
  {
    id: 'lemontree',
    title: 'Lemontree Media',
    category: 'Creative Design • Marketing Communication',
    categorySlug: 'marketing',
    client: 'Lemontree Media Agency',
    year: '2023',
    image: '/images/creative_page_work_largethumbnail_lemontree_media.webp',
    cardType: 'square',
    summary: 'Designed creative campaigns, marketing collateral, and brand assets across digital and print media.',
    deliverables: ['Agency Brand Assets', 'Client Presentation Decks', 'Digital Ad Templates'],
    galleryImages: ['/images/creative_page_work_largethumbnail_lemontree_media.webp']
  },
  {
    id: 'urth',
    title: 'Urth Trooper',
    category: 'Creative Design • Brand Communication',
    categorySlug: 'branding',
    client: 'Urth Trooper Apparel',
    year: '2023',
    image: '/images/creative_page_work_thumbnail_urth_trooper.webp',
    cardType: 'square',
    summary: 'Designed branding, apparel packaging, and outdoor lifestyle graphics reflecting adventurous brand identity.',
    deliverables: ['Apparel Brand Identity', 'Product Hangtags & Packaging', 'E-Commerce Social Assets'],
    galleryImages: ['/images/creative_page_work_thumbnail_urth_trooper.webp']
  }
];
