import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "How to Buy", href: "#how-to-buy" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-transparent">
      <div className="relative mt-4 w-[calc(100%-1.5rem)] max-w-5xl">
        <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-black" aria-hidden />
        <nav className="relative flex items-center justify-between rounded-2xl border-4 border-black bg-[#ff9302] px-5 py-3 text-black shadow-[0_10px_0_rgba(0,0,0,0.65)]">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-3 border-black bg-[#ffe066] shadow-[3px_3px_0_rgba(0,0,0,0.5)]">
              <Image
                src="/images/logo.jpg"
                alt="$TYGO logo"
                width={30}
                height={30}
                className="h-8 w-8 rounded-full object-cover"
                priority
              />
            </div>
            <span className="text-xl font-black uppercase tracking-[0.4em]">$TYGO</span>
          </div>

          <div className="hidden items-center gap-5 text-sm font-black uppercase tracking-[0.35em] md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full border-2 border-black bg-white/90 px-5 py-2 text-black shadow-[0_6px_0_rgba(0,0,0,0.55)] transition-transform hover:-translate-y-1 hover:shadow-[0_10px_0_rgba(0,0,0,0.6)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://pump.fun"
              className="rounded-full border-3 border-black bg-[#1a4d2e] px-6 py-2 text-white shadow-[0_8px_0_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-1 hover:shadow-[0_12px_0_rgba(0,0,0,0.7)]"
              target="_blank"
              rel="noreferrer"
            >
              Buy $TYGO
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

