"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { type ServiceItem } from "@/lib/constants";

export function ServiceBenefits({ service }: { service: ServiceItem }) {
  return (
    <section className="py-16 lg:py-24 px-5 lg:px-10 bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          tag="Why Choose Us"
          title={`How ${service.title} Grows Your Business`}
          centered
        />
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 bg-card border border-border-subtle rounded-[var(--radius-md)] p-5"
              >
                <span className="text-accent font-bold text-[1rem] mt-0.5 shrink-0">✓</span>
                <span className="text-text-subtle text-[0.92rem] leading-[1.6]">{benefit}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
