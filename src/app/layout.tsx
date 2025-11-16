import type { Metadata } from "next";
import { Luckiest_Guy, Inter } from "next/font/google";
import "./globals.css";

const titleFont = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
});

// Inter acts as technical fallback for --font-body;
// primary visual font is Freeman, configured in globals.css.
const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

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
    <html lang="en" className={`${titleFont.variable} ${bodyFont.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Freeman&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#020807] text-white antialiased">{children}</body>
    </html>
  );
}
