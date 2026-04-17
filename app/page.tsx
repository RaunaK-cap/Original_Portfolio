"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Background from "@/components/background";
import Navbar from "@/components/navbar";
import { Portfolio } from "@/components/portfolio";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-1 md:pt-2">
      {/* Background component sits purely in the back */}
      <Background />
      
      {/* The Content Dashboard with a smooth fade-out mask at the bottom */}
      <motion.div 
        key={resolvedTheme}
        initial={{ opacity: 0.95, filter: "blur(6px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[95%] sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-1/2 min-h-screen bg-white dark:bg-black text-black dark:text-white rounded-t-md shadow-[0_15px_40px_-5px_rgba(37,99,235,0.4)] dark:shadow-none border border-transparent dark:border-white/10 flex flex-col items-center"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black, black calc(100% - 180px), transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black, black calc(100% - 180px), transparent 100%)'
        }}
      >
        {/* Sticky floating Navbar */}
        <Navbar />

        {/* The entire scroll-animated portfolio sections */}
        <Portfolio />

      </motion.div>
    </div>
  );
}

