"use client";

import ComicMarquee from "@/components/ComicMarquee";
import Image from "next/image";

export function Hero() {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden">
        <Image
          src="/images/main_BG.png"
          alt="Jungle background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          unoptimized
        />
        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col-reverse items-center gap-12 px-6 py-16 text-center sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-20 lg:text-left">
          {/* Mascot - Left Side */}
          <div className="flex w-full justify-center lg:w-auto lg:justify-start">
            <img
              src="/images/mascot.gif"
              alt="$TYGO mascot"
              className="h-auto w-[220px] sm:w-[280px] lg:w-[340px] drop-shadow-[0_22px_48px_rgba(0,0,0,0.35)]"
            />
          </div>

          {/* Text Content - Right Side */}
          <div className="relative w-full max-w-2xl lg:w-auto">
            <div className="relative rounded-[30px] px-10 py-10 text-black shadow-[0_20px_0_rgba(0,0,0,0.5)]">
              <h1
                className="space-y-2 font-black leading-[0.94] drop-shadow-[10px_10px_0_rgba(0,0,0,0.45)]"
                style={{ fontSize: "clamp(5.5rem, 10vw, 9rem)", letterSpacing: "0.05em" }}
              >
                <span className="block">$TYGO</span>
                {/* <span className="block">BORN IN THE</span> */}
                {/* <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1a3b28] via-black to-[#1a3b28]">
                  CRYPTO JUNGLE
                </span> */}
              </h1>
              <p className="mt-6 text-left text-[1.35rem] font-bold leading-relaxed text-[#112d1d] sm:text-[1.7rem]">
                <span className="font-black uppercase">$TYGO</span> lives on the razor&apos;s edge—trading,
                gambling, and roaring whenever the Solana jungle trembles. Fast, fearless, and obsessed
                with stacking more, <span className="font-black uppercase">$TYGO</span> flips FOMO into
                fortune and panic into fuel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ComicMarquee />
    </>
  );
}

export default Hero;