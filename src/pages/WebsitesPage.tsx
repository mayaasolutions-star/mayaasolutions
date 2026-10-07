import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { WEBSITES_DATA, WebsiteProject } from '../constants/websitesData';
import { WebsitePreviewCard } from '../components/WebsitePreviewCard';
import { WebsiteModal } from '../components/WebsiteModal';

export const WebsitesPage: React.FC = () => {
  const [selectedModalProject, setSelectedModalProject] = useState<WebsiteProject | null>(null);

  return (
    <>
      <SEO
        title="Websites | Mayaa Solutions"
        description="Websites built for businesses that mean business. From brand presence to digital experiences, we build websites that make businesses look credible, work better and move forward."
      />

      <main className="min-h-screen bg-studio-950 text-studio-100 selection:bg-studio-100 selection:text-white font-sans antialiased overflow-x-hidden pt-20 sm:pt-24 md:pt-24 pb-16 md:pb-24">
        {/* 1. CENTERED COMPACT HERO SECTION */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-5">
            {/* Headline wrapped intentionally into 3 lines */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[28px] leading-[1.15] sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.1] font-black text-studio-100 tracking-tight max-w-2xl mx-auto"
            >
              Websites built <br />
              for businesses that <br />
              mean business.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-sm sm:text-base md:text-lg text-studio-400 font-normal leading-relaxed max-w-[640px] mx-auto pt-1"
            >
              From brand presence to digital experiences, we build websites that make businesses look credible, work better and move forward.
            </motion.p>
          </div>
        </section>

        {/* 2. 2-COLUMN WEBSITE SHOWCASE GRID */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {WEBSITES_DATA.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="w-full"
              >
                <WebsitePreviewCard
                  project={project}
                  onOpenModal={(proj) => setSelectedModalProject(proj)}
                  index={idx}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. REFINED BOTTOM CTA */}
        <section className="mt-20 sm:mt-28 md:mt-32 pt-16 pb-16 sm:py-20 bg-studio-900 border-t border-b border-studio-850">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-12 text-center space-y-5 sm:space-y-6">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-studio-100 tracking-tight leading-tight break-words">
              Have a business that needs a better digital experience?
            </h2>

            <p className="text-base sm:text-lg text-studio-400 max-w-xl mx-auto font-normal leading-relaxed">
              Let's build a website that looks right, works right and supports the way your business grows.
            </p>

            <div className="pt-2 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-studio-100 text-studio-950 hover:bg-studio-200 font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all shadow-md group"
              >
                <span>Start a Conversation</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* INTERACTIVE FULLSCREEN MODAL OVERLAY */}
      <WebsiteModal
        project={selectedModalProject}
        onClose={() => setSelectedModalProject(null)}
      />
    </>
  );
};
