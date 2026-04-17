"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export function ModeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const current = theme === 'system' ? resolvedTheme : theme;
    setTheme(current === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return (
    <div className="p-1.5 h-[2.2rem] w-[2.2rem]" />
  )

  const isDark = resolvedTheme === 'dark';

  return (
    <motion.button 
      whileHover={{ scale: 1.15, y: -2 }} 
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-1.5 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer relative overflow-hidden rounded-full"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "moon" : "sun"}
          initial={{ y: 20, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: 45 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="h-[1.2rem] w-[1.2rem]" strokeWidth={2.5} />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" strokeWidth={2.5} />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  )
}
