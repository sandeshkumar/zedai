import Link from "next/link";
import { CITIES, CITY_SERVICES } from "@/lib/cities";

interface ServiceCityListProps {
  serviceSlug: string;
}

export function ServiceCityList({ serviceSlug }: ServiceCityListProps) {
  if (!CITY_SERVICES.includes(serviceSlug as (typeof CITY_SERVICES)[number])) {
    return null;
  }

  return (
    <section className="py-10 px-5 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <h3 className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-text-dim mb-3">
          Available Across India
        </h3>
        <div className="flex flex-wrap gap-2">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/services/${serviceSlug}/${city.slug}`}
              className="px-3 py-1.5 text-[0.8rem] text-text-subtle bg-card border border-border-subtle rounded-[var(--radius-full)] hover:border-accent hover:text-accent transition-colors"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
