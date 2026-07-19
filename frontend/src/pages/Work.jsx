import React from 'react';
import { siteData } from '../data';
import ProjectCard from '../components/ProjectCard';

const Work = () => {
  return (
    <section id="work" className="bg-cream-dim py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-amber text-xs font-semibold tracking-[0.25em] mb-3">OUR WORK</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal mb-4">
            Websites, chatbots and AI agents we've built.
          </h2>
          <p className="text-charcoal/60 text-base">
            A look at real systems — from customer-facing online stores to AI assistants that
            reason over data and automate work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
