import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Quote,
  CheckCircle2,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { clientProjects } from '@/content/projects';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/layout/JsonLd';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TechChip } from '@/components/ui/TechChip';
import { Button } from '@/components/ui/Button';
import { PetrolBlock } from '@/components/blocks/PetrolBlock';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return clientProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = clientProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${project.title} · Case Study`,
    description: project.oneLiner,
    openGraph: {
      title: `${project.title} · SIA Technologies Case Study`,
      description: project.oneLiner,
      images: [{ url: project.coverImage, width: 1200, height: 630, alt: project.title }],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = clientProjects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = clientProjects[projectIndex];
  const nextProject =
    clientProjects[(projectIndex + 1) % clientProjects.length];

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
              name: 'Work',
              item: 'https://siatech.pk/work',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: project.brandName,
              item: `https://siatech.pk/work/${project.slug}`,
            },
          ],
        }}
      />

      <Header />

      <main className="min-h-screen pt-32 pb-20">
        {/* Breadcrumb & Title Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumbs">
            <Link href="/" className="hover:text-charcoal transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/work" className="hover:text-charcoal transition-colors">
              Work
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-charcoal font-semibold">{project.brandName}</span>
          </nav>

          <div className="space-y-3">
            <SectionLabel>{project.category} · CASE STUDY</SectionLabel>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-heading text-charcoal">
              {project.title}
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              {project.oneLiner}
            </p>
          </div>

          {/* Quick Meta Row */}
          <div className="pt-4 border-t border-hairline flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-muted">Client:</span>
              <span className="text-xs font-medium text-charcoal">{project.client} ({project.clientRole})</span>
            </div>

            <div className="flex items-center gap-3">
              <Button
                href={project.liveUrl}
                external
                variant="primary"
                size="sm"
                className="gap-1.5"
              >
                <span>View live store</span>
                <ExternalLink className="w-3 h-3" />
              </Button>
              <Button
                href={project.githubUrl}
                external
                variant="secondary"
                size="sm"
                className="gap-1.5"
              >
                <span>Source code</span>
                <ExternalLink className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Artwork with Petrol Band */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
          <div className="bg-surface rounded-card border border-hairline overflow-hidden shadow-md">
            <div className="relative aspect-[16/9] w-full bg-paper">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="bg-petrol text-white px-5 py-3 flex items-center justify-between text-xs uppercase tracking-label font-semibold">
              <span>{project.brandName} · PRODUCTION STOREFRONT</span>
              <span className="flex items-center gap-1.5 text-white/90">
                <span className="w-2 h-2 rounded-full bg-live animate-pulse" />
                Live on Vercel
              </span>
            </div>
          </div>
        </div>

        {/* Core Case Study Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section: The Brief & Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="bg-surface rounded-card border border-hairline p-7 space-y-3">
              <span className="text-xs uppercase tracking-label font-semibold text-petrol">
                01 · THE BRIEF
              </span>
              <h2 className="text-xl font-bold tracking-heading text-charcoal">
                Client Objective
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                {project.brief}
              </p>
            </div>

            <div className="bg-surface rounded-card border border-hairline p-7 space-y-3">
              <span className="text-xs uppercase tracking-label font-semibold text-petrol">
                02 · THE CHALLENGE
              </span>
              <h2 className="text-xl font-bold tracking-heading text-charcoal">
                Engineering Constraints
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* Section: What We Built */}
          <div className="space-y-8">
            <div className="border-b border-hairline pb-4">
              <span className="text-xs uppercase tracking-label font-semibold text-petrol">
                03 · IMPLEMENTATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-heading text-charcoal mt-1">
                What We Built
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.whatWeBuilt.map((feature, idx) => (
                <div
                  key={feature.title}
                  className="bg-surface rounded-card border border-hairline p-6 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-petrol-tint text-petrol font-mono text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-charcoal">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed pl-7">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Gallery Screenshots */}
            {project.galleryImages.length > 1 && (
              <div className="space-y-6 pt-6">
                <h3 className="text-sm uppercase tracking-label font-semibold text-muted">
                  Interface Breakdown
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.galleryImages.slice(1).map((img, i) => (
                    <div
                      key={i}
                      className="bg-surface rounded-card border border-hairline overflow-hidden space-y-3 p-3"
                    >
                      <div className="relative aspect-[4/3] bg-paper rounded-md overflow-hidden">
                        <Image
                          src={img.url}
                          alt={img.caption}
                          fill
                          sizes="(max-width: 768px) 100vw, 500px"
                          className="object-cover object-top"
                        />
                      </div>
                      <p className="text-xs text-muted px-1 leading-snug">
                        {img.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Section: The Stack */}
          <div className="space-y-6">
            <div className="border-b border-hairline pb-4">
              <span className="text-xs uppercase tracking-label font-semibold text-petrol">
                04 · ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-heading text-charcoal mt-1">
                Technology Stack & Rationale
              </h2>
            </div>

            <div className="bg-surface rounded-card border border-hairline divide-y divide-hairline overflow-hidden">
              {project.stackDetails.map((item) => (
                <div
                  key={item.layer}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6"
                >
                  <div className="w-32 shrink-0">
                    <span className="text-xs font-semibold uppercase tracking-label text-petrol">
                      {item.layer}
                    </span>
                  </div>
                  <div className="w-48 shrink-0">
                    <span className="text-sm font-bold text-charcoal">
                      {item.tool}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs sm:text-sm text-muted">
                      {item.purpose}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Factual Results */}
          <div className="space-y-6">
            <div className="border-b border-hairline pb-4">
              <span className="text-xs uppercase tracking-label font-semibold text-petrol">
                05 · RESULTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-heading text-charcoal mt-1">
                Factual Outcomes
              </h2>
            </div>

            <div className="bg-surface rounded-card border border-hairline p-7 space-y-4">
              <ul className="space-y-3">
                {project.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-live shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-charcoal leading-relaxed">
                      {res}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section: Verbatim Client Quote */}
          {project.testimonial && (
            <div className="bg-petrol-tint border border-petrol/20 rounded-card p-8 space-y-4">
              <div className="flex items-start gap-3">
                <Quote className="w-6 h-6 text-petrol shrink-0 mt-1" />
                <div className="space-y-2">
                  <p className="text-base sm:text-lg italic font-medium text-charcoal leading-relaxed">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <p className="text-xs font-bold uppercase tracking-label text-petrol">
                    — {project.testimonial.author}, {project.testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Next Project Navigation */}
          <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-charcoal transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all projects</span>
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-petrol hover:text-petrol-hover transition-colors"
            >
              <span>Next project: {nextProject.brandName}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-24">
          <PetrolBlock>
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <SectionLabel light>BUILD-FIRST PROMISE</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-heading text-white">
                Want a store like {project.brandName}?
              </h2>
              <p className="text-base text-white/85">
                We will build your complete online store before you pay anything. No advance, zero deposit.
              </p>
              <div className="pt-2">
                <Button
                  href="/contact"
                  size="lg"
                  variant="outline-white"
                  className="bg-white text-petrol hover:bg-white/90 font-semibold"
                >
                  Start your store
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
