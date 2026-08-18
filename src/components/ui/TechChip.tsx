import React from 'react';

export interface TechChipProps {
  children: React.ReactNode;
  className?: string;
}

export function TechChip({ children, className = '' }: TechChipProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-chip text-xs font-medium bg-paper text-charcoal border border-hairline/80 ${className}`}
    >
      {children}
    </span>
  );
}
