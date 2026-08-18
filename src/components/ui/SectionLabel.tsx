import React from 'react';

export interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({
  children,
  className = '',
  light = false,
}: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs uppercase tracking-label font-semibold ${
        light ? 'text-white/80' : 'text-petrol'
      } ${className}`}
    >
      {children}
    </span>
  );
}
