import React from 'react';
import { FileText, Layout, ShoppingCart, Bot, Sparkles } from 'lucide-react';

const iconMap = { FileText, Layout, ShoppingCart, Bot, Sparkles };

const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon];

  return (
    <div className="bg-white rounded-2xl border border-cream-line p-7 shadow-md shadow-charcoal/[0.06] hover:border-amber/50 hover:shadow-xl hover:shadow-amber/10 hover:-translate-y-0.5 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber/25 to-amber/10 ring-1 ring-amber/15 flex items-center justify-center text-amber mb-5 group-hover:bg-gradient-to-br group-hover:from-amber group-hover:to-amber-dark group-hover:text-cream group-hover:ring-amber transition-all duration-300">
        <Icon size={22} />
      </div>
      <h3 className="font-display font-semibold text-lg text-charcoal mb-2">{service.title}</h3>
      <p className="text-charcoal/60 text-sm leading-relaxed mb-5">{service.description}</p>
      <div className="pt-4 border-t border-cream-line">
        <span className="inline-block text-amber font-semibold text-sm tracking-wide">{service.price}</span>
      </div>
    </div>
  );
};

export default ServiceCard;
