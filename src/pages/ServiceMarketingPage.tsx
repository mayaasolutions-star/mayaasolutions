import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { SERVICES_DATA } from '../constants/servicesData';
import { Button } from '../components/Button';
import { CheckCircle2, HelpCircle } from 'lucide-react';
import { ContactCTA } from '../sections/ContactCTA';

export const ServiceMarketingPage: React.FC = () => {
  const service = SERVICES_DATA.find((s) => s.id === 'growth-marketing') || SERVICES_DATA[2];

  const marketingServices = [
    { title: 'Content Marketing', desc: 'Create valuable content that builds trust, improves search visibility, and keeps your business relevant to ready buyers.' },
    { title: 'Social Media Marketing', desc: 'Build a consistent online presence that strengthens your brand identity and connects with your target audience.' },
    { title: 'Performance Marketing', desc: 'Run targeted advertising campaigns focused on measurable ROI and qualified lead generation.' },
    { title: 'Search Engine Optimization (SEO)', desc: 'Improve your website\'s organic search visibility so potential customers find your business when looking for solutions.' },
    { title: 'Local Marketing', desc: 'Help businesses become highly visible in their local market and attract nearby customers searching for their services.' },
    { title: 'Marketing Strategy', desc: 'Build a clear roadmap that aligns marketing channels, content creation, and campaign execution directly with your revenue targets.' },
  ];

  const processSteps = [
    { step: '01', title: 'Understand', desc: 'We analyze your business goals, target audience, and market acquisition channels.' },
    { step: '02', title: 'Plan', desc: 'We map out a clear marketing strategy tailored to your high-intent customer paths.' },
    { step: '03', title: 'Execute', desc: 'We launch search engine optimization, content assets, and targeted campaign ad creative.' },
    { step: '04', title: 'Improve', desc: 'We monitor real-world lead data, refine messaging, and optimize for continuous performance.' },
  ];

  const whyMatters = [
    { title: 'Builds Brand Awareness', desc: 'Keeps your business top-of-mind with prospects searching for solutions.' },
    { title: 'Generates Quality Inquiries', desc: 'Connects your offer directly with buyers ready to take action.' },
    { title: 'Strengthens Customer Trust', desc: 'Valuable content and messaging establish industry authority.' },
    { title: 'Improves Online Visibility', desc: 'Higher search rankings make your business easy to find online.' },
    { title: 'Supports Long-Term Business Growth', desc: 'Creates compounding traffic and inquiry momentum over time.' },
    { title: 'Creates Consistent Communication', desc: 'Keeps your message clear and aligned across all channels.' },
  ];

  const whyChoosePoints = [
    { title: 'Business-First Marketing', desc: 'We align campaigns directly with your revenue targets and sales goals.' },
    { title: 'Strategy Before Campaigns', desc: 'We research customer acquisition channels before launching ads.' },
    { title: 'Content With Purpose', desc: 'Every piece of content is built to build trust and educate buyers.' },
    { title: 'Clear Communication', desc: 'Transparent progress updates focused on inquiry volume and quality.' },
    { title: 'Continuous Improvement', desc: 'We analyze lead data to refine messaging and optimize spend.' },
    { title: 'Focused on Measurable Outcomes', desc: 'We prioritize commercial results over vanity impressions.' },
  ];

  return (
    <>
      <SEO
        title="Growth Marketing & Customer Acquisition Strategy | Mayaa Solutions"
        description="Targeted search engine optimization, content strategy, and advertising campaigns focused on visibility, lead acquisition, and business growth."
      />

      <main className="pt-16 pb-20 bg-studio-950">
        
        {/* Full-Width Image Hero Section (42-50vh Height) */}
        <section className="relative min-h-[46vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-studio-950 text-center border-b border-studio-850 mb-16">
          
          {/* Background Image Anchor */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
            <img
              src="/images/hero-growth-marketing.jpg"
              alt="Growth Marketing & Customer Acquisition"
              className="w-full h-full object-cover filter saturate-100 grayscale"
            />
            <div className="absolute inset-0 bg-studio-950/80" />
          </div>

          {/* Perfectly Centered Content */}
          <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-studio-400 uppercase">
              GROWTH MARKETING
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-studio-100 tracking-tight leading-[1.08]">
              Reach and Engage <br className="hidden sm:block" />
              <span className="text-studio-100 font-extrabold">Ready Buyers.</span>
            </h1>
            <p className="text-base sm:text-xl text-studio-300 font-medium leading-relaxed max-w-xl mx-auto">
              Targeted search, content systems, and performance campaigns designed to generate predictable customer pipeline.
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
            <h2 className="text-2xl sm:text-4xl font-extrabold text-studio-100">Marketing Focused on Commercial Results.</h2>
            <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed">
              Marketing should generate meaningful business opportunities—not simply collect impressions or followers. Effective campaigns connect your value proposition with prospects who need your solutions.
            </p>
            <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed">
              We build practical growth strategies centered on visibility, engagement, and sustainable customer acquisition—aligning every channel with your commercial goals.
            </p>
          </div>
        </section>

        {/* Marketing Services */}
        <section className="py-20 bg-studio-950">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-studio-400 uppercase tracking-widest">Growth Services</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">Growth Marketing Capabilities.</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketingServices.map((ms, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-studio-850 shadow-sm space-y-2">
                  <h3 className="text-base font-bold text-studio-100">{ms.title}</h3>
                  <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">{ms.desc}</p>
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
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">Four Steps to Customer Acquisition.</h2>
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

        {/* Why Growth Marketing Matters */}
        <section className="py-20 bg-studio-950">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-studio-400 uppercase tracking-widest">Commercial Impact</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">Why Growth Marketing Matters.</h2>
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
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">Marketing Built for Business Growth.</h2>
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
