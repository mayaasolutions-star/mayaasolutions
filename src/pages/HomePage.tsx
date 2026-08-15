import React from 'react';
import { SEO } from '../components/SEO';
import { Hero } from '../sections/Hero';
import { StudioOverview } from '../sections/StudioOverview';
import { ServicesEditorial } from '../sections/ServicesEditorial';
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
        title="Mayaa Solutions | Premium Business Growth Studio • Branding, Websites & Digital Strategy"
        description="Mayaa Solutions is a bespoke business growth studio crafting high-end brand identities, website design, growth marketing, and business strategy."
      />
      <main className="overflow-hidden">
        <Hero />
        <StudioOverview />
        <ServicesEditorial />
        <StatsCounter />
        <PortfolioMagazine onSelectProject={onSelectProject} />
        <ProcessTimeline />
        <TestimonialsQuote />
        <ContactCTA />
      </main>
    </>
  );
};
