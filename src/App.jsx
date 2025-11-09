import React, { useEffect, useState } from 'react';
import GradientMesh from './components/GradientMesh.jsx';
import NeuralSpline from './components/NeuralSpline.jsx';
import HeroContent from './components/HeroContent.jsx';
import DataTicker from './components/DataTicker.jsx';
import CTABar from './components/CTABar.jsx';
import ScrollIndicator from './components/ScrollIndicator.jsx';

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const p = Math.min(1, Math.max(0, window.scrollY / window.innerHeight));
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-[200vh] bg-[#1A1A1A] relative text-white overflow-x-hidden">
      {/* Layers: gradient bg, spline, content */}
      <GradientMesh />
      <NeuralSpline scrollProgress={progress} />
      <HeroContent scrollProgress={progress} />
      <DataTicker />
      <CTABar />
      <ScrollIndicator />

      {/* Spacer to allow scroll-driven effects */}
      <section id="framework" className="relative z-10 pt-[120vh] pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl">
          <h2 className="font-serif text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, ui-serif' }}>
            The Framework
          </h2>
          <p className="text-[#CFCFCF]/80 leading-7 max-w-3xl" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
            Our approach blends cognitive science with brand strategy to engineer the three moments that drive behavior: attention, emotion, and action. Scroll to watch the environment respond — the system is designed to create depth, focus, and measured momentum.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
