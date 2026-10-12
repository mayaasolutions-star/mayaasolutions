import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { AIVideoItem } from '../constants/aiVideoData';

interface AIVideoCardProps {
  video: AIVideoItem;
  index: number;
}

export const AIVideoCard: React.FC<AIVideoCardProps> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControlOverlay, setShowControlOverlay] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Lazy loading observer for efficient media loading
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
        { rootMargin: '300px 0px' }
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

    const onPlay = () => {
      setIsPlaying(true);
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'video_start', {
          video_title: video.title,
          video_provider: 'html5',
          video_current_time: Math.round(el.currentTime),
          video_duration: video.durationSec,
        });
      }
    };

    const onPause = () => {
      setIsPlaying(false);
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'video_pause', {
          video_title: video.title,
          video_provider: 'html5',
          video_current_time: Math.round(el.currentTime),
        });
      }
    };

    const onEnded = () => {
      setIsPlaying(false);
      el.currentTime = 0;
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'video_complete', {
          video_title: video.title,
          video_provider: 'html5',
        });
      }
    };

    el.addEventListener('play', onPlay);
    el.addEventListener('pause', onPause);
    el.addEventListener('ended', onEnded);

    return () => {
      el.removeEventListener('play', onPlay);
      el.removeEventListener('pause', onPause);
      el.removeEventListener('ended', onEnded);
    };
  }, [video.title, video.durationSec]);

  const togglePlay = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const el = videoRef.current;
    if (!el) return;

    if (el.paused) {
      // Ensure muted playback with no audio
      el.muted = true;
      el.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      el.pause();
    }
  };

  return (
    <article
      className="group relative flex flex-col bg-white border border-[#E5E5E2] hover:border-black rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] focus-within:ring-2 focus-within:ring-black select-none"
      onMouseEnter={() => setShowControlOverlay(true)}
      onMouseLeave={() => setShowControlOverlay(false)}
    >
      {/* Video Container (Strictly inline, no modals or fullscreen) */}
      <div
        ref={containerRef}
        className="relative aspect-video w-full bg-neutral-950 overflow-hidden cursor-pointer"
        onClick={togglePlay}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            togglePlay(e);
          }
        }}
        tabIndex={0}
        role="button"
        aria-pressed={isPlaying}
        aria-label={`${isPlaying ? 'Pause' : 'Play'} ${video.title}`}
      >
        <video
          ref={videoRef}
          src={`${video.videoSrc}#t=0.01`}
          preload={isInView ? 'metadata' : 'none'}
          muted
          loop
          playsInline
          title={video.title}
          aria-label={video.title}
          // Disable picture-in-picture, download, and remote playback
          disablePictureInPicture
          controlsList="nodownload noremoteplayback noplaybackrate nofullscreen"
          onContextMenu={(e) => e.preventDefault()}
          className="w-full h-full object-cover transition-transform duration-700 pointer-events-none"
        />

        {/* Ambient Vignette Overlay */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            isPlaying ? 'opacity-30' : 'opacity-70'
          }`}
        />

        {/* Custom Minimal Play / Pause Indicator */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none ${
            !isPlaying || showControlOverlay ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all duration-300 ${
              !isPlaying
                ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.45)]'
                : 'bg-black/40 text-white'
            }`}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 ml-0.5 fill-current" />
            )}
          </div>
        </div>

        {/* Top Industry Label Badge (Pure visual label, no external link) */}
        <div className="absolute top-3.5 left-3.5 pointer-events-none">
          <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs font-mono font-medium uppercase tracking-wider text-neutral-200">
            {video.industry}
          </span>
        </div>
      </div>

      {/* Card Content Footer */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white border-t border-[#E5E5E2]">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#171717] group-hover:text-black transition-colors tracking-tight mb-1.5">
            {video.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#555555] font-normal leading-relaxed line-clamp-2">
            {video.description}
          </p>
        </div>
      </div>
    </article>
  );
};
