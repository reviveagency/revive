"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { CalendlyEmbed } from "./CalendlyEmbed";

const ISSUES = [
  "Not converting",
  "Confusing navigation",
  "Slow performance",
  "Outdated design",
  "Low trust / credibility",
  "Other",
];

type FormData = {
  email: string;
  url: string;
  issue: string;
  customIssue: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const emailRe = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function normaliseUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const u = new URL(candidate);
    if (!u.hostname.includes(".")) return null;
    return u.toString();
  } catch {
    return null;
  }
}

export function BookingForm({
  calendlyUrl,
  variant = "light",
}: {
  calendlyUrl: string;
  variant?: "light" | "dark";
}) {
  const onDark = variant === "dark";
  const [step, setStep] = useState<1 | 2>(1);
  const [data, setData] = useState<FormData>({
    email: "",
    url: "",
    issue: "",
    customIssue: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const emailRef = useRef<HTMLInputElement>(null);
  const step2HeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (step === 1) emailRef.current?.focus();
    if (step === 2) step2HeadingRef.current?.focus();
  }, [step]);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!data.email.trim()) next.email = "Please enter your business email.";
    else if (!emailRe.test(data.email.trim()))
      next.email = "That doesn't look like a valid email.";

    const url = normaliseUrl(data.url);
    if (!data.url.trim()) next.url = "Please enter your website URL.";
    else if (!url)
      next.url = "Please enter a valid URL (e.g. https://yoursite.com).";

    if (!data.issue) next.issue = "Pick the issue that fits best.";
    else if (data.issue === "Other" && !data.customIssue.trim())
      next.customIssue = "Tell us a bit about it.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStep(2);
  };

  return (
    <div className="mt-14 mx-auto max-w-[680px]">
      {/* Progress indicator */}
      <ProgressDots step={step} onDark={onDark} />

      <div className="mt-8 rounded-2xl bg-surface border border-line shadow-[0_24px_60px_-30px_rgba(10,10,10,0.18)] overflow-hidden">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.form
              key="step-1"
              onSubmit={onSubmit}
              noValidate
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="p-7 md:p-10"
            >
              <h2 className="font-display text-2xl md:text-3xl">Your site</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Three quick details so the audit call goes straight to the point.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                <Field
                  label="Business email"
                  required
                  error={errors.email}
                  htmlFor="email"
                >
                  <input
                    ref={emailRef}
                    id="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={data.email}
                    onChange={(e) => update("email", e.target.value)}
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="form-input"
                  />
                </Field>

                <Field
                  label="Current website URL"
                  required
                  error={errors.url}
                  htmlFor="url"
                >
                  <input
                    id="url"
                    type="url"
                    inputMode="url"
                    autoComplete="url"
                    placeholder="https://yourwebsite.com"
                    value={data.url}
                    onChange={(e) => update("url", e.target.value)}
                    aria-required="true"
                    aria-invalid={Boolean(errors.url)}
                    aria-describedby={errors.url ? "url-error" : undefined}
                    className="form-input"
                  />
                </Field>

                <Field
                  label="What's your biggest issue?"
                  required
                  error={errors.issue}
                  htmlFor="issue"
                >
                  <select
                    id="issue"
                    value={data.issue}
                    onChange={(e) => update("issue", e.target.value)}
                    aria-required="true"
                    aria-invalid={Boolean(errors.issue)}
                    aria-describedby={errors.issue ? "issue-error" : undefined}
                    className="form-input form-select"
                  >
                    <option value="" disabled>
                      Pick the closest match
                    </option>
                    {ISSUES.map((it) => (
                      <option key={it} value={it}>
                        {it}
                      </option>
                    ))}
                  </select>
                </Field>

                <AnimatePresence initial={false}>
                  {data.issue === "Other" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <Field
                        label="Tell us a bit about it"
                        required
                        error={errors.customIssue}
                        htmlFor="customIssue"
                      >
                        <input
                          id="customIssue"
                          type="text"
                          placeholder="One line is enough"
                          value={data.customIssue}
                          onChange={(e) =>
                            update("customIssue", e.target.value)
                          }
                          aria-required="true"
                          className="form-input"
                        />
                      </Field>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-10 flex items-center justify-between gap-4">
                <p className="text-xs text-ink-faint">
                  No spam. We only use these to prep your audit.
                </p>
                <button type="submit" className="btn-orange">
                  Continue to booking
                  <ArrowRight size={16} strokeWidth={2.2} />
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="p-7 md:p-10"
            >
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs uppercase tracking-[0.16em] text-ink-faint inline-flex items-center gap-1.5 link-underline"
              >
                <ArrowLeft size={12} strokeWidth={2.4} />
                Edit details
              </button>

              <h2
                ref={step2HeadingRef}
                tabIndex={-1}
                className="font-display text-2xl md:text-3xl mt-4 outline-none"
              >
                Book your call
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                Pre-filled for{" "}
                <span className="text-ink font-medium">{data.email}</span>. Pick
                a slot.
              </p>

              <div className="mt-7 -mx-2 md:-mx-4 -mb-4 md:-mb-6 rounded-xl overflow-hidden">
                <CalendlyEmbed
                  url={calendlyUrl}
                  prefill={{
                    email: data.email,
                    customAnswers: {
                      a1: data.url,
                      a2:
                        data.issue === "Other"
                          ? data.customIssue
                          : data.issue,
                    },
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .form-input {
          width: 100%;
          min-height: 48px;
          padding: 0.85rem 1rem;
          background: var(--color-surface);
          border: 1px solid var(--color-line-strong);
          border-radius: 10px;
          color: var(--color-ink);
          font-family: var(--font-sora);
          font-size: 0.97rem;
          letter-spacing: -0.005em;
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
          appearance: none;
        }
        .form-input::placeholder {
          color: var(--color-ink-faint);
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-orange);
          box-shadow: 0 0 0 4px rgba(242, 101, 34, 0.14);
        }
        .form-input[aria-invalid="true"] {
          border-color: #c4341a;
        }
        .form-select {
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'><path d='M3 5L7 9L11 5' stroke='%230a0a0a' stroke-opacity='0.5' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/></svg>");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 2.5rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  required,
  htmlFor,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-ink-faint mb-2"
      >
        {label}
        {required && (
          <span aria-hidden className="text-orange">
            *
          </span>
        )}
        {required && <span className="sr-only">(required)</span>}
      </label>
      {children}
      {error && (
        <p
          id={`${htmlFor}-error`}
          className="mt-2 text-sm text-[#c4341a]"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function ProgressDots({
  step,
  onDark = false,
}: {
  step: 1 | 2;
  onDark?: boolean;
}) {
  const items = [
    { n: 1, label: "Your site" },
    { n: 2, label: "Book a call" },
  ] as const;

  return (
    <ol className="flex items-center justify-center gap-3 sm:gap-5">
      {items.map((it, i) => {
        const active = step === it.n;
        const done = step > it.n;
        const inactiveCircle = onDark
          ? "bg-white/8 border border-white/20 text-white/55"
          : "bg-surface border border-line-strong text-ink-faint";
        const inactiveLabel = onDark ? "text-white/55" : "text-ink-faint";
        const activeLabel = onDark
          ? "text-white font-medium"
          : "text-ink font-medium";
        const doneCircle = onDark ? "bg-white text-ink" : "bg-ink text-white";
        const connector = onDark ? "bg-white/20" : "bg-line-strong";

        return (
          <li key={it.n} className="flex items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-2.5">
              <div
                className={`size-7 rounded-full grid place-items-center text-[11px] font-semibold transition-colors ${
                  active
                    ? "bg-orange text-white"
                    : done
                      ? doneCircle
                      : inactiveCircle
                }`}
                aria-current={active ? "step" : undefined}
              >
                {done ? <Check size={13} strokeWidth={2.6} /> : it.n}
              </div>
              <span
                className={`text-xs sm:text-sm tracking-tight ${
                  active ? activeLabel : inactiveLabel
                }`}
              >
                {it.label}
              </span>
            </div>
            {i < items.length - 1 && (
              <div
                className={`hidden sm:block h-px w-10 ${connector}`}
                aria-hidden
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
