'use client';

import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline-white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium tracking-tight rounded-btn transition-all duration-200 select-none cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:opacity-60 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs uppercase tracking-label px-3 py-2 min-h-[40px]',
    md: 'text-sm px-5 py-2.5 min-h-[44px]',
    lg: 'text-base px-7 py-3.5 min-h-[48px]',
  };

  const variantStyles = {
    primary:
      'bg-petrol text-white hover:bg-petrol-hover active:translate-y-[1px] shadow-sm',
    secondary:
      'bg-surface text-charcoal border border-hairline hover:border-muted/40 hover:bg-paper active:translate-y-[1px]',
    'outline-white':
      'bg-transparent text-white border border-white/40 hover:bg-white hover:text-petrol active:translate-y-[1px]',
    ghost:
      'bg-transparent text-charcoal hover:bg-black/5 active:translate-y-[1px]',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
