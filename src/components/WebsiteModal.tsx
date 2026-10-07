import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Lock, RotateCw, AlertCircle, Maximize2, Monitor } from 'lucide-react';
import { WebsiteProject } from '../constants/websitesData';

interface WebsiteModalProps {
  project: WebsiteProject | null;
  onClose: () => void;
}

export const WebsiteModal: React.FC<WebsiteModalProps> = ({ project, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [fallbackMode, setFallbackMode] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Reset state when project changes
  useEffect(() => {
    if (project) {
      const isEmbedAllowed = project.supportsEmbed;
      setIsLoading(isEmbedAllowed);
      setLoadError(false);
      setFallbackMode(!isEmbedAllowed);
      setReloadKey((prev) => prev + 1);
    }
  }, [project]);

  // Handle ESC key press & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  // Safety fallback timeout: if iframe takes longer than 9s to respond
  useEffect(() => {
    if (!project || fallbackMode) return;
    const timer = setTimeout(() => {
      if (isLoading) {
        // If still loading after 9s, provide clean fallback option without crashing
        setIsLoading(false);
      }
    }, 9000);
    return () => clearTimeout(timer);
  }, [project, isLoading, fallbackMode]);

  const handleReload = () => {
    setIsLoading(true);
    setLoadError(false);
    setReloadKey((prev) => prev + 1);
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          aria-hidden="true"
        />

        {/* Modal Window Shell */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-7xl h-[94vh] sm:h-[92vh] max-h-[920px] bg-[#121212] rounded-2xl border border-neutral-800 shadow-2xl flex flex-col overflow-hidden text-neutral-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Top Browser Chrome Bar */}
          <div className="h-14 sm:h-16 px-4 sm:px-6 bg-[#1A1A1A] border-b border-neutral-800 flex items-center justify-between gap-3 shrink-0">
            {/* Left: Window Dots & Project Metadata */}
            <div className="flex items-center gap-3 sm:gap-5 min-w-0">
              {/* Traffic Lights */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-[#FF5F56] hover:brightness-110 transition-transform active:scale-90"
                  title="Close Preview (Esc)"
                  aria-label="Close Preview"
                />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80" />
              </div>

              {/* Title & Category */}
              <div className="hidden sm:flex items-center gap-2.5 truncate">
                <span className="text-xs font-mono text-neutral-400 font-semibold shrink-0">
                  {project.projectNumber}
                </span>
                <span className="text-xs text-neutral-600">/</span>
                <h3 id="modal-project-title" className="text-sm font-extrabold text-white truncate">
                  {project.name}
                </h3>
                <span className="hidden md:inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-neutral-800 text-neutral-300 shrink-0">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Center: Address Bar Pill */}
            <div className="flex-1 max-w-md mx-2 min-w-0">
              <div className="w-full flex items-center justify-between gap-2 px-3 py-1.5 bg-[#0F0F0F] rounded-lg border border-neutral-800 text-xs font-mono text-neutral-300">
                <div className="flex items-center gap-2 truncate">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate text-[11px] sm:text-xs text-neutral-300">
                    https://{project.displayUrl}
                  </span>
                </div>
                <button
                  onClick={handleReload}
                  className="p-1 text-neutral-500 hover:text-white transition-colors shrink-0"
                  title="Reload preview"
                  aria-label="Reload preview"
                >
                  <RotateCw className={`w-3 h-3 ${isLoading ? 'animate-spin text-white' : ''}`} />
                </button>
              </div>
            </div>

            {/* Right: Actions & Close */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Open Full Website Button */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 bg-white text-black hover:bg-neutral-200 text-xs font-bold rounded-lg transition-colors shadow-sm"
              >
                <span>Open Full Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Close Icon Button */}
              <button
                onClick={onClose}
                className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                title="Close (Esc)"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Subheader info bar for mobile only */}
          <div className="sm:hidden px-4 py-2 bg-[#171717] border-b border-neutral-800 flex items-center justify-between text-xs">
            <span className="font-extrabold text-white truncate">{project.name}</span>
            <span className="text-[10px] uppercase font-mono text-neutral-400 tracking-wider">
              {project.category}
            </span>
          </div>

          {/* Content Area: Live Iframe or Fallback */}
          <div className="relative flex-1 w-full h-full bg-[#0a0a0a] overflow-hidden">
            {/* Loading Indicator Overlay */}
            {isLoading && !fallbackMode && (
              <div className="absolute inset-0 z-20 bg-[#0F0F0F] flex flex-col items-center justify-center gap-4 text-center p-6">
                <div className="w-8 h-8 rounded-full border-2 border-neutral-700 border-t-white animate-spin" />
                <div className="space-y-1">
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                    Connecting to live experience
                  </p>
                  <p className="text-sm font-semibold text-white">{project.displayUrl}</p>
                </div>
              </div>
            )}

            {/* Live Interactive Iframe */}
            {!fallbackMode && !loadError ? (
              <iframe
                key={reloadKey}
                ref={iframeRef}
                src={project.previewUrl}
                title={`${project.name} Live Website Preview`}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false);
                  setLoadError(true);
                  setFallbackMode(true);
                }}
                className="w-full h-full border-0 bg-white"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            ) : null}

            {/* Fallback View (Shown if iframe blocked or in fallback mode) */}
            {(fallbackMode || loadError) && (
              <div className="relative w-full h-full overflow-y-auto bg-[#0F0F0F] flex flex-col items-center">
                {/* Fallback Notification Banner */}
                <div className="w-full bg-[#181818] border-b border-neutral-800 px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Live preview restricted by browser security policies. High-resolution view rendered below.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setFallbackMode(false);
                        handleReload();
                      }}
                      className="text-neutral-400 hover:text-white underline underline-offset-4"
                    >
                      Retry Live Connection
                    </button>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-black font-bold rounded hover:bg-neutral-200 transition-colors"
                    >
                      <span>Open Website</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* High Resolution Fallback Preview Image */}
                <div className="w-full max-w-5xl p-4 sm:p-8 flex flex-col items-center">
                  <div className="rounded-xl overflow-hidden border border-neutral-800 shadow-2xl bg-black">
                    <img
                      src={project.fallbackImage}
                      alt={`${project.name} Website Screenshot`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Status Bar */}
          <div className="h-9 px-4 sm:px-6 bg-[#171717] border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-500 shrink-0">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${loadError || fallbackMode ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                <span className="text-neutral-400">
                  {loadError || fallbackMode ? 'Fallback View' : 'Live Interactive Mode'}
                </span>
              </span>
              <span className="hidden sm:inline text-neutral-600">|</span>
              <span className="hidden sm:inline text-neutral-500">
                Scroll, click links, and interact naturally
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setFallbackMode(!fallbackMode)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                {fallbackMode ? 'Switch to Live Embed' : 'Switch to Static View'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
