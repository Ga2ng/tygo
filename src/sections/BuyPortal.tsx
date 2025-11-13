import Link from "next/link";

type ExchangeItem = {
  name: string;
  href: string;
};

const primaryExchanges: ExchangeItem[] = [
  { name: "DEXSCREENER", href: "https://dexscreener.com" },
  { name: "DEXTOOLS", href: "https://www.dextools.io" },
  { name: "JUPITER", href: "https://jup.ag" },
  { name: "PUMPFUN", href: "https://pump.fun" },
  { name: "OKX DEX", href: "https://www.okx.com/web3/dex" },
];

const secondaryExchanges: ExchangeItem[] = [
  { name: "BLURRY", href: "https://blur.io" },
  { name: "GATE IO", href: "https://www.gate.io" },
  { name: "KUCOIN", href: "https://www.kucoin.com" },
  { name: "REVOLUT", href: "https://www.revolut.com" },
  { name: "LBANK", href: "https://www.lbank.com" },
  { name: "COINBASE", href: "https://www.coinbase.com" },
  { name: "BINANCE", href: "https://www.binance.com" },
];

function ExchangeList({ title, items }: { title: string; items: ExchangeItem[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#0b160f]">
        {title}
      </h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-[22px] border-4 border-black bg-[#FF8B00] px-5 py-4 text-black shadow-[6px_6px_0_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
          >
            <span className="text-sm font-black uppercase tracking-[0.25em]">
              {item.name}
            </span>
            <span className="text-xl font-black">↗</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function BuyPortalSection() {
  return (
    <section id="buy-tygo" className="relative bg-[#05140D] py-20 text-white">
      <div className="absolute inset-0 border-y-4 border-black" aria-hidden />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-6 text-center sm:text-left">
          <span className="self-center rounded-full border-4 border-black bg-white px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-[#0b160f] shadow-[6px_6px_0_rgba(0,0,0,1)] sm:self-start">
            Buy $TYGO
          </span>
          <h2 className="text-4xl font-black uppercase text-[#FF8B00] sm:text-5xl lg:text-6xl">
            Buy $TYGO On Any Jungle Outpost
          </h2>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-base">
            Tap the exchange, smash the trade, join the roar. Solid colors. Solid gains.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <ExchangeList title="Core Listings" items={primaryExchanges} />
          <ExchangeList title="Expanding Jungle" items={secondaryExchanges} />
        </div>
      </div>
    </section>
  );
}

export default BuyPortalSection;
