import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteData } from '../data';

const BuildFirstPayAfterBanner = () => {
  const { banner, note } = siteData.pricing;

  return (
    <div className="bg-charcoal rounded-2xl px-6 py-10 sm:px-12 sm:py-14 text-center relative overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto">
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-cream mb-4">
          {banner.title}
        </h3>
        <p className="text-cream/70 text-sm sm:text-base mb-3">{banner.body}</p>
        <p className="text-cream/50 text-xs sm:text-sm mb-8">{note}</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-cream font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
        >
          DM Us "WEBSITE"
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default BuildFirstPayAfterBanner;
