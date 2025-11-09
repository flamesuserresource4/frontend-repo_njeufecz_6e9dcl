import React, { useMemo } from 'react';
import Spline from '@splinetool/react-spline';

// 3D cover background with edge blending to charcoal via gradient feather
export default function HeroSpline({ scrollProgress = 0 }) {
  // Compute subtle scale/translate based on scroll 0->1 (0-100vh)
  const { scale, translateY } = useMemo(() => {
    const s = 1 - 0.3 * Math.min(1, Math.max(0, scrollProgress));
    const ty = -150 * Math.min(1, Math.max(0, scrollProgress));
    return { scale: s, translateY: ty };
  }, [scrollProgress]);

  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          transformOrigin: 'center',
          transition: 'transform 0.12s ease-out',
        }}
      >
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Edge blend feather to integrate with charcoal background without negative z-index */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(80% 60% at 50% 50%, rgba(26,26,26,0) 60%, rgba(26,26,26,0.6) 85%, rgba(26,26,26,0.95) 100%)',
            backdropFilter: 'blur(2px)',
          }}
        />
        {/* Top/bottom gradient rims for a soft vignette */}
        <div className="absolute top-0 left-0 right-0 h-24" style={{
          background: 'linear-gradient(180deg, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0) 100%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-28" style={{
          background: 'linear-gradient(0deg, rgba(26,26,26,1) 0%, rgba(26,26,26,0) 100%)'
        }} />
      </div>
    </div>
  );
}
