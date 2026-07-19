import React from 'react';
import { siteData } from '../data';
import PricingCard from '../components/PricingCard';
import BuildFirstPayAfterBanner from '../components/BuildFirstPayAfterBanner';

const Pricing = () => {
  return (
    <section id="pricing" className="bg-cream py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-amber text-xs font-semibold tracking-[0.25em] mb-3">PRICING</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal mb-4">
            Simple pricing. Zero risk.
          </h2>
          <p className="text-charcoal/60 text-base">
            We're a new studio building our portfolio, so pricing starts low and stays honest —
            you'll always know what you're paying for, and you only pay once it's live.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {siteData.pricing.tiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>

        <BuildFirstPayAfterBanner />
      </div>
    </section>
  );
};

export default Pricing;
