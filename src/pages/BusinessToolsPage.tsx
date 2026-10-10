import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Workflow,
  Layers,
  Database,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowDown,
  Building,
  Truck,
  Stethoscope,
  Factory,
  Compass,
  Home,
  UtensilsCrossed,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getServiceSchema, getBreadcrumbSchema } from '../utils/seoMetadata';

const WORKFLOW_PIPELINE = [
  {
    num: '01',
    stage: 'Enquiries',
    summary: 'Omnichannel Inbound Capture',
    desc: 'Capture inquiries from websites, email, and partner channels into a structured, de-duplicated intake queue.',
  },
  {
    num: '02',
    stage: 'Leads',
    summary: 'Pipeline Qualification',
    desc: 'Track sales velocity, proposal delivery, follow-up reminders, and deal values across tailored pipeline stages.',
  },
  {
    num: '03',
    stage: 'Clients',
    summary: 'Centralized Account Master',
    desc: 'Maintain unified client profiles with historical communications, contracts, billing status, and linked projects.',
  },
  {
    num: '04',
    stage: 'Projects',
    summary: 'Milestones & Delivery',
    desc: 'Allocate team capacity, monitor project deliverables, track milestones, and manage operational handoffs.',
  },
  {
    num: '05',
    stage: 'Operations',
    summary: 'Executive Visibility',
    desc: 'Real-time dashboards showing project delivery health, operational bottlenecks, revenue status, and team velocity.',
  },
];

const INDUSTRY_BLUEPRINTS = [
  {
    num: '01',
    category: 'Construction & Contracting',
    icon: Building,
    title: 'Construction Operations System',
    desc: 'Manage projects, multi-site work, subcontractor allocations, BOQ progress, and vendor procurement from one central platform.',
    tags: ['Sites & Milestones', 'Subcontractors', 'BOQ Tracking', 'Material Approvals', 'Vendor Invoices'],
  },
  {
    num: '02',
    category: 'Manufacturing & Industrial',
    icon: Factory,
    title: 'Manufacturing Workflow Engine',
    desc: 'Connect customer purchase orders, production line batches, inventory thresholds, supplier handoffs, and dispatch schedules.',
    tags: ['Work Orders', 'Inventory Reserves', 'Supplier Master', 'Batch Tracking', 'Dispatch Logistics'],
  },
  {
    num: '03',
    category: 'Architecture & Engineering',
    icon: Compass,
    title: 'Architecture Practice System',
    desc: 'Track client briefs, design phases, drawing approvals, council submissions, site inspection notes, and fee milestones.',
    tags: ['Client Proposals', 'Drawing Revisions', 'Phase Signoffs', 'Site Logs', 'Billing Milestones'],
  },
  {
    num: '04',
    category: 'Logistics & Fleet Operations',
    icon: Truck,
    title: 'Logistics Operations System',
    desc: 'Coordinate consignment bookings, fleet availability, driver allocations, route milestones, and proof-of-delivery records.',
    tags: ['Consignments', 'Fleet Availability', 'Route Dispatch', 'Driver Logs', 'Proof of Delivery'],
  },
  {
    num: '05',
    category: 'Property & Real Estate',
    icon: Home,
    title: 'Property Asset & Unit System',
    desc: 'Oversee multi-property portfolios, tenant lease agreements, maintenance ticket queues, inspection logs, and rental status.',
    tags: ['Unit Master', 'Tenant Portfolios', 'Maintenance Queues', 'Payment Logs', 'Inspection Audits'],
  },
  {
    num: '06',
    category: 'Healthcare & Clinical Practice',
    icon: Stethoscope,
    title: 'Clinical Operations System',
    desc: 'Streamline patient scheduling, practitioner shifts, treatment notes, medical inventory management, and billing administration.',
    tags: ['Patient Schedules', 'Doctor Rosters', 'Clinical Records', 'Pharmacy Stocks', 'Invoice Generation'],
  },
];

interface ClientLogoItem {
  id: string;
  src: string;
  alt: string;
  className?: string;
}

const VERIFIED_CLIENT_LOGOS: ClientLogoItem[] = [
  { id: 'swaati', src: '/images/BMS-Swaati Enterprises.webp', alt: 'Swaati Enterprises' },
  { id: 'allace-ai', src: '/images/BMS-AllaceAI.png', alt: 'Allace AI' },
  { id: 'beacoet', src: '/images/BMS-beacoet.webp', alt: 'Beacoet' },
];

interface AutoplayVideoProps {
  src: string;
  className?: string;
  ariaLabel?: string;
}

const AutoplayVideo: React.FC<AutoplayVideoProps> = ({
  src,
  className = '',
  ariaLabel = 'Mayaa Business Management System Demo',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const handleInteraction = () => {
            video.play().catch(() => {});
            ['click', 'touchstart', 'scroll'].forEach((ev) =>
              window.removeEventListener(ev, handleInteraction)
            );
          };
          ['click', 'touchstart', 'scroll'].forEach((ev) =>
            window.addEventListener(ev, handleInteraction, { once: true, passive: true })
          );
        });
      }
    };

    playVideo();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && video.paused) {
            playVideo();
          }
        });
      },
      { threshold: 0.05, rootMargin: '100px' }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={ariaLabel}
      className={className}
    >
      <source src={src} type="video/mp4" />
      <source src={encodeURI(src)} type="video/mp4" />
    </video>
  );
};

export const BusinessToolsPage: React.FC = () => {
  const [activeLogoIndex, setActiveLogoIndex] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const startTimer = () => {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(() => {
        setActiveLogoIndex((prev) => (prev + 1) % VERIFIED_CLIENT_LOGOS.length);
      }, 1500);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
      } else {
        startTimer();
      }
    };

    startTimer();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (intervalId) clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <SEO
        title="Personalised Business Management Systems (BMS) | Mayaa Solutions"
        description="We engineer custom business management systems configured around your actual workflows, connecting enquiries, leads, projects, teams, and executive reporting."
        canonicalUrl="https://mayaasolutions.in/business-systems"
        schema={[
          getServiceSchema(
            'Personalised Business Management Systems (BMS)',
            'We engineer custom business management systems configured around your actual workflows, connecting enquiries, leads, projects, teams, and executive reporting.',
            'Custom Business Management Software & CRM Systems',
            '/business-systems'
          ),
          getBreadcrumbSchema([
            { name: 'Home', urlPath: '/' },
            { name: 'Services', urlPath: '/services' },
            { name: 'Business Systems', urlPath: '/business-systems' },
          ]),
        ]}
      />

      <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden">
        
        {/* SECTION 01: HERO (Natural height with 80-120px vertical breathing room) */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center border-b border-neutral-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center w-full">
            
            {/* LEFT CONTENT */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-5 sm:space-y-6">
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.12]"
              >
                One connected system. <br className="hidden sm:inline" />
                <span className="font-light italic text-neutral-400">Built around how you actually work.</span>
              </motion.h1>

              {/* Supporting Copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-[#A0A0A0] font-normal leading-relaxed max-w-2xl"
              >
                Build custom business management software to manage leads, tasks, teams, and workflows in one connected system.
              </motion.p>

              {/* Dual CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
              >
                <Link
                  to="/contact?service=business-systems"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 sm:px-7 py-3.5 sm:py-4 bg-white text-black font-extrabold text-[11px] sm:text-[13px] uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-md group text-center"
                >
                  <span>Discuss Operational Requirements</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                </Link>

                <a
                  href="#systems-demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 bg-neutral-950 text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800 font-bold text-[11px] sm:text-[13px] uppercase tracking-wider rounded-xl transition-all text-center"
                >
                  <span>Watch Interface Demo ↓</span>
                </a>
              </motion.div>
            </div>

            {/* RIGHT PRODUCT VISUAL CONTAINER */}
            <div className="lg:col-span-6 xl:col-span-6 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-950 p-2 sm:p-2.5 w-full mx-auto shadow-2xl"
              >
                <div
                  className="relative rounded-xl overflow-hidden bg-black aspect-[1920/920] border border-neutral-900 w-full"
                  style={{ aspectRatio: '1920 / 920' }}
                >
                  <AutoplayVideo
                    src="/images/BMS - Tool.mp4"
                    className="w-full h-full object-contain transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ==================================================
            02. THE OPERATIONAL PROBLEM (FRAGMENTED SOFTWARE) - WHITE SECTION
        ================================================== */}
        <section className="w-full bg-white text-[#171717] py-20 md:py-28 px-6 md:px-12 border-b border-[#E5E5E2]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16 text-center mx-auto">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#666666] block mb-3 font-bold">
                The Operational Bottleneck
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight mb-6">
                When business software is fragmented, clarity disappears.
              </h2>
              <p className="text-[#555555] text-base md:text-lg leading-relaxed font-normal">
                As growing businesses scale, they often adopt separate tools for each function, creating communication silos, double data entry, and delayed decision-making.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-8 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between shadow-2xs">
                <div>
                  <span className="text-xs font-mono text-[#666666] font-bold tracking-widest block mb-4">
                    SPREADSHEET CHAOS
                  </span>
                  <h3 className="text-xl font-bold text-[#171717] mb-3 tracking-tight">
                    Disconnected Files
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                    Important customer details and project statuses sit isolated in spreadsheets, leading to outdated copies, lost rows, and zero access security.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between shadow-2xs">
                <div>
                  <span className="text-xs font-mono text-[#666666] font-bold tracking-widest block mb-4">
                    SUBSCRIPTION BLOAT
                  </span>
                  <h3 className="text-xl font-bold text-[#171717] mb-3 tracking-tight">
                    Generic SaaS Tools
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                    Paying per-user monthly fees for tools where 80% of features go unused, while the remaining 20% do not fit your actual workflows.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between shadow-2xs">
                <div>
                  <span className="text-xs font-mono text-[#666666] font-bold tracking-widest block mb-4">
                    LOST INBOX LEADS
                  </span>
                  <h3 className="text-xl font-bold text-[#171717] mb-3 tracking-tight">
                    Scattered Inquiries
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                    Client conversations and lead follow-ups trapped in individual WhatsApp chats or private email threads with no institutional visibility.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between shadow-2xs">
                <div>
                  <span className="text-xs font-mono text-[#666666] font-bold tracking-widest block mb-4">
                    ZERO VISIBILITY
                  </span>
                  <h3 className="text-xl font-bold text-[#171717] mb-3 tracking-tight">
                    Blind Management
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                    Leadership is forced to interrupt operations for manual status updates rather than seeing live metrics in a centralized dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            03. THE UNIFIED 5-STAGE WORKFLOW PIPELINE
        ================================================== */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
              Workflow Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              How information moves seamlessly through a Mayaa BMS.
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              We connect your entire customer and project lifecycle into a continuous, audited data stream.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {WORKFLOW_PIPELINE.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-neutral-400 font-bold tracking-widest block mb-2">
                    STEP {step.num}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1.5">{step.stage}</h3>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-4">
                    {step.summary}
                  </span>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
                {idx < WORKFLOW_PIPELINE.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-neutral-600 font-mono text-xs">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            04. AUTHENTIC SYSTEM INTERFACE DEMO - WHITE SECTION
        ================================================== */}
        <section id="systems-demo" className="w-full bg-white text-[#171717] py-20 md:py-28 px-6 md:px-12 border-b border-[#E5E5E2]">
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-14">
            
            {/* ROW ONE: HEADLINE & SUPPORTING COPY (LEFT) + VIDEO DEMONSTRATION (RIGHT) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Eyebrow, Heading, Supporting Paragraph */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-5">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#666666] block font-bold">
                  OPERATIONAL INTERFACE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
                  Demonstrated system architecture in motion.
                </h2>
                <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-normal">
                  Explore how our business management framework coordinates leads, project tasks, and team oversight through clean, uncluttered interfaces.
                </p>
              </div>

              {/* Right Column: Full-Frame Visual Demonstration Video */}
              <div className="lg:col-span-7 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-neutral-300/80 bg-neutral-900 p-2 sm:p-2.5 shadow-xl group">
                  <div
                    className="relative rounded-xl overflow-hidden bg-black border border-neutral-800 w-full"
                    style={{ aspectRatio: '1920 / 920' }}
                  >
                    <AutoplayVideo
                      src="/images/BMS - Tool.mp4"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-neutral-400 pointer-events-none">
                      <span className="px-2.5 py-1 rounded bg-black/85 backdrop-blur border border-neutral-800 text-neutral-200">
                        Mayaa BMS · Workflow Engine Demo
                      </span>
                      <span className="hidden sm:inline text-neutral-400">
                        Custom Tailoring · Role-Based Security
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ROW TWO: ALL FOUR FEATURE CARDS IN ONE ROW ACROSS FULL WIDTH */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
              <div className="p-5 sm:p-6 rounded-xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between shadow-2xs">
                <div>
                  <Database className="w-5 h-5 text-[#171717] mb-3" />
                  <h4 className="text-base font-bold text-[#171717] mb-1.5 tracking-tight">Centralized Pipeline</h4>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                    De-duplicated client profiles with complete timeline history and linked proposal docs.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between shadow-2xs">
                <div>
                  <ShieldCheck className="w-5 h-5 text-[#171717] mb-3" />
                  <h4 className="text-base font-bold text-[#171717] mb-1.5 tracking-tight">Role Governance</h4>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                    Granular permissions protecting financial records, customer PII, and administrative levers.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between shadow-2xs">
                <div>
                  <Workflow className="w-5 h-5 text-[#171717] mb-3" />
                  <h4 className="text-base font-bold text-[#171717] mb-1.5 tracking-tight">Milestone Tracking</h4>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                    Resource allocation and stage deadlines with automated reminder triggers.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between shadow-2xs">
                <div>
                  <BarChart3 className="w-5 h-5 text-[#171717] mb-3" />
                  <h4 className="text-base font-bold text-[#171717] mb-1.5 tracking-tight">Executive Metrics</h4>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                    Live visibility into active workloads, delivery velocity, and cashflow milestones.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================
            05. BUSINESS SYSTEMS IN PRACTICE: LOGO CAROUSEL
        ================================================== */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Business Systems in Practice Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block font-bold">
                BUSINESS SYSTEMS IN PRACTICE
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Different Businesses. Better-Connected Operations.
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
                We design business management systems around the way teams work, helping businesses organise leads, coordinate teams, manage tasks, and gain clearer operational visibility through one connected platform.
              </p>
            </div>

            {/* Right Column: Single Logo Carousel with Smooth Crossfade Transition */}
            <div className="lg:col-span-5 w-full">
              <div
                className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-black aspect-[16/10] w-full select-none"
                aria-label="Partner Brands and Business Systems"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={VERIFIED_CLIENT_LOGOS[activeLogoIndex].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={VERIFIED_CLIENT_LOGOS[activeLogoIndex].src}
                      alt={VERIFIED_CLIENT_LOGOS[activeLogoIndex].alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================
            06. 6 INDUSTRY BLUEPRINTS (SECTOR SPECIALIZATION) - WHITE SECTION
        ================================================== */}
        <section className="w-full bg-white text-[#171717] py-24 md:py-32 px-6 md:px-12 border-b border-[#E5E5E2]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16 text-center mx-auto">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#666666] block mb-3 font-bold">
                Sector Specialization
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight mb-6">
                Configured blueprints for diverse business sectors.
              </h2>
              <p className="text-[#555555] text-base md:text-lg leading-relaxed font-normal">
                While our underlying technology architecture is standardized, every module is configured to match the specific operational vernacular of your industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INDUSTRY_BLUEPRINTS.map((bp, idx) => {
                const Icon = bp.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E5E2] flex items-center justify-center text-[#171717] shadow-2xs">
                          <Icon className="w-5 h-5 text-[#171717]" />
                        </div>
                        <span className="text-xs font-mono text-[#666666] font-bold">
                          BP {bp.num}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#666666] block mb-1 font-semibold">
                        {bp.category}
                      </span>
                      <h3 className="text-lg font-bold text-[#171717] mb-3 tracking-tight">
                        {bp.title}
                      </h3>
                      <p className="text-xs text-[#555555] leading-relaxed mb-6 font-normal">
                        {bp.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#EAEAE8] flex flex-wrap gap-1.5">
                      {bp.tags.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#555555] border border-[#E5E5E2]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================
            07. CONVERSION FINAL CTA
        ================================================== */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-950 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">
              Start Your Systems Scoping
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.06] mb-6 max-w-4xl text-balance">
            Your business has its own way of working. <br />
            <span className="font-light italic text-neutral-400">Your system should too.</span>
          </h2>

          <p className="text-base sm:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl mb-10 text-balance">
            Tell us how your business functions, where communication breaks down, and what workflows you need your team to manage with greater clarity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
            <Link
              to="/contact?service=business-systems"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-xl group"
            >
              <span>Discuss Operational Requirements</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="mailto:contact@mayaasolutions.in?subject=Business%20Systems%20Inquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-neutral-950 text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
            >
              contact@mayaasolutions.in
            </a>
          </div>

          {/* Internal links to other core capabilities */}
          <div className="pt-8 border-t border-neutral-900 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-neutral-500 uppercase tracking-wider">
            <span>Also explore:</span>
            <Link to="/our-work" className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4">
              Selected Work & Case Studies →
            </Link>
            <Link to="/brand" className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4">
              Brand Building & Positioning →
            </Link>
            <Link to="/websites" className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4">
              Websites & Digital Experiences →
            </Link>
          </div>
        </section>

      </main>
    </>
  );
};
