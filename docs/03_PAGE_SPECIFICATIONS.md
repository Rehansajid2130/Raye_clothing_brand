# Rayé Page Specifications & Layout Architecture

This document provides complete structural, responsive, and functional specifications for all pages and global components in the **Rayé** store.

---

## 1. Global Shell & Navigation

### 1.1 Top Announcement Bar
- **Dimensions:** Height `34px`, full width.
- **Background:** Jet Black (`#14140C`), Text: Light Ivory (`#F8F4E9`).
- **Font:** 11px, Bold uppercase, letter-spacing `0.08em`.
- **Content Rotation (Every 4.5 seconds with crossfade / slide animation):**
  1. `FREE DELIVERY ON ORDERS OVER ৳3,000`
  2. `CASH ON DELIVERY ACROSS BANGLADESH`
  3. `USE RAYE10 FOR 10% OFF YOUR FIRST ORDER`

### 1.2 Sticky Navigation Bar
- **Dimensions:** Height `68px`, sticky at `top-0`, z-index `40`.
- **Background:** Coral / Terracotta (`#EF5E4B`).
- **Border:** Bottom border `1.5px solid #14140C`.
- **Layout (3-zone flexbox):**
  - **Left Navigation Links (Gap 20px):**
    - `Shop` (Link to `/shop`)
    - `New in`
    - `About`
    - `Journal`
    - `Help`
    - *Typography:* 13px, Medium-Bold (`font-medium`), Dark charcoal `#14140C`, hover underlines.
  - **Center Brand Logo:**
    - *"Rayé"* in elegant serif italic script (`Playfair Display Italic` or SVG mark).
    - Font size `30px`, color `#14140C`.
    - Click target routes to `/` (Home).
  - **Right Action Buttons (Gap 10px):**
    - `Search`: Circular button (`34px × 34px`), bg `#174A41` (Pine Teal), white search icon.
    - `User Account`: Circular button, bg `#174A41`, white user icon.
    - `Wishlist`: Circular button, bg `#174A41`, white heart icon.
    - `Bag`: Pill button (`h-8 px-3.5`), bg `#EF5E4B` or `#14140C`, border `1.5px solid #14140C`, white/dark shopping bag icon + text `Bag (N)` (dynamically reacts to cart updates).

---

## 2. Homepage Specification (`/`)

### 2.1 Hero Section
- **Layout:** 50/50 Split screen container with `border-b-2 border-black`.
- **Left Column (Solid Terracotta `#EF5E4B`):**
  - Padding: `px-12 py-16`.
  - Kicker: `STRIPES, REDRAWN — 2026` (11px, Bold uppercase, tracking `0.1em`).
  - Headline (Stacked):
    - `Stripes`
    - `that`
    - `walk in`
    - `first.` (in Italic Serif Script, e.g. `Playfair Display Italic`).
    - *Size:* 52px, lineHeight `0.95`, tight tracking.
  - Subhead:
    - *"Easy summer shirts in breathable cotton-linen. Bold stripes, relaxed cuts and colours borrowed from the coast."*
    - *Size:* 15px, text `#14140C` with slight opacity (90%), max-width 380px.
  - Action Group:
    - Primary CTA: `Shop the stripes ->` (Jet black pill button with right arrow).
    - Secondary CTA: `See what's new` (Outlined pill button).
- **Center Floating Element (Between Left & Right columns):**
  - **Rotating Sunburst Seal:**
    - Size: `76px × 76px`, z-index `20`.
    - Position: Absolute, centered on split divider line, vertically aligned with CTAs.
    - Rotating text: `• 2026 • RAYÉ • STRIPES • 2026 • RAYÉ • STRIPES •`.
    - Center graphic: 12-ray sun symbol in coral.
- **Right Column (Full-Bleed Lifestyle Photo):**
  - Background: Summer coastal sky blue (`#4A90E2`).
  - Image: Young smiling woman holding fresh mandarins/oranges, wearing the short-sleeve peach striped shirt (`Sunday Stripe`).
  - Fitting: Object cover, zero padding, edge-to-edge within right half.

### 2.2 Infinite Marquee Ticker Tape
- **Height:** `40px`.
- **Background:** Jet Black (`#14140C`), Border: `1.5px solid #14140C` top and bottom.
- **Content:** Seamless looping string separated by four-point star glyphs `✦`:
  `WIDE STRIPE ✦ CANDY STRIPE ✦ PINSTRIPE ✦ BENGAL STRIPE ✦ MADE FOR SALT AIR ✦ NOT YOUR OFFICE STRIPE ✦ WIDE STRIPE`
- **Animation:** CSS `translateX(0)` to `translateX(-50%)` infinite linear over 22 seconds.

### 2.3 Section 02: "THE EDIT / 02 — Your new favourites"
- **Container Background:** Linen Cream (`#F8F4E9`).
- **Section Header:**
  - Kicker: `THE EDIT / 02` (Centered, 11px uppercase bold).
  - Title: `Your new favourites.` (Bold display sans for "Your new" + serif italic script for "favourites.").
- **Product Grid (3 Columns × 2 Rows):**
  - Cards: Border `1.5px solid #14140C`, rounded `12px`, cream background `#FFFFFF`.
  - **Card Features:**
    1. Status badge top-left (`POPULAR`, `NEW`).
    2. Wishlist heart circle top-right (yellow circle `#F7D66D` with heart outline).
    3. High-res product photo on wooden hanger.
    4. Rating: 5 solid black stars `★★★★★`.
    5. Product Name (e.g. `Sunday Stripe`, `Lido Stripe`, `Harbour Stripe`).
    6. Price: `৳2,890`.
    7. Color Swatch Dots (e.g. Coral dot + Teal dot).
  - **Hover Micro-Interaction (Observed on Lido Stripe):**
    - The card lifts with a subtle shadow.
    - The image swaps to the **on-model lifestyle shot**.
    - A dark floating pill slides up from the bottom of the photo container:
      `Quick add  XS  S  M  L  XL  XXL`.
    - Clicking a size pill triggers:
      - Quick add button changes to `✓ Added · M`.
      - Header Bag updates `Bag (0)` → `Bag (1)`.
      - Bottom floating pill toast appears: `✓ Added Lido Stripe, size M  [View bag]`.
- **Section CTA:**
  - `See all shirts ->` (Centered yellow pill button `#F7D66D` with dark border).

### 2.4 Section 03: "WHY RAYÉ / 03 — Built for slow summers"
- **Grid Layout:** 3-column full-width banner container.
- **Column 1 (Left - Coral `#E46B63` / `#EF5E4B`):**
  - Kicker: `WHY RAYÉ / 03`.
  - Title: `Built for slow summers.` ("slow" in serif italic script).
  - Squiggle underline flourish.
  - Paragraph: *"A good shirt gets better with every wash. Ours are cut loose, sewn tight, and made to be worn on repeat."*
  - Link: `Our story ->` (with arrow).
- **Column 2 (Center - Model Landscape Photo):**
  - Full-height image of a man in striped knitwear with arms outstretched standing on a mossy boulder in a grassy field.
- **Column 3 (Right - Mustard Yellow `#F7D66D`):**
  - 2×2 Feature Grid with circular teal icon badges:
    1. **Cotton-linen:** *"Light, airy, and softer with every wash."*
    2. **Yarn-dyed stripes:** *"Woven in, so the colour never washes flat."*
    3. **Easy cut:** *"A relaxed, boxy fit that moves with you."*
    4. **Made to last:** *"Double-stitched seams and real shell buttons."*

### 2.5 Section 04: "STYLE IT YOUR WAY / 04 — One stripe. Three moods"
- **Section Header:**
  - Kicker: `STYLE IT YOUR WAY / 04`.
  - Title: `One stripe. Three moods.` ("Three moods." in serif italic script).
- **Polaroid Scroll-Driven Fan-Out Cards:**
  - Initial state (off-screen / stacked): Cards sit overlapping at center in a casual rotated pile.
  - Triggered state (in-view): Cards smoothly rotate and fan out horizontally into 3 distinct framed polaroids:
    - **Card 1 (Left - Featured with Coral Thick Frame):**
      - Photo: Woman lying on pink picnic blanket wearing yellow stripe shirt, sunglasses, fruit basket, book.
      - Center overlay button: `Shop look ->` (White pill).
      - Bottom caption: `Weekend picnic` — *"Picnic plans, maximum stripe energy."*
    - **Card 2 (Center - White Polaroid with Black Offset Frame):**
      - Photo: Man working on laptop in an outdoor garden chair wearing navy blue stripe shirt.
      - Bottom caption: `Studio, but easy` — *"Calls at ten, lunch outside at one."*
    - **Card 3 (Right - White Polaroid with Black Offset Frame):**
      - Photo: Man standing on a wooden lake pier dock wearing brown striped overshirt over tee.
      - Bottom caption: `Dockside` — *"Golden hour, salt in the air."*

### 2.6 Section 05: "THE FEEL / 05 — Soft enough to sleep in"
- **Layout:** Split 50/50 banner.
- **Left:** Editorial photo of a young man smiling and relaxing backwards on a vintage velvet green sofa set in a field under open skies.
- **Right (Warm Butter Container):**
  - Kicker: `THE FEEL / 05`.
  - Title: `Soft enough to sleep in.` ("sleep in." in serif italic).
  - Body: *"Woven from a cotton-linen blend that breathes in the heat and softens every wash — the shirt you forget you're wearing."*

---

## 3. Shop / Catalog Page (`/shop`)

### 3.1 Header & Tag Navigation
- **Breadcrumbs:** `Home > Shop`.
- **Kicker:** `12 SHIRTS, ALL STRIPED`.
- **Title:** `The shop.` ("shop." in serif italic script).
- **Subhead:** *"Every shirt is yarn-dyed cotton-linen, pre-washed for a true fit, and made in Bangladesh."*
- **Category Filter Pills (Horizontal row):**
  - `[All shirts (Active solid black)]`
  - `[Short sleeve]`
  - `[Long sleeve]`
  - `[Oversized]`
  - `[New in]`

### 3.2 Faceted Filter Sidebar (Left Column, Width 240px)
- **1. COLOUR:**
  - Swatch pills with color dot + label:
    - `Coral`, `Teal`, `Blue`, `Yellow`, `Earth`, `Green`, `Mono`.
  - Clicking `Teal` instantly filters catalog to 2 items and renders an active filter chip above the grid: `Teal [Clear]`.
- **2. SIZE:**
  - Round pill circles: `XS`, `S`, `M`, `L`, `XL`, `XXL`.
- **3. PRICE:**
  - Checkboxes:
    - `[ ] Under ৳2,700`
    - `[ ] ৳2,700 - ৳2,900`
    - `[ ] Over ৳2,900`
- **4. AVAILABILITY:**
  - Checkbox: `[ ] In stock only`.
- **Action Link:** `Clear all filters` (Underlined, resets all state).

### 3.3 Main Product Grid (Right Column)
- **Top Utility Bar:**
  - Left: Item counter (e.g. `12 shirts` or `2 shirts`).
  - Right: Sort dropdown (`Sort [Featured v]`, options: *Featured*, *Price: Low to High*, *Price: High to Low*, *Newest*).
- **Grid Layout:** 3 columns of product cards.
- **Card Hover:** Photo switches to on-model lifestyle view, Quick Add size pill slides up.

---

## 4. Product Detail Page (`/product/[slug]`)

### 4.1 Above-the-Fold Product Showcase (2 Columns)
- **Breadcrumb:** `Home > Shop > Short sleeve > Lido Stripe`.
- **Left Column (Gallery):**
  - Vertical thumbnail strip (far left):
    - Thumb 1: Flat-lay shirt on wooden hanger (active border).
    - Thumb 2: Model wearing shirt outdoors.
  - Main display container:
    - `NEW` status badge top-left.
    - Large zoomable / responsive product imagery.
- **Right Column (Product Meta & Actions):**
  - Kicker: `SHORT SLEEVE`.
  - Title: `Lido Stripe` (28px Bold).
  - Rating: `★★★★★ 4.9 · 168 reviews`.
  - Price: `৳2,890`.
  - Editorial description:
    *"Candy stripes in deep teal, cut short in the sleeve and easy everywhere else. Throw it open over a tee."*
  - **Colour Selector:**
    - Label: `Colour: Teal / White`.
    - Swatch circles: Teal (active ring) and Coral.
  - **Size Selector:**
    - Label row: `Size` (left) and `Find my size` (right, with ruler icon).
    - Size pills: `XS`, `S`, `M`, `L`, `XL`, `XXL`.
  - **Cart Actions:**
    - Quantity stepper: `[- 1 +]` pill.
    - Primary CTA: `Add to bag · ৳2,890` (Pine teal `#174A41` pill button).
    - Wishlist button: Round circular button with heart `♡`.
  - **Delivery Perks (Icons + Micro-copy):**
    - `Free delivery over ৳3,000, next day in Dhaka` (Truck icon).
    - `Free size exchanges within 14 days` (Exchange arrows icon).
    - `Cash on delivery across Bangladesh` (Shield check icon).
  - **Collapsible Accordions (Animated open/close):**
    - `Details` (Expanded by default): Camp collar, Relaxed fit, Side vents, Real shell buttons.
    - `Fabric & care`: 70% cotton, 30% linen, machine wash cold, hang dry in shade.
    - `Delivery & returns`: Dhaka orders delivered within 24-48 hours. Easy 14-day return portal.

### 4.2 Customer Reviews Section
- **Header:** `Reviews` (left), `★★★★★ 4.9 from 168 reviews` (right).
- **3 Verified Buyer Cards:**
  1. **Card 1:** 5 stars | *"Perfect summer shirt"* | *"Wore it on a 36° day in Agrabad and stayed cool. The fit is relaxed without looking sloppy."* | Rafi A. · Chattogram · ✓ Verified buyer.
  2. **Card 2:** 4 stars | *"Size down if between sizes"* | *"Lovely fabric. It runs a little roomy, so I swapped my L for an M and it was perfect."* | Sumaiya T. · Sylhet · ✓ Verified buyer.
  3. **Card 3:** 5 stars | *"Got compliments all day"* | *"Three people asked where it was from before lunch. The colour is even better in person."* | Imran K. · Khulna · ✓ Verified buyer.

### 4.3 Cross-Sell Carousel ("Complete the look")
- Headline: `Complete the look.` ("look." in serif italic script).
- Horizontal scroll rail featuring complementary shirts (e.g. `Sunday Stripe`, `Butter Stripe`, `Marina Stripe`).

---

## 5. Global Footer

- **Background:** Deep Jet Black (`#14140C`), Text: Light Ivory (`#F8F4E9`).
- **Top Row:**
  - Massive Script Logo: `Rayé` in Terracotta Coral (`#EF5E4B`), 84px serif italic.
  - Tagline: *"Striped shirts for slow, sunny days. Woven and sewn in Bangladesh."*
  - Newsletter Signup:
    - Text: `Get the good stuff in your inbox.`
    - Input: Underlined text input `Your email address` with arrow `->` submit button.
- **Middle Row (4 Navigation Columns):**
  - **SHOP:** All shirts, Short sleeve, Long sleeve, Oversized, New in.
  - **HELP:** FAQs, Shipping & returns, Size guide, Contact us.
  - **RAYÉ:** Our story, Journal, My account, Saved shirts.
  - **FOLLOW:** Instagram, TikTok, Pinterest, Facebook.
- **Bottom Legal & Payment Bar:**
  - Left: `© 2026 RAYÉ. MADE WITH LOVE IN BANGLADESH. SHOP ADMIN`
  - Right: `VISA · MASTERCARD · BKASH · NAGAD · CASH ON DELIVERY` (with clean payment gateway logos/badges).

