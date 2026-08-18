'use client';

import React from 'react';
import type { Currency } from '@/content/pricing';

export interface CurrencyToggleProps {
  currentCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  className?: string;
}

export function CurrencyToggle({
  currentCurrency,
  onCurrencyChange,
  className = '',
}: CurrencyToggleProps) {
  return (
    <div
      className={`inline-flex items-center p-1 bg-surface border border-hairline rounded-btn shadow-sm ${className}`}
      role="group"
      aria-label="Currency Selector"
    >
      <button
        type="button"
        onClick={() => onCurrencyChange('USD')}
        aria-pressed={currentCurrency === 'USD'}
        className={`px-3 py-1.5 text-xs font-semibold rounded-[6px] transition-all duration-200 ${
          currentCurrency === 'USD'
            ? 'bg-petrol text-white shadow-sm'
            : 'text-muted hover:text-charcoal'
        }`}
      >
        USD ($)
      </button>
      <button
        type="button"
        onClick={() => onCurrencyChange('PKR')}
        aria-pressed={currentCurrency === 'PKR'}
        className={`px-3 py-1.5 text-xs font-semibold rounded-[6px] transition-all duration-200 ${
          currentCurrency === 'PKR'
            ? 'bg-petrol text-white shadow-sm'
            : 'text-muted hover:text-charcoal'
        }`}
      >
        PKR (Rs)
      </button>
    </div>
  );
}
