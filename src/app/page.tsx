"use client";

import { useState } from "react";
import Navbar from "../components/shared/Navbar";
import HeroSection from "../components/sections/HeroSection";
import TechStackSection from "../components/sections/TechStackSection";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import ExperienceTimeline from "../components/sections/ExperienceTimeline";
import { personalInfo } from "../data/portfolioData";
import { Mail, Check, Copy, Send, MessageCircle, Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`;
  const whatsappUrl = `https://wa.me/8801932494712?text=Hello%20Farhad,%20I%20would%20like%20to%20discuss%20a%20project!`;

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-300">
      <Navbar />
      <HeroSection />
      <TechStackSection />
      <FeaturedProjects />
      <ExperienceTimeline />

      {/* প্রিমিয়াম রিডিজাইনড কন্টাক্ট সেকশন */}
      <section id="contact" className="py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
        {/* অ্যাম্বিয়েন্ট ব্যাকগ্রাউন্ড লাইট */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl bg-gradient-to-b from-zinc-900/80 via-zinc-950/90 to-zinc-950 border border-white/10 p-8 sm:p-12 text-center shadow-2xl backdrop-blur-xl"
          >
            {/* ব্যাজ */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Connect & Collaborate</span>
            </div>

            {/* হেডলাইন */}
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Let&apos;s Build Something{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Exceptional
              </span>
            </h2>

            {/* সাবটেক্সট */}
            <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto mb-10 leading-relaxed">
              Have a high-impact project or an open role? Reach out via Gmail or start a direct conversation on WhatsApp.
            </p>

            {/* অ্যাকশন বাটন কার্ড গ্রিড */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
              
              {/* ১. জিমেইল কম্পোজ বাটন */}
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between p-4 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-bold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(52,211,153,0.25)] hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-black/10">
                    <Send className="w-4 h-4 text-zinc-950" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-zinc-800 font-medium">Send an Email</p>
                    <p className="text-sm font-extrabold text-zinc-950">Via Gmail</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* ২. হোয়াটসঅ্যাপ চ্যাট বাটন */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between p-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-850 border border-white/10 hover:border-emerald-500/40 text-white font-bold text-sm transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-zinc-400 font-medium">Direct Message</p>
                    <p className="text-sm font-extrabold text-emerald-400">WhatsApp</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

            </div>

            {/* ইমেইল কপি বক্স */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs font-mono text-zinc-300 shadow-inner">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{personalInfo.email}</span>
              <button
                onClick={copyEmail}
                className="ml-2 p-1 rounded-md hover:bg-white/10 text-zinc-400 hover:text-emerald-400 transition-colors"
                title="Copy Email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ফুটার */}
      <footer className="py-8 border-t border-white/5 text-center text-xs text-zinc-500 font-mono">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </footer>
    </main>
  );
}