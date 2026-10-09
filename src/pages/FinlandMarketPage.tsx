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
  Radio, 
  Activity, 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  Lock, 
  Globe2 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const FINLAND_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver software and digital experiences for Finnish enterprises from Bangalore?',
    answer:
      'We collaborate directly with Finnish founders, technical leads, and operations managers through scheduled daily timezone overlap (EET/EEST), detailed written engineering specifications, and recorded code/design walkthroughs. We do not claim local Finnish satellite offices. Concentrating senior engineers and brand designers in our Bangalore studio allows us to deliver high-velocity, clean software without agency overhead.',
  },
  {
    question: 'How do you avoid the typical bloat found in generic digital agency projects?',
    answer:
      'We write clean, production-grade React and TypeScript code without bloated WordPress templates or unnecessary third-party plugins. For internal systems, we build bespoke Business Management Systems (BMS) that map strictly to your necessary workflow stages rather than forcing you to pay monthly per-user fees for generic, half-used SaaS products.',
  },
  {
    question: 'Can your team integrate with existing technical databases or open-source infrastructure?',
    answer:
      'Yes. Our systems are built with open API standards (REST / GraphQL) and can securely interface with PostgreSQL, Supabase, ERP export streams, or existing inventory databases, preserving historical data integrity.',
  },
  {
    question: 'How are commercial milestones and intellectual property handled?',
    answer:
      'We quote and invoice directly in Euros (EUR) tied to concrete technical milestones. Upon completion, 100% of all intellectual property, source code, and design assets belong entirely to your company with zero ongoing licensing obligations.',
  },
];

const FINNISH_ECOSYSTEMS = [
  {
    sector: 'Industrial & Marine Engineering',
    hubs: 'Tampere · Vaasa Energy Cluster · Turku',
    challenge: 'High-precision industrial machinery, marine engineering, and automated production components requiring international export credibility.',
    solution: 'Clear technical product communication and connected commercial pipelines that help global buyers evaluate capability and specifications with conviction.',
  },
  {
    sector: 'Clean Technology & Circular Solutions',
    hubs: 'Espoo CleanTech · Lappeenranta Circular Hub',
    challenge: 'Pioneering energy transition platforms, bio-materials, and clean industrial processes that need to convey genuine economic and technical viability.',
    solution: 'Restrained, authoritative digital experiences that demonstrate verifiable engineering performance without superficial greenwashing or marketing hype.',
  },
  {
    sector: 'B2B Software & Digital Products',
    hubs: 'Espoo (Otaniemi) · Oulu ICT · Helsinki',
    challenge: 'Specialist software platforms, IoT hardware, and B2B digital services that must bridge the gap between deep technical code and commercial value.',
    solution: 'Frictionless customer onboarding journeys and clear product architecture that make technical value immediately accessible to buyers.',
  },
  {
    sector: 'Health Technology & Diagnostics',
    hubs: 'Helsinki Health Capital · Kuopio · Turku BioValley',
    challenge: 'Medical devices, clinical diagnostics, and biotechnology innovations requiring rigorous, structured presentation for regulatory and clinical partners.',
    solution: 'Credible, highly structured digital environments that organize complex clinical data, compliance baselines, and commercial partnerships.',
  },
];

const PRIORITY_OPTIONS = [
  {
    id: 0,
    title: 'Our brand no longer reflects our true capability.',
    diagnosis: 'Commercial Positioning & Visual Architecture',
    remedy: 'As companies evolve, technical substance frequently outpaces their original market presentation. We distill your current capabilities into an authoritative brand identity and visual hierarchy that reflects who you are today.',
    capability: 'BRAND BUILDING',
    link: '/brand',
  },
  {
    id: 1,
    title: 'Our website does not communicate our value clearly.',
    diagnosis: 'Information Architecture & Digital Proof',
    remedy: 'Having a website is universal; communicating specialist differentiation is rare. We structure your digital experience around customer evaluation criteria, making complex products immediately understandable to international decision-makers.',
    capability: 'WEBSITE & DIGITAL EXPERIENCE',
    link: '/websites',
  },
  {
    id: 2,
    title: 'Our offering is difficult to explain to customers.',
    diagnosis: 'Offer Packaging & Technical Product Clarity',
    remedy: 'Deep engineering or specialist services can confuse prospective buyers when presented in dense paragraphs. We translate technical complexity into clear, modular service architectures and visual explanations.',
    capability: 'SERVICE PRESENTATION',
    link: '/websites',
  },
  {
    id: 3,
    title: 'Leads, clients, and follow-ups are difficult to manage.',
    diagnosis: 'Commercial Intake & Pipeline Governance',
    remedy: 'Scattered inquiries across forms, personal inboxes, and phone calls lead to lost momentum. A personalized intake workflow unifies incoming enquiries, assigns ownership, and establishes automated follow-up cadences.',
    capability: 'PERSONALISED BUSINESS MANAGEMENT SYSTEMS',
    link: '/business-systems',
  },
  {
    id: 4,
    title: 'Projects and team responsibilities are scattered.',
    diagnosis: 'Milestone Delivery & Operational Governance',
    remedy: 'Teams often burn hours in alignment meetings when project status is unclear. A custom operational workspace connects technical deliverables, client milestones, and task ownership without software bloat.',
    capability: 'OPERATIONAL WORKFLOW DESIGN',
    link: '/business-systems',
  },
];

export const FinlandMarketPage: React.FC = () => {
  const [signalMode, setSignalMode] = useState<'noise' | 'signal'>('signal');
  const [selectedPriorityId, setSelectedPriorityId] = useState<number>(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const activePriority = PRIORITY_OPTIONS.find((p) => p.id === selectedPriorityId) || PRIORITY_OPTIONS[0];

  return (
    <div className="min-h-screen bg-[#070A0E] text-[#F3F4F6] selection:bg-[#A3E635] selection:text-[#070A0E] font-sans antialiased">
      <SEO
        title="Less Noise. More That Works. | Mayaa Solutions Finland"
        description="Brand design, high-clarity websites, and personalised business management systems for Finnish businesses. Engineered for purpose, clarity, and operational momentum across Helsinki, Espoo, Tampere, and Oulu."
        canonicalUrl="https://mayaasolutions.in/global-markets/finland"
        schema={[
          getBreadcrumbSchema([
            { name: 'Home', urlPath: '/' },
            { name: 'Global Markets', urlPath: '/global-markets' },
            { name: 'Finland', urlPath: '/global-markets/finland' },
          ]),
        ]}
      />

      {/* =========================================================================
          01. EDITORIAL HERO — THE SIGNAL
      ========================================================================= */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 border-b border-[#1A222D] overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#F3F4F6 1px, transparent 1px), linear-gradient(to right, #F3F4F6 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Top Signal Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#1A222D] text-xs font-mono text-[#828B99]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-pulse" />
              <span className="text-[#E5E7EB] font-medium tracking-wider">MAYAA SOLUTIONS × FINLAND</span>
              <span className="text-[#374151]">·</span>
              <span className="text-[#6B7280]">SPEC: THE SIGNAL</span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-[#6B7280]">
              <span>HELSINKI · ESPOO · TAMPERE · OULU</span>
              <span>TECHNICAL RIGOR</span>
              <span className="text-[#A3E635] font-semibold">SIGNAL OVER NOISE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101720] border border-[#202E3D] text-[#A3E635] text-xs font-mono tracking-widest uppercase rounded">
                <Radio className="w-3.5 h-3.5 text-[#A3E635]" />
                THE SIGNAL PHILOSOPHY
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#FAF9F5] leading-[1.05]">
                LESS NOISE. <br />
                <span className="text-[#A3E635] font-normal">MORE THAT</span> <br />
                WORKS.
              </h1>

              <p className="text-lg sm:text-xl text-[#B4BAC6] leading-relaxed max-w-xl font-light">
                From the way your business is presented to the way work gets executed, meaningful improvements should make operations <span className="text-white font-normal">clearer</span>, not more complicated.
              </p>

              <p className="text-sm text-[#828B99] leading-relaxed max-w-lg font-normal">
                Based in Bangalore, our engineering and design studio partners with Finnish companies to strip away digital clutter, articulate specialist value, and build tailored operating software without subscription bloat.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#FAF9F5] hover:bg-[#EAE8E1] text-[#070A0E] font-medium text-sm tracking-wide rounded transition-all duration-200 shadow-sm"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 text-[#070A0E]" />
                </Link>

                <a
                  href="#signal-contrast"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#101620] hover:bg-[#16202C] text-[#D1D5DB] border border-[#223040] text-sm tracking-wide rounded transition-all duration-200"
                >
                  <span>Compare Signal vs Noise</span>
                  <ArrowDown className="w-4 h-4 text-[#828B99]" />
                </a>
              </div>
            </div>

            {/* Right: Technical Composition */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-[#202C3B] group shadow-2xl">
                <img
                  src="/images/finland-commercial-hero.jpg"
                  alt="Finnish high-tech laboratory and engineering workspace in Espoo Otaniemi"
                  className="w-full h-72 sm:h-80 object-cover object-center filter grayscale-[20%] contrast-[110%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A0E] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#828B99]">
                  <span>ESPOO / OTANIEMI TECHNICAL CLUSTER</span>
                  <span className="text-[#A3E635]">ACTIVE SIGNAL</span>
                </div>
              </div>

              <div className="p-4 bg-[#0D131A] border border-[#1C2633] rounded-lg text-xs font-mono text-[#828B99] flex items-center justify-between">
                <span>FUNCTION OVER COSMETIC NOISE</span>
                <span className="text-[#D1D5DB]">REF: FI-SIGNAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02. SIGNAL VS NOISE INTERACTIVE CONTRAST
      ========================================================================= */}
      <section id="signal-contrast" className="py-24 md:py-32 border-b border-[#1A222D] bg-[#0A0E14]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#A3E635]">01 / THE CONTRAST</span>
            <div className="h-[1px] w-12 bg-[#222E3D]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF9F5] leading-tight">
                CUTTING THROUGH <br />
                <span className="text-[#A3E635]">SOFTWARE & AGENCY SPRAWL.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#B4BAC6] leading-relaxed font-light">
                Many growing Finnish businesses accumulate tools and digital layers that add administrative drag rather than clarity.
              </p>

              <div className="space-y-3 text-sm text-[#828B99]">
                <p>Common operational noise we eliminate:</p>
                <ul className="space-y-2 border-l border-[#222E3D] pl-4 text-xs font-mono text-[#D1D5DB]">
                  <li>• Paying per-seat monthly license fees for generic software with 70% unused features.</li>
                  <li>• Websites filled with marketing buzzwords that obscure real engineering capabilities.</li>
                  <li>• Client follow-ups and project tasks scattered across disconnected communication channels.</li>
                </ul>
              </div>

              {/* Interactive Mode Toggle */}
              <div className="pt-2">
                <div className="inline-flex p-1 bg-[#101720] border border-[#202E3D] rounded-md text-xs font-mono">
                  <button
                    onClick={() => setSignalMode('noise')}
                    className={`px-4 py-2 rounded transition-all duration-200 cursor-pointer ${
                      signalMode === 'noise'
                        ? 'bg-[#261517] text-[#F87171] border border-[#451A1D]'
                        : 'text-[#828B99] hover:text-[#FAF9F5]'
                    }`}
                  >
                    THE NOISE (CONVENTIONAL)
                  </button>
                  <button
                    onClick={() => setSignalMode('signal')}
                    className={`px-4 py-2 rounded transition-all duration-200 cursor-pointer ${
                      signalMode === 'signal'
                        ? 'bg-[#152312] text-[#A3E635] border border-[#2B4C1E]'
                        : 'text-[#828B99] hover:text-[#FAF9F5]'
                    }`}
                  >
                    THE SIGNAL (MAYAA APPROACH)
                  </button>
                </div>
              </div>
            </div>

            {/* Diagnostic Card Container */}
            <div className="lg:col-span-6">
              <div className="p-8 bg-[#0D131B] border border-[#1E2B38] rounded-xl shadow-xl space-y-5">
                <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#182330]">
                  <span className="text-[#828B99]">SYSTEM ARCHITECTURE</span>
                  <span className={signalMode === 'signal' ? 'text-[#A3E635]' : 'text-[#F87171]'}>
                    {signalMode === 'signal' ? 'SIGNAL OPTIMIZED' : 'HIGH NOISE RATIO'}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {signalMode === 'noise' ? (
                    <motion.div
                      key="noise"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="space-y-3 text-xs"
                    >
                      <div className="p-4 bg-[#181214] border border-[#3A181C] rounded text-[#F87171] space-y-1">
                        <div className="font-mono font-semibold">BRAND: Generic Fluff</div>
                        <p className="text-[11px] text-[#C48D93]">Abstract marketing slogans that fail to explain technical substance to enterprise buyers.</p>
                      </div>
                      <div className="p-4 bg-[#181214] border border-[#3A181C] rounded text-[#F87171] space-y-1">
                        <div className="font-mono font-semibold">WEB: Sluggish Templates</div>
                        <p className="text-[11px] text-[#C48D93]">Heavy frameworks and third-party scripts that compromise speed and mobile usability.</p>
                      </div>
                      <div className="p-4 bg-[#181214] border border-[#3A181C] rounded text-[#F87171] space-y-1">
                        <div className="font-mono font-semibold">OPS: Monthly License Traps</div>
                        <p className="text-[11px] text-[#C48D93]">Rigid SaaS software where expanding team access inflates recurring overhead.</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="signal"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="space-y-3 text-xs"
                    >
                      <div className="p-4 bg-[#10190E] border border-[#233D19] rounded text-[#A3E635] space-y-1">
                        <div className="font-mono font-semibold">01. BRAND: Commercial Truth</div>
                        <p className="text-[11px] text-[#86EFAC]">Clear positioning and visual standards that highlight engineering capability directly.</p>
                      </div>
                      <div className="p-4 bg-[#10190E] border border-[#233D19] rounded text-[#A3E635] space-y-1">
                        <div className="font-mono font-semibold">02. WEB: High-Performance React</div>
                        <p className="text-[11px] text-[#86EFAC]">Sub-second page speeds, clean UI hierarchy, and structured proof for decision-makers.</p>
                      </div>
                      <div className="p-4 bg-[#10190E] border border-[#233D19] rounded text-[#A3E635] space-y-1">
                        <div className="font-mono font-semibold">03. OPS: Personalised Business Systems</div>
                        <p className="text-[11px] text-[#86EFAC]">One custom platform built around your actual workflow with 100% data and code ownership.</p>
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
          03. 4 FINNISH HIGH-TECH ECOSYSTEMS
      ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#1A222D]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#A3E635]">02 / TARGET SECTORS</span>
            <div className="h-[1px] w-12 bg-[#222E3D]" />
          </div>

          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF9F5] leading-tight mb-4">
              DESIGNED FOR TECHNICAL SUBSTANCE.
            </h2>
            <p className="text-[#828B99] text-sm sm:text-base leading-relaxed">
              We structure digital platforms around the demanding communication requirements of Finnish industrial, clean-energy, and specialist tech hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FINNISH_ECOSYSTEMS.map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#0D131B] border border-[#1E2B38] rounded-xl flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#828B99] mb-4">
                    <span>SECTOR 0{idx + 1}</span>
                    <span className="text-[#A3E635]">FI</span>
                  </div>

                  <h3 className="text-xl font-medium text-white mb-2 leading-snug">
                    {item.sector}
                  </h3>

                  <span className="text-[11px] font-mono text-[#A3E635] block mb-4">
                    {item.hubs}
                  </span>

                  <p className="text-xs text-[#828B99] leading-relaxed mb-4">
                    <strong className="text-[#D1D5DB]">Challenge:</strong> {item.challenge}
                  </p>

                  <p className="text-xs text-[#B4BAC6] leading-relaxed">
                    <strong className="text-white">Solution:</strong> {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          04. INTERACTIVE PRIORITY SELECTOR
      ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#1A222D] bg-[#0A0E14]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#A3E635]">03 / OPERATIONAL DIAGNOSTIC</span>
            <div className="h-[1px] w-12 bg-[#222E3D]" />
          </div>

          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF9F5] leading-tight mb-4">
              WHERE DOES YOUR BUSINESS NEED CLARITY?
            </h2>
            <p className="text-[#828B99] text-sm sm:text-base leading-relaxed">
              Select an area of current friction to see our targeted diagnostic remedy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              {PRIORITY_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedPriorityId(opt.id)}
                  className={`w-full text-left p-4 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    selectedPriorityId === opt.id
                      ? 'bg-[#152312] text-[#FAF9F5] border border-[#A3E635] shadow-md'
                      : 'bg-[#0D131B] text-[#828B99] border border-[#1E2B38] hover:text-[#FAF9F5]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{opt.title}</span>
                    <span className="text-[10px] text-[#A3E635] ml-2">→</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 p-8 bg-[#0D131B] border border-[#1E2B38] rounded-xl space-y-6">
              <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#182330]">
                <span className="text-[#A3E635] font-semibold">{activePriority.capability}</span>
                <span className="text-[#828B99]">TARGETED REMEDY</span>
              </div>

              <h3 className="text-xl font-medium text-white tracking-tight">
                {activePriority.diagnosis}
              </h3>

              <p className="text-sm text-[#B4BAC6] leading-relaxed font-light">
                {activePriority.remedy}
              </p>

              <div className="pt-4 flex items-center justify-between">
                <Link
                  to={activePriority.link}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-[#A3E635] transition-colors"
                >
                  <span>Explore this capability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/contact"
                  className="px-5 py-2.5 bg-[#FAF9F5] text-[#070A0E] text-xs font-mono uppercase tracking-wider rounded font-medium hover:bg-[#EAE8E1] transition-all"
                >
                  Start Discussion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05. BANGALORE ENGINEERING ENGINE & DELIVERY
      ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#1A222D]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#A3E635]">04 / ENGINEERING MODEL</span>
            <div className="h-[1px] w-12 bg-[#222E3D]" />
          </div>

          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF9F5] leading-tight mb-4">
              HONEST CROSS-BORDER COLLABORATION.
            </h2>
            <p className="text-[#828B99] text-sm sm:text-base leading-relaxed">
              No middle-tier account managers. Finnish technical teams collaborate directly with senior engineers and designers in our Bangalore studio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#0D131B] border border-[#1E2B38] rounded-xl space-y-3">
              <Clock className="w-5 h-5 text-[#A3E635]" />
              <h4 className="text-sm font-medium text-white">Timezone Overlap</h4>
              <p className="text-xs text-[#828B99] leading-relaxed">
                Daily working windows synchronized with Finnish working hours (EET/EEST) combined with transparent async issue tracking.
              </p>
            </div>

            <div className="p-6 bg-[#0D131B] border border-[#1E2B38] rounded-xl space-y-3">
              <ShieldCheck className="w-5 h-5 text-[#A3E635]" />
              <h4 className="text-sm font-medium text-white">Direct Senior Access</h4>
              <p className="text-xs text-[#828B99] leading-relaxed">
                Work directly with the individuals writing your code and designing your interfaces without bureaucratic layers.
              </p>
            </div>

            <div className="p-6 bg-[#0D131B] border border-[#1E2B38] rounded-xl space-y-3">
              <CreditCard className="w-5 h-5 text-[#A3E635]" />
              <h4 className="text-sm font-medium text-white">Invoicing in EUR</h4>
              <p className="text-xs text-[#828B99] leading-relaxed">
                Transparent milestone-based contracts quoted in Euros with zero recurring per-user licensing penalties.
              </p>
            </div>

            <div className="p-6 bg-[#0D131B] border border-[#1E2B38] rounded-xl space-y-3">
              <Lock className="w-5 h-5 text-[#A3E635]" />
              <h4 className="text-sm font-medium text-white">100% Code & Data Control</h4>
              <p className="text-xs text-[#828B99] leading-relaxed">
                Full legal transfer of all intellectual property, source repositories, and deployment on client-controlled infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06. FINNISH BUYER FAQS
      ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#1A222D] bg-[#0A0E14]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A3E635] block mb-3">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Direct answers for Finnish decision-makers.
            </h2>
          </div>

          <div className="space-y-4">
            {FINLAND_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#0D131B] border border-[#1E2B38] overflow-hidden transition-colors"
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
                      className={`w-4 h-4 text-[#828B99] shrink-0 transition-transform duration-300 ${
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
                        <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-[#828B99] leading-relaxed border-t border-[#182330]">
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
          07. CONVERSION CTA
      ========================================================================= */}
      <section className="py-28 md:py-36 px-6 md:px-12 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#202E3D] bg-[#101720] mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#A3E635]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A3E635]">
            COLLABORATION · FINLAND
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.06] mb-6 max-w-4xl text-balance">
          Ready to cut through the noise? <br />
          <span className="font-normal italic text-[#A3E635]">Let's build systems that actually work.</span>
        </h2>

        <p className="text-base sm:text-xl text-[#828B99] font-light leading-relaxed max-w-2xl mb-10 text-balance">
          Share your business goals, what is slowing your team down, and where you want your digital experience to operate with greater clarity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#FAF9F5] text-[#070A0E] font-medium text-xs sm:text-sm uppercase tracking-wider rounded transition-all hover:bg-[#EAE8E1] shadow-xl group"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="mailto:contact@mayaasolutions.in?subject=Finland%20Commercial%20Inquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#0D131B] text-[#D1D5DB] hover:text-white border border-[#223040] text-xs sm:text-sm uppercase tracking-wider rounded transition-all font-mono"
          >
            contact@mayaasolutions.in
          </a>
        </div>

        <div className="pt-8 border-t border-[#1A222D] flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-[#828B99] uppercase tracking-wider">
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
