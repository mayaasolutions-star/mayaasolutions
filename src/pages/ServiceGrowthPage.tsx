import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ContactCTA } from '../sections/ContactCTA';

export const ServiceGrowthPage: React.FC = () => {
  const capabilities = [
    { title: 'Business Challenges', desc: 'Identify operational bottlenecks, market hurdles, and root causes limiting growth.' },
    { title: 'Digital Opportunities', desc: 'Pinpoint practical technology and digital capabilities that give your business an advantage.' },
    { title: 'Customer Experience', desc: 'Map client touchpoints from first awareness to delivery to remove friction and boost retention.' },
    { title: 'Digital Roadmap', desc: 'Build a prioritized, phased action plan connecting strategic goals to execution milestones.' },
    { title: 'Process Improvement', desc: 'Streamline internal operations, reduce manual administration, and integrate automated workflows.' },
    { title: 'Product Direction', desc: 'Clarify digital product scopes, feature priorities, and architecture before writing code.' },
    { title: 'Growth Opportunities', desc: 'Identify underserved market segments, high-margin offerings, and new acquisition channels.' },
    { title: 'Decision Advisory', desc: 'Provide practical, unbiased counsel on software, technology investments, and vendor selection.' },
  ];

  const approachSteps = [
    { num: '01', title: 'Understand', desc: 'We examine your business model, operational workflows, customer journey, and goals.' },
    { num: '02', title: 'Evaluate', desc: 'We assess performance gaps, identify high-leverage digital opportunities, and review systems.' },
    { num: '03', title: 'Plan', desc: 'We build a clear, actionable roadmap outlining priorities, scopes, and milestones.' },
    { num: '04', title: 'Execute', desc: 'We help roll out the digital solutions, tools, and operational improvements.' },
  ];

  const deliverables = [
    'Business & Digital Opportunity Assessment',
    'Customer Journey & Touchpoint Architecture',
    'Prioritized Digital Roadmap & Milestone Plan',
    'Operational Workflow & Process Blueprint',
    'Digital Product Scoping & Technical Architecture',
    'Direct Executive Strategy & Advisory Sessions',
  ];

  return (
    <>
      <SEO
        title="Business Strategy & Digital Advisory | Mayaa Solutions"
        description="Practical decisions for brand and digital growth. Helping businesses make better brand and digital decisions from requirement to execution."
      />

      <main className="pt-16 pb-20 bg-studio-950">
        
        {/* Hero Section */}
        <section className="relative min-h-[46vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-studio-950 text-center border-b border-studio-850 mb-16">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
            <img
              src="/images/hero-business-growth.jpg"
              alt="Business Strategy & Digital Advisory"
              className="w-full h-full object-cover filter saturate-100 grayscale"
            />
            <div className="absolute inset-0 bg-studio-950/80" />
          </div>

          <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-studio-400 uppercase">
              SERVICE 04 • BUSINESS STRATEGY
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-studio-100 tracking-tight leading-[1.08]">
              Practical decisions for <br className="hidden sm:block" />
              <span className="text-studio-100 font-extrabold">brand & digital growth.</span>
            </h1>
            <p className="text-base sm:text-xl text-studio-300 font-medium leading-relaxed max-w-xl mx-auto">
              Helping businesses make better brand and digital decisions from initial requirement through to execution.
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
                Clear Direction, Without Consultant Jargon.
              </h2>
              <p className="text-base text-studio-300 font-normal leading-relaxed">
                We work alongside business leaders to evaluate opportunities and build realistic digital roadmaps that lead to real execution.
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
                Founders and Teams Navigating Next Steps.
              </h2>
              <p className="text-base text-studio-300 font-normal leading-relaxed">
                Business Strategy is built for founders, business owners, and leadership teams who need clarity before investing in branding, websites, software, or marketing.
              </p>
              <p className="text-sm text-studio-400 font-normal leading-relaxed">
                We advise across industries, including architecture, interior design, hospitality, restaurants, travel, lifestyle, real estate, and modern service enterprises.
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
                Understand &rarr; Evaluate &rarr; Plan &rarr; Execute
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
