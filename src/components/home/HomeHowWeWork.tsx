import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Commercial Diagnosis & Discovery',
    description:
      'We begin by understanding how your business generates revenue, where operational handoffs break down, and how clients perceive your brand. We audit existing software, competitor positioning, and customer journeys to define high-impact objectives.',
    deliverable: 'Diagnostic audit report & strategic engagement scope',
  },
  {
    step: '02',
    title: 'Architecture, Systems & Design Blueprint',
    description:
      'Before writing code or rendering final graphics, we architect the solution. For brands, this means positioning principles and visual direction. For software, this means entity-relationship models, workflow schematics, and UX wireframes.',
    deliverable: 'Information architecture, wireframes & design system',
  },
  {
    step: '03',
    title: 'Engineering & Iterative Delivery',
    description:
      'We build in structured milestones with clear visibility. You interact directly with the strategists and engineers executing your work: reviewing staging environments, testing operational modules, and refining details in real time.',
    deliverable: 'Production codebase, staging environments & live testing',
  },
  {
    step: '04',
    title: 'Deployment, Training & Evolution',
    description:
      'We don’t just deploy and disappear. We assist with data migration, team training, and launch coordination. Complete source code, IP rights, and operational documentation belong to your business from day one.',
    deliverable: 'Full deployment, complete IP handover & training sessions',
  },
];

const PRINCIPLES = [
  {
    title: 'Direct Senior Access',
    desc: 'You work directly with engineers and designers, not junior account managers.',
  },
  {
    title: 'Transparent Milestones',
    desc: 'Clear scope boundaries, transparent deliverables, and predictable timelines.',
  },
  {
    title: '100% IP Ownership',
    desc: 'Your brand assets, code, and operational data remain fully owned by your company.',
  },
];

export const HomeHowWeWork: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-black text-white border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20 text-center mx-auto">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
            Engagement Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            A disciplined, structured process built around commercial clarity.
          </h2>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
            We eliminate ambiguity. Every engagement follows a transparent progression from commercial analysis through to production deployment, ensuring your team stays informed and aligned at every stage.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STEPS.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-black text-neutral-600 font-mono block mb-4">
                  {s.step}
                </span>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 font-normal">
                  {s.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-900">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  Deliverable
                </span>
                <span className="text-xs text-neutral-300 font-medium leading-snug">
                  {s.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Operating Principles Strip */}
        <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800/80 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRINCIPLES.map((p, idx) => (
            <div key={idx} className="flex items-start gap-3.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-white mb-1">{p.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
