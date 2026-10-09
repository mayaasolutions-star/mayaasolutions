import React from 'react';
import { SEO } from '../components/SEO';
import { ProjectItem } from '../constants/portfolioData';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, PROFESSIONAL_SERVICE_SCHEMA } from '../utils/seoMetadata';
import { HomeHero } from '../components/home/HomeHero';
import { HomeCorePillars } from '../components/home/HomeCorePillars';
import { HomeSystemsShowcase } from '../components/home/HomeSystemsShowcase';
import { HomeSelectedWork } from '../components/home/HomeSelectedWork';
import { HomeGlobalReach } from '../components/home/HomeGlobalReach';
import { HomeHowWeWork } from '../components/home/HomeHowWeWork';
import { HomeFinalCTA } from '../components/home/HomeFinalCTA';

interface HomePageProps {
  onSelectProject?: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectProject }) => {
  return (
    <>
      <SEO
        title="Mayaa Solutions | Brand Strategy, High-Performance Websites & Business Systems"
        description="Mayaa Solutions builds authoritative brands, responsive digital flagships, and custom business management systems (BMS) for companies in India and 20 international markets."
        canonicalUrl="https://mayaasolutions.in/"
        schema={[ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, PROFESSIONAL_SERVICE_SCHEMA]}
      />
      <main className="w-full min-h-screen bg-black text-white selection:bg-white selection:text-black">
        {/* 1. Immediate Clarity Hero */}
        <HomeHero />

        {/* 2. Core Capability Pillars (Brand, Websites, BMS) */}
        <HomeCorePillars />

        {/* 3. BMS Differentiator & Operational Architecture */}
        <HomeSystemsShowcase />

        {/* 4. Real Work & Portfolio Highlights */}
        <HomeSelectedWork onSelectProject={onSelectProject} />

        {/* 5. Bangalore HQ Foundation & 20 Global Markets */}
        <HomeGlobalReach />

        {/* 6. Disciplined 4-Stage Engagement Methodology */}
        <HomeHowWeWork />

        {/* 7. Conversion Consultation & Direct Communication */}
        <HomeFinalCTA />
      </main>
    </>
  );
};
