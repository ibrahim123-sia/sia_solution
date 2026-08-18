import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { servicesData } from '@/content/services';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/layout/JsonLd';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { PetrolBlock } from '@/components/blocks/PetrolBlock';

export const metadata: Metadata = {
  title: 'Services & Capabilities · Custom Websites, Stores & AI',
  description:
    'Explore our custom web development services: Business Websites, Online Stores, High-Converting Landing Pages, AI Assistants, and Cross-Platform Mobile Apps. Built first with zero advance.',
};

export default function ServicesOverviewPage() {
  return (
    <>
      <JsonLd
        type="WebSite"
        data={{
          name: 'Services · SIA Technologies',
          description:
            'Custom web development services: Business Websites, Online Stores, Landing Pages, AI Assistants, and Mobile Apps.',
        }}
      />

      <Header />

      <main className="min-h-screen pt-32 pb-20">
        {/* Header Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16 space-y-6">
          <div className="max-w-3xl space-y-4">
            <SectionLabel>OUR SERVICES & EXPERTISE</SectionLabel>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-heading text-charcoal leading-tight">
              Engineering websites that turn visitors into <span className="text-petrol">customers</span>.
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              We specialize in custom websites and e-commerce stores for growing brands, backed by specialized capabilities in AI agents and mobile apps. Every project is built first with zero advance deposit.
            </p>
          </div>

          {/* Value Props Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-hairline">
            <div className="flex items-center gap-3 p-4 rounded-card bg-surface border border-hairline">
              <ShieldCheck className="w-5 h-5 text-live shrink-0" />
              <div>
                <span className="block text-xs font-bold uppercase tracking-label text-charcoal">
                  Zero Advance
                </span>
                <span className="text-xs text-muted">Pay only after live launch</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-card bg-surface border border-hairline">
              <Zap className="w-5 h-5 text-petrol shrink-0" />
              <div>
                <span className="block text-xs font-bold uppercase tracking-label text-charcoal">
                  Sub-Second Speed
                </span>
                <span className="text-xs text-muted">Core Web Vitals optimized</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-card bg-surface border border-hairline">
              <CheckCircle2 className="w-5 h-5 text-petrol shrink-0" />
              <div>
                <span className="block text-xs font-bold uppercase tracking-label text-charcoal">
                  Direct Founder Build
                </span>
                <span className="text-xs text-muted">No agency middlemen</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services List (5 Services in Priority Order) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
          {servicesData.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              className="bg-surface rounded-card border border-hairline p-8 md:p-10 hover:border-muted/50 transition-all duration-200 scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Info */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-chip bg-petrol-tint text-petrol font-mono text-xs font-bold flex items-center justify-center">
                      0{index + 1}
                    </span>
                    <span className="text-xs uppercase tracking-label font-semibold text-petrol">
                      {service.label}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold tracking-heading text-charcoal">
                    {service.title}
                  </h2>

                  <p className="text-base text-muted leading-relaxed">
                    {service.heroPitch}
                  </p>

                  {/* Target Audience */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs uppercase tracking-label font-semibold text-charcoal/70 block">
                      Best suited for:
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-muted">
                      {service.whoItsFor.slice(0, 2).map((who, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-petrol shrink-0 mt-2" />
                          <span>{who}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Deliverables & Action */}
                <div className="lg:col-span-5 bg-paper rounded-card border border-hairline p-6 space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <span className="text-xs uppercase tracking-label font-semibold text-charcoal/80 block">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-petrol shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-hairline/60 flex items-center justify-between gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-petrol hover:text-petrol-hover transition-colors"
                    >
                      <span>Full service details & specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Button
                      href={`/contact?service=${service.slug}`}
                      size="sm"
                      variant="primary"
                    >
                      Inquire
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Global CTA Block */}
        <div className="mt-24">
          <PetrolBlock>
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <SectionLabel light>BUILD-FIRST GUARANTEE</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-heading text-white">
                Not sure which service fits your project?
              </h2>
              <p className="text-base text-white/85">
                Send us a short message describing your brand. We will recommend the exact technical stack and scope — with zero advance deposit.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Button
                  href="/contact"
                  size="lg"
                  variant="outline-white"
                  className="bg-white text-petrol hover:bg-white/90 font-semibold"
                >
                  Start a project
                </Button>
                <Button
                  href="/work"
                  size="lg"
                  variant="outline-white"
                >
                  See past work
                </Button>
              </div>
            </div>
          </PetrolBlock>
        </div>
      </main>

      <Footer />
    </>
  );
}
