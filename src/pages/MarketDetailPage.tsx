import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Layers, 
  Briefcase, 
  Target, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';
import { TARGET_MARKETS, TargetMarket } from '../constants/globalMarketsData';
import { DubaiMarketPage } from './DubaiMarketPage';
import { UsaMarketPage } from './UsaMarketPage';
import { UkMarketPage } from './UkMarketPage';
import { AustraliaMarketPage } from './AustraliaMarketPage';
import { SingaporeMarketPage } from './SingaporeMarketPage';
import { GermanyMarketPage } from './GermanyMarketPage';
import { ParisMarketPage } from './ParisMarketPage';
import { SaudiArabiaMarketPage } from './SaudiArabiaMarketPage';
import { AbuDhabiMarketPage } from './AbuDhabiMarketPage';
import { NorwayMarketPage } from './NorwayMarketPage';
import { IrelandMarketPage } from './IrelandMarketPage';
import { AustriaMarketPage } from './AustriaMarketPage';
import { PolandMarketPage } from './PolandMarketPage';
import { NetherlandsMarketPage } from './NetherlandsMarketPage';
import { DenmarkMarketPage } from './DenmarkMarketPage';
import { SwedenMarketPage } from './SwedenMarketPage';
import { SwitzerlandMarketPage } from './SwitzerlandMarketPage';
import { BelgiumMarketPage } from './BelgiumMarketPage';
import { FinlandMarketPage } from './FinlandMarketPage';
import { LuxembourgMarketPage } from './LuxembourgMarketPage';

interface MarketDetailPageProps {
  marketId?: string;
}

export const MarketDetailPage: React.FC<MarketDetailPageProps> = ({ marketId }) => {
  const { countrySlug } = useParams<{ countrySlug: string }>();
  const slug = (marketId || countrySlug || '').toLowerCase();

  if (slug === 'dubai' || slug === 'uae') {
    return <DubaiMarketPage />;
  }

  if (slug === 'usa' || slug === 'us' || slug === 'united-states' || slug === 'united_states') {
    return <UsaMarketPage />;
  }

  if (slug === 'australia') {
    return <AustraliaMarketPage />;
  }

  if (slug === 'uk' || slug === 'united-kingdom' || slug === 'united_kingdom' || slug === 'britain') {
    return <UkMarketPage />;
  }

  if (slug === 'singapore') {
    return <SingaporeMarketPage />;
  }

  if (slug === 'germany' || slug === 'deutschland') {
    return <GermanyMarketPage />;
  }

  if (slug === 'paris' || slug === 'france') {
    return <ParisMarketPage />;
  }

  if (slug === 'saudi-arabia' || slug === 'saudi_arabia') {
    return <SaudiArabiaMarketPage />;
  }

  if (slug === 'abu-dhabi' || slug === 'abu_dhabi' || slug === 'abudhabi') {
    return <AbuDhabiMarketPage />;
  }

  if (slug === 'norway' || slug === 'norge') {
    return <NorwayMarketPage />;
  }

  if (slug === 'ireland' || slug === 'éire' || slug === 'eire') {
    return <IrelandMarketPage />;
  }

  if (slug === 'austria' || slug === 'österreich' || slug === 'oesterreich') {
    return <AustriaMarketPage />;
  }

  if (slug === 'poland' || slug === 'polska') {
    return <PolandMarketPage />;
  }

  if (slug === 'netherlands' || slug === 'nederland' || slug === 'holland') {
    return <NetherlandsMarketPage />;
  }

  if (slug === 'denmark' || slug === 'danmark') {
    return <DenmarkMarketPage />;
  }

  if (slug === 'sweden' || slug === 'sverige') {
    return <SwedenMarketPage />;
  }

  if (slug === 'switzerland' || slug === 'schweiz' || slug === 'suisse' || slug === 'svizzera') {
    return <SwitzerlandMarketPage />;
  }

  if (slug === 'belgium' || slug === 'belgië' || slug === 'belgique' || slug === 'belgien') {
    return <BelgiumMarketPage />;
  }

  if (slug === 'finland' || slug === 'suomi') {
    return <FinlandMarketPage />;
  }

  if (slug === 'luxembourg' || slug === 'lëtzebuerg' || slug === 'letzebuerg') {
    return <LuxembourgMarketPage />;
  }

  const market: TargetMarket | undefined = TARGET_MARKETS[slug];

  if (!market) {
    return <Navigate to="/global-markets" replace />;
  }

  return (
    <>
      <SEO
        title={market.seoTitle}
        description={market.seoDescription}
        keywords={market.keywords}
        ogImage={market.flag}
        canonicalUrl={`https://mayaasolutions.in/global-markets/${market.id}`}
        schema={[
          getBreadcrumbSchema([
            { name: 'Home', urlPath: '/' },
            { name: 'Global Markets', urlPath: '/global-markets' },
            { name: market.name, urlPath: `/global-markets/${market.id}` },
          ]),
        ]}
      />

      <main className="min-h-screen bg-[#F7F7F5] text-studio-100 selection:bg-studio-100 selection:text-white font-sans antialiased overflow-x-hidden pt-24 sm:pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          {/* ==================================================
              01. RETURN NAVIGATION MECHANISM
          ================================================== */}
          <div className="mb-8 sm:mb-12">
            <Link
              to="/global-markets"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-[#E5E5E2] hover:border-studio-100 text-xs font-mono font-bold text-studio-400 hover:text-studio-100 uppercase tracking-widest transition-all shadow-xs group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Back to Global Markets</span>
            </Link>
          </div>

          {/* ==================================================
              02. MARKET HEADER & IDENTITY
          ================================================== */}
          <div className="bg-white border border-[#E5E5E2] rounded-3xl p-6 sm:p-10 md:p-12 mb-10 sm:mb-12 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
              
              {/* Full-Color Country Flag Thumbnail */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-24 sm:w-28 md:w-32 aspect-[3/2] rounded-2xl overflow-hidden border border-[#E5E5E2] bg-[#F7F7F5] shadow-sm shrink-0 flex items-center justify-center p-0"
              >
                <img
                  src={market.flag}
                  alt={`${market.name} Flag`}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Title & Classification */}
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2.5">
                  <span className="inline-block px-3 py-1 bg-studio-900 border border-[#E5E5E2] rounded-md text-[11px] font-mono font-bold text-studio-100 uppercase tracking-widest">
                    {market.sublabel}
                  </span>
                  <span className="text-xs font-mono text-studio-400">
                    / {market.slug}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-studio-100 tracking-tight leading-tight">
                  {market.displayName || market.name}
                </h1>

                <p className="text-xs sm:text-sm text-studio-400 font-mono uppercase tracking-wider">
                  Target Market Space · Mayaa Solutions International Client Hub
                </p>
              </div>

            </div>
          </div>

          {/* ==================================================
              03. RESERVED CONTENT WORKSPACE (UNPOPULATED DEVELOPMENT FOUNDATION)
          ================================================== */}
          <section className="bg-white border border-[#E5E5E2] rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm space-y-8 sm:space-y-10">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F0F0EE] pb-6 sm:pb-8">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-studio-400 uppercase tracking-widest">
                  <Clock className="w-3.5 h-3.5 text-studio-400" />
                  <span>Phase: Technical Foundation & Reserved Content Area</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-studio-100 tracking-tight">
                  Market Research & Content Workspace · {market.name}
                </h2>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-studio-900 border border-[#E5E5E2] text-xs font-mono font-bold text-studio-400 uppercase tracking-wider self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Content Reserved</span>
              </div>
            </div>

            <div className="space-y-4 max-w-3xl">
              <p className="text-sm sm:text-base text-studio-400 leading-relaxed">
                This dedicated space is reserved for <strong className="text-studio-100 font-bold">{market.displayName || market.name}</strong>. Market-specific research, validated business opportunities, sector demand, and tailored service capabilities will be added individually for this market in the upcoming phase.
              </p>
              <p className="text-xs sm:text-sm font-mono text-studio-400">
                Notice: Generic marketing copy and artificial sector assumptions are intentionally excluded to ensure authentic, tailored market positioning.
              </p>
            </div>

            {/* Reserved Structural Slots */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-2">
              
              {/* Slot 01 */}
              <div className="p-6 rounded-2xl bg-[#F7F7F5] border border-dashed border-[#D4D4D0] space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-studio-400 uppercase tracking-wider">
                    SLOT 01 · MARKET OPPORTUNITIES
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-[#E5E5E2] text-studio-400">
                    Pending Research
                  </span>
                </div>
                <h3 className="text-base font-bold text-studio-100">
                  Local Demand & Growth Dynamics
                </h3>
                <p className="text-xs text-studio-400 leading-relaxed">
                  Reserved for validated commercial opportunities, local operational challenges, and cross-border expansion requirements specific to {market.name}.
                </p>
              </div>

              {/* Slot 02 */}
              <div className="p-6 rounded-2xl bg-[#F7F7F5] border border-dashed border-[#D4D4D0] space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-studio-400 uppercase tracking-wider">
                    SLOT 02 · TARGET SECTORS
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-[#E5E5E2] text-studio-400">
                    Pending Research
                  </span>
                </div>
                <h3 className="text-base font-bold text-studio-100">
                  High-Value Client Categories
                </h3>
                <p className="text-xs text-studio-400 leading-relaxed">
                  Reserved for industry sector priorities and target client profiles reflecting {market.name}’s economic landscape.
                </p>
              </div>

              {/* Slot 03 */}
              <div className="p-6 rounded-2xl bg-[#F7F7F5] border border-dashed border-[#D4D4D0] space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-studio-400 uppercase tracking-wider">
                    SLOT 03 · SOLUTIONS & SERVICES
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-[#E5E5E2] text-studio-400">
                    Pending Research
                  </span>
                </div>
                <h3 className="text-base font-bold text-studio-100">
                  Relevant Mayaa Solutions Capabilities
                </h3>
                <p className="text-xs text-studio-400 leading-relaxed">
                  Reserved for tailored solution packages across Brand Building, Business Systems, Digital Products, and Growth Management.
                </p>
              </div>

              {/* Slot 04 */}
              <div className="p-6 rounded-2xl bg-[#F7F7F5] border border-dashed border-[#D4D4D0] space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-studio-400 uppercase tracking-wider">
                    SLOT 04 · ENGAGEMENT & DELIVERY
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-[#E5E5E2] text-studio-400">
                    Pending Research
                  </span>
                </div>
                <h3 className="text-base font-bold text-studio-100">
                  Delivery Framework & Case Studies
                </h3>
                <p className="text-xs text-studio-400 leading-relaxed">
                  Reserved for relevant verified case studies, remote delivery frameworks, and market-specific collaboration protocols.
                </p>
              </div>

            </div>

            {/* Direct Inquiry Action Bar */}
            <div className="pt-6 sm:pt-8 border-t border-[#F0F0EE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-studio-400 font-medium">
                Planning an initiative or project in <span className="font-bold text-studio-100">{market.name}</span>?
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to={`/contact?market=${market.slug}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-studio-100 text-studio-950 hover:bg-studio-200 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md group"
                >
                  <span>Discuss {market.name} Project</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/global-markets"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-studio-100 hover:bg-studio-900 border border-[#E5E5E2] font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all text-center"
                >
                  View All Markets
                </Link>
              </div>
            </div>

          </section>

        </div>
      </main>
    </>
  );
};
