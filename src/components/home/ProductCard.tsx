'use client';
// ponytail: Accessible product card with CSS transition hover swaps and optimistic quick-add feedback
import React, { useState } from 'react';
import { Product, ShirtSize } from '../../types/product';
import { useCartStore } from '../../store/useCartStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedSize, setAddedSize] = useState<ShirtSize | null>(null);

  const addItem = useCartStore((state) => state.addItem);
  const showToast = useCartStore((state) => state.showToast);

  const handleQuickAdd = (size: ShirtSize, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setAddedSize(size);
    addItem(product, size);
    showToast(`✓ Added ${product.name}, size ${size}`);

    setTimeout(() => {
      setAddedSize(null);
    }, 2000);
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white border-[1.5px] border-[#14140C] rounded-xl overflow-hidden transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:shadow-retro-md hover:-translate-y-1.5 flex flex-col justify-between"
    >
      {/* Visual Image & Quick-Add Area */}
      <div className="relative aspect-[3/4] bg-[#F4EFE6] overflow-hidden select-none">
        {/* Status Badge (Top-Left) */}
        {product.badge && (
          <span
            className={`absolute top-2.5 left-2.5 z-20 px-2.5 py-0.5 text-[10px] font-black rounded-full border border-[#14140C] shadow-retro-sm uppercase tracking-wider transition-transform duration-200 group-hover:scale-105 ${
              product.badge === 'POPULAR'
                ? 'bg-[#FDEEAF] text-[#14140C]'
                : product.badge === 'NEW'
                ? 'bg-[#F7D66D] text-[#14140C]'
                : product.badge === 'SALE'
                ? 'bg-[#EF5E4B] text-white'
                : 'bg-[#14140C] text-white'
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Wishlist Heart Button (Top-Right) */}
        <button
          onClick={toggleWishlist}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute top-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-[#F7D66D] border border-[#14140C] shadow-retro-sm flex items-center justify-center hover:scale-115 active:scale-90 transition-transform duration-200"
        >
          <svg
            className={`w-3.5 h-3.5 transition-colors duration-200 ${
              isWishlisted
                ? 'fill-[#EF5E4B] stroke-[#EF5E4B]'
                : 'fill-transparent stroke-[#14140C]'
            }`}
            viewBox="0 0 24 24"
            strokeWidth="2.4"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>

        {/* Flat Hanger Shot & On-Model Shot Crossfade with Subtle Kinetic Zoom */}
        <div className="relative w-full h-full cursor-pointer">
          {/* Flat Hanger Visual (Default) */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-350 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
              isHovered ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
            }`}
          >
            {/* Wooden Hanger SVG */}
            <svg className="w-24 h-8 mb-2" viewBox="0 0 100 35" fill="none">
              <path d="M50 8 C48 3, 52 1, 55 5 C57 9, 52 12, 50 14" stroke="#8B5A2B" strokeWidth="2.5" />
              <polygon points="50,14 10,32 90,32" fill="#D2A679" stroke="#14140C" strokeWidth="1.5" />
            </svg>
            {/* Shirt Illustration Flat */}
            <div
              className="w-36 h-44 rounded-t-lg border-2 border-[#14140C] shadow-sm relative overflow-hidden"
              style={{
                backgroundColor: product.colors[0]?.hex || '#F8F4E9',
                backgroundImage: `repeating-linear-gradient(90deg, #FFFFFF 0px, #FFFFFF 8px, transparent 8px, transparent 18px)`,
              }}
            >
              {/* Camp Collar notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-6 bg-[#F8F4E9] border-b-2 border-x-2 border-[#14140C] rounded-b-md" />
              {/* Shell Buttons */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col gap-3">
                <span className="w-2 h-2 rounded-full bg-white border border-[#14140C]" />
                <span className="w-2 h-2 rounded-full bg-white border border-[#14140C]" />
                <span className="w-2 h-2 rounded-full bg-white border border-[#14140C]" />
              </div>
            </div>
            <span className="text-[10px] text-[#676358] font-bold mt-2 tracking-wider">
              FLAT LAY
            </span>
          </div>

          {/* Editorial Lifestyle Model Shot (Hover) */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center p-6 bg-[#E8EFF2] transition-all duration-350 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <div className="relative w-40 h-52 rounded-xl border-2 border-[#14140C] shadow-retro-sm bg-white overflow-hidden flex flex-col items-center justify-between p-3">
              {/* Model Silhouette / Lifestyle graphic */}
              <div className="w-10 h-10 rounded-full bg-[#E0B084] border border-[#14140C] mt-2" />
              <div
                className="w-28 h-32 rounded-t-xl border-t-2 border-x-2 border-[#14140C] relative"
                style={{
                  backgroundColor: product.colors[0]?.hex || '#EF5E4B',
                  backgroundImage: `repeating-linear-gradient(90deg, rgba(255,255,255,0.85) 0px, rgba(255,255,255,0.85) 6px, transparent 6px, transparent 14px)`,
                }}
              />
              <span className="text-[9px] font-black uppercase text-[#14140C] tracking-widest bg-[#F7D66D] px-2 py-0.5 rounded-full border border-[#14140C]">
                ON MODEL · SALT AIR
              </span>
            </div>
          </div>
        </div>

        {/* Quick Add Size Pill Bar (Slides up on hover) */}
        <div
          className={`absolute bottom-3 inset-x-3 z-30 bg-[#14140C] text-white rounded-full py-1.5 px-3 flex items-center justify-between text-xs transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] shadow-retro-sm ${
            isHovered ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-14 opacity-0 pointer-events-none'
          }`}
        >
          {addedSize ? (
            <span className="w-full text-center font-bold text-[#F7D66D] animate-pulse">
              ✓ Added · {addedSize}
            </span>
          ) : (
            <>
              <span className="font-bold text-[10px] text-[#F8F4E9]/80 mr-1 uppercase tracking-wider">
                Quick add
              </span>
              <div className="flex gap-1">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={(e) => handleQuickAdd(size, e)}
                    className="hover:text-[#F7D66D] font-black text-[11px] px-1 py-0.5 rounded hover:bg-[#174A41] active:scale-90 transition-all duration-150"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
          {addedSize ? (
            <span className="w-full text-center font-bold text-[#F7D66D] animate-pulse">
              ✓ Added · {addedSize}
            </span>
          ) : (
            <>
              <span className="font-bold text-[10px] text-[#F8F4E9]/80 mr-1 uppercase tracking-wider">
                Quick add
              </span>
              <div className="flex gap-1">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={(e) => handleQuickAdd(size, e)}
                    className="hover:text-[#F7D66D] font-black text-[11px] px-1 py-0.5 rounded hover:bg-[#174A41] transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom Product Meta */}
      <div className="p-4 bg-white border-t-[1.5px] border-[#14140C]/20 flex flex-col gap-1.5">
        {/* Rating Stars */}
        <div className="flex items-center gap-1">
          <div className="flex text-[#14140C]">
            {'★'.repeat(Math.round(product.rating))}
          </div>
          <span className="text-[11px] text-[#676358] font-bold">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Title & Color Swatches */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-extrabold text-[15px] text-[#14140C] leading-snug group-hover:underline decoration-1">
            {product.name}
          </h3>

          {/* Color Dots */}
          <div className="flex items-center gap-1 flex-shrink-0">
            {product.colors.map((c) => (
              <span
                key={c.name}
                title={c.name}
                style={{ backgroundColor: c.hex }}
                className="w-2.5 h-2.5 rounded-full border border-[#14140C]/60"
              />
            ))}
          </div>
        </div>

        {/* Price in BDT */}
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="text-[14px] font-black text-[#14140C]">
            ৳{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-[12px] text-[#676358] line-through font-medium">
              ৳{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

