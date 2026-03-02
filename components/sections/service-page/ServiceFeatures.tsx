"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { type ServiceItem } from "@/lib/constants";

export function ServiceFeatures({ service }: { service: ServiceItem }) {
  return (
    <section className="py-16 lg:py-24 px-5 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          tag="Features"
          title={`What You Get with ${service.title}`}
          description="Everything built to grow your business, nothing you don't need."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08}>
              <div className="group bg-card/80 backdrop-blur-sm border border-border-subtle rounded-[var(--radius-lg)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-border-blue hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_30px_rgba(249,115,22,0.06)] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="font-heading font-bold text-[1.05rem] mb-2 text-text-primary">
                  {feature.title}
                </h3>
                <p className="text-text-subtle text-[0.88rem] leading-[1.6]">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
