"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Home, NotebookText } from "lucide-react";
import { ModeToggle } from "./ui/thememode";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  return (
    <div className="sticky top-4 md:top-6 z-50 w-full flex justify-center mb-10 mt-[-60px] pointer-events-none">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          y: isScrolled ? -8 : 0, 
          scale: isScrolled ? 0.90 : 1,
          opacity: 1
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="pointer-events-auto flex items-center gap-5 px-6 md:px-8 py-2 md:py-2.5 border border-gray-200/30 dark:border-white/10 rounded-full bg-white/40 dark:bg-black/30 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.04)] w-fit mx-auto"
      >
        
        <div className="flex items-center gap-4 md:gap-5">
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer"
          >
            <motion.div whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} className="p-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <Home className="w-[1.1rem] h-[1.1rem]" strokeWidth={2.5} />
            </motion.div>
          </div>
          <Link href="#">
            <motion.div whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} className="p-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer">
              <NotebookText className="w-[1.1rem] h-[1.1rem]" strokeWidth={2.5} />
            </motion.div>
          </Link>
        </div>

        <div className="w-[1px] h-5 bg-gray-300/50 dark:bg-gray-700/50"></div>

        <div className="flex items-center gap-4 md:gap-5">
          <Link href="https://github.com/RaunaK-cap" target="_blank">
            <motion.div whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} className="p-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-[1.2rem] h-[1.2rem] fill-current" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.592 1.026 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path>
              </svg>
            </motion.div>
          </Link>
          <Link href="https://www.linkedin.com/in/raunak-kr-690185308/" target="_blank">
            <motion.div whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} className="p-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-[1.1rem] h-[1.1rem] fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </motion.div>
          </Link>
          <Link href="https://x.com/caps_raunak" target="_blank" className="group relative flex items-center justify-center">
            
            <div className="absolute inset-0 m-auto w-6 h-6 rounded-full transition-all"></div>
            
            <motion.div whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} className="relative z-10 p-1 text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-[1.1rem] h-[1.1rem] fill-current drop-shadow-sm" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 4.076H5.022l12.06 15.694z" />
              </svg>
            </motion.div>
          </Link>
        </div>

        <div className="w-[1px] h-5 bg-gray-300/50 dark:bg-gray-700/50"></div>

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
