"use client";

import ComicMarquee from "@/components/ComicMarquee";
import Image from "next/image";
import Link from "next/link";
import {
  FaTelegram,
  FaXTwitter,
  FaYoutube,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa6";

const socials = [
  { name: "Telegram", href: "https://t.me/", icon: FaTelegram },
  { name: "Twitter", href: "https://twitter.com/", icon: FaXTwitter },
  { name: "YouTube", href: "https://youtube.com/", icon: FaYoutube },
  { name: "TikTok", href: "https://www.tiktok.com/", icon: FaTiktok },
  { name: "Instagram", href: "https://www.instagram.com/", icon: FaInstagram },
];

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
        <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col-reverse items-center justify-center gap-4 px-4 py-8 text-center sm:gap-6 sm:px-8 sm:py-12 md:gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10 lg:py-16 lg:text-left">
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
            <div className="relative rounded-2xl px-4 py-6 text-black sm:rounded-3xl sm:px-5 sm:py-8 lg:rounded-[28px] lg:px-6 lg:py-12 ">
              <h1
                className="space-y-1 font-black leading-[0.94] drop-shadow-[6px_6px_0_rgba(0,0,0,0.45)] sm:space-y-2 sm:drop-shadow-[9px_9px_0_rgba(0,0,0,0.45)] comic-shadow-light"
                style={{ fontSize: "clamp(3.5rem, 12vw, 8.4rem)", letterSpacing: "0.045em" }}
              >
                <span className="block">$TYGO</span>
              </h1>
              <p className="mt-3 text-left text-sm font-bold leading-relaxed text-[#000] readable-contrast sm:mt-4 sm:text-base md:text-lg lg:mt-5 lg:text-[1.25rem] xl:text-[1.55rem]">
                The Solana jungle&apos;s loudest mascot—built for speed, art, and pure degen energy.
              </p>
              <div className="mt-5 sm:mt-6 space-y-4">
                <div className="flex justify-center lg:justify-start">
                  <a
                    href="https://pump.fun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border-3 border-black bg-[#1a4d2e] px-6 py-2 text-sm font-black uppercase tracking-[0.25em] text-white shadow-[0_8px_0_rgba(0,0,0,1)] transition-all duration-200 hover:translate-y-2 hover:shadow-[0_4px_0_rgba(0,0,0,1)] sm:px-8 sm:py-3 sm:text-base sm:tracking-[0.3em]"
                  >
                    Buy $TYGO
                  </a>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 sm:mt-6 sm:gap-3 lg:justify-start">
                  {socials.map(({ name, href, icon: Icon }) => (
                    <Link
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-10 flex h-10 w-10 items-center justify-center rounded-xl border-3 border-black bg-white text-black shadow-[4px_4px_0_rgba(0,0,0,1)] transition-all duration-200 hover:translate-y-2 hover:shadow-[2px_2px_0_rgba(0,0,0,1)] sm:h-12 sm:w-12 sm:rounded-2xl sm:border-4 sm:shadow-[5px_5px_0_rgba(0,0,0,1)] sm:hover:shadow-[3px_3px_0_rgba(0,0,0,1)]"
                      aria-label={name}
                    >
                      <Icon className="text-lg sm:text-xl" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComicMarquee />
    </>
  );
}

export default Hero;