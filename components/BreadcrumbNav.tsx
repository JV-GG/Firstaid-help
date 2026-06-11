import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav className="flex items-center space-x-2 text-xs font-mono text-text-muted mb-6 overflow-x-auto whitespace-nowrap py-1 scrollbar-none">
      <Link href="/" className="flex items-center hover:text-accent-teal transition-colors shrink-0">
        <Home className="w-3.5 h-3.5 mr-1" />
        DASHBOARD
      </Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3.5 h-3.5 text-white/20 shrink-0" />
          {item.href ? (
            <Link href={item.href} className="hover:text-accent-teal transition-colors shrink-0 uppercase">
              {item.label}
            </Link>
          ) : (
            <span className="text-text-primary shrink-0 uppercase font-semibold">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
