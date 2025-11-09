import React, { useEffect } from 'react';

// Loads Playfair Display, Inter, and Space Mono via Google Fonts with display=swap
export default function FontLoader() {
  useEffect(() => {
    const id = 'gf-typography-triplet';
    if (document.getElementById(id)) return;

    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&family=Space+Mono:wght@400;700&display=swap';
    document.head.appendChild(link);
  }, []);

  return null;
}
