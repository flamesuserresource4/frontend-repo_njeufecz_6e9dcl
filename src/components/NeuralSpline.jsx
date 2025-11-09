import React, { useMemo } from 'react';
import Spline from '@splinetool/react-spline';

export default function NeuralSpline({ scrollProgress = 0 }) {
  // Map 0-1 progress to transforms
  const transform = useMemo(() => {
    const scale = 1 - 0.3 * scrollProgress; // down to 0.7x
    const translateY = -150 * scrollProgress; // up to -150px
    return { scale, translateY };
  }, [scrollProgress]);

  return (
    <div
      className="absolute right-0 top-0 h-screen w-[60vw] md:w-[60vw] max-w-none"
      style={{ transform: `translateY(${transform.translateY}px) scale(${transform.scale})`, transformOrigin: 'center right' }}
    >
      <Spline
        scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
