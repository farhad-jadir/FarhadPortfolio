"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, CheckCircle2, Sparkles } from "lucide-react";
import { experiencesData } from "../../data/portfolioData";

export default function ExperienceTimeline() {
  return (
    <section id="about" className="py-12 sm:py-20 border-t border-white/5 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* সেকশন হেডার */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-2">
            <Briefcase className="w-4 h-4" />
            <span>Career & Availability</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Milestones
          </h2>
        </div>

        {/* ২-কলাম ডেক্সটপ গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiencesData.map((exp, idx) => {
            const isOpportunity = idx === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  isOpportunity
                    ? "bg-gradient-to-br from-emerald-500/10 via-zinc-950/90 to-zinc-950/90 border-emerald-500/30 shadow-[0_0_30px_rgba(52,211,153,0.06)] hover:border-emerald-500/50"
                    : "bg-zinc-950/80 border-white/10 hover:border-white/20 shadow-lg"
                }`}
              >
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
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
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
            );
          })}
        </div>

      </div>
    </section>
  );
}