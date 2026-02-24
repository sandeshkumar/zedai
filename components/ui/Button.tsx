"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type Variant = "primary" | "ghost" | "fill" | "outline";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-linear-to-br from-accent to-accent-light text-white shadow-[0_4px_20px_rgba(249,115,22,0.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(249,115,22,0.4)]",
  ghost:
    "bg-transparent text-text-primary border border-border-blue hover:border-db-lighter hover:bg-[rgba(30,58,95,0.1)]",
  fill:
    "bg-linear-to-br from-accent to-accent-light text-white hover:shadow-[0_8px_24px_rgba(249,115,22,0.25)] hover:-translate-y-px",
  outline:
    "bg-transparent text-text-primary border border-border-blue hover:border-db-lighter",
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
      className={`inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-bold text-base cursor-pointer transition-all duration-250 font-[family-name:var(--font-body)] ${variantStyles[variant]} ${className}`}
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
      className={`inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-bold text-base cursor-pointer transition-all duration-250 font-[family-name:var(--font-body)] ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
