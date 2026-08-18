import React from 'react';

export interface StatChipProps {
  children: React.ReactNode;
  variant?: 'live' | 'petrol' | 'default';
  className?: string;
}

export function StatChip({
  children,
  variant = 'default',
  className = '',
}: StatChipProps) {
  const dotStyles = {
    live: 'bg-live animate-pulse',
    petrol: 'bg-petrol',
    default: 'bg-muted',
  };

  const bgStyles = {
    live: 'bg-surface border border-hairline text-charcoal',
    petrol: 'bg-petrol-tint text-petrol font-medium',
    default: 'bg-surface border border-hairline text-charcoal',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${bgStyles[variant]} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotStyles[variant]}`} />
      {children}
    </span>
  );
}
