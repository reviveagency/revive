import Image from "next/image";
import { Reveal } from "./ui/Reveal";
import { CountUp } from "./ui/CountUp";
import { FinalCTA } from "./FinalCTA";

const SKILLS = [
  {
    title: "Ecommerce",
    detail:
      "Conversion rate optimisation, checkout flow redesign, product page structure, cart abandonment reduction.",
  },
  {
    title: "UX",
    detail:
      "Information architecture, user journey mapping, wireframing with conversion intent rather than aesthetic defaults.",
  },
  {
    title: "Visual design",
    detail:
      "Brand-consistent interfaces that establish credibility within the first scroll. No templates, no generic layouts.",
  },
  {
    title: "Media production",
    detail:
      "Photography direction, copy, video structure. Five years in media means the whole content layer, not just the wrapper.",
  },
];

const STATS = [
  { value: 5, suffix: "+ yrs", label: "In media, ecommerce and web design" },
  { value: 38, suffix: "", label: "Sites redesigned and shipped" },
  { value: 4.9, suffix: "", decimals: 1, label: "Average client rating" },
];

export function AboutView() {
  return (
    <article>
      {/* Hero */}
      <section className="container-page pt-40 md:pt-48 pb-16 md:pb-24">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.18em] text-ink-faint">
            About
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-3 text-xs uppercase tracking-[0.2em] text-ink-faint">
            <span>Portugal</span>
            <span>·</span>
            <span>Est. 2020</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display mt-7 text-[clamp(2.6rem,8vw,7rem)] leading-[0.96]">
            Lucas Marques
          </h1>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-7 max-w-[58ch] text-lg md:text-xl text-ink-muted leading-relaxed">
            Five years building for media companies, ecommerce brands and
            direct-to-consumer businesses. Every Revive audit is done
            personally.
          </p>
        </Reveal>
      </section>

      {/* Portrait */}
      <Reveal>
        <div className="container-page">
          <div className="relative aspect-[4/3] md:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-line bg-surface">
            <Image
              src="/media/lucas-marques.jpg"
              alt="Lucas Marques"
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
          </div>
        </div>
      </Reveal>

      {/* Background */}
      <section className="container-page mt-24 md:mt-32 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.18em] text-ink-faint">
            The background
          </div>
        </Reveal>
        <div className="space-y-12 max-w-[60ch]">
          <Reveal delay={0.06}>
            <p className="text-xl md:text-2xl leading-relaxed">
              Started in media production, moved into ecommerce UX, landed on
              conversion-focused web design. Revive is the distillation of
              what actually works across all three.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-ink-faint mb-3">
                Why Revive exists
              </div>
              <p className="text-base md:text-lg text-ink-muted leading-relaxed">
                Most redesign briefs confuse looking different with performing
                better. Every engagement starts with the business problem, not
                the Figma file. The free direction call is there to prove that
                before you spend anything.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="container-page mt-24 md:mt-32 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.18em] text-ink-faint">
            What I bring
          </div>
        </Reveal>
        <ol className="flex flex-col">
          {SKILLS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08}>
              <div className="flex gap-6 md:gap-8 py-7 border-b border-line">
                <div
                  className="font-editorial italic text-orange shrink-0"
                  style={{ fontSize: "clamp(1.4rem, 2.6vw, 2rem)" }}
                >
                  0{i + 1}
                </div>
                <div>
                  <div className="text-lg md:text-xl leading-snug font-medium mb-2">
                    {s.title}
                  </div>
                  <p className="text-base text-ink-muted leading-relaxed max-w-[48ch]">
                    {s.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Stats */}
      <section className="container-page mt-24 md:mt-32">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10 mb-12 md:mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-ink-faint">
                In numbers
              </div>
              <h2 className="font-display mt-4 text-[clamp(1.8rem,4vw,3rem)] max-w-[18ch]">
                Five years. Thirty-eight sites. One process.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="bg-surface p-8 md:p-12 h-full">
                <div className="font-display text-[clamp(2.4rem,5vw,4rem)] text-ink leading-[0.95]">
                  <CountUp
                    to={s.value}
                    decimals={s.decimals ?? 0}
                    suffix={s.suffix}
                  />
                </div>
                <div className="text-xs uppercase tracking-[0.16em] text-ink-faint mt-4 max-w-[20ch]">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className="container-narrow mt-32 md:mt-40 text-center">
        <Reveal>
          <div className="font-editorial italic text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.2] text-ink">
            &ldquo;Every audit I do personally. No hand-offs to junior
            designers, no templated outputs.&rdquo;
          </div>
          <div className="mt-7 text-xs uppercase tracking-[0.22em] text-ink-faint">
            Lucas Marques, Founder
          </div>
        </Reveal>
      </section>

      <FinalCTA />
    </article>
  );
}
