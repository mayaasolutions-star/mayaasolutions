import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { SERVICES_DATA } from '../constants/servicesData';
import { Button } from '../components/Button';
import { CheckCircle2, HelpCircle } from 'lucide-react';
import { ContactCTA } from '../sections/ContactCTA';

export const ServiceGrowthPage: React.FC = () => {
  const service = SERVICES_DATA.find((s) => s.id === 'business-growth') || SERVICES_DATA[3];

  const growthServices = [
    { title: 'Business Strategy', desc: 'Create practical strategies that align business goals with measurable actions and long-term growth.' },
    { title: 'Customer Experience', desc: 'Improve every customer interaction to build stronger relationships, increase retention, and boost lifetime value.' },
    { title: 'Digital Growth', desc: 'Strengthen your online presence through better branding, high-converting websites, and targeted marketing.' },
    { title: 'Market Positioning', desc: 'Help your business stand out in competitive markets by clearly communicating what makes you different.' },
    { title: 'Growth Planning', desc: 'Identify expansion opportunities, prioritize key actions, and create realistic plans for sustainable business growth.' },
    { title: 'Performance Review', desc: 'Evaluate operational results, identify growth bottlenecks, and make informed decisions for continuous improvement.' },
  ];

  const processSteps = [
    { step: '01', title: 'Understand', desc: 'We analyze your business operations, revenue streams, and growth challenges.' },
    { step: '02', title: 'Evaluate', desc: 'We assess what is working, identify performance gaps, and uncover opportunities.' },
    { step: '03', title: 'Plan', desc: 'We build a practical action plan that aligns strategy with clear execution steps.' },
    { step: '04', title: 'Grow', desc: 'We implement solutions, measure real-world results, and refine for ongoing expansion.' },
  ];

  const whyMatters = [
    { title: 'Clear Business Direction', desc: 'Provides a strategic roadmap so your team focuses on high-impact initiatives.' },
    { title: 'Better Customer Experience', desc: 'Improves satisfaction and retention across every client touchpoint.' },
    { title: 'Smarter Decision-Making', desc: 'Replaces guesswork with practical insights and data-backed priorities.' },
    { title: 'Improved Digital Presence', desc: 'Aligns your website and branding to capture qualified market demand.' },
    { title: 'Sustainable Growth', desc: 'Builds predictable revenue channels and repeatable operational processes.' },
    { title: 'Stronger Market Positioning', desc: 'Differentiates your business to command higher value in your industry.' },
  ];

  const whyChoosePoints = [
    { title: 'Business-First Thinking', desc: 'We prioritize real commercial outcomes over abstract consulting frameworks.' },
    { title: 'Practical Solutions', desc: 'We deliver actionable strategies designed for straightforward implementation.' },
    { title: 'Strategy Backed by Execution', desc: 'We help you execute plans across branding, web, and marketing.' },
    { title: 'Clear Communication', desc: 'Transparent collaboration with direct access to experienced strategists.' },
    { title: 'Long-Term Partnerships', desc: 'We support your ongoing expansion as your business scales.' },
    { title: 'Growth With Purpose', desc: 'Every initiative is designed to build sustainable business equity.' },
  ];

  return (
    <>
      <SEO
        title="Business Growth Strategy & Advisory | Mayaa Solutions"
        description="Help your business identify opportunities, solve challenges, and build practical strategies for sustainable long-term growth."
      />

      <main className="pt-16 pb-20 bg-studio-950">
               {/* Full-Width Image Hero Section (42-50vh Height) */}
        <section className="relative min-h-[46vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-studio-950 text-center border-b border-studio-850 mb-16">
          
          {/* Background Image Anchor */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
            <img
              src="/images/hero-business-growth.jpg"
              alt="Business Growth & Strategic Advisory"
              className="w-full h-full object-cover filter saturate-100 grayscale"
            />
            <div className="absolute inset-0 bg-studio-950/80" />
          </div>          {/* Perfectly Centered Content */}
          <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-studio-400 uppercase">
              BUSINESS GROWTH
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-studio-100 tracking-tight leading-[1.08]">
              Build Systems <br className="hidden sm:block" />
              <span className="text-studio-100 font-extrabold">for What's Next.</span>
            </h1>
            <p className="text-base sm:text-xl text-studio-300 font-medium leading-relaxed max-w-xl mx-auto">
              Practical strategy advisory to optimize customer acquisition, remove operational bottlenecks, and scale with confidence.
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
            <h2 className="text-2xl sm:text-4xl font-extrabold text-studio-100">Growth Comes from Strategic Clarity.</h2>
            <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed">
              Every business faces unique operational and market challenges. Sustainable expansion comes from making better decisions across positioning, customer experience, digital touchpoints, and marketing.
            </p>
            <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed">
              We work directly with founders and decision-makers to solve growth bottlenecks and establish clear, actionable strategic roadmaps.
            </p>
          </div>
        </section>

        {/* Growth Services */}
        <section className="py-20 bg-studio-950">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-studio-400 uppercase tracking-widest">Growth Areas</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">Business Strategy Capabilities.</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {growthServices.map((gs, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-studio-850 shadow-sm space-y-2">
                  <h3 className="text-base font-bold text-studio-100">{gs.title}</h3>
                  <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">{gs.desc}</p>
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
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">Four Steps to Business Growth.</h2>
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

        {/* Why Business Growth Matters */}
        <section className="py-20 bg-studio-950">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-studio-400 uppercase tracking-widest">Commercial Impact</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">Why Business Strategy Matters.</h2>
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
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">Practical Growth for Real Businesses.</h2>
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
