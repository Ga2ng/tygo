import Image from "next/image";
import Link from "next/link";
import {
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  { name: "Telegram", href: "https://t.me/", icon: FaTelegramPlane },
  { name: "Twitter", href: "https://twitter.com/", icon: FaTwitter },
  { name: "YouTube", href: "https://youtube.com/", icon: FaYoutube },
  { name: "TikTok", href: "https://www.tiktok.com/", icon: FaTiktok },
  { name: "Instagram", href: "https://www.instagram.com/", icon: FaInstagram },
];

export function FooterSection() {
  return (
    <footer className="relative py-16 text-white sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:px-12">
        <div className="flex w-full flex-col gap-6">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-3 rounded-full border-4 border-black bg-white px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-black shadow-[5px_5px_0_rgba(0,0,0,1)]">
              Our social media will be
            </span>
            <h2 className="text-4xl font-black uppercase text-[#FF8B00] sm:text-5xl">
              Link Up With The Jungle
            </h2>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-base">
              The loudest degen energy lives on these official channels.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {socials.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-3xl border-4 border-black bg-white p-4 text-black shadow-[6px_6px_0_rgba(0,0,0,1)] transition-all duration-200 -translate-x-1 -translate-y-1 hover:translate-x-0 hover:translate-y-0 hover:shadow-[2px_2px_0_rgba(0,0,0,1)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-3 border-black bg-[#FF8B00] text-2xl text-black shadow-[3px_3px_0_rgba(0,0,0,1)]">
                  <Icon />
                </span>
                <span className="text-sm font-black uppercase tracking-[0.25em]">
                  {name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-md overflow-hidden rounded-[32px] border-4 border-black bg-white p-4 text-black shadow-[8px_8px_0_rgba(0,0,0,1)]">
          <div className="rounded-[24px] border-3 border-black bg-[#FF8B00] p-4 shadow-[4px_4px_0_rgba(0,0,0,1)]">
            <div className="relative overflow-hidden rounded-2xl border-4 border-black bg-black">
              <Image
                src="/images/troll_tygo.gif"
                alt="$TYGO animated loop"
                width={440}
                height={440}
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.35em] text-black/80">
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
