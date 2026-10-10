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
  Cpu,
  BarChart3,
  Network,
  Workflow,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const SINGAPORE_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for Singapore enterprises from Bangalore without an on-the-ground office in Singapore?',
    answer:
      'Singapore and Bangalore operate with only a 2.5-hour timezone difference (IST is GMT+5:30, SGT is GMT+8:00), providing near-total business-hour overlap throughout the working day. Collaborations occur in fluent business English via dedicated Slack/Teams channels, shared Figma canvases, and direct video sprint planning. We do not manufacture claims of physical offices at Marina Bay Financial Centre or Raffles Place where we do not have them. By anchoring senior engineering at our Bangalore headquarters, we provide direct principal-to-engineer communication with exceptional velocity, precision, and without Singapore agency price inflation.',
  },
  {
    question: 'How do you handle data privacy, PDPA compliance, and cloud hosting for Singapore businesses?',
    answer:
      'All bespoke systems, automated workflows, and database layers are deployed directly onto client-owned cloud tenancies in Singapore data regions, such as AWS ap-southeast-1 (Singapore) or Microsoft Azure Southeast Asia (Singapore). Mayaa never retains, accesses without authorization, or monetizes client customer data. Systems are built with role-based access control (RBAC), multi-factor authentication, and strict compliance with the Personal Data Protection Act (PDPA).',
  },
  {
    question: 'Can your business systems integrate with tools used by Singapore SMEs like Xero, QuickBooks, Aspire, or HubSpot?',
    answer:
      'Yes. Our core principle is "Connect what works." We build secure REST/GraphQL API bridges and automated webhook listeners that sync client data, quotations, and invoice statuses with Xero, QuickBooks, Aspire, Stripe, and HubSpot without manual double-entry.',
  },
  {
    question: 'How are commercial agreements and invoicing structured for Singapore companies?',
    answer:
      'Engagements are contracted on fixed-scope, milestone-based terms and invoiced transparently in Singapore Dollars (SGD) or US Dollars (USD). Every phase has clear acceptance criteria. You retain 100% intellectual property ownership of the codebase and assets upon sign-off, with zero perpetual per-user software licensing fees.',
  },
];

export const SingaporeMarketPage: React.FC = () => {
  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SINGAPORE_FAQS.map((faq) => ({
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
    { name: 'Singapore', urlPath: '/global-markets/singapore' },
  ]);
  // Singapore Industry Use Cases
  const industryUseCases = [
    {
      id: 'architecture-interiors',
      title: 'ARCHITECTURE & INTERIORS',
      tagline: 'Design Studios · Interior Fit-Outs · Turnkey Practices',
      image: '/images/industries/architecture.webp',
      quote: 'Manage enquiries, consultations, proposals, approvals, project information and client communication through a workflow designed around your studio.',
      workflows: [
        'Client consultation & project scope intake',
        'Fee proposal revisions, BOQ schedules & authority submission tracking',
        'Material specification sign-offs & sample approvals',
        'Milestone-based invoicing schedules & variation authorisations',
      ],
    },
    {
      id: 'construction-fitout',
      title: 'CONSTRUCTION & FIT-OUT',
      tagline: 'Main Contractors · Commercial Fit-Outs · Specialized Builders',
      image: '/images/industries/construction.jpg',
      quote: 'Bring enquiries, quotations, project progress, teams, deadlines and client updates into a clearer operating workflow.',
      workflows: [
        'Tender enquiries & structured quotation generation',
        'Subcontractor work packages & site engineer coordination',
        'Daily progress logs, safety checks & site milestone updates',
        'Client variations, progress claims & handover defect punch lists',
      ],
    },
    {
      id: 'b2b-industrial',
      title: 'B2B & INDUSTRIAL',
      tagline: 'Material Suppliers · Industrial Equipment · Regional Distributors',
      image: '/images/industries/manufacturing.jpg',
      quote: 'Connect enquiries, sales pipelines, quotations, customer information and follow-ups without unnecessary manual handovers.',
      workflows: [
        'Specification enquiries from contractors, developers & engineers',
        'Lead qualification & sales representative territory assignment',
        'Custom quotation builder with multi-tier pricing governance',
        'Trade accounts, repeat order histories & logistics dispatch tracking',
      ],
    },
    {
      id: 'professional-services',
      title: 'PROFESSIONAL SERVICES',
      tagline: 'Corporate Advisory · Engineering Consultancies · Legal & Financial',
      image: '/images/singapore-studio-interiors.jpg',
      quote: 'Create a structured client journey from enquiry to delivery while giving your team better visibility over ongoing work.',
      workflows: [
        'High-authority digital presence that reflects institutional credibility',
        'Client onboarding intake, conflict checks & engagement letters',
        'Consultant deliverable milestones & collaborative review cycles',
        'Ongoing account visibility & retainers without scattered spreadsheets',
      ],
    },
    {
      id: 'hospitality-venues',
      title: 'HOSPITALITY & VENUES',
      tagline: 'Boutique Hotels · F&B Groups · Commercial Event Spaces',
      image: '/images/industries/hospitality.webp',
      quote: 'Create a stronger digital customer experience while organising enquiries, teams, operations and customer information.',
      workflows: [
        'Brand digital touchpoints that convey international polish',
        'Corporate booking, private dining & event quotation workflows',
        'Unified reservation inquiries & multi-channel guest communication',
        'Operational coordination between front-of-house, kitchen & operations',
      ],
    },
    {
      id: 'healthcare-clinics',
      title: 'HEALTHCARE & CLINICS',
      tagline: 'Specialist Medical Centres · Aesthetic Clinics · Dental Groups',
      image: '/images/industries/clinic.jpg',
      quote: 'Create a professional digital experience while organising enquiries, appointments, teams and customer workflows.',
      workflows: [
        'Clear, accessible patient education & digital credentials',
        'Online consultation booking & intake qualification',
        'Practitioner calendar visibility & patient communication pathways',
        'Treatment plan follow-ups & structured administrative handovers',
      ],
    },
  ];

  // The 6-Stage Operational Flow
  const systemPipeline = [
    {
      step: '01',
      stage: 'LEADS',
      flow: 'Website · Forms · Email · Calls · Social · Referrals',
      description: 'Capture inbound demand across website forms, direct phone calls, email referrals, and WhatsApp Business into a single qualified inbox. No missing contact details or lost enquiries.',
    },
    {
      step: '02',
      stage: 'SALES',
      flow: 'Qualification · Assignment · Follow-up · Quotation · Negotiation',
      description: 'Instantly qualify and assign leads to representatives. Automate follow-up reminders, track quotation revisions, and monitor deal probability without manual chasing.',
    },
    {
      step: '03',
      stage: 'CLIENTS',
      flow: 'Requirements · Communication · Documents · History',
      description: 'A permanent, centralized record of every signed agreement, project specification, meeting summary, and communication timeline accessible by all authorized team members.',
    },
    {
      step: '04',
      stage: 'PROJECTS',
      flow: 'Planning · Tasks · Deadlines · Progress',
      description: 'Track project milestones, consultant deliverables, material orders, and scope variations in real time. Everyone knows what is delivered, pending, and upcoming.',
    },
    {
      step: '05',
      stage: 'TEAM',
      flow: 'Responsibilities · Approvals · Accountability',
      description: 'Role-based task management with transparent deliverables. Project engineers, designers, sales teams, and administrators work with clear daily priorities.',
    },
    {
      step: '06',
      stage: 'MANAGEMENT',
      flow: 'Reports · Performance · Visibility · Decision-making',
      description: 'Real-time executive visibility without demanding manual spreadsheets. Instant access to active pipeline values, delivery bottlenecks, and revenue schedules.',
    },
  ];

  // Practical Productivity Outcomes
  const productivityOutcomes = [
    { title: 'Reduced Manual Administration', desc: 'Eliminate duplicate data entry across spreadsheets, inboxes, and separate departmental apps.' },
    { title: 'Faster Response Times', desc: 'Deliver qualified proposals and replies when customer intent is highest, setting your business apart.' },
    { title: 'Eliminated Data Silos', desc: 'Maintain one single source of truth across sales, operations, project delivery, and billing.' },
    { title: 'Visible Follow-up Cadences', desc: 'Never let high-value opportunities stall because a team member forgot to follow up.' },
    { title: 'Clear Team Accountability', desc: 'Establish unambiguous ownership of client handovers, project deliverables, and approvals.' },
    { title: 'Continuous Management Visibility', desc: 'Access real-time operational status without interrupting team members for verbal updates.' },
    { title: 'Elevated Client Experience', desc: 'Clients receive transparent timelines, consistent updates, and professional documentation throughout.' },
    { title: 'Confident Strategic Decisions', desc: 'Make capacity, hiring, and expansion decisions based on verified operational throughput.' },
  ];

  return (
    <>
      <SEO
        title="Strategic Brand, Digital Experience & Business Systems for Singapore | Mayaa Solutions"
        description="Built for Singapore businesses that have outgrown disconnected tools. Strategic brand design, high-clarity websites, and personalised business management systems engineered for operational efficiency, integration, and management visibility."
        keywords="Singapore business management systems, custom business software Singapore, business management software Singapore, custom CRM Singapore, website design Singapore, business systems Singapore, digital experience Singapore, business automation Singapore, custom software Singapore, SME software Singapore, Mayaa Solutions Singapore"
        ogImage="/images/singapore-commercial-hero.jpg"
        canonicalUrl="https://mayaasolutions.in/global-markets/singapore"
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
                  Singapore
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[0.98]"
              >
                YOUR BUSINESS HAS THE TOOLS. <br />
                <span className="text-white">WE CONNECT THE WAY</span> <br />
                <span className="text-[#8E8E8A]">THEY WORK.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl"
              >
                We design brands, digital experiences and personalised business systems for Singapore businesses that want less operational friction and more control.
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
                  to="/contact?market=singapore"
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

            {/* Right Editorial Singapore Commercial Visual */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl"
              >
                <img
                  src="/images/singapore-commercial-hero.jpg"
                  alt="Modern commercial and architectural landscape in Singapore"
                  className="w-full h-auto aspect-[4/3] object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono text-neutral-300">
                  <span className="uppercase tracking-wider">OPERATIONAL ARCHITECTURE</span>
                  <span className="text-[#8E8E8A]">SINGAPORE</span>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ==================================================
            02. THE SINGAPORE BUSINESS PROBLEM
        ================================================== */}
        <section className="bg-[#0B0B0B] border-y border-neutral-800 py-20 sm:py-28 lg:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-14 sm:space-y-16">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                THE REALITY OF DIGITAL MATURITY
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
                YOU DON'T NEED ANOTHER TOOL. <br />
                <span className="text-[#8E8E8A]">YOU NEED THE RIGHT WORKFLOW.</span>
              </h2>
            </div>

            {/* Realistic Disconnected Reality Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left: The Disconnected Tools Reality */}
              <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8E8E8A] block">
                  How established Singapore businesses often operate today:
                </span>

                <div className="space-y-4">
                  {[
                    'Your CRM has the customer record.',
                    'Your accounting software has the invoice and payment status.',
                    'Your project management software has the task and milestone.',
                    'Your inbox has the commercial negotiation thread.',
                    'WhatsApp has the latest on-the-ground client update.',
                    'Someone\'s spreadsheet has the summary report management actually needs.',
                    'Every system works independently. But the business still feels fragmented.',
                  ].map((line, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <span className="w-5 h-5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-mono font-bold text-[#8E8E8A] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
                        {line}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-neutral-900">
                  <p className="text-xs font-mono text-[#8E8E8A] leading-relaxed">
                    Singapore businesses are already digitally mature. The issue is not adoption; it is fragmentation across tools, teams, and data silos.
                  </p>
                </div>
              </div>

              {/* Right: The Diagnosis */}
              <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-6">
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-white block">
                      THE DIAGNOSIS
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-snug">
                      THE PROBLEM ISN'T THE TOOLS. <br />
                      <span className="text-[#8E8E8A]">IT'S THE GAPS BETWEEN THEM.</span>
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                    Adding more software rarely creates a smarter business. It creates duplicate records, manual handovers, multiple logins, and staff spending hours reconciling information.
                  </p>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                    Your systems should give management visibility without requiring management to constantly ask for it.
                  </p>

                  <div className="pt-4 border-t border-neutral-900">
                    <p className="text-xs font-mono text-[#8E8E8A] leading-relaxed">
                      We design personalised business management systems that bridge these gaps, uniting your lead intake, client communications, project delivery, and reporting.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white text-black flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#666666] block">
                      OPERATIONAL AUDIT
                    </span>
                    <span className="text-sm font-black uppercase tracking-tight text-black block">
                      Identify where your workflow loses momentum
                    </span>
                  </div>
                  <Link
                    to="/contact?market=singapore"
                    className="p-3 bg-black text-white rounded-xl hover:bg-neutral-800 transition-colors shrink-0"
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
            03. OPERATIONAL EFFICIENCY
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="max-w-4xl space-y-6 mb-14 sm:mb-20">
            <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
              OPERATIONAL DISCIPLINE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
              EFFICIENCY ISN'T DOING MORE. <br />
              <span className="text-[#8E8E8A]">IT'S REMOVING WHAT SHOULDN'T NEED TO BE DONE.</span>
            </h2>
            <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed pt-2">
              In a high-pace market like Singapore, small operational teams carry significant commercial responsibility. True efficiency comes from eliminating the low-value friction that slows them down:
            </p>
          </div>

          {/* 8 Operational Friction Points Eliminated */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'REPEATED DATA ENTRY',
                desc: 'Entering the same customer, job, or invoice details across three different tools.',
              },
              {
                title: 'MANUAL FOLLOW-UPS',
                desc: 'Letting high-value quotations go cold because representatives lack structured reminders.',
              },
              {
                title: 'INFORMATION SEARCHES',
                desc: 'Scrolling through endless WhatsApp chat groups to verify the latest project variation.',
              },
              {
                title: 'DISCONNECTED HANDOVERS',
                desc: 'Sales closing a contract, but operations receiving incomplete specifications.',
              },
              {
                title: 'MANUAL REPORTING',
                desc: 'Spending Friday afternoons compiling static spreadsheets for executive review.',
              },
              {
                title: 'UNCLEAR OWNERSHIP',
                desc: 'Confusion over which team member is responsible for the next client milestone.',
              },
              {
                title: 'MULTIPLE LOGINS',
                desc: 'Staff toggling between five separate platforms just to complete one daily task.',
              },
              {
                title: 'STATUS INTERROGATION',
                desc: 'Founders having to interrupt five people just to understand where a client stands.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold text-[#8E8E8A] uppercase tracking-wider block">
                    FRICTION 0{idx + 1}
                  </span>
                  <h4 className="text-base font-black text-white uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="w-5 h-0.5 bg-neutral-700" />
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1 max-w-2xl">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                THE TARGET OUTCOME
              </span>
              <p className="text-sm text-neutral-300 leading-relaxed">
                A system configured around your business replaces these manual handovers with automated, transparent workflows that keep everyone aligned.
              </p>
            </div>
            <Link
              to="/business-systems"
              className="min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-colors shrink-0"
            >
              <span>SEE HOW IT WORKS →</span>
            </Link>
          </div>
        </section>

        {/* ==================================================
            04. PERSONALISED BUSINESS MANAGEMENT SYSTEM
        ================================================== */}
        <section id="systems" className="bg-[#0B0B0B] border-y border-neutral-800 py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-16">
            
            <div className="space-y-6 max-w-4xl">
              <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                CORE SYSTEM ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
                PERSONALISED BUSINESS <br />
                <span className="text-[#8E8E8A]">MANAGEMENT SYSTEM.</span>
              </h2>
              <div className="space-y-3 text-base sm:text-xl text-neutral-300 font-normal leading-relaxed pt-2">
                <p>We don't believe every business needs another off-the-shelf platform.</p>
                <p>Sometimes the right answer is a system designed around the way your business already works.</p>
                <p className="text-white font-medium">Build the system around the business. Not the business around the software.</p>
              </div>
            </div>

            {/* 4-Stage Methodology Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  stage: '01. UNDERSTAND',
                  title: 'ANALYSE THE WORKFLOW',
                  desc: 'How enquiries arrive, how sales happen, how work gets delivered, how teams collaborate, and what management needs to see.',
                },
                {
                  stage: '02. DESIGN',
                  title: 'MAP & STREAMLINE',
                  desc: 'Map the complete journey, identify operational friction, remove redundant steps, and design the simplest useful system.',
                },
                {
                  stage: '03. BUILD',
                  title: 'CUSTOMISE & CONNECT',
                  desc: 'Engineer the right interface, automate useful handovers, establish strict role permissions, and centralise critical data.',
                },
                {
                  stage: '04. IMPROVE',
                  title: 'REFINE & SCALE',
                  desc: 'Monitor team adoption, identify operational bottlenecks, measure workflow velocity, and refine the system as you grow.',
                },
              ].map((step) => (
                <div
                  key={step.stage}
                  className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                      {step.stage}
                    </span>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="w-6 h-0.5 bg-white" />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================================================
            05. SHOW THE BUSINESS SYSTEM (THE 6-TIER PIPELINE)
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="space-y-6 max-w-4xl mb-14 sm:mb-20">
            <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
              END-TO-END PIPELINE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
              ONE UNIFIED ARCHITECTURE. <br />
              <span className="text-[#8E8E8A]">ZERO INFORMATION GAPS.</span>
            </h2>
            <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed pt-2">
              Your business shouldn't require management to piece together the story from five different systems. Every stage connects seamlessly to the next:
            </p>
          </div>

          {/* 6 Stage Pipeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {systemPipeline.map((item) => (
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
                  <span>Connected Architecture</span>
                  <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            06. SINGAPORE INDUSTRY SECTION
        ================================================== */}
        <section className="bg-[#0B0B0B] border-y border-neutral-800 py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-14 sm:space-y-16">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                INDUSTRY SPECIFICITY
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
                BUILT AROUND THE WORK <br />
                <span className="text-[#8E8E8A]">YOU ACTUALLY DO.</span>
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed pt-2">
                Different industries face fundamentally different operational bottlenecks. We tailor systems and digital touchpoints around the exact operating cadence of your business:
              </p>
            </div>

            {/* 6 Industry Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {industryUseCases.map((useCase) => (
                <div
                  key={useCase.id}
                  className="rounded-3xl bg-neutral-950 border border-neutral-800 overflow-hidden flex flex-col justify-between hover:border-neutral-600 transition-all group"
                >
                  <div>
                    {/* Visual Asset Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-neutral-800">
                      <img
                        src={useCase.image}
                        alt={useCase.title}
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="text-[10px] font-mono font-bold text-neutral-300 uppercase tracking-widest bg-black/60 px-2.5 py-1 rounded">
                          {useCase.tagline}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-7 sm:p-8 space-y-4">
                      <h3 className="text-xl font-black text-white uppercase tracking-tight">
                        {useCase.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-neutral-200 font-medium leading-relaxed italic border-l-2 border-white pl-3">
                        “{useCase.quote}”
                      </p>

                      <div className="space-y-2 pt-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8E8E8A] block">
                          Configured Workflows
                        </span>
                        <ul className="space-y-1.5">
                          {useCase.workflows.map((flow, fIdx) => (
                            <li key={fIdx} className="text-xs text-neutral-400 flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-white mt-1.5 shrink-0" />
                              <span>{flow}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 pt-0">
                    <Link
                      to="/contact?market=singapore"
                      className="w-full py-3 px-4 rounded-xl bg-neutral-900 hover:bg-white text-neutral-300 hover:text-black text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between transition-colors"
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
            07. SINGAPORE DIGITAL EXPERIENCE
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                WEBSITE & DIGITAL EXPERIENCE
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
                DIGITAL EXPERIENCE SHOULD FEEL <br />
                <span className="text-[#8E8E8A]">AS EFFICIENT AS THE BUSINESS BEHIND IT.</span>
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                <p className="text-white font-medium">
                  A beautiful website is useful. A website that helps the business work better is better.
                </p>
                <p className="text-sm sm:text-base text-neutral-400">
                  Singapore commercial clients evaluate digital touchpoints with high standards. They expect speed, clarity, seamless mobile accessibility, and immediate pathways to engage without friction.
                </p>
                <p className="text-sm sm:text-base text-neutral-400">
                  We engineer digital storefronts that connect directly into your enquiry capture, WhatsApp routing, and project scoping systems.
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
                  title: 'SUB-SECOND PERFORMANCE',
                  desc: 'Clean code architecture and minimal payload ensuring instant loading on mobile and desktop.',
                },
                {
                  title: 'INFORMATION ARCHITECTURE',
                  desc: 'Structured layouts that allow busy decision-makers to evaluate capabilities in seconds.',
                },
                {
                  title: 'INTEGRATED ENQUIRY FLOW',
                  desc: 'Enquiries sync directly into your lead pipeline rather than sitting in an unread inbox.',
                },
                {
                  title: 'WHATSAPP & DIRECT ROUTING',
                  desc: 'Frictionless one-tap messaging alongside comprehensive structured scoping forms.',
                },
                {
                  title: 'CASE EVIDENCE & CREDENTIALS',
                  desc: 'Clear presentation of past project scope, certifications, and technical deliverables.',
                },
                {
                  title: 'CONVERSION ARCHITECTURE',
                  desc: 'Every section is structured to turn high-intent visitors into direct business conversations.',
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
            08. STRATEGIC BRANDING (CLARITY + CREDIBILITY + CONSISTENCY)
        ================================================== */}
        <section className="bg-[#0B0B0B] border-y border-neutral-800 py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                  BRAND DESIGN
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
                  MAKE THE QUALITY OF <br />
                  <span className="text-[#8E8E8A]">YOUR BUSINESS VISIBLE.</span>
                </h2>
                <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                  Branding is not simply about designing a logo. In an international commercial hub like Singapore, branding is the clarity and consistency that makes prospective clients immediately recognise your caliber.
                </p>
                <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white block">
                    THE OBJECTIVE
                  </span>
                  <p className="text-sm text-neutral-300 font-medium leading-relaxed">
                    “Make your website, proposals, presentations, tender decks and customer touchpoints communicate who you are, what you deliver, and why clients should trust you.”
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                {[
                  {
                    title: 'VISUAL IDENTITY & SYSTEM',
                    desc: 'Logomark, typography scale, palette discipline, and layout rules crafted for contemporary executive authority.',
                  },
                  {
                    title: 'EXECUTIVE PROPOSALS & PITCH DECKS',
                    desc: 'Professionally structured presentation templates that match the rigor of your commercial proposals.',
                  },
                  {
                    title: 'DIGITAL TOUCHPOINTS',
                    desc: 'Consistent styling across social platforms, messaging headers, email signatures, and client portals.',
                  },
                  {
                    title: 'SALES & MARKETING COLLATERAL',
                    desc: 'Capabilities statements, project lookbooks, technical spec sheets, and corporate profiles designed with purpose.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <h4 className="text-sm font-black text-white uppercase tracking-wider">{item.title}</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="text-xs font-mono text-[#8E8E8A] font-bold shrink-0">0{idx + 1}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            09. PRACTICAL AI INTEGRATION
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="p-8 sm:p-14 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                PRAGMATIC ARTIFICIAL INTELLIGENCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.05]">
                AI IS BECOMING PART OF HOW BUSINESSES WORK. <br />
                <span className="text-[#8E8E8A]">THE QUESTION IS WHERE IT ACTUALLY BELONGS.</span>
              </h2>
              <div className="space-y-3 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed pt-2">
                <p>
                  Singapore is one of the most AI-aware business environments in the world. But technology leaders know that novelty is not the same as value.
                </p>
                <p className="text-white font-medium">
                  “AI should solve a real business problem. It shouldn't be added because everyone else is talking about it.”
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-900">
              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">LEAD TRIAGE & ROUTING</span>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Automated qualification of incoming enquiries based on project scope, timeline, and budget criteria.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">INTERNAL KNOWLEDGE</span>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Instant retrieval across standard operating procedures, past proposals, and project specifications.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">OPERATIONAL ASSISTANCE</span>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Automated quotation drafting, invoice summaries, and milestone digest reports for management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            10. DIGITAL MATURITY PERSPECTIVE
        ================================================== */}
        <section className="bg-[#0B0B0B] border-y border-neutral-800 py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-12">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                STRATEGIC PERSPECTIVE
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
                DIGITAL MATURITY ISN'T <br />
                <span className="text-[#8E8E8A]">THE NUMBER OF TOOLS YOU USE.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                <p>
                  A business can have a CRM, accounting platform, project software, website, AI tools and spreadsheets, and still operate with unnecessary friction.
                </p>
                <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-snug">
                    “MORE SOFTWARE DOESN'T NECESSARILY CREATE A SMARTER BUSINESS.”
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    The true benchmark of digital maturity is connected workflows, clear ownership, useful automation, reliable data, and continuous executive visibility without manual effort.
                  </p>
                </div>
                <p className="text-sm sm:text-base text-neutral-400">
                  Whether you operate in the CBD, Jurong, one-north, Paya Lebar, Tampines, Changi, or Woodlands, your systems should work around the way your team actually delivers work.
                </p>
              </div>

              {/* Regional Scale Card */}
              <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-6">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  REGIONAL BUSINESS READY
                </span>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Singapore is also a gateway to Southeast Asia and APAC. Many Singapore enterprises coordinate across multiple jurisdictions:
                </p>

                <div className="space-y-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                    Cross-border client delivery & multi-currency billing
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                    Distributed regional teams & shared project milestones
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                    Scalable cloud architectures built for international expansion
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-900">
                  <p className="text-xs font-mono text-[#8E8E8A] leading-relaxed">
                    “Built in Singapore. Ready for the business beyond Singapore.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            11. PRODUCTIVITY & ROI
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="max-w-[1400px] mx-auto space-y-14 sm:space-y-16">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                MEASURABLE OUTCOMES
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
                TECHNOLOGY SHOULD <br />
                <span className="text-[#8E8E8A]">EARN ITS PLACE.</span>
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed pt-2">
                We avoid unverified percentage promises. Every custom system we architect has a specific operational purpose:
              </p>
            </div>

            {/* 8 Productivity Outcomes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {productivityOutcomes.map((item, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-[#8E8E8A] uppercase tracking-wider block">
                      OUTCOME 0{idx + 1}
                    </span>
                    <h4 className="text-base font-black text-white uppercase tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-5 h-0.5 bg-neutral-700" />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================================================
            12. DATA RESPONSIBILITY & SECURITY
        ================================================== */}
        <section className="bg-[#0B0B0B] border-y border-neutral-800 py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl space-y-8">
            <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
              SECURITY & INTEGRITY
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
              DESIGNED WITH RESPONSIBLE DATA <br />
              <span className="text-[#8E8E8A]">HANDLING IN MIND.</span>
            </h2>

            <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed">
              Business systems deal with real customer details, financial quotations, client contracts, and sensitive operational records. We build with sound technical governance:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-3">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  ROLE-BASED PERMISSIONS
                </span>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Strict access control boundaries ensuring team members only access information relevant to their operational role.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-3">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  SECURE AUTHENTICATION & ENCRYPTION
                </span>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Industry-standard encryption protocols in transit and at rest, protecting confidential company records.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-3">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  AUDIT TRAILS & ACTIVITY LOGGING
                </span>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Full visibility over data edits, quotation revisions, and milestone sign-offs for complete transparency.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-3">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  FULL DATA OWNERSHIP
                </span>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Your business retains 100% ownership of your databases, customer registers, and workflows without platform lock-ins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            13. WHY MAYAA: UNDERSTAND FIRST. BUILD SECOND.
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
                <p>We don't begin by recommending software.</p>
                <p>We begin by understanding the business.</p>
                <p className="text-neutral-400 text-sm sm:text-base">
                  How leads arrive. How sales happen. How teams work. How projects move. Where information gets lost. Where management lacks visibility.
                </p>
                <p className="text-white font-medium">Then we design the simplest useful system around those realities.</p>
              </div>
            </div>

            {/* 5 Key Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {[
                {
                  title: 'CUSTOM',
                  tag: 'YOUR WORKFLOW',
                  desc: 'Configured strictly around your operational rhythm, hierarchy and business rules.',
                },
                {
                  title: 'PRACTICAL',
                  tag: 'SOLVES REAL FRICTION',
                  desc: 'Eliminates wasted admin, missed follow-ups and duplicated handovers.',
                },
                {
                  title: 'PRECISE',
                  tag: 'NO BLOAT',
                  desc: 'Clean interfaces that team members adopt rapidly without training overhead.',
                },
                {
                  title: 'SCALABLE',
                  tag: 'BUILT TO GROW',
                  desc: 'Engineered on modern stacks ready for regional expansion and higher volumes.',
                },
                {
                  title: 'BUSINESS-FIRST',
                  tag: 'COMMERCIAL IMPACT',
                  desc: 'Technology serves the operation, not the other way around.',
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
            14. PROVEN CAPABILITY (REAL DEMONSTRATION)
        ================================================== */}
        <section className="bg-[#0B0B0B] border-y border-neutral-800 py-20 sm:py-28 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading, Description & Verification Points */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                    PROVEN SYSTEM CAPABILITY · SEMS
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.02]">
                    A REAL SYSTEM. <br />
                    <span className="text-[#8E8E8A]">ALREADY BUILT.</span>
                  </h2>
                  <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                    SEMS demonstrates how Mayaa approaches operational software: unified lead tracking, staff assignments, task coordination, and management visibility configured in one practical interface.
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-800/80 space-y-2.5 text-xs font-mono text-[#8E8E8A]">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>A tangible demonstration of Mayaa's custom system engineering capability.</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>Available for a live walkthrough during initial consultation discussions.</span>
                  </p>
                </div>
              </div>

              {/* Right Column: Controlled-Size Dashboard Visual Container */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800 p-2.5 sm:p-3.5 shadow-2xl">
                  <div className="relative rounded-2xl overflow-hidden bg-black aspect-[16/10] border border-neutral-900">
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
            15. COMMERCIAL SCOPE
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
                  Every engagement is scoped around the exact workflows, users, modules and integration requirements of your company. No forced recurring subscription fees, no locked-in vendor traps.
                </p>
                <p className="text-sm font-mono font-bold text-white">
                  For Singapore businesses: Scoped transparently and quoted based on agreed deliverables.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center sm:items-start lg:items-end">
                <Link
                  to="/contact?market=singapore"
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
            BANGALORE DELIVERY MODEL FOR SINGAPORE ENTERPRISES
        ================================================== */}
        <section className="py-24 sm:py-32 border-t border-neutral-900 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="space-y-12">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#06B6D4] uppercase tracking-widest block">
                ENGINEERING DELIVERY
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
                BANGALORE CORE. <br />
                <span className="text-[#8E8E8A]">SINGAPORE SPEED & ALIGNMENT.</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
                Mayaa delivers brand architecture, web experiences, and custom business systems directly from our technology headquarters in Bangalore, India. We offer direct engineer collaboration, rapid turnaround, and full regional cloud compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-4">
                <span className="text-xs font-mono font-bold text-[#06B6D4] uppercase tracking-widest">
                  01 · TIMEZONE OVERLAP
                </span>
                <h3 className="text-lg font-black text-white uppercase tracking-tight">
                  SGT REAL-TIME COLLABORATION
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  With only a 2.5-hour time difference, our working day covers Singapore business hours from morning to evening for live design critiques, demos, and instant Slack/Teams support.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-4">
                <span className="text-xs font-mono font-bold text-[#06B6D4] uppercase tracking-widest">
                  02 · DATA SOVEREIGNTY
                </span>
                <h3 className="text-lg font-black text-white uppercase tracking-tight">
                  SINGAPORE CLOUD RESIDENCY
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Workflows and data deploy directly to client-owned Singapore infrastructure (AWS ap-southeast-1, Azure Southeast Asia), fully compliant with the Personal Data Protection Act (PDPA).
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-4">
                <span className="text-xs font-mono font-bold text-[#06B6D4] uppercase tracking-widest">
                  03 · COMMERCIAL TERMS
                </span>
                <h3 className="text-lg font-black text-white uppercase tracking-tight">
                  SGD / USD MILESTONE CONTRACTS
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Fixed-scope milestone contracts invoiced in SGD or USD with complete source code and creative asset ownership upon sign-off. Zero recurring per-user software licensing fees.
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
              <span className="text-xs font-mono font-bold text-[#06B6D4] uppercase tracking-widest block mb-3">
                SINGAPORE DECISION-MAKER FAQS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.02]">
                COMMON QUESTIONS FROM <br />
                <span className="text-[#8E8E8A]">SINGAPORE BUSINESS LEADERS.</span>
              </h2>
            </div>

            <div className="space-y-4">
              {SINGAPORE_FAQS.map((faq, idx) => (
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
            16. FINAL CTA: BUSINESS CONSULTATION
        ================================================== */}
        <section className="py-28 sm:py-36 md:py-44 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto text-center border-t border-neutral-900">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-xs font-mono font-bold text-neutral-300 uppercase tracking-widest"
            >
              SINGAPORE CONSULTATION
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[0.98]"
            >
              LET'S LOOK AT HOW YOUR <br />
              <span className="text-[#8E8E8A]">BUSINESS ACTUALLY WORKS.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto"
            >
              <p>Tell us where your business is losing time, visibility or momentum.</p>
              <p className="text-neutral-400">
                We'll look at the workflow and identify what could be simplified, connected or built better.
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
                to="/contact?market=singapore"
                className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-9 sm:px-10 py-4 bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-2xl group"
              >
                <span>START A BUSINESS CONVERSATION</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact?market=singapore"
                className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-9 sm:px-10 py-4 bg-transparent text-white border border-neutral-700 hover:border-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
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
