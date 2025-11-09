import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function HeroContent({ scrollProgress = 0 }) {
  const { scale, opacity } = useMemo(() => {
    const s = 1 - 0.15 * Math.min(1, Math.max(0, scrollProgress));
    const o = 1 - 0.7 * Math.min(1, Math.max(0, scrollProgress));
    return { scale: s, opacity: o };
  }, [scrollProgress]);

  return (
    <motion.div
      className="relative z-10 flex h-screen items-center"
      style={{
        transform: `scale(${scale})`,
        opacity,
        transformOrigin: 'left center',
      }}
    >
      <div className="px-8 sm:px-12 md:px-16 lg:px-24 max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-serif text-[40px] leading-[1.05] sm:text-[54px] md:text-[64px] lg:text-[72px] text-white tracking-tight"
          style={{ fontFamily: '"Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}
        >
          Psychological Design<br />Engineered for Response
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-6 text-[16px] sm:text-[18px] text-neutral-300"
        >
          We blend neuroscience with craft to create interfaces that move markets. Explore the triggers at play below.
        </motion.p>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#triggers"
            className="rounded-md bg-[#2C5F4D] px-6 py-3 text-white shadow-lg shadow-emerald-900/20 transition-transform hover:-translate-y-0.5 hover:shadow-emerald-900/30"
          >
            See the Triggers
          </a>
          <a href="#case-studies" className="text-neutral-300 hover:text-white transition-colors">
            View Work
          </a>
        </div>
      </div>
    </motion.div>
  );
}
