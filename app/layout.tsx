import type { Metadata } from "next";
import { Sora, Fraunces } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reviveagency.eu"),
  title: {
    default: "Revive · Free redesign direction for underperforming websites",
    template: "%s · Revive",
  },
  description:
    "We rebuild underperforming websites. Get a free 48hr redesign direction for your site. See how it should look before committing.",
  keywords: [
    "website redesign",
    "conversion optimization",
    "Revive Agency",
    "free website audit",
    "redesign direction",
  ],
  openGraph: {
    title: "Revive · Free redesign direction for underperforming websites",
    description:
      "Free 48hr redesign direction for your site. See how it should look before committing.",
    type: "website",
    locale: "en_GB",
  },
  icons: {
    icon: "/media/phoenix.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh flex flex-col bg-bg text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
