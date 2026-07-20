import React from 'react';
import { Code2, ExternalLink, Sparkles } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl border border-cream-line overflow-hidden shadow-md shadow-charcoal/[0.06] hover:border-amber/50 hover:shadow-xl hover:shadow-amber/10 hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
      <div className="relative h-44 bg-charcoal flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <Sparkles className="text-amber/60" size={36} />
        )}
        <span className="absolute top-3 left-3 bg-amber/90 text-cream text-[0.65rem] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full">
          {project.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-charcoal text-base mb-2">{project.title}</h3>
        <p className="text-charcoal/60 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[0.65rem] font-medium bg-cream-dim text-charcoal/70 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-cream-line">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-charcoal/70 hover:text-amber transition-colors"
          >
            <Code2 size={14} /> Code
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-charcoal/70 hover:text-amber transition-colors"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
