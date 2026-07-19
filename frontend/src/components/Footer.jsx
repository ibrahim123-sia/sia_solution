import React from 'react';
import { Code2, Link2, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { siteData } from '../data';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-cream/10">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Logo variant="light" />
            <p className="text-cream/60 text-sm mt-4 max-w-xs">{siteData.company.tagline}</p>
          </div>

          <div>
            <h4 className="text-cream font-display font-semibold mb-4 text-sm tracking-wide uppercase">
              Navigate
            </h4>
            <div className="flex flex-col space-y-2">
              {siteData.nav.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-cream/60 hover:text-amber text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-cream font-display font-semibold mb-4 text-sm tracking-wide uppercase">
              Connect
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-cream/60 mb-4">
              <a href={`mailto:${siteData.company.email}`} className="hover:text-amber transition-colors">
                {siteData.company.email}
              </a>
              <span>{siteData.company.location}</span>
            </div>
            <div className="flex space-x-3">
              <a
                href={siteData.company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-amber hover:border-amber transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={siteData.company.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-amber hover:border-amber transition-colors"
                aria-label="GitHub"
              >
                <Code2 size={16} />
              </a>
              <a
                href={siteData.company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-amber hover:border-amber transition-colors"
                aria-label="LinkedIn"
              >
                <Link2 size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 text-center text-cream/40 text-xs">
          © {year} {siteData.company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
