import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const ServiceBrandingPage: React.FC = () => {
  const progressionSteps = [
    { num: '01', title: 'Brand Strategy', desc: 'Define your core value proposition, target audience, and commercial direction.' },
    { num: '02', title: 'Positioning', desc: 'Establish clear market differentiation that commands premium perception.' },
    { num: '03', title: 'Visual Identity', desc: 'Logomarks, naming frameworks, typography systems, and color palettes.' },
    { num: '04', title: 'Brand System', desc: 'Modular visual rules, layout principles, and comprehensive style standards.' },
    { num: '05', title: 'Execution', desc: 'Packaging, presentation decks, digital assets, and collateral for rollout.' },
  ];

  const approachSteps = [
    { num: '01', title: 'Understand', desc: 'We analyze your commercial goals, target audience, and competitive landscape.' },
    { num: '02', title: 'Plan', desc: 'We clarify core positioning, messaging frameworks, and strategic direction.' },
    { num: '03', title: 'Design', desc: 'We craft logo architecture, typography, color palette, and visual identity systems.' },
    { num: '04', title: 'Launch', desc: 'We deliver comprehensive guidelines and production-ready assets for rollout.' },
  ];

  const deliverables = [
    'Brand Strategy & Positioning Document',
    'Primary & Secondary Logo Architecture',
    'Typography Scale & Color Palette Standards',
    'Brand Guidelines Manual (Digital & Print)',
    'Production-Ready Vector & Raster Asset Library',
    'Core Collateral & Presentation Templates',
  ];

  return (
    <>
      <SEO
        title="Brand Building & Strategy | Mayaa Solutions"
        description="Build a brand with a clear position, identity and visual system. A brand is more than a logo."
      />

      <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden">
        
        {/* SECTION 01 — HERO */}
        <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          <div className="w-full space-y-6 sm:space-y-8 flex flex-col items-center">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] text-center"
            >
              A brand is more <br className="hidden sm:inline" />
              <span className="text-white font-extrabold">than a logo.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl md:text-2xl text-[#A0A0A0] font-normal leading-relaxed max-w-2xl mx-auto text-center"
            >
              Build a brand with a clear position, identity, and visual system designed for lasting market recognition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-2 flex justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-md group"
              >
                <span>Start a Project</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>

          </div>
        </section>

        {/* SECTION 02 — THE BRAND SYSTEM PROGRESSION */}
        <section className="py-16 sm:py-20 md:py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-neutral-900">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto"
          >
            <span className="text-xs font-mono font-bold text-[#A0A0A0] uppercase tracking-widest block mb-3">
              THE BRAND SYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Build a Strong Brand
            </h2>
            <p className="text-base sm:text-lg text-[#A0A0A0] font-normal leading-relaxed mt-4">
              Brand Building creates a clear, consistent, and usable foundation for long-term recognition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-stretch gap-6 lg:gap-4">
            {progressionSteps.map((step) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-full border-l border-neutral-800 p-5"
              >
                <span className="text-xs font-mono text-[#A0A0A0] block mb-3">{step.num}</span>
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A0A0A0] font-normal leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 03 — WHO IT IS FOR */}
        <section className="py-16 sm:py-20 md:py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-neutral-900 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold text-[#A0A0A0] uppercase tracking-widest block mb-4"
          >
            WHO IT IS FOR
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Businesses building long-term market value.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-xl text-[#A0A0A0] font-normal max-w-2xl mx-auto leading-relaxed"
          >
            Built for founders, growing businesses, and established practices that want to establish credible positioning and elevate how they are perceived by clients and partners.
          </motion.p>
        </section>

        {/* SECTION 04 — HOW WE APPROACH IT */}
        <section className="py-16 sm:py-20 md:py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-neutral-900">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-xs font-mono font-bold text-[#A0A0A0] uppercase tracking-widest block">
              HOW WE WORK
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-6">
            {approachSteps.map((step) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-full border-l border-neutral-800 p-6"
              >
                <span className="text-xs font-mono text-[#A0A0A0] block mb-3">{step.num}</span>
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug mb-2">{step.title}</h3>
                <p className="text-sm text-[#A0A0A0] font-normal leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 05 — DELIVERABLES */}
        <section className="py-16 sm:py-20 md:py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-neutral-900">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="text-xs font-mono font-bold text-[#A0A0A0] uppercase tracking-widest block mb-3">
              WHAT YOU RECEIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Brand Deliverables
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-950 flex items-start gap-4"
              >
                <span className="text-white text-base font-bold select-none">✓</span>
                <p className="text-sm font-semibold text-white leading-snug">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 06 — FINAL CTA */}
        <section className="py-20 sm:py-28 md:py-32 px-6 md:px-12 max-w-4xl mx-auto text-center border-t border-neutral-900">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold text-[#A0A0A0] uppercase tracking-widest block mb-4"
          >
            READY TO BUILD YOUR BRAND FOUNDATION?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight mb-8 sm:mb-10"
          >
            Let's talk.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 sm:px-10 sm:py-4.5 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-xl group"
            >
              <span>Start a Project</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </section>

      </main>
    </>
  );
};
