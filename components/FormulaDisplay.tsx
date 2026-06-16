"use client";

import React from "react";
import { motion } from "framer-motion";

interface FormulaDisplayProps {
  formula: string;
  expanded: string[];
}

export default function FormulaDisplay({ formula, expanded }: FormulaDisplayProps) {
  // Strip periods to get letters
  const letters = formula.replace(/\./g, "").split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 14,
      },
    },
  };

  return (
    <div className="w-full my-6">
      <div className="text-xs text-text-muted font-mono uppercase tracking-widest mb-3">
        Action Protocol Acronym: <span className="text-accent-teal font-bold">{formula}</span>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {letters.map((letter, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md hover:border-accent-teal/30 transition-all duration-300 group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-teal-dim text-accent-teal font-mono text-2xl font-bold border border-accent-teal/20 group-hover:scale-105 group-hover:bg-accent-teal group-hover:text-base-dark transition-all duration-300">
              {letter}
            </div>
            <div>
              <div className="text-[10px] text-text-muted font-mono uppercase tracking-wider">Phase {idx + 1}</div>
              <div className="text-sm md:text-base font-bold text-text-primary font-display group-hover:text-accent-teal transition-colors duration-300">
                {expanded[idx] || "Expand"}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
