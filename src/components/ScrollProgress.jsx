import React from 'react';

export default function ScrollProgress({ progress = 0 }) {
  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-3 select-none pointer-events-none">
      {/* Percentage Gauge */}
      <div className="font-mono text-[10px] tracking-widest text-cyber-cyan bg-space-950/80 px-2 py-0.5 rounded border border-cyber-cyan/30 backdrop-blur-sm shadow-neon-cyan">
        {String(progress).padStart(3, '0')}%
      </div>

      {/* Progress Track */}
      <div className="relative w-1 h-36 rounded-full bg-space-800/80 overflow-hidden border border-white/10">
        <div
          className="w-full bg-gradient-to-b from-cyber-cyan to-cyber-emerald rounded-full transition-all duration-75 ease-out shadow-neon-cyan"
          style={{ height: `${progress}%` }}
        />
      </div>

      {/* Track Label */}
      <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 rotate-90 translate-y-3">
        STAGE
      </span>
    </div>
  );
}
