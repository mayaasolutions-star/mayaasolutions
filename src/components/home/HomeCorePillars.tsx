import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Globe, Cpu, CheckCircle2 } from 'lucide-react';

interface Pillar {
  number: string;
  category: string;
  title: string;
  description: string;
  deliverables: string[];
  link: string;
  linkText: string;
  icon: React.ElementType;
}

const PILLARS: Pillar[] = [
  {
    number: '01',
    category: 'Strategic Foundation',
    title: 'Brand Building & Commercial Positioning',
    description:
      'We help businesses define what they stand for, how they communicate value, and how they present themselves across international and domestic markets. More than aesthetic design, we build credibility that commands trust.',
    deliverables: [
      'Strategic Market & Competitor Positioning',
      'Visual Identity Systems & Design Direction',
      'Editorial Narrative & Strategic Messaging',
      'Brand Governance Guidelines & Asset Systems',
    ],
    link: '/brand',
    linkText: 'Explore Brand Building',
    icon: Compass,
  },
  {
    number: '02',
    category: 'Digital Flagship',
    title: 'Websites & Digital Experiences',
    description:
      'Engineered as high-performance commercial assets. We design and build responsive, search-optimized websites that articulate your capability clearly, load instantly, and turn qualified visitors into engaged clients.',
    deliverables: [
      'Custom Responsive Frontend Architecture',
      'International Technical SEO & AEO Readiness',
      'Conversion-Focused User Experience (UX)',
      'Enterprise-Grade Performance, Accessibility & Security',
    ],
    link: '/websites',
    linkText: 'Explore Digital Experiences',
    icon: Globe,
  },
  {
    number: '03',
    category: 'Operations Engine',
    title: 'Personalised Business Management Systems',
    description:
      'Off-the-shelf software forces businesses into generic workflows. We architect custom operational systems configured around how your company actually functions—connecting inquiries, projects, and reporting into one unified platform.',
    deliverables: [
      'Enquiry-to-Fulfilment Workflow Automation',
      'Client, Lead & Account Portfolio Management',
      'Role-Based Operational Access & Security',
      'Custom Executive Analytics & Decision Dashboards',
    ],
    link: '/business-systems',
    linkText: 'Explore Business Systems',
    icon: Cpu,
  },
];

export const HomeCorePillars: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-black text-white border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Three pillars built to help your business grow and scale.
            </h2>
          </div>
          <p className="text-neutral-400 text-base md:text-lg max-w-md font-normal leading-relaxed">
            Rather than juggling fragmented agencies and disconnected software vendors, Mayaa brings brand strategy, digital development, and business operations under one coherent team.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative flex flex-col justify-between p-8 md:p-10 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-900/50"
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group-hover:bg-neutral-800 group-hover:border-neutral-700 transition-all duration-300">
                      <Icon className="w-5 h-5 text-neutral-300 group-hover:text-white" />
                    </div>
                    <span className="text-xs font-mono text-neutral-400 tracking-widest font-semibold">
                      {pillar.number}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                    {pillar.category}
                  </span>

                  <h3 className="text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-8 font-normal">
                    {pillar.description}
                  </p>

                  {/* Deliverables */}
                  <div className="pt-6 border-t border-neutral-900 mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-400 block mb-4">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2.5">
                      {pillar.deliverables.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4">
                  <Link
                    to={pillar.link}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors group/link"
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
