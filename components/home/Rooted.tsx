"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { CLIENT_CITIES, HOME_CITY } from "./data";
import { Globe } from "./Globe";
import { LocalTime } from "./LocalTime";
import { CountUp, MaskLines, Reveal } from "./motion";
import { SplitFlap } from "./SplitFlap";
import { ChapterLabel } from "./Chapter";

const clock = (tz: string, d: Date) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit", hour12: false }).format(d);

const offsetMinutes = (tz: string, d: Date) => {
  const part = new Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "shortOffset" })
    .formatToParts(d)
    .find((p) => p.type === "timeZoneName")?.value;
  const m = part?.match(/GMT([+-]\d+)?(?::(\d+))?/);
  if (!m) return 0;
  const h = Number(m[1] ?? 0);
  return h * 60 + Math.sign(h || 1) * Number(m[2] ?? 0);
};

const diffFromIST = (tz: string, d: Date) => {
  const diff = offsetMinutes(tz, d) - 330;
  if (diff === 0) return "IST";
  const sign = diff > 0 ? "+" : "-";
  const a = Math.abs(diff);
  return `${sign}${Math.floor(a / 60)}${a % 60 ? `:${String(a % 60).padStart(2, "0")}` : "H"}`;
};

function DepartureBoard({ active, now, onPick }: { active: number; now: Date | null; onPick: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const city = CLIENT_CITIES[active];

  return (
    <div ref={ref} className="rounded-[20px] bg-[#08111D] border border-white/10 p-4 sm:p-6 font-mono text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between text-[0.68rem] tracking-[0.12em] text-white/45 mb-5">
        <span>DEPARTURES · FROM {HOME_CITY.code} MANGALORE</span>
        <LocalTime />
      </div>

      {/* Featured destination */}
      <div className="rounded-[12px] bg-white/[0.03] border border-white/[0.06] p-4 sm:p-5 mb-4">
        <p className="text-[0.62rem] tracking-[0.14em] text-white/40 mb-2">NOW SHIPPING TO</p>
        <SplitFlap
          text={seen ? city.city : ""}
          length={10}
          animate={!reduce}
          className="text-[clamp(1.25rem,2.4vw,1.9rem)] text-white"
        />
        <div className="mt-3 flex items-center gap-5 text-[0.72rem] text-white/60">
          <span>{city.country.toUpperCase()}</span>
          <span className="text-tile-2">{city.code}</span>
          <span className="tabular-nums">LOCAL {now ? clock(city.tz, now) : "--:--"}</span>
        </div>
      </div>

      {/* All destinations */}
      <table className="w-full text-[0.74rem]">
        <thead>
          <tr className="text-[0.6rem] tracking-[0.14em] text-white/35 text-left">
            <th className="font-normal pb-2 pl-2">DESTINATION</th>
            <th className="font-normal pb-2">LOCAL</th>
            <th className="font-normal pb-2 hidden sm:table-cell">VS IST</th>
            <th className="font-normal pb-2 text-right pr-2">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {CLIENT_CITIES.map((c, i) => (
            <tr
              key={c.id}
              onClick={() => onPick(i)}
              className={`cursor-pointer border-t border-white/[0.06] transition-colors ${i === active ? "bg-tile/15" : "hover:bg-white/[0.03]"}`}
            >
              <td className="py-2 pl-2 relative">
                {i === active && <span className="absolute left-0 inset-y-1 w-[2px] bg-tile-2 rounded-full" />}
                <span className="text-white/35 mr-3">{c.code}</span>
                <span className={i === active ? "text-white" : "text-white/80"}>{c.city.toUpperCase()}</span>
              </td>
              <td className="py-2 tabular-nums text-white/70">{now ? clock(c.tz, now) : "--:--"}</td>
              <td className="py-2 tabular-nums text-white/45 hidden sm:table-cell">{now ? diffFromIST(c.tz, now) : ""}</td>
              <td className="py-2 pr-2 text-right text-[#F2C46D]">ON TIME</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Rooted() {
  const [active, setActive] = useState(0);
  const [now, setNow] = useState<Date | null>(null);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { margin: "-20% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 20_000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  // Rotate through destinations while the section is on screen.
  useEffect(() => {
    if (!inView || paused || reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % CLIENT_CITIES.length), 4200);
    return () => clearInterval(id);
  }, [inView, paused, reduce]);

  const stats = useMemo(() => {
    const d = new Date();
    const all = [HOME_CITY, ...CLIENT_CITIES];
    return {
      cities: all.length,
      countries: new Set(all.map((c) => c.country)).size,
      zones: new Set(all.map((c) => offsetMinutes(c.tz, d))).size,
    };
  }, []);

  function pick(i: number) {
    setActive(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 12_000);
  }

  return (
    <section id="mangalore" ref={sectionRef} className="relative">
      <div className="tile-roof h-6 lg:h-8 mx-2 lg:mx-4 rounded-t-[20px]" aria-hidden="true" />
      <div className="relative mx-2 lg:mx-4 rounded-b-[28px] lg:rounded-b-[40px] overflow-hidden bg-[#0A1422] text-white">
        {/* night sea texture and a last glow of sunset behind the globe */}
        <div className="absolute inset-0 tile-lines-light opacity-[0.035]" aria-hidden="true" />
        <div
          className="absolute -left-[10%] top-[30%] w-[70%] aspect-square rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(208,112,63,0.16), rgba(30,58,95,0.2) 40%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-[1360px] mx-auto px-5 lg:px-10 pt-20 lg:pt-28 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-10 lg:mb-4">
            <div className="lg:col-span-7">
              <ChapterLabel id="mangalore" tone="text-turmeric" className="mb-6" />
              <h2 className="display text-[clamp(2.4rem,5.4vw,5rem)]">
                <MaskLines
                  lines={[
                    "Built on the coast.",
                    <span key="l2">
                      Shipped <span className="text-turmeric">everywhere.</span>
                    </span>,
                  ]}
                />
              </h2>
            </div>
            <Reveal className="lg:col-span-5" delay={0.1}>
              <p className="text-[1.05rem] leading-[1.65] text-white/70 max-w-[46ch]">
                Mangalore gave India its red clay roof tiles and banks like Canara Bank and Karnataka
                Bank. Tigers dance on its streets every Dasara and Yakshagana plays through the night.
                We build software from here with the same craft, and send it across India and overseas.
              </p>
              <p className="mt-4 text-[0.95rem] leading-[1.65] text-white/45 max-w-[46ch]">
                Different time zone? We overlap your working hours on WhatsApp, Meet and a shared
                staging link.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 relative">
              <div className="max-w-[640px] mx-auto">
                <Globe home={HOME_CITY} cities={CLIENT_CITIES} active={active} />
              </div>
              <p className="text-center font-mono text-[0.66rem] tracking-[0.14em] text-white/35 -mt-2">
                DRAG TO SPIN · {HOME_CITY.lat.toFixed(2)}° N, {HOME_CITY.lon.toFixed(2)}° E
              </p>
            </div>
            <Reveal className="lg:col-span-5" delay={0.15}>
              <DepartureBoard active={active} now={now} onPick={pick} />
            </Reveal>
          </div>

          <div className="mt-16 lg:mt-20 grid grid-cols-3 border-t border-white/10">
            {[
              { n: stats.cities, label: "Cities with clients" },
              { n: stats.countries, label: "Countries" },
              { n: stats.zones, label: "Time zones we work across" },
            ].map((s, i) => (
              <div key={s.label} className={`pt-7 ${i ? "pl-5 lg:pl-8 border-l border-white/10" : ""}`}>
                <p className="display text-[clamp(2.4rem,5vw,4.4rem)] text-white">
                  <CountUp to={s.n} />
                </p>
                <p className="mt-2 text-[0.85rem] text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
