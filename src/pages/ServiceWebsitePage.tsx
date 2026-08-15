import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { SERVICES_DATA } from '../constants/servicesData';
import { Button } from '../components/Button';
import { CheckCircle2, HelpCircle } from 'lucide-react';
import { ContactCTA } from '../sections/ContactCTA';

export const ServiceWebsitePage: React.FC = () => {
  const service = SERVICES_DATA.find((s) => s.id === 'website-design') || SERVICES_DATA[1];

  const features = [
    { title: 'Mobile-First Design', desc: 'Layouts and touch navigation optimized for mobile devices where most users browse.' },
    { title: 'Fast Loading Experience', desc: 'Speed-optimized pages that keep visitors engaged and improve search rankings.' },
    { title: 'Easy Navigation', desc: 'Intuitive site architecture that guides users effortlessly to key information.' },
    { title: 'SEO-Ready Structure', desc: 'Built from the ground up to help your business get found on search engines.' },
    { title: 'Clear Messaging', desc: 'Concise headlines and copy that communicate your value proposition in seconds.' },
    { title: 'Lead-Focused Layouts', desc: 'Strategic call-to-actions designed to turn casual visitors into inquiries.' },
    { title: 'Simple Content Management', desc: 'Straightforward content setup allowing your team to make updates easily.' },
    { title: 'Professional Visual Design', desc: 'Clean aesthetics tailored to reflect your brand authority and trust.' },
  ];

  const approachSteps = [
    { step: '01', title: 'Understand Your Business', desc: 'We analyze your commercial goals, audience needs, and key competitors.' },
    { step: '02', title: 'Plan the Structure', desc: 'We organize page hierarchy, user journeys, and conversion paths.' },
    { step: '03', title: 'Design and Build', desc: 'We craft your visual interface and develop a fast, responsive website.' },
    { step: '04', title: 'Launch and Improve', desc: 'We test across all devices, deploy securely, and monitor performance.' },
  ];

  const whyChoosePoints = [
    { title: 'Built Around Business Goals', desc: 'Every page and feature connects directly to your growth objectives.' },
    { title: 'Designed for Real Users', desc: 'We eliminate clutter so visitors find what they need in seconds.' },
    { title: 'Fast and Responsive', desc: 'Smooth performance across all smartphones, tablets, and desktops.' },
    { title: 'Clean, Modern Design', desc: 'Minimalist aesthetic that establishes instant industry credibility.' },
    { title: 'Easy to Maintain', desc: 'Simple management setup so you maintain full control of your content.' },
    { title: 'Focused on Conversions', desc: 'Strategic layouts crafted to turn site traffic into business inquiries.' },
  ];

  return (
    <>
      <SEO
        title="Professional Business Website Design & Development | Mayaa Solutions"
        description="Custom, mobile-first business websites built to establish credibility, improve user experience, and generate qualified inquiries."
      />

      <main className="pt-16 pb-20 bg-studio-950">
        
        {/* Full-Width Image Hero Section (42-50vh Height) */}
        <section className="relative min-h-[46vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-studio-950 text-center border-b border-studio-850 mb-16">
          
          {/* Background Image Anchor */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
            <img
              src="/images/hero-website-design.jpg"
              alt="Website Design & Engineering"
              className="w-full h-full object-cover filter saturate-100 grayscale"
            />
            <div className="absolute inset-0 bg-studio-950/80" />
          </div>

          {/* Perfectly Centered Content */}
          <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-studio-400 uppercase">
              WEBSITE DESIGN
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-studio-100 tracking-tight leading-[1.08]">
              Websites Engineered <br className="hidden sm:block" />
              <span className="text-studio-100 font-extrabold">to Perform.</span>
            </h1>
            <p className="text-base sm:text-xl text-studio-300 font-medium leading-relaxed max-w-xl mx-auto">
              Custom digital platforms designed to engage visitors, reflect your brand authority, and turn traffic into revenue.
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
            <h2 className="text-2xl sm:text-4xl font-extrabold text-studio-100">First Impressions Drive Growth.</h2>
            <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed">
              A website is often the first touchpoint prospects have with your business. It must build trust immediately, communicate your value proposition clearly, and encourage visitors to take action.
            </p>
            <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed">
              We design custom business websites focused on commercial outcomes—combining strategic messaging, fast performance, and conversion-focused layouts.
            </p>
          </div>
        </section>

        {/* Features / Value Cards */}
        <section className="py-20 bg-studio-950">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-studio-400 uppercase tracking-widest">Business Value</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">Everything Your Website Needs.</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((item, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-studio-850 shadow-sm space-y-2">
                  <h3 className="text-base font-bold text-studio-100">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-studio-900 border-t border-b border-studio-850">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-studio-400 uppercase tracking-widest">Our Approach</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">Four Steps to a High-Performing Website.</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {approachSteps.map((st) => (
                <div key={st.step} className="p-6 bg-white rounded-2xl border border-studio-850 shadow-sm space-y-3">
                  <span className="text-2xl font-extrabold text-studio-100 font-mono">{st.step}</span>
                  <h3 className="text-lg font-bold text-studio-100">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Mayaa */}
        <section className="py-20 bg-studio-950">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-studio-400 uppercase tracking-widest">Why Work With Us</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">Built for Real Business Growth.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoosePoints.map((pt, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-2">
                  <h3 className="text-base font-bold text-studio-100">{pt.title}</h3>
                  <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-studio-400 font-medium text-center pt-4">
              We partner with startups, growing businesses, and established brands across professional services, technology, healthcare, and industrial sectors.
            </p>
          </div>
        </section>

        <ContactCTA />

      </main>
    </>
  );
};
