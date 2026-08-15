import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { Award, Target } from 'lucide-react';

export const StudioOverview: React.FC = () => {
  return (
    <section className="py-24 bg-studio-900 border-t border-b border-studio-850 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Showcase Block */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-studio-850 glass-card p-3 bg-white shadow-sm"
            >
              <img
                src="/images/about_mayaa_solutions.webp"
                alt="Mayaa Solutions Studio"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </motion.div>
          </div>

          {/* Editorial Copy */}
          <div className="lg:col-span-7 space-y-8">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-studio-400 uppercase block">
              Why Mayaa Solutions
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-studio-100 leading-[1.12] tracking-[-0.02em]">
              Design & Strategy <br />
              <span className="text-studio-100 block mt-1 font-extrabold">Focused on Results.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-1.5">
                <h3 className="text-base font-bold text-studio-100">Commercial Focus</h3>
                <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">
                  We align visual identity and web architecture directly with revenue goals.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-1.5">
                <h3 className="text-base font-bold text-studio-100">Strategic Clarity</h3>
                <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">
                  Clear brand positioning and custom web platforms built to scale.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-1.5">
                <h3 className="text-base font-bold text-studio-100">Purposeful Design</h3>
                <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">
                  Clean visual assets engineered for user engagement and conversion.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-1.5">
                <h3 className="text-base font-bold text-studio-100">Ongoing Partnership</h3>
                <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">
                  Direct strategic advisory to support your expansion as your business grows.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button to="/about" variant="outline" size="md">
                About Our Studio
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
