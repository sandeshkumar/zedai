import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/constants";
import {
  wrapInGraph,
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";
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
import { ServiceRelated } from "@/components/sections/service-page/ServiceRelated";
import { ServiceFAQ } from "@/components/sections/service-page/ServiceFAQ";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.metaKeywords,
    alternates: {
      canonical: `https://zedai.tech/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://zedai.tech/services/${service.slug}`,
      siteName: "ZED Labs",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = wrapInGraph(
    generateServiceSchema(service),
    generateBreadcrumbSchema([
      { name: "Home", url: "https://zedai.tech" },
      { name: "Services", url: "https://zedai.tech/#services" },
      { name: service.title, url: `https://zedai.tech/services/${service.slug}` },
    ]),
    ...(service.faqs.length > 0 ? [generateFAQSchema(service.faqs)] : [])
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <ServiceHero service={service} />
        <SectionDivider variant="blue" />
        <ServiceFeatures service={service} />
        <SectionDivider variant="accent" />
        <ServiceBenefits service={service} />
        <SectionDivider variant="mixed" />
        <ServiceUseCases service={service} />
        <SectionDivider variant="blue" />
        <ServiceFAQ faqs={service.faqs} serviceTitle={service.title} />
        <SectionDivider variant="accent" />
        <ServiceBlogPosts service={service} />
        <ServiceRelated
          serviceSlugs={service.relatedServices}
          currentSlug={service.slug}
        />
        <SectionDivider variant="mixed" />
        <ServiceCTA service={service} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
