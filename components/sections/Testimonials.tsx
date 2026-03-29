"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 px-5 lg:px-10 bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          tag="Client Stories"
          title="Don't Take Our Word for It"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1} variant="blur-up">
              <div className="bg-card border border-border-subtle rounded-[var(--radius-lg)] p-7 transition-all duration-300 hover:border-border-blue hover:shadow-[0_0_25px_rgba(249,115,22,0.06)]">
                <div className="text-accent text-[0.9rem] mb-3 tracking-[2px]">
                  {"★".repeat(t.stars)}
                </div>
                <q className="block text-text-muted text-[0.95rem] leading-[1.7] mb-5 italic">
                  {t.quote}
                </q>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-db-light to-db-lighter flex items-center justify-center font-bold text-[0.8rem] text-white flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[0.88rem]">{t.name}</div>
                    <div className="text-text-dim text-[0.75rem]">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
