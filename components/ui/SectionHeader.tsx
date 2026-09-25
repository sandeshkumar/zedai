import { MirrorDot } from "@/components/home/motifs";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ tag, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""}`}>
      <p
        className={`flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-kumkum mb-5 ${centered ? "justify-center" : ""}`}
      >
        <MirrorDot className="w-5 h-5 shrink-0" />
        {tag}
      </p>
      <h2
        className={`display text-[clamp(2rem,4.4vw,3.8rem)] text-ink mb-4 ${centered ? "max-w-[18ch] mx-auto" : "max-w-[20ch]"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-ink-3 max-w-[52ch] text-[1.05rem] leading-[1.65] ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
