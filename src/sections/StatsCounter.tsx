import React from 'react';
import { motion } from 'framer-motion';
import { STUDIO_STATS } from '../constants/testimonialsData';

export const StatsCounter: React.FC = () => {
  return (
    <section className="py-20 bg-studio-900 border-t border-b border-studio-850">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STUDIO_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-2 hover:border-studio-700 transition-colors"
            >
              <div className="text-4xl sm:text-6xl font-extrabold text-studio-100 tracking-tight">
                {stat.value}
              </div>
              <p className="text-sm sm:text-base text-studio-300 font-normal leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
