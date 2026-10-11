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
  ChevronDown,
  Cpu,
  Database,
  Building2,
  CheckCircle2,
  Sliders,
  Clock,
  Compass,
  Boxes,
  Lock,
  Globe2,
  CreditCard,
  FileCheck2,
  Activity
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const GERMANY_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for German Mittelstand businesses from India without a local branch office?',
    answer:
      'We work directly with German Managing Directors (Geschäftsführer), technical heads, and operations leaders through scheduled Central European Time (CET/CEST) overlap, rigorous technical documentation, and clear asynchronous sprint reviews. We do not manufacture claims of German branch offices where we do not have them. By anchoring senior engineering in our India technology hub, we offer direct principal-to-engineer communication with exceptional precision and without inflated agency overhead.',
  },
  {
    question: 'How do you handle data protection, GDPR (DSGVO), and data sovereignty for German companies?',
    answer:
      'All bespoke business management systems and software architectures are deployed directly on client-owned infrastructure (such as AWS Europe/Frankfurt, Hetzner, dedicated European cloud environments, or on-premise servers). Mayaa does not retain, process, or monetize your company or customer records. Clients hold 100% intellectual property ownership of the codebase and total data sovereignty under binding non-disclosure agreements.',
  },
  {
    question: 'Can your systems integrate with existing German ERP tools, DATEV, or legacy engineering databases?',
    answer:
      'Yes. Rather than forcing you to abandon proven infrastructure, we build tailored API connectors and automated pipelines that interface with DATEV accounting exports, existing ERP databases, CAD/BIM registries, or proprietary SQL servers. This eliminates manual double-entry while preserving your established operational workflows.',
  },
  {
    question: 'How are commercial agreements and invoicing structured for German enterprises?',
    answer:
      'We quote and invoice directly in Euros (EUR) on transparent, milestone-governed contracts. Every phase, from process mapping and blueprinting to delivery and deployment, is tied to explicit acceptance criteria. Furthermore, our bespoke systems have zero perpetual per-user licensing fees, ensuring predictable capital allocation.',
  },
];

// Interactive Business Logic Branches for Section 07
const branchWorkflows = {
  manufacturing: [
    { step: '01', label: 'ANFRAGE (ENQUIRY)', detail: 'Technical specification intake, drawing uploads & RFQ verification' },
    { step: '02', label: 'KALKULATION (ESTIMATE)', detail: 'BOM cost analysis, production capacity & margin verification' },
    { step: '03', label: 'ANGEBOT (QUOTE)', detail: 'Commercial proposal generation with strict technical revision control' },
    { step: '04', label: 'AUFTRAG (ORDER)', detail: 'Automated order confirmation & customer account dispatch' },
    { step: '05', label: 'FERTIGUNG (PRODUCTION)', detail: 'Shop-floor routing, machine scheduling & material consumption logs' },
    { step: '06', label: 'LIEFERUNG (DISPATCH)', detail: 'QA protocol sign-off, shipping documentation & automated invoicing' },
    { step: '07', label: 'LEITUNG (MANAGEMENT)', detail: 'Real-time production pipeline, margin analysis & capacity visibility' },
  ],
  architecture: [
    { step: '01', label: 'ANFRAGE (ENQUIRY)', detail: 'Initial brief intake, zoning constraints & preliminary feasibility study' },
    { step: '02', label: 'HONORAR (PROPOSAL)', detail: 'HOAI work stage scoping (Phasen 1–9) & transparent fee calculation' },
    { step: '03', label: 'BEAUFTRAGUNG (MANDATE)', detail: 'Client contract execution & external specialist consultant registry' },
    { step: '04', label: 'ENTWURF (DESIGN)', detail: 'Drawing revision archives & municipal authority/building permit filings' },
    { step: '05', label: 'AUSFÜHRUNG (TENDER/SITE)', detail: 'Trade contractor tendering packages, site logbooks & progress verification' },
    { step: '06', label: 'ABNAHME (HANDOVER)', detail: 'Formal statutory handover, snagging registry & warranty documentation' },
    { step: '07', label: 'KANZLEI (PRACTICE)', detail: 'Resource forecasting, partner portfolio oversight & billable hour analytics' },
  ],
  construction: [
    { step: '01', label: 'AUSSCHREIBUNG (TENDER)', detail: 'Document ingestion, site parameter review & risk assessment' },
    { step: '02', label: 'KALKULATION (COSTING)', detail: 'Detailed BOQ breakdown & subcontractor procurement cycles' },
    { step: '03', label: 'VERTRAG (CONTRACT)', detail: 'VOB/B compliance alignment, milestone payment plan & site baselines' },
    { step: '04', label: 'BAUSTELLE (SITE EXECUTION)', detail: 'Daily digital site diaries, weather logs & trade material deliveries' },
    { step: '05', label: 'NACHWEISE (COMPLIANCE)', detail: 'Inspection reports, material test certificates & variation orders' },
    { step: '06', label: 'ÜBERGABE (COMPLETION)', detail: 'Formal statutory completion protocol & archived defect management' },
    { step: '07', label: 'GESCHÄFTSFÜHRUNG (OVERSIGHT)', detail: 'Executive cashflow visibility, project margins & active liability control' },
  ],
};

// 9 Focused German Industry Ecosystems
const germanyIndustries = [
  {
    id: 'maschinenbau',
    title: 'MASCHINENBAU & ENGINEERING',
    tagline: 'Spezialmaschinen · Automatisierung · R&D',
    desc: 'Make complex technical know-how and custom engineering capabilities easier to articulate, sell, and manage across global supply chains.',
  },
  {
    id: 'manufacturing',
    title: 'PRECISION MANUFACTURING',
    tagline: 'Präzisionsfertigung · Komponenten · Lohnfertigung',
    desc: 'Connect technical quotes, shop-floor production orders, material handovers, and customer histories into one disciplined operational workflow.',
  },
  {
    id: 'automotive',
    title: 'AUTOMOTIVE & MOBILITY SYSTEMS',
    tagline: 'Tier-Zulieferer · Prüflabore · E-Mobility',
    desc: 'Support demanding B2B supply-chain partnerships with transparent digital documentation, audit trails, and structured operational coordination.',
  },
  {
    id: 'construction',
    title: 'CONSTRUCTION & INFRASTRUCTURE',
    tagline: 'Generalunternehmer · Gewerbebau · Schlüsselfertig',
    desc: 'Bring complex project tenders, sub-trades, site diaries, material tracking, and executive cost accounting into a unified operational layer.',
  },
  {
    id: 'architecture',
    title: 'ARCHITECTURE & GENERAL PLANNING',
    tagline: 'Architekturbüros · HOAI-Phasen · Großprojekte',
    desc: 'Reflect the true architectural caliber of your portfolio while bringing practice administration, fee calculation, and site milestones into structured order.',
  },
  {
    id: 'technical-b2b',
    title: 'TECHNICAL B2B & SPECIALIST TRADE',
    tagline: 'Technischer Großhandel · Spezialausrüster',
    desc: 'Connect technical inquiries, complex customer accounts, project-based delivery, and leadership metrics without messy software sprawl.',
  },
  {
    id: 'logistics',
    title: 'LOGISTICS & SUPPLY CHAIN',
    tagline: 'Speziallogistik · Flottensteuerung · Lagerhaltung',
    desc: 'Keep freight tenders, multi-modal carrier coordination, and client communication dependable across distributed European hubs.',
  },
  {
    id: 'professional-services',
    title: 'PROFESSIONAL & TECHNICAL ADVISORY',
    tagline: 'Wirtschaftsprüfung · Ingenieurbüros · Consultancies',
    desc: 'Connect client mandates, delivery milestones, regulatory filings, and billable utilization without administrative friction.',
  },
  {
    id: 'family-owned',
    title: 'SPECIALISED MITTELSTAND ENTERPRISES',
    tagline: 'Mittelständische Betriebe · Generationsübergreifend',
    desc: 'Protect decades of proprietary know-how by transforming personal memory into resilient, dependable company systems built for the next generation.',
  },
];

export const GermanyMarketPage: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<'manufacturing' | 'architecture' | 'construction'>('manufacturing');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: GERMANY_FAQS.map((faq) => ({
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
    { name: 'Germany', urlPath: '/global-markets/germany' },
  ]);

  return (
    <>
      <SEO
        title="Brand, Digital Experiences & Business Systems for Germany | Mayaa Solutions"
        description="Built with precision. Run with clarity. Mayaa connects brand building, digital experiences and custom business management systems around how German Mittelstand and technical enterprises actually operate."
        keywords="business management systems Germany, custom business software Germany, custom CRM Germany, Mittelstand software, Mittelstand business systems, manufacturing business software Germany, engineering business software Germany, website design Germany, branding agency Germany, digital experience Germany, Mayaa Solutions Germany"
        canonicalUrl="https://mayaasolutions.in/global-markets/germany"
        schema={[breadcrumbSchema, faqSchema]}
      />

      <div className="bg-[#080B10] text-[#F3F4F6] min-h-screen selection:bg-white selection:text-black font-sans antialiased">

        {/* 01. HERO: THE BLUEPRINT OPENING */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 px-6 md:px-12 border-b border-white/[0.08] overflow-hidden">
          {/* Subtle architectural engineering background texture */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-luminosity">
            <img 
              src="/images/germany-commercial-hero.jpg" 
              alt="German Engineering, Precision Architecture & Modern Industrial Workspace" 
              className="w-full h-full object-cover object-center filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/70 to-[#080B10]/95" />
          </div>

          <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
            {/* Minimal Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#EAB308]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF] font-medium font-mono">
                Mayaa Solutions × Germany · Mittelstand & Industry
              </span>
            </motion.div>

            {/* Authoritative Engineering Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.08] mb-8"
            >
              Built with precision. <br className="hidden sm:inline" />
              <span className="font-normal italic text-white/95">Run with clarity.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              For German businesses where engineering expertise, quality standards, and reliability matter, Mayaa connects brand identity, digital experiences, and operational systems around the way your company actually works.
            </motion.p>

            {/* Focused Action CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 bg-white text-black font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#E5E7EB] transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="#business-assembly"
                className="w-full sm:w-auto px-9 py-4 border border-white/20 text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-white/[0.05] hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Examine the System</span>
                <ArrowDown className="w-3.5 h-3.5 text-white/60" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* 02. FULL-WIDTH VISUAL: A BUSINESS ASSEMBLY */}
        <section id="business-assembly" className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-3 font-mono font-bold">
                System Decomposition
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-[#171717] mb-4">
                The business already has the parts.
              </h2>
              <p className="text-base text-[#555555] font-light">
                The question is how well they work together.
              </p>
            </div>

            {/* Blueprint Grid of Connected Components */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-8 border border-[#E5E5E2] bg-[#FAFAF9] rounded-sm relative">
              {[
                { code: '01', title: 'KNOW-HOW', role: 'Proprietary Engineering Expertise' },
                { code: '02', title: 'CUSTOMERS', role: 'Commercial Inquiries & RFQs' },
                { code: '03', title: 'PRODUCTS', role: 'Technical Output & Specifications' },
                { code: '04', title: 'PEOPLE', role: 'Specialist Teams & Engineers' },
                { code: '05', title: 'PROJECTS', role: 'HOAI / Milestone Delivery' },
                { code: '06', title: 'PROCESSES', role: 'Operational Workflows' },
                { code: '07', title: 'DATA', role: 'Single Source of Truth' },
                { code: '08', title: 'DECISIONS', role: 'Executive Leadership Visibility' },
              ].map((comp, idx) => (
                <div key={idx} className="p-5 border border-[#E5E5E2] bg-white flex flex-col justify-between group hover:border-[#CCCCCC] transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-[#666666]">{comp.code}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CCCCCC] group-hover:bg-[#EAB308] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#171717] mb-1 tracking-wide">{comp.title}</h3>
                    <p className="text-[11px] text-[#555555] font-light">{comp.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-xs font-mono text-[#666666]">
              “When individual components are connected into one clear operational logic, complexity turns into capacity.”
            </div>
          </div>
        </section>

        {/* 03. THE MITTELSTAND ADVANTAGE: THE KNOW-HOW IS ALREADY THERE */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Institutional Strength
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              The know-how is already there.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-7 space-y-6 text-[#9CA3AF] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  Specialised German businesses spend decades building expertise that competitors cannot easily duplicate: proprietary methods, technical discipline, established customer trust, experienced colleagues, and deep product knowledge.
                </p>
                <p>
                  That know-how is your primary competitive advantage. But as the company expands, the systems surrounding that knowledge can quietly fragment across disparate spreadsheets, email inboxes, legacy tools, and personal memory.
                </p>
                <div className="p-6 border-l-2 border-white/40 bg-white/[0.02] text-white font-normal text-lg">
                  “The goal is not to replace what works. <br />
                  <span className="text-[#9CA3AF]">The goal is to make it easier to use, share, and manage.”</span>
                </div>
              </div>

              <div className="md:col-span-5 bg-white/[0.02] border border-white/10 p-8 rounded-sm space-y-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/80 font-mono mb-2">
                  Where Know-How Fragments:
                </div>
                <ul className="space-y-3 text-xs text-[#9CA3AF] font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-[#EAB308] font-mono">-</span>
                    <span>Costing formulas living inside one senior engineer's personal spreadsheet.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#EAB308] font-mono">-</span>
                    <span>Customer agreements and technical requirements buried across email threads.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#EAB308] font-mono">-</span>
                    <span>Project milestones and sub-trade statuses discussed verbally but unrecorded.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#EAB308] font-mono">-</span>
                    <span>Geschäftsführung needing manual summaries to verify project margins.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 04. BEFORE / AFTER WORKFLOW: WHEN KNOWLEDGE LIVES IN TOO MANY PLACES */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-bold">
              Operational Transformation
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-4">
              When knowledge lives in too many places.
            </h2>
            <p className="text-xl text-[#171717] font-light mb-16">
              Less searching. More knowing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* BEFORE */}
              <div className="p-8 border border-[#E5E5E2] bg-[#FAFAF9]">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#DC2626] mb-6 flex items-center justify-between font-bold">
                  <span>BEFORE · SCATTERED ARCHITECTURE</span>
                  <span>FRAGMENTED</span>
                </div>
                <div className="space-y-3 text-xs font-mono text-[#555555]">
                  <div className="p-3 border border-[#E5E5E2] bg-white flex justify-between">
                    <span>LEAD</span>
                    <span className="text-[#171717]">→ Email Inbox</span>
                  </div>
                  <div className="p-3 border border-[#E5E5E2] bg-white flex justify-between">
                    <span>CUSTOMER</span>
                    <span className="text-[#171717]">→ Local Spreadsheet</span>
                  </div>
                  <div className="p-3 border border-[#E5E5E2] bg-white flex justify-between">
                    <span>PROJECT</span>
                    <span className="text-[#171717]">→ Isolated Task Tool</span>
                  </div>
                  <div className="p-3 border border-[#E5E5E2] bg-white flex justify-between">
                    <span>TEAM</span>
                    <span className="text-[#171717]">→ Ad-hoc Chat Messages</span>
                  </div>
                  <div className="p-3 border border-[#E5E5E2] bg-white flex justify-between">
                    <span>REPORT</span>
                    <span className="text-[#171717]">→ Manually Compiled File</span>
                  </div>
                  <div className="p-3 border border-[#E5E5E2] bg-white flex justify-between">
                    <span>MANAGEMENT</span>
                    <span className="text-[#DC2626] font-bold">→ Ask Someone</span>
                  </div>
                </div>
              </div>

              {/* AFTER */}
              <div className="p-8 border border-[#CCCCCC] bg-[#FAFAF9]">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#16A34A] mb-6 flex items-center justify-between font-bold">
                  <span>AFTER · CONNECTED MAYAA SYSTEM</span>
                  <span>UNIFIED</span>
                </div>
                <div className="space-y-3 text-xs font-mono text-[#171717]">
                  <div className="p-3 border border-[#E5E5E2] bg-white flex justify-between items-center">
                    <span>LEAD</span>
                    <span className="text-[#16A34A] font-medium">↓ Centralized Qualified Intake</span>
                  </div>
                  <div className="p-3 border border-[#E5E5E2] bg-white flex justify-between items-center">
                    <span>SALES</span>
                    <span className="text-[#16A34A] font-medium">↓ Transparent Proposal & Scope</span>
                  </div>
                  <div className="p-3 border border-[#E5E5E2] bg-white flex justify-between items-center">
                    <span>CUSTOMER</span>
                    <span className="text-[#16A34A] font-medium">↓ Permanent Single Record</span>
                  </div>
                  <div className="p-3 border border-[#E5E5E2] bg-white flex justify-between items-center">
                    <span>PROJECT</span>
                    <span className="text-[#16A34A] font-medium">↓ Live Milestone & Task Registry</span>
                  </div>
                  <div className="p-3 border border-[#E5E5E2] bg-white flex justify-between items-center">
                    <span>TEAM</span>
                    <span className="text-[#16A34A] font-medium">↓ Explicit Ownership & Sign-offs</span>
                  </div>
                  <div className="p-3 border border-[#E5E5E2] bg-white flex justify-between items-center">
                    <span>MANAGEMENT</span>
                    <span className="text-[#16A34A] font-medium">✓ Real-Time Operational Clarity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05. BRAND SECTION: TECHNICAL EXCELLENCE DESERVES A CLEAR IDENTITY */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Market Stature
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              Technical excellence deserves <br />
              <span className="text-[#9CA3AF]">a clear identity.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6 text-[#9CA3AF] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  A precision manufacturer, an engineering consultancy, a high-specification construction firm, or a specialized B2B supplier may deliver world-class work.
                </p>
                <p>
                  Yet if the company's brand looks dated, fragmented, or generic, prospective clients and international procurement teams cannot immediately see the difference.
                </p>
                <div className="text-white font-medium text-lg pt-2">
                  “The brand should signal quality before the first meeting.”
                </div>
              </div>

              <div className="md:col-span-5 bg-white/[0.02] border border-white/10 p-8 rounded-sm space-y-3 text-xs font-mono text-white/90">
                <div className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] font-mono mb-4">
                  What Mayaa Delivers:
                </div>
                <div className="p-2.5 border border-white/[0.06] bg-white/[0.01]">• Brand Architecture & Visual Identity Systems</div>
                <div className="p-2.5 border border-white/[0.06] bg-white/[0.01]">• Pitch Decks & Technical Proposal Templates</div>
                <div className="p-2.5 border border-white/[0.06] bg-white/[0.01]">• Documentation, Typography & Style Guidelines</div>
                <div className="p-2.5 border border-white/[0.06] bg-white/[0.01]">• Digital Assets for International Tenders & Supply Chains</div>
              </div>
            </div>
          </div>
        </section>

        {/* 06. WEBSITE SECTION: BEFORE A CUSTOMER CALLS */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-bold">
              Digital Experience
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-8">
              Before a customer calls, <br />
              <span className="text-[#666666]">they have already formed an opinion.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#555555] font-light max-w-3xl leading-relaxed mb-12">
              For technical B2B, architecture, and manufacturing enterprises, your website must articulate exact capability, prove credibility, and establish trust with procurement teams and leadership.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center mb-12">
              {[
                { stage: 'SEARCH', desc: 'Discovery' },
                { stage: 'WEBSITE', desc: 'First Encounter' },
                { stage: 'UNDERSTANDING', desc: 'Capability Clarity' },
                { stage: 'TRUST', desc: 'Substance Verified' },
                { stage: 'ENQUIRY', desc: 'Direct Action' },
              ].map((flow, idx) => (
                <div key={idx} className="p-5 border border-[#E5E5E2] bg-[#FAFAF9]">
                  <div className="text-[10px] font-mono text-[#666666] mb-1">0{idx + 1}</div>
                  <div className="text-xs font-mono text-[#171717] mb-1 font-bold">{flow.stage}</div>
                  <div className="text-[11px] text-[#555555] font-light">{flow.desc}</div>
                </div>
              ))}
            </div>

            <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9] text-center max-w-2xl mx-auto">
              <p className="text-sm sm:text-base text-[#171717] font-light">
                “The website should explain the business with the same precision as the business itself.”
              </p>
            </div>
          </div>
        </section>

        {/* 07. PERSONALISED BUSINESS SYSTEM: SYSTEM ARCHITECTURE */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Bespoke System Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-4">
              Your business has its own logic. <br />
              <span className="text-[#9CA3AF]">Your software should respect it.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-12">
              Mayaa does not force every company into the same rigid workflow. We map your actual operational flow and build the system directly around it.
            </p>

            {/* Interactive Sector Workflow Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setSelectedBranch('manufacturing')}
                className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all ${
                  selectedBranch === 'manufacturing' 
                    ? 'bg-white text-black font-medium shadow-sm' 
                    : 'border border-white/10 text-[#9CA3AF] hover:text-white hover:border-white/30'
                }`}
              >
                01 · Manufacturing Logic
              </button>
              <button
                onClick={() => setSelectedBranch('architecture')}
                className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all ${
                  selectedBranch === 'architecture' 
                    ? 'bg-white text-black font-medium shadow-sm' 
                    : 'border border-white/10 text-[#9CA3AF] hover:text-white hover:border-white/30'
                }`}
              >
                02 · Architecture Practice (HOAI)
              </button>
              <button
                onClick={() => setSelectedBranch('construction')}
                className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all ${
                  selectedBranch === 'construction' 
                    ? 'bg-white text-black font-medium shadow-sm' 
                    : 'border border-white/10 text-[#9CA3AF] hover:text-white hover:border-white/30'
                }`}
              >
                03 · Construction Execution
              </button>
            </div>

            {/* Workflow Pipeline Display */}
            <div className="p-8 border border-white/10 bg-white/[0.02] rounded-sm space-y-4">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#9CA3AF] mb-4">
                Active Architecture: {selectedBranch.toUpperCase()} WORKFLOW
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {branchWorkflows[selectedBranch].map((node) => (
                  <div key={node.step} className="p-4 border border-white/[0.08] bg-white/[0.01]">
                    <div className="text-[10px] font-mono text-[#EAB308] mb-1">{node.step}</div>
                    <div className="text-xs font-mono text-white mb-2">{node.label}</div>
                    <div className="text-xs text-[#9CA3AF] font-light leading-relaxed">{node.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 08. NOT ANOTHER SOFTWARE SUBSCRIPTION */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-bold">
              Pragmatic Integration
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-6">
              You may not need another tool. <br />
              <span className="text-[#666666]">You may need your tools to work better together.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light max-w-3xl leading-relaxed mb-16">
              German enterprises already have established software. We do not arrive with a mandate to replace everything. We audit the friction and determine what genuinely makes business sense.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { action: 'CONNECT', desc: 'Bridge gaps between existing platforms' },
                { action: 'AUTOMATE', desc: 'Remove repetitive manual data re-entry' },
                { action: 'REBUILD', desc: 'Replace fragile spreadsheets where necessary' },
                { action: 'LEAVE ALONE', desc: 'Keep proven tools that already work well' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 border border-[#E5E5E2] bg-[#FAFAF9]">
                  <div className="text-xs font-mono text-[#171717] font-bold mb-2">{item.action}</div>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-xs font-mono text-[#666666]">
              “Sometimes the correct answer is not to build anything new, but to connect what is already working.”
            </div>
          </div>
        </section>

        {/* 09. THE SINGLE SOURCE OF TRUTH: MANAGEMENT VISIBILITY */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Executive Transparency
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              Stop asking where <br />
              <span className="text-[#9CA3AF]">the information is.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-12">
              When vital information is organized into one structured operational view, leadership doesn't need to chase status updates across inboxes and spreadsheets.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
              {[
                'OFFENE ANFRAGEN (OPEN LEADS)',
                'AKTIVE PROJEKTE (ACTIVE WORK)',
                'WIEDERVORLAGEN (FOLLOW-UPS)',
                'TEAM-AUFGABEN (DEPARTMENT TASKS)',
                'KUNDENSTATUS (ACCOUNT HEALTH)',
                'FREIGABEN (PENDING DECISIONS)'
              ].map((label, idx) => (
                <div key={idx} className="p-4 border border-white/10 bg-white/[0.02] text-center">
                  <span className="text-[11px] font-mono text-white/90">{label}</span>
                </div>
              ))}
            </div>

            <div className="text-center text-sm text-white/90 font-light">
              “When information is clear, decisions get faster.”
            </div>
          </div>
        </section>

        {/* 10. INDUSTRY ECOSYSTEMS */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-bold">
              Branchen & Ökosysteme
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-6">
              Built for complex <br />
              <span className="text-[#666666]">German business sectors.</span>
            </h2>
            <p className="text-[#555555] text-base sm:text-lg font-light max-w-2xl leading-relaxed mb-16">
              Tailored across Germany's core industrial, engineering, and corporate ecosystems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {germanyIndustries.map((ind) => (
                <div key={ind.id} className="p-6 border border-[#E5E5E2] bg-[#FAFAF9] flex flex-col justify-between hover:border-[#CCCCCC] transition-colors">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#666666] mb-2 font-bold">
                      {ind.tagline}
                    </div>
                    <h3 className="text-base font-medium text-[#171717] mb-3">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-[#555555] font-light leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#E5E5E2]">
                    <Link to="/contact" className="text-xs text-[#171717] hover:text-black font-medium flex items-center gap-1 group">
                      <span>Discuss Requirements</span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. ENGINEERING ENGINE & DELIVERY MODEL */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Delivery Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-6">
              Senior engineering depth. <br />
              <span className="text-[#9CA3AF]">German operational discipline.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-16">
              We deliver for German enterprises directly from our technology studio in India. We do not pretend to maintain costly local German agency offices. Instead, we invest in senior engineering capability, transparent communication, and complete infrastructure sovereignty.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <Clock className="w-5 h-5 text-[#EAB308] mb-4" />
                <h3 className="text-sm font-medium text-white mb-2">CET / CEST Overlap</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Scheduled daily hours aligned with Berlin and Frankfurt for live standups, technical clarification, and milestone reviews.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <Cpu className="w-5 h-5 text-[#EAB308] mb-4" />
                <h3 className="text-sm font-medium text-white mb-2">Direct Senior Access</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Work directly with software architects and system designers. No non-technical account managers or miscommunicated handoffs.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <Lock className="w-5 h-5 text-[#EAB308] mb-4" />
                <h3 className="text-sm font-medium text-white mb-2">Data Sovereignty</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Deployment onto client-owned European cloud accounts (Frankfurt data centers) with 100% intellectual property ownership and strict NDAs.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <CreditCard className="w-5 h-5 text-[#EAB308] mb-4" />
                <h3 className="text-sm font-medium text-white mb-2">EUR Milestone Billing</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Clear, fixed-scope proposals quoted and invoiced in Euros (EUR) tied to verified deliverable milestones with zero recurring license fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12. FREQUENTLY ASKED QUESTIONS */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-bold">
              Clarity & Due Diligence
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-4">
              Questions German executives ask.
            </h2>
            <p className="text-base text-[#555555] font-light mb-12">
              Straightforward answers regarding delivery, security, integration, and commercial structure.
            </p>

            <div className="space-y-4">
              {GERMANY_FAQS.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="border border-[#E5E5E2] bg-[#FAFAF9] rounded-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F0F0EE] transition-colors"
                  >
                    <span className="text-base sm:text-lg font-normal text-[#171717]">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-[#666666] transition-transform duration-300 shrink-0 ${
                        openFaq === idx ? 'rotate-180 text-[#171717]' : ''
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
                        <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#555555] font-light leading-relaxed border-t border-[#E5E5E2]">
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

        {/* 13. FINAL CTA: WHAT IF THE BUSINESS WORKED AS WELL AS THE PEOPLE INSIDE IT? */}
        <section className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden bg-[#080B10]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-[#EAB308] mb-4 font-mono">
              Initiate Consultation
            </div>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
              What if the business worked <br />
              <span className="font-normal italic">as well as the people inside it?</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-xl mx-auto mb-10 leading-relaxed">
              If your enterprise has outgrown the way it presents itself, manages engineering workflows, or coordinates multi-department handoffs, let's look at the process before deciding what to build.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 bg-white text-black font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#E5E7EB] transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/global-markets"
                className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-white/[0.05] hover:border-white/40 transition-all duration-300"
              >
                Explore Global Markets
              </Link>
            </div>

            <div className="mt-16 text-center text-xs text-white/40 font-mono tracking-wider">
              Delivering for enterprises across Berlin, Munich, Stuttgart, Frankfurt, Hamburg, Düsseldorf, Cologne, Nuremberg, and throughout Germany.
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
