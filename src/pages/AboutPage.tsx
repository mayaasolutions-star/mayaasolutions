import React from 'react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { CheckCircle2 } from 'lucide-react';
import { ContactCTA } from '../sections/ContactCTA';

export const AboutPage: React.FC = () => {
  const differentiators = [
    { title: 'Business-first thinking', desc: 'Every strategy, design, and line of code connects directly to commercial goals.' },
    { title: 'Strategy before execution', desc: 'We diagnose business bottlenecks before designing or building anything.' },
    { title: 'Design with purpose', desc: 'Every visual element is built for clarity and user conversion, avoiding clutter.' },
    { title: 'Growth mindset', desc: 'We construct scalable strategies and web platforms designed for long-term expansion.' },
    { title: 'Marketing backed by data', desc: 'We run search engine optimization and campaigns built on lead performance.' },
    { title: 'Attention to detail', desc: 'We maintain consistent quality standards across every brand and digital touchpoint.' },
  ];

  const processSteps = [
    { step: '01', title: 'Understand', desc: 'We analyze your business goals, target audience, and current growth obstacles.' },
    { step: '02', title: 'Plan', desc: 'We define your brand positioning, web architecture, and strategic roadmap.' },
    { step: '03', title: 'Create', desc: 'We build your brand identity, custom web platform, and digital assets.' },
    { step: '04', title: 'Improve', desc: 'We measure real-world performance and continuously optimize for ongoing growth.' },
  ];

  const credentials = [
    'Brand Identity Architecture',
    'Business Growth Advisory',
    'Modern Web Engineering (React)',
    'UI/UX Design Systems',
    'Search & Growth Marketing Strategy'
  ];

  return (
    <>
      <SEO
        title="About Mayaa Solutions | Business & Growth Strategy"
        description="Learn how Mayaa Solutions combines brand building, website design, growth marketing, and business strategy to scale companies."
      />

      <main className="pt-16 pb-20 bg-studio-950">
        
        {/* Editorial Asymmetric Hero Section */}
        <section className="relative min-h-[55vh] flex items-center pt-24 pb-16 overflow-hidden bg-studio-950 text-left border-b border-studio-850 mb-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Content Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-studio-100 inline-block" />
                  <span className="text-xs font-extrabold text-studio-100 uppercase tracking-widest">
                    About Mayaa Solutions
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.08]">
                  Built for Real <br className="hidden sm:block" />
                  <span className="text-[#171717] font-extrabold">Commercial Impact.</span>
                </h1>

                <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed max-w-xl">
                  We partner with businesses to build stronger brand positioning, custom web platforms, and sustainable growth engines.
                </p>
              </div>

              {/* Right Media Frame */}
              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden border border-studio-850 shadow-xl h-[340px] sm:h-[420px] bg-studio-900 group">
                  <img
                    src="/images/about-story.webp"
                    alt="Mayaa Solutions Studio Workspace"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-studio-850 shadow-sm space-y-4 text-center flex flex-col items-center justify-center">
            <span className="text-xs font-extrabold text-studio-400 uppercase tracking-widest">Who We Are</span>
            <p className="text-xl sm:text-2xl text-studio-100 font-medium leading-relaxed max-w-4xl mx-auto">
              We are strategic consultants and builders who partner with businesses to clarify positioning, engineer custom web platforms, and execute growth systems.
            </p>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 bg-studio-900 border-t border-b border-studio-850">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-2xl mx-auto text-center space-y-2">
              <span className="text-xs sm:text-sm font-extrabold text-studio-400 uppercase tracking-widest">Our Principles</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">What Makes Us Different.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((diff, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-2">
                  <h3 className="text-lg font-bold text-studio-100">{diff.title}</h3>
                  <p className="text-sm text-studio-300 font-normal leading-relaxed">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 bg-studio-950">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-2xl mx-auto text-center space-y-2">
              <span className="text-xs sm:text-sm font-extrabold text-studio-400 uppercase tracking-widest">Working Approach</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">How We Work.</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="p-6 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-3">
                  <span className="text-2xl font-extrabold text-studio-100 font-mono">{step.step}</span>
                  <h3 className="text-xl font-bold text-studio-100">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Experience Section */}
        <section className="py-20 bg-studio-900 border-t border-studio-850">
          <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-8">
            <div className="text-center space-y-4">
              <span className="text-xs sm:text-sm font-extrabold text-studio-400 uppercase tracking-widest">Experience</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">
                Experience Built on Commercial Results.
              </h2>
              <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed max-w-3xl mx-auto">
                Led by senior consultants with deep expertise across business strategy, brand architecture, web engineering, and growth marketing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {credentials.map((cert, idx) => (
                <div key={idx} className="p-3.5 bg-white rounded-xl border border-studio-850 flex items-center gap-2.5 text-xs sm:text-sm text-studio-100 font-semibold shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-studio-100 shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />

      </main>
    </>
  );
};
