"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./motion";

const NAV = ["Overview", "Leads", "Orders", "Inventory", "Invoices", "WhatsApp AI", "Reports"];

const KPIS = [
  { label: "Revenue, September", value: "₹18.4L", delta: "+12.6%" },
  { label: "New leads", value: "342", delta: "+28%" },
  { label: "Orders fulfilled", value: "1,206", delta: "+9.1%" },
  { label: "Avg. reply time", value: "38s", delta: "−74%" },
];

const PIPELINE = [
  { name: "Priya S.", note: "3 BHK interiors, Kankanady", stage: "Qualified", tone: "bg-[#E8EEF6] text-brand" },
  { name: "Hotel Sagar", note: "POS for 2 outlets", stage: "Proposal", tone: "bg-[#FFF1E6] text-[#C2410C]" },
  { name: "Vikram Traders", note: "ERP + Tally sync", stage: "Won", tone: "bg-[#E7F6EC] text-[#15803D]" },
  { name: "Anjali R.", note: "Online store, 400 SKUs", stage: "New", tone: "bg-paper-2 text-ink-2" },
];

// Revenue curve, 12 points, drawn into a 600x180 box.
const POINTS = [120, 128, 112, 134, 126, 142, 138, 150, 146, 158, 164, 172];
const path = POINTS.map((v, i) => `${i === 0 ? "M" : "L"}${(i / (POINTS.length - 1)) * 600},${180 - v}`).join(" ");
const area = `${path} L600,180 L0,180 Z`;

export function DashboardMock() {
  const reduce = useReducedMotion();
  const float = (delay: number, from: number) => ({
    initial: reduce ? false : { opacity: 0, y: from },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: EASE, delay },
  });

  return (
    <div className="relative" aria-hidden="true">
      <div className="relative rounded-t-[14px] bg-white shadow-[0_40px_120px_-20px_rgba(0,0,0,0.5)] overflow-hidden text-ink select-none">
        {/* Window chrome */}
        <div className="flex items-center gap-3 px-4 h-10 border-b border-line bg-[#FBFBFA]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E3]" />
          </div>
          <div className="mx-auto hidden sm:flex items-center gap-2 text-[0.7rem] text-ink-4 bg-paper-2 rounded-md px-3 py-1 font-mono">
            app.yourbusiness.in/overview
          </div>
        </div>

        <div className="grid grid-cols-12 min-h-[340px] sm:min-h-[460px]">
          {/* Sidebar */}
          <aside className="hidden md:block col-span-3 xl:col-span-2 border-r border-line p-4 bg-[#FBFBFA]">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-6 rounded-md bg-brand" />
              <span className="text-[0.8rem] font-semibold">Vikram Traders</span>
            </div>
            <ul className="space-y-0.5 text-[0.78rem]">
              {NAV.map((n, i) => (
                <li
                  key={n}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md ${
                    i === 0 ? "bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] text-ink font-medium" : "text-ink-3"
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded-[4px] ${i === 0 ? "bg-brand" : "bg-paper-3"}`} />
                  {n}
                  {n === "WhatsApp AI" && (
                    <span className="ml-auto text-[0.6rem] font-mono bg-[#E7F6EC] text-[#15803D] px-1.5 rounded">LIVE</span>
                  )}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main */}
          <main className="col-span-12 md:col-span-9 xl:col-span-10 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-[0.7rem] text-ink-4">Good morning, Vikram</p>
                <p className="text-[1.05rem] font-semibold tracking-[-0.02em]">Business overview</p>
              </div>
              <div className="hidden sm:flex gap-1 text-[0.7rem] bg-paper-2 rounded-md p-0.5">
                {["7D", "30D", "Quarter"].map((t, i) => (
                  <span key={t} className={`px-2.5 py-1 rounded ${i === 1 ? "bg-white shadow-sm font-medium" : "text-ink-3"}`}>{t}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-2.5 sm:gap-3 mb-4">
              {KPIS.map((k, i) => (
                <motion.div
                  key={k.label}
                  {...float(0.9 + i * 0.08, 10)}
                  className="rounded-lg border border-line p-3 sm:p-3.5"
                >
                  <p className="text-[0.66rem] text-ink-4 mb-1.5">{k.label}</p>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-[1.15rem] sm:text-[1.35rem] font-semibold tracking-[-0.03em] tabular-nums">{k.value}</span>
                    <span className="text-[0.64rem] font-medium text-[#15803D]">{k.delta}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-12 gap-3">
              <div className="hidden lg:block col-span-5 rounded-lg border border-line p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[0.78rem] font-medium">Pipeline</p>
                  <p className="text-[0.66rem] text-ink-4">Today</p>
                </div>
                <ul className="divide-y divide-line">
                  {PIPELINE.map((p, i) => (
                    <motion.li
                      key={p.name}
                      {...float(1.2 + i * 0.1, 6)}
                      className="flex items-center justify-between gap-3 py-2.5"
                    >
                      <div className="min-w-0">
                        <p className="text-[0.76rem] font-medium truncate">{p.name}</p>
                        <p className="text-[0.66rem] text-ink-4 truncate">{p.note}</p>
                      </div>
                      <span className={`shrink-0 text-[0.62rem] font-medium px-2 py-0.5 rounded-full ${p.tone}`}>{p.stage}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="col-span-12 lg:col-span-7 rounded-lg border border-line p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[0.78rem] font-medium">Revenue</p>
                  <p className="text-[0.66rem] text-ink-4 font-mono">LAST 12 MONTHS</p>
                </div>
                <svg viewBox="0 0 600 180" className="w-full h-[120px] sm:h-[160px]" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="rev-fill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#2D5A8E" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#2D5A8E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[45, 90, 135].map((y) => (
                    <line key={y} x1="0" x2="600" y1={y} y2={y} stroke="rgba(11,13,18,0.06)" />
                  ))}
                  <motion.path
                    d={area}
                    fill="url(#rev-fill)"
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 1 }}
                  />
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="#2D5A8E"
                    strokeWidth="2.5"
                    vectorEffect="non-scaling-stroke"
                    initial={reduce ? false : { pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 1.6, ease: EASE }}
                  />
                </svg>
              </div>

            </div>
          </main>
        </div>
      </div>

      {/* Floating: WhatsApp agent */}
      <motion.div
        {...float(1.9, 24)}
        className="hidden sm:block absolute -right-2 lg:-right-14 top-[62%] w-[270px] rounded-xl bg-white shadow-[0_24px_60px_-12px_rgba(0,0,0,0.35)] border border-line p-3.5 text-ink"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-full bg-[#25D366] grid place-items-center text-white text-[0.7rem] font-bold">AI</span>
          <div>
            <p className="text-[0.74rem] font-semibold leading-tight">WhatsApp agent</p>
            <p className="text-[0.62rem] text-[#15803D]">Replied in 4 seconds</p>
          </div>
        </div>
        <p className="text-[0.72rem] bg-paper-2 rounded-lg rounded-tl-sm px-2.5 py-2 mb-1.5 w-fit max-w-[90%]">
          Do you deliver to Udupi? Need 40 chairs.
        </p>
        <p className="text-[0.72rem] bg-[#E7F6EC] rounded-lg rounded-tr-sm px-2.5 py-2 ml-auto w-fit max-w-[90%]">
          Yes, 2 day delivery. 40 chairs come to ₹84,000 with GST. Shall I book a call?
        </p>
      </motion.div>

    </div>
  );
}
