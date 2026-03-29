"use client";

import { motion, useReducedMotion, type TargetAndTransition } from "framer-motion";
import { type ReactNode } from "react";

type RevealVariant = "fade-up" | "slide-left" | "slide-right" | "scale-up" | "blur-up" | "fade";

const variants: Record<RevealVariant, { initial: TargetAndTransition; animate: TargetAndTransition }> = {
  "fade-up": {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  },
  "slide-left": {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  "slide-right": {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  "scale-up": {
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1 },
  },
  "blur-up": {
    initial: { opacity: 0, y: 24, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
};

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const v = variants[variant];

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : v.initial}
      whileInView={prefersReducedMotion ? { opacity: 1 } : v.animate}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 120,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
