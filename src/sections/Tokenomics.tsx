"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { FaCoins, FaFire, FaBolt, FaLock } from "react-icons/fa6";
import { SiSolana } from "react-icons/si";

type TokenStat = {
  icon: React.ReactNode;
  label: string;
  value: string;
  caption?: string;
};

const tokenStats: TokenStat[] = [
  {
    icon: <FaCoins className="text-2xl lg:text-4xl" />,
    label: "SUPPLY",
    value: "1B",
    caption: "1 BILLION",
  },
  {
    icon: <FaFire className="text-2xl lg:text-4xl" />,
    label: "LP",
    value: "BURNED",
  },
  {
    icon: <SiSolana className="text-2xl lg:text-4xl" />,
    label: "NETWORK",
    value: "SOLANA",
  },
  {
    icon: <FaLock className="text-2xl lg:text-4xl" />,
    label: "CONTRACT",
    value: "RENOUNCED",
  },
];

export function TokenomicsSection() {
  return (
    <section id="tokenomics" className="relative bg-[#FF8B00] text-black overflow-hidden">

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 lg:gap-12 px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-20">
        
        {/* Header - Compact on mobile */}
        <div className="space-y-2 lg:space-y-4 text-center sm:text-left">
          <span className="inline-flex items-center gap-2 lg:gap-3 self-center rounded-full border-2 lg:border-4 border-black bg-white px-4 lg:px-6 py-1.5 lg:py-2 text-[10px] lg:text-xs font-black tracking-[0.25em] lg:tracking-[0.35em] shadow-[3px_3px_0_rgba(0,0,0,1)] lg:shadow-[5px_5px_0_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_rgba(0,0,0,1)] sm:self-start">
            <Image src="/images/logo.jpg" alt="Logo" width={16} height={16} className="h-4 w-4 lg:h-5 lg:w-5 rounded-full object-cover" /> TYGONOMICS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-black uppercase leading-tight">
            Jungle Math That Never Folds
          </h2>
          <p className="text-[10px] sm:text-xs lg:text-base font-semibold uppercase tracking-[0.15em] lg:tracking-[0.25em] text-black/80">
            BUILT FOR SPEED, LOCKED FOR CULTURE.
          </p>
        </div>

        {/* Token Stats - Compact 2x2 grid on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          {tokenStats.map((stat) => (
            <div
              key={stat.label}
              className="group flex transform flex-col gap-2 lg:gap-4 rounded-2xl lg:rounded-3xl border-2 lg:border-4 border-black bg-white p-3 lg:p-6 shadow-[5px_5px_0_rgba(0,0,0,1)] lg:shadow-[10px_10px_0_rgba(0,0,0,1)] transition-all duration-200 lg:-translate-x-2 lg:-translate-y-2 hover:translate-x-0 hover:translate-y-0 hover:shadow-[2px_2px_0_rgba(0,0,0,1)] lg:hover:shadow-[4px_4px_0_rgba(0,0,0,1)]"
            >
              <span className="text-xl lg:text-3xl">{stat.icon}</span>
              <p className="text-[9px] lg:text-xs font-black uppercase tracking-[0.2em] lg:tracking-[0.35em] text-black/70">
                {stat.label}
              </p>
              <p className="text-sm lg:text-2xl font-black uppercase leading-tight">{stat.value}</p>
              {stat.caption && (
                <p className="text-[8px] lg:text-xs font-black uppercase tracking-[0.15em] lg:tracking-[0.25em] text-black/60">
                  {stat.caption}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section - Stack on mobile, side by side on desktop */}
        <div className="grid gap-4 lg:gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* Pumpfun Info Card with GIF */}
          <div className="flex flex-col gap-4 lg:gap-6 rounded-2xl lg:rounded-3xl border-2 lg:border-4 border-black bg-white p-4 lg:p-8 text-black shadow-[5px_5px_0_rgba(0,0,0,1)] lg:shadow-[10px_10px_0_rgba(0,0,0,1)] transition-all duration-200 lg:-translate-x-2 lg:-translate-y-2 hover:translate-x-0 hover:translate-y-0 hover:shadow-[2px_2px_0_rgba(0,0,0,1)] lg:hover:shadow-[4px_4px_0_rgba(0,0,0,1)]">
            
            <div className="flex items-start gap-3 lg:gap-4">
              {/* GIF Area - Smaller on mobile */}
              <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-xl border-2 border-black bg-[#FF8B00] flex items-center justify-center overflow-hidden">
                {/* Ganti dengan: <img src="/assets/money-animation.gif" alt="Money" className="w-full h-full object-cover" /> */}
                <FaBolt className="text-2xl lg:text-3xl animate-bounce" />
              </div>
              
              <div className="space-y-1.5 lg:space-y-3 flex-1">
                <span className="inline-flex items-center gap-2 text-sm lg:text-lg font-black uppercase tracking-[0.2em] lg:tracking-[0.3em]">
                  Pumpfun Launch
                </span>
                <p className="text-[10px] lg:text-sm font-semibold uppercase tracking-[0.15em] lg:tracking-[0.2em] text-black/80">
                  CREATOR REWARDS USED FOR:
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 lg:gap-4 rounded-xl lg:rounded-2xl border-2 lg:border-4 border-black bg-[#FF8B00] p-3 lg:p-5 text-black shadow-[3px_3px_0_rgba(0,0,0,1)] lg:shadow-[5px_5px_0_rgba(0,0,0,1)] transition-all duration-200 -translate-x-1 -translate-y-1 hover:translate-x-0 hover:translate-y-0 hover:shadow-[1px_1px_0_rgba(0,0,0,1)]">
              <FaBolt className="text-xl lg:text-2xl flex-shrink-0" />
              <p className="text-xs lg:text-base font-black uppercase leading-relaxed">
                FUND THE ANIMATION STUDIO
              </p>
            </div>
          </div>

          {/* CTA Card with GIF Background */}
          <Link
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex transform flex-col justify-between gap-4 lg:gap-6 rounded-2xl lg:rounded-3xl border-2 lg:border-4 border-black bg-black text-[#FF8B00] p-4 lg:p-8 shadow-[5px_5px_0_rgba(0,0,0,1)] lg:shadow-[10px_10px_0_rgba(0,0,0,1)] transition-all duration-200 lg:-translate-x-2 lg:-translate-y-2 hover:translate-x-0 hover:translate-y-0 hover:shadow-[2px_2px_0_rgba(0,0,0,1)] lg:hover:shadow-[4px_4px_0_rgba(0,0,0,1)] overflow-hidden"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-[#FF8B00] rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 lg:w-28 lg:h-28 bg-[#FF8B00] rounded-full blur-2xl animate-pulse" style={{ animationDelay: '500ms' }}></div>
            </div>

            <div className="relative space-y-3 lg:space-y-4">
              <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#FF8B00]/20 flex items-center justify-center relative overflow-hidden">
                <Image src="/images/logo.jpg" alt="Logo" fill className="object-cover rounded-full" sizes="(min-width:1024px) 3.5rem, 2.5rem" />
              </div>
              <h3 className="text-lg lg:text-2xl font-black uppercase leading-tight">
                Buy Back $TYGO on Pumpfun
              </h3>
              <p className="text-[10px] lg:text-sm font-semibold uppercase tracking-[0.15em] lg:tracking-[0.2em] text-[#FF8B00]/80">
                TAP TO ROAR WITH THE TREASURY.
              </p>
            </div>

            <span className="relative self-start rounded-full border-2 lg:border-4 border-[#FF8B00] bg-[#FF8B00] px-4 lg:px-5 py-1.5 lg:py-2 text-xs lg:text-sm font-black uppercase tracking-[0.2em] lg:tracking-[0.25em] text-black transition-all duration-200 group-hover:translate-x-[2px] group-hover:translate-y-[2px] lg:group-hover:translate-x-[3px] lg:group-hover:translate-y-[3px] group-hover:shadow-[2px_2px_0_rgba(0,0,0,1)]">
              ↗ Enter Pumpfun
            </span>
          </Link>
        </div>

        {/* Mobile optimization notice */}
        <p className="lg:hidden text-center text-[10px] font-semibold uppercase tracking-wider text-black/60 pt-2">
          <Image src="/images/logo.jpg" alt="Logo" width={16} height={16} className="inline-block mr-1 h-4 w-4 rounded-full align-middle object-cover" /> Swipe up for more features
        </p>
      </div>
    </section>
  );
}

export default TokenomicsSection;