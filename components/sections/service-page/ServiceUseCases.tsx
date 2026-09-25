"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/home/motion";
import { type ServiceItem } from "@/lib/constants";

export function ServiceUseCases({ service, useCasesOverride }: { service: ServiceItem; useCasesOverride?: string[] }) {
  const useCases = useCasesOverride || service.useCases;
  return (
    <section className="py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-[1360px] mx-auto">
        <SectionHeader
          tag="Who it's for"
          title={`Businesses we build ${service.title} for`}
          description="From family shops in Kudla to teams across India and abroad."
        />
        <Reveal>
          <ul className="flex flex-wrap gap-3">
            {useCases.map((useCase, i) => (
              <li
                key={useCase}
                className={`rounded-full px-6 py-3 text-[1rem] font-medium border transition-colors duration-300 ${
                  i % 4 === 0
                    ? "bg-ink text-paper border-ink hover:bg-tile hover:border-tile"
                    : "bg-white text-ink border-line-strong hover:border-tile hover:text-tile"
                }`}
              >
                {useCase}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
