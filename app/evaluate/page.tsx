"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { FaRocketchat } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Loader2,
  MessageSquareQuote,
  Play,
  Rocket,
  RotateCcw,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  X,
} from "lucide-react";

import {
  AGENT_LIVE_COMMENTS,
  AGENT_RESULTS,
  PERSONAS,
  computeReport,
  type AgentComment,
  type Persona,
} from "./mock-data";

type Phase = "setup" | "running" | "report";

type AgentStatus = "idle" | "running" | "done";

type AgentState = {
  persona: Persona;
  status: AgentStatus;
  progress: number;
  liveComments: AgentComment[];
};

// Completion delays per agent (staggered, in ms from start)
const COMPLETION_DELAYS: Record<string, number> = {
  alex: 7000,
  sarah: 8500,
  kenji: 9500,
  maria: 10500,
  james: 11500,
  linda: 12500,
};

export default function EvaluatePage() {
  const [url, setUrl] = useState("");
  const [personas, setPersonas] = useState(PERSONAS);
  const [phase, setPhase] = useState<Phase>("setup");
  const [agents, setAgents] = useState<Record<string, AgentState>>({});
  const [elapsed, setElapsed] = useState(0);
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const enabledPersonas = useMemo(
    () => personas.filter((p) => p.enabled),
    [personas],
  );

  const togglePersona = (id: string) => {
    setPersonas((prev) =>
      prev.map((p) => (p.id === id ? { ...p, enabled: !p.enabled } : p)),
    );
  };

  const cleanup = useCallback(() => {
    for (const t of timersRef.current) clearTimeout(t);
    timersRef.current = [];
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const startEvaluation = () => {
    if (!url.trim() || enabledPersonas.length === 0) return;

    // Initialize agent states
    const initial: Record<string, AgentState> = {};
    for (const p of enabledPersonas) {
      initial[p.id] = {
        persona: p,
        status: "running",
        progress: 0,
        liveComments: [],
      };
    }
    setAgents(initial);
    setPhase("running");
    setElapsed(0);

    const startTime = Date.now();

    // Elapsed timer
    intervalRef.current = setInterval(() => {
      setElapsed(Date.now() - startTime);
    }, 100);

    // Schedule live comments
    for (const p of enabledPersonas) {
      const comments = AGENT_LIVE_COMMENTS[p.id] || [];
      for (const comment of comments) {
        const t = setTimeout(() => {
          setAgents((prev) => {
            const agent = prev[p.id];
            if (!agent || agent.status === "done") return prev;
            return {
              ...prev,
              [p.id]: {
                ...agent,
                liveComments: [...agent.liveComments, comment],
              },
            };
          });
        }, comment.timestamp);
        timersRef.current.push(t);
      }
    }

    // Schedule progress updates (every 500ms)
    for (let i = 1; i <= 26; i++) {
      const t = setTimeout(() => {
        setAgents((prev) => {
          const next = { ...prev };
          for (const p of enabledPersonas) {
            const agent = next[p.id];
            if (agent && agent.status === "running") {
              const completionTime = COMPLETION_DELAYS[p.id] || 10000;
              const progress = Math.min(
                95,
                ((i * 500) / completionTime) * 100,
              );
              next[p.id] = { ...agent, progress };
            }
          }
          return next;
        });
      }, i * 500);
      timersRef.current.push(t);
    }

    // Schedule completions
    for (const p of enabledPersonas) {
      const delay = COMPLETION_DELAYS[p.id] || 10000;
      const t = setTimeout(() => {
        setAgents((prev) => {
          const agent = prev[p.id];
          if (!agent) return prev;
          return {
            ...prev,
            [p.id]: { ...agent, status: "done", progress: 100 },
          };
        });
      }, delay);
      timersRef.current.push(t);
    }

    // Check all done periodically
    const checkDone = setInterval(() => {
      setAgents((prev) => {
        const allDone = Object.values(prev).every((a) => a.status === "done");
        if (allDone) {
          clearInterval(checkDone);
          if (intervalRef.current) clearInterval(intervalRef.current);
          // Small delay before showing report
          setTimeout(() => setPhase("report"), 800);
        }
        return prev;
      });
    }, 500);
    timersRef.current.push(checkDone as unknown as ReturnType<typeof setTimeout>);
  };

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  const completedCount = Object.values(agents).filter(
    (a) => a.status === "done",
  ).length;
  const totalAgents = Object.keys(agents).length;

  // Live aggregate during running
  const liveResults = useMemo(() => {
    const doneAgents = Object.values(agents).filter(
      (a) => a.status === "done",
    );
    if (doneAgents.length === 0) return null;

    const results = AGENT_RESULTS.filter((r) =>
      doneAgents.some((a) => a.persona.id === r.personaId),
    );
    return computeReport(results);
  }, [agents]);

  const finalReport = useMemo(() => {
    const enabledResults = AGENT_RESULTS.filter((r) =>
      enabledPersonas.some((p) => p.id === r.personaId),
    );
    return computeReport(enabledResults);
  }, [enabledPersonas]);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-[20%] left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800/60 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600">
                <FaRocketchat className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">ShipSkip</span>
            </Link>
            <span className="text-sm text-zinc-600">/</span>
            <span className="text-sm text-zinc-400">Evaluate</span>
          </div>
          {phase !== "setup" && (
            <Badge
              variant="outline"
              className="border-zinc-700 text-xs text-zinc-400"
            >
              {phase === "running"
                ? `${completedCount}/${totalAgents} complete`
                : "Report ready"}
            </Badge>
          )}
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 pt-28 pb-20">
        {/* ============ SETUP PHASE ============ */}
        {phase === "setup" && (
          <div className="mx-auto max-w-2xl">
            <Button
              variant="ghost"
              size="sm"
              className="mb-6 gap-1 text-zinc-500 hover:text-zinc-300"
              render={<Link href="/" />}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>

            <h1 className="mb-2 text-3xl font-extrabold tracking-tighter text-zinc-100">
              Evaluate a feature
            </h1>
            <p className="mb-10 text-base text-zinc-500">
              Enter the URL of your new feature and select which AI user
              personas to test with.
            </p>

            {/* URL Input */}
            <div className="mb-8">
              <label
                htmlFor="url"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Feature URL
              </label>
              <div className="group flex flex-col sm:flex-row gap-3">
                <Input
                  id="url"
                  placeholder="https://your-app.com/new-feature"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="h-12 border-zinc-800 bg-zinc-900/40 text-base text-zinc-100 placeholder:text-zinc-600 transition-colors focus:border-indigo-500/50 focus:bg-zinc-900/60"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-full sm:w-12 shrink-0 border-zinc-800 bg-zinc-900/40 transition-colors group-hover:border-indigo-500/20 group-hover:bg-zinc-900/60"
                  disabled={!url.trim()}
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Persona Selection */}
            <div className="mb-10">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-medium text-zinc-300">
                  AI User Personas
                </h2>
                <span className="text-xs text-zinc-600">
                  {enabledPersonas.length} of {personas.length} active
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {personas.map((persona) => (
                  <Card
                    key={persona.id}
                    className={`cursor-pointer transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5 hover:shadow-lg ${
                      persona.enabled
                        ? "border-indigo-500/30 bg-indigo-500/5 shadow-indigo-500/10 hover:border-indigo-400/50"
                        : "border-zinc-800/40 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700/50"
                    }`}
                    onClick={() => togglePersona(persona.id)}
                  >
                    <CardContent className="flex items-center gap-4 p-4">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-sm font-bold ${persona.color}`}
                      >
                        {persona.avatar}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-zinc-200">
                            {persona.name}
                          </span>
                          <Badge
                            variant="outline"
                            className={`border-zinc-700 text-[10px] ${persona.color}`}
                          >
                            {persona.label}
                          </Badge>
                        </div>
                        <p className="mt-0.5 truncate text-xs text-zinc-500">
                          {persona.role}
                        </p>
                      </div>
                      <Switch
                        checked={persona.enabled}
                        onCheckedChange={() => togglePersona(persona.id)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Start Button */}
            <Button
              size="lg"
              className="h-14 w-full gap-2 rounded-xl bg-indigo-600 text-base font-medium text-white shadow-[0_0_20px_rgba(79,70,229,0.2)] transition-all hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] disabled:shadow-none"
              disabled={!url.trim() || enabledPersonas.length === 0}
              onClick={startEvaluation}
            >
              <Play className="h-4 w-4" />
              Start Evaluation
              <span className="text-indigo-300">
                ({enabledPersonas.length} agents)
              </span>
            </Button>
          </div>
        )}

        {/* ============ RUNNING PHASE ============ */}
        {phase === "running" && (
          <div>
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-zinc-100">
                Evaluating...
              </h1>
              <p className="text-sm text-zinc-500">
                {completedCount}/{totalAgents} agents complete &middot;{" "}
                {(elapsed / 1000).toFixed(1)}s
              </p>
              <Progress
                value={(completedCount / totalAgents) * 100}
                className="mx-auto mt-4 h-1.5 max-w-md bg-zinc-800 [&>div]:bg-indigo-500"
              />
            </div>

            {/* Agent Cards */}
            <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Object.values(agents).map(({ persona, status, progress, liveComments }) => (
                <Card
                  key={persona.id}
                  className={`border transition-all duration-300 backdrop-blur-md ${
                    status === "done"
                      ? "border-emerald-500/30 bg-emerald-950/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                      : "border-indigo-500/20 bg-zinc-900/40 shadow-[0_0_20px_rgba(79,70,229,0.05)]"
                  }`}
                >
                  <CardContent className="p-4">
                    {/* Header */}
                    <div className="mb-3 flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold ${persona.color}`}
                      >
                        {persona.avatar}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-zinc-200">
                          {persona.name}
                        </p>
                        <p className="text-[10px] text-zinc-600">
                          {persona.label}
                        </p>
                      </div>
                      {status === "running" ? (
                        <Loader2 className="h-4 w-4 animate-spin text-indigo-400" />
                      ) : (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      )}
                    </div>

                    {/* Progress */}
                    <Progress
                      value={progress}
                      className={`mb-3 h-1 bg-zinc-800 ${
                        status === "done"
                          ? "[&>div]:bg-emerald-500"
                          : "[&>div]:bg-indigo-500"
                      }`}
                    />

                    {/* Live comment stream */}
                    <div className="h-16 space-y-1 overflow-hidden">
                      {liveComments.slice(-2).map((c, i) => (
                        <p
                          key={`${persona.id}-${i}`}
                          className={`text-xs leading-relaxed ${
                            c.sentiment === "positive"
                              ? "text-emerald-400/70"
                              : c.sentiment === "negative"
                                ? "text-red-400/70"
                                : "text-zinc-500"
                          }`}
                        >
                          &ldquo;{c.text}&rdquo;
                        </p>
                      ))}
                      {liveComments.length === 0 && status === "running" && (
                        <p className="text-xs text-zinc-600">
                          Starting evaluation...
                        </p>
                      )}
                      {status === "done" && (
                        <p className="text-xs font-medium text-emerald-400">
                          Evaluation complete
                        </p>
                      )}
                    </div>

                    {/* Show result preview when done */}
                    {status === "done" && (() => {
                      const result = AGENT_RESULTS.find(
                        (r) => r.personaId === persona.id,
                      );
                      if (!result) return null;
                      return (
                        <div className="mt-2 flex items-center justify-between rounded-md bg-zinc-800/50 px-3 py-2">
                          <span className="text-xs text-zinc-500">Score</span>
                          <span
                            className={`text-sm font-bold ${
                              result.verdict === "ship"
                                ? "text-emerald-400"
                                : result.verdict === "iterate"
                                  ? "text-amber-400"
                                  : "text-red-400"
                            }`}
                          >
                            {result.score}%
                          </span>
                        </div>
                      );
                    })()}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Live metrics panel */}
            <Card className="border-indigo-500/20 bg-zinc-900/40 backdrop-blur-md shadow-lg shadow-indigo-500/5 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
              <CardContent className="p-6">
                <h3 className="mb-4 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                  Live Evaluation Feed
                </h3>

                {liveResults ? (
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div>
                      <p className="text-xs text-zinc-600">Avg. Score</p>
                      <p className="text-2xl font-bold text-zinc-100">
                        {liveResults.avgScore}%
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-600">Verdicts so far</p>
                      <div className="mt-1 flex gap-2">
                        {liveResults.shipCount > 0 && (
                          <Badge className="bg-emerald-950/30 text-emerald-400 border-emerald-500/20">
                            Ship {liveResults.shipCount}
                          </Badge>
                        )}
                        {liveResults.iterateCount > 0 && (
                          <Badge className="bg-amber-950/30 text-amber-400 border-amber-500/20">
                            Iterate {liveResults.iterateCount}
                          </Badge>
                        )}
                        {liveResults.skipCount > 0 && (
                          <Badge className="bg-red-950/30 text-red-400 border-red-500/20">
                            Skip {liveResults.skipCount}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-600">Latest feedback</p>
                      {(() => {
                        const allComments = Object.values(agents)
                          .flatMap((a) => a.liveComments)
                          .filter((c) => c.sentiment !== "neutral");
                        const latest = allComments[allComments.length - 1];
                        return latest ? (
                          <p
                            className={`mt-1 text-sm ${
                              latest.sentiment === "positive"
                                ? "text-emerald-400/80"
                                : "text-red-400/80"
                            }`}
                          >
                            &ldquo;{latest.text}&rdquo;
                          </p>
                        ) : (
                          <p className="mt-1 text-sm text-zinc-600">
                            Waiting...
                          </p>
                        );
                      })()}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-sm text-zinc-600">
                    <Loader2 className="h-3 w-3 animate-spin" />
                    Agents are evaluating...
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* ============ REPORT PHASE ============ */}
        {phase === "report" && (
          <div>
            {/* Header */}
            <div className="mb-10 text-center">
              <Badge
                variant="outline"
                className="mb-4 border-zinc-700 text-xs text-zinc-400"
              >
                Evaluation Complete
              </Badge>
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-100">
                Feature Report
              </h1>
              <p className="text-sm text-zinc-500">
                {url} &middot; {enabledPersonas.length} agents &middot;{" "}
                {(elapsed / 1000).toFixed(1)}s total
              </p>
            </div>

            {/* Overall Score */}
            <Card className="mx-auto mb-10 max-w-lg border-zinc-800 bg-zinc-900/50">
              <CardContent className="p-8 text-center">
                {/* Score ring */}
                <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center relative">
                  <div className={`absolute inset-0 rounded-full blur-[20px] opacity-20 ${
                    finalReport.overallVerdict === "ship"
                      ? "bg-emerald-500"
                      : finalReport.overallVerdict === "iterate"
                        ? "bg-amber-500"
                        : "bg-red-500"
                  }`} />
                  <svg
                    className="-rotate-90 relative z-10"
                    width="112"
                    height="112"
                    viewBox="0 0 112 112"
                    role="img"
                    aria-label={`Overall score is ${finalReport.avgScore} percent`}
                  >
                    <title>Overall Score</title>
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      className="text-zinc-800"
                    />
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeDasharray={`${(finalReport.avgScore / 100) * 301.6} 301.6`}
                      strokeLinecap="round"
                      className={
                        finalReport.overallVerdict === "ship"
                          ? "text-emerald-400"
                          : finalReport.overallVerdict === "iterate"
                            ? "text-amber-400"
                            : "text-red-400"
                      }
                    />
                  </svg>
                  <span className="absolute text-3xl font-bold text-zinc-100">
                    {finalReport.avgScore}
                  </span>
                </div>

                <div className="mb-2 flex items-center justify-center gap-2">
                  {finalReport.overallVerdict === "ship" && (
                    <Rocket className="h-5 w-5 text-emerald-400" />
                  )}
                  {finalReport.overallVerdict === "iterate" && (
                    <RotateCcw className="h-5 w-5 text-amber-400" />
                  )}
                  {finalReport.overallVerdict === "skip" && (
                    <X className="h-5 w-5 text-red-400" />
                  )}
                  <span
                    className={`text-xl font-bold capitalize ${
                      finalReport.overallVerdict === "ship"
                        ? "text-emerald-400"
                        : finalReport.overallVerdict === "iterate"
                          ? "text-amber-400"
                          : "text-red-400"
                    }`}
                  >
                    {finalReport.overallVerdict}
                  </span>
                </div>

                <p className="text-sm text-zinc-500">
                  {finalReport.shipCount} ship &middot;{" "}
                  {finalReport.iterateCount} iterate &middot;{" "}
                  {finalReport.skipCount} skip
                </p>
              </CardContent>
            </Card>

            {/* Verdict breakdown bar */}
            <div className="mx-auto mb-10 max-w-lg">
              <div className="flex h-3 overflow-hidden rounded-full bg-zinc-800/50 shadow-inner">
                {finalReport.shipCount > 0 && (
                  <div
                    className="bg-emerald-500"
                    style={{
                      width: `${(finalReport.shipCount / enabledPersonas.length) * 100}%`,
                    }}
                  />
                )}
                {finalReport.iterateCount > 0 && (
                  <div
                    className="bg-amber-500"
                    style={{
                      width: `${(finalReport.iterateCount / enabledPersonas.length) * 100}%`,
                    }}
                  />
                )}
                {finalReport.skipCount > 0 && (
                  <div
                    className="bg-red-500"
                    style={{
                      width: `${(finalReport.skipCount / enabledPersonas.length) * 100}%`,
                    }}
                  />
                )}
              </div>
              <div className="mt-2 flex justify-between text-xs text-zinc-600">
                <span className="text-emerald-400">
                  Ship {Math.round((finalReport.shipCount / enabledPersonas.length) * 100)}%
                </span>
                <span className="text-amber-400">
                  Iterate {Math.round((finalReport.iterateCount / enabledPersonas.length) * 100)}%
                </span>
                <span className="text-red-400">
                  Skip {Math.round((finalReport.skipCount / enabledPersonas.length) * 100)}%
                </span>
              </div>
            </div>

            <Separator className="mx-auto mb-10 max-w-2xl bg-zinc-800/60" />

            {/* Qualitative: What went well / What didn't */}
            <div className="mx-auto mb-10 grid max-w-3xl gap-6 sm:grid-cols-2">
              <Card className="border-emerald-500/20 bg-emerald-950/10 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardContent className="p-6 relative z-10">
                  <div className="mb-4 flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4 text-emerald-400" />
                    <h3 className="text-sm font-semibold text-emerald-400">
                      What worked
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {finalReport.positives.slice(0, 4).map((item) => {
                      const persona = PERSONAS.find((p) => p.id === item.persona);
                      return (
                        <div key={`pos-${item.persona}-${item.text.substring(0, 10)}`} className="flex gap-2">
                          <MessageSquareQuote className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                          <div>
                            <p className="text-sm text-zinc-300">
                              &ldquo;{item.text}&rdquo;
                            </p>
                            <p className="mt-0.5 text-[10px] text-zinc-600">
                              &mdash; {persona?.name}, {persona?.label}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20 bg-red-950/10 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardContent className="p-6 relative z-10">
                  <div className="mb-4 flex items-center gap-2">
                    <ThumbsDown className="h-4 w-4 text-red-400" />
                    <h3 className="text-sm font-semibold text-red-400">
                      What didn&apos;t
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {finalReport.negatives.slice(0, 4).map((item) => {
                      const persona = PERSONAS.find((p) => p.id === item.persona);
                      return (
                        <div key={`neg-${item.persona}-${item.text.substring(0, 10)}`} className="flex gap-2">
                          <MessageSquareQuote className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-600" />
                          <div>
                            <p className="text-sm text-zinc-300">
                              &ldquo;{item.text}&rdquo;
                            </p>
                            <p className="mt-0.5 text-[10px] text-zinc-600">
                              &mdash; {persona?.name}, {persona?.label}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator className="mx-auto mb-10 max-w-2xl bg-zinc-800/60" />

            {/* Per-agent results */}
            <div className="mx-auto max-w-3xl">
              <h3 className="mb-4 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                Individual Agent Results
              </h3>

              <div className="space-y-3">
                {AGENT_RESULTS.filter((r) =>
                  enabledPersonas.some((p) => p.id === r.personaId),
                ).map((result) => {
                  const persona = PERSONAS.find(
                    (p) => p.id === result.personaId,
                  )!;
                  const isExpanded = expandedAgent === result.personaId;

                  return (
                    <Card
                      key={result.personaId}
                      className="border-zinc-800 bg-zinc-900/40 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/60"
                    >
                      <CardContent className="p-0">
                        <button
                          type="button"
                          className="flex w-full items-center gap-4 p-4 text-left"
                          onClick={() =>
                            setExpandedAgent(isExpanded ? null : result.personaId)
                          }
                        >
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold ${persona.color}`}
                          >
                            {persona.avatar}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-zinc-200">
                                {persona.name}
                              </span>
                              <Badge
                                variant="outline"
                                className={`border-zinc-700 text-[10px] ${persona.color}`}
                              >
                                {persona.label}
                              </Badge>
                            </div>
                            <p className="mt-0.5 text-xs text-zinc-500">
                              {result.summary}
                            </p>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <p
                                className={`text-lg font-bold ${
                                  result.verdict === "ship"
                                    ? "text-emerald-400"
                                    : result.verdict === "iterate"
                                      ? "text-amber-400"
                                      : "text-red-400"
                                }`}
                              >
                                {result.score}%
                              </p>
                              <p
                                className={`text-[10px] font-medium uppercase ${
                                  result.verdict === "ship"
                                    ? "text-emerald-400"
                                    : result.verdict === "iterate"
                                      ? "text-amber-400"
                                      : "text-red-400"
                                }`}
                              >
                                {result.verdict}
                              </p>
                            </div>
                            {isExpanded ? (
                              <ChevronUp className="h-4 w-4 text-zinc-600" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-zinc-600" />
                            )}
                          </div>
                        </button>

                        {isExpanded && (
                          <div className="border-t border-zinc-800 px-4 py-3">
                            <div className="space-y-2">
                              {result.comments.map((c, i) => (
                                <div
                                  key={`comment-${result.personaId}-${i}`}
                                  className="flex items-start gap-2"
                                >
                                  {c.sentiment === "positive" ? (
                                    <ThumbsUp className="mt-0.5 h-3 w-3 shrink-0 text-emerald-500" />
                                  ) : c.sentiment === "negative" ? (
                                    <ThumbsDown className="mt-0.5 h-3 w-3 shrink-0 text-red-500" />
                                  ) : (
                                    <MessageSquareQuote className="mt-0.5 h-3 w-3 shrink-0 text-zinc-600" />
                                  )}
                                  <p className="text-sm text-zinc-400">
                                    {c.text}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="mx-auto mt-10 flex max-w-3xl justify-center gap-4">
              <Button
                variant="outline"
                className="gap-2 border-zinc-700 text-zinc-300"
                onClick={() => {
                  setPhase("setup");
                  setAgents({});
                  setExpandedAgent(null);
                }}
              >
                <RotateCcw className="h-4 w-4" />
                Run Again
              </Button>
              <Button className="gap-2 bg-indigo-600 text-white hover:bg-indigo-500">
                <ExternalLink className="h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
