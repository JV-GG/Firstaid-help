"use client";

import React, { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, HelpCircle } from "lucide-react";
import { firstAidCategories } from "@/lib/firstaid-data";
import { CategoryIcon } from "@/components/CategoryCard";
import FormulaDisplay from "@/components/FormulaDisplay";
import SeverityBadge from "@/components/SeverityBadge";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ChatDrawer from "@/components/ChatDrawer";
import QuickAccessBar from "@/components/QuickAccessBar";

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export default function CategoryPage({ params }: PageProps) {
  // Support both synchronous Next.js 14 and asynchronous Next.js 15+ params
  const resolvedParams = params && "then" in params ? use(params) : (params as { slug: string });
  const slug = resolvedParams?.slug;

  const category = firstAidCategories.find((cat) => cat.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-base text-text-primary flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold font-display text-severe-red mb-3">CATEGORY PROTOCOL NOT SEEDED</h1>
        <p className="text-text-muted mb-6">The requested emergency category cannot be found in our database.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-accent-teal/10 hover:text-accent-teal hover:border-accent-teal/30 transition-all font-mono text-xs">
          <ArrowLeft className="w-4 h-4" /> RETURN TO DASHBOARD
        </Link>
      </div>
    );
  }

  // Animation variants
  const blurIn = {
    hidden: { filter: "blur(10px)", opacity: 0, y: 15 },
    visible: { 
      filter: "blur(0px)", 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="min-h-screen bg-base flex flex-col justify-between pb-24 md:pb-8 relative">
      
      {/* Upper Area */}
      <div className="max-w-7xl mx-auto w-full px-6 py-6 md:py-10">
        
        {/* Navigation Breadcrumb */}
        <BreadcrumbNav items={[{ label: category.name }]} />

        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-accent-teal mb-8 group transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
          BACK TO EMERGENCY TAXONOMY
        </Link>

        {/* Category Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={blurIn}
          className="p-6 md:p-8 rounded-3xl glass-premium relative overflow-hidden mb-10"
        >
          {/* Decorative Glow */}
          <div 
            className="absolute -top-20 -left-20 w-48 h-48 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ backgroundColor: category.color }}
          />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-5">
              {/* Category Icon Badge */}
              <div 
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-lg shrink-0"
                style={{ color: category.color }}
              >
                <CategoryIcon name={category.icon} className="w-9 h-9" />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold font-display text-text-primary tracking-wide uppercase leading-tight">
                  {category.name} Protocol
                </h1>
                <p className="text-sm text-text-muted max-w-2xl mt-2 font-medium leading-relaxed font-sans">
                  {category.description}
                </p>
              </div>
            </div>
            
            {/* Quick Summary Formula Badge */}
            <div className="flex flex-col md:items-end font-mono">
              <span className="text-[10px] text-text-muted tracking-widest uppercase">Emergency Formula</span>
              <span className="text-2xl md:text-3xl font-extrabold text-accent-teal mt-0.5 tracking-wider drop-shadow-[0_0_10px_rgba(0,229,196,0.25)]">
                {category.formula}
              </span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            {/* Animated Acronym Display */}
            <FormulaDisplay formula={category.formula} expanded={category.formulaExpanded} />
          </div>
        </motion.div>

        {/* Sub-types List */}
        <div>
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold text-accent-teal uppercase tracking-widest mb-1.5">
              Available Protocols
            </h2>
            <p className="text-lg font-bold font-display text-text-primary uppercase tracking-wide">
              Select Specific Condition / Area
            </p>
          </div>

          {/* Subtypes Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {category.types.map((type) => (
              <motion.div key={type.id} variants={cardVariants}>
                <Link href={`/category/${category.slug}/${type.id}`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      y: -4,
                      boxShadow: "0 15px 30px -10px rgba(0, 229, 196, 0.15), 0 1px 1px 0 rgba(255,255,255,0.05) inset"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-5 rounded-2xl glass-premium flex flex-col justify-between h-full group hover:border-accent-teal/40 transition-all duration-300"
                  >
                    <div>
                      {/* Badge and Title Row */}
                      <div className="flex items-center justify-between mb-3.5 gap-2">
                        <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
                          {type.bodyPart || "General"}
                        </span>
                        <SeverityBadge severity={type.severity} />
                      </div>

                      {/* Name */}
                      <h3 className="text-base font-bold font-display text-text-primary uppercase tracking-wide mb-2 group-hover:text-accent-teal transition-colors duration-300">
                        {type.name}
                      </h3>
                      
                      {/* Overview */}
                      <p className="text-xs md:text-sm text-text-muted leading-relaxed line-clamp-3">
                        {type.overview}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted group-hover:text-accent-teal transition-colors duration-300">
                      <span>OPEN PROTOCOL</span>
                      <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Chat Drawer */}
      <ChatDrawer />

      {/* Mobile Sticky Quick Access */}
      <QuickAccessBar />
    </div>
  );
}
