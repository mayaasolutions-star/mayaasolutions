import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { ContactCTA } from '../sections/ContactCTA';

export const IntentPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  const intentConfigs: Record<string, {
    title: string;
    headline: string;
    tagline: string;
    heroImage: string;
    deliverables: string[];
    process: string[];
    seoTitle: string;
    seoDesc: string;
  }> = {
    'build-my-brand': {
      title: 'Build My Brand',
      headline: 'Transform Your Business Into a Distinct Market Leader.',
      tagline: 'Complete positioning, logo architecture, style manual, and launch assets.',
      heroImage: '/images/build-my-brand-hero.webp',
      deliverables: [
        'Brand Positioning & Core Narrative',
        'Primary & Secondary Logo Marks',
        'Color System & Typography Standards',
        'Brand Identity Guidelines Manual',
        'Social Media Launch Kit',
        'Stationery & Business Cards'
      ],
      process: ['Auditing & Strategy', 'Visual Identity Design', 'Asset Delivery & Guidelines'],
      seoTitle: 'Build My Brand | Bespoke Brand Strategy Package',
      seoDesc: 'Complete brand building package by Mayaa Solutions. Positioning, visual identity, and brand guidelines for ambitious businesses.'
    },
    'build-my-website': {
      title: 'Build My Website',
      headline: 'Launch a High-Performance Digital Headquarters Built to Convert.',
      tagline: 'Bespoke React development, UX wireframing, fluid mobile layouts, and sub-second speed.',
      heroImage: '/images/build-my-website-hero.webp',
      deliverables: [
        'Custom UX Wireframing & Figma Prototypes',
        'React / Modern Tech Development',
        'Responsive Mobile Optimization',
        'Framer Motion Micro-Interactions',
        'SEO Architecture & Core Web Vitals',
        'CMS Integration & Analytics'
      ],
      process: ['UX Sitemap', 'Figma UI Design', 'React Development', 'Launch & Testing'],
      seoTitle: 'Build My Website | Custom High-Performance Web Design',
      seoDesc: 'Bespoke website design & development package by Mayaa Solutions. High-converting React web platforms built for performance.'
    },
    'design-my-logo': {
      title: 'Design My Logo',
      headline: 'Timeless Logo Marks Crafted With Mathematical & Aesthetic Precision.',
      tagline: 'Iconic, scalable logo architecture tailored to command authority in your niche.',
      heroImage: '/images/design-my-logo-hero.webp',
      deliverables: [
        'Custom Logo Concept Exploration',
        'Vector Master Files (SVG, EPS, PNG, PDF)',
        'Monochrome & Dark Mode Variations',
        'Favicon & App Icon Adaptations',
        'Brand Typography Pairing',
        'Commercial Usage License'
      ],
      process: ['Concept Sketching', 'Vector Refinement', 'Color Selection', 'Final Package Handoff'],
      seoTitle: 'Design My Logo | Premium Logo Identity Design',
      seoDesc: 'Professional logo design and visual mark creation by Mayaa Solutions.'
    },
    'make-my-brand-premium': {
      title: 'Make My Brand Premium',
      headline: 'Elevate Your Existing Brand to Command High-Margin Pricing.',
      tagline: 'Strategic visual refresh, elevated touchpoints, and premium market repositioning.',
      heroImage: '/images/premium-brand-hero.webp',
      deliverables: [
        'Brand Audit & Friction Analysis',
        'Visual Identity Elevation & Refresh',
        'High-End Package Design Options',
        'Luxury Digital Collateral',
        'Premium Messaging Polish',
        'Updated Brand Style Guide'
      ],
      process: ['Brand Audit', 'Identity Refresh', 'Collateral Redesign', 'Relaunch Support'],
      seoTitle: 'Make Brand Premium | Luxury Brand Elevation Package',
      seoDesc: 'Elevate your brand aesthetic and market positioning with Mayaa Solutions.'
    },
    'name-my-business': {
      title: 'Name My Business',
      headline: 'Memorable, Ownable Business Names Engineered for Brand Building.',
      tagline: 'Strategic naming framework, domain check, trademark guidance, and tagline design.',
      heroImage: '/images/name-my-business-hero.webp',
      deliverables: [
        'Strategic Brand Naming Concepts',
        'Domain & Digital Footprint Verification',
        'Phonetic & Cultural Vetting',
        'Tagline & Slogan Architecture',
        'Trademark Search Guidance',
        'Rationale & Presentation Deck'
      ],
      process: ['Naming Brainstorming', 'Domain Verification', 'Final Selection Deck'],
      seoTitle: 'Name My Business | Strategic Naming & Brand Tagline Package',
      seoDesc: 'Strategic business naming, domain availability verification, and tagline architecture by Mayaa Solutions.'
    }
  };

  const config = (type && intentConfigs[type]) ? intentConfigs[type] : intentConfigs['build-my-brand'];

  return (
    <>
      <SEO title={config.seoTitle} description={config.seoDesc} />

      <main className="pt-32 pb-20 bg-studio-950">
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono tracking-[0.25em] text-studio-400 uppercase flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-studio-100" /> Bespoke Package • {config.title}
              </span>
              <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-[#171717] leading-tight tracking-tight">
                {config.headline}
              </h1>
              <p className="text-lg text-studio-300 font-normal leading-relaxed">
                {config.tagline}
              </p>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-[#171717] text-white font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-[#292929] transition-all shadow-md"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-studio-850 bg-white p-4 shadow-sm">
                <img
                  src={config.heroImage}
                  alt={config.title}
                  className="w-full h-80 object-cover rounded-2xl border border-studio-850"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 bg-studio-900 border-t border-b border-studio-850">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-mono text-studio-400 uppercase tracking-widest">Included Deliverables</span>
              <h2 className="text-3xl font-display font-extrabold text-studio-100">Package Specification</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.deliverables.map((item, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-studio-850 shadow-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-studio-100 shrink-0 mt-0.5" />
                  <span className="text-sm text-studio-100 font-bold">{item}</span>
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
