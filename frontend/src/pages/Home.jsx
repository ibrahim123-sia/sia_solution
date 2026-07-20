import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteData } from '../data';
import TrustBadges from '../components/TrustBadges';

const BrowserMockup = () => (
  <div className="relative">
    <div className="pointer-events-none absolute -inset-4 sm:-inset-6 bg-amber/10 blur-3xl rounded-full" />

    <div className="relative rounded-2xl bg-cream shadow-2xl shadow-black/40 overflow-hidden border border-cream-line">
      <div className="flex items-center gap-2 px-4 py-3 bg-cream-dim border-b border-cream-line">
        <span className="w-2.5 h-2.5 rounded-full bg-amber" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-light" />
        <span className="w-2.5 h-2.5 rounded-full bg-charcoal/70" />
        <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1 text-[0.65rem] text-charcoal/50 truncate">
          siasolution.com
        </div>
        <span className="flex items-center gap-1.5 text-[0.6rem] font-semibold text-charcoal/40 pr-1">
          <span className="w-1.5 h-1.5 rounded-full bg-amber" />
          Live
        </span>
      </div>

      <div className="p-6 sm:p-8">
        <p className="text-amber text-[0.65rem] font-semibold tracking-widest mb-3">
          WE DESIGN. YOU GROW.
        </p>
        <h3 className="font-display font-bold text-xl sm:text-2xl text-charcoal leading-snug mb-3">
          A Website That Works as Hard as You Do.
        </h3>
        <p className="text-charcoal/60 text-sm mb-5">
          Clean design. Smooth experience. More trust. More customers.
        </p>
        <span className="inline-flex items-center gap-2 bg-amber text-cream text-xs font-semibold px-4 py-2.5 rounded-lg">
          Get a Free Mockup <ArrowRight size={14} />
        </span>
      </div>
    </div>
  </div>
);

const Home = () => {
  const { hero } = siteData;

  return (
    <section id="home" className="bg-charcoal relative overflow-hidden">
      <div className="pointer-events-none absolute -top-10 -right-10 w-64 h-64 border border-amber/20 rounded-full hidden md:block" />
      <div className="pointer-events-none absolute bottom-0 right-24 w-40 h-40 border border-amber/10 rounded-full hidden md:block" />

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-amber text-xs font-semibold tracking-[0.25em] mb-5 flex items-center gap-2">
              <Sparkles size={14} /> {hero.eyebrow}
            </p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-cream leading-[1.1] mb-6">
              {hero.headline}
            </h1>
            <p className="text-cream/60 text-base sm:text-lg mb-9 max-w-xl">{hero.subhead}</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={hero.primaryCta.href}
                className="bg-amber hover:bg-amber-dark text-cream font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                {hero.primaryCta.label} <ArrowRight size={16} />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="border border-cream/25 hover:border-amber hover:text-amber text-cream font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors"
              >
                {hero.secondaryCta.label}
              </a>
            </div>

            <TrustBadges variant="light" />
          </div>

          <BrowserMockup />
        </div>
      </div>
    </section>
  );
};

export default Home;
