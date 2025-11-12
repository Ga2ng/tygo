import type { Metadata } from "next";
import { Bangers, Inter } from "next/font/google";
import "./globals.css";

const titleFont = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "$TYGO — Wild Degen of Solana",
  description:
    "$TYGO the Tiger is the fearless Solana mascot fusing meme energy, art, and daily animation into unstoppable jungle hype.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${titleFont.variable} ${bodyFont.variable}`}>
      <body className="font-sans bg-[#020807] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
