import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  MessageSquareQuote,
  Shield,
  Timer,
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
          <span className="text-lg font-bold tracking-tight">ShipSkip</span>
          <Button variant="secondary" size="sm">
            Get Early Access
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16 text-center">
        <div className="pointer-events-none absolute top-1/4 -z-10 h-[500px] w-[800px] rounded-full bg-indigo-500/5 blur-[120px]" />

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

      {/* Problem */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            Building is instant.
            <br />
            Knowing what to ship still takes months.
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-400">
            You ship, wait for data, and hope. By then, the wrong feature has
            already made your product worse.
          </p>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/60" />

      {/* Core Insight */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>The Hidden Cost</SectionLabel>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            The wrong feature doesn&apos;t crash your app.
            <br />
            It erodes your product.
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-400">
            More clutter. More cognitive load. Less clarity. Bug-free code can
            still destroy the experience.
          </p>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/60" />

      {/* What is ShipSkip */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Feature QA</SectionLabel>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            QA that asks &ldquo;should it ship?&rdquo;
            <br />
            Not just &ldquo;does it work?&rdquo;
          </h2>

          <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                  Traditional QA
                </h3>
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
                <h3 className="mb-3 text-xs font-semibold tracking-wider text-indigo-400 uppercase">
                  Feature QA
                </h3>
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

      {/* How it works */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            AI users that think like yours.
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-400">
            Trained on your interviews, feedback, analytics, and session
            data&mdash;then set loose on your real UI to evaluate new features
            firsthand.
          </p>
          <p className="mt-6 text-lg font-medium text-indigo-400">
            Not generic AI opinions. Your users&apos; instincts.
          </p>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/60" />

      {/* Output */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>The Output</SectionLabel>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            A score. A verdict. Real voices.
          </h2>

          <Card className="mx-auto mt-10 max-w-md border-zinc-800 bg-zinc-900/70">
            <CardContent className="p-6 text-left">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-medium tracking-wider text-zinc-500 uppercase">
                  Feature Score
                </span>
                <span className="text-3xl font-bold text-amber-400">78%</span>
              </div>
              <Separator className="mb-4 bg-zinc-800" />
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

      {/* Decision */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>The Decision</SectionLabel>
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            Ship it. Improve it. Kill it.
          </h2>

          <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              {
                label: "Ship",
                desc: "Clear value. Go.",
                color: "text-emerald-400",
                border: "border-emerald-500/20",
                bg: "bg-emerald-950/10",
              },
              {
                label: "Iterate",
                desc: "Not there yet. Refine.",
                color: "text-amber-400",
                border: "border-amber-500/20",
                bg: "bg-amber-950/10",
              },
              {
                label: "Skip",
                desc: "More noise than signal.",
                color: "text-red-400",
                border: "border-red-500/20",
                bg: "bg-red-950/10",
              },
            ].map((item) => (
              <Card key={item.label} className={`${item.border} ${item.bg}`}>
                <CardContent className="p-5 text-center">
                  <p className={`mb-1 text-xl font-bold ${item.color}`}>
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
              },
              {
                icon: Brain,
                title: "Your users' lens",
                desc: "AI trained on your data, not guesswork.",
              },
              {
                icon: Zap,
                title: "Guard simplicity",
                desc: "Stop feature creep before it starts.",
              },
              {
                icon: Timer,
                title: "Days, not quarters",
                desc: "Signal before launch, not months after.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 text-left"
              >
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
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
          <span>&copy; 2026 ShipSkip</span>
          <span>Feature QA for the AI era.</span>
        </div>
      </footer>
    </div>
  );
}
