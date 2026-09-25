"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RESULTS } from "@/lib/constants";
import { ChapterLabel } from "./Chapter";
import { KambalaRace } from "./illustrations";
import { CountUp, MaskLines, Reveal } from "./motion";
import { TIGER_FILL } from "./motifs";

const STAT_NOTES: Record<string, string> = {
  "More Enquiries": "Average lift in leads within 60 days of relaunch",
  "Queries Automated": "Customer questions answered without a human",
  "Higher Conversion": "Versus the template sites our clients replaced",
  "Projects Delivered": "Across 20+ industries in India and abroad",
};

const PADDY = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='36' height='22' viewBox='0 0 36 22'><path d='M4 22 Q5 10 2 2 M8 22 Q8 12 10 4 M13 22 Q12 14 15 6 M22 22 Q23 10 20 3 M27 22 Q27 12 30 5 M32 22 Q31 14 34 8' stroke='#4E7A3A' stroke-width='2' fill='none' stroke-linecap='round'/></svg>"
)}")`;

const RIPPLES = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='90' height='26' viewBox='0 0 90 26'><path d='M0 8 Q 11 4 22 8 T 44 8 M46 20 Q 57 16 68 20 T 90 20' stroke='rgba(255,255,255,0.35)' stroke-width='1.5' fill='none'/></svg>"
)}")`;

export function Kambala() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start end", "end start"] });
  const left = useTransform(scrollYProgress, [0.05, 0.85], reduce ? ["40%", "40%"] : ["-40%", "100%"]);
  const ripple = useTransform(scrollYProgress, [0, 1], ["0px 0px", "-600px 0px"]);

  return (
    <section id="kambala" className="relative mx-2 lg:mx-4 mt-16 lg:mt-24 rounded-[28px] lg:rounded-[40px] overflow-hidden bg-[#F1E4C6]">
      <div className="max-w-[1360px] mx-auto px-5 lg:px-10 pt-20 lg:pt-28">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <ChapterLabel id="kambala" className="mb-6" />
            <h2 className="display text-[clamp(2.4rem,5.4vw,5rem)] text-ink">
              <MaskLines lines={["In Kambala, the", "fastest pair wins."]} />
            </h2>
          </div>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="text-[1.05rem] leading-[1.65] text-ink-2 max-w-[46ch]">
              Every winter, buffalo pairs race through flooded paddy tracks across Tulunadu, and the
              crowd remembers only who crossed the line first. Our clients run the same race. We build
              for the finish line.
            </p>
          </Reveal>
        </div>
      </div>

      {/* The track */}
      <div ref={trackRef} className="relative mt-14 lg:mt-20 h-[190px] lg:h-[250px]">
        <div className="absolute inset-x-0 top-0 h-6" style={{ backgroundImage: PADDY, backgroundSize: "36px 22px", backgroundPosition: "bottom" }} />
        <motion.div
          className="absolute inset-x-0 top-6 bottom-6"
          style={{
            backgroundImage: `${RIPPLES}, linear-gradient(to bottom, #7E9C9B, #5E7F83)`,
            backgroundSize: "90px 26px, 100% 100%",
            backgroundPosition: ripple,
          }}
        />
        {/* lane markers and finish line */}
        <div className="absolute inset-x-0 top-1/2 h-px border-t-2 border-dashed border-white/40" />
        <div
          className="absolute right-[6%] top-6 bottom-6 w-4"
          style={{ backgroundImage: "repeating-linear-gradient(to bottom, #fff 0 12px, #0B0D12 12px 24px)" }}
          aria-hidden="true"
        />
        <div className="absolute right-[6%] -top-1 -translate-x-1/2 font-mono text-[0.62rem] tracking-[0.14em] text-ink bg-turmeric px-2 py-0.5 rounded">FINISH</div>
        <div className="absolute inset-x-0 bottom-0 h-6 rotate-180" style={{ backgroundImage: PADDY, backgroundSize: "36px 22px", backgroundPosition: "bottom" }} />

        <motion.div className="absolute bottom-3 lg:bottom-5 w-[300px] lg:w-[420px]" style={{ left }}>
          <KambalaRace className="w-full h-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)]" />
        </motion.div>
      </div>

      {/* Results as race lanes */}
      <div className="max-w-[1360px] mx-auto px-5 lg:px-10 pt-4 pb-16 lg:pb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {RESULTS.map((r, i) => (
            <Reveal
              key={r.label}
              delay={i * 0.08}
              className={`pt-8 lg:pt-10 pr-4 border-ink/15 ${i % 2 ? "border-l pl-5 lg:pl-8" : ""} ${i === 2 ? "lg:border-l lg:pl-8" : ""} ${i >= 2 ? "border-t lg:border-t-0 mt-2 lg:mt-0" : ""}`}
            >
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-ink-3 mb-3">Lane {i + 1}</p>
              <p
                className="display text-[clamp(3.4rem,7vw,6.4rem)] font-semibold text-transparent bg-clip-text mb-4 w-fit"
                style={{ backgroundImage: TIGER_FILL, backgroundSize: "0.9em 0.7em, 100% 100%" }}
              >
                <CountUp to={r.numValue} decimals={r.decimals} suffix={r.suffix} />
              </p>
              <p className="text-[0.95rem] font-medium text-ink mb-1">{r.label}</p>
              <p className="text-[0.85rem] text-ink-3 leading-[1.5] max-w-[26ch]">{STAT_NOTES[r.label]}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
