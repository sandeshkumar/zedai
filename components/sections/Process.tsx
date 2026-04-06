"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section className="py-16 lg:py-24 px-5 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          tag="How It Works"
          title="From AI Strategy to Launch in 4 Steps"
          description="We embed AI at every stage, from planning to deployment."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-[35px] left-[12%] right-[12%] h-[2px] bg-linear-to-r from-transparent via-db-light via-50% to-transparent z-0" />

          {PROCESS_STEPS.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="text-center relative z-[1]">
                <div className="w-[70px] h-[70px] rounded-full bg-card border-2 border-db-light flex items-center justify-center mx-auto mb-4 font-heading text-[1.5rem] font-[900] text-accent">
                  {step.number}
                </div>
                <h3 className="font-heading font-bold text-base mb-1.5">{step.title}</h3>
                <p className="text-text-subtle text-[0.85rem] leading-[1.5]">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
