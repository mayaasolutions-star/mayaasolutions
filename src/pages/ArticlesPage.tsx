import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ARTICLES_DATA } from '../constants/articlesData';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { ContactCTA } from '../sections/ContactCTA';

export const ArticlesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Insights & Strategy Guides | Mayaa Solutions Growth Studio"
        description="Read strategic essays and frameworks on brand building, website UX, business strategy, and digital growth."
      />

      <main className="pt-32 pb-20 bg-studio-950">
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-semibold tracking-widest text-studio-400 uppercase">
              Studio Thought Leadership
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#171717] leading-tight tracking-tight">
              Insights & Strategic <br />
              <span className="text-[#171717] font-extrabold">Frameworks.</span>
            </h1>
            <p className="text-lg text-studio-300 font-normal leading-relaxed">
              Curated essays on brand positioning, user experience architecture, business growth strategy, and scaling systems.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES_DATA.map((art) => (
              <Link
                key={art.id}
                to={`/insights/${art.slug}`}
                className="bg-white rounded-3xl overflow-hidden border border-studio-850 flex flex-col justify-between group hover:border-studio-700 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="h-52 overflow-hidden border-b border-studio-850 relative bg-studio-900">
                    <img
                      src={art.heroImage}
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-extrabold text-studio-100 border border-studio-850 uppercase shadow-sm">
                      {art.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-studio-400 font-medium">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-studio-400" /> {art.readTime}</span>
                    </div>

                    <h2 className="text-xl font-extrabold text-studio-100 group-hover:text-studio-300 transition-colors">
                      {art.title}
                    </h2>

                    <p className="text-xs text-studio-300 font-normal leading-relaxed line-clamp-3">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center gap-2 text-xs font-extrabold text-studio-100 group-hover:text-studio-300 transition-colors">
                  <span>Read Article</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <ContactCTA />
      </main>
    </>
  );
};
