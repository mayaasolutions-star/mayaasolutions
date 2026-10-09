import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export const HomeFinalCTA: React.FC = () => {
  return (
    <section className="relative w-full py-28 md:py-36 bg-gradient-to-b from-neutral-950 to-black text-white border-b border-neutral-900 overflow-hidden">
      {/* Background glow subtle effect */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255, 255, 255, 0.12), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/80 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">
            Let's Build Something Meaningful
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6 max-w-4xl text-balance"
        >
          Ready to clarify your brand, elevate your web presence, or streamline your operations?
        </motion.h2>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl mb-10 text-balance"
        >
          Whether you are based in India or operating internationally, let’s discuss your current bottlenecks and explore how we can engineer a solution that lasts.
        </motion.p>

        {/* Dual Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-xl group"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <a
            href="mailto:contact@mayaasolutions.in"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
          >
            <Mail className="w-4 h-4 text-neutral-400" />
            <span>contact@mayaasolutions.in</span>
          </a>
        </motion.div>

        {/* Commitments & Alternate Route */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="pt-8 border-t border-neutral-900 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-neutral-500"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-neutral-400" />
            <span>Response within 24 business hours</span>
          </div>
          <span className="hidden sm:inline text-neutral-800">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
            <span>No hard sales pressure</span>
          </div>
          <span className="hidden sm:inline text-neutral-800">•</span>
          <div>
            <Link to="/products" className="text-neutral-400 hover:text-white underline underline-offset-4 transition-colors">
              Looking for starter toolkits? Browse Products →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
