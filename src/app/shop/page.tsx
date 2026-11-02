'use client';
// ponytail: Clean faceted catalog page using reactive URL search params and client filtering
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../../components/home/ProductCard';
import { AnnouncementBar } from '../../components/layout/AnnouncementBar';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { QuickActionToast } from '../../components/interactive/QuickActionToast';
import { ColorFamily, ShirtSize, ShirtSleeveType } from '../../types/product';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | ShirtSleeveType | 'new'>('all');
  const [selectedColors, setSelectedColors] = useState<ColorFamily[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<ShirtSize[]>([]);
  const [sortBy, setSortBy] = useState<'featured' | 'low_high' | 'high_low'>('featured');
  const [inStockOnly, setInStockOnly] = useState(false);

  // Live filtered catalog
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory === 'short_sleeve' && p.sleeveType !== 'short_sleeve') return false;
      if (selectedCategory === 'long_sleeve' && p.sleeveType !== 'long_sleeve') return false;
      if (selectedCategory === 'new' && p.badge !== 'NEW') return false;

      // Color filter
      if (selectedColors.length > 0) {
        const matchesColor = p.colors.some((c) => selectedColors.includes(c.family));
        if (!matchesColor) return false;
      }

      // Size filter
      if (selectedSizes.length > 0) {
        const matchesSize = p.sizes.some((s) => selectedSizes.includes(s));
        if (!matchesSize) return false;
      }

      // Stock filter
      if (inStockOnly && !p.inStock) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'low_high') return a.price - b.price;
      if (sortBy === 'high_low') return b.price - a.price;
      return 0; // featured order
    });
  }, [selectedCategory, selectedColors, selectedSizes, sortBy, inStockOnly]);

  const toggleColor = (family: ColorFamily) => {
    setSelectedColors((prev) =>
      prev.includes(family) ? prev.filter((c) => c !== family) : [...prev, family]
    );
  };

  const toggleSize = (size: ShirtSize) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedColors([]);
    setSelectedSizes([]);
    setInStockOnly(false);
  };

  const COLOR_OPTIONS: { name: ColorFamily; hex: string }[] = [
    { name: 'Teal', hex: '#1D594E' },
    { name: 'Coral', hex: '#EF5E4B' },
    { name: 'Blue', hex: '#5B8FB9' },
    { name: 'Yellow', hex: '#F6D365' },
    { name: 'Earth', hex: '#A0522D' },
    { name: 'Green', hex: '#609966' },
    { name: 'Mono', hex: '#2B2B2B' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F4E9] text-[#14140C] flex flex-col font-sans">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-10 w-full">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-bold text-[#676358] mb-6">
          <a href="/" className="hover:underline">Home</a> &gt; <span className="text-[#14140C]">Shop</span>
        </nav>

        {/* Shop Header */}
        <div className="mb-10">
          <span className="text-[11px] font-black uppercase tracking-[0.14em] text-[#14140C] block mb-2">
            12 SHIRTS, ALL STRIPED
          </span>
          <h1 className="text-[44px] font-extrabold tracking-tight text-[#14140C]">
            The <span className="font-serif italic font-normal text-[48px]">shop.</span>
          </h1>
          <p className="text-[15px] text-[#676358] font-medium mt-1">
            Every shirt is yarn-dyed cotton-linen, pre-washed for a true fit, and made in Bangladesh.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              { id: 'all', label: 'All shirts' },
              { id: 'short_sleeve', label: 'Short sleeve' },
              { id: 'long_sleeve', label: 'Long sleeve' },
              { id: 'new', label: 'New in' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-5 py-2 rounded-full text-xs font-black border-[1.5px] border-[#14140C] transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#14140C] text-white shadow-retro-sm'
                    : 'bg-white text-[#14140C] hover:bg-[#F7D66D]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid & Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
          {/* Faceted Filters Sidebar */}
          <aside className="space-y-6 select-none">
            {/* 1. Color Filters */}
            <div className="p-4 bg-white border-[1.5px] border-[#14140C] rounded-xl shadow-retro-sm">
              <h3 className="text-xs font-black uppercase tracking-wider mb-3">Colour</h3>
              <div className="flex flex-wrap gap-2">
                {COLOR_OPTIONS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => toggleColor(c.name)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#14140C] text-[11px] font-bold transition-all ${
                      selectedColors.includes(c.name)
                        ? 'bg-[#14140C] text-white'
                        : 'bg-[#F8F4E9] text-[#14140C] hover:bg-white'
                    }`}
                  >
                    <span
                      style={{ backgroundColor: c.hex }}
                      className="w-2.5 h-2.5 rounded-full border border-black/40"
                    />
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Size Filters */}
            <div className="p-4 bg-white border-[1.5px] border-[#14140C] rounded-xl shadow-retro-sm">
              <h3 className="text-xs font-black uppercase tracking-wider mb-3">Size</h3>
              <div className="flex flex-wrap gap-1.5">
                {(['XS', 'S', 'M', 'L', 'XL', 'XXL'] as ShirtSize[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleSize(s)}
                    className={`w-8 h-8 rounded-full border border-[#14140C] text-xs font-black flex items-center justify-center transition-all ${
                      selectedSizes.includes(s)
                        ? 'bg-[#14140C] text-white'
                        : 'bg-[#F8F4E9] text-[#14140C] hover:bg-[#F7D66D]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Availability Filter */}
            <div className="p-4 bg-white border-[1.5px] border-[#14140C] rounded-xl shadow-retro-sm">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-bold">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="accent-[#174A41] w-4 h-4 cursor-pointer"
                />
                In stock only
              </label>
            </div>

            {/* Reset Filters */}
            {(selectedColors.length > 0 || selectedSizes.length > 0 || inStockOnly || selectedCategory !== 'all') && (
              <button
                onClick={clearAllFilters}
                className="text-xs font-bold text-[#EF5E4B] underline decoration-[1.5px] hover:text-[#14140C]"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Product Grid Area */}
          <div>
            {/* Top Counter & Sorting */}
            <div className="flex items-center justify-between pb-4 border-b border-[#14140C]/15 mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#676358]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'shirt' : 'shirts'}
              </span>

              {/* Sort Selector */}
              <div className="flex items-center gap-2 text-xs font-bold">
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-white border border-[#14140C] rounded-lg px-2.5 py-1 text-xs font-bold cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="low_high">Price: Low to High</option>
                  <option value="high_low">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Product Cards Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-lg font-bold text-[#14140C] mb-2">No matching shirts found.</p>
                <button
                  onClick={clearAllFilters}
                  className="text-xs font-black underline text-[#EF5E4B]"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <QuickActionToast />
    </div>
  );
}

