import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight, Quote } from 'lucide-react';
import type { CaseStudy } from '@/content/projects';
import { TechChip } from '@/components/ui/TechChip';
import { Button } from '@/components/ui/Button';

export interface CaseStudyBlockProps {
  project: CaseStudy;
  imageOnLeft?: boolean;
}

export function CaseStudyBlock({
  project,
  imageOnLeft = true,
}: CaseStudyBlockProps) {
  return (
    <div className="bg-surface rounded-card border border-hairline overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Screenshot Artwork with Petrol Band */}
        <div
          className={`lg:col-span-7 flex flex-col ${
            imageOnLeft ? 'order-1' : 'order-1 lg:order-2'
          }`}
        >
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-paper overflow-hidden group">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          {/* Shape A Petrol Band */}
          <div className="bg-petrol text-white px-5 py-2.5 flex items-center justify-between text-xs uppercase tracking-label font-semibold select-none">
            <span className="truncate">{project.brandName} · STOREFRONT</span>
            <span className="flex items-center gap-1.5 shrink-0 text-white/90">
              <span className="w-2 h-2 rounded-full bg-live animate-pulse" />
              Live
            </span>
          </div>
        </div>

        {/* Content Side */}
        <div
          className={`lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between ${
            imageOnLeft ? 'order-2' : 'order-2 lg:order-1'
          }`}
        >
          <div className="space-y-4">
            <div>
              <span className="text-xs uppercase tracking-label font-semibold text-petrol">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold tracking-heading text-charcoal mt-1">
                {project.title}
              </h3>
            </div>

            <p className="text-base text-muted leading-relaxed">
              {project.oneLiner}
            </p>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.slice(0, 5).map((tech) => (
                <TechChip key={tech}>{tech}</TechChip>
              ))}
            </div>

            {/* Verbatim Client Quote */}
            {project.testimonial && (
              <div className="pt-3 border-t border-hairline">
                <div className="flex items-start gap-2.5">
                  <Quote className="w-4 h-4 text-petrol shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm italic text-charcoal leading-snug">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </p>
                    <p className="text-xs font-semibold text-muted">
                      — {project.testimonial.author}, {project.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-6 mt-4 border-t border-hairline/60">
            <Button
              href={project.liveUrl}
              external
              variant="secondary"
              size="md"
              className="gap-2 text-xs"
            >
              <span>View live site</span>
              <ExternalLink className="w-3.5 h-3.5 text-muted" />
            </Button>
            <Button
              href={`/work/${project.slug}`}
              variant="ghost"
              size="md"
              className="gap-1.5 text-xs text-petrol hover:text-petrol-hover font-semibold"
            >
              <span>Case study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
