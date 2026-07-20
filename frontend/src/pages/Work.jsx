import React from 'react';
import { siteData } from '../data';
import ProjectCard from '../components/ProjectCard';
import ClientProjectCard from '../components/ClientProjectCard';

const Work = () => {
  return (
    <section id="work" className="bg-cream-dim py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-amber text-xs font-semibold tracking-[0.25em] mb-3">OUR WORK</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal mb-4">
            Real stores we've built for real clients.
          </h2>
          <p className="text-charcoal/60 text-base">
            Live e-commerce platforms — from storefront to admin dashboard — built for brands
            who trusted us with their launch, plus AI assistants and agents from our own R&D.
          </p>
        </div>

        <div className="flex flex-col mb-24">
          {siteData.clientProjects.map((project, i) => (
            <React.Fragment key={project.id}>
              {i > 0 && <div className="border-t border-cream-line my-16 sm:my-20" />}
              <ClientProjectCard project={project} reverse={i % 2 === 1} />
            </React.Fragment>
          ))}
        </div>

        <div className="max-w-2xl mb-10">
          <p className="text-amber text-xs font-semibold tracking-[0.25em] mb-3">MORE FROM OUR STUDIO</p>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-charcoal">
            AI assistants and agents we've built in-house.
          </h3>
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
