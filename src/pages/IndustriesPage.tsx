import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';
import { ArrowRight } from 'lucide-react';

interface PriorityIndustry {
  id: string;
  name: string;
  description: string;
  image: string;
}

const PRIORITY_INDUSTRIES: PriorityIndustry[] = [
  {
    id: 'architecture',
    name: 'Architecture',
    description: 'Websites, portfolio platforms and brand systems for architectural studios and spatial practices.',
    image: '/images/industries/architecture.webp',
  },
  {
    id: 'interior-design',
    name: 'Interior Design',
    description: 'Visual identity, project showcases and digital presentations for interior architects and materials studios.',
    image: '/images/industries/interior-design.webp',
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    description: 'Digital flagships, reservation flows and brand systems for boutique hotels, resorts and homestays.',
    image: '/images/industries/hospitality.webp',
  },
  {
    id: 'restaurants',
    name: 'Restaurants',
    description: 'Brand identity, digital menus and custom web experiences for chef-led dining and culinary venues.',
    image: '/images/industries/restaurants.webp',
  },
  {
    id: 'travel-tourism',
    name: 'Travel & Tourism',
    description: 'Compelling digital journeys, booking flows and brand positioning for travel operators and expeditions.',
    image: '/images/industries/travel-tourism.webp',
  },
  {
    id: 'fashion-lifestyle',
    name: 'Fashion & Lifestyle',
    description: 'Refined digital storefronts, lookbooks and brand systems for fashion houses and lifestyle labels.',
    image: '/images/industries/fashion-lifestyle.webp',
  },
  {
    id: 'jewellery',
    name: 'Jewellery & Luxury',
    description: 'Bespoke digital flagships and brand strategy for fine jewellery, watchmakers and luxury craftsmanship.',
    image: '/images/industries/jewellery.webp',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'High-end property showcases, development websites and brand collateral for premium real estate.',
    image: '/images/industries/real-estate.webp',
  },
  {
    id: 'mobility-outdoors',
    name: 'Mobility & Outdoors',
    description: 'Digital platforms, e-commerce and brand systems for automotive, riding, sports and outdoor gear.',
    image: '/images/industries/automotive.webp',
  },
];

interface IndustryGroup {
  number: string;
  name: string;
  summary: string;
  sectors: string[];
}

const INDUSTRY_GROUPS: IndustryGroup[] = [
  {
    number: '01',
    name: 'Spaces & Places',
    summary: 'Studios, properties and environments that shape physical experiences.',
    sectors: [
      'Architecture',
      'Interior Design',
      'Real Estate',
      'Hospitality',
      'Hotels & Resorts',
      'Homestays',
    ],
  },
  {
    number: '02',
    name: 'Food, Travel & Experiences',
    summary: 'Experiential concepts, culinary ventures and travel operators.',
    sectors: [
      'Restaurants',
      'Travel & Tourism',
      'Events & Experiences',
      'Destination Experiences',
      'Food & Beverage',
    ],
  },
  {
    number: '03',
    name: 'Fashion, Luxury & Lifestyle',
    summary: 'Design-led labels, personal luxury, jewellery and heritage makers.',
    sectors: [
      'Fashion',
      'Jewellery',
      'Watches',
      'Beauty',
      'Wellness',
      'Luxury Goods',
      'Lifestyle Brands',
      'Craft & Heritage Brands',
    ],
  },
  {
    number: '04',
    name: 'Mobility, Sport & Outdoors',
    summary: 'Vehicles, adventure equipment, active lifestyle and expedition brands.',
    sectors: [
      'Automotive',
      'Bikes & Riding',
      'Sports',
      'Trekking & Outdoor',
      'Adventure',
      'Travel Gear',
      'Riding Gear',
      'Outdoor Equipment',
    ],
  },
  {
    number: '05',
    name: 'Professional & Specialist Businesses',
    summary: 'Advisory practices, technical consultancies and institutional firms.',
    sectors: [
      'CA & Accounting',
      'Legal',
      'Finance',
      'Consulting',
      'Healthcare',
      'Wellness Services',
      'Education',
      'Training',
      'Professional Services',
    ],
  },
  {
    number: '06',
    name: 'Products, Technology & Business',
    summary: 'Software platforms, B2B enterprises, manufacturers and digital products.',
    sectors: [
      'Technology',
      'SaaS',
      'IT & Software',
      'E-commerce',
      'Consumer Products',
      'Manufacturing',
      'Engineering',
      'Industrial Businesses',
      'B2B Businesses',
      'Specialist Products',
    ],
  },
];

export const IndustriesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Industries We Build For | Mayaa Solutions"
        description="We build across industries. From premium brands and hospitality to professional services and technology, Mayaa builds brands, websites, digital products and business systems."
        canonicalUrl="https://mayaasolutions.in/industries"
        schema={[
          getBreadcrumbSchema([
            { name: 'Home', urlPath: '/' },
            { name: 'Industries', urlPath: '/industries' },
          ]),
        ]}
      />

      <main className="bg-studio-950">
        
        {/* Header Section (Centered Composition) */}
        <section className="pt-28 pb-14 md:pt-32 md:pb-18 border-b border-studio-850">
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-4">
            
            <div className="flex items-center justify-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-studio-100 inline-block" />
              <span className="text-xs font-extrabold text-studio-100 uppercase tracking-widest">
                Industry Coverage
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.08] text-center">
              WE BUILD ACROSS INDUSTRIES.
            </h1>

            <p className="text-lg sm:text-xl text-[#333333] font-normal leading-relaxed text-center max-w-3xl mx-auto">
              From premium brands and hospitality to professional services, specialist businesses and growing companies, Mayaa builds brands, websites, digital products and business systems across industries.
            </p>

            <div className="pt-1">
              <p className="text-sm sm:text-base font-semibold text-studio-400 text-center">
                These are some of the spaces we're particularly interested in working with.
              </p>
            </div>

            <div className="pt-2 flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-studio-850 rounded-full text-xs font-semibold text-studio-400 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                Priority areas, not limitations. All serious businesses are welcome.
              </span>
            </div>

          </div>
        </section>

        {/* Section 1: Areas We're Particularly Interested In (Visual Cards) */}
        <section className="py-14 md:py-18">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
            <div className="max-w-3xl mx-auto text-center space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-studio-400 block">
                Priority Focus
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
                AREAS WE'RE PARTICULARLY INTERESTED IN
              </h2>
              <p className="text-sm sm:text-base text-studio-300 font-normal leading-relaxed">
                Design-conscious, experience-led and specialist fields where we actively focus our craft.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:auto-rows-fr w-full">
              {PRIORITY_INDUSTRIES.map((ind, idx) => (
                <motion.article
                  key={ind.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  className="rounded-3xl bg-white border border-studio-850 overflow-hidden shadow-sm hover:shadow-md hover:border-studio-700 transition-all flex flex-col h-full group"
                >
                  {/* Image Container */}
                  <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-studio-900 shrink-0">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#171717] tracking-tight">
                      {ind.name}
                    </h3>
                    <p className="text-sm text-studio-300 font-normal leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: And Beyond (Connected Industry Groups) */}
        <section className="py-14 md:py-20 bg-studio-900 border-t border-b border-studio-850">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
            <div className="max-w-3xl mx-auto text-center space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-studio-400 block">
                Full Coverage
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
                AND BEYOND
              </h2>
              <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed">
                Our work isn't limited to these industries. If you have a business, brand, website or digital product to build, we'd love to hear about it.
              </p>
            </div>

            {/* 6 Connected Industry Groups Grid (Row-Balanced, Substantial Scale) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {INDUSTRY_GROUPS.map((group) => (
                <div
                  key={group.number}
                  className="p-7 sm:p-8 rounded-3xl bg-white border border-studio-850 shadow-sm flex flex-col justify-start h-full"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-studio-400 uppercase tracking-widest block">
                      Group {group.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight leading-snug min-h-[32px] sm:min-h-[60px] flex items-start">
                      {group.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">
                      {group.summary}
                    </p>
                  </div>

                  {/* Sectors Pills */}
                  <div className="pt-4 border-t border-studio-850 mt-5">
                    <div className="flex flex-wrap gap-2 pt-0.5">
                      {group.sectors.map((sector, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-semibold rounded-full bg-studio-900 border border-studio-850 text-studio-200"
                        >
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Final Call to Action (Compact Closing Section) */}
        <section className="py-16 md:py-20 bg-studio-950">
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center space-y-5">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">
              DON'T SEE YOUR INDUSTRY?
            </h2>

            <div className="space-y-1.5 max-w-xl mx-auto">
              <p className="text-lg sm:text-xl text-studio-100 font-bold">
                That's okay.
              </p>
              <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed">
                Mayaa works across industries. If you have a brand, website, digital product or business tool to build, we'd like to hear about it.
              </p>
            </div>

            <div className="pt-2 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-studio-100 text-studio-950 font-extrabold text-sm uppercase tracking-wider rounded-full hover:bg-studio-200 transition-all shadow-md"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};
