import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — ZED Labs",
  description:
    "Learn how ZED Labs collects, uses, and protects your personal information. Read our privacy policy.",
  alternates: { canonical: "https://zedai.tech/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="py-24 px-5 lg:px-10">
        <article className="max-w-[720px] mx-auto text-text-subtle text-[0.95rem] leading-[1.8]">
          <h1 className="font-heading font-[900] text-[2rem] lg:text-[2.5rem] tracking-[-0.03em] text-text-primary mb-8">
            Privacy Policy
          </h1>
          <p className="text-text-dim text-[0.85rem] mb-8">
            Last updated: March 11, 2026
          </p>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            When you visit zedai.tech or contact us through our website, we may
            collect the following information:
          </p>
          <ul className="list-disc pl-6 mb-5 space-y-2">
            <li>
              <strong className="text-text-primary">Contact Information:</strong>{" "}
              Name, email address, phone number, and company name when you fill
              out a contact form or request a quote.
            </li>
            <li>
              <strong className="text-text-primary">Usage Data:</strong> Pages
              visited, time spent on pages, browser type, device type, and
              referring URLs collected through analytics tools.
            </li>
            <li>
              <strong className="text-text-primary">Cookies:</strong> We use
              cookies and similar technologies to improve your browsing
              experience and analyze site traffic.
            </li>
          </ul>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 mb-5 space-y-2">
            <li>To respond to your inquiries and provide requested services</li>
            <li>To send project updates and relevant communications</li>
            <li>To improve our website and services</li>
            <li>To analyze website traffic and usage patterns</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            3. Data Sharing
          </h2>
          <p className="mb-4">
            We do not sell, trade, or rent your personal information to third
            parties. We may share data with trusted service providers (such as
            analytics and hosting) who assist us in operating our website,
            provided they agree to keep your information confidential.
          </p>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            4. Data Security
          </h2>
          <p className="mb-4">
            We implement reasonable security measures to protect your personal
            information against unauthorized access, alteration, or destruction.
            However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            5. Third-Party Services
          </h2>
          <p className="mb-4">
            Our website may use third-party services including Google Analytics,
            Meta Pixel, and WhatsApp for communication. These services have
            their own privacy policies governing the use of your information.
          </p>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            6. Your Rights
          </h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-5 space-y-2">
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction or deletion of your personal data</li>
            <li>Opt out of marketing communications at any time</li>
            <li>Withdraw consent for data processing where applicable</li>
          </ul>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            7. Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>

          <h2 className="font-heading font-bold text-[1.3rem] text-text-primary mt-10 mb-4">
            8. Contact Us
          </h2>
          <p className="mb-4">
            If you have questions about this privacy policy, contact us at{" "}
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
