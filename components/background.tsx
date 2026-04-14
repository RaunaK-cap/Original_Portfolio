"use client";

import React, { useEffect, useState } from "react";

export function Background() {
  const [particles, setParticles] = useState<{ id: number; top: string; left: string; size: string; opacity: number }[]>([]);

  useEffect(() => {
    // Generate particles only on the client once mounted to prevent hydration errors
    const generateParticles = Array.from({ length: 1000 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`, // between 1px and 4px
      opacity: Math.random() * 0.5 + 0.1, // between 0.1 and 0.6 opacity
    }));
    setParticles(generateParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] min-h-screen w-full pointer-events-none overflow-hidden bg-gradient-to-b from-[#3B82F6] via-[#87B2F8] to-[#E3F0FF] dark:from-black dark:via-black dark:to-black transition-colors duration-500">
      
      {/* Tiny white particles layer, bound strictly to the light theme using dark:opacity-0 */}
      <div className="absolute inset-0 opacity-100 dark:opacity-[0.50] transition-opacity duration-1000">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bg-white rounded-full"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Clouds are visible in light mode, but completely fade out (opacity-0) in pure black dark mode */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-70 dark:opacity-0 transition-opacity duration-500">
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[80%] bg-white/80 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[70%] bg-[#E3F0FF] rounded-full blur-[100px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[80%] bg-white/80 rounded-full blur-[120px]" />
        <div className="absolute bottom-[50%] right-[30%] w-[40%] h-[60%] bg-[#E3F0FF] rounded-full blur-[90px]" />
      </div>
    </div>
  );
}

export default Background;
