import React, { useEffect, useRef } from 'react';
import Stats from './Stats';
import { initIntroAnimation, createHeroScrollTrigger } from '../animations/heroAnimations';
import hypercarImg from '../assets/hypercar.jpg';
import { Shield, Sparkles, Navigation, Gauge, Zap } from 'lucide-react';

export default function Hero({ onProgressUpdate }) {
  const pinContainerRef = useRef(null);
  const headlineCharsRef = useRef([]);
  const subheadlineRef = useRef(null);
  const badgeRef = useRef(null);
  const statsWrapperRef = useRef(null);
  const statsItemsRef = useRef([]);
  const carContainerRef = useRef(null);
  const carRef = useRef(null);
  const trailRef = useRef(null);
  const glowRef = useRef(null);
  const speedBadgeRef = useRef(null);
  const trackLinesRef = useRef(null);
  const telemetryBoxRef = useRef(null);
  const titleWrapperRef = useRef(null);
  const hudElementsRef = useRef([]);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Trigger Initial Page Load Intro Animation
    const introTimeline = initIntroAnimation({
      headlineChars: headlineCharsRef.current,
      subheadline: subheadlineRef.current,
      statsItems: statsItemsRef.current,
      carContainer: carContainerRef.current,
      badge: badgeRef.current,
      hudElements: hudElementsRef.current,
    }, prefersReducedMotion);

    // 2. Register Scroll-Driven ScrollTrigger Timeline
    const mmContext = createHeroScrollTrigger({
      pinContainerRef,
      carRef,
      trailRef,
      glowRef,
      speedBadgeRef,
      trackLinesRef,
      telemetryBoxRef,
      titleWrapperRef,
      statsWrapperRef,
    }, onProgressUpdate);

    return () => {
      if (introTimeline) introTimeline.kill();
      if (mmContext && mmContext.revert) mmContext.revert();
    };
  }, [onProgressUpdate]);

  // Characters for "WELCOME" and "ITZ FIZZ"
  const welcomeText = "WELCOME";
  const brandText = "ITZ FIZZ";

  return (
    <section
      id="hero"
      ref={pinContainerRef}
      className="relative w-full min-h-screen bg-space-950 flex flex-col justify-between overflow-hidden pt-24 pb-8"
      aria-label="Hero Motion Section"
    >
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        
        {/* Radial center glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyber-cyan/10 rounded-full blur-[140px]" />
        
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-radial-vignette" />

        {/* Perspective Track Runway Lines */}
        <div 
          ref={trackLinesRef}
          className="absolute left-0 right-0 top-[56%] h-[240px] -translate-y-1/2 opacity-30 overflow-hidden"
        >
          <div className="w-full h-full flex flex-col justify-between">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/40 to-transparent" />
            <div className="w-full h-[1px] border-b border-dashed border-cyan-500/20" />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="w-full h-[1px] border-b border-dashed border-cyan-500/20" />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* TOP: Headline & Badge */}
      <div
        ref={titleWrapperRef}
        className="relative z-20 max-w-6xl mx-auto px-4 text-center mt-2 sm:mt-4 pointer-events-auto"
      >
        {/* Pill Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-900/90 border border-cyber-cyan/30 text-xs font-mono tracking-widest text-cyan-300 mb-4 sm:mb-6 shadow-neon-cyan backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
          <span>KINETIC SCROLL-DRIVEN EXPERIENCE</span>
          <span className="w-1 h-1 rounded-full bg-cyber-cyan" />
          <span className="text-slate-400">V2.4</span>
        </div>

        {/* Primary Headline */}
        <h1 className="flex flex-col items-center justify-center font-display tracking-widest uppercase">
          {/* First Row: W E L C O M E */}
          <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-400 tracking-mega-wide sm:tracking-ultra-wide mb-1 sm:mb-2 flex items-center justify-center">
            {welcomeText.split('').map((char, index) => (
              <span
                key={`w-${index}`}
                ref={(el) => {
                  if (el) headlineCharsRef.current[index] = el;
                }}
                className="inline-block transform-gpu"
              >
                {char}
              </span>
            ))}
          </div>

          {/* Second Row: ITZ FIZZ */}
          <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 tracking-ultra-wide sm:tracking-mega-wide drop-shadow-2xl flex items-center justify-center">
            {brandText.split('').map((char, index) => {
              const charIndex = welcomeText.length + index;
              return (
                <span
                  key={`b-${index}`}
                  ref={(el) => {
                    if (el) headlineCharsRef.current[charIndex] = el;
                  }}
                  className={`inline-block transform-gpu ${char === ' ' ? 'w-4 sm:w-8' : ''}`}
                >
                  {char}
                </span>
              );
            })}
          </div>
        </h1>

        {/* Subheadline description */}
        <p
          ref={subheadlineRef}
          className="mt-3 sm:mt-5 text-xs sm:text-sm md:text-base font-sans text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Precision scroll-triggered aerodynamics with GSAP ScrollTrigger pinning.
          Scroll down to initiate vector acceleration and kinetic telemetry traversal.
        </p>
      </div>

      {/* CENTER: Main Visual Stage & Kinetic Hypercar */}
      <div
        ref={carContainerRef}
        className="relative z-10 w-full max-w-6xl mx-auto h-[260px] sm:h-[320px] md:h-[360px] flex items-center justify-center my-auto pointer-events-none"
      >
        {/* Kinetic Light Trail Layer */}
        <div
          ref={trailRef}
          className="absolute top-1/2 left-0 w-3/4 h-[90px] sm:h-[130px] -translate-y-1/2 bg-gradient-to-r from-transparent via-cyber-lime/40 to-cyber-cyan/60 blur-xl opacity-0 transform-gpu origin-left"
        />

        {/* Radial Underglow */}
        <div
          ref={glowRef}
          className="absolute w-[340px] sm:w-[500px] h-[160px] bg-cyber-cyan/20 rounded-full blur-3xl opacity-40 transition-transform duration-300"
        />

        {/* Floating Car Visual Container */}
        <div
          ref={carRef}
          className="relative w-[340px] sm:w-[500px] md:w-[620px] lg:w-[720px] will-change-transform select-none"
        >
          {/* Main Vehicle Image */}
          <img
            src={hypercarImg}
            alt="ITZ FIZZ Kinetic Electric Hypercar"
            className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] mix-blend-lighten filter brightness-105 contrast-110"
            loading="eager"
          />

          {/* Dynamic Speed Overlay Tag */}
          <div
            ref={speedBadgeRef}
            className="absolute -top-3 right-8 sm:right-16 bg-space-950/90 border border-cyber-cyan/40 rounded-md px-2.5 py-1 text-[10px] font-mono text-cyber-cyan flex items-center gap-1.5 shadow-neon-cyan opacity-0 scale-90"
          >
            <Gauge className="w-3 h-3 text-cyber-cyan animate-pulse" />
            <span>AERO LOCK: ACTIVE</span>
          </div>

          {/* Dynamic Coordinate Telemetry Tag */}
          <div
            ref={telemetryBoxRef}
            className="absolute -bottom-4 left-8 sm:left-14 bg-space-950/90 border border-cyber-lime/40 rounded-md px-2.5 py-1 text-[10px] font-mono text-cyber-lime flex items-center gap-1.5 shadow-neon-lime opacity-0 -translate-x-4"
          >
            <Navigation className="w-3 h-3 text-cyber-lime" />
            <span>SCRUB: 1.0X SYNC</span>
          </div>
        </div>

        {/* Ambient HUD Corner Reticles */}
        <div
          ref={(el) => { hudElementsRef.current[0] = el; }}
          className="absolute top-4 left-4 hidden md:block font-mono text-[10px] text-slate-500"
        >
          <div>SYS_REF // GSAP_3.12</div>
          <div className="text-cyber-cyan">FPS: 120 TARGET</div>
        </div>

        <div
          ref={(el) => { hudElementsRef.current[1] = el; }}
          className="absolute top-4 right-4 hidden md:block font-mono text-[10px] text-slate-500 text-right"
        >
          <div>LATENCY // 0.00ms</div>
          <div className="text-cyber-lime">MODE: PINNED_STAGE</div>
        </div>
      </div>

      {/* BOTTOM: Statistics Section */}
      <Stats
        statsWrapperRef={statsWrapperRef}
        statsItemsRef={statsItemsRef}
      />

      {/* Scroll Down Prompt Indicator */}
      <div className="relative z-20 text-center mt-4 pointer-events-auto">
        <a
          href="#features"
          className="inline-flex flex-col items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-slate-500 hover:text-cyber-cyan transition-colors"
        >
          <span>SCROLL TO ENGAGE</span>
          <div className="w-4 h-6 rounded-full border border-slate-700 flex items-start justify-center p-1">
            <div className="w-1 h-1.5 rounded-full bg-cyber-cyan animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
