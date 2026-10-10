import React from 'react';
import { SEO } from '../components/SEO';
import { Hero } from '../sections/Hero';
import { ProjectItem } from '../constants/portfolioData';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, PROFESSIONAL_SERVICE_SCHEMA } from '../utils/seoMetadata';

interface HomePageProps {
  onSelectProject?: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <SEO
        title="Mayaa Solutions | Strategic Brand, Digital Experiences & Business Systems"
        description="Bespoke brand building, high-converting website design, and custom business management systems engineered for ambitious businesses in India and global markets."
        canonicalUrl="https://mayaasolutions.in/"
        schema={[ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, PROFESSIONAL_SERVICE_SCHEMA]}
      />
      <main className="h-[100dvh] w-full overflow-hidden bg-black">
        <Hero />
      </main>
    </>
  );
};
