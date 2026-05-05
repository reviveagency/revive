import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-line mt-32">
      <div className="container-page py-16 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/media/revive-logo-dark.png"
            alt="Revive"
            width={140}
            height={32}
            className="h-8 w-auto object-contain"
          />
          <p className="mt-4 max-w-xs text-sm text-ink-muted leading-relaxed">
            We rebuild underperforming websites. Free 48-hour redesign direction.
            Then a build that ships.
          </p>
        </div>
        <FooterCol
          title="Work"
          items={[
            { href: "/work/btw-creative", label: "BTW Creative" },
            { href: "/work/break-the-wire", label: "Break the Wire" },
            { href: "/work/touro-e-fogo", label: "Touro e Fogo" },
            { href: "/work/kontrolwater", label: "KontrolWater" },
          ]}
        />
        <FooterCol
          title="Studio"
          items={[
            { href: "/#process", label: "Process" },
            { href: "/#faq", label: "FAQ" },
            { href: "/book", label: "Book audit" },
          ]}
        />
        <FooterCol
          title="Contact"
          items={[
            { href: "mailto:lucas@reviveagency.eu", label: "lucas@reviveagency.eu" },
            { href: "https://reviveagency.eu", label: "reviveagency.eu" },
          ]}
        />
      </div>
      <div className="container-page pb-10 flex items-center justify-between text-xs text-ink-faint">
        <span>© {new Date().getFullYear()} Revive Agency. All rights reserved.</span>
        <span>Built with intent. Not a template.</span>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.18em] text-ink-faint mb-4">
        {title}
      </div>
      <ul className="flex flex-col gap-2 text-sm">
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} className="link-underline">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
