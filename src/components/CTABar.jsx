import React from 'react';
import { motion } from 'framer-motion';

export default function CTABar() {
  return (
    <div className="absolute left-0 top-0 h-screen w-[45vw] flex items-center" aria-hidden>
      <div className="pl-10 md:pl-16 lg:pl-20 xl:pl-28 2xl:pl-32 mt-[320px] md:mt-[360px]">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.2, duration: 0.6 }}
        >
          <a
            href="#framework"
            className="inline-block bg-[#2C5F4D] text-white text-[16px] font-medium px-9 py-4 rounded-[4px] shadow-[0_8px_24px_rgba(44,95,77,0.3)] hover:shadow-[0_12px_32px_rgba(44,95,77,0.35)] hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ fontFamily: 'Inter, ui-sans-serif' }}
          >
            Explore The Framework →
          </a>
        </motion.div>
      </div>
    </div>
  );
}
