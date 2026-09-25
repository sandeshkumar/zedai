import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import { CAPABILITIES } from "./data";
import { Wordmark } from "./Wordmark";
import { Lighthouse, Palm, TileHouse } from "./illustrations";

const COMPANY = [
  { label: "Our work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Blog", href: "/blog" },
  { label: "Partner program", href: "/partner" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  const services = CAPABILITIES.flatMap((c) => c.services);

  return (
    <footer className="pt-20 lg:pt-28 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-line">
          <div className="col-span-2 lg:col-span-4">
            <p className="font-display text-[1.6rem] tracking-[-0.03em] leading-[1.2] text-ink max-w-[20ch]">
              Software, AI and growth for businesses, from Mangalore to the world.
            </p>
            <address className="not-italic mt-6 text-[0.9rem] leading-[1.7] text-ink-3 max-w-[34ch]">
              {CONTACT.address.full}
            </address>
          </div>

          <nav className="col-span-2 lg:col-span-5 lg:col-start-6" aria-label="Services">
            <p className="eyebrow mb-5">Services</p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 text-[0.92rem]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-ink-2 hover:text-ink transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2 lg:col-start-11" aria-label="Company">
            <p className="eyebrow mb-5">Company</p>
            <ul className="space-y-2.5 text-[0.92rem]">
              {COMPANY.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink-2 hover:text-ink transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:hidden">
            <p className="eyebrow mb-5">Reach us</p>
            <ul className="space-y-2.5 text-[0.92rem] text-ink-2">
              <li><a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`}>Email us</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-between py-7 text-[0.82rem] text-ink-4">
          <p>© {new Date().getFullYear()} ZED LABS. Made in Mangalore.</p>
          <div className="flex gap-6">
            <a href={`tel:${CONTACT.phoneE164}`} className="hidden lg:inline hover:text-ink transition-colors">{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="hidden lg:inline hover:text-ink transition-colors">{CONTACT.email}</a>
            <Link href="/privacy" className="hover:text-ink transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-ink transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      {/* the Kudla skyline, sitting on the wordmark's horizon */}
      <div className="max-w-[1360px] mx-auto px-5 lg:px-10 flex items-end justify-between gap-2 -mb-2 pt-6" aria-hidden="true">
        <Palm className="w-[60px] h-[100px] lg:w-[90px] lg:h-[150px]" lean={-5} />
        <TileHouse id="ft-1" className="w-[120px] lg:w-[190px] h-auto" />
        <Palm className="hidden sm:block w-[70px] h-[120px] lg:w-[100px] lg:h-[170px]" lean={4} />
        <Lighthouse className="hidden md:block w-[120px] h-auto" />
        <TileHouse id="ft-2" wall="#F8E4B4" className="hidden sm:block w-[150px] lg:w-[170px] h-auto" />
        <Palm className="w-[60px] h-[110px] lg:w-[90px] lg:h-[160px]" lean={-3} />
        <TileHouse id="ft-3" wall="#DCE7F1" className="hidden lg:block w-[160px] h-auto" />
        <Palm className="hidden lg:block w-[80px] h-[140px]" lean={6} />
      </div>
      <Wordmark />
    </footer>
  );
}
