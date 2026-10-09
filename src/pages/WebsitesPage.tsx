import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Zap, Search, ShieldCheck, Cpu, Code2, Layers, ChevronDown, CheckCircle2, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { getServiceSchema, getBreadcrumbSchema } from '../utils/seoMetadata';
import { WEBSITES_DATA, WebsiteProject } from '../constants/websitesData';
import { WebsitePreviewCard } from '../components/WebsitePreviewCard';
import { WebsiteModal } from '../components/WebsiteModal';

interface FAQItem {
  question: string;
  answer: string;
}

const WEBSITE_FAQS: FAQItem[] = [
  {
    question: 'What technology stack do you use to build websites?',
    answer:
      'We build with modern, production-grade frontend architectures—primarily React, Vite, TypeScript, and Tailwind CSS. We avoid sluggish WordPress page builders and bloated themes that degrade performance. When dynamic content editing is required, we integrate lightweight headless CMS platforms or structured markdown pipelines that keep load times sub-second.',
  },
  {
    question: 'How do you guarantee fast load times and mobile responsiveness?',
    answer:
      'Every interface is engineered mobile-first with adaptive layouts, compressed WebP/AVIF media delivery, and code-splitting. We test against Google Core Web Vitals to ensure optimal Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS), targeting 90+ PageSpeed scores on mobile and desktop.',
  },
  {
    question: 'How is international SEO integrated into the website development process?',
    answer:
      'Technical SEO is built directly into the codebase rather than patched in after launch. This includes semantic HTML5 markup, canonical URL tags, Open Graph cards, automated XML sitemaps, valid JSON-LD structured data (Organization, WebSite, Service schemas), and search engine indexing configurations.',
  },
  {
    question: 'Can our internal team edit text and images after the website launches?',
    answer:
      'Yes. Depending on your team’s workflow, we configure structured headless content management tools or straightforward administrative controls so non-technical team members can publish updates, blog insights, and service details without touching code.',
  },
];

const PRINCIPLES = [
  {
    icon: Zap,
    title: 'Sub-Second Performance',
    desc: 'Bespoke React architecture and optimized media assets ensure instant page transitions and exceptional Google Core Web Vitals.',
  },
  {
    icon: Search,
    title: 'Search & AEO Discoverability',
    desc: 'Structured JSON-LD schema, semantic headings, and clean URL routing make your services effortlessly crawlable by search and AI engines.',
  },
  {
    icon: ShieldCheck,
    title: 'Institutional Credibility',
    desc: 'Editorial typography, balanced whitespace, and purposeful layout hierarchy project enterprise stability and command buyer trust.',
  },
  {
    icon: Layers,
    title: 'Frictionless Conversion UX',
    desc: 'User journeys and enquiry mechanisms designed to answer customer hesitations and guide qualified visitors toward direct action.',
  },
];

const INTEGRATIONS = [
  {
    title: 'Custom API & Form Endpoints',
    desc: 'Direct integrations with secure databases (Supabase, PostgreSQL) and automated webhook notifications.',
  },
  {
    title: 'Payment Gateway Workflows',
    desc: 'Frictionless checkout experiences integrated with Cashfree, Razorpay, or Stripe for domestic and international billing.',
  },
  {
    title: 'Headless Content Systems',
    desc: 'Flexible content publishing models that allow non-technical teams to update pages without code regressions.',
  },
  {
    title: 'Telemetry & Analytics',
    desc: 'Precision setup of Google Tag Manager, GA4 event tracking, Meta Pixel, and conversion goal funnels.',
  },
  {
    title: 'Global CDN Delivery',
    desc: 'Edge deployment on globally distributed CDNs (Cloudflare, Vercel, AWS) ensuring low latency across all international regions.',
  },
  {
    title: 'Strict Security & Accessibility',
    desc: 'SSL/TLS encryption, WCAG-conscious contrast ratios, and security headers safeguarding client communications.',
  },
];

const WORKFLOW_STAGES = [
  {
    num: '01',
    title: 'Commercial Discovery & Architecture',
    desc: 'We map your target audience, analyze competitive digital benchmarks, and architect the sitemap hierarchy and customer conversion pathways.',
  },
  {
    num: '02',
    title: 'Wireframes & Editorial UX',
    desc: 'We test content hierarchy, navigation clarity, and responsive layouts through low-fidelity prototypes before visual styling begins.',
  },
  {
    num: '03',
    title: 'Bespoke UI Design & Prototyping',
    desc: 'We craft high-fidelity desktop and mobile interface designs featuring bespoke typography, brand assets, and restrained interactive states.',
  },
  {
    num: '04',
    title: 'Modern Frontend Engineering',
    desc: 'We build production-ready, clean code using modern React and TypeScript—free of bloated templates or extraneous libraries.',
  },
  {
    num: '05',
    title: 'QA, SEO Hardening & Deployment',
    desc: 'Cross-browser testing, Core Web Vitals optimization, schema validation, and secure deployment to high-speed global infrastructure.',
  },
];

export const WebsitesPage: React.FC = () => {
  const [selectedModalProject, setSelectedModalProject] = useState<WebsiteProject | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <>
      <SEO
        title="High-Performance B2B Websites & Digital Experiences | Mayaa Solutions"
        description="We build fast, responsive, and search-optimized websites engineered for commercial clarity, authority, and qualified enquiries across India and global markets."
        canonicalUrl="https://mayaasolutions.in/websites"
        schema={[
          getServiceSchema(
            'High-Performance Websites & Digital Experiences',
            'We build fast, responsive, and search-optimized websites engineered for commercial clarity, authority, and qualified enquiries across India and global markets.',
            'Custom Web Design & Frontend Engineering',
            '/websites'
          ),
          getBreadcrumbSchema([
            { name: 'Home', urlPath: '/' },
            { name: 'Services', urlPath: '/services' },
            { name: 'Websites', urlPath: '/websites' },
          ]),
        ]}
      />

      <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden">

        {/* ==================================================
            01. HERO SECTION
        ================================================== */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 px-6 md:px-12 max-w-6xl mx-auto border-b border-neutral-900">
          <div className="flex flex-col items-start max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-950 mb-8"
            >
              <Globe className="w-3.5 h-3.5 text-neutral-300" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-neutral-400">
                CAPABILITY 02 · HIGH-PERFORMANCE WEBSITES
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.04] mb-8"
            >
              Websites engineered as <br className="hidden sm:inline" />
              commercial flagships, <br className="hidden sm:inline" />
              <span className="font-light italic text-neutral-400">not static brochures.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-normal leading-relaxed max-w-3xl mb-10"
            >
              A website should be your most capable commercial asset. We design and develop custom, fast, and search-optimized digital platforms that articulate your capability clearly and turn qualified visits into engaged clients.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Link
                to="/contact?service=websites"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-xl group"
              >
                <span>Discuss a Website Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="#live-showcase"
                className="inline-flex items-center justify-center px-8 py-4 bg-neutral-950 text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
              >
                Inspect Live Projects ↓
              </a>
            </motion.div>
          </div>

          {/* Metric Bar */}
          <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-neutral-500 uppercase tracking-widest">
            <span>Modern React Architecture</span>
            <span className="hidden sm:inline">•</span>
            <span>Sub-Second TTFB & Core Web Vitals</span>
            <span className="hidden sm:inline">•</span>
            <span>International SEO & AEO Ready</span>
          </div>
        </section>

        {/* ==================================================
            02. STATIC BROCHURE VS. PURPOSE-BUILT FLAGSHIP
        ================================================== */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
              The Strategic Difference
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              The difference between a site that exists and one that delivers.
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              Most agency websites look acceptable on surface inspection but suffer from bloated page builders, poor mobile performance, and confusing conversion paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Generic Website */}
            <div className="p-8 md:p-10 rounded-2xl bg-neutral-950/40 border border-neutral-900 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  Traditional Approach
                </span>
                <span className="px-2.5 py-1 rounded bg-neutral-900 text-neutral-400 text-[11px] font-mono">
                  Static Brochure
                </span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-300">
                Heavy Templates & Fragmented Journeys
              </h3>
              <ul className="space-y-4 text-xs sm:text-sm text-neutral-400">
                <li className="flex items-start gap-3">
                  <span className="text-neutral-600 font-bold">✕</span>
                  <span>Slow load speeds caused by third-party plugin bloat and unoptimized assets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-600 font-bold">✕</span>
                  <span>Generic agency copy that fails to explain what the business actually does.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-600 font-bold">✕</span>
                  <span>Neglected technical SEO, missing schema markup, and broken mobile viewports.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-600 font-bold">✕</span>
                  <span>Buried enquiry forms that create unnecessary friction for prospective buyers.</span>
                </li>
              </ul>
            </div>

            {/* Mayaa Engineered Experience */}
            <div className="p-8 md:p-10 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-300 uppercase tracking-wider font-bold">
                  Mayaa Engineering
                </span>
                <span className="px-2.5 py-1 rounded bg-white text-black text-[11px] font-mono font-bold">
                  Commercial Flagship
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Bespoke Performance & Intentional UX
              </h3>
              <ul className="space-y-4 text-xs sm:text-sm text-neutral-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Custom React architecture delivering sub-second page loads on global connections.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Precision editorial typography and clear messaging that immediately build credibility.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Complete JSON-LD structured data and semantic hierarchy built for search and AI discovery.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Intuitive conversion architecture guiding visitors from initial interest to direct enquiry.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ==================================================
            03. DIGITAL EXPERIENCE PRINCIPLES
        ================================================== */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Four architectural standards behind every build.
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              We design digital experiences that balance visual sophistication with rigorous engineering discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINCIPLES.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6">
                      <Icon className="w-5 h-5 text-neutral-300" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==================================================
            04. AUTHENTIC INTERACTIVE WEBSITE SHOWCASE
        ================================================== */}
        <section id="live-showcase" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
                Live Platforms
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Authentic websites delivered for real clients.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-normal leading-relaxed">
              Click any project card to interact with the live website inside our inspection frame or open the verified production domain.
            </p>
          </div>

          {/* Grid of Real Website Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {WEBSITES_DATA.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="w-full"
              >
                <WebsitePreviewCard
                  project={project}
                  onOpenModal={(proj) => setSelectedModalProject(proj)}
                  index={idx}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ==================================================
            05. TECHNICAL CAPABILITIES & INTEGRATIONS
        ================================================== */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
              Engineering Depth
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Production-ready integrations and capabilities.
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              We connect your website directly into your business operations, payment pipelines, and analytics infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTEGRATIONS.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800/80 flex flex-col justify-between"
              >
                <div>
                  <Code2 className="w-5 h-5 text-neutral-400 mb-4" />
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            06. 5-STAGE ENGINEERING PROCESS
        ================================================== */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
              Delivery Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              From requirement to production launch.
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              Every website engagement follows a predictable five-stage progression with clear milestones and live staging previews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {WORKFLOW_STAGES.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-neutral-400 font-bold block mb-3">
                    STAGE {stage.num}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            07. BUYER FAQS (ACCORDION)
        ================================================== */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto border-b border-neutral-900">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Direct answers to common questions.
            </h2>
          </div>

          <div className="space-y-4">
            {WEBSITE_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-neutral-950 border border-neutral-800/80 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-sm text-neutral-400 leading-relaxed border-t border-neutral-900">
                          <p className="pt-4">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==================================================
            08. CONVERSION FINAL CTA
        ================================================== */}
        <section className="py-28 md:py-36 px-6 md:px-12 max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-950 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">
              Start Your Digital Platform
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.06] mb-6 max-w-4xl text-balance">
            Have a business that needs a better digital experience?
          </h2>

          <p className="text-base sm:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl mb-10 text-balance">
            Let’s build a website that articulates your value properly, loads instantly, and turns visitors into clients.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
            <Link
              to="/contact?service=websites"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-xl group"
            >
              <span>Discuss a Website Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="mailto:contact@mayaasolutions.in?subject=Website%20Design%20Inquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-neutral-950 text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
            >
              contact@mayaasolutions.in
            </a>
          </div>

          {/* Internal links to other core capabilities */}
          <div className="pt-8 border-t border-neutral-900 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-neutral-500 uppercase tracking-wider">
            <span>Also explore:</span>
            <Link to="/our-work" className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4">
              Selected Work & Case Studies →
            </Link>
            <Link to="/brand" className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4">
              Brand Building & Positioning →
            </Link>
            <Link to="/business-systems" className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4">
              Personalised Business Systems →
            </Link>
          </div>
        </section>

      </main>

      {/* FULLSCREEN INTERACTIVE PREVIEW MODAL */}
      <WebsiteModal
        project={selectedModalProject}
        onClose={() => setSelectedModalProject(null)}
      />
    </>
  );
};
