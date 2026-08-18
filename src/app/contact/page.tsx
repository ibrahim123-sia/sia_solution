'use client';

import React, { useState, useTransition, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, MessageCircle, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/layout/JsonLd';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get('service') || '';

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    business: '',
    service: defaultService || 'business-websites',
    message: '',
    honeypot: '',
  });

  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setErrorMessage('');

    startTransition(async () => {
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formState),
        });

        const data = await res.json();

        if (!res.ok) {
          setStatus('error');
          setErrorMessage(data.error || 'Failed to send message. Please reach out via WhatsApp.');
        } else {
          setStatus('success');
          setFormState({
            name: '',
            email: '',
            business: '',
            service: 'business-websites',
            message: '',
            honeypot: '',
          });
        }
      } catch {
        setStatus('error');
        setErrorMessage('Network error. Please message us directly on WhatsApp.');
      }
    });
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="w-14 h-14 rounded-full bg-live/10 text-live flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold tracking-heading text-charcoal">
          Message Received
        </h3>
        <p className="text-sm sm:text-base text-muted max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. We will review your project requirements and respond with initial architecture notes within 4 hours.
        </p>
        <div className="pt-4">
          <Button
            onClick={() => setStatus('idle')}
            variant="secondary"
            size="md"
          >
            Send another inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="border-b border-hairline pb-4">
        <h2 className="text-xl font-bold tracking-heading text-charcoal">
          Project Inquiry Form
        </h2>
        <p className="text-xs text-muted mt-1">
          Fill out the form below. We will begin discussing your build immediately.
        </p>
      </div>

      {/* Honeypot spam trap */}
      <input
        type="text"
        name="honeypot"
        value={formState.honeypot}
        onChange={(e) =>
          setFormState({ ...formState, honeypot: e.target.value })
        }
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label
            htmlFor="name"
            className="text-xs uppercase tracking-label font-semibold text-charcoal block"
          >
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="e.g. Mahnoor Javed"
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            className="w-full px-4 py-2.5 rounded-btn bg-paper border border-hairline text-sm text-charcoal focus:bg-surface focus:border-petrol transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-xs uppercase tracking-label font-semibold text-charcoal block"
          >
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="e.g. name@brand.com"
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            className="w-full px-4 py-2.5 rounded-btn bg-paper border border-hairline text-sm text-charcoal focus:bg-surface focus:border-petrol transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label
            htmlFor="business"
            className="text-xs uppercase tracking-label font-semibold text-charcoal block"
          >
            Business / Brand Name
          </label>
          <input
            id="business"
            type="text"
            placeholder="e.g. Zephyr Fragrances"
            value={formState.business}
            onChange={(e) =>
              setFormState({ ...formState, business: e.target.value })
            }
            className="w-full px-4 py-2.5 rounded-btn bg-paper border border-hairline text-sm text-charcoal focus:bg-surface focus:border-petrol transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="service"
            className="text-xs uppercase tracking-label font-semibold text-charcoal block"
          >
            Service Interest
          </label>
          <select
            id="service"
            value={formState.service}
            onChange={(e) =>
              setFormState({ ...formState, service: e.target.value })
            }
            className="w-full px-4 py-2.5 rounded-btn bg-paper border border-hairline text-sm text-charcoal focus:bg-surface focus:border-petrol transition-colors"
          >
            <option value="business-websites">Business Website</option>
            <option value="online-stores">Online Store / E-Commerce</option>
            <option value="landing-pages">Landing Page</option>
            <option value="ai-assistants">AI Assistant & Chatbot</option>
            <option value="mobile-apps">Mobile App (iOS/Android)</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="text-xs uppercase tracking-label font-semibold text-charcoal block"
        >
          Project Details & Goals *
        </label>
        <textarea
          id="message"
          rows={4}
          required
          placeholder="Tell us what you want to build, any existing website links, and what features you need..."
          value={formState.message}
          onChange={(e) =>
            setFormState({ ...formState, message: e.target.value })
          }
          className="w-full px-4 py-3 rounded-btn bg-paper border border-hairline text-sm text-charcoal focus:bg-surface focus:border-petrol transition-colors resize-y"
        />
      </div>

      {status === 'error' && (
        <div className="p-3 rounded-card bg-red-50 border border-red-200 text-xs text-red-700">
          {errorMessage}
        </div>
      )}

      <div className="pt-2">
        <Button
          type="submit"
          disabled={isPending}
          size="lg"
          variant="primary"
          className="w-full justify-center gap-2"
        >
          {isPending ? (
            <span>Sending inquiry...</span>
          ) : (
            <>
              <span>Submit inquiry — Zero advance</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        type="WebSite"
        data={{
          name: 'Contact · SIA Technologies',
          description:
            'Start a web development project with SIA Technologies. Build first, pay after.',
        }}
      />

      <Header />

      <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header Hero */}
        <div className="space-y-4 max-w-3xl mb-12">
          <SectionLabel>START A PROJECT</SectionLabel>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-heading text-charcoal">
            Tell us about your brand. <span className="text-petrol">We’ll build it first.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            No advance invoice, zero deposit. Send your project details, and we will begin building your live site.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info & Direct Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface rounded-card border border-hairline p-7 space-y-6">
              <h2 className="text-xl font-bold tracking-heading text-charcoal">
                Direct Channels
              </h2>

              <div className="space-y-4">
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 rounded-card bg-paper border border-hairline hover:border-petrol transition-colors group"
                >
                  <div className="w-10 h-10 rounded-chip bg-petrol-tint flex items-center justify-center text-petrol shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs uppercase tracking-label font-semibold text-petrol block">
                      WhatsApp Direct
                    </span>
                    <span className="text-sm font-bold text-charcoal group-hover:text-petrol transition-colors">
                      {siteConfig.phone}
                    </span>
                    <span className="text-xs text-muted block">
                      Instant messaging · Voice notes welcome
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 p-4 rounded-card bg-paper border border-hairline hover:border-petrol transition-colors group"
                >
                  <div className="w-10 h-10 rounded-chip bg-petrol-tint flex items-center justify-center text-petrol shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs uppercase tracking-label font-semibold text-petrol block">
                      Business Email
                    </span>
                    <span className="text-sm font-bold text-charcoal group-hover:text-petrol transition-colors">
                      {siteConfig.email}
                    </span>
                    <span className="text-xs text-muted block">
                      Detailed scopes & attachments
                    </span>
                  </div>
                </a>
              </div>

              {/* Guarantees */}
              <div className="pt-4 border-t border-hairline space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <Clock className="w-4 h-4 text-petrol" />
                  <span>Response time: under 4 hours</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <ShieldCheck className="w-4 h-4 text-live" />
                  <span>Zero advance deposit required</span>
                </div>
              </div>
            </div>

            {/* Location Line */}
            <div className="p-6 rounded-card bg-paper border border-hairline space-y-1">
              <span className="text-xs font-bold uppercase tracking-label text-petrol block">
                Studio Location
              </span>
              <p className="text-sm font-semibold text-charcoal">
                {siteConfig.location}
              </p>
              <p className="text-xs text-muted">
                Available across GMT+5, Gulf Standard, GMT, and US Eastern business hours.
              </p>
            </div>
          </div>

          {/* Right: Interactive Contact Form wrapped in Suspense */}
          <div className="lg:col-span-7 bg-surface rounded-card border border-hairline p-8 sm:p-10 shadow-sm">
            <Suspense
              fallback={
                <div className="py-12 text-center text-xs text-muted">
                  Loading form...
                </div>
              }
            >
              <ContactFormInner />
            </Suspense>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
