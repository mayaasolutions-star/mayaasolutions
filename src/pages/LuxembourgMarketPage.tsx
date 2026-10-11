import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Users, 
  Building2, 
  Globe2, 
  Sliders, 
  Cpu, 
  ChevronRight,
  ChevronDown,
  Briefcase,
  Workflow,
  CheckCircle2,
  Lock,
  Clock,
  CreditCard,
  Eye, 
  FileText
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const LUXEMBOURG_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for Luxembourg businesses from India without an on-the-ground local office?',
    answer:
      'We collaborate directly with Luxembourg managing directors, partners, and operational leaders via scheduled Central European Time (CET/CEST) overlap, asynchronous video reviews, and structured milestones. We do not manufacture claims of physical offices on Boulevard Royal or Kirchberg. Anchoring our senior engineering studio in India provides direct access to principal architects with disciplined execution and zero inflated agency overhead.',
  },
  {
    question: 'How do you handle confidentiality and data sovereignty for Luxembourg organisations?',
    answer:
      'All custom business management systems and software architectures are deployed on client-owned European cloud infrastructure (such as AWS Europe/Frankfurt, Azure Western Europe, or dedicated European data centers). Mayaa does not retain, process, or monetize your company or client records. Clients retain 100% intellectual property ownership of the codebase and complete data sovereignty under binding non-disclosure agreements.',
  },
  {
    question: 'Can your systems accommodate multilingual requirements across French, German, English, and Luxembourgish?',
    answer:
      'Yes. Both our public digital experiences and bespoke internal business management systems are architected with clean multilingual schemas and interface controls. This enables teams and counterparties across the Grand Duchy and the Greater Region (France, Germany, Belgium) to operate seamlessly in their preferred language without clunky translation plugins.',
  },
  {
    question: 'How are commercial agreements and invoicing structured?',
    answer:
      'We quote and invoice directly in Euros (EUR) on transparent, milestone-governed contracts. Every stage, from discovery and wireframing to code deployment, is tied to explicit acceptance criteria. Furthermore, our bespoke systems carry zero recurring per-user licensing fees, ensuring predictable capital allocation.',
  },
];

export const LuxembourgMarketPage: React.FC = () => {
  // Experience 01 / Opening: Interactive Scale Lens
  const [activeScale, setActiveScale] = useState<'both' | 'local' | 'international'>('both');

  // Experience 04: Audience Context Selector
  const [selectedAudience, setSelectedAudience] = useState<'local' | 'international' | 'specialist'>('international');

  // Experience 05: Operational Workflow stage explorer
  const [activeStage, setActiveStage] = useState<number>(0);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Audience data for Experience 04
  const audienceProfiles = {
    local: {
      tag: 'DOMESTIC PRESENCE & PROXIMITY',
      title: 'Local Customers & Stakeholders',
      context: 'For businesses serving clients within Luxembourg City, Kirchberg, Esch-sur-Alzette, Cloche d’Or, or northern commercial hubs who need immediate clarity, local trust, and direct responsiveness.',
      challenge: 'High competition for local mindshare, rising customer expectations, and standardisation of services across domestic providers.',
      solution: 'A refined brand identity and rapid, frictionless digital enquiry journey that establishes immediate professional credibility and personal approachability.',
      languages: 'French, German, and Luxembourgish tailored to target demographic priorities.',
      keyAspect: 'Proximity, domestic reputation, and frictionless interaction.'
    },
    international: {
      tag: 'CROSS-BORDER COMMERCIAL REACH',
      title: 'International Clients & Cross-Border Partners',
      context: 'For companies whose counterparties, corporate clients, institutional investors, or distribution networks span the Greater Region (France, Germany, Belgium), wider Europe, or global hubs.',
      challenge: 'Navigating discerning corporate buyers who scrutinise international capability, governance, and institutional depth before initiating contact.',
      solution: 'An authoritative digital presence that communicates institutional maturity, cross-border capabilities, and distinct competitive advantage without generic corporate jargon.',
      languages: 'English and French as corporate standard, with localized precision.',
      keyAspect: 'Credibility, cross-border capability, and clear value differentiation.'
    },
    specialist: {
      tag: 'SPECIALIST & PROFESSIONAL DEPTH',
      title: 'Specialist Professional Practices',
      context: 'For architectural practices, engineering consultancies, technology innovators, specialist logistics managers, and niche advisory firms serving demanding institutional buyers.',
      challenge: 'Explaining complex, nuanced, or technically demanding solutions to decision-makers without overwhelming them or trivialising the depth of work.',
      solution: 'Structured editorial hierarchy, clear case-study frameworks, and considered information architecture that makes technical mastery effortlessly digestible.',
      languages: 'English and French with industry-specific terminology tailored to decision-makers.',
      keyAspect: 'Clarity of complex capability, technical rigor, and strategic confidence.'
    }
  };

  // Workflow Stages for Experience 05
  const workflowStages = [
    {
      step: '01',
      title: 'Inbound Enquiries',
      sub: 'Multi-channel intake',
      detail: 'Inquiries from websites, direct referrals, cross-border partner networks, and RFPs are consolidated into a structured intake pipeline with immediate origin attribution.',
      impact: 'Zero lost leads or overlooked partner correspondence.'
    },
    {
      step: '02',
      title: 'Lead Qualification',
      sub: 'Contextual review',
      detail: 'Requirements, scope prerequisites, timeline, and jurisdiction details are captured systematically before assigning to the right principal or practice lead.',
      impact: 'High-value opportunities prioritised with instant commercial context.'
    },
    {
      step: '03',
      title: 'Client Onboarding',
      sub: 'Single source of truth',
      detail: 'Engagement contracts, agreed scopes, billing entities, and stakeholder directories are consolidated into a permanent, secure client workspace.',
      impact: 'Seamless handover from commercial discussion to delivery team.'
    },
    {
      step: '04',
      title: 'Project Delivery',
      sub: 'Milestone management',
      detail: 'Deliverables, internal responsibilities, and external review cycles are linked directly to client agreements without spreadsheet chaos.',
      impact: 'Deadlines visible, dependencies tracked, client updates effortless.'
    },
    {
      step: '05',
      title: 'Team Coordination',
      sub: 'Workstream clarity',
      detail: 'Day-to-day task assignments, review stages, and handover milestones are kept clear across hybrid, remote, and cross-border teams.',
      impact: 'Staff spend time doing high-value work, not hunting down updates.'
    },
    {
      step: '06',
      title: 'Management Insight',
      sub: 'Executive visibility',
      detail: 'Real-time overview of active engagements, team capacity, pipeline momentum, and revenue milestones without manual spreadsheet compilation.',
      impact: 'Partners and directors make decisions based on live operational truth.'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: LUXEMBOURG_FAQS.map((faq) => ({
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
    { name: 'Luxembourg', urlPath: '/global-markets/luxembourg' },
  ]);

  return (
    <div className="min-h-screen bg-[#0C0F14] text-[#E8ECF2] selection:bg-[#7E22CE] selection:text-white font-sans overflow-x-hidden antialiased">
      <SEO
        title="Luxembourg | Strategic Brand, Digital Experiences & Business Systems | Mayaa Solutions"
        description="Brand building, high-clarity digital experiences, and personalised business management systems for Luxembourg enterprises. Helping companies turn domestic capability into wider commercial influence across Luxembourg City, Kirchberg, Belval, and beyond."
        keywords="Mayaa Solutions Luxembourg, brand design Luxembourg, website design Luxembourg, business management systems Luxembourg, custom business software Luxembourg, B2B website design Luxembourg, digital agency Luxembourg, workflow software Luxembourg, Luxembourg SME software, Kirchberg business systems"
        canonicalUrl="https://mayaasolutions.in/global-markets/luxembourg"
        schema={[breadcrumbSchema, faqSchema]}
      />

      {/* SUBTLE BACKGROUND GRID PATTERN */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #E8ECF2 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      {/* =========================================================================
          01: HERO: LOCAL PRESENCE. INTERNATIONAL PERSPECTIVE.
          ========================================================================= */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 border-b border-[#232834] overflow-hidden">
        {/* Ambient Plum & Slate Glow */}
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-br from-[#7E22CE]/15 via-[#3B0764]/10 to-transparent blur-3xl pointer-events-none rounded-full" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-[#1E293B]/30 to-transparent blur-2xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Top Telemetry / Context Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-[#232834]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A855F7] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#94A3B8]">
                MAYAA SOLUTIONS × GRAND DUCHY OF LUXEMBOURG
              </span>
            </div>
            <div className="flex items-center gap-6 text-xs font-mono text-[#64748B]">
              <span>GREATER REGION CROSS-BORDER REACH</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">KIRCHBERG · CLOCHE D’OR · BELVAL</span>
            </div>
          </div>

          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left 7 Cols: Typographic Statement */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1629] border border-[#7E22CE]/40 text-[#D8B4FE] text-xs font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Commercial Identity & Bespoke Systems Architecture</span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.08]">
                YOUR BUSINESS <br />
                <span className="font-serif italic font-normal text-[#E2E8F0]">HAS A PLACE HERE.</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E2E8F0] to-[#C084FC]">
                  ITS POTENTIAL DOESN’T STOP THERE.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#94A3B8] font-light leading-relaxed max-w-2xl">
                Whether your clients are based within the Grand Duchy or across European borders, your organisation needs a brand that commands immediate credibility, a digital experience that articulates its true capability, and personalised systems engineered around how you actually operate.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#7E22CE] to-[#9333EA] hover:from-[#9333EA] hover:to-[#A855F7] text-white font-medium text-sm tracking-wide shadow-lg shadow-[#7E22CE]/25 transition-all duration-300 group"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="#three-ways"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#161B22] hover:bg-[#1E232E] border border-[#2B3242] text-[#CBD5E1] font-medium text-sm transition-all duration-300"
                >
                  <span>Explore What We Build</span>
                  <ArrowUpRight className="w-4 h-4 text-[#94A3B8]" />
                </a>
              </div>

              {/* Interactive Scale Lens Selector */}
              <div className="pt-6 border-t border-[#232834]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-3">
                  Select Perspective Lens:
                </div>
                <div className="inline-flex p-1 rounded-lg bg-[#141822] border border-[#2B3242] gap-1">
                  <button
                    onClick={() => setActiveScale('both')}
                    className={`px-4 py-2 text-xs rounded-md font-medium transition-all ${
                      activeScale === 'both' 
                        ? 'bg-[#7E22CE] text-white shadow-sm' 
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    Combined Horizon
                  </button>
                  <button
                    onClick={() => setActiveScale('local')}
                    className={`px-4 py-2 text-xs rounded-md font-medium transition-all ${
                      activeScale === 'local' 
                        ? 'bg-[#7E22CE] text-white shadow-sm' 
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    Local Foundation
                  </button>
                  <button
                    onClick={() => setActiveScale('international')}
                    className={`px-4 py-2 text-xs rounded-md font-medium transition-all ${
                      activeScale === 'international' 
                        ? 'bg-[#7E22CE] text-white shadow-sm' 
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    Cross-Border Reach
                  </button>
                </div>

                <div className="mt-3 text-xs text-[#94A3B8] italic">
                  {activeScale === 'both' && '→ Balancing regional proximity with seamless cross-border engagement.'}
                  {activeScale === 'local' && '→ Establishing domestic authority across Luxembourg’s multilingual market.'}
                  {activeScale === 'international' && '→ Presenting institutional depth to European & global decision-makers.'}
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Editorial Composition with Genuine Studio Visual */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative group rounded-2xl overflow-hidden border border-[#2B3242] bg-[#141822] shadow-2xl">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src="/images/luxembourg-commercial-hero.jpg"
                    alt="Contemporary architectural and commercial studio in Luxembourg City"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F14] via-transparent to-transparent opacity-80" />
                  
                  {/* Context Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono bg-[#0C0F14]/85 backdrop-blur-md px-3.5 py-2.5 rounded-lg border border-[#2B3242]/80">
                    <span className="text-[#E2E8F0]">STUDIO / LUXEMBOURG CITY</span>
                    <span className="text-[#A855F7]">OPERATIONAL ARCHITECTURE</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#A855F7]">
                    01 // COMMERCIAL REALITY
                  </div>
                  <h3 className="text-lg font-medium text-white leading-snug">
                    A small domestic boundary does not define your commercial orbit.
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    Luxembourg businesses operate in a uniquely high-trust, multilingual junction. Whether you are an architectural firm, niche consultancy, specialised B2B provider, or tech venture, your clients expect world-class execution from the very first impression.
                  </p>
                </div>
              </div>

              {/* Quick Stat Pill */}
              <div className="p-4 rounded-xl bg-[#141822] border border-[#232834] flex items-center justify-between">
                <div className="text-xs text-[#94A3B8]">
                  <span className="text-white font-medium">Digital Decade & STATEC Context:</span> High infrastructure readiness; the commercial frontier is connecting brand stature with unified internal operations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02: DIAGNOSTIC INQUIRIES: COMMERCIAL CLARITY
          ========================================================================= */}
      <section className="py-24 lg:py-32 border-b border-[#E5E5E2] relative bg-white text-[#171717]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#7E22CE]">
              02 // COMMERCIAL CLARITY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#171717] leading-tight">
              Being in the right market is <br />
              <span className="font-serif italic text-[#555555]">only the beginning.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
              Your business may have the right expertise, a strong offering, and the capability to serve discerning clients. But commercial momentum depends on how that capability is experienced from the outside, and delivered on the inside.
            </p>
          </div>

          {/* 4 Critical Diagnostic Inquiries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between hover:border-[#7E22CE]/60 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-lg bg-[#F3E8FF] border border-[#7E22CE]/40 flex items-center justify-center text-[#7E22CE] text-xs font-mono font-medium">
                  01
                </div>
                <h3 className="text-lg font-medium text-[#171717]">Relevance</h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Can target stakeholders understand what makes your business distinct and necessary within ten seconds of landing?
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E5E5E2] text-xs font-mono text-[#666666]">
                PERCEPTION GAP
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between hover:border-[#7E22CE]/60 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-lg bg-[#F3E8FF] border border-[#7E22CE]/40 flex items-center justify-center text-[#7E22CE] text-xs font-mono font-medium">
                  02
                </div>
                <h3 className="text-lg font-medium text-[#171717]">Digital Clarity</h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Does your website articulate your depth of capability, or does it resemble a static brochure that undersells your work?
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E5E5E2] text-xs font-mono text-[#666666]">
                CUSTOMER JOURNEY
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between hover:border-[#7E22CE]/60 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-lg bg-[#F3E8FF] border border-[#7E22CE]/40 flex items-center justify-center text-[#7E22CE] text-xs font-mono font-medium">
                  03
                </div>
                <h3 className="text-lg font-medium text-[#171717]">Brand Stature</h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Does your visual identity reflect where your company is heading, or is it an outdated reflection of where it started years ago?
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E5E5E2] text-xs font-mono text-[#666666]">
                POSITIONING ACCORD
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between hover:border-[#7E22CE]/60 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-lg bg-[#F3E8FF] border border-[#7E22CE]/40 flex items-center justify-center text-[#7E22CE] text-xs font-mono font-medium">
                  04
                </div>
                <h3 className="text-lg font-medium text-[#171717]">Internal Delivery</h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Do your day-to-day internal systems effortlessly support what your brand promises, or are handoffs lost across email and spreadsheets?
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E5E5E2] text-xs font-mono text-[#666666]">
                OPERATIONAL COHERENCE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03: THREE WAYS MAYAA STRENGTHENS YOUR BUSINESS
          ========================================================================= */}
      <section id="three-ways" className="py-24 lg:py-32 border-b border-[#232834] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl space-y-4 mb-20">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#A855F7]">
              03 // CORE CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              Three ways Mayaa strengthens <br />
              <span className="font-serif italic text-[#CBD5E1]">how your business operates.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] font-light leading-relaxed">
              We do not believe in fragmented piecemeal services or bloated off-the-shelf software packages. We focus on the three pillars that govern commercial success.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* SERVICE 1: BRAND DESIGN */}
            <div className="rounded-3xl bg-[#141822] border border-[#2B3242] p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C084FC]">
                  <Compass className="w-4 h-4" />
                  <span>YOUR IDENTITY · STRATEGIC POSITIONING</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-white leading-snug">
                  Make your business recognisable for the right reasons.
                </h3>
                <p className="text-[#94A3B8] text-base leading-relaxed">
                  Your brand should communicate what your business stands for, what makes it distinct, and why its offering matters. We develop considered brand identities and visual systems that help businesses present themselves consistently across domestic and international client touchpoints.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-2.5 text-sm text-[#E2E8F0]">
                    <Check className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                    <span>Distinctive and coherent brand architecture</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-[#E2E8F0]">
                    <Check className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                    <span>Consistent tone across multilingual touchpoints</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-[#E2E8F0]">
                    <Check className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                    <span>Visual positioning aligned with high-value clients</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-[#E2E8F0]">
                    <Check className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                    <span>Cross-border design guidelines and assets</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#241A38] hover:bg-[#342454] border border-[#7E22CE]/50 text-[#D8B4FE] text-sm font-medium transition-colors"
                  >
                    <span>Discuss Brand Design</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Visual Showcase: Identity Specimen */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0C0F14] border border-[#232834] font-mono text-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#232834] text-[#64748B]">
                  <span>IDENTITY SYSTEM SPECIFICATION</span>
                  <span className="text-[#A855F7]">v2.6</span>
                </div>
                <div className="p-4 rounded-xl bg-[#141822] border border-[#2B3242] space-y-2">
                  <div className="text-[10px] uppercase tracking-widest text-[#94A3B8]">POSITIONING STATEMENT</div>
                  <div className="text-white font-sans text-sm font-medium">
                    "Specialist advisory and operational delivery for high-complexity European projects."
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-lg bg-[#141822] border border-[#2B3242]">
                    <div className="text-[10px] text-[#64748B]">TONE</div>
                    <div className="text-white font-sans font-medium text-xs">Precise</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#141822] border border-[#2B3242]">
                    <div className="text-[10px] text-[#64748B]">REGISTER</div>
                    <div className="text-white font-sans font-medium text-xs">Authoritative</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#141822] border border-[#2B3242]">
                    <div className="text-[10px] text-[#64748B]">AUDIENCE</div>
                    <div className="text-white font-sans font-medium text-xs">Institutional</div>
                  </div>
                </div>
                <div className="text-[11px] text-[#64748B] pt-2 italic">
                  → Engineered for immediate recognition across Greater Region proposals.
                </div>
              </div>
            </div>

            {/* SERVICE 2: WEBSITES & DIGITAL EXPERIENCES */}
            <div className="rounded-3xl bg-[#141822] border border-[#2B3242] p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 p-6 rounded-2xl bg-[#0C0F14] border border-[#232834] space-y-4">
                <div className="flex items-center gap-1.5 pb-3 border-b border-[#232834]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
                  <span className="text-[11px] font-mono text-[#64748B] ml-2">portal.mayaasolutions.in/lu</span>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-[#141822] border border-[#2B3242] space-y-1">
                    <span className="text-[10px] text-[#A855F7]">INFORMATION ARCHITECTURE</span>
                    <div className="text-white text-xs font-sans">Specialist B2B Capabilities Catalog</div>
                    <div className="text-[#64748B] text-[11px]">Structured case studies · Direct enquiry qualification</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#141822] border border-[#2B3242] space-y-1">
                    <span className="text-[10px] text-[#38BDF8]">SPEED & ACCESSIBILITY</span>
                    <div className="text-white text-xs font-sans">Sub-second load times · Fully responsive</div>
                    <div className="text-[#64748B] text-[11px]">Zero bloated scripts · Clean modern code</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#38BDF8]">
                  <Globe2 className="w-4 h-4" />
                  <span>YOUR CUSTOMER EXPERIENCE · DIGITAL PLATFORMS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-white leading-snug">
                  Make your expertise easier to understand.
                </h3>
                <p className="text-[#94A3B8] text-base leading-relaxed">
                  A business serving sophisticated or international customers needs far more than an aesthetic template. It needs a digital experience that organizes complex offerings, communicates relevant capabilities, establishes confidence, and guides decision-makers to take action.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-2.5 text-sm text-[#E2E8F0]">
                    <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>Clear articulation of complex services</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-[#E2E8F0]">
                    <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>High-conversion B2B customer journeys</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-[#E2E8F0]">
                    <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>Multilingual content hierarchy</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-[#E2E8F0]">
                    <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>Speed, performance & modern UX standards</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F2231] hover:bg-[#153249] border border-[#0284C7]/50 text-[#7DD3FC] text-sm font-medium transition-colors"
                  >
                    <span>Discuss Your Website</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* SERVICE 3: PERSONALISED BUSINESS SYSTEMS */}
            <div className="rounded-3xl bg-[#141822] border border-[#2B3242] p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#10B981]">
                  <Workflow className="w-4 h-4" />
                  <span>YOUR OPERATIONS · PERSONALISED BUSINESS SYSTEMS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-white leading-snug">
                  Build a better way to manage the work.
                </h3>
                <p className="text-[#94A3B8] text-base leading-relaxed">
                  As an organisation grows, enquiries, client contracts, active projects, team assignments, follow-ups, and executive reports quickly scatter across disconnected SaaS subscriptions and personal inboxes. We design custom-built management systems tailored precisely to your actual workflows.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-2.5 text-sm text-[#E2E8F0]">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Unifies Enquiries, Leads & Client Records</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-[#E2E8F0]">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Direct Task & Delivery Milestone Tracking</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-[#E2E8F0]">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Clear Accountability & Automated Reminders</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-[#E2E8F0]">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Live Management Visibility & Reporting</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0C241D] hover:bg-[#12382D] border border-[#059669]/50 text-[#6EE7B7] text-sm font-medium transition-colors"
                  >
                    <span>Discuss Your Business System</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Visual Showcase: Workflow Node Sequence */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0C0F14] border border-[#232834] font-mono text-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#232834] text-[#64748B]">
                  <span>OPERATIONAL FLOW ARCHITECTURE</span>
                  <span className="text-[#10B981]">CONNECTED</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-[#141822] border border-[#2B3242] flex items-center justify-between">
                    <span className="text-white font-sans text-xs">1. Inbound Inquiries</span>
                    <span className="text-[#A855F7] text-[10px]">Auto-Categorized</span>
                  </div>
                  <div className="text-center text-[#64748B] text-[10px]">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#141822] border border-[#2B3242] flex items-center justify-between">
                    <span className="text-white font-sans text-xs">2. Active Client Workspace</span>
                    <span className="text-[#38BDF8] text-[10px]">Contracts & Scopes</span>
                  </div>
                  <div className="text-center text-[#64748B] text-[10px]">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#141822] border border-[#2B3242] flex items-center justify-between">
                    <span className="text-white font-sans text-xs">3. Delivery & Tasks</span>
                    <span className="text-[#10B981] text-[10px]">Team Assigned</span>
                  </div>
                  <div className="text-center text-[#64748B] text-[10px]">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#141822] border border-[#2B3242] flex items-center justify-between">
                    <span className="text-white font-sans text-xs">4. Executive Reporting</span>
                    <span className="text-[#E2E8F0] text-[10px]">Real-time Health</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          04: DESIGNED FOR MULTIPLE AUDIENCES (LUXEMBOURG-SPECIFIC)
          ========================================================================= */}
      <section className="py-24 lg:py-32 border-b border-[#E5E5E2] relative bg-white text-[#171717]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#7E22CE]">
              04 // AUDIENCE MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#171717] leading-tight">
              Different audiences. <br />
              <span className="font-serif italic text-[#555555]">One coherent business identity.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
              Luxembourg’s multilingual and internationally connected commercial reality means that companies frequently communicate with domestic customers, cross-border corporate partners, and specialist technical buyers who have distinctly different needs.
            </p>
          </div>

          {/* Interactive Audience Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            <button
              onClick={() => setSelectedAudience('local')}
              className={`p-5 rounded-2xl text-left border transition-all ${
                selectedAudience === 'local'
                  ? 'bg-[#F3E8FF] border-[#7E22CE] shadow-sm'
                  : 'bg-[#FAFAF9] border-[#E5E5E2] hover:border-[#CCCCCC]'
              }`}
            >
              <div className="text-xs font-mono uppercase tracking-wider text-[#7E22CE] mb-1">
                01 // AUDIENCE
              </div>
              <div className="text-base font-medium text-[#171717] mb-1">Local Customers</div>
              <div className="text-xs text-[#666666]">Within Luxembourg & Greater Region</div>
            </button>

            <button
              onClick={() => setSelectedAudience('international')}
              className={`p-5 rounded-2xl text-left border transition-all ${
                selectedAudience === 'international'
                  ? 'bg-[#F3E8FF] border-[#7E22CE] shadow-sm'
                  : 'bg-[#FAFAF9] border-[#E5E5E2] hover:border-[#CCCCCC]'
              }`}
            >
              <div className="text-xs font-mono uppercase tracking-wider text-[#7E22CE] mb-1">
                02 // AUDIENCE
              </div>
              <div className="text-base font-medium text-[#171717] mb-1">International Clients</div>
              <div className="text-xs text-[#666666]">European & Global Counterparties</div>
            </button>

            <button
              onClick={() => setSelectedAudience('specialist')}
              className={`p-5 rounded-2xl text-left border transition-all ${
                selectedAudience === 'specialist'
                  ? 'bg-[#F3E8FF] border-[#7E22CE] shadow-sm'
                  : 'bg-[#FAFAF9] border-[#E5E5E2] hover:border-[#CCCCCC]'
              }`}
            >
              <div className="text-xs font-mono uppercase tracking-wider text-[#7E22CE] mb-1">
                03 // AUDIENCE
              </div>
              <div className="text-base font-medium text-[#171717] mb-1">Specialist Practices</div>
              <div className="text-xs text-[#666666]">Technical, Corporate & Institutional Buyers</div>
            </button>
          </div>

          {/* Active Audience Deep Dive Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedAudience}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 lg:p-12 rounded-3xl bg-[#FAFAF9] border border-[#E5E5E2] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-[#F3E8FF] text-[#7E22CE] font-mono text-xs font-medium">
                  {audienceProfiles[selectedAudience].tag}
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-[#171717]">
                  {audienceProfiles[selectedAudience].title}
                </h3>
                <p className="text-base text-[#444444] leading-relaxed">
                  {audienceProfiles[selectedAudience].context}
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-[#E5E5E2]">
                    <span className="text-xs font-mono text-[#DC2626] uppercase tracking-wider block mb-1">
                      The Common Hurdle:
                    </span>
                    <p className="text-sm text-[#555555]">
                      {audienceProfiles[selectedAudience].challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#E5E5E2]">
                    <span className="text-xs font-mono text-[#059669] uppercase tracking-wider block mb-1">
                      Mayaa’s Approach:
                    </span>
                    <p className="text-sm text-[#555555]">
                      {audienceProfiles[selectedAudience].solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-[#E5E5E2] space-y-6">
                <div className="text-xs font-mono uppercase tracking-widest text-[#666666] pb-3 border-b border-[#E5E5E2]">
                  COMMUNICATION STRATEGY
                </div>

                <div>
                  <div className="text-xs text-[#666666] mb-1">Linguistic Approach:</div>
                  <div className="text-sm text-[#171717] font-medium">
                    {audienceProfiles[selectedAudience].languages}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-[#666666] mb-1">Key Value Driver:</div>
                  <div className="text-sm text-[#7E22CE] font-medium">
                    {audienceProfiles[selectedAudience].keyAspect}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E5E2]">
                  <p className="text-xs text-[#666666] italic leading-relaxed">
                    We tailor communication architecture so your business conveys unified identity without resorting to redundant translations or generic copy.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* =========================================================================
          05: THE 6-STAGE WORKFLOW BEHIND THE EXPERIENCE
          ========================================================================= */}
      <section className="py-24 lg:py-32 border-b border-[#232834] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#A855F7]">
              05 // OPERATIONAL SUBSTANCE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              What customers experience depends on <br />
              <span className="font-serif italic text-[#CBD5E1]">how the business works behind the scenes.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] font-light leading-relaxed">
              A distinctive brand and an elegant digital presence set clear commercial expectations. But client trust is won or lost by what happens after the initial inquiry is received.
            </p>
          </div>

          {/* Interactive Pipeline Visualizer */}
          <div className="rounded-3xl bg-[#141822] border border-[#2B3242] p-8 lg:p-12">
            <div className="text-xs font-mono uppercase tracking-wider text-[#A855F7] mb-6">
              THE INTEGRATED COMMERCIAL WORKSPACE:
            </div>

            {/* Stages Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
              {workflowStages.map((stage, idx) => (
                <button
                  key={stage.step}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    activeStage === idx
                      ? 'bg-[#241A38] border-[#7E22CE] text-white shadow-md'
                      : 'bg-[#0C0F14] border-[#232834] text-[#94A3B8] hover:border-[#3E475C] hover:text-white'
                  }`}
                >
                  <div className="text-[10px] font-mono text-[#A855F7] mb-1">{stage.step}</div>
                  <div className="text-xs font-medium truncate">{stage.title}</div>
                  <div className="text-[10px] text-[#64748B] truncate">{stage.sub}</div>
                </button>
              ))}
            </div>

            {/* Selected Stage Detail Display */}
            <div className="p-8 rounded-2xl bg-[#0C0F14] border border-[#232834] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#241A38] text-[#D8B4FE]">
                    STAGE {workflowStages[activeStage].step}
                  </span>
                  <h3 className="text-xl font-medium text-white">
                    {workflowStages[activeStage].title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                  {workflowStages[activeStage].detail}
                </p>
              </div>

              <div className="lg:col-span-4 p-5 rounded-xl bg-[#141822] border border-[#2B3242] space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#10B981]">
                  COMMERCIAL BENEFIT
                </div>
                <div className="text-sm text-white font-medium">
                  {workflowStages[activeStage].impact}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06: ENGINEERING ENGINE & DELIVERY ARCHITECTURE
          ========================================================================= */}
      <section className="py-24 lg:py-32 border-b border-[#E5E5E2] relative bg-white text-[#171717]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#7E22CE] mb-4">
            06 // DELIVERY ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#171717] leading-tight mb-6">
            Senior engineering depth. <br />
            <span className="font-serif italic text-[#555555]">Luxembourg European standards.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#555555] font-light max-w-3xl leading-relaxed mb-16">
            We deliver for Luxembourg organisations directly from our technology studio in India. We do not pretend to hold expensive local offices on Boulevard Royal. Instead, we invest in principal-level engineering, scheduled timezone alignment, and complete data sovereignty.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2]">
              <Clock className="w-5 h-5 text-[#7E22CE] mb-4" />
              <h3 className="text-base font-medium text-[#171717] mb-2">CET / CEST Alignment</h3>
              <p className="text-xs text-[#555555] leading-relaxed font-light">
                Scheduled daily overlap with Luxembourg business hours for live sprint reviews, architectural clarifications, and design sign-offs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2]">
              <Cpu className="w-5 h-5 text-[#7E22CE] mb-4" />
              <h3 className="text-base font-medium text-[#171717] mb-2">Direct Senior Access</h3>
              <p className="text-xs text-[#555555] leading-relaxed font-light">
                Direct communication with software engineers and brand directors. No junior account executives or confusing telephone games.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2]">
              <Lock className="w-5 h-5 text-[#7E22CE] mb-4" />
              <h3 className="text-base font-medium text-[#171717] mb-2">European Data Sovereignty</h3>
              <p className="text-xs text-[#555555] leading-relaxed font-light">
                All software deployed on client-owned European cloud infrastructure (Frankfurt / Western Europe) with 100% intellectual property ownership and strict NDAs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2]">
              <CreditCard className="w-5 h-5 text-[#7E22CE] mb-4" />
              <h3 className="text-base font-medium text-[#171717] mb-2">EUR Milestone Billing</h3>
              <p className="text-xs text-[#555555] leading-relaxed font-light">
                Fixed-scope proposals quoted and invoiced directly in Euros (EUR) tied to verified deliverable milestones with zero recurring license fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          07: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-24 lg:py-32 border-b border-[#232834] relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#A855F7] mb-4">
            07 // CLARITY & DUE DILIGENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white leading-tight mb-4">
            Questions Luxembourg leaders ask.
          </h2>
          <p className="text-base text-[#94A3B8] font-light mb-12">
            Clear facts regarding remote delivery, data privacy, multilingual architecture, and commercial structure.
          </p>

          <div className="space-y-4">
            {LUXEMBOURG_FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-[#2B3242] bg-[#141822] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#1A202C] transition-colors"
                >
                  <span className="text-base sm:text-lg font-medium text-white">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#94A3B8] transition-transform duration-300 shrink-0 ${
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
                      <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed border-t border-[#232834]">
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

      {/* =========================================================================
          08: FINAL CONVERSION SECTION
          ========================================================================= */}
      <section className="py-24 lg:py-36 relative overflow-hidden bg-white text-[#171717] border-t border-[#E5E5E2]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8FF] border border-[#7E22CE]/40 text-[#7E22CE] text-xs font-mono font-medium">
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-light text-[#171717] leading-tight">
            Make your next business <br />
            <span className="font-serif italic font-normal text-[#555555]">improvement count.</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#555555] font-light leading-relaxed max-w-2xl mx-auto">
            Whether you want to sharpen your brand, articulate your true capability through a refined digital platform, or coordinate daily operations with a custom business management system, the first step is a direct, confidential discussion.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#111111] hover:bg-neutral-800 text-white font-medium text-sm tracking-wide shadow-md transition-all duration-300 group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/global-markets"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#F0F0EE] hover:bg-[#E5E5E2] border border-[#CCCCCC] text-[#171717] font-medium text-sm transition-all duration-300"
            >
              <span>Explore Global Markets</span>
              <ArrowUpRight className="w-4 h-4 text-[#666666]" />
            </Link>
          </div>

          <div className="pt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#666666]">
            <span>NO FORCED SUBSCRIPTIONS · FIXED SCOPE · DIRECT ACCESS TO PRINCIPALS</span>
          </div>
        </div>
      </section>
    </div>
  );
};
