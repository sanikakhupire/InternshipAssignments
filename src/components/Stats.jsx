import React from 'react';
import { STATS_DATA } from '../data/stats';
import { TrendingUp, ShieldCheck, Gauge, Zap } from 'lucide-react';

const STAT_ICONS = [TrendingUp, Gauge, Zap, ShieldCheck];

export default function Stats({ statsWrapperRef, statsItemsRef }) {
  return (
    <div
      ref={statsWrapperRef}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-20 pointer-events-auto mt-6 sm:mt-10"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {STATS_DATA.map((stat, idx) => {
          const Icon = STAT_ICONS[idx % STAT_ICONS.length];
          return (
            <div
              key={stat.id}
              ref={(el) => {
                if (statsItemsRef && statsItemsRef.current) {
                  statsItemsRef.current[idx] = el;
                }
              }}
              className="glass-panel glass-panel-hover rounded-xl p-3.5 sm:p-5 relative overflow-hidden group"
            >
              {/* Subtle top indicator border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-slate-400 font-semibold uppercase">
                  {stat.badge}
                </span>
                <div className="p-1.5 rounded-md bg-space-850 border border-white/5 text-slate-400 group-hover:text-cyber-cyan transition-colors">
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Value and Suffix */}
              <div className="flex items-baseline gap-0.5">
                <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="font-display text-lg sm:text-xl font-bold text-cyber-cyan">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <div className="font-sans font-medium text-xs sm:text-sm text-slate-200 mt-1">
                {stat.label}
              </div>

              {/* Delta / Subtitle */}
              <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-white/5">
                <span className="font-mono text-[10px] text-cyber-lime font-medium">
                  {stat.delta}
                </span>
                <span className="text-[10px] text-slate-500 hidden sm:inline truncate">
                  • {stat.detail}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
