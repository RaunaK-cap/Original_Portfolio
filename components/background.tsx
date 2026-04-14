import React from "react";

export function Background() {
  return (
    <div className="fixed inset-0 z-[-1] min-h-screen w-full pointer-events-none overflow-hidden bg-gradient-to-b from-[#3B82F6] via-[#87B2F8] to-[#E3F0FF] dark:from-black dark:via-black dark:to-black transition-colors duration-500">
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
