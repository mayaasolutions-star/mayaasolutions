import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductHeader } from './components/ProductHeader';
import { ProductFooter } from './components/ProductFooter';
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
import { AIVideoContentPage } from './pages/AIVideoContentPage';
import { BusinessToolsPage } from './pages/BusinessToolsPage';
import { WebsitesPage } from './pages/WebsitesPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ContactPage } from './pages/ContactPage';
import { IntentPage } from './pages/IntentPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { TermsPage } from './pages/TermsPage';
import { PaymentSuccessPage } from './pages/PaymentSuccessPage';
import { GlobalMarketsPage } from './pages/GlobalMarketsPage';
import { MarketDetailPage } from './pages/MarketDetailPage';
import { IndiaMarketPage } from './pages/IndiaMarketPage';
import { DubaiMarketPage } from './pages/DubaiMarketPage';
import { UsaMarketPage } from './pages/UsaMarketPage';
import { AustraliaMarketPage } from './pages/AustraliaMarketPage';
import { UkMarketPage } from './pages/UkMarketPage';
import { SingaporeMarketPage } from './pages/SingaporeMarketPage';
import { GermanyMarketPage } from './pages/GermanyMarketPage';
import { ParisMarketPage } from './pages/ParisMarketPage';
import { SaudiArabiaMarketPage } from './pages/SaudiArabiaMarketPage';
import { NorwayMarketPage } from './pages/NorwayMarketPage';
import { IrelandMarketPage } from './pages/IrelandMarketPage';
import { AustriaMarketPage } from './pages/AustriaMarketPage';
import { PolandMarketPage } from './pages/PolandMarketPage';
import { SwitzerlandMarketPage } from './pages/SwitzerlandMarketPage';
import { NetherlandsMarketPage } from './pages/NetherlandsMarketPage';
import { DenmarkMarketPage } from './pages/DenmarkMarketPage';
import { SwedenMarketPage } from './pages/SwedenMarketPage';
import { BelgiumMarketPage } from './pages/BelgiumMarketPage';
import { FinlandMarketPage } from './pages/FinlandMarketPage';
import { LuxembourgMarketPage } from './pages/LuxembourgMarketPage';
import { ProductItem as ProductDataItem } from './constants/productsData';
import { ProjectItem } from './constants/portfolioData';
import { AnalyticsTracker } from './components/AnalyticsTracker';

const PaymentSuccessHandler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const search = location.search || (typeof window !== 'undefined' ? window.location.search : '');
  const pathname = location.pathname || (typeof window !== 'undefined' ? window.location.pathname : '');

  const isPaymentSuccess =
    pathname.includes('payment-success') ||
    search.includes('payment-success') ||
    search.includes('order_id=') ||
    search.includes('cf_id=');

  if (isPaymentSuccess && pathname !== '/payment-success') {
    return <PaymentSuccessPage />;
  }

  return <>{children}</>;
};

const AppContent: React.FC<{
  selectedProject: ProjectItem | null;
  setSelectedProject: (project: ProjectItem | null) => void;
  checkoutProduct: ProductDataItem | null;
  setCheckoutProduct: (product: ProductDataItem | null) => void;
}> = ({
  selectedProject,
  setSelectedProject,
  checkoutProduct,
  setCheckoutProduct,
}) => {
  const location = useLocation();
  const isProductRoute = location.pathname.startsWith('/products');

  return (
    <div className="min-h-screen flex flex-col bg-studio-950 text-studio-100 selection:bg-studio-100 selection:text-white font-sans antialiased">
      {isProductRoute ? <ProductHeader /> : <Navbar />}

      <div className="flex-1">
          <PaymentSuccessHandler>
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
            <Route path="/brand" element={<ServiceBrandingPage />} />
            <Route path="/services/branding" element={<ServiceBrandingPage />} />
            <Route path="/services/brand-building" element={<ServiceBrandingPage />} />
            <Route path="/services/website" element={<Navigate to="/websites" replace />} />
            <Route path="/services/digital-design" element={<Navigate to="/websites" replace />} />
            <Route path="/services/marketing" element={<ServiceMarketingPage />} />
            <Route path="/services/growth" element={<ServiceGrowthPage />} />
            <Route path="/services/ai-video-content" element={<AIVideoContentPage />} />
            <Route path="/business-systems" element={<BusinessToolsPage />} />
            <Route path="/business-tools" element={<Navigate to="/business-systems" replace />} />
            <Route path="/services/business-growth" element={<Navigate to="/business-systems" replace />} />
            <Route path="/websites" element={<WebsitesPage />} />

            {/* Global Markets Hub & Dedicated Target Market Pages */}
            <Route path="/global-markets" element={<GlobalMarketsPage />} />
            <Route path="/global-markets/india" element={<IndiaMarketPage />} />
            <Route path="/global-markets/bharat" element={<Navigate to="/global-markets/india" replace />} />
            <Route path="/global-markets/uae" element={<DubaiMarketPage />} />
            <Route path="/global-markets/dubai" element={<Navigate to="/global-markets/uae" replace />} />
            <Route path="/global-markets/usa" element={<UsaMarketPage />} />
            <Route path="/global-markets/australia" element={<AustraliaMarketPage />} />
            <Route path="/global-markets/uk" element={<UkMarketPage />} />
            <Route path="/global-markets/singapore" element={<SingaporeMarketPage />} />
            <Route path="/global-markets/germany" element={<GermanyMarketPage />} />
            <Route path="/global-markets/paris" element={<ParisMarketPage />} />
            <Route path="/global-markets/netherlands" element={<NetherlandsMarketPage />} />
            <Route path="/global-markets/saudi-arabia" element={<SaudiArabiaMarketPage />} />
            <Route path="/global-markets/denmark" element={<DenmarkMarketPage />} />
            <Route path="/global-markets/abu-dhabi" element={<Navigate to="/global-markets/uae" replace />} />
            <Route path="/global-markets/sweden" element={<SwedenMarketPage />} />
            <Route path="/global-markets/norway" element={<NorwayMarketPage />} />
            <Route path="/global-markets/switzerland" element={<SwitzerlandMarketPage />} />
            <Route path="/global-markets/ireland" element={<IrelandMarketPage />} />
            <Route path="/global-markets/belgium" element={<BelgiumMarketPage />} />
            <Route path="/global-markets/austria" element={<AustriaMarketPage />} />
            <Route path="/global-markets/finland" element={<FinlandMarketPage />} />
            <Route path="/global-markets/poland" element={<PolandMarketPage />} />
            <Route path="/global-markets/luxembourg" element={<LuxembourgMarketPage />} />
            <Route path="/global-markets/france" element={<Navigate to="/global-markets/paris" replace />} />
            <Route path="/global-markets/:countrySlug" element={<MarketDetailPage />} />

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
            <Route path="/industries" element={<IndustriesPage />} />
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
            <Route path="/industries.html" element={<Navigate to="/industries" replace />} />

            {/* Articles & Insights */}
            <Route path="/insights" element={<ArticlesPage />} />
            <Route path="/insights/:slug" element={<ArticleDetailPage />} />

            {/* Legal & Utility */}
            <Route path="/terms-conditions" element={<TermsPage />} />
            <Route path="/payment-success" element={<PaymentSuccessPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PaymentSuccessHandler>
      </div>

        {!location.pathname.startsWith('/') || location.pathname !== '/' ? (
          isProductRoute ? <ProductFooter /> : <Footer />
        ) : null}
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
  );
};

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [checkoutProduct, setCheckoutProduct] = useState<ProductDataItem | null>(null);

  return (
    <Router>
      <AnalyticsTracker />
      <AppContent
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        checkoutProduct={checkoutProduct}
        setCheckoutProduct={setCheckoutProduct}
      />
    </Router>
  );
};
