import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../constants/portfolioData';
import { ProjectModal } from '../components/ProjectModal';

export const IndiaMarketPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Curated genuine projects from Mayaa Solutions' verified portfolio
  const featuredProjects = PORTFOLIO_PROJECTS.filter((p) => 
    ['swaatienterprises', 'mototrek', 'g1gold', 'ajavu'].includes(p.id)
  );

  const processSteps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Clarify the business, its operational realities, target audience, and commercial objectives.',
    },
    {
      num: '02',
      title: 'Define',
      desc: 'Identify clear priorities, deliverables, technical scope, and creative direction.',
    },
    {
      num: '03',
      title: 'Build',
      desc: 'Develop the agreed brand identity, high-speed website, digital product, or custom business software.',
    },
    {
      num: '04',
      title: 'Refine',
      desc: 'Review outcomes, incorporate stakeholder feedback, and launch on your infrastructure.',
    },
  ];

  const businessChallenges = [
    {
      title: 'Unclear or Inconsistent Market Presence',
      desc: 'A strong company delivering quality work, but whose brand communication, visual identity, or customer touchpoints do not reflect its real capability.',
    },
    {
      title: 'Websites That Do Not Guide Visitors',
      desc: 'A digital presence that functions like a static brochure rather than a capable business asset that explains offerings clearly and converts enquiries.',
    },
    {
      title: 'Fragmented Tools and Spreadsheets',
      desc: 'Valuable leads, customer conversations, tasks, and project milestones scattered across messaging groups and disjointed documents.',
    },
    {
      title: 'Marketing Without Clear Connection to Goals',
      desc: 'Scattered marketing activity and ad spend lacking disciplined priorities, measurable conversion funnels, or direct commercial impact.',
    },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', urlPath: '/' },
    { name: 'Global Markets', urlPath: '/global-markets' },
    { name: 'India (Bharat)', urlPath: '/global-markets/india' },
  ]);

  return (
    <>
      <SEO
        title="India (Bharat) | Brand Building, Websites & Custom Business Systems | Mayaa Solutions"
        description="Mayaa Solutions partners with Indian businesses to build distinctive brands, high-performing websites, and custom business management systems tailored for sustainable growth."
        canonicalUrl="https://mayaasolutions.in/global-markets/india"
        schema={[breadcrumbSchema]}
      />

      <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden">
        
        {/* ==================================================
            1. HERO SECTION (BLACK)
        ================================================== */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 max-w-6xl mx-auto border-b border-neutral-900">
          <div className="max-w-4xl">
            
            {/* Context Eyebrow */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link
                to="/global-markets"
                className="text-xs font-mono font-medium text-neutral-400 hover:text-white uppercase tracking-wider transition-colors"
              >
                Global Markets
              </Link>
              <span className="text-neutral-600">/</span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950">
                <span className="w-4.5 h-3 rounded-xs overflow-hidden inline-flex border border-neutral-700 shadow-2xs shrink-0">
                  <img src="/flags/in.svg" alt="Flag of India" className="w-full h-full object-cover" />
                </span>
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-white uppercase">
                  FOR BUSINESSES ACROSS INDIA
                </span>
              </div>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.06] mb-6 text-balance">
              Build a Stronger Business for What's Next.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl md:text-2xl text-[#A0A0A0] font-normal leading-relaxed max-w-3xl mb-10 text-balance">
              From how your business is seen to how it works behind the scenes, we help you build the brand, digital experiences, and systems needed to move forward with clarity.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-sm group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/our-work"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-neutral-950 text-white hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
              >
                <span>Explore Our Work</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Grounding Strip */}
            <div className="mt-14 pt-8 border-t border-neutral-900 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono text-neutral-400">
              <div>
                <span className="text-white font-bold block mb-1">Focus Areas</span>
                <span>Brand, Web, Systems, Growth</span>
              </div>
              <div>
                <span className="text-white font-bold block mb-1">Commercial Billing</span>
                <span>INR, Milestone-Based, GST</span>
              </div>
              <div>
                <span className="text-white font-bold block mb-1">Direct Working</span>
                <span>Principal & Senior Practitioners</span>
              </div>
              <div>
                <span className="text-white font-bold block mb-1">Asset Ownership</span>
                <span>100% Client Code & IP</span>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================
            2. BUSINESS CONTEXT (WHITE)
        ================================================== */}
        <section className="w-full bg-white text-[#171717] py-20 md:py-28 px-6 md:px-12 border-b border-[#E5E5E2]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#666666] block mb-2.5 font-medium">
                Market Context
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight mb-4">
                Good Businesses Need More Than Good Ideas.
              </h2>
              <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
                As businesses across Bharat expand, commercial bottlenecks rarely stem from ambition. They happen when growth outpaces the underlying tools, customer touchpoints, and brand communication.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {businessChallenges.map((challenge, idx) => (
                <div 
                  key={idx}
                  className="p-7 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <span className="text-xs font-mono text-[#666666] font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-[#171717] tracking-tight">
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-[#555555] leading-relaxed font-normal">
                      {challenge.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            3. WHAT WE HELP YOU BUILD (BLACK)
        ================================================== */}
        <section className="w-full bg-black text-white py-20 md:py-28 px-6 md:px-12 border-b border-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2.5 font-medium">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                What We Help You Build
              </h2>
              <p className="text-base sm:text-lg text-[#A0A0A0] font-normal leading-relaxed">
                We design and develop solutions across five foundational areas, helping you look credible, operate smoothly, and grow sustainably.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* 1. Brand Building */}
              <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-6">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-5 shadow-2xs">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2.5">
                    Brand Building
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                    Create a distinctive identity, clear positioning, and consistent brand communication that helps people understand and remember your business.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-800">
                  <Link
                    to="/brand"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
                  >
                    <span>Explore Brand Building</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* 2. Websites & Digital Experiences */}
              <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-6">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-5 shadow-2xs">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2.5">
                    Websites & Digital Experiences
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                    Turn your website into a credible commercial asset. Fast React web engineering, clear information architecture, and structured enquiry journeys.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-800">
                  <Link
                    to="/websites"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
                  >
                    <span>Explore Website Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* 3. Business Management Systems */}
              <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-6">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-5 shadow-2xs">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2.5">
                    Business Management Systems
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                    Custom operational platforms designed around your exact workflows: lead pipelines, task tracking, team coordination, and business reporting with 100% IP ownership.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-800">
                  <Link
                    to="/business-systems"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
                  >
                    <span>Explore Business Systems</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* 4. Growth Management */}
              <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-6">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-5 shadow-2xs">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2.5">
                    Growth Management
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                    Connect marketing priorities and growth activities to meaningful business objectives, customer acquisition, search discoverability, and conversion.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-800">
                  <Link
                    to="/services/growth"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
                  >
                    <span>Explore Growth Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* 5. Product Management */}
              <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-6">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-5 shadow-2xs">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2.5">
                    Product Management
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                    Plan and shape digital products, customer experiences, and business tools around actual user journeys and operational requirements.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-800">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
                  >
                    <span>Explore Capabilities</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Contact / Consultation Tile */}
              <div className="p-8 rounded-2xl bg-[#0D1117] text-white border border-neutral-800 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-4">
                    Need Guidance?
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-2.5">
                    Discuss What Your Business Needs Next
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                    We review your business goals directly and recommend the most practical combination of brand, web, or operational tools.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-800">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            4. DESIGNED AROUND HOW INDIAN BUSINESSES OPERATE (WHITE)
        ================================================== */}
        <section className="w-full bg-white text-[#171717] py-20 md:py-28 px-6 md:px-12 border-b border-[#E5E5E2]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#666666] block font-medium">
                  Our Approach
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
                  Built Around Your Business. Not Someone Else's Template.
                </h2>
                <p className="text-base text-[#555555] font-normal leading-relaxed pt-2">
                  Indian enterprises span diverse commercial realities: industrial manufacturers, family-led enterprises, professional advisory practices, and high-growth consumer brands. Generic website themes and bloated subscription software rarely match how these businesses actually operate.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-6 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-2.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#171717]" />
                    <h3 className="text-base font-bold text-[#171717]">Different Models, Different Experiences</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    Different business models require different digital experiences. An industrial B2B catalog demands technical specification clarity, while a consultancy requires immediate market authority.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-2.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#171717]" />
                    <h3 className="text-base font-bold text-[#171717]">Reflecting Real Audiences</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    Brand communication should reflect the business, its actual customer base, and the market it operates in, avoiding empty buzzwords and imported agency jargon.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-2.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#171717]" />
                    <h3 className="text-base font-bold text-[#171717]">Fitting Real Workflows</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    Business systems should fit actual team workflows rather than forcing staff into unnecessary complexity, rigid software constraints, or perpetual per-user fees.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] space-y-2.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#171717]" />
                    <h3 className="text-base font-bold text-[#171717]">Clear Purpose for Every Rupee</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    Every digital investment should have a measurable commercial purpose: saving administrative hours, winning higher-value deals, or building durable company assets.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            5. RELEVANT WORK (BLACK)
        ================================================== */}
        <section className="w-full bg-black text-white py-20 md:py-28 px-6 md:px-12 border-b border-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 block font-medium">
                  Verified Projects
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  Work That Shows What We Can Build.
                </h2>
              </div>
              <div>
                <Link
                  to="/our-work"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-2xl border border-neutral-800 bg-neutral-950 overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-sm"
                >
                  <div className="aspect-[16/10] bg-black border-b border-neutral-800 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.category}`}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-7 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                        {project.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-neutral-200">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2 font-normal">
                        {project.summary}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white">
                      <span className="group-hover:underline underline-offset-4">Read Case Study</span>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            6. HOW WE WORK (WHITE)
        ================================================== */}
        <section className="w-full bg-white text-[#171717] py-20 md:py-28 px-6 md:px-12 border-b border-[#E5E5E2]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#666666] block mb-2.5 font-medium">
                Delivery Process
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight mb-4">
                From Business Need to Practical Solution.
              </h2>
              <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
                Every collaboration follows a transparent four-stage progression with defined milestones, direct communication, and zero unnecessary bureaucracy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div
                  key={step.num}
                  className="p-7 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] flex flex-col justify-between space-y-5"
                >
                  <span className="text-xs font-mono font-bold text-[#666666]">
                    STAGE {step.num}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#171717] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            7. CLOSING CTA (BLACK)
        ================================================== */}
        <section className="w-full bg-black text-white py-20 md:py-28 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <div className="p-10 sm:p-14 md:p-16 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col items-center shadow-2xl">
            
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-3 font-medium">
              Next Steps
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4 max-w-2xl text-balance">
              Have Something Important to Build?
            </h2>

            <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-xl mb-9 text-balance">
              Tell us what your business needs next. Let's explore the right way to build it.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-sm group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="mailto:contact@mayaasolutions.in?subject=India%20Business%20Inquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
              >
                contact@mayaasolutions.in
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Case Study Modal Overlay */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};
