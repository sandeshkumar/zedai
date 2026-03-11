"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceFAQProps {
  faqs: { question: string; answer: string }[];
  serviceTitle: string;
}

export function ServiceFAQ({ faqs, serviceTitle }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 px-5 lg:px-10" id="faq">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-accent text-[0.82rem] font-semibold tracking-[0.08em] uppercase mb-3">
            FAQ
          </span>
          <h2 className="font-heading font-[900] text-[1.8rem] lg:text-[2.2rem] tracking-[-0.03em]">
            Common Questions About {serviceTitle}
          </h2>
        </div>
        <div className="max-w-[700px]">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-border-subtle py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`service-faq-answer-${i}`}
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
                      id={`service-faq-answer-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden text-text-subtle text-[0.92rem] leading-[1.65]"
                    >
                      <div className="pt-3 pb-1">{item.answer}</div>
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
