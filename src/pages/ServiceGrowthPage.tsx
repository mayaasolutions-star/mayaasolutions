import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const ServiceGrowthPage: React.FC = () => {
  const growthSteps = [
    { num: '01', title: 'Growth Strategy', desc: 'Define commercial roadmaps, audience dynamics, and high-leverage market opportunities.' },
    { num: '02', title: 'Acquisition', desc: 'Drive high-intent customer demand through SEO and targeted campaign architecture.' },
    { num: '03', title: 'Conversion', desc: 'Engineer high-converting landing pages, inquiry funnels, and optimized touchpoints.' },
    { num: '04', title: 'Retention', desc: 'Streamline customer experience and touchpoints to maximize repeat value and retention.' },
    { num: '05', title: 'Measurement & Iteration', desc: 'Transparent inquiry attribution, revenue tracking, and continuous data-driven optimization.' },
  ];

  const approachSteps = [
    { num: '01', title: 'Strategy', desc: 'We evaluate your business economics, target customer profiles, and commercial goals.' },
    { num: '02', title: 'Target', desc: 'We map out high-intent channels, search opportunities, and conversion pathways.' },
    { num: '03', title: 'Execute', desc: 'We deploy targeted campaigns, technical SEO, and conversion-optimized touchpoints.' },
    { num: '04', title: 'Measure', desc: 'We track verified inbound inquiries and optimize for sustainable compounding growth.' },
  ];

  const deliverables = [
    'Comprehensive Growth & Acquisition Strategy',
    'Technical & On-Page SEO Architecture',
    'Targeted Campaign Creative & Channel Setup',
    'High-Converting Landing Pages & Inquiry Funnels',
    'Customer Touchpoint & Retention Framework',
    'Attribution & Growth Analytics Dashboard',
  ];

  return (
    <>
      <SEO
        title="Business Strategy & Digital Advisory | Mayaa Solutions"
        description="Practical decisions for brand and digital growth. Helping businesses make better brand and digital decisions from requirement to execution."
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
              Practical decisions for <br className="hidden sm:inline" />
              <span className="text-white font-extrabold">brand & digital growth.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl md:text-2xl text-[#A0A0A0] font-normal leading-relaxed max-w-2xl mx-auto text-center"
            >
              Helping businesses make better brand and digital decisions from initial requirement through to execution.
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

        {/* SECTION 02 — THE GROWTH SYSTEM PROGRESSION */}
        <section className="py-16 sm:py-20 md:py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-neutral-900">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto"
          >
            <span className="text-xs font-mono font-bold text-[#A0A0A0] uppercase tracking-widest block mb-3">
              THE GROWTH SYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Grow with Purpose
            </h2>
            <p className="text-base sm:text-lg text-[#A0A0A0] font-normal leading-relaxed mt-4">
              Connecting growth activities directly to customer acquisition and sustainable business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-stretch gap-6 lg:gap-4">
            {growthSteps.map((step) => (
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
            Businesses ready to drive predictable growth.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-xl text-[#A0A0A0] font-normal max-w-2xl mx-auto leading-relaxed"
          >
            Designed for businesses with a validated service or product looking to build reliable acquisition channels, expand search visibility, and streamline customer conversion without relying on routine vanity posting.
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
              Growth Deliverables
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
            READY TO GROW YOUR BUSINESS?
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
