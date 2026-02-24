import { LOGO_NAMES } from "@/lib/constants";

export function LogoStrip() {
  return (
    <div className="bg-bg-secondary border-t border-b border-border-subtle py-8 text-center">
      <p className="text-[0.72rem] font-semibold tracking-[0.15em] uppercase text-text-dim mb-4">
        Trusted by businesses across India
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-35 px-5">
        {LOGO_NAMES.map((name) => (
          <span
            key={name}
            className="font-heading font-bold text-[1.1rem] text-text-subtle whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
