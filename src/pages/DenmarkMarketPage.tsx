import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown, 
  Check, 
  Workflow, 
  Layers, 
  Sliders, 
  Cpu, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  Compass,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  Eye,
  Users,
  Building2,
  Minimize2,
  FileText
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const DENMARK_FAQS: FAQItem[] = [
  {
    question: 'How does Mayaa deliver for Danish companies from India without a local office in Copenhagen or Aarhus?',
    answer:
      'We work directly with Danish founders, operational partners, and technical leads via structured CET/CEST working-hour windows (a modest 3.5 to 4.5-hour timezone difference). Collaborations are conducted in English using direct Slack/Teams workspaces, Figma reviews, and asynchronous recorded sprint walkthroughs. We do not manufacture claims of physical studios in Indre By or Aarhus Ø where we do not have them. By anchoring technical engineering at our India headquarters, we provide direct principal-to-engineer communication with exceptional rigor and without Danish consultancy markups.',
  },
  {
    question: 'How do you ensure GDPR compliance and data privacy for Danish businesses?',
    answer:
      'All custom business systems, automated workflows, and database layers are deployed directly onto client-owned cloud tenancies in European regions, such as AWS Frankfurt/Stockholm, Microsoft Azure West Europe, or Nordic hosts. Mayaa never stores, sells, or monetizes client customer data. Systems are built with strict role-based access control (RBAC), multi-factor authentication, and exportable audit logs complying fully with EU and Danish Datatilsynet data protection guidelines.',
  },
  {
    question: 'Can your systems integrate with Danish platforms like e-conomic, Dinero, or Billy?',
    answer:
      'Yes. Our philosophy is "bridge, do not bloat." We build secure REST API connectors and webhook integrations that tie into e-conomic, Dinero, Billy, or Microsoft Business Central, synchronizing client contracts, project milestones, and invoicing without manual data re-entry.',
  },
  {
    question: 'How are commercial agreements and invoicing handled for Danish companies?',
    answer:
      'Engagements are contracted on fixed-scope, milestone-based terms and invoiced transparently in Danish Krone (DKK) or Euros (EUR). Every deliverable phase has unambiguous acceptance criteria. You retain 100% intellectual property ownership of the codebase upon delivery, with zero perpetual per-seat SaaS license fees.',
  },
];

export const DenmarkMarketPage: React.FC = () => {
  // State for Hero Priority selector
  const [heroPriority, setHeroPriority] = useState<'clarity' | 'experience' | 'operations' | 'systems'>('clarity');

  // State for Section 05: Complexity view toggle (Accumulated Noise vs Streamlined Coherence)
  const [complexityMode, setComplexityMode] = useState<'bloated' | 'streamlined'>('bloated');

  // State for Section 06: Interactive Decision Experience
  const [selectedIssue, setSelectedIssue] = useState<number>(0);

  // State for Section 08: Customer Journey Step
  const [activeJourneyStep, setActiveJourneyStep] = useState<number>(0);

  // State for Section 09: Business Workflow Step
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);

  // State for Section 16: Final Conversation Focus
  const [ctaFocus, setCtaFocus] = useState<'brand' | 'experience' | 'systems'>('brand');

  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: DENMARK_FAQS.map((faq) => ({
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
    { name: 'Denmark', urlPath: '/global-markets/denmark' },
  ]);

  // Hero priority copy variations
  const heroPriorityDetails = {
    clarity: {
      tag: 'PRIORITY: COMMERCIAL CLARITY',
      statement: 'Communicate exactly what makes your offering distinct, valuable and dependable without industry jargon or marketing inflation.',
      quote: 'When your positioning is clear, the right clients understand your value immediately.'
    },
    experience: {
      tag: 'PRIORITY: CUSTOMER EXPERIENCE',
      statement: 'Remove every point of confusion from discovery to enquiry so working with your company feels effortless from the first click.',
      quote: 'A considered digital journey respects the customer’s time and builds trust before the first meeting.'
    },
    operations: {
      tag: 'PRIORITY: SIMPLER OPERATIONS',
      statement: 'Give independent teams clear ownership and shared information so work moves forward without constant administrative chasing.',
      quote: 'Operational clarity enables employee autonomy and reduces unbilled coordination hours.'
    },
    systems: {
      tag: 'PRIORITY: CONNECTED SYSTEMS',
      statement: 'Bridge the gaps between your commercial pipeline, project delivery and management visibility without introducing redundant software.',
      quote: 'Systems should support how your company actually functions, not demand endless duplicate entry.'
    }
  };

  // Section 06: Four situations for "WHAT ACTUALLY NEEDS TO CHANGE?"
  const decisionSituations = [
    {
      num: '01',
      problem: 'PEOPLE DO NOT UNDERSTAND WHAT WE DO.',
      diagnosis: 'Your positioning, identity and external communication may need greater clarity.',
      capability: 'BRAND DESIGN',
      detail: 'Capable Danish companies often deliver extraordinary technical or design substance, but their market presentation has lagged behind their capability. We distill your commercial value into a coherent identity, sharp visual system and concise messaging that international and domestic buyers understand at a glance.',
      deliverables: ['Brand Positioning & Architecture', 'Visual Identity Systems', 'Guidelines & Typography', 'Sales & Credential Decks']
    },
    {
      num: '02',
      problem: 'OUR DIGITAL EXPERIENCE DOES NOT REFLECT OUR QUALITY.',
      diagnosis: 'Your website and customer journey may need to communicate your value more effectively.',
      capability: 'WEBSITE & DIGITAL EXPERIENCE',
      detail: 'When prospective clients research your company, their digital impression directly impacts their confidence. We create high-calibre web experiences engineered around real customer journeys, removing hesitation, clarifying complex offerings, and making the next commercial step obvious.',
      deliverables: ['Editorial Web Architecture', 'Bespoke Frontend Engineering', 'Product & Service Clarity', 'Frictionless Enquiry Flows']
    },
    {
      num: '03',
      problem: 'OUR INTERNAL PROCESSES HAVE BECOME DIFFICULT TO MANAGE.',
      diagnosis: 'Your workflows may need clearer responsibilities, processes and visibility.',
      capability: 'PERSONALISED BUSINESS MANAGEMENT SYSTEMS',
      detail: 'Growth introduces friction. When project updates, scoping details and customer histories are scattered across spreadsheets, chat channels and individual inboxes, teams waste hours coordinating rather than executing. We build dedicated business management workflows that give teams autonomy and leadership real-time clarity.',
      deliverables: ['Tailored Operational Pipelines', 'Task & Milestone Handoffs', 'Centralized Project Registries', 'Role-Based Team Visibility']
    },
    {
      num: '04',
      problem: 'OUR EXISTING TOOLS DO NOT WORK WELL TOGETHER.',
      diagnosis: 'The first step is understanding where information and work get disconnected.',
      capability: 'INTEGRATION & WORKFLOW COHERENCE',
      detail: 'You likely already invest in robust Danish and European platforms, such as e-conomic, Microsoft Business Central, HubSpot, or Jira. The friction is rarely the individual tools; it is the manual copy-pasting and fractured status handoffs between them. We create focused integrations and custom lightweight interfaces that unite them.',
      deliverables: ['Data Flow Mapping', 'API & Platform Bridges', 'Automated Trigger Routing', 'Unified Operational Dashboards']
    }
  ];

  // Section 08: Customer Journey Steps
  const journeySteps = [
    {
      stage: 'DISCOVER',
      label: 'Initial Touchpoint',
      friction: 'The company is difficult to find, or first impressions look outdated and undifferentiated from generic competitors.',
      resolution: 'A confident, restrained digital presence that immediately establishes credibility and commands respect across domestic and international markets.'
    },
    {
      stage: 'UNDERSTAND',
      label: 'Grasping the Value',
      friction: 'Complex technical jargon, vague buzzwords, or convoluted service descriptions leave the buyer guessing what you actually do.',
      resolution: 'Precise editorial communication and structured typography that explain your capability, process, and deliverables in minutes.'
    },
    {
      stage: 'TRUST',
      label: 'Building Conviction',
      friction: 'Lack of visual rigor, clumsy navigation, or inconsistent brand presentation make prospective clients question your attention to detail.',
      resolution: 'Calm, architectural craft and thoughtful case presentation that provide tangible proof of quality before any sales conversation begins.'
    },
    {
      stage: 'ACT',
      label: 'Taking the Next Step',
      friction: 'Opaque contact mechanisms, lengthy forms, or ambiguous calls-to-action cause prospective clients to abandon their interest.',
      resolution: 'A straightforward, dignified consultation pathway that makes initiating a dialogue effortless for busy decision-makers.'
    }
  ];

  // Section 09: Practical Business Workflow
  const workflowNodes = [
    {
      stage: 'ENQUIRY',
      role: 'Client Intake',
      description: 'Inbound requests from web forms, direct emails, and partner referrals enter a single structured queue with immediate classification.',
      metric: '0 Lost Inquiries'
    },
    {
      stage: 'SALES',
      role: 'Commercial Scoping',
      description: 'Clear proposal tracking, transparent deliverables, and approval states without conflicting spreadsheets or unconfirmed revisions.',
      metric: 'Full Pipeline Oversight'
    },
    {
      stage: 'CUSTOMER',
      role: 'Account Profile',
      description: 'Contract baselines, key stakeholder contacts, historical briefs, and project scope centralized in one permanent record.',
      metric: 'Instant Context'
    },
    {
      stage: 'PROJECT',
      role: 'Delivery Roadmap',
      description: 'Milestones, dependencies, and deliverables mapped out so team members understand what must be completed next.',
      metric: 'Structured Execution'
    },
    {
      stage: 'TEAM',
      role: 'Autonomous Action',
      description: 'Individual contributors see their focused priorities and role-specific tasks without wading through company-wide administrative clutter.',
      metric: 'Empowered Autonomy'
    },
    {
      stage: 'MANAGEMENT',
      role: 'Executive Visibility',
      description: 'Leadership monitors health, project pace, and upcoming bottlenecks in real time without having to interrupt teams for manual status reports.',
      metric: 'Calm Oversight'
    }
  ];

  // Section 13: Danish Industry Relevance
  const danishIndustries = [
    {
      sector: 'LIFE SCIENCES & HEALTH',
      anchor: 'Medicon Valley · Copenhagen & Aarhus Biotech',
      focus: 'Clearer digital communication and structured internal workflows for research, clinical, and medical technology enterprises.'
    },
    {
      sector: 'ADVANCED MANUFACTURING',
      anchor: 'Precision Engineering · Clean Tech · Industrial Systems',
      focus: 'Connect commercial processes, technical specifications, project information, and management visibility into a unified flow.'
    },
    {
      sector: 'ENGINEERING & TECHNICAL BUSINESSES',
      anchor: 'Consulting Engineers · Specialist Infrastructure',
      focus: 'Translate sophisticated technical competencies into clear digital presentations while streamlining multi-phase client delivery.'
    },
    {
      sector: 'ARCHITECTURE & INTERIORS',
      anchor: 'Danish Design Heritage · Spatial Practices',
      focus: 'Make the quality of the work visible through a considered brand and digital experience that honors Danish spatial sensibility.'
    },
    {
      sector: 'CONSTRUCTION & PROPERTY',
      anchor: 'Contractors · Sustainable Development Studios',
      focus: 'Bring project tenders, site milestones, subcontractor responsibilities, and client updates into a transparent workflow.'
    },
    {
      sector: 'PROFESSIONAL SERVICES',
      anchor: 'Legal Advisory · Financial Audits · Management Consultancies',
      focus: 'Build high-trust client portals, clear mandate presentations, and administrative automation that protects billable hours.'
    },
    {
      sector: 'B2B & DISTRIBUTION',
      anchor: 'Nordic Trade · Specialized Logistics · Technical Wholesale',
      focus: 'Simplify complex product catalogues, automate quote routing, and maintain consistent client touchpoints across regions.'
    },
    {
      sector: 'HOSPITALITY & CULTURE',
      anchor: 'Boutique Hotels · Culinary Concepts · Design Stays',
      focus: 'Deliver an understated, memorable digital experience that mirrors the care and craft of the physical environment.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0E13] text-[#F5F4F0] selection:bg-[#3D7362] selection:text-white font-sans antialiased">
      <SEO
        title="Denmark | Strategic Brand, Digital Experiences & Business Systems | Mayaa Solutions"
        description="Thoughtful brand design, digital experiences, and personalised business management systems for Danish businesses. Engineered for clarity, employee autonomy, and operational flow across Copenhagen, Aarhus, Odense, and Aalborg."
        keywords="Mayaa Solutions Denmark, business management systems Denmark, custom business software Denmark, custom CRM Denmark, business automation Denmark, website design Denmark, brand design Denmark, branding agency Denmark, digital experience Denmark, Skræddersyet software, CRM-system, Automatisering af arbejdsprocesser, Copenhagen business software, Aarhus digital agency"
        canonicalUrl="https://mayaasolutions.in/global-markets/denmark"
        schema={[breadcrumbSchema, faqSchema]}
      />

      {/* =========================================================================
          SECTION 04: HERO - A DIFFERENT KIND OF OPENING
          Quiet canvas, editorial asymmetry, deliberate whitespace & priority toggle
      ========================================================================= */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 border-b border-[#1E252E] overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#1E332B]/20 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[300px] bg-[#16222F]/25 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Header Metadata Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-10 border-b border-[#1E252E]/70 text-xs tracking-wider uppercase text-[#8E95A0]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#52947F] animate-pulse" />
              <span className="font-mono text-[#D4CEBF]">MAYAA SOLUTIONS / DENMARK</span>
            </div>
            <div className="hidden sm:flex items-center gap-6 font-mono text-[#767E8A]">
              <span>DK MARKET EDITION</span>
              <span>COPENHAGEN · AARHUS · ODENSE · AALBORG</span>
              <span>EST. PERSPECTIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
            {/* Left Headline & Philosophy */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-block px-3 py-1 bg-[#141B22] border border-[#26313C] text-[#A3C9B8] text-xs font-mono tracking-widest uppercase rounded">
                THE THOUGHTFUL BUSINESS
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#FAF9F5] leading-[1.08]">
                GOOD WORK. <br />
                <span className="text-[#A3C9B8] font-normal">NO UNNECESSARY</span> <br />
                COMPLEXITY.
              </h1>

              <p className="text-lg sm:text-xl text-[#B4BAC3] leading-relaxed max-w-xl font-light">
                Mayaa helps Danish businesses bring their <span className="text-white font-normal">brand</span>, <span className="text-white font-normal">digital experience</span>, and <span className="text-white font-normal">business operations</span> into better alignment with the way they actually work.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#FAF9F5] hover:bg-[#EAE8E1] text-[#0A0E13] font-medium text-sm tracking-wide rounded transition-all duration-200 shadow-sm hover:translate-y-[-1px]"
                >
                  START A CONVERSATION
                  <ArrowRight className="w-4 h-4 text-[#0A0E13]" />
                </Link>

                <a
                  href="#decision-diagnostic"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#141B22] hover:bg-[#1A232C] text-[#D8D6CD] border border-[#27323E] text-sm tracking-wide rounded transition-all duration-200"
                >
                  EXPLORE CAPABILITIES
                  <ArrowDown className="w-4 h-4 text-[#7E8896]" />
                </a>
              </div>
            </div>

            {/* Right: Interactive Priority Selector & Studio Visual */}
            <div className="lg:col-span-5 space-y-6">
              {/* Interactive Priority Selector Widget */}
              <div className="p-6 sm:p-7 bg-[#11171E] border border-[#202934] rounded-lg shadow-xl relative backdrop-blur-sm">
                <div className="flex items-center justify-between pb-4 border-b border-[#1E2732] mb-5">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#7E8896]">WHAT MATTERS MOST TODAY?</span>
                  <span className="text-xs font-mono text-[#52947F]">SELECT FOCUS</span>
                </div>

                {/* Priority Selector Pills */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {[
                    { id: 'clarity', label: 'CLARITY' },
                    { id: 'experience', label: 'BETTER EXPERIENCE' },
                    { id: 'operations', label: 'SIMPLER OPERATIONS' },
                    { id: 'systems', label: 'CONNECTED SYSTEMS' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setHeroPriority(item.id as any)}
                      className={`px-3 py-2.5 text-xs font-mono tracking-wider text-left rounded transition-all duration-200 border ${
                        heroPriority === item.id
                          ? 'bg-[#1C2530] text-[#FAF9F5] border-[#52947F] shadow-sm'
                          : 'bg-[#0E1319] text-[#868E9B] border-[#1D2530] hover:text-[#C5CAD2] hover:border-[#2A3542]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Active Focus Display */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={heroPriority}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3 bg-[#0A0E13] p-4 rounded border border-[#1A222B]"
                  >
                    <div className="text-[11px] font-mono text-[#52947F] tracking-widest uppercase">
                      {heroPriorityDetails[heroPriority].tag}
                    </div>
                    <p className="text-sm text-[#D4CEBF] leading-relaxed">
                      {heroPriorityDetails[heroPriority].statement}
                    </p>
                    <div className="text-xs text-[#7E8896] italic border-t border-[#161F28] pt-2">
                      "{heroPriorityDetails[heroPriority].quote}"
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Realistic Architectural Workspace Imagery */}
              <div className="relative rounded-lg overflow-hidden border border-[#202934] group">
                <img
                  src="/images/denmark-commercial-hero.jpg"
                  alt="Danish architectural studio and collaborative business workspace in Copenhagen"
                  className="w-full h-56 sm:h-64 object-cover object-center filter grayscale-[25%] contrast-[105%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E13] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#8E95A0]">
                  <span>COPENHAGEN DESIGN ENVIRONMENT</span>
                  <span className="text-[#52947F]">CALM CRAFT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: THE COST OF UNNECESSARY COMPLEXITY
          "NOT EVERYTHING THAT CAN BE ADDED SHOULD BE ADDED."
          Interactive visual composition showing tool/process bloat vs simplification.
      ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#E5E5E2] relative bg-white text-[#171717]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Marker */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#3D7362] font-semibold">01 / COMPLEXITY AUDIT</span>
            <div className="h-[1px] w-12 bg-[#E5E5E2]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#171717] leading-tight">
                NOT EVERYTHING THAT CAN BE ADDED <br />
                <span className="text-[#3D7362]">SHOULD BE ADDED.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-light">
                As a business grows, new tools, dashboards, and review cycles can solve individual problems while making the overall experience harder to manage.
              </p>

              <p className="text-sm text-[#666666] leading-relaxed">
                The answer is rarely another platform to log into. More often, it is a thoughtful way of organizing work, establishing transparent ownership, and eliminating duplicate friction.
              </p>

              {/* View Toggle */}
              <div className="pt-2">
                <div className="inline-flex p-1 bg-[#F4F4F2] border border-[#E5E5E2] rounded-md">
                  <button
                    onClick={() => setComplexityMode('bloated')}
                    className={`px-4 py-2 text-xs font-mono rounded transition-all duration-200 ${
                      complexityMode === 'bloated'
                        ? 'bg-[#FEE2E2] text-[#991B1B] border border-[#FCA5A5]'
                        : 'text-[#666666] hover:text-[#171717]'
                    }`}
                  >
                    ACCUMULATED NOISE
                  </button>
                  <button
                    onClick={() => setComplexityMode('streamlined')}
                    className={`px-4 py-2 text-xs font-mono rounded transition-all duration-200 ${
                      complexityMode === 'streamlined'
                        ? 'bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0]'
                        : 'text-[#666666] hover:text-[#171717]'
                    }`}
                  >
                    STREAMLINED COHERENCE
                  </button>
                </div>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 bg-[#FAFAF9] border border-[#E5E5E2] rounded-xl relative overflow-hidden">
                <div className="text-xs font-mono text-[#666666] uppercase tracking-wider mb-6 flex justify-between items-center">
                  <span>OPERATIONAL STATE SIMULATION</span>
                  <span className={complexityMode === 'bloated' ? 'text-[#DC2626] font-semibold' : 'text-[#059669] font-semibold'}>
                    {complexityMode === 'bloated' ? 'STATUS: HIGH RESISTANCE' : 'STATUS: CLEAR & COHERENT'}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {complexityMode === 'bloated' ? (
                    <motion.div
                      key="bloated"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      {/* Scattered friction nodes */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[
                          'Another software subscription',
                          'Another manual report to write',
                          'Another update to copy across tools',
                          'Another approval waiting in chat',
                          'Another place to search for specs',
                          'Another task lost between teams'
                        ].map((point, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 bg-white border border-[#E5E5E2] rounded text-xs text-[#222222] flex items-start gap-2.5 shadow-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 flex-shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-[#FEF2F2] border border-[#FCA5A5] rounded text-xs text-[#991B1B] text-center font-mono">
                        RESULT: Fragmented team attention · High administrative overhead · Slower decision making
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="streamlined"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      {/* Unified cohesive flow */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-4 bg-white border border-[#E5E5E2] rounded space-y-2 shadow-sm">
                          <span className="text-[10px] font-mono text-[#059669] uppercase font-semibold">TOUCHPOINT 01</span>
                          <h4 className="text-sm font-medium text-[#171717]">Clear Brand Position</h4>
                          <p className="text-xs text-[#555555]">Clients understand your true offering instantly.</p>
                        </div>
                        <div className="p-4 bg-white border border-[#E5E5E2] rounded space-y-2 shadow-sm">
                          <span className="text-[10px] font-mono text-[#059669] uppercase font-semibold">TOUCHPOINT 02</span>
                          <h4 className="text-sm font-medium text-[#171717]">Frictionless Website</h4>
                          <p className="text-xs text-[#555555]">Prospects navigate, trust, and enquire with zero drag.</p>
                        </div>
                        <div className="p-4 bg-white border border-[#E5E5E2] rounded space-y-2 shadow-sm">
                          <span className="text-[10px] font-mono text-[#059669] uppercase font-semibold">TOUCHPOINT 03</span>
                          <h4 className="text-sm font-medium text-[#171717]">Connected System</h4>
                          <p className="text-xs text-[#555555]">Autonomous teams execute with real-time clarity.</p>
                        </div>
                      </div>

                      <div className="p-4 bg-[#ECFDF5] border border-[#A7F3D0] rounded text-xs text-[#065F46] text-center font-mono">
                        RESULT: High focus · Less unbilled administration · Reliable operational flow
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
          SECTION 06: AN INTERACTIVE DECISION EXPERIENCE
          "WHAT ACTUALLY NEEDS TO CHANGE?"
          4 clear business situations, tailored diagnosis, subtle CTA.
      ========================================================================= */}
      <section id="decision-diagnostic" className="py-24 md:py-32 border-b border-[#1E252E] bg-[#0A0E13]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="max-w-2xl mb-12 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#52947F]">02 / INTERACTIVE DIAGNOSTIC</span>
              <div className="h-[1px] w-12 bg-[#232C37]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF9F5] tracking-tight">
              WHAT ACTUALLY NEEDS TO CHANGE?
            </h2>

            <p className="text-base text-[#9FA6B2] font-light">
              Select the situation that best describes where your company experiences friction today. We will outline the most direct, pragmatic solution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Situation Selectors (Left 5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              {decisionSituations.map((sit, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIssue(index)}
                  className={`w-full p-5 text-left rounded-lg transition-all duration-200 border flex items-start gap-4 ${
                    selectedIssue === index
                      ? 'bg-[#141C24] border-[#52947F] text-[#FAF9F5] shadow-md'
                      : 'bg-[#0E1319] border-[#1D2530] text-[#868E9B] hover:text-[#C5CAD2] hover:border-[#27323F]'
                  }`}
                >
                  <span className={`text-xs font-mono px-2 py-1 rounded mt-0.5 ${
                    selectedIssue === index ? 'bg-[#52947F] text-[#0A0E13] font-bold' : 'bg-[#17202A] text-[#717B88]'
                  }`}>
                    {sit.num}
                  </span>
                  <div className="flex-1">
                    <div className="text-xs font-mono uppercase tracking-wider mb-1 text-[#868E9B]">SITUATION {sit.num}</div>
                    <div className={`text-sm font-medium leading-snug ${selectedIssue === index ? 'text-white' : 'text-[#A8B0BC]'}`}>
                      {sit.problem}
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 mt-2 transition-transform ${selectedIssue === index ? 'rotate-90 text-[#52947F]' : 'text-[#485360]'}`} />
                </button>
              ))}
            </div>

            {/* Diagnostic Solution Card (Right 7 cols) */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIssue}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 sm:p-10 bg-[#10161E] border border-[#232D3A] rounded-xl shadow-xl space-y-8"
                >
                  <div className="space-y-3 pb-6 border-b border-[#1C2632]">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#52947F] uppercase tracking-wider">DIAGNOSTIC RECOMMENDATION</span>
                      <span className="text-[#717B88]">AREA {decisionSituations[selectedIssue].num} OF 04</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light text-[#FAF9F5]">
                      {decisionSituations[selectedIssue].diagnosis}
                    </h3>
                    <div className="inline-block px-3 py-1 bg-[#172220] border border-[#27483C] text-[#71C7A5] font-mono text-xs rounded">
                      CORE CAPABILITY: {decisionSituations[selectedIssue].capability}
                    </div>
                  </div>

                  <p className="text-base text-[#B8C0CC] leading-relaxed font-light">
                    {decisionSituations[selectedIssue].detail}
                  </p>

                  <div className="space-y-3">
                    <span className="text-xs font-mono text-[#717B88] uppercase tracking-wider block">KEY FOCUS DELIVERABLES:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {decisionSituations[selectedIssue].deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2.5 text-xs text-[#D8D6CD] p-2.5 bg-[#0C1015] border border-[#1C2530] rounded">
                          <Check className="w-3.5 h-3.5 text-[#52947F] flex-shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dedicated Action CTA */}
                  <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#1C2632]">
                    <span className="text-xs text-[#8E95A0]">No rigid packages. Tailored to your company's actual setup.</span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#52947F] hover:bg-[#437C6A] text-[#0A0E13] font-medium text-xs font-mono tracking-wider uppercase rounded transition-colors"
                    >
                      LET'S DISCUSS IT
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: BRAND DESIGN: MAKE THE BUSINESS UNDERSTOOD
          "CLARITY IS PART OF QUALITY."
          Demonstrates the difference between confusing business presentation vs clarity.
      ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#E5E5E2] bg-white text-[#171717]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Marker */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#3D7362] font-semibold">03 / CAPABILITY: BRAND DESIGN</span>
            <div className="h-[1px] w-12 bg-[#E5E5E2]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#171717] leading-tight">
                CLARITY IS PART <br />
                <span className="text-[#3D7362]">OF QUALITY.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-light">
                A business can deliver exceptional work and still make it difficult for customers to understand its value.
              </p>

              <div className="space-y-3 text-sm text-[#666666]">
                <p>A well-considered brand communicates four fundamental truths:</p>
                <ul className="space-y-2 border-l border-[#E5E5E2] pl-4 text-xs font-mono text-[#444444]">
                  <li>01. WHAT THE BUSINESS DOES.</li>
                  <li>02. WHO IT SERVES.</li>
                  <li>03. WHAT MAKES IT VALUABLE.</li>
                  <li>04. WHY BUYERS SHOULD CONSIDER IT.</li>
                </ul>
              </div>

              <div className="pt-2">
                <span className="text-xs font-mono text-[#666666] uppercase tracking-wider block mb-3 font-semibold">WHAT WE DEVELOP:</span>
                <div className="flex flex-wrap gap-2">
                  {['Brand Identity', 'Visual Systems', 'Brand Guidelines', 'Presentations', 'Sales Materials', 'Digital Brand Assets'].map((asset, aIdx) => (
                    <span key={aIdx} className="px-3 py-1.5 bg-[#FAFAF9] border border-[#E5E5E2] text-xs text-[#333333] rounded">
                      {asset}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#F4FBF7] border-l-2 border-[#3D7362] text-xs text-[#28594B] font-mono leading-relaxed">
                KEY PRINCIPLE: Good design makes the value easier to see.
              </div>
            </div>

            {/* Right: Visual Demonstration (Confusing vs Clear) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono text-[#666666] uppercase tracking-wider font-semibold">
                CONTRAST: COMMUNICATING VALUE TO INTERNATIONAL & DOMESTIC BUYERS
              </div>

              <div className="space-y-4">
                {/* Ambiguous Presentation */}
                <div className="p-6 bg-[#FAFAF9] border border-[#E5E5E2] rounded-lg opacity-75">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E2] mb-3">
                    <span className="text-xs font-mono text-[#DC2626] flex items-center gap-1.5 font-semibold">
                      <XCircle className="w-3.5 h-3.5" /> CONFUSING & VAGUE PRESENTATION
                    </span>
                    <span className="text-[11px] font-mono text-[#888888]">HIGH FRICTION</span>
                  </div>
                  <h4 className="text-sm font-medium text-[#666666] line-through decoration-[#DC2626]">
                    "We are holistic synergy pioneers revolutionizing end-to-end future ecosystems."
                  </h4>
                  <p className="text-xs text-[#777777] mt-2">
                    Result: Prospective clients cannot understand what you actually provide, compare you on low price, or leave confused.
                  </p>
                </div>

                {/* Clear Coherent Presentation */}
                <div className="p-7 bg-[#F4FBF7] border border-[#A7F3D0] rounded-lg shadow-sm relative">
                  <div className="flex items-center justify-between pb-3 border-b border-[#D1FAE5] mb-3">
                    <span className="text-xs font-mono text-[#059669] flex items-center gap-1.5 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> CONSIDERED & PRECISE PRESENTATION
                    </span>
                    <span className="text-[11px] font-mono text-[#3D7362]">EFFORTLESS CLARITY</span>
                  </div>
                  <h4 className="text-base font-medium text-[#171717]">
                    "We engineer precision clean-room automation for specialized European medical device manufacturers."
                  </h4>
                  <p className="text-xs text-[#28594B] mt-2">
                    Result: The client immediately recognizes relevance, understands the scope, and engages with respect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: WEBSITE & DIGITAL EXPERIENCE
          "MAKE THE NEXT STEP OBVIOUS."
          Customer perspective journey: DISCOVER → UNDERSTAND → TRUST → ACT
      ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#1E252E] bg-[#0A0E13]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="max-w-2xl mb-12 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#52947F]">04 / CAPABILITY: DIGITAL EXPERIENCE</span>
              <div className="h-[1px] w-12 bg-[#232C37]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF9F5] tracking-tight">
              MAKE THE NEXT STEP OBVIOUS.
            </h2>

            <p className="text-base text-[#9FA6B2] font-light">
              A good digital experience should feel straightforward to use. We examine your customer touchpoint stage by stage to eliminate uncertainty.
            </p>
          </div>

          {/* Interactive Customer Journey Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {journeySteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveJourneyStep(idx)}
                className={`p-4 text-left rounded-lg border transition-all duration-200 ${
                  activeJourneyStep === idx
                    ? 'bg-[#141E26] border-[#52947F] text-[#FAF9F5]'
                    : 'bg-[#0E1318] border-[#1E2632] text-[#7E8896] hover:text-[#C5CAD2]'
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#52947F] mb-1">
                  STAGE 0{idx + 1}
                </div>
                <div className="text-sm font-medium">{step.stage}</div>
                <div className="text-xs text-[#8E95A0] mt-0.5">{step.label}</div>
              </button>
            ))}
          </div>

          {/* Active Stage Comparison */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeJourneyStep}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-[#10161E] border border-[#232D39] rounded-xl shadow-lg"
            >
              {/* Where companies slow down */}
              <div className="p-6 bg-[#161317] border border-[#392429] rounded-lg space-y-3">
                <div className="text-xs font-mono text-[#E58B88] uppercase tracking-wider flex items-center gap-2">
                  <XCircle className="w-3.5 h-3.5" /> COMMON SOURCE OF FRICTION
                </div>
                <div className="text-xs font-mono text-[#8E95A0]">AT STAGE: {journeySteps[activeJourneyStep].stage}</div>
                <p className="text-sm text-[#D8D6CD] leading-relaxed">
                  {journeySteps[activeJourneyStep].friction}
                </p>
              </div>

              {/* How Mayaa refines the experience */}
              <div className="p-6 bg-[#111F1A] border border-[#24473B] rounded-lg space-y-3">
                <div className="text-xs font-mono text-[#71C7A5] uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5" /> THE CONSIDERED RESOLUTION
                </div>
                <div className="text-xs font-mono text-[#52947F]">ENGINEERED OUTCOME</div>
                <p className="text-sm text-[#A3C9B8] leading-relaxed">
                  {journeySteps[activeJourneyStep].resolution}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* What We Build */}
          <div className="mt-12 pt-8 border-t border-[#1C2632] flex flex-wrap items-center justify-between gap-6 text-xs text-[#8E95A0]">
            <span className="font-mono text-[#D4CEBF]">PROJECT SCOPE INCLUDES:</span>
            <div className="flex flex-wrap gap-4 font-mono text-[#B0B7C2]">
              <span>Website strategy & design</span>
              <span>·</span>
              <span>Modern frontend development</span>
              <span>·</span>
              <span>Service presentation</span>
              <span>·</span>
              <span>Enquiry journeys</span>
              <span>·</span>
              <span>Multilingual experiences</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: BUSINESS MANAGEMENT SYSTEMS: SUPPORT PEOPLE
          "MAKE IT EASIER TO DO THE WORK."
          Realistic business situation: ENQUIRY → SALES → CUSTOMER → PROJECT → TEAM → MANAGEMENT
      ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#E5E5E2] bg-white text-[#171717]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Marker */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#3D7362] font-semibold">05 / CAPABILITY: BUSINESS SYSTEMS</span>
            <div className="h-[1px] w-12 bg-[#E5E5E2]" />
          </div>

          <div className="max-w-3xl mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#171717] leading-tight">
              MAKE IT EASIER TO DO THE WORK.
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
              We design personalised business management systems around how your company actually functions. The system should support the work, not become more work.
            </p>
          </div>

          {/* Practical Workflow Pipeline Map */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {workflowNodes.map((node, nIdx) => (
              <button
                key={nIdx}
                onClick={() => setActiveWorkflowStep(nIdx)}
                className={`p-4 text-left rounded border transition-all duration-200 ${
                  activeWorkflowStep === nIdx
                    ? 'bg-[#EBF7F2] border-[#3D7362] text-[#171717] font-medium shadow-sm'
                    : 'bg-[#FAFAF9] border-[#E5E5E2] text-[#666666] hover:text-[#171717]'
                }`}
              >
                <div className="text-[10px] font-mono text-[#3D7362] font-semibold mb-1">0{nIdx + 1}</div>
                <div className="text-xs font-mono uppercase tracking-wider font-semibold">{node.stage}</div>
                <div className="text-[11px] text-[#777777] mt-1 truncate">{node.role}</div>
              </button>
            ))}
          </div>

          {/* Active Node Detail Card */}
          <div className="p-8 bg-[#FAFAF9] border border-[#E5E5E2] rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <div className="text-xs font-mono text-[#3D7362] font-semibold uppercase tracking-wider">
                  STAGE 0{activeWorkflowStep + 1}: {workflowNodes[activeWorkflowStep].stage} · {workflowNodes[activeWorkflowStep].role}
                </div>
                <p className="text-base text-[#333333] leading-relaxed">
                  {workflowNodes[activeWorkflowStep].description}
                </p>
                <div className="text-xs font-mono text-[#666666]">
                  PRIMARY BENEFIT: <span className="text-[#3D7362] font-medium">{workflowNodes[activeWorkflowStep].metric}</span>
                </div>
              </div>

              <div className="md:col-span-4 bg-white p-5 rounded-lg border border-[#E5E5E2] space-y-2 shadow-sm">
                <span className="text-[11px] font-mono text-[#777777] uppercase block font-semibold">TAILORED INTEGRATION</span>
                <p className="text-xs text-[#555555] leading-relaxed">
                  No rigid off-the-shelf constraints. Built to connect with your existing tools (e-conomic, Dinero, Microsoft 365, Jira).
                </p>
              </div>
            </div>
          </div>

          {/* Summary Checklist */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-[#555555]">
            <div className="p-3 bg-[#FAFAF9] border border-[#E5E5E2] rounded">✓ Leads & follow-ups</div>
            <div className="p-3 bg-[#FAFAF9] border border-[#E5E5E2] rounded">✓ Task & project ownership</div>
            <div className="p-3 bg-[#FAFAF9] border border-[#E5E5E2] rounded">✓ Document & contract links</div>
            <div className="p-3 bg-[#FAFAF9] border border-[#E5E5E2] rounded">✓ Real-time status visibility</div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: TRUST AND AUTONOMY
          "CLARITY DOES NOT REQUIRE MORE CONTROL."
          Danish workplace culture: flat hierarchy, employee autonomy, visible responsibilities.
      ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#1E252E] bg-[#0A0E13]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Marker */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#52947F]">06 / MANAGEMENT PRINCIPLE</span>
            <div className="h-[1px] w-12 bg-[#232C37]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF9F5] leading-tight">
                CLARITY DOES NOT <br />
                <span className="text-[#A3C9B8]">REQUIRE MORE CONTROL.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#B4BAC3] leading-relaxed font-light">
                People work best when responsibilities are clear, information is accessible, and the next action is understood.
              </p>

              <p className="text-sm text-[#8E95A0] leading-relaxed">
                A well-designed system supports Danish workplace trust. It does not monitor or micromanage employees; it provides a shared operational baseline so independent teams coordinate without chasing updates.
              </p>

              <div className="p-4 bg-[#111A16] border-l-2 border-[#52947F] text-xs font-mono text-[#A3C9B8]">
                SUPPORT AUTONOMY: Operational transparency replaces administrative friction.
              </div>
            </div>

            {/* Right Contrast Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Without Clarity */}
              <div className="p-7 bg-[#141216] border border-[#2D1F23] rounded-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#281A1F]">
                  <span className="text-xs font-mono text-[#E58B88] uppercase tracking-wider">WITHOUT CLARITY</span>
                  <XCircle className="w-4 h-4 text-[#E58B88]" />
                </div>
                <ul className="space-y-3 text-xs text-[#D8D6CD]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E58B88] font-mono">•</span>
                    <span>Repeated status requests and interruptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E58B88] font-mono">•</span>
                    <span>Ambiguous ownership between team members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E58B88] font-mono">•</span>
                    <span>Critical project specs buried in chat threads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E58B88] font-mono">•</span>
                    <span>Management left guessing delivery progress</span>
                  </li>
                </ul>
              </div>

              {/* With Clarity */}
              <div className="p-7 bg-[#101A16] border border-[#25453A] rounded-xl space-y-4 shadow-lg">
                <div className="flex items-center justify-between pb-3 border-b border-[#1E3B31]">
                  <span className="text-xs font-mono text-[#71C7A5] uppercase tracking-wider">WITH CLARITY</span>
                  <CheckCircle2 className="w-4 h-4 text-[#71C7A5]" />
                </div>
                <ul className="space-y-3 text-xs text-[#A3C9B8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#71C7A5] font-mono">✓</span>
                    <span>Visible responsibilities and clear next steps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#71C7A5] font-mono">✓</span>
                    <span>Accessible specs and centralized context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#71C7A5] font-mono">✓</span>
                    <span>Fewer meetings and reduced coordination drag</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#71C7A5] font-mono">✓</span>
                    <span>Shared trust and empowered accountability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: RESPONSIBLE TECHNOLOGY: DO NOT ADD AI FOR APPEARANCES
          "TECHNOLOGY SHOULD EARN ITS PLACE."
          Pragmatic automation without hype.
      ========================================================================= */}
      <section className="py-20 md:py-28 border-b border-[#E5E5E2] bg-white text-[#171717]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="p-8 sm:p-12 bg-[#FAFAF9] border border-[#E5E5E2] rounded-2xl relative overflow-hidden shadow-sm">
            <div className="max-w-2xl space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#3D7362] font-semibold">07 / PRAGMATIC TECHNOLOGY</span>
                <div className="h-[1px] w-12 bg-[#E5E5E2]" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-light text-[#171717] leading-tight">
                TECHNOLOGY SHOULD EARN ITS PLACE.
              </h2>

              <p className="text-base text-[#555555] leading-relaxed font-light">
                Denmark has substantial digital and AI adoption. The strategic opportunity is to deploy practical automation where it genuinely saves time, preserving human judgment and oversight.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-[#333333]">
                <div className="p-3 bg-white border border-[#E5E5E2] rounded shadow-sm">→ Repetitive data routing</div>
                <div className="p-3 bg-white border border-[#E5E5E2] rounded shadow-sm">→ Information classification</div>
                <div className="p-3 bg-white border border-[#E5E5E2] rounded shadow-sm">→ Follow-up reminders</div>
                <div className="p-3 bg-white border border-[#E5E5E2] rounded shadow-sm">→ Document handoffs</div>
              </div>

              <p className="text-xs text-[#777777] italic font-mono pt-2">
                "If a process does not need AI, do not add AI."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: A VISUAL INTERLUDE ABOUT GOOD BUSINESS DESIGN
          Full-width typographic pause with generous whitespace.
      ========================================================================= */}
      <section className="py-32 md:py-48 border-b border-[#1E252E] bg-[#0A0E13] relative overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          <div className="text-xs font-mono text-[#52947F] tracking-widest uppercase">
            [ DESIGN PHILOSOPHY ]
          </div>

          <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#FAF9F5] leading-tight tracking-tight max-w-4xl mx-auto">
            “GOOD DESIGN IS NOT JUST <br />
            HOW SOMETHING LOOKS. <br />
            <span className="text-[#A3C9B8]">IT IS HOW WELL IT WORKS.”</span>
          </blockquote>

          <p className="text-sm sm:text-base text-[#7E8896] max-w-lg mx-auto font-light">
            Bringing brand perception, client touchpoints, and internal business execution into one calm, coherent system.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: INDUSTRIES: EDITORIAL RELEVANCE WITHOUT A DIRECTORY
          8 relevant Danish sectors with one short, specific line each.
      ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#E5E5E2] bg-white text-[#171717]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="max-w-2xl mb-14 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#3D7362] font-semibold">08 / INDUSTRY RELEVANCE</span>
              <div className="h-[1px] w-12 bg-[#E5E5E2]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#171717] tracking-tight">
              DESIGNED AROUND HOW BUSINESSES OPERATE.
            </h2>

            <p className="text-base text-[#555555] font-light">
              Tailored capabilities for established and growing organizations across key Danish sectors.
            </p>
          </div>

          {/* Compact Editorial Sector List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {danishIndustries.map((ind, iIdx) => (
              <div
                key={iIdx}
                className="p-6 bg-[#FAFAF9] border border-[#E5E5E2] rounded-lg hover:border-[#3D7362] transition-colors duration-200 space-y-2.5 shadow-sm"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#3D7362] font-semibold uppercase tracking-wider">{ind.sector}</span>
                  <span className="text-[#777777]">0{iIdx + 1}</span>
                </div>
                <div className="text-xs font-mono text-[#666666]">{ind.anchor}</div>
                <p className="text-sm text-[#333333] leading-relaxed pt-1">
                  {ind.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14: INTERNATIONAL BUSINESS: ONE COMPANY, A CONSISTENT EXPERIENCE
          Cross-border coherence.
      ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#1E252E] bg-[#0A0E13]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Marker */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#52947F]">09 / CROSS-BORDER COHERENCE</span>
            <div className="h-[1px] w-12 bg-[#232C37]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF9F5] leading-tight">
                YOUR BUSINESS SHOULD FEEL CONSISTENT, <br />
                <span className="text-[#A3C9B8]">WHEREVER THE CUSTOMER FINDS IT.</span>
              </h2>

              <p className="text-base text-[#B4BAC3] leading-relaxed font-light">
                When a Danish company competes across Nordic, European, and global markets, its brand identity, digital presentation, customer journeys, and internal execution need to work as one.
              </p>

              <p className="text-sm text-[#8E95A0] leading-relaxed">
                Mayaa builds unified multilingual touchpoints and connected operational structures that allow you to expand your reach without fracturing client experience or multiplying back-office complexity.
              </p>
            </div>

            <div className="lg:col-span-6 p-8 bg-[#10161E] border border-[#232D3A] rounded-xl space-y-5">
              <div className="text-xs font-mono text-[#52947F] uppercase tracking-wider">
                INTERNATIONAL TOUCHPOINT ALIGNMENT
              </div>
              <div className="space-y-3 text-xs font-mono text-[#D4CEBF]">
                <div className="p-3.5 bg-[#0C1015] border border-[#1C2530] rounded flex justify-between items-center">
                  <span>MULTILINGUAL WEB & REGIONAL ADAPTATION</span>
                  <span className="text-[#71C7A5]">SEAMLESS</span>
                </div>
                <div className="p-3.5 bg-[#0C1015] border border-[#1C2530] rounded flex justify-between items-center">
                  <span>GLOBAL SALES & INTAKE WORKFLOWS</span>
                  <span className="text-[#71C7A5]">STRUCTURED</span>
                </div>
                <div className="p-3.5 bg-[#0C1015] border border-[#1C2530] rounded flex justify-between items-center">
                  <span>CROSS-BORDER PROPOSAL & CONTRACT TRACKING</span>
                  <span className="text-[#71C7A5]">UNIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 15: HOW MAYAA WORKS: A CONSIDERED APPROACH
          UNDERSTAND → CLARIFY → DESIGN → BUILD → REFINE
          One concise line per stage.
      ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#E5E5E2] bg-white text-[#171717]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="max-w-2xl mb-14 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#3D7362] font-semibold">10 / WORKING METHOD</span>
              <div className="h-[1px] w-12 bg-[#E5E5E2]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#171717] tracking-tight">
              UNDERSTAND THE PROBLEM BEFORE CHOOSING THE SOLUTION.
            </h2>

            <p className="text-base text-[#555555] font-light">
              We focus on decision quality and practical business results, not the number of software features.
            </p>
          </div>

          {/* 5-Step Visual Sequence */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                num: '01',
                title: 'UNDERSTAND',
                desc: 'Learn how your business actually operates and where the real friction lies.'
              },
              {
                num: '02',
                title: 'CLARIFY',
                desc: 'Decide what needs to change, what to streamline, and what should remain untouched.'
              },
              {
                num: '03',
                title: 'DESIGN',
                desc: 'Create the appropriate brand architecture, web journey, or operational workflow.'
              },
              {
                num: '04',
                title: 'BUILD',
                desc: 'Engineer the agreed solution around your team’s exact workflows and tech stack.'
              },
              {
                num: '05',
                title: 'REFINE',
                desc: 'Fine-tune and improve the system based on real operational feedback in practice.'
              }
            ].map((step, sIdx) => (
              <div
                key={sIdx}
                className="p-6 bg-[#FAFAF9] border border-[#E5E5E2] rounded-lg space-y-3 relative group hover:border-[#3D7362] transition-colors shadow-sm"
              >
                <div className="text-xs font-mono text-[#3D7362] font-semibold">{step.num}</div>
                <h3 className="text-sm font-mono font-semibold tracking-wider text-[#171717]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          DELIVERY MODEL FOR ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#0E1319] border-t border-[#1E252E] px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <div className="inline-block px-3 py-1 bg-[#141B22] border border-[#232D39] text-[#52947F] text-xs font-mono tracking-widest uppercase rounded mb-4">
              DELIVERY MODEL
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-[#FAF9F5] tracking-tight mb-4">
              Engineering built around clear execution. <br />
              <span className="text-[#8E95A0]">Zero Copenhagen agency overhead.</span>
            </h2>
            <p className="text-base text-[#9FA6B2] max-w-2xl font-light leading-relaxed">
              Mayaa delivers senior engineering, brand architecture, and custom systems directly from India. We offer direct principal-to-engineer communication without junior account layers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#10151C] border border-[#202934] rounded-lg space-y-3">
              <div className="text-xs font-mono text-[#52947F]">01 · TIMEZONE OVERLAP</div>
              <h3 className="text-sm font-mono font-semibold tracking-wider text-[#FAF9F5]">CET / CEST Windows</h3>
              <p className="text-xs text-[#9FA6B2] leading-relaxed">
                With a manageable 3.5 to 4.5-hour timezone difference, our working afternoons directly align with Danish mornings and core hours for live standups, demos, and reviews.
              </p>
            </div>

            <div className="p-6 bg-[#10151C] border border-[#202934] rounded-lg space-y-3">
              <div className="text-xs font-mono text-[#52947F]">02 · DATA SOVEREIGNTY</div>
              <h3 className="text-sm font-mono font-semibold tracking-wider text-[#FAF9F5]">European Cloud Tenancies</h3>
              <p className="text-xs text-[#9FA6B2] leading-relaxed">
                Systems and data are deployed directly onto client-owned European cloud infrastructure complying fully with GDPR and Danish Datatilsynet requirements.
              </p>
            </div>

            <div className="p-6 bg-[#10151C] border border-[#202934] rounded-lg space-y-3">
              <div className="text-xs font-mono text-[#52947F]">03 · COMMERCIAL TERMS</div>
              <h3 className="text-sm font-mono font-semibold tracking-wider text-[#FAF9F5]">DKK / EUR Milestone Billing</h3>
              <p className="text-xs text-[#9FA6B2] leading-relaxed">
                Fixed-scope milestone contracts invoiced in DKK or EUR. 100% intellectual property ownership of all custom code with zero recurring per-user SaaS license fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FREQUENTLY ASKED QUESTIONS (FAQ)
      ========================================================================= */}
      <section className="py-24 md:py-32 bg-white border-t border-[#E5E5E2] px-6 sm:px-8 lg:px-12 text-[#171717]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <div className="inline-block px-3 py-1 bg-[#FAFAF9] border border-[#E5E5E2] text-[#3D7362] text-xs font-mono tracking-widest uppercase rounded mb-4 font-semibold">
              DANISH DECISION-MAKER FAQS
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-[#171717] tracking-tight mb-4">
              Common questions from <br />
              <span className="text-[#666666]">Danish executive teams.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {DENMARK_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#E5E5E2] bg-[#FAFAF9] rounded-lg overflow-hidden transition-colors hover:border-[#3D7362] shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 text-[#171717] hover:text-[#3D7362] transition-colors"
                >
                  <span className="text-base font-medium">{faq.question}</span>
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

      {/* =========================================================================
          SECTION 16: FINAL CONVERSION: LET THE VISITOR CHOOSE THE CONVERSATION
          3 options: A CLEARER BRAND / A BETTER DIGITAL EXPERIENCE / A MORE CONNECTED BUSINESS
      ========================================================================= */}
      <section className="py-24 md:py-36 bg-[#0A0E13] relative overflow-hidden border-t border-[#1E252E]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-10">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-[#141B22] border border-[#232D39] text-[#52947F] text-xs font-mono tracking-widest uppercase rounded">
              DIRECT CONSULTATION
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#FAF9F5] tracking-tight">
              WHAT WOULD MAKE YOUR BUSINESS WORK BETTER?
            </h2>

            <p className="text-base text-[#9FA6B2] max-w-xl mx-auto font-light">
              Choose the area where your company could benefit most from greater clarity or smoother execution:
            </p>
          </div>

          {/* 3 Interactive Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {[
              {
                id: 'brand',
                label: 'A CLEARER BRAND',
                desc: 'Positioning, visual identity, and messaging that communicate your true value.'
              },
              {
                id: 'experience',
                label: 'A BETTER DIGITAL EXPERIENCE',
                desc: 'A modern website and customer journey that eliminate hesitation and drive enquiries.'
              },
              {
                id: 'systems',
                label: 'A MORE CONNECTED BUSINESS',
                desc: 'Tailored workflows, automated handoffs, and clear visibility for your team.'
              }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setCtaFocus(opt.id as any)}
                className={`p-5 text-left rounded-lg border transition-all duration-200 ${
                  ctaFocus === opt.id
                    ? 'bg-[#15202A] border-[#52947F] text-[#FAF9F5] shadow-lg'
                    : 'bg-[#0E1318] border-[#1E2632] text-[#868E9B] hover:text-[#C5CAD2]'
                }`}
              >
                <div className="text-xs font-mono font-semibold tracking-wider mb-2 text-[#52947F]">
                  {opt.label}
                </div>
                <div className="text-xs text-[#9FA6B2] leading-relaxed">
                  {opt.desc}
                </div>
              </button>
            ))}
          </div>

          {/* Selected Focus Affirmation */}
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FAF9F5] hover:bg-[#EAE8E1] text-[#0A0E13] font-medium text-sm tracking-wide rounded transition-all duration-200 shadow-md hover:translate-y-[-1px]"
            >
              START A CONVERSATION
              <ArrowRight className="w-4 h-4 text-[#0A0E13]" />
            </Link>

            <div className="mt-4 flex items-center justify-center gap-6 text-xs font-mono text-[#767E8A]">
              <span>Direct communication</span>
              <span>·</span>
              <span>No aggressive sales calls</span>
              <span>·</span>
              <span>Pragmatic discussion</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
