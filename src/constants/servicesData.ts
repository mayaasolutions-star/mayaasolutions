export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  ctaText: string;
  capabilities: string[];
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
    tagline: 'A brand is more than a logo.',
    shortDesc: 'Build a brand with a clear position, identity and visual system.',
    fullDesc: 'We help businesses define their market positioning and create complete brand systems that establish credibility, command recognition, and connect across every touchpoint.',
    ctaText: 'Explore Brand Building',
    capabilities: [
      'Brand strategy',
      'Positioning',
      'Naming',
      'Visual identity',
      'Brand guidelines',
      'Brand refresh / rebrand'
    ],
    heroImage: '/images/brand-building-hero.webp',
    challengeImage: '/images/brand-challenge.webp',
    outcomes: [
      'Clear market positioning that commands premium perception',
      'Instant credibility across digital, physical, and print touchpoints',
      'Consistent brand standards that scale as your business expands'
    ],
    deliverables: [
      'Brand Strategy & Positioning Document',
      'Visual Identity System & Logo Architecture',
      'Typography & Color Palette Guidelines',
      'Brand Guidelines Manual & Production Assets'
    ],
    process: [
      { title: '01. Understand', desc: 'We analyze your commercial goals, audience, and market context.' },
      { title: '02. Plan', desc: 'We clarify core positioning, messaging strategy, and value proposition.' },
      { title: '03. Design', desc: 'We craft the logo, visual system, typography, and identity assets.' },
      { title: '04. Launch', desc: 'We deliver complete brand guidelines and production-ready asset libraries.' }
    ],
    faqs: [
      {
        question: 'What is included in a Brand Building project?',
        answer: 'Our engagement includes brand strategy, positioning, naming or name refinement, logo and visual identity, typography and color standards, and comprehensive brand guidelines.'
      },
      {
        question: 'How long does a brand identity project take?',
        answer: 'Most brand strategy and identity engagements take 3 to 4 weeks from discovery to final delivery.'
      }
    ]
  },
  {
    id: 'website-design',
    slug: 'website',
    number: '02',
    title: 'Website Design & Development',
    tagline: 'Complete Digital Experiences',
    shortDesc: 'Build a website that represents the business properly and gives customers a better digital experience.',
    fullDesc: 'We handle website projects from requirement through launch, combining strategic planning, bespoke UX/UI design, and modern development to build platforms that represent your brand and convert visitors.',
    ctaText: 'Explore Website Design',
    capabilities: [
      'Website strategy',
      'UX/UI Design',
      'Custom Development',
      'Content Management (CMS)',
      'System Integrations',
      'Conversion-focused experiences'
    ],
    heroImage: '/images/website-design-hero.webp',
    challengeImage: '/images/website-strategy.webp',
    outcomes: [
      'Higher visitor engagement and qualified conversion rates',
      'Fast loading speed optimized for mobile devices and search engines',
      'Intuitive user journeys that guide prospects directly to action'
    ],
    deliverables: [
      'Information Architecture & User Journey Maps',
      'Custom UI/UX Prototypes & Component System',
      'Modern, High-Performance Web Development',
      'CMS Setup, Integrations & Launch Verification'
    ],
    process: [
      { title: '01. Understand', desc: 'We evaluate your business objectives, audience needs, and user pathways.' },
      { title: '02. Plan', desc: 'We define the site structure, content hierarchy, and technical architecture.' },
      { title: '03. Design', desc: 'We design intuitive, responsive interfaces tailored to your brand identity.' },
      { title: '04. Build & Launch', desc: 'We engineer clean code, integrate required tools, test, and launch.' }
    ],
    faqs: [
      {
        question: 'Do you build custom websites or use templates?',
        answer: 'Every website is custom-designed and coded specifically for your business objectives. We do not rely on pre-made generic templates.'
      },
      {
        question: 'Can our team update content easily?',
        answer: 'Yes. We set up simple, intuitive content management so your team can easily update copy, imagery, and journal entries without coding.'
      }
    ]
  },
  {
    id: 'growth-marketing',
    slug: 'marketing',
    number: '03',
    title: 'Growth Marketing',
    tagline: 'Strategic Marketing Built Around the Business',
    shortDesc: 'Marketing that supports the brand and business, not marketing for the sake of posting.',
    fullDesc: 'We deliver strategic marketing focused on sustainable customer acquisition, search authority, and high-intent campaigns that support real business growth.',
    ctaText: 'Explore Growth Marketing',
    capabilities: [
      'Marketing strategy',
      'Search / SEO',
      'Paid advertising',
      'Campaign strategy',
      'Content strategy',
      'Lead generation',
      'Digital growth planning'
    ],
    heroImage: '/images/growth-marketing-hero.webp',
    challengeImage: '/images/marketing-challenge.webp',
    outcomes: [
      'Consistent inbound inquiries from qualified prospects',
      'Higher organic search rankings for commercial keywords',
      'Lower acquisition costs through optimized funnels'
    ],
    deliverables: [
      'Comprehensive Acquisition & Channel Strategy',
      'Search Engine Optimization (Technical & On-Page)',
      'Targeted Campaign Creative & Ad Management',
      'Lead Generation Funnels & Attribution Reporting'
    ],
    process: [
      { title: '01. Understand', desc: 'We analyze your market landscape, customer segments, and commercial targets.' },
      { title: '02. Plan', desc: 'We map out the channel strategy, key search terms, and campaign timelines.' },
      { title: '03. Execute', desc: 'We launch targeted campaigns, optimized landing flows, and content assets.' },
      { title: '04. Measure', desc: 'We track real customer inquiries and refine targeting for continuous return.' }
    ],
    faqs: [
      {
        question: 'Does Mayaa do daily social media posting?',
        answer: 'No. We focus on strategic marketing, search engine optimization, paid acquisition, and campaign systems that generate qualified inquiries rather than routine posting for the sake of activity.'
      },
      {
        question: 'How soon can we expect results from marketing?',
        answer: 'Targeted campaigns generate inquiries quickly, while organic search optimization builds compounding inbound demand over 60 to 90 days.'
      }
    ]
  },
  {
    id: 'business-growth',
    slug: 'business-tools',
    number: '04',
    title: 'Business Tools',
    tagline: 'Custom Business Management Software',
    shortDesc: 'A personalised Business Management Tool built around how your business works.',
    fullDesc: 'We build personalised Business Management Tools that unify your leads, tasks, team, and operations into one clean system.',
    ctaText: 'Explore Business Tools',
    capabilities: [
      'Business & digital strategy',
      'Digital transformation',
      'Customer journey',
      'Digital roadmap',
      'Product planning',
      'Process improvement'
    ],
    heroImage: '/images/business-growth-hero.webp',
    challengeImage: '/images/business-growth-challenge.webp',
    outcomes: [
      'Clear strategic roadmap and prioritized digital initiatives',
      'Streamlined customer journey and improved client retention',
      'Practical digital tools and automated operational workflows'
    ],
    deliverables: [
      'Business & Digital Opportunity Assessment',
      'Customer Journey Mapping & Experience Plan',
      'Digital Product & Systems Roadmap',
      'Operational Process Optimization Blueprint'
    ],
    process: [
      { title: '01. Understand', desc: 'We review your operations, business goals, and existing digital friction.' },
      { title: '02. Evaluate', desc: 'We identify commercial opportunities, customer touchpoints, and technical gaps.' },
      { title: '03. Plan', desc: 'We develop a practical roadmap prioritizing high-impact digital decisions.' },
      { title: '04. Execute', desc: 'We support the rollout of systems, digital tools, and operational improvements.' }
    ],
    faqs: [
      {
        question: 'Who is Business Strategy advisory designed for?',
        answer: 'It is designed for founders, owners, and leadership teams seeking clear direction on digital transformation, customer journey improvement, and technology investment.'
      },
      {
        question: 'How does strategy connect to design and development at Mayaa?',
        answer: 'Strategy directly informs our brand building, website development, and digital tools—ensuring every design and technical decision serves a defined commercial purpose.'
      }
    ]
  }
];
