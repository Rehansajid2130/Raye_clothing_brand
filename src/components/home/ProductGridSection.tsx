// ponytail: Clean responsive 3-column grid consuming in-memory products. No unnecessary fetching layer
import React from 'react';
import { getFeaturedProducts } from '../../data/products';
import { ProductCard } from './ProductCard';

export const ProductGridSection: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section id="the-edit" className="py-16 md:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#14140C] mb-2">
          THE EDIT / 02
        </p>
        <h2 className="font-extrabold text-[32px] sm:text-[42px] leading-tight text-[#14140C] tracking-tight">
          <span>Your new </span>
          <span
            className="font-serif italic font-normal text-[36px] sm:text-[46px]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            favourites.
          </span>
        </h2>
      </div>

      {/* 3 Columns × 2 Rows Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Section Bottom CTA */}
      <div className="mt-14 text-center">
        <a
          href="#all-shirts"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#F7D66D] text-[#14140C] font-extrabold text-[13px] border-[1.5px] border-[#14140C] shadow-retro-md hover:-translate-y-0.5 hover:shadow-retro-sm transition-all"
        >
          <span>See all shirts</span>
          <svg className="w-4 h-4 stroke-[#14140C]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  );
};

