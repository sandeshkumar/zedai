import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Boat } from "@/components/home/illustrations";
import { MirrorDot } from "@/components/home/motifs";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-[80vh] flex items-center justify-center px-5 pt-32 pb-20 overflow-hidden">
        {/* a little sea for the lost boat */}
        <div className="absolute inset-x-0 bottom-0 h-[38%] tile-lines opacity-[0.12]" aria-hidden="true" />
        <div className="relative text-center max-w-xl">
          <p className="flex items-center justify-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-kumkum mb-6">
            <MirrorDot className="w-5 h-5" />
            Error 404
          </p>
          <h1 className="display text-[clamp(3rem,9vw,6.5rem)] text-ink">
            Lost at <span className="text-tile">sea?</span>
          </h1>
          <p className="mt-5 text-ink-3 text-[1.05rem] leading-[1.65]">
            This page has drifted off the map, or it never set sail. Let&apos;s get you back to shore.
          </p>
          <div className="mx-auto mt-8 w-[160px]" style={{ animation: "bob 3.2s ease-in-out infinite", transformOrigin: "50% 90%" }}>
            <Boat className="w-full h-auto" />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="inline-flex items-center bg-ink text-paper font-medium px-6 py-3.5 rounded-full hover:bg-tile transition-colors">
              Back to the homepage
            </Link>
            <Link href="/contact" className="inline-flex items-center border border-line-strong text-ink font-medium px-6 py-3.5 rounded-full hover:bg-paper-2 transition-colors">
              Talk to us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
