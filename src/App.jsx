import React, { useEffect, useState, Suspense, lazy } from 'react';
import GradientMeshOverlay from './components/GradientMeshOverlay.jsx';
import HeroSpline from './components/HeroSpline.jsx';
import HeroContent from './components/HeroContent.jsx';
import TriggersSection from './components/TriggersSection.jsx';
import BridgeSpline from './components/BridgeSpline.jsx';
import FontLoader from './components/FontLoader.jsx';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, y / vh));
      setScrollProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#1A1A1A] text-white" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
      {/* Font face loader for Playfair/Inter/Space Mono */}
      <FontLoader />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <HeroSpline scrollProgress={scrollProgress} />
        <GradientMeshOverlay />
        <div className="absolute inset-0">
          <HeroContent scrollProgress={scrollProgress} />
        </div>
      </section>

      {/* Triggers Section */}
      <TriggersSection />

      {/* Bridge Spline element replacing proxy */}
      <BridgeSpline />

      {/* Spacer for next content */}
      <section id="case-studies" className="h-[60vh] w-full bg-[#1F1F1F]" />
    </div>
  );
}
