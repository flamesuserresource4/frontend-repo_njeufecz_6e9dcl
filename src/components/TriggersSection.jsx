import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const triggers = [
  { n: '01', name: 'Emotional Resonance', metric: '95% of decisions are subconscious', desc: 'Emotion encodes memory. We design moments that imprint feelings first, then information.', icon: 'heart' },
  { n: '02', name: 'Social Proof', metric: '92% trust peer recommendations', desc: 'Signals of adoption reduce risk. We stage endorsements and momentum to accelerate choice.', icon: 'nodes' },
  { n: '03', name: 'Scarcity & Urgency', metric: '332% conversion increase', desc: 'Limited access increases perceived value. We frame windows and thresholds to motivate action.', icon: 'hourglass' },
  { n: '04', name: 'Color Psychology', metric: '90% of first impressions', desc: 'Hue and contrast set intent. We calibrate palettes to prime expectation and trust.', icon: 'color' },
  { n: '05', name: 'Visual Contrast', metric: 'Pre-attentive processing', desc: 'Contrast guides the eye before cognition. We sculpt hierarchy to direct decisions.', icon: 'contrast' },
  { n: '06', name: 'Facial Recognition', metric: '50ms attention capture', desc: 'Faces trigger automatic attention. We use abstract cues to focus and empathize.', icon: 'face' },
  { n: '07', name: 'Gestalt Principles', metric: 'Automatic pattern recognition', desc: 'Proximity, similarity, and closure create meaning. We arrange to reveal structure.', icon: 'gestalt' },
  { n: '08', name: 'Reciprocity', metric: '360% email ROI', desc: 'Value given invites value returned. We design asymmetry that provokes goodwill.', icon: 'cycle' },
  { n: '09', name: 'Anchoring', metric: 'First price = reference point', desc: 'The first number sets the frame. We position anchors to influence evaluation.', icon: 'anchor' },
  { n: '10', name: 'Authority', metric: 'Credibility = conversion', desc: 'Expert signals shortcut doubt. We stage legitimacy where it matters.', icon: 'badge' },
  { n: '11', name: 'Storytelling', metric: '73% higher engagement', desc: 'Narrative organizes attention. We choreograph arcs that reward progression.', icon: 'book' },
  { n: '12', name: 'Consistency', metric: 'Progressive commitment', desc: 'Small commitments compound. We architect paths that reward follow-through.', icon: 'stairs' },
];

function Icon({ type }) {
  const common = 'stroke-[#2C5F4D]';
  switch (type) {
    case 'heart':
      return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="transition-transform duration-500 group-hover:-translate-y-0.5">
          <path d="M30 48C30 48 10 36 10 22C10 15.3726 15.3726 10 22 10C25.866 10 29.3483 11.8826 31.5 14.8C33.6517 11.8826 37.134 10 41 10C47.6274 10 53 15.3726 53 22C53 36 30 48 30 48Z" className={common} strokeWidth="1.5" />
        </svg>
      );
    case 'nodes':
      return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="transition-transform duration-500 group-hover:rotate-6">
          <circle cx="16" cy="30" r="6" className={common} strokeWidth="1.5" />
          <circle cx="44" cy="18" r="6" className={common} strokeWidth="1.5" />
          <circle cx="44" cy="42" r="6" className={common} strokeWidth="1.5" />
          <path d="M21 28L39 20M21 32L39 40" className={common} strokeWidth="1.5" />
        </svg>
      );
    case 'hourglass':
      return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="transition-transform duration-500 group-hover:-translate-y-0.5">
          <path d="M18 12H42M18 48H42M20 14C20 24 40 24 40 30C40 36 20 36 20 46" className={common} strokeWidth="1.5" />
        </svg>
      );
    case 'color':
      return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="transition-transform duration-500 group-hover:rotate-3">
          <circle cx="30" cy="30" r="16" className={common} strokeWidth="1.5" />
          <path d="M30 14A16 16 0 0 1 46 30" className={common} strokeWidth="1.5" />
        </svg>
      );
    case 'contrast':
      return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="transition-transform duration-500 group-hover:scale-[1.03]">
          <rect x="14" y="14" width="32" height="32" rx="4" className={common} strokeWidth="1.5" />
          <path d="M30 14V46" className={common} strokeWidth="1.5" />
        </svg>
      );
    case 'face':
      return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="transition-transform duration-500 group-hover:translate-y-[-2px]">
          <circle cx="30" cy="30" r="16" className={common} strokeWidth="1.5" />
          <circle cx="24" cy="26" r="2" className={common} strokeWidth="1.5" />
          <circle cx="36" cy="26" r="2" className={common} strokeWidth="1.5" />
          <path d="M24 36C24 36 27 38 30 38C33 38 36 36 36 36" className={common} strokeWidth="1.5" />
        </svg>
      );
    case 'gestalt':
      return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="transition-transform duration-500 group-hover:rotate-[-2deg]">
          <circle cx="22" cy="24" r="5" className={common} strokeWidth="1.5" />
          <circle cx="38" cy="24" r="5" className={common} strokeWidth="1.5" />
          <rect x="18" y="32" width="24" height="8" rx="2" className={common} strokeWidth="1.5" />
        </svg>
      );
    case 'cycle':
      return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="transition-transform duration-500 group-hover:rotate-6">
          <path d="M18 30a12 12 0 1 1 12 12" className={common} strokeWidth="1.5" />
          <path d="M30 18l-4 4M30 18l4 4" className={common} strokeWidth="1.5" />
        </svg>
      );
    case 'anchor':
      return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="transition-transform duration-500 group-hover:translate-y-[-2px]">
          <path d="M30 10V36M22 18h16M18 36a12 12 0 0 0 24 0" className={common} strokeWidth="1.5" />
        </svg>
      );
    case 'badge':
      return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="transition-transform duration-500 group-hover:scale-[1.02]">
          <path d="M30 12l8 6 10 2-6 8 1 10-9-4-9 4 1-10-6-8 10-2 8-6z" className={common} strokeWidth="1.5" />
        </svg>
      );
    case 'book':
      return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="transition-transform duration-500 group-hover:-translate-y-0.5">
          <path d="M14 18h16v24H14a6 6 0 0 1-6-6V24a6 6 0 0 1 6-6zM46 18H30v24h16a6 6 0 0 0 6-6V24a6 6 0 0 0-6-6z" className={common} strokeWidth="1.5" />
        </svg>
      );
    case 'stairs':
      return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="transition-transform duration-500 group-hover:translate-y-[-2px]">
          <path d="M18 42h8V34h8V26h8V18" className={common} strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}

function Card({ item, featured = false, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
      transition={{ delay: 0.08 * index, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-lg border ${featured ? 'bg-[#2C5F4D]' : 'bg-[#252525]'} ${featured ? 'border-[#3B7A64]' : 'border-[#333333]'} shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] backdrop-blur-md w-full sm:w-[48%] md:${featured ? 'w-[300px]' : 'w-[280px]'} h-auto md:${featured ? 'h-[360px]' : 'h-[340px]'} transition-transform`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-lg" style={{ boxShadow: 'inset 0 0 40px rgba(255,255,255,0.04)' }} />
      <div className="flex h-full flex-col p-8">
        <div className="flex items-start justify-between">
          <span className={`font-mono text-[14px] ${featured ? 'text-white' : 'text-[#2C5F4D]'}`} style={{ fontFamily: '"Space Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}>{item.n}</span>
          {featured && (
            <span className="rounded-full bg-black/20 px-2 py-1 text-[10px] tracking-wide text-white/90">
              MOST POWERFUL
            </span>
          )}
        </div>
        <div className="mt-4">
          <Icon type={item.icon} />
        </div>
        <div className="mt-5">
          <h3 className={`font-serif text-[24px] leading-tight text-white`} style={{ fontFamily: '"Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>{item.name}</h3>
        </div>
        <div className="mt-3">
          <div className={`font-mono text-[32px] font-semibold ${featured ? 'text-white' : 'text-[#2C5F4D]'}`} style={{ fontFamily: '"Space Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}>{item.metric}</div>
        </div>
        <p className={`mt-3 text-[14px] leading-[1.6] ${featured ? 'text-white/90' : 'text-[#AAAAAA]'}`}>{item.desc}</p>
      </div>
      <style>{`
        .group:hover { transform: translateY(-8px); box-shadow: 0 16px 48px rgba(44,95,77,0.15); border-color: #2C5F4D !important; }
        .group { transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 400ms cubic-bezier(0.4, 0, 0.2, 1), border-color 400ms cubic-bezier(0.4, 0, 0.2, 1); }
        ${featured ? `.group::after { content: ''; position: absolute; inset: -2px; border-radius: 10px; box-shadow: 0 0 40px rgba(44,95,77,0.35), 0 0 10px rgba(44,95,77,0.25) inset; opacity: 0.75; animation: pulseGlow 3.2s ease-in-out infinite; }` : ''}
        @keyframes pulseGlow { 0%,100%{ opacity:0.55 } 50%{ opacity:0.95 } }
      `}</style>
    </motion.div>
  );
}

export default function TriggersSection() {
  const rows = useMemo(() => {
    const items = triggers.map((t, i) => ({ ...t, featured: i === 2 }));
    return [items.slice(0, 4), items.slice(4, 7), items.slice(7, 12)];
  }, []);

  return (
    <section id="triggers" className="relative w-full bg-[#1A1A1A]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-20" style={{ paddingTop: 120, paddingBottom: 120 }}>
        {/* Headline */}
        <div className="mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-serif text-white tracking-[-0.01em] text-[40px] sm:text-[44px] md:text-[52px] lg:text-[64px] leading-tight"
            style={{ marginLeft: '100px', fontFamily: '"Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            The 12 Triggers<br />That Move Markets
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-4 max-w-[520px] text-[16px] sm:text-[18px] text-[#888888]"
            style={{ marginLeft: '100px' }}
          >
            Each principle proven through neuroscience.<br />Every element engineered for response.
          </motion.p>
        </div>

        {/* Grid with responsive rhythm: 1 column (xs), 2 columns (sm), asymmetric rows (md+) */}
        <div className="flex flex-col gap-6">
          {/* Row 1: 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:auto-cols-max md:grid-flow-col md:[grid-auto-columns:minmax(0,auto)] gap-6">
            {rows[0].map((item, idx) => (
              <Card key={item.n} item={item} index={idx} featured={item.featured} />
            ))}
          </div>
          {/* Row 2: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:auto-cols-max md:grid-flow-col md:[grid-auto-columns:minmax(0,auto)] gap-6">
            {rows[1].map((item, idx) => (
              <Card key={item.n} item={item} index={idx + 4} />
            ))}
          </div>
          {/* Row 3: 5 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:auto-cols-max md:grid-flow-col md:[grid-auto-columns:minmax(0,auto)] gap-6">
            {rows[2].map((item, idx) => (
              <Card key={item.n} item={item} index={idx + 7} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient transition to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[200px]" style={{
        background: 'linear-gradient(180deg, rgba(26,26,26,0) 0%, #1F1F1F 100%)'
      }} />
      <style>{`
        .animate-spin-slow { animation: spin 14s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
      `}</style>
    </section>
  );
}
