import { Reveal } from "./ui/Reveal";

const SKILLS = ["Ecommerce", "UX", "Visual design", "Conversion"];

export function FounderSection() {
  return (
    <section className="container-page mt-40 md:mt-48">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.18em] text-ink-faint mb-12">
          Who&rsquo;s behind it
        </div>
      </Reveal>

      <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
        {/* Portrait */}
        <Reveal className="md:col-span-4 lg:col-span-3">
          <div className="relative w-fit">
            {/* swap /media/lucas-marques.jpg in when ready */}
            <div
              className="size-[180px] md:size-[220px] rounded-3xl flex items-center justify-center text-6xl font-display font-semibold select-none"
              style={{
                background:
                  "radial-gradient(circle at 35% 40%, rgba(242,101,34,0.18), rgba(242,101,34,0.04) 70%)",
                color: "#F26522",
                border: "1px solid rgba(242,101,34,0.15)",
              }}
              aria-label="Lucas Marques"
            >
              LM
            </div>
            <div
              className="absolute -bottom-3 -right-3 rounded-2xl px-3 py-1.5 text-xs font-medium"
              style={{
                background: "rgba(242,101,34,0.10)",
                color: "#d4521a",
                border: "1px solid rgba(242,101,34,0.12)",
              }}
            >
              5 yrs
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={0.1} className="md:col-span-8 lg:col-span-9">
          <div className="max-w-[52ch]">
            <div className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.05]">
              Lucas Marques
            </div>
            <p className="mt-6 text-base md:text-lg text-ink-muted leading-relaxed">
              Five years building for media companies, ecommerce brands, and
              direct-to-consumer businesses. The through-line: websites that
              earn trust fast enough to convert.
            </p>
            <p className="mt-4 text-base md:text-lg text-ink-muted leading-relaxed">
              Every Revive audit is done personally. No hand-offs to junior
              designers, no templated outputs.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="text-xs uppercase tracking-[0.16em] px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(10,10,10,0.05)",
                    color: "rgba(10,10,10,0.55)",
                    border: "1px solid rgba(10,10,10,0.08)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
