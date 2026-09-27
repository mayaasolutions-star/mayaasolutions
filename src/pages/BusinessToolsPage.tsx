import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const BusinessToolsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Personalised Business Management Tools | Mayaa Solutions"
        description="A personalised Business Management Tool built around how your business works. Unify leads, tasks, team, and operations into one clean system."
      />
      <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden">
        
        {/* SECTION 01 — HERO (Natural height with 80-120px vertical breathing room) */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-12 max-w-7xl mx-auto flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
            
            {/* LEFT CONTENT */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-7">
              
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xs font-mono font-bold text-[#A0A0A0] uppercase tracking-widest block"
              >
                BUSINESS SYSTEMS
              </motion.span>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]"
              >
                Custom Business <br className="hidden sm:inline" />
                Management Software
              </motion.h1>

              {/* Supporting Copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl text-[#A0A0A0] font-normal leading-relaxed max-w-xl"
              >
                A personalised Business Management Tool built around how your business works.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-2"
              >
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-md group"
                >
                  <span>See How It Works</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </motion.div>

            </div>

            {/* RIGHT PRODUCT VISUAL CONTAINER */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-950 p-2 sm:p-3 w-full max-w-xl lg:max-w-none mx-auto shadow-2xl"
              >
                <div
                  className="relative rounded-xl overflow-hidden bg-black aspect-[1920/920] border border-neutral-900"
                  style={{ aspectRatio: '1920 / 920' }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/service_business_growth.webp"
                    className="w-full h-full object-contain grayscale brightness-90 contrast-125 transition-transform duration-700 hover:scale-[1.02]"
                  >
                    <source src="/images/BMS - Tool.mp4" type="video/mp4" />
                  </video>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* SECTION 02 — THE PROBLEM (80-120px vertical spacing) */}
        <section className="py-16 sm:py-20 md:py-24 px-6 md:px-12 max-w-4xl mx-auto text-center border-t border-neutral-900">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold text-[#A0A0A0] uppercase tracking-widest block mb-4"
          >
            THE PROBLEM
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8 sm:mb-10"
          >
            Still managing everything manually?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg font-mono text-[#A0A0A0] tracking-widest uppercase mb-8 sm:mb-10"
          >
            Excel &nbsp;&nbsp;·&nbsp;&nbsp; WhatsApp &nbsp;&nbsp;·&nbsp;&nbsp; Email
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
          >
            We bring it together.
          </motion.p>
        </section>

        {/* SECTION 03 — THE SOLUTION (80-120px vertical spacing) */}
        <section className="py-16 sm:py-20 md:py-24 px-6 md:px-12 max-w-5xl mx-auto text-center border-t border-neutral-900">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold text-[#A0A0A0] uppercase tracking-widest block mb-4"
          >
            THE SOLUTION
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            One system. <br />
            Built for your business.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-xl text-[#A0A0A0] font-normal max-w-xl mx-auto mb-10 sm:mb-12"
          >
            Your leads, tasks, team and operations — in one personalised system.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-950 p-2 sm:p-4 max-w-3xl mx-auto shadow-2xl"
          >
            <div
              className="relative rounded-xl overflow-hidden bg-black aspect-[1920/920] border border-neutral-900"
              style={{ aspectRatio: '1920 / 920' }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/business-growth-hero.webp"
                className="w-full h-full object-contain grayscale brightness-90 contrast-125"
              >
                <source src="/images/BMS - Tool.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </section>

        {/* SECTION 04 — HOW IT WORKS (80-120px vertical spacing) */}
        <section id="how-it-works" className="py-16 sm:py-20 md:py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-neutral-900">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-xs font-mono font-bold text-[#A0A0A0] uppercase tracking-widest">
              HOW IT WORKS
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-8 lg:gap-6">
            
            {/* Step 01 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col h-full border-l border-neutral-800 p-6"
            >
              <div className="w-full max-w-[260px] flex flex-col space-y-4">
                <span className="text-xs font-mono text-[#A0A0A0] block">01</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug min-h-[3.5rem] flex items-start">
                  Understand your goal.
                </h3>
                <p className="text-sm text-[#A0A0A0] font-normal leading-relaxed min-h-[3rem] flex items-start">
                  What are you trying to achieve?
                </p>
              </div>
            </motion.div>

            {/* Step 02 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col h-full border-l border-neutral-800 p-6"
            >
              <div className="w-full max-w-[260px] flex flex-col space-y-4">
                <span className="text-xs font-mono text-[#A0A0A0] block">02</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug min-h-[3.5rem] flex items-start">
                  Understand the problem.
                </h3>
                <p className="text-sm text-[#A0A0A0] font-normal leading-relaxed min-h-[3rem] flex items-start">
                  Where is your business getting stuck?
                </p>
              </div>
            </motion.div>

            {/* Step 03 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col h-full border-l border-neutral-800 p-6"
            >
              <div className="w-full max-w-[260px] flex flex-col space-y-4">
                <span className="text-xs font-mono text-[#A0A0A0] block">03</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug min-h-[3.5rem] flex items-start">
                  Design around your workflow.
                </h3>
                <p className="text-sm text-[#A0A0A0] font-normal leading-relaxed min-h-[3rem] flex items-start">
                  We build around the way your business actually works.
                </p>
              </div>
            </motion.div>

            {/* Step 04 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col h-full border-l border-neutral-800 p-6"
            >
              <div className="w-full max-w-[260px] flex flex-col space-y-4">
                <span className="text-xs font-mono text-[#A0A0A0] block">04</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug min-h-[3.5rem] flex items-start">
                  Simplify your<br />business system.
                </h3>
                <p className="text-sm text-[#A0A0A0] font-normal leading-relaxed min-h-[3rem] flex items-start">
                  One personalised tool for<br />work, team and operations.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* SECTION 05 — FINAL CTA (80-120px vertical spacing) */}
        <section className="py-20 sm:py-28 md:py-32 px-6 md:px-12 max-w-4xl mx-auto text-center border-t border-neutral-900">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold text-[#A0A0A0] uppercase tracking-widest block mb-4"
          >
            READY TO BUILD YOUR SYSTEM?
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
              <span>Let's Build</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </section>

      </main>
    </>
  );
};
