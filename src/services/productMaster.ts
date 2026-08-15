export interface MasterProduct {
  id: string;
  slug: string;
  name: string;
  priceNum: number; // Price in INR
  priceStr: string;
  categoryType: 'service' | 'digital';
  fulfillmentType: 'EMAIL_DELIVERY' | 'DOWNLOAD';
  deliveryTime: string;
  downloadPath?: string;
  deliveryMessage?: string;
}

export const MASTER_PRODUCTS_MAP: Record<string, MasterProduct> = {
  // ==================== 5 SERVICE PRODUCTS ====================
  'build-my-brand': {
    id: 'build-my-brand',
    slug: 'build-my-brand',
    name: 'Build My Brand',
    priceNum: 999,
    priceStr: '₹999',
    categoryType: 'service',
    fulfillmentType: 'EMAIL_DELIVERY',
    deliveryTime: '72 Hours',
    deliveryMessage: 'Thank you for ordering Build My Brand! Our strategy team will reach out via WhatsApp/Email within 24 hours to begin your 3 brand concepts.'
  },
  'build-my-website': {
    id: 'build-my-website',
    slug: 'build-my-website',
    name: 'Build My Website',
    priceNum: 499,
    priceStr: '₹499',
    categoryType: 'service',
    fulfillmentType: 'EMAIL_DELIVERY',
    deliveryTime: '24 Hours',
    deliveryMessage: 'Thank you for ordering Build My Website! Our team will contact you within 24 hours to gather your homepage preferences and build your custom demo.'
  },
  'design-my-logo': {
    id: 'design-my-logo',
    slug: 'design-my-logo',
    name: 'Design My Logo',
    priceNum: 499,
    priceStr: '₹499',
    categoryType: 'service',
    fulfillmentType: 'EMAIL_DELIVERY',
    deliveryTime: '48 Hours',
    deliveryMessage: 'Thank you for ordering Design My Logo! Our design team will contact you within 24 hours to start your logo concepts.'
  },
  'make-brand-premium': {
    id: 'make-brand-premium',
    slug: 'make-brand-premium',
    name: 'Make Brand Premium',
    priceNum: 799,
    priceStr: '₹799',
    categoryType: 'service',
    fulfillmentType: 'EMAIL_DELIVERY',
    deliveryTime: '48 Hours',
    deliveryMessage: 'Thank you for ordering Make Brand Premium! We will reach out to analyze your existing visual touchpoints and deliver your brand upgrade plan.'
  },
  'name-my-business': {
    id: 'name-my-business',
    slug: 'name-my-business',
    name: 'Name My Business',
    priceNum: 299,
    priceStr: '₹299',
    categoryType: 'service',
    fulfillmentType: 'EMAIL_DELIVERY',
    deliveryTime: '48 Hours',
    deliveryMessage: 'Thank you for ordering Name My Business! Our branding team will review your business brief and send 5 trademark-ready business names within 48 hours.'
  },

  // ==================== 8 DIGITAL GUIDES & TOOLKITS ====================
  'before-you-publish': {
    id: 'before-you-publish',
    slug: 'before-you-publish',
    name: 'Before You Publish',
    priceNum: 399,
    priceStr: '₹399',
    categoryType: 'digital',
    fulfillmentType: 'DOWNLOAD',
    deliveryTime: 'Instant',
    downloadPath: '/downloads/before-you-publish-guide.pdf'
  },
  'before-you-design-guide': {
    id: 'before-you-design-guide',
    slug: 'before-you-design-guide',
    name: 'Before You Design Guide',
    priceNum: 499,
    priceStr: '₹499',
    categoryType: 'digital',
    fulfillmentType: 'DOWNLOAD',
    deliveryTime: 'Instant',
    downloadPath: '/downloads/before-you-design-guide.pdf'
  },
  'before-you-ask-ai': {
    id: 'before-you-ask-ai',
    slug: 'before-you-ask-ai',
    name: 'Before You Ask AI',
    priceNum: 299,
    priceStr: '₹299',
    categoryType: 'digital',
    fulfillmentType: 'DOWNLOAD',
    deliveryTime: 'Instant',
    downloadPath: '/downloads/before-you-ask-ai-framework.pdf'
  },
  'before-you-build-a-brand-guide': {
    id: 'before-you-build-a-brand-guide',
    slug: 'before-you-build-a-brand-guide',
    name: 'Before You Build a Brand Guide',
    priceNum: 499,
    priceStr: '₹499',
    categoryType: 'digital',
    fulfillmentType: 'DOWNLOAD',
    deliveryTime: 'Instant',
    downloadPath: '/downloads/before-you-build-a-brand-guide.pdf'
  },
  'before-you-launch': {
    id: 'before-you-launch',
    slug: 'before-you-launch',
    name: 'Before You Launch',
    priceNum: 599,
    priceStr: '₹599',
    categoryType: 'digital',
    fulfillmentType: 'DOWNLOAD',
    deliveryTime: 'Instant',
    downloadPath: '/downloads/before-you-launch-playbook.pdf'
  },
  'pm-resume-cover-templates': {
    id: 'pm-resume-cover-templates',
    slug: 'pm-resume-cover-templates',
    name: 'PM Resume & Cover Letter Templates',
    priceNum: 399,
    priceStr: '₹399',
    categoryType: 'digital',
    fulfillmentType: 'DOWNLOAD',
    deliveryTime: 'Instant',
    downloadPath: '/downloads/pm-resume-cover-templates.pdf'
  },
  'pm-career-advancement': {
    id: 'pm-career-advancement',
    slug: 'pm-career-advancement',
    name: 'PM Career Advancement',
    priceNum: 499,
    priceStr: '₹499',
    categoryType: 'digital',
    fulfillmentType: 'DOWNLOAD',
    deliveryTime: 'Instant',
    downloadPath: '/downloads/pm-career-advancement-guide.pdf'
  },
  'pm-behind-the-interview-scenes': {
    id: 'pm-behind-the-interview-scenes',
    slug: 'pm-behind-the-interview-scenes',
    name: 'PM Behind the Interview Scenes',
    priceNum: 699,
    priceStr: '₹699',
    categoryType: 'digital',
    fulfillmentType: 'DOWNLOAD',
    deliveryTime: 'Instant',
    downloadPath: '/downloads/pm-behind-the-interview-scenes.pdf'
  }
};

export const SLUG_ALIASES: Record<string, string> = {
  'before-you-build-a-brand': 'before-you-build-a-brand-guide',
  'before-you-design': 'before-you-design-guide',
  'before-you-prompt': 'before-you-ask-ai',
  'pm-behind-the-interview': 'pm-behind-the-interview-scenes',
  'pm-resume-cover': 'pm-resume-cover-templates',
  'make-my-brand-premium': 'make-brand-premium',
};

export const getMasterProductBySlug = (slug: string): MasterProduct | undefined => {
  if (!slug) return undefined;
  const normalizedSlug = SLUG_ALIASES[slug] || slug;
  if (MASTER_PRODUCTS_MAP[normalizedSlug]) return MASTER_PRODUCTS_MAP[normalizedSlug];
  if (MASTER_PRODUCTS_MAP[slug]) return MASTER_PRODUCTS_MAP[slug];
  return Object.values(MASTER_PRODUCTS_MAP).find(
    (p) => p.slug === normalizedSlug || p.id === normalizedSlug || p.slug === slug || p.id === slug
  );
};
