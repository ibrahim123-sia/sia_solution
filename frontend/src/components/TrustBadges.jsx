import React from 'react';
import { Check, ShieldCheck, Rocket } from 'lucide-react';
import { siteData } from '../data';

const icons = [Check, ShieldCheck, Rocket];

const TrustBadges = ({ variant = 'light' }) => {
  const textColor = variant === 'light' ? 'text-cream' : 'text-charcoal';

  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
      {siteData.trustBadges.map((badge, i) => {
        const Icon = icons[i % icons.length];
        return (
          <div key={badge.label} className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full border border-amber flex items-center justify-center text-amber flex-shrink-0">
              <Icon size={14} />
            </span>
            <span className={`font-medium text-sm ${textColor}`}>{badge.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrustBadges;
