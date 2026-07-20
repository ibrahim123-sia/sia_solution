import React from 'react';
import { Code2, ExternalLink, Quote } from 'lucide-react';

const ClientProjectCard = ({ project, reverse }) => {
  const [heroImage] = project.images;

  return (
    <div>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Screenshot — single hero shot in a consistent browser-chrome frame so every
            raw client screenshot (different aspect ratios/colors) reads as one polished system. */}
        <div className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
          <div className="rounded-xl bg-white border border-cream-line shadow-sm shadow-black/5 overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-cream-dim border-b border-cream-line">
              <span className="w-2 h-2 rounded-full bg-amber/60" />
              <span className="w-2 h-2 rounded-full bg-amber-light/60" />
              <span className="w-2 h-2 rounded-full bg-charcoal/20" />
              <span className="flex-1 mx-2 text-[0.6rem] text-charcoal/35 truncate text-center">
                {project.liveDemo?.replace(/^https?:\/\//, '')}
              </span>
            </div>
            <div className="aspect-[16/10] overflow-hidden bg-cream-dim">
              <img
                src={heroImage}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
          <span className="inline-block text-[0.65rem] font-semibold tracking-wide uppercase bg-amber/10 text-amber px-2.5 py-1 rounded-full mb-5">
            {project.category}
          </span>

          <h3 className="font-display font-bold text-2xl sm:text-3xl text-charcoal mb-4 leading-snug">
            {project.title}
          </h3>

          <p className="text-charcoal/60 text-sm sm:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium text-charcoal/50 border border-cream-line px-2.5 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold bg-amber hover:bg-amber-dark text-cream px-4 py-2.5 rounded-lg transition-colors"
            >
              <ExternalLink size={14} /> View Live Site
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-charcoal/60 hover:text-amber transition-colors"
            >
              <Code2 size={14} /> Code
            </a>
          </div>
        </div>
      </div>

      {/* Testimonial — pulled out of the card into its own quiet block so it doesn't
          compete with the case-study facts above; matches how agencies separate proof from spec. */}
      <div className={`mt-10 lg:mt-12 max-w-2xl ${reverse ? 'lg:ml-auto' : ''}`}>
        <div className="bg-white rounded-xl border border-cream-line p-6 sm:p-7 flex gap-4">
          <Quote className="text-amber/50 flex-shrink-0" size={20} />
          <div>
            <p className="text-charcoal/70 text-sm sm:text-[0.95rem] italic leading-relaxed mb-3">
              "{project.testimonial}"
            </p>
            <p className="text-charcoal text-sm font-semibold">
              {project.client}
              <span className="block text-charcoal/40 text-xs font-normal mt-0.5">
                Owner, {project.title.split('—')[0].trim()}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProjectCard;
