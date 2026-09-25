"use client";

import { useRef, type ReactNode } from "react";

/** Card that lights up softly under the cursor. */
export function SpotlightCard({
  children,
  className = "",
  glow = "rgba(255,255,255,0.14)",
}: {
  children: ReactNode;
  className?: string;
  glow?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--sx", `${e.clientX - r.left}px`);
    el.style.setProperty("--sy", `${e.clientY - r.top}px`);
  }

  return (
    <article ref={ref} onMouseMove={onMove} className={`group/spot relative ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{ background: `radial-gradient(420px circle at var(--sx, 50%) var(--sy, 50%), ${glow}, transparent 60%)` }}
      />
      <div className="relative flex-1 flex flex-col justify-between">{children}</div>
    </article>
  );
}
