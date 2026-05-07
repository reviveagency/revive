import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";

export const metadata: Metadata = {
  title: "About · Lucas Marques",
  description:
    "Five years in media, ecommerce and web design. Every Revive audit is done personally by Lucas Marques.",
  openGraph: {
    title: "About · Lucas Marques",
    description:
      "Five years in media, ecommerce and web design. Every Revive audit is done personally.",
    images: ["/media/lucas-marques.jpg"],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
