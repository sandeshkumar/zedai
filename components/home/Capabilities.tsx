"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChapterLabel } from "./Chapter";
import { CAPABILITIES } from "./data";
import { Palm } from "./illustrations";
import { ArrowIcon, MaskLines, Reveal } from "./motion";

type Capability = (typeof CAPABILITIES)[number];

// Lime-washed walls in the colours you see on old Mangalore houses.
const WALLS = ["#FBF5EA", "#DCE7F1", "#F8E4B4", "#F3D6CC"];

/** Hipped Mangalore tile roof, as on a Tulunadu guthu mane, on top of each section of the house. */
function Roof({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 400 70" preserveAspectRatio="none" className="block w-[calc(100%+28px)] -mx-[14px] h-[58px] lg:h-[70px]" aria-hidden="true">
      <defs>
        <pattern id={id} width="16" height="9" patternUnits="userSpaceOnUse">
          <rect width="16" height="9" fill="#B4532A" />
          <path d="M0 0a8 7 0 0 0 16 0" fill="none" stroke="#8A3A1C" strokeWidth="1.4" />
        </pattern>
      </defs>
      <path d="M0 62 L 64 6 L 336 6 L 400 62 Z" fill={`url(#${id})`} />
      <path d="M64 6 L 336 6" stroke="#8A3A1C" strokeWidth="5" strokeLinecap="round" />
      <path d="M0 62 L 400 62 L 392 70 L 8 70 Z" fill="#8A3A1C" />
    </svg>
  );
}

function House({ c, index }: { c: Capability; index: number }) {
  return (
    <div className="h-full flex flex-col">
      <Roof id={`roof-${index}`} />
      <article className="relative flex-1 flex flex-col justify-between px-7 lg:px-9 pt-7 pb-6 text-ink" style={{ background: WALLS[index % WALLS.length] }}>
        {/* verandah posts */}
        <span className="absolute left-3 top-0 bottom-0 w-[5px] bg-[#5A3A28]/80" aria-hidden="true" />
        <span className="absolute right-3 top-0 bottom-0 w-[5px] bg-[#5A3A28]/80" aria-hidden="true" />
        <div>
          <div className="flex items-baseline justify-between mb-6">
            <span className="font-mono text-[0.75rem] text-ink-3">{c.index}</span>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-3">{c.services.length} services</span>
          </div>
          <p className="text-[0.95rem] mb-2 text-kumkum font-medium">{c.name}</p>
          <h3 className="font-display font-medium text-[clamp(1.6rem,2.4vw,2.2rem)] leading-[1.08] tracking-[-0.035em] mb-4 max-w-[18ch]">
            {c.headline}
          </h3>
          <p className="text-[0.95rem] leading-[1.6] max-w-[40ch] text-ink-3">{c.body}</p>
        </div>
        <ul className="mt-8 border-t border-ink/15">
          {c.services.map((s) => (
            <li key={s.slug} className="border-b border-ink/15">
              <Link href={`/services/${s.slug}`} className="group flex items-center justify-between py-3 text-[0.98rem]">
                <span className="transition-transform duration-300 group-hover:translate-x-1">{s.title}</span>
                <ArrowIcon className="w-4 h-4 opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:-rotate-45" />
              </Link>
            </li>
          ))}
        </ul>
      </article>
      {/* laterite plinth */}
      <div className="h-3 -mx-2 bg-[#A9543A]" aria-hidden="true" />
    </div>
  );
}

export function Capabilities() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const measure = () => {
      const enabled = mq.matches && !reduce;
      setPinned(enabled);
      if (enabled && trackRef.current) {
        setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
      }
    };
    measure();
    // Track only exists once pinned, so measure again on the next frame.
    const frame = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
    };
  }, [reduce, pinned]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const title = (
    <>
      <ChapterLabel id="services" className="mb-6" />
      <h2 className="display text-[clamp(2.2rem,3.8vw,3.6rem)] text-ink">
        <MaskLines lines={["One roof.", <span key="l2" className="text-kumkum">Every service.</span>]} />
      </h2>
    </>
  );
  const blurb = (
    <p className="text-ink-2 text-[1rem] leading-[1.6] max-w-[38ch]">
      In Tulunadu, the guthu mane is the family&apos;s ancestral home, where generations live under
      one tiled roof. We work the same way: design, engineering, AI and support in one house.
      Every service, one family, one contact on WhatsApp.
    </p>
  );

  if (!pinned) {
    return (
      <section id="services" ref={sectionRef} className="relative mx-2 lg:mx-4 mt-6 rounded-[28px] bg-tile-tint py-20 overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10 grid md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-7">{title}</div>
          <div className="md:col-span-5">{blurb}</div>
        </div>
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10 mt-14 grid md:grid-cols-2 gap-x-6 gap-y-10">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 2) * 0.08}>
              <House c={c} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ height: `calc(100vh + ${distance}px)` }}
      className="relative mx-4 mt-6 rounded-[40px] bg-tile-tint"
    >
      <div className="sticky top-0 h-screen flex items-end overflow-hidden rounded-[40px]">
        {/* the street under the houses */}
        <div className="absolute inset-x-0 bottom-0 h-[12vh] bg-[#E3CFB3] border-t-4 border-[#CDB08C]" aria-hidden="true" />
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="relative flex items-end gap-6 w-max pr-10 pl-10 xl:pl-[max(2.5rem,calc((100vw-1360px)/2+2.5rem))] pb-[12vh]"
        >
          <div className="w-[min(500px,34vw)] shrink-0 self-end flex flex-col justify-between gap-10 pr-8 pb-10">
            <div>{title}</div>
            <div>
              {blurb}
              <p className="mt-8 flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-3">
                Step inside
                <ArrowIcon className="w-3.5 h-3.5" />
              </p>
            </div>
          </div>
          {CAPABILITIES.map((c, i) => (
            <div key={c.name} className="flex items-end gap-6 shrink-0">
              <div className="w-[min(440px,32vw)]">
                <House c={c} index={i} />
              </div>
              {i < CAPABILITIES.length - 1 && <Palm className="w-[110px] h-[180px] -mb-1" lean={i % 2 ? 4 : -4} />}
            </div>
          ))}
        </motion.div>
        <div className="absolute bottom-6 inset-x-0">
          <div className="max-w-[1360px] mx-auto px-10">
            <div className="h-[2px] bg-ink/10 relative rounded-full">
              <motion.div style={{ width: bar }} className="absolute inset-y-0 left-0 bg-tile rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
