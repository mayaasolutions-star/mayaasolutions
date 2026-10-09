import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown, 
  Check, 
  Workflow, 
  Layers, 
  Cpu, 
  Sparkles, 
  ChevronDown, 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  Eye, 
  Building2, 
  Boxes, 
  Lock, 
  Globe2,
  Clock,
  CreditCard
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const SWISS_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for Swiss businesses from Bangalore without a local Swiss office?',
    answer:
      'We work directly with Swiss founders, partners, and operational leaders through scheduled daily timezone overlap, clear written specifications, and asynchronous video walkthroughs. We do not claim local Swiss offices where we do not have them. By concentrating our senior engineering and brand designers in our Bangalore studio, we eliminate expensive agency overhead while delivering rigorous, disciplined execution.',
  },
  {
    question: 'How do you ensure data confidentiality and security for Swiss clients?',
    answer:
      'All bespoke software and business management systems are deployed on client-owned cloud infrastructure (such as AWS Europe/Zurich, Azure Switzerland, or dedicated European VPS providers). Your business retains 100% intellectual property ownership of the codebase and complete data sovereignty under strict non-disclosure agreements.',
  },
  {
    question: 'Can your systems integrate with existing Swiss accounting or CRM software?',
    answer:
      'Yes. Our custom Business Management Systems (BMS) are engineered with modern API connectors that can link with popular accounting platforms (such as Bexio or Abacus), banking export formats (CAMT.053 / ISO 20022), or legacy SQL databases, preventing duplicate data entry and manual reconciliation.',
  },
  {
    question: 'How are commercial agreements and invoicing structured?',
    answer:
      'We quote and invoice directly in Swiss Francs (CHF) or Euros (EUR) with transparent, milestone-based deliverables. Every phase—from discovery and wireframing to code deployment—has clear acceptance criteria and zero recurring per-user licensing fees.',
  },
];

const SWISS_SECTORS = [
  {
    num: '01',
    title: 'Precision & Specialist Manufacturing',
    region: 'Jura Arc · Zurich Unterland · St. Gallen',
    challenge: 'High-precision micro-machining, medical components, and advanced industrial equipment require conveying exact tolerance and technical rigor.',
    solution: 'Digital platforms and technical sales collateral that communicate complex engineering specifications clearly to international buyers, procurement leads, and distributors.',
  },
  {
    num: '02',
    title: 'Life Sciences & MedTech Innovation',
    region: 'Basel BioTech Hub · Lake Geneva Health Valley · Schlieren',
    challenge: 'Research-led diagnostics, therapeutic platforms, and MedTech innovations must address sophisticated scientific and regulatory audiences.',
    solution: 'Clean, credible digital experiences that organize intricate clinical data, scientific proof, and regulatory compliance without visual ambiguity.',
  },
  {
    num: '03',
    title: 'Professional & Fiduciary Services',
    region: 'Zurich Financial District · Geneva Wealth Management · Zug',
    challenge: 'Wealth advisory, corporate legal counsel, and multi-family offices depend entirely on absolute discretion, trust, and professional gravitas.',
    solution: 'Understated, secure client touchpoints and mandate portals that reinforce institutional credibility, clarity of engagement, and confidentiality.',
  },
  {
    num: '04',
    title: 'Architecture & Specialist Practices',
    region: 'Graubünden · Basel Architecture Studios · Lausanne',
    challenge: 'Practices that compete on spatial craftsmanship, structural elegance, and SIA compliance require a digital portfolio that mirrors their physical discipline.',
    solution: 'Architectural web portfolios and project registries with precise typographic scales and measured layouts that let the built work command attention.',
  },
  {
    num: '05',
    title: 'International B2B & Commodity Trade',
    region: 'Zug Commodity Corridor · Lucerne · Winterthur',
    challenge: 'Businesses managing complex multi-market supply agreements, cross-border distributor networks, and multi-currency commercial terms.',
    solution: 'Unified customer inquiry pathways, structured proposal generation, and multi-regional digital presentations that support cross-border commerce.',
  },
];

const FRICTION_OPTIONS = [
  {
    id: 0,
    question: 'Customers do not fully understand what we offer.',
    diagnosis: 'Strategic Brand Positioning & Communication Architecture',
    advice: 'When specialist expertise is difficult to explain, prospective clients default to comparing you on price or misunderstand the scope. We refine your commercial positioning, messaging hierarchy, and visual presentation so international buyers grasp your value before the first meeting.',
    capability: 'BRAND DESIGN',
    link: '/brand',
  },
  {
    id: 1,
    question: 'Our website does not reflect our capabilities.',
    diagnosis: 'High-Precision Digital Experience & Proof Architecture',
    advice: 'If your digital touchpoint feels dated or generic compared to the physical rigor of your engineering or service delivery, high-value prospects lose conviction. We build bespoke web platforms that present complex capabilities with clarity, restraint, and authority.',
    capability: 'WEBSITE & DIGITAL EXPERIENCE',
    link: '/websites',
  },
  {
    id: 2,
    question: 'Leads and follow-ups are difficult to coordinate.',
    diagnosis: 'Commercial Intake & Pipeline Coordination Workflow',
    advice: 'A personalized commercial intake system brings high-value inquiry details, technical scoping, assigned ownership, follow-up milestones, and sales progress into one dependable view—ensuring no prospective mandate is neglected.',
    capability: 'PERSONALISED BUSINESS MANAGEMENT SYSTEMS',
    link: '/business-systems',
  },
  {
    id: 3,
    question: 'Projects and team responsibilities are scattered.',
    diagnosis: 'Operational Milestone & Task Governance System',
    advice: 'Scattered updates across email chains and chat create unnecessary coordination meetings. A tailored operations environment organizes project milestones, technical deliverables, and role-based responsibilities so autonomous teams execute smoothly.',
    capability: 'PERSONALISED BUSINESS MANAGEMENT SYSTEMS',
    link: '/business-systems',
  },
  {
    id: 4,
    question: 'We rely on repetitive manual work.',
    diagnosis: 'Pragmatic Workflow Automation & System Bridges',
    advice: 'Rather than adding another subscription platform, we connect your existing accounting, CRM, and project tools with custom integrations and targeted automation that eliminate copy-pasting and routine administrative drag.',
    capability: 'INTEGRATION & WORKFLOW AUTOMATION',
    link: '/business-systems',
  },
];

export const SwitzerlandMarketPage: React.FC = () => {
  const [alignmentState, setAlignmentState] = useState<'disconnected' | 'aligned'>('aligned');
  const [selectedFrictionId, setSelectedFrictionId] = useState<number>(2);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const activeFriction = FRICTION_OPTIONS.find((f) => f.id === selectedFrictionId) || FRICTION_OPTIONS[0];

  return (
    <div className="min-h-screen bg-[#0C0F14] text-[#F8F8F6] selection:bg-[#C2413A] selection:text-white font-sans antialiased">
      <SEO
        title="The Standard Is in the Details | Mayaa Solutions Switzerland"
        description="Brand design, high-clarity websites, and personalised business management systems for ambitious Swiss businesses. Built for precision engineering, life sciences, professional services, and architecture across Zurich, Basel, Geneva, and Lausanne."
        canonicalUrl="https://mayaasolutions.in/global-markets/switzerland"
        schema={[
          getBreadcrumbSchema([
            { name: 'Home', urlPath: '/' },
            { name: 'Global Markets', urlPath: '/global-markets' },
            { name: 'Switzerland', urlPath: '/global-markets/switzerland' },
          ]),
        ]}
      />

      {/* =========================================================================
          01. EDITORIAL HERO — THE STANDARD IS IN THE DETAILS
      ========================================================================= */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 border-b border-[#1E2532] overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#F8F8F6 1px, transparent 1px), linear-gradient(to right, #F8F8F6 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Top Metadata Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#1E2532] text-xs font-mono text-[#8E95A2]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C2413A]" />
              <span className="text-[#E2E4E9] font-medium tracking-wider">MAYAA SOLUTIONS × SWITZERLAND</span>
              <span className="text-[#364152]">·</span>
              <span className="text-[#6C788A]">EDITION 2026</span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-[#6C788A]">
              <span>ZURICH · BASEL · GENEVA · LAUSANNE · BERN</span>
              <span>KMU CONTEXT</span>
              <span className="text-[#C2413A] font-semibold">PRECISION EDITORIAL</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
            {/* Left Typographic Statement */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141821] border border-[#232B39] text-[#E08A85] text-xs font-mono tracking-widest uppercase rounded">
                <span className="w-1 h-1 rounded-full bg-[#C2413A]" />
                PRECISION & DISCRETION
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#FAF9F5] leading-[1.06]">
                THE STANDARD <br />
                <span className="text-[#E08A85] font-normal">IS IN THE</span> <br />
                DETAILS.
              </h1>

              <p className="text-lg sm:text-xl text-[#B9BFCB] leading-relaxed max-w-xl font-light">
                Your expertise deserves a <span className="text-white font-normal">brand</span> that reflects it, a <span className="text-white font-normal">digital experience</span> that communicates it, and <span className="text-white font-normal">business systems</span> that support it behind the scenes.
              </p>

              <p className="text-sm text-[#8E95A2] leading-relaxed max-w-lg font-normal">
                Headquartered in Bangalore, our studio collaborates with Swiss commercial leaders and practices to engineer software and digital platforms that operate with quiet reliability.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#FAF9F5] hover:bg-[#EAE8E1] text-[#0C0F14] font-medium text-sm tracking-wide rounded transition-all duration-200 shadow-sm"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 text-[#0C0F14]" />
                </Link>

                <a
                  href="#disconnect"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#131720] hover:bg-[#1A202C] text-[#D8DAE0] border border-[#242D3C] text-sm tracking-wide rounded transition-all duration-200"
                >
                  <span>See How We Help</span>
                  <ArrowDown className="w-4 h-4 text-[#8E95A2]" />
                </a>
              </div>
            </div>

            {/* Right: Architectural Photographic Composition */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-[#222938] group shadow-2xl">
                <img
                  src="/images/switzerland-commercial-hero.jpg"
                  alt="Swiss precision engineering and architectural studio reviewing plans and micro-components"
                  className="w-full h-72 sm:h-80 object-cover object-center filter grayscale-[15%] contrast-[105%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F14] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#8E95A2]">
                  <span>ZURICH / BASEL TECHNICAL SPEC</span>
                  <span className="text-[#C2413A]">ENGINEERED CRAFT</span>
                </div>
              </div>

              <div className="p-4 bg-[#11151D] border border-[#1F2634] rounded-lg text-xs font-mono text-[#8E95A2] flex items-center justify-between">
                <span>CONSISTENT EXECUTION BUILDS TRUST</span>
                <span className="text-[#D8DAE0]">REF: CH-PRECISION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02. THE DISCONNECT: MISALIGNMENT VS COHERENCE
      ========================================================================= */}
      <section id="disconnect" className="py-24 md:py-32 border-b border-[#1E2532] bg-[#0E1218]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#C2413A]">01 / COMMERCIAL ALIGNMENT</span>
            <div className="h-[1px] w-12 bg-[#252E3E]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF9F5] leading-tight">
                WHEN THE WORK IS RIGOROUS, <br />
                <span className="text-[#E08A85]">THE EXPERIENCE SHOULD BE TOO.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#B9BFCB] leading-relaxed font-light">
                A company can deliver exceptional physical or professional work and still leave significant commercial conviction on the table.
              </p>

              <div className="space-y-3 text-sm text-[#8E95A2]">
                <p>In practice, disconnects accumulate quietly:</p>
                <ul className="space-y-2 border-l border-[#242D3C] pl-4 text-xs font-mono text-[#D8DAE0]">
                  <li>• Specialist capabilities are obscured behind generic web copy.</li>
                  <li>• Outdated brand presentation fails to justify premium billing rates.</li>
                  <li>• High-value inquiries and project handoffs rely on manual email chasing.</li>
                </ul>
              </div>

              <p className="text-sm text-[#8E95A2] leading-relaxed">
                When tools and touchpoints are fragmented, <span className="text-white font-medium">the experience of doing business becomes less coherent than the business itself.</span> Mayaa brings brand presentation, web architecture, and back-office pipelines into unified alignment.
              </p>

              {/* Toggle Controls */}
              <div className="pt-2">
                <div className="inline-flex p-1 bg-[#141821] border border-[#232B39] rounded-md text-xs font-mono">
                  <button
                    onClick={() => setAlignmentState('disconnected')}
                    className={`px-4 py-2 rounded transition-all duration-200 cursor-pointer ${
                      alignmentState === 'disconnected'
                        ? 'bg-[#2A1719] text-[#E58B88] border border-[#4E2428]'
                        : 'text-[#8E95A2] hover:text-[#FAF9F5]'
                    }`}
                  >
                    THE DISCONNECT
                  </button>
                  <button
                    onClick={() => setAlignmentState('aligned')}
                    className={`px-4 py-2 rounded transition-all duration-200 cursor-pointer ${
                      alignmentState === 'aligned'
                        ? 'bg-[#18261F] text-[#71C7A5] border border-[#27483C]'
                        : 'text-[#8E95A2] hover:text-[#FAF9F5]'
                    }`}
                  >
                    COHERENT ALIGNMENT
                  </button>
                </div>
              </div>
            </div>

            {/* Diagnostic Card Container */}
            <div className="lg:col-span-6">
              <div className="p-8 bg-[#11151D] border border-[#212836] rounded-xl shadow-xl space-y-5">
                <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#1C2330]">
                  <span className="text-[#8E95A2]">ARCHITECTURE STATE</span>
                  <span className={alignmentState === 'aligned' ? 'text-[#71C7A5]' : 'text-[#E58B88]'}>
                    {alignmentState === 'aligned' ? 'SYNCHRONIZED' : 'FRICTION DETECTED'}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {alignmentState === 'disconnected' ? (
                    <motion.div
                      key="disconnected"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="space-y-3 text-xs"
                    >
                      <div className="p-4 bg-[#181316] border border-[#3A1E24] rounded text-[#E58B88] space-y-1">
                        <div className="font-mono font-semibold">BRAND: Generic Market Presence</div>
                        <p className="text-[11px] text-[#C48D93]">Looks like every other competitor, forcing unnecessary price negotiations.</p>
                      </div>
                      <div className="p-4 bg-[#181316] border border-[#3A1E24] rounded text-[#E58B88] space-y-1">
                        <div className="font-mono font-semibold">WEBSITE: Dense & Opaque Hierarchy</div>
                        <p className="text-[11px] text-[#C48D93]">International decision-makers struggle to locate technical specifications quickly.</p>
                      </div>
                      <div className="p-4 bg-[#181316] border border-[#3A1E24] rounded text-[#E58B88] space-y-1">
                        <div className="font-mono font-semibold">SYSTEMS: Fragmented SaaS & Spreadsheets</div>
                        <p className="text-[11px] text-[#C48D93]">Leadership spends hours chasing teams for status updates and billing milestones.</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="aligned"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="space-y-3 text-xs"
                    >
                      <div className="p-4 bg-[#121E18] border border-[#214333] rounded text-[#71C7A5] space-y-1">
                        <div className="font-mono font-semibold">01. BRAND: Authoritative Gravitas</div>
                        <p className="text-[11px] text-[#A3C9B8]">Immediate recognition of capability, quality, and distinctive positioning.</p>
                      </div>
                      <div className="p-4 bg-[#121E18] border border-[#214333] rounded text-[#71C7A5] space-y-1">
                        <div className="font-mono font-semibold">02. WEBSITE: Frictionless Evaluation</div>
                        <p className="text-[11px] text-[#A3C9B8]">Transparent capabilities, technical proof, and direct consultation pathways.</p>
                      </div>
                      <div className="p-4 bg-[#121E18] border border-[#214333] rounded text-[#71C7A5] space-y-1">
                        <div className="font-mono font-semibold">03. SYSTEMS: Unified Operational Pipeline</div>
                        <p className="text-[11px] text-[#A3C9B8]">Inquiries, milestones, and executive metrics united in one custom platform.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03. 5 SWISS BUSINESS CONTEXTS
      ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#1E2532]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#C2413A]">02 / SWISS SECTOR REALITIES</span>
            <div className="h-[1px] w-12 bg-[#252E3E]" />
          </div>

          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF9F5] leading-tight mb-4">
              TAILORED FOR HIGH-STANDARD PRACTICE.
            </h2>
            <p className="text-[#8E95A2] text-sm sm:text-base leading-relaxed">
              We structure digital touchpoints and operating systems around the specific commercial dynamics of Swiss industrial, medical, and professional clusters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SWISS_SECTORS.map((sector) => (
              <div
                key={sector.num}
                className="p-7 bg-[#11151D] border border-[#1F2634] rounded-xl flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#8E95A2] mb-4">
                    <span>SECTOR {sector.num}</span>
                    <span className="text-[#C2413A]">CH</span>
                  </div>

                  <h3 className="text-lg font-medium text-white mb-2 leading-snug">
                    {sector.title}
                  </h3>

                  <span className="text-[11px] font-mono text-[#E08A85] block mb-4">
                    {sector.region}
                  </span>

                  <p className="text-xs text-[#8E95A2] leading-relaxed mb-4">
                    <strong className="text-[#D8DAE0]">Challenge:</strong> {sector.challenge}
                  </p>

                  <p className="text-xs text-[#B9BFCB] leading-relaxed">
                    <strong className="text-white">Solution:</strong> {sector.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          04. INTERACTIVE DIAGNOSTIC EXPLORER
      ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#1E2532] bg-[#0E1218]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#C2413A]">03 / OPERATIONAL DIAGNOSTIC</span>
            <div className="h-[1px] w-12 bg-[#252E3E]" />
          </div>

          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF9F5] leading-tight mb-4">
              WHAT IS SLOWING YOUR BUSINESS DOWN?
            </h2>
            <p className="text-[#8E95A2] text-sm sm:text-base leading-relaxed">
              Select an area of operational or commercial friction to review our diagnostic evaluation and recommended architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Options list (5 cols) */}
            <div className="lg:col-span-5 space-y-2">
              {FRICTION_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedFrictionId(opt.id)}
                  className={`w-full text-left p-4 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    selectedFrictionId === opt.id
                      ? 'bg-[#181E29] text-[#FAF9F5] border border-[#C2413A] shadow-md'
                      : 'bg-[#11151D] text-[#8E95A2] border border-[#1F2634] hover:text-[#FAF9F5]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{opt.question}</span>
                    <span className="text-[10px] text-[#C2413A] ml-2">→</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Diagnostic advice card (7 cols) */}
            <div className="lg:col-span-7 p-8 bg-[#11151D] border border-[#212836] rounded-xl space-y-6">
              <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#1C2330]">
                <span className="text-[#E08A85] font-semibold">{activeFriction.capability}</span>
                <span className="text-[#8E95A2]">DIAGNOSTIC ADVICE</span>
              </div>

              <h3 className="text-xl font-medium text-white tracking-tight">
                {activeFriction.diagnosis}
              </h3>

              <p className="text-sm text-[#B9BFCB] leading-relaxed font-light">
                {activeFriction.advice}
              </p>

              <div className="pt-4 flex items-center justify-between">
                <Link
                  to={activeFriction.link}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-[#E08A85] transition-colors"
                >
                  <span>Explore this capability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/contact"
                  className="px-5 py-2.5 bg-[#FAF9F5] text-[#0C0F14] text-xs font-mono uppercase tracking-wider rounded font-medium hover:bg-[#EAE8E1] transition-all"
                >
                  Discuss Mandate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05. COLLABORATION STANDARDS & BANGALORE ENGINE
      ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#1E2532]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#C2413A]">04 / DELIVERY ARCHITECTURE</span>
            <div className="h-[1px] w-12 bg-[#252E3E]" />
          </div>

          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF9F5] leading-tight mb-4">
              CROSS-BORDER COLLABORATION BUILT ON TRUST.
            </h2>
            <p className="text-[#8E95A2] text-sm sm:text-base leading-relaxed">
              We operate without superficial agency posturing. Our centralized Bangalore studio works directly with Swiss teams through predictable, disciplined routines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#11151D] border border-[#1F2634] rounded-xl space-y-3">
              <Clock className="w-5 h-5 text-[#E08A85]" />
              <h4 className="text-sm font-medium text-white">Timezone Overlap</h4>
              <p className="text-xs text-[#8E95A2] leading-relaxed">
                Daily working windows overlapping Swiss business hours (CET/CEST) combined with recorded video walkthroughs.
              </p>
            </div>

            <div className="p-6 bg-[#11151D] border border-[#1F2634] rounded-xl space-y-3">
              <ShieldCheck className="w-5 h-5 text-[#E08A85]" />
              <h4 className="text-sm font-medium text-white">Direct Senior Access</h4>
              <p className="text-xs text-[#8E95A2] leading-relaxed">
                Direct communication with the software engineers and brand designers executing your work, avoiding account layers.
              </p>
            </div>

            <div className="p-6 bg-[#11151D] border border-[#1F2634] rounded-xl space-y-3">
              <CreditCard className="w-5 h-5 text-[#E08A85]" />
              <h4 className="text-sm font-medium text-white">Invoicing in CHF / EUR</h4>
              <p className="text-xs text-[#8E95A2] leading-relaxed">
                Clear milestone-based commercial terms with quotes in Swiss Francs or Euros and zero hidden recurring licensing fees.
              </p>
            </div>

            <div className="p-6 bg-[#11151D] border border-[#1F2634] rounded-xl space-y-3">
              <Lock className="w-5 h-5 text-[#E08A85]" />
              <h4 className="text-sm font-medium text-white">100% IP & Data Control</h4>
              <p className="text-xs text-[#8E95A2] leading-relaxed">
                Complete intellectual property transfer upon delivery. Systems deployed on client-controlled European cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06. SWISS BUYER FAQS
      ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#1E2532] bg-[#0E1218]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C2413A] block mb-3">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Direct answers for Swiss decision-makers.
            </h2>
          </div>

          <div className="space-y-4">
            {SWISS_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#11151D] border border-[#1F2634] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-medium text-white tracking-tight">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#8E95A2] shrink-0 transition-transform duration-300 ${
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
                        <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-[#8E95A2] leading-relaxed border-t border-[#1C2330]">
                          <p className="pt-4">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          07. REFINED CONVERSION CTA
      ========================================================================= */}
      <section className="py-28 md:py-36 px-6 md:px-12 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#232B39] bg-[#141821] mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#E08A85]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C2413A]">
            COLLABORATION · SWITZERLAND
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.06] mb-6 max-w-4xl text-balance">
          Your business has its own standard. <br />
          <span className="font-normal italic text-[#E08A85]">Your systems and brand should too.</span>
        </h2>

        <p className="text-base sm:text-xl text-[#8E95A2] font-light leading-relaxed max-w-2xl mb-10 text-balance">
          Tell us how your business functions, where communication or operations break down, and what standard you want your team to operate at.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#FAF9F5] text-[#0C0F14] font-medium text-xs sm:text-sm uppercase tracking-wider rounded transition-all hover:bg-[#EAE8E1] shadow-xl group"
          >
            <span>Discuss Your Requirements</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="mailto:contact@mayaasolutions.in?subject=Switzerland%20Commercial%20Inquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#11151D] text-[#D8DAE0] hover:text-white border border-[#242D3C] text-xs sm:text-sm uppercase tracking-wider rounded transition-all font-mono"
          >
            contact@mayaasolutions.in
          </a>
        </div>

        <div className="pt-8 border-t border-[#1E2532] flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-[#8E95A2] uppercase tracking-wider">
          <Link to="/global-markets" className="hover:text-white transition-colors">
            ← Global Markets Directory
          </Link>
          <span>•</span>
          <Link to="/brand" className="hover:text-white transition-colors">
            Brand Building
          </Link>
          <span>•</span>
          <Link to="/websites" className="hover:text-white transition-colors">
            Websites
          </Link>
          <span>•</span>
          <Link to="/business-systems" className="hover:text-white transition-colors">
            Business Systems
          </Link>
        </div>
      </section>

    </div>
  );
};
