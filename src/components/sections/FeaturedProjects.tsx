"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2, Sparkles, Rocket } from "lucide-react";
import { projectsData } from "../../data/portfolioData";

// ১. হাই-স্পিড সিনেমাটিক কোড রেইন ও পার্টিকল ক্যানভাস
function CinematicFloatingCodeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const symbols = [
      "const", "async", "await", "()=>{}", "import", "NextResponse", "Supabase.from()",
      "<div>", "</>", "01001", "10110", "useState()", "useEffect()", "tailwind",
      "git push", "POST /api", "200 OK", "JWT_SECRET", "SELECT *", "TypeScript",
      "npm run build", "docker", "Vercel", "Netlify", "{ status: 200 }", "res.json()",
    ];

    interface Particle {
      text: string;
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      rotation: number;
      vRot: number;
    }

    const colors = ["#34d399", "#2dd4bf", "#22d3ee", "#a7f3d0", "#6ee7b7"];
    const particles: Particle[] = Array.from({ length: 28 }, () => ({
      text: symbols[Math.floor(Math.random() * symbols.length)],
      x: Math.random() * (canvas.width || 600),
      y: Math.random() * (canvas.height || 350),
      vx: (Math.random() - 0.5) * 1.4,
      vy: (Math.random() - 0.5) * 1.4,
      size: Math.floor(Math.random() * 6) + 11,
      opacity: Math.random() * 0.65 + 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: (Math.random() - 0.5) * 0.4,
      vRot: (Math.random() - 0.5) * 0.015,
    }));

    const fontSize = 13;
    const cols = Math.floor(canvas.width / fontSize);
    const rainDrops: number[] = Array(cols).fill(0).map(() => Math.floor(Math.random() * 20));
    const chars = "010101101<>/{}[];:+=_$%";

    const render = () => {
      ctx.fillStyle = "rgba(10, 10, 12, 0.22)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < rainDrops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = i % 2 === 0 ? "rgba(52, 211, 153, 0.22)" : "rgba(34, 211, 238, 0.18)";
        ctx.fillText(char, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;

        if (p.x < -60) p.x = canvas.width + 60;
        if (p.x > canvas.width + 60) p.x = -60;
        if (p.y < -30) p.y = canvas.height + 30;
        if (p.y > canvas.height + 30) p.y = -30;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `600 ${p.size}px monospace`;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fillText(p.text, 0, 0);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl"
    />
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-12 sm:py-20 relative overflow-hidden border-t border-white/5">
      {/* ব্যাকগ্রাউন্ড অ্যাম্বিয়েন্ট গ্লো */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

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

        {/* ১. ডেক্সটপ ১ম রো: ডাবল কার্ভড রেখা (কার্ডের পেছনে z-0 এ থাকবে) */}
        <div className="hidden md:block absolute top-[200px] left-[5%] right-[5%] h-36 pointer-events-none z-0">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 140" fill="none">
            {/* ট্র্যাক ১: এমারেল্ড কার্ভ */}
            <path
              d="M 50,50 Q 275,-15 500,50 T 950,50"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeOpacity="0.25"
              fill="none"
            />
            <motion.path
              d="M 50,50 Q 275,-15 500,50 T 950,50"
              stroke="url(#gradient-row1-line-a)"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              initial={{ strokeDashoffset: 120 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
            />

            {/* ট্র্যাক ২: সায়ান/টিয়াল কার্ভ */}
            <path
              d="M 50,72 Q 275,7 500,72 T 950,72"
              stroke="#06b6d4"
              strokeWidth="2.5"
              strokeOpacity="0.2"
              fill="none"
            />
            <motion.path
              d="M 50,72 Q 275,7 500,72 T 950,72"
              stroke="url(#gradient-row1-line-b)"
              strokeWidth="1.8"
              strokeDasharray="4 6"
              fill="none"
              initial={{ strokeDashoffset: -120 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "linear" }}
            />

            <defs>
              <linearGradient id="gradient-row1-line-a" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="gradient-row1-line-b" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* ২. ডেক্সটপ ২য় রো: ডাবল কার্ভড রেখা (কার্ডের পেছনে z-0 এ থাকবে) */}
        <div className="hidden md:block absolute bottom-[180px] left-[5%] right-[5%] h-36 pointer-events-none z-0">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 140" fill="none">
            {/* ট্র্যাক ১ */}
            <path
              d="M 150,45 Q 450,-15 850,45"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeOpacity="0.25"
              fill="none"
            />
            <motion.path
              d="M 150,45 Q 450,-15 850,45"
              stroke="url(#gradient-row2-line-a)"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />

            {/* ট্র্যাক ২ */}
            <path
              d="M 150,68 Q 450,8 850,68"
              stroke="#06b6d4"
              strokeWidth="2.5"
              strokeOpacity="0.2"
              fill="none"
            />
            <motion.path
              d="M 150,68 Q 450,8 850,68"
              stroke="url(#gradient-row2-line-b)"
              strokeWidth="1.8"
              strokeDasharray="4 6"
              fill="none"
              initial={{ strokeDashoffset: -100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "linear" }}
            />

            <defs>
              <linearGradient id="gradient-row2-line-a" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="gradient-row2-line-b" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* ৩-কলাম গ্রিড লেআউট (z-10 লেয়ার) */}
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
                {/* নোড ডট (ডাবল রিং) */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-30">
                  <span className="w-6 h-6 rounded-full bg-zinc-950 border border-emerald-400/60 flex items-center justify-center shadow-[0_0_10px_rgba(52,211,153,0.4)]">
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

              {/* মোবাইলের মধ্যবর্তী ডাবল কার্ভড রেখা */}
              {index < projectsData.length - 1 && (
                <div className="md:hidden flex justify-center items-center py-2 h-16 relative my-[-2px] z-20">
                  <svg className="w-28 h-full overflow-visible" viewBox="0 0 70 60" fill="none">
                    {/* ট্র্যাক ১ */}
                    <path
                      d="M 25,0 C 0,20 60,40 25,60"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      strokeOpacity="0.2"
                      fill="none"
                    />
                    <motion.path
                      d="M 25,0 C 0,20 60,40 25,60"
                      stroke="url(#mobile-project-double-a)"
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
                      strokeOpacity="0.15"
                      fill="none"
                    />
                    <motion.path
                      d="M 45,0 C 20,20 80,40 45,60"
                      stroke="url(#mobile-project-double-b)"
                      strokeWidth="1.8"
                      strokeDasharray="3 4"
                      fill="none"
                      initial={{ strokeDashoffset: -50 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
                    />

                    <defs>
                      <linearGradient id="mobile-project-double-a" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#34d399" />
                        <stop offset="50%" stopColor="#2dd4bf" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                      <linearGradient id="mobile-project-double-b" x1="0%" y1="0%" x2="0%" y2="100%">
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

          {/* মোবাইল স্ক্রিনে ৪র্থ প্রজেক্ট ও আপকামিং ব্লকের মাঝের ডাবল কার্ভ */}
          <div className="md:hidden flex justify-center items-center py-2 h-16 relative my-[-2px] z-20">
            <svg className="w-28 h-full overflow-visible" viewBox="0 0 70 60" fill="none">
              {/* ট্র্যাক ১ */}
              <path
                d="M 25,0 C 0,20 60,40 25,60"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeOpacity="0.2"
                fill="none"
              />
              <motion.path
                d="M 25,0 C 0,20 60,40 25,60"
                stroke="url(#mobile-last-double-a)"
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
                strokeOpacity="0.15"
                fill="none"
              />
              <motion.path
                d="M 45,0 C 20,20 80,40 45,60"
                stroke="url(#mobile-last-double-b)"
                strokeWidth="1.8"
                strokeDasharray="3 4"
                fill="none"
                initial={{ strokeDashoffset: -50 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
              />

              <defs>
                <linearGradient id="mobile-last-double-a" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="50%" stopColor="#2dd4bf" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
                <linearGradient id="mobile-last-double-b" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* লাইভ চলমান কোড-স্পেস: Next Project Upcoming */}
          <div className="relative md:col-span-2 min-h-[340px] rounded-3xl overflow-hidden border border-emerald-500/20 shadow-[0_0_50px_rgba(52,211,153,0.06)] bg-zinc-950/90">
            
            {/* ডেক্সটপ নোড ডট */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-30">
              <span className="w-6 h-6 rounded-full bg-zinc-950 border border-emerald-400/60 flex items-center justify-center shadow-[0_0_10px_rgba(52,211,153,0.4)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </span>
            </div>

            {/* ১. ব্যাকগ্রাউন্ড লাইভ ম্যাট্রিক্স ও কোড রেইন */}
            <CinematicFloatingCodeCanvas />

            {/* ২. সিনেমাটিক অ্যাম্বিয়েন্ট নিয়ন গ্লো লেয়ার */}
            <div className="absolute inset-0 bg-radial-gradient from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

            {/* ৩. ফ্লোটিং কোড সিনট্যাক্স ব্যাজ ১ */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
                x: [-4, 6, -4],
                rotate: [-1, 2, -1],
              }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-8 left-10 z-20 px-3.5 py-1.5 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-emerald-400/40 text-emerald-300 font-mono text-xs shadow-[0_0_20px_rgba(52,211,153,0.25)] flex items-center gap-2 pointer-events-none"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>&lt;NextEngine building=&quot;true&quot; /&gt;</span>
            </motion.div>

            {/* ৪. ফ্লোটিং কোড সিনট্যাক্স ব্যাজ ২ */}
            <motion.div
              animate={{
                y: [10, -10, 10],
                x: [6, -6, 6],
                rotate: [2, -2, 2],
              }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 right-10 z-20 px-4 py-2 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-teal-400/40 text-teal-300 font-mono text-xs shadow-[0_0_20px_rgba(45,212,191,0.25)] flex items-center gap-2 pointer-events-none"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>git.commit(&quot;upcoming-release&quot;)</span>
            </motion.div>

            {/* ৫. সেন্ট্রাল হেডলাইন: "Next Project Upcoming" */}
            <motion.div
              animate={{
                scale: [0.97, 1.03, 0.97],
                opacity: [0.85, 1, 0.85],
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none w-full px-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-3 shadow-[0_0_20px_rgba(52,211,153,0.2)]">
                <Rocket className="w-3.5 h-3.5 animate-bounce" />
                <span>IN ACTIVE DEVELOPMENT</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black tracking-tight bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent filter drop-shadow-[0_0_25px_rgba(52,211,153,0.4)]">
                Next Project Upcoming
              </h3>
              
              <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-2">
                Stay tuned for the next innovative web solution
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}