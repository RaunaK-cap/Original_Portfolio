import Background from "@/components/background";
import Navbar from "@/components/navbar";
import { Portfolio } from "@/components/portfolio";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center  pt-1 md:pt-2 ">
      {/* Background component sits purely in the back */}
      <Background />
      
      {/* The Content Dashboard with a smooth fade-out mask at the bottom */}
      <div 
        className="w-[95%] sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-1/2 min-h-screen bg-white dark:bg-black text-black dark:text-white rounded-t-md shadow-[0_15px_40px_-5px_rgba(37,99,235,0.4)] dark:shadow-none border border-transparent dark:border-white/10 flex flex-col items-center transition-colors duration-500"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black, black calc(100% - 180px), transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black, black calc(100% - 180px), transparent 100%)'
        }}
      >
        {/* Sticky floating Navbar */}
        <Navbar />

        {/* The entire scroll-animated portfolio sections */}
        <Portfolio />

      </div>
    </div>
  );
}
