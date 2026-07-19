import React from 'react';

const Logo = ({ variant = 'light', className = '' }) => {
  const textColor = variant === 'light' ? 'text-cream' : 'text-charcoal';

  return (
    <div className={`flex flex-col leading-none select-none ${className}`}>
      <span className={`font-display font-extrabold tracking-tight text-2xl ${textColor}`}>
        SIA
      </span>
      <span className={`font-display font-semibold text-[0.55rem] tracking-[0.35em] ${textColor}`}>
        SOLUTION
      </span>
      <span className="mt-1 h-[2px] w-6 bg-amber" />
    </div>
  );
};

export default Logo;
