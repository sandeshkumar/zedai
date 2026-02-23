interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ tag, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <div
        className={`flex items-center gap-2 text-accent text-[0.7rem] font-bold tracking-[0.18em] uppercase mb-3 ${centered ? "justify-center" : ""}`}
      >
        <span className="w-[18px] h-[2px] bg-accent inline-block" />
        {tag}
      </div>
      <h2
        className={`font-heading font-[800] text-[clamp(1.9rem,4vw,3rem)] tracking-[-0.03em] leading-[1.12] mb-3 ${centered ? "max-w-[600px] mx-auto" : ""}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-text-subtle max-w-[520px] text-base leading-[1.7] ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
