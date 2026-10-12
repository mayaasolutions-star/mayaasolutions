import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema, getServiceSchema, getWebPageSchema } from '../utils/seoMetadata';
import { AI_VIDEOS } from '../constants/aiVideoData';
import { AIVideoCard } from '../components/AIVideoCard';

export const AIVideoContentPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const getTransition = (duration: number, delay: number = 0) =>
    shouldReduceMotion ? { duration: 0 } : { duration, delay };

  return (
    <>
      <SEO
        title="AI Video & Visual Content for Brands | Mayaa Solutions"
        description="Explore AI-powered advertising films and visual content for real estate, architecture, interiors, hospitality, fashion, jewellery and product brands."
        keywords="AI video production, AI visual content, commercial films, brand films, architectural visualization, 3D luxury visual content, Mayaa Solutions"
        canonicalUrl="https://mayaasolutions.in/services/ai-video-content"
        ogImage="https://mayaasolutions.in/images/og-image.jpg"
        robots="index, follow"
        schema={[
          getWebPageSchema({
            name: 'AI Video & Visual Content for Brands | Mayaa Solutions',
            description: 'Explore AI-powered advertising films and visual content for real estate, architecture, interiors, hospitality, fashion, jewellery and product brands.',
            urlPath: '/services/ai-video-content',
            breadcrumbUrl: 'https://mayaasolutions.in/services/ai-video-content#breadcrumb',
          }),
          getBreadcrumbSchema(
            [
              { name: 'Home', urlPath: '/' },
              { name: 'Services', urlPath: '/services' },
              { name: 'AI Video & Visual Content', urlPath: '/services/ai-video-content' },
            ],
            'https://mayaasolutions.in/services/ai-video-content#breadcrumb'
          ),
          getServiceSchema(
            'AI Video & Visual Content Creation',
            'AI-powered films and visual content crafted for brands that want to stand apart. High-impact commercial films for architecture, real estate, hospitality, fashion, jewelry, and luxury products.',
            'Visual Production & AI Film Direction',
            '/services/ai-video-content'
          ),
        ]}
      />

      <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden pt-28 sm:pt-36 md:pt-40">

        {/* ==================================================
            SECTION 1: HERO (BOLD, MINIMAL, RESTRAINED)
        ================================================== */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto text-center flex flex-col items-center justify-center pb-20 sm:pb-24 md:pb-28">
          <div className="w-full space-y-6 sm:space-y-8 flex flex-col items-center">

            {/* Minimal Editorial Category Badge */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.5)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>AI Video & Visual Direction</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.6, 0.08)}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] text-center max-w-4xl"
            >
              Visuals That Make Brands Impossible to Ignore.
            </motion.h1>

            {/* Supporting Subheadline */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.6, 0.16)}
              className="text-lg sm:text-xl md:text-2xl text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto text-center"
            >
              AI-powered films and visual content crafted for brands that want to stand apart.
            </motion.p>

            {/* Primary Hero CTA */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.6, 0.24)}
              className="pt-2 flex justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] group"
              >
                <span>Discuss Your Project</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>

          </div>
        </section>

        {/* ==================================================
            SECTION 2: VIDEO PORTFOLIO GRID (SELECTED WORKS - WHITE BACKGROUND)
        ================================================== */}
        <section className="w-full bg-white text-[#171717] border-t border-[#E5E5E2] py-20 sm:py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">

            {/* Portfolio Section Header */}
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-mono font-bold text-[#666666] uppercase tracking-widest block">
                SELECTED WORKS
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight leading-tight">
                Made to Make an Impact.
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#555555] font-normal leading-relaxed">
                Distinct visual stories. Different industries. One clear purpose: making brands stand out.
              </p>
            </div>

            {/* Editorial Grid (Plays strictly inline within cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {AI_VIDEOS.map((video, idx) => (
                <motion.div
                  key={video.id}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={getTransition(0.5, idx * 0.08)}
                >
                  <AIVideoCard
                    video={video}
                    index={idx}
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================================================
            SECTION 3: CLOSING CTA
        ================================================== */}
        <section className="py-20 sm:py-24 md:py-28 bg-black border-t border-neutral-900 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-6 sm:space-y-8 relative z-10">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Have a Brand Worth Showing?
            </h2>

            <p className="text-lg sm:text-xl text-neutral-400 max-w-xl mx-auto font-normal leading-relaxed">
              Let's create visual content that gives it a stronger presence.
            </p>

            <div className="pt-2 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-md group"
              >
                <span>Start a Conversation</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};
