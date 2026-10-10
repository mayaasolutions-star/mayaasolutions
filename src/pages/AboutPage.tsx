import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ORGANIZATION_SCHEMA, getBreadcrumbSchema } from '../utils/seoMetadata';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Globe2, 
  Cpu, 
  Clock, 
  Building2, 
  Target,
  Sparkles,
  Zap,
  Lock
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const problemsWeSolve = [
    {
      number: '01',
      title: 'Brand Ambiguity & Low Pricing Power',
      problem: 'Companies offering high-value services or products often look generic, suffering from fragmented messaging and visual inconsistency that undermines customer trust.',
      solution: 'We construct authoritative brand architectures, distinctive visual identity systems, and high-trust positioning that command market authority and justify premium pricing.'
    },
    {
      number: '02',
      title: 'High-Friction, Low-Converting Digital Platforms',
      problem: 'Websites that look modern on the surface often suffer from sluggish load speeds, confusing information hierarchy, and poor mobile UX that loses qualified prospects within seconds.',
      solution: 'We engineer lightning-fast, responsive web platforms built on modern web stacks (React, Vite, Tailwind) designed around user psychology and structured conversion pathways.'
    },
    {
      number: '03',
      title: 'Operational Bottlenecks & SaaS License Creep',
      problem: 'Growing businesses struggle with disconnected spreadsheets, manual lead routing, disorganized client workflows, and escalating per-seat monthly SaaS subscription fees.',
      solution: 'We design custom business management systems (BMS) and internal operational dashboards configured around your exact workflows, with 100% IP ownership and zero perpetual license fees.'
    },
    {
      number: '04',
      title: 'The Strategy vs. Execution Disconnect',
      problem: 'Traditional agencies frequently hand off theoretical strategy decks without technical implementation, while pure software developers build code without grasping commercial economics.',
      solution: 'We act as end-to-end solutions partners. We diagnose the commercial bottleneck first, architect the strategic framework, and build the software and brand assets directly.'
    }
  ];

  const coreCapabilities = [
    {
      title: 'Brand Building',
      badge: 'Strategic Identity',
      path: '/brand',
      desc: 'Market positioning, narrative architecture, logo systems, corporate typography, brand guidelines, and high-trust digital collateral designed to establish lasting authority in competitive sectors.'
    },
    {
      title: 'Websites & Digital Experiences',
      badge: 'High-Performance Web',
      path: '/websites',
      desc: 'Bespoke corporate websites, web applications, and interactive portals engineered for instant loading, international search visibility (SEO/AEO), and high conversion efficiency across devices.'
    },
    {
      title: 'Personalised Business Systems',
      badge: 'Custom Operations',
      path: '/business-systems',
      desc: 'Tailored operational platforms, CRM & lead pipelines, order tracking, team task management, and automated workflows built specifically to match how your business actually runs.'
    }
  ];

  const methodologySteps = [
    {
      step: '01',
      title: 'Diagnostic Discovery',
      desc: 'We examine your business model, customer acquisition flow, competitive landscape, and operational bottlenecks before prescribing any technology or design.'
    },
    {
      step: '02',
      title: 'Strategic Blueprint',
      desc: 'We establish clear information architecture, visual identity directions, system data schemas, and commercial milestones before writing code.'
    },
    {
      step: '03',
      title: 'Iterative Engineering',
      desc: 'We design and build in transparent sprints with shared staging environments, regular review demos, and continuous stakeholder communication.'
    },
    {
      step: '04',
      title: 'Deployment & Full Handover',
      desc: 'We launch onto your own cloud infrastructure, deliver comprehensive documentation, and transfer 100% intellectual property ownership to your company.'
    }
  ];

  const deliveryPrinciples = [
    {
      icon: <Building2 className="w-5 h-5 text-white" />,
      title: 'India HQ Delivery',
      desc: 'Engineered from India, giving our clients direct access to senior architectural depth and world-class engineering execution without intermediary overhead.'
    },
    {
      icon: <Clock className="w-5 h-5 text-white" />,
      title: 'Structured Timezone Overlap',
      desc: 'Seamless collaboration across UK/Europe (BST/CET), Middle East (GST/AST), Asia-Pacific (SGT/AEST), and North America (EST/PST) with disciplined daily synchronous windows.'
    },
    {
      icon: <Lock className="w-5 h-5 text-white" />,
      title: '100% IP & Code Ownership',
      desc: 'You retain complete, unencumbered ownership of all source code, design assets, and databases upon milestone completion. No vendor lock-in or recurring seat licenses.'
    },
    {
      icon: <Globe2 className="w-5 h-5 text-white" />,
      title: 'Client Cloud Sovereignty',
      desc: 'All web platforms and business systems are deployed exclusively to your own cloud accounts (AWS, Azure, GCP) in your jurisdiction, adhering to GDPR, CCPA, and PDPA compliance.'
    },
    {
      icon: <Target className="w-5 h-5 text-white" />,
      title: 'Transparent Milestone Pricing',
      desc: 'Fixed-fee project milestones invoiced in your local currency (USD, EUR, GBP, AED, SGD, AUD, or INR). Clear scopes, predictable costs, and zero surprise hourly billing.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      title: 'Confidentiality & Governance',
      desc: 'Strict bilateral non-disclosure agreements (NDAs) protect your proprietary business logic, operational data, and strategic roadmaps from day one.'
    }
  ];

  return (
    <>
      <SEO
        title="About Mayaa Solutions | Strategic Partner & Digital Engineering"
        description="Learn how Mayaa Solutions partners with businesses in India and across global markets to build authoritative brands, engineer custom websites, and configure personalised business management systems."
        canonicalUrl="https://mayaasolutions.in/about"
        schema={[
          ORGANIZATION_SCHEMA,
          getBreadcrumbSchema([
            { name: 'Home', urlPath: '/' },
            { name: 'About', urlPath: '/about' },
          ]),
        ]}
      />

      <main className="pt-16 bg-studio-950">
        
        {/* Editorial Asymmetric Hero Section */}
        <section className="relative min-h-[55vh] flex items-center pt-24 pb-16 overflow-hidden bg-studio-950 text-left border-b border-studio-850">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Content Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-studio-100 inline-block" />
                  <span className="text-xs font-extrabold text-studio-100 uppercase tracking-widest font-mono">
                    About Mayaa Solutions • India HQ & Global Delivery
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.08]">
                  Business-First Thinking. <br className="hidden sm:block" />
                  <span className="text-[#171717] font-extrabold">Engineered for Commercial Impact.</span>
                </h1>

                <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed max-w-xl">
                  We are strategic builders and consultants. We partner with ambitious companies in India and international markets to define authoritative brand positioning, engineer custom web platforms, and deploy personalised business management systems.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/contact"
                    className="px-7 py-3.5 bg-studio-100 text-studio-950 font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-studio-200 transition-all shadow-sm inline-flex items-center gap-2"
                  >
                    Start a Conversation <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/our-work"
                    className="px-7 py-3.5 bg-white text-studio-100 font-extrabold text-xs uppercase tracking-wider rounded-full border border-studio-850 hover:bg-studio-900 transition-all inline-flex items-center gap-2"
                  >
                    Explore Our Work
                  </Link>
                </div>
              </div>

              {/* Right Media Frame */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-studio-850 shadow-xl h-[360px] sm:h-[440px] bg-studio-900 group">
                  <img
                    src="/images/about-story.webp"
                    alt="Mayaa Solutions Strategic Digital Engineering"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-studio-850 shadow-lg flex items-center justify-between text-xs">
                    <div>
                      <span className="text-studio-400 block font-semibold uppercase tracking-wider text-[10px]">Strategic Operating Base</span>
                      <span className="text-studio-100 font-bold text-sm">India</span>
                    </div>
                    <div className="text-right">
                      <span className="text-studio-400 block font-semibold uppercase tracking-wider text-[10px]">Cross-Border Reach</span>
                      <span className="text-studio-100 font-bold text-sm">Serving India & 20+ Global Markets</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Who We Are: Strategic Positioning Statement */}
        <section className="w-full bg-black text-white py-20 md:py-24 border-t border-b border-neutral-900">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-neutral-950 border border-neutral-800 shadow-sm space-y-6 text-center max-w-5xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest">
                  Our Identity & Purpose
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
                We are not another generic digital marketing agency. We are a business-focused solutions partner.
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-neutral-400 font-normal leading-relaxed pt-2 text-left">
                <p>
                  Too many agencies operate on surface-level churn: running disconnected ad campaigns, reselling rigid WordPress themes, or pushing pre-packaged tech stacks without understanding business unit economics. The result is visual noise that fails to convert and software that creates operational friction.
                </p>
                <p>
                  Mayaa Solutions was built on an opposite principle: <strong className="text-white font-semibold">diagnose the commercial bottleneck before recommending a solution</strong>. Whether creating a new corporate brand identity, building a high-speed web application, or automating back-office business operations, every system we design is built to generate measurable commercial value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Business Problems We Solve */}
        <section className="py-20 md:py-24 bg-studio-900 border-t border-b border-studio-850">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl space-y-3 text-center mx-auto">
              <span className="text-xs font-mono font-bold text-studio-400 uppercase tracking-widest block">
                Problem Diagnosis
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">
                Business Challenges We Solve.
              </h2>
              <p className="text-base text-studio-300 font-normal leading-relaxed">
                We focus on high-impact friction points where brand perception, digital technology, and business workflows directly affect growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {problemsWeSolve.map((item) => (
                <div key={item.number} className="p-8 sm:p-9 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-5 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-mono font-extrabold text-studio-100">{item.number}</span>
                      <span className="text-xs font-bold text-studio-400 uppercase tracking-wider">Friction Point</span>
                    </div>
                    <h3 className="text-xl font-bold text-studio-100">{item.title}</h3>
                    <p className="text-sm text-studio-400 leading-relaxed font-normal">
                      <strong className="text-studio-300 font-medium">The Obstacle:</strong> {item.problem}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-studio-850">
                    <p className="text-sm text-studio-100 leading-relaxed font-medium">
                      <strong className="text-studio-100 font-bold">How Mayaa Solves It:</strong> {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Three Core Capabilities */}
        <section className="w-full py-20 md:py-24 bg-black text-white border-t border-b border-neutral-900">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl space-y-3 text-center mx-auto">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Three Integrated Disciplines.
              </h2>
              <p className="text-base text-neutral-400 font-normal leading-relaxed">
                Rather than spreading ourselves thin across hundreds of fragmented services, we concentrate on three interconnected domains that build resilient, scalable businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {coreCapabilities.map((cap) => (
                <div key={cap.title} className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 shadow-sm space-y-6 flex flex-col justify-between group hover:border-neutral-700 transition-all">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-[11px] font-mono font-bold uppercase rounded-full">
                        {cap.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{cap.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-neutral-800">
                    <Link
                      to={cap.path}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
                    >
                      Explore {cap.title} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting Methodology: Understand Before We Build */}
        <section className="py-20 md:py-24 bg-studio-900 border-t border-b border-studio-850">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl space-y-3 text-center mx-auto">
              <span className="text-xs font-mono font-bold text-studio-400 uppercase tracking-widest block">
                Consulting Methodology
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">
                We Understand Before We Build.
              </h2>
              <p className="text-base text-studio-300 font-normal leading-relaxed">
                We do not sell pre-made templates or push unneeded software. Every engagement follows a disciplined four-stage process rooted in commercial discovery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {methodologySteps.map((step) => (
                <div key={step.step} className="p-7 sm:p-8 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-3xl font-extrabold text-studio-100 font-mono block">{step.step}</span>
                    <h3 className="text-lg font-bold text-studio-100">{step.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* India HQ & Cross-Border Delivery Model */}
        <section className="w-full py-20 md:py-24 bg-black text-white border-t border-b border-neutral-900">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="max-w-3xl space-y-3 text-center mx-auto">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block">
                Global Operations & Delivery Governance
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Engineering Precision. Global Reach.
              </h2>
              <p className="text-base text-neutral-400 font-normal leading-relaxed">
                Operating from India, we deliver world-class digital systems to businesses across India, North America, Europe, the Middle East, and Asia-Pacific.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {deliveryPrinciples.map((item, idx) => (
                <div key={idx} className="p-7 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-sm space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-lg font-bold text-white">Explore Our Country-Specific Delivery Frameworks</h4>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Review how we work with clients in the UK, USA, UAE, Germany, Singapore, Switzerland, Australia, and more.
                </p>
              </div>
              <Link
                to="/global-markets"
                className="px-6 py-3 bg-white text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-all shrink-0"
              >
                View Global Markets Hub
              </Link>
            </div>
          </div>
        </section>

        {/* Transparent Capability Matrix */}
        <section className="py-20 md:py-24 bg-studio-900 border-t border-studio-850">
          <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-bold text-studio-400 uppercase tracking-widest block">
                Our Standards
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">
                Authentic Engineering & Commercial Disciplines.
              </h2>
              <p className="text-base text-studio-300 font-normal leading-relaxed max-w-2xl mx-auto">
                No manufactured metrics or inflated agency claims. Our work is grounded in verifiable disciplines and direct partner accountability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-4">
              {[
                'Brand Architecture & Visual Systems',
                'Modern Web Engineering (React / Vite)',
                'Personalised Business Systems (BMS)',
                'Cloud Architecture (AWS / Azure / GCP)',
                'International Search Advisory (SEO / AEO)',
                'High-Converting Landing Experiences',
                'Enterprise Privacy (GDPR, CCPA, PDPA)',
                '100% Unencumbered IP Ownership',
                'Direct Partner-Level Delivery'
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-white rounded-xl border border-studio-850 flex items-center gap-3 text-xs sm:text-sm text-studio-100 font-semibold shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-studio-100 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA: Ready to Build, Launch or Scale? */}
        <section className="w-full py-20 md:py-28 bg-black text-white border-t border-neutral-900 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-6">
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
              Ready to Build, Launch or Scale?
            </h2>

            <p className="text-lg sm:text-xl text-neutral-400 max-w-xl mx-auto font-normal leading-relaxed">
              Tell us about your business and we will help you map out the right strategy.
            </p>

            <div className="pt-2 flex justify-center">
              <Link
                to="/contact"
                className="px-9 py-4 bg-white text-black font-extrabold text-sm uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-all shadow-md inline-block"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};
