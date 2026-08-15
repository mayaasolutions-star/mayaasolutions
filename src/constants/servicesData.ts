export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  heroImage: string;
  challengeImage: string;
  outcomes: string[];
  deliverables: string[];
  process: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'branding',
    slug: 'branding',
    number: '01',
    title: 'Brand Building',
    tagline: 'Build a Brand People Remember',
    shortDesc: 'Help businesses create a clear visual identity, stronger market positioning, and a brand people remember across all customer touchpoints.',
    fullDesc: 'Help businesses create a clear visual identity, stronger market positioning, and a brand people remember across all customer touchpoints.',
    heroImage: '/images/brand-building-hero.webp',
    challengeImage: '/images/brand-challenge.webp',
    outcomes: [
      'Clear market positioning that commands premium pricing',
      'Instant credibility across all digital and print touchpoints',
      'Consistent brand standards as your business expands'
    ],
    deliverables: [
      'Brand Strategy & Positioning Framework',
      'Logo Architecture & Visual Identity',
      'Color Palette & Typography Standards',
      'Brand Guidelines Manual'
    ],
    process: [
      { title: '01. Market Audit', desc: 'We analyze your business goals, competitors, and target audience to find your positioning.' },
      { title: '02. Brand Strategy', desc: 'We define your core message, brand voice, and value proposition.' },
      { title: '03. Identity Design', desc: 'We design your logo, typography, colors, and visual assets.' },
      { title: '04. Asset Handoff', desc: 'We deliver comprehensive guidelines and production-ready files.' }
    ],
    faqs: [
      {
        question: 'What is included in a Brand Building project?',
        answer: 'Our engagement includes market positioning strategy, logo identity design, color systems, typography standards, brand guidelines, and core marketing templates.'
      },
      {
        question: 'How long does a brand identity project take?',
        answer: 'Most brand strategy and identity projects take 3 to 4 weeks from research to final handoff.'
      }
    ]
  },
  {
    id: 'website-design',
    slug: 'website',
    number: '02',
    title: 'Website Design',
    tagline: 'Websites That Drive Business',
    shortDesc: 'Fast, mobile-first custom web platforms built to establish credibility, improve user experience, and convert visitors into paying clients.',
    fullDesc: 'Fast, mobile-first custom web platforms built to establish credibility, improve user experience, and convert visitors into paying clients.',
    heroImage: '/images/website-design-hero.webp',
    challengeImage: '/images/website-strategy.webp',
    outcomes: [
      'Higher visitor engagement and conversion rates',
      'Fast loading speed optimized for mobile and search',
      'Clear user journeys that guide prospects to action'
    ],
    deliverables: [
      'Custom UI/UX Wireframes & Prototypes',
      'Modern React Web Development',
      'Mobile Responsive Layouts',
      'Search Engine Optimization (SEO)'
    ],
    process: [
      { title: '01. User Journey Mapping', desc: 'We plan site architecture and user paths focused on conversions.' },
      { title: '02. Custom UI Design', desc: 'We design modern, responsive interfaces tailored to your brand.' },
      { title: '03. Web Development', desc: 'We build clean, fast, and secure code using modern web standards.' },
      { title: '04. Optimization & Launch', desc: 'We test performance, verify mobile layouts, and launch your site.' }
    ],
    faqs: [
      {
        question: 'Do you build custom websites or use templates?',
        answer: 'Every website is custom-designed and coded specifically for your business objectives. We do not use pre-made templates.'
      },
      {
        question: 'Can our team update content easily?',
        answer: 'Yes, we set up simple content management tools so you can update text, images, and articles without coding.'
      }
    ]
  },
  {
    id: 'growth-marketing',
    slug: 'marketing',
    number: '03',
    title: 'Growth Marketing',
    tagline: 'Marketing That Creates Momentum',
    shortDesc: 'Targeted search engine optimization, strategic content, and advertising campaigns focused on visibility, lead acquisition, and business growth.',
    fullDesc: 'Targeted search engine optimization, strategic content, and advertising campaigns focused on visibility, lead acquisition, and business growth.',
    heroImage: '/images/growth-marketing-hero.webp',
    challengeImage: '/images/marketing-challenge.webp',
    outcomes: [
      'Consistent inbound inquiries from qualified prospects',
      'Higher organic search rankings for commercial keywords',
      'Lower acquisition costs through optimized funnels'
    ],
    deliverables: [
      'Search Engine Optimization (SEO)',
      'Targeted Ad Campaigns',
      'Content Strategy',
      'Lead Acquisition Funnels'
    ],
    process: [
      { title: '01. Channel Audit', desc: 'We evaluate your market opportunities and audience acquisition paths.' },
      { title: '02. Campaign Setup', desc: 'We launch targeted search optimization and high-intent ad creative.' },
      { title: '03. Optimization', desc: 'We continuously test and refine campaign performance based on lead data.' }
    ],
    faqs: [
      {
        question: 'How soon can we expect results from marketing?',
        answer: 'Targeted ad campaigns generate inquiries within days, while organic SEO builds compounding growth over 60 to 90 days.'
      }
    ]
  },
  {
    id: 'business-growth',
    slug: 'business-growth',
    number: '04',
    title: 'Business Growth',
    tagline: 'Sustainable Business Expansion',
    shortDesc: 'Help businesses identify opportunities, solve challenges, and build practical strategies for sustainable growth and market leadership.',
    fullDesc: 'Help businesses identify opportunities, solve challenges, and build practical strategies for sustainable growth and market leadership.',
    heroImage: '/images/business-growth-hero.webp',
    challengeImage: '/images/business-growth-challenge.webp',
    outcomes: [
      'Clear business direction and strategic roadmap',
      'Improved customer experience and retention',
      'Stronger market positioning and competitive advantage'
    ],
    deliverables: [
      'Business Strategy & Growth Roadmap',
      'Market Positioning Framework',
      'Customer Experience Optimization',
      'Business Performance Advisory'
    ],
    process: [
      { title: '01. Operations Audit', desc: 'We examine your sales process, client journey, and operational bottlenecks.' },
      { title: '02. Growth Roadmap', desc: 'We build a clear action plan focused on profit margin and expansion.' },
      { title: '03. Implementation', desc: 'We build automated workflows and optimized customer funnels.' }
    ],
    faqs: [
      {
        question: 'Who is Business Growth advisory designed for?',
        answer: 'This service is built for business owners, founders, and growing companies looking to refine positioning, improve customer retention, and scale operations predictably.'
      }
    ]
  }
];
