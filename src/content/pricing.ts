export type Currency = 'USD' | 'PKR';

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  usdRange: string;
  pkrRange: string;
  isCustomQuote?: boolean;
  bestFor: string;
  timeline: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'landing-page',
    name: 'Landing Page',
    usdRange: '$80 – $150',
    pkrRange: 'Rs 8k – 15k',
    bestFor: 'New campaign, product launch, or single-offer business',
    timeline: '3–5 days',
    features: [
      'Single focused conversion page',
      'Ultra-fast sub-second mobile loading',
      'Direct WhatsApp and contact form triggers',
      'Meta Pixel & Google Analytics setup',
      'Domain connection & SSL encryption',
    ],
    ctaLabel: 'Start a project',
    ctaHref: '/contact?service=landing-pages',
  },
  {
    id: 'business-website',
    name: 'Business Website',
    badge: 'MOST POPULAR',
    isPopular: true,
    usdRange: '$150 – $350',
    pkrRange: 'Rs 15k – 35k',
    bestFor: 'Established boutique, practice, consultancy, or company',
    timeline: '5–10 days',
    features: [
      'Multi-page custom Next.js build (Home, About, Services, Contact)',
      'Structured technical SEO & JSON-LD schema',
      'Interactive lead forms with instant routing',
      'Zero monthly plugin or page-builder fees',
      'Full source code ownership handover',
    ],
    ctaLabel: 'Start a project',
    ctaHref: '/contact?service=business-websites',
  },
  {
    id: 'online-store',
    name: 'Online Store',
    badge: 'HIGH DEMAND',
    usdRange: '$350 – $800',
    pkrRange: 'Rs 35k – 80k',
    bestFor: 'Brands taking daily orders and requiring automated checkouts',
    timeline: '10–18 days',
    features: [
      'Custom catalog with faceted category & attribute filters',
      'Friction-free cart & 2-step guest checkout',
      'JazzCash, PayFast, Stripe, and COD payment support',
      'Administrative dashboard for inventory & orders',
      'Automated customer order tracking receipts',
    ],
    ctaLabel: 'Start a project',
    ctaHref: '/contact?service=online-stores',
  },
  {
    id: 'ai-assistant',
    name: 'AI Assistant & Agents',
    isCustomQuote: true,
    usdRange: 'Custom quote',
    pkrRange: 'Custom quote',
    bestFor: 'Automating customer inquiries, lead qualification, or EOD reporting',
    timeline: 'Scope dependent',
    features: [
      'Custom RAG knowledge base on your company documents',
      'On-brand web chat widget with strict citation guardrails',
      'Automated lead qualification and human handoff',
      'Multi-agent workflow automation pipeline',
      'Zero hallucination verification architecture',
    ],
    ctaLabel: 'Book a call',
    ctaHref: '/contact?service=ai-assistants',
  },
  {
    id: 'mobile-app',
    name: 'Mobile App',
    isCustomQuote: true,
    usdRange: 'Custom quote',
    pkrRange: 'Custom quote',
    bestFor: 'On-demand services, customer retention, and native features',
    timeline: 'Scope dependent',
    features: [
      'Cross-platform iOS and Android React Native app',
      'Push notification dispatch (FCM / APNs)',
      'Offline caching and device hardware integration',
      'Secure backend authentication & REST/GraphQL API',
      'App Store & Google Play publishing support',
    ],
    ctaLabel: 'Book a call',
    ctaHref: '/contact?service=mobile-apps',
  },
];

export const pricingNotice = {
  buildFirstPromise:
    'Our build-first promise: we build your complete website first. You test it live. Nothing is due until it is live, working, and you are 100% satisfied.',
  hostingNote:
    'Domain registration and cloud edge hosting are billed directly at cost with zero studio markup.',
};
