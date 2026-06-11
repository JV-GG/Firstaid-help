"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Bone, 
  Activity, 
  Flame, 
  Droplet, 
  Wind, 
  Heart, 
  Skull, 
  Thermometer, 
  ShieldAlert, 
  Brain,
  Plus
} from "lucide-react";

// Helper component for dynamic icon mapping
export function CategoryIcon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    Bone,
    Activity,
    Flame,
    Droplet,
    Wind,
    Heart,
    Skull,
    Thermometer,
    ShieldAlert,
    Brain,
  };
  const IconComponent = icons[name] || Activity;
  return <IconComponent className={className} />;
}

interface CategoryCardProps {
  slug: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  formula: string;
  bgImage?: string | null;
}

export default function CategoryCard({
  slug,
  name,
  icon,
  color,
  description,
  formula,
  bgImage,
}: CategoryCardProps) {
  return (
    <Link href={`/category/${slug}`} className="block h-full">
      <motion.div
        whileHover={{ 
          scale: 1.02,
          y: -4,
          boxShadow: `0 10px 30px -10px rgba(0, 229, 196, 0.15), 0 1px 1px 0 rgba(255, 255, 255, 0.05) inset`,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative h-full p-6 rounded-2xl glass-premium border border-white/[0.06] flex flex-col justify-between overflow-hidden group hover:border-accent-teal/40 hover:shadow-[0_0_30px_rgba(0,229,196,0.15)] transition-all duration-500"
      >


        {/* Color-coded subtle glow in top-right */}
        <div 
          className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
          style={{ backgroundColor: color }}
        />

        <div className="relative z-10">
          {/* Header Row */}
          <div className="flex items-start justify-between mb-4">
            <div 
              className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-accent-teal/30 group-hover:bg-accent-teal/5 transition-all duration-300"
              style={{ color: color }}
            >
              <CategoryIcon name={icon} className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            <div className="flex items-center gap-1.5 bg-accent-teal-dim border border-accent-teal/20 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold text-accent-teal tracking-wider uppercase shadow-[0_0_10px_rgba(0,229,196,0.1)]">
              {formula}
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="text-lg font-bold font-display text-text-primary mb-2 group-hover:text-accent-teal transition-colors duration-300 uppercase tracking-wide">
            {name}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed font-sans font-medium line-clamp-3">
            {description}
          </p>
        </div>

        {/* Action/Footer Link Indicator */}
        <div className="relative z-10 mt-6 flex items-center justify-between text-xs font-mono text-text-muted group-hover:text-accent-teal transition-colors duration-300">
          <span className="tracking-widest">VIEW GUIDELINES</span>
          <Plus className="w-4 h-4 transform group-hover:rotate-90 transition-transform duration-300" />
        </div>
      </motion.div>
    </Link>
  );
}
