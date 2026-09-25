"use client";

import { MaskLines, Reveal } from "@/components/home/motion";
import { MirrorDot } from "@/components/home/motifs";

interface CityContextProps {
  cityName: string;
  serviceTitle: string;
  localContext: string;
  localProof: string;
  businessDistricts: string[];
}

export function CityContext({ cityName, serviceTitle, localContext, localProof, businessDistricts }: CityContextProps) {
  return (
    <section className="py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-[1360px] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-6">
          <p className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-kumkum mb-5">
            <MirrorDot className="w-5 h-5" />
            Local expertise
          </p>
          <h2 className="display text-[clamp(2rem,4.2vw,3.6rem)] text-ink">
            <MaskLines lines={[`${serviceTitle}`, <span key="c" className="text-tile">for {cityName}.</span>]} />
          </h2>
        </div>
        <div className="lg:col-span-6 lg:pt-12">
          <Reveal>
            <p className="text-ink-2 text-[1.05rem] leading-[1.75] mb-6">{localContext}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ink text-[1rem] leading-[1.7] mb-10 font-medium border-l-2 border-tile pl-5">{localProof}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-3 mb-4">Areas we serve in {cityName}</p>
            <ul className="flex flex-wrap gap-2">
              {businessDistricts.map((district) => (
                <li key={district} className="px-4 py-2 text-[0.88rem] text-ink bg-white border border-line rounded-full">
                  {district}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
