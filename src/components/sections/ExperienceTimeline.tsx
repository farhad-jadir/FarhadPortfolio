"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, CheckCircle2, Sparkles } from "lucide-react";
import { experiencesData } from "../../data/portfolioData";

export default function ExperienceTimeline() {
  return (
    <section id="about" className="py-12 sm:py-20 border-t border-white/5 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* সেকশন হেডার */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-1.5 sm:mb-2">
            <Briefcase className="w-4 h-4" />
            <span>Career & Availability</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Milestones
          </h2>
        </div>

        {/* ডেক্সটপ ডাবল আঁকাবাঁকা রেখা (কার্ডের পেছনে z-0 এ থাকবে) */}
        <div className="hidden md:block absolute top-[180px] left-[10%] right-[10%] h-36 pointer-events-none z-0">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 800 120" fill="none">
            {/* ট্র্যাক ১: এমারেল্ড কার্ভ */}
            <path
              d="M 50,45 Q 400,-20 750,45"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeOpacity="0.25"
              fill="none"
            />
            <motion.path
              d="M 50,45 Q 400,-20 750,45"
              stroke="url(#gradient-exp-double-a)"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
            />

            {/* ট্র্যাক ২: সায়ান/টিয়াল কার্ভ */}
            <path
              d="M 50,68 Q 400,5 750,68"
              stroke="#06b6d4"
              strokeWidth="2.5"
              strokeOpacity="0.2"
              fill="none"
            />
            <motion.path
              d="M 50,68 Q 400,5 750,68"
              stroke="url(#gradient-exp-double-b)"
              strokeWidth="1.8"
              strokeDasharray="4 6"
              fill="none"
              initial={{ strokeDashoffset: -100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "linear" }}
            />

            <defs>
              <linearGradient id="gradient-exp-double-a" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="gradient-exp-double-b" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* কার্ড গ্রিড (সমান উচ্চতার জন্য items-stretch ও h-full) */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-6 items-stretch relative z-10">
          {experiencesData.map((exp, idx) => {
            const isOpportunity = idx === 0;
            return (
              <div key={idx} className="flex flex-col h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  className={`relative rounded-2xl p-6 sm:p-7 border flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 ${
                    isOpportunity
                      ? "bg-gradient-to-br from-emerald-500/10 via-zinc-950/90 to-zinc-950/90 border-emerald-500/30 shadow-[0_0_30px_rgba(52,211,153,0.06)] hover:border-emerald-500/50"
                      : "bg-zinc-950/90 border-white/10 hover:border-white/20 shadow-xl"
                  }`}
                >
                  {/* নোড ডট (ডাবল রিং) */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-30">
                    <span className="w-6 h-6 rounded-full bg-zinc-950 border border-emerald-400/60 flex items-center justify-center shadow-[0_0_10px_rgba(52,211,153,0.4)]">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </span>
                  </div>

                  <div>
                    {/* কার্ড হেডার ও পিরিয়ড ব্যাজ */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                            {exp.role}
                          </h3>
                          {isOpportunity && (
                            <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                              <Sparkles className="w-3 h-3" /> Open to Hire
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-emerald-400/90">
                          <Building2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{exp.organization}</span>
                        </div>
                      </div>

                      <span
                        className={`text-[11px] sm:text-xs font-mono font-medium px-3 py-1 rounded-full whitespace-nowrap shrink-0 ${
                          isOpportunity
                            ? "bg-emerald-400 text-black font-bold"
                            : "bg-zinc-900 text-zinc-400 border border-white/5"
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    {/* বিবরণ */}
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>
                  </div>

                  {/* স্ট্যাটাস ফুটার */}
                  {isOpportunity ? (
                    <div className="pt-3.5 border-t border-emerald-500/20 flex items-center gap-2 text-xs text-zinc-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Ready for Interview & Immediate Joining</span>
                    </div>
                  ) : (
                    <div className="pt-3.5 border-t border-white/5 flex items-center gap-2 text-xs text-zinc-400 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/70 shrink-0" />
                      <span>Production Architecture & Web Development</span>
                    </div>
                  )}
                </motion.div>

                {/* মোবাইলের মধ্যবর্তী ডাবল কার্ভড রেখা */}
                {idx < experiencesData.length - 1 && (
                  <div className="md:hidden flex justify-center items-center py-2 h-16 relative my-[-2px] z-20">
                    <svg className="w-28 h-full overflow-visible" viewBox="0 0 70 60" fill="none">
                      {/* ট্র্যাক ১ */}
                      <path
                        d="M 25,0 C 0,20 60,40 25,60"
                        stroke="#10b981"
                        strokeWidth="2.5"
                        strokeOpacity="0.25"
                        fill="none"
                      />
                      <motion.path
                        d="M 25,0 C 0,20 60,40 25,60"
                        stroke="url(#mobile-exp-double-a)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        fill="none"
                        initial={{ strokeDashoffset: 50 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      />

                      {/* ট্র্যাক ২ */}
                      <path
                        d="M 45,0 C 20,20 80,40 45,60"
                        stroke="#06b6d4"
                        strokeWidth="2.5"
                        strokeOpacity="0.2"
                        fill="none"
                      />
                      <motion.path
                        d="M 45,0 C 20,20 80,40 45,60"
                        stroke="url(#mobile-exp-double-b)"
                        strokeWidth="1.8"
                        strokeDasharray="3 4"
                        fill="none"
                        initial={{ strokeDashoffset: -50 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
                      />

                      <defs>
                        <linearGradient id="mobile-exp-double-a" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#34d399" />
                          <stop offset="50%" stopColor="#2dd4bf" />
                          <stop offset="100%" stopColor="#22d3ee" />
                        </linearGradient>
                        <linearGradient id="mobile-exp-double-b" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#22d3ee" />
                          <stop offset="50%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#34d399" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}