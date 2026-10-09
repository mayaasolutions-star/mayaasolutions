import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../constants/portfolioData';
import { 
  ArrowRight, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  Tag, 
  Calendar, 
  Briefcase,
  Sparkles
} from 'lucide-react';
import { ContactCTA } from '../sections/ContactCTA';

interface PortfolioPageProps {
  onSelectProject: (project: ProjectItem) => void;
}

type CapabilityFilter = 'all' | 'branding' | 'website' | 'systems' | 'marketing';

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<CapabilityFilter>('all');

  // Marquee projects that feature comprehensive documented case studies
  const FEATURED_PROJECT_IDS = useMemo(() => [
    'ajavu',
    'mototrek',
    'g1gold',
    'myma',
    'swaatienterprises',
    'pavanraje',
    'firstock',
    'identity'
  ], []);

  // Filter projects by capability
  const matchesFilter = (project: ProjectItem, filter: CapabilityFilter): boolean => {
    if (filter === 'all') return true;
    if (filter === 'branding') return project.categorySlug === 'branding';
    if (filter === 'website') return project.categorySlug === 'website';
    if (filter === 'systems') {
      return (
        project.categorySlug === 'product' ||
        project.id === 'pavanraje' ||
        project.id === 'myma' ||
        project.id === 'godocs' ||
        project.id === 'aarogya'
      );
    }
    if (filter === 'marketing') {
      return (
        project.categorySlug === 'marketing' ||
        (project.categorySlug === 'growth' && project.id !== 'pavanraje')
      );
    }
    return true;
  };

  const featuredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter(
      (p) => FEATURED_PROJECT_IDS.includes(p.id) && matchesFilter(p, activeFilter)
    );
  }, [activeFilter, FEATURED_PROJECT_IDS]);

  const showcaseProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter(
      (p) => !FEATURED_PROJECT_IDS.includes(p.id) && matchesFilter(p, activeFilter)
    );
  }, [activeFilter, FEATURED_PROJECT_IDS]);

  const filterTabs: { id: CapabilityFilter; label: string; count: number }[] = [
    { id: 'all', label: 'All Capabilities', count: PORTFOLIO_PROJECTS.length },
    { 
      id: 'branding', 
      label: 'Brand Building', 
      count: PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === 'branding').length 
    },
    { 
      id: 'website', 
      label: 'Websites & Digital Experiences', 
      count: PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === 'website').length 
    },
    { 
      id: 'systems', 
      label: 'Product & Business Systems', 
      count: PORTFOLIO_PROJECTS.filter((p) => matchesFilter(p, 'systems')).length 
    },
    { 
      id: 'marketing', 
      label: 'Growth & Digital Marketing', 
      count: PORTFOLIO_PROJECTS.filter((p) => matchesFilter(p, 'marketing')).length 
    },
  ];

  return (
    <>
      <SEO
        title="Selected Work & Case Studies | Mayaa Solutions"
        description="Explore verified client work and digital systems delivered across brand building, high-performance websites, custom business management platforms, and growth initiatives."
        canonicalUrl="https://mayaasolutions.in/our-work"
        schema={[
          getBreadcrumbSchema([
            { name: 'Home', urlPath: '/' },
            { name: 'Our Work', urlPath: '/our-work' },
          ]),
        ]}
      />

      <main className="pt-16 pb-20 bg-studio-950 text-studio-100 min-h-screen">
        
        {/* Editorial Hero Section */}
        <section className="relative min-h-[48vh] flex items-center pt-24 pb-16 overflow-hidden bg-studio-950 text-left border-b border-studio-850 mb-12">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-studio-100 inline-block" />
                <span className="text-xs font-extrabold text-studio-100 uppercase tracking-widest font-mono">
                  Selected Work & Digital Systems • Bangalore HQ & Global Delivery
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.08]">
                Real Projects. <br className="hidden sm:block" />
                <span className="text-[#171717] font-extrabold">Tangible Commercial Impact.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed max-w-2xl">
                A curated showcase of authoritative brand architectures, high-performance web platforms, bespoke business management systems, and strategic growth initiatives delivered for businesses in India and international markets.
              </p>

              {/* Capability Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-3xl">
                {[
                  { title: 'Brand Building', subtitle: 'Identity Systems' },
                  { title: 'Custom Websites', subtitle: 'Modern Web Engineering' },
                  { title: 'Business Systems', subtitle: 'Bespoke BMS / CRM' },
                  { title: 'Verified Delivery', subtitle: 'Zero Fabricated Stories' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-xl border border-studio-850 shadow-sm text-left">
                    <span className="text-xs font-bold text-studio-100 block">{item.title}</span>
                    <span className="text-[11px] text-studio-400 font-medium block">{item.subtitle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filter Navigation Bar */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-12">
          <div className="flex flex-wrap items-center gap-2 p-2 bg-white rounded-2xl border border-studio-850 shadow-sm">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-studio-100 text-studio-950 shadow-sm'
                      : 'text-studio-300 hover:text-studio-100 hover:bg-studio-900'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    isActive ? 'bg-studio-950 text-white' : 'bg-studio-850 text-studio-400'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* FEATURED IN-DEPTH CASE STUDIES (When Available) */}
        {featuredProjects.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20 space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-studio-850 pb-5">
              <div>
                <span className="text-xs font-mono font-bold text-studio-400 uppercase tracking-widest block">
                  Detailed Case Studies
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-studio-100 mt-1">
                  Featured Strategic Engagements
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-studio-400 max-w-md">
                In-depth projects featuring full business context, strategic roles, deliverables, and interactive case study modals.
              </p>
            </div>

            <div className="space-y-12">
              {featuredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className="p-6 sm:p-10 rounded-3xl bg-white border border-studio-850 shadow-sm hover:border-studio-700 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Left Column: Visual Artwork */}
                  <div className="lg:col-span-5 order-2 lg:order-1">
                    <div
                      onClick={() => onSelectProject(project)}
                      className="relative rounded-2xl overflow-hidden bg-studio-900 border border-studio-850 shadow-md h-[280px] sm:h-[360px] cursor-pointer group"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-studio-100/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="px-4 py-2 bg-studio-100 text-studio-950 font-extrabold text-xs uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1.5">
                          Open Case Study <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Case Brief */}
                  <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 bg-studio-900 border border-studio-850 text-studio-100 text-[11px] font-mono font-bold uppercase rounded-full">
                        {project.category}
                      </span>
                      <span className="text-xs font-semibold text-studio-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {project.year}
                      </span>
                      <span className="text-xs font-semibold text-studio-400 flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" /> {project.client}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-extrabold text-studio-100 tracking-tight leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-studio-300 font-normal leading-relaxed">
                      {project.overview || project.summary}
                    </p>

                    {/* Challenge & Strategic Solution */}
                    {(project.problem || project.solution) && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {project.problem && (
                          <div className="p-4 rounded-xl bg-studio-900 border border-studio-850 space-y-1">
                            <span className="text-[10px] font-bold text-studio-400 uppercase tracking-widest block">The Challenge</span>
                            <p className="text-xs text-studio-300 leading-relaxed font-normal">{project.problem}</p>
                          </div>
                        )}
                        {project.solution && (
                          <div className="p-4 rounded-xl bg-studio-900 border border-studio-850 space-y-1">
                            <span className="text-[10px] font-bold text-studio-100 uppercase tracking-widest block">Mayaa's Solution</span>
                            <p className="text-xs text-studio-300 leading-relaxed font-normal">{project.solution}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Deliverables Tags */}
                    {project.deliverables && project.deliverables.length > 0 && (
                      <div className="space-y-2 pt-2">
                        <span className="text-xs font-bold text-studio-400 uppercase tracking-wider block">Delivered Capabilities</span>
                        <div className="flex flex-wrap gap-2">
                          {project.deliverables.map((deliv, dIdx) => (
                            <span
                              key={dIdx}
                              className="px-2.5 py-1 bg-studio-900 border border-studio-850 rounded-lg text-xs font-semibold text-studio-100"
                            >
                              {deliv}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Metrics if verified */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-6 pt-2 border-t border-studio-850">
                        {project.metrics.map((metric, mIdx) => (
                          <div key={mIdx}>
                            <span className="text-2xl font-extrabold text-studio-100 font-mono block">{metric.value}</span>
                            <span className="text-[11px] font-semibold text-studio-400 uppercase tracking-wider">{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Interactive Modal Button & Related Service Link */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="px-6 py-3 bg-studio-100 text-studio-950 font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-studio-200 transition-all inline-flex items-center gap-2 shadow-sm"
                      >
                        Explore Case Study <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <Link
                        to={
                          project.categorySlug === 'branding'
                            ? '/brand'
                            : project.categorySlug === 'website'
                            ? '/websites'
                            : project.categorySlug === 'product' || project.id === 'pavanraje'
                            ? '/business-systems'
                            : '/services/growth'
                        }
                        className="text-xs font-bold text-studio-400 hover:text-studio-100 uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                      >
                        <span>Related Capability</span> →
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CURATED PROJECT SHOWCASE GRID */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-studio-850 pb-5">
            <div>
              <span className="text-xs font-mono font-bold text-studio-400 uppercase tracking-widest block">
                Verified Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-studio-100 mt-1">
                Project Showcase & Client Engagements
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-studio-400 max-w-md">
              Focused project showcases across corporate identity, digital campaigns, packaging, and technical platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group rounded-3xl overflow-hidden bg-white border border-studio-850 hover:border-studio-700 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                {/* Artwork Media Area */}
                <div className="relative aspect-[16/10] w-full bg-studio-900 overflow-hidden border-b border-studio-850">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-md border border-studio-850 rounded-full text-[10px] font-mono font-bold text-studio-100 uppercase">
                    {project.categorySlug.toUpperCase()}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-studio-400">
                      <span className="font-semibold">{project.client}</span>
                      <span className="font-mono">{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-studio-100 group-hover:text-studio-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-studio-300 leading-relaxed font-normal">
                      {project.summary}
                    </p>
                  </div>

                  {/* Deliverables Pills */}
                  {project.deliverables && project.deliverables.length > 0 && (
                    <div className="pt-3 border-t border-studio-850 flex flex-wrap gap-1.5">
                      {project.deliverables.slice(0, 3).map((d, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-studio-900 border border-studio-850 rounded text-[10px] font-medium text-studio-400 truncate max-w-[200px]"
                        >
                          {d}
                        </span>
                      ))}
                      {project.deliverables.length > 3 && (
                        <span className="px-2 py-0.5 bg-studio-900 border border-studio-850 rounded text-[10px] font-medium text-studio-400 font-mono">
                          +{project.deliverables.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between text-xs font-bold text-studio-100 group-hover:text-studio-400 transition-colors">
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Cross-Linking Section */}
        <section className="py-20 bg-studio-900 border-t border-b border-studio-850">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
            <div className="max-w-3xl space-y-2 text-left">
              <span className="text-xs font-mono font-bold text-studio-400 uppercase tracking-widest">
                Our Capabilities In Detail
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-studio-100">
                Explore the Service Disciplines Behind Our Work.
              </h2>
              <p className="text-sm sm:text-base text-studio-300 font-normal">
                Learn more about our methodology, deliverables, and commercial frameworks across each core capability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Brand Building',
                  desc: 'Positioning strategy, visual identity systems, and high-trust B2B collateral.',
                  link: '/brand'
                },
                {
                  title: 'Websites & Digital Experiences',
                  desc: 'Modern web engineering, fast load times, and conversion architecture.',
                  link: '/websites'
                },
                {
                  title: 'Personalised Business Systems',
                  desc: 'Custom operational dashboards, CRM workflows, and zero SaaS seat lock-in.',
                  link: '/business-systems'
                }
              ].map((srv, idx) => (
                <div key={idx} className="p-7 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-studio-100">{srv.title}</h3>
                    <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">{srv.desc}</p>
                  </div>
                  <Link
                    to={srv.link}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-studio-100 hover:text-studio-300 transition-colors pt-2"
                  >
                    View Service Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />

      </main>
    </>
  );
};
