"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type Variant = "primary" | "ghost" | "fill" | "outline";

const variantStyles: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-tile",
  ghost: "bg-transparent text-ink border border-line-strong hover:bg-paper-2",
  fill: "bg-ink text-paper hover:bg-tile",
  outline: "bg-transparent text-ink border border-line-strong hover:bg-paper-2",
};

interface ButtonLinkProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  href?: string;
  target?: string;
}

export function ButtonLink({ variant = "primary", className = "", children, href, target }: ButtonLinkProps) {
  return (
    <motion.a
      href={href}
      target={target}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.1 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium text-base cursor-pointer transition-colors duration-300 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.1 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium text-base cursor-pointer transition-colors duration-300 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
