import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const ProductHeader: React.FC = () => {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/products/') && location.pathname !== '/products';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-studio-950/95 backdrop-blur-md border-b border-studio-850 py-4 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand Identity */}
        <Link to="/products" className="flex items-center gap-2 sm:gap-3 group">
          <img
            src="/images/mayaa-solutions-dark-logo.webp"
            alt="Mayaa Solutions"
            className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-studio-700 select-none">/</span>
          <span className="text-[10px] sm:text-xs font-mono font-extrabold uppercase tracking-widest text-studio-400 group-hover:text-studio-100 transition-colors">
            Digital Products
          </span>
        </Link>

        {/* Minimal Navigation */}
        <div className="flex items-center gap-2 sm:gap-4">
          {isDetailPage ? (
            <Link
              to="/products"
              className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-studio-400 hover:text-studio-100 transition-colors"
            >
              Browse All Products
            </Link>
          ) : (
            <a
              href="mailto:contact@mayaasolutions.in"
              className="text-[11px] sm:text-xs font-mono text-studio-400 hover:text-studio-100 transition-colors"
            >
              contact@mayaasolutions.in
            </a>
          )}
        </div>
      </div>
    </header>
  );
};
