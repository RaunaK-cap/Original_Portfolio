import React from "react";
import Link from "next/link";
import { Home, NotebookText, GitBranchIcon , } from "lucide-react";
import { ModeToggle } from "./ui/thememode";
import { Github01FreeIcons, GithubIcon, Linkedin01FreeIcons, Linkedin01Icon } from "@hugeicons/core-free-icons";

export function Navbar() {
  return (
    // Sticky container wrapper to hold it top-center
    <div className="sticky top-6 z-50 w-full flex justify-center mb-10 mt-[-60px]">
      <nav className="flex items-center gap-6 px-6 py-4 border border-gray-200/50 dark:border-white/10 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.04)] w-fit mx-auto">
        
        {/* Left Section */}
        <div className="flex items-center gap-5">
        <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
          <Home className="w-[1.1rem] h-[1.1rem]" strokeWidth={2.5} />
        </Link>
        <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
          <NotebookText className="w-[1.1rem] h-[1.1rem]" strokeWidth={2.5} />
        </Link>
      </div>

      {/* Divider */}
      <div className="w-[1px] h-6 bg-gray-300/50 dark:bg-gray-700/50"></div>

      {/* Middle Section */}
      <div className="flex items-center gap-5">
        <Link href="https://github.com" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
          <GitBranchIcon className="w-[1.1rem] h-[1.1rem]" strokeWidth={2.5} />
        </Link>
        <Link href="https://linkedin.com" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
          {/* <Linkedin01Icon className="w-[1.1rem] h-[1.1rem]" strokeWidth={2.5} /> */}
        </Link>
        {/* Custom SVG for X (Twitter) */}
        <Link href="https://twitter.com" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
          <svg viewBox="0 0 24 24" className="w-[1.1rem] h-[1.1rem] fill-current" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 4.076H5.022l12.06 15.694z" />
          </svg>
        </Link>
      </div>

      {/* Divider */}
      <div className="w-[1px] h-6 bg-gray-300/50 dark:bg-gray-700/50"></div>

      {/* Right Section */}
      <div className="flex items-center">
        <ModeToggle />
      </div>

    </nav>
    </div>
  );
}

export default Navbar;
