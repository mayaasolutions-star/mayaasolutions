import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface ServiceRow {
  number: string;
  title: string;
  problem: string;
  solution: string;
  path: string;
}

export const ServicesPage: React.FC = () => {
  const services: ServiceRow[] = [
    {
      number: '01',
      title: 'BRAND BUILDING',
      problem: 'Need authoritative market positioning that commands trust?',
      solution: 'Brand strategy, visual identity architecture, and rollout systems.',
      path: '/brand',
    },
    {
      number: '02',
      title: 'WEBSITES & DIGITAL EXPERIENCES',
      problem: 'Your business needs a digital headquarters that converts.',
      solution: 'High-performance React websites with sub-second speeds.',
      path: '/websites',
    },
    {
      number: '03',
      title: 'BUSINESS MANAGEMENT SYSTEMS',
      problem: "Your business is scaling, but spreadsheets are slowing you down.",
      solution: 'Custom operational software, CRM, and team workflows.',
      path: '/business-systems',
    },
    {
      number: '04',
      title: 'COMMERCIAL GROWTH & MARKETING',
      problem: 'Your brand and systems are built. Now demand must scale.',
      solution: 'High-intent search acquisition, positioning advisory, and conversion funnels.',
      path: '/services/growth',
    },
  ];

  return (
    <>
      <SEO
        title="Services | Mayaa Solutions"
        description="What does your business need to build? Explore Mayaa Solutions' core capabilities: Brand Building, Digital Design, Growth, and Business Systems."
        canonicalUrl="https://mayaasolutions.in/services"
        schema={[
          getBreadcrumbSchema([
            { name: 'Home', urlPath: '/' },
            { name: 'Services', urlPath: '/services' },
          ]),
        ]}
      />
      <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Header Section (Centered 2-line headline) */}
          <div className="mb-10 md:mb-14 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl lg:max-w-5xl mx-auto text-center"
            >
              What does your business <br className="hidden sm:inline" />
              need to build?
            </motion.h1>
          </div>

          {/* Service Rows (Exact 7% | 25% | 30% | 30% | 8% desktop column grid) */}
          <div className="border-b border-neutral-900">
            {services.map((service, idx) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link
                  to={service.path}
                  className="grid grid-cols-1 md:grid-cols-[7%_25%_30%_30%_8%] gap-4 md:gap-0 items-center py-7 md:py-8 border-t border-neutral-900 min-h-[120px] md:min-h-[140px] group hover:border-neutral-700 transition-colors duration-300 block"
                >
                  {/* 7% - Number */}
                  <div className="text-xs font-mono text-[#A0A0A0] tracking-wider">
                    {service.number}
                  </div>

                  {/* 25% - Service Name */}
                  <div className="text-lg sm:text-xl font-extrabold text-white tracking-wider uppercase md:pr-4">
                    {service.title}
                  </div>

                  {/* 30% - Problem / Need */}
                  <div className="text-sm sm:text-base text-[#A0A0A0] font-normal leading-relaxed md:pr-6">
                    {service.problem}
                  </div>

                  {/* 30% - Solution */}
                  <div className="text-sm sm:text-base text-white font-medium leading-relaxed md:pr-4">
                    {service.solution}
                  </div>

                  {/* 8% - Arrow */}
                  <div className="flex justify-end text-xl text-neutral-500 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                    →
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom Conversion & Work Exploration Section */}
          <div className="pt-16 pb-12 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-neutral-900 mt-12">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A0A0A0]">
                Proof & Action
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                See what these capabilities look like in practice.
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/our-work"
                className="px-7 py-3.5 bg-neutral-900 border border-neutral-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all inline-flex items-center gap-2"
              >
                <span>View Selected Work</span> →
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3.5 bg-white text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-all inline-flex items-center gap-2"
              >
                <span>Start a Project</span> →
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};
