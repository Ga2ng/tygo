"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const heroLines = [
  "$TYGO • WILD DEGEN BORN IN THE CRYPTO JUNGLE •",
  "ALWAYS HUNTING GAINS • FOMO INTO FORTUNE •",
  "ART, ANIMATION, AND CHAOS ON SOLANA •",
];

const ComicMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-5">
      <div className="absolute inset-0 translate-y-2 scale-[0.98] bg-black" aria-hidden />
      <div className="relative bg-[#ff9302] py-4">
        <Marquee gradient={false} speed={55} className="uppercase">
          <div className="flex items-center gap-8 px-8 text-2xl font-black tracking-[0.3em] text-black">
            {heroLines.map((line, index) => (
              <span key={index} className="flex items-center gap-4">
                <Image
                  src="/images/mascot.gif"
                  alt="TYGO icon"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.6)]"
                  unoptimized
                />
                {line}
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ComicMarquee;
