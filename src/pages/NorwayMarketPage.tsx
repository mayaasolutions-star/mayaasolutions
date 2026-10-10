import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown,
  Layers, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Workflow,
  Lock,
  Cpu,
  ChevronRight,
  Minimize2,
  Database
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const NORWAY_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for Norwegian companies from Bangalore without an office in Oslo or Bergen?',
    answer:
      'We collaborate directly with Norwegian daglig leder, operations directors, and technical partners across structured CET/CEST working-hour windows (a modest 3.5 to 4.5-hour timezone difference). Communications occur in English via dedicated Slack/Teams channels, collaborative Figma canvases, and recorded video walkthroughs. We do not manufacture claims of physical offices on Aker Brygge or in Bergen where we do not have them. By anchoring technical engineering at our Bangalore headquarters, we provide direct principal-to-engineer communication with exceptional rigor and without Norwegian consultancy overhead.',
  },
  {
    question: 'How do you handle Norwegian data privacy and European cloud governance?',
    answer:
      'All bespoke systems, databases, and automated workflows are deployed directly to client-owned cloud tenancies in European regions (such as AWS Stockholm eu-north-1, Microsoft Azure Norway East in Oslo, or Hetzner). Mayaa never stores, retains, or monetizes client customer data. Systems feature strict role-based access control (RBAC), multi-factor authentication, and exportable audit logs compliant with GDPR and Norwegian Datatilsynet requirements.',
  },
  {
    question: 'Can your business systems integrate with Norwegian ERP and accounting tools like Tripletex, Fiken, or PowerOffice?',
    answer:
      'Yes. Our guiding principle is "Understand first, build second." Rather than ripping out functioning software, we develop secure REST/GraphQL API bridges and automated webhook listeners that link Tripletex, Fiken, PowerOffice Go, or 24SevenOffice with your sales pipeline, project milestones, and client records seamlessly.',
  },
  {
    question: 'How are commercial agreements and invoicing structured for Norwegian enterprises?',
    answer:
      'Contracts are fixed-scope, milestone-governed, and invoiced transparently in Norwegian Krone (NOK) or Euros (EUR). Each phase, from workflow discovery to final rollout, has explicit acceptance criteria. Clients retain 100% intellectual property ownership of the codebase upon delivery, with zero recurring per-seat SaaS license fees.',
  },
];

export const NorwayMarketPage: React.FC = () => {
  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: NORWAY_FAQS.map((faq) => ({
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
    { name: 'Norway', urlPath: '/global-markets/norway' },
  ]);
  // 5 Relevant Norwegian Industry Categories
  const norwayIndustries = [
    {
      id: 'construction-property',
      title: 'CONSTRUCTION & PROPERTY',
      tagline: 'Entrepreneurs · Development Practices · Fit-Out',
      image: '/images/industries/construction.jpg',
      quote: 'Connect enquiries, quotations, projects, teams, schedules and client communication in one clearer workflow.',
    },
    {
      id: 'architecture-design',
      title: 'ARCHITECTURE & DESIGN',
      tagline: 'Arkitektkontor · Design Studios · Engineering Practices',
      image: '/images/industries/architecture.webp',
      quote: 'Bring consultations, proposals, approvals, projects and client communication into a structured digital experience.',
    },
    {
      id: 'maritime-industrial',
      title: 'MARITIME & INDUSTRIAL',
      tagline: 'Marine Services · Energy Technology · Equipment Logistics',
      image: '/images/industries/manufacturing.jpg',
      quote: 'Organise complex B2B sales, customer relationships, projects, documentation and follow-ups across teams.',
    },
    {
      id: 'professional-services',
      title: 'PROFESSIONAL SERVICES',
      tagline: 'Management Advisory · Corporate Legal · Technical Consultancies',
      image: '/images/industries/clinic.jpg',
      quote: 'Create a clearer journey from enquiry to delivery while reducing administrative friction.',
    },
    {
      id: 'hospitality-experience',
      title: 'HOSPITALITY & EXPERIENCE',
      tagline: 'Boutique Destinations · Cultural Venues · Premium Travel',
      image: '/images/industries/hospitality.webp',
      quote: 'Build a digital experience that feels simple for customers and easier for the team behind it.',
    },
  ];

  // The 6-Stage Clean Process Flow
  const systemFlow = [
    {
      step: '01',
      stage: 'ENQUIRY',
      flow: 'Direct Web · Inbound Email · Qualified Intakes',
      desc: 'Capture and qualify enquiries into a single clear queue without dispersed threads or forgotten leads.',
    },
    {
      step: '02',
      stage: 'SALES',
      flow: 'Commercial Scoping · Transparent Proposals · Revisions',
      desc: 'Clean opportunity tracking with straightforward proposals, clear scope breakdowns, and defined ownership.',
    },
    {
      step: '03',
      stage: 'CLIENT',
      flow: 'Project Requirements · Contract Baselines · History',
      desc: 'One structured repository for client specifications, milestones, agreements, and communication timelines.',
    },
    {
      step: '04',
      stage: 'PROJECT',
      flow: 'Delivery Milestones · Task Ownership · Deadlines',
      desc: 'Organised delivery phases and deliverables that eliminate ambiguity between teams and technical contributors.',
    },
    {
      step: '05',
      stage: 'TEAM',
      flow: 'Responsibilities · Direct Approvals · Clear Roles',
      desc: 'Defined roles and transparent accountability so work progresses without reliance on individual memory.',
    },
    {
      step: '06',
      stage: 'MANAGEMENT',
      flow: 'Operational Visibility · Work in Progress · Real Health',
      desc: 'Quiet, accurate insight into capacity, active deliverables, and operational health without chasing status emails.',
    },
  ];

  return (
    <>
      <SEO
        title="Brand, Digital Experiences & Business Systems for Norway | Mayaa Solutions"
        description="Good technology should make business simpler. Mayaa builds brands, digital experiences and personalised business systems for Norwegian businesses that value clarity, quality and sustainable growth."
        keywords="Norway business systems, Norwegian businesses software, custom business software Norway, business management systems Norway, custom CRM Norway, website design Norway, branding Norway, digital experience Norway, business software Oslo, business software Bergen, business software Stavanger, construction business systems Norway, architecture business systems Norway, maritime business systems Norway, Mayaa Solutions Norway"
        canonicalUrl="https://mayaasolutions.in/global-markets/norway"
        schema={[breadcrumbSchema, faqSchema]}
      />

      <div className="bg-[#090D12] text-[#F3F4F6] min-h-screen selection:bg-white selection:text-black font-sans antialiased">

        {/* 1. HERO SECTION */}
        <section className="relative min-h-[88vh] flex items-center justify-center pt-32 pb-24 px-6 md:px-12 border-b border-white/[0.08] overflow-hidden">
          {/* Subtle Nordic architectural / spatial atmosphere */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-luminosity">
            <img 
              src="/images/norway-commercial-hero.jpg" 
              alt="Nordic Architectural Simplicity & Natural Light" 
              className="w-full h-full object-cover object-center filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090D12] via-[#090D12]/70 to-[#090D12]/95" />
          </div>

          <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
            {/* Top Minimal Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF] font-medium">
                Norway Market · Clarity & Structure
              </span>
            </motion.div>

            {/* Quiet, Authoritative Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.1] mb-8"
            >
              Better business. <br className="hidden sm:inline" />
              <span className="font-normal italic text-white/95">Less complexity.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              Mayaa builds brands, digital experiences and personalised business systems for businesses in Norway that value clarity, quality and sustainable growth.
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

        {/* 2. CORE NORWAY BUSINESS INSIGHT */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08] bg-[#0B1017]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              The Reality of Tool Sprawl
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              You probably don't need <br />
              <span className="text-[#9CA3AF]">another tool.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mt-12">
              <div className="md:col-span-7 space-y-6 text-[#9CA3AF] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  Your website presents information. Your CRM stores contacts. Your accounting software logs invoices. Your project tool lists tasks. Your email handles daily client correspondence. Your team maintains spreadsheets to fill the gaps.
                </p>
                <p>
                  The tools work. But information still gets repeated, searched for across multiple tabs, and manually transferred between people.
                </p>
                <div className="p-6 border-l-2 border-white/40 bg-white/[0.02] text-white font-normal text-lg sm:text-xl">
                  “The problem isn't always the software. <br className="hidden sm:inline" />
                  <span className="text-[#9CA3AF]">Sometimes it's the space between the systems.”</span>
                </div>
              </div>

              <div className="md:col-span-5 bg-white/[0.02] border border-white/10 p-8 rounded-sm space-y-6">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70 font-mono flex items-center gap-2">
                  <Minimize2 className="w-4 h-4 text-white/80" />
                  What Unnecessary Complexity Costs
                </div>
                <ul className="space-y-4 text-sm text-[#9CA3AF] font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-white font-mono text-xs mt-0.5">01</span>
                    <span>More administrative hours spent re-entering data between disconnected platforms.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-mono text-xs mt-0.5">02</span>
                    <span>Duplicated client records and mismatched project versions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-mono text-xs mt-0.5">03</span>
                    <span>Multiple places to check just to confirm the current status of an order.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-mono text-xs mt-0.5">04</span>
                    <span>Over-reliance on individual memory when key colleagues take time off.</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-white/70">
                  “A good system removes steps, not adds them.”
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. BRAND + DIGITAL EXPERIENCE */}
        <section id="what-we-build" className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Perception & Clarity
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              Professional doesn't have to mean <br />
              <span className="text-[#9CA3AF]">complicated.</span>
            </h2>

            <p className="text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-16">
              Your brand, website and digital touchpoints should make it simple for people to understand who you are, what you do and how to work with you. In Norway, clarity and credibility resonate far more than loud marketing claims.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 sm:p-10 border border-white/10 bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] font-mono mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-white" />
                    Brand Identity & Voice
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">
                    Clarity is a competitive advantage.
                  </h3>
                  <p className="text-[#9CA3AF] text-sm sm:text-base font-light leading-relaxed mb-6">
                    A coherent visual identity and concise messaging remove ambiguity. It helps prospective clients, partners, and employees immediately grasp your core competencies and standard of work.
                  </p>
                  <div className="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-white/80 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Identity systems tailored for European and Nordic markets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Consistent typography, layouts and documentation standards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Presentation assets and commercial proposals</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/90 font-medium">
                  “Good design removes uncertainty.”
                </div>
              </div>

              <div className="p-8 sm:p-10 border border-white/10 bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] font-mono mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-white" />
                    Digital Experience & Web
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">
                    Trust is built through transparency.
                  </h3>
                  <p className="text-[#9CA3AF] text-sm sm:text-base font-light leading-relaxed mb-6">
                    Fast page loads, structured case portfolios, transparent service details, and low-friction enquiry forms. Your website should reflect the respect you have for your visitor's time.
                  </p>
                  <div className="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-white/80 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Bespoke responsive engineering with sub-second performance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Clean project showcases and client journeys</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>Direct, frictionless intake and consultation touchpoints</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/90 font-medium">
                  “Your digital experience reflects the way you want to be experienced.”
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PERSONALISED BUSINESS MANAGEMENT SYSTEM */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08] bg-[#0B1017]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Bespoke Operational Software
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-4">
              PERSONALISED BUSINESS <br />
              <span className="text-[#9CA3AF]">MANAGEMENT SYSTEM</span>
            </h2>
            <p className="text-xl text-white font-light mb-4">
              Built around the way your business actually works.
            </p>
            <p className="text-[#9CA3AF] text-base sm:text-lg font-light max-w-3xl leading-relaxed mb-16">
              We first understand how enquiries arrive, how work is scoped, how projects move and how your team manages information. Then we build only what is useful.
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
                “Clear ownership. Less repetition. <br />
                <span className="text-[#9CA3AF]">Better operational visibility.”</span>
              </p>
            </div>
          </div>
        </section>

        {/* 5. NORWEGIAN INDUSTRY SECTION */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Sector Relevance
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-6">
              Practical structure across <br />
              <span className="text-[#9CA3AF]">5 core Norwegian industries.</span>
            </h2>
            <p className="text-[#9CA3AF] text-base sm:text-lg font-light max-w-2xl leading-relaxed mb-16">
              From design practices in Oslo and Bergen to industrial and technical enterprises across Stavanger and Trondheim, we build around real operating workflows.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {norwayIndustries.map((ind, i) => (
                <div 
                  key={ind.id}
                  className={`p-8 border border-white/10 bg-white/[0.02] flex flex-col justify-between rounded-sm ${
                    i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
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
                    <span className="text-xs font-mono text-white/50">Focused Workflow</span>
                    <Link to="/contact" className="text-xs text-white/80 hover:text-white flex items-center gap-1">
                      Discuss Requirements <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. RESPONSIBLE TECHNOLOGY & SUSTAINABLE EFFICIENCY */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08] bg-[#0B1017]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Technology Principles
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-6">
              Technology should <br />
              <span className="text-[#9CA3AF]">earn its place.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-16">
              We do not add features simply because they exist. We build them when they solve a genuine operational bottleneck and make life easier for the team using them.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4 flex items-center gap-2">
                  <Database className="w-4 h-4 text-white" />
                  RESPONSIBLE DATA
                </div>
                <h3 className="text-lg font-normal text-white mb-3">Clear Access Control</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  Role-based permissions, secure authentication, and transparent data architectures so sensitive client files are accessed only by the right team members.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-white" />
                  PROCESS EFFICIENCY
                </div>
                <h3 className="text-lg font-normal text-white mb-3">Build Efficiently. Grow Responsibly.</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  Removing duplicated administrative steps, unnecessary file duplication, and manual status tracking saves team hours and reduces operational friction.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-white" />
                  PRACTICAL AUTOMATION
                </div>
                <h3 className="text-lg font-normal text-white mb-3">AI Should Solve a Problem</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  AI is valuable when it summarizes inbound enquiries, speeds up document search, or routes repetitive tasks. Not every problem needs AI; we only deploy it where it saves real time.
                </p>
              </div>
            </div>

            {/* Subtle Operational Note */}
            <div className="mt-12 p-6 border border-white/10 bg-white/[0.02] text-center max-w-2xl mx-auto">
              <p className="text-sm sm:text-base text-white/90 font-light">
                “Good businesses shouldn't depend on good memory. <br className="hidden sm:inline" />
                <span className="text-[#9CA3AF]">A clear system keeps information visible and work easy to follow.”</span>
              </p>
            </div>
          </div>
        </section>

        {/* 7. WHY MAYAA */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Working Principles
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-16">
              Understand first. <br />
              <span className="text-[#9CA3AF]">Build second.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4">01 · DISCOVERY</div>
                <h3 className="text-lg font-normal text-white mb-3">UNDERSTAND</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  How the business actually works, where enquiries come from, and where team members spend unnecessary administrative effort.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4">02 · SIMPLIFICATION</div>
                <h3 className="text-lg font-normal text-white mb-3">SIMPLIFY</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  Where handoffs can be streamlined and unnecessary steps removed before any software or interface is developed.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4">03 · PURPOSEFUL BUILD</div>
                <h3 className="text-lg font-normal text-white mb-3">BUILD</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  What technology genuinely needs to do. No unnecessary features, no forced templates, and no technology for the sake of technology.
                </p>
              </div>
            </div>

            {/* Natural Localisation Reference */}
            <div className="mt-16 text-center text-xs text-white/50 font-mono tracking-wider">
              From established practices in Oslo and Bergen to industrial and professional companies across Stavanger and Trondheim.
            </div>
          </div>
        </section>

        {/* BANGALORE DELIVERY MODEL FOR NORWEGIAN ENTERPRISES */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08] bg-[#0A0E15]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#0D9488] mb-4 font-mono">
              Delivery Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-6">
              Engineering anchored in Bangalore. <br />
              <span className="text-[#9CA3AF]">Zero Scandinavian consultancy inflation.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-16">
              Mayaa delivers brand design, digital platforms, and custom business systems directly from our technology hub in Bangalore, India. We offer direct engineer access, quiet execution, and rigorous data protection.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-[#0D9488] uppercase tracking-wider mb-2">01 · TIMEZONE OVERLAP</div>
                <h3 className="text-lg font-normal text-white mb-2">CET / CEST Alignment</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  With a 3.5 to 4.5-hour difference, our afternoon hours seamlessly cover Norwegian business mornings for live design critiques, demos, and reviews.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-[#0D9488] uppercase tracking-wider mb-2">02 · DATA SOVEREIGNTY</div>
                <h3 className="text-lg font-normal text-white mb-2">Nordic Cloud Deployments</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Workflows and data deploy directly to client-owned European cloud infrastructure (AWS Stockholm, Azure Norway East, Hetzner), strictly adhering to GDPR and Datatilsynet mandates.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-[#0D9488] uppercase tracking-wider mb-2">03 · COMMERCIAL INTEGRITY</div>
                <h3 className="text-lg font-normal text-white mb-2">NOK / EUR Milestone Contracts</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Fixed-scope milestone contracts invoiced in NOK or EUR with complete code and intellectual property transfer upon sign-off. Zero recurring software seat fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#0D9488] mb-4 font-mono">
              Norwegian Buyer FAQs
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-12">
              Common questions from <br />
              <span className="text-[#9CA3AF]">Norwegian business leaders.</span>
            </h2>

            <div className="space-y-4">
              {NORWAY_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 bg-white/[0.02] rounded-sm overflow-hidden transition-colors hover:border-white/20"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 text-white hover:text-[#0D9488] transition-colors"
                  >
                    <span className="text-base sm:text-lg font-light">{faq.question}</span>
                    <span className="text-xs font-mono text-white/50 flex-shrink-0">
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

        {/* 8. FINAL CTA */}
        <section className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
              Let's make the business <br />
              <span className="font-normal italic">simpler.</span>
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
