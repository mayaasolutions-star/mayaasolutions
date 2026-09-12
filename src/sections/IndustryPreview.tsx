import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const IndustryPreview: React.FC = () => {
  const industries = [
    'Architecture',
    'Interiors',
    'Hospitality',
    'Restaurants',
    'Travel',
    'Fashion',
    'Real Estate',
  ];

  return (
    <section className="py-12 bg-studio-900 border-t border-b border-studio-850">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-studio-400 block">
            Focus Areas
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
            Industries We Love Working With
          </h3>
          <p className="text-xs sm:text-sm text-studio-300 font-medium tracking-wide">
            {industries.join(' • ')}
          </p>
        </div>

        <Link
          to="/industries"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-[#171717] text-[#171717] font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-studio-950 hover:text-white transition-all shadow-sm shrink-0"
        >
          <span>Explore Industries</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
