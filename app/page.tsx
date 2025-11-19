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
    <div 
      className="relative w-screen h-screen overflow-hidden cursor-pointer"
      onClick={handleEnter}
    >
      {/* Matrix rain background */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchColors={['#0f0', '#0f8', '#33ff33']}
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Content overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Logo with glitch/pulse animation */}
        <div className="mb-12 animate-pulse">
          <Image
            src="/logo.png"
            alt="ZeroLag logo"
            width={200}
            height={200}
            className="w-32 md:w-40 lg:w-48 drop-shadow-[0_0_20px_#0f0]"
            priority
          />
        </div>

        {/* Enter button */}
            <Button
          onClick={handleEnter}
              size="lg"
          className="bg-black border-2 border-[#0f0] text-[#0f0] font-bold text-lg md:text-xl px-12 py-6 rounded-none hover:bg-[#0f0] hover:text-black transition-all duration-200 shadow-[0_0_20px_#0f0] hover:shadow-[0_0_30px_#0f0]"
        >
          ENTER THE VOID
            </Button>
          </div>
    </div>
  );
}
