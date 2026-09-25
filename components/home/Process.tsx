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

export function Process() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 65%", "end 55%"] });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [stage, setStage] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    // Sketch before the first step, then one paint layer per step.
    setStage(p <= 0.02 ? 0 : Math.min(4, 1 + Math.floor(p * 4)));
  });

  const current = Math.max(0, stage - 1);

  return (
    <section id="process" className="relative mx-2 lg:mx-4 rounded-[28px] lg:rounded-[40px] overflow-hidden bg-turmeric">
      {/* tiger stripes along the top and bottom edges */}
      <div className="absolute inset-x-0 top-0 h-[70px]" style={{ backgroundImage: TIGER_BAND, backgroundSize: "auto 140px", backgroundPosition: "0 0" }} aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-[70px]" style={{ backgroundImage: TIGER_BAND, backgroundSize: "auto 140px", backgroundPosition: "0 100%" }} aria-hidden="true" />

      <div className="relative max-w-[1360px] mx-auto px-5 lg:px-10 py-28 lg:py-36 grid lg:grid-cols-12 gap-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <ChapterLabel id="process" tone="text-ink" className="mb-6" />
            <h2 className="display text-[clamp(2.4rem,5vw,4.6rem)] text-ink">
              <MaskLines lines={["Hours of paint.", "One effortless", "dance."]} />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[1.02rem] leading-[1.65] text-ink/75 max-w-[42ch]">
                Before a Pili Vesha dancer takes to the street, the tiger is painted on by hand, layer
                by layer, for hours. Nobody in the crowd sees that part. Good software is the same: the
                preparation is invisible, and the result looks easy.
              </p>
            </Reveal>
            <div className="mt-8 flex items-center gap-6">
              <div className="w-[190px] lg:w-[250px] shrink-0 rounded-full bg-[#F7C45A] p-3 shadow-[inset_0_0_0_3px_rgba(11,13,18,0.9)]">
                <TigerFace stage={stage} className="w-full h-auto" />
              </div>
              <div>
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-ink/60 mb-2">Face paint</p>
                <p className="text-[1rem] font-medium text-ink max-w-[16ch]" aria-live="polite">
                  {stage === 0 ? "Waiting for the brush" : PAINT[current]}
                </p>
                <div className="mt-3 flex gap-1.5" aria-hidden="true">
                  {PAINT.map((_, i) => (
                    <span key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i < stage ? "w-6 bg-ink" : "w-3 bg-ink/25"}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 relative">
          <div className="absolute left-[15px] top-4 bottom-4 w-[3px] bg-ink/15 rounded-full" aria-hidden="true">
            <motion.div style={{ height: fill }} className="w-full bg-ink rounded-full" />
          </div>
          <ol ref={listRef} className="relative">
            {STEPS.map((s, i) => (
              <li key={s.number} className={`relative pl-16 ${i < STEPS.length - 1 ? "pb-16 lg:pb-24" : ""}`}>
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
    </section>
  );
}
