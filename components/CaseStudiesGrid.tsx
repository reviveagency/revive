import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { caseStudies } from "@/lib/case-studies";

export function CaseStudiesGrid() {
  return (
    <section id="work" className="container-page mt-40 md:mt-48">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16 md:mb-20">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-ink-faint">
              Recent work
            </div>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.6vw,3.6rem)] max-w-[20ch]">
              Five sites.{" "}
              <span className="font-editorial text-orange">Five problems solved.</span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-ink-muted leading-relaxed max-w-[42ch] md:justify-self-end">
            Each case study has the brief, the constraint, what we changed, and
            the numbers. No screenshots-as-decoration.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-12 gap-6 md:gap-8">
        {caseStudies
          .filter((cs) => cs.slug !== "fds")
          .map((cs, i) => {
            // BTW (0) and KontrolWater (3) full-width; Break the Wire and Touro half each.
            const span =
              i === 0 || i === 3 ? "md:col-span-12" : "md:col-span-6";
            return (
            <Reveal key={cs.slug} delay={(i % 3) * 0.08} className={span}>
              <Link
                href={`/work/${cs.slug}`}
                className="group block relative overflow-hidden rounded-2xl border border-line bg-surface aspect-[16/10] md:aspect-auto md:h-[clamp(360px,42vw,560px)]"
              >
                <Image
                  src={cs.hero}
                  alt={cs.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8 flex items-end justify-between gap-6 text-white">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.2em] opacity-75">
                      {cs.industry} · {cs.year}
                    </div>
                    <div className="font-display text-2xl md:text-[1.9rem] mt-2">
                      {cs.name}
                    </div>
                    <div className="text-sm md:text-base opacity-85 mt-1 max-w-[40ch]">
                      {cs.tagline}
                    </div>
                  </div>
                  <div className="hidden sm:flex size-12 rounded-full bg-orange items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45">
                    <ArrowUpRight size={20} strokeWidth={2.2} />
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
