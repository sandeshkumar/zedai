"use client";

import { useEffect, useState } from "react";
import "./partner-program.css";

const WA_LINK =
  "https://wa.me/919380341684?text=Hi%20Sandesh,%20I'm%20interested%20in%20the%20ZED%20Labs%20Partner%20Program.%20Please%20share%20the%20details.";

const WA_ICON = (
  <svg viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const FAQ_DATA = [
  {
    q: "Do I need technical skills or experience?",
    a: "No. You don't need to know design, development, or marketing. We provide a complete sales kit with portfolio, pitch scripts, and pricing. Your role is to identify businesses that need digital services and connect them to us. We handle all technical work.",
  },
  {
    q: "Is there any investment or joining fee?",
    a: "Zero. No joining fee, no deposit, no hidden charges. The program is completely free. You earn commission — you never pay anything.",
  },
  {
    q: "Can I present this as my own agency to clients?",
    a: "At Gold tier and above, we offer white-label delivery — meaning we can work behind the scenes while you present the work under your own brand. At Silver, we provide co-branded proposals. At Bronze, projects are delivered under the ZED Labs brand.",
  },
  {
    q: "When and how do I get paid?",
    a: "Within 48 hours of the client's payment, directly to your UPI (PhonePe, Google Pay, Paytm) or bank account. For recurring services, monthly commission is paid on the 1st of each month. No delays.",
  },
  {
    q: "What do I actually need to do?",
    a: "Identify a business that needs a website, app, or marketing. Connect them to us — either share their contact or forward our details. That's it. We handle the sales call, proposal, design, development, delivery, and support. You earn commission on every project that closes.",
  },
  {
    q: "Can I do this alongside a full-time job or studies?",
    a: "Absolutely. Most of our partners work part-time — evenings, weekends, or whenever they meet business owners. There are no fixed hours, no attendance requirements, and no minimum targets.",
  },
  {
    q: "Who is ZED Labs?",
    a: "ZED Labs is an MSME-registered web development and digital marketing agency based in Mangaluru, Karnataka. We build websites, mobile apps, e-commerce stores, and provide social media marketing and SEO services for businesses across India. Visit zedai.tech to see our portfolio.",
  },
];

function calcEarnings(d: number) {
  let cr = 4000,
    bon = 0,
    tier = "";
  if (d <= 3) tier = "Bronze Partner";
  else if (d <= 6) {
    bon = 2000;
    tier = "Silver Partner";
  } else if (d <= 10) {
    bon = 5000;
    cr = 4500;
    tier = "Gold Partner";
  } else {
    bon = 10000;
    cr = 5000;
    tier = "Diamond Partner";
  }
  const rc = Math.floor(d * 0.3);
  const tot = d * cr + bon + rc * 500;
  let note: string;
  if (d <= 3) note = "Part-time effort — a few hours per week";
  else if (d <= 6)
    note = "Includes ₹2,000 Silver bonus + recurring commissions";
  else if (d <= 10)
    note = "Includes ₹5,000 Gold bonus + 15% commission rate";
  else note = "Includes ₹10,000 Diamond bonus + 18% commission rate";
  return { total: tot, tier, note };
}

export function PartnerProgramClient({ fontClass }: { fontClass: string }) {
  const [dealCount, setDealCount] = useState(5);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showFloating, setShowFloating] = useState(false);

  // Override body background for this page
  useEffect(() => {
    document.body.classList.add("partner-page-body");
    return () => document.body.classList.remove("partner-page-body");
  }, []);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document
      .querySelectorAll(".partner-page .reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Floating CTA on scroll
  useEffect(() => {
    const handleScroll = () => setShowFloating(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const earnings = calcEarnings(dealCount);
  const sliderPct = ((dealCount - 1) / 14) * 100;

  return (
    <div className={`partner-page ${fontClass}`}>
      {/* NAV */}
      <nav className="pp-nav">
        <div className="nav-brand">
          ZED <span>Labs</span>
        </div>
        <a href={WA_LINK} target="_blank" className="nav-cta">
          Become a Partner
        </a>
      </nav>

      {/* FLOATING CTA */}
      <div className={`floating-cta ${showFloating ? "visible" : ""}`}>
        <a href={WA_LINK} target="_blank" className="floating-btn">
          {WA_ICON}
          Apply Now
        </a>
      </div>

      {/* HERO */}
      <section className="pp-hero">
        <div className="hero-content">
          <div className="hero-label">Partner Program</div>
          <h1>
            Run Your Own
            <br />
            Digital Agency.
            <br />
            <em>We Do The Work.</em>
          </h1>
          <p className="hero-desc">
            <span
              style={{
                display: "block",
                color: "#F97316",
                fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                fontSize: "clamp(18px, 3vw, 24px)",
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              Earn ₹10,000–₹50,000+ per month in commissions.
            </span>
            ZED Labs gives you a complete backend team — design, development,
            and delivery — so you can sell digital services under your own name.
            No technical skills needed.
          </p>

          <div className="free-banner">
            <div className="free-tag">
              <span className="tag-highlight">FREE</span> to Join — No Fees
              Ever
            </div>
            <div className="free-tag">
              <span className="tag-highlight">₹0</span> Zero Investment
              Required
            </div>
          </div>

          <div className="hero-cta-group">
            <a href={WA_LINK} target="_blank" className="btn-primary">
              Apply to Partner Program
            </a>
            <a href="#how" className="btn-secondary">
              See How It Works
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">150+</div>
              <div className="hero-stat-label">Active Partners</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">₹2K–₹15K</div>
              <div className="hero-stat-label">Per Project</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">48 Hrs</div>
              <div className="hero-stat-label">UPI Payouts</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">Pan India</div>
              <div className="hero-stat-label">Any City</div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="pp-section" style={{ background: "#FFFFFF" }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">The Opportunity</span>
            <h2 className="section-title">
              Starting an Agency Is Hard.
              <br />
              Partnering With One Isn&apos;t.
            </h2>
            <p className="section-desc">
              Starting your own agency requires ₹5–10 lakhs, a team, and years
              of experience. As a ZED Labs partner, you skip all of that.
            </p>
          </div>

          <div className="value-comparison reveal">
            <div className="value-col">
              <h4>Starting Your Own Agency</h4>
              <ul>
                <li>
                  <span className="icon">✗</span> ₹5–10 lakh investment
                </li>
                <li>
                  <span className="icon">✗</span> Hire designers &amp;
                  developers
                </li>
                <li>
                  <span className="icon">✗</span> Manage project delivery
                </li>
                <li>
                  <span className="icon">✗</span> Handle client revisions
                </li>
                <li>
                  <span className="icon">✗</span> Technical expertise required
                </li>
                <li>
                  <span className="icon">✗</span> Office &amp; infrastructure
                </li>
                <li>
                  <span className="icon">✗</span> 6–12 months to break even
                </li>
              </ul>
            </div>
            <div className="value-vs">VS</div>
            <div className="value-col highlight">
              <h4>ZED Labs Partner</h4>
              <ul>
                <li>
                  <span className="icon">✓</span> Zero investment to start
                </li>
                <li>
                  <span className="icon">✓</span> We are your design &amp; dev
                  team
                </li>
                <li>
                  <span className="icon">✓</span> We deliver every project
                </li>
                <li>
                  <span className="icon">✓</span> We handle all revisions
                </li>
                <li>
                  <span className="icon">✓</span> No technical skills needed
                </li>
                <li>
                  <span className="icon">✓</span> Work from your phone
                </li>
                <li>
                  <span className="icon">✓</span> Earn from day one
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="pp-section"
        id="how"
        style={{ background: "#F9FAFB" }}
      >
        <div className="container">
          <div className="reveal">
            <span className="section-label">Process</span>
            <h2 className="section-title">How the Partner Program Works</h2>
            <p className="section-desc">
              You bring the clients. We handle everything else. Four steps to
              your first commission.
            </p>
          </div>

          <div className="steps-row">
            <div className="step-card reveal">
              <div className="step-num">Step 01</div>
              <h3>Find a Client</h3>
              <p>
                Any business that needs a website, app, e-commerce store, or
                digital marketing. They&apos;re in your network, on Google Maps,
                and on Instagram.
              </p>
            </div>
            <div className="step-card reveal">
              <div className="step-num">Step 02</div>
              <h3>Make the Introduction</h3>
              <p>
                Connect the business owner to us via WhatsApp, or forward our
                portfolio. You can pitch them yourself using our sales kit — or
                just pass the contact.
              </p>
            </div>
            <div className="step-card reveal">
              <div className="step-num">Step 03</div>
              <h3>We Close &amp; Deliver</h3>
              <p>
                Our team handles the sales call, proposal, pricing, design,
                development, testing, and launch. You stay informed at every
                stage.
              </p>
            </div>
            <div className="step-card reveal">
              <div className="step-num">Step 04</div>
              <h3>You Get Paid</h3>
              <p>
                When the client pays, your commission is transferred to your UPI
                within 48 hours. PhonePe, Google Pay, Paytm, or direct bank
                transfer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES & COMMISSION */}
      <section className="pp-section" style={{ background: "#FFFFFF" }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">Services You Can Sell</span>
            <h2 className="section-title">Commission Per Project</h2>
            <p className="section-desc">
              Transparent payouts with no caps. Recurring services earn you
              monthly income for as long as the client stays.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card reveal">
              <h3>Starter Website</h3>
              <div className="service-value">Project value: ₹14,999</div>
              <div className="service-commission">₹2,000</div>
              <div className="service-type onetime">One-time</div>
            </div>
            <div className="service-card reveal">
              <h3>Business Website</h3>
              <div className="service-value">Project value: ₹29,999</div>
              <div className="service-commission">₹4,000</div>
              <div className="service-type onetime">One-time</div>
            </div>
            <div className="service-card reveal">
              <h3>E-Commerce Store</h3>
              <div className="service-value">Project value: ₹44,999</div>
              <div className="service-commission">₹6,000</div>
              <div className="service-type onetime">One-time</div>
            </div>
            <div className="service-card reveal">
              <h3>Mobile App</h3>
              <div className="service-value">Project value: ₹80,000+</div>
              <div className="service-commission">₹10,000+</div>
              <div className="service-type onetime">One-time</div>
            </div>
            <div className="service-card reveal">
              <h3>Social Media Marketing</h3>
              <div className="service-value">₹9,999–₹17,999/month</div>
              <div className="service-commission">₹2,000 + ₹500/mo</div>
              <div className="service-type recurring">Recurring Monthly</div>
            </div>
            <div className="service-card reveal">
              <h3>SEO / Google Ads</h3>
              <div className="service-value">₹8,000–₹17,999/month</div>
              <div className="service-commission">₹2,000 + ₹500/mo</div>
              <div className="service-type recurring">Recurring Monthly</div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER TIERS */}
      <section className="pp-section tiers-section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Growth Path</span>
            <h2 className="section-title">Partner Tiers &amp; Rewards</h2>
            <p className="section-desc">
              The more you grow, the more you earn. Higher tiers unlock better
              commission rates, bonuses, and exclusive benefits.
            </p>
          </div>

          <div className="tiers-grid">
            <div className="tier-card reveal">
              <span className="tier-icon">★</span>
              <div className="tier-name" style={{ color: "#E8A050" }}>
                Bronze
              </div>
              <div className="tier-req">1–3 projects/month</div>
              <ul className="tier-perks">
                <li>Base commission rate</li>
                <li>Sales kit &amp; portfolio access</li>
                <li>WhatsApp support</li>
              </ul>
            </div>
            <div className="tier-card reveal">
              <span className="tier-icon">★★</span>
              <div className="tier-name" style={{ color: "#D0D0D0" }}>
                Silver
              </div>
              <div className="tier-req">4–6 projects/month</div>
              <ul className="tier-perks">
                <li>Base + ₹2,000 monthly bonus</li>
                <li>Priority project handling</li>
                <li>Monthly strategy call</li>
                <li>Co-branded proposals</li>
              </ul>
            </div>
            <div className="tier-card featured reveal">
              <span className="tier-icon">★★★</span>
              <div className="tier-name" style={{ color: "#FFD700" }}>
                Gold
              </div>
              <div className="tier-req">7–10 projects/month</div>
              <ul className="tier-perks">
                <li>15% commission rate</li>
                <li>₹5,000 monthly bonus</li>
                <li>White-label delivery option</li>
                <li>Quarterly cash prize</li>
                <li>Exclusive partner group</li>
              </ul>
            </div>
            <div className="tier-card reveal">
              <span className="tier-icon">♦</span>
              <div className="tier-name" style={{ color: "#A78BFA" }}>
                Diamond
              </div>
              <div className="tier-req">11+ projects/month</div>
              <ul className="tier-perks">
                <li>18% commission rate</li>
                <li>₹10,000 monthly bonus</li>
                <li>Revenue share on renewals</li>
                <li>Free website for your brand</li>
                <li>Sub-partner referral income</li>
                <li>Featured case study</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="pp-section" style={{ background: "#F9FAFB" }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">Earnings Projection</span>
            <h2 className="section-title">Estimate Your Monthly Revenue</h2>
            <p className="section-desc">
              Adjust the number of projects you close per month to see your
              projected earnings.
            </p>
          </div>

          <div className="calc-box reveal">
            <div className="calc-label">Projects closed per month</div>
            <div className="calc-slider-row">
              <input
                type="range"
                className="calc-slider"
                min={1}
                max={15}
                value={dealCount}
                onChange={(e) => setDealCount(parseInt(e.target.value))}
                style={{
                  background: `linear-gradient(90deg, #F97316 ${sliderPct}%, #E2E8F0 ${sliderPct}%)`,
                }}
              />
            </div>
            <div className="calc-count">{dealCount}</div>
            <div className="calc-count-label">projects/month</div>
            <div className="calc-divider" />
            <div className="calc-result-label">Projected Monthly Earnings</div>
            <div className="calc-result-amount">
              ₹{earnings.total.toLocaleString("en-IN")}
            </div>
            <div className="calc-result-sub">{earnings.note}</div>
            <div className="calc-tier-badge">{earnings.tier}</div>
          </div>
        </div>
      </section>

      {/* PARTNER STORIES */}
      <section className="pp-section" style={{ background: "#FFFFFF" }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">Partner Stories</span>
            <h2 className="section-title">
              Partners Building Their Business With Us
            </h2>
            <p className="section-desc">
              Real people, real results. From different backgrounds and cities
              across India.
            </p>
          </div>

          <div className="partners-grid">
            <div className="partner-card reveal">
              <div className="partner-header">
                <div
                  className="partner-avatar"
                  style={{
                    background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
                  }}
                >
                  K
                </div>
                <div>
                  <div className="partner-name">Karthik N.</div>
                  <div className="partner-role">BBA Student — Chennai</div>
                </div>
              </div>
              <div className="partner-quote">
                &ldquo;I approach businesses near my college after classes. Two
                hours a day, 2-3 deals a week. I&apos;m earning more than my
                friends who work part-time retail jobs.&rdquo;
              </div>
              <div className="partner-metric">
                Averaging ₹10,000–₹12,000/month
              </div>
            </div>

            <div className="partner-card reveal">
              <div className="partner-header">
                <div
                  className="partner-avatar"
                  style={{
                    background: "linear-gradient(135deg, #EC4899, #BE185D)",
                  }}
                >
                  A
                </div>
                <div>
                  <div className="partner-name">Anita D.</div>
                  <div className="partner-role">Homemaker — Jaipur</div>
                </div>
              </div>
              <div className="partner-quote">
                &ldquo;My husband&apos;s business network gave me my first 3
                clients. Word of mouth did the rest. I now treat this as my own
                consultancy — and the income is real.&rdquo;
              </div>
              <div className="partner-metric">
                Averaging ₹18,000–₹22,000/month
              </div>
            </div>

            <div className="partner-card reveal">
              <div className="partner-header">
                <div
                  className="partner-avatar"
                  style={{
                    background: "linear-gradient(135deg, #F59E0B, #D97706)",
                  }}
                >
                  V
                </div>
                <div>
                  <div className="partner-name">Vijay R.</div>
                  <div className="partner-role">IT Professional — Pune</div>
                </div>
              </div>
              <div className="partner-quote">
                &ldquo;I keep my full-time job and use weekends to connect with
                small businesses in my area. Two deals a month — ₹8,000-₹10,000
                extra without any risk to my career.&rdquo;
              </div>
              <div className="partner-metric">
                Averaging ₹8,000–₹10,000/month (part-time)
              </div>
            </div>

            <div className="partner-card reveal">
              <div className="partner-header">
                <div
                  className="partner-avatar"
                  style={{
                    background: "linear-gradient(135deg, #22C55E, #15803D)",
                  }}
                >
                  M
                </div>
                <div>
                  <div className="partner-name">Meera S.</div>
                  <div className="partner-role">
                    Freelance Designer — Kochi
                  </div>
                </div>
              </div>
              <div className="partner-quote">
                &ldquo;I was already talking to clients about design. Now I
                offer full website and marketing packages through ZED Labs. My
                average project value tripled overnight.&rdquo;
              </div>
              <div className="partner-metric">
                Averaging ₹25,000+/month (with recurring)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pp-section" style={{ background: "#F9FAFB" }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {FAQ_DATA.map((item, i) => (
              <div
                key={i}
                className={`faq-item reveal ${openFaq === i ? "active" : ""}`}
              >
                <div
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {item.q}
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    <div className="faq-answer-content">{item.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="reveal">
            <h2 className="section-title">Ready to Build Your Business?</h2>
            <p className="section-desc">
              Apply to the ZED Labs Partner Program. No investment, no risk —
              just opportunity.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 20,
                flexWrap: "wrap" as const,
                marginBottom: 32,
              }}
            >
              <div className="free-tag">
                <span className="tag-highlight">FREE</span> to Join
              </div>
              <div className="free-tag">
                <span className="tag-highlight">₹0</span> Zero Investment
              </div>
            </div>
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            className="cta-whatsapp reveal"
          >
            {WA_ICON}
            Apply via WhatsApp
          </a>

          <div className="cta-details">
            <span className="cta-detail">Zero investment</span>
            <span className="cta-detail">·</span>
            <span className="cta-detail">48-hour UPI payouts</span>
            <span className="cta-detail">·</span>
            <span className="cta-detail">No lock-in</span>
            <span className="cta-detail">·</span>
            <span className="cta-detail">MSME registered</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pp-footer">
        <div className="footer-brand">
          ZED <span>Labs</span>
        </div>
        <p>
          <a href="https://zedai.tech">zedai.tech</a> · +91 93803 41684 · hello@zedai.tech
        </p>
        <p>© 2026 ZED Labs</p>
      </footer>
    </div>
  );
}
