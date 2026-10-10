import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown,
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Workflow,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Database,
  Building2,
  Compass
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const AUSTRIA_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for Austrian businesses from Bangalore without a local office in Vienna or Salzburg?',
    answer:
      'We work directly with Austrian Geschäftsführer, operational directors, and technical leads through structured CET/CEST working hours (with only a 3.5 to 4.5-hour timezone difference). Communications occur in English via dedicated Slack/Teams workspaces, interactive Figma canvases, and recorded sprint walkthroughs. We do not manufacture claims of physical offices on the Ringstraße or in Salzburg where we do not have them. By anchoring senior engineering at our Bangalore headquarters, we provide direct principal-to-engineer collaboration with exceptional rigor and without Austrian agency overhead.',
  },
  {
    question: 'How do you ensure GDPR compliance and European data governance for Austrian enterprises?',
    answer:
      'All custom business management systems, databases, and client portals are deployed directly onto client-owned cloud tenancies in European regions (such as AWS Frankfurt eu-central-1, Microsoft Azure Germany West Central, or Hetzner). Mayaa never retains, accesses without authorization, or monetizes client customer records. Systems feature role-based permissions (RBAC), multi-factor authentication, and strict compliance with EU GDPR and Austrian Datenschutzbehörde regulations.',
  },
  {
    question: 'Can your business systems integrate with Austrian and German ERP systems like BMD, Proffix, or SAP Business One?',
    answer:
      'Yes. Our core principle is "Quality, precision, and dependable systems." Rather than replacing established core infrastructure, we build secure REST/GraphQL API bridges and automated webhook workflows that synchronize client data, quotation revisions, and milestone statuses directly with BMD, Proffix, SAP Business One, or custom database backends.',
  },
  {
    question: 'How are commercial contracts and invoicing structured for Austrian companies?',
    answer:
      'Contracts are fixed-scope, milestone-based, and invoiced transparently in Euros (EUR) tied to concrete deliverables. You receive 100% intellectual property ownership of the codebase and assets upon sign-off, with zero perpetual per-user software licensing fees.',
  },
];

export const AustriaMarketPage: React.FC = () => {
  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: AUSTRIA_FAQS.map((faq) => ({
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
    { name: 'Austria', urlPath: '/global-markets/austria' },
  ]);
  // 5 Concise Austrian Industry Categories
  const austriaIndustries = [
    {
      id: 'construction-engineering',
      title: 'BAUWESEN & ENGINEERING',
      tagline: 'Generalunternehmer · Engineering Practices · Technical Fit-Out',
      image: '/images/industries/construction.jpg',
      quote: 'Connect enquiries, calculations, site milestones, teams and client communication into a dependable workflow.',
    },
    {
      id: 'architecture-design',
      title: 'ARCHITEKTUR & DESIGN',
      tagline: 'Architekturbüros · Interior Studios · Planning Consultancies',
      image: '/images/industries/architecture.webp',
      quote: 'Bring consultations, project submissions, approvals, documentation and client communication into one clear structure.',
    },
    {
      id: 'manufacturing-b2b',
      title: 'PRODUKTION & INDUSTRIE',
      tagline: 'Spezialisierter Maschinenbau · High-Tech Components · Industrial B2B',
      image: '/images/industries/manufacturing.jpg',
      quote: 'Organise complex B2B sales pipelines, technical specifications, orders, follow-ups and client records with precision.',
    },
    {
      id: 'professional-services',
      title: 'BERATUNG & DIENSTLEISTUNGEN',
      tagline: 'Wirtschaftsprüfung · Legal Advisory · Corporate Consultancies',
      image: '/images/industries/clinic.jpg',
      quote: 'Create a clear, structured journey from intake to mandate completion while eliminating administrative friction.',
    },
    {
      id: 'hospitality-tourism',
      title: 'PREMIUM TOURISMUS & HOTELLERIE',
      tagline: 'Alpine Retreats · Boutique Resorts · Cultural Destinations',
      image: '/images/industries/hospitality.webp',
      quote: 'Deliver a refined digital customer experience while ensuring back-office operations run with seamless precision.',
    },
  ];

  // The 6-Stage Process Flow
  const systemFlow = [
    {
      step: '01',
      stage: 'ANFRAGEN (ENQUIRY)',
      flow: 'Web Direct · Direct Calls · Partner Referrals · Email',
      desc: 'Centralise every inbound project enquiry into one qualified intake queue without scattered messages or lost leads.',
    },
    {
      step: '02',
      stage: 'ANGEBOT (SALES)',
      flow: 'Scope Calculation · Transparent Proposals · Revisions',
      desc: 'Structured proposal tracking, transparent cost calculations, and clear revision histories with defined client partner ownership.',
    },
    {
      step: '03',
      stage: 'KUNDEN (CLIENTS)',
      flow: 'Project Requirements · Documentation · History',
      desc: 'One permanent home for contract baselines, technical specifications, compliance documents, and communication milestones.',
    },
    {
      step: '04',
      stage: 'PROJEKTE (PROJECTS)',
      flow: 'Milestones · Task Ownership · Deadlines · Deliverables',
      desc: 'Disciplined phase execution and transparent milestones that eliminate ambiguity across internal teams and external specialists.',
    },
    {
      step: '05',
      stage: 'TEAM (COLLABORATION)',
      flow: 'Responsibilities · Direct Sign-offs · Clear Roles',
      desc: 'Explicit operational roles and structured approval checkpoints so execution proceeds smoothly without constant bottlenecks.',
    },
    {
      step: '06',
      stage: 'MANAGEMENT (OVERSIGHT)',
      flow: 'Capacity Overview · Project Health · Clear Decisions',
      desc: 'Quiet, dependable visibility into active engagements, team utilization, and pipeline health without chasing status updates.',
    },
  ];

  return (
    <>
      <SEO
        title="Brand, Digital Experiences & Business Systems for Austria | Mayaa Solutions"
        description="Quality, precision and dependable systems. Mayaa builds brands, digital experiences and personalised business management systems for established and growing businesses across Austria."
        keywords="Austria business systems, Austrian businesses software, custom business software Austria, business management systems Austria, custom CRM Austria, website design Austria, branding Austria, digital experience Austria, business software Vienna, business software Linz, business software Graz, business software Salzburg, construction business systems Austria, architecture business systems Austria, manufacturing business systems Austria, Mayaa Solutions Austria"
        canonicalUrl="https://mayaasolutions.in/global-markets/austria"
        schema={[breadcrumbSchema, faqSchema]}
      />

      <div className="bg-[#0A0D12] text-[#F3F4F6] min-h-screen selection:bg-white selection:text-black font-sans antialiased">

        {/* 1. HERO SECTION */}
        <section className="relative min-h-[88vh] flex items-center justify-center pt-32 pb-24 px-6 md:px-12 border-b border-white/[0.08] overflow-hidden">
          {/* Subtle architectural atmosphere */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-luminosity">
            <img 
              src="/images/austria-commercial-hero.jpg" 
              alt="Austrian Contemporary Architecture & Modern Workspace" 
              className="w-full h-full object-cover object-center filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/70 to-[#0A0D12]/95" />
          </div>

          <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
            {/* Top Eyebrow Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF] font-medium">
                Austria Market · Precision & Quality
              </span>
            </motion.div>

            {/* Authoritative Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.1] mb-8"
            >
              Good business deserves <br className="hidden sm:inline" />
              <span className="font-normal italic text-white/95">dependable systems.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              Mayaa builds brands, digital experiences and personalised business systems for established and growing businesses in Austria.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto px-9 py-4 bg-white text-black font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#E5E7EB] transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="#what-we-build"
                className="w-full sm:w-auto px-9 py-4 border border-white/20 text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-white/[0.05] hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>See What We Build</span>
                <ArrowDown className="w-3.5 h-3.5 text-white/60" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* 2. CORE AUSTRIAN BUSINESS INSIGHT */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono">
              Process & Reality
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-8">
              A high standard of work <br />
              <span className="text-[#555555]">requires structured operations.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mt-12">
              <div className="md:col-span-7 space-y-6 text-[#555555] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  Austrian businesses are renowned for thoroughness, technical precision and long-standing client partnerships. But as project scope grows and client demands multiply, internal administrative friction can quietly accumulate.
                </p>
                <p>
                  When calculations, customer correspondence, project schedules and technical documents live across separate drives, spreadsheets and inboxes, valuable time is spent searching rather than executing.
                </p>
                <div className="p-6 border-l-2 border-[#171717] bg-[#FAFAF9] text-[#171717] font-normal text-lg sm:text-xl">
                  “Good processes should be clear, practical and dependable. <br className="hidden sm:inline" />
                  <span className="text-[#555555]">Technology should support craftsmanship, not complicate it.”</span>
                </div>
              </div>

              <div className="md:col-span-5 bg-[#FAFAF9] border border-[#E5E5E2] p-8 rounded-sm space-y-6">
                <div className="text-xs uppercase tracking-[0.2em] text-[#171717] font-mono flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-[#171717]" />
                  Where Discipline Creates Clarity
                </div>
                <ul className="space-y-4 text-sm text-[#555555] font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-[#171717] font-mono text-xs mt-0.5">01</span>
                    <span>Eliminating unassigned enquiries and unclear project intake queues.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#171717] font-mono text-xs mt-0.5">02</span>
                    <span>Structured proposal calculations with transparent version control.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#171717] font-mono text-xs mt-0.5">03</span>
                    <span>Defined stage sign-offs between planning, delivery, and invoicing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#171717] font-mono text-xs mt-0.5">04</span>
                    <span>Executive visibility across active mandates without administrative burden.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. BRAND + DIGITAL EXPERIENCE */}
        <section id="what-we-build" className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Prestige & Perception
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              Your digital presence should reflect <br />
              <span className="text-[#9CA3AF]">the quality of your work.</span>
            </h2>

            <p className="text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-16">
              In Austria, credibility is established through precision, substance and restraint. Your brand identity, website, and technical collateral should communicate exact capability and high standards from the first encounter.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 sm:p-10 border border-white/10 bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] font-mono mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-white" />
                    Identity & Design Systems
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">
                    Substance, precision and clarity.
                  </h3>
                  <p className="text-[#9CA3AF] text-sm sm:text-base font-light leading-relaxed mb-6">
                    A refined visual identity that commands quiet authority. Clear typography, disciplined layouts, and professional documentation that present your expertise without exaggeration.
                  </p>
                  <div className="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-white/80 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Corporate Brand Identity & Visual Architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Commercial Pitch, Tender & Proposal Systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Structured Documentation & Typography Guidelines</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/90 font-medium">
                  “Quality speaks with quiet confidence.”
                </div>
              </div>

              <div className="p-8 sm:p-10 border border-white/10 bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] font-mono mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-white" />
                    Digital Experience & Web
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">
                    Websites engineered for serious clients.
                  </h3>
                  <p className="text-[#9CA3AF] text-sm sm:text-base font-light leading-relaxed mb-6">
                    Sub-second performance, structured project portfolios, and clear technical competencies. Built to make it simple for procurement teams and executives to evaluate your capabilities.
                  </p>
                  <div className="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-white/80 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Bespoke Engineering with Clean German / English Structures</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Case Studies & Technical Project Showcases</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Frictionless, Direct Consultation Intake</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/90 font-medium">
                  “Your website is often the first formal meeting.”
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PERSONALISED BUSINESS MANAGEMENT SYSTEM */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono">
              Bespoke Software Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-4">
              PERSONALISED BUSINESS <br />
              <span className="text-[#555555]">MANAGEMENT SYSTEM</span>
            </h2>
            <p className="text-xl text-[#171717] font-light mb-4">
              Built around the way your organisation actually works.
            </p>
            <p className="text-[#555555] text-base sm:text-lg font-light max-w-3xl leading-relaxed mb-16">
              Every established enterprise has its own proven way of scoping, selling, delivering and coordinating work. We understand your operational rhythm first, then build software tailored to it.
            </p>

            {/* The 6-Stage Process Flow */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemFlow.map((item, idx) => (
                <div 
                  key={item.step}
                  className="p-8 border border-[#E5E5E2] bg-[#FAFAF9] rounded-sm hover:border-[#CCCCCC] transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-[#171717] font-medium">{item.step}</span>
                      <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#E5E5E2] text-[#666666]">
                        Phase {idx + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-light text-[#171717] mb-2 tracking-wide">
                      {item.stage}
                    </h3>
                    <div className="text-xs font-mono text-[#666666] mb-4 pb-3 border-b border-[#E5E5E2]">
                      {item.flow}
                    </div>
                    <p className="text-sm text-[#555555] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 border border-[#E5E5E2] bg-[#F7F7F5] text-center max-w-xl mx-auto">
              <p className="text-base text-[#171717] font-light">
                “Clear accountability. Dependable execution. <br />
                <span className="text-[#555555]">Complete visibility across every active mandate.”</span>
              </p>
            </div>
          </div>
        </section>

        {/* 5. AUSTRIAN INDUSTRY SECTION */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Branchen & Sektoren
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-6">
              Engineered for core <br />
              <span className="text-[#9CA3AF]">Austrian business sectors.</span>
            </h2>
            <p className="text-[#9CA3AF] text-base sm:text-lg font-light max-w-2xl leading-relaxed mb-16">
              From corporate practices in Vienna and industrial leaders in Linz to engineering and specialist enterprises across Graz, Salzburg and Innsbruck.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {austriaIndustries.map((ind, i) => (
                <div 
                  key={ind.id}
                  className={`p-8 border border-white/10 bg-white/[0.02] flex flex-col justify-between rounded-sm ${
                    i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9CA3AF] mb-3">
                      {ind.tagline}
                    </div>
                    <h3 className="text-xl font-light text-white mb-4">
                      {ind.title}
                    </h3>
                    <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                      {ind.quote}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs font-mono text-white/50">Custom Architecture</span>
                    <Link to="/contact" className="text-xs text-white/80 hover:text-white flex items-center gap-1">
                      Discuss Requirements <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. RELIABILITY, SECURITY & DATA GOVERNANCE */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono">
              Zuverlässigkeit & Sicherheit
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-6">
              Technology should <br />
              <span className="text-[#555555]">earn its place.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light max-w-3xl leading-relaxed mb-16">
              Austrian businesses do not need software for the sake of software. We build systems that solve real operational bottlenecks, respect data confidentiality, and function reliably day in, day out.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-[#E5E5E2] bg-[#FAFAF9]">
                <div className="text-xs font-mono text-[#666666] mb-4 flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#171717]" />
                  DATENSICHERHEIT
                </div>
                <h3 className="text-lg font-normal text-[#171717] mb-3">Granular Access Control</h3>
                <p className="text-sm text-[#555555] font-light leading-relaxed">
                  Role-based permissions, departmental tiers, and secure authentication ensure sensitive commercial calculations and client files remain strictly confidential.
                </p>
              </div>

              <div className="p-8 border border-[#E5E5E2] bg-[#FAFAF9]">
                <div className="text-xs font-mono text-[#666666] mb-4 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#171717]" />
                  PROZESSDISZIPLIN
                </div>
                <h3 className="text-lg font-normal text-[#171717] mb-3">Dependable Workflows</h3>
                <p className="text-sm text-[#555555] font-light leading-relaxed">
                  Clear phase handoffs eliminate forgotten inquiries and missing documentation, ensuring the organisation maintains its high standard effortlessly.
                </p>
              </div>

              <div className="p-8 border border-[#E5E5E2] bg-[#FAFAF9]">
                <div className="text-xs font-mono text-[#666666] mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#171717]" />
                  PRAGMATISCHE AUTOMATION
                </div>
                <h3 className="text-lg font-normal text-[#171717] mb-3">Purposeful Technology</h3>
                <p className="text-sm text-[#555555] font-light leading-relaxed">
                  Automation is introduced only where it removes tedious manual re-entry or streamlines document handling. No gimmicks, no unnecessary complexity.
                </p>
              </div>
            </div>

            {/* Practical Statement */}
            <div className="mt-12 p-6 border border-[#E5E5E2] bg-[#F7F7F5] text-center max-w-2xl mx-auto">
              <p className="text-sm sm:text-base text-[#171717] font-light">
                “Good systems create capacity for your team to focus on the work that matters. <br className="hidden sm:inline" />
                <span className="text-[#555555]">Structure builds long-term commercial resilience.”</span>
              </p>
            </div>
          </div>
        </section>

        {/* 7. WHY MAYAA */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Vorgehensweise
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-16">
              Understand first. <br />
              <span className="text-[#9CA3AF]">Build second.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4">01 · VERSTEHEN</div>
                <h3 className="text-lg font-normal text-white mb-3">UNDERSTAND</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  How the business calculates, sells, coordinates and delivers work before proposing any software architecture or design.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4">02 · STRUKTURIEREN</div>
                <h3 className="text-lg font-normal text-white mb-3">STRUCTURE</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  Where handoffs and coordination can be simplified so processes are clean and dependable prior to automation.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4">03 · ENTWICKELN</div>
                <h3 className="text-lg font-normal text-white mb-3">BUILD</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  What technology genuinely needs to do. No unnecessary features, no rigid templates, and no technology for the sake of technology.
                </p>
              </div>
            </div>

            {/* Subtle Localisation Reference */}
            <div className="mt-16 text-center text-xs text-white/50 font-mono tracking-wider">
              From corporate institutions in Vienna to industrial and technical enterprises across Linz, Graz, Salzburg and Innsbruck.
            </div>
          </div>
        </section>

        {/* BANGALORE DELIVERY MODEL FOR AUSTRIAN ENTERPRISES */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#2563EB] mb-4 font-mono">
              Engineering Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-6">
              Engineering anchored in Bangalore. <br />
              <span className="text-[#555555]">Zero Vienna agency surcharges.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light max-w-3xl leading-relaxed mb-16">
              Mayaa delivers brand design, digital platforms, and custom business systems directly from our technology hub in Bangalore, India. We offer direct engineer access, quiet execution, and rigorous data protection.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9]">
                <div className="text-xs font-mono text-[#2563EB] uppercase tracking-wider mb-2">01 · TIMEZONE OVERLAP</div>
                <h3 className="text-lg font-normal text-[#171717] mb-2">CET / CEST Alignment</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  With a 3.5 to 4.5-hour difference, our afternoon hours seamlessly cover Austrian business mornings for live design critiques, demos, and reviews.
                </p>
              </div>

              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9]">
                <div className="text-xs font-mono text-[#2563EB] uppercase tracking-wider mb-2">02 · DATA SOVEREIGNTY</div>
                <h3 className="text-lg font-normal text-[#171717] mb-2">European Cloud Deployments</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Workflows and data deploy directly to client-owned European cloud infrastructure (AWS Frankfurt, Azure Germany, Hetzner), strictly adhering to GDPR and Datenschutzbehörde mandates.
                </p>
              </div>

              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9]">
                <div className="text-xs font-mono text-[#2563EB] uppercase tracking-wider mb-2">03 · COMMERCIAL INTEGRITY</div>
                <h3 className="text-lg font-normal text-[#171717] mb-2">EUR Milestone Contracts</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Fixed-scope milestone contracts invoiced in EUR with complete code and intellectual property transfer upon sign-off. Zero recurring software seat fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#3B82F6] mb-4 font-mono">
              Austrian Buyer FAQs
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-12">
              Common questions from <br />
              <span className="text-[#9CA3AF]">Austrian business leaders.</span>
            </h2>

            <div className="space-y-4">
              {AUSTRIA_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 bg-white/[0.02] rounded-sm overflow-hidden transition-colors hover:border-white/20"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 text-white hover:text-[#3B82F6] transition-colors"
                  >
                    <span className="text-base sm:text-lg font-light">{faq.question}</span>
                    <span className="text-xs font-mono text-white/50 flex-shrink-0">
                      {openFaq === idx ? '-' : '+'}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 text-sm text-[#9CA3AF] font-light leading-relaxed border-t border-white/[0.06] pt-4"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden bg-white text-[#171717] border-t border-[#E5E5E2]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-[#171717] mb-6">
              Build dependable systems <br />
              <span className="font-normal italic">for your business.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light max-w-xl mx-auto mb-10 leading-relaxed">
              Tell us where your business is growing, where administrative friction occurs, or where your digital experience needs to improve. We'll start by understanding your operation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 bg-[#111111] text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 border border-[#CCCCCC] text-[#171717] font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#F0F0EE] hover:border-[#111111] transition-all duration-300"
              >
                Discuss Your Business
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
