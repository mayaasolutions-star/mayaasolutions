import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ContactCTA } from '../sections/ContactCTA';

export const ServiceWebsitePage: React.FC = () => {
  const capabilities = [
    { title: 'Website Strategy', desc: 'Define site objectives, audience pathways, and clear conversion goals.' },
    { title: 'Information Architecture', desc: 'Organize page hierarchy, navigation flows, and intuitive content structure.' },
    { title: 'UX/UI Design', desc: 'Design clean, responsive interfaces that reflect brand character and engage users.' },
    { title: 'Custom Development', desc: 'Modern, high-speed engineering with clean code and no bloated themes.' },
    { title: 'CMS Setup', desc: 'Intuitive content management allowing your team to update text and media effortlessly.' },
    { title: 'System Integrations', desc: 'Connect payment gateways, CRMs, booking engines, and essential operational APIs.' },
    { title: 'SEO & Performance', desc: 'Built-in search engine structure, mobile responsiveness, and high speed scores.' },
    { title: 'Deployment & Launch', desc: 'Cross-browser testing, domain configuration, security verification, and smooth rollout.' },
  ];

  const approachSteps = [
    { num: '01', title: 'Understand', desc: 'We examine your business requirements, customer journeys, and commercial goals.' },
    { num: '02', title: 'Plan', desc: 'We map the site architecture, wireframes, content hierarchy, and technical stack.' },
    { num: '03', title: 'Design', desc: 'We craft high-fidelity UI designs and interactive prototypes for desktop and mobile.' },
    { num: '04', title: 'Build', desc: 'We develop clean, fast, and responsive code with simple content management.' },
    { num: '05', title: 'Launch', desc: 'We test performance across devices, secure the platform, and deploy with care.' },
  ];

  const deliverables = [
    'Site Architecture & User Journey Documentation',
    'Custom UI/UX Wireframes & Component Design System',
    'Production-Ready, Responsive Web Application',
    'CMS Configuration & Content Upload',
    'Third-Party Integrations (Forms, CRM, Payments, Analytics)',
    'Pre-Launch Quality Assurance & Speed Optimization',
  ];

  return (
    <>
      <SEO
        title="Website Design & Development | Mayaa Solutions"
        description="Build a website that represents the business properly and gives customers a better digital experience. From requirement to launch."
      />

      <main className="pt-16 pb-20 bg-studio-950">
        
        {/* Hero Section */}
        <section className="relative min-h-[46vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-studio-950 text-center border-b border-studio-850 mb-16">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
            <img
              src="/images/hero-website-design.jpg"
              alt="Website Design & Development"
              className="w-full h-full object-cover filter saturate-100 grayscale"
            />
            <div className="absolute inset-0 bg-studio-950/80" />
          </div>

          <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-studio-400 uppercase">
              SERVICE 02 • WEBSITES & DIGITAL EXPERIENCE
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-studio-100 tracking-tight leading-[1.08]">
              Complete digital experiences <br className="hidden sm:block" />
              <span className="text-studio-100 font-extrabold">built to perform.</span>
            </h1>
            <p className="text-base sm:text-xl text-studio-300 font-medium leading-relaxed max-w-xl mx-auto">
              Build a website that represents your business properly, gives customers a better digital experience, and turns visitors into clients.
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
                From Requirement Through Launch.
              </h2>
              <p className="text-base text-studio-300 font-normal leading-relaxed">
                We handle the entire website lifecycle—integrating strategic thinking, bespoke design, and modern engineering.
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
                Businesses That Need a Serious Digital Presence.
              </h2>
              <p className="text-base text-studio-300 font-normal leading-relaxed">
                Website Design & Development is built for businesses whose website is a critical commercial asset—founders launching new ventures, established companies outgrowing template builders, and practices requiring a refined digital flagship.
              </p>
              <p className="text-sm text-studio-400 font-normal leading-relaxed">
                We design across industries, including architecture, interior design, hospitality, restaurants, travel, fashion, real estate, and professional consultancies.
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
                Understand &rarr; Plan &rarr; Design &rarr; Build &rarr; Launch
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {approachSteps.map((step) => (
                <div key={step.num} className="p-6 bg-white rounded-2xl border border-studio-850 shadow-sm space-y-3">
                  <span className="text-2xl font-extrabold text-studio-100 font-mono">{step.num}</span>
                  <h3 className="text-base font-bold text-studio-100">{step.title}</h3>
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
