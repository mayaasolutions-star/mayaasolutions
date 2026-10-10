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
  TrendingUp,
  Cpu,
  Database,
  Building2,
  CheckCircle2,
  Users,
  Eye,
  Sliders,
  Zap,
  BarChart3,
  Clock,
  Target
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const USA_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for US companies from Bangalore without an on-the-ground US office?',
    answer:
      'We work directly with US founders, managing directors, and operations executives through structured US morning overlap windows (covering EST and PST working hours). Daily work is coordinated directly through dedicated Slack/Teams channels, interactive Figma boards, and weekly recorded sprint walkthroughs in fluent American English. We do not manufacture claims of physical offices in Manhattan or Silicon Valley where we do not have them. By anchoring senior engineering at our Bangalore headquarters, we provide direct principal-to-engineer communication with exceptional velocity, architectural rigor, and without US agency markups.',
  },
  {
    question: 'How do you handle US data privacy, CCPA, and cloud data sovereignty?',
    answer:
      'All custom business systems, automated workflows, and database layers are deployed directly onto client-owned cloud tenancies in US data regions, including AWS us-east-1 (N. Virginia), AWS us-west-2 (Oregon), or Microsoft Azure US regions. Mayaa never stores, sells, or monetizes client customer data. Systems are built with strict role-based access control (RBAC), multi-factor authentication, and audit logs complying fully with US federal and state standards, including CCPA.',
  },
  {
    question: 'Can your custom systems connect with our existing US software stack (Salesforce, QuickBooks, HubSpot, Slack)?',
    answer:
      'Yes. Our engineering philosophy is to bridge friction, not add tool bloat. We build custom API connectors, webhooks, and synchronization pipelines that tie directly into Salesforce, QuickBooks Online, HubSpot, Stripe, and Slack. Your commercial data stays unified without demanding manual duplicate entry across multiple browser tabs.',
  },
  {
    question: 'How are commercial agreements and invoicing structured for American enterprises?',
    answer:
      'Contracts are fixed-scope, milestone-governed, and invoiced transparently in US Dollars (USD) with explicit deliverables at each phase. You retain 100% intellectual property ownership of all custom source code upon delivery. Furthermore, our bespoke systems carry zero recurring per-user SaaS license fees, giving your business permanent software assets with predictable capital costs.',
  },
];

export const UsaMarketPage: React.FC = () => {
  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: USA_FAQS.map((faq) => ({
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
    { name: 'United States', urlPath: '/global-markets/usa' },
  ]);
  // 8 Focused Commercial Sectors
  const usaIndustries = [
    {
      id: 'architecture-interiors',
      title: 'ARCHITECTURE & INTERIORS',
      tagline: 'Design Studios · Commercial Practices · Turnkey Fit-Out',
      desc: 'Turn a strong portfolio into a stronger brand, high-performing digital experience, and clear client journey.',
    },
    {
      id: 'construction-building',
      title: 'CONSTRUCTION & BUILDING',
      tagline: 'General Contractors · Commercial Builders · Specialty Trades',
      desc: 'Connect leads, estimates, clients, projects, field teams, and management into one unified operational rhythm.',
    },
    {
      id: 'manufacturing-industrial',
      title: 'MANUFACTURING & INDUSTRIAL',
      tagline: 'Component Fabricators · Precision Plants · Contract Assembly',
      desc: 'Make complex operations, custom quotes, and production pipelines easier to see, manage, and communicate.',
    },
    {
      id: 'professional-services',
      title: 'PROFESSIONAL SERVICES',
      tagline: 'Corporate Advisory · Legal & Accounting · Specialty Consultancies',
      desc: 'Bring client acquisition, scope proposals, delivery milestones, and internal workflows into clearer structure.',
    },
    {
      id: 'hospitality',
      title: 'HOSPITALITY & VENUES',
      tagline: 'Boutique Hotels · Culinary Groups · Experiential Destinations',
      desc: 'Deliver a brand experience that drives bookings while streamlining the operational systems behind it.',
    },
    {
      id: 'b2b-distribution',
      title: 'B2B & DISTRIBUTION',
      tagline: 'Wholesale Suppliers · Industrial Distributors · Equipment Reps',
      desc: 'Streamline high-volume inbound quotes, customer accounts, order handoffs, and sales follow-up cadences.',
    },
    {
      id: 'tech-growing',
      title: 'TECHNOLOGY & SCALE-UPS',
      tagline: 'Product Studios · Technical Services · Growth Companies',
      desc: 'Bridge the gap between rapid customer acquisition, service delivery, and executive visibility without adding tool bloat.',
    },
    {
      id: 'owner-led-teams',
      title: 'MULTI-TEAM BUSINESSES',
      tagline: 'Regional Operators · Multi-Branch Practices · Scaling Companies',
      desc: 'Give leadership full visibility across departments and locations without relying on manual status spreadsheets.',
    },
  ];

  return (
    <>
      <SEO
        title="Brand, Digital Experiences & Business Systems for USA | Mayaa Solutions"
        description="Your business is moving fast. Your system should too. Mayaa builds brands, high-performing digital experiences, and personalized business management systems for growing US businesses."
        keywords="business management systems USA, custom business software USA, custom CRM USA, personalized business management system USA, business automation USA, business management software USA, website design USA, web design USA, brand design USA, branding agency USA, digital experience agency USA, custom business systems USA, business software USA, Mayaa Solutions USA"
        canonicalUrl="https://mayaasolutions.in/global-markets/usa"
        schema={[breadcrumbSchema, faqSchema]}
      />

      <div className="bg-[#090D12] text-[#F3F4F6] min-h-screen selection:bg-white selection:text-black font-sans antialiased">

        {/* 1. HERO SECTION */}
        <section className="relative min-h-[88vh] flex items-center justify-center pt-32 pb-24 px-6 md:px-12 border-b border-white/[0.08] overflow-hidden">
          {/* High-contrast commercial architecture texture */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-luminosity">
            <img
              src="/images/usa-commercial-hero.jpg"
              alt="Modern Commercial Architecture & Fast-Moving Enterprise Operations"
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
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF] font-medium">
                Mayaa Solutions × USA
              </span>
            </motion.div>

            {/* Commercially Direct Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.08] mb-8"
            >
              Your business is moving fast. <br className="hidden sm:inline" />
              <span className="font-normal italic text-white/95">Your system should too.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              Brand, digital experience and personalized business systems built around how your company actually sells, delivers and grows.
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
                href="#growth-scale"
                className="w-full sm:w-auto px-9 py-4 border border-white/20 text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-white/[0.05] hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>See What We Build</span>
                <ArrowDown className="w-3.5 h-3.5 text-white/60" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* 2. THE BUSINESS DIDN'T GET COMPLICATED. IT GOT BUSIER. */}
        <section id="growth-scale" className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-semibold">
              Operational Dynamics
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-6">
              The business didn't get complicated. <br />
              <span className="text-[#666666]">It got busier.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light max-w-2xl leading-relaxed mb-16">
              Growth doesn't announce itself with warning labels. It shows up as more leads, more active projects, more team handoffs, and more places where information has to travel.
            </p>

            {/* Visual Scale & Progression */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 border border-[#E5E5E2] bg-[#FAFAF9] rounded-lg shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#666666] mb-3 font-semibold">Lead Intake</div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-light text-[#888888]">5</span>
                    <span className="text-sm text-[#AAAAAA]">→</span>
                    <span className="text-3xl font-light text-[#555555]">50</span>
                    <span className="text-sm text-[#AAAAAA]">→</span>
                    <span className="text-4xl font-normal text-[#171717]">500</span>
                  </div>
                  <div className="text-xs font-mono text-[#666666] mb-4">Leads / Opportunities</div>
                  <p className="text-sm text-[#555555] font-light leading-relaxed">
                    Personal inboxes and memory work at 5. At 50, follow-ups slip. At 500, unassigned deals become an invisible tax on your growth.
                  </p>
                </div>
              </div>

              <div className="p-8 border border-[#E5E5E2] bg-[#FAFAF9] rounded-lg shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#666666] mb-3 font-semibold">Execution Load</div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-light text-[#888888]">1</span>
                    <span className="text-sm text-[#AAAAAA]">→</span>
                    <span className="text-3xl font-light text-[#555555]">10</span>
                    <span className="text-sm text-[#AAAAAA]">→</span>
                    <span className="text-4xl font-normal text-[#171717]">50</span>
                  </div>
                  <div className="text-xs font-mono text-[#666666] mb-4">Active Projects</div>
                  <p className="text-sm text-[#555555] font-light leading-relaxed">
                    A single project is easy to track. Fifty projects mean multiple deadlines, changing scopes, vendor coordination, and scattered approvals.
                  </p>
                </div>
              </div>

              <div className="p-8 border border-[#E5E5E2] bg-[#FAFAF9] rounded-lg shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#666666] mb-3 font-semibold">Organization Size</div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-light text-[#888888]">3</span>
                    <span className="text-sm text-[#AAAAAA]">→</span>
                    <span className="text-3xl font-light text-[#555555]">20</span>
                    <span className="text-sm text-[#AAAAAA]">→</span>
                    <span className="text-4xl font-normal text-[#171717]">100+</span>
                  </div>
                  <div className="text-xs font-mono text-[#666666] mb-4">Team Members</div>
                  <p className="text-sm text-[#555555] font-light leading-relaxed">
                    Three people can talk across a desk. Twenty people need defined workflows. One hundred people need a system that ensures accountability.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Growth Consequence */}
            <div className="mt-8 p-6 border border-[#E5E5E2] bg-[#FAFAF9] rounded-lg shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-sm text-[#555555] font-light">
                <span className="text-[#171717] font-medium">MORE CUSTOMERS · MORE PEOPLE · MORE PROJECTS · MORE DATA · MORE DECISIONS</span>
                <span className="block mt-1 text-xs text-[#666666]">More moving parts require a system that eliminates friction between them.</span>
              </div>
              <div className="text-xs font-mono text-[#666666] uppercase tracking-widest flex-shrink-0 font-semibold">
                SCALED ARCHITECTURE
              </div>
            </div>
          </div>
        </section>

        {/* 3. YOU DON'T HAVE A SOFTWARE PROBLEM. YOU HAVE A CONNECTION PROBLEM. */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Diagnostic Reality
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              You don't have a software problem. <br />
              <span className="text-[#9CA3AF]">You have a connection problem.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mt-12">
              <div className="md:col-span-6 space-y-6 text-[#9CA3AF] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  Your business likely already pays for a CRM, project software, messaging channels, email suites, accounting software, and countless spreadsheets.
                </p>
                <p>
                  The tools work individually. But because they don't talk to each other, <span className="text-white font-normal">your people have become the connection</span>.
                </p>
                <p>
                  Team members manually copy data from emails into spreadsheets, ask colleagues for project updates, chase down quote versions, and manually prepare status reports.
                </p>
                <div className="p-6 border-l-2 border-white/40 bg-white/[0.02] text-white font-normal text-lg">
                  “More software is not always the answer. <br />
                  <span className="text-[#9CA3AF]">Better connection is.”</span>
                </div>
              </div>

              {/* The Disconnected Architecture Diagram */}
              <div className="md:col-span-6 bg-white/[0.02] border border-white/10 p-8 rounded-sm">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70 font-mono mb-6 flex items-center justify-between">
                  <span>DISCONNECTED SILOS</span>
                  <span className="text-xs text-[#EF4444] font-mono">GAP IDENTIFIED</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono text-[#9CA3AF]">
                  {['LEADS (Website/Forms)', 'CRM (Pipeline)', 'SALES (Quotes/Decks)', 'CLIENTS (Contacts/Files)', 'PROJECTS (Task Tool)', 'TEAM (Slack/Teams)', 'FINANCE (Invoicing)', 'MANAGEMENT (Spreadsheets)'].map((tool, idx) => (
                    <div key={idx} className="p-3 border border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
                      <span>{tool}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/[0.08] space-y-2 text-xs text-[#9CA3AF] font-light">
                  <div className="flex items-center gap-2 text-white/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                    What Disconnected Tools Cost:
                  </div>
                  <div>• Missed follow-ups when leads aren't clearly assigned</div>
                  <div>• Duplicated manual entry between CRM and project tools</div>
                  <div>• Leadership forced to ask five people just to confirm project health</div>
                  <div>• Critical business memory locked inside individual heads</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. MAYAA'S THREE LAYERS (BRAND + DIGITAL + SYSTEM) */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-semibold">
              The Mayaa Model
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-8">
              A stronger business experience is not <br />
              <span className="text-[#666666]">three separate projects.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#555555] font-light max-w-3xl leading-relaxed mb-16">
              When brand, website, and business systems operate in isolation, friction is inevitable. When they work together, your business gains momentum at every stage of the customer journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-[#E5E5E2] bg-[#FAFAF9] rounded-lg shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#777777] mb-4">01 · REPUTATION</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#2563EB] font-mono mb-2 font-semibold">How the market sees you</div>
                  <h3 className="text-2xl font-light text-[#171717] mb-3">BRAND</h3>
                  <p className="text-sm text-[#555555] font-light leading-relaxed mb-6">
                    Creates instant credibility. Visual systems, sales collateral, and corporate identity that match the caliber of the work you deliver.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E5E5E2] text-xs font-mono text-[#171717] font-medium">
                  BRAND → <span className="text-[#171717]">Creates Trust</span>
                </div>
              </div>

              <div className="p-8 border border-[#E5E5E2] bg-[#FAFAF9] rounded-lg shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#777777] mb-4">02 · EXPERIENCE</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#2563EB] font-mono mb-2 font-semibold">How customers experience you</div>
                  <h3 className="text-2xl font-light text-[#171717] mb-3">DIGITAL</h3>
                  <p className="text-sm text-[#555555] font-light leading-relaxed mb-6">
                    Drives qualified conversion. Websites and digital touchpoints engineered to explain your value, answer objections, and prompt action.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E5E5E2] text-xs font-mono text-[#171717] font-medium">
                  DIGITAL → <span className="text-white bg-[#171717] px-1 py-0.5 rounded text-[11px]">Creates Action</span>
                </div>
              </div>

              <div className="p-8 border border-[#E5E5E2] bg-[#FAFAF9] rounded-lg shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#777777] mb-4">03 · EXECUTION</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#2563EB] font-mono mb-2 font-semibold">How the business operates</div>
                  <h3 className="text-2xl font-light text-[#171717] mb-3">SYSTEM</h3>
                  <p className="text-sm text-[#555555] font-light leading-relaxed mb-6">
                    Ensures operational control. Personalized workflows that connect leads, clients, project delivery, teams, and executive reporting.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E5E5E2] text-xs font-mono text-[#171717] font-medium">
                  SYSTEM → <span className="text-[#171717]">Creates Consistency</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. BRAND DESIGN: LOOK LIKE THE BUSINESS YOU'VE BUILT */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Competitive Positioning
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              Look like the business <br />
              <span className="text-[#9CA3AF]">you've built.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6 text-[#9CA3AF] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  A company can have exceptional operators, proven client results, and serious capabilities, while its visual identity still looks like an early-stage version of the business.
                </p>
                <p>
                  In a competitive American market, that gap matters. High-value clients and procurement teams evaluate your market stature before ever talking to sales.
                </p>
                <div className="text-white font-medium text-lg pt-2">
                  “Your brand should make your level of business obvious.”
                </div>
              </div>

              <div className="md:col-span-5 bg-white/[0.02] border border-white/10 p-8 rounded-sm space-y-4 text-sm text-[#9CA3AF] font-light">
                <div className="text-xs uppercase tracking-[0.2em] text-white/80 font-mono mb-2">
                  What Mayaa Builds:
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span>Corporate Brand Identity & Visual Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span>Executive Pitch Decks & Sales Presentations</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span>Digital Brand Assets & Guidelines</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span>Consistent Cross-Channel Visual Standards</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. WEBSITE & DIGITAL: YOUR WEBSITE SHOULD DO MORE THAN EXIST */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-semibold">
              Revenue & Conversion
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-8">
              Your website should do <br />
              <span className="text-[#666666]">more than exist.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-7 space-y-6 text-[#555555] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  A modern website is part of your sales team. It shouldn't just sit there like a digital brochure. It needs to explain what you do, who you serve, answer unspoken objections, and guide qualified buyers toward action.
                </p>
                <div className="p-6 border-l-2 border-[#171717] bg-[#FAFAF9] text-[#171717] font-normal text-lg rounded-r-lg">
                  “Your website is part of the sales process. <br />
                  <span className="text-[#666666]">It should explain the business before your sales team has to.”</span>
                </div>
              </div>

              <div className="md:col-span-5 bg-[#FAFAF9] border border-[#E5E5E2] p-8 rounded-lg shadow-sm space-y-4">
                <div className="text-xs uppercase tracking-[0.2em] text-[#171717] font-mono mb-2 font-semibold">
                  What Visitors Need Answered:
                </div>
                <div className="space-y-3 text-xs font-mono text-[#333333]">
                  <div className="p-2.5 border border-[#E5E5E2] bg-white rounded shadow-xs">01 · WHAT YOU DO (Immediate Clarity)</div>
                  <div className="p-2.5 border border-[#E5E5E2] bg-white rounded shadow-xs">02 · WHO YOU SERVE (Exact Alignment)</div>
                  <div className="p-2.5 border border-[#E5E5E2] bg-white rounded shadow-xs">03 · WHY CHOOSE YOU (Proven Track Record)</div>
                  <div className="p-2.5 border border-[#E5E5E2] bg-white rounded shadow-xs">04 · WHAT HAPPENS NEXT (Frictionless Action)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. PERSONALISED BUSINESS MANAGEMENT SYSTEM */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Bespoke Operational Software
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-4">
              STOP BUILDING YOUR BUSINESS AROUND SOFTWARE. <br />
              <span className="text-[#9CA3AF]">BUILD SOFTWARE AROUND YOUR BUSINESS.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-16">
              Your business is unique. Your software should know that. Mayaa studies how your company actually sells, delivers, and manages information, then builds only the modules you genuinely need.
            </p>

            {/* Clean Pipeline Mapping */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {[
                { stage: 'LEAD', sub: 'Inbound / Routing' },
                { stage: 'SALES', sub: 'Pipeline / Quotes' },
                { stage: 'CLIENT', sub: 'History / Files' },
                { stage: 'PROJECT', sub: 'Tasks / Deadlines' },
                { stage: 'TEAM', sub: 'Roles / Approvals' },
                { stage: 'MANAGEMENT', sub: 'Reports / Visibility' },
              ].map((step, idx) => (
                <div key={idx} className="p-5 border border-white/10 bg-white/[0.02] text-center">
                  <div className="text-[10px] font-mono text-white/40 mb-1">0{idx + 1}</div>
                  <div className="text-sm font-medium text-white mb-1">{step.stage}</div>
                  <div className="text-[11px] text-[#9CA3AF] font-light">{step.sub}</div>
                </div>
              ))}
            </div>

            <div className="p-6 border border-white/10 bg-white/[0.02] text-center max-w-xl mx-auto">
              <p className="text-sm sm:text-base text-white/90 font-light">
                “Build only what the business actually needs. <br />
                <span className="text-[#9CA3AF]">No forced modules. No unnecessary complexity.”</span>
              </p>
            </div>
          </div>
        </section>

        {/* 8. WHEN OFF-THE-SHELF STOPS FITTING */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-semibold">
              Strategic Evaluation
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-8">
              When off-the-shelf <br />
              <span className="text-[#666666]">stops fitting.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-[#FCA5A5] bg-[#FEF2F2] rounded-lg shadow-sm">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#DC2626] mb-4 font-semibold">
                  GENERIC OFF-THE-SHELF SOFTWARE
                </div>
                <ul className="space-y-4 text-sm text-[#555555] font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC2626] font-bold">-</span>
                    <span>Built for the mathematical average of 10,000 different businesses.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC2626] font-bold">-</span>
                    <span>Fixed, rigid workflows that force your team into awkward workarounds.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC2626] font-bold">-</span>
                    <span>Requires multiple add-on tools just to share data across departments.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC2626] font-bold">-</span>
                    <span>High monthly licensing fees for hundreds of features you never touch.</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 border border-[#A7F3D0] bg-[#ECFDF5] rounded-lg shadow-sm">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#059669] mb-4 font-semibold">
                  PERSONATELY ARCHITECTED SYSTEM
                </div>
                <ul className="space-y-4 text-sm text-[#171717] font-normal">
                  <li className="flex items-start gap-3">
                    <span className="text-[#059669] font-bold">✓</span>
                    <span>Built directly around your exact intake, sales, and delivery process.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#059669] font-bold">✓</span>
                    <span>Role-specific screens displaying only the data each team member needs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#059669] font-bold">✓</span>
                    <span>Connected operations that give leadership real-time portfolio visibility.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#059669] font-bold">✓</span>
                    <span>Total ownership and flexibility to evolve as your organization grows.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-[#666666] font-mono">
              “Custom makes sense when the way you work has become too important to force into someone else's workflow.”
            </div>
          </div>
        </section>

        {/* 9. MANAGEMENT VISIBILITY: THE OWNER'S VIEW */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Executive Control
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              You shouldn't have to ask five people <br />
              <span className="text-[#9CA3AF]">to know what's happening.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-12">
              A good business system gives executive leadership a clear, real-time pulse of the organization without requiring teams to spend Friday afternoons compiling spreadsheets.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { title: 'New Leads', desc: 'Who came in & who followed up' },
                { title: 'Pipeline Value', desc: 'Active quotes & expected close dates' },
                { title: 'Active Deliveries', desc: 'Real-time project milestone health' },
                { title: 'Delayed Work', desc: 'Immediate bottlenecks highlighted' },
                { title: 'Task Ownership', desc: 'Clear departmental accountability' },
                { title: 'Client Attention', desc: 'Accounts needing immediate touch' },
                { title: 'Executive Approvals', desc: 'Sign-offs that need your decision' },
                { title: 'Team Capacity', desc: 'Workload distribution across units' },
              ].map((item, idx) => (
                <div key={idx} className="p-5 border border-white/10 bg-white/[0.02]">
                  <div className="text-sm font-medium text-white mb-1">{item.title}</div>
                  <div className="text-xs text-[#9CA3AF] font-light">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. AI AND AUTOMATION: USE AI WHERE IT SAVES REAL WORK */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-semibold">
              Pragmatic Automation
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-6">
              Use AI where it <br />
              <span className="text-[#666666]">saves real work.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light max-w-3xl leading-relaxed mb-16">
              US businesses don't need AI hype. AI should remove friction from the workflow, not become another disconnected tool your team has to manage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-[#E5E5E2] bg-[#FAFAF9] rounded-lg shadow-sm">
                <div className="text-xs font-mono text-[#666666] mb-4 flex items-center gap-2 font-semibold">
                  <Workflow className="w-4 h-4 text-[#171717]" />
                  INTAKE & ROUTING
                </div>
                <h3 className="text-lg font-medium text-[#171717] mb-3">Lead Summarization</h3>
                <p className="text-sm text-[#555555] font-light leading-relaxed">
                  Automatically parsing web submissions and email inquiries, generating quick deal briefs, and routing directly to the right account executive.
                </p>
              </div>

              <div className="p-8 border border-[#E5E5E2] bg-[#FAFAF9] rounded-lg shadow-sm">
                <div className="text-xs font-mono text-[#666666] mb-4 flex items-center gap-2 font-semibold">
                  <Clock className="w-4 h-4 text-[#171717]" />
                  FOLLOW-UP CADENCE
                </div>
                <h3 className="text-lg font-medium text-[#171717] mb-3">Task & Follow-up Prompts</h3>
                <p className="text-sm text-[#555555] font-light leading-relaxed">
                  Triggering automatic reminders and next-step actions when a proposal sits untouched, preventing deals from falling cold.
                </p>
              </div>

              <div className="p-8 border border-[#E5E5E2] bg-[#FAFAF9] rounded-lg shadow-sm">
                <div className="text-xs font-mono text-[#666666] mb-4 flex items-center gap-2 font-semibold">
                  <BarChart3 className="w-4 h-4 text-[#171717]" />
                  OPERATIONAL REPORTING
                </div>
                <h3 className="text-lg font-medium text-[#171717] mb-3">Intelligent Reporting</h3>
                <p className="text-sm text-[#555555] font-light leading-relaxed">
                  Aggregating milestone progress and financial metrics into plain-English executive summaries without manual calculation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 11. USA-SPECIFIC INDUSTRIES */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Commercially Relevant Sectors
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-6">
              Built for how American businesses <br />
              <span className="text-[#9CA3AF]">actually operate.</span>
            </h2>
            <p className="text-[#9CA3AF] text-base sm:text-lg font-light max-w-2xl leading-relaxed mb-16">
              Focused on sectors where connecting the brand, digital journey, and back-office operations delivers direct commercial impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {usaIndustries.map((ind) => (
                <div key={ind.id} className="p-6 border border-white/10 bg-white/[0.02] flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9CA3AF] mb-2">
                      {ind.tagline}
                    </div>
                    <h3 className="text-base font-medium text-white mb-3">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-white/[0.06]">
                    <Link to="/contact" className="text-xs text-white/80 hover:text-white flex items-center gap-1">
                      Explore Sector <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. ROI & BUSINESS VALUE: WHAT SHOULD A BETTER SYSTEM DO? */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#666666] mb-4 font-mono font-semibold">
              Commercial Outcomes
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-8">
              What should a better system <br />
              <span className="text-[#666666]">actually do?</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center mb-12">
              {[
                'RESPOND FASTER',
                'MISS FEWER FOLLOW-UPS',
                'SEE MORE CLEARLY',
                'REDUCE REPETITIVE WORK',
                'MAKE OWNERSHIP OBVIOUS',
                'CONSISTENT CUSTOMER EXPERIENCE'
              ].map((val, idx) => (
                <div key={idx} className="p-4 border border-[#E5E5E2] bg-[#FAFAF9] rounded-lg shadow-sm">
                  <span className="text-xs font-mono text-[#171717] tracking-wide font-medium">{val}</span>
                </div>
              ))}
            </div>

            <div className="text-center max-w-xl mx-auto text-sm sm:text-base text-[#171717] font-normal">
              “The objective is not to give the business more software. <br />
              <span className="text-[#666666]">The objective is to make the business easier to run.”</span>
            </div>
          </div>
        </section>

        {/* 13. WHY MAYAA: WE START WITH THE WORK */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Our Methodology
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              We start with the work.
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-16">
              Before recommending a brand, website, or custom software system, Mayaa examines how you sell, how customers find you, how work moves, where information gets stuck, and what leadership needs to see. Then we build what is actually needed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4">01 · OPERATIONAL AUDIT</div>
                <h3 className="text-lg font-normal text-white mb-3">UNDERSTAND</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  How your company sells and delivers value before proposing any interface or code.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4">02 · ARCHITECTURE</div>
                <h3 className="text-lg font-normal text-white mb-3">SIMPLIFY</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  Streamlining handoffs and cutting out administrative drag before developing anything.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-white/50 mb-4">03 · BESPOKE BUILD</div>
                <h3 className="text-lg font-normal text-white mb-3">BUILD</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                  Deploying high-clarity brand assets, conversion websites, and custom business systems.
                </p>
              </div>
            </div>

            {/* Geographic Context */}
            <div className="mt-16 text-center text-xs text-white/50 font-mono tracking-wider">
              Serving growing companies across New York, California, Texas, Florida, Illinois, Washington, Georgia, Massachusetts, North Carolina, Colorado, and across the US.
            </div>
          </div>
        </section>

        {/* BANGALORE DELIVERY MODEL FOR US ENTERPRISES */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2] bg-white text-[#171717]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#2563EB] mb-4 font-mono font-semibold">
              Engineering Delivery
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight mb-6">
              Engineering anchored in Bangalore. <br />
              <span className="text-[#666666]">Zero US agency markups.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light max-w-3xl leading-relaxed mb-16">
              Mayaa delivers brand systems, conversion-driven websites, and bespoke business management systems directly from Bangalore, India. We offer direct engineer access, high velocity, and full US cloud sovereignty.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9] rounded-lg shadow-sm">
                <div className="text-xs font-mono text-[#2563EB] uppercase tracking-wider mb-2 font-semibold">01 · TIMEZONE OVERLAP</div>
                <h3 className="text-lg font-medium text-[#171717] mb-2">EST & PST Morning Windows</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Our working hours directly cover US morning start-ups, live standups, design reviews, and sprint handoffs with senior engineers in fluent American English.
                </p>
              </div>

              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9] rounded-lg shadow-sm">
                <div className="text-xs font-mono text-[#2563EB] uppercase tracking-wider mb-2 font-semibold">02 · DATA SOVEREIGNTY</div>
                <h3 className="text-lg font-medium text-[#171717] mb-2">US Cloud Tenancies</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Workflows and data deploy directly to client-owned US cloud infrastructure (AWS us-east-1, us-west-2, Azure US), adhering strictly to CCPA, federal guidelines, and zero data-mining.
                </p>
              </div>

              <div className="p-6 border border-[#E5E5E2] bg-[#FAFAF9] rounded-lg shadow-sm">
                <div className="text-xs font-mono text-[#2563EB] uppercase tracking-wider mb-2 font-semibold">03 · TRANSPARENT TERMS</div>
                <h3 className="text-lg font-medium text-[#171717] mb-2">USD Milestone Contracts</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Fixed-scope milestone contracts invoiced in USD with 100% intellectual property ownership upon completion. Zero perpetual per-user software licensing fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#3B82F6] mb-4 font-mono">
              US Decision-Maker FAQs
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-12">
              Common questions from <br />
              <span className="text-[#9CA3AF]">US business leaders.</span>
            </h2>

            <div className="space-y-4">
              {USA_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 bg-white/[0.02] rounded-sm overflow-hidden transition-colors hover:border-white/20"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 text-white hover:text-[#3B82F6] transition-colors"
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

        {/* 14. FINAL CTA */}
        <section className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden bg-white text-[#171717] border-t border-[#E5E5E2]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-[#171717] mb-6">
              Your business is already moving. <br />
              <span className="font-normal italic">Make sure everything around it can keep up.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light max-w-xl mx-auto mb-10 leading-relaxed">
              If your brand needs to catch up with the business, your digital experience needs to work harder, or your current tools no longer fit the way your company operates, let's discuss it.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 bg-[#111111] text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center gap-3 group shadow-sm"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 border border-[#CCCCCC] text-[#171717] font-medium text-xs uppercase tracking-[0.2em] hover:bg-black/5 hover:border-[#999999] transition-all duration-300"
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
