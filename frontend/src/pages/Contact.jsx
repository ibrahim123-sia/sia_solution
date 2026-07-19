import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="bg-cream-dim py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-amber text-xs font-semibold tracking-[0.25em] mb-3">GET IN TOUCH</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal mb-4">
            Let's build something great together.
          </h2>
          <p className="text-charcoal/60 text-base">
            Landing page, business website, online store, or an AI chatbot for your brand — tell
            us what you need and we'll get back with a free mockup idea.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
