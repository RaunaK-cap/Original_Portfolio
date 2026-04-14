import Image from "next/image";
import { Button } from "@/components/ui/button";
import Background from "@/components/background";
import { ModeToggle } from "@/components/ui/thememode";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-4 ">
      {/* Background component sits purely in the back */}
      <Background />
      
      {/* The Content Dashboard with a smooth fade-out mask at the bottom */}
      <div 
        className="w-[90%] md:w-1/2 min-h-[2000px] bg-white dark:bg-black text-black dark:text-white rounded-t-2xl shadow-[0_15px_40px_-5px_rgba(37,99,235,0.4)] dark:shadow-none border border-transparent dark:border-white/10 p-8 pb-[150px] flex flex-col items-center transition-colors duration-500"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black, black calc(100% - 150px), transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black, black calc(100% - 150px), transparent 100%)'
        }}
      >
        <h1 className="text-3xl font-semibold mb-4">Your Dashboard</h1>
        <p className="text-gray-400 mb-8 text-center max-w-lg">
          This page is exactly half width on desktop and has a top margin.
          It will automatically switch themes based on your toggle!
        </p>

        <ModeToggle/>

    
      </div>
    </div>
  );
}
