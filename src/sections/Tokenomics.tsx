import Link from "next/link";

type TokenStat = {
  icon: string;
  label: string;
  value: string;
  caption?: string;
};

const tokenStats: TokenStat[] = [
  {
    icon: "💰",
    label: "SUPPLY",
    value: "1,000,000,000",
    caption: "(1 BILLION)",
  },
  {
    icon: "🔥",
    label: "LP",
    value: "BURNED FOREVER",
  },
  {
    icon: "⚡",
    label: "NETWORK",
    value: "SOLANA",
  },
  {
    icon: "🔒",
    label: "CONTRACT",
    value: "RENOUNCED",
  },
];

export function TokenomicsSection() {
  return (
    <section id="tokenomics" className="relative bg-[#FF8B00] text-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
        <div className="space-y-4 text-center sm:text-left">
          <span className="inline-flex items-center gap-3 self-center rounded-full border-4 border-black bg-white px-6 py-2 text-xs font-black tracking-[0.35em] shadow-[5px_5px_0_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] sm:self-start">
            🐅 TYGONOMICS
          </span>
          <h2 className="text-4xl font-black uppercase sm:text-5xl lg:text-6xl">
            Jungle Math That Never Folds
          </h2>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/80 sm:text-base">
            BUILT FOR SPEED, LOCKED FOR THE CULTURE.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tokenStats.map((stat) => (
            <div
              key={stat.label}
              className="group flex transform flex-col gap-4 rounded-3xl border-4 border-black bg-white p-6 shadow-[10px_10px_0_rgba(0,0,0,1)] transition-all duration-200 -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 hover:shadow-[4px_4px_0_rgba(0,0,0,1)]"
            >
              <span className="text-4xl">{stat.icon}</span>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-black/70">
                {stat.label}
              </p>
              <p className="text-2xl font-black uppercase leading-tight">{stat.value}</p>
              {stat.caption && (
                <p className="text-xs font-black uppercase tracking-[0.25em] text-black/60">
                  {stat.caption}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6 rounded-3xl border-4 border-black bg-white p-8 text-black shadow-[10px_10px_0_rgba(0,0,0,1)] transition-all duration-200 -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 hover:shadow-[4px_4px_0_rgba(0,0,0,1)]">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 text-lg font-black uppercase tracking-[0.3em]">
                💸 Pumpfun Launch
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/80">
                CREATOR REWARDS ARE USED EXCLUSIVELY TO:
              </p>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border-4 border-black bg-[#FF8B00] p-5 text-black shadow-[5px_5px_0_rgba(0,0,0,1)] transition-all duration-200 -translate-x-1 -translate-y-1 hover:translate-x-0 hover:translate-y-0 hover:shadow-[2px_2px_0_rgba(0,0,0,1)]">
              <span className="text-3xl">💥</span>
              <p className="text-base font-black uppercase leading-relaxed">
                FUND THE ANIMATION STUDIO
              </p>
            </div>
          </div>

          <Link
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex transform flex-col justify-between gap-6 rounded-3xl border-4 border-black bg-black text-[#FF8B00] p-8 shadow-[10px_10px_0_rgba(0,0,0,1)] transition-all duration-200 -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 hover:shadow-[4px_4px_0_rgba(0,0,0,1)]"
          >
            <div className="space-y-4">
              <span className="text-4xl">🐯</span>
              <h3 className="text-2xl font-black uppercase leading-tight">
                Buy Back $TYGO on Pumpfun
              </h3>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF8B00]/80">
                TAP HERE TO ROAR WITH THE TREASURY.
              </p>
            </div>
            <span className="self-start rounded-full border-4 border-[#FF8B00] bg-[#FF8B00] px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-black transition-all duration-200 group-hover:translate-x-[3px] group-hover:translate-y-[3px] group-hover:shadow-[2px_2px_0_rgba(0,0,0,1)]">
              ↗ Enter Pumpfun
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TokenomicsSection;

