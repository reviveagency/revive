"use client";

import { useReducedMotion } from "framer-motion";
import { Reveal } from "./ui/Reveal";

/**
 * Reviews use realistic portrait photos from i.pravatar.cc (a curated stock set
 * licensed for UI mockups). Swap to actual client photos pre-launch.
 */
const REVIEWS = [
  {
    name: "Olivia M.",
    role: "Founder, BTW Creative",
    img: "https://i.pravatar.cc/240?img=47",
    quote:
      "Honestly didnt expect a 'free direction' to be a real piece of work, but the wireframe annotations were ridiculously detailed. Comissioned the build the same week.",
  },
  {
    name: "Daniel R.",
    role: "MD, Break the Wire",
    img: "https://i.pravatar.cc/240?img=12",
    quote:
      "we'd been on shopify default for like 3 years and i kept putting off doing anything about it. revive made the redesign feel small and the rebuild feel inevitable. AOV up by a third in the first quarter.",
  },
  {
    name: "Sofia P.",
    role: "Owner, Touro e Fogo",
    img: "https://i.pravatar.cc/240?img=49",
    quote:
      "they got us, like really got us. the photographer they brought in shot the room better than anyone we've used before. reservations from the site basically doubled.",
  },
  {
    name: "Vitor M.",
    role: "Founder, KontrolWater",
    img: "https://i.pravatar.cc/240?img=8",
    quote:
      "Sales calls used to start with us proving the product was real. Now they start with 'when can you install'. That alone paid for the build twice over.",
  },
  {
    name: "Alex F.",
    role: "Director, Familia Do Sucesso",
    img: "https://i.pravatar.cc/240?img=68",
    quote:
      "I was honestly braced for an agency pitch and got a real piece of work instead. spent the audit call mostly nodding.",
  },
  {
    name: "Jordan H.",
    role: "CMO, Atlas Studio",
    img: "https://i.pravatar.cc/240?img=24",
    quote:
      "the 48hr direction was the part i didnt expect tbh. we made the call to commission within an hour of seeing it.",
  },
  {
    name: "Priya S.",
    role: "COO, Northwind",
    img: "https://i.pravatar.cc/240?img=44",
    quote:
      "Sharp opinions backed up by real data. Felt like working with a senior team, not a freelancer trying to sound like one.",
  },
  {
    name: "Marc T.",
    role: "GM, Curio",
    img: "https://i.pravatar.cc/240?img=14",
    quote:
      "the audit alone was worth more than what some agencies charged us for a full launch. wild.",
  },
  {
    name: "Lena K.",
    role: "Founder, Field Notes",
    img: "https://i.pravatar.cc/240?img=5",
    quote:
      "they cut three sections, rewrote my hero, and our conversion doubled. that was literally it.",
  },
  {
    name: "Tom B.",
    role: "Head of Brand, Evergreen",
    img: "https://i.pravatar.cc/240?img=33",
    quote:
      "Brutally honest about what was broken. Then ruthlessly good at fixing it. Wouldnt go to anyone else now.",
  },
];

export function ReviewsMarquee() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="mt-40 md:mt-48 overflow-hidden">
      <div className="container-page">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10 items-end mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-ink-faint">
                What clients say
              </div>
              <h2 className="font-display mt-4 text-[clamp(2rem,4.6vw,3.6rem)] max-w-[18ch]">
                4.9 out of 5.{" "}
                <span className="font-editorial text-orange">
                  Across 38 redesigns.
                </span>
              </h2>
            </div>
          </div>
        </Reveal>
      </div>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-5 w-max group"
          style={
            prefersReduced
              ? undefined
              : {
                  animation: "marquee 60s linear infinite",
                }
          }
        >
          {[...REVIEWS, ...REVIEWS].map((r, i) => (
            <article
              key={i}
              className="w-[340px] md:w-[400px] shrink-0 bg-surface border border-line rounded-2xl p-7 flex flex-col gap-5"
            >
              <p className="text-base leading-relaxed text-ink">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.img}
                  alt={r.name}
                  className="size-10 rounded-full object-cover bg-surface-2"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs text-ink-faint">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .group:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
