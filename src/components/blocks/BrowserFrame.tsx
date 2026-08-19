'use client';

import React from 'react';
import Image from 'next/image';
import { Lock } from 'lucide-react';

export interface BrowserFrameProps {
  imageSrc?: string;
  imageAlt?: string;
  urlDisplay?: string;
  className?: string;
}

export function BrowserFrame({
  imageSrc = '/images/projects/naqsh-hero.jpeg',
  imageAlt = 'Naqsh live jewelry store preview',
  urlDisplay = 'naqshbynoor.vercel.app',
  className = '',
}: BrowserFrameProps) {
  return (
    <div
      className={`rounded-xl border border-hairline bg-surface shadow-2xl shadow-charcoal/10 overflow-hidden w-full max-w-4xl mx-auto transition-transform duration-300 ${className}`}
    >
      {/* Browser Chrome Header */}
      <div className="bg-[#EFECE6] border-b border-hairline px-4 py-3 flex items-center justify-between gap-4 select-none">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-sm mx-auto bg-surface/90 border border-hairline rounded-md px-3 py-1 text-xs text-muted flex items-center justify-center gap-1.5 font-mono shadow-inner">
          <Lock className="w-3 h-3 text-live" />
          <span className="text-charcoal font-medium truncate">{urlDisplay}</span>
        </div>

        {/* Status dot */}
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-live">
          <span className="w-2 h-2 rounded-full bg-live animate-pulse" />
          <span className="hidden sm:inline">Live Store</span>
        </div>
      </div>

      {/* Browser Content Area */}
      <div className="relative h-[340px] sm:h-[420px] md:h-[480px] bg-paper overflow-hidden group cursor-pointer">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 1200px) 100vw, 1000px"
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  );
}
