import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown,
  Building2, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  Users, 
  ChevronRight,
  ChevronDown,
  TrendingUp,
  Workflow,
  Lock,
  Cpu,
  CreditCard,
  Network,
  Sliders,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const SAUDI_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for Saudi Arabian enterprises from Bangalore without an on-the-ground local entity?',
    answer:
      'We collaborate directly with Saudi business owners, managing directors, and technical leads through scheduled Arabian Standard Time (AST) collaboration windows, clear technical sprint documentation, and regular video walkthroughs. With only a 2.5-hour timezone difference between Saudi Arabia (UTC+3) and our Bangalore studio (UTC+5:30), our teams share continuous working-day overlap. We do not manufacture claims of physical branch offices in Riyadh or Jeddah where we do not have them. By anchoring senior engineering in Bangalore, we provide direct principal-to-engineer communication with exceptional agility and without inflated local agency markups.',
  },
  {
    question: 'Can your business systems accommodate bilingual English and Arabic operational requirements?',
    answer:
      'Yes. In Saudi Arabia, many enterprises operate with bilingual leadership, technical teams, and external partners. We architect custom business management systems and client-facing digital experiences with native multi-language data schemas and intuitive RTL (Right-to-Left) / LTR interface toggles, allowing teams to navigate in Arabic or English without relying on clunky third-party translation plugins.',
  },
  {
    question: 'How do you ensure data confidentiality and corporate intellectual property protection?',
    answer:
      'All bespoke systems, databases, and custom source code are deployed directly onto client-owned cloud infrastructure (such as AWS Middle East, Microsoft Azure Middle East, or dedicated virtual private servers). Mayaa does not retain, process, or monetize your company or client data. Clients retain 100% intellectual property ownership of the codebase and complete data sovereignty under binding international confidentiality agreements.',
  },
  {
    question: 'How are commercial agreements, fees, and invoicing structured for Saudi clients?',
    answer:
      'We quote and invoice transparently in Saudi Riyals (SAR) or US Dollars (USD) on fixed-scope, milestone-governed agreements. Every phase, from initial operational mapping and wireframing to code deployment and testing, has explicit acceptance criteria. Crucially, our custom business management systems carry zero recurring per-user software licensing taxes, ensuring predictable capital allocation as your headcount expands.',
  },
];

// 5 Curated Saudi Industry Categories
const saudiIndustries = [
  {
    id: 'construction-contracting',
    title: 'CONSTRUCTION & CONTRACTING',
    tagline: 'Main Contractors · Infrastructure · Commercial Fit-Outs',
    image: '/images/industries/construction.jpg',
    quote: 'Connect incoming tenders, subcontractor packages, site diaries, material requisitions, and client variations as project scale expands.',
    capabilities: [
      'Tender intake & subcontractor pricing rounds',
      'Site milestone logs & daily progress tracking',
      'Material requisition & delivery verification',
      'Client variations, claims & formal handover records',
    ],
  },
  {
    id: 'architecture-interiors',
    title: 'ARCHITECTURE & TURNKEY DESIGN',
    tagline: 'Consultancies · Design Studios · Turnkey Fit-Outs',
    image: '/images/industries/architecture.webp',
    quote: 'Manage design briefs, client consultations, drawing revisions, municipal approvals, and site execution through one coherent workflow.',
    capabilities: [
      'Client brief capture & preliminary feasibility',
      'Drawing revisions & design package archives',
      'Municipal permit & authority submission logs',
      'Milestone billing & snag-list resolution',
    ],
  },
  {
    id: 'real-estate-development',
    title: 'REAL ESTATE & ASSET DEVELOPMENT',
    tagline: 'Property Developers · Commercial Brokerages · Asset Managers',
    image: '/images/industries/real-estate.webp',
    quote: 'Organise investor inquiries, sales pipeline momentum, property inventory, and stakeholder communication across distributed sales offices.',
    capabilities: [
      'Multi-channel inbound buyer & investor qualification',
      'Off-plan & commercial inventory registries',
      'Relationship manager deal stages & negotiation history',
      'Executive cashflow & sales realization dashboards',
    ],
  },
  {
    id: 'building-materials-b2b',
    title: 'BUILDING MATERIALS & INDUSTRIAL B2B',
    tagline: 'Manufacturers · Equipment Distributors · Industrial Suppliers',
    image: '/images/industries/manufacturing.jpg',
    quote: 'Bring technical specification inquiries, sales pipelines, custom quotations, customer records, and delivery schedules into one disciplined workflow.',
    capabilities: [
      'Architect & contractor specification intake',
      'Sales representative account assignment',
      'Bespoke quotation generator with revision control',
      'Dispatch tracking & client credit limit controls',
    ],
  },
  {
    id: 'hospitality-premium-services',
    title: 'HOSPITALITY & EXECUTIVE SERVICES',
    tagline: 'Hotels · F&B Destinations · Advisory & Executive Services',
    image: '/images/industries/hospitality.webp',
    quote: 'Establish a distinguished digital presence that reflects institutional caliber while providing back-office systems engineered for discreet operational delivery.',
    capabilities: [
      'High-stature digital storefronts that command authority',
      'Private event & group corporate booking workflows',
      'Discreet consultation intake & qualification',
      'Operational coordination between front and back-of-house',
    ],
  },
];

// The 6-Stage Operational Transformation Flow
const systemFlow = [
  {
    step: '01',
    stage: 'LEADS',
    flow: 'Website · WhatsApp · Direct Referrals · RFQs',
    desc: 'Centralise every inbound introduction from calls, web forms, direct WhatsApp, and commercial networks into one qualified intake queue with immediate attribution.',
  },
  {
    step: '02',
    stage: 'SALES & TENDERS',
    flow: 'Assignment · Scoping · Quotation · Negotiation',
    desc: 'Assign opportunities to commercial leads, maintain disciplined follow-up cadences, and track quote revisions with complete pricing and margin clarity.',
  },
  {
    step: '03',
    stage: 'CLIENT WORKSPACE',
    flow: 'Contracts · Scopes · Documents · Single Record',
    desc: 'A permanent institutional timeline of agreed deliverables, approved proposals, executed contracts, and client preferences accessible across authorized teams.',
  },
  {
    step: '04',
    stage: 'PROJECT SITES',
    flow: 'Milestones · Tasks · Materials · Progress',
    desc: 'Monitor multi-site milestones, consultant sign-offs, vendor deliveries, and scope variations in real time without digging through chaotic messaging threads.',
  },
  {
    step: '05',
    stage: 'TEAM COORDINATION',
    flow: 'Roles · Approvals · Checkpoints · Ownership',
    desc: 'Role-based task management with transparent accountability. Project directors, engineers, sales leads, and site teams work with explicit daily priorities.',
  },
  {
    step: '06',
    stage: 'EXECUTIVE VISIBILITY',
    flow: 'Dashboards · Performance · Cashflow · Decisions',
    desc: 'Real-time operational dashboards for owners and leadership. Instant visibility over total pipeline value, delivery velocity, and revenue realization.',
  },
];

export const SaudiArabiaMarketPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeDiagnostic, setActiveDiagnostic] = useState<number>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const diagnosticDimensions = [
    {
      title: '01 · Enquiry Intake & Speed',
      challenge: 'High-value inquiries arrive across WhatsApp, phone calls, and referrals, but lack central tracking and rapid qualified response.',
      systemSolution: 'Unified digital intake funnel with automated lead routing, origin tracking, and immediate notification to commercial leads.',
    },
    {
      title: '02 · Quotation & Tender Velocity',
      challenge: 'Costing formulas and margin calculations live inside personal spreadsheets, causing delayed submissions and revision confusion.',
      systemSolution: 'Standardized quotation generator with multi-tier approval workflows, margin protections, and strict revision histories.',
    },
    {
      title: '03 · Multi-Site Execution',
      challenge: 'Site milestones, vendor material requisitions, and daily logs are spread across chat groups and phone calls.',
      systemSolution: 'Live project milestone tracker linking site diaries, contractor sign-offs, and variation registers to executive overviews.',
    },
    {
      title: '04 · Executive Management Control',
      challenge: 'Owners and directors must hold lengthy status meetings to piece together operational health across multiple active ventures.',
      systemSolution: 'Real-time executive dashboard displaying live pipeline momentum, project progress, and active operational bottlenecks.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SAUDI_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', urlPath: '/' },
    { name: 'Global Markets', urlPath: '/global-markets' },
    { name: 'Saudi Arabia', urlPath: '/global-markets/saudi-arabia' },
  ]);

  return (
    <>
      <SEO
        title="Brand, Digital Experiences & Business Systems for Saudi Arabia | Mayaa Solutions"
        description="Built for businesses expanding in Saudi Arabia. Strategic brand design, high-clarity websites, and personalised business management systems engineered for scaling operations, commercial stature, and executive visibility across Riyadh, Jeddah, and the Eastern Province."
        keywords="Saudi Arabia business management systems, custom business software Saudi Arabia, business management software Saudi Arabia, custom CRM Saudi Arabia, website design Saudi Arabia, branding Saudi Arabia, digital experience Saudi Arabia, business systems Riyadh, business software Jeddah, Mayaa Solutions Saudi Arabia"
        canonicalUrl="https://mayaasolutions.in/global-markets/saudi-arabia"
        ogImage="/images/saudi-commercial-hero.jpg"
        schema={[breadcrumbSchema, faqSchema]}
      />

      <main className="min-h-screen bg-[#070B09] text-[#E6EFE9] selection:bg-[#10B981] selection:text-black font-sans antialiased overflow-x-hidden pt-24 sm:pt-28 md:pt-32">

        {/* ==================================================
            01. HERO SECTION: TRANSFORMATION & FORWARD MOMENTUM
        ================================================== */}
        <section className="px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto pb-16 sm:pb-24 lg:pb-28 border-b border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              <div className="flex items-center gap-3">
                <Link
                  to="/global-markets"
                  className="text-xs font-mono font-medium text-[#9CA3AF] hover:text-white uppercase tracking-widest transition-colors"
                >
                  Global Markets
                </Link>
                <span className="text-white/20">/</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#059669]/40 bg-[#061A12] text-xs font-mono text-[#34D399] uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  Saudi Arabia · Scale & Capability
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.05]"
              >
                Build for where your <br />
                <span className="font-medium text-white">business</span> <br />
                <span className="italic text-[#34D399]">is going.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-base sm:text-xl text-[#9CA3AF] font-light leading-relaxed max-w-xl"
              >
                Mayaa builds authoritative brands, high-clarity digital experiences, and bespoke business systems for ambitious enterprises growing across Riyadh, Jeddah, and the Eastern Province.
              </motion.p>

              {/* Core Offerings Pill Tags */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-2 pt-1"
              >
                {['Brand Architecture', 'Websites & Digital Experiences', 'Personalised Business Management Systems'].map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-[#D1D5DB]"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <Link
                  to="/contact"
                  className="min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-[#E5E7EB] font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 group"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="#transformation-systems"
                  className="min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white border border-white/20 hover:border-white/50 font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-300"
                >
                  <span>See What We Build</span>
                  <ArrowDown className="w-3.5 h-3.5 text-white/60" />
                </a>
              </motion.div>
            </div>

            {/* Right Modern Commercial Architectural Visual */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl"
              >
                <img
                  src="/images/saudi-commercial-hero.jpg"
                  alt="Modern commercial architectural development in Saudi Arabia"
                  className="w-full h-auto aspect-[4/3] object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B09] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono text-[#CBD5E1]">
                  <span className="uppercase tracking-wider text-white">SCALE & CAPABILITY</span>
                  <span className="text-[#34D399]">SAUDI ARABIA</span>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ==================================================
            02. CORE SAUDI BUSINESS REALITY: SCALE WITHOUT CHAOS
        ================================================== */}
        <section className="bg-white text-[#171717] border-b border-[#E5E5E2] py-20 sm:py-28 lg:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-12 sm:space-y-16">
            
            <div className="max-w-3xl space-y-4">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#059669]">
                Commercial Expansion Reality
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#171717] tracking-tight leading-[1.08]">
                Growth changes the way <br />
                <span className="text-[#555555] italic">a business needs to work.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
                In a commercial market expanding as rapidly as Saudi Arabia, success brings more clients, larger contracts, bigger teams, and multiple concurrent sites. Growth should create capacity, not administrative weight.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              
              {/* Left: The Workflow Chain */}
              <div className="lg:col-span-7 p-8 sm:p-10 border border-[#E5E5E2] bg-[#FAFAF9] rounded-sm space-y-5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block">
                  The rhythm of rapid expansion across Saudi commercial sectors:
                </span>

                <div className="space-y-3">
                  {[
                    'An inquiry arrives through a commercial relationship, tender invitation, or digital channel.',
                    'Sales follows up across WhatsApp, phone calls, and email threads.',
                    'A technical proposal is drafted and revised through multiple negotiation cycles.',
                    'The client executes the contract and project delivery commences.',
                    'New team responsibilities expand across design, procurement, and site execution.',
                    'One team member updates a spreadsheet; someone else holds vital notes on chat.',
                    'Executive leadership asks for a progress and margin summary across six active ventures.',
                    'The business is expanding quickly. But information is scattered everywhere.',
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded bg-white border border-[#E5E5E2]">
                      <span className="w-5 h-5 rounded-full bg-[#E5E5E2] border border-[#CCCCCC] text-[10px] font-mono font-medium text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-[#444444] font-light leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: The Anchor Diagnosis */}
              <div className="lg:col-span-5 p-8 sm:p-10 border border-[#E5E5E2] bg-[#F7F7F5] rounded-sm space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#059669] block">
                    The Essential Diagnosis
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-[#171717] leading-snug">
                    Growth should create capacity. <br />
                    <span className="text-[#555555] italic">Not more confusion.</span>
                  </h3>
                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-light pt-2">
                    When contract sizes quadruple, informal handoffs break down. Management shouldn't have to call three people to verify if a milestone was signed off or an invoice dispatched.
                  </p>
                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-light">
                    We build the operational backbone that connects client acquisition, delivery milestones, and management oversight into one reliable architecture.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E5E5E2]">
                  <div className="text-xs font-mono text-[#059669] mb-1">THE SCALABLE FOUNDATION:</div>
                  <p className="text-xs font-mono text-[#666666] leading-relaxed">
                    Structured lead routing. Explicit milestone gates. Live revenue oversight. Complete data ownership.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            03. THREE PILLARS THAT SUPPORT EXPANSION
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto border-b border-white/[0.08]">
          <div className="space-y-6 max-w-3xl mb-14 sm:mb-20">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#10B981]">
              Core Pillars
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Three pillars that <br />
              <span className="text-[#9CA3AF] italic">support business expansion.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light leading-relaxed">
              We align how your enterprise presents itself to the market with how it delivers work behind the scenes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Pillar 01: BRAND */}
            <div className="p-8 sm:p-10 border border-white/10 bg-white/[0.01] flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#10B981] uppercase tracking-widest">
                  01 · BRAND ARCHITECTURE
                </span>
                <h3 className="text-2xl font-light text-white tracking-wide">
                  Reputation & Stature
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed font-light">
                  Build a distinctive brand identity that commands commercial authority and respect among major institutional clients and regional joint-venture partners.
                </p>
              </div>
              <div className="w-8 h-0.5 bg-white/20" />
            </div>

            {/* Pillar 02: DIGITAL EXPERIENCE */}
            <div className="p-8 sm:p-10 border border-white/10 bg-white/[0.01] flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#10B981] uppercase tracking-widest">
                  02 · DIGITAL EXPERIENCE
                </span>
                <h3 className="text-2xl font-light text-white tracking-wide">
                  Executive Web Platforms
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed font-light">
                  Turn your website into a powerful commercial storefront that articulates technical capability, presents portfolio scale, and captures high-value inquiries.
                </p>
              </div>
              <div className="w-8 h-0.5 bg-white/20" />
            </div>

            {/* Pillar 03: BUSINESS SYSTEMS */}
            <div className="p-8 sm:p-10 border border-white/10 bg-white/[0.01] flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#10B981] uppercase tracking-widest">
                  03 · BUSINESS SYSTEMS
                </span>
                <h3 className="text-2xl font-light text-white tracking-wide">
                  Personalised Management
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed font-light">
                  Connect incoming tenders, clients, project sites, teams, and executive reporting into software built strictly around your operational workflow.
                </p>
              </div>
              <div className="w-8 h-0.5 bg-[#10B981]" />
            </div>

          </div>

          <div className="mt-8 text-center sm:text-left">
            <span className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider">
              We understand the business first. Then we build what the enterprise actually needs.
            </span>
          </div>
        </section>

        {/* ==================================================
            04. PERSONALISED BUSINESS MANAGEMENT SYSTEM
        ================================================== */}
        <section id="transformation-systems" className="bg-white text-[#171717] border-b border-[#E5E5E2] py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-14">
            
            <div className="max-w-3xl space-y-4">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#059669]">
                Operational Engine
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#171717] tracking-tight leading-[1.08]">
                Software built <br />
                <span className="text-[#555555] italic">around your business logic.</span>
              </h2>
              <div className="space-y-2 text-base sm:text-lg text-[#555555] font-light leading-relaxed pt-2">
                <p>Every business has its own way of selling, delivering, managing, and communicating.</p>
                <p>We understand that workflow first. Then we build the system around it.</p>
              </div>
            </div>

            {/* 6 Stage Pipeline Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {systemFlow.map((item) => (
                <div
                  key={item.step}
                  className="p-8 border border-[#E5E5E2] bg-[#FAFAF9] hover:border-[#CCCCCC] transition-all flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#059669]">STAGE {item.step}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-[#059669] transition-opacity" />
                    </div>

                    <h3 className="text-2xl font-light text-[#171717] tracking-wide">
                      {item.stage}
                    </h3>

                    <div className="p-2.5 bg-white border border-[#E5E5E2] text-[11px] font-mono text-[#059669]">
                      {item.flow}
                    </div>

                    <p className="text-sm text-[#555555] font-light leading-relaxed pt-1">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E5E5E2] flex items-center justify-between text-xs font-mono text-[#666666]">
                    <span>Unified Workflow</span>
                    <span className="text-[#171717] group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-8 border border-[#E5E5E2] bg-[#F7F7F5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1 max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-wider text-[#059669] block">
                  Adaptive System Engineering
                </span>
                <p className="text-sm sm:text-base text-[#171717] font-light">
                  “Your business should not have to adapt to rigid software templates. The software should adapt to your business.”
                </p>
              </div>
              <Link
                to="/business-systems"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#111111] text-white font-medium text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors shrink-0"
              >
                <span>Explore Business Systems</span>
              </Link>
            </div>

          </div>
        </section>

        {/* ==================================================
            05. SAUDI INDUSTRY SECTORS (5 CURATED CATEGORIES)
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto border-b border-white/[0.08]">
          <div className="max-w-3xl space-y-4 mb-14 sm:mb-20">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#10B981]">
              Target Sectors
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Built for complex <br />
              <span className="text-[#9CA3AF] italic">Saudi business sectors.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light leading-relaxed pt-2">
              Tailored specifically for businesses managing high contract values, multi-stakeholder delivery, and tight delivery schedules:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {saudiIndustries.map((industry) => (
              <div
                key={industry.id}
                className="border border-white/10 bg-white/[0.01] overflow-hidden flex flex-col justify-between hover:border-white/30 transition-all group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-white/10">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B09] via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[10px] font-mono text-[#34D399] uppercase tracking-widest bg-black/70 px-2.5 py-1 rounded">
                        {industry.tagline}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 space-y-4">
                    <h3 className="text-lg font-medium text-white tracking-wide">
                      {industry.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D1D5DB] font-light leading-relaxed italic border-l-2 border-[#10B981] pl-3">
                      “{industry.quote}”
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#9CA3AF] block">
                        Capabilities:
                      </span>
                      <ul className="space-y-1.5">
                        {industry.capabilities.map((cap, cIdx) => (
                          <li key={cIdx} className="text-xs text-[#9CA3AF] font-light flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#10B981] mt-1.5 shrink-0" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-7 sm:p-8 pt-0">
                  <Link
                    to="/contact"
                    className="w-full py-3 px-4 bg-white/[0.03] hover:bg-white text-white hover:text-black text-xs font-mono uppercase tracking-wider flex items-center justify-between border border-white/10 transition-colors"
                  >
                    <span>Discuss Your Operations</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            06. BANGALORE ENGINEERING ENGINE & DELIVERY MODEL
        ================================================== */}
        <section className="bg-white text-[#171717] border-b border-[#E5E5E2] py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#059669]">
              Delivery Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#171717] tracking-tight leading-[1.08]">
              Bangalore engineering depth. <br />
              <span className="text-[#555555] italic">Saudi operational expansion.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light max-w-3xl leading-relaxed">
              We deliver for Saudi Arabian enterprises directly from our technology studio in Bangalore, India. We do not claim local offices in Riyadh or Jeddah where we do not have them. Instead, we invest in principal-level engineering, full daily timezone alignment, and complete client data sovereignty.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9]">
                <Clock className="w-5 h-5 text-[#059669] mb-4" />
                <h3 className="text-sm font-medium text-[#171717] mb-2">AST Timezone Overlap</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Only 2.5 hours difference between Saudi Arabia (UTC+3) and Bangalore (UTC+5:30). Extensive daily working-hour overlap for sprint reviews and live collaboration.
                </p>
              </div>

              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9]">
                <Cpu className="w-5 h-5 text-[#059669] mb-4" />
                <h3 className="text-sm font-medium text-[#171717] mb-2">Direct Senior Access</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Collaborate directly with senior system architects and software engineers. No junior account executives or layers of miscommunicated telephone handoffs.
                </p>
              </div>

              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9]">
                <Lock className="w-5 h-5 text-[#059669] mb-4" />
                <h3 className="text-sm font-medium text-[#171717] mb-2">Data Sovereignty</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  All systems deployed on client-owned cloud accounts (AWS Middle East / Azure) with 100% intellectual property ownership and strict NDAs.
                </p>
              </div>

              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9]">
                <CreditCard className="w-5 h-5 text-[#059669] mb-4" />
                <h3 className="text-sm font-medium text-[#171717] mb-2">SAR Milestone Billing</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Transparent milestone-based contracts quoted and invoiced in Saudi Riyals (SAR) or USD with explicit acceptance gates and zero recurring per-user licensing fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            07. FREQUENTLY ASKED QUESTIONS
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto border-b border-white/[0.08]">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#10B981] mb-4">
                Clarity & Due Diligence
              </div>
              <h2 className="text-3xl sm:text-5xl font-light text-white leading-tight mb-4">
                Questions Saudi leaders ask.
              </h2>
              <p className="text-base text-[#9CA3AF] font-light">
                Straightforward facts regarding remote delivery, bilingual interfaces, data privacy, and commercial terms.
              </p>
            </div>

            <div className="space-y-4">
              {SAUDI_FAQS.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="border border-white/10 bg-white/[0.01] overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-base sm:text-lg font-light text-white">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-[#9CA3AF] transition-transform duration-300 shrink-0 ${
                        openFaq === idx ? 'rotate-180 text-white' : ''
                      }`} 
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#9CA3AF] font-light leading-relaxed border-t border-white/[0.06]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            08. FINAL CTA: BUSINESS CONSULTATION
        ================================================== */}
        <section className="bg-white text-[#171717] py-28 sm:py-36 px-6 md:px-12 lg:px-16 border-t border-[#E5E5E2] text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-block px-3.5 py-1.5 bg-[#E6F4EA] border border-[#059669]/30 text-xs font-mono text-[#059669] uppercase tracking-widest">
              Saudi Arabia Consultation
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light text-[#171717] tracking-tight leading-[1.05]">
              Build what your business <br />
              <span className="font-normal italic text-[#555555]">needs next.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#555555] font-light max-w-xl mx-auto leading-relaxed">
              Tell us where your business is expanding, where work is becoming difficult to coordinate, or where your digital touchpoints need to improve. We start by understanding the business.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-9 sm:px-10 py-4 bg-[#111111] text-white font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-neutral-800 transition-all duration-300 shadow-xl group"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/global-markets"
                className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-9 sm:px-10 py-4 bg-transparent text-[#171717] border border-[#CCCCCC] hover:border-[#111111] font-medium text-xs sm:text-sm uppercase tracking-wider transition-all"
              >
                <span>Explore Global Markets</span>
              </Link>
            </div>

            <div className="pt-8 text-xs font-mono text-[#666666] tracking-wider">
              Serving enterprises across Riyadh, Jeddah, Khobar, Dammam, and throughout Saudi Arabia.
            </div>
          </div>
        </section>

      </main>
    </>
  );
};
