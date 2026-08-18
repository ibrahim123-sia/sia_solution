'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Code2, Quote } from 'lucide-react';
import { clientProjects } from '@/content/projects';
import { rdProjects } from '@/content/rd-projects';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/layout/JsonLd';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TechChip } from '@/components/ui/TechChip';
import { Button } from '@/components/ui/Button';

type FilterCategory = 'All' | 'Online Stores' | 'Business Websites' | 'AI & Systems';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const categories: FilterCategory[] = [
    'All',
    'Online Stores',
    'Business Websites',
    'AI & Systems',
  ];

  const filteredClientProjects = clientProjects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Online Stores') return project.category === 'Online Store';
    if (activeFilter === 'Business Websites') return project.category === 'Business Website';
    return false;
  });

  const showRd = activeFilter === 'All' || activeFilter === 'AI & Systems';

  return (
    <>
      <JsonLd
        type="WebSite"
        data={{
          name: 'Work & Case Studies · SIA Technologies',
          description:
            'Explore live e-commerce stores, custom websites, and in-house AI R&D projects built by SIA Technologies.',
        }}
      />

      <Header />

      <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header Hero */}
        <div className="space-y-4 max-w-3xl mb-12">
          <SectionLabel>OUR PORTFOLIO & CASE STUDIES</SectionLabel>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-heading text-charcoal">
            Shipped work. <span className="text-petrol">Real proof.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Every client store below was built completely before the client paid any advance. Review the live sites, tech architectures, and case studies.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-chip transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-petrol text-white shadow-sm'
                    : 'bg-surface text-charcoal border border-hairline hover:bg-paper'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Client Projects Section */}
        {filteredClientProjects.length > 0 && (
          <div className="space-y-8 mb-20">
            <div className="flex items-center justify-between border-b border-hairline pb-3">
              <h2 className="text-xl font-bold tracking-heading text-charcoal">
                Client Storefronts & Platforms
              </h2>
              <span className="text-xs font-mono text-muted">
                {filteredClientProjects.length} {filteredClientProjects.length === 1 ? 'project' : 'projects'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredClientProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-surface rounded-card border border-hairline overflow-hidden flex flex-col justify-between hover:border-muted/50 hover:shadow-md transition-all duration-200 group"
                >
                  <div>
                    {/* Artwork with Petrol Band */}
                    <div className="relative aspect-[16/10] bg-paper overflow-hidden">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>

                    <div className="bg-petrol text-white px-4 py-2 flex items-center justify-between text-xs uppercase tracking-label font-semibold">
                      <span>{project.brandName}</span>
                      <span className="flex items-center gap-1.5 text-white/90">
                        <span className="w-2 h-2 rounded-full bg-live animate-pulse" />
                        Live Store
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <span className="text-[11px] uppercase tracking-label font-semibold text-petrol">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold tracking-heading text-charcoal mt-0.5">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-sm text-muted leading-relaxed">
                        {project.oneLiner}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <TechChip key={tech}>{tech}</TechChip>
                        ))}
                      </div>

                      {/* Client quote */}
                      {project.testimonial && (
                        <div className="pt-3 border-t border-hairline/60 flex items-start gap-2">
                          <Quote className="w-3.5 h-3.5 text-petrol shrink-0 mt-0.5" />
                          <p className="text-xs italic text-charcoal leading-snug">
                            &ldquo;{project.testimonial.quote}&rdquo; —{' '}
                            <span className="font-semibold text-muted">
                              {project.testimonial.author}
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-6 py-4 bg-paper/50 border-t border-hairline flex items-center justify-between">
                    <Button
                      href={project.liveUrl}
                      external
                      variant="secondary"
                      size="sm"
                      className="gap-1.5"
                    >
                      <span>Live site</span>
                      <ExternalLink className="w-3 h-3 text-muted" />
                    </Button>

                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-petrol hover:text-petrol-hover transition-colors"
                    >
                      <span>Read case study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI & R&D Capability Section */}
        {showRd && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-hairline pb-3 gap-2">
              <div>
                <h2 className="text-xl font-bold tracking-heading text-charcoal">
                  In-House AI Research & Development
                </h2>
                <p className="text-xs text-muted">
                  Experimental architectures, RAG pipelines, and agent systems developed in-house.
                </p>
              </div>
              <span className="text-xs font-mono text-muted">
                {rdProjects.length} prototypes
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rdProjects.map((item) => (
                <div
                  key={item.id}
                  className="bg-surface rounded-card border border-hairline p-6 flex flex-col justify-between hover:border-muted/50 transition-colors"
                >
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
                      {item.description}
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
                      <span>View GitHub repo</span>
                      <ExternalLink className="w-3.5 h-3.5 text-muted" />
                    </a>

                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-petrol hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
