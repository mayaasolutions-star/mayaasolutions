import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ContactCTA } from '../sections/ContactCTA';

export const ServiceMarketingPage: React.FC = () => {
  const capabilities = [
    { title: 'Marketing Strategy', desc: 'Build a commercial roadmap aligning acquisition channels, audience targets, and revenue goals.' },
    { title: 'Search Engine Optimization (SEO)', desc: 'Improve search visibility so high-intent customers find your business when looking for solutions.' },
    { title: 'Paid Acquisition', desc: 'Manage targeted search and display advertising campaigns focused on measurable return on investment.' },
    { title: 'Campaign Strategy', desc: 'Design focused promotional and launch campaigns that generate immediate market momentum.' },
    { title: 'Content Strategy', desc: 'Develop editorial and educational content that establishes industry authority and answers customer questions.' },
    { title: 'Lead Generation', desc: 'Engineer conversion-optimized landing pages and inquiry funnels that capture qualified prospects.' },
    { title: 'Digital Growth Planning', desc: 'Prioritize sustainable marketing investments that build compounding customer demand over time.' },
    { title: 'Performance Reporting', desc: 'Transparent tracking of inquiry volume, lead quality, and customer acquisition efficiency.' },
  ];

  const approachSteps = [
    { num: '01', title: 'Understand', desc: 'We evaluate your business goals, target customer profiles, and commercial economics.' },
    { num: '02', title: 'Plan', desc: 'We map out the high-intent channel strategy, search targets, and campaign timeline.' },
    { num: '03', title: 'Execute', desc: 'We launch targeted campaigns, technical SEO improvements, and conversion assets.' },
    { num: '04', title: 'Measure', desc: 'We review verified customer inquiries and optimize budgets for maximum efficiency.' },
  ];

  const deliverables = [
    'Comprehensive Market Acquisition Strategy',
    'Technical & On-Page SEO Architecture',
    'Targeted Campaign Creative & Ad Account Setup',
    'High-Converting Landing Pages & Inquiry Forms',
    'Content Direction & Keyword Targeting Roadmap',
    'Monthly Attribution & Inbound Inquiry Reporting',
  ];

  return (
    <>
      <SEO
        title="Growth Marketing & Strategy | Mayaa Solutions"
        description="Strategic marketing built around the business. Marketing that supports the brand, not marketing for the sake of posting."
      />

      <main className="pt-16 pb-20 bg-studio-950">
        
        {/* Hero Section */}
        <section className="relative min-h-[46vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-studio-950 text-center border-b border-studio-850 mb-16">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
            <img
              src="/images/hero-growth-marketing.jpg"
              alt="Growth Marketing & Customer Acquisition"
              className="w-full h-full object-cover filter saturate-100 grayscale"
            />
            <div className="absolute inset-0 bg-studio-950/80" />
          </div>

          <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-studio-400 uppercase">
              SERVICE 03 • GROWTH MARKETING
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-studio-100 tracking-tight leading-[1.08]">
              Strategic marketing built <br className="hidden sm:block" />
              <span className="text-studio-100 font-extrabold">around the business.</span>
            </h1>
            <p className="text-base sm:text-xl text-studio-300 font-medium leading-relaxed max-w-xl mx-auto">
              Marketing that supports the brand and business—not marketing for the sake of routine posting.
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
                Demand Generation Focused on Qualified Inquiries.
              </h2>
              <p className="text-base text-studio-300 font-normal leading-relaxed">
                We design marketing systems around high-intent channels that attract qualified prospects ready to do business.
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
                Businesses Ready to Drive Predictable Inquiries.
              </h2>
              <p className="text-base text-studio-300 font-normal leading-relaxed">
                Growth Marketing is designed for businesses with a validated service or product looking to build reliable inbound inquiry channels, expand search visibility, and run high-intent campaigns without relying on daily vanity posting.
              </p>
              <p className="text-sm text-studio-400 font-normal leading-relaxed">
                We work across industries, including architecture, interior design, boutique hospitality, premium restaurants, travel, lifestyle, real estate, and B2B services.
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
                Understand &rarr; Plan &rarr; Execute &rarr; Measure
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
