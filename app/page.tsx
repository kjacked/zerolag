"use client";

import { useEffect } from "react";
import Image from "next/image";
import Hyperspeed from "@/components/Hyperspeed";
import DecryptedText from "@/components/DecryptedText";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full bg-black text-white overflow-x-hidden scroll-smooth">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <Hyperspeed />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <Image
            src="/logo.png"
            alt="ZeroLag logo"
            width={256}
            height={256}
            className="w-36 md:w-48 lg:w-56 mb-8 animate-float drop-shadow-[0_0_30px_#00f0ff]"
            priority
          />

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-6 drop-shadow-[0_0_30px_#00f0ff] tracking-tight leading-none">
            <DecryptedText text="Welcome to ZeroLag" speed={40} sequential />
          </h1>

          <p className="text-lg md:text-2xl lg:text-3xl font-medium text-white/90 tracking-wide max-w-5xl mb-10 leading-relaxed px-4">
            The Telegram-native, non-custodial MEV and Flash-Staking Arbitrage Vault on Monad.
          </p>

          <Button
            onClick={() => scrollToSection("flow-chart")}
            size="lg"
            className="bg-white hover:bg-gray-100 text-black font-bold text-base md:text-lg px-8 py-6 rounded-full shadow-[0_0_25px_#00f0ff] hover:shadow-[0_0_35px_#00f0ff] hover:scale-105 transition-all duration-300"
          >
            Learn More <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative py-28 px-4 md:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto fade-on-scroll opacity-0">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-16 text-center tracking-tight leading-tight">
            <DecryptedText
              text="About ZeroLag"
              speed={30}
              sequential
              className="bg-gradient-to-r from-[#00f0ff] to-[#03b3c3] bg-clip-text text-transparent"
            />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12 text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
            <div className="space-y-8 max-w-3xl">
              <p className="leading-normal">
                <span className="text-[#00f0ff] font-bold">ZeroLag</span> is an automated arbitrage vault built for high-throughput chains like <span className="text-[#00f0ff] font-semibold">Monad</span> and <span className="text-[#00f0ff] font-semibold">MegaETH</span>.
              </p>

              <p className="leading-normal">
                Users interact via <span className="text-[#00f0ff] font-semibold">Telegram</span> to deposit funds and earn yield from MEV arbitrage and flash staking—no complex interfaces, no wallet extensions required.
              </p>
            </div>

            <div className="space-y-8 max-w-3xl">
              <p className="leading-normal">
                Inspired by Solana's high-frequency trading success, but built for the EVM world with institutional-grade security and non-custodial architecture.
              </p>

              <p className="leading-normal">
                <span className="text-[#00f0ff] font-bold">Zero Lag. Max Bags.</span> Capture MEV opportunities at block-level speed while your idle capital earns staking rewards automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="flow-chart" className="relative py-28 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto fade-on-scroll opacity-0">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-10 text-center tracking-tight leading-tight">
            <DecryptedText
              text="How It Works"
              speed={30}
              sequential
              className="bg-gradient-to-r from-[#00f0ff] to-[#03b3c3] bg-clip-text text-transparent"
            />
          </h2>

          <p className="text-center text-white/70 text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-16 leading-normal px-4">
            ZeroLag is a Telegram-native MEV and staking vault that captures ultra-low-latency arbitrage profits on next-gen blockchains like Monad and MegaETH. Here's the full lifecycle of your capital inside the vault:
          </p>

          {/* Flowchart with responsive container */}
          <div className="mb-20 w-full overflow-x-auto">
            <div className="flex justify-center min-w-full">
              <div className="w-full max-w-6xl px-4">
                <Image
                  src="/flow-diagram.svg"
                  alt="ZeroLag Flow Diagram"
                  width={1400}
                  height={400}
                  className="w-full h-auto rounded-lg"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>

          {/* Improved grid layout for cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                num: "01",
                title: "Telegram Deposit",
                desc: "Users deposit capital (USDC, ETH, MONAD) directly through the ZeroLag Telegram bot.",
              },
              {
                num: "02",
                title: "Vault Routing",
                desc: "Funds enter the main ZeroLag smart contract vault with live PnL tracking and automated distribution.",
              },
              {
                num: "03",
                title: "MEV Execution",
                desc: "High-frequency arbitrage engine executes MEV bundles across multiple DEXes at block-level speed.",
              },
              {
                num: "04",
                title: "Flash Staking",
                desc: "Idle capital auto-stakes into shMONAD for passive yield while waiting for arbitrage opportunities.",
              },
              {
                num: "05",
                title: "Backrun/Sandwich",
                desc: "Advanced MEV strategies capture value from transaction ordering and price inefficiencies.",
              },
              {
                num: "06",
                title: "Auto-Compound",
                desc: "Profits automatically reinvest into the vault, compounding your returns exponentially over time.",
              },
              {
                num: "07",
                title: "Real-Time Analytics",
                desc: "Track your position, earnings, and vault performance in real-time through Telegram.",
              },
              {
                num: "08",
                title: "Instant Withdrawal",
                desc: "Withdraw your principal plus earnings anytime, directly to your wallet via Telegram.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 lg:p-8 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#00f0ff]/20 hover:border-[#00f0ff]/60 hover:shadow-[0_0_20px_#00f0ff20] transition-all duration-300 cursor-pointer group"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#00f0ff] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.num}
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3 leading-tight">{item.title}</h3>
                <p className="text-sm lg:text-base text-white/70 leading-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NOW SECTION */}
      <section className="relative py-28 px-4 md:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto fade-on-scroll opacity-0">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-16 text-center tracking-tight leading-tight">
            <DecryptedText
              text="Why Now?"
              speed={30}
              sequential
              className="bg-gradient-to-r from-[#00f0ff] to-[#03b3c3] bg-clip-text text-transparent"
            />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {[
              {
                emoji: "⚡",
                title: "Monad Just Launched",
                desc: "With 10,000+ TPS and sub-second finality, Monad creates unprecedented arbitrage opportunities at scale.",
              },
              {
                emoji: "🎯",
                title: "Massive Arbitrage Windows",
                desc: "New ecosystem = inefficient pricing = huge profit potential for early participants in the ZeroLag vault.",
              },
              {
                emoji: "🚀",
                title: "First Mover Advantage",
                desc: "ZeroLag aims to dominate the MEV space on next-gen EVM chains before competition catches up.",
              },
              {
                emoji: "🤝",
                title: "MEV Democratization",
                desc: "Access institutional-grade MEV strategies through a simple Telegram interface—no technical knowledge required.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 lg:p-10 bg-gradient-to-br from-[#00f0ff]/10 to-transparent rounded-2xl border border-[#00f0ff]/30 hover:border-[#00f0ff]/60 hover:shadow-[0_0_25px_#00f0ff20] transition-all duration-300"
              >
                <div className="text-5xl lg:text-6xl mb-6">{item.emoji}</div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/70 text-base lg:text-lg leading-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section className="relative py-28 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto fade-on-scroll opacity-0">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-20 text-center tracking-tight leading-tight">
            <DecryptedText
              text="Roadmap"
              speed={30}
              sequential
              className="bg-gradient-to-r from-[#00f0ff] to-[#03b3c3] bg-clip-text text-transparent"
            />
          </h2>

          {/* Mobile-friendly roadmap */}
          <div className="relative">
            {/* Vertical line - hidden on mobile, shown on md+ */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00f0ff] via-[#03b3c3] to-[#00f0ff]"></div>

            <div className="space-y-12 md:space-y-16">
              {[
                { quarter: "Q4 2025", milestone: "MVP Live on Monad", side: "left" },
                { quarter: "Q1 2026", milestone: "Expansion to MegaETH", side: "right" },
                { quarter: "Mid 2026", milestone: "Vault Automation + Premium Tier", side: "left" },
                { quarter: "Late 2026", milestone: "DAO & Protocol Decentralization", side: "right" },
              ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row items-center">
                  {/* Mobile layout */}
                  <div className="md:hidden w-full p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#00f0ff]/30">
                    <h3 className="text-2xl font-bold mb-2 text-[#00f0ff]">{item.quarter}</h3>
                    <p className="text-white/70 text-lg">{item.milestone}</p>
                  </div>

                  {/* Desktop layout */}
                  <div className={`hidden md:flex w-full items-center ${item.side === "left" ? "" : "flex-row-reverse"}`}>
                    <div className={`w-1/2 ${item.side === "left" ? "pr-12 text-right" : "pl-12"}`}>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2">{item.quarter}</h3>
                      <p className="text-white/70 text-lg">{item.milestone}</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#00f0ff] rounded-full border-4 border-black shadow-[0_0_25px_#00f0ff] z-10"></div>
                    <div className="w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-32 md:py-40 px-4 md:px-8 bg-gradient-to-t from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center fade-on-scroll opacity-0">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-10 drop-shadow-[0_0_30px_#00f0ff] tracking-tight leading-none">
            <DecryptedText text="Coming Soon" speed={40} sequential />
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-normal px-4">
            Get ready to experience the future of MEV and staking on next-gen EVM chains.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-black font-bold text-base md:text-lg px-10 py-7 rounded-full shadow-[0_0_25px_#00f0ff] hover:shadow-[0_0_35px_#00f0ff] hover:scale-105 transition-all duration-300"
            >
              Join Waitlist
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-bold text-base md:text-lg px-10 py-7 rounded-full hover:scale-105 transition-all duration-300"
            >
              Read Docs
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-10 px-4 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-white/50">
          <p className="mb-2 text-base">© 2025 ZeroLag. All rights reserved.</p>
          <p className="text-sm">Built for the future of DeFi on Monad and MegaETH.</p>
        </div>
      </footer>
    </div>
  );
}
