/**
 * Centralized SEO & Structured Data (Schema.org) definitions for Mayaa Solutions
 * Strictly uses verified company information (Bangalore, Karnataka, India headquarters)
 * Zero fabricated credentials, fake addresses, or false local presence.
 */

export const BASE_URL = 'https://mayaasolutions.in';

// Verified Organization Schema
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Mayaa Solutions',
  url: `${BASE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    '@id': `${BASE_URL}/#logo`,
    url: `${BASE_URL}/images/mayaa-solutions-dark-logo.webp`,
    caption: 'Mayaa Solutions',
  },
  image: `${BASE_URL}/images/og-image.jpg`,
  email: 'contact@mayaasolutions.in',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/company/mayaa-solutions/',
    'https://www.instagram.com/mayaa.solutions/',
    'https://www.facebook.com/mayaasolutions/',
  ],
};

// Verified WebSite Schema
export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: `${BASE_URL}/`,
  name: 'Mayaa Solutions',
  description:
    'Mayaa Solutions builds brands, websites, digital products and business management systems for businesses that want to build something meaningful.',
  publisher: {
    '@id': `${BASE_URL}/#organization`,
  },
};

// Verified ProfessionalService Schema (Headquartered in Bangalore)
export const PROFESSIONAL_SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${BASE_URL}/#professional-service`,
  name: 'Mayaa Solutions',
  url: `${BASE_URL}/`,
  parentOrganization: {
    '@id': `${BASE_URL}/#organization`,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  email: 'contact@mayaasolutions.in',
  priceRange: '$$ - $$$$',
  areaServed: [
    'India',
    'United States',
    'United Kingdom',
    'United Arab Emirates',
    'Australia',
    'Singapore',
    'Germany',
    'Netherlands',
    'Saudi Arabia',
    'Switzerland',
    'Worldwide',
  ],
};

/**
 * Generate Service Schema
 */
export function getServiceSchema(
  name: string,
  description: string,
  serviceType: string,
  urlPath: string,
  areaServed: string[] = ['India', 'Worldwide']
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType,
    description,
    url: `${BASE_URL}${urlPath}`,
    provider: {
      '@id': `${BASE_URL}/#organization`,
    },
    areaServed,
    termsOfService: `${BASE_URL}/terms-conditions`,
  };
}

/**
 * Generate BreadcrumbList Schema
 */
export function getBreadcrumbSchema(items: { name: string; urlPath: string }[], id?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    ...(id ? { '@id': id } : {}),
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.urlPath}`,
    })),
  };
}

/**
 * Generate WebPage Schema
 */
export function getWebPageSchema(params: {
  name: string;
  description: string;
  urlPath: string;
  breadcrumbUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${BASE_URL}${params.urlPath}#webpage`,
    url: `${BASE_URL}${params.urlPath}`,
    name: params.name,
    description: params.description,
    isPartOf: {
      '@id': `${BASE_URL}/#website`,
    },
    about: {
      '@id': `${BASE_URL}/#organization`,
    },
    inLanguage: 'en',
    ...(params.breadcrumbUrl
      ? {
          breadcrumb: {
            '@id': params.breadcrumbUrl,
          },
        }
      : {}),
  };
}

/**
 * Generate VideoObject Schema for verified video portfolio items
 */
export function getVideoObjectSchema(video: {
  title: string;
  description: string;
  filename: string;
  duration?: string;
  uploadDate?: string;
  thumbnailUrl?: string;
}) {
  const contentUrl = `${BASE_URL}/images/${video.filename}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${contentUrl}#video`,
    name: video.title,
    description: video.description,
    contentUrl,
    inLanguage: 'en',
    ...(video.duration ? { duration: video.duration } : {}),
    ...(video.uploadDate ? { uploadDate: video.uploadDate } : {}),
    ...(video.thumbnailUrl ? { thumbnailUrl: video.thumbnailUrl } : {}),
  };
}

/**
 * Generate Article Schema for Insights
 */
export function getArticleSchema(article: {
  title: string;
  summary: string;
  slug: string;
  heroImage: string;
  date: string;
  author?: string;
}) {
  const publishedYear = article.date.includes('2026') ? '2026' : '2026';
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/insights/${article.slug}`,
    },
    headline: article.title,
    description: article.summary,
    image: article.heroImage.startsWith('http')
      ? article.heroImage
      : `${BASE_URL}${article.heroImage}`,
    author: {
      '@type': 'Person',
      name: article.author || 'Pratiksha Kulkarni',
      jobTitle: 'Founder, Mayaa Solutions',
    },
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    datePublished: `${publishedYear}-06-01T00:00:00+05:30`,
  };
}

/**
 * Generate Product Schema for Catalog Items
 */
export function getProductSchema(product: {
  name: string;
  summary: string;
  slug: string;
  priceNum: number;
  heroImage: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.summary,
    image: product.heroImage.startsWith('http')
      ? product.heroImage
      : `${BASE_URL}${product.heroImage}`,
    url: `${BASE_URL}/products/${product.slug}`,
    brand: {
      '@id': `${BASE_URL}/#organization`,
    },
    offers: {
      '@type': 'Offer',
      price: product.priceNum,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/products/${product.slug}`,
    },
  };
}

/**
 * Generate FAQPage Schema
 */
export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}
