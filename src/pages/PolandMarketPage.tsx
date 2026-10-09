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
  Globe2,
  Cpu,
  Database,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const POLAND_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for Polish enterprises from Bangalore without an on-the-ground office in Warsaw or Kraków?',
    answer:
      'We work directly with Polish prezesi, operational dyrektorzy, and engineering managers through structured CET/CEST working hours (with only a 3.5 to 4.5-hour timezone difference). Communications occur in English via dedicated Slack/Teams workspaces, interactive Figma canvases, and recorded sprint walkthroughs. We do not manufacture claims of physical offices in Warsaw Spire or Kraków Old Town where we do not have them. By anchoring senior engineering at our Bangalore headquarters, we provide direct principal-to-engineer collaboration with exceptional rigor, velocity, and cost efficiency.',
  },
  {
    question: 'How do you ensure GDPR (RODO) compliance and European data governance for Polish companies?',
    answer:
      'All custom business management systems, databases, and client portals are deployed directly onto client-owned cloud tenancies in European regions (such as AWS Frankfurt or Warsaw eu-central-1, Microsoft Azure Poland Central in Warsaw, or Hetzner). Mayaa never retains, accesses without authorization, or monetizes client records. Systems feature role-based permissions (RBAC), multi-factor authentication, and strict compliance with EU GDPR (RODO) and Urząd Ochrony Danych Osobowych (UODO) mandates.',
  },
  {
    question: 'Can your business systems integrate with Polish accounting and ERP suites like Comarch ERP Optima, InsERT Subiekt, or enova365?',
    answer:
      'Yes. Our core principle is "Strong business, clearer structure." Rather than forcing companies to replace established accounting packages, we build secure REST/GraphQL API bridges and automated webhook workflows that synchronize client data, quotation revisions, and dispatch statuses directly with Comarch Optima, Subiekt GT/Nexo, enova365, or custom legacy databases.',
  },
  {
    question: 'How are commercial contracts and invoicing structured for Polish companies?',
    answer:
      'Engagements are contracted on fixed-scope, milestone-based terms and invoiced transparently in Polish Złoty (PLN) or Euros (EUR) tied to concrete deliverables. You receive 100% intellectual property ownership of the codebase and assets upon sign-off, with zero perpetual per-user software licensing fees.',
  },
];

export const PolandMarketPage: React.FC = () => {
  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: POLAND_FAQS.map((faq) => ({
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
    { name: 'Poland', urlPath: '/global-markets/poland' },
  ]);
  // 7 Selected Polish Business Sectors
  const polandIndustries = [
    {
      id: 'manufacturing-industrial',
      title: 'MANUFACTURING & INDUSTRIAL',
      tagline: 'Fabrication · Technical Components · Production Plants',
      image: '/images/industries/manufacturing.jpg',
      quote: 'Connect commercial activity, customers, projects and management without losing operational clarity.',
    },
    {
      id: 'engineering-technical',
      title: 'ENGINEERING & TECHNICAL',
      tagline: 'Design Engineering · Automation Integrators · R&D',
      image: '/images/industries/clinic.jpg',
      quote: 'Present technical capability clearly while giving teams better visibility across work.',
    },
    {
      id: 'construction-property',
      title: 'CONSTRUCTION & PROPERTY',
      tagline: 'General Contractors · Commercial Fit-Out · Developers',
      image: '/images/industries/construction.jpg',
      quote: 'Bring enquiries, projects, teams and management into one structured workflow.',
    },
    {
      id: 'architecture-interiors',
      title: 'ARCHITECTURE & INTERIORS',
      tagline: 'Design Studios · Turnkey Interiors · Visual Practices',
      image: '/images/industries/architecture.webp',
      quote: 'Make the quality of the work visible through a stronger brand and digital experience.',
    },
    {
      id: 'automotive-components',
      title: 'AUTOMOTIVE & COMPONENTS',
      tagline: 'Tier Suppliers · Precision Parts · Contract Assembly',
      image: '/images/industries/manufacturing.jpg',
      quote: 'Support complex B2B relationships with clearer digital communication and operational structure.',
    },
    {
      id: 'b2b-wholesale',
      title: 'B2B & WHOLESALE',
      tagline: 'Industrial Distributors · Trade Suppliers · Logistics',
      image: '/images/industries/construction.jpg',
      quote: 'Organise sales pipelines, quotation revisions, customer accounts and delivery handoffs seamlessly.',
    },
    {
      id: 'hospitality-professional',
      title: 'HOSPITALITY & PROFESSIONAL SERVICES',
      tagline: 'Advisory · Technology Practices · Premium Venues',
      image: '/images/industries/hospitality.webp',
      quote: 'Create a modern, international brand image while giving client delivery stronger operational backing.',
    },
  ];

  // The 6-Stage Process Flow
  const systemFlow = [
    {
      step: '01',
      stage: 'ENQUIRY',
      flow: 'Direct Web · Inbound Email · WhatsApp · Referrals',
      desc: 'Centralise every inbound project enquiry into one structured qualification queue, eliminating missed messages and forgotten contacts.',
    },
    {
      step: '02',
      stage: 'SALES',
      flow: 'Scoping · Technical Quotation · Revisions · Handshake',
      desc: 'Structure proposal development, track pricing adjustments, and assign clear ownership across sales and commercial directors.',
    },
    {
      step: '03',
      stage: 'CLIENT',
      flow: 'Technical Baselines · Contracts · Specifications · History',
      desc: 'One shared home for customer requirements, legal agreements, and communication milestones accessible across the company.',
    },
    {
      step: '04',
      stage: 'PROJECT',
      flow: 'Milestones · Phase Deliverables · Technical Tasks',
      desc: 'Disciplined phase execution and transparent milestones that eliminate ambiguity between sales promises and technical delivery.',
    },
    {
      step: '05',
      stage: 'TEAM',
      flow: 'Department Roles · Sign-offs · Accountability',
      desc: 'Explicit operational roles and structured checkpoints so execution moves forward without constant owner intervention.',
    },
    {
      step: '06',
      stage: 'MANAGEMENT',
      flow: 'Pipeline Health · Capacity Oversight · Strategic Clarity',
      desc: 'Dependable, real-time visibility into active tenders, production schedules, and team workload without chasing status reports.',
    },
  ];

  return (
    <>
      <SEO
        title="Brand, Digital Experiences & Business Systems for Poland | Mayaa Solutions"
        description="Strong business. Clearer structure. Mayaa builds brands, digital experiences and personalised business management systems for growing Polish enterprises competing domestically and internationally."
        keywords="Poland business systems, Polish businesses software, custom business software Poland, business management systems Poland, custom CRM Poland, website design Poland, branding Poland, digital experience Poland, business software Warsaw, business software Kraków, business software Wrocław, business software Poznań, business software Gdańsk, business software Katowice, manufacturing business systems Poland, engineering business systems Poland, Mayaa Solutions Poland"
        canonicalUrl="https://mayaasolutions.in/global-markets/poland"
        schema={[breadcrumbSchema, faqSchema]}
      />

      <div className="bg-[#090D12] text-[#F3F4F6] min-h-screen selection:bg-white selection:text-black font-sans antialiased">

        {/* 1. HERO SECTION */}
        <section className="relative min-h-[88vh] flex items-center justify-center pt-32 pb-24 px-6 md:px-12 border-b border-white/[0.08] overflow-hidden">
          {/* Subtle industrial-editorial architectural background */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-luminosity">
            <img 
              src="/images/poland-commercial-hero.jpg" 
              alt="Modern Engineering, Manufacturing & Industrial Excellence in Poland" 
              className="w-full h-full object-cover object-center filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090D12] via-[#090D12]/70 to-[#090D12]/95" />
          </div>

          <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
            {/* Top Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF] font-medium">
                Mayaa Solutions × Poland
              </span>
            </motion.div>

            {/* Authoritative Minimal Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.1] mb-8"
            >
              Your business has built the substance. <br className="hidden sm:inline" />
              <span className="font-normal italic text-white/95">Now make it work as one.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              For Polish businesses growing, modernising and competing in increasingly demanding markets, Mayaa brings brand, digital experience and business operations together around the way the company actually works.
            </motion.p>

            {/* CTAs */}
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

        {/* 2. THE POLISH BUSINESS REALITY */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08] bg-[#0C1017]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Natural Stages of Scale
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              The business has grown. <br />
              <span className="text-[#9CA3AF]">The system around it should too.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mt-12">
              <div className="md:col-span-7 space-y-6 text-[#9CA3AF] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  A business often begins with a founder, a dedicated core team, direct client relationships, spreadsheets, email threads, messaging groups, and a few disconnected tools. That can work well for years.
                </p>
                <p>
                  Then growth changes the operating reality. There are more enquiries, customers, active projects, employees, suppliers, follow-ups, decisions, and information moving between departments.
                </p>
                <div className="p-6 border-l-2 border-white/40 bg-white/[0.02] text-white font-normal text-lg sm:text-xl">
                  “The problem is not that the business lacks software. <br className="hidden sm:inline" />
                  <span className="text-[#9CA3AF]">The problem is that the business can become dependent on too many disconnected ways of working.”</span>
                </div>
              </div>

              <div className="md:col-span-5 bg-white/[0.02] border border-white/10 p-8 rounded-sm space-y-6">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70 font-mono flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-white/80" />
                  Where Fragmented Operations Hurt
                </div>
                <ul className="space-y-4 text-sm text-[#9CA3AF] font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-white font-mono text-xs mt-0.5">01</span>
                    <span>Valuable opportunities lost in private chat threads or scattered email chains.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-mono text-xs mt-0.5">02</span>
                    <span>Technical quotes taking too long to assemble because data lives in separate files.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-mono text-xs mt-0.5">03</span>
                    <span>Handoff gaps between commercial agreements and actual engineering or site execution.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-mono text-xs mt-0.5">04</span>
                    <span>Management lacking a unified real-time dashboard over all active commitments.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE INTERNATIONAL POLAND ANGLE */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Export Readiness & Global Stature
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              From Poland. <br />
              <span className="text-[#9CA3AF]">Built for more.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6 text-[#9CA3AF] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  Poland is far more than a domestic market. Many Polish businesses operate within wider European and international supply chains, manufacture high-specification goods, or serve foreign partners across Germany, Scandinavia, Western Europe, and North America.
                </p>
                <p>
                  When competing across borders, the quality of the product or technical service is only part of what clients evaluate. International partners notice the brand maturity, how clearly information is communicated, how fast enquiries are handled, and how dependable the customer journey feels.
                </p>
                <div className="text-white font-medium text-lg sm:text-xl pt-2">
                  “Good work should not be hidden behind a weak digital experience or fragmented operations.”
                </div>
              </div>

              <div className="md:col-span-5 bg-white/[0.02] border border-white/10 p-8 rounded-sm space-y-5">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70 font-mono flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-white" />
                  What International Partners Evaluate
                </div>
                <div className="space-y-4 text-sm text-[#9CA3AF] font-light">
                  <div className="border-b border-white/[0.06] pb-3">
                    <span className="text-white font-medium block mb-1">Corporate Stature</span>
                    <span>Does the brand present the true scale, engineering rigor, and reliability of the company?</span>
                  </div>
                  <div className="border-b border-white/[0.06] pb-3">
                    <span className="text-white font-medium block mb-1">Commercial Velocity</span>
                    <span>Can procurement teams quickly review technical competencies, certifications, and project references?</span>
                  </div>
                  <div>
                    <span className="text-white font-medium block mb-1">Operational Reliability</span>
                    <span>Are proposals, updates, and project handoffs managed with consistent European standards?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. BRAND DESIGN */}
        <section id="what-we-build" className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08] bg-[#0C1017]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Perceived Business Maturity
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              Your work may be better <br />
              <span className="text-[#9CA3AF]">than your image suggests.</span>
            </h2>

            <p className="text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-16">
              A technically strong manufacturer, an experienced engineering practice, a high-specification contractor, or a serious B2B supplier can easily lose high-value contracts if their visual communication looks smaller, outdated, or less organised than the business itself.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 sm:p-10 border border-white/10 bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] font-mono mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-white" />
                    Brand Identity & Systems
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">
                    Make the quality of the business visible.
                  </h3>
                  <p className="text-[#9CA3AF] text-sm sm:text-base font-light leading-relaxed mb-6">
                    A cohesive visual system that commands immediate respect. Disciplined typography, structured logo systems, and professional presentation standards that match the caliber of your production floor.
                  </p>
                  <div className="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-white/80 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Corporate Brand Identity & Visual Language</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Business Presentation Systems & Commercial Pitch Decks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Technical Collateral & Documentation Standards</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/90 font-medium">
                  “Credibility is established before the contract is discussed.”
                </div>
              </div>

              <div className="p-8 sm:p-10 border border-white/10 bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] font-mono mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-white" />
                    Website & Sales Enablement
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">
                    Your website is part of the sales process.
                  </h3>
                  <p className="text-[#9CA3AF] text-sm sm:text-base font-light leading-relaxed mb-6">
                    Not simply a static company brochure. For businesses competing in B2B and export markets, the website should explain your capabilities, answer tough procurement questions, and build trust before your sales team ever hops on a call.
                  </p>
                  <div className="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-white/80 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Sub-second responsive engineering for international visitors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Technical portfolio showcases and case studies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Structured, low-friction B2B consultation pathways</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/90 font-medium">
                  “Your website should explain the business before your sales team has to.”
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
              STOP MAKING THE BUSINESS FIT THE SOFTWARE. <br />
              <span className="text-[#9CA3AF]">MAKE THE SOFTWARE FIT THE BUSINESS.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-16">
              Generic off-the-shelf software is designed for averages. Your business is not average. Mayaa studies how your organisation actually calculates, sells, coordinates and delivers work—then builds a personalized system around that workflow.
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
                        Phase {idx + 1}
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
                “Sometimes the right answer is not another platform. <br />
                <span className="text-[#9CA3AF]">It is connecting the important parts of the business more intelligently.”</span>
              </p>
            </div>
          </div>
        </section>

        {/* 6. POLAND INDUSTRY SECTION */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08] bg-[#0C1017]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Sector Specialisation
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-6">
              Built around the way <br />
              <span className="text-[#9CA3AF]">your industry works.</span>
            </h2>
            <p className="text-[#9CA3AF] text-base sm:text-lg font-light max-w-2xl leading-relaxed mb-16">
              From industrial manufacturing hubs in Katowice, Poznań and Wrocław to tech and corporate practices in Warsaw, Kraków, Łódź and Gdańsk.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {polandIndustries.map((ind, i) => (
                <div 
                  key={ind.id}
                  className={`p-8 border border-white/10 bg-white/[0.02] flex flex-col justify-between rounded-sm ${
                    i === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9CA3AF] mb-3">
                      {ind.tagline}
                    </div>
                    <h3 className="text-xl font-light text-white mb-4">
                      {ind.title}
                    </h3>
                    <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                      {ind.quote}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs font-mono text-white/50">Tailored Structure</span>
                    <Link to="/contact" className="text-xs text-white/80 hover:text-white flex items-center gap-1">
                      Discuss Requirements <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. QUALITY IS MORE THAN THE PRODUCT */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Holistic Business Experience
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              Quality is more than <br />
              <span className="text-[#9CA3AF]">the product.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-[#9CA3AF] font-light leading-relaxed mb-12">
              <p>
                In competitive markets, the client experience begins long before the order is delivered. Quality is also how quickly an initial enquiry is answered, how clearly a technical proposal is presented, how easily an international customer grasps your capabilities, and how consistently your team follows a proven process.
              </p>
              <p>
                It is also how quickly leadership can view active project timelines, and how confidently the company presents itself in international tenders. Brand, digital experience, and operations are not separate problems—they are parts of the same commercial engine.
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-white/[0.02] text-center max-w-2xl mx-auto">
              <div className="text-xs font-mono text-white/50 uppercase tracking-widest mb-2">The Integrated Standard</div>
              <p className="text-lg text-white font-normal">
                “Brand + Digital + Operations are parts of the same business experience.”
              </p>
            </div>
          </div>
        </section>

        {/* 8. AI + PRACTICAL AUTOMATION */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08] bg-[#0C1017]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Pragmatic Technology
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-6">
              Automate what should not <br />
              <span className="text-[#9CA3AF]">need a person.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-16">
              Polish decision-makers do not need AI hype. Technology should remove friction, not add another layer of maintenance. We automate routine work so your team can focus on production, engineering, and client relationships.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-white" />
                  ROUTINE WORKFLOWS
                </div>
                <h3 className="text-lg font-normal text-white mb-3">Lead Routing & Data Entry</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  Eliminating manual copy-pasting of inquiries between email, web forms and spreadsheets. Automatically routing leads to the right director.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-white" />
                  COMMUNICATION REMINDERS
                </div>
                <h3 className="text-lg font-normal text-white mb-3">Automated Reminders</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  Structured notification cadences for proposal follow-ups, milestone reviews, and overdue deliverables so nothing gets forgotten.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4 flex items-center gap-2">
                  <Database className="w-4 h-4 text-white" />
                  GOVERNANCE & SECURITY
                </div>
                <h3 className="text-lg font-normal text-white mb-3">Role-Based Access</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  Tiered departmental permissions and secure authentication so sensitive costing calculations and proprietary client drawings stay protected.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 border border-white/10 bg-white/[0.02] text-center max-w-xl mx-auto">
              <p className="text-sm sm:text-base text-white/90 font-light">
                “Technology should remove friction. <br className="hidden sm:inline" />
                <span className="text-[#9CA3AF]">Not add another layer of it.”</span>
              </p>
            </div>
          </div>
        </section>

        {/* 9. WHY MAYAA */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Our Methodology
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              We don't start with the software. <br />
              <span className="text-[#9CA3AF]">We start with the business.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-16">
              We study how you attract customers, how you sell, how work moves through the company, how teams communicate, where information gets lost, and where management lacks visibility. Then we build what makes commercial sense.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4">01 · OPERATIONAL DISCOVERY</div>
                <h3 className="text-lg font-normal text-white mb-3">UNDERSTAND</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  How the business actually produces and sells value before recommending any design or software.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4">02 · WORKFLOW SIMPLIFICATION</div>
                <h3 className="text-lg font-normal text-white mb-3">SIMPLIFY</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  Where communication and handoffs can be streamlined so the underlying process is clean and disciplined.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4">03 · PURPOSEFUL BUILD</div>
                <h3 className="text-lg font-normal text-white mb-3">BUILD</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  What technology genuinely needs to do. No unnecessary features, no rigid templates, and no software for software's sake.
                </p>
              </div>
            </div>

            {/* Geographic Context */}
            <div className="mt-16 text-center text-xs text-white/50 font-mono tracking-wider">
              From Warsaw, Kraków and Wrocław to Poznań, Gdańsk, Katowice, Łódź and industrial enterprises across Poland.
            </div>
          </div>
        </section>

        {/* BANGALORE DELIVERY MODEL FOR POLISH ENTERPRISES */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08] bg-[#0A0E15]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#E11D48] mb-4 font-mono">
              Engineering Delivery
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-6">
              Engineering anchored in Bangalore. <br />
              <span className="text-[#9CA3AF]">Zero bloated agency markups.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-16">
              Mayaa delivers brand identity, digital platforms, and custom business systems directly from Bangalore, India. We offer direct engineer access, high velocity, and full European data compliance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-[#E11D48] uppercase tracking-wider mb-2">01 · TIMEZONE OVERLAP</div>
                <h3 className="text-lg font-normal text-white mb-2">CET / CEST Collaboration</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  With a 3.5 to 4.5-hour difference, our afternoon hours seamlessly cover Polish business mornings for live design critiques, demos, and reviews.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-[#E11D48] uppercase tracking-wider mb-2">02 · DATA SOVEREIGNTY</div>
                <h3 className="text-lg font-normal text-white mb-2">European Cloud Deployments</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Workflows and databases deploy directly to client-owned European cloud infrastructure (AWS Frankfurt, Azure Poland Central in Warsaw, Hetzner), strictly adhering to GDPR (RODO) and UODO rules.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-[#E11D48] uppercase tracking-wider mb-2">03 · COMMERCIAL TERMS</div>
                <h3 className="text-lg font-normal text-white mb-2">PLN / EUR Milestone Contracts</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Fixed-scope milestone contracts invoiced in PLN or EUR with complete code and intellectual property transfer upon sign-off. Zero recurring software seat fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#E11D48] mb-4 font-mono">
              Polish Buyer FAQs
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-12">
              Common questions from <br />
              <span className="text-[#9CA3AF]">Polish business leaders.</span>
            </h2>

            <div className="space-y-4">
              {POLAND_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 bg-white/[0.02] rounded-sm overflow-hidden transition-colors hover:border-white/20"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 text-white hover:text-[#E11D48] transition-colors"
                  >
                    <span className="text-base sm:text-lg font-light">{faq.question}</span>
                    <span className="text-xs font-mono text-white/50 flex-shrink-0">
                      {openFaq === idx ? '—' : '+'}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 text-sm text-[#9CA3AF] font-light leading-relaxed border-t border-white/[0.06] pt-4"
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

        {/* 10. FINAL CTA */}
        <section className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden bg-[#0C1017]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
              Your business has already <br className="hidden sm:inline" />
              <span className="font-normal italic">built something real.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you are strengthening your brand, rebuilding your digital experience or creating a business system around the way your company actually works, Mayaa starts with understanding the business.
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
