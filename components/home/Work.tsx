import { STORIES } from "./data";
import { MaskLines, Reveal } from "./motion";
import { SpotlightCard } from "./Spotlight";
import { ChapterLabel } from "./Chapter";

type Story = (typeof STORIES)[number];

const TONES = {
  brand: { card: "bg-brand text-white", muted: "text-white/65", rule: "border-white/15", glow: "rgba(208,112,63,0.28)" },
  paper: { card: "bg-turmeric text-ink", muted: "text-ink/65", rule: "border-ink/20", glow: "rgba(255,255,255,0.35)" },
  ink: { card: "bg-kumkum text-white", muted: "text-white/70", rule: "border-white/20", glow: "rgba(237,167,33,0.3)" },
};

function StoryCard({ s, className = "" }: { s: Story; className?: string }) {
  const t = TONES[s.tone];
  return (
    <SpotlightCard
      glow={t.glow}
      className={`group overflow-hidden rounded-[20px] p-7 lg:p-10 flex flex-col justify-between min-h-[420px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${t.card} ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className={`font-mono text-[0.72rem] uppercase tracking-[0.08em] ${t.muted}`}>{s.sector}</span>
        <span className={`font-mono text-[0.72rem] uppercase tracking-[0.08em] ${t.muted}`}>{s.city}</span>
      </div>

      <div className="my-12">
        <p className="display text-[clamp(3.4rem,7vw,6.5rem)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
          {s.metric}
        </p>
        <p className={`mt-2 text-[1.05rem] ${t.muted}`}>{s.unit}</p>
      </div>

      <figure className={`border-t pt-6 ${t.rule}`}>
        <blockquote className="text-[1rem] leading-[1.6] max-w-[52ch]">&ldquo;{s.quote}&rdquo;</blockquote>
        <figcaption className={`mt-4 text-[0.85rem] ${t.muted}`}>
          {s.name}, {s.role}
        </figcaption>
      </figure>
    </SpotlightCard>
  );
}

export function Work() {
  return (
    <section id="work" className="py-24 lg:py-36">
      <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-6 items-end mb-14 lg:mb-20">
          <div className="lg:col-span-8">
            <ChapterLabel id="work" className="mb-6" />
            <h2 className="display text-[clamp(2.2rem,4.6vw,4.2rem)] text-ink">
              <MaskLines lines={["Results our clients", "put their name to."]} />
            </h2>
          </div>
          <p className="lg:col-span-4 text-ink-3 text-[1rem] leading-[1.6] max-w-[38ch]">
            Karavali is the coast of Karnataka, and word travels fast along it. A few of the 150+
            businesses we have built for, in their own words.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-4">
          <Reveal className="lg:col-span-7">
            <StoryCard s={STORIES[0]} className="h-full lg:min-h-[560px]" />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <StoryCard s={STORIES[1]} className="h-full lg:min-h-[560px]" />
          </Reveal>
          <Reveal className="lg:col-span-12" delay={0.05}>
            <StoryCard s={STORIES[2]} className="lg:min-h-[360px]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
