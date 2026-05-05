import { CountUp } from "./ui/CountUp";
import { Reveal } from "./ui/Reveal";

const stats = [
  { value: 4.9, suffix: "/5", decimals: 1, label: "Average client rating" },
  { value: 38, suffix: "+", decimals: 0, label: "Redesigns launched" },
  { value: 22, prefix: "+", suffix: "%", decimals: 0, label: "Avg. conversion uplift" },
  { value: 48, suffix: "hr", decimals: 0, label: "Free direction turnaround" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-page py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="flex flex-col gap-3">
                <div className="font-display text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.95]">
                  <CountUp
                    to={s.value}
                    decimals={s.decimals}
                    prefix={s.prefix}
                    suffix={s.suffix}
                  />
                </div>
                <div className="text-xs uppercase tracking-[0.16em] text-ink-faint max-w-[18ch]">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
