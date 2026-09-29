import React, { useEffect } from 'react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-950 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Text Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 px-3 py-1 text-xs font-semibold rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors"
          aria-label="Close Project Details"
        >
          Close
        </button>

        {/* Header */}
        <div className="space-y-1 pr-16">
          <div className="text-xs uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400">
            {project.category}
          </div>
          <h2 id="project-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {project.subtitle}
          </p>
        </div>

        {/* Project Image Banner */}
        <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Full Details */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Implementation Summary
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Key Features List */}
        <div className="space-y-2">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-emerald-700 dark:text-emerald-400">
            Key Features & Architecture:
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 list-disc list-inside">
            {project.technicalFeatures.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Technologies:
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-slate-700 dark:text-slate-300">
            {project.tags.map((t, i) => (
              <span key={t} className="font-mono text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            {project.installerUrl && (
              <a
                href={project.installerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:text-slate-950 transition-colors"
              >
                Download / Installer
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Live Web UI
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
