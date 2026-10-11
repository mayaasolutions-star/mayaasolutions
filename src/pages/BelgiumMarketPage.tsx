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
  Globe2, 
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

const BELGIUM_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for Belgian organisations from India without a local Belgian branch office?',
    answer:
      'We work directly with Belgian managing directors, partners, and technical leads via scheduled Central European Time (CET/CEST) collaboration windows, clear written sprint specifications, and asynchronous video reviews. We do not claim local physical offices in Brussels or Antwerp where we do not have them. By concentrating our senior systems architects and engineers in India, we provide direct principal-to-engineer communication with exceptional agility and zero inflated agency overhead.',
  },
  {
    question: 'Can your business systems accommodate bilingual and cross-regional requirements (Dutch, French, English)?',
    answer:
      'Yes. Belgian commercial reality frequently bridges Flanders, Wallonia, and Brussels, as well as European counterparties. We architect both our public digital experiences and custom back-office management systems with native multi-language data schemas and clean interface toggles. This allows your team and clients to navigate comfortably in Dutch, French, or English without clunky third-party plugins.',
  },
  {
    question: 'How do you handle data privacy, GDPR, and European infrastructure sovereignty?',
    answer:
      'All bespoke systems, databases, and client codebases are deployed directly onto client-owned European cloud infrastructure (such as AWS Europe/Frankfurt or Paris, Microsoft Azure West Europe, or client-specified Belgian private VPS providers). Mayaa does not retain, process, or monetize your company or client records. System architectures enforce strict role-based access control and comprehensive audit logging. Clients retain 100% intellectual property ownership under binding international confidentiality agreements.',
  },
  {
    question: 'How are commercial agreements and invoicing structured?',
    answer:
      'We quote and invoice transparently in Euros (EUR) on fixed-scope, milestone-governed contracts. Each development phase, from process mapping to production handover, has explicit acceptance criteria. Furthermore, our bespoke systems carry zero recurring per-user software licensing fees, ensuring predictable capital allocation.',
  },
];

export const BelgiumMarketPage: React.FC = () => {
  const [selectedWorkflowChallenge, setSelectedWorkflowChallenge] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const workflowChallenges = [
    {
      id: 0,
      title: 'Enquiries & Multilingual Lead Qualification',
      problem: 'Inbound requests from web forms, direct emails, and trade networks sit in disparate inboxes without clear regional or language attribution.',
      solution: 'A centralised intake pipeline captures and qualifies every enquiry, routes to the dedicated team member, and triggers structured follow-up cadences.',
      benefit: 'Zero lost commercial leads · Transparent pipeline momentum across Flanders, Wallonia & Brussels',
    },
    {
      id: 1,
      title: 'Client Records & Historical Context',
      problem: 'Historical notes, signed contracts, and technical specifications are scattered across local drives, chat threads, and emails.',
      solution: 'A consolidated client repository brings agreements, contacts, previous projects, and communication history into one accessible workspace.',
      benefit: 'Instant commercial context · Consistent client relationship standards',
    },
    {
      id: 2,
      title: 'Project Delivery & Subcontractor Handoffs',
      problem: 'Delivery milestones and external partner dependencies are managed via spreadsheets that become outdated almost immediately.',
      solution: 'A project delivery workflow links milestones, task ownership, and status tracking directly to client agreements and technical deliverables.',
      benefit: 'Real-time delivery pacing · Elimination of manual status chasing',
    },
    {
      id: 3,
      title: 'Team Workstreams & Accountabilities',
      problem: 'Specialists and project leads attend recurring alignment meetings just to confirm who is responsible for what.',
      solution: 'Role-based task views provide each colleague with their specific priorities and dependencies without noise from unrelated projects.',
      benefit: 'Autonomous execution · Reduced coordination overhead',
    },
    {
      id: 4,
      title: 'Executive Visibility & Reporting',
      problem: 'Leadership spends hours assembling manual weekly updates from disparate departments to gauge overall business health.',
      solution: 'Live management dashboards compile enquiry volumes, active delivery progress, invoice milestones, and capacity bottlenecks automatically.',
      benefit: 'Calm executive oversight · Proactive decision-making',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: BELGIUM_FAQS.map((faq) => ({
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
    { name: 'Belgium', urlPath: '/global-markets/belgium' },
  ]);

  return (
    <>
      <SEO
        title="Belgium | Strategic Brand, Digital Experiences & Business Systems | Mayaa Solutions"
        description="Brand identity, digital experiences, and personalised business management systems for Belgian businesses. Helping companies turn commercial promises into disciplined operational delivery across Brussels, Antwerp, Ghent, and Liège."
        keywords="Mayaa Solutions Belgium, business management systems Belgium, custom business software Belgium, website design Belgium, branding Belgium, custom CRM Belgium, digital agency Brussels, Antwerp business software, Ghent web design, Liege enterprise systems"
        canonicalUrl="https://mayaasolutions.in/global-markets/belgium"
        schema={[breadcrumbSchema, faqSchema]}
      />

      <div className="bg-[#090C10] text-[#E2E8F0] min-h-screen selection:bg-white selection:text-black font-sans antialiased">

        {/* 01. HERO: MULTILINGUAL & CROSS-REGIONAL COHERENCE */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 px-6 md:px-12 border-b border-white/[0.08] overflow-hidden">
          {/* Subtle architectural background texture */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-luminosity">
            <img 
              src="/images/belgium-commercial-hero.jpg" 
              alt="Contemporary Belgian Commercial Architecture & European Hub" 
              className="w-full h-full object-cover object-center filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090C10] via-[#090C10]/75 to-[#090C10]/95" />
          </div>

          <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
            {/* Minimal Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#D97706]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#94A3B8] font-medium font-mono">
                Mayaa Solutions × Belgium
              </span>
            </motion.div>

            {/* Authoritative Minimal Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.08] mb-8"
            >
              Seen. Experienced. <br className="hidden sm:inline" />
              <span className="font-normal italic text-white/95">Delivered.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              What you promise on the outside, you must deliver on the inside. Mayaa connects brand identity, digital customer experiences, and operational systems around how Belgian businesses operate across regions and borders.
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
                href="#workflow-coherence"
                className="w-full sm:w-auto px-9 py-4 border border-white/20 text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-white/[0.05] hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Examine the Architecture</span>
                <ArrowDown className="w-3.5 h-3.5 text-white/60" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* 02. CORE BELGIAN BUSINESS REALITY: BRIDGING COMMERCE ACROSS REGIONS (WHITE) */}
        <section className="w-full bg-white text-[#171717] py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-medium">
              Belgian Commercial Landscape
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-8">
              Commercial coherence across <br />
              <span className="text-[#555555] italic">regions, languages, and borders.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mt-12">
              <div className="md:col-span-7 space-y-6 text-[#555555] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  Belgian enterprises operate at the European crossroads. Whether communicating across Flanders and Wallonia, serving domestic clients in Brussels, or trading into France, the Netherlands, and Germany, consistency is vital.
                </p>
                <p>
                  When your external brand speaks with authority, your digital platform must guide decision-makers seamlessly, and your internal systems must deliver what was agreed without administrative friction.
                </p>
                <div className="p-6 border-l-2 border-[#171717] bg-[#FAFAF9] text-[#171717] font-normal text-lg sm:text-xl">
                  “When brand, digital front-door, and back-office operations align, complexity turns into capacity.”
                </div>
              </div>

              <div className="md:col-span-5 bg-[#FAFAF9] border border-[#E5E5E2] p-8 rounded-sm space-y-4">
                <div className="text-xs uppercase tracking-[0.2em] text-[#171717] font-mono mb-2 font-medium">
                  Where Operational Disconnects Occur:
                </div>
                <ul className="space-y-3 text-xs text-[#555555] font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-[#D97706] font-mono">-</span>
                    <span>Multilingual inquiries arriving via web forms and email without automatic routing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D97706] font-mono">-</span>
                    <span>Contract variations and scope amendments buried in personal email threads.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D97706] font-mono">-</span>
                    <span>Project milestones managed in offline spreadsheets that desynchronize instantly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D97706] font-mono">-</span>
                    <span>Executive leadership needing manual summaries to verify monthly operational margins.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 03. INTERACTIVE BUSINESS WORKFLOW CHALLENGES */}
        <section id="workflow-coherence" className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Operational Challenges Solved
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-4">
              Where does your workflow <br />
              <span className="text-[#9CA3AF] italic">lose momentum?</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-12">
              Select an operational area to see how Mayaa replaces disconnected workarounds with structured systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-8">
              {workflowChallenges.map((ch, idx) => (
                <button
                  key={ch.id}
                  onClick={() => setSelectedWorkflowChallenge(idx)}
                  className={`p-4 border text-left transition-all ${
                    selectedWorkflowChallenge === idx
                      ? 'border-[#D97706] bg-[#1C150B] text-white shadow-sm'
                      : 'border-white/10 bg-white/[0.01] text-[#9CA3AF] hover:border-white/20'
                  }`}
                >
                  <div className="text-[10px] font-mono text-[#D97706] mb-1">0{idx + 1}</div>
                  <div className="text-xs font-medium leading-snug">{ch.title}</div>
                </button>
              ))}
            </div>

            {/* Active Challenge Deep Dive */}
            <div className="p-8 sm:p-10 border border-white/10 bg-white/[0.02] rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#EF4444] block">
                  The Operational Friction:
                </span>
                <p className="text-sm text-[#D1D5DB] font-light leading-relaxed">
                  {workflowChallenges[selectedWorkflowChallenge].problem}
                </p>
              </div>

              <div className="lg:col-span-6 space-y-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8">
                <span className="text-xs font-mono uppercase tracking-wider text-[#10B981] block">
                  The Mayaa System Solution:
                </span>
                <p className="text-sm text-[#D1D5DB] font-light leading-relaxed">
                  {workflowChallenges[selectedWorkflowChallenge].solution}
                </p>
                <div className="pt-2 text-xs font-mono text-[#D97706]">
                  BENEFIT: {workflowChallenges[selectedWorkflowChallenge].benefit}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04. ENGINEERING ENGINE & DELIVERY MODEL (WHITE) */}
        <section className="w-full bg-white text-[#171717] py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] font-mono font-medium">
              Delivery Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#171717] tracking-tight leading-[1.08]">
              Senior engineering depth. <br />
              <span className="text-[#555555] italic">Belgian European execution.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light max-w-3xl leading-relaxed">
              We deliver for Belgian enterprises directly from our technology studio in India. We do not claim local physical offices in Brussels or Antwerp where we do not have them. Instead, we invest in principal-level engineering, full daily timezone overlap, and complete data sovereignty.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9] rounded-sm">
                <Clock className="w-5 h-5 text-[#D97706] mb-4" />
                <h3 className="text-sm font-medium text-[#171717] mb-2">CET / CEST Overlap</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Extensive daily working-hour alignment with Brussels and Antwerp for standups, architectural reviews, and milestone sign-offs.
                </p>
              </div>

              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9] rounded-sm">
                <Cpu className="w-5 h-5 text-[#D97706] mb-4" />
                <h3 className="text-sm font-medium text-[#171717] mb-2">Direct Senior Access</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Collaborate directly with senior system architects and software engineers. No junior account executives or layers of miscommunicated handoffs.
                </p>
              </div>

              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9] rounded-sm">
                <Lock className="w-5 h-5 text-[#D97706] mb-4" />
                <h3 className="text-sm font-medium text-[#171717] mb-2">Data Sovereignty</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  All systems deployed on client-owned cloud accounts (AWS Europe / Azure West Europe) with 100% intellectual property ownership and strict NDAs.
                </p>
              </div>

              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9] rounded-sm">
                <CreditCard className="w-5 h-5 text-[#D97706] mb-4" />
                <h3 className="text-sm font-medium text-[#171717] mb-2">EUR Milestone Billing</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Transparent milestone-governed contracts quoted and invoiced in Euros (EUR) with explicit acceptance gates and zero recurring per-user licensing taxes.
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
                Questions Belgian leaders ask.
              </h2>
              <p className="text-base text-[#9CA3AF] font-light">
                Straightforward facts regarding remote delivery, multilingual data models, data privacy, and commercial terms.
              </p>
            </div>

            <div className="space-y-4">
              {BELGIUM_FAQS.map((faq, idx) => (
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
              Belgium Consultation
            </div>

            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-[#171717] mb-6">
              Build what your business <br />
              <span className="font-normal italic text-[#555555]">needs next.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#555555] font-light max-w-xl mx-auto leading-relaxed">
              Tell us where your company is expanding, where operational coherence between departments is breaking down, or where your digital touchpoints need to improve. We start by understanding the business.
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
              Serving enterprises across Brussels, Antwerp, Ghent, Liège, Bruges, and throughout Belgium.
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
