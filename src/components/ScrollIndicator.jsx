import React, { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => setVisible(false);
    const t = setTimeout(() => setVisible(false), 3000);
    window.addEventListener('scroll', hide, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll,', hide);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center" aria-hidden>
      <div className="h-16 w-px bg-[#2C5F4D] opacity-80" />
      <div className="mt-2 h-2 w-2 rounded-full bg-[#2C5F4D] animate-ping" />
      <div className="mt-3 text-xs tracking-wide text-[#7aa291]">Scroll to see psychology in action</div>
    </div>
  );
}
