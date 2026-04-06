import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | ZED Labs",
  description:
    "Read the terms and conditions for using ZED Labs services and website.",
  alternates: { canonical: "https://zedai.tech/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="py-24 px-5 lg:px-10">
        <article className="max-w-[720px] mx-auto text-text-subtle text-[0.95rem] leading-[1.8]">
          <h1 className="font-heading font-[900] text-[2rem] lg:text-[2.5rem] tracking-[-0.03em] text-text-primary mb-8">
            Terms of Service
          </h1>
          <p className="text-text-dim text-[0.85rem] mb-8">
            Last updated: March 11, 2026
          </p>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By accessing and using the ZED Labs website (zedai.tech) and our
            services, you agree to be bound by these Terms of Service. If you do
            not agree to these terms, please do not use our website or services.
          </p>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            2. Services
          </h2>
          <p className="mb-4">
            ZED Labs provides custom software development services including but
            not limited to web development, mobile app development, ERP/CRM
            systems, AI solutions, and digital marketing. Specific deliverables,
            timelines, and costs are agreed upon in individual project proposals
            and contracts.
          </p>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            3. Intellectual Property
          </h2>
          <p className="mb-4">
            All content on this website, including text, graphics, logos, and
            code, is the property of ZED Labs and is protected by intellectual
            property laws. You may not reproduce, distribute, or create
            derivative works without our written consent.
          </p>
          <p className="mb-4">
            For client projects, intellectual property ownership is defined in
            the individual project agreement. Upon full payment, clients
            typically receive full ownership of the custom work produced for
            them.
          </p>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            4. Payment Terms
          </h2>
          <ul className="list-disc pl-6 mb-5 space-y-2">
            <li>
              Payment terms are outlined in individual project proposals and
              contracts.
            </li>
            <li>
              A deposit may be required before project work begins.
            </li>
            <li>
              Late payments may result in project delays or suspension of
              services.
            </li>
          </ul>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            5. Client Responsibilities
          </h2>
          <p className="mb-4">
            Clients are responsible for providing accurate information, timely
            feedback, and necessary assets (content, images, credentials) to
            ensure smooth project delivery. Delays in providing these may affect
            project timelines.
          </p>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            6. Limitation of Liability
          </h2>
          <p className="mb-4">
            ZED Labs shall not be liable for any indirect, incidental, or
            consequential damages arising from the use of our website or
            services. Our total liability shall not exceed the amount paid by the
            client for the specific service in question.
          </p>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            7. Warranties
          </h2>
          <p className="mb-4">
            We strive to deliver high-quality work. Bug fixes and minor
            adjustments within the agreed scope are provided as part of our
            post-launch support period, as defined in the project contract.
            Beyond that period, additional work is billed separately.
          </p>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            8. Termination
          </h2>
          <p className="mb-4">
            Either party may terminate a project engagement as outlined in the
            project contract. In case of termination, the client is responsible
            for payment of all work completed up to the termination date.
          </p>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            9. Governing Law
          </h2>
          <p className="mb-4">
            These terms shall be governed by and construed in accordance with the
            laws of India. Any disputes shall be subject to the exclusive
            jurisdiction of the courts in Bengaluru, India.
          </p>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            10. Contact
          </h2>
          <p className="mb-4">
            For questions about these terms, contact us at{" "}
            <a
              href="mailto:contact@zedai.tech"
              className="text-accent hover:text-accent-light transition-colors"
            >
              contact@zedai.tech
            </a>{" "}
            or call{" "}
            <a
              href="tel:+919380341684"
              className="text-accent hover:text-accent-light transition-colors"
            >
              +91 93803 41684
            </a>
            .
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
