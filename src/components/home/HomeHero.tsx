import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Layers, Terminal } from 'lucide-react';

export const HomeHero: React.FC = () => {
  const capabilities = [
    'Brand Building & Positioning',
    'High-Performance Websites',
    'Personalised Business Systems',
  ];
  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCapabilityIndex((prev) => (prev + 1) % capabilities.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [capabilities.length]);

  return (
    <section className="relative w-full pt-32 pb-20 md:pt-44 md:pb-28 bg-black text-white overflow-hidden border-b border-neutral-900">
      {/* Subtle radial ambient atmosphere */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255, 255, 255, 0.15), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        
        {/* Capability Rotating Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-neutral-400">
            MAYAASOLUTIONS · <span className="text-white font-semibold transition-all duration-300">{capabilities[activeCapabilityIndex]}</span>
          </span>
        </motion.div>

        {/* Primary Clear H1 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] max-w-5xl mx-auto text-balance"
        >
          Build a stronger brand. <br className="hidden sm:inline" />
          Create better digital experiences. <br className="hidden sm:inline" />
          <span className="font-light italic text-neutral-400">Run your business with clarity.</span>
        </motion.h1>

        {/* Informative Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl text-neutral-400 font-normal leading-relaxed max-w-3xl mx-auto mt-8 sm:mt-10 text-balance"
        >
          Mayaa Solutions partners with ambitious companies in India and globally to replace disjointed tools, define authoritative brand positioning, and engineer software configured around how they actually operate.
        </motion.p>

        {/* Primary & Secondary Action Pathways */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-xl group"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/our-work"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-neutral-950 text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
          >
            Explore Our Work
          </Link>
        </motion.div>

        {/* Foundation Signal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 sm:mt-16 pt-8 border-t border-neutral-900/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-neutral-500 uppercase tracking-widest"
        >
          <div className="flex items-center gap-2">
            <span className="text-neutral-400">India HQ</span>
          </div>
          <span className="hidden sm:inline text-neutral-800">•</span>
          <div className="flex items-center gap-2">
            <span className="text-neutral-400">Serving India & 20 Global Markets</span>
          </div>
          <span className="hidden sm:inline text-neutral-800">•</span>
          <div className="flex items-center gap-2">
            <span className="text-neutral-400">Strategy · Web · Systems</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
