import Link from "next/link";
import { ALL_CITIES, CITY_SERVICES } from "@/lib/cities";
import { MirrorDot } from "@/components/home/motifs";

interface ServiceCityListProps {
  serviceSlug: string;
}

export function ServiceCityList({ serviceSlug }: ServiceCityListProps) {
  if (!CITY_SERVICES.includes(serviceSlug as (typeof CITY_SERVICES)[number])) {
    return null;
  }

  return (
    <section className="py-16 px-5 lg:px-10">
      <div className="max-w-[1360px] mx-auto">
        <p className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-kumkum mb-5">
          <MirrorDot className="w-5 h-5" />
          From Kudla to your city
        </p>
        <ul className="flex flex-wrap gap-2">
          {ALL_CITIES.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/services/${serviceSlug}/${city.slug}`}
                className="block px-4 py-2 text-[0.88rem] text-ink-2 bg-white border border-line rounded-full hover:border-tile hover:text-tile transition-colors"
              >
                {city.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
