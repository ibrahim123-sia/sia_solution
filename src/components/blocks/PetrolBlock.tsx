import React from 'react';

export interface PetrolBlockProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function PetrolBlock({ children, className = '', id }: PetrolBlockProps) {
  return (
    <section
      id={id}
      className={`w-full bg-petrol text-white py-16 md:py-24 relative overflow-hidden ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
