import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface HreflangEntry {
  lang: string;
  href: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  robots?: string;
  noindex?: boolean;
  schema?: Record<string, any> | Record<string, any>[];
  hreflang?: HreflangEntry[];
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Mayaa Solutions | Brands, Websites, Digital Products & Business Systems',
  description = 'Mayaa Solutions helps ambitious startups, enterprises, and growing brands with bespoke brand strategy, website design, growth marketing, and business management systems.',
  keywords = 'brand building, website design, digital products, business systems, digital marketing, business growth, Mayaa Solutions',
  ogImage = 'https://mayaasolutions.in/images/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  robots,
  noindex = false,
  schema,
  hreflang,
}) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper function to update or create meta tags
    const setMetaTag = (selector: string, attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Calculate clean Canonical & Open Graph URL
    const cleanPath = location.pathname === '/' ? '' : location.pathname.replace(/\/$/, '');
    const currentUrl = canonicalUrl || `https://mayaasolutions.in${cleanPath}`;

    // 2. Meta Description & Keywords
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);
    }

    // 3. Robots Directives
    const robotsContent = noindex ? 'noindex, nofollow' : robots || 'index, follow';
    setMetaTag('meta[name="robots"]', 'name', 'robots', robotsContent);

    // 4. Open Graph Tags
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage.startsWith('http') ? ogImage : `https://mayaasolutions.in${ogImage}`);

    // 5. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage.startsWith('http') ? ogImage : `https://mayaasolutions.in${ogImage}`);

    // 6. Canonical Link Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', currentUrl);
      document.head.appendChild(canonical);
    }

    // 7. Hreflang Tags (if specified)
    // Remove old dynamic hreflang tags first
    document.querySelectorAll('link[data-dynamic-hreflang]').forEach((el) => el.remove());
    if (hreflang && hreflang.length > 0) {
      hreflang.forEach((entry) => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', entry.lang);
        link.setAttribute('href', entry.href);
        link.setAttribute('data-dynamic-hreflang', 'true');
        document.head.appendChild(link);
      });
    }

    // 8. JSON-LD Structured Data
    // Remove previous dynamic schema scripts
    document.querySelectorAll('script[data-dynamic-schema]').forEach((el) => el.remove());
    if (schema) {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-dynamic-schema', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup dynamic schema on unmount
      document.querySelectorAll('script[data-dynamic-schema]').forEach((el) => el.remove());
      document.querySelectorAll('link[data-dynamic-hreflang]').forEach((el) => el.remove());
    };
  }, [
    title,
    description,
    keywords,
    ogImage,
    ogType,
    canonicalUrl,
    robots,
    noindex,
    schema,
    hreflang,
    location.pathname,
  ]);

  // Scroll to top ONLY on genuine route pathname changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return null;
};
