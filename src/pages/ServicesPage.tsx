import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

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
      problem: 'Starting from zero? We build the brand from the ground up.',
      solution: 'Strategy, identity, design, launch & execution.',
      path: '/services/brand-building',
    },
    {
      number: '02',
      title: 'DIGITAL DESIGN',
      problem: 'Your business needs a stronger digital presence.',
      solution: 'We design websites and digital experiences that work.',
      path: '/services/digital-design',
    },
    {
      number: '03',
      title: 'GROWTH',
      problem: 'Your brand is built. Now it needs to be seen.',
      solution: 'We support growth through content, campaigns & marketing.',
      path: '/services/growth',
    },
    {
      number: '04',
      title: 'BUSINESS',
      problem: "Your business is growing. Your systems aren't.",
      solution: 'We build smarter ways to work.',
      path: '/business-tools',
    },
  ];

  return (
    <>
      <SEO
        title="Services | Mayaa Solutions"
        description="What does your business need to build? Explore Mayaa Solutions' core capabilities: Brand Building, Digital Design, Growth, and Business Systems."
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

        </div>
      </main>
    </>
  );
};
