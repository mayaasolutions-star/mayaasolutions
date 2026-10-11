import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown,
  Building2, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  Users, 
  ChevronRight,
  ChevronDown,
  Workflow,
  Lock,
  Eye,
  FileCheck2,
  Cpu,
  CreditCard,
  Sliders,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const ABU_DHABI_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for Abu Dhabi organisations from India without an on-the-ground local office?',
    answer:
      'We work directly with Abu Dhabi managing directors, partners, and operational leaders through scheduled Gulf Standard Time (GST) collaboration windows, clear technical documentation, and milestone reviews. With only a 1.5-hour timezone difference between Abu Dhabi (UTC+4) and our India technology studio (UTC+5:30), our teams share continuous working-day overlap. We do not claim local Abu Dhabi offices where we do not have them. By concentrating our senior systems architects and engineers in India, we provide direct principal access with institutional rigor and zero inflated agency overhead.',
  },
  {
    question: 'How do you handle confidentiality, role-based governance, and data sovereignty for Abu Dhabi enterprises?',
    answer:
      'All bespoke business management systems and software architectures are deployed directly onto client-owned cloud infrastructure (such as AWS UAE, Microsoft Azure UAE Central in Abu Dhabi, or client-controlled private servers). Mayaa does not retain, process, or monetize your company or client records. System architectures incorporate strict role-based access control, departmental permission boundaries, and audit logging. Clients retain 100% intellectual property ownership under binding non-disclosure agreements.',
  },
  {
    question: 'Can your systems accommodate multi-entity operations and complex project hierarchies?',
    answer:
      'Yes. Established Abu Dhabi organisations frequently manage parent holding structures, multiple operating subsidiaries, joint-venture project consortia, and distributed site teams. Our custom systems are engineered with modular multi-entity data models, allowing executive leadership to maintain consolidated portfolio oversight while keeping individual entity accounts and project ledgers segregated.',
  },
  {
    question: 'How are commercial agreements and invoicing structured?',
    answer:
      'We quote and invoice transparently in UAE Dirhams (AED) on fixed-scope, milestone-governed contracts. Each phase, from institutional workflow mapping to deployment and handover, is tied to explicit verification criteria. Our bespoke systems carry zero recurring per-user software licensing fees, ensuring predictable capital allocation.',
  },
];

// 5 Concise Abu Dhabi Industry Categories
const abuDhabiIndustries = [
  {
    id: 'construction-contracting',
    title: 'CONSTRUCTION & INFRASTRUCTURE',
    tagline: 'Main Contractors · Infrastructure · Engineering & Fit-Out',
    image: '/images/industries/construction.jpg',
    quote: 'Connect project tenders, sub-trade allocations, site milestones, test certificates, and client sign-offs into one disciplined operational workflow.',
  },
  {
    id: 'architecture-interiors',
    title: 'ARCHITECTURE & GENERAL PLANNING',
    tagline: 'Consultancies · Design Studios · Project Practices',
    image: '/images/industries/architecture.webp',
    quote: 'Bring masterplanning briefs, drawing revisions, consultant coordination, and authority filing logs into one clear institutional record.',
  },
  {
    id: 'real-estate-property',
    title: 'COMMERCIAL REAL ESTATE & ASSETS',
    tagline: 'Commercial Brokerages · Asset Managers · Advisory',
    image: '/images/industries/real-estate.webp',
    quote: 'Organise corporate mandates, institutional investor relationships, property portfolios, and transaction timelines across your team.',
  },
  {
    id: 'b2b-industrial',
    title: 'B2B & INDUSTRIAL ENERGY SERVICES',
    tagline: 'Industrial Suppliers · Energy Services · Equipment Logistics',
    image: '/images/industries/manufacturing.jpg',
    quote: 'Establish a structured sales pipeline from formal technical specification and RFQ intake through multi-round quotation to delivery.',
  },
  {
    id: 'hospitality-premium-services',
    title: 'PREMIUM ADVISORY & PRIVATE OFFICES',
    tagline: 'Executive Consultancies · Private Offices · Destinations',
    image: '/images/industries/hospitality.webp',
    quote: 'Create a distinguished digital presence that reflects institutional stature, supported by discreet internal systems engineered for high-value client engagements.',
  },
];

// The 6-Stage Institutional Workflow
const systemFlow = [
  {
    step: '01',
    stage: 'ENQUIRIES',
    sources: 'Formal RFQs · Direct Referrals · Executive Introductions',
    desc: 'Centralise every inbound introduction, client inquiry, and tender opportunity into a single qualified queue without lost leads or unclear initial ownership.',
  },
  {
    step: '02',
    stage: 'COMMERCIAL REVIEW',
    sources: 'Scoping · Costing · Version Control · Approvals',
    desc: 'Structured relationship tracking, formal fee proposals, version-controlled quotation histories, and internal commercial sign-offs before client dispatch.',
  },
  {
    step: '03',
    stage: 'INSTITUTIONAL RECORD',
    sources: 'Contracts · Deliverables · Client Governance · History',
    desc: 'A permanent repository of client mandates, signed contracts, compliance documents, and communication milestones accessible across authorized departments.',
  },
  {
    step: '04',
    stage: 'DELIVERY PHASES',
    sources: 'Milestones · Tasks · Deadlines · Verification',
    desc: 'Organised delivery phases, clear milestone oversight, and documented deliverables that eliminate ambiguity between internal teams, sub-trades, and clients.',
  },
  {
    step: '05',
    stage: 'OPERATIONAL GOVERNANCE',
    sources: 'Role Permissions · Approval Gates · Accountability',
    desc: 'Distinct departmental roles, approval checkpoints, and operational ownership so decisions never stall waiting on informal messages or untracked emails.',
  },
  {
    step: '06',
    stage: 'EXECUTIVE OVERSIGHT',
    sources: 'Portfolio Health · Margin Tracking · Leadership Visibility',
    desc: 'Executive-level oversight of active engagements, delivery timelines, team capacity, and revenue milestones without having to compile manual spreadsheets.',
  },
];

export const AbuDhabiMarketPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ABU_DHABI_FAQS.map((faq) => ({
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
    { name: 'Abu Dhabi', urlPath: '/global-markets/abu-dhabi' },
  ]);

  return (
    <>
      <SEO
        title="Brand, Digital Experiences & Business Systems for Abu Dhabi | Mayaa Solutions"
        description="Built for businesses where trust and structure matter. Strategic brand design, high-clarity websites, and personalised business management systems engineered for established organisations and growing enterprises in Abu Dhabi."
        keywords="Abu Dhabi business software, business management systems Abu Dhabi, custom business software Abu Dhabi, enterprise CRM Abu Dhabi, website design Abu Dhabi, branding Abu Dhabi, digital experience Abu Dhabi, custom CRM Abu Dhabi, construction business systems Abu Dhabi, architecture business systems Abu Dhabi, real estate business systems Abu Dhabi, B2B business systems Abu Dhabi, Mayaa Solutions Abu Dhabi"
        canonicalUrl="https://mayaasolutions.in/global-markets/abu-dhabi"
        schema={[breadcrumbSchema, faqSchema]}
      />

      <div className="bg-[#090C10] text-[#E2E8F0] min-h-screen selection:bg-white selection:text-black font-sans antialiased">

        {/* 1. HERO SECTION: QUIET INSTITUTIONAL CONFIDENCE */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 px-6 md:px-12 border-b border-white/[0.08] overflow-hidden">
          {/* Subtle architectural background texture */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-luminosity">
            <img 
              src="/images/abudhabi-commercial-hero.jpg" 
              alt="Abu Dhabi Commercial & Institutional Architecture" 
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
              <span className="w-2 h-2 rounded-full bg-[#CBD5E1]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#94A3B8] font-medium font-mono">
                Abu Dhabi Market · Institutional Clarity
              </span>
            </motion.div>

            {/* Authoritative Minimal Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.08] mb-8"
            >
              Built for businesses where <br className="hidden sm:inline" />
              <span className="font-normal italic text-[#CBD5E1]">trust and structure matter.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              Mayaa builds brand architectures, refined digital experiences, and bespoke business systems for established organisations and growing commercial enterprises in Abu Dhabi.
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
                href="#institutional-systems"
                className="w-full sm:w-auto px-9 py-4 border border-white/20 text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-white/[0.05] hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Examine the Architecture</span>
                <ArrowDown className="w-3.5 h-3.5 text-white/60" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* 2. CORE ABU DHABI BUSINESS INSIGHT: THE REALITY OF SCALE */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono">
              The Reality of Scale
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-8">
              When the business grows, <br />
              <span className="text-[#555555] italic">the way it operates has to evolve.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mt-12">
              <div className="md:col-span-7 space-y-6 text-[#555555] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  A new commercial introduction arrives. Multiple department heads become involved. A detailed technical proposal is prepared. Formal contracts are executed. A major project begins. Documents move between commercial, legal, and operational units.
                </p>
                <p>
                  Executive leadership needs reliable visibility across active commitments and milestones. But when records are distributed across personal messaging apps, individual inboxes, and separate spreadsheets, governance weakens.
                </p>
                <div className="p-6 border-l-2 border-[#171717] bg-[#FAFAF9] text-[#171717] font-normal text-lg sm:text-xl">
                  “Good people keep a business moving. <br className="hidden sm:inline" />
                  <span className="text-[#555555]">Disciplined systems make it easier to keep moving.”</span>
                </div>
              </div>

              <div className="md:col-span-5 bg-[#FAFAF9] border border-[#E5E5E2] p-8 rounded-sm space-y-6">
                <div className="text-xs uppercase tracking-[0.2em] text-[#171717] font-mono flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-[#171717]" />
                  Where Operational Friction Occurs
                </div>
                <ul className="space-y-4 text-sm text-[#555555] font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-[#171717] font-mono text-xs mt-0.5">01</span>
                    <span>High-value introductions living inside personal phone chats rather than shared, audited pipelines.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#171717] font-mono text-xs mt-0.5">02</span>
                    <span>Document handoffs delayed across departments with ambiguous revision histories.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#171717] font-mono text-xs mt-0.5">03</span>
                    <span>Executive leadership needing manual status updates to understand true project margins.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#171717] font-mono text-xs mt-0.5">04</span>
                    <span>Key institutional knowledge locked inside individual personnel rather than preserved by the company.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TRUST & REPUTATION */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#94A3B8] mb-4 font-mono">
              Reputation & Perception
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              Trust is established <br />
              <span className="text-[#94A3B8] italic">before the first meeting.</span>
            </h2>

            <p className="text-lg text-[#94A3B8] font-light max-w-3xl leading-relaxed mb-16">
              For established businesses in Abu Dhabi, partners and institutional clients evaluate more than just the service offering. They evaluate how the organisation presents itself, how clearly information is structured, how quickly proposals are delivered, and how organized the client journey feels.
            </p>

            {/* Combined Brand & Digital Experience Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 sm:p-10 border border-white/10 bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#94A3B8] font-mono mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-white" />
                    External Stature
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">
                    Your digital presence should reflect the caliber of your work.
                  </h3>
                  <p className="text-[#94A3B8] text-sm sm:text-base font-light leading-relaxed mb-6">
                    Your brand identity, executive presentations, and digital touchpoints should communicate the exact standard of professionalism, precision, and credibility as your actual operational execution.
                  </p>
                  <div className="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-white/80 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Brand Architecture & Cohesive Design Systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Bespoke Web & Digital Experience Platforms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Executive Project Credentials & Case Studies</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/90 font-medium">
                  “Your website is often the first meeting.”
                </div>
              </div>

              <div className="p-8 sm:p-10 border border-white/10 bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#94A3B8] font-mono mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-white" />
                    Internal Alignment
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">
                    Every touchpoint must reinforce the same level of confidence.
                  </h3>
                  <p className="text-[#94A3B8] text-sm sm:text-base font-light leading-relaxed mb-6">
                    An authoritative first impression falters if subsequent proposals take weeks to compile, follow-up messages are untracked, or project handover notes are lost between departments.
                  </p>
                  <div className="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-white/80 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Structured Intake & Immediate Qualification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Consistent Client Governance & Proposal Delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Direct Connection: Brand → Platform → Operations</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/90 font-medium">
                  “Reputation begins before the conversation.”
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PERSONALISED BUSINESS MANAGEMENT SYSTEM */}
        <section id="institutional-systems" className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono">
              Bespoke Software Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-4">
              Personalised business <br />
              <span className="text-[#555555] italic">management systems.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light max-w-3xl leading-relaxed mb-16">
              Every organisation has its own way of managing enquiries, clients, projects, people, and information. We understand the actual operating workflow first. Then we build the system directly around it.
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
                      <span className="text-xs font-mono text-[#171717] font-medium">STAGE {item.step}</span>
                      <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#E5E5E2] text-[#666666]">
                        Phase 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-light text-[#171717] mb-2 tracking-wide">
                      {item.stage}
                    </h3>
                    <div className="text-xs font-mono text-[#666666] mb-4 pb-3 border-b border-[#E5E5E2]">
                      {item.sources}
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
                “Less dependency on individual personal memory. <br />
                <span className="text-[#555555]">More structured visibility across the enterprise.”</span>
              </p>
            </div>
          </div>
        </section>

        {/* 5. ABU DHABI INDUSTRY SECTION */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#94A3B8] mb-4 font-mono">
              Sector Specialisation
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-6">
              Tailored across <br />
              <span className="text-[#9CA3AF] italic">core Abu Dhabi industries.</span>
            </h2>
            <p className="text-[#9CA3AF] text-base sm:text-lg font-light max-w-2xl leading-relaxed mb-16">
              From commercial consultancies around Al Maryah Island to contracting and industrial operations across Musaffah and Khalifa City, we tailor systems to exact sector demands.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {abuDhabiIndustries.map((ind, i) => (
                <div 
                  key={ind.id}
                  className={`p-8 border border-white/10 bg-white/[0.02] flex flex-col justify-between rounded-sm ${
                    i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] mb-3">
                      {ind.tagline}
                    </div>
                    <h3 className="text-xl font-light text-white mb-4">
                      {ind.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] font-light leading-relaxed">
                      {ind.quote}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs font-mono text-white/50">Custom Architecture</span>
                    <Link to="/contact" className="text-xs text-white/80 hover:text-white flex items-center gap-1 group">
                      <span>Discuss Sector</span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. ENGINEERING ENGINE & DELIVERY MODEL */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] font-mono">
              Delivery Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#171717] tracking-tight leading-[1.08]">
              Senior engineering depth. <br />
              <span className="text-[#555555] italic">Abu Dhabi institutional standards.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light max-w-3xl leading-relaxed">
              We deliver for Abu Dhabi organisations directly from our technology studio in India. We do not manufacture claims of physical branch offices where we do not have them. Instead, we invest in principal-level engineering, scheduled timezone alignment, and complete data sovereignty.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9]">
                <Clock className="w-5 h-5 text-[#171717] mb-4" />
                <h3 className="text-sm font-medium text-[#171717] mb-2">GST Timezone Alignment</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Only 1.5 hours difference between Abu Dhabi (UTC+4) and our India studio (UTC+5:30). Full daily working-hour overlap for sprint reviews and architectural sign-offs.
                </p>
              </div>

              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9]">
                <Cpu className="w-5 h-5 text-[#171717] mb-4" />
                <h3 className="text-sm font-medium text-[#171717] mb-2">Direct Senior Access</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Collaborate directly with software architects and brand directors. No junior account executives or layers of miscommunicated telephone handoffs.
                </p>
              </div>

              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9]">
                <Lock className="w-5 h-5 text-[#171717] mb-4" />
                <h3 className="text-sm font-medium text-[#171717] mb-2">Data Sovereignty</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Deployment on client-owned cloud accounts (AWS UAE / Azure UAE Central) with 100% intellectual property ownership, role-based controls, and strict NDAs.
                </p>
              </div>

              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9]">
                <CreditCard className="w-5 h-5 text-[#171717] mb-4" />
                <h3 className="text-sm font-medium text-[#171717] mb-2">AED Milestone Billing</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Transparent, milestone-based contracts quoted and invoiced in UAE Dirhams (AED) with explicit acceptance gates and zero recurring per-user licensing taxes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FREQUENTLY ASKED QUESTIONS */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#94A3B8] mb-4">
                Clarity & Due Diligence
              </div>
              <h2 className="text-3xl sm:text-5xl font-light text-white leading-tight mb-4">
                Questions Abu Dhabi executives ask.
              </h2>
              <p className="text-base text-[#9CA3AF] font-light">
                Transparent answers regarding remote delivery, multi-entity architectures, data privacy, and commercial terms.
              </p>
            </div>

            <div className="space-y-4">
              {ABU_DHABI_FAQS.map((faq, idx) => (
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
                        <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed border-t border-white/[0.06]">
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

        {/* 8. FINAL CONVERSION SECTION */}
        <section className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden bg-white text-[#171717] border-t border-[#E5E5E2]">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-3.5 py-1.5 bg-[#F0F0EE] border border-[#CCCCCC] text-xs font-mono text-[#171717] uppercase tracking-widest">
              Abu Dhabi Consultation
            </div>

            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-[#171717] leading-tight">
              Build what your business <br />
              <span className="font-normal italic text-[#555555]">needs next.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#555555] font-light max-w-xl mx-auto leading-relaxed">
              Tell us where your organisation is expanding, where operations require tighter governance, or where your digital touchpoints need to improve. We begin by understanding the business.
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
                className="w-full sm:w-auto px-10 py-4 border border-[#CCCCCC] text-[#171717] font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#F0F0EE] hover:border-[#111111] transition-all duration-300"
              >
                Explore Global Markets
              </Link>
            </div>

            <div className="pt-8 text-xs font-mono text-[#666666] tracking-wider">
              Serving enterprises across Al Maryah Island, Al Reem, Musaffah, Khalifa City, and greater Abu Dhabi.
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
