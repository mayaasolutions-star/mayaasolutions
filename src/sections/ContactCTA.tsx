import React from 'react';
import { Link } from 'react-router-dom';

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-24 bg-studio-900 border-t border-b border-studio-850 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-6">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-studio-100 leading-tight">
          Ready to Build, Launch or Scale?
        </h2>

        <p className="text-lg sm:text-xl text-studio-300 max-w-xl mx-auto font-normal leading-relaxed">
          Tell us about your business and we will help you map out the right strategy.
        </p>

        <div className="pt-2 flex justify-center">
          <Link
            to="/contact"
            className="px-9 py-4 bg-studio-100 text-studio-950 font-extrabold text-sm uppercase tracking-wider rounded-full hover:bg-studio-200 transition-all shadow-md inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};
