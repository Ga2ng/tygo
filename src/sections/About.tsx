"use client";

import ComicMarquee from "@/components/ComicMarquee";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden lg:h-screen"
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
        aria-hidden
      />
      <div className="relative z-20 mx-auto flex w-full max-w-6xl px-6 py-12 sm:px-10 lg:max-w-7xl lg:px-3 lg:py-16">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-5xl font-black uppercase text-[#FF8B00] sm:text-6xl lg:text-7xl">
              About $TYGO
            </h2>
            <div className="space-y-6">
              <p className="text-xl font-bold leading-relaxed text-white sm:text-2xl">
                Deep in Solana's jungle, <span className="text-[#FF8B00]">$TYGO</span> was born feral—built
                to sniff liquidity, flip paper, and roar louder than volatility.
              </p>
              <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
                This isn&apos;t just a meme—it's a cross-media IP. World-class art, daily animation drops, and a
                mascot that drags Solana culture into the mainstream.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-black uppercase tracking-wider text-white/70">Contract Address</p>
              <div className="flex items-center gap-3 rounded-lg border-4 border-black bg-[#FF8B00] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <code className="flex-1 overflow-x-auto text-sm font-bold text-black sm:text-base">
                  TyG0xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX
                </code>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('TyG0xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX');
                  }}
                  className="shrink-0 rounded border-3 border-black bg-white px-4 py-2 font-black uppercase text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center justify-center gap-10 pt-10 sm:gap-12 sm:pt-12 lg:items-start lg:gap-12 lg:pt-0">
            <div className="w-full space-y-8">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
                <div className="pt-14 flex flex-1 flex-col items-center gap-4 text-center sm:items-start sm:text-left">
                  <h3 className="text-4xl font-black uppercase text-[#FF8B00] sm:text-5xl">
                    Mission
                  </h3>
                  <p className="text-lg font-semibold leading-relaxed text-white sm:text-xl">
                    Turn <span className="text-[#FF8B00]">$TYGO</span> into the most viral mascot on Solana—bridging
                    memes, animation, dan mainstream culture.
                  </p>
                </div>
                <div className="relative w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[240px]">
                  <Image
                    src="/images/troll_tygo.gif"
                    alt="Troll Tygo"
                    width={240}
                    height={240}
                    unoptimized
                    className="w-full"
                  />
                </div>
              </div>
              <ul className="space-y-4 text-base sm:text-lg">
                <li className="flex items-start gap-4 rounded-2xl border-4 border-black bg-[#FF8B00] p-5 text-black shadow-[6px_6px_0_rgba(0,0,0,1)]">
                  <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white text-sm font-black leading-none">
                  </span>
                  <span className="font-black leading-relaxed">
                    Daily art drops, lore and animated shorts that feed the cult.
                  </span>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border-4 border-black bg-[#FF8B00] p-5 text-black shadow-[6px_6px_0_rgba(0,0,0,1)]">
                  <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white text-sm font-black leading-none">
                  </span>
                  <span className="font-black leading-relaxed">
                    Original IP designed for collabs, merch, and media expansion.
                  </span>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border-4 border-black bg-[#FF8B00] p-5 text-black shadow-[6px_6px_0_rgba(0,0,0,1)]">
                  <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white text-sm font-black leading-none">
                  </span>
                  <span className="font-black leading-relaxed">
                    A bridge between meme energy and mainstream attention.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <ComicMarquee /> */}
    </section>

  );
}

export default AboutSection;