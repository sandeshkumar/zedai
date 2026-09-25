"use client";

import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

/** Current time in Mangalore. Renders a placeholder until mounted to avoid hydration mismatch. */
export function LocalTime({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 15_000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  return (
    <time className={`tabular-nums whitespace-nowrap ${className}`} suppressHydrationWarning>
      {now ? fmt.format(now).toUpperCase() : "--:--"} IST
    </time>
  );
}
