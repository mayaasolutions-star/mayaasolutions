import React from 'react';
import { SEO } from '../components/SEO';
import { Hero } from '../sections/Hero';
import { ProjectItem } from '../constants/portfolioData';

interface HomePageProps {
  onSelectProject?: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <SEO
        title="Mayaa Solutions | Brands, Websites, Digital Products & Business Tools"
        description="Mayaa Solutions builds brands, websites, digital products and business tools for businesses that want to build something meaningful."
      />
      <main className="h-[100dvh] w-full overflow-hidden bg-black">
        <Hero />
      </main>
    </>
  );
};
