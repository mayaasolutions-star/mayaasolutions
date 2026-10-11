import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown,
  Layers, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  Briefcase, 
  Building2, 
  CheckCircle2, 
  ChevronRight 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const PARIS_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for Parisian ateliers, luxury brands, and practices from India without an office in Paris?',
    answer:
      'We work directly with Parisian directeurs généraux, artistic directors, and studio heads through structured CET/CEST working hours (with only a 3.5 to 4.5-hour timezone difference). Communications occur in fluent English via dedicated Slack/Teams channels, interactive Figma canvases, and recorded sprint walkthroughs. We do not manufacture claims of physical offices on Rue du Faubourg Saint-Honoré or Place Vendôme where we do not have them. By anchoring technical engineering at our India headquarters, we provide direct principal-to-engineer collaboration with exceptional craft, rigor, and without Parisian agency fee escalation.',
  },
  {
    question: 'How do you handle French and EU data privacy, GDPR, and hosting sovereignty?',
    answer:
      'All bespoke systems, databases, and client portals are deployed directly onto client-owned cloud tenancies in European regions (such as AWS Paris eu-west-3, Microsoft Azure France Central, or French hosts like OVHcloud / Scaleway). Mayaa never retains, accesses without authorization, or monetizes client customer records. Systems feature role-based permissions (RBAC), multi-factor authentication, and strict compliance with EU GDPR and CNIL guidelines.',
  },
  {
    question: 'Can your business systems integrate with French and European invoicing and CRM tools like Pennylane, Sellsy, or HubSpot?',
    answer:
      'Yes. Our philosophy is "Designed beautifully, built intelligently." Rather than disrupting functional back-office operations, we build secure REST/GraphQL API bridges and automated webhook workflows that synchronize client inquiries, quote revisions, and invoice statuses with Pennylane, Sellsy, HubSpot, or bespoke atelier databases.',
  },
  {
    question: 'How are commercial agreements and invoicing structured for Parisian businesses?',
    answer:
      'Engagements are contracted on fixed-scope, milestone-based terms and invoiced transparently in Euros (EUR) tied to concrete deliverables. You receive 100% intellectual property ownership of the codebase and creative assets upon sign-off, with zero perpetual per-user software licensing fees.',
  },
];

export const ParisMarketPage: React.FC = () => {
  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: PARIS_FAQS.map((faq) => ({
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
    { name: 'Paris', urlPath: '/global-markets/paris' },
  ]);
  // Curated 5 Paris Use Cases
  const parisUseCases = [
    {
      id: 'architecture-interiors',
      title: 'ARCHITECTURE & INTERIORS',
      tagline: 'Design Studios · Interior Architects · Turnkey Practices',
      image: '/images/industries/architecture.webp',
      quote: 'Bring enquiries, proposals, approvals, projects and client communication into a clearer workflow.',
    },
    {
      id: 'luxury-premium-brands',
      title: 'LUXURY, FASHION & ATELIERS',
      tagline: 'Maison Studios · Fashion · Fine Objects · Lifestyle',
      image: '/images/industries/luxury-premium.webp',
      quote: 'Build a digital presence that respects the brand while making the customer journey easier to navigate.',
    },
    {
      id: 'hospitality-venues',
      title: 'HOSPITALITY & VENUES',
      tagline: 'Hotels · Culinary Venues · Private Event Spaces',
      image: '/images/industries/hospitality.webp',
      quote: 'Connect a distinctive digital experience with the operational workflows behind enquiries, customers and teams.',
    },
    {
      id: 'real-estate-built-environment',
      title: 'REAL ESTATE & BUILT ENVIRONMENT',
      tagline: 'Developments · Property Advisory · Fit-Out Contractors',
      image: '/images/industries/real-estate.webp',
      quote: 'Organise enquiries, quotations, projects, teams and client communication as the business grows.',
    },
    {
      id: 'professional-creative-services',
      title: 'PROFESSIONAL & CREATIVE STUDIOS',
      tagline: 'Design Consultancies · Corporate Advisory · Specialist Practices',
      image: '/images/industries/interior-design.webp',
      quote: 'Create a clearer path from enquiry to delivery while giving the team better visibility.',
    },
  ];

  return (
    <>
      <SEO
        title="Brand, Digital Experiences & Business Systems for Paris | Mayaa Solutions"
        description="Mayaa builds distinctive brands, digital experiences and personalised business systems for ambitious businesses in Paris. Crafted for architecture, luxury, hospitality and creative practices."
        keywords="Paris business management systems, custom business software Paris, website design Paris, branding Paris, digital experience Paris, luxury business systems Paris, Mayaa Solutions Paris"
        ogImage="/images/france-commercial-hero.jpg"
        canonicalUrl="https://mayaasolutions.in/global-markets/paris"
        schema={[breadcrumbSchema, faqSchema]}
      />

      <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden pt-24 sm:pt-28 md:pt-32">

        {/* ==================================================
            01. HERO SECTION (MINIMAL, POETIC, IMPACTFUL)
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
                  Paris · Île-de-France
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[0.98]"
              >
                DESIGNED BEAUTIFULLY. <br />
                <span className="text-[#8E8E8A]">BUILT INTELLIGENTLY.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-xl"
              >
                Mayaa builds distinctive brands, digital experiences and personalised business systems for ambitious businesses in Paris.
              </motion.p>

              {/* Core Offerings Pill Tags */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-2 pt-1"
              >
                {['Brand Design', 'Digital Experience', 'Personalised Business Systems'].map((item) => (
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
                  to="/contact?market=paris"
                  className="min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-neutral-200 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md group"
                >
                  <span>START A CONVERSATION</span>
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

            {/* Right Curated Paris Visual */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl"
              >
                <img
                  src="/images/france-commercial-hero.jpg"
                  alt="Contemporary architecture and design studio environment in Paris"
                  className="w-full h-auto aspect-[4/3] object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono text-neutral-300">
                  <span className="uppercase tracking-wider">CRAFT & STRUCTURE</span>
                  <span className="text-[#8E8E8A]">PARIS</span>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ==================================================
            02. THE CORE PARIS INSIGHT
        ================================================== */}
        <section className="bg-white text-[#171717] border-y border-[#E5E5E2] py-20 sm:py-28 lg:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-12 sm:space-y-16">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#666666] uppercase tracking-widest block">
                THE CORE INSIGHT
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#171717] tracking-tight uppercase leading-[1.02]">
                A BEAUTIFUL BUSINESS STILL NEEDS <br />
                <span className="text-[#555555]">A GOOD SYSTEM BEHIND IT.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              
              {/* Left: The Natural Progression */}
              <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#666666] block">
                  How high-standard businesses often experience the daily workflow:
                </span>

                <div className="space-y-3.5">
                  {[
                    'A client discovers your work online or through reputation.',
                    'They visit the website.',
                    'They enquire.',
                    'The conversation moves to email or WhatsApp.',
                    'A proposal is sent.',
                    'The team works across different disconnected tools.',
                    'The client asks for an update.',
                    'Management needs operational visibility.',
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#E5E5E2] border border-[#CCCCCC] text-[10px] font-mono font-bold text-[#171717] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-sm sm:text-base text-[#444444] font-normal leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E5E5E2]">
                  <p className="text-xs font-mono text-[#666666] leading-relaxed">
                    The brand may look polished from the outside while the business behind it remains fragmented.
                  </p>
                </div>
              </div>

              {/* Right: The Anchor Principle */}
              <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#171717] block">
                    THE ANCHOR PRINCIPLE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#171717] leading-snug">
                    YOUR DIGITAL PRESENCE CREATES THE IMPRESSION. <br />
                    <span className="text-[#555555]">YOUR SYSTEMS CREATE THE EXPERIENCE.</span>
                  </h3>
                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal pt-2">
                    Good design gets attention. Good business systems make the business work. When both are built in harmony, clients experience effortless authority from the first encounter to project completion.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E5E5E2]">
                  <Link
                    to="/contact?market=paris"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#171717] hover:text-[#555555] uppercase tracking-widest transition-colors"
                  >
                    <span>Discuss Your Business Architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            03. MAYAA'S THREE CAPABILITIES
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="space-y-6 max-w-3xl mb-14 sm:mb-20">
            <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
              CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
              THREE THINGS YOUR BUSINESS NEEDS <br />
              <span className="text-[#8E8E8A]">TO WORK TOGETHER.</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              We connect the external perception of your business with the operational infrastructure that powers it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 01: BRAND */}
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest">
                  01 · BRAND
                </span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  BRAND IDENTITY
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  Create a clear identity that people recognise, remember and trust.
                </p>
              </div>
              <div className="w-8 h-0.5 bg-neutral-700" />
            </div>

            {/* Card 02: DIGITAL EXPERIENCE */}
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest">
                  02 · DIGITAL EXPERIENCE
                </span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  WEBSITES & EXPERIENCES
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  Turn your website and digital touchpoints into part of the customer journey.
                </p>
              </div>
              <div className="w-8 h-0.5 bg-neutral-700" />
            </div>

            {/* Card 03: BUSINESS SYSTEMS */}
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest">
                  03 · BUSINESS SYSTEMS
                </span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  PERSONALISED SYSTEMS
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  Connect leads, clients, projects, teams and information through a workflow built around your business.
                </p>
              </div>
              <div className="w-8 h-0.5 bg-white" />
            </div>

          </div>

          <div className="mt-8 text-center sm:text-left">
            <span className="text-xs font-mono text-[#8E8E8A] uppercase tracking-wider">
              Different needs. One business.
            </span>
          </div>
        </section>

        {/* ==================================================
            04. PERSONALISED BUSINESS MANAGEMENT SYSTEM
        ================================================== */}
        <section id="systems" className="bg-white text-[#171717] border-y border-[#E5E5E2] py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-14">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#666666] uppercase tracking-widest block">
                OPERATIONAL ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#171717] tracking-tight uppercase leading-[1.02]">
                SOFTWARE SHOULD <br />
                <span className="text-[#555555]">FIT THE BUSINESS.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed pt-2">
                We understand how your business works first, then build the system around it.
              </p>
            </div>

            {/* Clean, Simple Flow Line */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                { stage: 'ENQUIRY', desc: 'Centralised intake' },
                { stage: 'SALES', desc: 'Proposals & follow-ups' },
                { stage: 'CLIENT', desc: 'Specifications & history' },
                { stage: 'PROJECT', desc: 'Milestones & delivery' },
                { stage: 'TEAM', desc: 'Roles & accountability' },
                { stage: 'MANAGEMENT', desc: 'Visibility & decisions' },
              ].map((item, idx) => (
                <div
                  key={item.stage}
                  className="p-6 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between space-y-4"
                >
                  <span className="text-[10px] font-mono font-bold text-[#666666]">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-base font-black text-[#171717] uppercase tracking-tight">
                      {item.stage}
                    </h4>
                    <p className="text-xs text-[#555555] mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#171717] uppercase tracking-widest block">
                  THE SYSTEM BENEFIT
                </span>
                <p className="text-sm text-[#555555]">
                  Less searching. Less repetition. More visibility.
                </p>
              </div>

              <Link
                to="/business-systems"
                className="text-xs font-mono font-bold text-[#171717] hover:text-[#555555] uppercase tracking-widest inline-flex items-center gap-2 transition-colors shrink-0"
              >
                <span>Explore Systems Capability</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </section>

        {/* ==================================================
            05. PARIS-SPECIFIC BUSINESS USE CASES
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="max-w-3xl space-y-4 mb-14 sm:mb-20">
            <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
              SELECTED FIELDS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
              BUILT AROUND <br />
              <span className="text-[#8E8E8A]">YOUR WORK.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {parisUseCases.map((useCase) => (
              <div
                key={useCase.id}
                className="rounded-3xl bg-neutral-950 border border-neutral-800 overflow-hidden flex flex-col justify-between hover:border-neutral-600 transition-all group"
              >
                <div>
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

                  <div className="p-7 sm:p-8 space-y-3">
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                      {useCase.quote}
                    </p>
                  </div>
                </div>

                <div className="p-7 sm:p-8 pt-0">
                  <Link
                    to="/contact?market=paris"
                    className="w-full py-3 px-4 rounded-xl bg-neutral-900 hover:bg-white text-neutral-300 hover:text-black text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between transition-colors"
                  >
                    <span>Discuss Your Workflow</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            06. BRAND + DIGITAL EXPERIENCE (COMBINED)
        ================================================== */}
        <section className="bg-white text-[#171717] border-y border-[#E5E5E2] py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono font-bold text-[#666666] uppercase tracking-widest block">
                  PRESENTATION
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#171717] tracking-tight uppercase leading-[1.02]">
                  YOUR FIRST IMPRESSION HAPPENS <br />
                  <span className="text-[#666666]">BEFORE THE FIRST CONVERSATION.</span>
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
                  <p>
                    Your website, identity, presentation and digital touchpoints should feel like the same business.
                  </p>
                  <p className="text-[#171717] font-medium text-xl">
                    “Not louder. Clearer.”
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'BRAND IDENTITY', desc: 'Distinct typography and visual restraint that command quiet authority.' },
                  { title: 'WEBSITE EXPERIENCE', desc: 'Sub-second speed, editorial layouts, and intuitive navigation.' },
                  { title: 'PORTFOLIO CURATION', desc: 'High-resolution showcases displaying project scope, craft, and materials.' },
                  { title: 'ENQUIRY JOURNEY', desc: 'Clear pathways from initial discovery to formal project scoping.' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-2"
                  >
                    <h4 className="text-sm font-black text-[#171717] uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xs text-[#555555] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            07. PARIS BUSINESS REALITY: CRAFT + STRUCTURE
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="max-w-4xl space-y-8">
            <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
              EDITORIAL PERSPECTIVE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
              CRAFT DESERVES <br />
              <span className="text-[#8E8E8A]">STRUCTURE.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-xl text-neutral-300 font-normal leading-relaxed">
              <p>
                Whether you design spaces, build projects, serve clients, create products or run a hospitality business, the quality of the work is only part of the experience.
              </p>
              <p className="text-white font-medium">
                The systems behind the work matter too.
              </p>
              <p className="text-sm sm:text-base text-neutral-400 pt-2">
                Across Paris and Île-de-France, from central arrondissements to La Défense, Boulogne-Billancourt, Levallois-Perret, and Neuilly-sur-Seine, we collaborate with businesses where execution and reputation cannot be compromised.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================
            08. WHY MAYAA: UNDERSTAND FIRST. BUILD SECOND.
        ================================================== */}
        <section className="bg-white text-[#171717] border-y border-[#E5E5E2] py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-14">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#666666] uppercase tracking-widest block">
                PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#171717] tracking-tight uppercase leading-[1.02]">
                UNDERSTAND FIRST. <br />
                <span className="text-[#666666]">BUILD SECOND.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-8 rounded-3xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-4">
                <span className="text-xs font-mono font-bold text-[#666666] uppercase tracking-widest">
                  01 · UNDERSTAND
                </span>
                <h3 className="text-xl font-black text-[#171717] uppercase tracking-tight">
                  YOUR REALITY
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  We start with how your business actually works.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-4">
                <span className="text-xs font-mono font-bold text-[#666666] uppercase tracking-widest">
                  02 · DESIGN
                </span>
                <h3 className="text-xl font-black text-[#171717] uppercase tracking-tight">
                  SIMPLICITY FIRST
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  We simplify the experience before adding technology.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-4">
                <span className="text-xs font-mono font-bold text-[#666666] uppercase tracking-widest">
                  03 · BUILD
                </span>
                <h3 className="text-xl font-black text-[#171717] uppercase tracking-tight">
                  PURPOSEFUL DELIVERY
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  We create what the business genuinely needs.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs font-mono text-[#666666] tracking-wider uppercase">
                No unnecessary features. No forced templates. No technology for the sake of technology.
              </p>
            </div>

          </div>
        </section>

        {/* ==================================================
            08. DELIVERY MODEL FOR ================================================== */}
        <section className="py-24 sm:py-32 border-t border-neutral-900 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="space-y-12">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                DELIVERY ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
                SENIOR ENGINEERING. <br />
                <span className="text-[#8E8E8A]">PARISIAN AESTHETIC INTEGRITY.</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
                Mayaa delivers high-standard brand design, digital experiences, and custom management systems directly from India. We offer direct engineer access, high design discipline, and total European data compliance without agency escalation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-4">
                <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest">
                  01 · TIMEZONE OVERLAP
                </span>
                <h3 className="text-lg font-black text-white uppercase tracking-tight">
                  CET / CEST SPRINT CADENCE
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  With a modest 3.5 to 4.5-hour difference, our afternoon hours seamlessly cover Parisian business mornings for live design critiques, demos, and reviews.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-4">
                <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest">
                  02 · DATA SOVEREIGNTY
                </span>
                <h3 className="text-lg font-black text-white uppercase tracking-tight">
                  EU & FRENCH CLOUD REGIONS
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Workflows and client data deploy directly onto client-owned European cloud infrastructure (AWS Paris eu-west-3, Azure France Central, OVHcloud), strictly adhering to GDPR and CNIL standards.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-4">
                <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest">
                  03 · COMMERCIAL TERMS
                </span>
                <h3 className="text-lg font-black text-white uppercase tracking-tight">
                  EUR MILESTONE CONTRACTS
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Fixed-scope milestone contracts invoiced in EUR with complete source code and creative asset ownership upon sign-off. Zero perpetual per-user software licensing fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            FREQUENTLY ASKED QUESTIONS (FAQ)
        ================================================== */}
        <section className="bg-white text-[#171717] border-y border-[#E5E5E2] py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <span className="text-xs font-mono font-bold text-[#666666] uppercase tracking-widest block mb-3">
                PARIS DECISION-MAKER FAQS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#171717] tracking-tight uppercase leading-[1.02]">
                COMMON QUESTIONS FROM <br />
                <span className="text-[#666666]">PARISIAN BUSINESS LEADERS.</span>
              </h2>
            </div>

            <div className="space-y-4">
              {PARIS_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-[#E5E5E2] bg-[#FAFAF9] rounded-2xl overflow-hidden transition-colors hover:border-[#CCCCCC]"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 text-[#171717] hover:text-neutral-900 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-medium">{faq.question}</span>
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
                        className="px-6 pb-6 text-sm text-[#555555] font-normal leading-relaxed border-t border-[#E5E5E2] pt-4"
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
            09. FINAL CTA (VERY MINIMAL, CONFIDENT)
        ================================================== */}
        <section className="py-28 sm:py-36 md:py-44 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-xs font-mono font-bold text-neutral-300 uppercase tracking-widest"
            >
              PARIS CONSULTATION
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[0.98]"
            >
              LET'S BUILD SOMETHING <br />
              <span className="text-[#8E8E8A]">THAT WORKS BEAUTIFULLY.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-xl mx-auto"
            >
              Tell us what your business is trying to improve. We'll start by understanding how it works.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact?market=paris"
                className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-9 sm:px-10 py-4 bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-2xl group"
              >
                <span>START A CONVERSATION</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact?market=paris"
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
