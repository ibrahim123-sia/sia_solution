import React from 'react';
import { siteData } from '../data';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <section id="services" className="bg-cream-dim py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-amber text-xs font-semibold tracking-[0.25em] mb-3">WHAT WE BUILD</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal mb-4">
            From your first page to a full AI system.
          </h2>
          <p className="text-charcoal/60 text-base">
            Websites, online stores, chatbots and AI agents — built to fit exactly where your
            business is today, with room to grow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
