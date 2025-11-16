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
        <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col items-center justify-center gap-4 px-4 py-8 text-center sm:gap-6 sm:px-8 sm:py-12 md:gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10 lg:py-16 lg:text-left">
          {/* Mascot - Left Side */}
          <div className="flex w-full justify-center lg:w-auto lg:justify-start">
            <Image
              src="/images/mascot.gif"
              alt="$TYGO mascot"
              width={820}
              height={820}
              unoptimized
              priority
              className="h-auto w-[280px] sm:w-[400px] md:w-[520px] lg:w-[680px] xl:w-[820px]"
            />
          </div>

          {/* Text Content - Right Side */}
          <div className="relative w-full max-w-xl lg:w-auto lg:max-w-[34rem]">
            <div className="relative rounded-2xl px-4 py-6 text-black shadow-[0_12px_0_rgba(0,0,0,0.55)] sm:rounded-3xl sm:px-5 sm:py-8 lg:rounded-[28px] lg:px-6 lg:py-12 lg:shadow-[0_18px_0_rgba(0,0,0,0.55)]">
              <h1
                className="space-y-1 font-black leading-[0.94] drop-shadow-[6px_6px_0_rgba(0,0,0,0.45)] sm:space-y-2 sm:drop-shadow-[9px_9px_0_rgba(0,0,0,0.45)]"
                style={{ fontSize: "clamp(3.5rem, 12vw, 8.4rem)", letterSpacing: "0.045em" }}
              >
                <span className="block">$TYGO</span>
              </h1>
              <p className="mt-3 text-left text-sm font-bold leading-relaxed text-[#000] drop-shadow-[0_1px_0_#FF8B00,2px_2px_0_#000] sm:mt-4 sm:text-base md:text-lg lg:mt-5 lg:text-[1.25rem] xl:text-[1.55rem]">
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