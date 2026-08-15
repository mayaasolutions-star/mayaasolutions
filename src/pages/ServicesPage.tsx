import React from 'react';
import { SEO } from '../components/SEO';
import { SERVICES_DATA } from '../constants/servicesData';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { ContactCTA } from '../sections/ContactCTA';

export const ServicesPage: React.FC = () => {
  const whyPoints = [
    { title: 'Business-first approach', desc: 'We align design, strategy, and marketing directly with your revenue targets.' },
    { title: 'Strategy before execution', desc: 'We diagnose business bottlenecks before designing or building anything.' },
    { title: 'Clean and thoughtful design', desc: 'Every layout and feature is built for clarity and user conversion without clutter.' },
    { title: 'Fast communication', desc: 'You work directly with experienced strategists through transparent updates.' },
    { title: 'Practical solutions', desc: 'We deliver high-performing assets built for real commercial impact.' },
    { title: 'Long-term partnership', desc: 'We act as your extended team to support ongoing growth and strategic updates.' },
  ];

  return (
    <>
      <SEO
        title="Services | Brand Building, Website Design, Marketing & Business Growth"
        description="Explore Mayaa Solutions core business services: Brand Building, Custom Website Design, Growth Marketing, and Business Growth."
      />

      <main className="pt-20 pb-20 bg-studio-950">
        
        {/* Editorial Asymmetric Services Hero Section */}
        <section className="relative min-h-[65vh] flex items-center pt-10 pb-12 md:pt-16 md:pb-16 overflow-hidden bg-studio-950 text-left border-b border-studio-850">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Content Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-studio-100 inline-block" />
                  <span className="text-xs font-extrabold text-studio-100 uppercase tracking-widest">
                    Connected Capabilities
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.08]">
                  Strategy, Design & <br />
                  <span className="text-[#171717] font-extrabold">Business Growth.</span>
                </h1>

                <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed max-w-xl">
                  Every service works together seamlessly to build stronger brands, high-converting digital platforms, and sustainable long-term expansion.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#171717] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-[#292825] transition-all shadow-md"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/our-work"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white border border-[#171717] text-[#171717] font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-studio-900 transition-all shadow-sm"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>

              {/* Right Media Frame */}
              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden border border-studio-850 shadow-xl h-[360px] sm:h-[440px] bg-studio-900 group">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                    <source src="/images/services-page-hero-video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Services Rows */}
        <section id="services-list" className="max-w-7xl mx-auto px-6 md:px-12 space-y-12 pt-16 pb-24 bg-studio-950">
          {SERVICES_DATA.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.id}
                className={`p-8 md:p-12 rounded-3xl bg-white border border-studio-850 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`lg:col-span-7 space-y-5 ${isEven ? '' : 'lg:order-2'}`}>
                  <span className="text-xs font-extrabold px-3.5 py-1 bg-studio-900 text-studio-100 border border-studio-850 rounded-full inline-block uppercase tracking-wider">
                    Service {service.number}
                  </span>

                  <h2 className="text-3xl font-extrabold text-studio-100 tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="p-4 bg-studio-900 rounded-2xl border border-studio-850 space-y-1">
                    <span className="text-xs font-bold text-studio-400 uppercase tracking-widest block">Expected Outcome</span>
                    <p className="text-xs sm:text-sm text-studio-100 font-semibold">
                      {service.outcomes[0]}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-studio-100 text-studio-950 font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-studio-200 transition-colors shadow-sm"
                    >
                      Explore {service.title} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-1'}`}>
                  <div className="rounded-2xl overflow-hidden border border-studio-850 h-80 relative shadow-sm">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Why Work With Mayaa */}
        <section className="py-20 bg-studio-900 border-t border-b border-studio-850">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-studio-400 uppercase tracking-widest">Why Work With Us</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">Clear Principles. Practical Growth.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyPoints.map((pt, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-2">
                  <h3 className="text-lg font-bold text-studio-100">{pt.title}</h3>
                  <p className="text-sm text-studio-300 font-normal leading-relaxed">{pt.desc}</p>
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
