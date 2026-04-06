"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface CityContextProps {
  cityName: string;
  serviceTitle: string;
  localContext: string;
  localProof: string;
  businessDistricts: string[];
}

export function CityContext({
  cityName,
  serviceTitle,
  localContext,
  localProof,
  businessDistricts,
}: CityContextProps) {
  return (
    <section className="py-16 lg:py-24 px-5 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          tag="Local Expertise"
          title={`${serviceTitle} in ${cityName} — Built for Local Business`}
        />
        <div className="max-w-[800px] mx-auto lg:mx-0">
          <ScrollReveal variant="fade-up">
            <p className="text-text-subtle text-[1rem] leading-[1.8] mb-6">
              {localContext}
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.1}>
            <p className="text-text-muted text-[0.95rem] leading-[1.7] mb-8 font-medium">
              {localProof}
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.15}>
            <div>
              <h4 className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-text-dim mb-3">
                Areas We Serve in {cityName}
              </h4>
              <div className="flex flex-wrap gap-2">
                {businessDistricts.map((district) => (
                  <span
                    key={district}
                    className="px-3 py-1.5 text-[0.8rem] text-text-subtle bg-card border border-border-subtle rounded-[var(--radius-full)]"
                  >
                    {district}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
