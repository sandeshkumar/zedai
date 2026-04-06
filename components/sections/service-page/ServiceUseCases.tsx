"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { type ServiceItem } from "@/lib/constants";

export function ServiceUseCases({ service, useCasesOverride }: { service: ServiceItem; useCasesOverride?: string[] }) {
  const useCases = useCasesOverride || service.useCases;
  return (
    <section className="py-16 lg:py-24 px-5 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          tag="Industries"
          title={`Who Is ${service.title} For?`}
          description="Built for businesses like yours, across every industry."
          centered
        />
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {useCases.map((useCase) => (
              <div
                key={useCase}
                className="bg-card border border-border-blue rounded-[var(--radius-full)] py-3 px-7 text-[0.92rem] font-medium text-text-muted hover:border-accent hover:text-accent transition-colors duration-200"
              >
                {useCase}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
