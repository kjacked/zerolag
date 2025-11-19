import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZeroLag - Zero Lag. Max Bags.",
  description: "Earn MEV and staking yield on Monad. The Telegram-native, non-custodial MEV and Flash-Staking Arbitrage Vault.",
  keywords: ["ZeroLag", "MEV", "Monad", "DeFi", "Arbitrage", "Staking", "Telegram", "Crypto"],
  authors: [{ name: "ZeroLag Team" }],
  openGraph: {
    title: "ZeroLag - Zero Lag. Max Bags.",
    description: "The Telegram-native, non-custodial MEV and Flash-Staking Arbitrage Vault.",
    type: "website",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "ZeroLag Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroLag - Zero Lag. Max Bags.",
    description: "The Telegram-native, non-custodial MEV and Flash-Staking Arbitrage Vault.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
