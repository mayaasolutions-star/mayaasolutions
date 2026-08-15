import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PRODUCTS_DATA, ProductItem } from '../constants/productsData';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';

interface ProductsPageProps {
  onOpenCheckout?: (product: ProductItem) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenCheckout }) => {
  const getProductsByIds = (ids: string[]) => {
    return ids
      .map((id) => PRODUCTS_DATA.find((p) => p.id === id))
      .filter((p): p is ProductItem => p !== undefined);
  };

  const businessProducts = getProductsByIds([
    'build-my-brand',
    'build-my-website',
    'design-my-logo',
    'make-my-brand-premium',
    'name-my-business',
    'before-you-build-a-brand',
    'before-you-launch',
  ]);

  const creatorProducts = getProductsByIds([
    'before-you-publish',
    'before-you-design',
    'before-you-prompt',
  ]);

  const pmProducts = getProductsByIds([
    'pm-resume-cover',
    'pm-career-advancement',
    'pm-behind-the-interview',
  ]);

  const audienceGroups = [
    {
      id: 'business-owners',
      heading: 'Build & Grow Your Business',
      subtitle: 'Everything you need to build a stronger brand, website and business.',
      products: businessProducts,
    },
    {
      id: 'designers-marketers-ai',
      heading: 'Create Better. Work Faster.',
      subtitle: 'Resources that simplify design, content creation and AI-powered workflows.',
      products: creatorProducts,
    },
    {
      id: 'product-managers',
      heading: 'Grow Your Product Career',
      subtitle: 'Templates and practical guides to help you stand out and move forward.',
      products: pmProducts,
    },
  ];

  return (
    <>
      <SEO
        title="Products & Resources | Mayaa Solutions"
        description="Practical resources and personalised services for businesses, creatives and product professionals."
      />

      <main className="pt-20 pb-16 bg-studio-950">
        
        {/* Editorial Centered Products Hero Section */}
        <section className="relative max-w-4xl mx-auto px-6 text-center pt-8 pb-10 border-b border-studio-850 mb-8 space-y-4">
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-studio-100 inline-block" />
            <span className="text-xs font-extrabold text-studio-100 uppercase tracking-widest">
              Digital Resources & Packages
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight leading-tight">
            Made to Help You <br className="hidden sm:block" />
            <span className="text-[#171717] font-extrabold">Build Better.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed max-w-xl mx-auto">
            Resources and personalized services designed to help you make better business decisions.
          </p>
        </section>

        {/* Section Navigation / Category Anchor Strip */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-12 pt-4">
          <div className="flex flex-wrap items-center justify-center gap-3 py-4 px-6 bg-studio-900 rounded-2xl border border-studio-850">
            {audienceGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="px-5 py-2 rounded-full bg-white border border-studio-850 text-xs font-extrabold text-studio-100 hover:text-studio-300 transition-all shadow-sm flex items-center gap-2"
              >
                <span>{group.heading}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Audience Product Groups */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 pb-12">
          {audienceGroups.map((group) => (
            <section key={group.id} id={group.id} className="space-y-8 scroll-mt-28">
              {/* Group Header */}
              <div className="border-b border-studio-850 pb-4 space-y-1 text-center">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-studio-100 tracking-tight">
                  {group.heading}
                </h2>
                <p className="text-sm sm:text-base text-studio-300 font-normal">
                  {group.subtitle}
                </p>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.products.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.slug}`}
                    className="rounded-3xl p-6 sm:p-8 bg-white border border-studio-850 shadow-sm flex flex-col justify-between space-y-6 hover:border-studio-700 transition-all duration-300 relative group cursor-pointer"
                  >
                    <div className="space-y-5">
                      {/* Clean Product Cover Image */}
                      <div className="h-48 rounded-2xl overflow-hidden border border-studio-850 relative bg-studio-900">
                        <img
                          src={product.heroImage}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full border border-studio-850 text-studio-100 text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
                          {product.categoryLabel}
                        </div>
                        <div className="absolute bottom-3 right-3 px-3 py-1 bg-studio-100 text-white rounded-full text-xs font-mono font-extrabold shadow-sm">
                          {product.price}
                        </div>
                      </div>

                      {/* Product Title */}
                      <div className="space-y-1">
                        <h3 className="text-xl font-extrabold text-studio-100 group-hover:text-studio-300 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-xs text-studio-300 line-clamp-2 font-normal leading-relaxed">
                          {product.summary}
                        </p>
                      </div>

                      {/* Key Highlights */}
                      <div className="space-y-1.5 pt-2 border-t border-studio-850">
                        {product.features.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-studio-300 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-studio-100 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Single Action Button */}
                    <div className="pt-2">
                      <div className="w-full py-3.5 bg-studio-100 text-studio-950 font-extrabold text-xs uppercase tracking-wider rounded-full transition-all text-center flex items-center justify-center gap-2 shadow-sm group-hover:bg-studio-200">
                        <span>View Product ({product.price})</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

      </main>
    </>
  );
};
