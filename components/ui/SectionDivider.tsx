interface SectionDividerProps {
  variant?: "blue" | "accent" | "mixed";
}

export function SectionDivider({ variant = "mixed" }: SectionDividerProps) {
  const gradients = {
    blue: "from-transparent via-db-light/20 to-transparent",
    accent: "from-transparent via-accent/10 to-transparent",
    mixed: "from-transparent via-db-light/15 via-50% to-transparent",
  };

  return (
    <div
      aria-hidden="true"
      className={`h-px w-full bg-linear-to-r ${gradients[variant]}`}
    />
  );
}
