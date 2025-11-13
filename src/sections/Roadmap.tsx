type GoalItem = {
  icon: string;
  label: string;
};

const marketCapGoals: GoalItem[] = [
  { icon: "✅", label: "$100K Market Cap" },
  { icon: "🎯", label: "$500K Market Cap" },
  { icon: "🚀", label: "$1M Market Cap" },
  { icon: "🔥", label: "$5M Market Cap" },
  { icon: "🧠", label: "$10M Market Cap" },
  { icon: "💎", label: "$50M Market Cap" },
  { icon: "🦍", label: "$100M Market Cap" },
  { icon: "🌋", label: "$500M Market Cap" },
  { icon: "🪩", label: "$1B Market Cap" },
  { icon: "🌌", label: "$5B Market Cap" },
];

const buildGoals: GoalItem[] = [
  { icon: "🧱", label: "Establish main platforms (TG, X, IG, TT, YT, Website)" },
  { icon: "🧩", label: "DEX Screener listing" },
  { icon: "💻", label: "CoinMarketCap official listing" },
  { icon: "🧮", label: "CoinGecko listing" },
  { icon: "✏️", label: "Daily drawings & new art drops" },
  { icon: "🎬", label: "Full-time animation team" },
  { icon: "🧢", label: "Yeti merch design & release" },
  { icon: "📈", label: "100K Instagram followers" },
  { icon: "📹", label: "100K YouTube subscribers" },
  { icon: "🎵", label: "100K TikTok followers" },
  { icon: "🏆", label: "Yeti Art Contests & creative bounties" },
];

function GoalList({ title, goals }: { title: string; goals: GoalItem[] }) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="inline-flex items-center gap-3 text-2xl font-black uppercase tracking-[0.25em] text-[#FF8B00] sm:text-3xl">
        {title}
      </h3>
      <div className="space-y-3">
        {goals.map((goal) => (
          <div
            key={goal.label}
            className="group flex items-center gap-4 rounded-3xl border-4 border-black bg-white p-4 text-black shadow-[6px_6px_0_rgba(0,0,0,1)] transition-all duration-200 -translate-x-1 -translate-y-1 hover:translate-x-0 hover:translate-y-0 hover:shadow-[2px_2px_0_rgba(0,0,0,1)]"
          >
            <span className="text-2xl sm:text-3xl">{goal.icon}</span>
            <span className="flex-1 text-xs font-black uppercase leading-snug tracking-[0.25em] sm:text-sm">
              {goal.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-16 text-white sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-10 lg:px-12">
        <div className="space-y-4 text-center sm:text-left">
          <span className="inline-flex items-center gap-3 self-center rounded-full border-4 border-black bg-white px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-black shadow-[5px_5px_0_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] sm:self-start">
            🗺️ ROADMAP
          </span>
          <h2 className="text-4xl font-black uppercase text-[#FF8B00] sm:text-5xl lg:text-6xl">
            The Jungle Expansion Plan
          </h2>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-base">
            FROM MARKET CAP MILESTONES TO FULL MEDIA DOMINATION.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <GoalList title="🪙 MARKET CAP GOALS" goals={marketCapGoals} />
          <GoalList title="🧭 BUILD & EXPANSION GOALS" goals={buildGoals} />
        </div>
      </div>
    </section>
  );
}

export default RoadmapSection;
