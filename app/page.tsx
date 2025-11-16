import Image from "next/image";
import Hyperspeed from "@/components/Hyperspeed";

export default function Home() {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <Hyperspeed />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
  {/* BIGGER LOGO */}
  <img
    src="/logo.png"
    alt="Zerolag logo"
    className="w-32 md:w-52 mb-8 animate-float drop-shadow-[0_0_25px_#00f0ff]"
  />

  {/* BOLDER HEADING */}
  <h1 className="text-6xl md:text-9xl font-extrabold mb-6 drop-shadow-[0_0_25px_#00f0ff] tracking-tight leading-none">
    Zero Lag. Max Bags.
  </h1>

  {/* AMPLIFIED SUBTEXT */}
  <p className="text-lg md:text-2xl font-medium text-white/90 tracking-wide opacity-90 max-w-4xl">
    Earn MEV and staking yield. Directly in Telegram.
  </p>
</div>


    </div>
  );
}
