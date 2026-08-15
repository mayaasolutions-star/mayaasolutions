import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { SERVICES_DATA } from '../constants/servicesData';
import { Button } from '../components/Button';
import { CheckCircle2, HelpCircle } from 'lucide-react';
import { ContactCTA } from '../sections/ContactCTA';

export const ServiceBrandingPage: React.FC = () => {
  const service = SERVICES_DATA.find((s) => s.id === 'branding') || SERVICES_DATA[0];

  const brandingServices = [
    { title: 'Brand Strategy', desc: 'Create a clear foundation that defines your business positioning, target market, and long-term direction.' },
    { title: 'Visual Identity', desc: 'Design a consistent visual system—colors, typography, and layout—that helps customers recognize and remember your brand.' },
    { title: 'Logo Design', desc: 'Create a distinctive logo mark that reflects your business values and functions seamlessly across all platforms.' },
    { title: 'Brand Messaging', desc: 'Develop clear messaging that communicates who you are, what you do, and why customers should choose you.' },
    { title: 'Brand Guidelines', desc: 'Establish clear standards so your brand stays consistent across websites, social media, collateral, and presentations.' },
  ];

  const processSteps = [
    { step: '01', title: 'Understand', desc: 'We analyze your business goals, target audience, and market landscape.' },
    { step: '02', title: 'Define', desc: 'We clarify your core positioning, value proposition, and messaging strategy.' },
    { step: '03', title: 'Design', desc: 'We build your logo, visual architecture, and brand design assets.' },
    { step: '04', title: 'Apply', desc: 'We deliver complete brand guidelines and assets for consistent rollout.' },
  ];

  const whyMatters = [
    { title: 'Builds Trust', desc: 'A professional brand identity creates instant credibility with new prospects.' },
    { title: 'Creates Recognition', desc: 'Distinct visual elements make your business memorable across all touchpoints.' },
    { title: 'Improves Consistency', desc: 'Unified guidelines ensure your message stays clear across all channels.' },
    { title: 'Supports Marketing', desc: 'Strong branding increases campaign engagement and response rates.' },
    { title: 'Strengthens Customer Recall', desc: 'Clear positioning ensures prospects remember why they chose you.' },
    { title: 'Helps Businesses Stand Out', desc: 'Differentiates your business from competitors in crowded markets.' },
  ];

  const whyChoosePoints = [
    { title: 'Business-First Thinking', desc: 'Every brand decision is tied directly to your commercial objectives.' },
    { title: 'Strategy Before Visuals', desc: 'We define your market positioning before designing visual assets.' },
    { title: 'Consistent Execution', desc: 'We build unified brand standards across digital and print media.' },
    { title: 'Attention to Detail', desc: 'Precise typography, color systems, and logo rules for long-term equity.' },
    { title: 'Designed for Growth', desc: 'Brand architecture built to scale effortlessly as your company expands.' },
    { title: 'Built Around Your Audience', desc: 'Messaging tailored to resonate directly with ready buyers.' },
  ];

  return (
    <>
      <SEO
        title="Brand Strategy, Identity & Positioning | Mayaa Solutions"
        description="Help your business build a clear visual identity, stronger market positioning, and a brand people remember across all customer touchpoints."
      />

      <main className="pt-16 pb-20 bg-studio-950">
        
        {/* Full-Width Image Hero Section (42-50vh Height) */}
        <section className="relative min-h-[46vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-studio-950 text-center border-b border-studio-850 mb-16">
          
          {/* Background Image Anchor */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
            <img
              src="/images/hero-brand-building.jpg"
              alt="Brand Building & Visual Identity"
              className="w-full h-full object-cover filter saturate-100 grayscale"
            />
            <div className="absolute inset-0 bg-studio-950/80" />
          </div>

          {/* Perfectly Centered Content */}
          <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-studio-400 uppercase">
              BRAND BUILDING
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-studio-100 tracking-tight leading-[1.08]">
              Build a Brand <br className="hidden sm:block" />
              <span className="text-studio-100 font-extrabold">People Remember.</span>
            </h1>
            <p className="text-base sm:text-xl text-studio-300 font-medium leading-relaxed max-w-xl mx-auto">
              We help businesses clarify positioning, craft memorable visual identities, and build long-term market authority.
            </p>
            <div className="pt-2 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-studio-100 text-studio-950 font-extrabold text-sm uppercase tracking-wider rounded-full hover:bg-studio-200 transition-all shadow-md"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-studio-900 border-t border-studio-850">
          <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-4 text-center">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-studio-100">Clarity and Consistency Build Trust.</h2>
            <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed">
              A strong brand is more than just a visual logo. It is how your business defines its market positioning, communicates its value, and establishes trust with customers.
            </p>
            <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed">
              We focus on strategic clarity and visual consistency—ensuring your brand looks confident, communicates clearly, and supports your business growth.
            </p>
          </div>
        </section>

        {/* Branding Services */}
        <section className="py-20 bg-studio-950">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-studio-400 uppercase tracking-widest">Core Capabilities</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">Branding Capabilities.</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandingServices.map((bs, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-studio-850 shadow-sm space-y-2">
                  <h3 className="text-base font-bold text-studio-100">{bs.title}</h3>
                  <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">{bs.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-studio-900 border-t border-b border-studio-850">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-studio-400 uppercase tracking-widest">Our Process</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">Four Steps to a Strong Brand.</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((st) => (
                <div key={st.step} className="p-6 bg-white rounded-2xl border border-studio-850 shadow-sm space-y-3">
                  <span className="text-2xl font-extrabold text-studio-100 font-mono">{st.step}</span>
                  <h3 className="text-lg font-bold text-studio-100">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Branding Matters */}
        <section className="py-20 bg-studio-950">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-studio-400 uppercase tracking-widest">Commercial Impact</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">Why Branding Matters.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyMatters.map((wm, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-studio-850 shadow-sm space-y-2">
                  <h3 className="text-base font-bold text-studio-100">{wm.title}</h3>
                  <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">{wm.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Mayaa */}
        <section className="py-20 bg-studio-900 border-t border-b border-studio-850">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-studio-400 uppercase tracking-widest">Why Work With Us</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">Brand Strategy Focused on Growth.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoosePoints.map((pt, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-2">
                  <h3 className="text-base font-bold text-studio-100">{pt.title}</h3>
                  <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">{pt.desc}</p>
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
