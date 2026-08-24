"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Mail, Code2 } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

export default function HeroSection() {
  // ১. বাম পাশের হেডলাইন টাইপিং
  const fullHeadline = "Building Scalable, High-Performance Web Applications";
  const [headlineText, setHeadlineText] = useState("");
  const [isHeadlineDeleting, setIsHeadlineDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isHeadlineDeleting && headlineText.length < fullHeadline.length) {
      timer = setTimeout(() => {
        setHeadlineText(fullHeadline.slice(0, headlineText.length + 1));
      }, 50);
    } else if (!isHeadlineDeleting && headlineText.length === fullHeadline.length) {
      timer = setTimeout(() => {
        setIsHeadlineDeleting(true);
      }, 4000);
    } else if (isHeadlineDeleting && headlineText.length > 0) {
      timer = setTimeout(() => {
        setHeadlineText(fullHeadline.slice(0, headlineText.length - 1));
      }, 25);
    } else if (isHeadlineDeleting && headlineText.length === 0) {
      setIsHeadlineDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [headlineText, isHeadlineDeleting, fullHeadline]);

  // ২. ডান পাশের কোড টাইপিং
  const fullCode = `export const developer = {
  name: '${personalInfo.name}',
  role: '${personalInfo.role}',
  stack: ['Next.js', 'TypeScript', 'Tailwind'],
  architecture: 'Clean & Scalable',
  liveStatus: 'Ready to Code'
};`;

  const [codeText, setCodeText] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (codeText.length < fullCode.length) {
      timer = setTimeout(() => {
        setCodeText(fullCode.slice(0, codeText.length + 1));
      }, 35);
    } else {
      timer = setTimeout(() => {
        setCodeText("");
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [codeText, fullCode]);

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
      {/* ব্যাকগ্রাউন্ড গ্রিড */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none" />
      
      {/* অ্যাম্বিয়েন্ট গ্লো */}
      <div className="absolute top-1/4 left-1/4 w-125 h-75 bg-emerald-500/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-100 h-75 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* বাম পাশ */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* ছবি ও পরিচিতি ব্লক */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mb-6"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 p-1.5 rounded-full overflow-hidden shadow-2xl shrink-0">
                <div className="absolute inset-0 -m-[100%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_30%,#34d399_50%,transparent_70%,transparent_100%)] animate-spin-slow opacity-100" />
                <div className="absolute inset-1.5 bg-zinc-950 rounded-full" />
                
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-emerald-500/40">
                  <Image
                    src="/jnn.jpg"
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  Available for New Projects
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{personalInfo.name}</h3>
                <p className="text-xs font-mono text-emerald-400/90">{personalInfo.role}</p>
              </div>
            </motion.div>

            {/* হেডলাইন - উচ্চতা ফিক্সড করা হয়েছে যাতে কোনো কাঁপাকাঁপি না হয় */}
            <div className="h-[96px] sm:h-[110px] md:h-[120px] flex items-center justify-center lg:justify-start mb-4 max-w-xl w-full">
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-snug">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  {headlineText}
                </span>
                <span className="inline-block w-1.5 h-6 sm:h-8 ml-1 bg-emerald-400 align-middle animate-pulse" />
              </h1>
            </div>

            {/* সাবটাইটেল / বায়ো */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8 max-w-lg"
            >
              {personalInfo.bio}
            </motion.p>

            {/* বাটন ও সোশাল লিঙ্ক */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs sm:text-sm px-4 sm:px-6 py-3 rounded-xl transition-all shadow-[0_0_25px_rgba(52,211,153,0.25)] hover:scale-[1.02] shrink-0"
              >
                <span>Explore Projects</span>
                <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-1.5 sm:gap-2 bg-zinc-900/90 px-3 py-2 rounded-xl border border-white/10 shrink-0">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>

                {personalInfo.linkedin && (
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn"
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}

                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="Send Email via Gmail"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ডান পাশ: অ্যানিমেটেড কোড কার্ড */}
          <div className="relative w-full mt-4 lg:mt-0">
            <div className="relative rounded-2xl border border-white/10 bg-zinc-950/90 backdrop-blur-xl p-5 sm:p-6 shadow-2xl overflow-hidden min-h-[380px] sm:min-h-[400px] flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300">
              
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>DevProfile.config.ts</span>
                  </div>
                </div>

                {/* কোড উইন্ডোর উচ্চতা ফিক্সড করা হয়েছে */}
                <div className="font-mono text-[11px] sm:text-[13px] leading-relaxed text-emerald-400/90 bg-zinc-900/50 p-3.5 sm:p-4 rounded-xl border border-white/5 shadow-inner h-[175px] overflow-hidden whitespace-pre-wrap text-left">
                  {codeText}
                  <span className="inline-block w-2 h-3.5 sm:h-4 ml-0.5 bg-emerald-400 align-middle animate-pulse" />
                </div>
              </div>

              <div className="mt-4 pt-3.5 border-t border-white/5 text-left">
                <div className="text-[11px] font-mono text-zinc-500 mb-2 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Core Technologies</span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Supabase"].map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-white/5 hover:border-emerald-500/30 hover:text-emerald-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}