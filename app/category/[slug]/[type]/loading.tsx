import React from "react";

export default function TypeDetailLoading() {
  return (
    <div className="min-h-screen bg-base-dark relative pb-28 animate-pulse">
      
      {/* Header Skeleton */}
      <div className="w-full bg-surface border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 shrink-0" />
            <div className="space-y-2">
              <div className="h-3 w-32 bg-white/5 rounded" />
              <div className="h-5 w-48 bg-white/10 rounded" />
            </div>
          </div>
          <div className="h-6 w-24 bg-white/5 rounded-full" />
        </div>
      </div>

      {/* Formula reminder banner skeleton */}
      <div className="w-full bg-white/[0.02] border-b border-white/5 px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div className="h-3 w-40 bg-white/5 rounded" />
          <div className="h-3 w-64 bg-white/5 rounded hidden md:block" />
        </div>
      </div>

      {/* Grid Content Skeletons */}
      <div className="max-w-7xl mx-auto w-full px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="h-4 w-48 bg-white/5 rounded hidden md:block mb-4" />
          
          {/* Overview Box */}
          <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04] space-y-2">
            <div className="h-3 w-24 bg-white/5 rounded" />
            <div className="h-4 w-full bg-white/5 rounded" />
            <div className="h-4 w-5/6 bg-white/5 rounded" />
          </div>

          {/* DoNotBox skeleton */}
          <div className="h-32 rounded-2xl bg-white/[0.02] border border-white/[0.06]" />

          {/* Steps title skeleton */}
          <div className="space-y-2">
            <div className="h-3 w-28 bg-white/5 rounded" />
            <div className="h-5 w-52 bg-white/10 rounded" />
          </div>

          {/* Steps cards skeletons */}
          <div className="space-y-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] h-40" />
            ))}
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          {/* Emergency Alert skeleton */}
          <div className="h-40 rounded-2xl bg-white/[0.02] border border-white/[0.06]" />

          {/* Recovery Estimate skeleton */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
            <div className="h-4 w-40 bg-white/5 rounded" />
            <div className="h-8 w-28 bg-white/10 rounded" />
          </div>

          {/* Related Protocols skeleton */}
          <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04] space-y-3">
            <div className="h-4 w-28 bg-white/5 rounded" />
            <div className="h-12 w-full bg-white/[0.02] rounded-xl" />
            <div className="h-12 w-full bg-white/[0.02] rounded-xl" />
          </div>
        </div>

      </div>
    </div>
  );
}
