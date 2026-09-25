"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MirrorDot } from "./motifs";

export const CHAPTERS = [
  { id: "home", n: "01", name: "Kudla" },
  { id: "kambala", n: "02", name: "Kambala" },
  { id: "services", n: "03", name: "Guthu mane" },
  { id: "work", n: "04", name: "Karavali voices" },
  { id: "ai", n: "05", name: "Yakshagana" },
  { id: "process", n: "06", name: "Pili Vesha" },
  { id: "mangalore", n: "07", name: "Kudla to the world" },
  { id: "faq", n: "08", name: "Goli baje" },
  { id: "contact", n: "09", name: "Encha ullar?" },
] as const;

type ChapterId = (typeof CHAPTERS)[number]["id"];

/** "Chapter 05 · Yakshagana" label that opens each section. */
export function ChapterLabel({ id, className = "", tone = "text-kumkum" }: { id: ChapterId; className?: string; tone?: string }) {
  const c = CHAPTERS.find((x) => x.id === id)!;
  return (
    <p className={`flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] ${tone} ${className}`}>
      <MirrorDot className="w-5 h-5 shrink-0" />
      <span>
        Chapter {c.n} <span className="opacity-50">·</span> {c.name}
      </span>
    </p>
  );
}

/** Fixed marker on the left edge that follows the story as you scroll. */
export function ChapterRail() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const els = CHAPTERS.map((c) => document.getElementById(c.id)).filter((e): e is HTMLElement => Boolean(e));
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.01] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const idx = CHAPTERS.findIndex((c) => c.id === active);
  const current = CHAPTERS[Math.max(0, idx)];

  return (
    <nav
      aria-label="Chapters"
      className="hidden 2xl:flex fixed left-5 top-1/2 -translate-y-1/2 z-[80] flex-col items-center gap-2 mix-blend-difference text-white"
    >
      {CHAPTERS.map((c, i) => (
        <a
          key={c.id}
          href={`#${c.id}`}
          aria-label={`Chapter ${c.n}: ${c.name}`}
          aria-current={i === idx ? "step" : undefined}
          className={`block rounded-full transition-all duration-500 ${i === idx ? "w-2 h-6 bg-white" : "w-1.5 h-1.5 bg-white/50 hover:bg-white"}`}
        />
      ))}
      <div className="mt-3 h-44 flex items-start">
        <AnimatePresence mode="wait">
          <motion.span
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="font-mono text-[0.66rem] uppercase tracking-[0.16em] [writing-mode:vertical-rl] rotate-180"
          >
            {current.n} · {current.name}
          </motion.span>
        </AnimatePresence>
      </div>
    </nav>
  );
}
