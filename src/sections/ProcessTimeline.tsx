import React from 'react';
import { motion } from 'framer-motion';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'We analyze your business goals, target market, and growth bottlenecks.',
    },
    {
      num: '02',
      title: 'Plan',
      desc: 'We map out a clear strategy for brand positioning, web architecture, and marketing.',
    },
    {
      num: '03',
      title: 'Build',
      desc: 'We execute your visual identity, custom web platform, and digital assets with precision.',
    },
    {
      num: '04',
      title: 'Grow',
      desc: 'We launch, measure performance, and continuously optimize to drive customer acquisition.',
    },
  ];

  return (
    <section className="py-24 bg-studio-950 border-t border-studio-850 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
        
        {/* Centered Heading Area */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-studio-400 uppercase block">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">
            Four Steps to Predictable Growth.
          </h2>
          <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed">
            A structured, transparent approach to turn strategy into execution.
          </p>
        </div>

        {/* 4 Balanced Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-3 hover:border-studio-700 transition-all duration-300 flex flex-col justify-start text-left"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-studio-100 font-mono block">
                {step.num}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-studio-100">{step.title}</h3>
              <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
