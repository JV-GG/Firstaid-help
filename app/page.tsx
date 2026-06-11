"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { firstAidCategories } from "@/lib/firstaid-data";
import CategoryCard from "@/components/CategoryCard";
import ChatDrawer from "@/components/ChatDrawer";
import QuickAccessBar from "@/components/QuickAccessBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-base overflow-x-hidden pb-24 md:pb-6">
      
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[60vh] flex flex-col items-center justify-center text-center px-6 border-b border-white/[0.04] bg-base overflow-hidden">
        

        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-base via-base/80 to-transparent pointer-events-none"></div>
        
        {/* ECG Heartbeat Line Background */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-20 pointer-events-none overflow-hidden">
          <svg 
            viewBox="0 0 400 100" 
            className="w-full max-w-4xl h-40 text-accent-teal"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Flat baseline */}
            <line x1="0" y1="50" x2="160" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <line x1="240" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            
            {/* Animated ECG Pulse */}
            <motion.path
              d="M 0,50 L 150,50 L 160,50 L 167,25 L 175,85 L 183,40 L 191,55 L 198,50 L 400,50"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ 
                pathLength: [0, 1, 1], 
                pathOffset: [0, 0, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 px-4 py-1.5 rounded-full glass-premium border border-accent-teal/30 text-[10px] md:text-xs font-mono font-bold text-accent-teal tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(0,229,196,0.2)]"
          >
            Medical Emergency Protocol Guide
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-display text-text-primary tracking-tight uppercase leading-[1.1] mb-6 drop-shadow-2xl"
          >
            FIRST AID. <br className="md:hidden" /><span className="text-accent-teal text-glow-teal">FAST.</span> RIGHT.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl text-text-muted max-w-2xl font-medium leading-relaxed font-sans"
          >
            Immediate, clinical-grade step-by-step instructions for acute medical events and direct AI assistant support.
          </motion.p>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-xs font-mono font-bold text-accent-teal uppercase tracking-widest mb-2">
              EMERGENCY TAXONOMY
            </h2>
            <p className="text-2xl md:text-3xl font-bold font-display text-text-primary uppercase tracking-wide">
              SELECT CATEGORY PROTOCOL
            </p>
          </div>
          <div className="text-sm font-sans text-text-muted max-w-sm leading-relaxed">
            All instructions follow standard medical directives (RICE, CAB, DRI). Ensure safety before administering treatment.
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {firstAidCategories.map((cat, idx) => {
            // Determine background image based on slug
            let bgImage = null;
            if (cat.slug === "fractures") bgImage = "category_fracture";
            if (cat.slug === "sprains-strains") bgImage = "category_sprain";
            if (cat.slug === "burns") bgImage = "category_burn";

            return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <CategoryCard
                slug={cat.slug}
                name={cat.name}
                icon={cat.icon}
                color={cat.color}
                description={cat.description}
                formula={cat.formula}
                bgImage={bgImage}
              />
            </motion.div>
          )})}
        </div>
      </section>

      {/* Interactive Chat Overlay */}
      <ChatDrawer />

      {/* Mobile Sticky Quick Access Bar */}
      <QuickAccessBar />
    </div>
  );
}
