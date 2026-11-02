# Rayé Step-by-Step Implementation & Engineering Blueprint

This guide provides an end-to-end implementation roadmap for engineers or AI agents to construct the complete, 100% faithful replica of **Rayé**.

---

## 1. Project Initialization & Stack Configuration

### 1.1 Scaffold Application
```bash
npx create-next-app@latest raye-store --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd raye-store
npm install framer-motion lucide-react zustand clsx tailwind-merge canvas-confetti
npm install -D @types/canvas-confetti
```

### 1.2 Font Configuration (`src/app/layout.tsx`)
Incorporate both the modern sans font and the editorial script font:

```tsx
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

const serifScript = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['normal', 'italic'],
  weight: ['400', '600', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serifScript.variable}`}>
      <body className="bg-[#F8F4E9] text-[#14140C] antialiased selection:bg-[#EF5E4B] selection:text-white">
        {children}
      </body>
    </html>
  );
}
```

### 1.3 Tailwind Theme Extension (`tailwind.config.ts`)
```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#EF5E4B',
          dark: '#E14E3B',
          light: '#F47E6E',
        },
        pine: {
          DEFAULT: '#174A41',
          dark: '#133B34',
          light: '#1D594E',
        },
        butter: {
          DEFAULT: '#F7D66D',
          light: '#FDEEAF',
        },
        cream: {
          DEFAULT: '#F8F4E9',
          card: '#FBF8F1',
        },
        jet: '#14140C',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      boxShadow: {
        'retro-sm': '2px 2px 0px #14140C',
        'retro-md': '4px 4px 0px #14140C',
        'retro-modal': '8px 8px 0px #133B34',
      },
      borderWidth: {
        '1.5': '1.5px',
      },
    },
  },
  plugins: [],
};
export default config;
```

---

## 2. Directory Architecture

```text
raye-store/
├── public/
│   ├── images/
│   │   ├── products/          # Flat-lay and on-model photos
│   │   ├── hero/              # Hero smiling woman holding citrus
│   │   ├── lifestyle/         # Boulder model, green sofa, polaroids
│   │   └── badges/            # SVG sunburst seals
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Global fonts, metadata, providers
│   │   ├── page.tsx           # Homepage (Hero, Marquee, Edit 02, Why Rayé, Polaroid, Feel)
│   │   ├── shop/
│   │   │   └── page.tsx       # Catalog with faceted sidebar & sorting
│   │   └── product/
│   │       └── [slug]/
│   │           └── page.tsx   # PDP with gallery, size modal trigger, reviews
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MarqueeTicker.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── SunburstBadge.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── WhyRayeSection.tsx
│   │   │   ├── PolaroidSection.tsx
│   │   │   └── TheFeelSection.tsx
│   │   ├── shop/
│   │   │   ├── FilterSidebar.tsx
│   │   │   └── ActiveFilters.tsx
│   │   ├── product/
│   │   │   ├── ProductGallery.tsx
│   │   │   ├── AccordionGroup.tsx
│   │   │   └── ReviewCard.tsx
│   │   ├── interactive/
│   │   │   ├── FindYourSizeModal.tsx
│   │   │   └── QuickActionToast.tsx
│   ├── data/
│   │   ├── products.json      # 12 striped shirt dataset
│   │   ├── moods.json         # 3 polaroid mood cards
│   │   └── promos.json        # Top bar rotating messages
│   ├── store/
│   │   └── useCartStore.ts    # Zustand cart & toast state
│   └── utils/
│       ├── sizingAlgorithm.ts # Height/weight to size calculation
│       └── formatCurrency.ts  # ৳ BDT currency formatter
```

---

## 3. Core Component Implementation Details

### 3.1 Announcement Bar with Smooth Promo Cycling
```tsx
// src/components/layout/AnnouncementBar.tsx
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROMOS = [
  'FREE DELIVERY ON ORDERS OVER ৳3,000',
  'CASH ON DELIVERY ACROSS BANGLADESH',
  'USE RAYE10 FOR 10% OFF YOUR FIRST ORDER',
];

export const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PROMOS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[34px] bg-jet text-cream flex items-center justify-center overflow-hidden border-b border-black">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="text-[11px] font-black tracking-widest uppercase"
        >
          {PROMOS[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
```

### 3.2 Product Card with Hover Model Swap & Quick-Add Pill
```tsx
// src/components/home/ProductCard.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';
import { Product, ShirtSize } from '@/data/types';
import { useCartStore } from '@/store/useCartStore';

export const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [addedSize, setAddedSize] = useState<ShirtSize | null>(null);
  const { addItem, showToast } = useCartStore();

  const handleQuickAdd = (size: ShirtSize, e: React.MouseEvent) => {
    e.preventDefault();
    setAddedSize(size);
    addItem(product, size);
    showToast(`Added ${product.name}, size ${size}`);

    setTimeout(() => {
      setAddedSize(null);
    }, 2000);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white border-1.5 border-jet rounded-xl overflow-hidden transition-all duration-300 hover:shadow-retro-md hover:-translate-y-1"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[3/4] bg-[#F4EFE6] overflow-hidden">
        {/* Badges */}
        {product.badge && (
          <span className={`absolute top-2.5 left-2.5 z-10 px-2.5 py-0.5 text-[10px] font-black rounded-full border border-jet ${
            product.badge === 'POPULAR' ? 'bg-butter-light text-jet' :
            product.badge === 'NEW' ? 'bg-butter text-jet' :
            product.badge === 'SALE' ? 'bg-coral text-white' :
            'bg-jet text-white'
          }`}>
            {product.badge}
          </span>
        )}

        {/* Wishlist Heart */}
        <button
          aria-label="Save to wishlist"
          className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-butter border border-jet flex items-center justify-center hover:scale-110 transition"
        >
          <Heart className="w-3.5 h-3.5 text-jet stroke-[2.2]" />
        </button>

        {/* Dual Image Crossfade */}
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.images.flatHanger}
            alt={product.name}
            fill
            className={`object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <Image
            src={product.images.onModel}
            alt={`${product.name} on model`}
            fill
            className={`object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </Link>

        {/* Quick Add Pill Bar (Slides up on hover) */}
        <div
          className={`absolute bottom-3 inset-x-3 z-20 bg-jet text-white rounded-full py-1.5 px-3 flex items-center justify-between text-xs transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {addedSize ? (
            <span className="w-full text-center font-bold text-butter">✓ Added · {addedSize}</span>
          ) : (
            <>
              <span className="font-bold text-[11px] text-gray-300 mr-2">Quick add</span>
              <div className="flex gap-1.5">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={(e) => handleQuickAdd(s, e)}
                    className="hover:text-butter font-extrabold text-[11px] px-1 transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom Meta Container */}
      <div className="p-3.5 bg-white border-t border-jet/10">
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-jet text-jet" />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <Link href={`/product/${product.slug}`} className="font-bold text-sm text-jet hover:underline">
            {product.name}
          </Link>
          {/* Color Dots */}
          <div className="flex items-center gap-1">
            {product.colors.map((c) => (
              <span
                key={c.name}
                style={{ backgroundColor: c.hex }}
                className="w-2.5 h-2.5 rounded-full border border-jet/40"
              />
            ))}
          </div>
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-xs font-semibold text-jet">৳{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-[11px] text-gray-400 line-through">
              ৳{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
```

### 3.3 Global Cart & Toast State (`src/store/useCartStore.ts`)
```ts
import { create } from 'zustand';
import { Product, ShirtSize } from '@/data/types';

interface CartItem {
  product: Product;
  size: ShirtSize;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  toastMessage: string | null;
  addItem: (product: Product, size: ShirtSize) => void;
  showToast: (message: string) => void;
  hideToast: () => void;
  totalItems: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  toastMessage: null,

  addItem: (product, size) => {
    set((state) => {
      const existing = state.items.find(
        (i) => i.product.id === product.id && i.size === size
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.id === product.id && i.size === size
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return { items: [...state.items, { product, size, quantity: 1 }] };
    });
  },

  showToast: (message) => {
    set({ toastMessage: message });
  },

  hideToast: () => set({ toastMessage: null }),

  totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
}));
```

---

## 4. Verification & Testing Checklist

- [ ] **Announcement Bar:** Verifies 3 messages cycle every 4.5 seconds.
- [ ] **Sticky Navbar:** Stays fixed while scrolling; bag counter increments with a spring bounce upon add-to-cart.
- [ ] **Split Hero:** Left staggered text entrance and right image clip-up occur within 1.2s; sunburst badge spins continuously.
- [ ] **Marquee:** Seamless loop with no stutter; pauses on mouse hover.
- [ ] **Catalog Hover:** Image switches between hanger flat-lay and on-model view; quick-add sizes are clickable.
- [ ] **Polaroid Fan-Out:** Deck fans out into 3 distinct angle cards as Section 04 scrolls into view.
- [ ] **Shop Filters:** Selecting `Teal` instantly narrows catalog from 12 items to 2 items; active filter chip allows single-click clear.
- [ ] **Find Your Size Modal:**
  - Opens on click of `Find my size`.
  - Default `165 cm`, `60 kg` selects `XS` (`100 cm across chest`).
  - At `178 cm`, `60 kg` updates to `S` (`106 cm across chest`).
  - At `178 cm`, `80 kg` updates to `L` (`118 cm across chest`).
  - Clicking `Use size L` injects size into PDP selector, closes modal, and shows `✓ Size L picked for you` toast.
- [ ] **Responsive Viewports:** Adapts from desktop grid down to 360px mobile viewports with hamburger menu and single-column cards.

