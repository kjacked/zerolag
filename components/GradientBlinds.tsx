"use client";

import { useEffect, useRef } from "react";

interface GradientBlindsProps {
  className?: string;
  blindCount?: number;
  colors?: string[];
  opacity?: number;
}

export default function GradientBlinds({
  className = "",
  blindCount = 8,
  colors = ["#00f0ff", "#03b3c3", "#00d4e6"],
  opacity = 0.15
}: GradientBlindsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const blinds = containerRef.current.querySelectorAll<HTMLDivElement>(".blind");

    blinds.forEach((blind, index) => {
      const delay = index * 100;
      setTimeout(() => {
        blind.style.transform = "scaleY(1)";
        blind.style.opacity = opacity.toString();
      }, delay);
    });
  }, [opacity]);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {Array.from({ length: blindCount }).map((_, index) => {
        const colorIndex = index % colors.length;
        const nextColorIndex = (index + 1) % colors.length;

        return (
          <div
            key={index}
            className="blind absolute top-0 h-full transition-all duration-1000 ease-out"
            style={{
              left: `${(index / blindCount) * 100}%`,
              width: `${(1 / blindCount) * 100}%`,
              background: `linear-gradient(to bottom, ${colors[colorIndex]}20, ${colors[nextColorIndex]}10, transparent)`,
              transform: "scaleY(0)",
              transformOrigin: "top",
              opacity: 0,
            }}
          />
        );
      })}
    </div>
  );
}
