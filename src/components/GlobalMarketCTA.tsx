import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface GlobalMarketCTAProps {
  countryName?: string;
}

export const GlobalMarketCTA: React.FC<GlobalMarketCTAProps> = ({ countryName }) => {
  return (
    <section className="py-20 md:py-28 bg-[#171717] text-white border-t border-neutral-800 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-7 relative z-10">
        
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block"
        >
          {countryName ? `COLLABORATION · ${countryName.toUpperCase()}` : 'START THE CONVERSATION'}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] max-w-4xl mx-auto uppercase"
        >
          Your business has its own way of working. <br className="hidden sm:inline" />
          <span className="text-neutral-400">Your system should too.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto"
        >
          Tell us how your business operates, where the process breaks down, and what you want to improve.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-neutral-200 font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md group"
          >
            <span>Discuss Your Business</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/our-work"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-700 font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
          >
            View Our Work
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
