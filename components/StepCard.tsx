"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { FirstAidStep } from "@/lib/firstaid-data";

interface StepCardProps {
  step: FirstAidStep;
  categorySlug?: string;
  typeId?: string;
}

export default function StepCard({ step, categorySlug, typeId }: StepCardProps) {
  const [imgError, setImgError] = useState(false);
  const imageSrc = `/images/steps/${categorySlug}_${typeId}_step${step.stepNumber}.png`;
  // Left-slide entrance animation
  const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 16
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md flex flex-col md:flex-row gap-6 hover:border-accent-teal/20 hover:bg-white/[0.03] transition-all duration-300 group"
    >
      {/* Content Column */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3.5 mb-3.5">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-teal text-base font-bold font-mono text-base shadow-[0_0_15px_rgba(0,229,196,0.3)] shrink-0 group-hover:scale-105 transition-transform duration-300">
              {step.stepNumber}
            </div>
            <h3 className="text-base md:text-lg font-bold font-display text-text-primary uppercase tracking-wide group-hover:text-accent-teal transition-colors duration-300">
              {step.title}
            </h3>
          </div>
          <p className="text-sm text-text-muted leading-relaxed font-sans">
            {step.description}
          </p>
        </div>

        {step.warning && (
          <div className="mt-4 p-3 rounded-xl bg-severe-red/5 border border-severe-red/20 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-severe-red shrink-0 mt-0.5 animate-pulse" />
            <span className="text-xs text-text-primary leading-normal">
              <span className="font-bold text-severe-red uppercase font-mono mr-1">Caution:</span>
              {step.warning}
            </span>
          </div>
        )}
      </div>

      {/* Stylized Neon Medical SVG Illustration OR Actual Photo */}
      <div className="w-full md:w-56 h-40 rounded-xl bg-base/50 border border-white/[0.04] relative overflow-hidden flex items-center justify-center shrink-0">
        {!imgError && categorySlug && typeId ? (
          <>
            <Image
              src={imageSrc}
              alt={step.imagePrompt}
              fill
              className="object-cover object-center opacity-90 transition-opacity duration-300 group-hover:opacity-100 mix-blend-screen"
              sizes="(max-width: 768px) 100vw, 224px"
              onError={() => setImgError(true)}
            />
            <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-base/80 backdrop-blur-[2px] px-1.5 py-0.5 rounded text-[8px] tracking-tight border border-white/5 uppercase text-center text-text-muted select-none pointer-events-none z-10 font-mono">
              For illustration purposes only
            </div>
          </>
        ) : (
          <>
            {/* Medical Grid Pattern */}
            <svg className="absolute inset-0 w-full h-full text-white/[0.02]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse">
                  <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Clinical Outline Circles */}
            <div className="absolute w-24 h-24 rounded-full border border-white/[0.02]" />
            <div className="absolute w-36 h-36 rounded-full border border-dashed border-white/[0.01]" />

            {/* Dynamic Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 z-10">
              <div className="text-[9px] text-accent-teal font-mono uppercase tracking-widest bg-accent-teal/10 px-2 py-0.5 rounded border border-accent-teal/15 w-fit">
                ILLUST {step.stepNumber}
              </div>
              
              <div className="flex items-center justify-center flex-1">
                {/* Minimal neon medical cross/pulse */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-8 h-8 rounded-full bg-accent-teal/5 border border-accent-teal/10 group-hover:animate-ping duration-1000" />
                  <div className="w-7 h-7 border border-accent-teal/30 flex items-center justify-center rounded bg-accent-teal/5 shadow-[0_0_10px_rgba(0,229,196,0.1)] group-hover:border-accent-teal group-hover:shadow-[0_0_15px_rgba(0,229,196,0.3)] transition-all duration-300">
                    <div className="w-4 h-0.5 bg-accent-teal" />
                    <div className="w-0.5 h-4 bg-accent-teal absolute" />
                  </div>
                </div>
              </div>

              <div className="text-[9px] text-text-muted font-mono truncate text-center uppercase tracking-wider max-w-full">
                {step.imagePrompt}
              </div>
            </div>

            {/* Background Neon Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent-teal/5 rounded-full blur-2xl group-hover:bg-accent-teal/15 transition-all duration-300 pointer-events-none" />
          </>
        )}
      </div>
    </motion.div>
  );
}
