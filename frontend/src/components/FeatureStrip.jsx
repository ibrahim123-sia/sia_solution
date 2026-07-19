import React from 'react';
import { Smartphone, Search, ShieldCheck, Headphones, MessageCircle } from 'lucide-react';
import { siteData } from '../data';

const iconMap = { Smartphone, Search, ShieldCheck, Headphones, MessageCircle };

const FeatureStrip = () => {
  return (
    <section className="bg-cream border-b border-cream-line">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {siteData.featureStrip.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div key={feature.title} className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-full border border-amber/40 flex items-center justify-center text-amber flex-shrink-0">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-display font-semibold text-charcoal text-sm">{feature.title}</p>
                  <p className="text-charcoal/60 text-xs">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;
