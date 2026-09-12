import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { Award, Target } from 'lucide-react';

export const StudioOverview: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-studio-900 border-t border-b border-studio-850 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Visual Showcase Block */}
          <div className="lg:col-span-5 relative h-full flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-studio-850 glass-card p-3 bg-white shadow-sm h-[320px] sm:h-[400px] lg:h-full w-full flex flex-col"
            >
              <div className="relative w-full h-full flex-1 rounded-2xl overflow-hidden">
                <img
                  src="/images/about_mayaa_solutions.webp"
                  alt="Mayaa Solutions"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Editorial Copy */}
          <div className="lg:col-span-7 space-y-8">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-studio-400 uppercase block">
              Why Mayaa Solutions
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-studio-100 leading-[1.12] tracking-[-0.02em]">
              Brand Strategy & Digital Craft <br />
              <span className="text-studio-100 block mt-1 font-extrabold">Built for Lasting Value.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 auto-rows-fr">
              <div className="p-5 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-1.5 h-full flex flex-col justify-start">
                <h3 className="text-base font-bold text-studio-100">Brand Perception & Design</h3>
                <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">
                  Distinctive visual identity and positioning that build trust and market recognition.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-1.5 h-full flex flex-col justify-start">
                <h3 className="text-base font-bold text-studio-100">Digital Experience</h3>
                <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">
                  Bespoke web platforms engineered for speed, clean UX, and seamless user conversion.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-1.5 h-full flex flex-col justify-start">
                <h3 className="text-base font-bold text-studio-100">Custom Products & Tools</h3>
                <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">
                  Tailored web applications, client portals, and automation built around your operations.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-studio-850 shadow-sm space-y-1.5 h-full flex flex-col justify-start">
                <h3 className="text-base font-bold text-studio-100">Strategic Thinking</h3>
                <p className="text-xs sm:text-sm text-studio-300 font-normal leading-relaxed">
                  Direct partner collaboration from scoping to launch, focused on tangible business impact.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button to="/about" variant="outline" size="md">
                About Mayaa Solutions
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
