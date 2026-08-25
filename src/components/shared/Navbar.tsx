"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "../../data/portfolioData";
import { Mail, FileText, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`;

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0c]/85 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
        
        {/* লোগো ও ব্র্যান্ড */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group shrink-0"
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-emerald-500/40 group-hover:border-emerald-400 transition-colors shadow-sm shrink-0">
            <Image
              src="/jnn.jpg"
              alt={personalInfo.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex items-center text-sm sm:text-lg font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
            <span>Farhad</span>
            <span className="hidden sm:inline text-emerald-400 font-mono">.dev</span>
          </div>
        </Link>

        {/* ডেক্সটপ নেভিগেশন লিংক */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* ডানদিকের অ্যাকশন বাটন গ্রুপ */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          
          {/* ১. সিভি বাটন (ক্লিক করলে ডাউনলোড শুরু হবে এবং নতুন ট্যাবে ওপেনও হবে) */}
          <a
            href="/farhad.pdf"
            download="Farhad_Hossain_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-white/10 px-2.5 sm:px-3 py-1.5 rounded-full hover:bg-zinc-800 transition-all shadow-sm"
            title="Download & View Resume"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Resume</span>
          </a>

          {/* ২. GitHub আইকন */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
            aria-label="GitHub Profile"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* ৩. Hire Me বাটন */}
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 sm:px-3.5 py-1.5 rounded-full hover:bg-emerald-500/20 transition-all shadow-[0_0_15px_rgba(52,211,153,0.1)]"
            title="Hire Me"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Hire Me</span>
          </a>

          {/* ৪. মোবাইল হ্যামবার্গার টগল বাটন */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 md:hidden transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* মোবাইল ড্রপডাউন ড্রয়ার মেনু */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-white/10 px-6 py-5 backdrop-blur-xl transition-all">
          <nav className="flex flex-col space-y-4 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-emerald-400 py-1 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-zinc-600 text-xs">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-zinc-500 font-mono">Socials</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}