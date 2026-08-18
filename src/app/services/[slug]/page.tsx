import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { servicesData } from '@/content/services';
import { clientProjects } from '@/content/projects';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/layout/JsonLd';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { PetrolBlock } from '@/components/blocks/PetrolBlock';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: `${service.title} · SIA Technologies`,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = clientProjects.filter((p) =>
    service.relatedProjectSlugs.includes(p.slug)
  );

  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        data={{
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://siatech.pk',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Services',
              item: 'https://siatech.pk/services',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: service.title,
              item: `https://siatech.pk/services/${service.slug}`,
            },
          ],
        }}
      />
      <JsonLd
        type="Service"
        data={{
          name: service.title,
          description: service.shortDescription,
          provider: {
            '@type': 'Organization',
            name: 'SIA Technologies',
            url: 'https://siatech.pk',
          },
          areaServed: 'Worldwide',
        }}
      />

      <Header />

      <main className="min-h-screen pt-32 pb-20">
        {/* Breadcrumb & Hero Header */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumbs">
            <Link href="/" className="hover:text-charcoal transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-charcoal transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-charcoal font-semibold">{service.title}</span>
          </nav>

          <div className="space-y-4">
            <SectionLabel>{service.label} · SERVICE SPECIFICATION</SectionLabel>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-heading text-charcoal leading-tight">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl">
              {service.heroPitch}
            </p>
          </div>

          <div className="pt-4 border-t border-hairline flex flex-wrap items-center gap-4">
            <Button
              href={`/contact?service=${service.slug}`}
              size="lg"
              variant="primary"
            >
              Start this project
            </Button>
            <Button
              href="#faqs"
              size="lg"
              variant="secondary"
            >
              View FAQs
            </Button>
          </div>
        </section>

        {/* Build-First Guarantee Callout */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
          <div className="bg-petrol-tint border border-petrol/20 rounded-card p-6 sm:p-8 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-petrol shrink-0 mt-1" />
            <div className="space-y-1">
              <h2 className="text-base font-bold text-petrol uppercase tracking-label">
                How Build-First Applies To {service.title}
              </h2>
              <p className="text-sm text-charcoal leading-relaxed">
                {service.buildFirstGuarantee}
              </p>
            </div>
          </div>
        </section>

        {/* Core Content Body (600+ words) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Who It's For */}
          <section className="space-y-6">
            <div className="border-b border-hairline pb-4">
              <span className="text-xs uppercase tracking-label font-semibold text-petrol">
                01 · TARGET FIT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-heading text-charcoal mt-1">
                Who This Service Is Engineered For
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.whoItsFor.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-card bg-surface border border-hairline flex items-start gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-petrol shrink-0 mt-2" />
                  <p className="text-sm text-charcoal leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What's Included */}
          <section className="space-y-6">
            <div className="border-b border-hairline pb-4">
              <span className="text-xs uppercase tracking-label font-semibold text-petrol">
                02 · DELIVERABLES & SPECS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-heading text-charcoal mt-1">
                Everything Included In The Build
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.whatsIncluded.map((cat) => (
                <div
                  key={cat.category}
                  className="bg-surface rounded-card border border-hairline p-6 space-y-4"
                >
                  <h3 className="text-base font-bold text-charcoal border-b border-hairline/60 pb-2">
                    {cat.category}
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-muted">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-petrol shrink-0 mt-0.5" />
                        <span className="leading-snug text-charcoal/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Deep Dive Narrative */}
          <section className="space-y-8">
            <div className="border-b border-hairline pb-4">
              <span className="text-xs uppercase tracking-label font-semibold text-petrol">
                03 · ENGINEERING PRINCIPLES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-heading text-charcoal mt-1">
                Technical Deep Dive
              </h2>
            </div>

            <div className="space-y-8 text-base text-muted leading-relaxed">
              {service.deepDive.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-xl font-bold tracking-heading text-charcoal">
                    {section.heading}
                  </h3>
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="max-w-prose">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section className="space-y-6">
            <div className="border-b border-hairline pb-4">
              <span className="text-xs uppercase tracking-label font-semibold text-petrol">
                04 · TIMELINE & MILESTONES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-heading text-charcoal mt-1">
                How We Ship In Days, Not Months
              </h2>
            </div>

            <div className="bg-surface rounded-card border border-hairline divide-y divide-hairline">
              {service.timeline.map((phase) => (
                <div
                  key={phase.phase}
                  className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6"
                >
                  <div className="w-48 shrink-0">
                    <span className="text-sm font-bold text-charcoal">
                      {phase.phase}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs sm:text-sm text-muted">
                      {phase.description}
                    </span>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-chip bg-paper text-petrol border border-hairline">
                      <Clock className="w-3 h-3" />
                      {phase.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Related Case Studies */}
          {relatedProjects.length > 0 && (
            <section className="space-y-6">
              <div className="border-b border-hairline pb-4">
                <span className="text-xs uppercase tracking-label font-semibold text-petrol">
                  05 · LIVE PROOF
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-heading text-charcoal mt-1">
                  Related Live Projects
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-surface rounded-card border border-hairline overflow-hidden p-4 space-y-3 group"
                  >
                    <div className="relative aspect-[16/10] bg-paper rounded-md overflow-hidden">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes="400px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-charcoal">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted line-clamp-2 mt-1">
                        {project.oneLiner}
                      </p>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <Link
                        href={`/work/${project.slug}`}
                        className="text-xs font-semibold text-petrol hover:text-petrol-hover inline-flex items-center gap-1"
                      >
                        <span>Case study</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted hover:text-charcoal"
                      >
                        Live site ↗
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Service FAQ */}
          <section id="faqs" className="space-y-6">
            <div className="border-b border-hairline pb-4">
              <span className="text-xs uppercase tracking-label font-semibold text-petrol">
                06 · QUESTIONS & ANSWERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-heading text-charcoal mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion items={service.faqs.map((f, i) => ({ id: `faq-${i}`, ...f }))} />
          </section>

          {/* Navigation Back */}
          <div className="pt-8 border-t border-hairline">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-charcoal transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all services</span>
            </Link>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-24">
          <PetrolBlock>
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <SectionLabel light>BUILD FIRST · ZERO ADVANCE</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-heading text-white">
                Ready to build your {service.title.toLowerCase()}?
              </h2>
              <p className="text-base text-white/85">
                We design and build the complete solution first. You test it live and pay only once it is working on your domain.
              </p>
              <div className="pt-2">
                <Button
                  href={`/contact?service=${service.slug}`}
                  size="lg"
                  variant="outline-white"
                  className="bg-white text-petrol hover:bg-white/90 font-semibold"
                >
                  Start your {service.title}
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
