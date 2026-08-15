import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PRODUCTS_DATA, ProductItem } from '../constants/productsData';
import { ArrowLeft, CheckCircle2, Clock, ChevronDown, ChevronUp, Lock, ShieldCheck, FileText, Check, ArrowRight, Zap, Sparkles, BookOpen, Layers } from 'lucide-react';

interface ProductDetailPageProps {
  onOpenConsultation?: () => void;
  onOpenCheckout?: (product: ProductItem) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenCheckout }) => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS_DATA.find((p) => p.slug === slug) || PRODUCTS_DATA[0];

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const isDigital = product.categoryType === 'digital';
  const isBeforeYouGuide = product.id.startsWith('before-you-');
  const isPmProduct = product.id.startsWith('pm-');
  const isServiceProduct = product.categoryType === 'service';

  // Statement quote per product
  const getProductStatement = (p: ProductItem) => {
    if (p.slug === 'before-you-publish') return 'Before you publish, verify every detail that builds credibility.';
    if (p.slug === 'before-you-design-guide') return 'Before you design, align your visual strategy with user intent.';
    if (p.slug === 'before-you-ask-ai') return 'Before you prompt, structure your context for high-value outputs.';
    if (p.slug === 'before-you-build-a-brand-guide') return 'Before you build a brand, diagnose your positioning in the market.';
    if (p.slug === 'before-you-launch') return 'Before you launch, ensure your product foundation is built to convert.';
    if (p.slug === 'build-my-brand') return 'Experience 3 personalised brand concepts before investing in full branding.';
    if (p.slug === 'build-my-website') return 'See your homepage come to life with a custom demo in 24 hours.';
    if (p.slug === 'design-my-logo') return 'Get custom logo concepts tailored to your business identity.';
    if (p.slug === 'make-brand-premium') return 'Transform your visual touchpoints to reflect a high-end brand.';
    if (p.slug === 'name-my-business') return 'Discover clear, trademark-ready brand names for your company.';
    if (p.slug === 'pm-resume-cover-templates') return 'Stand out in hiring stacks with proven PM resume & cover letter architectures.';
    if (p.slug === 'pm-career-advancement') return 'Accelerate your product management trajectory with practical strategy.';
    if (p.slug === 'pm-behind-the-interview-scenes') return 'Master product interview loops with insider breakdown frameworks.';
    return product.tagline;
  };

  // Product-specific CTA text generator
  const getCtaLabel = (p: ProductItem) => {
    if (p.slug === 'build-my-brand') return 'Start Brand Concepts';
    if (p.slug === 'build-my-website') return 'Get Homepage Demo';
    if (p.slug === 'design-my-logo') return 'Start Logo Concepts';
    if (p.slug === 'make-brand-premium') return 'Upgrade Your Brand';
    if (p.slug === 'name-my-business') return 'Get Business Names';
    if (p.slug === 'before-you-publish') return 'Get The Publishing Guide';
    if (p.slug === 'before-you-design-guide') return 'Get The Design Guide';
    if (p.slug === 'before-you-ask-ai') return 'Get The AI Framework';
    if (p.slug === 'before-you-build-a-brand-guide') return 'Get The Brand Guide';
    if (p.slug === 'before-you-launch') return 'Get The Launch Playbook';
    if (p.slug === 'pm-resume-cover-templates') return 'Get PM Templates';
    if (p.slug === 'pm-career-advancement') return 'Get PM Career Guide';
    if (p.slug === 'pm-behind-the-interview-scenes') return 'Get Interview Guide';
    return 'Get Instant Access';
  };

  // Target audience profiles
  const getAudienceTags = (p: ProductItem) => {
    if (p.id.startsWith('pm-')) {
      return ['Product Managers', 'Associate PMs', 'Career Switchers', 'Tech Leaders'];
    }
    if (p.id.startsWith('before-you-')) {
      return ['Founders', 'Creators', 'Digital Publishers', 'Product Owners'];
    }
    return ['Founders', 'Business Owners', 'Startups', 'D2C Brands'];
  };

  const audienceTags = getAudienceTags(product);
  const ctaLabel = getCtaLabel(product);
  const statementQuote = getProductStatement(product);

  const handlePurchase = () => {
    if (onOpenCheckout) {
      onOpenCheckout(product);
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <>
      <SEO
        title={`${product.name} (${product.price}) | Mayaa Solutions Digital Product`}
        description={product.summary}
      />

      <main className="pt-24 sm:pt-28 pb-20 bg-studio-950 text-studio-100">
        
        {/* Top Minimal Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 pb-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-studio-400 hover:text-studio-100 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Digital Products
          </Link>
        </div>

        {/* ================================================== */}
        {/* 1. PRODUCT STORE HERO — EDITORIAL COVER & PREVIEW   */}
        {/* ================================================== */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 pb-16">
          <div className="rounded-3xl p-6 sm:p-10 md:p-12 bg-white border border-studio-850 shadow-sm relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Product Identity & Purchase Action */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Category Pill & Delivery Badge */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3.5 py-1.5 rounded-full bg-studio-100 text-white text-[11px] font-extrabold uppercase tracking-widest shadow-sm">
                    {product.categoryLabel}
                  </span>
                  
                  <span className="px-3.5 py-1.5 rounded-full bg-studio-900 border border-studio-850 text-studio-300 text-xs font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-studio-100" />
                    {product.deliveryTime}
                  </span>
                </div>

                {/* Editorial Product Title Display */}
                {isBeforeYouGuide ? (
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-extrabold tracking-widest text-studio-400 uppercase block">GUIDE COLLECTION</span>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.05]">
                      {product.name}
                    </h1>
                  </div>
                ) : (
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] leading-[1.08] tracking-tight">
                    {product.name}
                  </h1>
                )}

                {/* Subtitle Benefit Statement */}
                <p className="text-lg sm:text-2xl text-studio-300 font-bold leading-snug">
                  {product.tagline}
                </p>

                {/* Summary Paragraph */}
                <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed">
                  {product.summary}
                </p>

                {/* PRICE AS A BOLD DESIGN ELEMENT & ACTION BUTTON */}
                <div className="pt-4 p-6 rounded-2xl bg-studio-900 border border-studio-850 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-studio-400 block">PRICE</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-studio-100 font-mono">{product.price}</span>
                      <span className="text-xs text-studio-400 font-medium">One-Time</span>
                    </div>
                  </div>

                  <button
                    onClick={handlePurchase}
                    className="px-8 py-4 bg-studio-100 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-studio-300 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>{ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Trust Line */}
                <div className="flex flex-wrap items-center gap-6 text-xs text-studio-400 font-medium pt-1">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-studio-100" />
                    <span>Secure Cashfree Checkout</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-studio-100" />
                    <span>{isDigital ? 'Instant PDF File Access' : '100% Adjusted Towards Full Project'}</span>
                  </div>
                </div>

              </div>

              {/* Right Column: LARGE REALISTIC PRODUCT COVER / SHOWCASE FRAME */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl p-5 bg-studio-900 border border-studio-850 shadow-md group">
                  
                  {/* Digital Product Cover Card Structure */}
                  <div className="rounded-xl bg-white border border-studio-850 p-6 space-y-6 relative overflow-hidden">
                    
                    {/* Header Label */}
                    <div className="flex justify-between items-center border-b border-studio-850 pb-4">
                      <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-studio-400">
                        {isDigital ? 'MAYAASOLUTIONS • DIGITAL PRODUCT' : 'MAYAASOLUTIONS • STUDIO PACKAGE'}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-studio-100 text-white text-[10px] font-mono font-bold shadow-sm">{product.price}</span>
                    </div>

                    {/* Product Cover Visual Frame */}
                    <div className="h-64 sm:h-72 rounded-lg overflow-hidden relative border border-studio-850 bg-studio-950">
                      <img
                        src={product.heroImage}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-studio-100/80 via-studio-100/20 to-transparent pointer-events-none" />
                      
                      {/* Overlay Title on Cover */}
                      <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-studio-300 block">{product.categoryLabel}</span>
                        <h3 className="text-lg font-extrabold leading-tight">{product.name}</h3>
                      </div>
                    </div>

                    {/* Deliverables Sneak Peek List */}
                    <div className="space-y-2 pt-2 border-t border-studio-850 text-xs">
                      <span className="text-[10px] font-extrabold font-mono text-studio-400 uppercase tracking-widest block">INCLUDED INSIDE</span>
                      <div className="space-y-1.5">
                        {product.deliverables.slice(0, 3).map((d, i) => (
                          <div key={i} className="flex items-center gap-2 text-studio-100 font-medium">
                            <Check className="w-3.5 h-3.5 text-studio-100 shrink-0 stroke-[3]" />
                            <span className="truncate">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ================================================== */}
        {/* 2. FULL-WIDTH LARGE EDITORIAL STATEMENT BANNER    */}
        {/* ================================================== */}
        <section className="py-16 bg-studio-900 border-t border-b border-studio-850 mb-16">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
            <span className="text-xs font-mono font-extrabold text-studio-400 uppercase tracking-widest block">THE PRINCIPLE</span>
            <blockquote className="text-2xl sm:text-4xl font-extrabold text-studio-100 leading-tight tracking-tight">
              "{statementQuote}"
            </blockquote>
          </div>
        </section>

        {/* ================================================== */}
        {/* 3. WHAT YOU GET — NUMBERED EDITORIAL ROWS          */}
        {/* ================================================== */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 pb-20 space-y-12">
          <div className="border-b border-studio-850 pb-4 space-y-2 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-extrabold text-studio-400 uppercase tracking-widest block">DELIVERABLES ARCHITECTURE</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100">What You Get.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Numbered List */}
            <div className="lg:col-span-7 space-y-6">
              {product.deliverables.map((del, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-studio-850 flex items-start gap-6 hover:border-studio-700 transition-all duration-300 shadow-sm">
                  <span className="text-3xl font-extrabold font-mono text-studio-100 shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="space-y-1 pt-1">
                    <h3 className="text-base sm:text-lg font-bold text-studio-100">{del}</h3>
                    <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">
                      Structured for immediate practical application with clear implementation guidelines.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Visual Product Inside Preview */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="p-8 rounded-3xl bg-white border border-studio-850 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-studio-850 pb-4">
                  <FileText className="w-6 h-6 text-studio-100" />
                  <div>
                    <h3 className="text-lg font-extrabold text-studio-100">{product.name}</h3>
                    <span className="text-xs text-studio-400 font-mono uppercase">{isDigital ? 'PDF Guide & Toolkit' : 'Personalised Deliverable'}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono font-extrabold text-studio-400 uppercase tracking-widest block">FEATURED SPECIFICATIONS</span>
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-studio-900 border border-studio-850 flex items-center gap-3 text-xs sm:text-sm font-bold text-studio-100">
                      <Check className="w-4 h-4 text-studio-100 shrink-0 stroke-[3]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-studio-850 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-studio-400 block">TOTAL PRICE</span>
                    <span className="text-2xl font-extrabold font-mono text-studio-100">{product.price}</span>
                  </div>

                  <button
                    onClick={handlePurchase}
                    className="px-6 py-3 bg-studio-100 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-studio-300 transition-all"
                  >
                    {ctaLabel}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================================================== */}
        {/* 4. WHO IT'S FOR — TARGET PROFILE STRIP              */}
        {/* ================================================== */}
        <section className="py-16 bg-studio-900 border-t border-b border-studio-850 mb-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-mono font-extrabold text-studio-400 uppercase tracking-widest block">TARGET AUDIENCE</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-studio-100">Who This Product Is Built For.</h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
              {audienceTags.map((tag, idx) => (
                <div key={idx} className="px-6 py-3 rounded-full bg-white border border-studio-850 text-sm font-extrabold text-studio-100 shadow-sm">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* 5. OUTCOME / TRANSFORMATION (BEFORE VS AFTER)      */}
        {/* ================================================== */}
        {product.beforeAfter && (
          <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 pb-20 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-mono font-extrabold text-studio-400 uppercase tracking-widest block">THE OUTCOME</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100">Before vs After.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* BEFORE */}
              <div className="p-8 rounded-3xl bg-studio-900 border border-studio-850 space-y-6">
                <span className="text-xs font-mono font-extrabold text-studio-400 uppercase tracking-widest block">BEFORE</span>
                <ul className="space-y-4">
                  {product.beforeAfter.before.map((b, i) => (
                    <li key={i} className="text-sm sm:text-base text-studio-300 font-normal flex items-start gap-3">
                      <span className="text-red-500 font-extrabold shrink-0">✕</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AFTER */}
              <div className="p-8 rounded-3xl bg-white border border-studio-850 shadow-sm space-y-6">
                <span className="text-xs font-mono font-extrabold text-studio-100 uppercase tracking-widest block">AFTER</span>
                <ul className="space-y-4">
                  {product.beforeAfter.after.map((a, i) => (
                    <li key={i} className="text-sm sm:text-base text-studio-100 font-bold flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-studio-100 shrink-0 mt-0.5" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ================================================== */}
        {/* 6. FREQUENTLY ASKED QUESTIONS                       */}
        {/* ================================================== */}
        <section className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12 pb-20 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-extrabold text-studio-400 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-studio-100">Questions & Answers.</h2>
          </div>

          <div className="space-y-4">
            {product.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-studio-850 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex justify-between items-center font-extrabold text-studio-100 text-base hover:text-studio-300 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-studio-100 shrink-0" /> : <ChevronDown className="w-5 h-5 text-studio-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm text-studio-300 font-normal leading-relaxed border-t border-studio-850 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ================================================== */}
        {/* 7. PURCHASE CTA SECTION                             */}
        {/* ================================================== */}
        <section className="py-20 bg-white border-t border-studio-850">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <span className="text-xs font-mono font-extrabold text-studio-400 uppercase tracking-widest block">
              INSTANT ACCESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 tracking-tight">
              Get {product.name} ({product.price})
            </h2>
            <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed max-w-xl mx-auto">
              {product.summary}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handlePurchase}
                className="px-10 py-5 bg-studio-100 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl hover:bg-studio-300 transition-all shadow-md w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>{ctaLabel} ({product.price})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-studio-400 font-medium pt-1">
              {product.trustLine || (isDigital ? 'Instant PDF Download • Lifetime Access' : '100% Adjusted Towards Full Project')}
            </p>
          </div>
        </section>

      </main>
    </>
  );
};
