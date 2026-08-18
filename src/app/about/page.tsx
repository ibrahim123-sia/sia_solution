import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Code, Zap, Globe, ArrowRight, UserCheck } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/layout/JsonLd';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { PetrolBlock } from '@/components/blocks/PetrolBlock';

export const metadata: Metadata = {
  title: 'About · Founder-Led Web & AI Studio in Karachi',
  description:
    'Learn about SIA Technologies — a founder-led studio in Karachi building custom websites and AI systems with a 100% build-first, pay-after model.',
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        type="WebSite"
        data={{
          name: 'About · SIA Technologies',
          description:
            'SIA Technologies is a founder-led web development and AI studio based in Karachi, Pakistan.',
        }}
      />

      <Header />

      <main className="min-h-screen pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <SectionLabel>FOUNDER-LED STUDIO</SectionLabel>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-heading text-charcoal leading-tight">
            We build everything directly. <span className="text-petrol">No middlemen.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl">
            SIA Technologies is an independent web development and AI studio founded by Syed Ibrahim Ali in Karachi. We work directly with founders and business owners in Pakistan, the Gulf, the UK, and the US.
          </p>
        </section>

        {/* Origin & Why Build-First Exists */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16 space-y-12">
          <div className="bg-surface rounded-card border border-hairline p-8 sm:p-10 space-y-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-petrol" />
              <h2 className="text-2xl font-bold tracking-heading text-charcoal">
                Why We Build First Before You Pay
              </h2>
            </div>

            <div className="space-y-4 text-base text-muted leading-relaxed">
              <p>
                In the traditional web agency model, clients are forced to pay 50% deposits upfront. They are promised the world, only to receive slow, bloated WordPress templates weeks or months later. If the site fails to work or the agency disappears, the client absorbs the entire loss.
              </p>
              <p>
                We believe the developer — not the client — should carry the execution risk. Because we build custom, high-speed applications rapidly without agency bureaucracy, we build your complete website or store first. You interact with it live, verify that it solves your problem, and only pay once it is live on your domain.
              </p>
              <p>
                This model forces us to deliver exceptional quality every single time. If we don’t ship a great product, we don’t get paid.
              </p>
            </div>
          </div>

          {/* Studio Principles */}
          <div className="space-y-6">
            <div className="border-b border-hairline pb-4">
              <SectionLabel>OUR COMMITMENTS</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-heading text-charcoal mt-1">
                Studio Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface rounded-card border border-hairline p-6 space-y-3">
                <div className="w-10 h-10 rounded-chip bg-petrol-tint flex items-center justify-center text-petrol">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-charcoal">
                  Direct Founder Communication
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  You communicate directly with the engineer building your product. No account managers, no junior handoffs, no lost requirements.
                </p>
              </div>

              <div className="bg-surface rounded-card border border-hairline p-6 space-y-3">
                <div className="w-10 h-10 rounded-chip bg-petrol-tint flex items-center justify-center text-petrol">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-charcoal">
                  Zero Template Bloat
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Every site is hand-coded with modern Next.js and Tailwind CSS. Zero heavy plugins that slow down mobile shoppers on cellular data.
                </p>
              </div>

              <div className="bg-surface rounded-card border border-hairline p-6 space-y-3">
                <div className="w-10 h-10 rounded-chip bg-petrol-tint flex items-center justify-center text-petrol">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-charcoal">
                  Shipped in Days, Not Months
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Focused sprint cycles allow us to deliver complete, functioning e-commerce stores and business websites in 5 to 18 business days.
                </p>
              </div>

              <div className="bg-surface rounded-card border border-hairline p-6 space-y-3">
                <div className="w-10 h-10 rounded-chip bg-petrol-tint flex items-center justify-center text-petrol">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-charcoal">
                  100% Code Ownership
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  You own your repository, domain, and deployment infrastructure outright. We never lock clients into proprietary hosting traps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Block */}
        <div className="mt-20">
          <PetrolBlock>
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <SectionLabel light>START A CONVERSATION</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-heading text-white">
                Let&apos;s build your website first.
              </h2>
              <p className="text-base text-white/85">
                Send us a short message about your business. We will outline your architecture and begin building with zero advance deposit.
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
                  href={siteConfig.whatsappLink}
                  external
                  size="lg"
                  variant="outline-white"
                >
                  Chat on WhatsApp
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
