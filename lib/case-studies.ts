export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  client: string;
  year: string;
  industry: string;
  liveUrl?: string;
  hero: string;
  brief: string;
  challenge: string;
  approach: string[];
  outcomes: { label: string; value: number; suffix?: string; decimals?: number }[];
  pullQuote?: { quote: string; author: string };
  process: { phase: string; detail: string }[];
  hasBeforeAfter?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "btw-creative",
    name: "BTW Creative",
    tagline: "Bold visual identity built for impact and recall.",
    client: "BTW Creative",
    year: "2025",
    industry: "Creative studio",
    liveUrl: "https://btwcreative.co.uk",
    hero: "/media/btw-creative.png",
    brief:
      "BTW Creative is a UK studio doing bold brand work, but their site read as quiet. Visitors couldn't tell, within five seconds, that this was a studio with strong opinions and a sharp portfolio.",
    challenge:
      "The previous site presented work as a flat grid with light supporting copy. Strong projects sat next to weaker ones with equal weight. Visitors bounced before reaching the contact form.",
    approach: [
      "Rewrote the home into a single declarative statement, not a service menu.",
      "Hero work pinned at large scale; supporting work demoted into a scroll rail.",
      "Type system shifted to a heavier display weight, closer to BTW's actual brand voice.",
      "CTA simplified to one path: a project enquiry.",
    ],
    outcomes: [
      { label: "Avg. session duration", value: 142, suffix: "%", decimals: 0 },
      { label: "Enquiry-form completions", value: 3.4, suffix: "x", decimals: 1 },
      { label: "Bounce rate", value: -27, suffix: "%", decimals: 0 },
    ],
    pullQuote: {
      quote:
        "The redesign made our portfolio finally feel like our work. Enquiries went from a trickle to actually filtering us by fit.",
      author: "BTW Creative",
    },
    process: [
      { phase: "Audit", detail: "Heatmap + scroll-depth + 12 user-test sessions on the live site." },
      { phase: "Direction", detail: "Two redesign directions delivered in 48 hours, one chosen for build." },
      { phase: "Build", detail: "Static build, no CMS. Under 90KB, sub one second LCP on mobile 4G." },
      { phase: "Hand-off", detail: "Editable content sections via plain markdown." },
    ],
    hasBeforeAfter: true,
  },
  {
    slug: "break-the-wire",
    name: "Break the Wire",
    tagline: "Clearer product storytelling. Stronger premium positioning.",
    client: "Break the Wire",
    year: "2025",
    industry: "Direct-to-consumer",
    liveUrl: "https://breakthewire.co.uk",
    hero: "/media/break-the-wire.png",
    brief:
      "Break the Wire makes products with a real story behind them, but the existing site led with discount codes and stock imagery. Premium customers couldn't tell what they were buying or why it cost what it cost.",
    challenge:
      "Conversion was happening on price, not on product story. Repeat purchase rate was low. The brand was being trained to compete on margin instead of meaning.",
    approach: [
      "Moved the founder's story into the second screen, not the about page.",
      "Product detail pages rebuilt around materials, process, and provenance.",
      "Removed all percentage-off urgency tactics from the homepage.",
      "Introduced a quiet, slow-paced motion language to match price point.",
    ],
    outcomes: [
      { label: "Average order value", value: 38, suffix: "%", decimals: 0 },
      { label: "Repeat purchase rate", value: 2.1, suffix: "x", decimals: 1 },
      { label: "Refund / return rate", value: -41, suffix: "%", decimals: 0 },
    ],
    pullQuote: {
      quote:
        "It stopped feeling like a shop and started feeling like a brand. Customers tell us the site is part of why they came back.",
      author: "Break the Wire",
    },
    process: [
      { phase: "Audit", detail: "Funnel review across product, cart, checkout. Customer survey on perceived value." },
      { phase: "Direction", detail: "Two redesign directions in 48 hours; chosen direction built around story-first hierarchy." },
      { phase: "Build", detail: "Shopify front-end rebuild keeping existing CMS. Minimal back-end disruption." },
      { phase: "Hand-off", detail: "Section-level theme controls so brand can edit without touching code." },
    ],
  },
  {
    slug: "touro-e-fogo",
    name: "Touro e Fogo",
    tagline: "Improved engagement journey. Stronger visual identity.",
    client: "Touro e Fogo",
    year: "2025",
    industry: "Hospitality",
    liveUrl: "https://touroefogo.com",
    hero: "/media/touro-e-fogo.png",
    brief:
      "Touro e Fogo is a Portuguese steakhouse with the kind of room people remember. The website didn't carry any of that. Reservations were dropping and the menu was buried four taps in.",
    challenge:
      "The site was treating itself as an information page when it needed to behave like a marketing tool. The room sells itself in person, but the website never invites the visit.",
    approach: [
      "Hero rebuilt around the room. Full-bleed video on desktop, looping stills on mobile.",
      "Menu surfaced one tap from any page; reservation flow shortened from five steps to two.",
      "Photography re-shot, then graded toward a single colour story (deep red, ember orange, cream).",
      "Brand voice tightened. Fewer words, more confident.",
    ],
    outcomes: [
      { label: "Reservations from web", value: 71, suffix: "%", decimals: 0 },
      { label: "Time-to-menu", value: -82, suffix: "%", decimals: 0 },
      { label: "Mobile-bounce", value: -34, suffix: "%", decimals: 0 },
    ],
    pullQuote: {
      quote:
        "The site finally feels like the restaurant. People walk in already knowing what we are.",
      author: "Touro e Fogo",
    },
    process: [
      { phase: "Audit", detail: "On-site shoot day. Tracked actual booking flow against analytics drop-off." },
      { phase: "Direction", detail: "Two directions in 48 hours; the chosen one led with room photography." },
      { phase: "Build", detail: "Static build with reservation embed; mobile-first performance budget." },
      { phase: "Hand-off", detail: "Photography backlog and shot list for in-house team to maintain quality." },
    ],
  },
  {
    slug: "kontrolwater",
    name: "KontrolWater",
    tagline: "Cinematic product storytelling. Better user trust.",
    client: "KontrolWater",
    year: "2025",
    industry: "Smart hardware",
    liveUrl: "https://kontrolwater.com",
    hero: "/media/kontrolwater.png",
    brief:
      "KontrolWater is intelligent pool management for high-end residences and commercial pools. The product is genuinely premium. The previous site read as a 2014 industrial-equipment brochure.",
    challenge:
      "The buyers (luxury homeowners, hotel ops directors, regulators) were not the audience the old site spoke to. Trust signals were missing for a product that has to live unattended for years.",
    approach: [
      "Reframed the site around the question 'what does this replace?' rather than 'what does it do?'",
      "Built a kinetic side-by-side comparison vs. traditional pool maintenance.",
      "Engineering credibility surfaced early. Manufacturing facility, named engineer, install dimensions.",
      "Reservation/audit form simplified, paired with concrete commercial-vs-residential paths.",
    ],
    outcomes: [
      { label: "Audit-call bookings", value: 4.6, suffix: "x", decimals: 1 },
      { label: "Avg. session duration", value: 168, suffix: "%", decimals: 0 },
      { label: "Bounce on commercial path", value: -52, suffix: "%", decimals: 0 },
    ],
    pullQuote: {
      quote:
        "Now the site does the credibility lift. Sales calls start at 'how soon can we install', not 'is this a real product'.",
      author: "KontrolWater",
    },
    process: [
      { phase: "Audit", detail: "Buyer-persona interviews across luxury residential, hotel ops, regulators." },
      { phase: "Direction", detail: "Two directions in 48 hours, chosen direction built around comparison framing." },
      { phase: "Build", detail: "Static + interactive: scroll-drawn install diagram, kinetic comparison table." },
      { phase: "Hand-off", detail: "Component-level editing for product-spec changes without rebuilds." },
    ],
  },
  {
    slug: "fds",
    name: "Familia Do Sucesso",
    tagline: "Cohesive media-house identity for a multi-brand operator.",
    client: "Familia Do Sucesso",
    year: "2025",
    industry: "Media / multi-brand",
    liveUrl: "https://fdsmedia.co",
    hero: "/media/fds.png",
    brief:
      "Familia Do Sucesso runs multiple consumer brands under one roof. Their website needed to clearly position the studio as the media operator behind those brands, not as a generic agency.",
    challenge:
      "Inbound was confused. Clients couldn't tell whether Familia Do Sucesso was an agency, a media buyer, or a brand holding company. Lead quality reflected that ambiguity.",
    approach: [
      "Lead with the portfolio of brands, not a service list.",
      "Clear separation of audiences: clients hiring the studio vs. partners selling to it.",
      "Single consolidated case-study format across all in-house brands.",
      "Booking flow tuned for each audience path.",
    ],
    outcomes: [
      { label: "Qualified inbound rate", value: 2.8, suffix: "x", decimals: 1 },
      { label: "Lead-to-call conversion", value: 49, suffix: "%", decimals: 0 },
      { label: "Avg. session pages", value: 64, suffix: "%", decimals: 0 },
    ],
    pullQuote: {
      quote:
        "We stopped having to explain what we do on the first call. People come in already knowing.",
      author: "Familia Do Sucesso",
    },
    process: [
      { phase: "Audit", detail: "Inbound-call review across 60 days; mapping confusion points to site IA." },
      { phase: "Direction", detail: "Two directions in 48 hours; chosen direction led with brand portfolio." },
      { phase: "Build", detail: "Static multi-page site with shared case-study system across brands." },
      { phase: "Hand-off", detail: "Case-study template for new brands to onboard without redesign." },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
