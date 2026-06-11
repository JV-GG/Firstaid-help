import React from "react";

export default function CategoryLoading() {
  return (
    <div className="min-h-screen bg-base max-w-7xl mx-auto w-full px-6 py-10 relative animate-pulse">
      
      {/* Breadcrumb Skeleton */}
      <div className="h-4 w-48 bg-white/5 rounded mb-8" />

      {/* Back Link Skeleton */}
      <div className="h-4 w-40 bg-white/5 rounded mb-8" />

      {/* Header Panel Skeleton */}
      <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] mb-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/5 shrink-0" />
            <div className="space-y-3">
              <div className="h-8 w-64 bg-white/10 rounded" />
              <div className="h-4 w-96 bg-white/5 rounded" />
            </div>
          </div>
          <div className="h-12 w-20 bg-white/10 rounded shrink-0" />
        </div>
        
        {/* Formula breakdown placeholders */}
        <div className="pt-6 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-20 bg-white/5 rounded-xl border border-white/[0.04]" />
          ))}
        </div>
      </div>

      {/* Subtypes Section */}
      <div>
        <div className="h-4 w-28 bg-white/5 rounded mb-2" />
        <div className="h-6 w-52 bg-white/10 rounded mb-8" />

        {/* Grid cards skeletons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="p-5 h-48 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div className="h-4 w-16 bg-white/5 rounded" />
                  <div className="h-5 w-20 bg-white/5 rounded-full" />
                </div>
                <div className="h-5 w-40 bg-white/10 rounded" />
                <div className="h-4 w-full bg-white/5 rounded" />
                <div className="h-4 w-5/6 bg-white/5 rounded" />
              </div>
              <div className="h-4 w-24 bg-white/5 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
