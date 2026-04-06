import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/constants";
import {
  getCityBySlug,
  getCityServiceContent,
  getAllCityServiceParams,
  CITY_SERVICES,
} from "@/lib/cities";
import {
  wrapInGraph,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";
import { generateCityServiceSchema } from "@/lib/schema";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ServiceHero } from "@/components/sections/service-page/ServiceHero";
import { ServiceFeatures } from "@/components/sections/service-page/ServiceFeatures";
import { ServiceBenefits } from "@/components/sections/service-page/ServiceBenefits";
import { ServiceUseCases } from "@/components/sections/service-page/ServiceUseCases";
import { ServiceCTA } from "@/components/sections/service-page/ServiceCTA";
import { ServiceBlogPosts } from "@/components/sections/service-page/ServiceBlogPosts";
import { ServiceFAQ } from "@/components/sections/service-page/ServiceFAQ";
import { CityContext } from "@/components/sections/service-page/CityContext";

interface CityServicePageProps {
  params: Promise<{ slug: string; city: string }>;
}

export async function generateStaticParams() {
  return getAllCityServiceParams();
}

export async function generateMetadata({
  params,
}: CityServicePageProps): Promise<Metadata> {
  const { slug, city } = await params;
  const content = getCityServiceContent(city, slug);
  if (!content) return {};

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.metaKeywords,
    alternates: {
      canonical: `https://zedai.tech/services/${slug}/${city}`,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://zedai.tech/services/${slug}/${city}`,
      siteName: "ZED Labs",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription,
    },
  };
}

export default async function CityServicePage({
  params,
}: CityServicePageProps) {
  const { slug, city: citySlug } = await params;

  // Validate service exists and is eligible for city pages
  const service = getServiceBySlug(slug);
  if (!service || !CITY_SERVICES.includes(slug as (typeof CITY_SERVICES)[number])) {
    notFound();
  }

  const city = getCityBySlug(citySlug);
  const content = getCityServiceContent(citySlug, slug);
  if (!city || !content) notFound();

  // Merge service FAQs + city-specific FAQs
  const allFaqs = [...content.localFaqs, ...service.faqs];

  const jsonLd = wrapInGraph(
    generateCityServiceSchema(service, city, content),
    generateBreadcrumbSchema([
      { name: "Home", url: "https://zedai.tech" },
      { name: "Services", url: "https://zedai.tech/#services" },
      {
        name: service.title,
        url: `https://zedai.tech/services/${service.slug}`,
      },
      {
        name: city.name,
        url: `https://zedai.tech/services/${service.slug}/${city.slug}`,
      },
    ]),
    generateFAQSchema(allFaqs)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <ServiceHero
          service={service}
          heroTitleOverride={content.heroTitle}
          heroDescriptionOverride={content.heroDescription}
        />
        <SectionDivider variant="blue" />
        <CityContext
          cityName={city.name}
          serviceTitle={service.title}
          localContext={content.localContext}
          localProof={content.localProof}
          businessDistricts={city.businessDistricts}
        />
        <SectionDivider variant="accent" />
        <ServiceFeatures service={service} />
        <SectionDivider variant="mixed" />
        <ServiceBenefits service={service} />
        <SectionDivider variant="blue" />
        <ServiceUseCases
          service={service}
          useCasesOverride={content.localUseCases}
        />
        <SectionDivider variant="accent" />
        <ServiceFAQ faqs={allFaqs} serviceTitle={`${service.title} in ${city.name}`} />
        <SectionDivider variant="blue" />
        <ServiceBlogPosts service={service} />
        <SectionDivider variant="mixed" />
        <ServiceCTA service={service} cityName={city.name} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
