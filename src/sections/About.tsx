"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden"
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="/videos/fight_tygo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div
        className="absolute inset-0 z-10 bg-black/70"
        aria-hidden="true"
      />
      <div className="relative z-20 mx-auto flex w-full max-w-6xl px-4 py-10 sm:px-10 sm:py-16 lg:max-w-7xl lg:px-12 lg:py-20">
        <div className="grid w-full gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
            <h2 className="text-4xl font-black uppercase text-[#FF8B00] sm:text-5xl lg:text-7xl comic-shadow-light">
              About $TYGO
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-lg font-bold leading-relaxed text-white sm:text-xl lg:text-2xl">
                Deep in Solana's jungle, <span className="text-[#FF8B00]">$TYGO</span> was born feral—built
                to sniff liquidity, flip paper, and roar louder than volatility.
              </p>
              <p className="text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl">
                This isn&apos;t just a meme—it's a cross-media IP. World-class art, daily animation drops, and a
                mascot that drags Solana culture into the mainstream.
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-xs font-black uppercase tracking-wider text-white/70 sm:text-sm">Contract Address</p>
              <div className="flex flex-col gap-2 rounded-lg border-3 border-black bg-[#FF8B00] p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:flex-row sm:items-center sm:gap-3 sm:border-4 sm:p-4 sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <code className="flex-1 overflow-x-auto break-all text-xs font-bold text-black sm:text-sm lg:text-base">
                  TyG0xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX
                </code>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('TyG0xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX');
                  }}
                  className="w-full shrink-0 rounded border-2 border-black bg-white px-4 py-2 text-sm font-black uppercase text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none sm:w-auto sm:border-3"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center justify-center gap-6 sm:gap-10 lg:items-start lg:gap-12">
            <div className="w-full space-y-6 sm:space-y-8">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6 lg:gap-8">
                <div className="flex flex-1 flex-col items-center gap-3 text-center sm:items-start sm:gap-4 sm:pt-6 sm:text-left lg:pt-14">
                  <h3 className="text-3xl font-black uppercase text-[#FF8B00] sm:text-4xl lg:text-5xl comic-shadow-light">
                    Mission
                  </h3>
                  <p className="text-base font-semibold leading-relaxed text-white sm:text-lg lg:text-xl">
                    Turn <span className="text-[#FF8B00]">$TYGO</span> into the most viral mascot on Solana—bridging
                    memes, animation, dan mainstream culture.
                  </p>
                </div>
                <div className="relative w-32 sm:w-40 lg:w-60">
                  <Image
                    src="/images/troll_tygo.gif"
                    alt="Troll Tygo"
                    width={240}
                    height={240}
                    unoptimized
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <ul className="space-y-3 text-sm sm:space-y-4 sm:text-base lg:text-lg">
                <li className="flex items-start gap-3 rounded-xl border-3 border-black bg-[#FF8B00] p-4 text-black shadow-[4px_4px_0_rgba(0,0,0,1)] sm:gap-4 sm:rounded-2xl sm:border-4 sm:p-5 sm:shadow-[6px_6px_0_rgba(0,0,0,1)]">
                  <span className="mt-1 inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white sm:h-4 sm:w-4">
                  </span>
                  <p className="font-black leading-relaxed freeman-outline-dark">
                    Daily art drops, lore and animated shorts that feed the cult.
                  </p>
                </li>
                <li className="flex items-start gap-3 rounded-xl border-3 border-black bg-[#FF8B00] p-4 text-black shadow-[4px_4px_0_rgba(0,0,0,1)] sm:gap-4 sm:rounded-2xl sm:border-4 sm:p-5 sm:shadow-[6px_6px_0_rgba(0,0,0,1)]">
                  <span className="mt-1 inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white sm:h-4 sm:w-4">
                  </span>
                  <p className="font-black leading-relaxed freeman-outline-dark">
                    Original IP designed for collabs, merch, and media expansion.
                  </p>
                </li>
                <li className="flex items-start gap-3 rounded-xl border-3 border-black bg-[#FF8B00] p-4 text-black shadow-[4px_4px_0_rgba(0,0,0,1)] sm:gap-4 sm:rounded-2xl sm:border-4 sm:p-5 sm:shadow-[6px_6px_0_rgba(0,0,0,1)]">
                  <span className="mt-1 inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white sm:h-4 sm:w-4">
                  </span>
                  <p className="font-black leading-relaxed freeman-outline-dark">
                    A bridge between meme energy and mainstream attention.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}