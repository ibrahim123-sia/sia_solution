import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className = '', hoverable = false }: CardProps) {
  return (
    <div
      className={`bg-surface rounded-card border border-hairline p-6 md:p-8 transition-all duration-200 ${
        hoverable ? 'hover:border-muted/50 hover:-translate-y-[2px]' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
