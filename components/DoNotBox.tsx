import React from "react";
import { AlertOctagon } from "lucide-react";

interface DoNotBoxProps {
  doNots: string[];
}

export default function DoNotBox({ doNots }: DoNotBoxProps) {
  if (!doNots || doNots.length === 0) return null;

  return (
    <div className="p-5 rounded-2xl bg-severe-red/5 border border-severe-red/20 backdrop-blur-md my-6 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-severe-red/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex items-start gap-3 relative z-10">
        <AlertOctagon className="w-5 h-5 text-severe-red shrink-0 mt-0.5 animate-pulse" />
        <div className="flex-1">
          <h3 className="font-display font-bold text-severe-red text-sm md:text-base uppercase tracking-wide mb-3">
            CRITICAL CONTRAINDICATIONS (DO NOT)
          </h3>
          <ul className="space-y-2 text-sm text-text-primary">
            {doNots.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-severe-red font-bold select-none shrink-0 text-base leading-none">×</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
