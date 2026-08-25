"use client";

import { motion } from "framer-motion";
import { Cpu, Layout, Server, Cloud, Sparkles } from "lucide-react";
import { skillsData } from "../../data/portfolioData";

export default function TechStackSection() {
  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes("frontend")) {
      return <Layout className="w-4 h-4 text-emerald-400" />;
    }
    if (category.toLowerCase().includes("backend")) {
      return <Server className="w-4 h-4 text-teal-400" />;
    }
    return <Cloud className="w-4 h-4 text-cyan-400" />;
  };

  return (
    <section id="skills" className="py-12 sm:py-20 border-t border-white/5 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড অ্যাম্বিয়েন্ট গ্লো */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* সেকশন হেডার */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-2">
            <Cpu className="w-4 h-4" />
            <span>Architecture & Workflow</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connected Engineering Pipeline
          </h2>
        </div>

        {/* ডেক্সটপ ডাবল আঁকাবাঁকা রেখা (কার্ডের পেছনে z-0 এ থাকবে, ফলে ভেতর দিয়ে মৃদু দেখাবে) */}
        <div className="hidden md:block absolute top-[200px] left-[10%] right-[10%] h-28 pointer-events-none z-0">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 900 120" fill="none">
            {/* ট্র্যাক ১: এমারেল্ড কার্ভ */}
            <path
              d="M 50,45 Q 250,-20 450,45 T 850,45"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeOpacity="0.25"
              fill="none"
            />
            <motion.path
              d="M 50,45 Q 250,-20 450,45 T 850,45"
              stroke="url(#gradient-tech-line-a)"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
            />

            {/* ট্র্যাক ২: সায়ান/টিয়াল কার্ভ */}
            <path
              d="M 50,68 Q 250,5 450,68 T 850,68"
              stroke="#06b6d4"
              strokeWidth="2.5"
              strokeOpacity="0.2"
              fill="none"
            />
            <motion.path
              d="M 50,68 Q 250,5 450,68 T 850,68"
              stroke="url(#gradient-tech-line-b)"
              strokeWidth="1.8"
              strokeDasharray="4 6"
              fill="none"
              initial={{ strokeDashoffset: -100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "linear" }}
            />

            <defs>
              <linearGradient id="gradient-tech-line-a" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="gradient-tech-line-b" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* কানেক্টেড কার্ড গ্রিড (z-10 লেয়ার) */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-0 md:gap-6 relative z-10">
          {skillsData.map((category, idx) => (
            <div key={category.category} className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="relative rounded-2xl p-6 bg-zinc-950/90 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* নোড ডট (ডাবল রিং) */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-30">
                  <span className="w-6 h-6 rounded-full bg-zinc-950 border border-emerald-400/60 flex items-center justify-center shadow-[0_0_10px_rgba(52,211,153,0.4)]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </span>
                </div>

                <div>
                  {/* কার্ড হেডার */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                        {getCategoryIcon(category.category)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {category.category}
                        </h3>
                        <span className="text-[11px] font-mono text-zinc-500">Pipeline Node 0{idx + 1}</span>
                      </div>
                    </div>
                    <Sparkles className="w-3.5 h-3.5 text-emerald-500/40 group-hover:text-emerald-400 transition-colors" />
                  </div>

                  {/* স্কিলস লিস্ট */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-900/90 text-zinc-300 border border-white/5 group-hover:border-emerald-500/20 group-hover:text-emerald-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ফুটার */}
                <div className="mt-6 pt-3.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1.5 text-emerald-400/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Synced Node
                  </span>
                  <span>0{idx + 1} / 03</span>
                </div>
              </motion.div>

              {/* মোবাইলের কার্ডের মধ্যবর্তী ডাবল কার্ভড রেখা */}
              {idx < skillsData.length - 1 && (
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
                      stroke="url(#mobile-tech-double-a)"
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
                      stroke="url(#mobile-tech-double-b)"
                      strokeWidth="1.8"
                      strokeDasharray="3 4"
                      fill="none"
                      initial={{ strokeDashoffset: -50 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
                    />

                    <defs>
                      <linearGradient id="mobile-tech-double-a" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#34d399" />
                        <stop offset="50%" stopColor="#2dd4bf" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                      <linearGradient id="mobile-tech-double-b" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="50%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#34d399" />
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