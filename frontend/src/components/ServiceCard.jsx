import React from 'react';
import { FileText, Layout, ShoppingCart, Bot, Sparkles } from 'lucide-react';

const iconMap = { FileText, Layout, ShoppingCart, Bot, Sparkles };

const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon];

  return (
    <div className="bg-white rounded-2xl border border-cream-line p-7 hover:border-amber/50 hover:shadow-lg hover:shadow-amber/5 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center text-amber mb-5 group-hover:bg-amber group-hover:text-cream transition-colors duration-300">
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
