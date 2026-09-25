import { INDUSTRIES } from "./data";
import { VelocityMarquee } from "./VelocityMarquee";

const SERVICE_WORDS = ["Websites", "Mobile apps", "ERP", "CRM", "AI agents", "E-commerce", "POS", "Cloud"];

/** A single curved roof tile, used as a separator. */
function TileMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 12" className={`w-4 h-2.5 shrink-0 ${className}`} aria-hidden="true">
      <path d="M1 1a9 9 0 0 0 18 0Z" className="fill-tile" />
    </svg>
  );
}


export function Proof() {
  return (
    <section className="pt-20 lg:pt-28">
      <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
        <p className="eyebrow text-center mb-7">Trusted by teams in</p>
      </div>
      <div className="marquee-mask border-y border-line py-5 lg:py-7 space-y-1">
        <VelocityMarquee baseVelocity={1.2}>
          {INDUSTRIES.map((name) => (
            <span key={name} className="flex items-center font-display text-[1.7rem] lg:text-[2.4rem] tracking-[-0.03em] text-ink-2 pl-8 lg:pl-12">
              {name}
              <TileMark className="ml-8 lg:ml-12" />
            </span>
          ))}
        </VelocityMarquee>
        <VelocityMarquee baseVelocity={-0.9}>
          {SERVICE_WORDS.map((name) => (
            <span key={name} className="font-display text-outline text-[2.6rem] lg:text-[4.4rem] leading-[1.1] tracking-[-0.04em] pl-8 lg:pl-14">
              {name}
            </span>
          ))}
        </VelocityMarquee>
      </div>

    </section>
  );
}
