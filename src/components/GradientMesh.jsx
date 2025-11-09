import React from 'react';

// Animated gradient mesh with subtle grain overlay
export default function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient mesh layer */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 60% 50%, rgba(44,95,77,0.35), rgba(26,26,26,0.9) 60%)",
          animation: "meshShift 45s ease-in-out infinite alternate",
          filter: "saturate(110%)",
        }}
      />

      {/* Subtle noise/grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-5"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\" viewBox=\"0 0 140 140\">\n              <filter id=\"n\">\n                <feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/>\n              </filter>\n              <rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.22\"/>\n            </svg>')",
          backgroundSize: '140px 140px',
        }}
      />

      <style>{`
        @keyframes meshShift {
          0% { transform: translate3d(0,0,0) scale(1); filter: hue-rotate(0deg); }
          50% { transform: translate3d(0,-2%,0) scale(1.02); filter: hue-rotate(-5deg); }
          100% { transform: translate3d(0,1%,0) scale(1.015); filter: hue-rotate(8deg); }
        }
      `}</style>
    </div>
  );
}
