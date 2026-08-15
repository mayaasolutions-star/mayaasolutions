import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../constants/servicesData';

export const ServicesEditorial: React.FC = () => {
  return (
    <section className="py-24 bg-studio-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-studio-400 uppercase block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-studio-100 leading-tight">
            Services Built to Scale Your Business.
          </h2>
          <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed">
            We help businesses grow through brand building, website design, growth marketing, and strategic business consulting.
          </p>
        </div>

        {/* 4 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="p-8 rounded-3xl bg-white border border-studio-850 hover:border-studio-700 shadow-sm transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <span className="text-xs font-extrabold text-studio-400 uppercase tracking-widest block">
                  Service {service.number}
                </span>
                <h3 className="text-xl font-extrabold text-studio-100 group-hover:text-studio-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-studio-400 font-normal leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
