import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteData } from '../data';

const WhatsAppFloat = () => {
  const message = encodeURIComponent(
    "Hi SIA Solution! I'd like a free mockup for my website."
  );
  const whatsappUrl = `${siteData.company.whatsapp}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:brightness-110 rounded-full flex items-center justify-center shadow-lg shadow-black/20 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
      <span className="absolute right-16 bottom-1/2 translate-y-1/2 bg-charcoal text-cream text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat on WhatsApp
        <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-charcoal rotate-45" />
      </span>
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 animate-ping group-hover:opacity-20" />
    </a>
  );
};

export default WhatsAppFloat;
