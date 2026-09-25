"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CONTACT } from "@/lib/constants";
import { FAQS } from "./data";
import { EASE, MaskLines } from "./motion";
import { ChapterLabel } from "./Chapter";
import { GoliBaje } from "./illustrations";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-36">
      <div className="max-w-[1360px] mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-10">
        <div className="lg:col-span-4">
          <ChapterLabel id="faq" className="mb-6" />
          <h2 className="display text-[clamp(2.2rem,3.4vw,3rem)] text-ink">
            <MaskLines lines={["Questions we hear", "over goli baje", "and chai."]} />
          </h2>
          <GoliBaje className="mt-8 w-full max-w-[340px] h-auto" />
          <p className="mt-6 text-ink-3 leading-[1.6] max-w-[34ch]">
            Something else on your mind? Call{" "}
            <a href={`tel:${CONTACT.phoneE164}`} className="text-ink underline underline-offset-4 decoration-line-strong hover:decoration-ink">
              {CONTACT.phone}
            </a>{" "}
            or write to{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-ink underline underline-offset-4 decoration-line-strong hover:decoration-ink">
              {CONTACT.email}
            </a>
            .
          </p>
        </div>

        <ul className="lg:col-span-7 lg:col-start-6 border-t border-line">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer group"
                  >
                    <span className="font-display text-[1.2rem] lg:text-[1.35rem] tracking-[-0.025em] text-ink group-hover:text-brand-2 transition-colors">
                      {f.q}
                    </span>
                    <span className="relative shrink-0 w-8 h-8 rounded-full border border-line-strong grid place-items-center" aria-hidden="true">
                      <span className="absolute w-3 h-px bg-ink" />
                      <span className={`absolute w-3 h-px bg-ink transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-90"}`} />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pr-14 text-ink-3 leading-[1.7] max-w-[62ch]">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
