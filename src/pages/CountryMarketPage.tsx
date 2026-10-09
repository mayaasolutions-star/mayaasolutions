import React from 'react';
import { MarketDetailPage } from './MarketDetailPage';

interface CountryMarketPageProps {
  countryOverride?: string;
}

export const CountryMarketPage: React.FC<CountryMarketPageProps> = ({ countryOverride }) => {
  return <MarketDetailPage marketId={countryOverride} />;
};
