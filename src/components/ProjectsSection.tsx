import React, { useState } from 'react';
import { motion } from 'motion/react';
import { projects } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80"
      aria-label="Featured Projects"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="space-y-1">
          <div className="text-xs uppercase tracking-widest font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            Portfolio Deliverables
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
        </div>

        {/* Project Cards Grid with Framer Motion Hover Lift and Tech Stack Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group relative rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors shadow-xs hover:shadow-xl hover:shadow-emerald-950/10 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Project Image & Animated Tech Stack Overlay */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-950 cursor-pointer"
                  onClick={() => setSelectedProject(proj)}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Framer Motion Tech Stack Reveal Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-center p-6 text-white space-y-3">
                    <div className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
                      Tech Stack & Tools
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-xs">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-200 border border-emerald-500/30 font-mono text-[11px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2 text-xs text-slate-300 font-medium underline underline-offset-4">
                      Click to view detailed specs & links
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                    {proj.category}
                  </div>

                  <h3
                    onClick={() => setSelectedProject(proj)}
                    className="text-lg font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer transition-colors"
                  >
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer: Simple Actions */}
              <div className="p-6 pt-0 space-y-3">
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                  >
                    View Details
                  </button>

                  <div className="flex items-center gap-3">
                    {proj.installerUrl && (
                      <a
                        href={proj.installerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-md bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950 font-semibold hover:bg-emerald-500 transition-colors shadow-2xs"
                      >
                        Installer
                      </a>
                    )}
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        Live UI
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
