import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Globe2, 
  MapPin, 
  Compass, 
  Layers, 
  Cpu, 
  Clock, 
  CreditCard, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';
import { TARGET_MARKETS_LIST, TargetMarket } from '../constants/globalMarketsData';

type RegionFilter = 'all' | 'gcc' | 'europe' | 'nordics' | 'apac_americas';

interface MarketWithRegion extends TargetMarket {
  regionKey: RegionFilter;
  commercialFocus: string;
}

const ENRICHED_MARKETS: MarketWithRegion[] = TARGET_MARKETS_LIST.map((market) => {
  let regionKey: RegionFilter = 'europe';
  let commercialFocus = 'Bespoke brand architecture, high-clarity websites, and tailored operational software.';

  switch (market.slug) {
    case 'dubai':
      regionKey = 'gcc';
      commercialFocus = 'Commercial velocity, luxury practice positioning, and rapid operational leverage.';
      break;
    case 'abu-dhabi':
      regionKey = 'gcc';
      commercialFocus = 'Institutional trust, capital discipline, and enterprise operational governance.';
      break;
    case 'saudi-arabia':
      regionKey = 'gcc';
      commercialFocus = 'Vision 2030 transformation, operational scaling, and corporate market credibility.';
      break;
    case 'uk':
      regionKey = 'europe';
      commercialFocus = 'Corporate reputation, professional service authority, and operational alignment.';
      break;
    case 'germany':
      regionKey = 'europe';
      commercialFocus = 'Mittelstand engineering substance, process clarity, and data-sovereign systems.';
      break;
    case 'paris':
      regionKey = 'europe';
      commercialFocus = 'Design distinction, luxury commerce, and bespoke digital experiences for creative practices.';
      break;
    case 'netherlands':
      regionKey = 'europe';
      commercialFocus = 'Pragmatic business flow, unified digital touchpoints, and unbloated systems.';
      break;
    case 'switzerland':
      regionKey = 'europe';
      commercialFocus = 'Precision engineering, institutional discretion, and high-trust digital standards.';
      break;
    case 'ireland':
      regionKey = 'europe';
      commercialFocus = 'Relationship-driven commerce, digital accessibility, and operational clarity.';
      break;
    case 'belgium':
      regionKey = 'europe';
      commercialFocus = 'Multilingual operational coherence, logistics systems, and cross-border trade.';
      break;
    case 'austria':
      regionKey = 'europe';
      commercialFocus = 'Engineering precision, dependable workflows, and high-standard B2B platforms.';
      break;
    case 'luxembourg':
      regionKey = 'europe';
      commercialFocus = 'International perspective, institutional governance, and cross-border financial systems.';
      break;
    case 'poland':
      regionKey = 'europe';
      commercialFocus = 'Central European industrial momentum, manufacturing workflows, and international reach.';
      break;
    case 'denmark':
      regionKey = 'nordics';
      commercialFocus = 'Craftsmanship, digital fluency, and minimal unnecessary operational complexity.';
      break;
    case 'sweden':
      regionKey = 'nordics';
      commercialFocus = 'Functional elegance, collaborative momentum, and robust digital product delivery.';
      break;
    case 'norway':
      regionKey = 'nordics';
      commercialFocus = 'Clarity, maritime & industrial operations, and sustainable long-term platforms.';
      break;
    case 'finland':
      regionKey = 'nordics';
      commercialFocus = 'Signal over noise, technical reliability, and pragmatic operational software.';
      break;
    case 'usa':
      regionKey = 'apac_americas';
      commercialFocus = 'Operational complexity reduction, commercial clarity, and zero-licensing-trap software.';
      break;
    case 'singapore':
      regionKey = 'apac_americas';
      commercialFocus = 'Regional hub efficiency, unified CRM pipelines, and scalable cloud systems.';
      break;
    case 'australia':
      regionKey = 'apac_americas';
      commercialFocus = 'Construction, trade & property operational systems built around how businesses actually run.';
      break;
    default:
      regionKey = 'europe';
      commercialFocus = 'Bespoke brand architecture, high-clarity websites, and tailored operational software.';
  }

  return {
    ...market,
    regionKey,
    commercialFocus,
  };
});

const COLLABORATION_PILLARS = [
  {
    icon: Clock,
    title: 'Timezone Alignment & Asynchronous Rigor',
    desc: 'Our Bangalore team maintains scheduled working overlap with Europe, the Middle East, Asia-Pacific, and the Americas—complemented by recorded design walkthroughs and clear written sprint boards.',
  },
  {
    icon: ShieldCheck,
    title: 'Direct Senior Access',
    desc: 'You work directly with the strategists, UX designers, and software engineers executing your project. We eliminate junior account management intermediaries and bureaucratic overhead.',
  },
  {
    icon: CreditCard,
    title: 'Multi-Currency & Clean Commercials',
    desc: 'We support international B2B invoicing in your local currency (USD, GBP, EUR, AED, SAR, SGD, AUD, or INR) with clear milestone deliverables and zero hidden recurring licensing fees.',
  },
  {
    icon: Cpu,
    title: 'Complete IP & Data Ownership',
    desc: 'All bespoke code, vector design assets, and database architecture are 100% owned by your company upon project handover. Deployed securely on your chosen cloud infrastructure.',
  },
];

const VERIFIED_GLOBAL_PROJECTS = [
  {
    name: 'Myma Platform',
    category: 'Digital Product · Marketplace · Operations',
    summary: 'Architected business strategy, product workflows, intuitive UX/UI and scalable systems connecting 2,500+ home chefs and 100k+ customer interactions.',
    image: '/images/creative_page_work_largethumbnail_myma.webp',
  },
  {
    name: 'MotoTrek Platform',
    category: 'E-Commerce · Digital Experience · Web App',
    summary: 'Engineered a modern React web application and tour booking experience uniting inventory catalog, user bookings, and digital community.',
    image: '/images/creative_page_work_thumbnail_mototrek.webp',
  },
  {
    name: 'SEMS / Pavanraje Multi-State',
    category: 'Business Management Systems (BMS)',
    summary: 'A unified operational management system replacing manual coordination with centralized lead management, team tasks, and executive reporting.',
    image: '/images/service_business_growth.webp',
  },
  {
    name: 'Swaati Enterprises',
    category: 'Industrial Manufacturing · B2B Web Presence',
    summary: 'Designed corporate brand guidelines, technical product catalogue systems, and responsive digital identity for an industrial manufacturer.',
    image: '/images/creative_page_work_thumbnail_swaatienterprises.webp',
  },
];

export const GlobalMarketsPage: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<RegionFilter>('all');

  const filteredMarkets = activeRegion === 'all'
    ? ENRICHED_MARKETS
    : ENRICHED_MARKETS.filter((m) => m.regionKey === activeRegion);

  return (
    <>
      <SEO
        title="Global Markets Directory | Mayaa Solutions"
        description="Explore Mayaa Solutions across 20 international markets. Headquartered in Bangalore, India, delivering bespoke brands, digital flagships, and custom business systems worldwide."
        canonicalUrl="https://mayaasolutions.in/global-markets"
        schema={[
          getBreadcrumbSchema([
            { name: 'Home', urlPath: '/' },
            { name: 'Global Markets', urlPath: '/global-markets' },
          ]),
        ]}
      />

      <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden">
        
        {/* ==================================================
            01. EDITORIAL HERO SECTION
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
              <Globe2 className="w-3.5 h-3.5 text-neutral-300" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-neutral-400">
                GLOBAL REACH · 20 REGIONAL MARKETS
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.04] mb-8"
            >
              Engineered in Bangalore. <br className="hidden sm:inline" />
              <span className="font-light italic text-neutral-400">Built for businesses worldwide.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-normal leading-relaxed max-w-3xl mb-10"
            >
              We do not claim satellite offices where we do not have them. Our centralized studio in Bangalore collaborates directly with commercial leaders, founders, and practices across 20 international markets through structured asynchronous sprints, shared technical specifications, and timezone-aligned delivery.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#directory"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-xl group"
              >
                <span>Browse Market Directory</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-neutral-950 text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
              >
                Discuss Global Engagement
              </Link>
            </motion.div>
          </div>

          {/* Metric Bar */}
          <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-neutral-500 uppercase tracking-widest">
            <span>Bangalore Studio Headquarters</span>
            <span className="hidden sm:inline">•</span>
            <span>20 Curated Market Environments</span>
            <span className="hidden sm:inline">•</span>
            <span>Transparent Cross-Border Delivery</span>
          </div>
        </section>

        {/* ==================================================
            02. BANGALORE HQ ANCHOR CARD
        ================================================== */}
        <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-neutral-950 border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-3 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                <span className="w-5 h-3.5 rounded overflow-hidden inline-block border border-neutral-700">
                  <img src="/flags/in.svg" alt="India Flag" className="w-full h-full object-cover" />
                </span>
                <span>Operational Headquarters & Technology Hub</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                India: Our Technology & Craft Foundation
              </h2>

              <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-2xl">
                India is both our home market and the technological engine of our global client engagements. From high-growth domestic enterprises to international brands expanding eastward, our Bangalore presence grounds us in high-velocity execution, deep engineering capabilities, and disciplined cost structures.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-900 text-xs font-mono text-neutral-400">
                <div>
                  <span className="text-white font-semibold block mb-0.5">Location</span>
                  <span>Bangalore, Karnataka, India</span>
                </div>
                <div>
                  <span className="text-white font-semibold block mb-0.5">Core Practice</span>
                  <span>Brand · Web · BMS Engineering</span>
                </div>
                <div>
                  <span className="text-white font-semibold block mb-0.5">Reach</span>
                  <span>Domestic & 20 International Markets</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all shadow-md group"
              >
                <span>Connect with Bangalore HQ</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </section>

        {/* ==================================================
            03. INTERACTIVE 20-MARKET DIRECTORY
        ================================================== */}
        <section id="directory" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
                Regional Index
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                20 International Markets. Tailored Considerations.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-normal leading-relaxed">
              Every country page features researched commercial context, market-specific business considerations, and relevant digital strategies.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mb-12 pb-6 border-b border-neutral-900">
            {[
              { key: 'all', label: 'All 20 Markets' },
              { key: 'gcc', label: 'Middle East & GCC (3)' },
              { key: 'europe', label: 'Western & Central Europe (9)' },
              { key: 'nordics', label: 'Nordics & Scandinavia (4)' },
              { key: 'apac_americas', label: 'Americas & Asia-Pacific (4)' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveRegion(tab.key as RegionFilter)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeRegion === tab.key
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Directory Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMarkets.map((market, idx) => (
              <motion.div
                key={market.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.03, 0.3) }}
              >
                <Link
                  to={`/global-markets/${market.slug}`}
                  className="group flex flex-col justify-between h-full p-6 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 hover:border-neutral-600 transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-900/50"
                >
                  <div>
                    {/* Top Flag & Meta */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-7 rounded overflow-hidden border border-neutral-700 bg-neutral-900 shadow-xs shrink-0">
                        <img
                          src={market.flag}
                          alt={`${market.name} Flag`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                        {market.sublabel}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-white transition-colors flex items-center justify-between">
                      <span>{market.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-neutral-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                    </h3>

                    <p className="text-xs text-neutral-400 leading-relaxed font-normal mb-6">
                      {market.commercialFocus}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-900/80 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                    <span>View Market Page</span>
                    <span className="text-xs">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </section>

        {/* ==================================================
            04. HOW CROSS-BORDER COLLABORATION WORKS
        ================================================== */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
              Delivery Standards
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              How we work with businesses across time zones.
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              Cross-border collaboration succeeds through clear documentation, predictable cadences, and direct access to senior practitioners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLLABORATION_PILLARS.map((p, idx) => {
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
            05. VERIFIED CROSS-BORDER WORK EVIDENCE
        ================================================== */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
                Selected Work
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Digital experiences and platforms built to scale.
              </h2>
            </div>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors group shrink-0"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VERIFIED_GLOBAL_PROJECTS.map((proj, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 transition-all overflow-hidden flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border-b border-neutral-800">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                      {proj.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{proj.name}</h3>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6 font-normal">
                    {proj.summary}
                  </p>
                  <Link
                    to="/our-work"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
                  >
                    <span>View Project Case</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            06. FINAL CONVERSION CTA
        ================================================== */}
        <section className="py-28 md:py-36 px-6 md:px-12 max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-950 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">
              Cross-Border Collaboration
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.06] mb-6 max-w-4xl text-balance">
            Ready to explore an engagement for your market?
          </h2>

          <p className="text-base sm:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl mb-10 text-balance">
            Whether you are expanding operations or refining your digital presence, let’s discuss your objectives and evaluate the right delivery roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-xl group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="mailto:contact@mayaasolutions.in?subject=Global%20Markets%20Inquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-neutral-950 text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
            >
              contact@mayaasolutions.in
            </a>
          </div>

          {/* Internal links to core capabilities */}
          <div className="pt-8 border-t border-neutral-900 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-neutral-500 uppercase tracking-wider">
            <span>Core Capabilities:</span>
            <Link to="/brand" className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4">
              Brand Building →
            </Link>
            <Link to="/websites" className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4">
              Websites & Digital Experiences →
            </Link>
            <Link to="/business-systems" className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4">
              Personalised Business Systems →
            </Link>
          </div>
        </section>

      </main>
    </>
  );
};
