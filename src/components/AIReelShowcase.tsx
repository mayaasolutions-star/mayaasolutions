import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { AI_REELS } from '../constants/aiReelsData';
import { AIReelCard } from './AIReelCard';

export const AIReelsShowcase: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  const updateScrollButtons = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [updateScrollButtons]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;

    // Scroll by roughly 2 cards width
    const scrollAmount = Math.max(el.clientWidth * 0.75, 300);
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="w-full bg-white text-[#171717] border-t border-[#E5E5E2] py-20 sm:py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* Centered Heading Block */}
        <div className="relative max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono font-bold text-[#666666] uppercase tracking-widest block">
            SHORT-FORM REELS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight leading-tight">
            Made for the Scroll.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#555555] font-normal leading-relaxed max-w-2xl mx-auto">
            Vertical films for Instagram Reels, YouTube Shorts and paid campaigns.
          </p>

          {/* Minimal Desktop Prev/Next Controls */}
          <div className="hidden sm:flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous reels"
              className={`p-3 rounded-full border border-[#E5E5E2] transition-all duration-200 ${
                canScrollLeft
                  ? 'hover:border-black hover:bg-black hover:text-white text-[#171717] cursor-pointer'
                  : 'opacity-30 cursor-not-allowed text-[#999999]'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next reels"
              className={`p-3 rounded-full border border-[#E5E5E2] transition-all duration-200 ${
                canScrollRight
                  ? 'hover:border-black hover:bg-black hover:text-white text-[#171717] cursor-pointer'
                  : 'opacity-30 cursor-not-allowed text-[#999999]'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container - Exactly one horizontal row */}
        <div className="relative -mx-6 md:-mx-12 px-6 md:px-12">
          <div
            ref={scrollContainerRef}
            tabIndex={0}
            role="region"
            aria-label="Short-form reels carousel"
            className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden pb-4 pt-2 scroll-smooth snap-x snap-mandatory focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-2xl [scrollbar-width:thin] [scrollbar-color:#D5D5D0_transparent] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#D5D5D0] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#171717]"
          >
            {AI_REELS.map((reel, idx) => (
              <motion.div
                key={reel.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                className="flex-none"
              >
                <AIReelCard reel={reel} index={idx} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
