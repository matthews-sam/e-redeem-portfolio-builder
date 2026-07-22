import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Sparkles,
  BarChart3,
  Gift,
  Users,
  LineChart,
  Globe2,
  MessageSquare,
  MonitorSmartphone,
  Trophy,
  Ticket,
  Dice5,
  ClipboardList,
  MapPin,
  CreditCard,
  Target,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  QrCode,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const CORAL = "#FF5E3A";
const LIME = "#A8E10C";

function Index() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Nav />
      <Hero />
      <SocialProof />
      <FeatureGrid />
      <ZPattern />
      <BottomCTA />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */

function Nav() {
  const links = [
    { href: "#features", label: "Features" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span
            className="grid h-8 w-8 place-items-center rounded-md font-black text-white"
            style={{ background: CORAL }}
          >
            E
          </span>
          <span className="text-lg font-bold tracking-tight">Excite</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex h-10 items-center rounded-md px-5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110"
          style={{ background: CORAL }}
        >
          Launch a Campaign
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <div
            className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700"
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: LIME }} />
            Gen-AI Consumer Engagement Platform
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Unlocking Consumer Loyalty with{" "}
            <span style={{ color: CORAL }}>E-Redeem</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Engage, Reward &amp; Grow. Build digitalized, efficient, and authentic
            marketing campaigns.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110"
              style={{ background: CORAL }}
            >
              Launch a Campaign
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-md border-2 bg-white px-6 py-3 text-sm font-semibold transition-colors hover:bg-slate-50"
              style={{ borderColor: CORAL, color: CORAL }}
            >
              See Our Work
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" style={{ color: LIME }} /> Fraud-proof
            </span>
            <span className="flex items-center gap-2">
              <LineChart className="h-4 w-4" style={{ color: LIME }} /> Real-time
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" style={{ color: LIME }} /> Compliant
            </span>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                E-Redeem · Live
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { k: "Entries", v: "3,993" },
                { k: "Unique", v: "1,276" },
                { k: "Winners", v: "495" },
                { k: "Conv.", v: "3.59%" },
              ].map((s) => (
                <div key={s.k} className="rounded-lg border border-slate-200 p-3">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    {s.k}
                  </div>
                  <div className="mt-1.5 text-xl font-bold text-slate-900">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Revenue vs Target</div>
                <div className="flex gap-3 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full" style={{ background: CORAL }} />
                    Revenue
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-slate-900" /> Target
                  </span>
                </div>
              </div>
              <div className="mt-4 flex h-24 items-end gap-2">
                {[
                  [55, 45],
                  [62, 50],
                  [70, 58],
                  [65, 62],
                  [78, 68],
                  [85, 72],
                  [92, 80],
                ].map(([a, b], i) => (
                  <div key={i} className="flex flex-1 items-end gap-1">
                    <div
                      className="flex-1 rounded-t"
                      style={{ height: `${a}%`, background: CORAL }}
                    />
                    <div
                      className="flex-1 rounded-t bg-slate-900"
                      style={{ height: `${b}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-lg bg-slate-50 p-3">
              <div className="flex items-center gap-2.5">
                <span
                  className="grid h-8 w-8 place-items-center rounded-full"
                  style={{ background: LIME }}
                >
                  <Trophy className="h-4 w-4 text-slate-900" />
                </span>
                <div>
                  <div className="text-xs font-semibold text-slate-900">
                    Winner Verified · WCI Entry #900
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500">
                    ₦2,000 Airtime dispatched
                  </div>
                </div>
              </div>
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-bold text-slate-900"
                style={{ background: LIME }}
              >
                LIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOCIAL PROOF ---------------- */

function SocialProof() {
  const brands = ["RIBENA", "GUINNESS", "REMA LIVE", "MALTA GUINNESS", "RAZZLE"];
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Deployed for leading consumer brands
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 sm:gap-x-16">
          {brands.map((b) => (
            <span
              key={b}
              className="text-lg font-black tracking-[0.2em] text-slate-400 grayscale transition-colors hover:text-slate-600"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURE GRID ---------------- */

function FeatureGrid() {
  const features = [
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
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            <span className="h-1.5 w-6 rounded-full" style={{ background: LIME }} />
            Why E-Redeem
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            A loyalty platform built for category leaders.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Fraud-proof mechanics, real-time visibility and end-to-end reward fulfilment — in one platform.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]"
            >
              <span
                className="grid h-12 w-12 place-items-center rounded-xl transition-colors"
                style={{ background: `${LIME}33` }}
              >
                <f.icon className="h-6 w-6" style={{ color: "#4d6b00" }} />
              </span>
              <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-900">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Z-PATTERN SECTIONS ---------------- */

function ZPattern() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-24 px-4 py-20 sm:px-6 lg:px-8 lg:space-y-32 lg:py-28">
        {/* Row 1: Left text / Right visual — Channels */}
        <ZRow reverse={false} id="channels" />
        {/* Row 2: Left visual / Right text — Use Cases */}
        <ZRow reverse={true} id="use-cases" />
        {/* Row 3: Left text / Right visual — Portfolio */}
        <ZRow reverse={false} id="portfolio" />
      </div>
    </section>
  );
}

function ZRow({ reverse, id }: { reverse: boolean; id: string }) {
  const rows: Record<
    string,
    {
      eyebrow: string;
      title: string;
      body: string;
      bullets: { icon: any; label: string }[];
      visual: React.ReactNode;
    }
  > = {
    channels: {
      eyebrow: "Platform Capabilities",
      title: "Reach every consumer, on every channel they use.",
      body: "E-Redeem runs across the channels your consumers already live on — from mass-market USSD and SMS to web and interactive in-store screens.",
      bullets: [
        { icon: Globe2, label: "Web" },
        { icon: Phone, label: "USSD" },
        { icon: MessageSquare, label: "SMS" },
        { icon: MonitorSmartphone, label: "Interactive Screen Displays" },
      ],
      visual: <ChannelsVisual />,
    },
    "use-cases": {
      eyebrow: "Use Cases",
      title: "Three ways brands deploy E-Redeem.",
      body: "Whether you're driving footfall to an activation, growing basket size at the till, or nurturing a specific segment, E-Redeem gives you the mechanic.",
      bullets: [
        { icon: MapPin, label: "Location-Based Offers — ideal for events and activations. Drives foot traffic and localized sales." },
        { icon: CreditCard, label: "Transaction-Based Offers — triggered by purchase history to increase average transaction value and loyalty." },
        { icon: Target, label: "Customer Segment-Based — tailored to specific demographics or buying behaviors." },
      ],
      visual: <UseCasesVisual />,
    },
    portfolio: {
      eyebrow: "Previous Deployments",
      title: "Proven campaigns for household brands.",
      body: "Eight years of consumer engagement expertise — deployed for FMCG, spirits and telco category leaders across Nigeria.",
      bullets: [
        { icon: Ticket, label: "Ribena Back to School — N100,000 Scholarships & Airtime via under-the-crown/scratch panel codes." },
        { icon: QrCode, label: "Best Premium Spirits @ Rema Live — QR code scans for instant airtime, data, and physical prizes." },
        { icon: Trophy, label: "Guinness — Guaranteed airtime campaigns utilizing unique codes." },
      ],
      visual: <PortfolioVisual />,
    },
  };
  const r = rows[id];
  return (
    <div
      id={id}
      className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          <span className="h-1.5 w-6 rounded-full" style={{ background: LIME }} />
          {r.eyebrow}
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {r.title}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">{r.body}</p>
        <ul className="mt-8 space-y-3">
          {r.bullets.map((b) => (
            <li key={b.label} className="flex items-start gap-3">
              <span
                className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg"
                style={{ background: `${CORAL}1a` }}
              >
                <b.icon className="h-4 w-4" style={{ color: CORAL }} />
              </span>
              <span className="text-sm leading-relaxed text-slate-700">{b.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>{r.visual}</div>
    </div>
  );
}

/* ---------------- Z-PATTERN VISUALS ---------------- */

function ChannelsVisual() {
  const types = [
    { icon: Sparkles, label: "Short Code to Win" },
    { icon: Gift, label: "Polls" },
    { icon: Ticket, label: "Vote" },
    { icon: ClipboardList, label: "Surveys" },
    { icon: Trophy, label: "Quizzes" },
    { icon: Dice5, label: "Raffle Draws & Lucky Dips" },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] sm:p-8">
      <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
        Campaign & Engagement Types
      </div>
      <ul className="mt-5 grid grid-cols-2 gap-3">
        {types.map((t) => (
          <li
            key={t.label}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 transition-colors hover:border-slate-300"
          >
            <span
              className="grid h-9 w-9 place-items-center rounded-lg"
              style={{ background: LIME }}
            >
              <t.icon className="h-4 w-4 text-slate-900" />
            </span>
            <span className="text-sm font-semibold text-slate-800">{t.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UseCasesVisual() {
  const cases = [
    { icon: MapPin, title: "Location-Based", tint: LIME },
    { icon: CreditCard, title: "Transaction-Based", tint: CORAL },
    { icon: Target, title: "Segment-Based", tint: "#1a1a1a" },
  ];
  return (
    <div className="space-y-3">
      {cases.map((c) => (
        <div
          key={c.title}
          className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <span
            className="grid h-12 w-12 shrink-0 place-items-center rounded-xl"
            style={{ background: c.tint }}
          >
            <c.icon
              className="h-6 w-6"
              style={{ color: c.tint === "#1a1a1a" ? "#fff" : "#1a1a1a" }}
            />
          </span>
          <div>
            <div className="text-base font-bold text-slate-900">{c.title}</div>
            <div className="text-xs uppercase tracking-widest text-slate-500">
              Campaign mechanic
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PortfolioVisual() {
  const cases = [
    { brand: "Ribena", stat: "N100K", label: "Scholarships awarded" },
    { brand: "Rema Live", stat: "42K+", label: "QR scans processed" },
    { brand: "Guinness", stat: "100%", label: "Guaranteed airtime" },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] sm:p-8">
      <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
        Case study impact
      </div>
      <div className="mt-5 space-y-3">
        {cases.map((c) => (
          <div
            key={c.brand}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4"
          >
            <div>
              <div className="text-sm font-bold text-slate-900">{c.brand}</div>
              <div className="text-xs text-slate-500">{c.label}</div>
            </div>
            <div className="text-3xl font-bold tracking-tight" style={{ color: CORAL }}>
              {c.stat}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-2 border-t border-dashed border-slate-200 pt-4">
        <span
          className="grid h-6 w-6 place-items-center rounded-full"
          style={{ background: LIME }}
        >
          <CheckCircle2 className="h-3.5 w-3.5 text-slate-900" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">
          Verified deployments · 2019 – 2026
        </span>
      </div>
    </div>
  );
}

/* ---------------- BOTTOM CTA ---------------- */

function BottomCTA() {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to launch a fraud-proof, Gen-AI powered campaign?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
          Talk to the E-Redeem team about your next consumer engagement, reward or loyalty programme.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold text-slate-900 shadow-lg transition-all hover:brightness-110"
            style={{ background: LIME }}
          >
            Launch a Campaign
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:abamgbala@excitepanacea.com"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Email the team
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span
                className="grid h-8 w-8 place-items-center rounded-md font-black text-white"
                style={{ background: CORAL }}
              >
                E
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900">Excite</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              E-Redeem is Excite Panacea's Gen-AI powered consumer engagement and loyalty platform.
            </p>
            <div className="mt-5 flex gap-2">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-900">
              Platform
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li><a href="#features" className="hover:text-slate-900">Features</a></li>
              <li><a href="#use-cases" className="hover:text-slate-900">Use Cases</a></li>
              <li><a href="#portfolio" className="hover:text-slate-900">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-900">
              Contact
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: CORAL }} />
                <span>
                  2 Pade Odanye Close, Harmony Enclave Estate, Adeniyi Jones, Ikeja, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" style={{ color: CORAL }} />
                <a href="tel:+2347056592645" className="hover:text-slate-900">
                  +234 705 659 2645
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" style={{ color: CORAL }} />
                <a
                  href="mailto:abamgbala@excitepanacea.com"
                  className="hover:text-slate-900"
                >
                  abamgbala@excitepanacea.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 shrink-0" style={{ color: CORAL }} />
                <a
                  href="https://www.excitepanacea.com"
                  className="hover:text-slate-900"
                >
                  www.excitepanacea.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-900">
              Legal
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900">Terms of Service</a></li>
              <li><a href="#" className="hover:text-slate-900">Data Processing</a></li>
              <li><a href="#" className="hover:text-slate-900">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Excite Panacea. All rights reserved.</span>
          <span>E-Redeem™ · Gen-AI Consumer Engagement Platform</span>
        </div>
      </div>
    </footer>
  );
}
