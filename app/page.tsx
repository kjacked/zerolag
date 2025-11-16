"use client";

import Image from "next/image";
import Hyperspeed from "@/components/Hyperspeed";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full bg-black text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <Hyperspeed />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <Image
            src="/logo.png"
            alt="ZeroLag logo"
            width={208}
            height={208}
            className="w-32 md:w-52 mb-8 animate-float drop-shadow-[0_0_25px_#00f0ff]"
            priority
          />

          <h1 className="text-6xl md:text-9xl font-extrabold mb-6 drop-shadow-[0_0_25px_#00f0ff] tracking-tight leading-none">
            Welcome to ZeroLag
          </h1>

          <p className="text-xl md:text-3xl font-medium text-white/90 tracking-wide max-w-5xl mb-8">
            The Telegram-native, non-custodial MEV and Flash-Staking Arbitrage Vault on Monad.
          </p>

          <Button
            onClick={() => scrollToSection("flow-section")}
            size="lg"
            className="bg-[#00f0ff] hover:bg-[#00d4e6] text-black font-bold text-lg px-8 py-6 rounded-full shadow-[0_0_25px_#00f0ff] hover:shadow-[0_0_35px_#00f0ff] transition-all"
          >
            Learn More <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-12 text-center bg-gradient-to-r from-[#00f0ff] to-[#03b3c3] bg-clip-text text-transparent">
            About ZeroLag
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-lg md:text-xl text-white/80 leading-relaxed">
            <div className="space-y-6">
              <p>
                <span className="text-[#00f0ff] font-bold">ZeroLag</span> is an automated arbitrage vault built for high-throughput chains like <span className="text-[#00f0ff] font-semibold">Monad</span> and <span className="text-[#00f0ff] font-semibold">MegaETH</span>.
              </p>

              <p>
                Users interact via <span className="text-[#00f0ff] font-semibold">Telegram</span> to deposit funds and earn yield from MEV arbitrage and flash staking—no complex interfaces, no wallet extensions required.
              </p>
            </div>

            <div className="space-y-6">
              <p>
                Inspired by Solana's high-frequency trading success, but built for the EVM world with institutional-grade security and non-custodial architecture.
              </p>

              <p>
                <span className="text-[#00f0ff] font-bold">Zero Lag. Max Bags.</span> Capture MEV opportunities at block-level speed while your idle capital earns staking rewards automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="flow-section" className="relative py-24 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 text-center bg-gradient-to-r from-[#00f0ff] to-[#03b3c3] bg-clip-text text-transparent">
            How It Works
          </h2>

          <p className="text-center text-white/70 text-lg md:text-xl max-w-4xl mx-auto mb-16">
            ZeroLag is a Telegram-native MEV and staking vault that captures ultra-low-latency arbitrage profits on next-gen blockchains like Monad and MegaETH. Here's the full lifecycle of your capital inside the vault:
          </p>

          <div className="mb-16 flex justify-center">
            <Image
              src="/flow-diagram.svg"
              alt="ZeroLag Flow Diagram"
              width={1200}
              height={600}
              className="w-full max-w-6xl rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-white/80">
            <div className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all">
              <div className="text-3xl font-bold text-[#00f0ff] mb-3">01</div>
              <h3 className="text-xl font-bold mb-2">Telegram Deposit</h3>
              <p className="text-sm">Users deposit capital (USDC, ETH, MONAD) directly through the ZeroLag Telegram bot.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all">
              <div className="text-3xl font-bold text-[#00f0ff] mb-3">02</div>
              <h3 className="text-xl font-bold mb-2">Vault Routing</h3>
              <p className="text-sm">Funds enter the main ZeroLag smart contract vault with live PnL tracking and automated distribution.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all">
              <div className="text-3xl font-bold text-[#00f0ff] mb-3">03</div>
              <h3 className="text-xl font-bold mb-2">MEV Execution</h3>
              <p className="text-sm">High-frequency arbitrage engine executes MEV bundles across multiple DEXes at block-level speed.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all">
              <div className="text-3xl font-bold text-[#00f0ff] mb-3">04</div>
              <h3 className="text-xl font-bold mb-2">Flash Staking</h3>
              <p className="text-sm">Idle capital auto-stakes into shMONAD for passive yield while waiting for arbitrage opportunities.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all">
              <div className="text-3xl font-bold text-[#00f0ff] mb-3">05</div>
              <h3 className="text-xl font-bold mb-2">Backrun/Sandwich</h3>
              <p className="text-sm">Advanced MEV strategies capture value from transaction ordering and price inefficiencies.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all">
              <div className="text-3xl font-bold text-[#00f0ff] mb-3">06</div>
              <h3 className="text-xl font-bold mb-2">Auto-Compound</h3>
              <p className="text-sm">Profits automatically reinvest into the vault, compounding your returns exponentially over time.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all">
              <div className="text-3xl font-bold text-[#00f0ff] mb-3">07</div>
              <h3 className="text-xl font-bold mb-2">Real-Time Analytics</h3>
              <p className="text-sm">Track your position, earnings, and vault performance in real-time through Telegram.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all">
              <div className="text-3xl font-bold text-[#00f0ff] mb-3">08</div>
              <h3 className="text-xl font-bold mb-2">Instant Withdrawal</h3>
              <p className="text-sm">Withdraw your principal plus earnings anytime, directly to your wallet via Telegram.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOW SECTION */}
      <section className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-12 text-center bg-gradient-to-r from-[#00f0ff] to-[#03b3c3] bg-clip-text text-transparent">
            Why Now?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-[#00f0ff]/10 to-transparent rounded-2xl border border-[#00f0ff]/30">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Monad Just Launched</h3>
              <p className="text-white/70 text-lg">
                With 10,000+ TPS and sub-second finality, Monad creates unprecedented arbitrage opportunities at scale.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-[#00f0ff]/10 to-transparent rounded-2xl border border-[#00f0ff]/30">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Massive Arbitrage Windows</h3>
              <p className="text-white/70 text-lg">
                New ecosystem = inefficient pricing = huge profit potential for early participants in the ZeroLag vault.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-[#00f0ff]/10 to-transparent rounded-2xl border border-[#00f0ff]/30">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">First Mover Advantage</h3>
              <p className="text-white/70 text-lg">
                ZeroLag aims to dominate the MEV space on next-gen EVM chains before competition catches up.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-[#00f0ff]/10 to-transparent rounded-2xl border border-[#00f0ff]/30">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-4">MEV Democratization</h3>
              <p className="text-white/70 text-lg">
                Access institutional-grade MEV strategies through a simple Telegram interface—no technical knowledge required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section className="relative py-24 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-16 text-center bg-gradient-to-r from-[#00f0ff] to-[#03b3c3] bg-clip-text text-transparent">
            Roadmap
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00f0ff] via-[#03b3c3] to-[#00f0ff]"></div>

            <div className="space-y-12">
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-2">Q4 2025</h3>
                  <p className="text-white/70">MVP Live on Monad</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#00f0ff] rounded-full border-4 border-black shadow-[0_0_20px_#00f0ff]"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#00f0ff] rounded-full border-4 border-black shadow-[0_0_20px_#00f0ff]"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-2">Q1 2026</h3>
                  <p className="text-white/70">Expansion to MegaETH</p>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-2">Mid 2026</h3>
                  <p className="text-white/70">Vault Automation + Premium Tier</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#00f0ff] rounded-full border-4 border-black shadow-[0_0_20px_#00f0ff]"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#00f0ff] rounded-full border-4 border-black shadow-[0_0_20px_#00f0ff]"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-2">Late 2026</h3>
                  <p className="text-white/70">DAO & Protocol Decentralization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-32 px-4 md:px-8 bg-gradient-to-t from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-extrabold mb-8 drop-shadow-[0_0_25px_#00f0ff]">
            Coming Soon
          </h2>

          <p className="text-xl md:text-2xl text-white/70 mb-12">
            Get ready to experience the future of MEV and staking on next-gen EVM chains.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#00f0ff] hover:bg-[#00d4e6] text-black font-bold text-lg px-10 py-7 rounded-full shadow-[0_0_25px_#00f0ff] hover:shadow-[0_0_35px_#00f0ff] transition-all"
            >
              Join Waitlist
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10 font-bold text-lg px-10 py-7 rounded-full transition-all"
            >
              Read Docs
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-8 px-4 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-white/50">
          <p className="mb-2">© 2025 ZeroLag. All rights reserved.</p>
          <p className="text-sm">Built for the future of DeFi on Monad and MegaETH.</p>
        </div>
      </footer>
    </div>
  );
}
