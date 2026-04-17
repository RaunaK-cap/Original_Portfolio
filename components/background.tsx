"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export function Background() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 1500 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 z-[-1] min-h-screen w-full pointer-events-none overflow-hidden">
      {/* Dynamic Background Gradient Layer */}
      <motion.div 
        initial={false}
        animate={{
          background: isDark 
            ? "radial-gradient(circle at bottom, #000000 0%, #000000 100%)" 
            : "linear-gradient(to bottom, #3B82F6 0%, #87B2F8 50%, #E3F0FF 100%)"
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0"
      />
      
      {/* Particles Layer */}
      <motion.div 
        initial={false}
        animate={{ opacity: isDark ? 0.4 : 0.8 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
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
      </motion.div>

      {/* Clouds / Ambient Glow Layer */}
      <AnimatePresence mode="wait">
        {!isDark && (
          <motion.div 
            key="clouds"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-0 left-0 w-full h-1/2"
          >
            <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[80%] bg-white/80 rounded-full blur-[120px]" />
            <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[70%] bg-[#E3F0FF] rounded-full blur-[100px]" />
            <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[80%] bg-white/80 rounded-full blur-[120px]" />
            <div className="absolute bottom-[50%] right-[30%] w-[40%] h-[60%] bg-[#E3F0FF] rounded-full blur-[90px]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Background;

