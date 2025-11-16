import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "$TYGO — Wild Degen of Solana",
  description:
    "$TYGO the Tiger is the fearless Solana mascot fusing meme energy, art, and daily animation into unstoppable jungle hype.",
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-[#020807] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
