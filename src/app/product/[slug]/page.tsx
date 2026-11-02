'use client';
// ponytail: Accessible PDP with active gallery thumbnails, size modal hook, collapsible accordions, and reviews
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { PRODUCTS, getProductBySlug } from '../../../data/products';
import { AnnouncementBar } from '../../../components/layout/AnnouncementBar';
import { Navbar } from '../../../components/layout/Navbar';
import { Footer } from '../../../components/layout/Footer';
import { FindYourSizeModal } from '../../../components/interactive/FindYourSizeModal';
import { QuickActionToast } from '../../../components/interactive/QuickActionToast';
import { ProductCard } from '../../../components/home/ProductCard';
import { ShirtSize } from '../../../types/product';
import { useCartStore } from '../../../store/useCartStore';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || 'lido-stripe';
  const product = getProductBySlug(slug) || PRODUCTS[0];

  const [activeThumb, setActiveThumb] = useState<'hanger' | 'model'>('hanger');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState<ShirtSize>('M');
  const [quantity, setQuantity] = useState(1);
  const [isSizeModalOpen, setIsSizeModalOpen] = useState(false);

  // Accordion open/close state
  const [openAccordions, setOpenAccordions] = useState<string[]>(['details']);

  const addItem = useCartStore((state) => state.addItem);
  const showToast = useCartStore((state) => state.showToast);

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize);
    }
    showToast(`✓ Added ${product.name} (${quantity}), size ${selectedSize}`);
  };

  const complementaryProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F8F4E9] text-[#14140C] flex flex-col font-sans">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-10 w-full">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-bold text-[#676358] mb-8">
          <a href="/" className="hover:underline">Home</a> &gt;{' '}
          <a href="/shop" className="hover:underline">Shop</a> &gt;{' '}
          <span className="text-[#14140C]">{product.name}</span>
        </nav>

        {/* 2-Column Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pb-16 border-b border-[#14140C]/20">
          {/* Left Column: Gallery */}
          <div className="flex gap-4">
            {/* Thumbnail Strip */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setActiveThumb('hanger')}
                className={`w-16 h-20 rounded-lg border-2 overflow-hidden bg-[#F4EFE6] flex items-center justify-center transition-all ${
                  activeThumb === 'hanger' ? 'border-[#14140C] shadow-retro-sm' : 'border-transparent opacity-60'
                }`}
              >
                <span className="text-[10px] font-black uppercase">Flat</span>
              </button>
              <button
                onClick={() => setActiveThumb('model')}
                className={`w-16 h-20 rounded-lg border-2 overflow-hidden bg-[#EBF3F5] flex items-center justify-center transition-all ${
                  activeThumb === 'model' ? 'border-[#14140C] shadow-retro-sm' : 'border-transparent opacity-60'
                }`}
              >
                <span className="text-[10px] font-black uppercase">Model</span>
              </button>
            </div>

            {/* Main Stage Display */}
            <div className="flex-1 aspect-[4/5] bg-white border-2 border-[#14140C] rounded-2xl shadow-retro-md overflow-hidden relative flex items-center justify-center p-8 select-none">
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 px-3 py-1 text-[10px] font-black rounded-full border border-[#14140C] bg-[#F7D66D] text-[#14140C] shadow-retro-sm">
                  {product.badge}
                </span>
              )}

              {/* Dynamic View Representation */}
              {activeThumb === 'hanger' ? (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div
                    className="w-48 h-64 rounded-t-xl border-2 border-[#14140C] shadow-sm relative overflow-hidden"
                    style={{
                      backgroundColor: product.colors[0]?.hex || '#1D594E',
                      backgroundImage: 'repeating-linear-gradient(90deg, #FFFFFF 0px, #FFFFFF 10px, transparent 10px, transparent 22px)',
                    }}
                  />
                  <span className="text-xs font-bold text-[#676358] mt-3">Hanger flat-lay view</span>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="w-48 h-64 rounded-xl border-2 border-[#14140C] bg-[#EBF3F5] shadow-retro-sm flex flex-col items-center justify-between p-4">
                    <div className="w-12 h-12 rounded-full bg-[#E0B084] border border-[#14140C]" />
                    <div
                      className="w-36 h-40 rounded-t-xl border-2 border-[#14140C] border-bottom-0"
                      style={{
                        backgroundColor: product.colors[0]?.hex || '#1D594E',
                        backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.85) 0px, rgba(255,255,255,0.85) 8px, transparent 8px, transparent 18px)',
                      }}
                    />
                  </div>
                  <span className="text-xs font-bold text-[#676358] mt-3">On-model salt air view</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Meta & Buy Actions */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.14em] text-[#676358]">
                {product.kicker}
              </span>
              <h1 className="text-[34px] sm:text-[40px] font-extrabold tracking-tight text-[#14140C] mt-1 mb-2">
                {product.name}
              </h1>

              {/* Rating & Price */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#14140C] text-sm">★★★★★</span>
                <span className="text-xs font-bold text-[#676358]">
                  {product.rating} · {product.reviewCount} reviews
                </span>
              </div>
              <div className="text-[24px] font-black text-[#14140C] mb-6">
                ৳{product.price.toLocaleString()}
              </div>

              {/* Description */}
              <p className="text-[15px] text-[#14140C]/90 font-medium leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Color Selector */}
              <div className="mb-6">
                <span className="block text-xs font-black uppercase tracking-wider mb-2">
                  Colour: <span className="text-[#676358]">{selectedColor}</span>
                </span>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${
                        selectedColor === c.name ? 'border-[#14140C] scale-110 shadow-retro-sm' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector with Find My Size Trigger */}
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-xs font-black uppercase tracking-wider">Size</span>
                  <button
                    onClick={() => setIsSizeModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#174A41] underline hover:text-[#EF5E4B] transition-colors"
                  >
                    <span>📏 Find my size</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`w-11 h-10 rounded-lg border-[1.5px] border-[#14140C] text-xs font-black transition-all ${
                        selectedSize === s
                          ? 'bg-[#14140C] text-white shadow-retro-sm'
                          : 'bg-white text-[#14140C] hover:bg-[#F7D66D]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cart Actions */}
              <div className="flex items-center gap-3 mb-8">
                {/* Quantity Stepper */}
                <div className="flex items-center border-[1.5px] border-[#14140C] rounded-full bg-white px-3 py-2 shadow-retro-sm">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="font-black text-sm px-2 hover:text-[#EF5E4B]"
                  >
                    -
                  </button>
                  <span className="font-extrabold text-xs px-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="font-black text-sm px-2 hover:text-[#EF5E4B]"
                  >
                    +
                  </button>
                </div>

                {/* Primary CTA: Add to Bag */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-6 rounded-full bg-[#174A41] text-white font-extrabold text-[14px] border-[1.5px] border-[#14140C] shadow-retro-md hover:-translate-y-0.5 hover:shadow-retro-lg active:translate-y-0 transition-all text-center"
                >
                  Add to bag · ৳{(product.price * quantity).toLocaleString()}
                </button>
              </div>

              {/* Delivery Perks */}
              <div className="space-y-2 border-t border-[#14140C]/15 pt-5 mb-8 text-xs font-bold text-[#14140C]">
                <p className="flex items-center gap-2">
                  <span>🚚</span> Free delivery over ৳3,000, next day in Dhaka
                </p>
                <p className="flex items-center gap-2">
                  <span>🔄</span> Free size exchanges within 14 days
                </p>
                <p className="flex items-center gap-2">
                  <span>🛡️</span> Cash on delivery across Bangladesh
                </p>
              </div>

              {/* Collapsible Accordions */}
              <div className="border-t border-[#14140C]/20 divide-y divide-[#14140C]/15">
                {/* 1. Details */}
                <div>
                  <button
                    onClick={() => toggleAccordion('details')}
                    className="w-full py-4 flex items-center justify-between font-extrabold text-xs uppercase tracking-wider text-left"
                  >
                    <span>Details</span>
                    <span>{openAccordions.includes('details') ? '−' : '+'}</span>
                  </button>
                  {openAccordions.includes('details') && (
                    <ul className="pb-4 text-xs font-medium space-y-1.5 text-[#676358] list-disc list-inside">
                      {product.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* 2. Fabric & Care */}
                <div>
                  <button
                    onClick={() => toggleAccordion('fabric')}
                    className="w-full py-4 flex items-center justify-between font-extrabold text-xs uppercase tracking-wider text-left"
                  >
                    <span>Fabric & Care</span>
                    <span>{openAccordions.includes('fabric') ? '−' : '+'}</span>
                  </button>
                  {openAccordions.includes('fabric') && (
                    <ul className="pb-4 text-xs font-medium space-y-1.5 text-[#676358] list-disc list-inside">
                      {product.fabricCare.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* 3. Delivery & Returns */}
                <div>
                  <button
                    onClick={() => toggleAccordion('delivery')}
                    className="w-full py-4 flex items-center justify-between font-extrabold text-xs uppercase tracking-wider text-left"
                  >
                    <span>Delivery & Returns</span>
                    <span>{openAccordions.includes('delivery') ? '−' : '+'}</span>
                  </button>
                  {openAccordions.includes('delivery') && (
                    <ul className="pb-4 text-xs font-medium space-y-1.5 text-[#676358] list-disc list-inside">
                      {product.shippingNotes.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <section className="py-14 border-b border-[#14140C]/20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-extrabold text-[28px] tracking-tight text-[#14140C]">Reviews</h2>
            <span className="text-xs font-black text-[#14140C]">
              ★★★★★ 4.9 from 168 reviews
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white border-[1.5px] border-[#14140C] rounded-xl shadow-retro-sm">
              <span className="text-[#14140C] text-xs">★★★★★</span>
              <h3 className="font-extrabold text-sm text-[#14140C] mt-2 mb-1">
                Perfect summer shirt
              </h3>
              <p className="text-xs text-[#676358] leading-relaxed mb-4">
                &ldquo;Wore it on a 36° day in Agrabad and stayed cool. The fit is relaxed without looking sloppy.&rdquo;
              </p>
              <span className="text-[11px] font-bold text-[#14140C]">
                Rafi A. · Chattogram · ✓ Verified buyer
              </span>
            </div>

            <div className="p-5 bg-white border-[1.5px] border-[#14140C] rounded-xl shadow-retro-sm">
              <span className="text-[#14140C] text-xs">★★★★☆</span>
              <h3 className="font-extrabold text-sm text-[#14140C] mt-2 mb-1">
                Size down if between sizes
              </h3>
              <p className="text-xs text-[#676358] leading-relaxed mb-4">
                &ldquo;Lovely fabric. It runs a little roomy, so I swapped my L for an M and it was perfect.&rdquo;
              </p>
              <span className="text-[11px] font-bold text-[#14140C]">
                Sumaiya T. · Sylhet · ✓ Verified buyer
              </span>
            </div>

            <div className="p-5 bg-white border-[1.5px] border-[#14140C] rounded-xl shadow-retro-sm">
              <span className="text-[#14140C] text-xs">★★★★★</span>
              <h3 className="font-extrabold text-sm text-[#14140C] mt-2 mb-1">
                Got compliments all day
              </h3>
              <p className="text-xs text-[#676358] leading-relaxed mb-4">
                &ldquo;Three people asked where it was from before lunch. The colour is even better in person.&rdquo;
              </p>
              <span className="text-[11px] font-bold text-[#14140C]">
                Imran K. · Khulna · ✓ Verified buyer
              </span>
            </div>
          </div>
        </section>

        {/* Cross-Sell Carousel ("Complete the look") */}
        <section className="py-14">
          <h2 className="font-extrabold text-[28px] tracking-tight text-[#14140C] mb-8">
            Complete the <span className="font-serif italic font-normal text-[32px]">look.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {complementaryProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <QuickActionToast />

      {/* Sizing Modal */}
      <FindYourSizeModal
        isOpen={isSizeModalOpen}
        onClose={() => setIsSizeModalOpen(false)}
        currentSize={selectedSize}
        onApplySize={(size) => {
          setSelectedSize(size);
          showToast(`✓ Size ${size} applied for you`);
        }}
      />
    </div>
  );
}

