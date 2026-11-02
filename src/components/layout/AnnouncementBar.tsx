'use client';
// ponytail: Standard setInterval + CSS/Framer motion transition for clean cyclic promo ticker
import React, { useState, useEffect } from 'react';

const PROMOS = [
  'FREE DELIVERY ON ORDERS OVER ৳3,000',
  'CASH ON DELIVERY ACROSS BANGLADESH',
  'USE RAYE10 FOR 10% OFF YOUR FIRST ORDER',
];

export const AnnouncementBar: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % PROMOS.length);
        setIsSliding(false);
      }, 300);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      role="region"
      aria-label="Promotions Announcement"
      className="h-[34px] bg-[#14140C] text-[#F8F4E9] flex items-center justify-center overflow-hidden border-b border-[#14140C] select-none relative"
    >
      <div
        className={`text-[11px] font-black tracking-[0.1em] uppercase will-change-transform transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
          isSliding
            ? '-translate-y-4 opacity-0'
            : 'translate-y-0 opacity-100'
        }`}
      >
        {PROMOS[index]}
      </div>
    </div>
  );
};

