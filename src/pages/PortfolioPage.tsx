import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../constants/portfolioData';

interface PortfolioPageProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onSelectProject,
}) => {
  return (
    <>
      <SEO
        title="Selected Work & Case Studies | Mayaa Solutions"
        description="Explore selected client projects across brand identity, custom website design, growth marketing, and digital product strategy."
      />

      {/* PREMIUM STUDIO SHOWCASE */}
      <main className="pt-28 pb-16 bg-studio-950 text-studio-100 min-h-screen">
        
        {/* HIGH-DENSITY BALANCED GALLERY GRID */}
        <section className="w-full px-4 sm:px-6 md:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px] sm:auto-rows-[340px] grid-flow-dense">
            {PORTFOLIO_PROJECTS.map((project, idx) => {
              let colSpanClass = 'col-span-1 row-span-1';
              if (project.cardType === 'hero') {
                colSpanClass = 'col-span-1 sm:col-span-2 md:col-span-2 row-span-2';
              } else if (project.cardType === 'landscape') {
                colSpanClass = 'col-span-1 sm:col-span-2 md:col-span-2 row-span-1';
              } else if (project.cardType === 'portrait') {
                colSpanClass = 'col-span-1 row-span-2';
              }

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 8) * 0.03 }}
                  onClick={() => onSelectProject(project)}
                  className={`group relative rounded-2xl overflow-hidden bg-white border border-studio-850 hover:border-studio-700 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between ${colSpanClass}`}
                >
                  {/* Top Header Title Area */}
                  <div className="p-3.5 sm:p-4 bg-white border-b border-studio-850 flex items-center justify-between z-10 shrink-0">
                    <h3 className="text-sm sm:text-base font-extrabold text-studio-100 truncate pr-2">
                      {project.title}
                    </h3>
                    <span className="px-2.5 py-0.5 bg-studio-900 border border-studio-850 text-studio-100 text-[10px] font-extrabold tracking-wider uppercase rounded-full shrink-0">
                      View
                    </span>
                  </div>

                  {/* Full-Bleed Artwork Image (Extends from Left Edge to Right Edge) */}
                  <div className="relative flex-1 w-full bg-studio-900 overflow-hidden min-h-[180px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover p-0 m-0 block transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

      </main>
    </>
  );
};
