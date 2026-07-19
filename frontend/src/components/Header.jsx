import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { siteData } from '../data';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-charcoal/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-charcoal'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#home" aria-label="SIA Solution home">
            <Logo variant="light" />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {siteData.nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-cream/80 hover:text-amber font-medium text-sm tracking-wide transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-amber hover:bg-amber-dark text-cream font-semibold text-sm px-5 py-2.5 rounded-md transition-colors"
            >
              Get in Touch
            </a>
          </nav>

          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-cream"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in border-t border-cream/10 pt-4">
            <div className="flex flex-col space-y-4">
              {siteData.nav.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-cream/80 hover:text-amber font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-amber hover:bg-amber-dark text-cream font-semibold text-sm px-5 py-2.5 rounded-md transition-colors text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
