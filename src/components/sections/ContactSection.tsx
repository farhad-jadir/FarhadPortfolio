"use client";

import { useState } from "react";
import { Mail, Check, Copy, Send } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative overflow-hidden">
      {/* গ্লো ইফেক্ট */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">
          <Mail className="w-4 h-4" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Let’s Build Something Amazing Together
        </h2>
        
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
          নতুন কোনো প্রজেক্ট আইডিয়া, ওয়েব অ্যাপ ডেভেলপমেন্ট বা কোলাবোরেশনের জন্য মেসেজ পাঠাতে পারেন।
        </p>

        {/* ইমেইল কপি বক্স */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-10">
          <div className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-sm font-mono text-zinc-300">
            <span className="truncate">{personalInfo.email}</span>
            <button
              onClick={copyEmail}
              className="p-1.5 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-emerald-400 transition-colors ml-2"
              title="Copy email"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-emerald-500/20 shrink-0"
          >
            <Send className="w-4 h-4" />
            <span>Send Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}