import React from 'react';
import { motion } from 'framer-motion';

const headlineLines = [
  'We Engineer',
  'Attention,',
  'Emotion,',
  'Action.'
];

export default function HeroContent({ scrollProgress = 0 }) {
  const scale = 1 - 0.15 * scrollProgress; // down to 0.85x
  const opacity = 1 - 0.7 * scrollProgress; // down to 0.3

  return (
    <div className="absolute left-0 top-0 h-screen w-[45vw] flex items-center" style={{ pointerEvents: 'none' }}>
      <div className="pl-10 md:pl-16 lg:pl-20 xl:pl-28 2xl:pl-32" style={{ transform: `scale(${scale})`, transformOrigin: 'left center', opacity }}>
        <div className="space-y-2 select-none">
          {headlineLines.map((line, i) => (
            <motion.h1
              key={line}
              initial={{ opacity: 0, filter: 'blur(8px)', y: 8 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[48px] md:text-[64px] leading-[1.1] tracking-[-0.02em] text-[#FAFAFA]"
              style={{ fontFamily: 'Playfair Display, ui-serif' }}
            >
              {line}
            </motion.h1>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: headlineLines.length * 0.8 + 1.2, duration: 0.8 }}
          className="mt-6 text-[18px] leading-[1.6] text-[#999999] max-w-[60%]"
          style={{ fontFamily: 'Inter, ui-sans-serif' }}
        >
          Psychology-driven design for brands that demand measurable results.
        </motion.p>
      </div>
    </div>
  );
}
