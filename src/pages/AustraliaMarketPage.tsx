import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown,
  Building2, 
  Layers, 
  MessageSquare,
  Sparkles,
  Users,
  Briefcase,
  ShieldCheck,
  Smartphone,
  FileText,
  Clock,
  Compass,
  CheckCircle2,
  Lock,
  ChevronRight,
  BarChart3,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const AUSTRALIA_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for Australian businesses from Bangalore without an on-the-ground office in Sydney or Melbourne?',
    answer:
      'We work directly with Australian company directors, estimators, and operations heads across structured morning collaboration windows (AEST/AEDT is 4.5 to 5.5 hours ahead of Bangalore). Live standups, sprint reviews, and demos occur during Australian afternoons and business hours, supported by direct Slack/Teams workspaces and shared Figma canvases in fluent English. We do not manufacture claims of physical offices on Martin Place or Collins Street where we do not have them. By anchoring senior engineering at our Bangalore headquarters, we provide direct principal-to-engineer communication with exceptional velocity, rigor, and without Australian agency fee inflation.',
  },
  {
    question: 'How do you handle Australian data privacy and cloud sovereignty?',
    answer:
      'All bespoke systems, automated workflows, and database layers are deployed directly onto client-owned cloud tenancies in Australian regions, such as AWS ap-southeast-2 (Sydney/Melbourne) or Microsoft Azure Australia East. Mayaa never stores, sells, or monetizes client customer data. Systems feature strict role-based access control (RBAC), multi-factor authentication, and audit logs compliant with the Australian Privacy Principles (APPs) and Privacy Act 1988.',
  },
  {
    question: 'Can your business systems integrate with Australian tools like Xero, MYOB, simPRO, or ServiceM8?',
    answer:
      'Yes. Our philosophy is "Bridge, do not bloat." We build secure REST API connectors and webhook listeners that tie your custom lead queue and job workflows directly into Xero, MYOB, simPRO, or HubSpot, eliminating manual double-entry between site quotes and accounting.',
  },
  {
    question: 'How are commercial agreements and invoicing structured for Australian enterprises?',
    answer:
      'Contracts are fixed-scope, milestone-governed, and invoiced transparently in Australian Dollars (AUD). Every phase has clear acceptance criteria. You retain 100% intellectual property ownership of the codebase and assets upon sign-off, with zero perpetual per-user software licensing fees.',
  },
];

export const AustraliaMarketPage: React.FC = () => {
  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: AUSTRALIA_FAQS.map((faq) => ({
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
    { name: 'Australia', urlPath: '/global-markets/australia' },
  ]);
  // Australian Industry Use Cases
  const industryUseCases = [
    {
      id: 'builders-construction',
      title: 'BUILDERS & CONSTRUCTION',
      tagline: 'Residential Builders · Commercial Fit-Outs · General Contractors',
      image: '/images/industries/construction.jpg',
      quote: 'Keep enquiries, estimates, client communication, projects, site activity and follow-ups organised as your workload grows.',
      workflows: [
        'Quote requests & tender tracking from discovery to sign-off',
        'Site supervisors, trade contractor & supplier allocation',
        'Site progress logs, milestone sign-offs & variations',
        'Practical completion handover & defect coordination',
      ],
    },
    {
      id: 'architecture-interiors',
      title: 'ARCHITECTURE & INTERIORS',
      tagline: 'Architectural Practices · Interior Studios · Turnkey Designers',
      image: '/images/industries/architecture.webp',
      quote: 'Connect enquiries, consultations, proposals, approvals, projects and client communication in one structured workflow.',
      workflows: [
        'Initial consultation intake & project brief capture',
        'Fee proposals, scope definitions & council approval tracking',
        'Material schedules, sample sign-offs & design revisions',
        'Client variations & milestone-based invoicing schedules',
      ],
    },
    {
      id: 'trades-contractors',
      title: 'TRADES & SPECIALIST CONTRACTORS',
      tagline: 'Electrical · Plumbing · HVAC · Joinery · Specialist Trades',
      image: '/images/australia-commercial-hero.jpg',
      quote: 'Spend less time chasing information and more time delivering the work. Organise enquiries, quotes, jobs, schedules and customer follow-ups.',
      workflows: [
        'Rapid job logging & quote generation for residential & commercial clients',
        'Job scheduling, crew dispatch & work order updates',
        'Supplier procurement notes & variation approvals',
        'Customer completion sign-offs & invoicing follow-ups',
      ],
    },
    {
      id: 'b2b-industrial',
      title: 'B2B & INDUSTRIAL',
      tagline: 'Building Material Suppliers · Equipment Distributors · Manufacturers',
      image: '/images/industries/manufacturing.jpg',
      quote: 'Manage enquiries, sales pipelines, quotations, customer records and follow-ups without relying on scattered spreadsheets and inboxes.',
      workflows: [
        'Specification enquiries from trade clients & developers',
        'Sales rep pipeline assignment & proactive follow-up cadences',
        'Custom quotation builder with margin & discount governance',
        'Trade accounts, repeat ordering & dispatch notifications',
      ],
    },
    {
      id: 'property-real-estate',
      title: 'PROPERTY & REAL ESTATE',
      tagline: 'Developers · Advisory Groups · Commercial Agencies',
      image: '/images/industries/real-estate.webp',
      quote: 'Keep leads, client conversations, follow-ups, property information and sales activity organised across your team.',
      workflows: [
        'Multi-channel buyer & tenant enquiry consolidation',
        'Agent portfolio assignment & conversation history tracking',
        'Off-plan & commercial listing inventory availability',
        'Inspection scheduling, offers & contract progression',
      ],
    },
    {
      id: 'professional-services',
      title: 'PROFESSIONAL SERVICES & CLINICS',
      tagline: 'Engineering Consultants · Advisory Practices · Specialist Clinics',
      image: '/images/industries/clinic.jpg',
      quote: 'Create a clearer client journey while giving your team a better way to manage enquiries, tasks, documents and ongoing work.',
      workflows: [
        'Professional digital presence that establishes immediate authority',
        'Client intake, scope qualification & onboarding checklists',
        'Project milestones, consultant deliverables & review cycles',
        'Clear documentation pathways & recurring engagement reviews',
      ],
    },
  ];

  // Personalised System Stages
  const systemStages = [
    {
      step: '01',
      stage: 'LEADS',
      flow: 'Website → Forms → Calls → Enquiries',
      description: 'Capture interest across web enquiries, phone calls, referral introductions, and project portals into one clean, structured intake queue. No missing contact details or unread emails.',
    },
    {
      step: '02',
      stage: 'SALES',
      flow: 'Assignment → Follow-up → Quotation → Conversion',
      description: 'Assign leads immediately to team members. Maintain structured follow-up cadences, track quote revisions, and maintain visibility over deal statuses without asking around.',
    },
    {
      step: '03',
      stage: 'CLIENTS',
      flow: 'Contacts → Requirements → Communication → History',
      description: 'A single, permanent record of every client proposal, specification, meeting note, site condition, and agreed deliverable accessible by anyone who needs it.',
    },
    {
      step: '04',
      stage: 'PROJECTS',
      flow: 'Planning → Tasks → Deadlines → Progress',
      description: 'Plan deliverables, milestones, site schedules, and supplier handoffs in one clear visual timeline. Know what is underway, what is approved, and what is due next.',
    },
    {
      step: '05',
      stage: 'TEAM',
      flow: 'Responsibilities → Tasks → Accountability',
      description: 'Clear ownership across estimators, project managers, site supervisors, and administrators. Everyone knows their priorities without endless daily catch-up meetings.',
    },
    {
      step: '06',
      stage: 'MANAGEMENT',
      flow: 'Reports → Performance → Visibility → Decisions',
      description: 'Real-time operational reporting for business owners. Monitor pipeline volume, project timelines, team capacity, and revenue visibility without piecing together spreadsheets.',
    },
  ];

  // Practical ROI Improvements
  const practicalOutcomes = [
    { title: 'Less Manual Administration', desc: 'Reduce the hours spent re-typing information from emails into spreadsheets and job sheets.' },
    { title: 'Fewer Missed Follow-ups', desc: 'Ensure every high-value enquiry and submitted quote receives a timely, professional follow-up.' },
    { title: 'Better Operational Visibility', desc: 'Know the exact status of any client, project, or site milestone in seconds from any device.' },
    { title: 'Faster Response Times', desc: 'Deliver estimates and proposals while client intent is highest, setting your business apart.' },
    { title: 'Clearer Team Accountability', desc: 'Eliminate confusion over who owns a client task, site update, or supplier verification.' },
    { title: 'Less Duplicated Information', desc: 'Maintain one single source of truth across sales, estimating, delivery, and invoicing.' },
    { title: 'Better Customer Experience', desc: 'Clients receive organized updates, transparent timelines, and professional documentation throughout.' },
    { title: 'Better Management Decisions', desc: 'Make hiring, capacity, and commercial decisions based on real workflow data, not guesswork.' },
  ];

  return (
    <>
      <SEO
        title="Brand, Digital Experiences & Business Systems for Australia | Mayaa Solutions"
        description="Built around how Australian businesses actually operate. Strategic brand design, high-clarity websites, and personalised business management systems for growing construction, trade, architecture, property, and professional service companies."
        keywords="Australia business management systems, custom business software Australia, business management software Australia, custom CRM Australia, website design Australia, business systems Australia, digital experience Australia, construction business systems Australia, Mayaa Solutions Australia"
        ogImage="/images/australia-commercial-hero.jpg"
        canonicalUrl="https://mayaasolutions.in/global-markets/australia"
        schema={[breadcrumbSchema, faqSchema]}
      />

      <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden pt-24 sm:pt-28 md:pt-32">

        {/* ==================================================
            01. HERO SECTION
        ================================================== */}
        <section className="px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto pb-16 sm:pb-24 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              <div className="flex items-center gap-3">
                <Link
                  to="/global-markets"
                  className="text-xs font-mono font-bold text-[#8E8E8A] hover:text-white uppercase tracking-widest transition-colors"
                >
                  Global Markets
                </Link>
                <span className="text-[#444444]">/</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950 text-xs font-mono font-bold text-white uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Australia
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[0.98]"
              >
                BUILT AROUND HOW <br />
                <span className="text-white">AUSTRALIAN BUSINESSES</span> <br />
                <span className="text-[#8E8E8A]">ACTUALLY WORK.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl"
              >
                From your first enquiry to the final delivery, we build the brand, digital experience and business systems that help growing Australian businesses work with more clarity.
              </motion.p>

              {/* Core Offerings Pill Tags */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-2 pt-1"
              >
                {['Brand Design', 'Website & Digital Experience', 'Personalised Business Management Systems'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-mono font-medium text-neutral-300"
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
                  to="/contact?market=australia"
                  className="min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-neutral-200 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md group"
                >
                  <span>START A BUSINESS CONVERSATION</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="#systems"
                  className="min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white border border-neutral-700 hover:border-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
                >
                  <span>SEE WHAT WE BUILD</span>
                </a>
              </motion.div>
            </div>

            {/* Right Editorial Australian Commercial Visual */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl"
              >
                <img
                  src="/images/australia-commercial-hero.jpg"
                  alt="Australian commercial project development site with project managers on site"
                  className="w-full h-auto aspect-[4/3] object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono text-neutral-300">
                  <span className="uppercase tracking-wider">PROJECT-DRIVEN OPERATIONS</span>
                  <span className="text-[#8E8E8A]">AUSTRALIA</span>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ==================================================
            02. AUSTRALIAN BUSINESS PROBLEM
        ================================================== */}
        <section className="bg-white text-[#171717] border-y border-[#E5E5E2] py-20 sm:py-28 lg:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-14 sm:space-y-16">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#666666] uppercase tracking-widest block">
                THE OPERATIONAL REALITY
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#171717] tracking-tight uppercase leading-[1.02]">
                YOUR BUSINESS SHOULDN'T RUN ON <br />
                <span className="text-[#666666]">SCATTERED INFORMATION.</span>
              </h2>
            </div>

            {/* Realistic Australian Business Workflow */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left: The Workflow Chain */}
              <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-6 shadow-sm">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#666666] block">
                  A typical week in a growing Australian business:
                </span>

                <div className="space-y-4">
                  {[
                    'A customer finds you through Google or a local recommendation.',
                    'They call your office or phone number.',
                    'Another enquiry arrives through the website enquiry form.',
                    'Someone follows up by email from their personal inbox.',
                    'A salesperson has notes saved in their own notebook or drafts.',
                    'A project manager has the latest update on-site or in WhatsApp.',
                    'A staff member has the master spreadsheet saved locally.',
                  ].map((line, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <span className="w-5 h-5 rounded-full bg-white border border-[#E5E5E2] text-[10px] font-mono font-bold text-[#171717] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        {idx + 1}
                      </span>
                      <p className="text-sm sm:text-base text-[#333333] font-normal leading-relaxed">
                        {line}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-[#E5E5E2] space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717] block">
                    And then the business owner asks:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#555555] italic">
                    <p>“What happened with that enquiry?”</p>
                    <p>“Has the quote gone out yet?”</p>
                    <p>“Did the client approve the variation?”</p>
                    <p>“What's the real status of that project?”</p>
                  </div>
                </div>
              </div>

              {/* Right: The Diagnosis */}
              <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-6 shadow-sm">
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#171717] block">
                      THE DIAGNOSIS
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#171717] leading-snug">
                      THE BUSINESS ISN'T THE PROBLEM. <br />
                      <span className="text-[#666666]">THE GAPS BETWEEN YOUR TOOLS ARE.</span>
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#444444] leading-relaxed font-normal">
                    Your team is working hard. Your clients value your service. But as your business grew, you accumulated separate tools for email, accounting, files, and messaging.
                  </p>
                  <p className="text-sm sm:text-base text-[#444444] leading-relaxed font-normal">
                    Your inbox is not a CRM. Your spreadsheet is not a project management system. Your team shouldn't need three systems and five conversations to find one client update.
                  </p>

                  <div className="pt-4 border-t border-[#E5E5E2]">
                    <p className="text-xs font-mono text-[#666666] leading-relaxed">
                      Good systems make good businesses easier to run. That is why we build personalised business management systems configured around how you actually deliver work.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#171717] text-white flex items-center justify-between gap-4 shadow-sm">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                      PRACTICAL CONSULTATION
                    </span>
                    <span className="text-sm font-black uppercase tracking-tight text-white block">
                      Map where your workflow is losing time
                    </span>
                  </div>
                  <Link
                    to="/contact?market=australia"
                    className="p-3 bg-white text-black rounded-xl hover:bg-neutral-200 transition-colors shrink-0"
                    aria-label="Start consultation"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            03. PERSONALISED BUSINESS MANAGEMENT SYSTEM
        ================================================== */}
        <section id="systems" className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="space-y-6 max-w-4xl mb-14 sm:mb-20">
            <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
              CORE OPERATIONAL FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
              PERSONALISED BUSINESS <br />
              <span className="text-[#8E8E8A]">MANAGEMENT SYSTEM.</span>
            </h2>
            <div className="space-y-3 text-base sm:text-xl text-neutral-300 font-normal leading-relaxed pt-2">
              <p>We don't force your business into a standard software package.</p>
              <p>We first understand how you receive enquiries, sell, deliver work, manage people and communicate with clients.</p>
              <p className="text-white font-medium">Then we build the system around that workflow.</p>
            </div>
          </div>

          {/* 6 Stage Workflow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {systemStages.map((item) => (
              <div
                key={item.step}
                className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-neutral-600 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#8E8E8A]">STAGE {item.step}</span>
                    <span className="w-2 h-2 rounded-full bg-white opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-neutral-200 transition-colors">
                    {item.stage}
                  </h3>

                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-mono font-bold text-neutral-300">
                    {item.flow}
                  </div>

                  <p className="text-sm text-neutral-300 font-normal leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-xs font-mono text-[#8E8E8A]">
                  <span>Connected Workflow</span>
                  <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Connected Philosophy Callout */}
          <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-widest block">
                PRACTICAL ARCHITECTURE
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                MORE SOFTWARE ISN'T ALWAYS THE ANSWER. BETTER-CONNECTED SOFTWARE IS.
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Technology should remove work, not create more of it. We design software that adapts to your business rules, staff responsibilities and client expectations, rather than forcing you to change how you work.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                to="/business-systems"
                className="min-h-[50px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-colors"
              >
                <span>EXPLORE BUSINESS SYSTEMS</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================================
            04. AUSTRALIAN INDUSTRY USE CASES
        ================================================== */}
        <section className="bg-white text-[#171717] border-y border-[#E5E5E2] py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-14 sm:space-y-16">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#666666] uppercase tracking-widest block">
                INDUSTRY SPECIFICITY
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#171717] tracking-tight uppercase leading-[1.02]">
                BUILT AROUND THE WORK <br />
                <span className="text-[#666666]">YOU ACTUALLY DO.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed pt-2">
                Different businesses have fundamentally different operating cycles. We tailor our systems and digital touchpoints around the day-to-day requirements of your sector.
              </p>
            </div>

            {/* 6 Industry Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {industryUseCases.map((useCase) => (
                <div
                  key={useCase.id}
                  className="rounded-3xl bg-[#FAFAF9] border border-[#E5E5E2] overflow-hidden flex flex-col justify-between hover:border-[#171717] transition-all group shadow-sm"
                >
                  <div>
                    {/* Visual Asset Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 border-b border-[#E5E5E2]">
                      <img
                        src={useCase.image}
                        alt={useCase.title}
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest bg-black/70 px-2.5 py-1 rounded">
                          {useCase.tagline}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-7 sm:p-8 space-y-4">
                      <h3 className="text-xl font-black text-[#171717] uppercase tracking-tight">
                        {useCase.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#444444] font-medium leading-relaxed italic border-l-2 border-[#171717] pl-3">
                        “{useCase.quote}”
                      </p>

                      <div className="space-y-2 pt-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#666666] block">
                          Core Operating Modules
                        </span>
                        <ul className="space-y-1.5">
                          {useCase.workflows.map((flow, fIdx) => (
                            <li key={fIdx} className="text-xs text-[#555555] flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-[#171717] mt-1.5 shrink-0" />
                              <span>{flow}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 pt-0">
                    <Link
                      to="/contact?market=australia"
                      className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#111111] text-[#171717] hover:text-white border border-[#E5E5E2] hover:border-[#111111] text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between transition-colors shadow-xs"
                    >
                      <span>Discuss Your Workflow</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================================================
            05. WEBSITE & DIGITAL EXPERIENCE
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                DIGITAL EXPERIENCE
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
                YOUR WEBSITE SHOULD WORK <br />
                <span className="text-[#8E8E8A]">AS HARD AS YOUR TEAM.</span>
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                <p>
                  Your website is not just your online brochure. It is part of your sales and customer experience.
                </p>
                <p className="text-sm sm:text-base text-neutral-400">
                  For Australian businesses, clients and commercial buyers value clarity over flashy animation. They want to know what you do, see proof of your past projects, understand your capabilities, and be able to contact you without friction.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/websites"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-neutral-400 uppercase tracking-widest transition-colors"
                >
                  <span>Explore Selected Website Works</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Principles Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'CLEAR VALUE PROPOSITION',
                  desc: 'Explains exactly what your business does within the first five seconds of landing.',
                },
                {
                  title: 'BUILDS COMMERCIAL TRUST',
                  desc: 'Displays verified project outcomes, licenses, capabilities, and team credibility clearly.',
                },
                {
                  title: 'EFFORTLESS CONTACT JOURNEY',
                  desc: 'Enables quick phone calls, structured enquiries, and direct project scoping without friction.',
                },
                {
                  title: 'EXCEPTIONAL MOBILE EXPERIENCE',
                  desc: 'Fast, responsive and easy to navigate for clients browsing on phones and job sites.',
                },
                {
                  title: 'CONNECTS TO YOUR WORKFLOW',
                  desc: 'Website enquiries flow directly into your enquiry pipeline instead of disappearing into an inbox.',
                },
                {
                  title: 'REDUCES BACK-AND-FORTH',
                  desc: 'Gives prospective clients the initial answers they need before they pick up the phone.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2"
                >
                  <h4 className="text-sm font-black text-white uppercase tracking-wider">{item.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================================================
            06. BRANDING: CREDIBILITY & CONSISTENCY
        ================================================== */}
        <section className="bg-white text-[#171717] border-y border-[#E5E5E2] py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono font-bold text-[#666666] uppercase tracking-widest block">
                  BRAND DESIGN
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#171717] tracking-tight uppercase leading-[1.02]">
                  LOOK AS PROFESSIONAL AS <br />
                  <span className="text-[#666666]">THE BUSINESS YOU HAVE BUILT.</span>
                </h2>
                <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
                  Branding is not simply about designing a logo. It is about creating the trust, clarity and visual consistency that allows your business to command respect when bidding on high-value contracts.
                </p>
                <div className="p-6 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-2 shadow-sm">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717] block">
                    THE OBJECTIVE
                  </span>
                  <p className="text-sm text-[#333333] font-medium leading-relaxed">
                    “Make your website, proposals, presentations, tender documents and customer touchpoints feel like the same confident, established business.”
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                {[
                  {
                    title: 'VISUAL IDENTITY & TYPOGRAPHY',
                    desc: 'A distinct, clean visual system that communicates reliability and modern professionalism across digital and print.',
                  },
                  {
                    title: 'PROPOSAL & TENDER TEMPLATES',
                    desc: 'Professionally styled presentation decks and quote templates that look cohesive when presenting to corporate or private clients.',
                  },
                  {
                    title: 'DIGITAL TOUCHPOINTS',
                    desc: 'Consistent styling across social channels, email signatures, project portals, and digital communication.',
                  },
                  {
                    title: 'SALES & MARKETING COLLATERAL',
                    desc: 'Brochures, capability statements, project lookbooks, and site signage designed with purpose and restraint.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex items-start justify-between gap-4 shadow-sm"
                  >
                    <div className="space-y-1">
                      <h4 className="text-sm font-black text-[#171717] uppercase tracking-wider">{item.title}</h4>
                      <p className="text-xs text-[#555555] leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="text-xs font-mono text-[#666666] font-bold shrink-0">0{idx + 1}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            07. AUSTRALIAN DIGITAL MATURITY SECTION
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="p-8 sm:p-14 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                DIGITAL MATURITY OBSERVATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.05]">
                HAVING DIGITAL TOOLS ISN'T THE SAME AS <br />
                <span className="text-[#8E8E8A]">HAVING A DIGITAL SYSTEM.</span>
              </h2>
              <div className="space-y-3 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed pt-2">
                <p>
                  Most established Australian businesses already use modern technology: cloud accounting software, project management applications, digital file storage, and team communication channels.
                </p>
                <p className="text-white font-medium">
                  The challenge isn't a lack of tools. The challenge is the friction between them.
                </p>
                <p className="text-neutral-400 text-sm sm:text-base">
                  When enquiries live in one place, job notes in another, customer history in a spreadsheet, and invoices in accounting software, staff spend hours manually reconciling information. We help you make the business around those tools work seamlessly together.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-900">
              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">TOOL ACCUMULATION</span>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Growing companies adopt apps as problems arise, eventually creating disconnected data silos.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">HUMAN BRIDGES</span>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Staff are forced to spend valuable time copying data between systems and chasing updates.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">THE CONNECTED SYSTEM</span>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  A unified business management foundation brings visibility, order, and time back to your team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            08. PRACTICALITY & ROI SECTION
        ================================================== */}
        <section className="bg-white text-[#171717] border-y border-[#E5E5E2] py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-14 sm:space-y-16">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#666666] uppercase tracking-widest block">
                BUSINESS IMPACT
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#171717] tracking-tight uppercase leading-[1.02]">
                TECHNOLOGY SHOULD <br />
                <span className="text-[#666666]">EARN ITS PLACE.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed pt-2">
                We avoid exaggerated claims and artificial buzzwords. A well-designed business management system delivers measurable, day-to-day operational value:
              </p>
            </div>

            {/* 8 Practical Outcomes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {practicalOutcomes.map((item, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between space-y-4 shadow-sm"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-[#666666] uppercase tracking-wider block">
                      OUTCOME 0{idx + 1}
                    </span>
                    <h4 className="text-base font-black text-[#171717] uppercase tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-5 h-0.5 bg-[#171717]" />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================================================
            09. DATA RESPONSIBILITY & SECURITY
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="max-w-4xl space-y-8">
            <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
              DATA SECURITY & INTEGRITY
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
              HANDLING BUSINESS & CUSTOMER <br />
              <span className="text-[#8E8E8A]">INFORMATION RESPONSIBLY.</span>
            </h2>

            <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed">
              We understand that internal business systems hold critical operational records, financial quotations, client documents, and sensitive customer information.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-3">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  ROLE-BASED PERMISSIONS
                </span>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Strict access control so staff members only see the information required for their specific role, keeping financial figures and sensitive client records protected.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-3">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  SECURE AUTHENTICATION & ENCRYPTION
                </span>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Modern security standards, encrypted data in transit and at rest, and secure login mechanisms to safeguard your proprietary company data.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-3">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  AUDIT TRAILS & ACTIVITY LOGS
                </span>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Complete tracking of milestone approvals, quotation edits, and customer status changes for complete transparency across your organisation.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-3">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  DATA OWNERSHIP
                </span>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Your business retains 100% ownership of your customer lists, project histories, and operational databases without restrictive platform lock-ins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            10. AUSTRALIAN BUSINESS REALITY (EDITORIAL)
        ================================================== */}
        <section className="bg-white text-[#171717] border-y border-[#E5E5E2] py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-12">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#666666] uppercase tracking-widest block">
                EDITORIAL PERSPECTIVE
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#171717] tracking-tight uppercase leading-[1.02]">
                RUNNING A BUSINESS IS <br />
                <span className="text-[#666666]">ALREADY COMPLICATED ENOUGH.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
                <p>
                  Every day involves balancing customers, staff, quotes, invoices, projects, suppliers, schedules, emails, compliance, and cash flow.
                </p>
                <div className="p-8 rounded-3xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-4 shadow-sm">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#171717] uppercase tracking-tight leading-snug">
                    “YOU SHOULDN'T NEED TO BE THE HUMAN CONNECTION BETWEEN EVERY PART OF YOUR BUSINESS.”
                  </h3>
                  <p className="text-sm text-[#555555] leading-relaxed">
                    When the business relies on the owner's memory or constant phone calls to keep projects moving, growth becomes exhausting. The right system reduces that mental load by giving your team clear, reliable visibility.
                  </p>
                </div>
                <p className="text-sm sm:text-base text-[#666666]">
                  From growing service businesses in Sydney and Melbourne to construction, professional and industrial businesses across Brisbane, Perth, Adelaide, Canberra, the Gold Coast and beyond, we build around the way the business actually operates.
                </p>
              </div>

              {/* Major Markets Card */}
              <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-6 shadow-sm">
                <span className="text-xs font-mono font-bold text-[#171717] uppercase tracking-wider block">
                  AUSTRALIA-WIDE COLLABORATION
                </span>
                <p className="text-sm text-[#555555] leading-relaxed">
                  We collaborate remotely with Australian business owners and operational leaders across all key business centres:
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    'Sydney, NSW',
                    'Melbourne, VIC',
                    'Brisbane, QLD',
                    'Perth, WA',
                    'Adelaide, SA',
                    'Canberra, ACT',
                    'Gold Coast, QLD',
                  ].map((city) => (
                    <span
                      key={city}
                      className="px-3.5 py-1.5 rounded-lg bg-white border border-[#E5E5E2] text-xs font-mono text-[#171717] shadow-xs"
                    >
                      {city}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E5E5E2]">
                  <p className="text-xs font-mono text-[#666666] leading-relaxed">
                    Clear milestones, direct video briefings, structured scopes and transparent delivery timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            11. WHY MAYAA: UNDERSTAND FIRST. BUILD SECOND.
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="max-w-[1400px] mx-auto space-y-16">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                OUR APPROACH
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
                UNDERSTAND FIRST. <br />
                <span className="text-[#8E8E8A]">BUILD SECOND.</span>
              </h2>
              <div className="space-y-3 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed pt-2">
                <p>We don't start with a template.</p>
                <p>We start with your business.</p>
                <p className="text-neutral-400 text-sm sm:text-base">
                  How enquiries arrive. How work gets sold. How projects are delivered. How your team works. How management needs visibility.
                </p>
                <p className="text-white font-medium">Then we design the right digital experience or system around it.</p>
              </div>
            </div>

            {/* 5 Key Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {[
                {
                  title: 'CUSTOM',
                  tag: 'YOUR WORKFLOW',
                  desc: 'Built specifically around your team hierarchy, terminology and business rules.',
                },
                {
                  title: 'PRACTICAL',
                  tag: 'SOLVES REAL FRICTION',
                  desc: 'Focused on reducing wasted hours, missed follow-ups and duplicated administrative entry.',
                },
                {
                  title: 'CLEAR',
                  tag: 'NO BLOAT',
                  desc: 'Clean interfaces that team members adopt quickly without complicated training programs.',
                },
                {
                  title: 'SCALABLE',
                  tag: 'BUILT TO GROW',
                  desc: 'Engineered on modern tech stacks that easily handle growing client volumes and new staff.',
                },
                {
                  title: 'PREMIUM',
                  tag: 'EXECUTIVE POLISH',
                  desc: 'Professional front-end presentation that reflects the true caliber of your business.',
                },
              ].map((principle) => (
                <div
                  key={principle.title}
                  className="p-7 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                      {principle.tag}
                    </span>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">
                      {principle.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>

                  <div className="w-5 h-0.5 bg-white" />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================================================
            12. PROVEN CAPABILITY (REAL DEMONSTRATION)
        ================================================== */}
        <section className="bg-white text-[#171717] border-y border-[#E5E5E2] py-20 sm:py-28 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading, Description & Verification Points */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold text-[#666666] uppercase tracking-widest block">
                    PROVEN SYSTEM CAPABILITY · SEMS
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black text-[#171717] tracking-tight uppercase leading-[1.02]">
                    A REAL SYSTEM. <br />
                    <span className="text-[#666666]">ALREADY BUILT.</span>
                  </h2>
                  <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
                    SEMS demonstrates how Mayaa approaches operational software: unified lead tracking, staff assignments, task coordination, and management visibility configured in one practical interface.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E5E5E2] space-y-2.5 text-xs font-mono text-[#666666]">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#171717] shrink-0" />
                    <span>A tangible demonstration of Mayaa's custom system engineering capability.</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#171717] shrink-0" />
                    <span>Available for a live walkthrough during initial consultation discussions.</span>
                  </p>
                </div>
              </div>

              {/* Right Column: Controlled-Size Dashboard Visual Container */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl overflow-hidden bg-[#FAFAF9] border border-[#E5E5E2] p-2.5 sm:p-3.5 shadow-sm">
                  <div className="relative rounded-2xl overflow-hidden bg-neutral-100 aspect-[16/10] border border-[#E5E5E2]">
                    <img
                      src="/images/service_business_growth.webp"
                      alt="SEMS (Business Management System) production dashboard demonstration"
                      className="w-full h-full object-cover grayscale contrast-125"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            13. COMMERCIAL SCOPE
        ================================================== */}
        <section className="py-20 sm:py-28 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="p-8 sm:p-14 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                  COMMERCIAL TRANSPARENCY
                </span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.05]">
                  BUILT AROUND YOUR WORKFLOW. <br />
                  <span className="text-[#8E8E8A]">PRICED AROUND THE SCOPE.</span>
                </h3>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                  Every engagement is scoped around the exact workflows, users, modules and implementation requirements of your company. No surprise subscription fees, no locked-in vendor traps.
                </p>
                <p className="text-sm font-mono font-bold text-white">
                  For Australian businesses: Projects are scoped transparently and quoted based on deliverables.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center sm:items-start lg:items-end">
                <Link
                  to="/contact?market=australia"
                  className="min-h-[54px] sm:min-h-[56px] inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 bg-white text-black hover:bg-neutral-200 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md"
                >
                  <span>REQUEST A SCOPE DISCUSSION →</span>
                </Link>
                <span className="text-[11px] font-mono text-[#777777] mt-3">
                  Direct scoping session · Practical outcomes
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            BANGALORE DELIVERY MODEL FOR AUSTRALIAN ENTERPRISES
        ================================================== */}
        {/* ==================================================
            BANGALORE DELIVERY MODEL FOR AUSTRALIAN ENTERPRISES
        ================================================== */}
        <section className="bg-white text-[#171717] border-y border-[#E5E5E2] py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-12">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#059669] uppercase tracking-widest block">
                ENGINEERING DELIVERY
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#171717] tracking-tight uppercase leading-[1.02]">
                BANGALORE ENGINEERING. <br />
                <span className="text-[#666666]">AUSTRALIAN OPERATIONAL SPEED.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
                Mayaa delivers brand systems, high-clarity websites, and custom business management systems directly from Bangalore, India. We offer direct engineer collaboration, rapid turnaround, and full Australian data compliance without agency escalation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-8 rounded-3xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-4 shadow-sm">
                <span className="text-xs font-mono font-bold text-[#059669] uppercase tracking-widest">
                  01 · TIMEZONE OVERLAP
                </span>
                <h3 className="text-lg font-black text-[#171717] uppercase tracking-tight">
                  AEST / AEDT COLLABORATION
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Australian business hours run 4.5 to 5.5 hours ahead of Bangalore, meaning our morning overlap covers your afternoons perfectly for live sprint reviews, demos, and instant Slack/Teams support.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-4 shadow-sm">
                <span className="text-xs font-mono font-bold text-[#059669] uppercase tracking-widest">
                  02 · DATA SOVEREIGNTY
                </span>
                <h3 className="text-lg font-black text-[#171717] uppercase tracking-tight">
                  AUSTRALIAN CLOUD TENANCIES
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Workflows and data deploy directly to client-owned Australian cloud infrastructure (AWS ap-southeast-2 Sydney, Azure Australia East), strictly complying with the Australian Privacy Principles (APPs).
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-4 shadow-sm">
                <span className="text-xs font-mono font-bold text-[#059669] uppercase tracking-widest">
                  03 · COMMERCIAL TERMS
                </span>
                <h3 className="text-lg font-black text-[#171717] uppercase tracking-tight">
                  AUD MILESTONE CONTRACTS
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Fixed-scope milestone contracts invoiced in AUD with complete source code and creative asset ownership upon sign-off. Zero recurring per-user software licensing fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            FREQUENTLY ASKED QUESTIONS (FAQ)
        ================================================== */}
        <section className="py-24 sm:py-32 border-t border-neutral-900 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <span className="text-xs font-mono font-bold text-[#10B981] uppercase tracking-widest block mb-3">
                AUSTRALIAN DECISION-MAKER FAQS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.02]">
                COMMON QUESTIONS FROM <br />
                <span className="text-[#8E8E8A]">AUSTRALIAN BUSINESS LEADERS.</span>
              </h2>
            </div>

            <div className="space-y-4">
              {AUSTRALIA_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-800 bg-neutral-950 rounded-2xl overflow-hidden transition-colors hover:border-neutral-700"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 text-white hover:text-neutral-300 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-medium">{faq.question}</span>
                    <span className="text-xs font-mono text-neutral-500 flex-shrink-0">
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
                        className="px-6 pb-6 text-sm text-neutral-400 font-normal leading-relaxed border-t border-neutral-900 pt-4"
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

        {/* ==================================================
            14. FINAL CTA: BUSINESS CONSULTATION
        ================================================== */}
        <section className="bg-white text-[#171717] py-28 sm:py-36 md:py-44 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto text-center border-t border-[#E5E5E2]">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-[#FAFAF9] border border-[#E5E5E2] rounded-md text-xs font-mono font-bold text-[#666666] uppercase tracking-widest shadow-xs"
            >
              AUSTRALIA CONSULTATION
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black text-[#171717] tracking-tight uppercase leading-[0.98]"
            >
              LET'S LOOK AT HOW YOUR <br />
              <span className="text-[#666666]">BUSINESS ACTUALLY WORKS.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 text-base sm:text-xl text-[#444444] font-normal leading-relaxed max-w-2xl mx-auto"
            >
              <p>Tell us how you currently manage enquiries, clients, projects and your team.</p>
              <p className="text-[#666666]">
                We'll help you identify where the friction is and show you what could be improved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact?market=australia"
                className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-9 sm:px-10 py-4 bg-[#111111] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-all duration-300 shadow-md group"
              >
                <span>START A CONVERSATION</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact?market=australia"
                className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-9 sm:px-10 py-4 bg-transparent text-[#171717] border border-[#CCCCCC] hover:border-[#171717] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
              >
                <span>DISCUSS YOUR BUSINESS</span>
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
};
