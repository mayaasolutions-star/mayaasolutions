import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown, 
  Check, 
  Workflow, 
  Activity, 
  Layers, 
  Sliders, 
  Cpu, 
  Database, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  RefreshCw,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const NETHERLANDS_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for Dutch enterprises from Bangalore without a local office in the Randstad?',
    answer:
      'We work directly with Dutch directeurs, operations managers, and technical leads through structured CET/CEST overlap windows (with only a 3.5 to 4.5-hour time difference). Daily work happens via direct Slack/Teams channels, shared Figma workspaces, and recorded sprint walkthroughs in English. We do not manufacture claims of physical offices on the Keizersgracht or Zuidas when we do not have them. By anchoring technical engineering at our Bangalore headquarters, we provide direct principal-to-engineer communication with exceptional velocity and without high Amsterdam agency overhead.',
  },
  {
    question: 'How do you handle GDPR compliance and EU data residency for Dutch companies?',
    answer:
      'All custom business systems, automated workflows, and database layers are deployed directly onto client-owned cloud tenancies in European data regions—such as AWS Frankfurt/Ireland, Microsoft Azure West Europe (Amsterdam), or local Dutch hosts like TransIP/Hetzner. Mayaa never stores, sells, or monetizes client customer data. Systems are built with strict role-based access control (RBAC), multi-factor authentication, and exportable audit logs complying with GDPR regulations.',
  },
  {
    question: 'Can your business systems integrate with Dutch accounting tools like Exact Online, Moneybird, or Twinfield?',
    answer:
      'Yes. Rather than forcing you into a rigid monolithic replacement, our core philosophy is "Keep what works. Connect what does not." We build secure REST/GraphQL API bridges and automated webhook listeners that sync client data, quotes, and invoice status with Exact Online, Moneybird, Twinfield, and European banking APIs seamlessly.',
  },
  {
    question: 'How are commercial agreements and invoicing structured for Dutch businesses?',
    answer:
      'Contracts are fixed-scope, milestone-governed, and invoiced transparently in Euros (EUR) with clear deliverables at each phase. You retain 100% intellectual property ownership of all custom frontend and backend source code upon delivery. Furthermore, our bespoke systems carry zero recurring per-user SaaS license fees, giving your business permanent software assets with predictable capital costs.',
  },
];

export const NetherlandsMarketPage: React.FC = () => {
  // State for Section 11: Interactive System Map
  const [activeSystemNode, setActiveSystemNode] = useState<string>('LEADS');

  // State for Section 19: Management Visibility Questions
  const [activeQuestion, setActiveQuestion] = useState<number>(0);

  // State for Section 23: Interactive Decision Interface (CTA)
  const [selectedFriction, setSelectedFriction] = useState<string>('OUR SYSTEMS DON\'T CONNECT');

  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: NETHERLANDS_FAQS.map((faq) => ({
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
    { name: 'Netherlands', urlPath: '/global-markets/netherlands' },
  ]);

  const systemNodes = [
    {
      id: 'LEADS',
      title: 'LEADS & INTAKE',
      desc: 'Capture inquiries from forms, direct email and WhatsApp. Automatically route to relationship leads with clear ownership.',
      status: 'CONNECTED',
    },
    {
      id: 'CUSTOMERS',
      title: 'CUSTOMERS',
      desc: 'Centralized customer profiles, contract baselines and historical interaction notes in one accessible place.',
      status: 'SYNCED',
    },
    {
      id: 'SALES',
      title: 'SALES PIPELINE',
      desc: 'Track scoping stages, proposal revisions and quote approvals with transparent commercial oversight.',
      status: 'ACTIVE',
    },
    {
      id: 'PROJECTS',
      title: 'PROJECT DELIVERY',
      desc: 'Clear milestones, task delegation and deliverable handoffs that eliminate friction between teams and specialists.',
      status: 'ON TRACK',
    },
    {
      id: 'TEAM',
      title: 'TEAM & TASKS',
      desc: 'Role-specific task views so each colleague sees what needs action today without searching across platforms.',
      status: 'ALIGNED',
    },
    {
      id: 'DOCUMENTS',
      title: 'DOCUMENTS',
      desc: 'Structured version history for agreements, technical specs and client sign-offs without duplicate local files.',
      status: 'VERIFIED',
    },
    {
      id: 'MANAGEMENT',
      title: 'MANAGEMENT VIEW',
      desc: 'Real-time operational health, pipeline velocity and active commitments without asking five people for updates.',
      status: 'LIVE',
    },
  ];

  const managementQuestions = [
    {
      q: 'Which leads need attention today?',
      answer: 'Immediate visibility on unassigned inquiries and proposals awaiting response, ranked by commercial priority.',
      tag: 'LEAD VELOCITY',
    },
    {
      q: 'Which projects are behind schedule?',
      answer: 'Milestones flagged before they turn into client issues, highlighting the exact team owner responsible.',
      tag: 'DELIVERY CONTROL',
    },
    {
      q: 'Who owns the next client action?',
      answer: 'Single-source accountability so client handoffs never stall in personal inboxes or unread messages.',
      tag: 'ACCOUNTABILITY',
    },
    {
      q: 'Where is the operational bottleneck?',
      answer: 'Pinpointing whether handoffs are slowing in scoping, internal reviews, client feedback or fulfillment.',
      tag: 'BOTTLENECK AUDIT',
    },
    {
      q: 'What needs an executive decision?',
      answer: 'A dedicated queue for commercial approvals, contract sign-offs and resource allocation.',
      tag: 'EXECUTIVE SIGN-OFF',
    },
  ];

  const frictionOptions = [
    { id: 'OUR BRAND', label: 'OUR BRAND', desc: 'Our visual identity looks dated or fails to convey our true capability.' },
    { id: 'OUR DIGITAL EXPERIENCE', label: 'OUR DIGITAL EXPERIENCE', desc: 'Our website makes people work too hard to understand what we actually do.' },
    { id: 'OUR BUSINESS OPERATIONS', label: 'OUR BUSINESS OPERATIONS', desc: 'Our workflows are fragmented across spreadsheets, emails and personal memory.' },
    { id: 'OUR SYSTEMS DON\'T CONNECT', label: 'OUR SYSTEMS DON\'T CONNECT', desc: 'We have capable tools, but data has to be manually moved between them.' },
  ];

  return (
    <>
      <SEO
        title="Brand, Digital Experiences & Connected Business Systems for the Netherlands | Mayaa Solutions"
        description="Less friction. More flow. Mayaa designs brands, digital experiences and personalised business systems for digitally mature Dutch businesses that value clarity, efficiency and integration."
        keywords="business management systems Netherlands, custom business software Netherlands, custom CRM Netherlands, bedrijfssoftware, maatwerk software, bedrijfsprocessen automatiseren, business automation Netherlands, website design Netherlands, branding agency Netherlands, digital experience Netherlands, Mayaa Solutions Netherlands"
        canonicalUrl="https://mayaasolutions.in/global-markets/netherlands"
        schema={[breadcrumbSchema, faqSchema]}
      />

      <div className="bg-[#080B10] text-[#F3F4F6] min-h-screen selection:bg-[#38BDF8] selection:text-black font-sans antialiased">

        {/* 05. INTERACTIVE OPERATING INTERFACE HERO */}
        <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 border-b border-white/[0.08] overflow-hidden">
          {/* Subtle background technical grid */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Top Interface Status Bar */}
          <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/80">
                MAYAA SOLUTIONS × NETHERLANDS
              </span>
            </div>
            <div className="flex items-center gap-6 text-[10px] font-mono text-white/40">
              <span className="hidden sm:inline">ARCHITECTURE: CONNECTED</span>
              <span>STATE: OPERATIONAL</span>
              <span className="text-[#38BDF8]">SYSTEM: FLOW</span>
            </div>
          </div>

          {/* Central Hero Narrative */}
          <div className="max-w-5xl mx-auto w-full relative z-10 my-auto py-12">
            {/* Flowing Elements Simulation */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 text-[10px] font-mono uppercase">
              {['LEAD', '→', 'CLIENT', '→', 'PROJECT', '→', 'TEAM', '→', 'DATA', '→', 'DECISION'].map((item, idx) => (
                <span 
                  key={idx} 
                  className={`px-3 py-1 rounded-sm border ${
                    item === '→' 
                      ? 'border-transparent text-[#38BDF8]' 
                      : 'border-white/10 bg-white/[0.02] text-white/70'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-white leading-[1.02] text-center mb-8"
            >
              Make business <br />
              <span className="font-normal italic text-white/95">flow.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto font-light leading-relaxed text-center mb-12"
            >
              Mayaa designs brands, digital experiences and personalised business systems around the way your company actually works.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                href="#system-flow"
                className="w-full sm:w-auto px-9 py-4 border border-white/20 text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-white/[0.05] hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore the System</span>
                <ArrowDown className="w-3.5 h-3.5 text-white/60" />
              </a>
            </motion.div>
          </div>

          {/* Bottom Interface Metaphor */}
          <div className="max-w-6xl mx-auto w-full relative z-10 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#9CA3AF]">
            <span>LESS FRICTION. MORE FLOW.</span>
            <span className="text-white/40">SCROLL TO EXAMINE THE ARCHITECTURE ↓</span>
          </div>
        </section>

        {/* 06. TYPOGRAPHIC STATEMENT: YOU DON'T NEED ANOTHER TOOL */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08] bg-[#0A0E15]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#38BDF8] mb-4 font-mono">
              Diagnostic Reality
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight mb-4">
              You probably have enough software.
            </h2>
            <p className="text-2xl sm:text-3xl text-[#9CA3AF] font-light mb-16">
              The problem is what happens between it.
            </p>

            {/* Disconnected Nodes Diagram */}
            <div className="p-8 border border-white/10 bg-white/[0.01] rounded-sm">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6 flex justify-between">
                <span>FRAGMENTED APPLICATION LANDSCAPE</span>
                <span className="text-[#EF4444]">THE GAPS ARE WHERE FRICTION LIVES</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs font-mono">
                {['CRM', 'EMAIL', 'PROJECTS', 'FINANCE', 'TEAM CHATS', 'CUSTOMERS'].map((tool, idx) => (
                  <div key={idx} className="p-4 border border-white/[0.08] bg-white/[0.02] text-center">
                    <span className="text-white/80 block mb-1">{tool}</span>
                    <span className="text-[10px] text-[#EF4444]">ISOLATED</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] text-sm text-[#9CA3AF] font-light leading-relaxed">
                When tools operate in silos, people become the manual bridge: re-entering data, forwarding messages, chasing colleagues for project status, and hunting for files. That friction costs time, clarity and focus.
              </div>
            </div>
          </div>
        </section>

        {/* 07. THE GAPS: WHERE DOES THE BUSINESS SLOW DOWN? */}
        <section id="system-flow" className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Process Audit
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-16">
              Where does the business slow down?
            </h2>

            {/* Visual Workflow with Friction Highlights */}
            <div className="space-y-3">
              {[
                { stage: 'ENQUIRY', friction: 'WAITING', desc: 'Inquiries sit in inboxes before being assigned to the right team member.' },
                { stage: 'SALES', friction: 'RE-ENTERING DATA', desc: 'Proposals re-typed from email threads into separate calculation sheets.' },
                { stage: 'CLIENT', friction: 'SEARCHING', desc: 'Contracts, revisions and agreements stored across multiple drives.' },
                { stage: 'PROJECT', friction: 'FORWARDING', desc: 'Deliverables passed along via messaging apps without documented sign-offs.' },
                { stage: 'TEAM', friction: 'REMINDING', desc: 'Tasks repeatedly discussed in meetings instead of living in a clear queue.' },
                { stage: 'DELIVERY', friction: 'CHECKING', desc: 'Work completed, but proof of delivery delayed in reaching invoicing.' },
                { stage: 'MANAGEMENT', friction: 'ASKING', desc: 'Leadership forced to poll five people just to know active project health.' },
              ].map((step, idx) => (
                <div 
                  key={idx}
                  className="p-5 border border-white/[0.08] bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-sm hover:border-white/20 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-white/40">0{idx + 1}</span>
                    <span className="text-sm font-medium text-white tracking-wide">{step.stage}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20">
                      FRICTION: {step.friction}
                    </span>
                    <span className="text-xs text-[#9CA3AF] font-light hidden md:inline">
                      {step.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 border border-white/10 bg-white/[0.02] text-center max-w-xl mx-auto">
              <p className="text-sm sm:text-base text-white/90 font-light">
                “When you eliminate the gaps between stages, <br />
                <span className="text-[#38BDF8]">the business moves with clean, unbroken momentum.”</span>
              </p>
            </div>
          </div>
        </section>

        {/* 08. THE BUSINESS JOURNEY: PERCEPTION → EXPERIENCE → OPERATION */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08] bg-[#0A0E15]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Connected Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              Perception. Experience. Operation.
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-16">
              Mayaa doesn't treat branding, websites and software as three disconnected agency retainers. They are three stages of one continuous business journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 border border-white/10 bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-[0.2em] mb-2">01 · PERCEPTION</div>
                  <h3 className="text-2xl font-light text-white mb-4">BRAND</h3>
                  <p className="text-sm text-[#9CA3AF] font-light leading-relaxed mb-6">
                    Before someone works with you, they need to understand you. Good design removes cognitive effort and signals your true level of capability immediately.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-white/70">
                  CLARITY BEFORE DECORATION
                </div>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-[0.2em] mb-2">02 · EXPERIENCE</div>
                  <h3 className="text-2xl font-light text-white mb-4">DIGITAL</h3>
                  <p className="text-sm text-[#9CA3AF] font-light leading-relaxed mb-6">
                    When they discover you, the experience must make sense. Clear navigation, rapid page loads, and intuitive paths that make the next step completely obvious.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-white/70">
                  MAKE THE NEXT STEP OBVIOUS
                </div>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-[0.2em] mb-2">03 · OPERATION</div>
                  <h3 className="text-2xl font-light text-white mb-4">SYSTEM</h3>
                  <p className="text-sm text-[#9CA3AF] font-light leading-relaxed mb-6">
                    Once they become a client, the business needs to deliver consistently. Bespoke workflows that keep leads, projects, teams and management in sync.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-white/70">
                  CONNECT WHAT WORKS
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 09. BRAND & DIGITAL: CLARITY & NEXT STEPS */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-8 border border-white/10 bg-white/[0.01]">
                <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-3 font-mono">Brand Architecture</div>
                <h3 className="text-2xl font-light text-white mb-4">Good design should make things clearer.</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed mb-6">
                  Not simply prettier. A strong brand identity answers four straightforward commercial questions before sales conversations start:
                </p>
                <div className="space-y-2 text-xs font-mono text-white/90">
                  <div className="p-2 border border-white/[0.06] bg-white/[0.01]">• WHAT WE DO (Exact Scope)</div>
                  <div className="p-2 border border-white/[0.06] bg-white/[0.01]">• WHO IT IS FOR (Target Alignment)</div>
                  <div className="p-2 border border-white/[0.06] bg-white/[0.01]">• WHY IT MATTERS (Substantive Value)</div>
                  <div className="p-2 border border-white/[0.06] bg-white/[0.01]">• WHAT HAPPENS NEXT (Direct Engagement)</div>
                </div>
              </div>

              <div className="p-8 border border-white/10 bg-white/[0.01]">
                <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-3 font-mono">Digital Interaction</div>
                <h3 className="text-2xl font-light text-white mb-4">Don't make people work to understand the business.</h3>
                <p className="text-sm text-[#9CA3AF] font-light leading-relaxed mb-6">
                  Good digital design removes questions. A visitor moves smoothly from understanding to trust, exploration and direct inquiry without navigating confusing website mazes.
                </p>
                <div className="p-4 border border-white/[0.08] bg-white/[0.02] text-xs font-mono text-[#38BDF8] space-y-1">
                  <div>UNDERSTAND → High-clarity proposition</div>
                  <div>TRUST → Verified case studies & credentials</div>
                  <div>EXPLORE → Clean portfolio & service parameters</div>
                  <div>ENQUIRE → Low-friction consultation intake</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. THE SYSTEM MAP: WHAT IF THE BUSINESS WORKED AS ONE SYSTEM? */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08] bg-[#0A0E15]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs uppercase tracking-[0.25em] text-[#38BDF8] mb-3 font-mono">
                Interactive Architecture
              </div>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-4">
                What if the business worked as one system?
              </h2>
              <p className="text-base text-[#9CA3AF] font-light">
                Click any operational node to inspect how it connects into the wider workflow.
              </p>
            </div>

            {/* Interactive System Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-8">
              {systemNodes.map((node) => (
                <button
                  key={node.id}
                  onClick={() => setActiveSystemNode(node.id)}
                  className={`p-4 border text-left transition-all rounded-sm flex flex-col justify-between h-28 ${
                    activeSystemNode === node.id 
                      ? 'border-[#38BDF8] bg-[#38BDF8]/10 text-white' 
                      : 'border-white/10 bg-white/[0.02] text-[#9CA3AF] hover:border-white/30'
                  }`}
                >
                  <div className="text-[10px] font-mono opacity-60">{node.status}</div>
                  <div className="text-xs font-mono font-medium tracking-wide">{node.title}</div>
                </button>
              ))}
            </div>

            {/* Node Inspection Detail Card */}
            {systemNodes.find(n => n.id === activeSystemNode) && (
              <div className="p-8 border border-[#38BDF8]/30 bg-[#38BDF8]/[0.02] rounded-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest mb-1">
                    INSPECTING: {activeSystemNode}
                  </div>
                  <h3 className="text-xl font-light text-white mb-2">
                    {systemNodes.find(n => n.id === activeSystemNode)?.title}
                  </h3>
                  <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                    {systemNodes.find(n => n.id === activeSystemNode)?.desc}
                  </p>
                </div>
                <div className="px-4 py-2 border border-[#38BDF8]/40 text-[#38BDF8] font-mono text-xs whitespace-nowrap flex-shrink-0">
                  STATUS: {systemNodes.find(n => n.id === activeSystemNode)?.status}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 12 & 13. DUTCH DIGITAL MATURITY & CONNECT, DON'T REPLACE */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Integration & Maturity
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              Digital isn't the challenge. <br />
              <span className="text-[#9CA3AF]">The next level is integration.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-7 space-y-6 text-[#9CA3AF] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  Dutch businesses are already among Europe's most digitally capable. Nearly 9 in 10 Dutch businesses with 10–250 employees reached the EU's basic digital-intensity level in 2025.
                </p>
                <p>
                  So the interesting question is no longer whether your company uses software. The question is: <span className="text-white font-normal">does that software make the business simpler?</span>
                </p>
                <div className="p-6 border-l-2 border-white/40 bg-white/[0.02] text-white font-normal text-lg">
                  “Keep what works. Connect what doesn't.”
                </div>
              </div>

              <div className="md:col-span-5 bg-white/[0.02] border border-white/10 p-8 rounded-sm space-y-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/80 font-mono mb-2">
                  Our Audit Approach:
                </div>
                <div className="space-y-3 text-xs font-mono text-white/90">
                  <div className="p-2.5 border border-white/[0.06] bg-white/[0.01]">CONNECT → Link tools that work well separately</div>
                  <div className="p-2.5 border border-white/[0.06] bg-white/[0.01]">AUTOMATE → Remove routine manual data re-entry</div>
                  <div className="p-2.5 border border-white/[0.06] bg-white/[0.01]">REBUILD → Replace fragile spreadsheets with a custom system</div>
                  <div className="p-2.5 border border-white/[0.06] bg-white/[0.01]">LEAVE ALONE → Preserve proven workflows that need no change</div>
                </div>
                <div className="pt-2 text-[11px] font-mono text-white/40">
                  Source context: CBS Digital Economy Data 2025
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 14 & 15. INNOVATION WITHOUT NOISE & RESPONSIBILITY */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08] bg-[#0A0E15]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Pragmatic Technology
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-6">
              Innovation should earn its place.
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-16">
              No technology for show. We only deploy AI, automation or custom data models when they solve a genuine operational bottleneck and make life easier for the team.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-[#38BDF8] mb-2">USEFUL AUTOMATION</div>
                <h3 className="text-base font-medium text-white mb-2">Automate the Repetitive</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Lead routing, follow-up reminders and document notifications handled quietly by the system, freeing your team for judgment and relationships.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-[#38BDF8] mb-2">OPERATIONAL LEANLINESS</div>
                <h3 className="text-base font-medium text-white mb-2">Efficiency is Responsibility</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Removing duplicated manual admin, wasted compute on unused SaaS seats, and fragile multi-file copies creates sustainable operations.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-[#38BDF8] mb-2">GOVERNANCE & DATA</div>
                <h3 className="text-base font-medium text-white mb-2">Privacy & Access Control</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Role-based visibility, permission tiers and secure authentication ensuring sensitive commercial calculations stay protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 16 & 17. DUTCH BUSINESS ECOSYSTEM & GLOBAL REACH */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Sectors & Global Reach
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-6">
              Small country. <br />
              <span className="text-[#9CA3AF]">Global reach.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-2xl leading-relaxed mb-16">
              For Dutch enterprises operating across international borders, suppliers and teams, the brand presentation and back-office delivery must remain completely coherent.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'HIGH TECH & ENGINEERING', desc: 'Present complex technical capabilities clearly while connecting project delivery.' },
                { title: 'LIFE SCIENCES & HEALTH', desc: 'Keep client consultations, compliance records and team handoffs organized.' },
                { title: 'AGRI-FOOD & TRADE', desc: 'Manage high-volume inquiries, international orders and logistics handovers.' },
                { title: 'MANUFACTURING & INDUSTRIAL', desc: 'Connect quotes, production orders and customer accounts without tool bloat.' },
                { title: 'ARCHITECTURE & INTERIORS', desc: 'A refined visual experience backed by structured project delivery milestones.' },
                { title: 'PROFESSIONAL SERVICES & B2B', desc: 'Organise mandates, deliverables and executive capacity with zero friction.' },
              ].map((ind, idx) => (
                <div key={idx} className="p-5 border border-white/10 bg-white/[0.02] flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-mono text-white mb-2 tracking-wide">{ind.title}</h3>
                    <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">{ind.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-white/40">
                    TAILORED LOGIC
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 19. MANAGEMENT VISIBILITY: WHAT DO YOU NEED TO KNOW RIGHT NOW? */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08] bg-[#0A0E15]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#38BDF8] mb-4 font-mono">
              Executive Pulse
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-4">
              What do you need to know right now?
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-12">
              A good system does not give management more information. It gives management the right information.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Question Selection */}
              <div className="md:col-span-5 space-y-2">
                {managementQuestions.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveQuestion(idx)}
                    className={`w-full p-4 text-left border rounded-sm transition-all text-xs font-mono flex items-center justify-between ${
                      activeQuestion === idx 
                        ? 'border-[#38BDF8] bg-[#38BDF8]/10 text-white' 
                        : 'border-white/10 bg-white/[0.02] text-[#9CA3AF] hover:border-white/20'
                    }`}
                  >
                    <span>{item.q}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                ))}
              </div>

              {/* Answer Card */}
              <div className="md:col-span-7 p-8 border border-white/20 bg-white/[0.03] rounded-sm min-h-[220px] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest mb-2">
                    {managementQuestions[activeQuestion].tag}
                  </div>
                  <h3 className="text-xl font-light text-white mb-4">
                    {managementQuestions[activeQuestion].q}
                  </h3>
                  <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                    {managementQuestions[activeQuestion].answer}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-white/50">
                  REAL-TIME EXECUTIVE VISIBILITY · ZERO MANUAL SPREADSHEETS
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 21 & 22. THE MAYAA METHOD & SOLVING THE GAP */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 font-mono">
              Working Method
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-8">
              We don't sell the tool. <br />
              <span className="text-[#9CA3AF]">We solve the gap.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-12">
              Sometimes the answer is a brand. Sometimes a website. Sometimes a business management system. Sometimes a connection between tools you already use. We start by understanding how the business actually works.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs font-mono">
              {['01 · OBSERVE', '02 · MAP', '03 · SIMPLIFY', '04 · DESIGN', '05 · BUILD', '06 · LEARN', '07 · REFINE'].map((step, idx) => (
                <div key={idx} className="p-3 border border-white/10 bg-white/[0.02]">
                  <span className="text-white/80">{step}</span>
                </div>
              ))}
            </div>

            {/* Geographic Context */}
            <div className="mt-16 text-center text-xs text-white/50 font-mono tracking-wider">
              Working with businesses across Amsterdam, Rotterdam, Eindhoven, Utrecht, The Hague, Groningen, Tilburg and throughout the Netherlands.
            </div>
          </div>
        </section>

        {/* BANGALORE DELIVERY MODEL FOR DUTCH ENTERPRISES */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08] bg-[#0A0E15]">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#EA580C] mb-4 font-mono">
              Delivery Model
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-6">
              Engineering anchored in Bangalore. <br />
              <span className="text-[#9CA3AF]">Zero Dutch agency markups.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-3xl leading-relaxed mb-16">
              Mayaa operates from Bangalore, India, delivering high-calibre systems directly to Dutch enterprises. We provide transparent technical execution, principal-to-engineer communication, and complete European data sovereignty.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-[#EA580C] uppercase tracking-wider mb-2">01 · TIMEZONE OVERLAP</div>
                <h3 className="text-lg font-normal text-white mb-2">CET / CEST Collaboration</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  With only a 3.5 to 4.5-hour time difference, our working afternoons directly match Dutch mornings and core business hours for live standups, demos, and reviews.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-[#EA580C] uppercase tracking-wider mb-2">02 · DATA SOVEREIGNTY</div>
                <h3 className="text-lg font-normal text-white mb-2">Client Cloud Tenancies</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  All databases and applications reside on your own European infrastructure (AWS Frankfurt, Azure Amsterdam, Hetzner) complying fully with EU GDPR mandates.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <div className="text-xs font-mono text-[#EA580C] uppercase tracking-wider mb-2">03 · COMMERCIAL TERMS</div>
                <h3 className="text-lg font-normal text-white mb-2">Milestone Billing in EUR</h3>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
                  Fixed-scope agreements invoiced in Euros (EUR) tied to concrete milestones. 100% intellectual property rights transfer to you upon completion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/[0.08]">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-[#EA580C] mb-4 font-mono">
              Dutch Decision-Maker FAQs
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-12">
              Common questions from <br />
              <span className="text-[#9CA3AF]">Dutch leadership teams.</span>
            </h2>

            <div className="space-y-4">
              {NETHERLANDS_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 bg-white/[0.02] rounded-sm overflow-hidden transition-colors hover:border-white/20"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 text-white hover:text-[#EA580C] transition-colors"
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

        {/* 23. FINAL CTA — INTERACTIVE DECISION INTERFACE */}
        <section className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden bg-[#0A0E15]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#38BDF8] mb-4">
              Decision Interface
            </div>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
              Where is the friction?
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] font-light max-w-xl mx-auto mb-10 leading-relaxed">
              Select the area where your business currently loses time, clarity or momentum:
            </p>

            {/* 4 Selectable Friction Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left">
              {frictionOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedFriction(opt.id)}
                  className={`p-5 border rounded-sm transition-all text-xs font-mono flex items-start gap-3 ${
                    selectedFriction === opt.id 
                      ? 'border-[#38BDF8] bg-[#38BDF8]/10 text-white' 
                      : 'border-white/10 bg-white/[0.02] text-[#9CA3AF] hover:border-white/20'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center flex-shrink-0 ${
                    selectedFriction === opt.id ? 'border-[#38BDF8] bg-[#38BDF8]' : 'border-white/30'
                  }`}>
                    {selectedFriction === opt.id && <Check className="w-2.5 h-2.5 text-black" />}
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">{opt.label}</div>
                    <div className="text-[11px] text-[#9CA3AF] font-light">{opt.desc}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="p-6 border border-white/10 bg-white/[0.02] rounded-sm max-w-xl mx-auto mb-8">
              <div className="text-xs font-mono text-white/50 mb-1">SELECTED FOCUS: {selectedFriction}</div>
              <div className="text-lg text-white font-normal">Let's look at it.</div>
            </div>

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
                Discuss Your Workflow
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
