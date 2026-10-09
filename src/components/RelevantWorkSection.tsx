import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { RELEVANT_WORK_DATA } from '../constants/globalMarketsData';

interface RelevantWorkSectionProps {
  headline?: string;
  subtext?: string;
}

export const RelevantWorkSection: React.FC<RelevantWorkSectionProps> = ({
  headline = 'Relevant Experience & Selected Work',
  subtext = 'Real systems, platforms and digital experiences built around practical business workflows and clear execution.',
}) => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E5E5E2]">
      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono font-bold text-studio-400 uppercase tracking-widest block mb-3"
        >
          RELEVANT WORK
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-studio-100 tracking-tight leading-tight"
        >
          {headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-base sm:text-lg text-studio-400 font-normal leading-relaxed mt-4"
        >
          {subtext}
        </motion.p>
      </div>

      {/* Grid of 4 Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {RELEVANT_WORK_DATA.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white border border-[#E5E5E2] hover:border-studio-100 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div>
              {/* Media Container */}
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-studio-900 border border-[#E5E5E2] mb-6 relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 scale-[1.01] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider text-studio-100 border border-[#E5E5E2]">
                  {project.category}
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-semibold text-studio-400 uppercase tracking-wider">
                  {project.tagline}
                </div>
                <h3 className="text-2xl font-black text-studio-100 tracking-tight group-hover:text-black transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm sm:text-base text-studio-400 leading-relaxed pt-1">
                  {project.summary}
                </p>
              </div>
            </div>

            {/* Link footer */}
            <div className="pt-6 mt-6 border-t border-[#F0F0EE]">
              <Link
                to={project.link}
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-studio-100 group-hover:translate-x-0.5 transition-transform"
              >
                <span>{project.linkText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
