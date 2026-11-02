# Rayé Online Clothing Store — Master Project Overview

## 1. Executive Summary & Brand Identity

**Rayé** (derived from the French word for *"striped"*) is a high-aesthetic, coastal-retro, modern direct-to-consumer (D2C) clothing brand specializing in relaxed, unisex cotton-linen striped shirts.

The brand pairs laid-back holiday elegance with artisanal craftsmanship:
- **Core Product:** Yarn-dyed, pre-washed cotton-linen shirts with relaxed cuts, camp collars, and real shell buttons.
- **Brand Origin:** *"Woven and sewn with love in Bangladesh"*.
- **Currency & Market:** Bangladeshi Taka (`৳` BDT) with local delivery perks (Next-day Dhaka delivery, Cash on Delivery nationwide, bKash & Nagad payments).
- **Design Archetype:** **Coastal Retro-Editorial meets Soft Neo-Brutalism**. Characterized by bold, warm color blocks (terracotta, pine teal, buttery yellow, cream linen), crisp 1.5px/2px borders, solid offset drop-shadows, pill-shaped tactile buttons, smooth editorial transitions, and a standout interactive sizing calculator.

---

## 2. Video Analysis & Timeline Breakdown

The reference video (`Online_clothing_store_website_👕#ecommerce_#uianimation_#javascript_#webdesign_#Frontend.mp4`, 15.16 seconds, 720×1280 vertical demo by creator `@_code_and_chill_`) demonstrates an end-to-end customer journey with high-converting micro-interactions:

| Timestamp | Screen / Flow | Key Actions & Events Observed |
| :--- | :--- | :--- |
| **0.00s – 1.50s** | **Hero Entrance & Announcement Bar** | • Cycling top announcement bar with 3 rotating promos.<br>• Sticky Terracotta navigation bar with circular icon buttons.<br>• Dramatic split entrance animation: Left coral block reveals staggered typography *"Stripes that walk in first."* and pill buttons; Right block reveals model photo holding citrus fruits against a vivid sky.<br>• Center rotating scalloped sunburst badge (`• 2026 • RAYÉ • STRIPES •`) spins continuously.<br>• Seamless infinite marquee ticker tape scrolling striped shirt styles. |
| **1.50s – 4.50s** | **Homepage Showcase & Quick-Add** | • Scroll into Section 02: *"THE EDIT / 02: Your new favourites."*<br>• 3-column product grid with status badges (`POPULAR`, `NEW`), 5-star ratings, pricing, and live color swatches.<br>• Mouse hovers over **Lido Stripe**: card gets a solid offset shadow, model image appears, and dark pill bar `Quick add XS S M L XL XXL` slides up.<br>• User clicks size `M`: instant feedback `✓ Added · M`, cart in header updates to `Bag (1)`, and floating bottom toast slides in: `✓ Added Lido Stripe, size M  [View bag]`. |
| **4.50s – 6.50s** | **Brand Story & Polaroid Fan-Out** | • Section 03: *"WHY RAYÉ / 03: Built for slow summers."* Tri-color blocked feature container (Terracotta narrative + Center boulder model photo + Mustard 4-feature grid).<br>• Section 04: *"STYLE IT YOUR WAY / 04: One stripe. Three moods."*<br>• Scroll-triggered motion: A stacked deck of 3 polaroid frames smoothly fans out across the screen with editorial captions (*Weekend picnic*, *Studio, but easy*, *Dockside*).<br>• Section 05: *"THE FEEL / 05: Soft enough to sleep in."* Split editorial banner. |
| **6.50s – 9.00s** | **Shop / Catalog Page & Faceted Filtering** | • User clicks `Shop` link in sticky navbar; smooth page transition to `/shop`.<br>• Breadcrumb `Home > Shop`, header `12 SHIRTS, ALL STRIPED: The shop.`, tag filter pills (`All shirts`, `Short sleeve`, `Long sleeve`, `Oversized`, `New in`).<br>• Left sidebar faceted filter: Colour pills with swatch dots, Size circles, Price checkboxes, Availability, and `Clear all filters`.<br>• User clicks `Teal` swatch: instant reactive filter updates count from `12 shirts` to `2 shirts`, filter chip `Teal [Clear]` appears, grid filters to Lido Stripe and Seafoam Stripe.<br>• Dark footer with giant coral script logo `Rayé`, newsletter signup, 4-column links, and payment methods (Visa, Mastercard, bKash, Nagad, Cash on Delivery). |
| **9.00s – 15.16s** | **Product Detail Page (PDP) & Sizing Calculator** | • User hovers over Lido Stripe on shop page (hanger image flips to on-model view), clicks card, and navigates to `/product/lido-stripe`.<br>• PDP features 2-thumbnail switcher, badge, title, star rating (4.9 · 168 reviews), price (`৳2,890`), color swatches, size pills, quantity stepper, value props, accordions, verified customer reviews, and cross-sell carousel.<br>• User clicks `Find my size` (tape measure icon).<br>• **Interactive "Find your size" Modal**: pops up with backdrop blur and retro pine shadow.<br>• User adjusts Height (`165 cm` → `178 cm`) and Weight (`60 kg` → `80 kg`). Mannequin illustration reflects proportions. Recommended size dynamically recalculates from `XS` → `S` → `L`, updating chest measurement (`118 cm across the chest`) in real-time.<br>• User clicks `Use size L  ✓`: modal closes, size `L` is selected on PDP, toast confirms `✓ Size L picked for you`, and user hovers `Add to bag`. |

---

## 3. High-Level Architecture & Tech Stack Recommendation

To achieve a 60fps, buttery-smooth replica identical to the video:

| Layer | Recommended Technology | Reason |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15+ (App Router)** or **Vite + React 19** | Server-side rendering for catalog SEO, instant client-side transitions between Home, Shop, and PDP. |
| **Styling** | **Tailwind CSS v3.4 / v4** | Rapid utility styling for precise custom colors, border radii, and custom utility classes (`border-2 border-black shadow-[4px_4px_0px_#000]`). |
| **Animations** | **Framer Motion 11+** | Layout animations, stagger children on entrance, polaroid fan-out scroll transforms, modal spring physics, quick-add slide-up. |
| **Icons** | **Lucide React** | Feather-light SVG icons matching the exact aesthetic (Search, User, Heart, Shopping Bag, Ruler/Tape, ArrowRight, Check, Plus, Minus, Star). |
| **State Management** | **Zustand** or **React Context** | Lightweight persistent cart state (`bagCount`, `cartItems`), wishlist state, and active filters. |
| **Fonts** | **Google Fonts** (`Cinzel Decorative` or `Playfair Display Italic` for logo & script accents + `Plus Jakarta Sans` or `Cabinet Grotesk` / `Outfit` for bold modern sans). | Crisp typography hierarchy. |

---

## 4. Documentation Index in this Specification Suite

This directory contains complete architectural specs to build every piece of the store:

1. [`01_PROJECT_OVERVIEW.md`](file:///c:/Users/lenovo/Desktop/web2api/raye-store-spec/01_PROJECT_OVERVIEW.md) — Executive summary, video timeline analysis, and tech stack.
2. [`02_DESIGN_SYSTEM.md`](file:///c:/Users/lenovo/Desktop/web2api/raye-store-spec/02_DESIGN_SYSTEM.md) — Sampled color tokens, typography scales, border/shadow rules, button styles, and badges.
3. [`03_PAGE_SPECIFICATIONS.md`](file:///c:/Users/lenovo/Desktop/web2api/raye-store-spec/03_PAGE_SPECIFICATIONS.md) — Detailed layout specifications for Navbar, Homepage, Shop Page, PDP, and Footer.
4. [`04_ANIMATIONS_AND_INTERACTIONS.md`](file:///c:/Users/lenovo/Desktop/web2api/raye-store-spec/04_ANIMATIONS_AND_INTERACTIONS.md) — Exact motion choreography for hero reveal, marquee, card hover, polaroid fan-out, and toasts.
5. [`05_INTERACTIVE_SIZE_CALCULATOR.md`](file:///c:/Users/lenovo/Desktop/web2api/raye-store-spec/05_INTERACTIVE_SIZE_CALCULATOR.md) — Full logic, algorithms, UI components, and state machine for the sizing modal.
6. [`06_DATA_MODELS_AND_CATALOG.md`](file:///c:/Users/lenovo/Desktop/web2api/raye-store-spec/06_DATA_MODELS_AND_CATALOG.md) — Complete TypeScript schemas and mock JSON dataset for all 12 products, reviews, and promos.
7. [`07_STEP_BY_STEP_IMPLEMENTATION.md`](file:///c:/Users/lenovo/Desktop/web2api/raye-store-spec/07_STEP_BY_STEP_IMPLEMENTATION.md) — Practical implementation steps, folder structure, and production-ready code templates.
8. [`08_ADMIN_PANEL_SPECIFICATIONS.md`](file:///c:/Users/lenovo/Desktop/web2api/raye-store-spec/08_ADMIN_PANEL_SPECIFICATIONS.md) — Back office admin panel architecture: Drag-and-drop Kanban orders board, sales spline analytics, size-level inventory controller, customer CRM, and fit engine insights.

