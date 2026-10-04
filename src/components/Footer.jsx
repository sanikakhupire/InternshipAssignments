import React from 'react';
import { Zap, Github, ArrowUp, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-space-950 border-t border-white/10 pt-16 pb-12 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-space-850 border border-cyber-cyan/40">
                <Zap className="w-4 h-4 text-cyber-cyan" />
              </div>
              <span className="font-display text-lg font-extrabold tracking-widest text-white">
                ITZ FIZZ
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              A high-precision scroll-driven hero motion showcase developed for the frontend internship assignment. Powered by GSAP ScrollTrigger & React.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-space-900 border border-white/10 font-mono text-[11px] text-slate-300">
                <Code2 className="w-3.5 h-3.5 text-cyber-cyan" />
                React 18 + GSAP 3.12
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-space-900 border border-white/10 font-mono text-[11px] text-slate-300">
                Tailwind CSS
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Sections
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#hero" className="hover:text-cyber-cyan transition-colors">
                  01 // Scroll Hero Motion
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyber-cyan transition-colors">
                  02 // Motion Architecture
                </a>
              </li>
              <li>
                <a href="#telemetry" className="hover:text-cyber-cyan transition-colors">
                  03 // Kinetic Telemetry HUD
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyber-cyan transition-colors">
                  04 // Test Drive
                </a>
              </li>
            </ul>
          </div>

          {/* Project Details */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Assignment
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400 font-mono">
              <div>Role: Frontend Engineer</div>
              <div>License: MIT Open Source</div>
              <div className="pt-2">
                <a
                  href="https://github.com/your-username/scroll-driven-hero-animation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} ITZ FIZZ Motion Lab. Built with React & GSAP.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-cyber-cyan transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyber-cyan p-1 rounded"
            aria-label="Scroll to top of page"
          >
            <span>BACK TO TOP</span>
            <div className="p-1.5 rounded bg-space-900 border border-white/10 group-hover:border-cyber-cyan/40">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
