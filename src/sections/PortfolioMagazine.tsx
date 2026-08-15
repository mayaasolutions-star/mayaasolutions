import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../constants/portfolioData';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PortfolioMagazineProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioMagazine: React.FC<PortfolioMagazineProps> = ({ onSelectProject }) => {
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 6);

  return (
    <section className="py-24 bg-studio-950 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-studio-400 uppercase block">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">
              Selected Client Projects.
            </h2>
            <p className="text-sm sm:text-base text-studio-300 font-normal leading-relaxed">
              A curated look at brand identities, web platforms, and digital systems built for client growth.
            </p>
          </div>

          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-studio-100 hover:text-studio-300 uppercase tracking-wider transition-colors shrink-0"
          >
            Explore All Work
          </Link>
        </div>

        {/* Poster Exhibition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={() => onSelectProject(project)}
              className="group relative h-80 rounded-3xl overflow-hidden bg-white border border-studio-850 hover:border-studio-700 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              {/* Top Header Title Area */}
              <div className="p-4 sm:p-5 bg-white border-b border-studio-850 flex items-center justify-between z-10 shrink-0">
                <h3 className="text-base sm:text-lg font-extrabold text-studio-100 group-hover:text-studio-300 transition-colors truncate pr-2">
                  {project.title}
                </h3>
                <span className="px-3 py-1 bg-studio-900 border border-studio-850 text-studio-100 text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase rounded-full shrink-0">
                  View
                </span>
              </div>

              {/* Full-Bleed Artwork Image (Extends from Left Edge to Right Edge) */}
              <div className="relative flex-1 w-full bg-studio-900 overflow-hidden">
                <img
                  src={project.id === 'myma' ? '/images/creative_page_work_thumbnail_myma.webp' : project.image}
                  alt={project.title}
                  className="w-full h-full object-cover p-0 m-0 block transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
