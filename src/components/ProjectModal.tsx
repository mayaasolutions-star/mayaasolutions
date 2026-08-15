import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Tag, Layers, ExternalLink } from 'lucide-react';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../constants/portfolioData';
import { CASE_STUDIES_DATA, CaseStudyData } from '../constants/caseStudiesData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenConsultation?: () => void;
  onSelectProject?: (project: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenConsultation,
  onSelectProject,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Scroll modal body to top whenever project changes
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = 0;
    }
    setSelectedImage(null);
  }, [project?.id]);

  if (!project) return null;

  // Find rich case study details from CASE_STUDIES_DATA or build fallback
  const richData: CaseStudyData | undefined = CASE_STUDIES_DATA[project.id];

  // Find index for Previous / Next Navigation
  const currentIndex = PORTFOLIO_PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = PORTFOLIO_PROJECTS[(currentIndex - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length];
  const nextProject = PORTFOLIO_PROJECTS[(currentIndex + 1) % PORTFOLIO_PROJECTS.length];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-studio-950/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl max-h-[92vh] bg-white border border-studio-850 rounded-3xl shadow-2xl z-10 flex flex-col overflow-hidden text-studio-100"
        >
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-studio-850 flex items-center justify-between bg-studio-900/95 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-4">
              {/* Logo Thumbnail Cover */}
              <div className="w-14 h-14 rounded-2xl bg-white border border-studio-850 p-2 flex items-center justify-center shrink-0 shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-studio-400 uppercase tracking-widest flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" /> {project.category}
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-studio-100 mt-0.5 tracking-tight">{project.title}</h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-3 rounded-full bg-studio-850 hover:bg-studio-800 text-studio-400 hover:text-studio-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div ref={bodyRef} className="p-6 md:p-10 overflow-y-auto flex-1 space-y-10 bg-white">
            
            {/* Quick Meta Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-studio-900 border border-studio-850 text-xs">
              <div>
                <span className="text-studio-400 block font-medium uppercase tracking-wider text-[10px]">Client</span>
                <span className="text-studio-100 font-extrabold text-sm">{project.client}</span>
              </div>
              <div>
                <span className="text-studio-400 block font-medium uppercase tracking-wider text-[10px]">Year</span>
                <span className="text-studio-100 font-extrabold text-sm">{project.year}</span>
              </div>
              <div>
                <span className="text-studio-400 block font-medium uppercase tracking-wider text-[10px]">Service Area</span>
                <span className="text-studio-100 font-extrabold text-sm">{project.categorySlug.toUpperCase()}</span>
              </div>
              <div>
                <span className="text-studio-400 block font-medium uppercase tracking-wider text-[10px]">Status</span>
                <span className="text-emerald-700 font-extrabold text-sm flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                </span>
              </div>
            </div>

            {/* Overview / Subtitle */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-studio-400 uppercase tracking-widest block">
                Project Overview
              </span>
              <p className="text-base sm:text-lg text-studio-300 font-normal leading-relaxed">
                {richData?.desc || project.summary}
              </p>
            </div>

            {/* RENDER ALL RICH SECTIONS FROM ORIGINAL OURWORK.HTML DATA */}
            {richData ? (
              <div className="space-y-10">
                {richData.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4 border-t border-studio-850 pt-8">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight flex items-center gap-2">
                      <Layers className="w-5 h-5 text-studio-100" /> {section.title}
                    </h3>

                    <p className="text-sm sm:text-base text-studio-300 leading-relaxed font-normal">
                      {section.text}
                    </p>

                    {/* Contribution Tags */}
                    {section.tags && section.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {section.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 bg-studio-900 border border-studio-850 rounded-full text-xs font-semibold text-studio-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Section Image Gallery */}
                    {section.images && section.images.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                        {section.images.map((imgUrl, iIdx) => (
                          <div
                            key={iIdx}
                            onClick={() => setSelectedImage(imgUrl)}
                            className="group relative rounded-2xl overflow-hidden bg-studio-900 border border-studio-850 cursor-pointer hover:border-studio-700 transition-all shadow-sm"
                          >
                            <img
                              src={imgUrl}
                              alt={`${section.title} ${iIdx + 1}`}
                              loading="lazy"
                              className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-studio-100/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="px-3 py-1 bg-studio-100 text-studio-950 font-extrabold text-xs rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                                View <ExternalLink className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              /* FALLBACK STRUCTURAL DISPLAY FOR STANDARD PROJECTS */
              <div className="space-y-8">
                {/* Challenge & Solution */}
                {(project.problem || project.solution) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.problem && (
                      <div className="p-6 rounded-2xl bg-studio-900 border border-studio-850 space-y-2">
                        <h4 className="text-xs font-bold text-red-700 uppercase tracking-widest">The Challenge</h4>
                        <p className="text-sm text-studio-300 font-normal leading-relaxed">{project.problem}</p>
                      </div>
                    )}
                    {project.solution && (
                      <div className="p-6 rounded-2xl bg-studio-900 border border-studio-850 space-y-2">
                        <h4 className="text-xs font-bold text-studio-100 uppercase tracking-widest">The Solution</h4>
                        <p className="text-sm text-studio-300 font-normal leading-relaxed">{project.solution}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Deliverables */}
                {project.deliverables && project.deliverables.length > 0 && (
                  <div className="space-y-4 border-t border-studio-850 pt-6">
                    <h4 className="text-sm font-bold text-studio-100 uppercase tracking-wider">Key Deliverables Delivered</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.deliverables.map((del, i) => (
                        <div key={i} className="p-3 bg-studio-900 rounded-xl border border-studio-850 text-xs text-studio-100 font-medium flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-studio-100 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Sequential Project Navigation Bar */}
            <div className="pt-8 border-t border-studio-850 flex items-center justify-between gap-4">
              <button
                onClick={() => {
                  if (onSelectProject) {
                    onSelectProject(prevProject);
                    bodyRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-studio-900 border border-studio-850 hover:border-studio-700 text-xs sm:text-sm font-semibold text-studio-300 hover:text-studio-100 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Prev:</span> {prevProject.title}
              </button>

              <button
                onClick={() => {
                  if (onSelectProject) {
                    onSelectProject(nextProject);
                    bodyRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-studio-900 border border-studio-850 hover:border-studio-700 text-xs sm:text-sm font-semibold text-studio-300 hover:text-studio-100 transition-all"
              >
                <span className="hidden sm:inline">Next:</span> {nextProject.title}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-6 border-t border-studio-850 bg-studio-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-studio-400 font-medium">Want similar results for your business?</span>
            <Link
              to="/contact"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 bg-studio-100 text-studio-950 font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-studio-200 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* IMAGE LIGHTBOX POPUP */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 cursor-pointer"
          >
            <div
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-auto block max-h-[85vh] object-contain mx-auto"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 p-2.5 rounded-full bg-studio-100 text-white hover:bg-studio-200 transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </AnimatePresence>
  );
};
