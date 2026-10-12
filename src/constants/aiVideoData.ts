export interface AIVideoItem {
  id: string;
  title: string;
  industry: string;
  filename: string;
  videoSrc: string;
  description: string;
  tags: string[];
  duration: string; // ISO 8601 duration
  durationSec: number;
}

export const AI_VIDEOS: AIVideoItem[] = [
  {
    id: 'automotive',
    title: 'Automotive Motion & Craft',
    industry: 'Automotive & Precision Engineering',
    filename: 'AI-Video-Automative.mp4',
    videoSrc: '/images/AI-Video-Automative.mp4',
    description: 'Dynamic automotive sequences emphasizing aerodynamics, engineered finishes, and high-energy motion aesthetics.',
    tags: ['Automotive', 'Engineering', 'Dynamic Motion'],
    duration: 'PT6S',
    durationSec: 6.43,
  },
  {
    id: 'fashion',
    title: 'Contemporary Fashion Showcase',
    industry: 'Fashion & Luxury Apparel',
    filename: 'AI-Video-Fashion.mp4',
    videoSrc: '/images/AI-Video-Fashion.mp4',
    description: 'Editorial-grade runway aesthetics, fluid fabric physics, and minimalist styling tailored for apparel collections.',
    tags: ['Fashion', 'Editorial', 'Runway'],
    duration: 'PT12S',
    durationSec: 12.04,
  },
  {
    id: 'interior-fitout',
    title: 'Architectural Interiors & Spatial Design',
    industry: 'Interior Design & Spatial Fit-Outs',
    filename: 'AI-Video-Interior-Fitout.mp4',
    videoSrc: '/images/AI-Video-Interior-Fitout.mp4',
    description: 'Curated architectural walkthroughs highlighting materiality, bespoke joinery, and ambient interior lighting.',
    tags: ['Interior Design', 'Architecture', 'Spatial Fit-Out'],
    duration: 'PT6S',
    durationSec: 6.43,
  },
  {
    id: 'jewellery',
    title: 'Haute Joaillerie & Precious Metals',
    industry: 'Jewellery & Luxury Goods',
    filename: 'AI-Video-Jewellery.mp4',
    videoSrc: '/images/AI-Video-Jewellery.mp4',
    description: 'Ultra-refined macro details, gem brilliance, and artisanal gold craftsmanship for heritage and contemporary jewelers.',
    tags: ['Haute Joaillerie', 'Precious Metals', 'Macro Craft'],
    duration: 'PT9S',
    durationSec: 9.43,
  },
  {
    id: 'perfume',
    title: 'Fragrance & Sensory Essence',
    industry: 'Luxury Fragrance & Beauty',
    filename: 'AI-Video-Perfume.mp4',
    videoSrc: '/images/AI-Video-Perfume.mp4',
    description: 'Atmospheric visual storytelling exploring fluid glass refraction, botanicals, and high-fashion perfume campaigns.',
    tags: ['Fragrance', 'Sensory Branding', 'Luxury Packaging'],
    duration: 'PT12S',
    durationSec: 12.04,
  },
  {
    id: 'real-estate',
    title: 'Prime Architectural Real Estate',
    industry: 'Real Estate & Property Development',
    filename: 'AI-Video-RealEstate.mp4',
    videoSrc: '/images/AI-Video-RealEstate.mp4',
    description: 'Cinematic perspectives capturing landmark structures, natural elevation, and high-end residential living environments.',
    tags: ['Real Estate', 'Developments', 'Cinematic Architecture'],
    duration: 'PT8S',
    durationSec: 8.43,
  },
  {
    id: 'hospitality',
    title: 'Luxury Travel & Hospitality',
    industry: 'Hospitality & Luxury Travel',
    filename: 'AI-Video-Hospitality.mp4',
    videoSrc: '/images/AI-Video-Hospitality.mp4',
    description: 'Immersive travel cinematography, boutique resort atmospheres, and serene destination storytelling.',
    tags: ['Luxury Travel', 'Hospitality', 'Destination'],
    duration: 'PT10S',
    durationSec: 10.04,
  },
  {
    id: 'restaurant',
    title: 'Gastronomy & Culinary Atmosphere',
    industry: 'Hospitality & Fine Dining',
    filename: 'AI-Video-Restaurant.mp4',
    videoSrc: '/images/AI-Video-Restaurant.mp4',
    description: 'Sensory gastronomy narratives, table styling, and curated dining hospitality designed to evoke taste and luxury.',
    tags: ['Gastronomy', 'Culinary Arts', 'Fine Dining'],
    duration: 'PT10S',
    durationSec: 10.04,
  },
];
