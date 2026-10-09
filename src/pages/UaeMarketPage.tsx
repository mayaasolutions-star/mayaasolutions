import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown,
  Building2, 
  Hotel, 
  Compass, 
  Layers, 
  ShieldCheck, 
  Globe2, 
  Briefcase,
  CheckCircle2,
  TrendingUp,
  Cpu,
  BarChart3,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const UaeMarketPage: React.FC = () => {
  // UAE Core configurations (Section 5)
  const uaeConfigurations = [
    {
      num: '01',
      title: 'CONSTRUCTION OPERATIONS SYSTEM',
      tagline: 'Projects · Sites · BOQ · Contractors',
      desc: 'For businesses managing sites, contractors, materials, BOQs, progress and vendors.',
      focus: ['Site Milestones', 'Contractor Allocation', 'Material Requisitions', 'BOQ & Variations', 'Progress Reporting'],
    },
    {
      num: '02',
      title: 'PROPERTY MANAGEMENT SYSTEM',
      tagline: 'Properties · Units · Tenants · Maintenance',
      desc: 'For businesses managing properties, units, tenants, maintenance and payments.',
      focus: ['Unit Inventory', 'Tenancy Contracts', 'Maintenance Tickets', 'PDC & Payment Records', 'Owner Statements'],
    },
    {
      num: '03',
      title: 'INTERIOR PROJECT SYSTEM',
      tagline: 'Fit-outs · Approvals · Procurement · Execution',
      desc: 'For design and fit-out businesses managing clients, approvals, procurement, vendors and execution.',
      focus: ['Design Approvals', 'Client Variations', 'Procurement Orders', 'Subcontractor Tracking', 'Site Handover'],
    },
    {
      num: '04',
      title: 'ARCHITECTURE PRACTICE SYSTEM',
      tagline: 'Projects · Proposals · Drawings · Milestones',
      desc: 'For practices managing projects, clients, proposals, drawings, approvals and milestones.',
      focus: ['Proposal Scopes', 'Drawing Revisions', 'Authority Approvals', 'Consultant Coordination', 'Deliverables'],
    },
    {
      num: '05',
      title: 'HOSPITALITY OPERATIONS SYSTEM',
      tagline: 'Hotels · Serviced Units · Guests · Operations',
      desc: 'For hotels, serviced properties and hospitality businesses managing guests, reservations and operations.',
      focus: ['Multi-property Bookings', 'Guest Communication', 'Housekeeping Rosters', 'Preventative Maintenance', 'Vendor Supply'],
    },
    {
      num: '06',
      title: 'BUSINESS OPERATIONS SYSTEM',
      tagline: 'Leads · Teams · Tasks · Workflows · Reporting',
      desc: 'For other growing businesses that need connected leads, clients, teams, tasks, workflows and reporting.',
      focus: ['Pipeline Tracking', 'Cross-team Assignments', 'Document Approvals', 'Operational KPIs', 'Executive Reporting'],
    },
  ];

  return (
    <>
      <SEO
        title="Digital Systems & Experiences for UAE Businesses | Mayaa Solutions"
        description="Built for businesses growing at UAE speed. Mayaa designs websites, brand identities and custom business management systems configured around how UAE businesses operate."
        keywords="UAE business management system, Dubai business software, UAE construction operations, Dubai property management system, custom ERP UAE, Mayaa Solutions UAE"
        ogImage="/images/uae-commercial-hero.jpg"
        canonicalUrl="https://mayaasolutions.in/global-markets/dubai"
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
                <Link
                  to="/global-markets"
                  className="text-xs font-mono font-bold text-[#8E8E8A] hover:text-white uppercase tracking-widest transition-colors"
                >
                  Global Markets
                </Link>
                <span className="text-[#444444]">/</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950 text-xs font-mono font-bold text-white uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  UAE
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[0.98]"
              >
                BUILT FOR BUSINESSES <br />
                GROWING AT <br />
                <span className="text-[#8E8E8A]">UAE SPEED.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl"
              >
                From property and construction to hospitality, professional services and growing businesses, Mayaa builds digital experiences and business systems around the way your company operates.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <Link
                  to="/contact"
                  className="min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-neutral-200 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md group"
                >
                  <span>DISCUSS YOUR BUSINESS</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/business-systems"
                  className="min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white border border-neutral-700 hover:border-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
                >
                  <span>EXPLORE BUSINESS SYSTEMS</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Editorial UAE Visual */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl"
              >
                <img
                  src="/images/uae-commercial-hero.jpg"
                  alt="Modern commercial and architectural landscape in the UAE"
                  className="w-full h-auto aspect-[4/3] object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono text-neutral-300">
                  <span className="uppercase tracking-wider">PROJECT-DRIVEN ECONOMY</span>
                  <span className="text-[#8E8E8A]">DUBAI & UAE</span>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ==================================================
            02. UAE MARKET CONTEXT (STATISTICS)
        ================================================== */}
        <section className="bg-[#0B0B0B] border-y border-neutral-800 py-20 sm:py-28 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-12 sm:space-y-16">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                WHY THE UAE
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
                A MARKET BUILT AROUND <br />
                <span className="text-[#8E8E8A]">GROWTH, PROJECTS AND OPERATIONS.</span>
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed pt-2">
                Dubai's growth is being driven across real estate, construction, finance, technology, trade, hospitality and other business sectors.
              </p>
            </div>

            {/* 4 Verified Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              
              <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight block">
                    AED 937B
                  </span>
                  <span className="text-sm font-bold text-[#8E8E8A] uppercase tracking-wider block mt-2">
                    Dubai GDP in 2025
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Reflecting sustained macro-economic expansion across core commercial, trade and private sectors.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight block">
                    +5.4%
                  </span>
                  <span className="text-sm font-bold text-[#8E8E8A] uppercase tracking-wider block mt-2">
                    Dubai GDP growth in 2025
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  One of the world's most resilient growth trajectories, demanding faster operational adaptation.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight block">
                    +8.5%
                  </span>
                  <span className="text-sm font-bold text-[#8E8E8A] uppercase tracking-wider block mt-2">
                    Construction Growth
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Measured across the first nine months of 2025, driven by residential and infrastructure developments.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight block">
                    AED 917B+
                  </span>
                  <span className="text-sm font-bold text-[#8E8E8A] uppercase tracking-wider block mt-2">
                    Real-Estate Transactions (2025)
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Unprecedented volume across off-plan sales, secondary acquisitions, commercial leases and handovers.
                </p>
              </div>

            </div>

            {/* Discreet verified sources note */}
            <div className="pt-4 border-t border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-mono text-[#777777]">
              <span>
                Verified Dubai-specific economic data. Clearly identified as Dubai official reporting.
              </span>
              <span>
                Sources: Dubai Public Debt Management Office · Dubai Department of Economy and Tourism
              </span>
            </div>

          </div>
        </section>

        {/* ==================================================
            03. THE UAE BUSINESS REALITY
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                THE UAE BUSINESS REALITY
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.05]">
                GROWTH CREATES <br />
                <span className="text-[#8E8E8A]">COMPLEXITY.</span>
              </h2>

              <div className="space-y-2 text-base sm:text-lg font-bold text-neutral-200">
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white" /> More projects.</p>
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white" /> More clients.</p>
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white" /> More teams.</p>
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white" /> More vendors.</p>
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white" /> More follow-ups.</p>
                <p className="flex items-center gap-2 text-neutral-400">More information moving between people and systems.</p>
              </div>

              <p className="text-base sm:text-lg text-[#A0A0A0] font-normal leading-relaxed pt-2 border-t border-neutral-800">
                When the business moves quickly, operational visibility becomes part of growth.
              </p>
            </div>

            {/* Visual Fragment Pipeline → One Connected System */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-8">
                
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8E8E8A] block mb-4">
                    Scattered Operational Fragments
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['PROJECTS', 'CLIENTS', 'TEAMS', 'VENDORS', 'APPROVALS', 'FOLLOW-UPS', 'REPORTING'].map((item) => (
                      <div
                        key={item}
                        className="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono font-bold text-neutral-300 text-center uppercase"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center text-[#8E8E8A]">
                  <ArrowDown className="w-6 h-6 animate-bounce" />
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-white text-black text-center space-y-2 shadow-2xl">
                  <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#666666] block">
                    THE TARGET OUTCOME
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#171717]">
                    ONE CONNECTED SYSTEM
                  </h3>
                  <p className="text-xs sm:text-sm text-[#444444] font-medium max-w-md mx-auto">
                    Centralizing project milestones, subcontractor communications, client approvals and executive visibility into a single operational record.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ==================================================
            04. WHERE MAYAA FITS IN THE UAE (JOURNEY)
        ================================================== */}
        <section className="bg-[#0B0B0B] border-y border-neutral-800 py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-14">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                BUILT AROUND YOUR BUSINESS
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
                FROM THE PROJECT SITE <br />
                <span className="text-[#8E8E8A]">TO THE MANAGEMENT DESK.</span>
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                Mayaa can configure one business management system around the workflows that connect these moving parts.
              </p>
            </div>

            {/* Visual Step-by-Step Connected Journey */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
              {[
                { step: '01', label: 'LEAD', desc: 'Inquiries & Tenders' },
                { step: '02', label: 'CLIENT', desc: 'Contracts & Accounts' },
                { step: '03', label: 'PROJECT', desc: 'Sites & Milestones' },
                { step: '04', label: 'TEAM', desc: 'Supervisors & Staff' },
                { step: '05', label: 'VENDOR', desc: 'Procurement & Subcontractors' },
                { step: '06', label: 'DELIVERY', desc: 'Execution & Handover' },
                { step: '07', label: 'REPORTING', desc: 'Real-time Financial & Operational KPIs' },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-3 relative group hover:border-neutral-600 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#8E8E8A] font-bold">STAGE {item.step}</span>
                    {idx < 6 && <span className="text-[#555555] text-xs font-mono hidden lg:inline">→</span>}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-wider">{item.label}</h4>
                    <p className="text-[11px] text-neutral-400 mt-1 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 text-center sm:text-left">
              <p className="text-xs sm:text-sm font-mono text-[#8E8E8A]">
                Built to strongly resonate with UAE construction, property developments, fit-out interiors, architecture practices, hospitality and operations-heavy businesses.
              </p>
            </div>

          </div>
        </section>

        {/* ==================================================
            05. UAE-SPECIFIC BUSINESS CONFIGURATIONS
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="space-y-6 max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
              UAE BUSINESS CONFIGURATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
              TAILORED FOR YOUR <br />
              <span className="text-[#8E8E8A]">OPERATING MODEL.</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              We do not impose a rigid software template. We take one proven business foundation and configure it around your specific industry workflows.
            </p>
          </div>

          {/* 6 Configurations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {uaeConfigurations.map((config) => (
              <div
                key={config.num}
                className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-neutral-600 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#8E8E8A]">CONFIG {config.num}</span>
                    <span className="text-[11px] font-mono text-[#555555] uppercase">{config.tagline}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight group-hover:text-neutral-200 transition-colors">
                    {config.title}
                  </h3>

                  <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                    {config.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-neutral-900">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8E8E8A] block">
                    Core Configured Modules
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {config.focus.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Non-restrictive Callout Card */}
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-widest block">
                FLEXIBLE ARCHITECTURE
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                YOUR BUSINESS DOESN'T HAVE TO FIT A TEMPLATE.
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                The system is configured around your specific workflows, approvals and team hierarchy, regardless of industry.
              </p>
            </div>

            <Link
              to="/business-systems"
              className="min-h-[50px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-colors shrink-0"
            >
              <span>SEE HOW IT WORKS →</span>
            </Link>
          </div>
        </section>

        {/* ==================================================
            06. UAE-SPECIFIC HOSPITALITY / TOURISM PROOF
        ================================================== */}
        <section className="bg-[#0B0B0B] border-y border-neutral-800 py-20 sm:py-28 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-12">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                A HIGH-VOLUME BUSINESS ENVIRONMENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.02]">
                MORE VISITORS. <br />
                MORE PROPERTIES. <br />
                <span className="text-[#8E8E8A]">MORE OPERATIONS.</span>
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                Dubai's visitor economy continues to scale, creating increasingly complex operational environments across hotels, serviced properties, hospitality groups and tourism businesses.
              </p>
            </div>

            {/* 4 Verified Tourism Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              
              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                <span className="text-3xl sm:text-5xl font-black text-white tracking-tight block">
                  19.59M
                </span>
                <span className="text-xs font-bold text-[#8E8E8A] uppercase tracking-wider block">
                  International Visitors (2025)
                </span>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                <span className="text-3xl sm:text-5xl font-black text-white tracking-tight block">
                  154,264
                </span>
                <span className="text-xs font-bold text-[#8E8E8A] uppercase tracking-wider block">
                  Hotel Rooms
                </span>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                <span className="text-3xl sm:text-5xl font-black text-white tracking-tight block">
                  827
                </span>
                <span className="text-xs font-bold text-[#8E8E8A] uppercase tracking-wider block">
                  Hotel Establishments
                </span>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                <span className="text-3xl sm:text-5xl font-black text-white tracking-tight block">
                  80.7%
                </span>
                <span className="text-xs font-bold text-[#8E8E8A] uppercase tracking-wider block">
                  Average Occupancy (2025)
                </span>
              </div>

            </div>

            <div className="pt-2 text-[11px] font-mono text-[#777777]">
              Source: Dubai Department of Economy and Tourism. Figures are Dubai-specific.
            </div>

          </div>
        </section>

        {/* ==================================================
            07. BUSINESS SYSTEM — THE MAYAA DIFFERENCE
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="max-w-4xl space-y-8">
            <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
              BUSINESS SYSTEMS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
              DON'T BUY ANOTHER TOOL. <br />
              <span className="text-[#8E8E8A]">BUILD THE SYSTEM YOUR BUSINESS NEEDS.</span>
            </h2>
            <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed">
              Mayaa starts with a proven business management foundation and configures it around your workflows, teams, roles, approvals, reporting and operational requirements.
            </p>

            {/* Modular Blocks */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 pt-4">
              {[
                'LEADS',
                'CLIENTS',
                'PROJECTS',
                'TASKS',
                'TEAMS',
                'DOCUMENTS',
                'APPROVALS',
                'REPORTING',
                'AUTOMATION',
              ].map((mod) => (
                <div
                  key={mod}
                  className="px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-mono font-bold text-neutral-300 text-center uppercase"
                >
                  {mod}
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-2xl bg-neutral-950 border border-neutral-800">
              <div className="space-y-1">
                <h4 className="text-lg font-black text-white uppercase tracking-tight">
                  ONE FOUNDATION. CONFIGURED FOR YOUR BUSINESS.
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400">
                  No licensing traps, no disconnected add-ons. Full control over your operational data.
                </p>
              </div>

              <Link
                to="/business-systems"
                className="min-h-[50px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-colors shrink-0"
              >
                <span>EXPLORE BUSINESS SYSTEMS →</span>
              </Link>
            </div>

          </div>
        </section>

        {/* ==================================================
            08. REAL PROOF — SEMS
        ================================================== */}
        <section className="bg-[#0B0B0B] border-y border-neutral-800 py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-10 sm:space-y-14">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                PROVEN ARCHITECTURE · SEMS (BUSINESS MANAGEMENT SYSTEM)
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.02]">
                A REAL SYSTEM. <br />
                <span className="text-[#8E8E8A]">ALREADY BUILT.</span>
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                SEMS demonstrates how Mayaa approaches business operations: connected lead management, team coordination, task management and operational reporting in one system.
              </p>
            </div>

            {/* Dashboard Visual Container */}
            <div className="rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800 p-3 sm:p-4 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-[16/9] border border-neutral-900">
                <img
                  src="/images/service_business_growth.webp"
                  alt="SEMS (Business Management System) production dashboard demonstration"
                  className="w-full h-full object-cover grayscale contrast-125"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#8E8E8A] pt-2">
              <span>A demonstration of Mayaa's system-building capability.</span>
              <span>Available for live demonstration during project discussions.</span>
            </div>

          </div>
        </section>

        {/* ==================================================
            09. WEBSITES + BRAND — THE DIGITAL LAYER
        ================================================== */}
        <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="space-y-6 max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
              THE DIGITAL LAYER
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
              YOUR BUSINESS SHOULD LOOK <br />
              <span className="text-[#8E8E8A]">AS STRONG AS IT OPERATES.</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              In competitive markets like the UAE, commercial credibility requires both flawless front-end presence and streamlined back-end operations.
            </p>
          </div>

          {/* 3 Mayaa Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            
            {/* BRAND */}
            <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest">
                  CAPABILITY 01
                </span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  BRAND
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Build a clear, credible identity that communicates authority and quality to regional and global clients.
                </p>
              </div>
              <Link
                to="/brand"
                className="text-xs font-mono font-bold text-white hover:text-neutral-400 uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Explore Brand Building</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* WEBSITES */}
            <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest">
                  CAPABILITY 02
                </span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  WEBSITES
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Create a digital presence built for your market, highlighting high-value projects, portfolios and customer journeys.
                </p>
              </div>
              <Link
                to="/websites"
                className="text-xs font-mono font-bold text-white hover:text-neutral-400 uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Explore Websites</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* BUSINESS SYSTEMS (Strongest Emphasis) */}
            <div className="p-8 rounded-3xl bg-white text-black flex flex-col justify-between space-y-6 shadow-2xl relative">
              <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-black text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                CORE SYSTEM
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#666666] uppercase tracking-widest">
                  CAPABILITY 03 · HIGH-VALUE
                </span>
                <h3 className="text-2xl font-black text-[#171717] uppercase tracking-tight">
                  BUSINESS SYSTEMS
                </h3>
                <p className="text-sm text-[#333333] leading-relaxed font-medium">
                  Connect the operations behind the business. Manage leads, properties, sites, teams, subcontractors and reporting in one unified architecture.
                </p>
              </div>

              <Link
                to="/business-systems"
                className="text-xs font-mono font-extrabold text-black hover:text-[#555555] uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Explore Business Systems</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </section>

        {/* ==================================================
            10. WHY WORK WITH MAYAA FROM INDIA
        ================================================== */}
        <section className="bg-[#0B0B0B] border-y border-neutral-800 py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                  WORKING ACROSS BORDERS
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
                  UAE BUSINESS. <br />
                  <span className="text-[#8E8E8A]">INDIA-BASED DIGITAL TEAM.</span>
                </h2>
                <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                  Mayaa Solutions is an India-based digital product and design company working remotely with businesses beyond India.
                </p>
                <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
                  We combine product thinking, design and technology to build practical digital systems around business requirements.
                </p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'PRODUCT THINKING', desc: 'Focusing on actual workflows, operational friction and management visibility rather than generic feature lists.' },
                  { title: 'DESIGN CLARITY', desc: 'High-contrast, distraction-free user interfaces designed for rapid team adoption on desktop and mobile.' },
                  { title: 'CUSTOM CONFIGURATION', desc: 'Customized modules, terminology and permission hierarchies tailored to your business structure.' },
                  { title: 'REMOTE COLLABORATION', desc: 'Direct, communicative delivery with structured milestones, iterative reviews and clear execution.' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2"
                  >
                    <h4 className="text-sm font-black text-white uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            11. UAE COMMERCIAL EXPECTATION (IN AED)
        ================================================== */}
        <section className="py-20 sm:py-28 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#F7F7F5] text-[#171717] border border-[#E5E5E2] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold text-[#8E8E8A] uppercase tracking-widest block">
                  COMMERCIAL SCOPE
                </span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.05]">
                  BUILT AROUND YOUR REQUIREMENTS. <br />
                  <span className="text-[#666666]">PRICED AROUND THE SCOPE.</span>
                </h3>
                <p className="text-base sm:text-lg text-[#3F3F3F] leading-relaxed">
                  Business systems are scoped around the workflows, users, modules, integrations and implementation requirements of each business.
                </p>
                <p className="text-sm font-mono font-bold text-[#171717]">
                  For UAE projects: Investment is discussed and quoted in AED based on scope.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center sm:items-start lg:items-end">
                <Link
                  to="/contact"
                  className="min-h-[54px] sm:min-h-[56px] inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 bg-[#171717] text-white hover:bg-[#333333] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md"
                >
                  <span>REQUEST A SCOPE & QUOTE →</span>
                </Link>
                <span className="text-[11px] font-mono text-[#777777] mt-3">
                  Direct scoping session · No fixed templates
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            12. UAE-SPECIFIC FINAL CTA
        ================================================== */}
        <section className="py-28 sm:py-36 md:py-44 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto text-center border-t border-neutral-900">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[0.98]"
            >
              READY TO BUILD A BETTER WAY <br />
              <span className="text-[#8E8E8A]">TO RUN YOUR BUSINESS?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto"
            >
              Tell us what your business manages, where operations become difficult, and what you want to improve.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-9 sm:px-10 py-4 bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-2xl group"
              >
                <span>DISCUSS YOUR BUSINESS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/business-systems"
                className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-3 px-9 sm:px-10 py-4 bg-transparent text-white border border-neutral-700 hover:border-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
              >
                <span>VIEW BUSINESS SYSTEMS</span>
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
};
