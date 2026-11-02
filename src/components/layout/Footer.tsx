// ponytail: Semantic footer with accessible newsletter form and payment badges
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14140C] text-[#F8F4E9] pt-20 pb-12 border-t-2 border-[#14140C] select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Row: Script Logo & Newsletter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-16 border-b border-[#F8F4E9]/15 gap-10">
          <div>
            <h2
              className="font-serif italic font-normal text-[72px] sm:text-[96px] leading-[0.88] text-[#EF5E4B] mb-4 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Rayé
            </h2>
            <p className="text-[15px] text-[#F8F4E9]/80 font-medium max-w-[360px] leading-relaxed">
              Striped shirts for slow, sunny days. Woven and sewn with love in Bangladesh.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="w-full lg:w-[420px]">
            <p className="text-[14px] font-bold text-[#F8F4E9] mb-3">
              Get the good stuff in your inbox.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to Rayé Journal!');
              }}
              className="relative flex items-center border-b-2 border-[#F8F4E9] pb-2 focus-within:border-[#F7D66D] transition-colors"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-transparent text-[14px] text-[#F8F4E9] placeholder-[#F8F4E9]/50 focus:outline-none pr-10 font-medium"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="absolute right-0 w-8 h-8 rounded-full bg-[#F7D66D] text-[#14140C] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
              >
                <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Middle Row: 4 Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-[#F8F4E9]/15">
          {/* Column 1: SHOP */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.14em] text-[#F8F4E9]/50 mb-5">
              SHOP
            </h3>
            <ul className="space-y-3 text-[13px] font-semibold text-[#F8F4E9]">
              <li><a href="/shop" className="hover:text-[#F7D66D] transition-colors">All shirts</a></li>
              <li><a href="/shop?sleeve=short" className="hover:text-[#F7D66D] transition-colors">Short sleeve</a></li>
              <li><a href="/shop?sleeve=long" className="hover:text-[#F7D66D] transition-colors">Long sleeve</a></li>
              <li><a href="/shop?type=oversized" className="hover:text-[#F7D66D] transition-colors">Oversized</a></li>
              <li><a href="/shop?badge=new" className="hover:text-[#F7D66D] transition-colors">New in</a></li>
            </ul>
          </div>

          {/* Column 2: HELP */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.14em] text-[#F8F4E9]/50 mb-5">
              HELP
            </h3>
            <ul className="space-y-3 text-[13px] font-semibold text-[#F8F4E9]">
              <li><a href="#faqs" className="hover:text-[#F7D66D] transition-colors">FAQs</a></li>
              <li><a href="#shipping" className="hover:text-[#F7D66D] transition-colors">Shipping & returns</a></li>
              <li><a href="#size-guide" className="hover:text-[#F7D66D] transition-colors">Size guide</a></li>
              <li><a href="#contact" className="hover:text-[#F7D66D] transition-colors">Contact us</a></li>
            </ul>
          </div>

          {/* Column 3: RAYÉ */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.14em] text-[#F8F4E9]/50 mb-5">
              RAYÉ
            </h3>
            <ul className="space-y-3 text-[13px] font-semibold text-[#F8F4E9]">
              <li><a href="#story" className="hover:text-[#F7D66D] transition-colors">Our story</a></li>
              <li><a href="#journal" className="hover:text-[#F7D66D] transition-colors">Journal</a></li>
              <li><a href="#account" className="hover:text-[#F7D66D] transition-colors">My account</a></li>
              <li><a href="#saved" className="hover:text-[#F7D66D] transition-colors">Saved shirts</a></li>
            </ul>
          </div>

          {/* Column 4: FOLLOW */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.14em] text-[#F8F4E9]/50 mb-5">
              FOLLOW
            </h3>
            <ul className="space-y-3 text-[13px] font-semibold text-[#F8F4E9]">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#F7D66D] transition-colors">Instagram</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-[#F7D66D] transition-colors">TikTok</a></li>
              <li><a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-[#F7D66D] transition-colors">Pinterest</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#F7D66D] transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Legal & Payment Methods */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-bold text-[#F8F4E9]/60">
          <p>© 2026 RAYÉ. WOVEN & SEWN IN BANGLADESH. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-[#F8F4E9]/80 font-black">
            <span>VISA</span>
            <span>✦</span>
            <span>MASTERCARD</span>
            <span>✦</span>
            <span>BKASH</span>
            <span>✦</span>
            <span>NAGAD</span>
            <span>✦</span>
            <span>COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

