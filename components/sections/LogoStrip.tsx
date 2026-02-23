import { LOGO_NAMES } from "@/lib/constants";

export function LogoStrip() {
  return (
    <div className="bg-bg-secondary border-t border-b border-border-subtle py-8 text-center">
      <p className="text-[0.72rem] font-semibold tracking-[0.15em] uppercase text-text-dim mb-4">
        Trusted by businesses across India
      </p>
      <div className="flex justify-center items-center gap-12 flex-wrap opacity-35">
        {LOGO_NAMES.map((name) => (
          <span key={name} className="font-heading font-bold text-[1.1rem] text-text-subtle">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
