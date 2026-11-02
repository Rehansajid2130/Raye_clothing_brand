// ponytail: Pure CSS continuous translation loop with pause-on-hover. No JS animation rAF loop needed
import React from 'react';

const TICKER_TEXT =
  'WIDE STRIPE ✦ CANDY STRIPE ✦ PINSTRIPE ✦ BENGAL STRIPE ✦ MADE FOR SALT AIR ✦ NOT YOUR OFFICE STRIPE ✦ ';

export const MarqueeTicker: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="h-[40px] bg-[#14140C] text-[#F8F4E9] border-y-[1.5px] border-[#14140C] overflow-hidden flex items-center select-none"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Quadrupled text string ensures seamless infinite loop on any screen width */}
        <span className="text-[12px] font-black uppercase tracking-[0.14em] whitespace-nowrap px-4">
          {TICKER_TEXT} {TICKER_TEXT}
        </span>
        <span className="text-[12px] font-black uppercase tracking-[0.14em] whitespace-nowrap px-4">
          {TICKER_TEXT} {TICKER_TEXT}
        </span>
      </div>
    </div>
  );
};

