import React, { useState } from 'react';
import { ArrowRight, Terminal, Check, Sparkles, ExternalLink, Play } from 'lucide-react';

export default function CTASection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('git clone https://github.com/your-username/scroll-driven-hero-animation.git');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="experience"
      className="relative w-full py-28 bg-space-950 border-t border-white/5 overflow-hidden"
      aria-label="Call to Action Section"
    >
      {/* Background Radial Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyber-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-900 border border-cyber-cyan/30 text-xs font-mono tracking-widest text-cyan-300 mb-6 shadow-neon-cyan">
          <Sparkles className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
          <span>PRODUCTION READY ARCHITECTURE</span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wider uppercase mb-6 leading-tight">
          EXPERIENCE NEXT-GEN <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-emerald">
            SCROLL MOTION
          </span>
        </h2>

        <p className="font-sans text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Crafted with GSAP ScrollTrigger, React 18, and Tailwind CSS. Built to demonstrate senior-tier frontend craftsmanship, responsive physics, and zero-compromise compositor performance.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={handleScrollTop}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyber-cyan text-space-950 font-mono text-sm font-bold tracking-wider hover:bg-white transition-all shadow-neon-cyan flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyber-cyan"
          >
            <Play className="w-4 h-4 text-space-950 fill-current group-hover:scale-110 transition-transform" />
            <span>REPLAY MOTION HERO</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-slate-200 font-mono text-sm font-medium tracking-wider hover:text-white hover:border-cyber-cyan/40 transition-all flex items-center justify-center gap-2"
          >
            <span>INSPECT GSAP SPECS</span>
          </a>
        </div>

        {/* Quick Clone Terminal Box */}
        <div className="max-w-xl mx-auto glass-panel rounded-xl p-3 sm:p-4 flex items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-3 overflow-hidden">
            <Terminal className="w-4 h-4 text-cyber-cyan shrink-0" />
            <code className="font-mono text-xs text-slate-300 truncate">
              git clone https://github.com/your-username/scroll-driven-hero-animation.git
            </code>
          </div>
          <button
            onClick={handleCopy}
            className="shrink-0 p-2 rounded-lg bg-space-850 border border-white/10 text-slate-300 hover:text-white hover:border-cyber-cyan/50 transition-all focus:outline-none focus:ring-2 focus:ring-cyber-cyan"
            aria-label="Copy clone command"
          >
            {copied ? <Check className="w-4 h-4 text-cyber-lime" /> : <span className="font-mono text-xs">COPY</span>}
          </button>
        </div>
      </div>
    </section>
  );
}
