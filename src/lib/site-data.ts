import {
  Sparkles,
  Gift,
  Ticket,
  ClipboardList,
  Trophy,
  Dice5,
  Globe2,
  Phone,
  MessageSquare,
  MonitorSmartphone,
  MapPin,
  CreditCard,
  Target,
  QrCode,
  ShieldCheck,
  Users,
  BarChart3,
  LineChart,
  type LucideIcon,
} from "lucide-react";

/* Brand colours reused across the site. */
export const CORAL = "#FF5E3A";
export const LIME = "#A8E10C";

/* ---------------- Interactive campaigns ---------------- */

export type Campaign = {
  slug: string;
  label: string;
  icon: LucideIcon;
  /** One-line teaser used in the nav dropdown, home page and cards. */
  summary: string;
  /** Longer intro shown on the campaign's own page. */
  description: string;
  /** Key selling points shown on the campaign's own page. */
  points: string[];
};

export const campaigns: Campaign[] = [
  {
    slug: "short-code-to-win",
    label: "Short Code to Win",
    icon: Sparkles,
    summary: "Consumers text a unique code to enter and win instantly.",
    description:
      "Short Code to Win turns any pack, receipt or on-air prompt into an instant entry. Consumers send a unique code via SMS or USSD, the Winning Code Iteration engine validates it in real time, and winners are rewarded on the spot — with no code pre-marked as winning, closing the door on stolen-code fraud.",
    points: [
      "Instant SMS / USSD entry from any printed or on-air code",
      "Fraud-proof Winning Code Iteration (WCI) winner allocation",
      "Real-time winner verification and reward dispatch",
    ],
  },
  {
    slug: "polls",
    label: "Polls",
    icon: Gift,
    summary: "Capture consumer opinion at scale and reward participation.",
    description:
      "Run branded polls across web, SMS and interactive in-store screens to capture consumer sentiment in the moment. Every response is an engagement touchpoint you can reward — turning lightweight market research into a loyalty driver.",
    points: [
      "Single-question or multi-step polls across every channel",
      "Reward respondents with airtime, data or gift cards",
      "Live results with demographic breakdowns",
    ],
  },
  {
    slug: "vote",
    label: "Vote",
    icon: Ticket,
    summary: "Drive mass participation with branded voting mechanics.",
    description:
      "Power fan votes, product choices and campaign showdowns with a voting mechanic built for scale. Consumers vote across every channel while you capture the audience data behind each vote.",
    points: [
      "High-volume voting across web, USSD and SMS",
      "Anti-fraud vote validation",
      "Real-time tallies and public leaderboards",
    ],
  },
  {
    slug: "surveys",
    label: "Surveys",
    icon: ClipboardList,
    summary: "Deeper insight through rewarded, structured surveys.",
    description:
      "Go beyond a single question with multi-step surveys that enrich every consumer profile. Incentivise completion with instant rewards and feed the results straight into your segmentation.",
    points: [
      "Multi-step, branching survey flows",
      "Completion rewards that lift response rates",
      "Demographic, behavioural and geographic capture",
    ],
  },
  {
    slug: "quizzes",
    label: "Quizzes",
    icon: Trophy,
    summary: "Gamified quizzes that educate and reward.",
    description:
      "Engage consumers with branded quizzes that build product knowledge while they play. Correct answers unlock rewards, and every play deepens the relationship with your brand.",
    points: [
      "Timed, gamified quiz formats",
      "Instant rewards for correct answers",
      "Product education built into the play",
    ],
  },
  {
    slug: "raffle-draws",
    label: "Raffle Draws & Lucky Dips",
    icon: Dice5,
    summary: "Classic prize draws with fraud-proof winner selection.",
    description:
      "Run raffle draws and lucky dips where every entry counts. The Winning Code Iteration engine allocates winners transparently at set intervals, so instant wins and grand prizes are awarded fairly and verifiably.",
    points: [
      "Interval-based, transparent winner allocation",
      "Instant-win and grand-prize tiers",
      "Verifiable, auditable draw results",
    ],
  },
];

export function getCampaign(slug: string): Campaign | undefined {
  return campaigns.find((c) => c.slug === slug);
}

/* ---------------- Why E-Redeem (features) ---------------- */

export type Feature = { icon: LucideIcon; title: string; desc: string };

export const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Fraud Elimination via Gen-AI",
    desc: "Winning Code Iteration (WCI) logic dynamically assigns winners based on entry intervals. No code is pre-marked as winning, eliminating vulnerability to stolen physical codes.",
  },
  {
    icon: Users,
    title: "Enhanced Brand-Consumer Engagement",
    desc: "Move beyond one-way advertising into two-way conversation across web, USSD, SMS and interactive screen displays.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics & Insights",
    desc: "Track entries, participants, winners and conversion the moment they happen — with customizable KPIs and exportable reports.",
  },
  {
    icon: Gift,
    title: "Streamlined Reward Tracking",
    desc: "Instant airtime, mobile data, shopping gift cards and physical gifts — fulfilled end-to-end from a single dashboard.",
  },
  {
    icon: Sparkles,
    title: "Enriched Customer Insights",
    desc: "Capture demographic, behavioural and geographic data with every entry to sharpen every follow-up campaign.",
  },
  {
    icon: LineChart,
    title: "Comprehensive Reporting Suite",
    desc: "Live entry tracking, demographic segmentation, revenue vs target dashboards and built-in fraud & compliance monitoring.",
  },
];

/* ---------------- Channels ---------------- */

export type Channel = { icon: LucideIcon; label: string };

export const channels: Channel[] = [
  { icon: Globe2, label: "Web" },
  { icon: Phone, label: "USSD" },
  { icon: MessageSquare, label: "SMS" },
  { icon: MonitorSmartphone, label: "Interactive Screen Displays" },
];

/* ---------------- Use cases ---------------- */

export type UseCase = { icon: LucideIcon; title: string; blurb: string; tint: string };

export const useCases: UseCase[] = [
  {
    icon: MapPin,
    title: "Location-Based",
    tint: LIME,
    blurb:
      "Ideal for events and activations. Drives foot traffic and localized sales by triggering offers where consumers already are.",
  },
  {
    icon: CreditCard,
    title: "Transaction-Based",
    tint: CORAL,
    blurb:
      "Triggered by purchase history to increase average transaction value and reward repeat loyalty at the till.",
  },
  {
    icon: Target,
    title: "Segment-Based",
    tint: "#1a1a1a",
    blurb:
      "Tailored to specific demographics or buying behaviours so every consumer segment gets a relevant mechanic.",
  },
];

/* ---------------- Case studies ---------------- */

export type CaseStudy = {
  icon: LucideIcon;
  brand: string;
  stat: string;
  label: string;
  blurb: string;
};

export const caseStudies: CaseStudy[] = [
  {
    icon: Ticket,
    brand: "Ribena",
    stat: "N100K",
    label: "Scholarships awarded",
    blurb:
      "Ribena Back to School — N100,000 Scholarships & Airtime via under-the-crown / scratch-panel codes.",
  },
  {
    icon: QrCode,
    brand: "Rema Live",
    stat: "42K+",
    label: "QR scans processed",
    blurb:
      "Best Premium Spirits @ Rema Live — QR code scans for instant airtime, data and physical prizes.",
  },
  {
    icon: Trophy,
    brand: "Guinness",
    stat: "100%",
    label: "Guaranteed airtime",
    blurb: "Guinness — guaranteed airtime campaigns utilising unique codes.",
  },
];

export const brands = ["RIBENA", "GUINNESS", "REMA LIVE", "MALTA GUINNESS", "RAZZLE"];

/* ---------------- Contact ---------------- */

export const contact = {
  address: "2 Pade Odanye Close, Harmony Enclave Estate, Adeniyi Jones, Ikeja, Lagos, Nigeria",
  phoneDisplay: "+234 705 659 2645",
  phoneHref: "tel:+2347056592645",
  email: "abamgbala@excitepanacea.com",
  website: "www.excitepanacea.com",
  websiteHref: "https://www.excitepanacea.com",
};
