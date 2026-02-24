"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 lg:py-24 px-5 lg:px-10" id="faq">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          tag="Common Questions"
          title="Got Questions? We've Got Answers."
        />
        <div className="max-w-[700px]">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-border-subtle py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full font-heading font-bold text-[1.05rem] cursor-pointer flex justify-between items-center transition-colors duration-200 hover:text-accent bg-transparent border-none text-text-primary text-left"
                >
                  {item.question}
                  <span
                    aria-hidden="true"
                    className={`text-[1.5rem] text-text-dim transition-transform duration-300 ${isOpen ? "rotate-45 !text-accent" : ""}`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden text-text-subtle text-[0.92rem] leading-[1.65]"
                    >
                      <div className="pt-3 pb-1">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
