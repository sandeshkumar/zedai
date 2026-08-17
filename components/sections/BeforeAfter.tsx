"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BEFORE_ITEMS, AFTER_ITEMS } from "@/lib/constants";

export function BeforeAfter() {
  return (
    <section className="py-16 lg:py-24 px-5 lg:px-10 bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          tag="Case Study"
          title="From Zero to 47 Leads in 30 Days"
          description="Real results from a real client."
          centered
        />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center max-w-[900px] mx-auto">
          {/* Before card */}
          <ScrollReveal>
            <div className="bg-card rounded-[var(--radius-lg)] p-9 border border-[rgba(239,68,68,0.15)]">
              <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-4 flex items-center gap-2 text-error">
                ✕ Before ZED LABS
              </div>
              <ul className="list-none space-y-1.5">
                {BEFORE_ITEMS.map((item) => (
                  <li key={item} className="text-text-subtle text-[0.9rem] flex items-center gap-2">
                    <span className="w-5 text-center flex-shrink-0 text-error">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="font-heading font-[900] text-[1.4rem] mt-4 pt-3 border-t border-border-subtle text-error">
                0 leads / month
              </div>
            </div>
          </ScrollReveal>

          {/* VS arrow */}
          <div className="font-heading font-[900] text-[2rem] text-text-dim text-center lg:rotate-0 rotate-90">
            →
          </div>

          {/* After card */}
          <ScrollReveal delay={0.15}>
            <div className="bg-card rounded-[var(--radius-lg)] p-9 border border-border-accent">
              <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-4 flex items-center gap-2 text-accent">
                ✓ After ZED LABS
              </div>
              <ul className="list-none space-y-1.5">
                {AFTER_ITEMS.map((item) => (
                  <li key={item} className="text-text-subtle text-[0.9rem] flex items-center gap-2">
                    <span className="w-5 text-center flex-shrink-0 text-success">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="font-heading font-[900] text-[1.4rem] mt-4 pt-3 border-t border-border-subtle text-accent">
                47 leads in month 1
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
