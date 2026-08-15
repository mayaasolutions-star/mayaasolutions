import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../constants/testimonialsData';

export const TestimonialsQuote: React.FC = () => {
  return (
    <section className="py-28 bg-studio-950 border-t border-studio-850 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-studio-400 uppercase block">
            Client Results
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">
            Trusted by Business Leaders.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-studio-850 shadow-sm flex flex-col justify-between space-y-6 relative hover:border-studio-700 transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-studio-300 opacity-40" />
                <p className="text-base sm:text-lg text-studio-300 leading-relaxed font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-studio-850 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-studio-100">{t.author}</h3>
                  <p className="text-xs sm:text-sm text-studio-400 font-medium">{t.role ? `${t.role}, ${t.company}` : t.company}</p>
                </div>
                {t.stats && (
                  <span className="px-3 py-1 bg-studio-900 text-studio-100 text-xs font-extrabold rounded-full border border-studio-850">
                    {t.stats}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
