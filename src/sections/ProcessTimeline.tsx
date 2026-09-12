import React from 'react';
import { motion } from 'framer-motion';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Requirement',
      desc: 'Understanding business objectives, operational needs, and commercial scope.',
    },
    {
      num: '02',
      title: 'Strategy',
      desc: 'Defining brand positioning, user pathways, technical architecture, and milestones.',
    },
    {
      num: '03',
      title: 'Design',
      desc: 'Crafting distinctive brand systems, intuitive UI/UX, and digital prototypes.',
    },
    {
      num: '04',
      title: 'Build',
      desc: 'Clean engineering of websites, digital products, and automated workflows.',
    },
    {
      num: '05',
      title: 'Launch',
      desc: 'Rigorous testing, quality deployment, and ongoing strategic refinement.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-studio-950 border-t border-studio-850 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-10">
        
        {/* Centered Heading Area */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-studio-400 uppercase block">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">
            How We Work.
          </h2>
          <p className="text-sm sm:text-base text-studio-300 font-medium tracking-wide">
            Requirement &rarr; Strategy &rarr; Design &rarr; Build &rarr; Launch
          </p>
        </div>

        {/* 5 Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-3 hover:border-studio-700 transition-all duration-300 flex flex-col justify-start text-left"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-studio-100 font-mono block">
                {step.num}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-studio-100">{step.title}</h3>
              <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
