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
  storageFileName?: string;
  deliveryMessage?: string;
}

export const SUPABASE_STORAGE_BASE_URL = 'https://jiffohgricelcmrgkimp.supabase.co/storage/v1/object/public/products/';

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
  'make-my-brand-premium': {
    id: 'make-my-brand-premium',
    slug: 'make-my-brand-premium',
    name: 'Make My Brand Premium',
    priceNum: 799,
    priceStr: '₹799',
    categoryType: 'service',
    fulfillmentType: 'EMAIL_DELIVERY',
    deliveryTime: '48 Hours',
    deliveryMessage: 'Thank you for ordering Make My Brand Premium! We will reach out to analyze your existing visual touchpoints and deliver your brand upgrade plan.'
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
  'before-you-build-a-brand': {
    id: 'before-you-build-a-brand',
    slug: 'before-you-build-a-brand',
    name: 'Before You Build a Brand',
    priceNum: 499,
    priceStr: '₹499',
    categoryType: 'digital',
    fulfillmentType: 'DOWNLOAD',
    deliveryTime: 'Instant',
    storageFileName: 'beforeyoubuildabrand.pdf',
    downloadPath: `${SUPABASE_STORAGE_BASE_URL}beforeyoubuildabrand.pdf`
  },
  'before-you-design': {
    id: 'before-you-design',
    slug: 'before-you-design',
    name: 'Before You Design',
    priceNum: 499,
    priceStr: '₹499',
    categoryType: 'digital',
    fulfillmentType: 'DOWNLOAD',
    deliveryTime: 'Instant',
    storageFileName: 'beforeyoudesign.pdf',
    downloadPath: `${SUPABASE_STORAGE_BASE_URL}beforeyoudesign.pdf`
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
    storageFileName: 'beforeyoulaunch.pdf',
    downloadPath: `${SUPABASE_STORAGE_BASE_URL}beforeyoulaunch.pdf`
  },
  'before-you-prompt': {
    id: 'before-you-prompt',
    slug: 'before-you-prompt',
    name: 'Before You Prompt',
    priceNum: 299,
    priceStr: '₹299',
    categoryType: 'digital',
    fulfillmentType: 'DOWNLOAD',
    deliveryTime: 'Instant',
    storageFileName: 'beforeyouprompt.pdf',
    downloadPath: `${SUPABASE_STORAGE_BASE_URL}beforeyouprompt.pdf`
  },
  'before-you-publish': {
    id: 'before-you-publish',
    slug: 'before-you-publish',
    name: 'Before You Publish',
    priceNum: 399,
    priceStr: '₹399',
    categoryType: 'digital',
    fulfillmentType: 'DOWNLOAD',
    deliveryTime: 'Instant',
    storageFileName: 'beforeyoupublish.pdf',
    downloadPath: `${SUPABASE_STORAGE_BASE_URL}beforeyoupublish.pdf`
  },
  'pm-behind-the-interview': {
    id: 'pm-behind-the-interview',
    slug: 'pm-behind-the-interview',
    name: 'Behind the Interview Scenes',
    priceNum: 699,
    priceStr: '₹699',
    categoryType: 'digital',
    fulfillmentType: 'DOWNLOAD',
    deliveryTime: 'Instant',
    storageFileName: 'pm-behindtheinterview.pdf',
    downloadPath: `${SUPABASE_STORAGE_BASE_URL}pm-behindtheinterview.pdf`
  },
  'pm-career-advancement': {
    id: 'pm-career-advancement',
    slug: 'pm-career-advancement',
    name: 'Tips & Tricks for Career Advancement in Product Management',
    priceNum: 499,
    priceStr: '₹499',
    categoryType: 'digital',
    fulfillmentType: 'DOWNLOAD',
    deliveryTime: 'Instant',
    storageFileName: 'pm-careeradvancement.pdf',
    downloadPath: `${SUPABASE_STORAGE_BASE_URL}pm-careeradvancement.pdf`
  },
  'pm-resume-cover': {
    id: 'pm-resume-cover',
    slug: 'pm-resume-cover',
    name: 'Product Manager Resume & Cover Letter Templates',
    priceNum: 399,
    priceStr: '₹399',
    categoryType: 'digital',
    fulfillmentType: 'DOWNLOAD',
    deliveryTime: 'Instant',
    storageFileName: 'pm-resumecover.pdf',
    downloadPath: `${SUPABASE_STORAGE_BASE_URL}pm-resumecover.pdf`
  }
};

export const SLUG_ALIASES: Record<string, string> = {
  'before-you-build-a-brand-guide': 'before-you-build-a-brand',
  'before-you-design-guide': 'before-you-design',
  'before-you-ask-ai': 'before-you-prompt',
  'pm-behind-the-interview-scenes': 'pm-behind-the-interview',
  'pm-resume-cover-templates': 'pm-resume-cover',
  'make-brand-premium': 'make-my-brand-premium',
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
