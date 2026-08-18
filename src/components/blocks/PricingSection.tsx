'use client';

import React, { useState, useEffect } from 'react';
import { pricingTiers, pricingNotice, type Currency } from '@/content/pricing';
import { CurrencyToggle } from '@/components/ui/CurrencyToggle';
import { Button } from '@/components/ui/Button';
import { Check, ShieldCheck, HelpCircle } from 'lucide-react';

export function PricingSection() {
  const [currency, setCurrency] = useState<Currency>('USD');

  // Detect visitor timezone/region on mount
  useEffect(() => {
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timeZone && (timeZone.includes('Karachi') || timeZone.includes('Pakistan') || timeZone.includes('Asia/Karachi'))) {
        setCurrency('PKR');
      }
    } catch {
      // Default to USD
    }
  }, []);

  return (
    <div className="space-y-10">
      {/* Currency Switcher & Subtitle */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-2">
        <div className="flex items-center gap-2 text-xs text-muted">
          <ShieldCheck className="w-4 h-4 text-live" />
          <span>Typical project range · Zero deposit required</span>
        </div>
        <CurrencyToggle
          currentCurrency={currency}
          onCurrencyChange={(curr) => setCurrency(curr)}
        />
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingTiers.slice(0, 3).map((tier) => (
          <div
            key={tier.id}
            className={`bg-surface rounded-card border transition-all duration-200 flex flex-col justify-between p-6 sm:p-8 relative ${
              tier.isPopular
                ? 'border-petrol/60 shadow-md ring-1 ring-petrol/10'
                : 'border-hairline hover:border-muted/50'
            }`}
          >
            {tier.badge && (
              <div className="absolute -top-3 left-6">
                <span className="bg-petrol text-white text-[10px] font-bold uppercase tracking-label px-3 py-1 rounded-chip shadow-sm">
                  {tier.badge}
                </span>
              </div>
            )}

            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-bold tracking-heading text-charcoal">
                  {tier.name}
                </h3>
                <p className="text-xs text-muted mt-1">{tier.bestFor}</p>
              </div>

              {/* Price Range Display */}
              <div className="py-2 border-y border-hairline/60">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold tracking-tight text-charcoal">
                    {currency === 'PKR' ? tier.pkrRange : tier.usdRange}
                  </span>
                </div>
                <span className="text-[11px] text-muted block mt-0.5">
                  Estimated turnaround: {tier.timeline}
                </span>
              </div>

              {/* Feature List */}
              <ul className="space-y-2.5 text-sm text-charcoal/90">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-petrol shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-hairline space-y-3">
              {/* Build-First Line on Every Card */}
              <p className="text-[11px] text-muted italic flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-live shrink-0" />
                <span>Nothing is due until it’s live and working.</span>
              </p>

              <Button
                href={tier.ctaHref}
                variant={tier.isPopular ? 'primary' : 'secondary'}
                size="md"
                className="w-full justify-center text-xs sm:text-sm"
              >
                {tier.ctaLabel}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Tiers: AI Assistants & Mobile Apps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {pricingTiers.slice(3, 5).map((tier) => (
          <div
            key={tier.id}
            className="bg-surface rounded-card border border-hairline p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-muted/50 transition-colors"
          >
            <div className="space-y-2 max-w-md">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold tracking-heading text-charcoal">
                  {tier.name}
                </h3>
                <span className="text-[10px] uppercase tracking-label px-2 py-0.5 rounded-chip bg-paper text-muted border border-hairline">
                  Custom quote
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed">{tier.bestFor}</p>
              <p className="text-[11px] text-muted italic flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-live shrink-0" />
                <span>Prototype built and tested before full commitment.</span>
              </p>
            </div>

            <Button
              href={tier.ctaHref}
              variant="secondary"
              size="md"
              className="shrink-0 w-full sm:w-auto justify-center text-xs"
            >
              {tier.ctaLabel}
            </Button>
          </div>
        ))}
      </div>

      {/* Transparent Hosting Note */}
      <div className="p-4 rounded-card bg-paper border border-hairline flex items-start gap-3 text-xs text-muted">
        <HelpCircle className="w-4 h-4 text-petrol shrink-0 mt-0.5" />
        <p>
          <strong className="text-charcoal font-semibold">Direct Cost Guarantee: </strong>
          {pricingNotice.hostingNote} We configure everything on your behalf.
        </p>
      </div>
    </div>
  );
}
