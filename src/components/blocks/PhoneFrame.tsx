'use client';

import React from 'react';
import Image from 'next/image';

export interface PhoneFrameProps {
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function PhoneFrame({
  imageSrc = '/images/projects/naqsh-product.jpeg',
  imageAlt = 'Mobile store view',
  className = '',
}: PhoneFrameProps) {
  return (
    <div
      className={`relative mx-auto w-[280px] sm:w-[320px] rounded-[36px] border-[6px] border-charcoal bg-charcoal shadow-2xl overflow-hidden ${className}`}
    >
      {/* Notch / Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-charcoal rounded-full z-20" />

      {/* Screen view */}
      <div className="relative h-[480px] sm:h-[560px] bg-paper overflow-hidden group">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="320px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
