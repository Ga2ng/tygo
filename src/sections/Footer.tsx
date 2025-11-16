"use client";

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

export function FooterSection() {
  return (
    <footer className="relative py-16 text-white sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:gap-12 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:px-12 max-[320px]:gap-6 max-[320px]:px-3">
        <div className="flex w-full flex-col gap-6">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-3 rounded-full border-4 border-black bg-white px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-black shadow-[5px_5px_0_rgba(0,0,0,1)]">
              Our social media will be
            </span>
            <h2 className="text-4xl font-black uppercase text-[#FF8B00] sm:text-5xl comic-shadow-light">
              Link Up With The Jungle
            </h2>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-base">
              The loudest degen energy lives on these official channels.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-2 max-[320px]:grid-cols-1">
            {socials.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-center gap-3 rounded-2xl border-3 border-black bg-white p-3 text-black shadow-[4px_4px_0_rgba(0,0,0,1)] transition-all duration-200 -translate-x-1 -translate-y-1 hover:translate-x-0 hover:translate-y-0 hover:shadow-[2px_2px_0_rgba(0,0,0,1)] sm:gap-4 sm:rounded-3xl sm:border-4 sm:p-4 sm:shadow-[6px_6px_0_rgba(0,0,0,1)] max-[320px]:gap-2 max-[320px]:rounded-xl max-[320px]:border-2 max-[320px]:p-2"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border-3 border-black bg-[#FF8B00] text-xl text-black shadow-[3px_3px_0_rgba(0,0,0,1)] sm:h-12 sm:w-12 sm:rounded-2xl sm:text-2xl max-[320px]:h-8 max-[320px]:w-8 max-[320px]:rounded-lg max-[320px]:border-2 max-[320px]:text-lg">
                  <Icon />
                </span>
                <span className="text-xs font-black uppercase tracking-[0.2em] sm:text-sm sm:tracking-[0.25em] max-[320px]:text-[10px] max-[320px]:tracking-[0.15em]">
                  {name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-sm overflow-hidden rounded-[28px] border-3 border-black bg-white p-3 text-black shadow-[6px_6px_0_rgba(0,0,0,1)] sm:max-w-md sm:rounded-[32px] sm:border-4 sm:p-4 sm:shadow-[8px_8px_0_rgba(0,0,0,1)] max-[320px]:rounded-2xl max-[320px]:border-2 max-[320px]:p-2">
          <div className="rounded-[20px] border-3 border-black bg-[#FF8B00] p-3 shadow-[3px_3px_0_rgba(0,0,0,1)] sm:rounded-[24px] sm:p-4 sm:shadow-[4px_4px_0_rgba(0,0,0,1)] max-[320px]:rounded-xl max-[320px]:p-2">
            <div className="relative overflow-hidden rounded-xl border-4 border-black bg-black sm:rounded-2xl max-[320px]:rounded-lg max-[320px]:border-3">
              <Image
                src="/images/fire_tygo.gif"
                alt="$TYGO animated loop"
                width={440}
                height={440}
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <p className="mt-3 text-[10px] font-black uppercase tracking-[0.3em] text-black/80 sm:mt-4 sm:text-xs sm:tracking-[0.35em] max-[320px]:mt-2 max-[320px]:text-[9px] max-[320px]:tracking-[0.2em]">
              Stay wild. Stay tuned. More drops coming.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t-4 border-[#FF8B00]/50 pt-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          © {new Date().getFullYear()} $TYGO — Built for the jungle degens.
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;
