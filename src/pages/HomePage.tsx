import React from 'react';
import { SEO } from '../components/SEO';
import { Hero } from '../sections/Hero';
import { StudioOverview } from '../sections/StudioOverview';
import { ServicesEditorial } from '../sections/ServicesEditorial';
import { IndustryPreview } from '../sections/IndustryPreview';
import { StatsCounter } from '../sections/StatsCounter';
import { PortfolioMagazine } from '../sections/PortfolioMagazine';
import { ProcessTimeline } from '../sections/ProcessTimeline';
import { TestimonialsQuote } from '../sections/TestimonialsQuote';
import { ContactCTA } from '../sections/ContactCTA';
import { ProjectItem } from '../constants/portfolioData';

interface HomePageProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectProject }) => {
  return (
    <>
      <SEO
        title="Mayaa Solutions | Brands, Websites, Digital Products & Business Tools"
        description="Mayaa Solutions builds brands, websites, digital products and business tools for businesses that want to build something meaningful."
      />
      <main className="overflow-hidden">
        <Hero />
        <StudioOverview />
        <ServicesEditorial />
        <IndustryPreview />
        <StatsCounter />
        <PortfolioMagazine onSelectProject={onSelectProject} />
        <ProcessTimeline />
        <TestimonialsQuote />
        <ContactCTA />
      </main>
    </>
  );
};
