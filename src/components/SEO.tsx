import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Mayaa Solutions | Premium Business Growth Studio • Branding & Digital Strategy',
  description = 'Mayaa Solutions helps ambitious startups, enterprises, and growing brands with bespoke brand strategy, website design, growth marketing, and business growth advisory.',
  keywords = 'branding studio, website design, luxury growth agency, brand strategy, digital marketing, business growth, Mayaa Solutions',
  ogImage = 'https://mayaasolutions.in/images/og-image.jpg',
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

    const currentUrl = `https://mayaasolutions.in${location.pathname}`;

    // 2. Meta Description & Keywords
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);

    // 3. Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);

    // 4. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // 5. Canonical Link Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', currentUrl);
      document.head.appendChild(canonical);
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, keywords, ogImage, location.pathname]);

  return null;
};
