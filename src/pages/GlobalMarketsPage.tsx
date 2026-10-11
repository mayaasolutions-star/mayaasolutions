import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown, 
  Sparkles, 
  TrendingUp, 
  Cpu,
  Globe 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';

interface MarketCardItem {
  id: string;
  slug: string;
  name: string;
  country: string;
  flag: string;
  description: string;
}

const MARKETS_LIST: MarketCardItem[] = [
  {
    id: 'india',
    slug: 'india',
    name: 'India (Bharat)',
    country: 'India',
    flag: '/flags/in.svg',
    description: 'Distinctive brand building, professional digital flagships, and custom business management software.',
  },
  {
    id: 'uae',
    slug: 'uae',
    name: 'UAE',
    country: 'United Arab Emirates',
    flag: '/flags/ae.svg',
    description: 'Strategic brand building, digital flagships, and operational management systems across Dubai, Abu Dhabi, and the Emirates.',
  },
  {
    id: 'usa',
    slug: 'usa',
    name: 'United States',
    country: 'United States',
    flag: '/flags/us.svg',
    description: 'Clear brand architecture, modern web experiences, and custom software without licensing traps.',
  },
  {
    id: 'australia',
    slug: 'australia',
    name: 'Australia',
    country: 'Australia',
    flag: '/flags/au.svg',
    description: 'Practical digital platforms and bespoke operational systems built for trade and services.',
  },
  {
    id: 'uk',
    slug: 'uk',
    name: 'United Kingdom',
    country: 'United Kingdom',
    flag: '/flags/gb.svg',
    description: 'Authoritative brand identities, high-clarity websites, and workflow platforms for modern firms.',
  },
  {
    id: 'singapore',
    slug: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    flag: '/flags/sg.svg',
    description: 'Corporate brand coherence, digital flagships, and scalable business software for regional hubs.',
  },
  {
    id: 'germany',
    slug: 'germany',
    name: 'Germany',
    country: 'Germany',
    flag: '/flags/de.svg',
    description: 'Engineering-led brand precision, structured digital platforms, and reliable operational systems.',
  },
  {
    id: 'paris',
    slug: 'paris',
    name: 'France',
    country: 'France',
    flag: '/flags/fr.svg',
    description: 'Refined visual identity, elegant digital experiences, and tailored systems for specialized practices.',
  },
  {
    id: 'netherlands',
    slug: 'netherlands',
    name: 'Netherlands',
    country: 'Netherlands',
    flag: '/flags/nl.svg',
    description: 'Pragmatic digital platforms, clear branding, and unbloated systems for international commerce.',
  },
  {
    id: 'saudi-arabia',
    slug: 'saudi-arabia',
    name: 'Saudi Arabia',
    country: 'Saudi Arabia',
    flag: '/flags/sa.svg',
    description: 'Corporate brand architecture, bilingual digital flagships, and operational systems for commercial expansion.',
  },
  {
    id: 'denmark',
    slug: 'denmark',
    name: 'Denmark',
    country: 'Denmark',
    flag: '/flags/dk.svg',
    description: 'Minimalist digital aesthetics, clear brand communication, and unbloated software workflows.',
  },
  {
    id: 'sweden',
    slug: 'sweden',
    name: 'Sweden',
    country: 'Sweden',
    flag: '/flags/se.svg',
    description: 'User-centered digital product interfaces, thoughtful branding, and dependable team workflows.',
  },
  {
    id: 'norway',
    slug: 'norway',
    name: 'Norway',
    country: 'Norway',
    flag: '/flags/no.svg',
    description: 'Resilient digital platforms, grounded corporate branding, and purposeful operational systems.',
  },
  {
    id: 'switzerland',
    slug: 'switzerland',
    name: 'Switzerland',
    country: 'Switzerland',
    flag: '/flags/ch.svg',
    description: 'High-trust visual standards, precision digital engineering, and tailored systems for specialized practices.',
  },
  {
    id: 'ireland',
    slug: 'ireland',
    name: 'Ireland',
    country: 'Ireland',
    flag: '/flags/ie.svg',
    description: 'Engaging digital platforms, clear commercial branding, and direct business management systems.',
  },
  {
    id: 'belgium',
    slug: 'belgium',
    name: 'Belgium',
    country: 'Belgium',
    flag: '/flags/be.svg',
    description: 'Multilingual digital touchpoints, corporate identity, and unified operational tools for European trade.',
  },
  {
    id: 'austria',
    slug: 'austria',
    name: 'Austria',
    country: 'Austria',
    flag: '/flags/at.svg',
    description: 'Structured digital presence, dependable brand assets, and custom internal management software.',
  },
  {
    id: 'finland',
    slug: 'finland',
    name: 'Finland',
    country: 'Finland',
    flag: '/flags/fi.svg',
    description: 'Technical reliability, distraction-free digital interfaces, and pragmatic business management systems.',
  },
  {
    id: 'poland',
    slug: 'poland',
    name: 'Poland',
    country: 'Poland',
    flag: '/flags/pl.svg',
    description: 'Scalable web architecture, dynamic brand positioning, and robust operational software for growing businesses.',
  },
  {
    id: 'luxembourg',
    slug: 'luxembourg',
    name: 'Luxembourg',
    country: 'Luxembourg',
    flag: '/flags/lu.svg',
    description: 'Executive brand clarity, corporate digital authority, and bespoke governance workflows.',
  },
];

export const GlobalMarketsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Global Markets Directory | Mayaa Solutions"
        description="Explore Mayaa Solutions across 20 international markets. Delivering bespoke brand building, digital products, and business systems across India and global markets."
        canonicalUrl="https://mayaasolutions.in/global-markets"
        schema={[
          getBreadcrumbSchema([
            { name: 'Home', urlPath: '/' },
            { name: 'Global Markets', urlPath: '/global-markets' },
          ]),
        ]}
      />

      <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white font-sans antialiased overflow-x-hidden">
        
        {/* ==================================================
            01. COMPACT HERO SECTION
        ================================================== */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 max-w-6xl mx-auto border-b border-[#E5E5E2]">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.1] mb-6 max-w-3xl">
              Building Brands and <br className="hidden sm:inline" />
              Business Experiences <br className="hidden sm:inline" />
              Across Markets.
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed max-w-2xl mb-8">
              Mayaa Solutions partners with businesses to build stronger brands, create meaningful digital experiences, and develop business systems for growth across India and international markets.
            </p>

            {/* CTA */}
            <div className="flex items-center justify-center">
              <a
                href="#markets-grid"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#111111] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-all duration-300 shadow-sm group"
              >
                <span>Explore Our Markets</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ==================================================
            02. THREE-COLUMN COUNTRY GRID (LARGE FLAGS, MINIMAL CONTENT)
        ================================================== */}
        <section id="markets-grid" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#666666] block mb-2 font-medium">
              International Directory
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight mb-3">
              Explore Our Markets
            </h2>
            <p className="text-sm text-[#555555] leading-relaxed">
              Discover how we adapt brand building, digital experiences, and operational systems to local business environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MARKETS_LIST.map((market) => (
              <Link
                key={market.id}
                to={`/global-markets/${market.slug}`}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E5E2] hover:border-[#111111]/30 hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* 1. Large Country Flag Thumbnail (65-75% Card Width) */}
                  <div className="w-[72%] aspect-[3/2] rounded-xl overflow-hidden border border-[#E5E5E2] bg-[#F8F8F6] flex items-center justify-center p-3 sm:p-3.5 mb-5 shadow-2xs group-hover:border-neutral-400 transition-colors">
                    <img
                      src={market.flag}
                      alt={`Flag of ${market.country}`}
                      className="max-w-full max-h-full object-contain drop-shadow-2xs"
                      loading="lazy"
                    />
                  </div>

                  {/* 2. Country Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-2">
                    {market.name}
                  </h3>

                  {/* 3. One Short Description (6-12 Words) */}
                  <p className="text-sm text-[#444444] leading-relaxed font-normal mb-5">
                    {market.description}
                  </p>
                </div>

                {/* 4. Small Arrow Indicating It Opens Country Page */}
                <div className="pt-3 border-t border-[#F0F0EE] flex items-center justify-between text-xs font-mono text-[#666666] group-hover:text-[#111111] transition-colors font-medium">
                  <span>Explore Market</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ==================================================
            03. SERVICES / CAPABILITIES: HOW WE HELP BUSINESSES GROW
        ================================================== */}
        <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E5E5E2]">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#666666] block mb-2.5 font-medium">
              Practical Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-4">
              How We Help Businesses Grow
            </h2>
            <p className="text-base sm:text-lg text-[#444444] font-normal leading-relaxed">
              From building a strong brand to creating digital experiences and custom business tools, we help businesses turn their ideas and operational needs into practical solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Brand Building */}
            <div className="p-8 sm:p-9 rounded-2xl bg-[#F9F9F8] border border-[#E5E5E2] hover:border-[#111111]/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E5E5E2] flex items-center justify-center text-[#111111] shadow-2xs">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#666666] font-medium">
                    Brand Building
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-3">
                  Build a Brand People Remember
                </h3>

                <p className="text-sm sm:text-base text-[#444444] leading-relaxed mb-6 font-normal">
                  Create a distinctive brand identity that helps your business look professional, communicate clearly, and stand out in its market.
                </p>

                <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-[#555555]">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0" />
                    <span>Brand strategy and positioning</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0" />
                    <span>Brand identity and visual direction</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0" />
                    <span>Brand messaging and communication</span>
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#EAEAE8]">
                <Link
                  to="/brand"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-neutral-600 transition-colors group"
                >
                  <span>Explore Brand Building</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Card 2: Websites & Digital Experiences */}
            <div className="p-8 sm:p-9 rounded-2xl bg-[#F9F9F8] border border-[#E5E5E2] hover:border-[#111111]/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E5E5E2] flex items-center justify-center text-[#111111] shadow-2xs">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#666666] font-medium">
                    Websites & Digital
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-3">
                  Give Your Business a Strong Digital Presence
                </h3>

                <p className="text-sm sm:text-base text-[#444444] leading-relaxed mb-6 font-normal">
                  Build a professional online presence that explains what you do, earns trust, and helps potential customers take the next step.
                </p>

                <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-[#555555]">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0" />
                    <span>Business and corporate websites</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0" />
                    <span>Website design and development</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0" />
                    <span>Landing pages and digital experiences</span>
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#EAEAE8]">
                <Link
                  to="/websites"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-neutral-600 transition-colors group"
                >
                  <span>Explore Website Services</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Card 3: Custom Business Management Tools */}
            <div className="p-8 sm:p-9 rounded-2xl bg-[#F9F9F8] border border-[#E5E5E2] hover:border-[#111111]/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E5E5E2] flex items-center justify-center text-[#111111] shadow-2xs">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#666666] font-medium">
                    Business Software
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-3">
                  Make Business Operations Easier to Manage
                </h3>

                <p className="text-sm sm:text-base text-[#444444] leading-relaxed mb-6 font-normal">
                  Replace scattered processes and manual tracking with custom business software designed around the way your business works.
                </p>

                <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-[#555555]">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0" />
                    <span>Custom business management software</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0" />
                    <span>Lead, task, team, and workflow management</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0" />
                    <span>Business dashboards and reporting</span>
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#EAEAE8]">
                <Link
                  to="/business-systems"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-neutral-600 transition-colors group"
                >
                  <span>Explore Business Tools</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Card 4: Growth & Marketing */}
            <div className="p-8 sm:p-9 rounded-2xl bg-[#F9F9F8] border border-[#E5E5E2] hover:border-[#111111]/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E5E5E2] flex items-center justify-center text-[#111111] shadow-2xs">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#666666] font-medium">
                    Growth & Marketing
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-3">
                  Turn Your Business Goals into Growth
                </h3>

                <p className="text-sm sm:text-base text-[#444444] leading-relaxed mb-6 font-normal">
                  Build a more structured approach to reaching customers, improving your marketing, and supporting business growth.
                </p>

                <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-[#555555]">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0" />
                    <span>Marketing strategy and planning</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0" />
                    <span>Digital growth initiatives</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0" />
                    <span>Customer acquisition and conversion improvement</span>
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#EAEAE8]">
                <Link
                  to="/services/growth"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-neutral-600 transition-colors group"
                >
                  <span>Explore Growth Services</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            04. SECTION B: A CLEAR NEXT STEP (CLOSING CTA)
        ================================================== */}
        <section className="py-20 md:py-28 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <div className="p-10 sm:p-14 md:p-16 rounded-3xl bg-[#F9F9F8] border border-[#E5E5E2] flex flex-col items-center shadow-2xs">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight leading-tight mb-5 max-w-2xl text-balance">
              Planning to Grow Beyond Your Current Market?
            </h2>

            <p className="text-base sm:text-lg text-[#444444] font-normal leading-relaxed max-w-xl mb-9 text-balance">
              Let's explore how your brand, digital experience, and business systems can support your next stage of growth.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#111111] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-all duration-300 shadow-sm group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

      </main>
    </>
  );
};
