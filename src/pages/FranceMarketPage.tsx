import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown,
  Building2, 
  Layers, 
  ShieldCheck, 
  Globe2, 
  Briefcase,
  CheckCircle2,
  TrendingUp,
  FileText,
  BarChart3,
  MapPin,
  Sparkles,
  LayoutTemplate,
  Compass,
  Palette,
  Eye,
  Sliders,
  CheckSquare
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const FranceMarketPage: React.FC = () => {
  // 6 France Industry Configurations
  const franceConfigurations = [
    {
      num: '01',
      title: 'ARCHITECTURE PRACTICE SYSTEM',
      tagline: 'Projects · Clients · Proposals · Approvals · Drawings · Consultants · Milestones · Reporting',
      desc: 'Connect architecture projects, client communication and practice operations.',
      focus: ['Phased Work Stages (Esquisse to AOR)', 'Fee Proposals & Scope Boundaries', 'Drawing Register & Issue Sheets', 'Permit & Authority Filing Logs', 'Consultant Submittal Tracking', 'Client Milestone Sign-offs', 'Studio Resource Allocation'],
    },
    {
      num: '02',
      title: 'INTERIOR PROJECT SYSTEM',
      tagline: 'Projects · Design Stages · Approvals · Procurement · Suppliers · Materials · Site Progress',
      desc: 'Connect design, approvals, procurement and project delivery.',
      focus: ['Design Phase Approvals', 'FF&E Specification Schedules', 'Custom Fabricator Work Orders', 'Material Lead-Time Tracking', 'Trade Contractor Alignment', 'Site Progress & Snagging / Defect Punch Lists'],
    },
    {
      num: '03',
      title: 'CONSTRUCTION OPERATIONS SYSTEM',
      tagline: 'Projects · Sites · Contractors · Materials · Suppliers · Progress · Documents · Reporting',
      desc: 'Connect project delivery, contractors, suppliers and management.',
      focus: ['Site Diaries & Chantier Logs', 'Subcontractor Scopes & Verification', 'Material Orders & Delivery Schedules', 'Milestone Handover Protocols', 'Safety & Statutory Compliance Records', 'Progress Payment Tracking', 'Executive Project Dashboards'],
    },
    {
      num: '04',
      title: 'PROPERTY MANAGEMENT SYSTEM',
      tagline: 'Properties · Units · Tenants · Maintenance · Requests · Payments · Documents · Reporting',
      desc: 'Bring property operations and tenant activity into one connected environment.',
      focus: ['Portfolio Asset Registers', 'Lease Records & Tenant Logs', 'Maintenance Work Order Dispatch', 'Vendor Verification & Invoicing', 'Scheduled Inspection Logs', 'Regulatory Compliance Certificates', 'Owner Asset Statements'],
    },
    {
      num: '05',
      title: 'HOSPITALITY OPERATIONS SYSTEM',
      tagline: 'Reservations · Guests · Rooms · Housekeeping · Maintenance · Teams · Reporting',
      desc: 'Connect day-to-day hospitality operations across teams and guests.',
      focus: ['Guest Preference & Account Records', 'Service Request Dispatch', 'Housekeeping Roster & Status', 'Preventive Maintenance Schedules', 'Shift Handover Notes', 'Incident & Resolution Tracking', 'Operational Audits'],
    },
    {
      num: '06',
      title: 'CREATIVE / PROFESSIONAL SERVICES SYSTEM',
      tagline: 'Leads · Clients · Projects · Tasks · Documents · Approvals · Teams · Reporting',
      desc: 'Create an operational system for specialist studios, consultancies and service businesses.',
      focus: ['Client Engagement Intake', 'Project Deliverable Milestones', 'Deliverable Review & Approval Cycles', 'Resource Planning & Team Utilization', 'Proposal-to-Contract Handovers', 'Operational Performance Reporting'],
    },
  ];

  // France Key Business Hubs
  const franceCities = [
    'Paris',
    'Lyon',
    'Marseille',
    'Toulouse',
    'Bordeaux',
    'Lille',
    'Nice',
    'Nantes',
  ];

  return (
    <>
      <SEO
        title="Digital Systems & Infrastructure for French Businesses | Mayaa Solutions"
        description="Designed with intention. Built for the way your business works. Mayaa designs brands, websites and personalised Business Management Systems for French architecture, interior, construction and specialist enterprises."
        keywords="France business management systems, custom software Paris, architecture practice software France, interior design project management Paris, French enterprise digital partner, Mayaa Solutions France"
        ogImage="/images/france-commercial-hero.jpg"
        canonicalUrl="https://mayaasolutions.in/global-markets/paris"
      />

      <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden pt-24 sm:pt-28 md:pt-32">

        {/* ==================================================
            01. HERO SECTION
        ================================================== */}
        <section className="px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto pb-16 sm:pb-20 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              <div className="flex items-center gap-3">
                <span className="inline-block w-2.5 h-2.5 bg-neutral-300 rounded-full animate-pulse" />
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono">
                  FRANCE MARKET
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.08] uppercase">
                DESIGNED WITH INTENTION. <br />
                <span className="font-medium text-neutral-200">BUILT FOR THE WAY YOUR BUSINESS WORKS.</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl">
                A strong business needs more than a beautiful digital presence.
              </p>

              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl">
                Mayaa creates brands, websites and personalised Business Management Systems around the way your business actually operates.
              </p>

              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contact?market=france&intent=business-systems"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-neutral-200 transition-all duration-300 group shadow-lg shadow-white/5"
                >
                  DISCUSS YOUR BUSINESS
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/business-systems"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300"
                >
                  EXPLORE BUSINESS SYSTEMS
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Sub-badge: Clarity & Philosophy */}
              <div className="pt-4 border-t border-neutral-900 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-neutral-400">
                <div>
                  <span className="text-neutral-500 block">THE EXPERIENCE</span>
                  <span className="text-neutral-200">Brand + Digital Experience</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">THE OPERATION</span>
                  <span className="text-neutral-200">Custom Business System</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-neutral-500 block">ENGAGEMENT</span>
                  <span className="text-neutral-200">Scope-Based in EUR (€)</span>
                </div>
              </div>
            </div>

            {/* Right Visual: Editorial Contemporary Parisian Commercial Architecture */}
            <div className="lg:col-span-5">
              <div className="relative border border-neutral-800/80 bg-neutral-950 p-2 sm:p-3 overflow-hidden shadow-2xl group">
                <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-neutral-900">
                  <img
                    src="/images/france-commercial-hero.jpg"
                    alt="Contemporary Parisian commercial architecture and design headquarters"
                    className="w-full h-full object-cover grayscale-[15%] contrast-105 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/85 backdrop-blur-md border border-neutral-800/80">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      CONTEMPORARY FRENCH COMMERCIAL ENVIRONMENT
                    </p>
                    <p className="text-xs text-neutral-200 mt-0.5 font-light">
                      Where architectural restraint and high design standards connect directly with operational execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================
            02. MARKET SCALE & VERIFIED INSEE / ARCHITECTS DATA
        ================================================== */}
        <section className="border-y border-neutral-900 bg-neutral-950/70 py-16 sm:py-24 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 mb-3">
                MARKET SCALE & CONTEXT
              </div>
              <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white uppercase leading-snug">
                A LARGE BUSINESS ECOSYSTEM. <br />
                <span className="text-neutral-300 font-medium">BUILT AROUND SPECIALISATION.</span>
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
                France has a large and diverse business landscape spanning construction, real estate, professional services, industry, hospitality and creative businesses. Behind each project are workflows, teams, decisions and information that need to work together.
              </p>
            </div>

            {/* 4 Verified Stats from INSEE & Ordre des Architectes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Stat 01 */}
              <div className="border border-neutral-800/80 bg-black/60 p-6 sm:p-7 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-4">
                    <span>STAT 01</span>
                    <span className="text-neutral-300">FRANCE, 2024</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-2">
                    5.99M
                  </div>
                  <div className="text-xs uppercase tracking-wider text-neutral-300 font-medium mb-3">
                    Active Legal Units
                  </div>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    Economically active legal enterprises registered across France.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-neutral-900 text-[10px] font-mono text-neutral-400">
                  Source: INSEE (2024)
                </div>
              </div>

              {/* Stat 02 */}
              <div className="border border-neutral-800/80 bg-black/60 p-6 sm:p-7 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-4">
                    <span>STAT 02</span>
                    <span className="text-neutral-300">FRANCE, 2024</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-2">
                    650,207
                  </div>
                  <div className="text-xs uppercase tracking-wider text-neutral-300 font-medium mb-3">
                    Construction Legal Units
                  </div>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    Economically active legal units operating across the French building and construction sector.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-neutral-900 text-[10px] font-mono text-neutral-400">
                  Source: INSEE (2024)
                </div>
              </div>

              {/* Stat 03 */}
              <div className="border border-neutral-800/80 bg-black/60 p-6 sm:p-7 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-4">
                    <span>STAT 03</span>
                    <span className="text-neutral-300">FRANCE, 2024</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-2">
                    364,947
                  </div>
                  <div className="text-xs uppercase tracking-wider text-neutral-300 font-medium mb-3">
                    Real Estate Legal Units
                  </div>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    Active legal units in real estate operations, property management and commercial developments.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-neutral-900 text-[10px] font-mono text-neutral-400">
                  Source: INSEE (2024)
                </div>
              </div>

              {/* Stat 04 */}
              <div className="border border-neutral-800/80 bg-black/60 p-6 sm:p-7 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-4">
                    <span>STAT 04</span>
                    <span className="text-neutral-300">REGISTERED</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-2">
                    30,500
                  </div>
                  <div className="text-xs uppercase tracking-wider text-neutral-300 font-medium mb-3">
                    Registered Architects
                  </div>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    Licensed professional architects registered with the French Order of Architects.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-neutral-900 text-[10px] font-mono text-neutral-400">
                  Source: Conseil national de l'Ordre des architectes
                </div>
              </div>

            </div>

            <div className="mt-8 text-center text-xs font-mono text-neutral-400">
              Note: 30,500 represents individual licensed architects registered with the Ordre des architectes rather than the total count of separate architecture agencies.
            </div>
          </div>
        </section>

        {/* ==================================================
            03. CONSTRUCTION SCALE (SEPARATE DEDICATED SECTION)
        ================================================== */}
        <section className="py-20 sm:py-24 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="border border-neutral-800 bg-neutral-950 p-8 sm:p-12 lg:p-14">
            
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 mb-3">
                BUILT ENVIRONMENT SCALE · 2023 ESANE DATA
              </div>
              <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white uppercase leading-snug">
                A BUILT ENVIRONMENT <br />
                <span className="text-neutral-300 font-medium">WITH REAL SCALE.</span>
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
                From specialist trades and building companies to civil engineering and property development, French construction businesses coordinate complex networks of projects, suppliers, teams and clients.
              </p>
            </div>

            {/* 3 Detailed 2023 Construction Figures */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-neutral-900">
              
              <div className="space-y-2">
                <span className="text-xs font-mono text-neutral-400 uppercase">2023 REFERENCE</span>
                <div className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                  587,898
                </div>
                <div className="text-xs uppercase tracking-wider text-neutral-300 font-medium">
                  Construction Enterprises
                </div>
                <p className="text-xs text-neutral-400 font-light">
                  Active enterprises delivering building, civil engineering and specialist trade contracts.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-neutral-400 uppercase">2023 REFERENCE</span>
                <div className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                  €405B
                </div>
                <div className="text-xs uppercase tracking-wider text-neutral-300 font-medium">
                  Construction-Sector Turnover
                </div>
                <p className="text-xs text-neutral-400 font-light">
                  Annual sectoral turnover excluding taxes generated across the French built environment.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-neutral-400 uppercase">2023 REFERENCE</span>
                <div className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                  1.59M
                </div>
                <div className="text-xs uppercase tracking-wider text-neutral-300 font-medium">
                  Full-Time-Equivalent Employees
                </div>
                <p className="text-xs text-neutral-400 font-light">
                  FTE workforce employed across active construction and civil engineering enterprises.
                </p>
              </div>

            </div>

            <div className="mt-8 pt-4 border-t border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] font-mono text-neutral-400 gap-2">
              <span>Source: INSEE / ESANE (Élaboration des statistiques annuelles d'entreprises, 2023)</span>
              <span>All figures clearly demarcated by 2023 sectoral reporting period</span>
            </div>

          </div>
        </section>

        {/* ==================================================
            04. THE FRANCE BUSINESS REALITY (BEAUTIFUL SURFACE → REAL OPERATIONS)
        ================================================== */}
        <section className="border-t border-neutral-900 bg-neutral-950/40 py-20 sm:py-28 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
                  THE DUAL REALITY
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white uppercase leading-tight">
                  THE BUSINESS CAN LOOK BEAUTIFUL. <br />
                  <span className="text-neutral-300 font-medium">THE OPERATIONS STILL NEED TO WORK.</span>
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
                  A premium client experience is only one part of the business. Behind it are dozens of workflows that need to stay connected.
                </p>
                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                  When client proposals, material selections, subcontractor approvals and site schedules operate through scattered email threads and ad-hoc spreadsheets, even the most prestigious studio loses time to administrative friction.
                </p>
                <p className="text-neutral-400 text-sm font-light">
                  Mayaa builds the digital infrastructure behind the experience.
                </p>
              </div>

              {/* Revealing the Operational Core Behind the Façade */}
              <div className="lg:col-span-6">
                <div className="border border-neutral-800 bg-black p-6 sm:p-8 space-y-6">
                  
                  <div>
                    <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1">
                      THE OPERATIONAL LAYER BEHIND THE WORK
                    </div>
                    <p className="text-xs text-neutral-400 font-light">
                      Essential business functions that must remain aligned across every engagement:
                    </p>
                  </div>

                  {/* 10 Operational Nodes */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                    {[
                      'CLIENTS',
                      'PROJECTS',
                      'PROPOSALS',
                      'APPROVALS',
                      'SUPPLIERS',
                      'DOCUMENTS',
                      'TEAMS',
                      'SCHEDULES',
                      'FOLLOW-UPS',
                      'REPORTING',
                    ].map((node, idx) => (
                      <div
                        key={idx}
                        className="border border-neutral-800 bg-neutral-950 p-2.5 text-center hover:border-neutral-700 transition-colors"
                      >
                        <div className="text-[11px] font-mono text-neutral-300 font-medium">{node}</div>
                      </div>
                    ))}
                  </div>

                  <div className="border border-neutral-800 bg-neutral-900/60 p-5 text-center mt-6">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                      INTEGRATED OPERATING LAYER
                    </span>
                    <h4 className="text-lg font-medium text-white uppercase tracking-tight">
                      ONE CONNECTED BUSINESS SYSTEM
                    </h4>
                    <p className="text-xs text-neutral-300 font-light mt-1.5 max-w-sm mx-auto">
                      Connecting client presentation with operational precision so your team spends time creating, not coordinating.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            05. PROBLEM SECTION (5 EDITORIAL BLOCKS)
        ================================================== */}
        <section className="py-20 sm:py-28 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          
          <div className="max-w-3xl mb-14 sm:mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 mb-3">
              GROWTH FRICTION
            </div>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white uppercase leading-snug">
              WHEN THE BUSINESS GROWS, <br />
              <span className="text-neutral-300 font-medium">THE OPERATION BECOMES THE PRODUCT TOO.</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light mt-4">
              Creative and project-driven businesses rarely struggle with inspiration; they struggle when managing project volume consumes the energy of the leadership team.
            </p>
          </div>

          {/* 5 Editorial Problem Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Problem 01 */}
            <div className="border border-neutral-800/80 bg-neutral-950 p-7 space-y-4 hover:border-neutral-700 transition-colors">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>01 — OBSTACLE</span>
                <span>FRAGMENTATION</span>
              </div>
              <h3 className="text-lg font-medium text-white uppercase tracking-tight">
                CLIENT INFORMATION IS SCATTERED
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Important conversations, documents and project information live across different places. Vital contract variations and material specifications get lost across individual inboxes, personal WhatsApp threads and unlinked cloud folders.
              </p>
            </div>

            {/* Problem 02 */}
            <div className="border border-neutral-800/80 bg-neutral-950 p-7 space-y-4 hover:border-neutral-700 transition-colors">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>02 — OBSTACLE</span>
                <span>COORDINATION</span>
              </div>
              <h3 className="text-lg font-medium text-white uppercase tracking-tight">
                PROJECTS CREATE MORE COORDINATION
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Every project introduces clients, teams, suppliers, approvals and deadlines. As project numbers scale, the hours spent keeping everyone informed increases exponentially without an organised system.
              </p>
            </div>

            {/* Problem 03 */}
            <div className="border border-neutral-800/80 bg-neutral-950 p-7 space-y-4 hover:border-neutral-700 transition-colors">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>03 — OBSTACLE</span>
                <span>CREATIVE BALANCE</span>
              </div>
              <h3 className="text-lg font-medium text-white uppercase tracking-tight">
                CREATIVE WORK NEEDS OPERATIONAL STRUCTURE
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Design businesses need systems that support creativity without creating unnecessary administration. Rigid corporate software stifles the studio, while zero software creates chaos.
              </p>
            </div>

            {/* Problem 04 */}
            <div className="border border-neutral-800/80 bg-neutral-950 p-7 space-y-4 hover:border-neutral-700 transition-colors">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>04 — OBSTACLE</span>
                <span>OVERSIGHT</span>
              </div>
              <h3 className="text-lg font-medium text-white uppercase tracking-tight">
                MANAGEMENT NEEDS A CLEARER VIEW
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Owners and managers need visibility across projects, teams and outstanding work. Extracting high-level project status shouldn't require interrupting team members for ad-hoc verbal updates.
              </p>
            </div>

            {/* Problem 05 */}
            <div className="border border-neutral-800/80 bg-neutral-950 p-7 space-y-4 hover:border-neutral-700 transition-colors md:col-span-2 lg:col-span-2">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>05 — OBSTACLE</span>
                <span>SCALABILITY</span>
              </div>
              <h3 className="text-lg font-medium text-white uppercase tracking-tight">
                THE BUSINESS OUTGROWS ITS WORKAROUNDS
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Processes that worked with five people may become difficult to manage with twenty or fifty. Spreadsheets that once felt flexible become brittle, prone to overwrite errors, and incapable of managing granular team permissions.
              </p>
            </div>

          </div>

          {/* Core Principle Statement */}
          <div className="mt-12 border-2 border-neutral-800 bg-black p-8 text-center max-w-3xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 mb-2">
              THE DESIGN SYSTEM PRINCIPLE
            </p>
            <h3 className="text-xl sm:text-2xl font-light uppercase tracking-tight text-white">
              THE RIGHT DIGITAL SYSTEM <br />
              <span className="font-semibold text-neutral-200">SHOULD SUPPORT THE WAY THE BUSINESS WORKS.</span>
            </h3>
          </div>

        </section>

        {/* ==================================================
            06. CORE BUSINESS SYSTEM (SYSTEM ARCHITECTURE)
        ================================================== */}
        <section className="border-t border-neutral-900 bg-neutral-950/60 py-20 sm:py-28 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 mb-3">
                SYSTEM ARCHITECTURE
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white uppercase leading-tight">
                ONE SYSTEM. <br />
                <span className="font-medium text-neutral-200">BUILT AROUND YOUR BUSINESS.</span>
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
                A personalised Business Management System designed around your workflows, teams, responsibilities and operating model.
              </p>
            </div>

            {/* 10 Connected Workflow Modules */}
            <div className="border border-neutral-800 bg-neutral-950 p-6 sm:p-10 lg:p-12 relative overflow-hidden">
              <div className="text-center mb-8">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
                  CONNECTED OPERATIONAL MODULES
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
                {[
                  { name: 'LEADS', desc: 'Inquiry intake & fee scoping' },
                  { name: 'CLIENTS', desc: 'Accounts & communication history' },
                  { name: 'PROJECTS', desc: 'Phases, milestones & deliveries' },
                  { name: 'TEAMS', desc: 'Roles, workload & studio allocation' },
                  { name: 'TASKS', desc: 'Stage deliverables & deadlines' },
                  { name: 'APPROVALS', desc: 'Design sign-offs & stage gates' },
                  { name: 'DOCUMENTS', desc: 'Plans, specifications & contracts' },
                  { name: 'SUPPLIERS', desc: 'Fabricators, vendors & trades' },
                  { name: 'OPERATIONS', desc: 'Site logs & handover checklists' },
                  { name: 'REPORTING', desc: 'Studio utilization & project margins' },
                ].map((mod, idx) => (
                  <div
                    key={idx}
                    className="border border-neutral-800 bg-black/80 p-4 text-center hover:border-neutral-600 transition-all group"
                  >
                    <div className="text-sm font-semibold tracking-wider text-white uppercase mb-1 group-hover:text-neutral-200">
                      {mod.name}
                    </div>
                    <div className="text-[11px] text-neutral-400 font-light leading-snug">
                      {mod.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-neutral-900 text-center max-w-2xl mx-auto">
                <p className="text-xs text-neutral-400 font-light">
                  * Visual system architecture. Each implementation is customized to your studio's phase names, departmental hierarchy, client agreements and role permissions.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================
            07. CUSTOMISATION PROCESS (4 STEPS)
        ================================================== */}
        <section className="py-20 sm:py-28 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 mb-3">
              METHODOLOGY
            </div>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white uppercase leading-snug">
              WE START WITH THE BUSINESS. <br />
              <span className="text-neutral-300 font-medium">THEN DESIGN THE SYSTEM.</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light mt-4">
              We do not impose pre-built software templates. We study your operating cadence, map critical approvals, and design digital infrastructure that feels natural to your team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 01 */}
            <div className="border border-neutral-800 bg-neutral-950 p-6 sm:p-7 space-y-4">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                01 — STEP
              </div>
              <h3 className="text-xl font-medium text-white uppercase tracking-tight">
                UNDERSTAND
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Understand the business, workflow, teams and operational challenges.
              </p>
              <div className="pt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-400">
                Phase: Workflow Discovery & Scoping
              </div>
            </div>

            {/* Step 02 */}
            <div className="border border-neutral-800 bg-neutral-950 p-6 sm:p-7 space-y-4">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                02 — STEP
              </div>
              <h3 className="text-xl font-medium text-white uppercase tracking-tight">
                CONFIGURE
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Define roles, information, processes and requirements.
              </p>
              <div className="pt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-400">
                Phase: Architectural Blueprint Schema
              </div>
            </div>

            {/* Step 03 */}
            <div className="border border-neutral-800 bg-neutral-950 p-6 sm:p-7 space-y-4">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                03 — STEP
              </div>
              <h3 className="text-xl font-medium text-white uppercase tracking-tight">
                BUILD
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Design and develop the agreed system.
              </p>
              <div className="pt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-400">
                Phase: Custom Software Engineering
              </div>
            </div>

            {/* Step 04 */}
            <div className="border border-neutral-800 bg-neutral-950 p-6 sm:p-7 space-y-4">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                04 — STEP
              </div>
              <h3 className="text-xl font-medium text-white uppercase tracking-tight">
                IMPLEMENT
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Bring the system into everyday operations.
              </p>
              <div className="pt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-400">
                Phase: Studio Onboarding & Integration
              </div>
            </div>

          </div>

        </section>

        {/* ==================================================
            08. FRANCE INDUSTRY SYSTEMS (6 LARGE CARDS)
        ================================================== */}
        <section className="border-t border-neutral-900 bg-neutral-950/40 py-20 sm:py-28 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 mb-3">
                TAILORED INDUSTRY SYSTEMS
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white uppercase leading-tight">
                BUILT FOR BUSINESSES <br />
                <span className="font-medium text-neutral-200">WHERE PROJECTS MATTER.</span>
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
                One core Business System can be configured around different industries and operating models. We build solutions tailored to your project lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {franceConfigurations.map((cfg, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-800 bg-neutral-950 p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4">
                      <span>SYSTEM {cfg.num}</span>
                      <span className="text-neutral-400">PERSONALISED</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium text-white uppercase tracking-tight mb-2">
                      {cfg.title}
                    </h3>

                    <div className="text-xs font-mono text-neutral-400 mb-4 leading-relaxed">
                      {cfg.tagline}
                    </div>

                    <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                      {cfg.desc}
                    </p>

                    <div className="space-y-2 border-t border-neutral-900 pt-5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-3">
                        SYSTEM CAPABILITIES:
                      </div>
                      {cfg.focus.map((item, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs text-neutral-400 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-neutral-900">
                    <Link
                      to="/contact?market=france&intent=business-systems"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-300 hover:text-white transition-colors group font-mono"
                    >
                      DISCUSS THIS SYSTEM
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Workflow Design Callout */}
            <div className="mt-14 border border-neutral-800 bg-black p-8 sm:p-10 text-center max-w-4xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
                BESPOKE CONFIGURATION
              </span>
              <h3 className="text-xl sm:text-3xl font-light text-white uppercase tracking-tight mt-2 mb-3">
                DON'T SEE YOUR BUSINESS? <br />
                <span className="font-semibold text-neutral-200">THAT IS EXACTLY WHY THE SYSTEM IS PERSONALISED.</span>
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 font-light max-w-2xl mx-auto mb-6 leading-relaxed">
                It is configured around how your business operates rather than forcing you into a fixed template. We map your specific approval chains, client milestones and operational terminology.
              </p>
              <Link
                to="/contact?market=france&intent=business-systems"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-white text-black font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-neutral-200 transition-colors"
              >
                DISCUSS YOUR WORKFLOW
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="mt-4 text-[11px] font-mono text-neutral-400">
                * Configurations shown represent custom systems Mayaa can design and engineer, rather than pre-packaged commodity templates.
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================
            09. ARCHITECTURE + INTERIORS (WHERE DESIGN MEETS OPERATIONS)
        ================================================== */}
        <section className="py-20 sm:py-28 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual: Interior Design & Architecture Studio */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative border border-neutral-800 bg-neutral-950 p-2 sm:p-3 overflow-hidden shadow-2xl group">
                <div className="relative overflow-hidden aspect-[16/10] bg-neutral-900">
                  <img
                    src="/images/industries/interior-design.webp"
                    alt="Refined interior design and architecture studio in Paris"
                    className="w-full h-full object-cover contrast-105 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/80 backdrop-blur-md border border-neutral-800">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      DESIGN ATELIER & STUDIO OPERATIONS
                    </p>
                    <p className="text-xs text-neutral-200 mt-0.5 font-light">
                      Balancing client presentation, FF&E procurement, drawing issues and site coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
                STUDIO INFRASTRUCTURE
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white uppercase leading-tight">
                WHERE DESIGN <br />
                <span className="font-medium text-neutral-200">MEETS OPERATIONS.</span>
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
                Architecture and interior practices manage far more than creative output.
              </p>
              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                They coordinate clients, projects, proposals, contracts, approvals, drawings, consultants, procurement, suppliers, schedules, budgets and teams. A strong digital system should support the studio behind the work.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  'Clients & Engagements',
                  'Projects & Deliverables',
                  'Proposals & Fees',
                  'Client Contracts',
                  'Design Approvals',
                  'Drawings & Revisions',
                  'Consultant Tracking',
                  'FF&E Procurement',
                  'Supplier Coordination',
                  'Studio Budgets',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-400 font-light">
                    <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/contact?market=france&intent=architecture-studio"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white hover:text-neutral-300 transition-colors font-mono"
                >
                  DISCUSS STUDIO SYSTEMS
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================
            10. PREMIUM BUSINESS EXPERIENCE (SPLIT SECTION: WHAT CLIENTS SEE VS WHAT IT RUNS ON)
        ================================================== */}
        <section className="border-t border-neutral-900 bg-neutral-950/60 py-20 sm:py-28 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 mb-3">
                DUAL CAPABILITY
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white uppercase leading-tight">
                THE EXPERIENCE PEOPLE SEE. <br />
                <span className="font-medium text-neutral-200">THE SYSTEM THEY DON'T.</span>
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light mt-4">
                Mayaa bridges the gap between outward prestige and inward operational clarity.
              </p>
            </div>

            {/* Split Visual Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center max-w-5xl mx-auto">
              
              {/* Left Column: What Your Clients See */}
              <div className="lg:col-span-5 border border-neutral-800 bg-neutral-950 p-8 space-y-4">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  EXTERNAL FACING
                </div>
                <h3 className="text-xl font-medium text-white uppercase tracking-tight">
                  WHAT YOUR CLIENTS SEE
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  The visual sophistication and brand identity that communicates quality, commands premium pricing and builds trust:
                </p>
                <ul className="pt-4 border-t border-neutral-900 space-y-2.5 text-xs text-neutral-300 font-light">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                    <span>Brand Positioning & Identity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                    <span>High-Performance Corporate Website</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                    <span>Digital Experience & Portfolios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                    <span>Client Presentation Decks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                    <span>Commercial Rebranding Assets</span>
                  </li>
                </ul>
              </div>

              {/* Center Divider / Identity Box */}
              <div className="lg:col-span-1 text-center py-4 lg:py-0">
                <div className="inline-block p-4 border border-neutral-800 bg-black shadow-xl">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase block tracking-widest">
                    PARTNER
                  </span>
                  <span className="text-xs font-medium text-white block mt-0.5">
                    MAYAA
                  </span>
                </div>
              </div>

              {/* Right Column: What Your Business Runs On */}
              <div className="lg:col-span-5 border-2 border-white/20 bg-neutral-900/90 p-8 space-y-4 shadow-2xl">
                <div className="text-xs font-mono text-neutral-300 uppercase tracking-widest">
                  INTERNAL OPERATIONS
                </div>
                <h3 className="text-xl font-medium text-white uppercase tracking-tight">
                  WHAT YOUR BUSINESS RUNS ON
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  The custom digital infrastructure and workflows that power delivery, coordinate teams and track project margins:
                </p>
                <ul className="pt-4 border-t border-neutral-800 space-y-2.5 text-xs text-neutral-200 font-light">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Leads & Inquiry Scoping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Phased Projects & Milestones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Studio Teams & Workload Allocation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Task Routing & Deadlines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Approvals, Operations & Live Reporting</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="mt-12 text-center">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
                MAYAA SOLUTIONS — DESIGNING BOTH SIDES OF THE BUSINESS.
              </p>
            </div>

          </div>
        </section>

        {/* ==================================================
            11. REAL MAYAA PRODUCT EXAMPLE: SEMS
        ================================================== */}
        <section className="border-t border-neutral-900 bg-black py-20 sm:py-28 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="max-w-3xl mb-12 sm:mb-16">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 mb-3">
                PRODUCT ARCHITECTURE IN ACTION
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white uppercase leading-tight">
                SEMS (BUSINESS MANAGEMENT SYSTEM)
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
                A real example of how Mayaa approaches business management systems. SEMS brings operational areas into a connected digital environment, establishing clear visibility across teams, pipelines and delivery workflows.
              </p>
            </div>

            {/* Video / Visual Container in True 16:9 Landscape Aspect Ratio */}
            <div className="border border-neutral-800 bg-neutral-950 p-2 sm:p-4 rounded-none shadow-2xl">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black border border-neutral-900">
                <video
                  src="/sems-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Module Capabilities Bar */}
              <div className="p-4 sm:p-6 bg-neutral-950/80 border-t border-neutral-900 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 text-center">
                {[
                  { label: 'Lead Management', icon: 'Pipelines' },
                  { label: 'Team Management', icon: 'Allocation' },
                  { label: 'Tasks', icon: 'Routing' },
                  { label: 'Operations', icon: 'Handovers' },
                  { label: 'Reporting', icon: 'Metrics' },
                  { label: 'User Roles', icon: 'Access Controls' },
                  { label: 'Business Workflows', icon: 'Custom Rules' },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-xs font-medium text-neutral-200 uppercase tracking-tight">
                      {item.label}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400">
              <p>
                * SEMS represents Mayaa's core product architecture and operational design principles; individual client solutions are configured and adapted around client-specific operating models.
              </p>
              <Link
                to="/business-systems"
                className="text-neutral-300 hover:text-white inline-flex items-center gap-1.5 shrink-0"
              >
                EXPLORE SYSTEM ARCHITECTURE <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </section>

        {/* ==================================================
            12. THREE CORE MAYAA CAPABILITIES
        ================================================== */}
        <section className="border-t border-neutral-900 bg-neutral-950/40 py-20 sm:py-28 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 mb-3">
                CORE CAPABILITIES
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white uppercase leading-tight">
                FROM BRAND <br />
                <span className="text-neutral-300 font-normal">TO DIGITAL EXPERIENCE</span> <br />
                <span className="font-medium text-white">TO BUSINESS OPERATIONS.</span>
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light mt-4">
                Three balanced capabilities engineered to elevate how your business communicates and how it executes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Capability 01: Brand */}
              <div className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors">
                <div className="space-y-4">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    CAPABILITY 01
                  </div>
                  <h3 className="text-2xl font-light tracking-tight text-white uppercase">
                    BRAND
                  </h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    Build a visual identity that communicates the quality and character of the business.
                  </p>
                  <ul className="pt-4 border-t border-neutral-900 space-y-2 text-xs text-neutral-400 font-light">
                    <li>· Brand Identity Systems</li>
                    <li>· Visual Positioning Guidelines</li>
                    <li>· Presentation Decks & Collateral</li>
                    <li>· Studio Rebranding Strategy</li>
                  </ul>
                </div>
                <div className="pt-8">
                  <Link
                    to="/brand"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-300 hover:text-white font-mono"
                  >
                    EXPLORE BRAND SERVICES <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Capability 02: Websites */}
              <div className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors">
                <div className="space-y-4">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    CAPABILITY 02
                  </div>
                  <h3 className="text-2xl font-light tracking-tight text-white uppercase">
                    WEBSITES
                  </h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    Create a digital experience that communicates value and builds trust.
                  </p>
                  <ul className="pt-4 border-t border-neutral-900 space-y-2 text-xs text-neutral-400 font-light">
                    <li>· High-Performance Corporate Sites</li>
                    <li>· Architectural & Studio Portfolios</li>
                    <li>· Responsive International Layouts</li>
                    <li>· Structured Technical SEO</li>
                  </ul>
                </div>
                <div className="pt-8">
                  <Link
                    to="/websites"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-300 hover:text-white font-mono"
                  >
                    EXPLORE WEBSITES <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Capability 03: Business Systems */}
              <div className="border-2 border-white/20 bg-neutral-900 p-8 flex flex-col justify-between shadow-xl">
                <div className="space-y-4">
                  <div className="text-xs font-mono text-neutral-300 uppercase tracking-widest">
                    CAPABILITY 03
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight text-white uppercase">
                    BUSINESS SYSTEMS
                  </h3>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    Build the internal digital infrastructure behind the business.
                  </p>
                  <ul className="pt-4 border-t border-neutral-800 space-y-2 text-xs text-neutral-300 font-light">
                    <li>· Custom Business Management Software</li>
                    <li>· Phased Project Delivery Control</li>
                    <li>· Team Workload & Task Routing</li>
                    <li>· Executive Performance Dashboards</li>
                  </ul>
                </div>
                <div className="pt-8">
                  <Link
                    to="/business-systems"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white hover:text-neutral-200 font-mono"
                  >
                    EXPLORE BUSINESS SYSTEMS <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            13. WHY MAYAA (4 CORE STRENGTHS)
        ================================================== */}
        <section className="py-20 sm:py-28 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 mb-3">
              THE MAYAA DIFFERENCE
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white uppercase leading-tight">
              DESIGN THINKING. <br />
              <span className="text-neutral-300 font-normal">PRODUCT THINKING.</span> <br />
              <span className="font-medium text-white">TECHNICAL EXECUTION.</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
              Mayaa brings brand design, product thinking and technical implementation together under one team. For French businesses, that means one digital partner capable of working across both the customer-facing experience and the operational system behind it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Strength 01 */}
            <div className="border border-neutral-800 bg-neutral-950 p-7 space-y-3">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                STRENGTH 01
              </div>
              <h3 className="text-base font-semibold text-white uppercase tracking-tight">
                BUSINESS-FIRST
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Understand the business before defining the digital solution. We focus on how your studio operates before drafting code.
              </p>
            </div>

            {/* Strength 02 */}
            <div className="border border-neutral-800 bg-neutral-950 p-7 space-y-3">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                STRENGTH 02
              </div>
              <h3 className="text-base font-semibold text-white uppercase tracking-tight">
                DESIGN-LED
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Create experiences that are considered, clear and premium. We respect visual proportion, typography and intuitive interaction.
              </p>
            </div>

            {/* Strength 03 */}
            <div className="border border-neutral-800 bg-neutral-950 p-7 space-y-3">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                STRENGTH 03
              </div>
              <h3 className="text-base font-semibold text-white uppercase tracking-tight">
                CUSTOM SYSTEMS
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Build around the actual workflow instead of forcing a generic software template. No arbitrary monthly per-user license locks.
              </p>
            </div>

            {/* Strength 04 */}
            <div className="border border-neutral-800 bg-neutral-950 p-7 space-y-3">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                STRENGTH 04
              </div>
              <h3 className="text-base font-semibold text-white uppercase tracking-tight">
                INTERNATIONAL COLLABORATION
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Work remotely with businesses across international markets. Direct engineer-to-client communication with European time-zone alignment.
              </p>
            </div>

          </div>

          <div className="mt-8 text-xs font-mono text-neutral-400 text-center">
            * Direct technical alignment via Slack, Teams and video calls with transparent milestone delivery.
          </div>

        </section>

        {/* ==================================================
            14. FRENCH MARKET COVERAGE
        ================================================== */}
        <section className="border-t border-neutral-900 bg-neutral-950/60 py-16 sm:py-20 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-2">
                TARGET MARKET COVERAGE
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-white uppercase tracking-tight">
                WORKING WITH BUSINESSES ACROSS FRANCE.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light mt-2">
                Serving creative, architectural and commercial enterprises across major business regions.
              </p>
            </div>

            {/* 8 French Commercial Centres */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 max-w-5xl mx-auto">
              {franceCities.map((city, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-800/80 bg-black/60 p-3.5 text-center"
                >
                  <MapPin className="w-3.5 h-3.5 text-neutral-400 mx-auto mb-1.5" />
                  <div className="text-xs text-neutral-200 font-medium tracking-tight">
                    {city}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] font-mono text-neutral-400 text-center mt-6">
              * Mayaa delivers projects remotely via structured cross-border collaboration; no physical French branch offices or corporate entities are represented.
            </p>
          </div>
        </section>

        {/* ==================================================
            15. INVESTMENT (SCOPE-BASED IN EUR)
        ================================================== */}
        <section className="border-t border-neutral-900 bg-black py-20 sm:py-24 px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto border border-neutral-800 bg-neutral-950 p-8 sm:p-12 text-center space-y-6">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
              COMMERCIAL TRANSPARENCY
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white uppercase leading-snug">
              BUILT AROUND YOUR REQUIREMENTS. <br />
              <span className="font-medium text-neutral-200">PRICED AROUND THE SCOPE.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
              Every business has different workflows, requirements and levels of complexity. Tell us what you want to improve and the scope you have in mind.
            </p>

            <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl mx-auto">
              Mayaa will define an appropriate approach and provide a project-specific investment estimate in EUR, structured around agreed milestones.
            </p>

            <div className="pt-4">
              <Link
                to="/contact?market=france&intent=pricing-inquiry"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-neutral-200 transition-colors shadow-lg"
              >
                DISCUSS YOUR REQUIREMENTS
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-4 text-[11px] font-mono text-neutral-400">
              * Scoped investment with zero recurring per-user software license subscriptions.
            </div>
          </div>
        </section>

        {/* ==================================================
            16. FINAL CTA
        ================================================== */}
        <section className="border-t border-neutral-900 bg-neutral-950 py-24 sm:py-32 px-6 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto space-y-7">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block">
              COLLABORATION
            </span>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase leading-tight">
              READY TO BUILD <br />
              A BUSINESS THAT LOOKS AS GOOD <br />
              <span className="font-semibold text-neutral-200">AS IT OPERATES?</span>
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
              Whether you need a stronger brand, a better website or a personalised Business Management System, start with the way your business actually works.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <Link
                to="/contact?market=france&intent=business-systems"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-neutral-200 transition-all duration-300 group"
              >
                DISCUSS YOUR BUSINESS
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/business-systems"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300"
              >
                EXPLORE BUSINESS SYSTEMS
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-8 text-xs font-mono text-neutral-400">
              French Enterprises · Remote International Partnership · Mayaa Solutions
            </div>
          </div>
        </section>

      </main>
    </>
  );
};
