"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2, Sparkles } from "lucide-react";
import { projectsData } from "../../data/portfolioData";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-12 sm:py-20 relative overflow-hidden border-t border-white/5">
      {/* ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* সেকশন হেডার */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-2 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-1.5 sm:mb-2">
              <FolderGit2 className="w-4 h-4" />
              <span>Featured Work</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Production Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Real-world applications built with modern web architecture, clean code, and responsive design.
          </p>
        </div>

        {/* ডেক্সটপ কানেক্টিং আঁকাবাঁকা রেখা (SVG Curve) */}
        <div className="hidden md:block absolute top-[210px] left-[15%] right-[15%] h-24 pointer-events-none z-0">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 800 100" fill="none">
            <path
              d="M 50,50 Q 200,-20 400,50 T 750,50"
              stroke="#34d399"
              strokeWidth="3"
              strokeOpacity="0.15"
              fill="none"
            />
            <motion.path
              d="M 50,50 Q 200,-20 400,50 T 750,50"
              stroke="url(#gradient-projects-line)"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              fill="none"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
            />
            <defs>
              <linearGradient id="gradient-projects-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#2dd4bf" stopOpacity="1" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* প্রজেক্ট কার্ড গ্রিড ও মোবাইল কানেক্টরস */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-0 md:gap-6 relative z-10">
          {projectsData.map((project, index) => (
            <div key={project.id} className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="group relative rounded-2xl bg-zinc-950/90 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col overflow-hidden shadow-xl hover:shadow-[0_0_25px_rgba(52,211,153,0.1)] hover:-translate-y-1"
              >
                {/* ডেক্সটপ নোড ডট */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-30">
                  <span className="w-6 h-6 rounded-full bg-zinc-950 border border-emerald-400/50 flex items-center justify-center shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </span>
                </div>

                {/* ইমেজ থাম্বনেল */}
                <div className="relative w-full h-36 sm:h-40 bg-zinc-900 overflow-hidden border-b border-white/10">
                  <div className="absolute top-2.5 left-3 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500/90" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/90" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/90" />
                  </div>

                  {project.imageUrl ? (
                    <div className="relative w-full h-full">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-50" />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-600">
                      <Sparkles className="w-6 h-6 text-emerald-500/30" />
                    </div>
                  )}
                </div>

                {/* কার্ড কন্টেন্ট */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* ট্যাগস */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-emerald-400/90 border border-emerald-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* অ্যাকশন বাটনসমূহ */}
                    <div className="flex items-center gap-3 pt-3.5 border-t border-white/5">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-emerald-400 transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Live Preview</span>
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>Source</span>
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>

              {/* মোবাইলের কার্ডের মধ্যবর্তী আঁকাবাঁকা রেখা (S-Curve) */}
              {index < projectsData.length - 1 && (
                <div className="md:hidden flex justify-center items-center py-2 h-14 relative my-[-2px] z-20">
                  <svg className="w-24 h-full overflow-visible" viewBox="0 0 60 50" fill="none">
                    <path
                      d="M 30,0 C 5,15 55,35 30,50"
                      stroke="#10b981"
                      strokeWidth="3"
                      strokeOpacity="0.2"
                      fill="none"
                    />
                    <motion.path
                      d="M 30,0 C 5,15 55,35 30,50"
                      stroke="url(#mobile-project-curve-gradient)"
                      strokeWidth="2.5"
                      strokeDasharray="4 4"
                      fill="none"
                      initial={{ strokeDashoffset: 50 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    />
                    <defs>
                      <linearGradient id="mobile-project-curve-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#34d399" />
                        <stop offset="50%" stopColor="#2dd4bf" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}