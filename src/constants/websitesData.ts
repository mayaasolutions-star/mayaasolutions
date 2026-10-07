export interface WebsiteProject {
  id: string;
  projectNumber: string;
  name: string;
  category: string;
  url: string;
  previewUrl: string;
  displayUrl: string;
  fallbackImage: string;
  supportsEmbed: boolean;
}

export const ALL_WEBSITES_DATA: WebsiteProject[] = [
  {
    id: 'mototrek',
    projectNumber: '01',
    name: 'MotoTrek',
    category: 'Riding Gear & Adventure',
    url: 'https://mototrek.in/',
    previewUrl: 'https://mototrek.in/',
    displayUrl: 'mototrek.in',
    fallbackImage: '/images/websites/mototrek.png',
    supportsEmbed: true,
  },
  {
    id: 'swaati-enterprises',
    projectNumber: '02',
    name: 'Swaati Enterprises',
    category: 'Product Distribution & Business',
    url: 'https://www.swaatienterprises.com/',
    previewUrl: 'https://www.swaatienterprises.com/',
    displayUrl: 'swaatienterprises.com',
    fallbackImage: '/images/websites/swaatienterprises.png',
    supportsEmbed: true,
  },
  {
    id: 'ajavu',
    projectNumber: '03',
    name: 'Ajavu',
    category: 'Technology & Digital Experience',
    url: 'https://ajavu.tech/',
    previewUrl: 'https://ajavu.tech/',
    displayUrl: 'ajavu.tech',
    fallbackImage: '/images/websites/ajavu.png',
    supportsEmbed: false,
  },
  {
    id: 'g1-gold',
    projectNumber: '04',
    name: 'G1 Gold',
    category: 'Gold & Jewellery',
    url: 'https://g1gold.com/',
    previewUrl: 'https://g1gold.com/',
    displayUrl: 'g1gold.com',
    fallbackImage: '/images/websites/g1gold.png',
    supportsEmbed: false,
  },
  {
    id: 'vision-visa',
    projectNumber: '05',
    name: 'Vision Visa',
    category: 'Visa & Travel Services',
    url: 'https://visionvisa.in/',
    previewUrl: 'https://visionvisa.in/',
    displayUrl: 'visionvisa.in',
    fallbackImage: '/images/websites/visionvisa.png',
    supportsEmbed: true,
  },
];

// Active websites displayed on /websites (temporarily excludes Vision Visa)
export const WEBSITES_DATA: WebsiteProject[] = ALL_WEBSITES_DATA.filter(
  (project) => project.id !== 'vision-visa'
);
