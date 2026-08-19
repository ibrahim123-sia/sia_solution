import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Code2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { clientProjects } from '@/content/projects';
import { servicesData } from '@/content/services';
import { rdProjects } from '@/content/rd-projects';
import { homeFaqs } from '@/content/faq';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/layout/JsonLd';

import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Card } from '@/components/ui/Card';
import { TechChip } from '@/components/ui/TechChip';
import { StatChip } from '@/components/ui/StatChip';
import { Accordion } from '@/components/ui/Accordion';

import { BrowserFrame } from '@/components/blocks/BrowserFrame';
import { PhoneFrame } from '@/components/blocks/PhoneFrame';
import { PetrolBlock } from '@/components/blocks/PetrolBlock';
import { CaseStudyBlock } from '@/components/blocks/CaseStudyBlock';
import { ProcessStepper } from '@/components/blocks/ProcessStepper';
import { PricingSection } from '@/components/blocks/PricingSection';

export default function HomePage() {
  return (
    <>
      <JsonLd type="Organization" />
      <JsonLd type="WebSite" />

      {/* 1. Sticky Navigation */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section — Shape C */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <SectionLabel>WEBSITES · MOBILE APPS · AI ASSISTANTS</SectionLabel>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-heading text-charcoal leading-[1.08]">
              We build your website first.{' '}
              <span className="text-petrol">You pay once it&apos;s live.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Founder-led web and AI development studio in Karachi. We build fast, custom websites and online stores for growing brands worldwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button href="/contact" size="lg" variant="primary">
                Start a project
              </Button>
              <Button href="#work" size="lg" variant="secondary">
                See our work
              </Button>
            </div>

            {/* Three inline trust chips */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-3">
              <StatChip variant="petrol">No advance</StatChip>
              <StatChip variant="live">4 live client stores</StatChip>
              <StatChip variant="default">Built in days, not months</StatChip>
            </div>
          </div>

          {/* Hero Visual Mockup: Browser frame (desktop) & Phone frame (mobile) */}
          <div className="mt-14 md:mt-16">
            <div className="hidden sm:block">
              <BrowserFrame
                imageSrc="/images/projects/nowhere-hero.jpeg"
                imageAlt="Nowhere Apparel Live Store"
                urlDisplay="nowherecloth.vercel.app"
              />
            </div>
            <div className="sm:hidden">
              <PhoneFrame
                imageSrc="/images/projects/nowhere-topwear.jpeg"
                imageAlt="Nowhere Mobile Store View"
              />
            </div>
          </div>
        </section>

        {/* 3. Logo / Proof Strip — Shape C */}
        <section className="py-10 border-y border-hairline bg-surface/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <span className="text-xs uppercase tracking-label font-semibold text-muted">
                Live Client Deployments
              </span>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {siteConfig.proofClients.map((client) => (
                  <a
                    key={client.name}
                    href={client.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm font-semibold text-charcoal/80 hover:text-petrol transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-live group-hover:scale-125 transition-transform" />
                    <span>{client.name}</span>
                    <span className="text-xs text-muted font-normal hidden md:inline">
                      ({client.category})
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Offer — Shape B (Solid Petrol, Full-Bleed) */}
        <PetrolBlock id="offer">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <SectionLabel light>THE BUILD-FIRST GUARANTEE</SectionLabel>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-heading text-white leading-tight">
              We build it. You use it. Then you pay.
            </h2>

            <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
              Your complete, functional website is designed and deployed to a live staging link before a single dollar changes hands. No advance, zero financial risk.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
              <div className="bg-white/10 backdrop-blur-xs rounded-card p-6 border border-white/15 space-y-2">
                <div className="w-8 h-8 rounded-chip bg-white/20 flex items-center justify-center text-white font-mono font-bold text-sm mb-3">
                  01
                </div>
                <h3 className="text-lg font-bold text-white">No advance</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  We don&apos;t ask for 50% deposits or setup fees. We start building immediately based on your brief.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs rounded-card p-6 border border-white/15 space-y-2">
                <div className="w-8 h-8 rounded-chip bg-white/20 flex items-center justify-center text-white font-mono font-bold text-sm mb-3">
                  02
                </div>
                <h3 className="text-lg font-bold text-white">You test it live</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  You interact with the real site on your phone, test checkout flows, and request any design refinements.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs rounded-card p-6 border border-white/15 space-y-2">
                <div className="w-8 h-8 rounded-chip bg-white/20 flex items-center justify-center text-white font-mono font-bold text-sm mb-3">
                  03
                </div>
                <h3 className="text-lg font-bold text-white">Pay when happy</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  You only settle the invoice once the site is live on your domain and you are 100% satisfied.
                </p>
              </div>
            </div>
          </div>
        </PetrolBlock>

        {/* 5. Services — Shape C (3+2 Grid, Websites First, No Prices) */}
        <section id="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-4 text-center max-w-3xl mx-auto mb-14">
            <SectionLabel>WHAT WE BUILD</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-heading text-charcoal">
              Services engineered for <span className="text-petrol">growth</span>.
            </h2>
            <p className="text-base sm:text-lg text-muted">
              Websites and online stores are our primary focus. We also build custom AI assistants and mobile apps for specialized workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <div
                key={service.slug}
                className={`bg-surface rounded-card border border-hairline p-7 flex flex-col justify-between hover:border-muted/50 hover:-translate-y-[2px] transition-all duration-200 ${
                  index >= 3 ? 'lg:col-span-1 md:col-span-1' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-label font-semibold text-petrol">
                      {service.label}
                    </span>
                    <span className="text-xs font-mono text-muted">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-heading text-charcoal">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed line-clamp-2">
                    {service.shortDescription}
                  </p>

                  {/* Deliverables Checklist (4 items) */}
                  <div className="pt-3 border-t border-hairline/60 space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-label text-charcoal/70 block">
                      What you get:
                    </span>
                    <ul className="space-y-1.5 text-xs text-muted">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-petrol shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-hairline/60">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-petrol hover:text-petrol-hover transition-colors group"
                  >
                    <span>See how it works</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Selected Work — Shape A Repeated (4 Flagship Stores) */}
        <section id="work" className="py-20 md:py-28 bg-surface/50 border-y border-hairline">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <SectionLabel>SELECTED WORK</SectionLabel>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-heading text-charcoal">
                  Recent client <span className="text-petrol">storefronts</span>.
                </h2>
                <p className="text-sm sm:text-base text-muted max-w-xl">
                  Real businesses. Custom-built from scratch. Tested live before any payment was made.
                </p>
              </div>

              <Button href="/work" variant="secondary" size="md" className="gap-2 text-xs">
                <span>View all projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Alternating Case Study Blocks */}
            <div className="space-y-10">
              {clientProjects.map((project, idx) => (
                <CaseStudyBlock
                  key={project.id}
                  project={project}
                  imageOnLeft={idx % 2 === 0}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 7. AI & R&D — Shape C (Visually Lighter, In-House Capability) */}
        <section id="rd" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-4 max-w-3xl mb-12">
            <SectionLabel>CAPABILITY & RESEARCH</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-heading text-charcoal">
              What we&apos;re building <span className="text-petrol">in-house</span>.
            </h2>
            <p className="text-base text-muted leading-relaxed">
              These systems represent our internal R&D in Retrieval-Augmented Generation (RAG), multi-agent orchestration, and machine learning pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rdProjects.map((item) => (
              <Card key={item.id} hoverable className="flex flex-col justify-between p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-label font-semibold text-muted">
                      {item.category}
                    </span>
                    <Code2 className="w-4 h-4 text-petrol" />
                  </div>

                  <h3 className="text-lg font-bold tracking-heading text-charcoal">
                    {item.title}
                  </h3>

                  <p className="text-xs text-muted leading-relaxed">
                    {item.oneLiner}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.technologies.slice(0, 4).map((tech) => (
                      <TechChip key={tech}>{tech}</TechChip>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-hairline/60 flex items-center justify-between">
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal hover:text-petrol transition-colors"
                  >
                    <span>View source code</span>
                    <ExternalLink className="w-3.5 h-3.5 text-muted" />
                  </a>

                  {item.liveUrl && (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-petrol hover:underline"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 8. Process — Shape C (Animated Drawing Stepper) */}
        <section id="process" className="py-20 md:py-28 bg-surface/50 border-y border-hairline">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <SectionLabel>HOW WE WORK</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-heading text-charcoal">
                From brief to launch in <span className="text-petrol">four steps</span>.
              </h2>
              <p className="text-base text-muted">
                A streamlined engineering process with zero deposit requirements and direct founder communication.
              </p>
            </div>

            <ProcessStepper />
          </div>
        </section>

        {/* 9. Pricing — Shape C (Dynamic USD/PKR Range Switcher) */}
        <section id="pricing" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <SectionLabel>TRANSPARENT PRICING</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-heading text-charcoal">
              Predictable project <span className="text-petrol">ranges</span>.
            </h2>
            <p className="text-base text-muted">
              We provide estimated typical ranges. The final exact scope is locked before build, and you pay only once it&apos;s live.
            </p>
          </div>

          <PricingSection />
        </section>

        {/* 10. FAQ — Shape C (8 Core Questions Accordion) */}
        <section id="faq" className="py-20 md:py-28 bg-surface/50 border-y border-hairline">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-4">
              <SectionLabel>COMMON QUESTIONS</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-heading text-charcoal">
                Frequently asked <span className="text-petrol">questions</span>.
              </h2>
              <p className="text-base text-muted">
                Everything you need to know about our build-first model, code ownership, and payment terms.
              </p>
            </div>

            <Accordion items={homeFaqs} />
          </div>
        </section>

        {/* 11. Final CTA — Shape B (Solid Petrol, Full-Bleed) */}
        <PetrolBlock id="cta">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <SectionLabel light>START YOUR PROJECT</SectionLabel>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-heading text-white leading-tight">
              Tell us about your brand. We&apos;ll build it before you pay.
            </h2>

            <p className="text-base sm:text-lg text-white/85 leading-relaxed">
              No advance invoice. No lengthy sales calls. Send us your requirements, and we will begin building your live site.
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

            <div className="flex items-center justify-center gap-2 text-xs text-white/80 pt-4">
              <ShieldCheck className="w-4 h-4 text-live" />
              <span>Zero advance deposit required · 100% code ownership on handover</span>
            </div>
          </div>
        </PetrolBlock>
      </main>

      {/* 12. Structured Footer */}
      <Footer />
    </>
  );
}
