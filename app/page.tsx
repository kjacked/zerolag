"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import LetterGlitch from "@/components/LetterGlitch";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  const handleEnter = () => {
    router.push("/about");
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Matrix rain background - not clickable */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LetterGlitch
          glitchColors={['#00ff9d', '#00ff41', '#00ffff']}
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Scan-line overlay */}
      <div className="absolute inset-0 z-5 pointer-events-none scanlines"></div>

      {/* Content overlay - not clickable except button */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        {/* Logo with glitch/pulse animation */}
        <div className="mb-12 animate-pulse pointer-events-none">
          <Image
            src="/logo.png"
            alt="ZeroLag logo"
            width={200}
            height={200}
            className="w-32 md:w-40 lg:w-48 drop-shadow-[0_0_20px_#00ff9d,0_0_40px_#00ffff]"
            priority
          />
        </div>

        {/* Enter button - ONLY clickable element */}
        <div className="flex flex-col items-center gap-3 pointer-events-none">
          <Button
            onClick={handleEnter}
            size="lg"
            className="pointer-events-auto bg-transparent border-2 border-[#00ff9d] text-[#00ff9d] font-bold text-lg md:text-xl px-12 py-6 rounded-none hover:bg-[#00ff9d] hover:text-black transition-all duration-200 shadow-[0_0_20px_#00ff9d] hover:shadow-[0_0_40px_#00ff9d,0_0_60px_#00ffff] animate-button-pulse"
          >
            ENTER THE VOID
          </Button>
          
          {/* Click to begin text */}
          <p className="text-[#00ff41] text-xs md:text-sm opacity-50 pointer-events-none">
            click to begin
          </p>
        </div>
        </div>
    </div>
  );
}
