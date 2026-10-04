import React from 'react';
import { FEATURES_DATA } from '../data/features';
import { Layers, Gauge, Cpu, CheckCircle2, ArrowUpRight } from 'lucide-react';

const FEATURE_ICONS = [Layers, Gauge, Cpu];

export default function FeatureSection() {
  return (
    <section
      id="features"
      className="relative w-full py-28 bg-space-950 border-t border-white/5 overflow-hidden"
      aria-label="Features Section"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-emerald/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-white/10 text-xs font-mono tracking-widest text-cyber-cyan uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
              02 // CORE CAPABILITIES
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wider uppercase">
              BUILT FOR MOTION
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-400 max-w-lg leading-relaxed">
            Every animation layer is engineered for absolute 60+ FPS fidelity. 
            Scroll progress is mapped directly into high-precision sub-pixel coordinate space 
            with deterministic bi-directional scrub physics.
          </p>
        </div>

        {/* 3 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES_DATA.map((feature, idx) => {
            const Icon = FEATURE_ICONS[idx % FEATURE_ICONS.length];
            return (
              <div
                key={feature.number}
                className="group relative glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:border-cyber-cyan/40 hover:shadow-glow-subtle"
              >
                {/* Top Subtle Gradient Light */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none`}
                />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-cyber-cyan bg-space-900/90 px-3 py-1 rounded-md border border-white/10">
                      {feature.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-space-900 border border-white/10 text-slate-400 group-hover:text-cyber-cyan group-hover:scale-110 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Subtitle tag */}
                  <div className="font-mono text-[10px] tracking-widest text-slate-400 font-semibold mb-2">
                    {feature.subtitle}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-slate-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Metrics Pill Grid */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 mt-auto">
                  {feature.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-space-900/60 p-2.5 rounded-lg border border-white/5">
                      <div className="font-mono text-[10px] text-slate-500 uppercase">{m.label}</div>
                      <div className="font-mono text-xs font-bold text-slate-200 mt-0.5">{m.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
