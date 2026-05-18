import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { CountUp } from "./ui/CountUp";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";

export function CaseStudyView({ caseStudy }: { caseStudy: CaseStudy }) {
  const idx = caseStudies.findIndex((c) => c.slug === caseStudy.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <article>
      {/* Hero */}
      <section className="container-page pt-40 md:pt-48 pb-16 md:pb-24">
        <Reveal>
          <Link
            href="/#work"
            className="text-xs uppercase tracking-[0.18em] text-ink-faint link-underline"
          >
            ← All work
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-3 text-xs uppercase tracking-[0.2em] text-ink-faint">
            <span>{caseStudy.industry}</span>
            <span>·</span>
            <span>{caseStudy.year}</span>
            {caseStudy.liveUrl && (
              <>
                <span>·</span>
                <a
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener"
                  className="link-underline inline-flex items-center gap-1 text-orange"
                >
                  Visit live <ArrowUpRight size={12} strokeWidth={2.4} />
                </a>
              </>
            )}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display mt-7 text-[clamp(2.6rem,8vw,7rem)] leading-[0.96]">
            {caseStudy.name}
          </h1>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-7 max-w-[58ch] text-lg md:text-xl text-ink-muted leading-relaxed">
            {caseStudy.tagline}
          </p>
        </Reveal>
      </section>

      {/* Hero image — full-resolution screenshot, no device frame, natural dimensions */}
      <Reveal>
        <div className="container-page">
          <div className="w-full rounded-2xl overflow-hidden border border-line bg-surface">
            <Image
              src={caseStudy.hero}
              alt={`${caseStudy.name} desktop site`}
              width={2400}
              height={1500}
              priority
              className="w-full h-auto block"
              sizes="100vw"
            />
          </div>
        </div>
      </Reveal>

      {/* Brief + challenge */}
      <section className="container-page mt-24 md:mt-32 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.18em] text-ink-faint">
            The brief
          </div>
        </Reveal>
        <div className="space-y-12 max-w-[60ch]">
          <Reveal delay={0.06}>
            <p className="text-xl md:text-2xl leading-relaxed">
              {caseStudy.brief}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-ink-faint mb-3">
                The challenge
              </div>
              <p className="text-base md:text-lg text-ink-muted leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mobile-view screenshot — natural dimensions at 390px width */}
      <section className="container-page mt-24 md:mt-32">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.18em] text-ink-faint mb-6">
            The mobile view
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          {caseStudy.mobileHero ? (
            <div className="mx-auto w-[390px] max-w-full rounded-2xl overflow-hidden border border-line bg-surface">
              <Image
                src={caseStudy.mobileHero}
                alt={`${caseStudy.name} mobile site`}
                width={1320}
                height={2868}
                sizes="390px"
                className="w-full h-auto block"
              />
            </div>
          ) : (
            // TODO: replace with real mobile screenshot from {caseStudy.client} at 390px width
            <div
              className="mx-auto w-[390px] max-w-full rounded-2xl border border-dashed border-line-strong bg-surface aspect-[390/844] grid place-items-center text-center px-6"
              role="img"
              aria-label={`${caseStudy.name} mobile screenshot placeholder`}
            >
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-ink-faint mb-3">
                  Mobile screenshot · 390 × 844
                </div>
                <div className="text-sm text-ink-muted leading-relaxed max-w-[28ch] mx-auto">
                  Placeholder. Replace with the real mobile screenshot from{" "}
                  {caseStudy.client}.
                </div>
              </div>
            </div>
          )}
        </Reveal>
      </section>

      {/* Approach */}
      <section className="container-page mt-24 md:mt-32 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.18em] text-ink-faint">
            The approach
          </div>
        </Reveal>
        <ol className="flex flex-col">
          {caseStudy.approach.map((step, i) => (
            <Reveal as="li" key={i} delay={i * 0.08}>
              <div className="flex gap-6 md:gap-8 py-7 border-b border-line">
                <div
                  className="font-editorial italic text-orange shrink-0"
                  style={{ fontSize: "clamp(1.4rem, 2.6vw, 2rem)" }}
                >
                  0{i + 1}
                </div>
                <div className="text-lg md:text-xl leading-snug max-w-[52ch]">
                  {step}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Outcomes */}
      <section className="container-page mt-24 md:mt-32">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10 mb-12 md:mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-ink-faint">
                The outcome
              </div>
              <h2 className="font-display mt-4 text-[clamp(1.8rem,4vw,3rem)] max-w-[18ch]">
                Numbers from the first 90 days post-launch.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {caseStudy.outcomes.map((o, i) => (
            <Reveal key={o.label} delay={i * 0.08}>
              <div className="bg-surface p-8 md:p-12 h-full">
                <div className="font-display text-[clamp(2.4rem,5vw,4rem)] text-ink leading-[0.95]">
                  <CountUp
                    to={o.value}
                    decimals={o.decimals ?? 0}
                    suffix={o.suffix}
                    duration={1.2}
                  />
                </div>
                <div className="text-xs uppercase tracking-[0.16em] text-ink-faint mt-4 max-w-[20ch]">
                  {o.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      {caseStudy.pullQuote && (
        <section className="container-narrow mt-32 md:mt-40 text-center">
          <Reveal>
            <div className="font-editorial italic text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.2] text-ink">
              &ldquo;{caseStudy.pullQuote.quote}&rdquo;
            </div>
            <div className="mt-7 text-xs uppercase tracking-[0.22em] text-ink-faint">
              {caseStudy.pullQuote.author}
            </div>
          </Reveal>
        </section>
      )}

      {/* Process */}
      <section className="container-page mt-32 md:mt-40">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.18em] text-ink-faint">
            How we ran it
          </div>
          <h2 className="font-display mt-4 text-[clamp(1.8rem,4vw,3rem)] max-w-[20ch]">
            Four phases. Same as every Revive engagement.
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-14 grid md:grid-cols-4 gap-8 md:gap-10">
          {caseStudy.process.map((p, i) => (
            <Reveal key={p.phase} delay={i * 0.06}>
              <div className="border-t border-ink pt-5">
                <div className="font-display text-orange text-2xl">0{i + 1}</div>
                <div className="font-display mt-2 text-lg">{p.phase}</div>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  {p.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Next case study */}
      <section className="container-page mt-40 md:mt-48">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.18em] text-ink-faint">
            Next case study
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <Link
            href={`/work/${next.slug}`}
            className="group mt-6 block relative overflow-hidden rounded-2xl border border-line aspect-[16/9] md:aspect-[20/8]"
          >
            <Image
              src={next.hero}
              alt={next.name}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-x-8 bottom-8 flex items-end justify-between gap-6 text-white">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] opacity-75">
                  {next.industry} · {next.year}
                </div>
                <div className="font-display text-3xl md:text-5xl mt-2">
                  {next.name}
                </div>
                <div className="opacity-85 mt-2 max-w-[40ch]">
                  {next.tagline}
                </div>
              </div>
              <div className="hidden sm:flex size-14 rounded-full bg-orange items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45">
                <ArrowUpRight size={22} strokeWidth={2.2} />
              </div>
            </div>
          </Link>
        </Reveal>
      </section>
    </article>
  );
}
