import React from 'react';

// Soft animated gradient mesh with grain, kept non-interactive
export default function GradientMeshOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated radial/linear composite */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(60% 80% at 80% 20%, rgba(44,95,77,0.35) 0%, rgba(26,26,26,0.0) 60%), radial-gradient(50% 70% at 10% 90%, rgba(44,95,77,0.18) 0%, rgba(26,26,26,0.0) 55%), linear-gradient(180deg, rgba(26,26,26,0.0) 0%, rgba(26,26,26,0.6) 100%)',
          animation: 'meshShift 45s ease-in-out infinite',
        }}
      />
      {/* Fine grain for tactile feel */}
      <div
        className="absolute inset-0 mix-blend-soft-light opacity-[0.07]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,\
<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'240\' height=\'240\' viewBox=\'0 0 240 240\'>\
  <filter id=\'n\'>\
    <feTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'2\' stitchTiles=\'stitch\'/>\
    <feColorMatrix type=\'saturate\' values=\'0\'/>\
  </filter>\
  <rect width=\'240\' height=\'240\' filter=\'url(%23n)\' opacity=\'0.6\'/>\
</svg>")',
        }}
      />
      <style>{`
        @keyframes meshShift {
          0% { transform: translate3d(0,0,0) scale(1); filter: hue-rotate(0deg) saturate(1); }
          25% { transform: translate3d(-2%, 1%, 0) scale(1.02); filter: hue-rotate(5deg) saturate(1.05); }
          50% { transform: translate3d(1%, -1%, 0) scale(1.015); filter: hue-rotate(-4deg) saturate(1.03); }
          75% { transform: translate3d(-1%, 0.5%, 0) scale(1.01); filter: hue-rotate(3deg) saturate(1.02); }
          100% { transform: translate3d(0,0,0) scale(1); filter: hue-rotate(0deg) saturate(1); }
        }
      `}</style>
    </div>
  );
}
