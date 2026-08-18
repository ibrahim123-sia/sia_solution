import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { servicesData } from '@/content/services';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-hairline pt-16 pb-12 text-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-hairline">
          {/* Column 1: Brand & Studio Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-charcoal font-bold tracking-heading text-xl"
            >
              <span className="w-3 h-3 rounded-sm bg-petrol" />
              <span>SIA <span className="font-semibold text-muted">Technologies</span></span>
            </Link>

            <p className="text-sm text-muted leading-relaxed max-w-sm">
              We build your complete website first; you use it; you pay only once it&apos;s live and you&apos;re happy.
              No advance, no deposit.
            </p>

            <p className="text-xs font-semibold uppercase tracking-label text-petrol">
              {siteConfig.location}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-muted hover:text-charcoal flex items-center gap-1 transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-muted hover:text-charcoal flex items-center gap-1 transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-muted hover:text-charcoal flex items-center gap-1 transition-colors"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-label font-semibold text-petrol">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-charcoal transition-colors py-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-label font-semibold text-petrol">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              {servicesData.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="hover:text-charcoal transition-colors py-0.5 inline-block"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-label font-semibold text-petrol">
              Direct Contact
            </h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className="block text-xs text-muted">Email</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-charcoal hover:text-petrol transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <span className="block text-xs text-muted">WhatsApp / Phone</span>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-charcoal hover:text-petrol transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="pt-2">
                <span className="inline-block text-[11px] text-muted bg-paper border border-hairline px-2.5 py-1 rounded-chip">
                  Response time: &lt; 4 hours
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© 2026 SIA Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-charcoal transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-charcoal transition-colors">
              Inquire
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
