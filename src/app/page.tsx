import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { GallerySection } from "@/sections/Gallery";
import { BuyPortalSection } from "@/sections/BuyPortal";
import { TokenomicsSection } from "@/sections/Tokenomics";
import { RoadmapSection } from "@/sections/Roadmap";
import { HowToBuySection } from "@/sections/HowToBuy";
import ComicMarquee from "@/components/ComicMarquee";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      <Navbar />

      <main className="relative">
        <Hero />

        <AboutSection />
        <ComicMarquee />
        <GallerySection />
        <BuyPortalSection />
        <TokenomicsSection />
        <RoadmapSection />
        <HowToBuySection />
      </main>

      {/* Footer */}
      {/* <footer className="border-t border-[#2d5016]/50 bg-[#0d2817]/95 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <p className="text-[#a8d5ba]">© 2024 $TYGO - Wild Degen in the Crypto Jungle 🐅</p>
        </div>
      </footer> */}
    </div>
  );
}