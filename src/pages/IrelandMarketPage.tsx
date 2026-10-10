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
  HeartHandshake,
  UserCheck,
  Cpu,
  Database
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const IRELAND_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for Irish businesses from Bangalore without an on-the-ground presence in Dublin or Cork?',
    answer:
      'We work directly with Irish managing directors, operations partners, and commercial leads through convenient GMT/IST overlapping windows (only a 4.5 to 5.5-hour timezone difference). Live sprint demos and planning sessions occur during Irish mornings and core working hours, complemented by direct Slack/Teams access and collaborative Figma boards. We do not manufacture claims of physical offices on Silicon Docks or Grand Canal Square where we do not have them. By anchoring technical engineering at our Bangalore headquarters, we provide direct principal-to-engineer communication with exceptional rigor and without Dublin agency price premiums.',
  },
  {
    question: 'How do you handle Irish and EU data privacy, GDPR, and host jurisdiction?',
    answer:
      'All custom business systems, databases, and client portals are deployed directly onto client-owned cloud infrastructure located in European regions, including AWS Ireland (eu-west-1), Microsoft Azure Ireland (North Europe), or dedicated European private clouds. Mayaa never owns, mines, or monetizes client data. Systems are built with role-based access control (RBAC), multi-factor authentication, and strict compliance with the Data Protection Commission (DPC) guidelines.',
  },
  {
    question: 'Can your business systems integrate with Irish and European accounting tools like Xero, Sage, or Big Red Cloud?',
    answer:
      'Yes. Our guiding philosophy is to make the business easier to run without disrupting what works. We build secure REST API bridges and webhook connectors linking your pipeline, project milestones, and client accounts directly into tools like Xero, Sage, QuickBooks, or Big Red Cloud, preventing manual duplicate entry.',
  },
  {
    question: 'How are commercial agreements and invoicing structured for Irish companies?',
    answer:
      'Engagements are contracted on fixed-scope, milestone-based terms and invoiced transparently in Euros (EUR). Each phase has unambiguous acceptance criteria. Upon completion, 100% intellectual property ownership of the source code transfers to your company, with zero ongoing per-seat SaaS license fees.',
  },
];

export const IrelandMarketPage: React.FC = () => {
  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: IRELAND_FAQS.map((faq) => ({
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
    { name: 'Ireland', urlPath: '/global-markets/ireland' },
  ]);
  // 5 Concise Irish Industry Categories
  const irelandIndustries = [
    {
      id: 'construction-property',
      title: 'CONSTRUCTION & PROPERTY',
      tagline: 'Main Contractors · Quantity Surveyors · Commercial Fit-Out',
      image: '/images/industries/construction.jpg',
      quote: 'Manage enquiries, estimates, projects, teams, schedules and client communication through one clearer workflow.',
    },
    {
      id: 'architecture-interiors',
      title: 'ARCHITECTURE & INTERIORS',
      tagline: 'Consultancies · Design Studios · Project Practices',
      image: '/images/industries/architecture.webp',
      quote: 'Connect consultations, proposals, approvals, projects and client communication without losing information between stages.',
    },
    {
      id: 'professional-services',
      title: 'PROFESSIONAL SERVICES',
      tagline: 'Advisory · Legal & Accounting · Specialist Consultants',
      image: '/images/industries/clinic.jpg',
      quote: 'Create a clearer path from enquiry to delivery while giving your team better visibility over clients and ongoing work.',
    },
    {
      id: 'technology-b2b',
      title: 'TECHNOLOGY & B2B',
      tagline: 'Software Companies · Technical Services · Equipment Suppliers',
      image: '/images/industries/manufacturing.jpg',
      quote: 'Organise leads, sales pipelines, customer relationships, proposals and follow-ups as the business grows.',
    },
    {
      id: 'hospitality-customer-led',
      title: 'HOSPITALITY & CUSTOMER-LED',
      tagline: 'Hotels · Culinary Destinations · Premium Event Venues',
      image: '/images/industries/hospitality.webp',
      quote: 'Create a better digital customer experience while making the operations behind it easier to manage.',
    },
  ];

  // The 6-Stage Clean Process Flow
  const systemFlow = [
    {
      step: '01',
      stage: 'ENQUIRY',
      flow: 'Direct Website · Calls · Introductions · Email',
      desc: 'Capture every inbound enquiry and client referral into one shared queue so no opportunity is forgotten.',
    },
    {
      step: '02',
      stage: 'SALES',
      flow: 'Scoping · Follow-up · Clear Quotation · Agreement',
      desc: 'Keep track of conversations, deliver clear pricing proposals quickly, and know exactly what has been promised.',
    },
    {
      step: '03',
      stage: 'CLIENT',
      flow: 'Requirements · Key Contacts · Contracts · Notes',
      desc: 'One shared home for customer context, past agreements, and key details so the relationship stays personal.',
    },
    {
      step: '04',
      stage: 'PROJECT',
      flow: 'Milestones · Tasks · Deadlines · Deliverables',
      desc: 'Keep project handoffs clear, deliverables on schedule, and team responsibilities transparent from day one.',
    },
    {
      step: '05',
      stage: 'TEAM',
      flow: 'Ownership · Clear Approvals · Accountabilities',
      desc: 'Give the team clear roles and workflows so projects move smoothly without needing the owner to approve every step.',
    },
    {
      step: '06',
      stage: 'MANAGEMENT',
      flow: 'Overview · Real Progress · Practical Decisions',
      desc: 'Get an honest, real-time picture of work in progress, pipeline health, and team capacity at a glance.',
    },
  ];

  return (
    <>
      <SEO
        title="Brand, Digital Experiences & Business Systems for Ireland | Mayaa Solutions"
        description="Make the business easier to run. Mayaa builds brands, digital experiences and personalised business systems for growing businesses in Ireland that value relationships, reputation and operational clarity."
        keywords="Ireland business software, Irish businesses software, custom business software Ireland, business management systems Ireland, custom CRM Ireland, website design Ireland, branding Ireland, digital experience Ireland, business software Dublin, business software Cork, business software Galway, construction business systems Ireland, architecture business systems Ireland, professional services software Ireland, B2B business systems Ireland, Mayaa Solutions Ireland"
        canonicalUrl="https://mayaasolutions.in/global-markets/ireland"
        schema={[breadcrumbSchema, faqSchema]}
      />

      <div className="bg-[#0A0D12] text-[#F3F4F6] min-h-screen selection:bg-white selection:text-black font-sans antialiased">

        {/* 1. HERO SECTION */}
        <section className="relative min-h-[88vh] flex items-center justify-center pt-32 pb-24 px-6 md:px-12 border-b border-white/[0.08] overflow-hidden">
          {/* Subtle architectural atmosphere */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-luminosity">
            <img 
              src="/images/ireland-commercial-hero.jpg" 
              alt="Contemporary Irish Commercial Architecture & Modern Workspaces" 
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
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF] font-medium">
                Ireland Market · Brand & Business Systems
              </span>
            </motion.div>

            {/* Confident Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.1] mb-8"
            >
              Make the business <br className="hidden sm:inline" />
              <span className="font-normal italic text-white/95">easier to run.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              Mayaa builds brands, digital experiences and personalised business systems for growing businesses in Ireland.
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

        {/* 2. CORE IRELAND BUSINESS INSIGHT */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-bold">
              The Reality of Growth
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-8">
              Growth adds <br />
              <span className="text-[#666666]">more moving parts.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mt-12">
              <div className="md:col-span-7 space-y-6 text-[#555555] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  A customer calls. Another enquiry arrives through the website. Someone replies by email. A quote is sent. The client follows up. A team member has the latest information. A project starts. The owner needs an update.
                </p>
                <p>
                  The business is busy and doing well. But the information needed to keep things running is spread across email, spreadsheets, WhatsApp threads, phone calls, documents and individual heads.
                </p>
                <div className="p-6 border-l-2 border-[#171717] bg-[#FAFAF9] text-[#171717] font-normal text-lg sm:text-xl">
                  “Your business may be organised. <br className="hidden sm:inline" />
                  <span className="text-[#666666]">Your information may not be.”</span>
                </div>
              </div>

              <div className="md:col-span-5 bg-[#FAFAF9] border border-[#E5E5E2] p-8 rounded-sm space-y-6">
                <div className="text-xs uppercase tracking-[0.2em] text-[#171717] font-mono font-medium flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-[#171717]" />
                  Where Everyday Time Gets Lost
                </div>
                <ul className="space-y-4 text-sm text-[#555555] font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-[#171717] font-mono text-xs mt-0.5 font-bold">01</span>
                    <span>Chasing team members to find out what was agreed on a call or email.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#171717] font-mono text-xs mt-0.5 font-bold">02</span>
                    <span>Double-checking spreadsheets to see if an estimate was sent or accepted.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#171717] font-mono text-xs mt-0.5 font-bold">03</span>
                    <span>Every key operational question having to run through the owner or manager.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#171717] font-mono text-xs mt-0.5 font-bold">04</span>
                    <span>Important customer details and project notes lost when handoffs happen.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. RELATIONSHIPS + DIGITAL */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Human-Centric Technology
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              Technology should support the relationships <br />
              <span className="text-[#9CA3AF]">that built the business.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6 text-[#9CA3AF] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  In Ireland, reputation and relationships are everything. Word-of-mouth brings the best clients, and responsiveness is what keeps them.
                </p>
                <p>
                  Technology shouldn't replace the human touch with cold forms or robotic automation. Good systems simply make it easier for your team to respond faster, remember important client preferences, follow up properly, and give every customer a consistent experience.
                </p>
                <div className="text-white font-medium text-lg sm:text-xl pt-2">
                  “Better systems should make your business feel more personal, not less.”
                </div>
              </div>

              <div className="md:col-span-5 bg-white/[0.02] border border-white/10 p-8 rounded-sm space-y-5">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70 font-mono flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-white" />
                  What Customers Actually Experience
                </div>
                <div className="space-y-4 text-sm text-[#9CA3AF] font-light">
                  <div className="border-b border-white/[0.06] pb-3">
                    <span className="text-white font-medium block mb-1">Fast, clear responses</span>
                    <span>No enquiries falling through the cracks or waiting days for a callback.</span>
                  </div>
                  <div className="border-b border-white/[0.06] pb-3">
                    <span className="text-white font-medium block mb-1">Total continuity</span>
                    <span>Any colleague can step into a client conversation without asking them to repeat themselves.</span>
                  </div>
                  <div>
                    <span className="text-white font-medium block mb-1">Kept commitments</span>
                    <span>Proposals, milestones and deliverables handled on schedule without constant chasing.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. BRAND + DIGITAL EXPERIENCE */}
        <section id="what-we-build" className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-bold">
              Reputation & Perception
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-8">
              Your reputation starts <br />
              <span className="text-[#666666]">before the first conversation.</span>
            </h2>

            <p className="text-lg text-[#555555] font-light max-w-3xl leading-relaxed mb-16">
              When prospective clients hear about you, they look you up. Your visual identity, website, presentation and digital touchpoints should tell the same story and show the caliber of work you actually deliver.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 sm:p-10 border border-[#E5E5E2] bg-[#FAFAF9] flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#666666] font-mono mb-4 flex items-center gap-2 font-bold">
                    <Sparkles className="w-4 h-4 text-[#171717]" />
                    Identity & Presentation
                  </div>
                  <h3 className="text-2xl font-light text-[#171717] mb-4">
                    Brand identity that builds trust.
                  </h3>
                  <p className="text-[#555555] text-sm sm:text-base font-light leading-relaxed mb-6">
                    A clean, confident identity that communicates credibility without fluff. From your visual language to your sales decks and project documentation.
                  </p>
                  <div className="space-y-2 pt-4 border-t border-[#E5E5E2] text-xs text-[#171717] font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                      <span>Cohesive visual branding & corporate identity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                      <span>Professional tender, pitch and proposal design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                      <span>Clear, human messaging that speaks directly to clients</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-[#E5E5E2] text-sm text-[#171717] font-medium">
                  “Good business is easy to trust.”
                </div>
              </div>

              <div className="p-8 sm:p-10 border border-[#E5E5E2] bg-[#FAFAF9] flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#666666] font-mono mb-4 flex items-center gap-2 font-bold">
                    <Layers className="w-4 h-4 text-[#171717]" />
                    Website & Customer Journey
                  </div>
                  <h3 className="text-2xl font-light text-[#171717] mb-4">
                    Websites built to win the right work.
                  </h3>
                  <p className="text-[#555555] text-sm sm:text-base font-light leading-relaxed mb-6">
                    A good website doesn't just look professional. It makes it easy for the right customer to understand your capabilities, see your work, and get in touch.
                  </p>
                  <div className="space-y-2 pt-4 border-t border-[#E5E5E2] text-xs text-[#171717] font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                      <span>Fast, mobile-first web engineering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                      <span>Project and case study showcases that prove your track record</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                      <span>Frictionless enquiry pathways directly connected to your team</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-[#E5E5E2] text-sm text-[#171717] font-medium">
                  “Makes it easier for the right customer to choose you.”
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PERSONALISED BUSINESS MANAGEMENT SYSTEM */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Bespoke Software Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-4">
              PERSONALISED BUSINESS <br />
              <span className="text-[#9CA3AF]">MANAGEMENT SYSTEM</span>
            </h2>
            <p className="text-xl text-white font-light mb-4">
              Built around your business. Not the other way around.
            </p>
            <p className="text-[#9CA3AF] text-base sm:text-lg font-light max-w-3xl leading-relaxed mb-16">
              We first understand how your business gets enquiries, manages customers, sells work, delivers projects and manages people. Then we build the system around that workflow.
            </p>

            {/* The 6-Stage Process Flow */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemFlow.map((item, idx) => (
                <div 
                  key={item.step}
                  className="p-8 border border-white/10 bg-white/[0.02] rounded-sm hover:border-white/30 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-white/50">{item.step}</span>
                      <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-white/5 text-[#9CA3AF]">
                        Stage {idx + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-light text-white mb-2 tracking-wide">
                      {item.stage}
                    </h3>
                    <div className="text-xs font-mono text-white/70 mb-4 pb-3 border-b border-white/[0.06]">
                      {item.flow}
                    </div>
                    <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 border border-white/10 bg-white/[0.02] text-center max-w-xl mx-auto">
              <p className="text-base text-white font-light">
                “Clearer ownership. Less repetition. <br />
                <span className="text-[#9CA3AF]">Better visibility across the entire business.”</span>
              </p>
            </div>
          </div>
        </section>

        {/* 6. IRELAND INDUSTRY SECTION */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-bold">
              Sector Relevance
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-6">
              Built for how Irish businesses <br />
              <span className="text-[#666666]">actually work.</span>
            </h2>
            <p className="text-[#555555] text-base sm:text-lg font-light max-w-2xl leading-relaxed mb-16">
              From commercial contractors and consultancies in Dublin and Cork to specialist practices across Galway, Limerick and Waterford.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {irelandIndustries.map((ind, i) => (
                <div 
                  key={ind.id}
                  className={`p-8 border border-[#E5E5E2] bg-[#FAFAF9] flex flex-col justify-between rounded-sm ${
                    i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#666666] mb-3 font-bold">
                      {ind.tagline}
                    </div>
                    <h3 className="text-xl font-light text-[#171717] mb-4">
                      {ind.title}
                    </h3>
                    <p className="text-sm text-[#555555] font-light leading-relaxed">
                      {ind.quote}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[#E5E5E2] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#666666]">Custom Workflow</span>
                    <Link to="/contact" className="text-xs text-[#171717] hover:text-black font-medium flex items-center gap-1">
                      Discuss Requirements <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. GROWTH / OWNER DEPENDENCY & PRACTICAL TECH */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Scaling Without Stress
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-6">
              The business shouldn't live <br />
              <span className="text-[#9CA3AF]">in the owner's head.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-16">
              When too much operational knowledge sits with one person, growth becomes exhausting. The right system makes information visible, responsibilities clearer, and processes easy for the team to run independently.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3 text-white font-medium text-lg mb-4">
                  <UserCheck className="w-5 h-5 text-white/70" />
                  Build for the business you're becoming
                </div>
                <p className="text-[#9CA3AF] text-sm sm:text-base font-light leading-relaxed mb-6">
                  A process that works with five people can break with fifteen. A spreadsheet that worked for ten clients becomes a bottleneck with fifty. Good systems give the business room to grow without adding administrative weight.
                </p>
                <div className="text-xs font-mono text-white/80 pt-4 border-t border-white/[0.06]">
                  “Build the business so it can work without everything passing through one person.”
                </div>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3 text-white font-medium text-lg mb-4">
                  <Cpu className="w-5 h-5 text-white/70" />
                  Technology should earn its place
                </div>
                <p className="text-[#9CA3AF] text-sm sm:text-base font-light leading-relaxed mb-6">
                  We don't add software just because it exists. More software is not always the answer; better-connected work is. We build only what genuinely solves a problem, with practical AI applied only where it saves real team time.
                </p>
                <div className="text-xs font-mono text-white/80 pt-4 border-t border-white/[0.06]">
                  “AI should remove repetitive work, not be added just because it is fashionable.”
                </div>
              </div>
            </div>

            {/* Subtle Data Handling Note */}
            <div className="mt-12 p-6 border border-white/10 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-white/70" />
                <span className="text-xs sm:text-sm text-[#9CA3AF] font-light">
                  Built with role-based access control, departmental permissions, and secure authentication to keep client records safe.
                </span>
              </div>
              <span className="text-xs font-mono text-white/40 hidden sm:inline">DATA INTEGRITY</span>
            </div>
          </div>
        </section>

        {/* 8. WHY MAYAA */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-bold">
              Working Approach
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-16">
              Understand first. <br />
              <span className="text-[#666666]">Build second.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-[#E5E5E2] bg-[#FAFAF9]">
                <div className="text-xs font-mono text-[#666666] mb-4 font-bold">01 · DISCOVERY</div>
                <h3 className="text-lg font-normal text-[#171717] mb-3">UNDERSTAND</h3>
                <p className="text-sm text-[#555555] font-light leading-relaxed">
                  How the business actually gets work, serves customers, and where time is lost in handoffs and manual tasks.
                </p>
              </div>

              <div className="p-8 border border-[#E5E5E2] bg-[#FAFAF9]">
                <div className="text-xs font-mono text-[#666666] mb-4 font-bold">02 · SIMPLIFY</div>
                <h3 className="text-lg font-normal text-[#171717] mb-3">SIMPLIFY</h3>
                <p className="text-sm text-[#555555] font-light leading-relaxed">
                  Where unnecessary steps and friction can be removed so the workflow is straightforward before any software is built.
                </p>
              </div>

              <div className="p-8 border border-[#E5E5E2] bg-[#FAFAF9]">
                <div className="text-xs font-mono text-[#666666] mb-4 font-bold">03 · PURPOSEFUL BUILD</div>
                <h3 className="text-lg font-normal text-[#171717] mb-3">BUILD</h3>
                <p className="text-sm text-[#555555] font-light leading-relaxed">
                  What technology genuinely needs to do. No unnecessary features, no forced templates, and no technology for the sake of technology.
                </p>
              </div>
            </div>

            {/* Subtle Localisation Reference */}
            <div className="mt-16 text-center text-xs text-[#666666] font-mono tracking-wider">
              From growing businesses in Dublin and Cork to companies across Galway, Limerick and Waterford.
            </div>
          </div>
        </section>

        {/* BANGALORE DELIVERY MODEL FOR IRISH ENTERPRISES */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08] bg-[#0A0E15]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#16A34A] mb-4 font-mono">
              Engineering Delivery
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-6">
              Engineering anchored in Bangalore. <br />
              <span className="text-[#9CA3AF]">Zero Dublin agency overhead.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-16">
              Mayaa delivers brand architecture, web experiences, and bespoke business systems directly from Bangalore, India. We offer direct engineer collaboration, rapid turnarounds, and full EU compliance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-[#16A34A] uppercase tracking-wider mb-2">01 · TIMEZONE OVERLAP</div>
                <h3 className="text-lg font-normal text-white mb-2">GMT / IST Collaboration</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  With a 4.5 to 5.5-hour timezone difference, our working afternoons directly match Irish mornings and core hours for live standups, demos, and reviews.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-[#16A34A] uppercase tracking-wider mb-2">02 · DATA SOVEREIGNTY</div>
                <h3 className="text-lg font-normal text-white mb-2">Irish & EU Cloud Tenancies</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Workflows and data deploy directly to client-owned European cloud infrastructure (AWS Ireland eu-west-1, Azure North Europe), fully compliant with GDPR and DPC regulations.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-[#16A34A] uppercase tracking-wider mb-2">03 · TRANSPARENT TERMS</div>
                <h3 className="text-lg font-normal text-white mb-2">Milestone Billing in EUR</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Fixed-scope milestone contracts invoiced in EUR with complete source code ownership upon sign-off. Zero perpetual software seat licensing fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#16A34A] mb-4 font-mono font-bold">
              Irish Decision-Maker FAQs
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-12">
              Common questions from <br />
              <span className="text-[#666666]">Irish business leaders.</span>
            </h2>

            <div className="space-y-4">
              {IRELAND_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-[#E5E5E2] bg-[#FAFAF9] rounded-sm overflow-hidden transition-colors hover:border-[#CCCCCC]"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 text-[#171717] hover:text-[#16A34A] transition-colors"
                  >
                    <span className="text-base sm:text-lg font-light">{faq.question}</span>
                    <span className="text-xs font-mono text-[#666666] flex-shrink-0">
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
                        className="px-6 pb-6 text-sm text-[#555555] font-light leading-relaxed border-t border-[#E5E5E2] pt-4"
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

        {/* 9. FINAL CTA */}
        <section className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
              Let's make the business <br />
              <span className="font-normal italic">easier to run.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-xl mx-auto mb-10 leading-relaxed">
              Tell us where your business is losing time, clarity or visibility. We'll start by understanding how it works.
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
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-white/[0.05] hover:border-white/40 transition-all duration-300"
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
