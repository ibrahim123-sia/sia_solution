export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  brandName: string;
  client: string;
  clientRole: string;
  category: 'Online Store' | 'Business Website' | 'AI Assistant';
  oneLiner: string;
  coverImage: string;
  galleryImages: { url: string; caption: string }[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  brief: string;
  challenge: string;
  whatWeBuilt: {
    title: string;
    description: string;
  }[];
  stackDetails: {
    layer: string;
    tool: string;
    purpose: string;
  }[];
  results: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export const clientProjects: CaseStudy[] = [
  {
    id: 'naqsh',
    slug: 'naqsh',
    title: 'Naqsh — Bridal & Fashion Jewelry',
    brandName: 'Naqsh',
    client: 'Mahnoor Javed',
    clientRole: 'Founder, Naqsh',
    category: 'Online Store',
    oneLiner:
      'A jewelry storefront built around occasion-based shopping with guest checkout, PayFast payments, and instant order tracking.',
    coverImage: '/images/projects/naqsh-hero.jpeg',
    galleryImages: [
      {
        url: '/images/projects/naqsh-hero.jpeg',
        caption: 'Homepage hero presenting bridal collections with clear category shortcuts',
      },
      {
        url: '/images/projects/naqsh-wedding.jpeg',
        caption: 'Curated occasion-based shopping section for seasonal wedding collections',
      },
      {
        url: '/images/projects/naqsh-product.jpeg',
        caption: 'Product detail interface with high-res jewelry zoom, price breakdowns, and cart actions',
      },
    ],
    technologies: ['React', 'Redux Toolkit', 'Node.js', 'MongoDB', 'PayFast', 'Tailwind CSS'],
    liveUrl: 'https://naqshbynoor.vercel.app/',
    githubUrl: 'https://github.com/ibrahim123-sia/Naqsh',
    brief:
      'Naqsh required a direct-to-consumer digital storefront tailored to bridal and festive jewelry shoppers who need to filter pieces by occasion, metal color, and price without undergoing mandatory account signups.',
    challenge:
      'Jewelry shoppers demand high visual clarity and simple checkout. Standard templates added unnecessary form friction and loaded slowly on mobile 4G networks in Pakistan.',
    whatWeBuilt: [
      {
        title: 'Occasion & Style Filtering',
        description:
          'Engineered a faceted filter allowing shoppers to browse pieces specifically indexed for bridal, formal, and daily wear.',
      },
      {
        title: 'Zero-Friction Guest Checkout',
        description:
          'Implemented a 2-step checkout flow supporting instant guest checkout without forcing password creation.',
      },
      {
        title: 'Local Payment Gateway Integration',
        description:
          'Integrated PayFast secure gateway alongside Cash on Delivery for full regional payment coverage.',
      },
      {
        title: 'Lightweight Product Detail View',
        description:
          'Optimized image loading so multi-angle jewelry photos load under 1.2 seconds on mobile data.',
      },
    ],
    stackDetails: [
      { layer: 'Frontend', tool: 'React + Tailwind CSS', purpose: 'Fast, responsive interface with custom design tokens' },
      { layer: 'State', tool: 'Redux Toolkit', purpose: 'Predictable cart state and filter persistence' },
      { layer: 'Backend', tool: 'Node.js + Express', purpose: 'REST API for catalog queries and order dispatch' },
      { layer: 'Database', tool: 'MongoDB', purpose: 'Flexible schema for multi-variant jewelry items' },
      { layer: 'Payments', tool: 'PayFast Gateway', purpose: 'Secure debit/credit processing for Pakistan' },
    ],
    results: [
      'Shipped complete production store in 8 business days under the build-first model.',
      '100% mobile-responsive layout operating seamlessly on standard Pakistani 4G mobile browsers.',
      'Admin dashboard deployed to manage daily orders and inventory adjustments.',
    ],
    testimonial: {
      quote:
        'I was worried about handing my brand to a new studio, but the build-first approach removed all the risk. Naqsh’s website turned out better than I imagined.',
      author: 'Mahnoor Javed',
      role: 'Founder, Naqsh',
    },
  },
  {
    id: 'zephyr',
    slug: 'zephyr',
    title: 'Zephyr — Perfume & Fragrance E-Commerce',
    brandName: 'Zephyr',
    client: 'Adnan Malik Kamal',
    clientRole: 'Co-Founder, Zephyr Fragrances',
    category: 'Online Store',
    oneLiner:
      'A fragrance store with scent-profile filtering, JazzCash checkout, and an integrated inventory admin dashboard.',
    coverImage: '/images/projects/zephyr-hero.jpeg',
    galleryImages: [
      {
        url: '/images/projects/zephyr-hero.jpeg',
        caption: 'Clean storefront hero showcasing signature fragrance lines',
      },
      {
        url: '/images/projects/zephyr-bestseller.jpeg',
        caption: 'Bestseller grid highlighting notes, volume, and quick-add actions',
      },
      {
        url: '/images/projects/zephyr-filters.jpeg',
        caption: 'Side-by-side unisex product catalog with faceted scent and gender filters',
      },
    ],
    technologies: ['React', 'Redux Toolkit', 'Node.js', 'MongoDB', 'JazzCash', 'Tailwind CSS'],
    liveUrl: 'https://zephyrperfume.vercel.app/',
    githubUrl: 'https://github.com/ibrahim123-sia/Zephyr',
    brief:
      'Zephyr needed an e-commerce platform for their fragrance catalog that could guide buyers through olfactory profiles (woody, floral, fresh, oriental) and process local mobile wallet payments.',
    challenge:
      'Fragrance purchases online depend on communicating scent notes clearly and providing trusted local payment methods like JazzCash that buyers in Pakistan expect.',
    whatWeBuilt: [
      {
        title: 'Scent Profile & Note Filtering',
        description:
          'Built an intuitive filter interface grouping perfumes by fragrance family, concentration, and gender neutrality.',
      },
      {
        title: 'JazzCash Direct Integration',
        description:
          'Seamless mobile wallet and debit card checkout processing with instant automated order verification.',
      },
      {
        title: 'Automated Email Confirmations',
        description:
          'Automated transactional emails sending itemized receipts and order tracking numbers to customers.',
      },
      {
        title: 'Product & Stock Management Panel',
        description:
          'Built a lightweight admin panel for the founder to update bottle inventory and toggle out-of-stock items.',
      },
    ],
    stackDetails: [
      { layer: 'Frontend', tool: 'React + Vite', purpose: 'Rapid client-side navigation with snappy interactions' },
      { layer: 'Styling', tool: 'Tailwind CSS', purpose: 'Minimalist luxury aesthetic matching perfume brand identity' },
      { layer: 'Backend', tool: 'Node.js + Express', purpose: 'Order verification, webhook listening, and catalog API' },
      { layer: 'Database', tool: 'MongoDB Atlas', purpose: 'Product catalog, customer records, and order histories' },
      { layer: 'Payments', tool: 'JazzCash Sandbox & Prod', purpose: 'Direct local mobile wallet integration' },
    ],
    results: [
      'Full store built and tested live before the client paid any invoice.',
      'Reduced checkout drop-off by embedding direct JazzCash wallet prompts alongside COD.',
      'Founder manages stock and incoming orders without needing technical assistance.',
    ],
    testimonial: {
      quote:
        'From the first demo to going live, everything was smooth. The JazzCash checkout works flawlessly and the admin panel makes running Zephyr effortless.',
      author: 'Adnan Malik Kamal',
      role: 'Co-Founder, Zephyr Fragrances',
    },
  },
  {
    id: 'nowhere',
    slug: 'nowhere',
    title: 'Nowhere — Full-Stack Clothing Store',
    brandName: 'Nowhere',
    client: 'Anita Hamid',
    clientRole: 'Creative Director, Nowhere',
    category: 'Online Store',
    oneLiner:
      'An end-to-end apparel platform with OTP-verified accounts, smart catalog filtering, real-time order tracking, and role-based admin.',
    coverImage: '/images/projects/nowhere-hero.jpeg',
    galleryImages: [
      {
        url: '/images/projects/nowhere-hero.jpeg',
        caption: 'Editorial-style apparel hero highlighting new season drops',
      },
      {
        url: '/images/projects/nowhere-bestseller.jpeg',
        caption: 'Bestseller product section with real-time stock availability indicators',
      },
      {
        url: '/images/projects/nowhere-topwear.jpeg',
        caption: 'Category landing page with size selector and multi-variant switching',
      },
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'JWT', 'Node.js', 'Tailwind CSS'],
    liveUrl: 'https://nowherecloth.vercel.app/',
    githubUrl: 'https://github.com/ibrahim123-sia/Nowhere',
    brief:
      'Nowhere required a modern clothing storefront with secure phone/email OTP verification, size-variant selection, and a comprehensive backend dashboard for managing shipments.',
    challenge:
      'Clothing returns in Pakistan frequently stem from incorrect sizing and difficult order verification. The client needed customer accounts with accurate history and direct status updates.',
    whatWeBuilt: [
      {
        title: 'OTP Authentication & Customer Profiles',
        description:
          'Secure passwordless authentication letting customers log in via OTP to track orders and save shipping details.',
      },
      {
        title: 'Variant & Size Selection Matrix',
        description:
          'Dynamic SKU-based selection showing real-time availability for size and color combinations.',
      },
      {
        title: 'Role-Based Store Management',
        description:
          'Comprehensive admin dashboard to update order fulfilment stages (Processing, Dispatched, Delivered).',
      },
      {
        title: 'Lightweight Mobile Catalog',
        description:
          'Lazy-loaded product grid ensuring fast rendering on mobile devices even with dozens of clothing items.',
      },
    ],
    stackDetails: [
      { layer: 'Frontend', tool: 'React SPA', purpose: 'Snappy single-page transitions for catalog browsing' },
      { layer: 'Auth', tool: 'JWT + Secure Cookies', purpose: 'Protected customer session and admin role authorization' },
      { layer: 'Backend', tool: 'Express.js', purpose: 'Structured REST architecture handling orders and authentication' },
      { layer: 'Database', tool: 'MongoDB', purpose: 'Document storage for multi-attribute apparel catalog' },
    ],
    results: [
      'Delivered complete functioning platform ahead of schedule with zero upfront deposit.',
      'Streamlined daily order management for the client team.',
      'Maintained consistent sub-2-second page loads across product categories.',
    ],
    testimonial: {
      quote:
        'Communication was clear from day one and nothing felt rushed. Nowhere’s admin dashboard alone has saved me hours every week since launch.',
      author: 'Anita Hamid',
      role: 'Creative Director, Nowhere',
    },
  },
  {
    id: 'hoor',
    slug: 'hoor',
    title: 'Hoor — Women’s Clothing Store',
    brandName: 'Hoor',
    client: 'Yasmeen Hamid',
    clientRole: 'Founder, Hoor',
    category: 'Online Store',
    oneLiner:
      'A storefront for Hoor’s clothing line featuring curated collections, product zooms, cart drawer, and newsletter capture.',
    coverImage: '/images/projects/hoor-hero.jpeg',
    galleryImages: [
      {
        url: '/images/projects/hoor-hero.jpeg',
        caption: 'Clean storefront hero with quick access to featured arrivals',
      },
      {
        url: '/images/projects/hoor-product.jpeg',
        caption: 'Product view with fabric specifications, care instructions, and instant cart drawer',
      },
      {
        url: '/images/projects/hoor-newsletter.jpeg',
        caption: 'Newsletter retention section with customer lead capture integration',
      },
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express'],
    liveUrl: 'https://hoorfatima.vercel.app/',
    githubUrl: 'https://github.com/ibrahim123-sia/Hoor',
    brief:
      'Hoor required an elegant, fast-loading digital boutique showcasing seasonal pret and unstitched women’s collections with straightforward WhatsApp and online ordering options.',
    challenge:
      'The brand’s target demographic shops almost exclusively on smartphones via Instagram and WhatsApp links. Page speed and clear imagery were critical for preventing bounces.',
    whatWeBuilt: [
      {
        title: 'Mobile-First Boutique Design',
        description:
          'Custom layout optimized specifically for thumb-reach and fast image viewing on mobile devices.',
      },
      {
        title: 'Slide-Over Cart Drawer',
        description:
          'Non-intrusive cart slide-out allowing customers to review totals and edit quantities without leaving the catalog.',
      },
      {
        title: 'Direct WhatsApp Ordering Hook',
        description:
          'One-tap button prepopulating WhatsApp messages with selected item titles, sizes, and cart links.',
      },
      {
        title: 'Customer Email Newsletter Capture',
        description:
          'Clean lead capture module for building an owned audience for future seasonal drops.',
      },
    ],
    stackDetails: [
      { layer: 'Frontend', tool: 'React + Vite', purpose: 'Extremely lightweight, zero-bloat client application' },
      { layer: 'Styling', tool: 'Tailwind CSS', purpose: 'Bespoke warm-neutral styling with high contrast readability' },
      { layer: 'Deployment', tool: 'Vercel Edge', purpose: 'Global CDN distribution for fast image delivery' },
    ],
    results: [
      'Built and demonstrated live to the client before any contractual payment was requested.',
      'Immediate increase in completed orders via direct WhatsApp checkout integration.',
      'Lighthouse mobile performance score exceeding 95 on initial audit.',
    ],
    testimonial: {
      quote:
        'SIA Technologies understood exactly what Hoor needed — the site looks premium and my customers keep complimenting how easy it is to shop on it.',
      author: 'Yasmeen Hamid',
      role: 'Founder, Hoor',
    },
  },
];
