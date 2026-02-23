"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { RESULTS } from "@/lib/constants";

export function Results() {
  return (
    <section className="py-16 lg:py-24 px-5 lg:px-10 bg-bg-secondary" id="results">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          tag="Proven Results"
          title="Numbers That Speak for Themselves"
          description="We don't just build websites — we build revenue machines backed by real data."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {RESULTS.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <div className="bg-card border border-border-subtle rounded-[var(--radius-lg)] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-border-blue">
                <div className="font-heading text-[2.8rem] font-[900] bg-linear-to-br from-accent to-accent-light bg-clip-text text-transparent leading-[1.1]">
                  {item.value}
                </div>
                <h4 className="font-semibold text-[0.92rem] my-1.5">{item.label}</h4>
                <p className="text-text-dim text-[0.8rem] leading-[1.5]">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
