import React from 'react';
import { Code2, ExternalLink, Quote } from 'lucide-react';

const ClientProjectCard = ({ project, reverse }) => {
  const [main, ...rest] = project.images;

  return (
    <div className="bg-white rounded-2xl border border-cream-line overflow-hidden shadow-sm">
      <div className={`grid lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div className="grid grid-cols-2 gap-1.5 p-1.5 bg-cream-dim">
          <img
            src={main}
            alt={`${project.title} hero screenshot`}
            className="col-span-2 w-full h-52 sm:h-64 object-cover object-top rounded-xl"
            loading="lazy"
          />
          {rest.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} screenshot ${i + 2}`}
              className="w-full h-28 sm:h-32 object-cover object-top rounded-xl"
              loading="lazy"
            />
          ))}
        </div>

        <div className="p-6 sm:p-8 flex flex-col">
          <span className="self-start text-[0.65rem] font-semibold tracking-wide uppercase bg-amber/10 text-amber px-2.5 py-1 rounded-full mb-4">
            {project.category}
          </span>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-3">
            {project.title}
          </h3>

          <p className="text-charcoal/60 text-sm leading-relaxed mb-5">{project.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[0.65rem] font-medium bg-cream-dim text-charcoal/70 px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-6">
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
              className="flex items-center gap-1.5 text-xs font-medium text-charcoal/70 hover:text-amber transition-colors"
            >
              <Code2 size={14} /> Code
            </a>
          </div>

          <div className="mt-auto pt-5 border-t border-cream-line">
            <Quote className="text-amber/40 mb-2" size={22} />
            <p className="text-charcoal/70 text-sm italic leading-relaxed mb-3">
              "{project.testimonial}"
            </p>
            <p className="text-charcoal text-sm font-semibold">
              {project.client}
              <span className="block text-charcoal/40 text-xs font-normal">
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
