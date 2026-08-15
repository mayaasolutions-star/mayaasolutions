import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ProjectModal } from './components/ProjectModal';
import { ProductCheckoutModal } from './components/ProductCheckoutModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceBrandingPage } from './pages/ServiceBrandingPage';
import { ServiceWebsitePage } from './pages/ServiceWebsitePage';
import { ServiceMarketingPage } from './pages/ServiceMarketingPage';
import { ServiceGrowthPage } from './pages/ServiceGrowthPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { IntentPage } from './pages/IntentPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { TermsPage } from './pages/TermsPage';
import { PaymentSuccessPage } from './pages/PaymentSuccessPage';
import { ProductItem as ProductDataItem } from './constants/productsData';
import { ProjectItem } from './constants/portfolioData';
import { AnalyticsTracker } from './components/AnalyticsTracker';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [checkoutProduct, setCheckoutProduct] = useState<ProductDataItem | null>(null);

  return (
    <Router>
      <AnalyticsTracker />
      <div className="min-h-screen flex flex-col bg-studio-950 text-studio-100 selection:bg-studio-100 selection:text-white font-sans antialiased">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onSelectProject={(project) => setSelectedProject(project)}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            
            {/* Core Services Hub & Detail Pages */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/branding" element={<ServiceBrandingPage />} />
            <Route path="/services/website" element={<ServiceWebsitePage />} />
            <Route path="/services/marketing" element={<ServiceMarketingPage />} />
            <Route path="/services/business-growth" element={<ServiceGrowthPage />} />

            {/* Products & Starter Packages Hub & Detail Pages (All 13 Products) */}
            <Route path="/products" element={<ProductsPage onOpenCheckout={(prod) => setCheckoutProduct(prod)} />} />
            <Route path="/products/:slug" element={<ProductDetailPage onOpenCheckout={(prod) => setCheckoutProduct(prod)} />} />
            
            {/* Portfolio & Contact */}
            <Route
              path="/our-work"
              element={
                <PortfolioPage
                  onSelectProject={(project) => setSelectedProject(project)}
                />
              }
            />
            <Route path="/contact" element={<ContactPage />} />

            {/* Dedicated Intent Routes */}
            <Route path="/intent/:type" element={<IntentPage />} />
            
            {/* Legacy HTML & Alias Route Redirects for ALL 13 Products */}
            <Route path="/buildmybrand.html" element={<Navigate to="/products/build-my-brand" replace />} />
            <Route path="/buildmywebsite.html" element={<Navigate to="/products/build-my-website" replace />} />
            <Route path="/designmylogo.html" element={<Navigate to="/products/design-my-logo" replace />} />
            <Route path="/makebrandpremium.html" element={<Navigate to="/products/make-my-brand-premium" replace />} />
            <Route path="/namemybusiness.html" element={<Navigate to="/products/name-my-business" replace />} />
            <Route path="/beforeyoupublish.html" element={<Navigate to="/products/before-you-publish" replace />} />
            <Route path="/beforeyoudesign.html" element={<Navigate to="/products/before-you-design" replace />} />
            <Route path="/beforeyouprompt.html" element={<Navigate to="/products/before-you-prompt" replace />} />
            <Route path="/beforeyoubuildabrand.html" element={<Navigate to="/products/before-you-build-a-brand" replace />} />
            <Route path="/beforeyoulaunch.html" element={<Navigate to="/products/before-you-launch" replace />} />
            <Route path="/pm-resumecover.html" element={<Navigate to="/products/pm-resume-cover" replace />} />
            <Route path="/pm-careeradvancement.html" element={<Navigate to="/products/pm-career-advancement" replace />} />
            <Route path="/pm-behindtheinterview.html" element={<Navigate to="/products/pm-behind-the-interview" replace />} />

            {/* Backwards-compatible alias route redirects */}
            <Route path="/products/before-you-ask-ai" element={<Navigate to="/products/before-you-prompt" replace />} />
            <Route path="/products/before-you-design-guide" element={<Navigate to="/products/before-you-design" replace />} />
            <Route path="/products/before-you-build-a-brand-guide" element={<Navigate to="/products/before-you-build-a-brand" replace />} />
            <Route path="/products/pm-resume-cover-templates" element={<Navigate to="/products/pm-resume-cover" replace />} />
            <Route path="/products/pm-behind-the-interview-scenes" element={<Navigate to="/products/pm-behind-the-interview" replace />} />
            <Route path="/products/make-brand-premium" element={<Navigate to="/products/make-my-brand-premium" replace />} />

            <Route path="/service-branding.html" element={<Navigate to="/services/branding" replace />} />
            <Route path="/service-website.html" element={<Navigate to="/services/website" replace />} />
            <Route path="/service-marketing.html" element={<Navigate to="/services/marketing" replace />} />
            <Route path="/service-businessgrowth.html" element={<Navigate to="/services/business-growth" replace />} />
            <Route path="/ourwork.html" element={<Navigate to="/our-work" replace />} />
            <Route path="/about.html" element={<Navigate to="/about" replace />} />
            <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
            <Route path="/services.html" element={<Navigate to="/services" replace />} />
            <Route path="/products.html" element={<Navigate to="/products" replace />} />

            {/* Articles & Insights */}
            <Route path="/insights" element={<ArticlesPage />} />
            <Route path="/insights/:slug" element={<ArticleDetailPage />} />

            {/* Legal & Utility */}
            <Route path="/terms-conditions" element={<TermsPage />} />
            <Route path="/payment-success" element={<PaymentSuccessPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <Footer />
        <ScrollToTop />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <ProductCheckoutModal
          product={checkoutProduct}
          onClose={() => setCheckoutProduct(null)}
        />
      </div>
    </Router>
  );
};
