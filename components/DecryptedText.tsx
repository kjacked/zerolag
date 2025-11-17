"use client";

import { useEffect, useState } from "react";

interface DecryptedTextProps {
  text: string;
  className?: string;
  speed?: number;
  sequential?: boolean;
}

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export default function DecryptedText({
  text,
  className = "",
  speed = 50,
  sequential = true
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text.split("").map(() => ""));
  const [decrypting, setDecrypting] = useState(true);

  useEffect(() => {
    setDecrypting(true);
    const textArray = text.split("");
    let iterations = 0;
    const maxIterations = sequential ? text.length : 1;

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        textArray.map((char, index) => {
          if (char === " ") return " ";

          if (sequential) {
            // Decrypt sequentially from left to right
            if (index < iterations) {
              return textArray[index];
            }
            if (index === iterations) {
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            }
            return "";
          } else {
            // Decrypt all at once
            if (iterations > text.length / 2) {
              return textArray[index];
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          }
        })
      );

      iterations += 1;

      if (iterations > text.length + maxIterations) {
        clearInterval(interval);
        setDisplayText(textArray);
        setDecrypting(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, sequential]);

  return (
    <span className={className}>
      {displayText.map((char, index) => (
        <span
          key={index}
          className={decrypting ? "opacity-80" : "opacity-100"}
          style={{
            transition: "opacity 0.3s ease",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
