import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown,
  CheckCircle2,
  Building2, 
  Layers, 
  MessageSquare,
  Sparkles,
  Users,
  Compass,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  FileText,
  Clock,
  ChevronRight,
  ChevronDown,
  Lock,
  Cpu,
  CreditCard,
  Workflow,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const UAE_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for UAE businesses from India without an on-the-ground local office?',
    answer:
      'We collaborate directly with UAE managing directors, business owners, and operations leads across Dubai, Abu Dhabi, and the wider Emirates via scheduled Gulf Standard Time (GST) overlap, asynchronous video reviews, and structured milestones. With only a 1.5-hour timezone difference between the UAE (UTC+4) and our India technology studio (UTC+5:30), our working days align almost completely. We do not claim physical branch offices where we do not have them. By anchoring senior engineering in India, we provide direct principal-to-engineer communication with exceptional speed and zero inflated local agency overhead.',
  },
  {
    question: 'Can your business systems integrate with WhatsApp Business and our current workflow?',
    answer:
      'Yes. In the UAE, particularly in commercial hubs like Dubai and Abu Dhabi, WhatsApp is the dominant business communication channel. We engineer tailored connectors using the official WhatsApp Business Cloud API to capture incoming inquiries, assign them to team members, trigger automated follow-up cadences, and log conversations directly into your centralized client workspace, eliminating lost messages and unassigned leads.',
  },
  {
    question: 'How do you ensure data confidentiality and infrastructure security for UAE companies?',
    answer:
      'All custom business management systems and client software are deployed directly on client-owned cloud infrastructure (such as AWS UAE / Bahrain, Microsoft Azure UAE Central, or client-specified private virtual servers). Mayaa does not retain, process, or monetize your company or client data. You retain 100% intellectual property ownership of all custom code and complete data sovereignty under binding non-disclosure agreements.',
  },
  {
    question: 'How are commercial agreements and invoicing structured for UAE businesses?',
    answer:
      'We quote and invoice transparently in UAE Dirhams (AED) on fixed-scope, milestone-based agreements. Each development phase, from workflow mapping to production deployment, has defined acceptance criteria. Furthermore, our bespoke systems carry zero perpetual per-user software licensing fees, giving your business predictable capital expenditure.',
  },
];

// UAE Target Industry Workflows
const industryWorkflows = [
  {
    id: 'architecture-interiors',
    title: 'ARCHITECTURE & TURNKEY FIT-OUT',
    tagline: 'Design Studios · Interior Fit-Outs · Turnkey Practices',
    image: '/images/industries/architecture.webp',
    quote: 'Manage consultations, enquiries, proposals, BOQ sign-offs, and site variations without losing the thread between client, designer, and project managers.',
    points: [
      'Client consultation intake & scope capture',
      'Design proposal revisions & BOQ sign-offs',
      'Material sample & moodboard approvals',
      'Milestone-based project billing & site variations',
    ],
  },
  {
    id: 'construction-fitout',
    title: 'CONSTRUCTION & CONTRACTING',
    tagline: 'General Contractors · Commercial Fit-Outs · Site Operations',
    image: '/images/industries/construction.jpg',
    quote: 'Keep tender enquiries, quotations, site activity, project progress, sub-trades, and client follow-ups tightly connected.',
    points: [
      'Tender enquiries & fast quotation pipeline',
      'Subcontractor & site engineer allocation',
      'Site milestone updates & daily progress logs',
      'Client variations & snag-list tracking to handover',
    ],
  },
  {
    id: 'building-materials-b2b',
    title: 'BUILDING MATERIALS & INDUSTRIAL B2B',
    tagline: 'Material Suppliers · Industrial Equipment · Wholesalers',
    image: '/images/industries/manufacturing.jpg',
    quote: 'Turn high-volume enquiries into disciplined sales pipelines, with automated lead assignment, quote revision control, and customer accounts in one place.',
    points: [
      'Specification enquiries from architects & contractors',
      'Lead assignment across sales representatives',
      'Custom quotation generator & revision history',
      'Client accounts, volume pricing & dispatch status',
    ],
  },
  {
    id: 'real-estate',
    title: 'REAL ESTATE BROKERAGES & DEVELOPERS',
    tagline: 'Developers · Advisory Firms · Luxury Brokerages',
    image: '/images/industries/real-estate.webp',
    quote: 'Keep inbound portal leads, property viewings, agent follow-ups, and negotiation notes organized as your inventory and deal pipeline grow.',
    points: [
      'Centralised incoming leads from portals & campaigns',
      'Agent allocation, deal stages & negotiation notes',
      'Off-plan & secondary inventory tracking',
      'Client viewing logs & automated follow-up reminders',
    ],
  },
  {
    id: 'hospitality-venues',
    title: 'HOSPITALITY, HOTELS & VENUES',
    tagline: 'Boutique Hotels · F&B Groups · Event Destinations',
    image: '/images/industries/hospitality.webp',
    quote: 'Deliver a distinguished digital experience while keeping private event enquiries, reservations, and multi-venue operations synchronized.',
    points: [
      'Brand digital storefront that conveys international polish',
      'Private dining, event & group enquiry workflows',
      'Multi-channel reservations & guest communication',
      'Operational coordination between front-of-house & logistics',
    ],
  },
  {
    id: 'premium-services-clinics',
    title: 'PREMIUM SERVICES & SPECIALIST CLINICS',
    tagline: 'Aesthetic Clinics · Corporate Advisory · Specialized Consultancies',
    image: '/images/industries/clinic.jpg',
    quote: 'Build a digital presence that reflects the premium caliber of your service, backed by operational systems that support discreet, high-value client care.',
    points: [
      'Distinguished visual presentation that establishes immediate authority',
      'Consultation intake & confidential qualification',
      'Appointment scheduling & practitioner calendar visibility',
      'Post-consultation follow-up & client care pathways',
    ],
  },
];

// Core Management System Flow
const systemFlow = [
  {
    step: '01',
    stage: 'LEADS',
    flow: 'Website → WhatsApp → Referrals → Single Inbox',
    description: 'Capture inbound interest from WhatsApp Business, web forms, and referrals into a unified qualified inbox. No missing contact details or unassigned chats.',
  },
  {
    step: '02',
    stage: 'SALES',
    flow: 'Assignment → Follow-up → Quotation → Negotiation',
    description: 'Automatically route enquiries to account leads. Set structured follow-up cadences, generate professional quotations, and track revision history.',
  },
  {
    step: '03',
    stage: 'CLIENTS',
    flow: 'Requirements → Communication → Single Record',
    description: 'Every interaction, signed proposal, technical specification, and client preference is organized under one permanent company profile.',
  },
  {
    step: '04',
    stage: 'PROJECTS',
    flow: 'Planning → Execution → Milestones → Handover',
    description: 'Track site milestones, design deliverables, material orders, scope variations, and client sign-offs in real time without digging through chat groups.',
  },
  {
    step: '05',
    stage: 'TEAM',
    flow: 'Tasks → Responsibilities → Deadlines → Accountability',
    description: 'Role-based task management with transparent ownership. Designers, project engineers, site supervisors, and sales reps know exact daily priorities.',
  },
  {
    step: '06',
    stage: 'MANAGEMENT',
    flow: 'Reports → Performance → Pipeline Visibility → Decisions',
    description: 'Executive dashboards showing active pipeline value, conversion velocity, team workload, project bottlenecks, and real revenue visibility.',
  },
];

export const DubaiMarketPage: React.FC = () => {
  const [activeFrictionTab, setActiveFrictionTab] = useState<'whatsapp' | 'handoffs' | 'management'>('whatsapp');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: UAE_FAQS.map((faq) => ({
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
    { name: 'UAE', urlPath: '/global-markets/uae' },
  ]);

  return (
    <>
      <SEO
        title="Business Management Systems & Digital Solutions UAE | Mayaa Solutions"
        description="Mayaa Solutions helps businesses across the UAE build stronger brands, high-clarity digital experiences, and custom business management systems. Serving companies in Dubai, Abu Dhabi, and across the Emirates."
        keywords="Mayaa Solutions UAE, business management systems UAE, brand building agency UAE, website development UAE, digital solutions UAE, growth management UAE, business management systems Dubai, brand building agency Dubai, website development Dubai, digital solutions Dubai, business systems Dubai, custom CRM UAE"
        canonicalUrl="https://mayaasolutions.in/global-markets/uae"
        ogImage="/images/uae-commercial-hero.jpg"
        schema={[breadcrumbSchema, faqSchema]}
      />

      <main className="min-h-screen bg-[#07090E] text-[#F3F4F6] selection:bg-[#F59E0B] selection:text-black font-sans antialiased overflow-x-hidden pt-24 sm:pt-28 md:pt-32">

        {/* ==================================================
            01. HERO SECTION: COMMERCIAL VELOCITY & CLARITY
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
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D97706]/30 bg-[#1C160C] text-xs font-mono text-[#FCD34D] uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
                  UAE · Commercial Velocity
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.05]"
              >
                Built around how your <br />
                <span className="font-medium text-white">UAE business</span> <br />
                <span className="italic text-[#FCD34D]">actually works.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-base sm:text-xl text-[#9CA3AF] font-light leading-relaxed max-w-2xl"
              >
                From the first inquiry to the signed milestone handover, Mayaa builds the brand identity, high-conversion digital experiences, and bespoke management systems that give fast-moving UAE enterprises—across Dubai, Abu Dhabi, and beyond—complete operational control.
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
                    className="px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-[#E5E7EB]"
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
                  href="#systems"
                  className="min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white border border-white/20 hover:border-white/50 font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-300"
                >
                  <span>See What We Build</span>
                  <ArrowDown className="w-3.5 h-3.5 text-white/60" />
                </a>
              </motion.div>
            </div>

            {/* Right Editorial Dubai Commercial Visual */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl"
              >
                <img
                  src="/images/uae-commercial-hero.jpg"
                  alt="Modern commercial and architectural landscape in the UAE"
                  className="w-full h-auto aspect-[4/3] object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono text-[#CBD5E1]">
                  <span className="uppercase tracking-wider text-white">COMMERCIAL VELOCITY</span>
                  <span className="text-[#FCD34D]">UAE · DUBAI & ABU DHABI</span>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ==================================================
            02. UAE COMMERCIAL REALITY: THE WHATSAPP DISCONNECT (WHITE)
        ================================================== */}
        <section className="w-full bg-white text-[#171717] border-b border-[#E5E5E2] py-20 sm:py-28 lg:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-14 sm:space-y-16">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B45309] font-medium block">
                UAE Commercial Reality
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#171717] tracking-tight leading-[1.08]">
                WhatsApp is convenient. <br />
                <span className="text-[#555555] italic">It is not a business management system.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
                Across the UAE's high-speed commercial landscape, client conversations happen in seconds. But when deals scale across Dubai, Abu Dhabi, and regional markets, informal messaging without structured systems turns velocity into operational bottlenecks.
              </p>
            </div>

            {/* Interactive Friction Diagnosis Explorer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left: The Realistic Chain of Events */}
              <div className="lg:col-span-7 p-8 sm:p-10 border border-[#E5E5E2] bg-[#FAFAF9] rounded-sm space-y-6">
                <div className="flex items-center justify-between border-b border-[#E5E5E2] pb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#666666] font-medium">
                    How information fragments across daily operations:
                  </span>
                  <span className="text-[10px] font-mono text-[#B45309] font-semibold">REALITY AUDIT</span>
                </div>

                <div className="space-y-3.5">
                  {[
                    'A prospective client reaches out through WhatsApp or an Instagram introduction.',
                    'A sales lead responds, shares a PDF profile, and promises a fast quote.',
                    'A commercial quote is drafted in an offline spreadsheet and sent over chat.',
                    'Follow-up is forgotten because ten new incoming inquiries push the thread down.',
                    'Another tender arrives through the website and sits in a general email inbox.',
                    'A project manager on site approves a scope variation verbally over the phone.',
                    'The business owner asks the team for a status summary across eight active client accounts.',
                    'Vital information is scattered across personal phones, spreadsheets, inboxes, and memory.',
                  ].map((line, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-3 rounded bg-white border border-[#E5E5E2]">
                      <span className="w-5 h-5 rounded-full bg-[#F0F0EE] border border-[#E5E5E2] text-[10px] font-mono font-medium text-[#B45309] flex items-center justify-center shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-[#333333] font-normal leading-relaxed">
                        {line}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: The Solution Architecture */}
              <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                <div className="p-8 sm:p-10 border border-[#E5E5E2] bg-[#FAFAF9] rounded-sm space-y-6">
                  <div className="space-y-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#B45309] font-medium block">
                      The Operational Turning Point
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-light text-[#171717] leading-snug">
                      Growth creates complexity. <br />
                      <span className="text-[#555555] italic">Your system should create control.</span>
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-light">
                    Scaling across the UAE should mean larger contracts and higher margins, not having leadership chase five people to find the status of one invoice or delivery milestone.
                  </p>
                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-light">
                    Mayaa builds the bespoke operational layer: capturing incoming interest, coordinating team responsibilities, and giving business leaders continuous visibility.
                  </p>

                  <div className="pt-6 border-t border-[#E5E5E2]">
                    <div className="text-xs font-mono text-[#B45309] font-semibold mb-1">THE MAYAA STANDARD:</div>
                    <p className="text-xs font-mono text-[#666666] leading-relaxed">
                      Zero lost leads. Explicit task ownership. Real-time project margins. Complete client record sovereignty.
                    </p>
                  </div>
                </div>

                <div className="p-6 border border-[#E5E5E2] bg-[#F0F0EE] rounded-sm flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#666666] block font-medium">
                      CONFIDENTIAL REVIEW
                    </span>
                    <span className="text-sm font-medium text-[#171717] block">
                      Map where your business loses visibility
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="p-3 bg-[#111111] text-white hover:bg-neutral-800 transition-colors shrink-0 rounded-xs"
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
        <section id="systems" className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto border-b border-white/[0.08]">
          <div className="space-y-6 max-w-4xl mb-14 sm:mb-20">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#F59E0B]">
              Core Capability · Bespoke Engineering
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Personalised business <br />
              <span className="text-[#9CA3AF] italic">management systems.</span>
            </h2>
            <p className="text-base sm:text-xl text-[#9CA3AF] font-light leading-relaxed pt-2">
              Software built around the way your company actually works. Not generic off-the-shelf software with bloated subscription fees, but an owned operational foundation tailored for UAE businesses managing multiple clients, teams, and high-value projects.
            </p>
          </div>

          {/* 6 Core Stages Flow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {systemFlow.map((item) => (
              <div
                key={item.step}
                className="p-8 border border-white/10 bg-white/[0.01] hover:border-white/30 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#F59E0B]">STAGE {item.step}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-[#F59E0B] transition-colors" />
                  </div>

                  <h3 className="text-2xl font-light text-white tracking-wide">
                    {item.stage}
                  </h3>

                  <div className="p-2.5 bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-[#FCD34D]">
                    {item.flow}
                  </div>

                  <p className="text-sm text-[#9CA3AF] font-light leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#9CA3AF]">
                  <span>Connected Workflow</span>
                  <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy Statement */}
          <div className="mt-12 p-8 sm:p-12 border border-white/10 bg-white/[0.02] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] block">
                No Pre-Packaged SaaS Lock-In
              </span>
              <h4 className="text-xl sm:text-2xl font-light text-white">
                Software should adapt to your business. <br />
                <span className="text-[#9CA3AF] italic">Not the other way around.</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#9CA3AF] font-light leading-relaxed">
                Whether you operate an interior fit-out firm handling 15 active sites, a luxury brokerage with 20 property consultants, or a building material supply house handling 80 daily RFQs, our systems are built around your exact hierarchy and workflows.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                to="/business-systems"
                className="min-h-[50px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-[#E5E7EB] transition-colors"
              >
                <span>Explore Business Systems</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================================
            04. DUBAI TARGET BUSINESSES & INDUSTRY WORKFLOWS
        ================================================== */}
        <section className="bg-white text-[#171717] border-b border-[#E5E5E2] py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-14 sm:space-y-16">
            
            <div className="max-w-3xl space-y-4">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#B45309]">
                Sector Realities
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#171717] tracking-tight leading-[1.08]">
                Different businesses. <br />
                <span className="text-[#555555] italic">Different operating rhythms.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed pt-2">
                We tailor systems for enterprises where leads represent significant revenue, sales cycles demand disciplined follow-up, and execution requires transparent accountability across distributed teams.
              </p>
            </div>

            {/* 6 Industry Cards with Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {industryWorkflows.map((ind) => (
                <div
                  key={ind.id}
                  className="border border-[#E5E5E2] bg-[#FAFAF9] overflow-hidden flex flex-col justify-between hover:border-[#CCCCCC] transition-all group"
                >
                  <div>
                    {/* Industry Context Visual */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 border-b border-[#E5E5E2]">
                      <img
                        src={ind.image}
                        alt={ind.title}
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="text-[10px] font-mono text-[#FCD34D] uppercase tracking-widest bg-black/80 px-2.5 py-1 rounded">
                          {ind.tagline}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 sm:p-8 space-y-4">
                      <h3 className="text-lg font-medium text-[#171717] tracking-wide">
                        {ind.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#444444] font-light leading-relaxed italic border-l-2 border-[#D97706] pl-3">
                        “{ind.quote}”
                      </p>

                      <div className="space-y-2 pt-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#666666] block">
                          Tailored Workflows:
                        </span>
                        <ul className="space-y-1.5">
                          {ind.points.map((pt, pIdx) => (
                            <li key={pIdx} className="text-xs text-[#555555] font-light flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-[#D97706] mt-1.5 shrink-0" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 pt-0">
                    <Link
                      to="/contact"
                      className="w-full py-3 px-4 bg-white hover:bg-[#111111] text-[#171717] hover:text-white text-xs font-mono uppercase tracking-wider flex items-center justify-between border border-[#E5E5E2] transition-colors"
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
            05. ENGINEERING ENGINE & DELIVERY MODEL
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#F59E0B]">
              Delivery Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Senior engineering depth. <br />
              <span className="text-[#9CA3AF] italic">UAE commercial velocity.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed">
              We deliver for UAE enterprises directly from our technology studio in India. We do not pretend to maintain costly branch offices where we do not have them. Instead, we invest in senior engineering capability, immediate Gulf Standard Time alignment, and complete client cloud sovereignty.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 border border-white/10 bg-white/[0.01]">
                <Clock className="w-5 h-5 text-[#F59E0B] mb-4" />
                <h3 className="text-sm font-medium text-white mb-2">GST Timezone Alignment</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Only 1.5 hours difference between the UAE (UTC+4) and our India studio (UTC+5:30). Full daily working-hour overlap for sprint reviews and live collaboration.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.01]">
                <Cpu className="w-5 h-5 text-[#F59E0B] mb-4" />
                <h3 className="text-sm font-medium text-white mb-2">Direct Senior Access</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Work directly with system architects and design principals. No non-technical account managers or miscommunicated handoffs.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.01]">
                <Lock className="w-5 h-5 text-[#F59E0B] mb-4" />
                <h3 className="text-sm font-medium text-white mb-2">Client Cloud Sovereignty</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  All systems deployed on client-owned cloud accounts (AWS UAE/Bahrain or dedicated VPS) with 100% intellectual property ownership and strict NDAs.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.01]">
                <CreditCard className="w-5 h-5 text-[#F59E0B] mb-4" />
                <h3 className="text-sm font-medium text-white mb-2">AED Milestone Billing</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Transparent fixed-scope proposals quoted and invoiced in UAE Dirhams (AED) tied to verified deliverable milestones with zero recurring user license fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            06. FREQUENTLY ASKED QUESTIONS
        ================================================== */}
        <section className="bg-white text-[#171717] border-b border-[#E5E5E2] py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#B45309] mb-4">
                Clarity & Due Diligence
              </div>
              <h2 className="text-3xl sm:text-5xl font-light text-[#171717] leading-tight mb-4">
                Questions UAE executives ask.
              </h2>
              <p className="text-base text-[#555555] font-light">
                Straightforward answers regarding delivery model, WhatsApp integrations, data security, and commercial structure across the Emirates.
              </p>
            </div>

            <div className="space-y-4">
              {UAE_FAQS.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="border border-[#E5E5E2] bg-[#FAFAF9] overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F0F0EE] transition-colors"
                  >
                    <span className="text-base sm:text-lg font-light text-[#171717]">
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

        {/* ==================================================
            07. FINAL CTA: BUSINESS CONSULTATION
        ================================================== */}
        <section className="py-28 sm:py-36 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-block px-3.5 py-1.5 bg-[#1C160C] border border-[#D97706]/30 text-xs font-mono text-[#FCD34D] uppercase tracking-widest">
              UAE Consultation
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.05]">
              Let’s understand how <br />
              <span className="font-normal italic text-[#9CA3AF]">your business actually works.</span>
            </h2>

            <div className="space-y-3 text-base sm:text-xl text-[#9CA3AF] font-light leading-relaxed max-w-2xl mx-auto">
              <p>Tell us how you currently manage inquiries, client negotiations, project handoffs, and teams.</p>
              <p className="text-[#D1D5DB]">
                We'll identify where your business is losing time, visibility, or revenue, and outline exactly what could be engineered to support your growth.
              </p>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-9 sm:px-10 py-4 bg-white text-black font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-[#E5E7EB] transition-all duration-300 shadow-2xl group"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/global-markets"
                className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-9 sm:px-10 py-4 bg-transparent text-white border border-white/20 hover:border-white/50 font-medium text-xs sm:text-sm uppercase tracking-wider transition-all"
              >
                <span>Explore Global Markets</span>
              </Link>
            </div>

            <div className="pt-8 text-xs font-mono text-white/40 tracking-wider">
              Serving enterprises across Dubai, Abu Dhabi, and throughout the United Arab Emirates.
            </div>
          </div>
        </section>

      </main>
    </>
  );
};
