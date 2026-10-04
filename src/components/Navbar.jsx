import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, Activity, Compass, Cpu, Layers } from 'lucide-react';

export default function Navbar({ scrollProgress = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Motion Hero', href: '#hero', icon: Compass },
    { name: 'Architecture', href: '#features', icon: Layers },
    { name: 'Telemetry HUD', href: '#telemetry', icon: Activity },
    { name: 'Performance', href: '#experience', icon: Cpu },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-space-950/80 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#hero"
          className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-cyber-cyan/50 rounded-lg p-1"
          aria-label="ITZ FIZZ Homepage"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-space-850 border border-cyber-cyan/40 group-hover:border-cyber-cyan transition-colors shadow-neon-cyan">
            <Zap className="w-5 h-5 text-cyber-cyan transition-transform group-hover:scale-110" />
            <div className="absolute -inset-0.5 rounded-lg bg-cyber-cyan/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-extrabold tracking-widest text-white flex items-center gap-1.5">
              ITZ FIZZ
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
            </span>
            <span className="font-mono text-[10px] tracking-wider text-slate-400">
              KINETIC MOTION LAB
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-space-900/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              >
                <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyber-cyan" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Status indicator & Action button */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-space-900/80 border border-white/10 text-[11px] font-mono text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-lime"></span>
            </span>
            <span>GSAP SCROLLTRIGGER ACTIVE</span>
          </div>

          <a
            href="#experience"
            className="relative group px-4 py-2 rounded-lg bg-cyber-cyan text-space-950 font-mono text-xs font-bold tracking-wider hover:bg-white transition-all shadow-neon-cyan focus:outline-none focus:ring-2 focus:ring-cyber-cyan"
          >
            <span>TEST DRIVE</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="font-mono text-[11px] text-cyber-cyan px-2 py-0.5 rounded bg-space-900 border border-cyber-cyan/30">
            {scrollProgress}%
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-space-900 border border-white/10 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyber-cyan"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-space-950/95 border-b border-white/10 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-mono tracking-wider text-slate-200 hover:bg-space-850 hover:text-cyber-cyan transition-colors"
                >
                  <Icon className="w-4 h-4 text-cyber-cyan" />
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-3">
                <span>Scroll Progress</span>
                <span className="text-cyber-cyan font-bold">{scrollProgress}%</span>
              </div>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 rounded-lg bg-cyber-cyan text-space-950 font-mono text-xs font-bold tracking-wider uppercase"
              >
                Launch Experience
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
