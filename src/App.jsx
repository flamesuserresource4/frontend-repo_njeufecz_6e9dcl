import React, { useEffect, useState } from 'react';
import GradientMeshOverlay from './components/GradientMeshOverlay.jsx';
import HeroSpline from './components/HeroSpline.jsx';
import HeroContent from './components/HeroContent.jsx';
import TriggersSection from './components/TriggersSection.jsx';

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
    <div className="min-h-screen w-full bg-[#1A1A1A] text-white">
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

      {/* Spacer for next content */}
      <section id="case-studies" className="h-[60vh] w-full bg-[#1F1F1F]" />
    </div>
  );
}
