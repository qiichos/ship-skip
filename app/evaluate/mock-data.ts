export type Persona = {
  id: string;
  name: string;
  label: string;
  role: string;
  avatar: string;
  enabled: boolean;
  color: string;
};

export type AgentComment = {
  timestamp: number;
  text: string;
  sentiment: "positive" | "negative" | "neutral";
};

export type AgentResult = {
  personaId: string;
  score: number;
  verdict: "ship" | "iterate" | "skip";
  comments: AgentComment[];
  summary: string;
};

export const PERSONAS: Persona[] = [
  {
    id: "sarah",
    name: "Sarah Chen",
    label: "Power User",
    role: "Product Manager, daily active user",
    avatar: "SC",
    enabled: true,
    color: "text-indigo-400",
  },
  {
    id: "james",
    name: "James Rivera",
    label: "New User",
    role: "Marketing Intern, signed up last week",
    avatar: "JR",
    enabled: true,
    color: "text-emerald-400",
  },
  {
    id: "maria",
    name: "Maria Novak",
    label: "Casual User",
    role: "Freelance Designer, uses it occasionally",
    avatar: "MN",
    enabled: true,
    color: "text-violet-400",
  },
  {
    id: "alex",
    name: "Alex Kim",
    label: "Technical User",
    role: "Software Engineer, API-heavy workflows",
    avatar: "AK",
    enabled: true,
    color: "text-amber-400",
  },
  {
    id: "linda",
    name: "Linda Okafor",
    label: "Non-Technical",
    role: "Small Business Owner, wants simplicity",
    avatar: "LO",
    enabled: true,
    color: "text-rose-400",
  },
  {
    id: "kenji",
    name: "Kenji Tanaka",
    label: "Mobile-First",
    role: "College Student, mostly on phone",
    avatar: "KT",
    enabled: true,
    color: "text-cyan-400",
  },
];

// Streaming comments that appear during evaluation
export const AGENT_LIVE_COMMENTS: Record<string, AgentComment[]> = {
  sarah: [
    { timestamp: 1500, text: "Navigating to the new feature section...", sentiment: "neutral" },
    { timestamp: 3500, text: "The placement feels intuitive for my workflow", sentiment: "positive" },
    { timestamp: 5500, text: "Hmm, overlap with the existing dashboard widget", sentiment: "negative" },
    { timestamp: 7500, text: "Useful but needs clearer differentiation", sentiment: "neutral" },
  ],
  james: [
    { timestamp: 2000, text: "First time seeing this screen...", sentiment: "neutral" },
    { timestamp: 4000, text: "Not sure what this button does", sentiment: "negative" },
    { timestamp: 6000, text: "Oh wait, the tooltip helped", sentiment: "positive" },
    { timestamp: 8500, text: "Still confused about where to go next", sentiment: "negative" },
  ],
  maria: [
    { timestamp: 1800, text: "Checking the new layout...", sentiment: "neutral" },
    { timestamp: 3800, text: "Visually clean, I like the spacing", sentiment: "positive" },
    { timestamp: 6500, text: "Not something I'd use often though", sentiment: "neutral" },
    { timestamp: 8000, text: "Feels like a nice-to-have, not essential", sentiment: "neutral" },
  ],
  alex: [
    { timestamp: 1200, text: "Looking at the API integration point...", sentiment: "neutral" },
    { timestamp: 3000, text: "This could save 2-3 clicks for batch ops", sentiment: "positive" },
    { timestamp: 5000, text: "Solid implementation, good error handling", sentiment: "positive" },
    { timestamp: 7000, text: "Would benefit from keyboard shortcuts", sentiment: "neutral" },
  ],
  linda: [
    { timestamp: 2500, text: "Opening the feature page...", sentiment: "neutral" },
    { timestamp: 4500, text: "Too many options on this screen", sentiment: "negative" },
    { timestamp: 6500, text: "I don't understand the technical terms", sentiment: "negative" },
    { timestamp: 9000, text: "This adds complexity I don't need", sentiment: "negative" },
  ],
  kenji: [
    { timestamp: 1600, text: "Loading on mobile viewport...", sentiment: "neutral" },
    { timestamp: 3200, text: "Touch targets are a bit small", sentiment: "negative" },
    { timestamp: 5800, text: "The swipe gesture works well", sentiment: "positive" },
    { timestamp: 7800, text: "Decent on mobile, nothing groundbreaking", sentiment: "neutral" },
  ],
};

// Final results after evaluation
export const AGENT_RESULTS: AgentResult[] = [
  {
    personaId: "sarah",
    score: 82,
    verdict: "ship",
    summary: "Adds value for power users but overlaps with existing features. Worth shipping with clearer positioning.",
    comments: [
      { timestamp: 0, text: "Integrates well with my daily workflow", sentiment: "positive" },
      { timestamp: 0, text: "Overlaps with the existing dashboard — needs differentiation", sentiment: "negative" },
      { timestamp: 0, text: "Would use this 3-4 times a week if shipped", sentiment: "positive" },
    ],
  },
  {
    personaId: "james",
    score: 45,
    verdict: "skip",
    summary: "Too confusing for new users. Adds onboarding friction without clear value for beginners.",
    comments: [
      { timestamp: 0, text: "Had no idea what this was for without help", sentiment: "negative" },
      { timestamp: 0, text: "The tooltip saved me but shouldn't be needed", sentiment: "negative" },
      { timestamp: 0, text: "Adds one more thing to learn on day one", sentiment: "negative" },
    ],
  },
  {
    personaId: "maria",
    score: 61,
    verdict: "iterate",
    summary: "Polished design but low utility for casual users. Needs a clearer hook for occasional visitors.",
    comments: [
      { timestamp: 0, text: "Looks great, consistent with the brand", sentiment: "positive" },
      { timestamp: 0, text: "Not something I'd seek out or miss if gone", sentiment: "negative" },
      { timestamp: 0, text: "Could work if surfaced at the right moment", sentiment: "neutral" },
    ],
  },
  {
    personaId: "alex",
    score: 88,
    verdict: "ship",
    summary: "Saves real time for technical workflows. Well-implemented with room for keyboard shortcuts.",
    comments: [
      { timestamp: 0, text: "Finally — this saves me clicks every day", sentiment: "positive" },
      { timestamp: 0, text: "API integration is clean, good DX", sentiment: "positive" },
      { timestamp: 0, text: "Add keyboard shortcuts and it's perfect", sentiment: "neutral" },
    ],
  },
  {
    personaId: "linda",
    score: 32,
    verdict: "skip",
    summary: "Adds cognitive load without clear benefit. Makes the product feel more complex for simple use cases.",
    comments: [
      { timestamp: 0, text: "I don't understand what problem this solves for me", sentiment: "negative" },
      { timestamp: 0, text: "Too many options — I just want the basics", sentiment: "negative" },
      { timestamp: 0, text: "Makes the whole app feel heavier", sentiment: "negative" },
    ],
  },
  {
    personaId: "kenji",
    score: 58,
    verdict: "iterate",
    summary: "Functional on mobile but touch targets need work. Swipe gestures are a nice touch.",
    comments: [
      { timestamp: 0, text: "Works on my phone but feels a bit cramped", sentiment: "negative" },
      { timestamp: 0, text: "Love the swipe gesture — very natural", sentiment: "positive" },
      { timestamp: 0, text: "Needs bigger tap targets for thumb use", sentiment: "negative" },
    ],
  },
];

// Compute aggregate report data
export function computeReport(results: AgentResult[]) {
  const avgScore = Math.round(results.reduce((a, r) => a + r.score, 0) / results.length);
  const shipCount = results.filter((r) => r.verdict === "ship").length;
  const iterateCount = results.filter((r) => r.verdict === "iterate").length;
  const skipCount = results.filter((r) => r.verdict === "skip").length;

  let overallVerdict: "ship" | "iterate" | "skip";
  if (avgScore >= 70) overallVerdict = "ship";
  else if (avgScore >= 50) overallVerdict = "iterate";
  else overallVerdict = "skip";

  const positives = results.flatMap((r) =>
    r.comments.filter((c) => c.sentiment === "positive").map((c) => ({ persona: r.personaId, text: c.text })),
  );
  const negatives = results.flatMap((r) =>
    r.comments.filter((c) => c.sentiment === "negative").map((c) => ({ persona: r.personaId, text: c.text })),
  );

  return { avgScore, shipCount, iterateCount, skipCount, overallVerdict, positives, negatives };
}
