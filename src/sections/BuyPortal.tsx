import Image from "next/image";
import Link from "next/link";

type ExchangeItem = {
  name: string;
  href: string;
  icon?: string;
  maxWidth?: number;
  emphasize?: boolean;
};

const exchanges: ExchangeItem[] = [
  { name: "DEXSCREENER", href: "https://dexscreener.com", icon: "/images/logo/dexscreener.png" },
  { name: "DEXTOOLS", href: "https://www.dextools.io", icon: "/images/logo/dextools.png" },
  { name: "JUPITER", href: "https://jup.ag", icon: "/images/logo/jupiter.png", maxWidth: 240 },
  { name: "PUMPFUN", href: "https://pump.fun", icon: "/images/logo/pumpfun.png", maxWidth: 240 },
  { name: "OKX DEX", href: "https://www.okx.com/web3/dex", icon: "/images/logo/okx.png", maxWidth: 260 },
  { name: "GATE IO", href: "https://www.gate.io", icon: "/images/logo/gateio.png" },
  { name: "KUCOIN", href: "https://www.kucoin.com", icon: "/images/logo/kucoin.png" },
  { name: "REVOLUT", href: "https://www.revolut.com", icon: "/images/logo/revoult.png", maxWidth: 220 },
  { name: "LBANK", href: "https://www.lbank.com", icon: "/images/logo/lbank.png", maxWidth: 240 },
  { name: "COINBASE", href: "https://www.coinbase.com", icon: "/images/logo/coinbase.png" },
  { name: "BINANCE", href: "https://www.binance.com", icon: "/images/logo/binance.png" },
];

function ExchangeCard({ exchange }: { exchange: ExchangeItem }) {
  return (
    <Link
      key={exchange.name}
      href={exchange.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-24 items-center justify-center rounded-full transform scale-90 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none sm:scale-95 md:scale-100"
    >
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-3 border-black bg-[#FF8B00] px-6"
      >
        <span
          className="pointer-events-none absolute inset-0 rounded-full]"
          aria-hidden
        />
        {exchange.icon ? (
          <Image
            src={exchange.icon}
            alt={`${exchange.name} logo`}
            width={exchange.maxWidth ?? 220}
            height={70}
            className="relative object-contain drop-shadow-[0_0_14px_rgba(0,0,0,0.25)]"
            style={{ maxWidth: (exchange.maxWidth ?? 220) + "px", width: "100%" }}
          />
        ) : (
          <span className="relative text-base font-black uppercase tracking-[0.25em] text-[#0b160f] drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]">
            {exchange.name}
          </span>
        )}
      </div>
    </Link>
  );
}

export function BuyPortalSection() {
  return (
    <section id="buy-tygo" className="relative py-14 text-white">
      <div className="absolute inset-0 border-y-4 border-black" aria-hidden />
      <div className="relative mx-auto flex w-full flex-col gap-10 px-4 md:px-20 pb-20">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <h2 className="text-4xl font-black uppercase text-[#FF8B00] sm:text-5xl lg:text-6xl">
            Buy $TYGO On Any Jungle Outpost
          </h2>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-base">
            Tap the exchange, smash the trade, join the roar. Solid colors. Solid gains.
          </p>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#FF8B00]">
            AND THEN ADD IN BLURRY
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {exchanges.map((exchange) => (
            <ExchangeCard key={exchange.name} exchange={exchange} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BuyPortalSection;
