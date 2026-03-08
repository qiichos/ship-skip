import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock,
  Eye,
  Gauge,
  GitBranch,
  Layers,
  MessageSquareQuote,
  MousePointerClick,
  Rocket,
  RotateCcw,
  Shield,
  Sparkles,
  SquareArrowOutUpRight,
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

/* Reusable icon circle */
function IconCircle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 ${className}`}
    >
      {children}
    </div>
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
          <Button variant="secondary" size="sm">
            Get Early Access
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16 text-center">
        <div className="pointer-events-none absolute top-1/4 -z-10 h-[500px] w-[800px] rounded-full bg-indigo-500/5 blur-[120px]" />

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

        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-zinc-50 sm:text-5xl lg:text-7xl">
          Win by shipping less.
          <br />
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
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
            className="h-12 gap-2 rounded-full bg-indigo-600 px-8 text-base font-medium text-white hover:bg-indigo-500"
          >
            Get Early Access
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 rounded-full border-zinc-700 px-8 text-base font-medium text-zinc-300 hover:bg-zinc-800"
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

          {/* Timeline visual */}
          <div className="mx-auto flex max-w-lg items-center justify-between">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-950/20">
                <Zap className="h-6 w-6 text-emerald-400" />
              </div>
              <span className="text-xs font-medium text-emerald-400">
                Build
              </span>
              <span className="text-[10px] text-zinc-600">Hours</span>
            </div>
            <div className="mb-6 h-px flex-1 bg-gradient-to-r from-emerald-800 via-zinc-700 to-red-800" />
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-950/20">
                <Clock className="h-6 w-6 text-amber-400" />
              </div>
              <span className="text-xs font-medium text-amber-400">Wait</span>
              <span className="text-[10px] text-zinc-600">Weeks</span>
            </div>
            <div className="mb-6 h-px flex-1 bg-gradient-to-r from-amber-800 via-zinc-700 to-red-800" />
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/30 bg-red-950/20">
                <TrendingDown className="h-6 w-6 text-red-400" />
              </div>
              <span className="text-xs font-medium text-red-400">Damage</span>
              <span className="text-[10px] text-zinc-600">Months</span>
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
              },
              {
                icon: Brain,
                label: "Cognitive load",
                desc: "Forces users to think harder",
                color: "text-orange-400",
                border: "border-orange-500/20",
              },
              {
                icon: Eye,
                label: "Lost focus",
                desc: "Blurs what makes you great",
                color: "text-amber-400",
                border: "border-amber-500/20",
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex flex-col items-center gap-3 rounded-xl border ${item.border} bg-zinc-900/50 p-6`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/80">
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
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
                    <Shield className="h-5 w-5 text-zinc-500" />
                  </div>
                  <h3 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase">
                    Traditional QA
                  </h3>
                </div>
                <ul className="space-y-2 text-left text-sm text-zinc-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-zinc-700" />
                    Find bugs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-zinc-700" />
                    Match the spec
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-zinc-700" />
                    Don&apos;t break things
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-indigo-500/30 bg-indigo-950/20">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-900/50">
                    <Sparkles className="h-5 w-5 text-indigo-400" />
                  </div>
                  <h3 className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">
                    Feature QA
                  </h3>
                </div>
                <ul className="space-y-2 text-left text-sm text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                    Do users need this?
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                    Does it feel right?
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-400" />
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
              <div key={item.step} className="flex flex-col items-center gap-4">
                <span className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase">
                  Step {item.step}
                </span>
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${item.border} bg-zinc-900`}
                >
                  <item.icon className={`h-7 w-7 ${item.color}`} />
                </div>
                <p className={`text-base font-semibold ${item.color}`}>
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-md text-base font-medium text-zinc-400">
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

          <Card className="mx-auto max-w-md border-zinc-800 bg-zinc-900/70">
            <CardContent className="p-6 text-left">
              {/* Score header */}
              <div className="mb-5 flex items-center gap-4">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <svg className="h-16 w-16 -rotate-90" viewBox="0 0 64 64">
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
              <Card key={item.label} className={`${item.border} ${item.bg}`}>
                <CardContent className="flex flex-col items-center gap-3 p-6">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg}`}
                  >
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <p className={`text-xl font-bold ${item.color}`}>
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
                className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 text-left"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.bg}`}
                >
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <div>
                  <p className="font-medium text-zinc-200">{item.title}</p>
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
