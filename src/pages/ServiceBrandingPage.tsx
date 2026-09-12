import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ContactCTA } from '../sections/ContactCTA';

export const ServiceBrandingPage: React.FC = () => {
  const capabilities = [
    { title: 'Brand Strategy', desc: 'Define your core value proposition, audience dynamics, and commercial direction.' },
    { title: 'Positioning', desc: 'Establish clear market differentiation that commands premium perception.' },
    { title: 'Naming', desc: 'Memorable naming and nomenclature frameworks for new ventures and products.' },
    { title: 'Visual Identity', desc: 'Logomarks, typography systems, and color palettes engineered for lasting recognition.' },
    { title: 'Brand System', desc: 'Modular visual rules, graphic elements, and layout principles across touchpoints.' },
    { title: 'Brand Guidelines', desc: 'Clear standards ensuring consistency across websites, digital assets, and print.' },
    { title: 'Brand Applications', desc: 'Packaging, presentation decks, stationery, and collateral tailored to your operations.' },
    { title: 'Rebranding & Refresh', desc: 'Modernizing established businesses to match their current scale and ambitions.' },
  ];

  const approachSteps = [
    { num: '01', title: 'Understand', desc: 'We analyze your commercial goals, audience expectations, and competitive landscape.' },
    { num: '02', title: 'Plan', desc: 'We clarify your core positioning, messaging framework, and strategic direction.' },
    { num: '03', title: 'Design', desc: 'We craft your logo architecture, typography, color palette, and visual identity system.' },
    { num: '04', title: 'Launch', desc: 'We deliver comprehensive guidelines and production-ready assets for rollout.' },
  ];

  const deliverables = [
    'Brand Strategy & Positioning Document',
    'Primary & Secondary Logo Architecture',
    'Typography Scale & Color Palette Standards',
    'Brand Guidelines Manual (Digital & Print Standards)',
    'Production-Ready Vector & Raster Asset Library',
    'Core Collateral & Presentation Templates',
  ];

  return (
    <>
      <SEO
        title="Brand Building & Strategy | Mayaa Solutions"
        description="Build a brand with a clear position, identity and visual system. A brand is more than a logo."
      />

      <main className="pt-16 pb-20 bg-studio-950">
        
        {/* Hero Section */}
        <section className="relative min-h-[46vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-studio-950 text-center border-b border-studio-850 mb-16">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
            <img
              src="/images/hero-brand-building.jpg"
              alt="Brand Building & Strategy"
              className="w-full h-full object-cover filter saturate-100 grayscale"
            />
            <div className="absolute inset-0 bg-studio-950/80" />
          </div>

          <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-studio-400 uppercase">
              SERVICE 01 • BRAND BUILDING
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-studio-100 tracking-tight leading-[1.08]">
              A brand is more <br className="hidden sm:block" />
              <span className="text-studio-100 font-extrabold">than a logo.</span>
            </h1>
            <p className="text-base sm:text-xl text-studio-300 font-medium leading-relaxed max-w-xl mx-auto">
              Build a brand with a clear position, identity, and visual system designed for lasting market recognition.
            </p>
            <div className="pt-2 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-studio-100 text-studio-950 font-extrabold text-sm uppercase tracking-wider rounded-full hover:bg-studio-200 transition-all shadow-md"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 bg-studio-950">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-studio-400">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-studio-100 tracking-tight">
                Complete Brand Systems, Built to Last.
              </h2>
              <p className="text-base text-studio-300 font-normal leading-relaxed">
                We design comprehensive identity systems that align strategic positioning with visual execution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((item, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-studio-850 shadow-sm space-y-2">
                  <h3 className="text-base font-bold text-studio-100">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It Is For */}
        <section className="py-20 bg-studio-900 border-t border-b border-studio-850">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-studio-850 shadow-sm space-y-4 max-w-4xl mx-auto text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-studio-400">
                Who It Is For
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-studio-100 tracking-tight">
                Businesses Building Long-Term Market Value.
              </h2>
              <p className="text-base text-studio-300 font-normal leading-relaxed">
                Brand Building is designed for founders, growing businesses, and established practices that want to establish credible positioning and elevate how they are perceived by clients and partners.
              </p>
              <p className="text-sm text-studio-400 font-normal leading-relaxed">
                We work across industries. Spaces we frequently build for include architecture, interior design, hospitality, restaurants, travel, fashion, real estate, and premium professional services.
              </p>
            </div>
          </div>
        </section>

        {/* How We Approach It */}
        <section className="py-20 bg-studio-950">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-studio-400">
                How We Approach It
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-studio-100 tracking-tight">
                Understand &rarr; Plan &rarr; Design &rarr; Launch
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {approachSteps.map((step) => (
                <div key={step.num} className="p-6 bg-white rounded-2xl border border-studio-850 shadow-sm space-y-3">
                  <span className="text-2xl font-extrabold text-studio-100 font-mono">{step.num}</span>
                  <h3 className="text-lg font-bold text-studio-100">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 bg-studio-900 border-t border-b border-studio-850">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-studio-400">
                What You Receive
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-studio-100 tracking-tight">
                Deliverables.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((item, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-studio-850 shadow-sm flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-studio-100 shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-studio-100 leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <ContactCTA />

      </main>
    </>
  );
};
