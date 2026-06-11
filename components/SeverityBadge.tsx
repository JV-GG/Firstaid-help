import React from "react";

interface SeverityBadgeProps {
  severity: "mild" | "moderate" | "severe";
}

export default function SeverityBadge({ severity }: SeverityBadgeProps) {
  const styles = {
    mild: "bg-mild-green/10 text-mild-green border-mild-green/30",
    moderate: "bg-moderate-yellow/10 text-moderate-yellow border-moderate-yellow/30",
    severe: "bg-severe-red/10 text-severe-red border-severe-red/30 animate-pulse",
  };

  const labels = {
    mild: "Mild Protocol",
    moderate: "Moderate Urgency",
    severe: "CRITICAL / SEVERE",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider border ${styles[severity]}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 inline-block" />
      {labels[severity]}
    </span>
  );
}
