"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50"
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(245,245,245,0.78)" : "rgba(245,245,245,0)",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "blur(0px)",
        borderColor: scrolled ? "rgba(10,10,10,0.08)" : "rgba(10,10,10,0)",
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "blur(0px)",
        borderBottomWidth: 1,
      }}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/media/revive-logo-dark.png"
            alt="Revive"
            width={120}
            height={28}
            priority
            className="h-7 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-tight">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-underline text-ink/80 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/#book" className="btn-orange text-sm">
          Book audit
          <ArrowUpRight size={16} strokeWidth={2.2} />
        </Link>
      </div>
    </motion.header>
  );
}
