import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteData } from '../data';

const BuildFirstPayAfterBanner = () => {
  const { banner, note } = siteData.pricing;

  return (
    <div className="bg-charcoal rounded-2xl px-6 py-10 sm:px-12 sm:py-14 text-center relative overflow-hidden shadow-xl shadow-charcoal/20">
      <div className="pointer-events-none absolute -top-14 -left-14 w-56 h-56 border border-amber/10 rounded-full hidden sm:block" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 w-64 h-64 bg-amber/10 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute top-1/2 right-10 -translate-y-1/2 w-32 h-32 border border-amber/10 rounded-full hidden md:block" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-cream mb-4">
          {banner.title}
        </h3>
        <p className="text-cream/70 text-sm sm:text-base mb-3">{banner.body}</p>
        <p className="text-cream/50 text-xs sm:text-sm mb-8">{note}</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-gradient-to-b from-amber to-amber-dark hover:from-amber-dark hover:to-amber-dark text-cream font-semibold text-sm px-6 py-3 rounded-lg shadow-md shadow-amber/25 hover:shadow-lg hover:shadow-amber/40 transition-all duration-300"
        >
          DM Us "WEBSITE"
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default BuildFirstPayAfterBanner;
