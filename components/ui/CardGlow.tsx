"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface CardGlowProps {
  children: ReactNode;
  className?: string;
}

export function CardGlow({ children, className = "" }: CardGlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const background = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(249,115,22,0.07), transparent 70%)`;

  function handleMouseMove(e: MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className={`relative ${className}`}>
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      {children}
    </div>
  );
}
