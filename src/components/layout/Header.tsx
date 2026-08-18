'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/content/site';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-paper/95 backdrop-blur-md border-b border-hairline py-3.5 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-charcoal font-bold tracking-heading text-lg sm:text-xl group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-2"
          >
            <span className="w-3 h-3 rounded-sm bg-petrol group-hover:bg-petrol-hover transition-colors" />
            <span>SIA <span className="font-semibold text-muted">Technologies</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {siteConfig.navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href) && link.href !== '/#process' && link.href !== '/#pricing';

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-150 relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-2 ${
                    isActive
                      ? 'text-petrol font-semibold'
                      : 'text-charcoal/80 hover:text-charcoal'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-petrol rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button href="/contact" size="md" variant="primary">
              Start a project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-charcoal rounded-card border border-hairline bg-surface hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-2"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-paper pt-24 pb-8 px-6 flex flex-col justify-between md:hidden overflow-y-auto"
          >
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-label font-semibold text-petrol">
                Navigation
              </span>

              <nav className="flex flex-col space-y-4">
                {siteConfig.navLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-bold tracking-heading text-charcoal hover:text-petrol flex items-center justify-between py-2 border-b border-hairline/60"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-5 h-5 text-muted" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Mobile Menu Footer CTA */}
            <div className="pt-8 border-t border-hairline space-y-4">
              <Button
                href="/contact"
                size="lg"
                variant="primary"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start a project
              </Button>
              <div className="text-center">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm font-medium text-muted hover:text-charcoal"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
