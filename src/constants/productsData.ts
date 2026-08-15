export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  categoryType: 'service' | 'digital';
  categoryLabel: string;
  tagline: string;
  price: string;
  priceNum: number;
  deliveryTime: string;
  heroImage: string;
  summary: string;
  trustLine?: string;
  features: string[];
  deliverables: string[];
  beforeAfter?: {
    before: string[];
    after: string[];
  };
  steps: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  downloadUrl?: string;
}

export const SUPABASE_STORAGE_BASE_URL = 'https://jiffohgricelcmrgkimp.supabase.co/storage/v1/object/public/products/';

export const PRODUCTS_DATA: ProductItem[] = [
  // ==================== 5 SERVICES / PERSONALISED PRODUCTS ====================
  {
    id: 'build-my-brand',
    slug: 'build-my-brand',
    name: 'Build My Brand',
    categoryType: 'service',
    categoryLabel: 'Personalised Brand Service',
    tagline: 'Experience 3 Personalised Brand Concepts Before You Invest',
    price: '₹999',
    priceNum: 999,
    deliveryTime: '72 Hours',
    heroImage: '/images/build-my-brand-hero.webp',
    summary: 'Explore three personalised brand concepts created specifically for your business within 72 hours for just ₹999. Fully adjusted when you build your complete brand with Mayaa Solutions.',
    features: [
      '3 Unique Brand Concepts',
      'Personalised Logo Ideas',
      'Colours & Typography System',
      'Real-World Brand Mockups',
      'Strategic Direction Recommendation'
    ],
    deliverables: [
      '3 Personalised Brand Concepts',
      'Delivered in 72 Hours',
      'Custom Logo Concepts',
      'Color Palette & Font Pairing',
      'Brand Mockups',
      'Strategic Recommendation',
      '₹999 Fully Adjusted Towards Complete Branding'
    ],
    beforeAfter: {
      before: [
        'Unsure which brand direction feels right',
        'Struggling to visualize your brand identity',
        'Hesitant to invest heavily in complete branding',
        'Searching for the right creative partner'
      ],
      after: [
        'Compare 3 personalised brand concepts',
        'See what fits your business best',
        'Choose your favorite with confidence',
        'Move forward with complete branding risk-free'
      ]
    },
    steps: [
      { step: 'Step 01', title: 'Tell Us About Your Business', desc: 'Complete a short brief about your business, target audience, and goals.' },
      { step: 'Step 02', title: 'Receive 3 Brand Concepts', desc: 'Within 72 hours, we deliver three personalized visual directions.' },
      { step: 'Step 03', title: 'Choose Your Favorite', desc: 'Select your preferred concept. Your ₹999 is adjusted when continuing with complete branding.' }
    ],
    faqs: [
      { question: 'What will I receive for ₹999?', answer: 'You receive three personalised brand concepts, each including logo ideas, color palette, typography, brand mockups, and strategic recommendations.' },
      { question: 'Is every concept personalised?', answer: 'Yes. Every concept is created specifically for your business, audience, and goals. We do not use generic templates.' },
      { question: 'How long does delivery take?', answer: 'Your three concepts will be delivered within 72 hours after receiving your business details.' },
      { question: 'Will the ₹999 be adjusted later?', answer: 'Yes. When you continue with complete branding, the full ₹999 is deducted from your project total.' },
      { question: 'Why is this priced at ₹999?', answer: 'We believe you should experience our creative quality before making a larger investment, allowing you to choose with confidence.' }
    ]
  },
  {
    id: 'build-my-website',
    slug: 'build-my-website',
    name: 'Build My Website',
    categoryType: 'service',
    categoryLabel: 'Personalised Web Service',
    tagline: 'Personalised Business Website Demo',
    price: '₹499',
    priceNum: 499,
    deliveryTime: '24 Hours',
    heroImage: '/images/build-my-website-hero.webp',
    summary: 'See how your business website could look before investing in the full project. Get a personalised homepage demo within 24 hours for just ₹499. Fully adjusted when you build your website with Mayaa Solutions.',
    features: [
      'Custom Homepage Demo',
      'Content Structure Layout',
      'Mobile-First Responsive Design',
      'Visual Style & Color Palette',
      'Website Improvement Suggestions'
    ],
    deliverables: [
      'Personalised Homepage Demo',
      'Delivered in 24 Hours',
      'Custom Content Layout',
      'Mobile & Desktop Responsive View',
      'Structure & Conversion Recommendations',
      '₹499 Fully Adjusted Towards Full Website'
    ],
    beforeAfter: {
      before: [
        'Unsure how your website should look',
        'Hesitant to commit to full web development',
        'Worried about clunky agency templates'
      ],
      after: [
        'See your actual homepage demo in 24 hours',
        'Evaluate layout, colors, and user flow',
        'Build full website with complete confidence'
      ]
    },
    steps: [
      { step: 'Step 01', title: 'Share Your Business Brief', desc: 'Tell us about your business, products, services, and target audience.' },
      { step: 'Step 02', title: 'Receive Your Homepage Demo', desc: 'Within 24 hours, we deliver a personalized homepage design.' },
      { step: 'Step 03', title: 'Build Your Full Website', desc: 'If you choose to continue, we adjust ₹499 toward your full web project.' }
    ],
    faqs: [
      { question: 'What will I receive for ₹499?', answer: 'You receive a custom homepage demo designed specifically for your business, showing layout, visual style, and mobile responsiveness.' },
      { question: 'How quickly is it delivered?', answer: 'Your custom website demo is delivered within 24 hours after submitting your business details.' },
      { question: 'Will ₹499 be adjusted toward full website development?', answer: 'Yes. When you continue with full website development, ₹499 is credited toward your final project cost.' }
    ]
  },
  {
    id: 'design-my-logo',
    slug: 'design-my-logo',
    name: 'Design My Logo',
    categoryType: 'service',
    categoryLabel: 'Personalised Logo Service',
    tagline: '3 Original Logo Concepts Designed for Your Business',
    price: '₹799',
    priceNum: 799,
    deliveryTime: '24 Hours',
    heroImage: '/images/design-my-logo-hero.webp',
    summary: 'Receive 3 original logo concepts created specifically for your business within 24 hours. Choose your favorite, request one revision, and receive final production vector files.',
    features: [
      '3 Original Logo Concepts',
      'Color Palette Pairings',
      'Typography Recommendations',
      '1 Included Revision Round',
      'Final Vector & High-Res Files'
    ],
    deliverables: [
      '3 Custom Logo Concepts',
      'Delivered in 24 Hours',
      'Color Palette & Font Pairing',
      '1 Revision Round',
      'Final Production Vector Files (PNG, SVG, PDF)',
      'Full Commercial Ownership'
    ],
    steps: [
      { step: 'Step 01', title: 'Submit Logo Brief', desc: 'Tell us your business name, industry, and design preferences.' },
      { step: 'Step 02', title: 'Review 3 Concepts', desc: 'Receive 3 custom logo directions within 24 hours.' },
      { step: 'Step 03', title: 'Refine & Receive Files', desc: 'Choose your favorite, request any refinements, and download final files.' }
    ],
    faqs: [
      { question: 'What files do I receive?', answer: 'You receive final high-resolution PNG, SVG vector, PDF, and print-ready formats.' },
      { question: 'Can I request revisions?', answer: 'Yes, one revision round is included to refine your selected logo concept.' }
    ]
  },
  {
    id: 'make-my-brand-premium',
    slug: 'make-my-brand-premium',
    name: 'Make My Brand Premium',
    categoryType: 'service',
    categoryLabel: 'Brand Elevation Service',
    tagline: 'Personalised Brand Makeover Report',
    price: '₹599',
    priceNum: 599,
    deliveryTime: '24 Hours',
    heroImage: '/images/premium-brand-hero.webp',
    summary: 'Discover how your business could look more premium, modern, and trustworthy with a personalised visual makeover report featuring 2 design directions within 24 hours.',
    features: [
      '2 Premium Visual Directions',
      'Color Palette Refresh',
      'Typography Upgrade Recommendations',
      'Real Touchpoint Visual Mockups',
      'Practical Brand Improvement Advice'
    ],
    deliverables: [
      'Brand Makeover Report',
      '2 Premium Design Directions',
      'Delivered in 24 Hours',
      'Color & Typography Elevation',
      'Real-World Mockups',
      '₹599 Adjusted Towards Complete Rebrand'
    ],
    steps: [
      { step: 'Step 01', title: 'Share Your Existing Brand', desc: 'Provide your current logo, website, or social media links.' },
      { step: 'Step 02', title: 'Receive Makeover Report', desc: 'Get a 2-direction makeover report showing how to elevate your brand.' },
      { step: 'Step 03', title: 'Upgrade Your Brand', desc: 'Apply improvements or continue with complete branding.' }
    ],
    faqs: [
      { question: 'What is included in the makeover report?', answer: 'You receive two elevated design directions, color updates, font pairings, and mockups showing your brand transformed.' }
    ]
  },
  {
    id: 'name-my-business',
    slug: 'name-my-business',
    name: 'Name My Business',
    categoryType: 'service',
    categoryLabel: 'Business Naming Service',
    tagline: '3 Personalised Business Name Ideas',
    price: '₹399',
    priceNum: 399,
    deliveryTime: '48 Hours',
    heroImage: '/images/name-my-business-hero.webp',
    summary: 'Receive 3 personalised business name ideas created specifically for your business within 48 hours. Includes name meanings, domain availability check, and basic trademark screening.',
    features: [
      '3 Unique Business Names',
      'Name Meanings & Brand Story',
      'Domain Availability Verification',
      'Basic Trademark Screening',
      'Tagline Suggestions'
    ],
    deliverables: [
      '3 Business Name Concepts',
      'Delivered in 48 Hours',
      'Name Meanings & Branding Potential',
      'Domain Availability Check (.com / .in)',
      'Basic Trademark Conflict Check',
      'Strategic Recommendations'
    ],
    steps: [
      { step: 'Step 01', title: 'Share Your Vision', desc: 'Tell us about your business concept, target audience, and industry.' },
      { step: 'Step 02', title: 'Receive 3 Name Options', desc: 'Within 48 hours, receive 3 verified business names with meanings and domain availability.' },
      { step: 'Step 03', title: 'Launch Your Business', desc: 'Select your business name with confidence and register your domain.' }
    ],
    faqs: [
      { question: 'Are domains checked for availability?', answer: 'Yes, we verify domain availability (.com / .in) for all suggested business names.' }
    ]
  },

  // ==================== 8 DIGITAL PRODUCTS / GUIDES ====================
  {
    id: 'before-you-publish',
    slug: 'before-you-publish',
    name: 'Before You Publish',
    categoryType: 'digital',
    categoryLabel: 'Professional Review Guide',
    tagline: 'Never Publish Without This Final Review',
    price: '₹9',
    priceNum: 9,
    deliveryTime: 'Instant Download',
    downloadUrl: `${SUPABASE_STORAGE_BASE_URL}beforeyoupublish.pdf`,
    heroImage: '/images/before-you-publish-hero.webp',
    summary: 'Catch costly mistakes before you publish anything. A practical review framework for websites, landing pages, advertisements, presentations, emails, social media posts and marketing campaigns.',
    features: [
      '15 Professional Review Checkpoints',
      'Content & Visual Review',
      'Brand & Technical Checks',
      'A Repeatable Publishing System',
      'Read in Under 20 Minutes',
      'Lifetime Access'
    ],
    deliverables: [
      '15 Professional Review Checkpoints',
      'Content Quality Review',
      'Branding & Technical Checks',
      'Reusable Publishing Checklist',
      'Instant Download',
      'Lifetime Access'
    ],
    steps: [
      { step: 'Step 01', title: 'Download the Guide', desc: 'Complete your purchase securely and get instant access to your professional review guide.' },
      { step: 'Step 02', title: 'Follow the Checklist', desc: 'Review your content, visuals, branding and technical details using the 15 professional checkpoints.' },
      { step: 'Step 03', title: 'Fix Before Publishing', desc: 'Correct mistakes, improve clarity and ensure every detail is polished before your audience sees it.' },
      { step: 'Step 04', title: 'Publish With Confidence', desc: 'Deliver professional, polished work every time while protecting your brand, credibility and first impression.' }
    ],
    faqs: [
      { question: 'What will I receive for ₹9?', answer: 'You receive an instant digital download of the Professional Pre-Publish Review Guide with 15 professional publishing checkpoints covering content, visuals, branding, links and technical details.' },
      { question: 'How is this guide delivered?', answer: 'Instantly. You receive access to your download immediately after completing your secure payment.' },
      { question: 'Can I use this guide more than once?', answer: 'Yes. Download once and reuse the same professional review process before every website, campaign, social post, presentation or business document you publish.' }
    ]
  },
  {
    id: 'before-you-design',
    slug: 'before-you-design',
    name: 'Before You Design',
    categoryType: 'digital',
    categoryLabel: 'Professional Design Guide',
    tagline: 'Learn the Thinking Process Behind Great Design',
    price: '₹19',
    priceNum: 19,
    deliveryTime: 'Instant Download',
    downloadUrl: `${SUPABASE_STORAGE_BASE_URL}beforeyoudesign.pdf`,
    heroImage: '/images/before-you-design-hero.webp',
    summary: 'Discover professional design principles, visual communication frameworks and practical techniques that will help you create more effective, strategic and visually compelling designs.',
    features: [
      'Design Thinking Principles',
      'Visual Communication Frameworks',
      'Typography & Hierarchy Rules',
      'Colour Psychology & Application',
      'Layout & Composition Guidelines',
      'Lifetime Access'
    ],
    deliverables: [
      'Instant Digital Download',
      'Professional Design Principles Guide',
      'Visual Communication Frameworks',
      'Lifetime Access'
    ],
    steps: [
      { step: 'Step 01', title: 'Purchase the Guide', desc: 'Complete your secure payment and get instant access.' },
      { step: 'Step 02', title: 'Download Instantly', desc: 'Access your guide immediately after payment.' },
      { step: 'Step 03', title: 'Apply the Principles', desc: 'Use the frameworks in your next design project.' },
      { step: 'Step 04', title: 'Design With Confidence', desc: 'Create professional, effective designs that communicate clearly.' }
    ],
    faqs: [
      { question: 'Who is this guide for?', answer: 'Designed for business owners, marketers, entrepreneurs and anyone who wants to understand design thinking and create more effective visual communication.' },
      { question: 'How is it delivered?', answer: 'Instantly. You receive access to your download immediately after completing your secure payment.' }
    ]
  },
  {
    id: 'before-you-prompt',
    slug: 'before-you-prompt',
    name: 'Before You Prompt',
    categoryType: 'digital',
    categoryLabel: 'Professional AI Prompting Guide',
    tagline: 'Stop Guessing and Start Prompting Like a Professional',
    price: '₹29',
    priceNum: 29,
    deliveryTime: 'Instant Download',
    downloadUrl: `${SUPABASE_STORAGE_BASE_URL}beforeyouprompt.pdf`,
    heroImage: '/images/before-you-ask-ai-hero.webp',
    summary: 'Write better prompts and get better AI results from ChatGPT, Gemini, Claude, Grok, Perplexity and Copilot. Learn practical prompting frameworks to save time and improve accuracy.',
    features: [
      'Professional AI Prompting Frameworks',
      'Context & Goal Setting Techniques',
      'Multi-Turn Conversation Strategies',
      'Error Reduction & Accuracy Tips',
      'Works With All Major AI Tools',
      'Lifetime Access'
    ],
    deliverables: [
      'Instant Digital Download',
      'AI Prompting Frameworks Guide',
      'Prompt Template Cheat-Sheet',
      'Lifetime Access'
    ],
    steps: [
      { step: 'Step 01', title: 'Purchase the Guide', desc: 'Complete your secure payment and get instant access.' },
      { step: 'Step 02', title: 'Download Instantly', desc: 'Access your guide immediately after payment.' },
      { step: 'Step 03', title: 'Apply the Frameworks', desc: 'Use prompting techniques in your daily AI workflow.' },
      { step: 'Step 04', title: 'Get Better Results', desc: 'Save time and get more accurate, useful AI outputs every time.' }
    ],
    faqs: [
      { question: 'Which AI models does this work with?', answer: 'Works with ChatGPT, Gemini, Claude, Grok, Perplexity, Copilot, and all major AI tools.' },
      { question: 'How is it delivered?', answer: 'Instantly. You receive access to your download immediately after completing your secure payment.' }
    ]
  },
  {
    id: 'before-you-build-a-brand',
    slug: 'before-you-build-a-brand',
    name: 'Before You Build a Brand',
    categoryType: 'digital',
    categoryLabel: 'Brand Building Strategy Guide',
    tagline: 'Build a Brand People Trust With Practical Frameworks',
    price: '₹49',
    priceNum: 49,
    deliveryTime: 'Instant Download',
    downloadUrl: `${SUPABASE_STORAGE_BASE_URL}beforeyoubuildabrand.pdf`,
    heroImage: '/images/before-you-build-a-brand-hero.webp',
    summary: 'Learn a practical brand-building framework to define your positioning, audience, communication and visual identity before spending money on design. A complete brand strategy guide.',
    features: [
      'Brand Strategy Frameworks',
      'Audience & Positioning Definition',
      'Value Proposition Builder',
      'Visual Identity Planning',
      'Communication & Tone of Voice Guide',
      'Lifetime Access'
    ],
    deliverables: [
      'Instant Digital Download',
      'Complete Brand Strategy Guide',
      'Brand Audit Framework',
      'Audience & Positioning Worksheet',
      'Lifetime Access'
    ],
    steps: [
      { step: 'Step 01', title: 'Purchase the Guide', desc: 'Complete your secure payment and get instant access.' },
      { step: 'Step 02', title: 'Download Instantly', desc: 'Access your guide immediately after payment.' },
      { step: 'Step 03', title: 'Apply the Frameworks', desc: 'Work through the brand strategy frameworks for your business.' },
      { step: 'Step 04', title: 'Build With Clarity', desc: 'Launch your brand with clear strategy, positioning and direction.' }
    ],
    faqs: [
      { question: 'What is included in the download?', answer: 'You receive the full digital brand strategy guide with practical frameworks, worksheets and step-by-step guidance for building a brand that resonates with your audience.' },
      { question: 'How is it delivered?', answer: 'Instantly. You receive access to your download immediately after completing your secure payment.' }
    ]
  },
  {
    id: 'before-you-launch',
    slug: 'before-you-launch',
    name: 'Before You Launch',
    categoryType: 'digital',
    categoryLabel: 'Launch Preparation Guide',
    tagline: 'Prepare for Your Next Launch With Practical Frameworks',
    price: '₹99',
    priceNum: 99,
    deliveryTime: 'Instant Download',
    downloadUrl: `${SUPABASE_STORAGE_BASE_URL}beforeyoulaunch.pdf`,
    heroImage: '/images/before-you-launch-hero.webp',
    summary: 'Launch your business, website, app, product or service with a complete preparation framework. One overlooked mistake can cost far more than ₹99. Invest once, launch right every time.',
    features: [
      'Complete Launch Preparation Framework',
      'Website & Technical Audit Checklist',
      'Marketing & Communication Readiness',
      'Payment & Operations Verification',
      'Launch Day Execution Guide',
      'Lifetime Access'
    ],
    deliverables: [
      'Instant Digital Download',
      'Complete Launch Preparation Framework',
      'Website & Technical Audit Checklist',
      'Marketing Readiness Checklist',
      'Lifetime Access'
    ],
    steps: [
      { step: 'Step 01', title: 'Purchase the Guide', desc: 'Complete your secure payment and get instant access.' },
      { step: 'Step 02', title: 'Download Instantly', desc: 'Access your guide immediately after payment.' },
      { step: 'Step 03', title: 'Follow the Framework', desc: 'Work through every checklist before your launch date.' },
      { step: 'Step 04', title: 'Launch With Confidence', desc: 'Go live knowing every critical detail has been reviewed and prepared.' }
    ],
    faqs: [
      { question: 'Is this suitable for e-commerce, SaaS and service businesses?', answer: 'Yes. The framework covers websites, D2C stores, SaaS products, apps and service business launches across every category.' },
      { question: 'How is it delivered?', answer: 'Instantly. You receive access to your download immediately after completing your secure payment.' }
    ]
  },
  {
    id: 'pm-resume-cover',
    slug: 'pm-resume-cover',
    name: 'Product Manager Resume & Cover Letter Templates',
    categoryType: 'digital',
    categoryLabel: 'PM Career Toolkit',
    tagline: 'Built for Product Managers',
    price: '₹149',
    priceNum: 149,
    deliveryTime: 'Instant Download',
    downloadUrl: `${SUPABASE_STORAGE_BASE_URL}pm-resumecover.pdf`,
    heroImage: '/images/pm-resume-toolkit-hero.webp',
    summary: 'Create a recruiter-ready Product Manager resume and cover letter. Most templates only change how your resume looks. This toolkit improves how it performs — built specifically for PM roles.',
    features: [
      'ATS-Optimized PM Resume Templates',
      'Cover Letter Templates',
      'Resume Writing Guide',
      'Easy to Customize',
      'Instant Download',
      'Lifetime Access'
    ],
    deliverables: [
      'Instant Digital Download',
      'ATS-Optimized PM Resume Templates',
      'PM Cover Letter Templates',
      'Resume Writing Guide',
      'Lifetime Access'
    ],
    steps: [
      { step: 'Step 01', title: 'Purchase the Toolkit', desc: 'Complete your secure payment and get instant access.' },
      { step: 'Step 02', title: 'Download Everything', desc: 'Access all templates and the writing guide immediately.' },
      { step: 'Step 03', title: 'Customize Your Resume', desc: 'Adapt the templates to reflect your experience and PM skills.' },
      { step: 'Step 04', title: 'Apply With Confidence', desc: 'Submit polished, recruiter-ready applications for PM roles.' }
    ],
    faqs: [
      { question: 'Are these templates editable?', answer: 'Yes, fully editable and easy to customize for your specific experience and target roles.' },
      { question: 'How is it delivered?', answer: 'Instantly. You receive access to your download immediately after completing your secure payment.' }
    ]
  },
  {
    id: 'pm-career-advancement',
    slug: 'pm-career-advancement',
    name: 'Tips & Tricks for Career Advancement in Product Management',
    categoryType: 'digital',
    categoryLabel: 'PM Career Growth Playbook',
    tagline: 'Built for Product Managers',
    price: '₹199',
    priceNum: 199,
    deliveryTime: 'Instant Download',
    downloadUrl: `${SUPABASE_STORAGE_BASE_URL}pm-careeradvancement.pdf`,
    heroImage: '/images/pm-career-growth-hero.webp',
    summary: 'Accelerate your Product Management career with a practical guide for building strong product foundations, delivering high-impact work, thinking like a senior PM, and growing your influence.',
    features: [
      'Build Strong Product Foundations',
      'Deliver High-Impact Work',
      'Think Like a Senior Product Manager',
      'Build Influence & Leadership',
      'Accelerate Your Career',
      'Bonus Career Resources'
    ],
    deliverables: [
      'Instant Digital Download',
      'PM Career Growth Playbook',
      'Bonus Career Resources',
      'Lifetime Access'
    ],
    steps: [
      { step: 'Step 01', title: 'Purchase the Playbook', desc: 'Complete your secure payment and get instant access.' },
      { step: 'Step 02', title: 'Download Instantly', desc: 'Access your playbook immediately after payment.' },
      { step: 'Step 03', title: 'Apply What You Learn', desc: 'Implement strategies to improve your product thinking and impact.' },
      { step: 'Step 04', title: 'Grow Your Career', desc: 'Advance faster by consistently applying proven PM career frameworks.' }
    ],
    faqs: [
      { question: 'Who is this guide for?', answer: 'Designed for aspiring PMs, associate PMs, and senior product managers who want to deliver more impact and grow faster in their careers.' },
      { question: 'How is it delivered?', answer: 'Instantly. You receive access to your download immediately after completing your secure payment.' }
    ]
  },
  {
    id: 'pm-behind-the-interview',
    slug: 'pm-behind-the-interview',
    name: 'Behind the Interview Scenes (Product Management)',
    categoryType: 'digital',
    categoryLabel: 'PM Interview Guide',
    tagline: 'Stop Memorizing Answers',
    price: '₹249',
    priceNum: 249,
    deliveryTime: 'Instant Download',
    downloadUrl: `${SUPABASE_STORAGE_BASE_URL}pm-behindtheinterview.pdf`,
    heroImage: '/images/pm-interview-guide-hero.webp',
    summary: 'Learn how Product Managers are actually evaluated by recruiters, interviewers and hiring managers. Interview success is not just about giving the right answers — it is about understanding how hiring decisions are made.',
    features: [
      'How Product Managers Are Evaluated',
      'What Interviewers Look For',
      'Why Candidates Get Rejected',
      'How Hiring Decisions Are Made',
      'Top Company Hiring Insights',
      'Practical Interview Strategies'
    ],
    deliverables: [
      'Instant Digital Download',
      'PM Interview Guide',
      'Hiring Process Insider Insights',
      'Practical Interview Strategies',
      'Lifetime Access'
    ],
    steps: [
      { step: 'Step 01', title: 'Purchase the Guide', desc: 'Complete your secure payment and get instant access.' },
      { step: 'Step 02', title: 'Download Instantly', desc: 'Access your guide immediately after payment.' },
      { step: 'Step 03', title: 'Understand the Hiring Process', desc: 'Learn exactly how interviewers evaluate and make hiring decisions.' },
      { step: 'Step 04', title: 'Interview With Confidence', desc: 'Walk into PM interviews prepared with insider knowledge of how the process really works.' }
    ],
    faqs: [
      { question: 'What makes this different from other interview guides?', answer: 'This guide reveals how recruiters, interviewers and hiring managers actually evaluate candidates and make decisions — not just what questions to expect.' },
      { question: 'How is it delivered?', answer: 'Instantly. You receive access to your download immediately after completing your secure payment.' }
    ]
  }
];

export const getProductBySlug = (slug: string): ProductItem | undefined => {
  if (!slug) return undefined;
  const aliasMap: Record<string, string> = {
    'before-you-build-a-brand-guide': 'before-you-build-a-brand',
    'before-you-design-guide': 'before-you-design',
    'before-you-ask-ai': 'before-you-prompt',
    'pm-behind-the-interview-scenes': 'pm-behind-the-interview',
    'pm-resume-cover-templates': 'pm-resume-cover',
    'make-brand-premium': 'make-my-brand-premium',
  };
  const normalizedSlug = aliasMap[slug] || slug;
  return PRODUCTS_DATA.find((p) => p.slug === normalizedSlug || p.id === normalizedSlug || p.slug === slug || p.id === slug);
};
