export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  label: string;
  shortDescription: string;
  deliverables: string[];
  metaTitle: string;
  metaDescription: string;
  heroPitch: string;
  whoItsFor: string[];
  whatsIncluded: {
    category: string;
    items: string[];
  }[];
  timeline: {
    phase: string;
    duration: string;
    description: string;
  }[];
  buildFirstGuarantee: string;
  deepDive: {
    heading: string;
    paragraphs: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedProjectSlugs: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'business-websites',
    slug: 'business-websites',
    title: 'Business Websites',
    label: 'CORE OFFER',
    shortDescription:
      'Fast, multi-page custom websites designed to build immediate credibility, rank on Google, and convert qualified visitors into inquiries.',
    deliverables: [
      'Bespoke multi-page design & build',
      'Technical SEO architecture & schema',
      'Mobile-first responsive engineering',
      'Custom contact forms & lead routing',
    ],
    metaTitle: 'Custom Business Website Development in Karachi & Worldwide',
    metaDescription:
      'Custom business websites engineered for speed, search visibility, and lead generation. Built first with zero advance deposit.',
    heroPitch:
      'Your website is the single most scrutinized asset your business owns. We engineer custom business websites from scratch that communicate authority, load in under a second, and turn casual visitors into paying clients.',
    whoItsFor: [
      'Professional service firms (consultancies, legal practices, clinics, financial advisors) needing established credibility.',
      'B2B companies and industrial suppliers requiring clear service breakdowns and structured quotation forms.',
      'Growing regional brands transitioning away from slow WordPress or generic page-builder templates.',
      'Founders who want direct developer access with zero agency bureaucracy.',
    ],
    whatsIncluded: [
      {
        category: 'Architecture & Engineering',
        items: [
          'Handcrafted Next.js frontend with 100% clean, semantic TypeScript code.',
          'Custom layout system with zero bloated third-party template plugins.',
          'Core Web Vitals optimization achieving 95+ Lighthouse scores.',
          'Edge caching and CDN asset delivery for instantaneous global page loads.',
        ],
      },
      {
        category: 'Content & Lead Generation',
        items: [
          'High-intent landing sections structured around buyer psychology.',
          'Validated inquiry forms with instant email and webhook notifications.',
          'Direct WhatsApp chat integration with pre-filled context parameters.',
          'Interactive FAQ accordions and social proof presentation blocks.',
        ],
      },
      {
        category: 'Search & Technical SEO',
        items: [
          'Automated OpenGraph social preview images and Twitter cards.',
          'JSON-LD Schema Markup (Organization, LocalBusiness, Service).',
          'Dynamic XML sitemaps and search engine indexing directives.',
          'Semantic HTML structure optimized for search engine crawl efficiency.',
        ],
      },
    ],
    timeline: [
      { phase: 'Discovery & Wireframing', duration: '1–2 Days', description: 'Reviewing brand goals, content assets, and user conversion paths.' },
      { phase: 'Complete Build', duration: '5–7 Days', description: 'Developing the complete website, pages, forms, and responsive views.' },
      { phase: 'Live Testing & Staging', duration: '2–3 Days', description: 'You review the live functional website and test all interactions.' },
      { phase: 'Handover & Deployment', duration: '1 Day', description: 'Domain connection, live DNS switch, analytics setup, and code handover.' },
    ],
    buildFirstGuarantee:
      'We build your entire business website first. You review the staging link, test the mobile navigation, verify the contact forms, and ensure you are 100% satisfied. You only pay once the site is deployed live.',
    deepDive: [
      {
        heading: 'Why template builders fail growing businesses',
        paragraphs: [
          'Most business websites are built on heavy CMS systems overloaded with dozens of third-party plugins. Over time, these sites become painfully slow, vulnerable to security exploits, and difficult to customize as your services evolve.',
          'At SIA Technologies, every business website is custom-engineered using modern React and Next.js. We don’t use generic multi-purpose themes. Every line of code exists solely to serve your brand’s speed, search positioning, and customer conversion.',
          'By eliminating plugin overhead, your site achieves sub-second loading times on mobile devices. For visitors browsing on 4G networks across Karachi, Dubai, London, or New York, this instantaneous speed builds immediate trust before they even read your first paragraph.',
        ],
      },
      {
        heading: 'Designed for conversion, not just aesthetics',
        paragraphs: [
          'A beautiful website that fails to generate inquiries is an expensive brochure. We structure every page to answer the three critical questions every prospective customer asks within 5 seconds: What do you do? Why should I trust you? What step do I take next?',
          'From prominent trust signals and clear capability matrices to friction-free contact forms and direct WhatsApp triggers, your website is engineered to capture qualified interest 24 hours a day.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Who writes the copy and provides the images?',
        answer:
          'We help organize and refine your content. You provide your core service details and photography, and we polish the headings, value propositions, and calls-to-action to ensure maximum clarity and conversion.',
      },
      {
        question: 'Can I update the content myself later?',
        answer:
          'Yes. We can connect a lightweight headless CMS or structured content files so your team can easily update text, add blog posts, or modify service offerings without touching code.',
      },
      {
        question: 'What domain and hosting services do you support?',
        answer:
          'We deploy on high-performance global edge networks (Vercel, Cloudflare) and connect directly to your existing domain registrar (Namecheap, GoDaddy, PKNIC). We guide you through the process or configure it for you with zero markup.',
      },
    ],
    relatedProjectSlugs: ['naqsh', 'zephyr', 'nowhere', 'hoor'],
  },
  {
    id: 'online-stores',
    slug: 'online-stores',
    title: 'Online Stores',
    label: 'FLAGSHIP',
    shortDescription:
      'Custom e-commerce platforms with lightning-fast catalog search, guest checkout, local payment gateways, and order management.',
    deliverables: [
      'Custom product catalog & faceted filtering',
      'High-conversion cart & guest checkout',
      'Local & international payment gateways',
      'Admin dashboard for inventory & orders',
    ],
    metaTitle: 'Custom Online Store & E-Commerce Development in Pakistan',
    metaDescription:
      'High-performance custom online stores with JazzCash, PayFast, and card integrations. Built first, pay only after you test it live.',
    heroPitch:
      'Stop losing mobile shoppers to slow Shopify themes and clunky checkouts. We build custom, ultra-fast online stores engineered for high conversion rates and seamless regional payment processing.',
    whoItsFor: [
      'Apparel, jewelry, and cosmetics brands looking for a distinctive digital boutique that outclasses template stores.',
      'D2C consumer brands in Pakistan needing reliable JazzCash, Easypaisa, PayFast, and COD integrations.',
      'Retailers scaling beyond Instagram DMs who require automated inventory, order tracking, and customer records.',
      'Merchants tired of paying monthly Shopify app subscription fees for basic e-commerce features.',
    ],
    whatsIncluded: [
      {
        category: 'Storefront & Customer Experience',
        items: [
          'Instant faceted product filtering by category, price, size, and custom attributes.',
          'High-resolution multi-angle product zoom with lazy-loaded progressive images.',
          'Slide-over cart drawer with real-time subtotal and shipping cost calculations.',
          'Friction-free 2-step checkout supporting guest purchases and one-click WhatsApp reordering.',
        ],
      },
      {
        category: 'Payments & Regional Logistics',
        items: [
          'Integration with JazzCash, Easypaisa, PayFast, Stripe, and Cash on Delivery (COD).',
          'Automated SMS and email order confirmation with tracking links.',
          'Custom city-based shipping calculation rules and promotional discount codes.',
          'Courier API integration hooks (TCS, Call Courier, Leopards, Trax).',
        ],
      },
      {
        category: 'Merchant Admin & Control',
        items: [
          'Secure administrative dashboard to add, edit, and categorize SKUs.',
          'Order status management workflow (Pending, Processing, Dispatched, Delivered).',
          'Customer database with order history and contact details.',
          'Exportable sales logs for accounting and inventory audits.',
        ],
      },
    ],
    timeline: [
      { phase: 'Store Architecture & Catalog Model', duration: '2–3 Days', description: 'Defining product schema, attribute variants, and checkout flows.' },
      { phase: 'Frontend & Backend Development', duration: '7–12 Days', description: 'Building catalog, cart, gateway integrations, and order management.' },
      { phase: 'End-to-End Live Testing', duration: '3–4 Days', description: 'Processing test orders, verifying payment callbacks, and checking mobile layout.' },
      { phase: 'Production Launch', duration: '1 Day', description: 'Connecting live merchant credentials, domain configuration, and staff walk-through.' },
    ],
    buildFirstGuarantee:
      'We build your complete e-commerce store first. You test adding products, placing test orders, receiving notifications, and reviewing the admin panel on a live staging URL. You pay only when the store is live and working.',
    deepDive: [
      {
        heading: 'Why custom e-commerce outperforms generic platforms',
        paragraphs: [
          'Standard e-commerce platforms charge ongoing monthly fees and force you to install dozens of heavy third-party apps for basic functionality like sliders, variant selectors, and local payment methods. Each app injects additional JavaScript, degrading mobile page speed.',
          'Our custom e-commerce architecture gives you complete ownership. We build every feature — from scent/variant filters to direct mobile wallet checkouts — directly into your codebase. The result is a store that loads in under a second and incurs zero recurring third-party app fees.',
          'For fashion, fragrance, and jewelry brands, aesthetic refinement is everything. We tailor every interaction, button state, and slide-over transition to match your brand identity perfectly.',
        ],
      },
      {
        heading: 'Optimized for local payment realities',
        paragraphs: [
          'In Pakistan and the wider region, e-commerce checkout must accommodate varied payment habits. We implement frictionless guest checkout alongside trusted payment options: JazzCash direct wallets, PayFast debit/credit processing, and automated Cash on Delivery verification.',
          'By removing account creation requirements and keeping form inputs to the absolute minimum, we drastically reduce checkout abandonment on mobile devices.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you charge a percentage of my sales?',
        answer:
          'No. Never. You own the code and the store completely. You only pay standard merchant transaction fees directly to your payment gateway provider (e.g., JazzCash or PayFast).',
      },
      {
        question: 'Can I easily add new products myself?',
        answer:
          'Yes. Every store includes a dedicated admin dashboard where you or your team can upload photos, set prices, update inventory quantities, and manage orders without technical knowledge.',
      },
      {
        question: 'How do you handle Cash on Delivery (COD)?',
        answer:
          'We configure complete COD workflows with automated phone/WhatsApp order confirmation hooks and courier tracking generation.',
      },
    ],
    relatedProjectSlugs: ['naqsh', 'zephyr', 'nowhere', 'hoor'],
  },
  {
    id: 'landing-pages',
    slug: 'landing-pages',
    title: 'Landing Pages',
    label: 'HIGH CONVERSION',
    shortDescription:
      'Single-page websites engineered for ad campaigns, product launches, and lead capture with aggressive sub-second load times.',
    deliverables: [
      'Conversion-focused single page design',
      'Ultra-fast sub-second mobile loading',
      'Integrated lead forms & WhatsApp actions',
      'Ad tracking pixel & analytics setup',
    ],
    metaTitle: 'High-Converting Landing Page Development in Karachi',
    metaDescription:
      'High-performance single-page websites engineered for paid ad campaigns and high conversion rates. Built first, pay after launch.',
    heroPitch:
      'When you are spending money on Meta, Google, or TikTok ads, every millisecond of page delay costs you revenue. We engineer ultra-fast landing pages built specifically to turn paid traffic into qualified leads.',
    whoItsFor: [
      'Brands running paid ad campaigns on Instagram, TikTok, or Google Ads requiring maximum ROAS.',
      'Startups launching a new product, mobile app, or service needing a dedicated waitlist capture page.',
      'Event organizers and workshop hosts collecting registrations and ticket inquiries.',
      'Small businesses wanting a simple, elegant single-page web presence without multi-page complexity.',
    ],
    whatsIncluded: [
      {
        category: 'Conversion Design',
        items: [
          'Hero section tailored to match ad creative messaging for consistent user scent.',
          'Clear benefit breakdowns with digestible visual hierarchy.',
          'Authentic proof blocks, client quotes, and credential badges.',
          'Sticky mobile action bar driving direct WhatsApp or form submissions.',
        ],
      },
      {
        category: 'Speed & Performance',
        items: [
          'Zero external script bloat for sub-second mobile First Contentful Paint (FCP).',
          'Next-gen image formatting (WebP/AVIF) with adaptive responsive sizing.',
          'Server-rendered HTML delivering immediate visual paint without layout shifts.',
        ],
      },
      {
        category: 'Tracking & Analytics',
        items: [
          'Meta Pixel (Facebook/Instagram) event tracking integration.',
          'Google Tag Manager and Google Analytics 4 conversion tracking.',
          'Automated form submission logging to email and Google Sheets.',
        ],
      },
    ],
    timeline: [
      { phase: 'Copy & Offer Framing', duration: '1 Day', description: 'Reviewing your value proposition, target audience, and ad campaign angles.' },
      { phase: 'Design & Build', duration: '2–3 Days', description: 'Crafting the responsive single-page build with tracking integrations.' },
      { phase: 'Live Testing & QA', duration: '1 Day', description: 'Verifying mobile responsiveness, ad pixel fires, and form deliverability.' },
      { phase: 'Live Launch', duration: '1 Day', description: 'DNS connection and campaign readiness check.' },
    ],
    buildFirstGuarantee:
      'We design and build your landing page completely before taking any payment. You test the page speed on your own phone, check form submissions, and verify ad tracking before finalizing payment.',
    deepDive: [
      {
        heading: 'Why page speed determines your advertising return',
        paragraphs: [
          'Studies consistently demonstrate that over 50% of mobile visitors abandon a landing page if it takes longer than 3 seconds to load. If your page takes 5 seconds, more than half your ad budget is wasted on bounced clicks.',
          'Our landing pages are hand-coded using Next.js and Tailwind CSS with zero page-builder bloat. They load almost instantaneously even on standard cellular connections, ensuring your ad spend reaches actual prospective buyers.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can you set up my Meta Pixel and Google Analytics?',
        answer:
          'Yes. We configure all tracking pixels and standard conversion events (Lead, InitiateCheckout, Contact) so your ad algorithms optimize accurately from day one.',
      },
      {
        question: 'How fast can you build a landing page?',
        answer:
          'Typical turnaround for a complete custom landing page is 3 to 5 business days from receiving your project details.',
      },
    ],
    relatedProjectSlugs: ['hoor', 'naqsh', 'zephyr'],
  },
  {
    id: 'ai-assistants',
    slug: 'ai-assistants',
    title: 'AI Assistants & Chatbots',
    label: 'DIFFERENTIATOR',
    shortDescription:
      'Custom LLM-powered virtual assistants trained on your business data to qualify leads, answer customer questions, and automate workflows.',
    deliverables: [
      'Custom RAG knowledge base setup',
      'On-brand website chat widget integration',
      'Lead qualification & routing pipeline',
      'Multi-agent workflow automation',
    ],
    metaTitle: 'Custom AI Assistant & Chatbot Development Studio',
    metaDescription:
      'Intelligent AI assistants, RAG platforms, and automated workflow agents trained on your business knowledge. Custom quoted.',
    heroPitch:
      'Transform static business documentation into intelligent 24/7 customer assistants. We build custom Retrieval-Augmented Generation (RAG) agents that answer complex inquiries accurately without hallucinating.',
    whoItsFor: [
      'Businesses spending hours answering repetitive customer questions via email, DMs, or WhatsApp.',
      'Institutions, schools, and legal consultancies managing large repositories of manuals, policies, and catalogs.',
      'Service companies wanting an automated agent to qualify incoming leads before routing to human reps.',
      'Tech founders seeking a specialized AI prototype or multi-agent automation pipeline.',
    ],
    whatsIncluded: [
      {
        category: 'Data Ingestion & RAG Engineering',
        items: [
          'Document parsing and chunking for PDFs, manuals, product catalogs, and policies.',
          'Vector database indexing (Pinecone, ChromaDB, pgvector) with semantic embeddings.',
          'Strict prompt engineering and guardrails ensuring zero fabricated answers.',
          'Source citation metadata linking responses directly to official reference passages.',
        ],
      },
      {
        category: 'Interface & Integration',
        items: [
          'Lightweight website chat widget customized to match your brand colors.',
          'Conversation history persistence and session token management.',
          'Human handoff triggers for inquiries requiring manager escalation.',
          'Optional WhatsApp Business API integration hooks.',
        ],
      },
      {
        category: 'Monitoring & Admin',
        items: [
          'Analytics dashboard tracking common questions and customer sentiment.',
          'Feedback capture mechanism (thumbs up/down) for continuous prompt tuning.',
          'Secure API token usage management and rate limiting.',
        ],
      },
    ],
    timeline: [
      { phase: 'Knowledge Base Audit', duration: '2–3 Days', description: 'Analyzing source documents, FAQ logs, and escalation protocols.' },
      { phase: 'Vector Architecture & Agent Build', duration: '5–8 Days', description: 'Implementing embeddings, retrieval pipelines, and chat interface.' },
      { phase: 'Prompt Tuning & Stress Testing', duration: '3–4 Days', description: 'Testing edge cases, adversarial inputs, and citation accuracy.' },
      { phase: 'Live Deployment', duration: '1–2 Days', description: 'Embedding widget on production site and configuring monitoring.' },
    ],
    buildFirstGuarantee:
      'We build a functioning prototype of your AI assistant with your actual data so you can test its response accuracy and tone firsthand before making any financial commitment.',
    deepDive: [
      {
        heading: 'Why generic ChatGPT wrappers fail in business',
        paragraphs: [
          'Public LLMs without ground-truth grounding tend to hallucinate inaccurate pricing, invent non-existent policies, and speak in generic, robotic language. In a business context, an incorrect answer can damage customer trust or cause legal liability.',
          'We engineer custom Retrieval-Augmented Generation (RAG) systems. When a customer asks a question, our pipeline retrieves the exact relevant excerpts from your verified company documents and instructs the model to formulate a natural response strictly grounded in those facts.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does the AI train on our private business data?',
        answer:
          'No. We utilize enterprise API endpoints with zero-data-retention guarantees, ensuring your proprietary documents and customer queries are never used to train public foundational models.',
      },
      {
        question: 'Can the assistant speak multiple languages or Roman Urdu?',
        answer:
          'Yes. Modern models seamlessly understand multilingual inputs including English, Arabic, and Roman Urdu, responding in whatever language your customer prefers.',
      },
    ],
    relatedProjectSlugs: ['naqsh', 'zephyr'],
  },
  {
    id: 'mobile-apps',
    slug: 'mobile-apps',
    title: 'Mobile Apps',
    label: 'CROSS-PLATFORM',
    shortDescription:
      'High-performance iOS and Android mobile applications built with React Native for smooth offline access, push notifications, and app store presence.',
    deliverables: [
      'Cross-platform iOS & Android codebase',
      'Smooth 60fps native performance',
      'Push notification & background sync',
      'App Store & Play Store publishing support',
    ],
    metaTitle: 'React Native Mobile App Development in Karachi',
    metaDescription:
      'Cross-platform iOS and Android mobile applications built with React Native. Fast, reliable, and custom quoted.',
    heroPitch:
      'Deliver an installed mobile experience directly to your customers’ pockets. We build fast, reliable cross-platform mobile apps for iOS and Android using React Native and modern cloud backends.',
    whoItsFor: [
      'Established brands whose customers purchase repeatedly and benefit from push notification reminders.',
      'On-demand services requiring real-time GPS tracking, camera access, or offline local storage.',
      'Startups launching an MVP product requiring dual iOS and Android distribution from a single codebase.',
    ],
    whatsIncluded: [
      {
        category: 'Native Capabilities',
        items: [
          'Shared React Native TypeScript codebase for iOS and Android parity.',
          'Hardware integration (Camera, Geolocation, Biometric FaceID/Fingerprint).',
          'Push notification pipeline via Firebase Cloud Messaging (FCM) and APNs.',
          'Offline caching and resilient local data persistence.',
        ],
      },
      {
        category: 'Backend & Infrastructure',
        items: [
          'REST or GraphQL API endpoints with secure JWT authentication.',
          'Cloud storage for image and document uploads.',
          'Automated error tracking with Sentry for crash monitoring.',
        ],
      },
      {
        category: 'Store Deployment',
        items: [
          'Apple App Store and Google Play Store build compilation.',
          'Store listing asset generation (screenshots, privacy policies).',
          'Submission and review management through to public release.',
        ],
      },
    ],
    timeline: [
      { phase: 'UI/UX & Architecture', duration: '1–2 Weeks', description: 'Screen flows, state management planning, and design system.' },
      { phase: 'Full App Development', duration: '3–6 Weeks', description: 'Building screens, API integrations, and native hardware hooks.' },
      { phase: 'Beta Testing & Device QA', duration: '1–2 Weeks', description: 'TestFlight and Android internal testing on physical devices.' },
      { phase: 'Store Submission', duration: '1 Week', description: 'App Store and Google Play submission and approval.' },
    ],
    buildFirstGuarantee:
      'For mobile applications, we develop an interactive TestFlight / APK prototype of your core user flow so you can test it on your physical phone before signing off on full development.',
    deepDive: [
      {
        heading: 'Why React Native is the standard for modern mobile development',
        paragraphs: [
          'Building separate native apps in Swift for iOS and Kotlin for Android doubles your development budget, timeline, and ongoing maintenance burden.',
          'React Native allows us to write one clean, type-safe TypeScript codebase that compiles to genuine native platform widgets on both iOS and Android. You get 60fps native performance, native gestures, and complete access to device APIs while reducing time-to-market by half.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will one app work on both iPhone and Android?',
        answer:
          'Yes. We build using React Native, which compiles to native binaries for both iOS and Android from a single unified codebase.',
      },
      {
        question: 'Do you help with Apple and Google app store submissions?',
        answer:
          'Yes. We generate all build artifacts, configure signing certificates, prepare store screenshots, and guide the submission through the review process until your app is live.',
      },
    ],
    relatedProjectSlugs: ['nowhere', 'zephyr'],
  },
];
