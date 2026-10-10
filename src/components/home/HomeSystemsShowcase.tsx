import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Workflow, Layers, ShieldCheck, BarChart3, Database } from 'lucide-react';

const WORKFLOW_STEPS = [
  { label: 'Enquiries', desc: 'Inbound capture & qualification' },
  { label: 'Leads', desc: 'Pipeline velocity & scoring' },
  { label: 'Clients', desc: 'Centralized account records' },
  { label: 'Projects', desc: 'Resource & milestone delivery' },
  { label: 'Operations', desc: 'Executive reporting & metrics' },
];

const ARCHITECTURAL_PRINCIPLES = [
  {
    icon: Workflow,
    title: 'Process-First Architecture',
    description: 'We map how your team actually works before writing code, ensuring the software supports your operational reality rather than forcing rigid conventions.',
  },
  {
    icon: Database,
    title: 'Unified Operational Data',
    description: 'Eliminate disconnected spreadsheets, fragmented SaaS logins, and repetitive data entry with a centralized, secure single source of truth.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Executive Visibility',
    description: 'Give leadership immediate clarity into active projects, billing milestones, client communications, and team resource allocation without asking for manual updates.',
  },
  {
    icon: ShieldCheck,
    title: 'Role-Based Access Governance',
    description: 'Ensure administrators, project leads, operational staff, and external partners only see the data and actions necessary for their specific roles.',
  },
];

export const HomeSystemsShowcase: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-neutral-950 text-white border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
            Operational Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Replace fragmented SaaS tools with an operating system tailored to how you run.
          </h2>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
            Standard software often creates operational friction: monthly subscription bloat, data silos, and complex interfaces your team struggles to adopt. Mayaa builds Personalised Business Management Systems (BMS) that unite your entire customer and project lifecycle.
          </p>
        </div>

        {/* Workflow Diagram Banner */}
        <div className="mb-16 p-8 rounded-2xl bg-black border border-neutral-800">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-6 flex items-center gap-2">
            <Layers className="w-4 h-4 text-white" />
            <span>Integrated Workflow Pipeline</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="relative p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 font-bold tracking-widest block mb-1">
                    STEP 0{idx + 1}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-1.5">{step.label}</h4>
                  <p className="text-xs text-neutral-400">{step.desc}</p>
                </div>
                {idx < WORKFLOW_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-neutral-600 font-mono text-xs">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive / Video Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Video Container (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 p-2 sm:p-2.5 shadow-2xl group">
              <div
                className="relative rounded-xl overflow-hidden bg-black border border-neutral-900 w-full"
                style={{ aspectRatio: '1920 / 920' }}
              >
                <video
                  src="/images/BMS - Tool.mp4"
                  poster="/images/service_business_growth.webp"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-neutral-400 pointer-events-none">
                  <span className="px-2.5 py-1 rounded bg-black/85 backdrop-blur border border-neutral-800 text-neutral-200">
                    Mayaa BMS · Workflow Architecture Demo
                  </span>
                  <span className="hidden sm:inline text-neutral-400">
                    Custom Engineering · Zero Licensing Bloat
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Architectural Principles (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            {ARCHITECTURAL_PRINCIPLES.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 mt-1">
                    <Icon className="w-5 h-5 text-neutral-300" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 tracking-tight">
                      {principle.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="pt-4">
              <Link
                to="/business-systems"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-neutral-700 transition-all group"
              >
                <span>Learn How Business Systems Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
