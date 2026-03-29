"use client";

import { motion, useReducedMotion } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const container = (delay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: delay,
    },
  },
});

const wordVariant = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { type: "spring" as const, damping: 18, stiffness: 90 },
  },
};

export function TextReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "span",
}: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const words = children.split(" ");

  if (prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      className={className}
      variants={container(delay)}
      initial="hidden"
      animate="visible"
      aria-label={children}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-top"
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={wordVariant}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
