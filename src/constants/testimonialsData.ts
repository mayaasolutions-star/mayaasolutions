export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  stats?: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    quote: 'They understood what our business needed and executed properly. The increase in customer trust and inquiries is clear.',
    author: 'Rohan Patil',
    role: 'Founder',
    company: 'MotoTrek India',
    stats: '+180% Inquiries'
  },
  {
    id: '2',
    quote: 'Mayaa Solutions strengthened our digital presence through consistent content that educated riders, promoted our services, and built lasting community engagement.',
    author: 'Nitin Khairnar',
    role: 'Founder',
    company: "Biker's Choice"
  },
  {
    id: '3',
    quote: 'Mayaa Solutions gave us a clear brand strategy and guided our corporate rebrand with clarity from start to finish.',
    author: 'Director',
    role: '',
    company: 'Swaati Enterprises',
    stats: 'Enterprise Rebrand'
  }
];

export const STUDIO_STATS = [
  { value: '9+', label: 'Years Strategy Experience' },
  { value: '24+', label: 'Bespoke Projects Delivered' },
  { value: '15+', label: 'Brands & Products Scaled' },
  { value: '100k+', label: 'Active Users Reached' }
];
