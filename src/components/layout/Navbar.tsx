'use client';
// ponytail: Accessible semantic nav with responsive styling, callbacks for all drawers, and reactive bag counter
import React, { useEffect, useState } from 'react';
import { useCartStore } from '../../store/useCartStore';

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenAccount?: () => void;
  onOpenWishlist?: () => void;
  onOpenMobileMenu?: () => void;
  wishlistCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenAccount,
  onOpenWishlist,
  onOpenMobileMenu,
  wishlistCount = 0,
}) => {
  const totalItems = useCartStore((state) => state.totalItems());
  const toggleCart = useCartStore((state) => state.toggleCart());
  const [bumping, setBumping] = useState(false);

  // Trigger bounce animation when bag count increments
  useEffect(() => {
    if (totalItems > 0) {
      setBumping(true);
      const timer = setTimeout(() => setBumping(false), 300);
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  return (
    <header className="sticky top-0 z-40 h-[68px] bg-[#EF5E4B] border-b-[1.5px] border-[#14140C] flex items-center px-4 md:px-8 justify-between select-none">
      {/* Left Navigation Links */}
      <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6">
        <a
          href="/shop"
          className="text-[13px] font-semibold text-[#14140C] hover:underline underline-offset-4 decoration-[1.5px] transition-all"
        >
          Shop
        </a>
        <a
          href="/shop?badge=new"
          className="text-[13px] font-semibold text-[#14140C] hover:underline underline-offset-4 decoration-[1.5px] transition-all"
        >
          New in
        </a>
        <a
          href="/#why-raye"
          className="text-[13px] font-semibold text-[#14140C] hover:underline underline-offset-4 decoration-[1.5px] transition-all"
        >
          About
        </a>
        <a
          href="/#polaroids"
          className="text-[13px] font-semibold text-[#14140C] hover:underline underline-offset-4 decoration-[1.5px] transition-all"
        >
          Journal
        </a>
        <a
          href="/product/lido-stripe"
          className="text-[13px] font-semibold text-[#14140C] hover:underline underline-offset-4 decoration-[1.5px] transition-all"
        >
          Featured
        </a>
      </nav>

      {/* Mobile Menu Icon (shown on small screens) */}
      <div className="flex md:hidden items-center">
        <button
          onClick={onOpenMobileMenu}
          aria-label="Open navigation menu"
          className="p-1.5 text-[#14140C] focus:outline-none cursor-pointer"
        >
          <svg className="w-6 h-6 stroke-[#14140C]" fill="none" viewBox="0 0 24 24" strokeWidth="2">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
      </div>

      {/* Center Brand Logo: Rayé in Serif Italic Script */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <a
          href="/"
          className="font-serif italic font-semibold text-[32px] md:text-[36px] tracking-tight text-[#14140C] hover:opacity-90 transition-opacity"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          aria-label="Rayé Home"
        >
          Rayé
        </a>
      </div>

      {/* Right Action Icons & Bag Pill */}
      <div className="flex items-center gap-2.5">
        {/* Search button */}
        <button
          onClick={onOpenSearch}
          aria-label="Search catalog"
          className="w-[34px] h-[34px] rounded-full bg-[#174A41] border border-[#14140C] flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
        >
          <svg className="w-4 h-4 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2.2">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
        </button>

        {/* Account button */}
        <button
          onClick={onOpenAccount}
          aria-label="Customer account and order tracking"
          className="hidden sm:flex w-[34px] h-[34px] rounded-full bg-[#174A41] border border-[#14140C] items-center justify-center hover:scale-105 transition-transform cursor-pointer"
        >
          <svg className="w-4 h-4 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2.2">
            <circle cx="12" cy="7" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
          </svg>
        </button>

        {/* Wishlist button */}
        <button
          onClick={onOpenWishlist}
          aria-label="View saved wishlist"
          className="hidden sm:flex relative w-[34px] h-[34px] rounded-full bg-[#174A41] border border-[#14140C] items-center justify-center hover:scale-105 transition-transform cursor-pointer"
        >
          <svg className="w-4 h-4 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2.2">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full bg-[#F7D66D] text-[#14140C] border border-[#14140C] text-[9px] font-extrabold flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </button>

        {/* Bag Pill Button with dynamic bounce */}
        <button
          onClick={toggleCart}
          aria-label={`Shopping bag with ${totalItems} items`}
          className={`h-8 px-3.5 rounded-full bg-[#14140C] text-[#F8F4E9] border-[1.5px] border-[#14140C] flex items-center gap-1.5 font-bold text-xs shadow-retro-sm transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0.5 cursor-pointer ${
            bumping ? 'scale-115 -translate-y-1 bg-[#174A41] [transition-timing-function:cubic-bezier(0.34,1.45,0.64,1)]' : ''
          }`}
        >
          <svg className="w-3.5 h-3.5 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2.2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          <span>Bag ({totalItems})</span>
        </button>
      </div>
    </header>
  );
};


