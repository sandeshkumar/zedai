"use client";

import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EASE } from "./motion";

// Rows of waves below the horizon (58%), stretched to the letter height and tiled sideways.
const WAVES = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='120' height='100' viewBox='0 0 120 100' preserveAspectRatio='none'>" +
    [62, 68, 75, 83, 92]
      .map(
        (y, i) =>
          `<path d='M0 ${y} Q30 ${y - 1.6 - i * 0.4} 60 ${y} T120 ${y}' fill='none' stroke='rgba(255,255,255,${(0.28 + i * 0.07).toFixed(2)})' stroke-width='${1.2 + i * 0.3}' vector-effect='non-scaling-stroke'/>`
      )
      .join("") +
    "</svg>"
)}")`;

const TEXT =
  "display text-center whitespace-nowrap leading-[0.9] text-[21vw] tracking-[-0.06em] pb-[0.03em] text-transparent bg-clip-text";

/**
 * Footer wordmark: a sunset over the Arabian Sea, seen through the letters.
 * The sun rises inside the letters as the footer scrolls into view, and the
 * sea below the horizon keeps moving.
 */
export function Wordmark() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const sunY = useTransform(scrollYProgress, [0, 1], reduce ? [30, 30] : [90, 26]);
  const sky = useTransform(
    sunY,
    (y) =>
      `radial-gradient(circle at 50% ${y}%, #FFE7B3 0%, #F7B86E 9%, rgba(240,150,90,0) 22%), linear-gradient(to bottom, #F3B874 0%, #E48A4E 30%, #C8612F 50%, #B4532A 57.5%, #2D5A8E 58%, #1E3A5F 78%, #0F2238 100%)`
  );

  const reveal = {
    initial: reduce ? false : { clipPath: "inset(100% 0 0 0)" },
    animate: inView ? { clipPath: "inset(0% 0 0 0)" } : undefined,
    transition: { duration: 1.4, ease: EASE },
  } as const;

  return (
    <div ref={ref} className="relative overflow-hidden select-none" aria-hidden="true">
      <motion.p className={TEXT} style={{ backgroundImage: sky }} {...reveal}>
        ZED LABS
      </motion.p>
      <motion.p
        className={`${TEXT} absolute inset-0`}
        style={
          {
            backgroundImage: WAVES,
            backgroundSize: "0.32em 100%",
            backgroundRepeat: "repeat-x",
            "--wl": "0.32em",
            animation: "wave-slide 6s linear infinite",
          } as React.CSSProperties
        }
        {...reveal}
      >
        ZED LABS
      </motion.p>
    </div>
  );
}
