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
  TrendingUp,
  Cpu,
  Database,
  Building2,
  CheckCircle2,
  Users,
  Eye,
  Sliders,
  Globe2,
  Clock,
  Lock,
  CreditCard,
  Briefcase
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const UK_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for UK businesses from India without an on-the-ground UK office?',
    answer:
      'We collaborate directly with UK managing directors, partners, and operations heads through scheduled UK working-hour collaboration windows (GMT/BST), clear written specifications, and structured sprint reviews. With a manageable 4.5 to 5.5-hour timezone difference, our afternoon overlap covers UK mornings and core business hours seamlessly. We do not manufacture claims of physical offices in Mayfair or the City where we do not have them. By anchoring senior engineering in India, we provide direct principal-to-engineer communication with exceptional rigor and without London agency fee inflation.',
  },
  {
    question: 'How do you handle data privacy, UK GDPR, and infrastructure sovereignty?',
    answer:
      'All bespoke systems and client software are deployed directly onto client-owned cloud infrastructure (such as AWS London eu-west-2, Microsoft Azure UK South, or dedicated UK/European VPS providers). Mayaa does not retain, process, or monetize your company or client records. System architectures include role-based permissions and comprehensive audit logs. Clients retain 100% intellectual property ownership of the codebase under binding international confidentiality agreements.',
  },
  {
    question: 'Can your business systems integrate with existing accounting tools like Xero or Sage?',
    answer:
      'Yes. Rather than forcing you to abandon functional tools, we build custom API connectors and data synchronization pipelines that bridge the gaps between existing accounting suites (e.g., Xero, Sage, QuickBooks), document repositories, and daily commercial workflows, eliminating manual double-entry.',
  },
  {
    question: 'How are commercial agreements and invoicing structured for British enterprises?',
    answer:
      'We quote and invoice transparently in British Pounds (GBP) on fixed-scope, milestone-based contracts. Every phase, from workflow mapping to production deployment, has explicit acceptance criteria. Furthermore, our bespoke systems carry zero perpetual per-user software licensing fees, giving your business predictable capital allocation.',
  },
];

// 8 Focused UK Commercial Sectors
const ukIndustries = [
  {
    id: 'architecture-interiors',
    title: 'ARCHITECTURE & DESIGN PRACTICES',
    tagline: 'Design Practices · Consultancies · Commercial Fit-Out',
    desc: 'Deliver a distinguished digital presence for practices where visual presentation, portfolio credentials, and detail are fundamental to winning commercial mandates.',
  },
  {
    id: 'construction-property',
    title: 'CONSTRUCTION & PROPERTY DEVELOPMENT',
    tagline: 'Main Contractors · Quantity Surveyors · Commercial Developers',
    desc: 'Bring incoming tenders, sub-contractor packages, site logs, project milestones, and commercial variations into one clear operational structure.',
  },
  {
    id: 'manufacturing-engineering',
    title: 'MANUFACTURING & SPECIALIST ENGINEERING',
    tagline: 'Precision Fabricators · Technical Consultancies · Specialist Production',
    desc: 'Make complex technical know-how and custom fabrication capabilities easier to articulate, quote, and deliver across distributed supply chains.',
  },
  {
    id: 'professional-services',
    title: 'PROFESSIONAL & CORPORATE ADVISORY',
    tagline: 'Corporate Advisory · Legal & Accounting · Executive Consultancies',
    desc: 'Connect client mandates, delivery milestones, and billable utilization without administrative friction or spreadsheet sprawl.',
  },
  {
    id: 'hospitality',
    title: 'HOSPITALITY, HOTELS & CULINARY GROUPS',
    tagline: 'Boutique Hotels · Culinary Groups · Private Event Venues',
    desc: 'Reflect the true standard of the guest experience while providing back-office systems that streamline group bookings and private dining workflows.',
  },
  {
    id: 'b2b-distribution',
    title: 'B2B & SPECIALIST DISTRIBUTION',
    tagline: 'Trade Distributors · Industrial Suppliers · Specialist Stockists',
    desc: 'Organise high-touch commercial quotations, customer accounts, volume pricing, and order dispatch handoffs seamlessly.',
  },
  {
    id: 'owner-led',
    title: 'SPECIALIST & OWNER-LED ENTERPRISES',
    tagline: 'Established Practices · Regional Leaders · Multi-Discipline Studios',
    desc: 'Transfer vital institutional knowledge from individual founders and partners into structured, shared company systems built for the next stage of growth.',
  },
  {
    id: 'multi-team',
    title: 'GROWING MULTI-TEAM COMPANIES',
    tagline: 'Multi-Branch Operators · Expanding Studios · Regional Teams',
    desc: 'Give leadership complete visibility across departments, live projects, and customer accounts without relying on manual status chasing.',
  },
];

export const UkMarketPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: UK_FAQS.map((faq) => ({
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
    { name: 'UK', urlPath: '/global-markets/uk' },
  ]);

  return (
    <>
      <SEO
        title="Brand, Digital Experiences & Business Systems for the UK | Mayaa Solutions"
        description="Good business should feel good to deal with. Mayaa helps UK businesses bring their brand identity, digital experiences, and operational systems into disciplined alignment with how the business actually works."
        keywords="business management systems UK, custom business software UK, custom CRM UK, bespoke software UK, business automation UK, business management software UK, custom business systems UK, website design UK, web design UK, brand design UK, branding agency UK, digital experience UK, personalised business management system UK, Mayaa Solutions UK"
        canonicalUrl="https://mayaasolutions.in/global-markets/uk"
        schema={[breadcrumbSchema, faqSchema]}
      />

      <div className="bg-[#080B10] text-[#F3F4F6] min-h-screen selection:bg-white selection:text-black font-sans antialiased">

        {/* 01. HERO: REPUTATION AND OPERATIONAL SUBSTANCE */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 px-6 md:px-12 border-b border-white/[0.08] overflow-hidden">
          {/* Subtle architectural background texture */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-luminosity">
            <img
              src="/images/uk-commercial-hero.jpg"
              alt="Contemporary British Commercial Architecture & Urban Workspace"
              className="w-full h-full object-cover object-center filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/75 to-[#080B10]/95" />
          </div>

          <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
            {/* Minimal Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#15803D]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF] font-medium font-mono">
                Mayaa Solutions × United Kingdom
              </span>
            </motion.div>

            {/* Authoritative British Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.08] mb-8"
            >
              Good business should feel <br className="hidden sm:inline" />
              <span className="font-normal italic text-white/95">good to deal with.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              Mayaa connects brand identity, digital experiences, and operational systems around the way ambitious UK businesses actually work, from the first conversation to the final handover.
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
                href="#uk-systems"
                className="w-full sm:w-auto px-9 py-4 border border-white/20 text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-white/[0.05] hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Examine What We Build</span>
                <ArrowDown className="w-3.5 h-3.5 text-white/60" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* 02. CORE UK BUSINESS REALITY: WHEN THE BUSINESS GETS BUSIER (WHITE) */}
        <section className="w-full bg-white text-[#171717] py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-medium">
              Operational Reality
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-8">
              When the business gets busier, <br />
              <span className="text-[#555555] italic">what holds it back?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mt-12">
              <div className="md:col-span-7 space-y-6 text-[#555555] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  As an established UK firm expands, the initial systems that carried the business often become the very things slowing it down.
                </p>
                <p>
                  Enquiries arrive through multiple channels. Commercial proposals take too long to assemble. Project handoffs rely on verbal agreements. Key client notes are scattered across individual email threads and disparate spreadsheets.
                </p>
                <div className="p-6 border-l-2 border-[#171717] bg-[#FAFAF9] text-[#171717] font-normal text-lg sm:text-xl">
                  “The issue is rarely a lack of expertise. <br className="hidden sm:inline" />
                  <span className="text-[#666666]">It is the friction of disconnected operations.”</span>
                </div>
              </div>

              <div className="md:col-span-5 bg-[#FAFAF9] border border-[#E5E5E2] p-8 rounded-sm space-y-4">
                <div className="text-xs uppercase tracking-[0.2em] text-[#171717] font-mono mb-2 font-medium">
                  Common UK Operational Bottlenecks:
                </div>
                <ul className="space-y-3 text-xs text-[#555555] font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-[#15803D] font-mono">-</span>
                    <span>High-value commercial leads sitting unassigned across personal inboxes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#15803D] font-mono">-</span>
                    <span>Costing formulas and margin calculations buried in personal spreadsheets.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#15803D] font-mono">-</span>
                    <span>Subcontractor dependencies and site milestones tracked verbally.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#15803D] font-mono">-</span>
                    <span>Directors having to chase project managers for weekly margin reports.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 03. THREE PILLARS: BRAND, EXPERIENCE & SYSTEMS */}
        <section id="uk-systems" className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-6">
              Three pillars that <br />
              <span className="text-[#9CA3AF] italic">strengthen commercial performance.</span>
            </h2>
            <p className="text-[#9CA3AF] text-base sm:text-lg font-light max-w-3xl leading-relaxed mb-16">
              We align how your enterprise presents itself to the market with how work moves behind the scenes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-white/50 mb-3">01 · BRAND DESIGN</div>
                  <h3 className="text-xl font-normal text-white mb-3">Reputation & Stature</h3>
                  <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                    A considered brand identity that signals commercial authority and commands respect with prospective corporate clients and partners.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-white/80">
                  Brand Architecture · Pitch Decks · Guidelines
                </div>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-white/50 mb-3">02 · DIGITAL EXPERIENCE</div>
                  <h3 className="text-xl font-normal text-white mb-3">High-Clarity Websites</h3>
                  <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                    Digital storefronts that explain complex offerings, prove credibility with case studies, and turn high-intent visitors into direct inquiries.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-white/80">
                  Performance UX · Portfolio Frameworks · Direct CTAs
                </div>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-white/50 mb-3">03 · BUSINESS SYSTEMS</div>
                  <h3 className="text-xl font-normal text-white mb-3">Personalised Software</h3>
                  <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                    Bespoke management systems connecting inquiries, clients, project delivery, and leadership metrics around your team’s actual workflow.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-white/80">
                  Zero Per-Seat SaaS Taxes · Owned IP · Live Dashboards
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04. UK INDUSTRY SECTORS (WHITE) */}
        <section className="w-full bg-white text-[#171717] py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-medium">
              Sector Specialisation
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-6">
              Tailored across <br />
              <span className="text-[#555555] italic">key UK commercial sectors.</span>
            </h2>
            <p className="text-[#555555] text-base sm:text-lg font-light max-w-2xl leading-relaxed mb-16">
              From creative consultancies in London and Manchester to engineering and trade operations across Birmingham, Leeds, and Edinburgh.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ukIndustries.map((ind) => (
                <div key={ind.id} className="p-6 border border-[#E5E5E2] bg-[#FAFAF9] rounded-sm flex flex-col justify-between hover:border-neutral-400 transition-colors">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#666666] mb-2 font-medium">
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
                    <Link to="/contact" className="text-xs text-[#171717] hover:text-black flex items-center gap-1 group font-medium">
                      <span>Discuss Requirements</span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05. ENGINEERING ENGINE & DELIVERY MODEL */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] font-mono">
              Delivery Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Senior engineering depth. <br />
              <span className="text-[#9CA3AF] italic">British commercial standards.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed">
              We deliver for UK enterprises directly from our technology studio in India. We do not pretend to hold expensive Mayfair offices. Instead, we invest in senior engineering talent, reliable working-hour overlap, and complete data sovereignty.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 border border-white/10 bg-white/[0.01]">
                <Clock className="w-5 h-5 text-white mb-4" />
                <h3 className="text-sm font-medium text-white mb-2">GMT / BST Overlap</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Only 4.5 to 5.5 hours difference with India. Extensive daily working-hour overlap for standups, architectural reviews, and milestone sign-offs.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.01]">
                <Cpu className="w-5 h-5 text-white mb-4" />
                <h3 className="text-sm font-medium text-white mb-2">Direct Senior Access</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Work directly with principal system architects and brand designers. No junior account executives or miscommunicated telephone handoffs.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.01]">
                <Lock className="w-5 h-5 text-white mb-4" />
                <h3 className="text-sm font-medium text-white mb-2">UK Cloud Sovereignty</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Deployments onto client-owned UK cloud infrastructure (AWS London / Azure UK South) with 100% intellectual property ownership and strict NDAs.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.01]">
                <CreditCard className="w-5 h-5 text-white mb-4" />
                <h3 className="text-sm font-medium text-white mb-2">GBP Milestone Billing</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Clear, fixed-scope proposals quoted and invoiced in British Pounds (GBP) tied to verified deliverable milestones with zero recurring license taxes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 06. FREQUENTLY ASKED QUESTIONS (WHITE) */}
        <section className="w-full bg-white text-[#171717] py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2]">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#666666] mb-4 font-medium">
                Clarity & Due Diligence
              </div>
              <h2 className="text-3xl sm:text-5xl font-light text-[#171717] leading-tight mb-4">
                Questions British directors ask.
              </h2>
              <p className="text-base text-[#555555] font-light">
                Straightforward facts regarding remote delivery, UK GDPR compliance, software integrations, and commercial terms.
              </p>
            </div>

            <div className="space-y-4">
              {UK_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-[#E5E5E2] bg-[#FAFAF9] rounded-sm overflow-hidden"
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

        {/* 07. FINAL CTA */}
        <section className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden bg-[#080B10]">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-3.5 py-1.5 bg-white/[0.03] border border-white/10 text-xs font-mono text-white/80 uppercase tracking-widest">
              UK Consultation
            </div>

            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
              Build what your business <br />
              <span className="font-normal italic text-[#9CA3AF]">needs next.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-xl mx-auto leading-relaxed">
              If your business has outgrown fragmented tools, unorganized client handoffs, or an outdated market presence, let's look at the process before deciding what to build.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
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

            <div className="pt-8 text-xs font-mono text-white/40 tracking-wider">
              Serving enterprises across London, Manchester, Birmingham, Leeds, Bristol, Edinburgh, and throughout the UK.
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
