import React from 'react';
import Spline from '@splinetool/react-spline';

// Small Spline bridge element with masked circular frame and light particle accents
export default function BridgeSpline() {
  return (
    <div className="relative mx-auto mt-20 h-[220px] w-[220px]">
      {/* Accented vignette behind */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 50%, rgba(44,95,77,0.12) 0%, rgba(26,26,26,0) 70%)',
          boxShadow: '0 24px 60px rgba(44,95,77,0.18)'
        }}
      />

      {/* Circular mask containing the Spline scene */}
      <div
        className="absolute inset-0 overflow-hidden rounded-full border border-[#2C5F4D]/40 backdrop-blur-sm"
        style={{
          WebkitMaskImage: 'radial-gradient(circle at center, black 72%, transparent 74%)',
          maskImage: 'radial-gradient(circle at center, black 72%, transparent 74%)'
        }}
      >
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Wireframe ring overlay + slow rotation */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{ border: '1px dashed rgba(44,95,77,0.35)' }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-full animate-spin-slower" style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }} />

      {/* Simple particle emitters (lightweight DOM dots) */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(44,95,77,0.9))',
              top: `${20 + Math.sin(i) * 40}%`,
              left: `${20 + Math.cos(i) * 40}%`,
              filter: 'blur(0.2px)',
              animation: `float-${i} 6s ease-in-out ${i * 0.25}s infinite`
            }}
          />
        ))}
      </div>

      <style>{`
        .animate-spin-slower { animation: spin 18s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        ${Array.from({ length: 10 })
          .map((_, i) => `@keyframes float-${i} { 0%, 100% { transform: translate(0,0); opacity: 0.9 } 50% { transform: translate(${(i%2?1:-1)*4}px, ${(i%3?1:-1)*6}px); opacity: 1 } }`)
          .join('\n')}
      `}</style>
    </div>
  );
}
