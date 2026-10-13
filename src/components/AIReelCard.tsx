import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { AIReelItem } from '../constants/aiReelsData';

interface AIReelCardProps {
  reel: AIReelItem;
  index: number;
}

export const AIReelCard: React.FC<AIReelCardProps> = ({ reel }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControlOverlay, setShowControlOverlay] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Lazy loading observer: don't buffer videos until within view threshold
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: '350px 0px' }
      );
      observer.observe(el);
      return () => observer.disconnect();
    } else {
      setIsInView(true);
    }
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsPlaying(false);
      el.currentTime = 0;
    };

    el.addEventListener('play', onPlay);
    el.addEventListener('pause', onPause);
    el.addEventListener('ended', onEnded);

    return () => {
      el.removeEventListener('play', onPlay);
      el.removeEventListener('pause', onPause);
      el.removeEventListener('ended', onEnded);
    };
  }, []);

  const togglePlay = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const el = videoRef.current;
    if (!el) return;

    if (el.paused) {
      el.muted = true;
      el.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      el.pause();
    }
  };

  return (
    <div
      ref={containerRef}
      className="group relative flex-none w-[220px] sm:w-[260px] md:w-[280px] lg:w-[300px] snap-start select-none"
      onMouseEnter={() => setShowControlOverlay(true)}
      onMouseLeave={() => setShowControlOverlay(false)}
    >
      <div
        className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-neutral-950 border border-[#E5E5E2] hover:border-black transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] cursor-pointer focus-within:ring-2 focus-within:ring-black"
        onClick={togglePlay}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            togglePlay(e);
          }
        }}
        tabIndex={0}
        role="button"
        aria-pressed={isPlaying}
        aria-label={`${isPlaying ? 'Pause' : 'Play'} ${reel.title}`}
      >
        <video
          ref={videoRef}
          src={`${reel.videoSrc}#t=0.01`}
          preload={isInView ? 'metadata' : 'none'}
          muted
          loop
          playsInline
          title={reel.title}
          aria-label={reel.title}
          disablePictureInPicture
          controlsList="nodownload noremoteplayback noplaybackrate nofullscreen"
          onContextMenu={(e) => e.preventDefault()}
          className="w-full h-full object-cover transition-transform duration-700 pointer-events-none"
        />

        {/* Ambient Subtle Vignette */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none transition-opacity duration-300 ${
            isPlaying ? 'opacity-30' : 'opacity-70'
          }`}
        />

        {/* Minimal Play / Pause Indicator */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none ${
            !isPlaying || showControlOverlay ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 ${
              !isPlaying
                ? 'bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.4)]'
                : 'bg-black/50 text-white'
            }`}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 ml-0.5 fill-current" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
