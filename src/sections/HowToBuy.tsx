"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

type HowToBuyStep = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const steps: HowToBuyStep[] = [
  {
    title: "Download the Pump.fun app",
    description: "Available on iOS and Android — the easiest way to buy new Solana gems.",
  },
  {
    title: "Create your account",
    description: "Follow the onboarding flow and lock in your wallet credentials.",
  },
  {
    title: "Deposit SOL (Solana)",
    description: "Use Apple Pay, Revolut, or any available method to add funds instantly.",
  },
  {
    title: "Search for $TYGO",
    description: "Copy and paste \"TYGO\" or the contract address into the search bar.",
  },
  {
    title: "Swap your SOL for $TYGO",
    description: "Confirm the trade and wait a few seconds for it to process.",
  },
  {
    title: "Congrats!",
    description:
      "You’re officially a $TYGO holder, part of the wildest jungle on Solana — now sit tight and ride the gains.",
    icon: <FaCheckCircle className="text-[#16a34a]" />,
  },
];

export function HowToBuySection() {
  return (
    <section id="how-to-buy" className="relative bg-[#FF8B00] text-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 sm:gap-12 sm:px-10 lg:px-12 lg:py-20 max-[320px]:gap-6 max-[320px]:px-3 max-[320px]:py-10">
        <div className="space-y-4 text-center sm:text-left">
          <span className="inline-flex items-center gap-3 self-center rounded-full border-4 border-black bg-white px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-black shadow-[5px_5px_0_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] sm:self-start">
            <Image src="/images/logo.jpg" alt="Logo" width={16} height={16} className="h-4 w-4 rounded-full object-cover" /> HOW TO BUY $TYGO
          </span>
          <h2 className="text-4xl font-black uppercase sm:text-5xl lg:text-6xl max-[320px]:text-3xl comic-shadow-light">
            Step into the Jungle in Minutes
          </h2>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/80 sm:text-base">
            FAST, FUN, AND SOLANA-SLICK.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 max-[320px]:grid-cols-1 max-[320px]:gap-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group flex transform flex-col gap-3 rounded-3xl border-4 border-black bg-white p-4 text-black shadow-[8px_8px_0_rgba(0,0,0,1)] transition-all duration-200 -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 hover:shadow-[4px_4px_0_rgba(0,0,0,1)] sm:gap-4 sm:p-6 sm:shadow-[10px_10px_0_rgba(0,0,0,1)] max-[320px]:gap-2 max-[320px]:p-3 max-[320px]:rounded-2xl max-[320px]:border-3"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-black bg-[#FF8B00] text-xl font-black text-black shadow-[4px_4px_0_rgba(0,0,0,1)] max-[320px]:h-10 max-[320px]:w-10 max-[320px]:border-3">
                {step.icon ? step.icon : index + 1}
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-black uppercase tracking-[0.2em] sm:text-xl max-[320px]:text-base max-[320px]:tracking-[0.15em]">{step.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-black/70 max-[320px]:text-[13px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowToBuySection;
