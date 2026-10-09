import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../../constants/portfolioData';

interface HomeSelectedWorkProps {
  onSelectProject?: (project: ProjectItem) => void;
}

// 4 distinct real projects representing the 3 pillars
const FEATURED_PROJECT_IDS = ['myma', 'mototrek', 'pavanraje', 'swaatienterprises'];

export const HomeSelectedWork: React.FC<HomeSelectedWorkProps> = ({ onSelectProject }) => {
  const featuredProjects = FEATURED_PROJECT_IDS.map((id) =>
    PORTFOLIO_PROJECTS.find((p) => p.id === id)
  ).filter(Boolean) as ProjectItem[];

  return (
    <section className="relative w-full py-24 md:py-32 bg-black text-white border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Real projects delivered for growing businesses.
            </h2>
          </div>
          <div>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors group"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 2x2 Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onSelectProject?.(project)}
              className="group cursor-pointer flex flex-col justify-between rounded-2xl bg-neutral-950/70 border border-neutral-800/80 hover:border-neutral-600 transition-all duration-300 overflow-hidden"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border-b border-neutral-800">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Year & Category Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur border border-neutral-700 text-neutral-300">
                    {project.year}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/80 border border-neutral-700 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Details & Highlights */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Metrics if available */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-900 mb-6">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <span className="text-xl sm:text-2xl font-black text-white block">
                            {m.value}
                          </span>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Deliverables snippet */}
                  {project.deliverables && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.deliverables.slice(0, 3).map((d, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-400"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-neutral-300 transition-colors">
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to Work */}
        <div className="mt-14 text-center">
          <Link
            to="/our-work"
            className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-neutral-700 transition-all"
          >
            Browse Full Portfolio & Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};
