import UniAssist from './assets/UniAssist.svg';
import Nochat from './assets/Nochat.jpeg';
import LPR from './assets/LPR.jpeg';
import SSP from './assets/SSP.jpeg';

import hoorHero from './assets/projects/hoor-hero.jpeg';
import hoorProduct from './assets/projects/hoor-product.jpeg';
import hoorNewsletter from './assets/projects/hoor-newsletter.jpeg';

import zephyrHero from './assets/projects/zephyr-hero.jpeg';
import zephyrBestseller from './assets/projects/zephyr-bestseller.jpeg';
import zephyrFilters from './assets/projects/zephyr-filters.jpeg';

import naqshHero from './assets/projects/naqsh-hero.jpeg';
import naqshWedding from './assets/projects/naqsh-wedding.jpeg';
import naqshProduct from './assets/projects/naqsh-product.jpeg';

import nowhereHero from './assets/projects/nowhere-hero.jpeg';
import nowhereBestseller from './assets/projects/nowhere-bestseller.jpeg';
import nowhereTopwear from './assets/projects/nowhere-topwear.jpeg';

export const siteData = {
  company: {
    name: 'SIA Solution',
    tagline: 'Websites that work as hard as you do.',
    shortPitch:
      'We build websites, AI chatbots and AI agents for growing brands — landing pages, business websites, online stores and intelligent systems that actually get customers.',
    email: 'syedibrahimali1111@gmail.com',
    phone: '(+92) 322-339-6443',
    whatsapp: 'https://wa.me/923223396443',
    location: 'Karachi, Pakistan',
    linkedin: 'https://www.linkedin.com/in/syed-ibrahim-ali-sia/',
    github: 'https://github.com/ibrahim123-sia',
    instagram: '', // TODO: add SIA Solution's Instagram handle (main outreach channel per the field playbook)
  },

  nav: ['Home', 'Services', 'Work', 'Pricing', 'About', 'Contact'],

  hero: {
    eyebrow: 'WE DESIGN. YOU GROW.',
    headline: 'Modern Websites & AI Systems for Growing Brands.',
    subhead:
      'Clean design. Smooth experience. More trust. More customers. From a single landing page to a full AI-powered assistant for your business.',
    primaryCta: { label: 'Get a Free Mockup', href: '#contact' },
    secondaryCta: { label: 'See Our Work', href: '#work' },
  },

  trustBadges: [
    { label: 'Build First' },
    { label: 'Pay After' },
    { label: 'Go Live, Stress Free' },
  ],

  featureStrip: [
    { icon: 'Smartphone', title: 'Mobile Friendly', desc: 'Perfect on every device' },
    { icon: 'Search', title: 'SEO Optimized', desc: 'Easy to find on Google' },
    { icon: 'ShieldCheck', title: 'Secure & Reliable', desc: 'Your data, always safe' },
    { icon: 'Headphones', title: 'Ongoing Support', desc: "We're here when you need us" },
    { icon: 'MessageCircle', title: 'DM "WEBSITE"', desc: 'for a free mockup idea' },
  ],

  services: [
    {
      id: 1,
      icon: 'FileText',
      title: 'Landing Page',
      description:
        'A single, focused page — brand intro, products/services, WhatsApp/order button and contact — built to convert visitors into customers.',
      price: 'From PKR 8,000',
    },
    {
      id: 2,
      icon: 'Layout',
      title: 'Business Website',
      description:
        'A full multi-page site — Home, About, Products/Services, Gallery, Contact — mobile-friendly and easy to find on Google.',
      price: 'From PKR 15,000',
    },
    {
      id: 3,
      icon: 'ShoppingCart',
      title: 'E-commerce + Payments',
      description:
        'A complete online store — catalog, cart, checkout, JazzCash/Easypaisa/card payments and an admin panel to manage orders.',
      price: 'From PKR 35,000',
    },
    {
      id: 4,
      icon: 'Bot',
      title: 'AI Chatbots & Virtual Assistants',
      description:
        'Custom-trained chatbots that answer customer questions, qualify leads and handle support around the clock — on your site or WhatsApp.',
      price: 'Custom Quote',
    },
    {
      id: 5,
      icon: 'Sparkles',
      title: 'AI Agents & Automation',
      description:
        'Autonomous agents that reason over your data and workflows — from RAG-powered assistants to automated reporting and business pipelines.',
      price: 'Custom Quote',
    },
  ],

  pricing: {
    tiers: [
      {
        name: 'Landing Page',
        range: '8,000 – 15,000',
        best: 'Nayi/chhoti brand jo abhi shuru ho rahi hai',
        features: ['One-page design', 'WhatsApp / order button', 'Contact form', 'Mobile-first build'],
      },
      {
        name: 'Business Website',
        range: '15,000 – 30,000',
        best: 'Established boutique, salon, clinic ya restaurant',
        featured: true,
        features: ['Home, About, Services, Gallery, Contact', 'Mobile-friendly', 'Google-ready SEO basics', 'Content sections tailored to you'],
      },
      {
        name: 'E-commerce + Payments',
        range: '35,000 – 70,000',
        best: 'Brand jo bohot orders leta hai',
        features: ['Product catalog & cart', 'JazzCash / Easypaisa / card checkout', 'Order admin panel', 'Inventory-ready structure'],
      },
    ],
    note: 'AI chatbots, AI agents and custom automation are quoted separately based on scope — book a free call to discuss.',
    banner: {
      title: 'We Build It. You Use It. Then You Pay.',
      body: 'Your complete website — live and working — before a single rupee changes hands. No advance, no deposit, zero risk.',
    },
  },

  process: [
    { step: '01', title: 'Discovery', desc: "Tell us about your brand, your customers and what you're trying to achieve." },
    { step: '02', title: 'Design & Build', desc: 'We design and build your complete site or AI system — no payment required yet.' },
    { step: '03', title: 'You Test It Live', desc: 'You review the live site, use it, and make sure it fits exactly what you need.' },
    { step: '04', title: 'You Pay & We Support', desc: "Happy with it? You pay once it's live — and we stay on for ongoing support." },
  ],

  // Flagship client stores — shown first on the Work page as full case studies.
  clientProjects: [
    {
      id: 'hoor',
      title: "Hoor — Women's Clothing Store",
      client: 'Yasmeen Hamid',
      description:
        "A full online storefront for Hoor's clothing brand — hero landing, best-sellers and new arrivals, category-filtered catalog, product detail pages, cart and a newsletter signup, all wrapped in a fast, mobile-first build.",
      technologies: ['React', 'Vite', 'Tailwind CSS'],
      github: 'https://github.com/ibrahim123-sia/Hoor',
      liveDemo: 'https://hoorfatima.vercel.app/',
      category: 'Online Store',
      images: [hoorHero, hoorProduct, hoorNewsletter],
      testimonial:
        "SIA Solution understood exactly what Hoor needed — the site looks premium and my customers keep complimenting how easy it is to shop on it.",
    },
    {
      id: 'zephyr',
      title: 'Zephyr — Perfume E-Commerce',
      client: 'Adnan Malik Kamal',
      description:
        "A complete fragrance store for men's and women's collections — smart filtering by scent and side panel, JazzCash checkout, order confirmation emails and a full admin panel to manage products and orders.",
      technologies: ['React', 'Redux Toolkit', 'Node.js', 'MongoDB', 'JazzCash'],
      github: 'https://github.com/ibrahim123-sia/Zephyr',
      liveDemo: 'https://zephyrperfume.vercel.app/',
      category: 'Online Store',
      images: [zephyrHero, zephyrBestseller, zephyrFilters],
      testimonial:
        "From the first demo to going live, everything was smooth. The JazzCash checkout works flawlessly and the admin panel makes running Zephyr effortless.",
    },
    {
      id: 'naqsh',
      title: 'Naqsh — Bridal & Fashion Jewelry',
      client: 'Mahnoor Javed',
      description:
        'A jewelry storefront built around occasion-based shopping — bridal, festive and everyday pieces filterable by style, color and budget, with guest checkout, PayFast payments and order tracking.',
      technologies: ['React', 'Redux Toolkit', 'Node.js', 'MongoDB', 'PayFast'],
      github: 'https://github.com/ibrahim123-sia/Naqsh',
      liveDemo: 'https://naqshbynoor.vercel.app/',
      category: 'Online Store',
      images: [naqshHero, naqshWedding, naqshProduct],
      testimonial:
        "I was worried about handing my brand to a new studio, but the build-first approach removed all the risk. Naqsh's website turned out better than I imagined.",
    },
    {
      id: 'nowhere',
      title: 'Nowhere — Full-Stack Clothing Store',
      client: 'Anita Hamid',
      description:
        'An end-to-end clothing platform with OTP-verified accounts, smart catalog filtering, cart and checkout, real-time order tracking, and role-based dashboards for customers and store admins.',
      technologies: ['React', 'Express.js', 'MongoDB', 'JWT'],
      github: 'https://github.com/ibrahim123-sia/Nowhere',
      liveDemo: 'https://nowherecloth.vercel.app/',
      category: 'Online Store',
      images: [nowhereHero, nowhereBestseller, nowhereTopwear],
      testimonial:
        "Communication was clear from day one and nothing felt rushed. Nowhere's admin dashboard alone has saved me hours every week since launch.",
    },
  ],

  projects: [
    {
      id: 1,
      title: 'UniAssist — AI University Assistant',
      description:
        'A full-stack RAG platform letting students query academic documents with accurate context retrieval across 100+ document types, plus a voice-enabled chatbot with Roman Urdu support.',
      image: UniAssist,
      technologies: ['React', 'Node.js', 'FastAPI', 'MongoDB', 'RAG', 'LLMs'],
      github: 'https://github.com/ibrahim123-sia/UniAssist',
      category: 'AI Chatbot',
    },
    {
      id: 2,
      title: 'NoChat — AI Assistant & Image Generator',
      description:
        'A versatile AI assistant that goes beyond text — seamless conversations plus image generation from simple prompts, with secure auth and chat history.',
      image: Nochat,
      technologies: ['React', 'Express.js', 'MongoDB', 'JWT', 'Groq'],
      github: 'https://github.com/ibrahim123-sia/NoChat',
      liveDemo: 'https://no-chat-y2my.vercel.app',
      category: 'AI Chatbot',
    },
    {
      id: 3,
      title: 'Sprintlog Agent — Autonomous EOD Reporting',
      description:
        'A multi-agent AI system that eliminates manual end-of-day reporting — analyzes daily GitHub commits and diffs and reasons about code changes through a LangGraph pipeline.',
      technologies: ['Python', 'LangGraph', 'Multi-Agent', 'GitHub API'],
      github: 'https://github.com/ibrahim123-sia/sprintlog-agent',
      category: 'AI Agent',
    },
    {
      id: 4,
      title: 'AI Learning Path Recommender',
      description:
        'An AI agent that generates personalized 4–6 week learning roadmaps, curating videos, articles and tutorials based on your goals, skills and availability.',
      image: LPR,
      technologies: ['React', 'Node.js', 'Groq AI'],
      github: 'https://github.com/ibrahim123-sia/Learning-Path-Recommender',
      liveDemo: 'https://learning-path-recommender-2gdj.vercel.app',
      category: 'AI Agent',
    },
    {
      id: 5,
      title: 'Study Session Planner Assistant',
      description:
        'Transforms short-term academic goals into actionable 1–2 week study schedules — a balanced, day-by-day plan built from your exam, topics and availability.',
      image: SSP,
      technologies: ['React', 'Node.js', 'Groq AI'],
      github: 'https://github.com/ibrahim123-sia/Study-Session-Planner-Assistant',
      liveDemo: 'https://study-session-planner-assistant-gyn.vercel.app',
      category: 'AI Agent',
    },
    {
      id: 6,
      title: 'Assortment Dashboard — Retail Analytics',
      description:
        'An intelligent product assortment dashboard applying Market Basket Analysis (Apriori / FP-Growth) and association rule mining to guide retail decisions.',
      technologies: ['React', 'FastAPI', 'Python', 'ML'],
      github: 'https://github.com/ibrahim123-sia/Assortment-Dashboard',
      category: 'Business Website',
    },
  ],
};
