"use client";

import React, { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, AlertCircle, Calendar, ShieldAlert, ArrowRight } from "lucide-react";
import { firstAidCategories } from "@/lib/firstaid-data";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SeverityBadge from "@/components/SeverityBadge";
import DoNotBox from "@/components/DoNotBox";
import EmergencyBanner from "@/components/EmergencyBanner";
import StepCard from "@/components/StepCard";
import ChatDrawer from "@/components/ChatDrawer";
import QuickAccessBar from "@/components/QuickAccessBar";

interface PageProps {
  params: Promise<{ slug: string; type: string }> | { slug: string; type: string };
}

export default function TypeDetailPage({ params }: PageProps) {
  // Support Next.js 14 and 15+ async params resolution
  const resolvedParams = params && "then" in params 
    ? use(params) 
    : (params as { slug: string; type: string });
    
  const { slug, type } = resolvedParams || {};

  const category = firstAidCategories.find((cat) => cat.slug === slug);
  const typeData = category?.types.find((t) => t.id === type);

  if (!category || !typeData) {
    return (
      <div className="min-h-screen bg-base text-text-primary flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold font-display text-severe-red mb-3">PROTOCOL DETAILS NOT FOUND</h1>
        <p className="text-text-muted mb-6">We could not locate this specific first aid sub-protocol in our database.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-accent-teal/10 hover:text-accent-teal hover:border-accent-teal/30 transition-all font-mono text-xs">
          <ArrowLeft className="w-4 h-4" /> RETURN TO DASHBOARD
        </Link>
      </div>
    );
  }

  // Get other types in this category for suggestions
  const relatedConditions = category.types
    .filter((t) => t.id !== typeData.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-base flex flex-col justify-between relative pb-28">
      
      {/* Sticky Header with Details & Severity */}
      <header className="sticky top-0 z-30 w-full bg-surface/85 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link 
              href={`/category/${category.slug}`} 
              className="p-2 rounded-lg hover:bg-white/5 text-text-muted hover:text-text-primary transition-colors cursor-pointer shrink-0"
              aria-label="Back to Category"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <div className="text-[10px] font-mono text-text-muted uppercase tracking-wider flex items-center gap-1.5">
                <span>{category.name} Protocol</span>
                <span>/</span>
                <span className="text-accent-teal font-semibold">{typeData.bodyPart || "General"}</span>
              </div>
              <h1 className="text-base sm:text-lg font-bold font-display text-text-primary uppercase tracking-wide">
                {typeData.name} Guidelines
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <SeverityBadge severity={typeData.severity} />
          </div>
        </div>
      </header>

      {/* Sticky Acronym Formula Reminder Banner (always visible right below header) */}
      <div className="sticky top-[73px] z-20 w-full bg-accent-teal/10 border-b border-accent-teal/20 backdrop-blur-md px-6 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono">
          <span className="text-text-primary flex items-center gap-1">
            <span className="text-accent-teal font-bold uppercase">Formula Reminder:</span>
            <span className="text-text-muted font-bold tracking-wider">{typeData.formula.acronym}</span>
          </span>
          <span className="text-text-muted hidden md:inline truncate max-w-xl text-right">
            {typeData.formula.steps.join(" → ")}
          </span>
        </div>
      </div>

      {/* Main Body Grid */}
      <div className="max-w-7xl mx-auto w-full px-6 py-8 flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left/Middle Column: Warning, Steps, and Emergency */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Breadcrumbs (for desktop context) */}
          <div className="hidden md:block">
            <BreadcrumbNav 
              items={[
                { label: category.name, href: `/category/${category.slug}` },
                { label: typeData.name }
              ]} 
            />
          </div>

          {/* Clinical Overview */}
          <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04]">
            <h2 className="text-xs font-mono font-bold text-text-muted uppercase tracking-widest mb-2">
              Clinical Overview
            </h2>
            <p className="text-sm md:text-base text-text-primary leading-relaxed">
              {typeData.overview}
            </p>
          </div>

          {/* DO NOT warnings (Red-bordered warning box FIRST) */}
          <DoNotBox doNots={typeData.doNots} />

          {/* Step-by-Step Instructions */}
          <div>
            <div className="mb-6">
              <h2 className="text-xs font-mono font-bold text-accent-teal uppercase tracking-widest mb-1">
                Emergency Action Procedure
              </h2>
              <p className="text-lg font-bold font-display text-text-primary uppercase tracking-wide">
                Step-by-Step Guidance
              </p>
            </div>
            
            <div className="space-y-6">
              {typeData.steps.map((step) => (
                <StepCard key={step.stepNumber} step={step} categorySlug={category.slug} typeId={typeData.id} />
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Sidebar (When to seek help, recovery, related conditions) */}
        <div className="space-y-8 lg:sticky lg:top-[125px] h-fit">
          
          {/* When to Call Emergency (🚨 Red alert box) */}
          <div className="p-6 rounded-2xl bg-severe-red/5 border border-severe-red/20 backdrop-blur-md relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-severe-red/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-2 text-severe-red font-display font-bold text-sm uppercase tracking-wide mb-4 relative z-10">
              <span className="text-lg">🚨</span>
              <span>WHEN TO CALL EMERGENCY SERVICES</span>
            </div>
            <ul className="space-y-3 text-xs md:text-sm text-text-primary relative z-10">
              {typeData.whenToSeekHelp.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-severe-red font-bold select-none shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recovery Timeline Estimate */}
          {typeData.estimatedRecovery && (
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
              <div className="flex items-center gap-2 text-accent-teal font-display font-bold text-sm uppercase tracking-wide mb-3">
                <Calendar className="w-4 h-4 text-accent-teal" />
                <span>ESTIMATED RECOVERY TIMELINE</span>
              </div>
              <p className="text-2xl font-bold font-display text-text-primary">
                {typeData.estimatedRecovery}
              </p>
              <p className="text-xs text-text-muted mt-1 font-sans">
                Timeline is typical for uncomplicated healing. Always follow doctor guidance.
              </p>
            </div>
          )}

          {/* Related Conditions */}
          {relatedConditions.length > 0 && (
            <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04]">
              <div className="flex items-center gap-2 text-text-primary font-display font-bold text-xs uppercase tracking-wider mb-4">
                <ShieldAlert className="w-4 h-4 text-text-muted" />
                <span>RELATED PROTOCOLS</span>
              </div>
              <div className="space-y-3">
                {relatedConditions.map((rel) => (
                  <Link 
                    key={rel.id} 
                    href={`/category/${category.slug}/${rel.id}`}
                    className="block p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-accent-teal/30 hover:bg-accent-teal/5 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[9px] font-mono text-text-muted uppercase">
                          {rel.bodyPart || "General"}
                        </div>
                        <div className="text-xs font-bold text-text-primary uppercase tracking-wide group-hover:text-accent-teal transition-colors mt-0.5">
                          {rel.name}
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:translate-x-0.5 group-hover:text-accent-teal transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Sticky Bottom Emergency Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-30">
        <EmergencyBanner />
      </div>

      {/* Floating Chat Drawer */}
      <ChatDrawer />

      {/* Mobile Sticky Quick Access */}
      <QuickAccessBar />
    </div>
  );
}
