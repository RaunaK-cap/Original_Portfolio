"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { GitBranchPlusIcon, Home, NotebookText } from "lucide-react";
import { ModeToggle } from "./ui/thememode";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Hook natively into Framer's optimized scroll listener 
  // This completely bypasses React's render lifecycle for scroll events, eliminating lag
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  return (
    // Sticky container wrapper 
    <div className="sticky top-4 md:top-6 z-50 w-full flex justify-center mb-10 mt-[-60px] pointer-events-none">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          y: isScrolled ? -8 : 0, 
          scale: isScrolled ? 0.90 : 1,
          opacity: 1
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="pointer-events-auto flex items-center gap-5 px-6 md:px-8 py-2 md:py-2.5 border border-gray-200/50 dark:border-white/10 rounded-full bg-white/70 dark:bg-black/60 backdrop-blur-xl shadow-lg dark:shadow-[0_8px_30px_rgba(255,255,255,0.04)] w-fit mx-auto"
      >
        
        {/* Left Section */}
        <div className="flex items-center gap-4 md:gap-5">
          <Link href="#">
            <motion.div whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} className="p-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer">
              <Home className="w-[1.1rem] h-[1.1rem]" strokeWidth={2.5} />
            </motion.div>
          </Link>
          <Link href="#">
            <motion.div whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} className="p-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer">
              <NotebookText className="w-[1.1rem] h-[1.1rem]" strokeWidth={2.5} />
            </motion.div>
          </Link>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-5 bg-gray-300/50 dark:bg-gray-700/50"></div>

        {/* Middle Section */}
        <div className="flex items-center gap-4 md:gap-5">
          <Link href="https://github.com/RaunaK-cap" target="_blank">
            <motion.div whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} className="p-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer">
              <GitBranchPlusIcon className="w-[1.1rem] h-[1.1rem]" strokeWidth={2.5} />
            </motion.div>
          </Link>
          {/* Custom SVG for X (Twitter) */}
          <Link href="https://x.com/caps_raunak" target="_blank">
            <motion.div whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} className="p-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-[1.1rem] h-[1.1rem] fill-current" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 4.076H5.022l12.06 15.694z" />
              </svg>
            </motion.div>
          </Link>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-5 bg-gray-300/50 dark:bg-gray-700/50"></div>

        {/* Right Section */}
        <div className="flex items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ModeToggle />
          </motion.div>
        </div>

      </motion.nav>
    </div>
  );
}

export default Navbar;
