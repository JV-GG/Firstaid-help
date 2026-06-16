"use client";

import React from "react";
import Link from "next/link";
import { Heart, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#070b16] border-t border-white/[0.04] relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 border border-accent-teal/30 flex items-center justify-center rounded bg-accent-teal/5 shadow-[0_0_10px_rgba(0,229,196,0.1)] group-hover:border-accent-teal transition-all duration-300">
                <div className="w-4.5 h-0.5 bg-accent-teal" />
                <div className="w-0.5 h-4.5 bg-accent-teal absolute" />
              </div>
              <span className="text-sm font-bold font-display tracking-widest text-text-primary uppercase group-hover:text-accent-teal transition-colors">
                FIRST AID GUIDE
              </span>
            </Link>
            <p className="text-xs text-text-muted leading-relaxed font-sans max-w-sm">
              Providing immediate, clinical-grade step-by-step instructions for acute medical events. Empowered by interactive AI support.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono font-bold text-accent-teal uppercase tracking-widest">
              Emergency Taxonomies
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link href="/category/heart-cardiac" className="text-text-muted hover:text-accent-teal transition-colors uppercase tracking-wider font-mono">
                Cardiology
              </Link>
              <Link href="/category/respiratory" className="text-text-muted hover:text-accent-teal transition-colors uppercase tracking-wider font-mono">
                Respiratory
              </Link>
              <Link href="/category/bleeding-wounds" className="text-text-muted hover:text-accent-teal transition-colors uppercase tracking-wider font-mono">
                Bleeding
              </Link>
              <Link href="/category/burns" className="text-text-muted hover:text-accent-teal transition-colors uppercase tracking-wider font-mono">
                Burns
              </Link>
              <Link href="/category/fractures" className="text-text-muted hover:text-accent-teal transition-colors uppercase tracking-wider font-mono">
                Fractures
              </Link>
              <Link href="/" className="text-text-muted hover:text-accent-teal transition-colors uppercase tracking-wider font-mono">
                All Protocols
              </Link>
            </div>
          </div>

          {/* Document Legal Links */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono font-bold text-accent-teal uppercase tracking-widest">
              Legal Documents
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link href="/terms-and-conditions" className="text-text-muted hover:text-accent-teal transition-colors uppercase tracking-wider flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  Terms & Conditions
                </Link>
              </li>
              <li className="text-[10px] text-severe-red flex items-center gap-1.5 font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-severe-red animate-pulse" />
                Emergency Line: 999
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[10px] font-mono text-text-muted text-center md:text-left leading-relaxed max-w-xl">
            <p className="font-bold text-text-primary uppercase tracking-wider mb-1.5 flex items-center justify-center md:justify-start gap-1">
              <span>⚠️ MEDICAL DISCLAIMER</span>
            </p>
            <p>
              This guide is for informational and educational purposes only, and is not a substitute for professional medical advice, diagnosis, or treatment. All instructional pictures and illustrations are for illustration purposes only.
            </p>
          </div>

          <div className="text-[10px] font-mono text-text-muted text-center md:text-right shrink-0">
            <p className="uppercase tracking-wider">
              &copy; {new Date().getFullYear()} First Aid Guide. All Rights Reserved.
            </p>
            <p className="text-[9px] text-text-muted/60 mt-1">
              This website is built by{" "}
              <a
                href="https://junvoon.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-teal hover:underline"
              >
                JVCHEN
              </a>
            </p>
            <p className="text-[9px] text-text-muted/60 mt-1">
              Clinical protocols adhere to international rescue standards.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mobile-only safe padding to prevent bottom overlay overlapping by sticky navigation bar */}
      <div className="h-32 md:hidden" />
    </footer>
  );
}
