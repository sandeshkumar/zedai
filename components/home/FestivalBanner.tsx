import { MirrorDot, Prabhavali, TIGER_BAND, YAKSHA_BAND } from "./motifs";
import { VelocityMarquee } from "./VelocityMarquee";

// Promises a client can hold us to. The culture is carried by the bands themselves.
const TIGER_WORDS = [
  "Made in Mangalore",
  "Fixed quotes in ₹",
  "Live in 7 to 30 days",
  "Your code, your data",
  "One contact on WhatsApp",
];

const PLACE_NAMES = ["Kudla", "Tulunadu", "Karavali", "Mangaluru", "Kudla", "Tulunadu", "Karavali", "Mangaluru"];

/**
 * Two festival ribbons crossing the page, like street banners at Mangalore
 * Dasara: a Pili Vesha tiger band and a Yakshagana band in kumkum and gold.
 */
export function FestivalBanner() {
  return (
    <section aria-label="Made on the coast of Karnataka" className="relative h-[300px] lg:h-[420px] overflow-hidden my-4 lg:my-6">
      {/* Yakshagana band, behind */}
      <div
        className="absolute left-[-5%] right-[-5%] top-1/2 -translate-y-1/2 rotate-[6deg] h-[92px] lg:h-[118px] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)]"
        style={{ backgroundImage: YAKSHA_BAND, backgroundSize: "auto 100%" }}
      >
        <VelocityMarquee baseVelocity={0.8} className="h-full flex items-center">
          {PLACE_NAMES.map((w, i) => (
            <span key={i} className="flex items-center gap-8 lg:gap-12 pl-8 lg:pl-12 font-display font-medium text-[1.6rem] lg:text-[2.2rem] tracking-[-0.02em] text-[#F4D27A]">
              {w}
              <MirrorDot className="w-5 h-5 lg:w-6 lg:h-6" />
            </span>
          ))}
        </VelocityMarquee>
      </div>

      {/* Pili Vesha band, in front */}
      <div
        className="absolute left-[-5%] right-[-5%] top-1/2 -translate-y-1/2 -rotate-[5deg] h-[104px] lg:h-[138px] shadow-[0_24px_50px_-20px_rgba(0,0,0,0.5)]"
        style={{ backgroundImage: TIGER_BAND, backgroundSize: "auto 100%" }}
      >
        <VelocityMarquee baseVelocity={-1.1} className="h-full flex items-center">
          {TIGER_WORDS.map((w) => (
            <span key={w} className="flex items-center gap-8 lg:gap-12 pl-8 lg:pl-12 font-display font-semibold text-[1.9rem] lg:text-[2.9rem] tracking-[-0.035em] text-ink">
              {w}
              <Prabhavali className="w-10 h-10 lg:w-12 lg:h-12 shrink-0" spin={24} />
            </span>
          ))}
        </VelocityMarquee>
      </div>
    </section>
  );
}
