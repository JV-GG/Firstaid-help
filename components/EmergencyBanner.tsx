import React from "react";
import { Phone } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <div className="w-full bg-severe-red/10 border-y border-severe-red/30 backdrop-blur-md py-3 px-4 flex items-center justify-center gap-3 relative z-40">
      <span className="flex h-2.5 w-2.5 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-severe-red opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-severe-red"></span>
      </span>
      <Phone className="w-4 h-4 text-severe-red animate-bounce" />
      <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-text-primary text-center">
        🚨 EMERGENCY ALERT: CALL <span className="text-severe-red font-extrabold underline">999</span> IMMEDIATELY FOR LIFE-THREATENING EMERGENCIES
      </span>
    </div>
  );
}
