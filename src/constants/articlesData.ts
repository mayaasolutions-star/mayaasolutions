export interface ArticleItem {
  id: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  author: string;
  authorTitle: string;
  readTime: string;
  date: string;
  heroImage: string;
  summary: string;
  content: {
    heading: string;
    paragraphs: string[];
    quote?: string;
  }[];
}

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'before-you-build-a-brand',
    slug: 'before-you-build-a-brand',
    category: 'Brand Strategy',
    title: 'Before You Build a Brand',
    subtitle: 'The Strategic Mindset Required Before Designing a Single Logo',
    author: 'Pratiksha Kulkarni',
    authorTitle: 'Founder, Mayaa Solutions',
    readTime: '4 min read',
    date: 'August 2026',
    heroImage: '/images/before-you-build-a-brand-hero.webp',
    summary: 'Most founders rush straight to logos and colors without defining why their business deserves to win. Here is what to establish first.',
    content: [
      {
        heading: 'Why Strategy Comes First',
        paragraphs: [
          'When starting a business, the temptation is to jump straight into logos, colors, and business cards. However, design without strategy is just decoration.',
          'Branding starts with positioning. You must understand your target audience, analyze your market alternatives, and define a clear value proposition before touching design.'
        ],
        quote: 'A logo is not a brand. A brand is the expectation and experience you deliver to your customer.'
      },
      {
        heading: 'The Four Essentials',
        paragraphs: [
          'First: Market Positioning. Are you the premium quality choice, the fast execution choice, or the specialist expert?',
          'Second: Audience Clarity. Speak directly to decision makers with precise language.',
          'Third: Value Proposition. State clearly what result changes for your client.',
          'Fourth: Tone of Voice. Decide how your brand communicates across every channel.'
        ]
      }
    ]
  },
  {
    id: 'before-you-design',
    slug: 'before-you-design',
    category: 'Website Design',
    title: 'Before You Design a Website',
    subtitle: 'Why User Experience Matters More Than Visual Trends',
    author: 'Pratiksha Kulkarni',
    authorTitle: 'Founder, Mayaa Solutions',
    readTime: '4 min read',
    date: 'July 2026',
    heroImage: '/images/before-you-design-hero.webp',
    summary: 'A website that looks good but fails to generate inquiries is wasted budget. Learn how to plan conversion paths first.',
    content: [
      {
        heading: 'Purpose Over Decoration',
        paragraphs: [
          'Your website has one primary goal: converting interested visitors into qualified inquiries.',
          'Before opening design software, list the exact action you want visitors to take on each page.'
        ]
      },
      {
        heading: 'Mobile User Experience',
        paragraphs: [
          'Most initial visits happen on smartphones. Your layout must load quickly, read easily, and guide users smoothly on mobile screens.'
        ]
      }
    ]
  },
  {
    id: 'pm-behind-the-interview',
    slug: 'pm-behind-the-interview',
    category: 'Product Leadership',
    title: 'Behind Product Leadership',
    subtitle: 'Practical Frameworks for Product Growth and Execution',
    author: 'Pratiksha Kulkarni',
    authorTitle: 'Founder, Mayaa Solutions',
    readTime: '5 min read',
    date: 'June 2026',
    heroImage: '/images/pm-interview-guide-hero.webp',
    summary: 'Building product sense, measuring metrics that matter, and making clear trade-offs.',
    content: [
      {
        heading: 'Structuring Product Decisions',
        paragraphs: [
          'Product strategy is structured empathy for user problems combined with business logic.',
          'Identify key user friction points, prioritize impactful solutions, and measure real success metrics.'
        ]
      }
    ]
  }
];
