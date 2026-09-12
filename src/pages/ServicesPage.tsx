import React from 'react';
import { SEO } from '../components/SEO';
import { SERVICES_DATA } from '../constants/servicesData';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ContactCTA } from '../sections/ContactCTA';

export const ServicesPage: React.FC = () => {
  const principles = [
    {
      title: 'Strategy to Execution',
      desc: 'We do not hand off abstract decks. We define the strategy and engineer the brand, website, or digital solution directly.'
    },
    {
      title: 'Connected Capabilities',
      desc: 'Branding connects to your website, websites support your marketing, and marketing serves defined commercial targets.'
    },
    {
      title: 'Direct Partnership',
      desc: 'You work directly with senior practitioners who understand commercial requirements and care about detail.'
    },
    {
      title: 'Built for Longevity',
      desc: 'We design clear systems and write clean code that continue serving your business as operations expand.'
    }
  ];

  return (
    <>
      <SEO
        title="Services | Brand Building, Websites, Growth Marketing & Business Strategy"
        description="Strategy, brand and digital execution for businesses ready to build something better. Explore Mayaa Solutions' core capabilities."
      />

      <main className="pt-20 pb-20 bg-studio-950">
        
        {/* Editorial Services Hero Section */}
        <section className="relative min-h-[60vh] flex items-center pt-10 pb-12 md:pt-16 md:pb-16 overflow-hidden bg-studio-950 text-left border-b border-studio-850">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Content Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-studio-100 inline-block" />
                  <span className="text-xs font-extrabold text-studio-100 uppercase tracking-widest">
                    Services
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.08]">
                  Strategy, brand & digital execution <br />
                  <span className="text-[#171717] font-extrabold">for businesses ready to build something better.</span>
                </h1>

                <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed max-w-xl">
                  What can Mayaa help your business build or improve? We partner with founders and established teams across industries to take projects from initial requirement through to launch.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#171717] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-[#292825] transition-all shadow-md"
                  >
                    <span>Start a Project</span>
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
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-studio-850 shadow-xl h-[340px] sm:h-[420px] bg-studio-900 group">
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

        {/* Services Showcase Cards */}
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
                {/* Text Content */}
                <div className={`lg:col-span-7 space-y-5 ${isEven ? '' : 'lg:order-2'}`}>
                  <span className="text-xs font-extrabold px-3.5 py-1 bg-studio-900 text-studio-100 border border-studio-850 rounded-full inline-block uppercase tracking-wider font-mono">
                    Service {service.number}
                  </span>

                  <div className="space-y-2">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-studio-100 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-sm font-semibold text-studio-400">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-studio-400 block">
                      Core Capabilities
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.map((cap, i) => (
                        <span
                          key={i}
                          className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-studio-900 border border-studio-850 text-studio-200"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Explore CTA Button */}
                  <div className="pt-3">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-studio-100 text-studio-950 font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-studio-200 transition-colors shadow-sm"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Visual Frame */}
                <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-1'}`}>
                  <div className="rounded-2xl overflow-hidden border border-studio-850 h-80 sm:h-96 relative shadow-sm group">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* The Mayaa Difference: Connected Capabilities */}
        <section className="py-20 bg-studio-900 border-t border-b border-studio-850">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <span className="text-xs sm:text-sm font-semibold text-studio-400 uppercase tracking-widest">
                How It Works Together
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">
                Strategy Connected to Execution.
              </h2>
              <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed">
                Branding is not isolated from digital. Websites are not isolated from brand. Marketing is not isolated from business. The capabilities work together when your project requires it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((pt, idx) => (
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
