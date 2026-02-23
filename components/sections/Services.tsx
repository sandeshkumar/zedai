"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section className="py-16 lg:py-24 px-5 lg:px-10" id="services">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          tag="What We Build"
          title="Everything Your Business Needs to Win Online"
          description="From idea to launch — we handle it all so you can focus on growth."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((srv, i) => (
            <ScrollReveal key={srv.title} delay={i * 0.08}>
              <div className="group bg-card border border-border-subtle rounded-[var(--radius-lg)] p-8 transition-all duration-350 relative overflow-hidden hover:border-border-blue hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                {/* Top gradient line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-db-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[rgba(30,58,95,0.1)] to-[rgba(249,115,22,0.1)] flex items-center justify-center text-[1.3rem] mb-5 border border-border-subtle">
                  {srv.icon}
                </div>
                <h3 className="font-heading font-bold text-[1.1rem] mb-2">{srv.title}</h3>
                <p className="text-text-subtle text-[0.9rem] leading-[1.6]">{srv.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
