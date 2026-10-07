import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Lock } from 'lucide-react';
import { WebsiteProject } from '../constants/websitesData';

interface WebsitePreviewCardProps {
  project: WebsiteProject;
  onOpenModal: (project: WebsiteProject) => void;
  index: number;
}

export const WebsitePreviewCard: React.FC<WebsitePreviewCardProps> = ({
  project,
  onOpenModal,
}) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Safety fallback timeout: if iframe doesn't finish loading in 8s, enable fallback
  useEffect(() => {
    if (!project.supportsEmbed) return;
    const timer = setTimeout(() => {
      if (!iframeLoaded) {
        setIframeError(true);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [iframeLoaded, project.supportsEmbed]);

  const shouldRenderIframe = project.supportsEmbed && !iframeError;

  return (
    <article
      className="group flex flex-col justify-between cursor-pointer select-none"
      onClick={() => onOpenModal(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Project Info Header */}
      <div className="mb-3 space-y-1">
        <div className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-studio-400 truncate">
          {project.category}
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-studio-100 tracking-tight transition-colors duration-300 group-hover:text-black">
          {project.name}
        </h3>
      </div>

      {/* 2. Compact Browser Window Preview */}
      <div className="relative w-full rounded-xl sm:rounded-2xl border border-studio-850 bg-white shadow-[0_6px_24px_rgba(23,23,23,0.03)] group-hover:shadow-[0_16px_36px_rgba(23,23,23,0.08)] group-hover:border-studio-700 transition-all duration-300 overflow-hidden">
        {/* Subtle Browser Chrome Top Bar */}
        <div className="h-8 sm:h-9 px-3 bg-[#FAFAF9] border-b border-studio-850 flex items-center justify-between gap-2 select-none">
          {/* Small Browser Window Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-studio-800/40 group-hover:bg-[#FF5F56] transition-colors" />
            <span className="w-2 h-2 rounded-full bg-studio-800/40 group-hover:bg-[#FFBD2E] transition-colors" />
            <span className="w-2 h-2 rounded-full bg-studio-800/40 group-hover:bg-[#27C93F] transition-colors" />
          </div>

          {/* Website URL / Address Pill */}
          <div className="flex-1 max-w-[170px] sm:max-w-[200px] mx-auto">
            <div className="w-full flex items-center justify-between gap-1 px-2 py-0.5 bg-white rounded border border-studio-850 text-[10px] sm:text-[11px] font-mono text-studio-400 group-hover:border-studio-700 transition-colors truncate">
              <div className="flex items-center gap-1 truncate">
                <Lock className="w-2.5 h-2.5 text-studio-400 shrink-0" />
                <span className="truncate text-studio-300 font-medium">
                  {project.displayUrl}
                </span>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-studio-400 hover:text-studio-100 p-0.5 rounded transition-colors shrink-0"
                title={`Open ${project.displayUrl} in a new tab`}
                aria-label={`Open ${project.displayUrl} in a new tab`}
              >
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          <div className="w-8 shrink-0 text-right">
            <span className="text-[10px] font-mono uppercase tracking-wider text-studio-400 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
              Preview
            </span>
          </div>
        </div>

        {/* 16:10 Website Preview Frame */}
        <div className="relative w-full aspect-[16/10] bg-studio-900 overflow-hidden">
          {shouldRenderIframe ? (
            /* Live Interactive Iframe */
            <div className="w-full h-full relative overflow-hidden">
              <iframe
                src={project.previewUrl}
                title={`${project.name} preview`}
                onLoad={() => setIframeLoaded(true)}
                onError={() => setIframeError(true)}
                className="w-full h-full border-0 bg-white pointer-events-none transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                loading="lazy"
              />

              {/* Minimal Loading State */}
              {!iframeLoaded && (
                <div className="absolute inset-0 z-10 bg-studio-900 flex flex-col items-center justify-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 border-studio-800 border-t-studio-100 animate-spin" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-studio-400">
                    Loading
                  </span>
                </div>
              )}
            </div>
          ) : (
            /* Fallback Clean Screenshot */
            <div className="relative w-full h-full bg-studio-900 overflow-hidden">
              <img
                src={project.fallbackImage}
                alt={`${project.name} preview`}
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]"
              />
            </div>
          )}

          {/* Restrained Hover Cue Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-all duration-300">
            <motion.div
              initial={false}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.95,
                y: isHovered ? 0 : 4,
              }}
              transition={{ duration: 0.15 }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-studio-100 text-white font-extrabold text-[11px] tracking-wider uppercase shadow-lg border border-white/10 pointer-events-none"
            >
              <span>Explore Website</span>
              <span>↗</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. Subtle Action Row */}
      <div className="mt-3.5 flex items-center justify-between gap-2 text-xs font-bold text-studio-100">
        <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform duration-200 shrink-0">
          <span>Explore Website</span>
          <span className="text-studio-400 group-hover:text-studio-100 transition-colors">↗</span>
        </span>

        <span className="text-[11px] font-mono text-studio-400 font-normal truncate">
          {project.displayUrl}
        </span>
      </div>
    </article>
  );
};
