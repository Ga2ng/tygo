"use client";

import { FaCheckCircle, FaBullseye, FaRocket, FaFire, FaBrain, FaGem, FaLaptop, FaPuzzlePiece, FaFilm, FaChartLine, FaVideo, FaMusic, FaTrophy } from "react-icons/fa";
import { GiGorilla, GiVolcano, GiGalaxy, GiBrickWall, GiBaseballBat } from "react-icons/gi";
import { PiDiscoBall } from "react-icons/pi";
import React from "react";

type GoalItem = {
  icon: React.ReactNode;
  label: string;
};

const marketCapGoals: GoalItem[] = [
  { icon: <FaCheckCircle />, label: "$100K Market Cap" },
  { icon: <FaBullseye />, label: "$500K Market Cap" },
  { icon: <FaRocket />, label: "$1M Market Cap" },
  { icon: <FaFire />, label: "$5M Market Cap" },
  { icon: <FaBrain />, label: "$10M Market Cap" },
  { icon: <FaGem />, label: "$50M Market Cap" },
  { icon: <GiGorilla />, label: "$100M Market Cap" },
  { icon: <GiVolcano />, label: "$500M Market Cap" },
  { icon: <PiDiscoBall />, label: "$1B Market Cap" },
  { icon: <GiGalaxy />, label: "$5B Market Cap" },
];

const buildGoals: GoalItem[] = [
  { icon: <GiBrickWall />, label: "Establish main platforms (TG, X, IG, TT, YT, Website)" },
  { icon: <FaPuzzlePiece />, label: "DEX Screener listing" },
  { icon: <FaLaptop />, label: "CoinMarketCap official listing" },
  { icon: <FaPuzzlePiece />, label: "CoinGecko listing" },
  { icon: <FaFilm />, label: "Daily drawings & new art drops" },
  { icon: <FaFilm />, label: "Full-time animation team" },
  { icon: <GiBaseballBat />, label: "Yeti merch design & release" },
  { icon: <FaChartLine />, label: "100K Instagram followers" },
  { icon: <FaVideo />, label: "100K YouTube subscribers" },
  { icon: <FaMusic />, label: "100K TikTok followers" },
  { icon: <FaTrophy />, label: "Yeti Art Contests & creative bounties" },
];

function GoalList({ title, goals }: { title: string; goals: GoalItem[] }) {
  return (
    <div className="flex flex-col gap-3 sm:gap-5">
      <h3 className="inline-flex items-center gap-2 text-xl font-black uppercase tracking-[0.2em] text-[#FF8B00] sm:gap-3 sm:text-2xl lg:text-3xl lg:tracking-[0.25em] font-freeman">
        {title}
      </h3>
      <div className="space-y-2 sm:space-y-3">
        {goals.map((goal) => (
          <div
            key={goal.label}
            className="group flex items-center gap-3 rounded-2xl border-3 border-black bg-white p-3 text-black shadow-[4px_4px_0_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(0,0,0,1)] sm:gap-4 sm:rounded-3xl sm:border-4 sm:p-4"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-black bg-[#FF8B00] text-xl text-black shadow-[2px_2px_0_rgba(0,0,0,1)] sm:h-12 sm:w-12 sm:rounded-2xl sm:border-3 sm:text-2xl sm:shadow-[3px_3px_0_rgba(0,0,0,1)]">
              {goal.icon}
            </span>
            <span className="flex-1 text-[10px] font-black uppercase leading-snug tracking-[0.15em] sm:text-xs sm:tracking-[0.2em] lg:text-sm lg:tracking-[0.25em] font-freeman">
              {goal.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative bg-black py-10 text-white sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:gap-12 sm:px-10 lg:px-12">
        <div className="space-y-3 text-center sm:space-y-4 sm:text-left">
          <span className="inline-flex items-center gap-2 self-center rounded-full border-3 border-black bg-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-black shadow-[3px_3px_0_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_rgba(0,0,0,1)] sm:self-start sm:gap-3 sm:border-4 sm:px-6 sm:py-2 sm:text-xs sm:tracking-[0.35em] sm:shadow-[5px_5px_0_rgba(0,0,0,1)] sm:hover:translate-x-[3px] sm:hover:translate-y-[3px] sm:hover:shadow-[2px_2px_0_rgba(0,0,0,1)]">
            ROADMAP
          </span>
          <h2 className="text-3xl font-black uppercase text-[#FF8B00] sm:text-4xl lg:text-6xl comic-shadow-light">
            The Jungle Expansion Plan
          </h2>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70 sm:text-sm sm:tracking-[0.2em] lg:text-base lg:tracking-[0.25em]">
            FROM MARKET CAP MILESTONES TO FULL MEDIA DOMINATION.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-10 lg:grid-cols-2">
          <GoalList title="MARKET CAP GOALS" goals={marketCapGoals} />
          <GoalList title="BUILD & EXPANSION GOALS" goals={buildGoals} />
        </div>
      </div>
    </section>
  );
}