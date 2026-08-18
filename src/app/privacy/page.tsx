import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Privacy Policy · SIA Technologies',
  description: 'Privacy policy and data protection terms for SIA Technologies.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-4 mb-10">
          <SectionLabel>LEGAL & DATA PRIVACY</SectionLabel>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-heading text-charcoal">
            Privacy Policy
          </h1>
          <p className="text-xs text-muted">
            Last updated: February 2026
          </p>
        </div>

        <div className="bg-surface rounded-card border border-hairline p-8 sm:p-10 space-y-8 text-sm sm:text-base text-muted leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-charcoal">
              1. Information We Collect
            </h2>
            <p>
              When you submit an inquiry through our contact form or contact us via WhatsApp or email, we collect your name, email address, business name, and project description. We use this information solely to evaluate your technical requirements and respond to your inquiry.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-charcoal">
              2. How We Use Your Data
            </h2>
            <p>
              Your contact details and business requirements are never sold, rented, or shared with third-party marketing companies. We use your details strictly for project communication, proposal preparation, and invoice settlement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-charcoal">
              3. AI & Proprietary Knowledge Protection
            </h2>
            <p>
              For AI Assistant and RAG projects, any proprietary business documentation, customer FAQs, or internal databases shared with SIA Technologies remain your exclusive property. We utilize secure, enterprise API endpoints with zero-data-retention agreements, ensuring your private data is never used to train public models.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-charcoal">
              4. Code Ownership & Intellectual Property
            </h2>
            <p>
              Upon full settlement of project invoices, complete ownership of all custom codebase repositories, graphics, and database configurations is transferred directly to the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-charcoal">
              5. Contacting Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, you may contact us at{' '}
              <a href="mailto:hello@siatech.pk" className="text-petrol font-medium hover:underline">
                hello@siatech.pk
              </a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
