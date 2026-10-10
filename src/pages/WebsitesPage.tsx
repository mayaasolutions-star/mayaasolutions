import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema, getServiceSchema } from '../utils/seoMetadata';
import { WEBSITES_DATA, WebsiteProject } from '../constants/websitesData';
import { WebsitePreviewCard } from '../components/WebsitePreviewCard';
import { WebsiteModal } from '../components/WebsiteModal';

export const WebsitesPage: React.FC = () => {
  const [selectedModalProject, setSelectedModalProject] = useState<WebsiteProject | null>(null);

  return (
    <>
      <SEO
        title="Websites & Digital Experiences | Mayaa Solutions"
        description="Websites built for businesses that mean business. Explore business websites, product experiences, and custom web solutions designed around your goals."
        canonicalUrl="https://mayaasolutions.in/websites"
        schema={[
          getBreadcrumbSchema([
            { name: 'Home', urlPath: '/' },
            { name: 'Services', urlPath: '/services' },
            { name: 'Websites', urlPath: '/websites' },
          ]),
          getServiceSchema(
            'Website Design & Development',
            'Websites built for businesses that mean business. From brand presence to digital experiences, we build websites that make businesses look credible, work better, and move forward.',
            'Website Development',
            '/websites'
          ),
        ]}
      />

      <main className="min-h-screen bg-studio-950 text-studio-100 selection:bg-studio-100 selection:text-white font-sans antialiased overflow-x-hidden pt-20 sm:pt-24 md:pt-24 pb-16 md:pb-24">
        {/* 1. CENTERED COMPACT HERO SECTION */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-5">
            {/* Headline wrapped intentionally into 3 lines */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[28px] leading-[1.15] sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.1] font-black text-studio-100 tracking-tight max-w-2xl mx-auto"
            >
              Websites built <br />
              for businesses that <br />
              mean business.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-sm sm:text-base md:text-lg text-studio-400 font-normal leading-relaxed max-w-[640px] mx-auto pt-1"
            >
              From brand presence to digital experiences, we build websites that make businesses look credible, work better and move forward.
            </motion.p>
          </div>
        </section>

        {/* 2. 2-COLUMN WEBSITE SHOWCASE GRID */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {WEBSITES_DATA.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="w-full"
              >
                <WebsitePreviewCard
                  project={project}
                  onOpenModal={(proj) => setSelectedModalProject(proj)}
                  index={idx}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. SECTION: WHAT MAKES A BUSINESS WEBSITE EFFECTIVE? (SOLID BLACK BACKGROUND) */}
        <section className="mt-20 sm:mt-24 md:mt-28 py-20 sm:py-24 md:py-28 px-6 md:px-12 bg-black text-white border-t border-b border-neutral-900 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-12 sm:mb-14">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block font-semibold">
                MORE THAN A DIGITAL PRESENCE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Your Website Should Do More Than Look Good.
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-neutral-400 font-normal leading-relaxed pt-1">
                A professional website should explain what you offer, build confidence, and make it easy for potential customers to take the next step. We design websites around your business goals, audience, and customer journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="p-7 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.4)] space-y-3">
                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  Clear Communication
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                  Help visitors quickly understand your business, services, and value.
                </p>
              </div>

              <div className="p-7 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.4)] space-y-3">
                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  Built for Your Audience
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                  Create useful, responsive experiences across desktop and mobile.
                </p>
              </div>

              <div className="p-7 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.4)] space-y-3">
                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  Designed for Action
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                  Make it easier for visitors to explore your offering and contact your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECTION: WEBSITE SERVICES */}
        <section className="mt-20 sm:mt-24 md:mt-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-12 sm:mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-studio-400 block font-semibold">
              WHAT WE BUILD
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-studio-100 tracking-tight leading-tight">
              Websites Designed Around Your Business.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-studio-400 font-normal leading-relaxed pt-1">
              From establishing your digital presence to presenting a more complex business offering, we build websites around your requirements, audience, and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="p-7 rounded-2xl bg-white border border-studio-850 shadow-[0_4px_20px_rgba(23,23,23,0.02)] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-extrabold text-studio-100 tracking-tight">
                  Business Websites
                </h3>
                <p className="text-xs sm:text-sm text-studio-400 leading-relaxed font-normal">
                  Professional websites that communicate your business clearly.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-studio-850 shadow-[0_4px_20px_rgba(23,23,23,0.02)] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-extrabold text-studio-100 tracking-tight">
                  Product and Service Websites
                </h3>
                <p className="text-xs sm:text-sm text-studio-400 leading-relaxed font-normal">
                  Structured experiences that explain your offering and guide potential customers.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-studio-850 shadow-[0_4px_20px_rgba(23,23,23,0.02)] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-extrabold text-studio-100 tracking-tight">
                  E-commerce Websites
                </h3>
                <p className="text-xs sm:text-sm text-studio-400 leading-relaxed font-normal">
                  Online shopping experiences designed around product discovery and customer convenience.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-studio-850 shadow-[0_4px_20px_rgba(23,23,23,0.02)] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-extrabold text-studio-100 tracking-tight">
                  Custom Website Experiences
                </h3>
                <p className="text-xs sm:text-sm text-studio-400 leading-relaxed font-normal">
                  Purpose-built website functionality for specific business requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SECTION: OUR APPROACH */}
        <section className="mt-20 sm:mt-24 md:mt-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-12 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-studio-100 tracking-tight leading-tight">
              Thoughtful Planning. Purposeful Execution.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-studio-400 font-normal leading-relaxed pt-1">
              We start by understanding your business, audience, and objectives. From structure and content to design and development, each decision is guided by what your website needs to communicate and accomplish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-studio-850 shadow-[0_4px_20px_rgba(23,23,23,0.02)] space-y-3">
              <div className="text-xs font-mono font-bold text-studio-400 uppercase tracking-widest">
                Step 01
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-studio-100 tracking-tight">
                Understand
              </h3>
              <p className="text-xs sm:text-sm text-studio-400 leading-relaxed font-normal">
                Clarify your goals, audience, and requirements.
              </p>
            </div>

            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-studio-850 shadow-[0_4px_20px_rgba(23,23,23,0.02)] space-y-3">
              <div className="text-xs font-mono font-bold text-studio-400 uppercase tracking-widest">
                Step 02
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-studio-100 tracking-tight">
                Design and Build
              </h3>
              <p className="text-xs sm:text-sm text-studio-400 leading-relaxed font-normal">
                Create the website experience around the agreed scope.
              </p>
            </div>

            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-studio-850 shadow-[0_4px_20px_rgba(23,23,23,0.02)] space-y-3">
              <div className="text-xs font-mono font-bold text-studio-400 uppercase tracking-widest">
                Step 03
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-studio-100 tracking-tight">
                Refine
              </h3>
              <p className="text-xs sm:text-sm text-studio-400 leading-relaxed font-normal">
                Review the experience and make improvements before delivery.
              </p>
            </div>
          </div>
        </section>

        {/* 6. REFINED BOTTOM CTA (SOLID BLACK BACKGROUND) */}
        <section className="mt-20 sm:mt-28 md:mt-32 pt-16 pb-16 sm:py-20 bg-black text-white border-t border-neutral-900 w-full">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-12 text-center space-y-5 sm:space-y-6">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight break-words">
              Have a business that needs a better digital experience?
            </h2>

            <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto font-normal leading-relaxed">
              Let's build a website that looks right, works right and supports the way your business grows.
            </p>

            <div className="pt-2 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black hover:bg-neutral-200 font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all shadow-md group"
              >
                <span>Start a Conversation</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* INTERACTIVE FULLSCREEN MODAL OVERLAY */}
      <WebsiteModal
        project={selectedModalProject}
        onClose={() => setSelectedModalProject(null)}
      />
    </>
  );
};
