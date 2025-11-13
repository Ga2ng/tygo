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
        <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col items-center gap-8 px-4 py-14 text-center sm:px-8 md:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10 lg:py-16 lg:text-left">
          {/* Mascot - Left Side */}
          <div className="flex w-full justify-center lg:w-auto lg:justify-start">
            <img
              src="/images/mascot.gif"
              alt="$TYGO mascot"
              className="h-auto w-[360px] sm:w-[520px] md:w-[620px] lg:w-[760px] xl:w-[820px]"
            />
          </div>

          {/* Text Content - Right Side */}
          <div className="relative w-full max-w-xl lg:w-auto lg:max-w-[34rem]">
            <div className="relative rounded-[28px] px-6 py-12 text-black shadow-[0_18px_0_rgba(0,0,0,0.55)]">
              <h1
                className="space-y-2 font-black leading-[0.94] drop-shadow-[9px_9px_0_rgba(0,0,0,0.45)]"
                style={{ fontSize: "clamp(5rem, 9vw, 8.4rem)", letterSpacing: "0.045em" }}
              >
                <span className="block">$TYGO</span>
              </h1>
              <p className="mt-5 text-left text-[1.25rem] font-bold leading-relaxed text-[#112d1d] sm:text-[1.55rem]">
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