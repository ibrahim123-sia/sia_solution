import React from 'react';
import { Check } from 'lucide-react';
import ProcessSteps from '../components/ProcessSteps';

const honestyPoints = [
  'We build your complete website or system first — you only pay once it\'s live and you\'re happy.',
  "No advance, no deposit, no exaggerated claims — just real, working software.",
  "We're a new studio investing in our portfolio, so early pricing stays honest and low.",
];

const About = () => {
  return (
    <section id="about" className="bg-cream py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start mb-20">
          <div>
            <p className="text-amber text-xs font-semibold tracking-[0.25em] mb-3">ABOUT SIA SOLUTION</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal mb-6 leading-tight">
              A small, founder-led studio betting on trust over promises.
            </h2>
            <p className="text-charcoal/60 text-base leading-relaxed mb-4">
              SIA Solution is a Karachi-based web design and AI development studio, started by a
              full-stack and AI engineer building real products before pitching them. We build
              websites, online stores, chatbots and AI agents — the same way we'd want to be sold
              to: see it working first, then decide.
            </p>
            <p className="text-charcoal/60 text-base leading-relaxed">
              That's the whole philosophy behind "build first, pay after" — it's not a
              marketing line, it's how every project actually runs.
            </p>
          </div>

          <div className="bg-charcoal rounded-2xl p-8 sm:p-10">
            <h3 className="font-display font-semibold text-cream text-lg mb-6">Why brands trust us early</h3>
            <ul className="space-y-4">
              {honestyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber/20 flex items-center justify-center text-amber flex-shrink-0 mt-0.5">
                    <Check size={13} />
                  </span>
                  <span className="text-cream/70 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="text-amber text-xs font-semibold tracking-[0.25em] mb-3">HOW IT WORKS</p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-charcoal mb-12">
            Four steps, zero risk to you.
          </h2>
          <ProcessSteps />
        </div>
      </div>
    </section>
  );
};

export default About;
