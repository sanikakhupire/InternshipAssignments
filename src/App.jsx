import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';
import FeatureSection from './components/FeatureSection';
import TelemetrySection from './components/TelemetrySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Throttled / smooth progress update callback for GSAP ScrollTrigger
  const handleProgressUpdate = useCallback((progress) => {
    setScrollProgress(progress);
  }, []);

  return (
    <div className="relative min-h-screen bg-space-950 text-slate-100 font-sans selection:bg-cyber-cyan/30 selection:text-white overflow-x-hidden">
      {/* Top Fixed Navigation Bar */}
      <Navbar scrollProgress={scrollProgress} />

      {/* Floating Scroll Indicator */}
      <ScrollProgress progress={scrollProgress} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Scroll-Driven Hero with GSAP Pinning */}
        <Hero onProgressUpdate={handleProgressUpdate} />

        {/* Section 2: Built For Motion Features */}
        <FeatureSection />

        {/* Section 3: Kinetic Telemetry HUD & Interactive Drive Modes */}
        <TelemetrySection />

        {/* Section 4: Experience Call To Action */}
        <CTASection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
