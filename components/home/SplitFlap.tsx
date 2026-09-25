"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:+-";

/**
 * Airport split-flap text. When `text` changes, each cell spins through
 * random characters and settles left to right.
 */
export function SplitFlap({
  text,
  length,
  className = "",
  cellClassName = "",
  animate = true,
}: {
  text: string;
  length: number;
  className?: string;
  cellClassName?: string;
  animate?: boolean;
}) {
  const target = text.toUpperCase().padEnd(length, " ").slice(0, length);
  const [shown, setShown] = useState(() => (animate ? " ".repeat(length) : target));
  const [flips, setFlips] = useState(0);
  const tick = useRef(0);

  useEffect(() => {
    if (!animate) {
      const t = setTimeout(() => setShown(target), 0);
      return () => clearTimeout(t);
    }
    tick.current = 0;
    const settleAt = Array.from({ length }, (_, i) => 5 + i * 2 + Math.floor(Math.random() * 3));
    const id = setInterval(() => {
      tick.current += 1;
      const n = tick.current;
      let done = true;
      const next = Array.from({ length }, (_, i) => {
        if (n >= settleAt[i]) return target[i];
        done = false;
        return target[i] === " " && n > settleAt[i] - 3 ? " " : CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join("");
      setShown(next);
      setFlips((f) => f + 1);
      if (done) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, [target, length, animate]);

  return (
    <span className={`inline-flex gap-[0.12em] ${className}`} aria-label={text} role="text">
      {shown.split("").map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`relative grid place-items-center w-[1.02em] h-[1.4em] rounded-[0.14em] bg-[#17263B] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_2px_0_rgba(0,0,0,0.45)] overflow-hidden [perspective:200px] ${cellClassName}`}
        >
          <span
            key={`${ch}-${flips % 2}`}
            className="block leading-none"
            style={{ animation: ch !== " " ? "flap-in 0.12s ease-out" : undefined }}
          >
            {ch === " " ? " " : ch}
          </span>
          <span className="absolute inset-x-0 top-1/2 h-px bg-black/50" />
        </span>
      ))}
    </span>
  );
}
