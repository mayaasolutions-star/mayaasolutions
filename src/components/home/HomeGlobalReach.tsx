import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe2, MapPin, Building2, ExternalLink } from 'lucide-react';

interface MarketItem {
  name: string;
  slug: string;
  region: string;
  flag: string;
}

const FEATURED_MARKETS: MarketItem[] = [
  { name: 'Dubai & UAE', slug: 'dubai', region: 'Middle East', flag: '🇦🇪' },
  { name: 'United Kingdom', slug: 'uk', region: 'Europe', flag: '🇬🇧' },
  { name: 'United States', slug: 'usa', region: 'North America', flag: '🇺🇸' },
  { name: 'Germany', slug: 'germany', region: 'Europe', flag: '🇩🇪' },
  { name: 'Singapore', slug: 'singapore', region: 'Southeast Asia', flag: '🇸🇬' },
  { name: 'Australia', slug: 'australia', region: 'Oceania', flag: '🇦🇺' },
  { name: 'France (Paris)', slug: 'paris', region: 'Europe', flag: '🇫🇷' },
  { name: 'Saudi Arabia', slug: 'saudi-arabia', region: 'Middle East', flag: '🇸🇦' },
];

export const HomeGlobalReach: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-neutral-950 text-white border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-3">
            Global Capability & Domestic Engine
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Headquartered in Bangalore. Serving businesses across India and 20 international markets.
          </h2>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
            We do not claim satellite offices where we do not have them. Instead, our centralized engineering and brand design studio in Bangalore works collaboratively with founders and leadership teams worldwide through clear documentation, precise roadmaps, and timezone-aligned sprints.
          </p>
        </div>

        {/* 2-Column Split: India HQ Anchor + Global Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* India HQ Anchor (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-8 md:p-10 rounded-2xl bg-black border border-neutral-800 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 mb-6">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Primary Studio & Technology Hub</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                India: Our Operational Foundation
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                India is both our home market and the operational heartbeat of our global engagements. From high-growth Indian startups to established enterprise manufacturers, our domestic client work grounds us in rapid execution, rigorous cost efficiency, and large-scale digital architecture.
              </p>

              <div className="space-y-3 pt-4 border-t border-neutral-900 mb-8">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>Location</span>
                  <span className="text-white font-semibold">Bangalore, Karnataka, India</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>Core Focus</span>
                  <span className="text-white font-semibold">Brand Strategy · Web · BMS Engineering</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>Delivery Model</span>
                  <span className="text-white font-semibold">Direct Collaboration & Dedicated Teams</span>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
            >
              <span>Connect With Bangalore HQ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* International Markets Grid (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-6">
              {FEATURED_MARKETS.map((market, idx) => (
                <motion.div
                  key={market.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <Link
                    to={`/global-markets/${market.slug}`}
                    className="group block p-4 rounded-xl bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800/80 hover:border-neutral-700 transition-all"
                  >
                    <div className="text-2xl mb-2">{market.flag}</div>
                    <h4 className="text-sm font-bold text-white group-hover:text-neutral-200 transition-colors flex items-center justify-between">
                      <span>{market.name}</span>
                      <ArrowRight className="w-3 h-3 text-neutral-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                    </h4>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mt-1">
                      {market.region}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Markets Directory CTA Box */}
            <div className="p-6 rounded-xl bg-neutral-900/30 border border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Looking for market-specific information?
                </h4>
                <p className="text-xs text-neutral-400">
                  Explore tailored considerations for all 20 international markets we serve.
                </p>
              </div>
              <Link
                to="/global-markets"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-neutral-700 transition-all"
              >
                <span>View All 20 Markets</span>
                <Globe2 className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
