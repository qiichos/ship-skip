import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  CircleHelp,
  Clock,
  Code,
  Eye,
  FileSearch,
  FileText,
  Gauge,
  GitBranch,
  Layers,
  MessageSquareQuote,
  MousePointerClick,
  Rocket,
  RotateCcw,
  Shield,
  Sparkles,
  Timer,
  TrendingDown,
  Users,
  X,
  Zap,
} from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Badge
      variant="outline"
      className="mb-6 rounded-full border-zinc-700 px-4 py-1.5 text-xs font-medium tracking-wider text-zinc-400 uppercase"
    >
      {children}
    </Badge>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800/60 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">ShipSkip</span>
          </div>
          <Button variant="secondary" size="sm" render={<Link href="/evaluate" />}>
            Get Early Access
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16 text-center">
        <div className="pointer-events-none absolute top-1/4 -z-10 h-[500px] w-[800px] rounded-full bg-indigo-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute left-1/4 top-1/2 -z-10 h-[400px] w-[600px] -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

        {/* Hero visual: animated-like flow diagram */}
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900">
            <GitBranch className="h-6 w-6 text-zinc-400" />
          </div>
          <div className="h-px w-8 bg-zinc-700" />
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/40 bg-indigo-950/40">
            <Sparkles className="h-6 w-6 text-indigo-400" />
          </div>
          <div className="h-px w-8 bg-zinc-700" />
          <div className="flex flex-col gap-1.5">
            <div className="flex h-8 items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-3 text-xs font-medium text-emerald-400">
              <Rocket className="h-3 w-3" /> Ship
            </div>
            <div className="flex h-8 items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/20 px-3 text-xs font-medium text-amber-400">
              <RotateCcw className="h-3 w-3" /> Iterate
            </div>
            <div className="flex h-8 items-center gap-1.5 rounded-full border border-red-500/30 bg-red-950/20 px-3 text-xs font-medium text-red-400">
              <X className="h-3 w-3" /> Skip
            </div>
          </div>
        </div>

        <SectionLabel>Feature QA for the AI Era</SectionLabel>

        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tighter text-zinc-50 sm:text-6xl lg:text-7xl">
          Win by shipping less.
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Not more.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
          AI lets you build anything. ShipSkip tells you what&apos;s actually
          worth shipping&mdash;before it hits production.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="h-12 gap-2 rounded-full bg-indigo-600 px-8 text-base font-medium text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:bg-indigo-500 hover:shadow-indigo-500/40 hover:ring-2 hover:ring-indigo-500/50 hover:ring-offset-2 hover:ring-offset-background"
            render={<Link href="/evaluate" />}
          >
            Get Early Access
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 rounded-full border-zinc-700 bg-zinc-900/50 px-8 text-base font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-800 hover:text-white"
          >
            See How It Works
          </Button>
        </div>
      </section>

      {/* Problem — with visual timeline */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            Building is instant.
            <br />
            Knowing what to ship still takes months.
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-zinc-400">
            You ship, wait for data, and hope. By then, the wrong feature has
            already made your product worse.
          </p>

          {/* Pipeline visual */}
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-between">
              {[
                { icon: FileSearch, label: "Discovery", sub: "Days", color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-950/20" },
                { icon: FileText, label: "Spec", sub: "Days", color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-950/20" },
                { icon: Code, label: "Build", sub: "Hours", color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-950/20" },
                { icon: Clock, label: "Wait", sub: "Weeks", color: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-950/20" },
                { icon: CircleHelp, label: "Success?", sub: "Months", color: "text-red-400", border: "border-red-500/30", bg: "bg-red-950/20" },
              ].map((step, i, arr) => (
                <div key={step.label} className="flex items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${step.border} ${step.bg}`}>
                      <step.icon className={`h-5 w-5 ${step.color}`} />
                    </div>
                    <span className={`text-[11px] font-medium ${step.color}`}>{step.label}</span>
                    <span className="text-[10px] text-zinc-600">{step.sub}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className={`mx-2 mb-6 h-px w-6 sm:w-10 ${i < 2 ? "bg-emerald-800/60" : i === 2 ? "bg-gradient-to-r from-emerald-800/60 to-amber-800/60" : "bg-gradient-to-r from-amber-800/60 to-red-800/60"}`} />
                  )}
                </div>
              ))}
            </div>
            {/* Fast / Slow labels */}
            <div className="mt-4 flex justify-between">
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/15 bg-emerald-950/10 px-3 py-1">
                <Zap className="h-3 w-3 text-emerald-400" />
                <span className="text-[10px] font-medium text-emerald-400">Fast with AI</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-red-500/15 bg-red-950/10 px-3 py-1">
                <Clock className="h-3 w-3 text-red-400" />
                <span className="text-[10px] font-medium text-red-400">Still slow &amp; risky</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/60" />

      {/* Core Insight — with impact icons */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>The Hidden Cost</SectionLabel>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            The wrong feature doesn&apos;t crash your app.
            <br />
            It erodes your product.
          </h2>

          <div className="mx-auto mt-12 grid max-w-2xl gap-5 sm:grid-cols-3">
            {[
              {
                icon: Layers,
                label: "Clutter",
                desc: "More screens, more noise",
                color: "text-red-400",
                border: "border-red-500/20",
                shadow: "hover:shadow-red-500/10",
              },
              {
                icon: Brain,
                label: "Cognitive load",
                desc: "Forces users to think harder",
                color: "text-orange-400",
                border: "border-orange-500/20",
                shadow: "hover:shadow-orange-500/10",
              },
              {
                icon: Eye,
                label: "Lost focus",
                desc: "Blurs what makes you great",
                color: "text-amber-400",
                border: "border-amber-500/20",
                shadow: "hover:shadow-amber-500/10",
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`group flex flex-col items-center gap-3 rounded-2xl border ${item.border} bg-zinc-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900/60 hover:shadow-xl ${item.shadow}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/80 transition-transform duration-300 group-hover:scale-110">
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <p className={`text-sm font-semibold ${item.color}`}>
                  {item.label}
                </p>
                <p className="text-xs text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/60" />

      {/* Feature QA definition */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Feature QA</SectionLabel>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            QA that asks &ldquo;should it ship?&rdquo;
            <br />
            Not just &ldquo;does it work?&rdquo;
          </h2>

          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            <Card className="group relative overflow-hidden border-white/5 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700/50 hover:shadow-xl hover:shadow-black/50">
              <div className="pointer-events-none absolute -inset-px rounded-xl border border-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800/80 transition-transform duration-300 group-hover:scale-110">
                    <Shield className="h-5 w-5 text-zinc-500 group-hover:text-zinc-400" />
                  </div>
                  <h3 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase transition-colors duration-300 group-hover:text-zinc-400">
                    Traditional QA
                  </h3>
                </div>
                <ul className="space-y-2 text-left text-sm text-zinc-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-zinc-700 transition-colors duration-300 group-hover:text-zinc-500" />
                    Find bugs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-zinc-700 transition-colors duration-300 group-hover:text-zinc-500" />
                    Match the spec
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-zinc-700 transition-colors duration-300 group-hover:text-zinc-500" />
                    Don&apos;t break things
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-indigo-500/20 bg-indigo-950/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10">
              <div className="pointer-events-none absolute -inset-px rounded-xl border border-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/[0.05] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-900/50 transition-transform duration-300 group-hover:scale-110 group-hover:bg-indigo-900/70">
                    <Sparkles className="h-5 w-5 text-indigo-400" />
                  </div>
                  <h3 className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">
                    Feature QA
                  </h3>
                </div>
                <ul className="space-y-2 text-left text-sm text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-400 transition-transform duration-300 group-hover:scale-110" />
                    Do users need this?
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-400 transition-transform duration-300 group-hover:scale-110" />
                    Does it feel right?
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-400 transition-transform duration-300 group-hover:scale-110" />
                    Is the product better with it?
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/60" />

      {/* How it works — step visual */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            AI users that think like yours.
          </h2>

          <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                icon: Users,
                title: "Learn",
                desc: "Trained on your interviews, feedback, analytics & sessions",
                color: "text-indigo-400",
                border: "border-indigo-500/20",
              },
              {
                step: "02",
                icon: MousePointerClick,
                title: "Test",
                desc: "AI users navigate your real UI like actual customers",
                color: "text-violet-400",
                border: "border-violet-500/20",
              },
              {
                step: "03",
                icon: Gauge,
                title: "Judge",
                desc: "Score every feature and explain why in their own words",
                color: "text-fuchsia-400",
                border: "border-fuchsia-500/20",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase transition-colors duration-300 group-hover:text-zinc-400">
                  Step {item.step}
                </span>
                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl border ${item.border} bg-zinc-900/80 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                >
                  <div
                    className={`absolute inset-0 -z-10 rounded-2xl bg-current opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-20 ${item.color}`}
                  />
                  <item.icon className={`h-7 w-7 ${item.color}`} />
                </div>
                <p
                  className={`text-base font-semibold transition-transform duration-300 group-hover:scale-105 ${item.color}`}
                >
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Integration logos */}
          <div className="mx-auto mt-16 max-w-2xl">
            <p className="mb-6 text-xs font-medium tracking-wider text-zinc-600 uppercase">
              Connects with your existing data
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { src: "/connection-logos/ga4.webp", alt: "Google Analytics 4", w: 40, h: 40 },
                { src: "/connection-logos/clarity.png", alt: "Microsoft Clarity", w: 40, h: 40 },
                { src: "/connection-logos/posthog.webp", alt: "PostHog", w: 40, h: 40 },
                { src: "/connection-logos/amplitude.png", alt: "Amplitude", w: 40, h: 40 },
                { src: "/connection-logos/statsig.png", alt: "Statsig", w: 40, h: 40 },
              ].map((logo) => (
                <div
                  key={logo.alt}
                  className="group flex h-16 w-16 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 p-2 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-800/80"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.w}
                    height={logo.h}
                    className="opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-zinc-600">
              Google Analytics 4 &middot; Microsoft Clarity &middot; PostHog &middot; Amplitude &middot; Statsig &middot; and more
            </p>
          </div>

          <p className="mx-auto mt-10 max-w-md text-base font-medium text-zinc-400">
            Not generic AI opinions.{" "}
            <span className="text-indigo-400">Your users&apos; instincts.</span>
          </p>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/60" />

      {/* Output — score card */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>The Output</SectionLabel>
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            A score. A verdict. Real voices.
          </h2>

          <Card className="group mx-auto max-w-md overflow-hidden border-white/5 bg-zinc-900/50 backdrop-blur-xl transition-all duration-300 hover:border-zinc-700/50 hover:shadow-2xl hover:shadow-black/50">
            <CardContent className="p-6 text-left">
              {/* Score header */}
              <div className="mb-5 flex items-center gap-4">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <svg className="h-16 w-16 -rotate-90" viewBox="0 0 64 64" role="img" aria-label="Score: 78">
                    <title>Feature Score</title>
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-zinc-800"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeDasharray={`${0.78 * 175.9} ${175.9}`}
                      strokeLinecap="round"
                      className="text-amber-400"
                    />
                  </svg>
                  <span className="absolute text-lg font-bold text-amber-400">
                    78
                  </span>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-zinc-500 uppercase">
                    Feature Score
                  </p>
                  <p className="text-sm text-amber-400/80">Iterate</p>
                </div>
              </div>

              <Separator className="mb-4 bg-zinc-800" />

              {/* Voices */}
              <div className="space-y-3">
                {[
                  "I get what this does, but how is it different from what\u2019s already there?",
                  "Might help power users. For most of us, it\u2019s just noise.",
                  "Costs more attention than it saves.",
                ].map((quote) => (
                  <div key={quote} className="flex gap-2.5">
                    <MessageSquareQuote className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-600" />
                    <p className="text-sm leading-relaxed text-zinc-400">
                      &ldquo;{quote}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/60" />

      {/* Decision — Ship / Iterate / Skip */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>The Decision</SectionLabel>
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            Ship it. Improve it. Kill it.
          </h2>

          <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              {
                icon: Rocket,
                label: "Ship",
                desc: "Clear value. Go.",
                color: "text-emerald-400",
                iconBg: "bg-emerald-950/30",
                border: "border-emerald-500/20",
                bg: "bg-emerald-950/10",
              },
              {
                icon: RotateCcw,
                label: "Iterate",
                desc: "Not there yet. Refine.",
                color: "text-amber-400",
                iconBg: "bg-amber-950/30",
                border: "border-amber-500/20",
                bg: "bg-amber-950/10",
              },
              {
                icon: X,
                label: "Skip",
                desc: "More noise than signal.",
                color: "text-red-400",
                iconBg: "bg-red-950/30",
                border: "border-red-500/20",
                bg: "bg-red-950/10",
              },
            ].map((item) => (
              <Card
                key={item.label}
                className={`group relative overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${item.border} ${item.bg}`}
              >
                <div className="pointer-events-none absolute -inset-px rounded-xl border border-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardContent className="flex flex-col items-center gap-3 p-6">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}
                  >
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <p
                    className={`text-xl font-bold transition-transform duration-300 group-hover:scale-105 ${item.color}`}
                  >
                    {item.label}
                  </p>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/60" />

      {/* Benefits */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Why ShipSkip</SectionLabel>
          <div className="mx-auto mt-4 grid max-w-3xl gap-5 sm:grid-cols-2">
            {[
              {
                icon: Shield,
                title: "Kill bad features early",
                desc: "Before they reach production.",
                color: "text-emerald-400",
                bg: "bg-emerald-950/20",
              },
              {
                icon: Brain,
                title: "Your users\u2019 lens",
                desc: "AI trained on your data, not guesswork.",
                color: "text-indigo-400",
                bg: "bg-indigo-950/20",
              },
              {
                icon: Zap,
                title: "Guard simplicity",
                desc: "Stop feature creep before it starts.",
                color: "text-violet-400",
                bg: "bg-violet-950/20",
              },
              {
                icon: Timer,
                title: "Days, not quarters",
                desc: "Signal before launch, not months after.",
                color: "text-amber-400",
                bg: "bg-amber-950/20",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative flex gap-4 overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/40 p-5 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900/60 hover:shadow-lg hover:shadow-black/50 hover:border-white/10"
              >
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 ${item.bg}`}
                >
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <div>
                  <p className="font-medium text-zinc-200 transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </p>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/60" />

      {/* Closing CTA */}
      <section className="relative px-6 py-32">
        <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[100px]" />
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-500/30 bg-indigo-950/30">
              <Sparkles className="h-8 w-8 text-indigo-400" />
            </div>
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            The best products win
            <br />
            by what they leave out.
          </h2>

          <Button
            size="lg"
            className="mt-4 h-14 gap-2 rounded-full bg-indigo-600 px-10 text-lg font-medium text-white hover:bg-indigo-500"
            render={<Link href="/evaluate" />}
          >
            Get Early Access
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 px-6 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-sm text-zinc-600">
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-indigo-600">
              <Sparkles className="h-3 w-3 text-white" />
            </div>
            <span>&copy; 2026 ShipSkip</span>
          </div>
          <span>Feature QA for the AI era.</span>
        </div>
      </footer>
    </div>
  );
}
