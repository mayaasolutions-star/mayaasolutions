import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cpu,
  Workflow,
  Layers,
  Database,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ArrowDown,
  Building,
  Truck,
  Stethoscope,
  Factory,
  Compass,
  Home,
  UtensilsCrossed,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getServiceSchema, getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const SYSTEMS_FAQS: FAQItem[] = [
  {
    question: 'Is this an off-the-shelf software package or custom-built for our business?',
    answer:
      'We combine the speed of a proven architectural foundation (secure authentication, database schemas, role permissions) with custom engineering. The modules, workflow stages, custom fields, approval chains, and executive dashboards are configured specifically around how your company operates.',
  },
  {
    question: 'How does the commercial model compare to SaaS platforms like Salesforce or Monday.com?',
    answer:
      'Standard SaaS tools charge per-seat monthly subscription fees that compound as your team grows, while forcing your business into rigid, generic workflows. With a Mayaa Personalised Business Management System (BMS), you invest in engineering and implementation with zero per-seat licensing penalties. Ongoing operational costs are limited to standard cloud hosting infrastructure.',
  },
  {
    question: 'Can our existing data from spreadsheets or legacy software be migrated?',
    answer:
      'Yes. During the implementation phase, we assist with data sanitation, entity mapping, and automated import from CSV files, Excel spreadsheets, or SQL databases, ensuring historical client and project records are preserved without manual re-entry.',
  },
  {
    question: 'Who owns the software code and business data once deployed?',
    answer:
      'Your business owns 100% of its data and custom operational codebase. Systems can be deployed on your own dedicated cloud infrastructure (AWS, Azure, Cloudflare, or Supabase) with complete role-based access control and strict data sovereignty.',
  },
];

const WORKFLOW_PIPELINE = [
  {
    num: '01',
    stage: 'Enquiries',
    summary: 'Omnichannel Inbound Capture',
    desc: 'Capture inquiries from websites, email, and partner channels into a structured, de-duplicated intake queue.',
  },
  {
    num: '02',
    stage: 'Leads',
    summary: 'Pipeline Qualification',
    desc: 'Track sales velocity, proposal delivery, follow-up reminders, and deal values across tailored pipeline stages.',
  },
  {
    num: '03',
    stage: 'Clients',
    summary: 'Centralized Account Master',
    desc: 'Maintain unified client profiles with historical communications, contracts, billing status, and linked projects.',
  },
  {
    num: '04',
    stage: 'Projects',
    summary: 'Milestones & Delivery',
    desc: 'Allocate team capacity, monitor project deliverables, track milestones, and manage operational handoffs.',
  },
  {
    num: '05',
    stage: 'Operations',
    summary: 'Executive Visibility',
    desc: 'Real-time dashboards showing project delivery health, operational bottlenecks, revenue status, and team velocity.',
  },
];

const INDUSTRY_BLUEPRINTS = [
  {
    num: '01',
    category: 'Construction & Contracting',
    icon: Building,
    title: 'Construction Operations System',
    desc: 'Manage projects, multi-site work, subcontractor allocations, BOQ progress, and vendor procurement from one central platform.',
    tags: ['Sites & Milestones', 'Subcontractors', 'BOQ Tracking', 'Material Approvals', 'Vendor Invoices'],
  },
  {
    num: '02',
    category: 'Manufacturing & Industrial',
    icon: Factory,
    title: 'Manufacturing Workflow Engine',
    desc: 'Connect customer purchase orders, production line batches, inventory thresholds, supplier handoffs, and dispatch schedules.',
    tags: ['Work Orders', 'Inventory Reserves', 'Supplier Master', 'Batch Tracking', 'Dispatch Logistics'],
  },
  {
    num: '03',
    category: 'Architecture & Engineering',
    icon: Compass,
    title: 'Architecture Practice System',
    desc: 'Track client briefs, design phases, drawing approvals, council submissions, site inspection notes, and fee milestones.',
    tags: ['Client Proposals', 'Drawing Revisions', 'Phase Signoffs', 'Site Logs', 'Billing Milestones'],
  },
  {
    num: '04',
    category: 'Logistics & Fleet Operations',
    icon: Truck,
    title: 'Logistics Operations System',
    desc: 'Coordinate consignment bookings, fleet availability, driver allocations, route milestones, and proof-of-delivery records.',
    tags: ['Consignments', 'Fleet Availability', 'Route Dispatch', 'Driver Logs', 'Proof of Delivery'],
  },
  {
    num: '05',
    category: 'Property & Real Estate',
    icon: Home,
    title: 'Property Asset & Unit System',
    desc: 'Oversee multi-property portfolios, tenant lease agreements, maintenance ticket queues, inspection logs, and rental status.',
    tags: ['Unit Master', 'Tenant Portfolios', 'Maintenance Queues', 'Payment Logs', 'Inspection Audits'],
  },
  {
    num: '06',
    category: 'Healthcare & Clinical Practice',
    icon: Stethoscope,
    title: 'Clinical Operations System',
    desc: 'Streamline patient scheduling, practitioner shifts, treatment notes, medical inventory management, and billing administration.',
    tags: ['Patient Schedules', 'Doctor Rosters', 'Clinical Records', 'Pharmacy Stocks', 'Invoice Generation'],
  },
];

export const BusinessToolsPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <>
      <SEO
        title="Personalised Business Management Systems (BMS) | Mayaa Solutions"
        description="We engineer custom business management systems configured around your actual workflows—connecting enquiries, leads, projects, teams, and executive reporting."
        canonicalUrl="https://mayaasolutions.in/business-systems"
        schema={[
          getServiceSchema(
            'Personalised Business Management Systems (BMS)',
            'We engineer custom business management systems configured around your actual workflows—connecting enquiries, leads, projects, teams, and executive reporting.',
            'Custom Business Management Software & CRM Systems',
            '/business-systems'
          ),
          getBreadcrumbSchema([
            { name: 'Home', urlPath: '/' },
            { name: 'Services', urlPath: '/services' },
            { name: 'Business Systems', urlPath: '/business-systems' },
          ]),
        ]}
      />

      <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden">
        
        {/* ==================================================
            01. SYSTEMS ARCHITECTURE HERO
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
              <Cpu className="w-3.5 h-3.5 text-neutral-300" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-neutral-400">
                CAPABILITY 03 · OPERATIONAL ENGINEERING
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.04] mb-8"
            >
              One connected system. <br className="hidden sm:inline" />
              <span className="font-light italic text-neutral-400">Built around how you actually work.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-normal leading-relaxed max-w-3xl mb-10"
            >
              Off-the-shelf software forces businesses into generic molds and expensive recurring subscriptions. We architect custom Business Management Systems (BMS) that unite customer inquiries, active projects, team handoffs, and executive reporting into one intuitive platform.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Link
                to="/contact?service=business-systems"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-xl group"
              >
                <span>Discuss Operational Requirements</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="#systems-demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-neutral-950 text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
              >
                Watch Interface Demo ↓
              </a>
            </motion.div>
          </div>

          {/* Metric Bar */}
          <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-neutral-500 uppercase tracking-widest">
            <span>Process-Aligned Architecture</span>
            <span className="hidden sm:inline">•</span>
            <span>Zero Per-Seat SaaS Traps</span>
            <span className="hidden sm:inline">•</span>
            <span>100% Client Data & Codebase Ownership</span>
          </div>
        </section>

        {/* ==================================================
            02. THE OPERATIONAL PROBLEM (FRAGMENTED SOFTWARE)
        ================================================== */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
              The Operational Bottleneck
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              When business software is fragmented, clarity disappears.
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              As growing businesses scale, they often adopt separate tools for each function—creating communication silos, double data entry, and delayed decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-neutral-950/80 border border-neutral-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-neutral-400 font-bold tracking-widest block mb-4">
                  01 / SPREADSHEET CHAOS
                </span>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  Disconnected Files
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Important customer details and project statuses sit isolated in spreadsheets, leading to outdated copies, lost rows, and zero access security.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-950/80 border border-neutral-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-neutral-400 font-bold tracking-widest block mb-4">
                  02 / SUBSCRIPTION BLOAT
                </span>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  Generic SaaS Tools
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Paying per-user monthly fees for tools where 80% of features go unused, while the remaining 20% do not fit your actual workflows.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-950/80 border border-neutral-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-neutral-400 font-bold tracking-widest block mb-4">
                  03 / LOST INBOX LEADS
                </span>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  Scattered Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Client conversations and lead follow-ups trapped in individual WhatsApp chats or private email threads with no institutional visibility.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-950/80 border border-neutral-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-neutral-400 font-bold tracking-widest block mb-4">
                  04 / ZERO VISIBILITY
                </span>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  Blind Management
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Leadership is forced to interrupt operations for manual status updates rather than seeing live metrics in a centralized dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            03. THE UNIFIED 5-STAGE WORKFLOW PIPELINE
        ================================================== */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
              Workflow Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              How information moves seamlessly through a Mayaa BMS.
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              We connect your entire customer and project lifecycle into a continuous, audited data stream.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {WORKFLOW_PIPELINE.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-neutral-400 font-bold tracking-widest block mb-2">
                    STEP {step.num}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1.5">{step.stage}</h3>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-4">
                    {step.summary}
                  </span>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
                {idx < WORKFLOW_PIPELINE.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-neutral-600 font-mono text-xs">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            04. AUTHENTIC SYSTEM INTERFACE DEMO
        ================================================== */}
        <section id="systems-demo" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
              Operational Interface
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Demonstrated system architecture in motion.
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              Explore how our business management framework coordinates leads, project tasks, and team oversight through clean, uncluttered interfaces.
            </p>
          </div>

          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-black shadow-2xl mb-14 group">
            <video
              src="/images/BMS - Tool.mp4"
              poster="/images/service_business_growth.webp"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-400 pointer-events-none">
              <span className="px-3 py-1.5 rounded bg-black/80 backdrop-blur border border-neutral-800 text-neutral-200">
                Mayaa BMS · Workflow Engine Demo
              </span>
              <span className="hidden sm:inline text-neutral-400">
                Custom Tailoring · Role-Based Security
              </span>
            </div>
          </div>

          {/* 4 Architectural Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80">
              <Database className="w-5 h-5 text-neutral-300 mb-4" />
              <h4 className="text-base font-bold text-white mb-2">Centralized Pipeline</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                De-duplicated client profiles with complete timeline history and linked proposal docs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80">
              <ShieldCheck className="w-5 h-5 text-neutral-300 mb-4" />
              <h4 className="text-base font-bold text-white mb-2">Role Governance</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Granular permissions protecting financial records, customer PII, and administrative levers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80">
              <Workflow className="w-5 h-5 text-neutral-300 mb-4" />
              <h4 className="text-base font-bold text-white mb-2">Milestone Tracking</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Resource allocation and stage deadlines with automated reminder triggers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80">
              <BarChart3 className="w-5 h-5 text-neutral-300 mb-4" />
              <h4 className="text-base font-bold text-white mb-2">Executive Metrics</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Live visibility into active workloads, delivery velocity, and cashflow milestones.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================
            05. REAL VERIFIED EVIDENCE: PAVANRAJE MULTI-STATE
        ================================================== */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block">
                Verified Project Implementation
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Pavanraje Multi-State System
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
                Engineered from the ground up to replace manual administrative paperwork with an integrated digital management system. The platform brought member records, operational workflows, and team coordination into one secure, accessible interface.
              </p>
              <div className="space-y-2 pt-2 border-t border-neutral-900 text-xs font-mono text-neutral-400">
                <div>• Custom Product Architecture & Workflow Mapping</div>
                <div>• Role-Based Employee Administration Dashboard</div>
                <div>• Secure Cloud Database Deployment & Data Migration</div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-black aspect-[16/10]">
                <img
                  src="/images/creative_page_work_thumbnail_pavanraje_multistate.webp"
                  alt="Pavanraje Multi-State Management System"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            06. 6 INDUSTRY BLUEPRINTS
        ================================================== */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
              Sector Specialization
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Configured blueprints for diverse business sectors.
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              While our underlying technology architecture is standardized, every module is configured to match the specific operational vernacular of your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRY_BLUEPRINTS.map((bp, idx) => {
              const Icon = bp.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                        <Icon className="w-5 h-5 text-neutral-300" />
                      </div>
                      <span className="text-xs font-mono text-neutral-400 font-bold">
                        BP {bp.num}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                      {bp.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                      {bp.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-normal">
                      {bp.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-900 flex flex-wrap gap-1.5">
                    {bp.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
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
            {SYSTEMS_FAQS.map((faq, idx) => {
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
        <section className="py-28 md:py-36 px-6 md:px-12 max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-950 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">
              Start Your Systems Scoping
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.06] mb-6 max-w-4xl text-balance">
            Your business has its own way of working. <br />
            <span className="font-light italic text-neutral-400">Your system should too.</span>
          </h2>

          <p className="text-base sm:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl mb-10 text-balance">
            Tell us how your business functions, where communication breaks down, and what workflows you need your team to manage with greater clarity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
            <Link
              to="/contact?service=business-systems"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-xl group"
            >
              <span>Discuss Operational Requirements</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="mailto:contact@mayaasolutions.in?subject=Business%20Systems%20Inquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-neutral-950 text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
            >
              contact@mayaasolutions.in
            </a>
          </div>

          {/* Internal links to other core capabilities */}
          <div className="pt-8 border-t border-neutral-900 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-neutral-500 uppercase tracking-wider">
            <span>Also explore:</span>
            <Link to="/our-work" className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4">
              Selected Work & Case Studies →
            </Link>
            <Link to="/brand" className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4">
              Brand Building & Positioning →
            </Link>
            <Link to="/websites" className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4">
              Websites & Digital Experiences →
            </Link>
          </div>
        </section>

      </main>
    </>
  );
};
