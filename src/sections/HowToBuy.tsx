type HowToBuyStep = {
  title: string;
  description: string;
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
    title: "✅ Congrats!",
    description:
      "You’re officially a $TYGO holder, part of the wildest jungle on Solana — now sit tight and ride the gains.",
  },
];

export function HowToBuySection() {
  return (
    <section id="how-to-buy" className="relative bg-[#FF8B00] text-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
        <div className="space-y-4 text-center sm:text-left">
          <span className="inline-flex items-center gap-3 self-center rounded-full border-4 border-black bg-white px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-black shadow-[5px_5px_0_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] sm:self-start">
            🐯 HOW TO BUY $TYGO
          </span>
          <h2 className="text-4xl font-black uppercase sm:text-5xl lg:text-6xl">
            Step into the Jungle in Minutes
          </h2>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/80 sm:text-base">
            FAST, FUN, AND SOLANA-SLICK.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group flex transform flex-col gap-4 rounded-3xl border-4 border-black bg-white p-6 text-black shadow-[10px_10px_0_rgba(0,0,0,1)] transition-all duration-200 -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 hover:shadow-[4px_4px_0_rgba(0,0,0,1)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-black bg-[#FF8B00] text-xl font-black text-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
                {index + 1}
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-black uppercase tracking-[0.2em] sm:text-xl">{step.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-black/70">
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
