"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ChapterLabel } from "./Chapter";
import { STEPS } from "./data";
import { TigerFace } from "./illustrations";
import { MaskLines, Reveal } from "./motion";
import { TIGER_BAND } from "./motifs";

// What happens to the dancer's face paint at each step of a project.
const PAINT = ["The outline is sketched", "The turmeric base coat goes on", "Stripes, one steady hand at a time", "The tiger comes alive"];

/** Face-paint progress: caption plus four bars. */
function PaintStatus({ stage, compact = false }: { stage: number; compact?: boolean }) {
  const current = Math.max(0, stage - 1);
  return (
    <div>
      <p className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-turmeric mb-1.5">
        Face paint · {Math.min(stage, 4)}/4
      </p>
      <p className={`font-medium text-white ${compact ? "text-[0.92rem] leading-[1.3]" : "text-[1.15rem] leading-[1.35]"}`} aria-live="polite">
        {stage === 0 ? "Waiting for the brush" : PAINT[current]}
      </p>
      <div className="mt-2.5 flex gap-1.5" aria-hidden="true">
        {PAINT.map((_, i) => (
          <span key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i < stage ? "w-7 bg-turmeric" : "w-3 bg-white/25"}`} />
        ))}
      </div>
    </div>
  );
}

export function Process() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [stage, setStage] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    // Sketch before the first step, then one paint layer per step.
    setStage(p <= 0.01 ? 0 : Math.min(4, 1 + Math.floor(p * 4)));
  });

  return (
    // overflow-clip (not hidden) so the sticky tiger keeps working inside.
    <section id="process" className="relative mx-2 lg:mx-4 rounded-[28px] lg:rounded-[40px] overflow-clip bg-turmeric">
      {/* tiger stripes along the top and bottom edges */}
      <div className="absolute inset-x-0 top-0 h-[70px]" style={{ backgroundImage: TIGER_BAND, backgroundSize: "auto 140px", backgroundPosition: "0 0" }} aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-[70px]" style={{ backgroundImage: TIGER_BAND, backgroundSize: "auto 140px", backgroundPosition: "0 100%" }} aria-hidden="true" />

      <div className="relative max-w-[1360px] mx-auto px-5 lg:px-10 pt-28 lg:pt-36 pb-28 lg:pb-36">
        {/* Heading row, above the tiger and the steps */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <ChapterLabel id="process" tone="text-ink" className="mb-6" />
            <h2 className="display text-[clamp(2.4rem,5vw,4.6rem)] text-ink">
              <MaskLines lines={["Hours of paint.", "One effortless dance."]} />
            </h2>
          </div>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="text-[1.02rem] leading-[1.65] text-ink/75 max-w-[44ch]">
              Before a Pili Vesha dancer takes to the street, the tiger is painted on by hand, layer by
              layer, for hours. Nobody in the crowd sees that part. Good software is the same: the
              preparation is invisible, and the result looks easy.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-10">
          {/* Desktop: a large tiger that stays in view while the steps scroll */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-[14vh]">
              <div className="rounded-[32px] bg-ink p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
                <TigerFace stage={stage} sketch="#EDA721" className="w-full max-w-[min(360px,48vh)] mx-auto h-auto" />
                <div className="mt-6 pt-6 border-t border-white/15">
                  <PaintStatus stage={stage} />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {/* Phone and tablet: a compact tiger card pinned to the top while reading */}
            <div className="lg:hidden sticky top-3 z-20 mb-10">
              <div className="flex items-center gap-4 rounded-[20px] bg-ink p-3 pr-5 shadow-[0_16px_30px_-16px_rgba(0,0,0,0.55)]">
                <TigerFace stage={stage} sketch="#EDA721" className="w-[92px] h-[92px] shrink-0" />
                <PaintStatus stage={stage} compact />
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-[15px] top-4 bottom-4 w-[3px] bg-ink/15 rounded-full" aria-hidden="true">
                <motion.div style={{ height: fill }} className="w-full bg-ink rounded-full" />
              </div>
              <ol ref={listRef} className="relative">
                {STEPS.map((s, i) => (
                  <li key={s.number} className={`relative pl-16 ${i < STEPS.length - 1 ? "pb-20 lg:pb-28" : ""}`}>
                    <span
                      className={`absolute left-0 top-0 w-[33px] h-[33px] rounded-full grid place-items-center font-mono text-[0.72rem] transition-colors duration-500 ${
                        i < stage ? "bg-ink text-turmeric" : "bg-turmeric text-ink shadow-[inset_0_0_0_2px_#0B0D12]"
                      }`}
                      aria-hidden="true"
                    >
                      {s.number}
                    </span>
                    <Reveal delay={0.05}>
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                        <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-kumkum">{s.time}</span>
                        <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink/55">Paint: {PAINT[i]}</span>
                      </div>
                      <h3 className="font-display font-medium text-[clamp(1.6rem,2.6vw,2.3rem)] tracking-[-0.035em] leading-[1.1] text-ink mb-3">
                        {s.title}
                      </h3>
                      <p className="text-[1rem] leading-[1.65] text-ink/75 max-w-[48ch]">{s.body}</p>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
