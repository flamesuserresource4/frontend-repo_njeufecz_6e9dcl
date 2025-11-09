import React, { useEffect, useState } from 'react';

const ITEMS = [
  'Currently accepting 3 clients this quarter',
  '127% average conversion lift',
  '50+ brands transformed',
];

export default function DataTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ITEMS.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute left-0 top-0 h-screen w-[45vw] flex items-center" aria-hidden>
      <div className="pl-10 md:pl-16 lg:pl-20 xl:pl-28 2xl:pl-32 mt-[260px] md:mt-[300px]">
        <div className="h-6 overflow-hidden" style={{ fontFamily: 'Space Mono, ui-monospace' }}>
          <div className="relative" style={{ height: 24 }}>
            {ITEMS.map((item, i) => (
              <div
                key={item}
                className="absolute left-0 top-0 transition-opacity duration-500"
                style={{
                  opacity: index === i ? 1 : 0,
                  color: '#2C5F4D',
                  transform: `translateY(${index === i ? 0 : 8}px)`,
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  fontSize: 14,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
