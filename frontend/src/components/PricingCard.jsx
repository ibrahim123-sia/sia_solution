import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ tier }) => {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col transition-all duration-300 ${
        tier.featured
          ? 'bg-charcoal text-cream ring-2 ring-amber shadow-xl shadow-amber/10 md:-translate-y-3'
          : 'bg-white text-charcoal border border-cream-line hover:border-amber/40 hover:shadow-lg hover:shadow-amber/5'
      }`}
    >
      {tier.featured && (
        <span className="self-start bg-amber text-cream text-[0.65rem] font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-4">
          Most Popular
        </span>
      )}
      <h3 className="font-display font-semibold text-xl mb-1.5">{tier.name}</h3>
      <p className={`text-xs mb-6 ${tier.featured ? 'text-cream/60' : 'text-charcoal/50'}`}>{tier.best}</p>

      <div className="mb-6 pb-6 border-b border-dashed border-current/15">
        <p className={`text-[0.65rem] font-semibold tracking-widest uppercase mb-2 ${tier.featured ? 'text-amber-light' : 'text-amber'}`}>
          Typical Project Range
        </p>
        <div className="flex items-baseline gap-1.5">
          <span className="text-sm font-medium opacity-60">PKR</span>
          <span className="font-display font-bold text-3xl tracking-tight tabular-nums">{tier.range}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check size={16} className="text-amber flex-shrink-0 mt-0.5" />
            <span className={tier.featured ? 'text-cream/80' : 'text-charcoal/70'}>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`text-center font-semibold text-sm py-3 rounded-lg transition-colors ${
          tier.featured
            ? 'bg-amber hover:bg-amber-dark text-cream'
            : 'bg-charcoal/5 hover:bg-amber hover:text-cream text-charcoal'
        }`}
      >
        Get a Free Mockup
      </a>
    </div>
  );
};

export default PricingCard;
