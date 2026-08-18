export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  heroPitch: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappLink: string;
  location: string;
  github: string;
  linkedin: string;
  instagram: string;
  handle: string;
  domain: string;
  navLinks: { label: string; href: string }[];
  proofClients: { name: string; category: string; liveUrl: string }[];
  trustChips: string[];
}

export const siteConfig: SiteConfig = {
  name: 'SIA Technologies',
  legalName: 'SIA Technologies Studio',
  tagline: 'We build your website first. You pay once it’s live.',
  heroPitch:
    'Founder-led web and AI studio in Karachi. We design and build complete custom websites, online stores, and intelligent systems for growing businesses worldwide.',
  email: 'hello@siatech.pk',
  phone: '+92 322 3396443',
  whatsappNumber: '+923223396443',
  whatsappLink: 'https://wa.me/923223396443?text=Hi%20SIA%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20website%20project.',
  location: 'Karachi, Pakistan — working worldwide',
  github: 'https://github.com/ibrahim123-sia',
  linkedin: 'https://www.linkedin.com/in/syed-ibrahim-ali-sia/',
  instagram: 'https://instagram.com/siatechpk',
  handle: '@siatechpk',
  domain: 'siatech.pk',
  navLinks: [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/#process' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  proofClients: [
    { name: 'Hoors', category: 'Fashion Store', liveUrl: 'https://hoorfatima.vercel.app/' },
    { name: 'Nowhere', category: 'Apparel Platform', liveUrl: 'https://nowherecloth.vercel.app/' },
    { name: 'Naqsh', category: 'Jewelry Store', liveUrl: 'https://naqshbynoor.vercel.app/' },
    { name: 'Zephyr', category: 'Fragrance Store', liveUrl: 'https://zephyrperfume.vercel.app/' },
  ],
  trustChips: ['No advance', '4 live client stores', 'Built in days, not months'],
};
