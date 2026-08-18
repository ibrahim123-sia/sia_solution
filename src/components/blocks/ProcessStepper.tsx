'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
}

export const defaultSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    duration: '1–2 days',
    description: 'We review your brand goals, target customers, and catalog structure via WhatsApp or call.',
  },
  {
    number: '02',
    title: 'Design & Build',
    duration: '5–10 days',
    description: 'We build your complete, responsive website or store from scratch. No advance payment required.',
  },
  {
    number: '03',
    title: 'You Test It Live',
    duration: '2–3 days',
    description: 'You receive a live staging link. You test the mobile navigation, checkout, and forms with real data.',
  },
  {
    number: '04',
    title: 'You Pay & We Support',
    duration: 'Ongoing',
    description: 'Once you are 100% happy, we point your domain live, hand over full code ownership, and stay on for support.',
  },
];

export function ProcessStepper() {
  return (
    <div className="relative">
      {/* Desktop connecting line */}
      <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-hairline z-0">
        <motion.div
          className="h-full bg-petrol origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {defaultSteps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col bg-surface lg:bg-transparent p-6 lg:p-0 rounded-card lg:rounded-none border border-hairline lg:border-0"
          >
            {/* Step Number & Timeline Chip */}
            <div className="flex items-center justify-between lg:justify-start lg:gap-4 mb-4">
              <div className="w-14 h-14 rounded-card bg-paper border border-hairline flex items-center justify-center font-mono font-bold text-petrol text-lg shadow-sm">
                {step.number}
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-label px-2.5 py-1 rounded-chip bg-petrol-tint text-petrol">
                {step.duration}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold tracking-heading text-charcoal mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
