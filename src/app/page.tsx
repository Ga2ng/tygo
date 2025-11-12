import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";

const exchanges = [
  { name: "DEXSCREENER", href: "https://dexscreener.com" },
  { name: "DEXTOOLS", href: "https://www.dextools.io" },
  { name: "JUPITER", href: "https://jup.ag" },
  { name: "PUMPFUN", href: "https://pump.fun" },
  { name: "OKX DEX", href: "https://www.okx.com/web3/dex" },
  { name: "BLURRY", href: "https://blur.io" },
  { name: "GATE IO", href: "https://www.gate.io" },
  { name: "KUCOIN", href: "https://www.kucoin.com" },
  { name: "REVOLUT", href: "https://www.revolut.com" },
  { name: "LBANK", href: "https://www.lbank.com" },
  { name: "COINBASE", href: "https://www.coinbase.com" },
  { name: "BINANCE", href: "https://www.binance.com" },
];

const marketCapGoals = [
  { target: "$100K Market Cap", achieved: true },
  { target: "$500K Market Cap", achieved: false },
  { target: "$1M Market Cap", achieved: false },
  { target: "$5M Market Cap", achieved: false },
  { target: "$10M Market Cap", achieved: false },
  { target: "$50M Market Cap", achieved: false },
  { target: "$100M Market Cap", achieved: false },
  { target: "$500M Market Cap", achieved: false },
  { target: "$1B Market Cap", achieved: false },
  { target: "$5B Market Cap", achieved: false },
];

const buildGoals = [
  "Establish main platforms (TG, X, IG, TT, YT, Website)",
  "DEX Screener listing",
  "CoinMarketCap official listing",
  "CoinGecko listing",
  "Daily drawings & new art drops",
  "Full-time animation team",
  "Yeti merch design & release",
  "100K Instagram followers",
  "100K YouTube subscribers",
  "100K TikTok followers",
  "Yeti Art Contests & creative bounties",
];

const tokenomicsHighlights = [
  {
    label: "Supply",
    value: "1,000,000,000",
    description: "Fixed max supply minted at launch.",
  },
  {
    label: "LP",
    value: "Burned Forever",
    description: "Liquidity sent to the abyss. No unlock, no retrace.",
  },
  {
    label: "Network",
    value: "Solana ⚡",
    description: "Hyper-fast blocks and negligible fees for jungle speed.",
  },
  {
    label: "Contract",
    value: "Renounced",
    description: "Ownership dropped. Tygo belongs to the culture now.",
  },
];

const creatorRewards = [
  "Fund a world-class animation studio expanding Tygo’s universe.",
  "Ship daily art drops, lore and IP collabs that keep feeds roaring.",
  "Buy back $TYGO on Pump.fun to reinforce the jungle treasury.",
];

const howToBuySteps = [
  {
    title: "Download the Pump.fun app",
    description: "Available on iOS and Android — the easiest way to buy new Solana gems.",
  },
  {
    title: "Create your account",
    description: "Follow the quick onboarding and secure your wallet.",
  },
  {
    title: "Deposit SOL (Solana)",
    description: "Use Apple Pay, Revolut, or any supported method to add funds instantly.",
  },
  {
    title: "Search for $TYGO",
    description: "Copy and paste 'TYGO' or the contract address into the search bar.",
  },
  {
    title: "Swap your SOL for $TYGO",
    description: "Confirm the trade and wait a few seconds for it to process.",
  },
  {
    title: "Congrats, Degen!",
    description: "You're officially part of the wildest jungle on Solana — now ride the gains.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      <Navbar />

      <main className="relative">
        <Hero />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-28 pt-16 sm:px-10 lg:px-12">
          {/* About Section */}
          {/* <section id="about" className="tygo-shell">
            <div className="tygo-shell-content grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-[#FF8B00] sm:text-5xl">About $TYGO</h2>
                <p className="text-base leading-relaxed text-white/85 sm:text-lg">
                  Deep in Solana’s jungle, Tygo was born feral—built to sniff liquidity, flip paper,
                  and roar louder than volatility. He hunts alpha, gambles with ice in his veins, and
                  only sleeps when the treasury is heavier than yesterday.
                </p>
                <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                  This isn&apos;t just a meme—it's a cross-media IP. World-class art, daily animation
                  drops, and a mascot that drags Solana culture into the mainstream. We turn FOMO into
                  rituals, lore into content, and fans into cultists.
                </p>
                <a
                  href="https://drive.google.com/drive/folders/1cZ9OR9kU3KoMM3a-mzk1KFlwGALg7ddq?usp=driv_e_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#ff9302]/65 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#ff9302] transition-all hover:bg-[#ff9302] hover:text-black"
                >
                  🎨 Browse the gallery
                </a>
              </div>

              <div className="tygo-highlight space-y-5">
                <h3 className="text-2xl font-bold text-[#ff9302]">Mission</h3>
                <p className="text-sm leading-relaxed text-white/85 sm:text-base">
                  Turn Tygo into the most viral mascot on Solana—bridging memes, animation, and
                  mainstream culture. We’re building a content machine that keeps degens entertained,
                  inspired, and irrationally bullish.
                </p>
                <ul className="space-y-3 text-sm text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#ff9302]">⚡</span>
                    Daily art drops, lore and animated shorts that feed the cult.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#ff9302]">🎬</span>
                    Original IP designed for collabs, merch, and media expansion.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#ff9302]">🌐</span>
                    A bridge between meme energy and mainstream attention.
                  </li>
                </ul>
              </div>
            </div>
          </section> */}

          {/* Tokenomics */}
          {/* <section id="tokenomics" className="tygo-shell">
            <div className="tygo-shell-content space-y-10">
              <div className="flex flex-col gap-3 text-center sm:text-left">
                <span className="tygo-badge self-center sm:self-start">Tygonomics</span>
                <h2 className="text-4xl font-black text-[#ff9302] sm:text-5xl">$TYGO Numbers</h2>
                <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                  No hidden levers. No surprise unlocks. The jungle treasury and content engine are
                  fueled transparently.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {tokenomicsHighlights.map((item) => (
                  <div key={item.label} className="tygo-card space-y-3 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ff9302]">
                      {item.label}
                    </p>
                    <p className="text-2xl font-black text-white">{item.value}</p>
                    <p className="text-xs leading-relaxed text-white/70">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="tygo-highlight space-y-4 sm:flex sm:items-start sm:justify-between sm:gap-10">
                <div className="max-w-sm space-y-2">
                  <h3 className="text-2xl font-bold text-[#ff9302]">Pump.fun Launch</h3>
                  <p className="text-sm text-white/75">
                    Creator rewards are hard-routed into fueling Tygo’s narrative and price action.
                  </p>
                </div>
                <ul className="grid gap-3 text-sm text-white/80 sm:max-w-md">
                  {creatorRewards.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-[#ff9302]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section> */}

          {/* Exchanges */}
          {/* <section className="tygo-shell">
            <div className="tygo-shell-content space-y-8">
              <div className="text-center sm:text-left">
                <span className="tygo-badge mb-3 self-center sm:self-start">Listings</span>
                <h2 className="text-4xl font-black text-[#ff9302] sm:text-5xl">Track $TYGO</h2>
                <p className="mt-2 text-sm text-white/75 sm:text-base">
                  Chart, swap, and monitor Tygo across every jungle outpost.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {exchanges.map((exchange) => (
                  <a
                    key={exchange.name}
                    href={exchange.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tygo-card flex items-center justify-between border border-[#ff9302]/25 text-[#ff9302] transition-transform hover:-translate-y-1 hover:border-[#ff9302]/60"
                  >
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      {exchange.name}
                    </span>
                    <span className="text-lg">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </section> */}

          {/* Market Cap & Build Goals */}
          {/* <section className="tygo-shell">
            <div className="tygo-shell-content grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-[#ff9302] sm:text-4xl">Market Cap Targets</h2>
                <p className="text-sm text-white/75">
                  We roar louder at every new bracket. These checkpoints mark the jungle’s expansion.
                </p>
                <ul className="space-y-3">
                  {marketCapGoals.map((goal) => (
                    <li
                      key={goal.target}
                      className="flex items-center justify-between rounded-2xl border border-[#1d4023]/60 bg-black/60 px-5 py-3 text-sm text-white/85"
                    >
                      <span>{goal.target}</span>
                      <span
                        className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-lg ${
                          goal.achieved
                            ? "bg-emerald-400 text-black"
                            : "bg-[#ff9302]/20 text-[#ff9302]"
                        }`}
                      >
                        {goal.achieved ? "✅" : "⚡"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-black text-[#ff9302] sm:text-4xl">Build Agenda</h2>
                <p className="text-sm text-white/75">
                  Infrastructure, brand and community activations that keep Tygo omnipresent.
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {buildGoals.map((goal) => (
                    <li
                      key={goal}
                      className="flex items-start gap-3 rounded-2xl border border-[#1d4023]/55 bg-black/55 p-4 text-sm text-white/85"
                    >
                      <span className="mt-0.5 text-[#ff9302]">•</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section> */}

          {/* How to Buy */}
          {/* <section id="how-to-buy" className="tygo-shell">
            <div className="tygo-shell-content space-y-8">
              <div className="text-center sm:text-left">
                <span className="tygo-badge mb-3 self-center sm:self-start">Onboarding</span>
                <h2 className="text-4xl font-black text-[#ff9302] sm:text-5xl">How to Buy $TYGO</h2>
                <p className="mt-2 text-sm text-white/70 sm:text-base">
                  Six quick steps and you&apos;re in the jungle. Welcome to the roar.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {howToBuySteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="relative rounded-2xl border border-[#1d4023]/60 bg-black/55 p-6 text-white/85"
                  >
                    <span className="absolute -top-3 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff9302] text-xl font-bold text-black shadow-lg">
                      {index + 1}
                    </span>
                    <h3 className="mt-8 text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section> */}
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="border-t border-[#2d5016]/50 bg-[#0d2817]/95 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <p className="text-[#a8d5ba]">© 2024 $TYGO - Wild Degen in the Crypto Jungle 🐅</p>
        </div>
      </footer> */}
    </div>
  );
}