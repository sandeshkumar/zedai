import { IntroController } from "./IntroController";
import { PrabhavaliShapes, YAKSHA_BAND } from "./motifs";

export const INTRO_KEY = "zl-intro-v1";

/**
 * First-visit opening: a Yakshagana curtain (tere) with the crown in front,
 * three chande drumbeat pulses, then the curtain parts to reveal the page.
 *
 * The inline script runs during HTML parsing, before first paint, so the
 * overlay only ever shows on a first visit and never flashes for returning
 * visitors or for people who prefer reduced motion.
 */
export function OpeningMoment() {
  const decide = `try{if(!localStorage.getItem("${INTRO_KEY}")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.classList.add("zl-intro")}}catch(e){}`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: decide }} />
      <div className="zl-intro-overlay" aria-hidden="true">
        <div className="zl-curtain zl-curtain-l" style={{ backgroundImage: YAKSHA_BAND, backgroundSize: "auto 26%" }} />
        <div className="zl-curtain zl-curtain-r" style={{ backgroundImage: YAKSHA_BAND, backgroundSize: "auto 26%" }} />
        <div className="zl-intro-centre">
          <span className="zl-pulse" style={{ animationDelay: "0.15s" }} />
          <span className="zl-pulse" style={{ animationDelay: "0.45s" }} />
          <span className="zl-pulse" style={{ animationDelay: "0.75s" }} />
          <svg viewBox="-100 -100 200 200" className="zl-crown">
            <PrabhavaliShapes />
          </svg>
          <p className="zl-intro-word">ZED LABS</p>
        </div>
      </div>
      <IntroController storageKey={INTRO_KEY} />
    </>
  );
}
