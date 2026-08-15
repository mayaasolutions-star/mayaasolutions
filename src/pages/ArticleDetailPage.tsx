import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ARTICLES_DATA } from '../constants/articlesData';
import { ArrowLeft, Clock, Share2, Linkedin, Twitter } from 'lucide-react';
import { ContactCTA } from '../sections/ContactCTA';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES_DATA.find((a) => a.slug === slug) || ARTICLES_DATA[0];

  return (
    <>
      <SEO title={`${article.title} | Mayaa Solutions Insights`} description={article.summary} />

      <main className="pt-32 pb-24 bg-studio-950">
        <article className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
          
          <Link to="/insights" className="inline-flex items-center gap-2 text-xs font-mono text-studio-400 hover:text-studio-100 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>

          {/* Article Header */}
          <header className="space-y-6">
            <div className="flex items-center gap-4 text-xs font-mono text-studio-400">
              <span className="px-3 py-1 bg-white text-studio-100 border border-studio-850 rounded-full uppercase font-bold shadow-sm">
                {article.category}
              </span>
              <span>{article.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-studio-100" /> {article.readTime}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171717] leading-tight tracking-tight">
              {article.title}
            </h1>

            <p className="text-lg text-studio-300 font-normal leading-relaxed">
              {article.subtitle}
            </p>

            <div className="pt-4 border-t border-studio-850 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/images/pratiksha_kulkarni_profile.webp" alt={article.author} className="w-10 h-10 rounded-full object-cover border border-studio-850" />
                <div>
                  <h4 className="text-xs font-bold text-studio-100">{article.author}</h4>
                  <p className="text-[10px] font-mono text-studio-400">{article.authorTitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-studio-400">
                <Share2 className="w-4 h-4 text-studio-100" />
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noreferrer" className="hover:text-studio-100">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden border border-studio-850 h-96">
            <img src={article.heroImage} alt={article.title} className="w-full h-full object-cover" />
          </div>

          {/* Content Body */}
          <div className="space-y-10 text-studio-300 font-normal text-base md:text-lg leading-relaxed border-b border-studio-850 pb-16">
            {article.content.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-xl md:text-2xl font-display font-extrabold text-studio-100 pt-4">{sec.heading}</h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
                {sec.quote && (
                  <blockquote className="my-6 p-6 border-l-4 border-studio-100 bg-white border border-studio-850 rounded-r-2xl italic text-studio-100 font-serif text-xl shadow-sm">
                    "{sec.quote}"
                  </blockquote>
                )}
              </div>
            ))}
          </div>

        </article>

        <div className="pt-16">
          <ContactCTA />
        </div>
      </main>
    </>
  );
};
