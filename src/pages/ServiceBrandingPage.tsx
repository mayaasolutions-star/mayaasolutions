import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown, Layers, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { SEO } from '../components/SEO';
import { getServiceSchema, getBreadcrumbSchema } from '../utils/seoMetadata';
import { ProjectModal } from '../components/ProjectModal';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../constants/portfolioData';

interface FAQItem {
  question: string;
  answer: string;
}

const BRAND_FAQS: FAQItem[] = [
  {
    question: 'How long does a comprehensive brand building engagement take?',
    answer:
      'A typical engagement takes between 4 to 8 weeks, structured across three distinct phases: Diagnosis & Strategy (Weeks 1–2), Creative Exploration & Visual Identity (Weeks 3–5), and Guidelines, Collateral & Complete Asset Handover (Weeks 6–8). Every phase has clear review milestones so your leadership team remains aligned.',
  },
  {
    question: 'How do you ensure our brand communicates effectively in both India and international markets?',
    answer:
      'We analyze international competitor landscapes and cross-border commercial expectations without stripping away your authentic identity. We ensure typography supports international legibility, color palettes align with cultural nuances, and messaging communicates institutional credibility across markets, industries, and customer segments.',
  },
  {
    question: 'Do we receive full copyright and original vector master files?',
    answer:
      'Yes. Upon project completion and final payment, 100% of all intellectual property, trademark-ready vector files (SVG, EPS, AI), high-resolution exports (PNG, WebP), and digital design tokens are transferred to your company without ongoing licensing fees or restrictions.',
  },
  {
    question: 'Can you evolve an existing brand without losing established customer recognition?',
    answer:
      'Yes. We regularly execute strategic brand evolutions where existing market equity, core emblem recognizability, and historical goodwill are preserved while outdated typography, cluttered visual standards, and disjointed collateral are modernized for digital and enterprise scale.',
  },
];

const REAL_BRAND_PROJECTS = [
  {
    id: 'ajavu',
    title: 'Ajavu Tech',
    category: 'Brand Strategy • Digital Experience',
    image: '/images/creative_page_work_thumbnail_ajavu.webp',
    description: 'Building a technology brand that simplifies IT procurement through thoughtful strategy, clear communication, and customer-focused digital experiences.',
  },
  {
    id: 'g1gold',
    title: 'G1 Gold',
    category: 'Brand Strategy • Brand Positioning',
    image: '/images/creative_page_work_thumbnail_g1gold.webp',
    description: 'Building a premium jewellery brand through thoughtful strategy, trusted communication, and consistent customer experiences.',
  },
  {
    id: 'swaatienterprises',
    title: 'Swaati Enterprises',
    category: 'Brand Communication • Social Media Strategy',
    image: '/images/creative_page_work_thumbnail_swaatienterprises.webp',
    description: 'Strengthening an industrial manufacturing brand through consistent communication, festive storytelling, and meaningful customer engagement.',
  },
  {
    id: 'ks',
    title: 'KS Engineers',
    category: 'Brand Communication • Content Strategy',
    image: '/images/creative_page_work_thumbnail_ks_engineers.webp',
    description: 'Helping an engineering brand stay relevant and memorable through thoughtful seasonal communication and consistent social media storytelling.',
  },
];

const TOUCHPOINTS = [
  {
    title: 'Digital Flagship & Products',
    desc: 'Bespoke web typography, responsive design tokens, and user interface systems that reflect brand prestige on every screen.',
  },
  {
    title: 'Executive Pitch & Proposals',
    desc: 'Investor decks, B2B tender documents, and presentation templates engineered to help sales teams win premium deals.',
  },
  {
    title: 'Physical & Packaging Collateral',
    desc: 'Tactile packaging specifications, print finishes, merchandise, and environmental signage built to exact production standards.',
  },
  {
    title: 'Internal Governance & Voice',
    desc: 'Editorial tone-of-voice frameworks, naming architectures, and clear rules that prevent internal visual fragmentation.',
  },
];

export const ServiceBrandingPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleOpenProject = (projectId: string) => {
    const matched = PORTFOLIO_PROJECTS.find((p) => p.id === projectId);
    if (matched) {
      setSelectedProject(matched);
    }
  };

  return (
    <>
      <SEO
        title="Brand Building & Strategic Positioning | Mayaa Solutions"
        description="We build authoritative brand positioning, distinct visual identities, and modular brand systems for companies in India and international markets."
        canonicalUrl="https://mayaasolutions.in/brand"
        schema={[
          getServiceSchema(
            'Brand Building & Strategic Positioning',
            'We build authoritative brand positioning, distinct visual identities, and modular brand systems for companies in India and international markets. A brand is an economic moat, not merely a logo.',
            'Brand Strategy & Corporate Identity Design',
            '/brand'
          ),
          getBreadcrumbSchema([
            { name: 'Home', urlPath: '/' },
            { name: 'Services', urlPath: '/services' },
            { name: 'Brand Building', urlPath: '/brand' },
          ]),
        ]}
      />

      <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden">
        
        {/* ==================================================
            01. EDITORIAL STUDIO HERO
        ================================================== */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-12 max-w-6xl mx-auto border-b border-neutral-900">
          <div className="flex flex-col items-start max-w-4xl">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.04] mb-8"
            >
              A brand is an economic moat, <br className="hidden sm:inline" />
              <span className="font-light italic text-neutral-400">not merely a logo mark.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-normal leading-relaxed max-w-3xl mb-10"
            >
              We partner with ambitious companies in India and globally to define authoritative market positioning, design distinct visual identity systems, and establish guidelines that command commercial trust and justify premium pricing.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Link
                to="/contact?service=brand"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-xl group"
              >
                <span>Discuss a Brand Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/our-work"
                className="inline-flex items-center justify-center px-8 py-4 bg-neutral-950 text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
              >
                Explore Selected Work
              </Link>
            </motion.div>
          </div>

          {/* Foundation Meta Strip */}
          <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-neutral-500 uppercase tracking-widest">
            <span>India Design Studio</span>
            <span className="hidden sm:inline">•</span>
            <span>Serving India & International Markets</span>
            <span className="hidden sm:inline">•</span>
            <span>Complete Identity Systems & IP Handover</span>
          </div>
        </section>

        {/* ==================================================
            02. THE BUSINESS PROBLEM: WHY SURFACE BRANDING FAILS
        ================================================== */}
        <section className="w-full bg-white text-[#171717] py-24 md:py-32 px-6 md:px-12 border-t border-b border-[#E5E5E2]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16 text-center mx-auto">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#666666] block mb-3 font-bold">
                The Commercial Reality
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight mb-6">
                When brand identity is superficial, the business pays the price.
              </h2>
              <p className="text-[#555555] text-base md:text-lg leading-relaxed font-normal">
                Most businesses treat branding as a decorative task delegated to template creators. Without rigorous positioning, customer perception fractures and sales cycles become longer and harder.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow">
                <div>
                  <span className="text-xs font-mono text-[#666666] font-bold tracking-widest block mb-4">
                    01 / COMMODITIZATION
                  </span>
                  <h3 className="text-xl font-bold text-[#171717] mb-3 tracking-tight">
                    Competing on Price Rather Than Value
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                    When your visual identity looks identical to competitors in the market, prospective clients cannot discern your expertise and default to negotiating on the lowest cost.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#EAEAE8] text-xs font-mono text-[#666666] font-medium">
                  Symptom: High customer acquisition costs & low pricing power
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow">
                <div>
                  <span className="text-xs font-mono text-[#666666] font-bold tracking-widest block mb-4">
                    02 / FRAGMENTED PERCEPTION
                  </span>
                  <h3 className="text-xl font-bold text-[#171717] mb-3 tracking-tight">
                    Inconsistent Experience Erodes Trust
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                    A website that tells one story while presentation decks, proposals, and packaging tell another creates hesitation in enterprise and international buyers.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#EAEAE8] text-xs font-mono text-[#666666] font-medium">
                  Symptom: Friction during late-stage enterprise decision making
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow">
                <div>
                  <span className="text-xs font-mono text-[#666666] font-bold tracking-widest block mb-4">
                    03 / SCALE DISCONNECT
                  </span>
                  <h3 className="text-xl font-bold text-[#171717] mb-3 tracking-tight">
                    Outgrowing Your Founding Identity
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                    Your business has matured in capability, revenue, and client delivery, but your visual presence still looks like an early-stage operation built on makeshift templates.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#EAEAE8] text-xs font-mono text-[#666666] font-medium">
                  Symptom: Missed international opportunities and tier-1 contracts
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            03. OUR 4-PART BRAND ARCHITECTURE
        ================================================== */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
              Strategic Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              How Mayaa engineers an authoritative brand system.
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              We connect commercial purpose with meticulous design craft. Every visual decision is backed by strategic rationale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
              <span className="text-3xl font-black font-mono text-neutral-600 block">01</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Commercial Positioning</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We dissect your market, evaluate competitors, and clarify what makes your company distinctive to establish an authentic commercial moat.
              </p>
              <ul className="pt-4 border-t border-neutral-900 space-y-2 text-xs text-neutral-300">
                <li>• Market differentiation audit</li>
                <li>• Target persona definition</li>
                <li>• Value proposition narrative</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
              <span className="text-3xl font-black font-mono text-neutral-600 block">02</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Visual Identity & Form</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We craft emblems, primary and secondary logo variants, and typographic hierarchies engineered for legibility across digital and print applications.
              </p>
              <ul className="pt-4 border-t border-neutral-900 space-y-2 text-xs text-neutral-300">
                <li>• Primary & responsive logomarks</li>
                <li>• Bespoke typographic pairings</li>
                <li>• Intentional color palette logic</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
              <span className="text-3xl font-black font-mono text-neutral-600 block">03</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Touchpoint Cohesion</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We apply the brand across real client interactions, ensuring web flagships, pitch decks, proposals, and packaging speak one cohesive visual language.
              </p>
              <ul className="pt-4 border-t border-neutral-900 space-y-2 text-xs text-neutral-300">
                <li>• Digital flagship design direction</li>
                <li>• Executive pitch deck systems</li>
                <li>• Packaging & print collateral</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
              <span className="text-3xl font-black font-mono text-neutral-600 block">04</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Brand Governance</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We equip your internal teams and external partners with a comprehensive guidelines manual so the brand maintains its integrity as you grow.
              </p>
              <ul className="pt-4 border-t border-neutral-900 space-y-2 text-xs text-neutral-300">
                <li>• Complete Brand Guidelines book</li>
                <li>• Production vector asset suite</li>
                <li>• 100% intellectual property rights</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ==================================================
            04. AUTHENTIC IDENTITY & VISUAL SHOWCASE
        ================================================== */}
        <section className="w-full bg-white text-[#171717] py-24 md:py-32 px-6 md:px-12 border-t border-b border-[#E5E5E2]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#666666] block mb-3 font-bold">
                  Evidence of Craft
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
                  Authentic visual systems built for ambitious businesses.
                </h2>
              </div>
              <Link
                to="/our-work"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#171717] hover:text-[#555555] transition-colors group shrink-0"
              >
                <span>Explore All Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Large Identity Marks Collection Banner */}
            <Link
              to="/our-work"
              aria-label="Marks, Symbols & Typographic Architecture - Explore Our Work"
              className="block mb-12 rounded-2xl overflow-hidden border border-[#E5E5E2] hover:border-[#171717]/40 bg-neutral-950 group shadow-sm hover:shadow-md transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              <div className="relative aspect-[21/9] w-full overflow-hidden bg-black">
                <img
                  src="/images/Identity_Design.webp"
                  alt="Mayaa Solutions Brand Identity Design Collection"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pointer-events-none">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                      Identity Systems Collection
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-100 transition-colors">
                      Marks, Symbols & Typographic Architecture
                    </h3>
                  </div>
                </div>
              </div>
            </Link>

            {/* 4 Real Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {REAL_BRAND_PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => handleOpenProject(proj.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOpenProject(proj.id);
                    }
                  }}
                  className="group rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] hover:border-[#171717]/40 transition-all overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-md cursor-pointer text-left w-full"
                >
                  {/* Compact Thumbnail Container (Reduced height and balanced aspect ratio) */}
                  <div className="relative aspect-[24/10] sm:aspect-[26/10] w-full overflow-hidden bg-neutral-950 border-b border-[#E5E5E2] flex items-center justify-center p-4">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-0.5">
                        {proj.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{proj.title}</h3>
                    </div>
                  </div>

                  {/* Card Content & CTA */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-5 font-normal">
                      {proj.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#171717] group-hover:text-black transition-colors self-start">
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            05. TOUCHPOINT APPLICATIONS
        ================================================== */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
              Comprehensive Execution
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              How the brand lives across all customer touchpoints.
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              A brand system is only as strong as its real-world implementation. We map every customer interaction point to ensure unbroken continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOUCHPOINTS.map((tp, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-neutral-400 block mb-4">
                    APPLICATION 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                    {tp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                    {tp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            06. TRANSPARENT DELIVERABLES INVENTORY
        ================================================== */}
        <section className="w-full bg-white text-[#171717] py-24 md:py-32 px-6 md:px-12 border-t border-b border-[#E5E5E2]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16 text-center mx-auto">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#666666] block mb-3 font-bold">
                Tangible Assets
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight mb-6">
                Complete brand deliverables transferred upon handover.
              </h2>
              <p className="text-[#555555] text-base md:text-lg leading-relaxed font-normal">
                You receive full production-ready assets with unrestricted commercial ownership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Strategic Brand Guidelines Book',
                  desc: 'Comprehensive manual detailing brand mission, core messaging, spacing rules, and usage constraints.',
                },
                {
                  title: 'Primary & Responsive Vector Suite',
                  desc: 'Full suite of SVG, EPS, PDF, and high-res PNG formats for light, dark, and monochromatic backgrounds.',
                },
                {
                  title: 'Typographic Hierarchy & Licensing Guide',
                  desc: 'Primary and secondary font pairings, web font rules, and commercial font licensing recommendations.',
                },
                {
                  title: 'Digital Color Logic & Design Tokens',
                  desc: 'HEX, RGB, CMYK, and Pantone specifications engineered for digital accessibility and print color fidelity.',
                },
                {
                  title: 'Executive Presentation System',
                  desc: 'Customizable keynote/slides templates and proposal layouts configured with your typography and palette.',
                },
                {
                  title: '100% Unrestricted IP & Master Files',
                  desc: 'Full transfer of all original Figma and vector source files with zero recurring licensing obligations.',
                },
              ].map((d, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <div>
                    <CheckCircle2 className="w-5 h-5 text-[#171717] mb-4" />
                    <h3 className="text-base font-bold text-[#171717] mb-2 tracking-tight">
                      {d.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                      {d.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
            {BRAND_FAQS.map((faq, idx) => {
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
        <section className="w-full bg-white text-[#171717] py-24 md:py-32 px-6 md:px-12 border-t border-[#E5E5E2]">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E5E5E2] bg-[#FAFAF9] mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[#171717]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#666666] font-bold">
                Start Your Brand Project
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#171717] tracking-tight leading-[1.06] mb-6 max-w-4xl text-balance">
              Ready to position your business with lasting authority?
            </h2>

            <p className="text-base sm:text-xl text-[#555555] font-normal leading-relaxed max-w-2xl mb-10 text-balance">
              Whether you are launching a new enterprise or elevating an established brand, let’s explore how strategic positioning can unlock new commercial value.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
              <Link
                to="/contact?service=brand"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#171717] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-all duration-300 shadow-xl group"
              >
                <span>Discuss a Brand Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="mailto:contact@mayaasolutions.in?subject=Brand%20Building%20Inquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#FAFAF9] text-[#171717] hover:text-black hover:bg-[#F0F0EE] border border-[#E5E5E2] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
              >
                contact@mayaasolutions.in
              </a>
            </div>

            {/* Internal links to other core capabilities */}
            <div className="pt-8 border-t border-[#EAEAE8] flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-[#666666] uppercase tracking-wider">
              <span>Also explore:</span>
              <Link to="/websites" className="text-[#171717] hover:text-[#555555] transition-colors underline underline-offset-4">
                Websites & Digital Experiences →
              </Link>
              <Link to="/business-systems" className="text-[#171717] hover:text-[#555555] transition-colors underline underline-offset-4">
                Personalised Business Systems →
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Project Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(project) => setSelectedProject(project)}
      />
    </>
  );
};
