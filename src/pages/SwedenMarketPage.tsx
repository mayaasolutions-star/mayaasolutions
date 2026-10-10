import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown, 
  Check, 
  Workflow, 
  Layers, 
  Sliders, 
  Cpu, 
  Sparkles, 
  ChevronRight, 
  ChevronDown,
  ShieldCheck, 
  Compass, 
  ArrowUpRight, 
  CheckCircle2, 
  Eye, 
  Users, 
  Building2, 
  FileText, 
  Boxes, 
  Clock, 
  Lock, 
  CreditCard 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const SWEDEN_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for Swedish enterprises from Bangalore without an on-the-ground local office?',
    answer:
      'We collaborate directly with Swedish founders, technical leaders, and operational directors via scheduled Central European Time (CET/CEST) collaboration windows, asynchronous video walkthroughs, and clear written sprint milestones. We do not claim physical offices in Stockholm or Gothenburg where we do not have them. By concentrating our senior systems architects and engineers in Bangalore, we provide direct principal-to-engineer communication with disciplined Swedish execution and zero agency overhead.',
  },
  {
    question: 'How do you ensure data sovereignty, GDPR compliance, and security for Swedish companies?',
    answer:
      'All bespoke systems and business software are deployed directly onto client-owned European cloud infrastructure (such as AWS Europe/Stockholm eu-north-1, Azure Sweden Central, or dedicated Scandinavian cloud environments). Mayaa does not retain, process, or monetize your company or client data. System architectures enforce strict role-based access controls and audit logs. Clients retain 100% intellectual property ownership under binding international confidentiality agreements.',
  },
  {
    question: 'Can your business systems integrate with our existing Nordic tools and databases?',
    answer:
      'Yes. Rather than forcing your company into another rigid, one-size-fits-all SaaS tool, we build tailored API connectors that bridge your existing software suites (e.g. Fortnox, Visma, legacy SQL databases, or CAD/engineering repositories) into a unified operational workflow, eliminating duplicate data entry.',
  },
  {
    question: 'How are commercial agreements and invoicing structured?',
    answer:
      'We quote and invoice transparently in Swedish Krona (SEK) or Euros (EUR) on fixed-scope, milestone-governed contracts. Each development phase, from workflow mapping to production deployment, has explicit acceptance criteria. Furthermore, our bespoke systems carry zero perpetual per-user software licensing fees, giving your business predictable capital allocation.',
  },
];

export const SwedenMarketPage: React.FC = () => {
  const [activeWorkspace, setActiveWorkspace] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const workspaces = [
    {
      id: 'brand',
      number: 'WORKSPACE 01',
      title: 'HOW THE BUSINESS IS PERCEIVED',
      coreThought: 'MAKE VALUE IMMEDIATELY RECOGNISABLE.',
      subtitle: 'Brand Positioning & Commercial Identity',
      context: 'Swedish engineering, design, and technical enterprises build world-class products, yet their market presentation can feel overly modest or difficult for international buyers to evaluate. We refine your commercial identity so technical capability commands immediate authority.',
      deliverables: [
        'Strategic Brand Architecture & Tone',
        'Coherent Visual Identity & Typographic System',
        'International Sales & Credential Decks',
        'Visual Consistency Across Touchpoints',
      ],
    },
    {
      id: 'experience',
      number: 'WORKSPACE 02',
      title: 'HOW THE BUSINESS IS EXPERIENCED',
      coreThought: 'MAKE THE NEXT STEP EFFORTLESS.',
      subtitle: 'Digital Experience & Customer Journey',
      context: 'When enterprise buyers, procurement teams, or international partners visit your website, they should not struggle with opaque service listings or complex navigation. We build high-precision digital experiences that make understanding your offering intuitive.',
      deliverables: [
        'Editorial Information Architecture',
        'Bespoke Interactive Service Presentations',
        'Structured Technical Portfolio Frameworks',
        'Rapid Inbound Inquiry Qualification',
      ],
    },
    {
      id: 'system',
      number: 'WORKSPACE 03',
      title: 'HOW THE BUSINESS IS OPERATED',
      coreThought: 'MAKE WORKFLOWS PREDICTABLE.',
      subtitle: 'Personalised Business Management Systems',
      context: 'As Swedish organisations scale, flat teams and collaborative cultures need shared operational truth without administrative friction. We engineer custom management systems that unify inbound inquiries, project milestones, team ownership, and executive reporting.',
      deliverables: [
        'Single Inbound Opportunity Queue',
        'Live Project Milestone & Task Registry',
        'Centralised Institutional Client Records',
        'Real-Time Executive Health Dashboards',
      ],
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SWEDEN_FAQS.map((faq) => ({
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
    { name: 'Sweden', urlPath: '/global-markets/sweden' },
  ]);

  return (
    <>
      <SEO
        title="Sweden | Strategic Brand, Digital Experiences & Business Systems | Mayaa Solutions"
        description="Good ideas deserve better execution. Mayaa helps Swedish businesses turn the quality of what they build into stronger brands, better digital experiences, and business systems designed around how they work across Stockholm, Gothenburg, and Malmö."
        keywords="Mayaa Solutions Sweden, business management systems Sweden, custom business software Sweden, custom CRM Sweden, business automation Sweden, website design Sweden, brand design Sweden, branding agency Sweden, digital experience Sweden, Skräddarsydd programvara, Affärssystem, CRM-system, Automatisering av arbetsflöden, Stockholm digital agency, Gothenburg business software, Malmo tech systems"
        canonicalUrl="https://mayaasolutions.in/global-markets/sweden"
        schema={[breadcrumbSchema, faqSchema]}
      />

      <div className="bg-[#090C10] text-[#E2E8F0] min-h-screen selection:bg-white selection:text-black font-sans antialiased">

        {/* 01. HERO: NORDIC FUNCTIONALITY & COLLABORATIVE MOMENTUM */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 px-6 md:px-12 border-b border-white/[0.08] overflow-hidden">
          {/* Subtle architectural background texture */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-luminosity">
            <img 
              src="/images/sweden-commercial-hero.jpg" 
              alt="Swedish Modern Commercial & Industrial Workspace" 
              className="w-full h-full object-cover object-center filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090C10] via-[#090C10]/75 to-[#090C10]/95" />
          </div>

          <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
            {/* Top Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#94A3B8] font-medium font-mono">
                Mayaa Solutions × Sweden
              </span>
            </motion.div>

            {/* Authoritative Minimal Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.08] mb-8"
            >
              Innovation is only <br className="hidden sm:inline" />
              <span className="font-normal italic text-white/95">the beginning.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              Good ideas deserve disciplined execution. Mayaa helps Swedish companies turn the caliber of what they build into stronger brands, high-clarity digital experiences, and operational systems engineered around how they actually work.
            </motion.p>

            {/* Dual Actions */}
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
                href="#workspaces"
                className="w-full sm:w-auto px-9 py-4 border border-white/20 text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-white/[0.05] hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore the Workspaces</span>
                <ArrowDown className="w-3.5 h-3.5 text-white/60" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* 02. CORE SWEDISH BUSINESS REALITY: COLLABORATION WITHOUT COORDINATION OVERHEAD (WHITE) */}
        <section className="w-full bg-white text-[#171717] py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-medium">
              Swedish Commercial Context
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-8">
              Autonomy requires <br />
              <span className="text-[#555555] italic">shared operational truth.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mt-12">
              <div className="md:col-span-7 space-y-6 text-[#555555] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  Swedish work culture values trust, consensus, flat hierarchies, and autonomous decision-making. But when teams lack a unified operational system, autonomy can unintentionally create information silos.
                </p>
                <p>
                  Colleagues spend valuable hours in status meetings just to understand what another department is doing. Costing formulas, customer commitments, and delivery milestones stay locked inside personal memory or isolated documents.
                </p>
                <div className="p-6 border-l-2 border-[#171717] bg-[#FAFAF9] text-[#171717] font-normal text-lg sm:text-xl">
                  “The objective is not to impose rigid bureaucracy. <br className="hidden sm:inline" />
                  <span className="text-[#666666]">It is to give autonomous teams clear visibility.”</span>
                </div>
              </div>

              <div className="md:col-span-5 bg-[#FAFAF9] border border-[#E5E5E2] p-8 rounded-sm space-y-4">
                <div className="text-xs uppercase tracking-[0.2em] text-[#171717] font-mono mb-2 font-medium">
                  Where Friction Emerges:
                </div>
                <ul className="space-y-3 text-xs text-[#555555] font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0284C7] font-mono">-</span>
                    <span>Recurring alignment syncs to confirm who owns specific project deliverables.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0284C7] font-mono">-</span>
                    <span>High-value commercial proposals delayed while gathering specs from multiple heads.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0284C7] font-mono">-</span>
                    <span>Customer context fragmented across personal inboxes, chat, and spreadsheets.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0284C7] font-mono">-</span>
                    <span>Leadership having to compile manual spreadsheets to track quarterly capacity.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 03. INTERACTIVE THREE WORKSPACES */}
        <section id="workspaces" className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              The Architecture of Transformation
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-4">
              Three workspaces. <br />
              <span className="text-[#9CA3AF] italic">One connected business.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-12">
              We align how your enterprise is perceived externally with how it delivers value internally.
            </p>

            {/* Workspace Selector Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
              {workspaces.map((ws, idx) => (
                <button
                  key={ws.id}
                  onClick={() => setActiveWorkspace(idx)}
                  className={`p-6 border text-left transition-all ${
                    activeWorkspace === idx
                      ? 'border-white/40 bg-white/[0.04] shadow-sm'
                      : 'border-white/10 bg-white/[0.01] hover:border-white/20'
                  }`}
                >
                  <div className="text-xs font-mono text-[#38BDF8] mb-1">{ws.number}</div>
                  <div className="text-sm font-medium text-white mb-2">{ws.title}</div>
                  <div className="text-xs text-[#9CA3AF] font-light">{ws.subtitle}</div>
                </button>
              ))}
            </div>

            {/* Active Workspace Deep Dive */}
            <div className="p-8 sm:p-10 border border-white/10 bg-white/[0.02] rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-[#38BDF8]">
                  {workspaces[activeWorkspace].coreThought}
                </div>
                <h3 className="text-2xl font-light text-white leading-snug">
                  {workspaces[activeWorkspace].title}
                </h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  {workspaces[activeWorkspace].context}
                </p>
              </div>

              <div className="lg:col-span-5 bg-white/[0.02] border border-white/[0.08] p-6 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-white/80 mb-2">
                  Target Deliverables:
                </div>
                <ul className="space-y-2 text-xs text-[#D1D5DB] font-light">
                  {workspaces[activeWorkspace].deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 04. BANGALORE ENGINEERING ENGINE & DELIVERY MODEL (WHITE) */}
        <section className="w-full bg-white text-[#171717] py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] font-mono font-medium">
              Delivery Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#171717] tracking-tight leading-[1.08]">
              Bangalore engineering depth. <br />
              <span className="text-[#555555] italic">Swedish operational clarity.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light max-w-3xl leading-relaxed">
              We deliver for Swedish enterprises directly from our technology studio in Bangalore, India. We do not manufacture claims of physical branch offices where we do not have them. Instead, we invest in principal-level engineering, full daily timezone overlap, and complete data sovereignty.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9] rounded-sm">
                <Clock className="w-5 h-5 text-[#0284C7] mb-4" />
                <h3 className="text-sm font-medium text-[#171717] mb-2">CET / CEST Overlap</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Extensive daily working-hour alignment with Stockholm and Gothenburg for standups, architectural reviews, and milestone sign-offs.
                </p>
              </div>

              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9] rounded-sm">
                <Cpu className="w-5 h-5 text-[#0284C7] mb-4" />
                <h3 className="text-sm font-medium text-[#171717] mb-2">Direct Senior Access</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Collaborate directly with senior system architects and software engineers. No junior account executives or layers of miscommunicated handoffs.
                </p>
              </div>

              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9] rounded-sm">
                <Lock className="w-5 h-5 text-[#0284C7] mb-4" />
                <h3 className="text-sm font-medium text-[#171717] mb-2">Data Sovereignty</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  All systems deployed on client-owned cloud accounts (AWS Stockholm / Azure Sweden Central) with 100% intellectual property ownership and strict NDAs.
                </p>
              </div>

              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9] rounded-sm">
                <CreditCard className="w-5 h-5 text-[#0284C7] mb-4" />
                <h3 className="text-sm font-medium text-[#171717] mb-2">SEK / EUR Milestone Billing</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Transparent milestone-governed contracts quoted and invoiced in SEK or EUR with explicit acceptance gates and zero recurring per-user licensing taxes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 05. FREQUENTLY ASKED QUESTIONS */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#9CA3AF] mb-4">
                Clarity & Due Diligence
              </div>
              <h2 className="text-3xl sm:text-5xl font-light text-white leading-tight mb-4">
                Questions Swedish leaders ask.
              </h2>
              <p className="text-base text-[#9CA3AF] font-light">
                Straightforward facts regarding remote delivery, tool integrations, data sovereignty, and commercial structure.
              </p>
            </div>

            <div className="space-y-4">
              {SWEDEN_FAQS.map((faq, idx) => (
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

        {/* 06. FINAL CTA (WHITE) */}
        <section className="w-full bg-white text-[#171717] py-28 md:py-36 px-6 md:px-12 relative overflow-hidden border-t border-[#E5E5E2]">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-3.5 py-1.5 bg-[#F0F0EE] border border-[#E5E5E2] text-xs font-mono text-[#666666] uppercase tracking-widest font-medium">
              Sweden Consultation
            </div>

            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-[#171717] mb-6">
              Build what your business <br />
              <span className="font-normal italic text-[#555555]">needs next.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#555555] font-light max-w-xl mx-auto leading-relaxed">
              Tell us where your company is growing, where collaborative workflows need stronger systems, or where your digital touchpoints need to improve. We start by understanding the business.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 bg-[#111111] text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/global-markets"
                className="w-full sm:w-auto px-10 py-4 border border-[#E5E5E2] text-[#171717] font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#F0F0EE] hover:border-neutral-400 transition-all duration-300"
              >
                Explore Global Markets
              </Link>
            </div>

            <div className="pt-8 text-xs font-mono text-[#888888] tracking-wider">
              Serving enterprises across Stockholm, Gothenburg, Malmö, Uppsala, Lund, and throughout Sweden.
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
