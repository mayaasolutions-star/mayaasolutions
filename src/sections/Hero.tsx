import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative flex items-center pt-28 pb-14 md:pt-32 md:pb-18 bg-studio-950 text-left overflow-hidden border-b border-studio-850">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Asymmetric Editorial Typography Content */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5"
            >
              <span className="w-2 h-2 rounded-full bg-studio-100 inline-block" />
              <span className="text-xs font-extrabold text-studio-100 uppercase tracking-widest">
                Mayaa Solutions
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.08]"
            >
              We build brands, <br />
              websites, digital products <br />
              <span className="text-[#171717] font-extrabold">& business tools.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed max-w-xl"
            >
              For businesses that want to build something meaningful. Strategy, design, and engineering focused on real business momentum.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#171717] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-[#292825] transition-all shadow-md"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                to="/our-work"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-[#171717] text-[#171717] font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-studio-900 transition-all shadow-sm"
              >
                View Our Work
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Immersive Media Frame with Integrated Video */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-studio-850 shadow-xl h-[280px] sm:h-[400px] lg:h-[450px] bg-studio-900 group"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src="/images/mayaa_solutions_home_hero.mp4" type="video/mp4" />
              </video>
              
              {/* Subtle Hairline Gradient Frame Tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-studio-950/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
