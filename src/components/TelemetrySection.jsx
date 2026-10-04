import React, { useState } from 'react';
import { TELEMETRY_SPECS, DRIVE_MODES } from '../data/telemetry';
import { Activity, ShieldAlert, Sliders, Wind, Compass, Zap } from 'lucide-react';

export default function TelemetrySection() {
  const [activeMode, setActiveMode] = useState(DRIVE_MODES[0]);
  const [activeSpeed, setActiveSpeed] = useState(285);

  return (
    <section
      id="telemetry"
      className="relative w-full py-28 bg-space-900/50 border-t border-white/5 overflow-hidden"
      aria-label="Telemetry and Performance Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-850 border border-white/10 text-xs font-mono tracking-widest text-cyber-lime uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-lime animate-pulse" />
            03 // LIVE KINETIC TELEMETRY
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wider uppercase">
            ACTIVE AERO TELEMETRY HUD
          </h2>
          <p className="mt-4 font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
            Real-time downforce calculations and aerodynamic wing positioning synchronized with continuous scroll vector sampling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Drive Mode Configurator & Controls (5 Cols) */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyber-cyan" />
                  DYNAMIC PROFILES
                </span>
                <span className="font-mono text-[10px] text-cyber-cyan bg-cyber-cyan/10 px-2 py-0.5 rounded border border-cyber-cyan/30">
                  LIVE INTERACTION
                </span>
              </div>

              {/* Mode Selectors */}
              <div className="space-y-3">
                {DRIVE_MODES.map((mode) => {
                  const isSelected = activeMode.id === mode.id;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => setActiveMode(mode)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                        isSelected
                          ? 'bg-space-850 border-cyber-cyan shadow-neon-cyan'
                          : 'bg-space-950/60 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full transition-transform group-hover:scale-125"
                          style={{ backgroundColor: mode.color }}
                        />
                        <div>
                          <div className="font-display text-sm font-bold text-white tracking-wide">
                            {mode.name}
                          </div>
                          <div className="font-mono text-[11px] text-slate-400">
                            Aero Wing: {mode.aeroAngle} • Downforce: {mode.downforce}
                          </div>
                        </div>
                      </div>
                      <div className="font-mono text-xs font-bold text-slate-300">
                        {mode.topSpeed}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Interactive Speed Simulator Slider */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="speed-slider" className="font-mono text-xs text-slate-300 flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5 text-cyber-cyan" />
                    SIMULATE VELOCITY
                  </label>
                  <span className="font-mono text-xs font-bold text-cyber-cyan">
                    {activeSpeed} KM/H
                  </span>
                </div>
                <input
                  id="speed-slider"
                  type="range"
                  min="100"
                  max="420"
                  value={activeSpeed}
                  onChange={(e) => setActiveSpeed(Number(e.target.value))}
                  className="w-full h-1.5 bg-space-800 rounded-lg appearance-none cursor-pointer accent-cyber-cyan"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                  <span>100 km/h</span>
                  <span>Drag Coeff: {(0.24 + (activeSpeed / 2000)).toFixed(3)} Cd</span>
                  <span>420 km/h</span>
                </div>
              </div>
            </div>

            {/* Bottom Status Info */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyber-lime" />
                Active Profile:
              </span>
              <span className="text-white font-bold">{activeMode.name}</span>
            </div>
          </div>

          {/* RIGHT: Live Visual HUD & Specs Grid (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Telemetry Visual Canvas Box */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden flex-1 flex flex-col justify-between">
              {/* Decorative HUD Crosshairs */}
              <div className="absolute top-4 right-4 font-mono text-[10px] text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
                TELEMETRY_SYNC: LOCKED
              </div>

              <div>
                <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-1">
                  Real-Time Kinematics
                </div>
                <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                  QUAD-MOTOR VECTOR COMPUTATION
                </h3>
              </div>

              {/* Dynamic Visual Gauges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8">
                <div className="bg-space-950/80 p-4 rounded-xl border border-white/10">
                  <div className="font-mono text-[10px] text-slate-400">CALCULATED G-FORCE</div>
                  <div className="font-display text-2xl font-extrabold text-cyber-cyan mt-1">
                    {(1.2 + (activeSpeed / 250)).toFixed(2)} G
                  </div>
                  <div className="w-full bg-space-800 h-1 rounded-full mt-2 overflow-hidden">
                    <div
                      className="bg-cyber-cyan h-full rounded-full transition-all"
                      style={{ width: `${(activeSpeed / 420) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="bg-space-950/80 p-4 rounded-xl border border-white/10">
                  <div className="font-mono text-[10px] text-slate-400">ACTIVE DOWNFORCE</div>
                  <div className="font-display text-2xl font-extrabold text-cyber-lime mt-1">
                    {Math.round(activeSpeed * 2.6)} KG
                  </div>
                  <div className="w-full bg-space-800 h-1 rounded-full mt-2 overflow-hidden">
                    <div
                      className="bg-cyber-lime h-full rounded-full transition-all"
                      style={{ width: `${(activeSpeed / 420) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="bg-space-950/80 p-4 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                  <div className="font-mono text-[10px] text-slate-400">WING ATTACK ANGLE</div>
                  <div className="font-display text-2xl font-extrabold text-cyber-amber mt-1">
                    {activeMode.aeroAngle}
                  </div>
                  <div className="w-full bg-space-800 h-1 rounded-full mt-2 overflow-hidden">
                    <div
                      className="bg-cyber-amber h-full rounded-full transition-all"
                      style={{ width: activeMode.id === 'track' ? '65%' : activeMode.id === 'kinetic' ? '95%' : '20%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Hardware Specs Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
                {TELEMETRY_SPECS.map((spec, sIdx) => (
                  <div key={sIdx}>
                    <div className="font-mono text-[9px] text-slate-500 uppercase">{spec.category}</div>
                    <div className="font-display text-sm font-bold text-slate-100">{spec.value}</div>
                    <div className="text-[10px] text-slate-400 truncate">{spec.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
