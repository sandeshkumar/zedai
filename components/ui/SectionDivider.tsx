import { MirrorDot } from "@/components/home/motifs";

interface SectionDividerProps {
  variant?: "blue" | "accent" | "mixed";
}

/** A thin rule with a Yakshagana mirror in the middle. */
export function SectionDivider({ variant = "mixed" }: SectionDividerProps) {
  const line = variant === "accent" ? "bg-tile/25" : variant === "blue" ? "bg-brand/15" : "bg-ink/10";
  return (
    <div aria-hidden="true" className="max-w-[1360px] mx-auto px-5 lg:px-10 flex items-center gap-4">
      <span className={`h-px flex-1 ${line}`} />
      <MirrorDot className="w-4 h-4 shrink-0" />
      <span className={`h-px flex-1 ${line}`} />
    </div>
  );
}
