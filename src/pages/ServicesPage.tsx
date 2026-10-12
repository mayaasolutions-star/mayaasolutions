import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, ShieldCheck, Compass, Users } from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface ServiceRow {
  title: string;
  question: string;
  path: string;
}

interface TrustPillar {
  title: React.ReactNode;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const ServicesPage: React.FC = () => {

  const services: ServiceRow[] = [
    {
      title: 'BRAND BUILDING',
      question: 'Need authoritative market positioning that commands trust?',
      path: '/brand',
    },
    {
      title: 'WEBSITES & DIGITAL EXPERIENCES',
      question: 'Need a professional website that turns visitors into opportunities?',
      path: '/websites',
    },
    {
      title: 'AI VIDEO CONTENT',
      question: 'Need premium video content that makes your brand stand out?',
      path: '/services/ai-video-content',
    },
    {
      title: 'BUSINESS MANAGEMENT SYSTEMS',
      question: 'Need one connected system to manage leads, tasks, teams, and workflows?',
      path: '/business-systems',
    },
    {
      title: 'GROWTH & MARKETING',
      question: 'Need a clearer direction for marketing and business growth?',
      path: '/services/growth',
    },
  ];

  const trustPillars: TrustPillar[] = [
    {
      title: 'Built Around Your Business',
      desc: 'Solutions shaped around real business needs and workflows.',
      icon: Compass,
    },
    {
      title: 'Connected Thinking',
      desc: 'Brand, digital experience, and business systems considered together where relevant.',
      icon: Layers,
    },
    {
      title: (
        <>
          Practical <br />
          Execution
        </>
      ),
      desc: 'Clear priorities and purposeful implementation.',
      icon: ShieldCheck,
    },
    {
      title: 'A Direct Working Relationship',
      desc: 'A clear, collaborative process from requirements to delivery.',
      icon: Users,
    },
  ];

  return (
    <>
      <SEO
        title="Services | Brand Building, Websites & Business Systems | Mayaa Solutions"
        description="What does your business need to build? Explore Mayaa Solutions' core capabilities: Brand Building, Websites & Digital Experiences, Custom Business Management Tools, and Growth Marketing."
        canonicalUrl="https://mayaasolutions.in/services"
        schema={[
          getBreadcrumbSchema([
            { name: 'Home', urlPath: '/' },
            { name: 'Services', urlPath: '/services' },
          ]),
        ]}
      />

      <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-20 md:pb-28">
        
        {/* ==================================================
            1. HERO & SIMPLIFIED SERVICE ROWS
        ================================================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
          <div className="mb-14 sm:mb-16 md:mb-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] sm:leading-[1.08] max-w-4xl lg:max-w-5xl mx-auto text-center"
            >
              What does your business <br className="hidden sm:inline" />
              need to build?
            </motion.h1>
          </div>

          {/* SIMPLIFIED 3-ELEMENT SERVICE ROWS TABLE */}
          <div className="border-b border-neutral-900 mb-20 md:mb-28 w-full">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="w-full"
              >
                <Link
                  to={service.path}
                  className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-8 py-7 md:py-8 border-t border-neutral-900 group hover:border-neutral-700 transition-colors duration-300 w-full"
                >
                  {/* 1. Service Title */}
                  <div className="lg:w-[32%] xl:w-[30%] shrink-0 min-w-0">
                    <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-wider uppercase group-hover:text-neutral-200 transition-colors block">
                      {service.title}
                    </span>
                  </div>

                  {/* 2. One Short Meaningful Question */}
                  <div className="lg:flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-[#A0A0A0] font-normal leading-relaxed">
                      {service.question}
                    </p>
                  </div>

                  {/* 3. Clear CTA Link with Arrow */}
                  <div className="shrink-0 flex items-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors duration-300 pt-1 lg:pt-0">
                    <span>Explore Service</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ==================================================
            2. WHY WORK WITH MAYAA SOLUTIONS? (WHITE SECTION)
        ================================================== */}
        <section className="w-full bg-white text-[#171717] py-20 md:py-28 px-6 md:px-12 border-t border-[#E5E5E2]">
          <div className="max-w-7xl mx-auto">
            
            {/* Centered Heading and Intro */}
            <div className="max-w-3xl mb-14 md:mb-16 text-center mx-auto space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#666666] block font-bold">
                Why Work With Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
                Why Work with Mayaa Solutions?
              </h2>
              <p className="text-[#555555] text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                We focus on practical business value, transparent execution, and enduring client partnerships.
              </p>
            </div>

            {/* 4 Trust Cards in One Row on Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="p-7 rounded-2xl bg-[#FAFAF9] border border-[#E5E5E2] hover:border-[#171717]/30 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-2xs hover:shadow-xs"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#E5E5E2] flex items-center justify-center text-[#171717] shadow-2xs">
                      <Icon className="w-5 h-5 text-[#171717]" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-extrabold text-[#171717] tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ==================================================
            3. CLOSING NEXT STEP CTA
        ================================================== */}
        <section className="py-20 md:py-28 px-6 md:px-12 max-w-4xl mx-auto text-center border-t border-neutral-900">
          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A0A0A0] block">
              Get Started
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Let's Build What Your Business Needs Next.
            </h2>

            <p className="text-base sm:text-lg text-[#A0A0A0] max-w-2xl mx-auto font-normal leading-relaxed">
              Tell us about your business, your challenges, and what you want to achieve. We'll explore the right solution together.
            </p>

            <div className="pt-4 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-all duration-300 shadow-md group"
              >
                <span>Start a Project</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};
