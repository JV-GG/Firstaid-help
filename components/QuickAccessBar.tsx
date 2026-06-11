import React from "react";
import Link from "next/link";
import { HeartPulse, Ban, Droplet } from "lucide-react";

export default function QuickAccessBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-base via-base/95 to-transparent md:hidden border-t border-white/5 backdrop-blur-md">
      <div className="max-w-md mx-auto">
        <div className="text-center text-[10px] font-mono font-bold tracking-widest text-severe-red mb-2 animate-pulse uppercase">
          🚨 CRITICAL QUICK ACCESS PROTOCOLS
        </div>
        <div className="grid grid-cols-3 gap-2">
          {/* CPR Link */}
          <Link
            href="/category/heart-cardiac/cardiac-arrest"
            className="flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-severe-red/10 border border-severe-red/30 text-severe-red hover:bg-severe-red/20 active:scale-95 transition-all text-center"
          >
            <HeartPulse className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase">CPR</span>
          </Link>

          {/* Choking Link */}
          <Link
            href="/category/choking/adult-choking"
            className="flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-accent-teal/10 border border-accent-teal/35 text-accent-teal hover:bg-accent-teal/15 active:scale-95 transition-all text-center"
          >
            <Ban className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase">CHOKING</span>
          </Link>

          {/* Bleeding Link */}
          <Link
            href="/category/bleeding-wounds/severe-bleeding"
            className="flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-moderate-yellow/10 border border-moderate-yellow/30 text-moderate-yellow hover:bg-moderate-yellow/20 active:scale-95 transition-all text-center"
          >
            <Droplet className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase">BLEEDING</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
