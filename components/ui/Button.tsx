import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

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

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  className?: string;
}

export function ButtonLink({ variant = "primary", className = "", children, ...props }: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-bold text-base cursor-pointer transition-all duration-250 font-[family-name:var(--font-body)] ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  className?: string;
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-bold text-base cursor-pointer transition-all duration-250 font-[family-name:var(--font-body)] ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
