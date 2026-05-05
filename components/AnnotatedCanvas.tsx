"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./ui/Reveal";

/**
 * "What your free redesign direction includes."
 * Replaces the generic icon-tile grid with an annotated wireframe canvas:
 * a stylised website mock with hairline callout lines that draw themselves
 * in on scroll, pointing to specific elements of the redesign.
 *
 * Layout: viewBox 0 0 1280 760
 *  - Wireframe occupies x = 340..940 (600 wide), y = 80..680
 *  - Left annotations: foreignObject x=20, w=280 (so text spans 20..300, clears wireframe at x=340)
 *  - Right annotations: foreignObject x=980, w=280 (so text spans 980..1260, clears wireframe at x=940)
 */

type Annotation = {
  id: number;
  label: string;
  detail: string;
  side: "left" | "right";
  /** y-position of the foreignObject text block (top edge) */
  textY: number;
  /** SVG path from the text block edge to the wireframe target */
  pathD: string;
  /** position of the small target dot on the wireframe */
  target: [number, number];
  delay: number;
};

const ANNOTATIONS: Annotation[] = [
  {
    id: 1,
    label: "01 Hero",
    detail: "Clear headline. Says what you do, before they scroll.",
    side: "left",
    textY: 196,
    pathD: "M 300 218 C 330 218, 350 218, 372 218",
    target: [372, 218],
    delay: 0,
  },
  {
    id: 2,
    label: "02 IA",
    detail: "Page structure that matches how people actually scan and read.",
    side: "right",
    textY: 130,
    pathD: "M 980 158 C 950 158, 900 152, 840 148",
    target: [840, 148],
    delay: 0.15,
  },
  {
    id: 3,
    label: "03 Trust",
    detail: "Real proof from real customers. Placed where people actually decide.",
    side: "left",
    textY: 332,
    pathD: "M 300 360 C 330 360, 350 348, 378 345",
    target: [378, 345],
    delay: 0.3,
  },
  {
    id: 4,
    label: "04 CTA",
    detail: "One clear next step. No confusion or extra options.",
    side: "right",
    textY: 504,
    pathD: "M 980 528 C 950 528, 930 540, 902 540",
    target: [902, 540],
    delay: 0.45,
  },
  {
    id: 5,
    label: "05 Voice",
    detail: "Same message. Consistent tone throughout.",
    side: "left",
    textY: 632,
    pathD: "M 300 660 C 330 660, 348 660, 370 660",
    target: [370, 660],
    delay: 0.6,
  },
  {
    id: 6,
    label: "06 Build",
    detail: "Lightning fast. Works perfectly on phones. Built lean, no bloat.",
    side: "right",
    textY: 410,
    pathD: "M 980 432 C 945 432, 920 425, 906 422",
    target: [906, 422],
    delay: 0.75,
  },
];

export function AnnotatedCanvas() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="includes" className="container-page mt-40 md:mt-48">
      <Reveal>
        <div className="max-w-[58ch]">
          <div className="text-xs uppercase tracking-[0.18em] text-ink-faint">
            Your free redesign direction
          </div>
          <h2 className="font-display mt-4 text-[clamp(2rem,4.6vw,3.6rem)]">
            Six decisions, made for you.{" "}
            <span className="font-editorial text-orange">In 48 hours.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-ink-muted leading-relaxed">
            We don&rsquo;t hand back a slide deck. You get a real direction.
            The wireframe of your future site, with every meaningful decision
            already made and explained.
          </p>
        </div>
      </Reveal>

      {/* Desktop annotated canvas */}
      <div className="hidden md:block mt-16 relative">
        <svg viewBox="0 0 1280 760" className="w-full h-auto" aria-hidden>
          {/* Wireframe — kept inside x=340..940, y=80..680 */}
          <g stroke="rgba(10,10,10,0.18)" strokeWidth="1" fill="none">
            {/* browser frame */}
            <rect x="340" y="80" width="600" height="600" rx="14" fill="#ffffff" />
            {/* browser top bar */}
            <line x1="340" y1="116" x2="940" y2="116" />
            <circle cx="362" cy="98" r="3.5" fill="rgba(10,10,10,0.18)" stroke="none" />
            <circle cx="376" cy="98" r="3.5" fill="rgba(10,10,10,0.18)" stroke="none" />
            <circle cx="390" cy="98" r="3.5" fill="rgba(10,10,10,0.18)" stroke="none" />

            {/* nav bar — logo + 2 links + cta */}
            <line x1="370" y1="148" x2="420" y2="148" stroke="rgba(10,10,10,0.4)" strokeWidth="2" />
            <line x1="760" y1="146" x2="800" y2="146" stroke="rgba(10,10,10,0.18)" />
            <line x1="810" y1="146" x2="850" y2="146" stroke="rgba(10,10,10,0.18)" />
            <rect x="860" y="138" width="60" height="18" rx="9" fill="#F26522" stroke="none" />

            {/* hero */}
            <rect x="370" y="178" width="540" height="120" fill="rgba(10,10,10,0.03)" />
            <line x1="390" y1="208" x2="780" y2="208" stroke="rgba(10,10,10,0.45)" strokeWidth="3" />
            <line x1="390" y1="228" x2="700" y2="228" stroke="rgba(10,10,10,0.45)" strokeWidth="3" />
            <line x1="390" y1="258" x2="610" y2="258" stroke="rgba(10,10,10,0.18)" />
            <rect x="390" y="272" width="80" height="18" rx="9" fill="#F26522" stroke="none" />

            {/* trust strip */}
            <line x1="370" y1="320" x2="910" y2="320" stroke="rgba(10,10,10,0.08)" />
            <text x="390" y="350" fill="rgba(10,10,10,0.5)" fontSize="11">4.9/5</text>
            <text x="510" y="350" fill="rgba(10,10,10,0.5)" fontSize="11">38+</text>
            <text x="630" y="350" fill="rgba(10,10,10,0.5)" fontSize="11">+22%</text>
            <text x="750" y="350" fill="rgba(10,10,10,0.5)" fontSize="11">48hr</text>
            <line x1="370" y1="370" x2="910" y2="370" stroke="rgba(10,10,10,0.08)" />

            {/* feature row — 3 cards */}
            <rect x="370" y="394" width="170" height="86" fill="rgba(10,10,10,0.02)" />
            <line x1="384" y1="416" x2="460" y2="416" stroke="rgba(10,10,10,0.32)" strokeWidth="2" />
            <line x1="384" y1="432" x2="510" y2="432" stroke="rgba(10,10,10,0.18)" />
            <line x1="384" y1="446" x2="495" y2="446" stroke="rgba(10,10,10,0.18)" />

            <rect x="555" y="394" width="170" height="86" fill="rgba(10,10,10,0.02)" />
            <line x1="569" y1="416" x2="640" y2="416" stroke="rgba(10,10,10,0.32)" strokeWidth="2" />
            <line x1="569" y1="432" x2="690" y2="432" stroke="rgba(10,10,10,0.18)" />
            <line x1="569" y1="446" x2="675" y2="446" stroke="rgba(10,10,10,0.18)" />

            <rect x="740" y="394" width="170" height="86" fill="rgba(10,10,10,0.02)" />
            <line x1="754" y1="416" x2="830" y2="416" stroke="rgba(10,10,10,0.32)" strokeWidth="2" />
            <line x1="754" y1="432" x2="880" y2="432" stroke="rgba(10,10,10,0.18)" />
            <line x1="754" y1="446" x2="860" y2="446" stroke="rgba(10,10,10,0.18)" />

            {/* CTA strip */}
            <rect x="370" y="496" width="540" height="86" fill="rgba(242,101,34,0.06)" />
            <line x1="390" y1="528" x2="640" y2="528" stroke="rgba(10,10,10,0.45)" strokeWidth="3" />
            <line x1="390" y1="548" x2="550" y2="548" stroke="rgba(10,10,10,0.18)" />
            <rect x="780" y="528" width="120" height="22" rx="11" fill="#F26522" stroke="none" />

            {/* footer */}
            <line x1="370" y1="608" x2="420" y2="608" stroke="rgba(10,10,10,0.4)" strokeWidth="2" />
            <line x1="370" y1="626" x2="470" y2="626" stroke="rgba(10,10,10,0.18)" />
            <line x1="500" y1="626" x2="580" y2="626" stroke="rgba(10,10,10,0.18)" />
            <line x1="610" y1="626" x2="690" y2="626" stroke="rgba(10,10,10,0.18)" />
            <line x1="370" y1="650" x2="910" y2="650" stroke="rgba(10,10,10,0.08)" />
            <text x="370" y="668" fill="rgba(10,10,10,0.36)" fontSize="9">© Your brand. Tightened up.</text>
          </g>

          {/* annotation lines — orange hairlines that draw on scroll-in */}
          {ANNOTATIONS.map((a) => (
            <motion.path
              key={`line-${a.id}`}
              d={a.pathD}
              fill="none"
              stroke="#F26522"
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={prefersReduced ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: a.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ))}

          {/* target dots on wireframe */}
          {ANNOTATIONS.map((a) => (
            <motion.circle
              key={`dot-${a.id}`}
              cx={a.target[0]}
              cy={a.target[1]}
              r="3.5"
              fill="#F26522"
              initial={prefersReduced ? false : { opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: a.delay + 0.7 }}
            />
          ))}

          {/* annotation text blocks */}
          {ANNOTATIONS.map((a) => {
            const fx = a.side === "left" ? 20 : 980;
            return (
              <motion.g
                key={`text-${a.id}`}
                initial={prefersReduced ? false : { opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: a.delay + 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <foreignObject
                  x={fx}
                  y={a.textY}
                  width="280"
                  height="100"
                >
                  <div
                    style={{
                      fontFamily: "var(--font-fraunces), Georgia, serif",
                      fontStyle: "italic",
                      fontSize: "12px",
                      color: "#F26522",
                      letterSpacing: "0.04em",
                      textAlign: a.side === "left" ? "left" : "right",
                      marginBottom: "6px",
                    }}
                  >
                    {a.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sora), sans-serif",
                      fontSize: "13px",
                      color: "#0a0a0a",
                      fontWeight: 500,
                      lineHeight: 1.4,
                      letterSpacing: "-0.01em",
                      textAlign: a.side === "left" ? "left" : "right",
                    }}
                  >
                    {a.detail}
                  </div>
                </foreignObject>
              </motion.g>
            );
          })}
        </svg>
      </div>

      {/* Mobile fallback — vertical editorial list */}
      <div className="md:hidden mt-12 flex flex-col">
        {ANNOTATIONS.map((a, i) => (
          <Reveal key={a.id} delay={i * 0.08}>
            <div className="flex gap-5 py-6 border-b border-line">
              <div className="font-editorial italic text-orange text-sm pt-1 shrink-0 w-12">
                {a.label.split(" ")[0]}
              </div>
              <div className="text-base leading-relaxed text-ink">
                {a.detail}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
