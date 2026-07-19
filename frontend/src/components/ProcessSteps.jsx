import React from 'react';
import { siteData } from '../data';

const ProcessSteps = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
      {siteData.process.map((step, i) => (
        <div key={step.step} className="relative">
          <span className="font-display font-extrabold text-4xl text-amber/25">{step.step}</span>
          <h4 className="font-display font-semibold text-charcoal text-base mt-2 mb-2">{step.title}</h4>
          <p className="text-charcoal/60 text-sm leading-relaxed">{step.desc}</p>
          {i < siteData.process.length - 1 && (
            <span className="hidden md:block absolute top-4 -right-4 w-8 h-px bg-cream-line" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps;
