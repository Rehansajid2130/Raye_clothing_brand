# Rayé Design System & Style Guide

This document defines the exact visual design language, color palette, typography hierarchy, border tokens, shadow specifications, and UI components extracted directly from the reference site for **Rayé**.

---

## 1. Color Palette Tokens (18 Colors + 1 Gradient)

```css
:root {
  /* 18 Reference Colors */
  --color-white: #ffffff;
  --color-linen: #f4ecdf;
  --color-floral-white: #fbf6ee;
  --color-wheat: #ffe7a3;
  --color-light-steel-blue: #9fc3e0;
  --color-khaki: #ffd66b;
  --color-tomato: #ff5c3d;
  --color-tomato-1: #ff6b4a;
  --color-burnt-orange: #e5512f;
  --color-indian-red: #b8553a;
  --color-charcoal: #4a423a;
  --color-dark-slate-gray: #0e4f4b;
  --color-dark-slate-gray-1: #1f2f4f;
  --color-dark-slate-gray-2: #14675f;
  --color-dark-gray: #2a2724;
  --color-black: #000000;
  --color-black-1: #17130f;
  --color-black-2: #161616;

  /* 1 Reference Gradient */
  --gradient-repeating-linear: repeating-linear-gradient(45deg, #14675f 0px, #14675f 14.14px, #000000 14.14px, #000000 28.28px);

  /* Semantic Core Color Mappings */
  --coral: var(--color-tomato-1);          /* #ff6b4a */
  --coral-deep: var(--color-burnt-orange);   /* #e5512f */
  --teal: var(--color-dark-slate-gray);     /* #0e4f4b */
  --teal-2: var(--color-dark-slate-gray-2); /* #14675f */
  --butter: var(--color-khaki);             /* #ffd66b */
  --butter-soft: var(--color-wheat);        /* #ffe7a3 */
  --cream: var(--color-floral-white);       /* #fbf6ee */
  --paper: var(--color-linen);              /* #f4ecdf */
  --ink: var(--color-black-1);              /* #17130f */
  --ink-2: var(--color-charcoal);           /* #4a423a */
  --line: rgba(23, 19, 15, 0.16);           /* #17130f29 */
}
```

---

## 2. Shadow Specifications (Exact Tokens)

```css
:root {
  --shadow-low: rgba(14, 79, 75, 0.18) 0px 0px 0px 3px;     /* Active focus rings */
  --shadow-low-2: rgba(0, 0, 0, 0.35) 4px 4px 0px;          /* Primary dark drop shadow */
  --shadow-low-3: rgb(255, 255, 255) 0px 0px 0px 7px;       /* White cutout ring */
  --shadow-low-4: rgb(23, 19, 15) 8px 8px 0px 0px;          /* Prominent brutalist 8px shadow */
  --shadow-low-5: rgb(255, 107, 74) 10px 10px 0px 0px;      /* Coral 10px offset shadow for cards/modals */
  --shadow-low-6: rgb(23, 19, 15) 3px 3px 0px 0px;          /* Standard button / pill 3px shadow */
  --shadow-low-7: rgba(0, 0, 0, 0.35) 4px 4px 0px 0px;      /* Hover offset shadow */
  --shadow-high: rgba(23, 19, 15, 0.18) 0px 8px 18px;       /* Floating sunburst seal sticker */
  --shadow-high-2: rgba(23, 19, 15, 0.18) 0px 0px 40px;     /* Ambient backdrop glow */
  --shadow-high-3: rgba(23, 19, 15, 0.25) 0px 10px 30px;    /* Popovers & drawers */
}
```

---

## 3. Typography Raw Tokens & Semantic Type Styles

### Raw Tokens (Layer 2)

```css
:root {
  --font-instrument-serif: 'Instrument Serif', serif;
  --font-archivo: Archivo, sans-serif;
  --font-instrument-sans: 'Instrument Sans', sans-serif;
  --font-ui-monospace: ui-monospace, sans-serif;

  --text-11: 11px;
  --text-12: 12px;
  --text-13: 13px;
  --text-15: 15px;
  --text-16: 16px;
  --text-20: 20px;
  --text-32: 32px;
  --text-55: 55px;
  --text-59: 59px;
  --text-73: 73px;
  --text-79: 79px;
  --text-80: 80px;
  --text-104: 104px;
  --text-112: 112px;
  --text-211: 211px;

  --tracking-neg-6-336: -6.336px;
  --tracking-neg-2-25331: -2.25331px;
  --tracking-neg-2-608: -2.608px;
  --tracking-neg-1-58976: -1.58976px;
  --tracking-neg-1-84: -1.84px;
  --tracking-neg-1-18886: -1.18886px;
  --tracking-neg-1-376: -1.376px;
  --tracking-neg-0-64: -0.64px;
  --tracking-0-9: 0.9px;
  --tracking-0-72: 0.72px;
  --tracking-1-6128: 1.6128px;
  --tracking-0-88: 0.88px;
  --tracking-1-152: 1.152px;
  --tracking-1-3824: 1.3824px;
  --tracking-0-9216: 0.9216px;
}
```

### Semantic Type Styles (Layer 1)

```css
.type-body {
  font-family: var(--font-instrument-serif);
  font-size: var(--text-211);
  font-weight: 400;
  line-height: 0.80;
  letter-spacing: var(--tracking-neg-6-336);
}

.type-large-title {
  font-family: var(--font-instrument-serif);
  font-size: var(--text-112);
  font-weight: 400;
  line-height: 0.91;
  letter-spacing: var(--tracking-neg-2-25331);
}

.type-h1,
.type-large-title-104 {
  font-family: var(--font-archivo);
  font-size: var(--text-104);
  font-weight: 800;
  line-height: 0.92;
  letter-spacing: var(--tracking-neg-2-608);
}

.type-large-title-80 {
  font-family: var(--font-instrument-serif);
  font-size: var(--text-80);
  font-weight: 400;
  line-height: 0.60;
}

.type-large-title-79,
.type-large-title-79-400 {
  font-family: var(--font-instrument-serif);
  font-size: var(--text-79);
  font-weight: 400;
  line-height: 0.91;
  letter-spacing: var(--tracking-neg-1-58976);
}

.type-h2,
.type-large-title-73,
.type-h2-73,
.type-large-title-73-800 {
  font-family: var(--font-archivo);
  font-size: var(--text-73);
  font-weight: 800;
  line-height: 0.93;
  letter-spacing: var(--tracking-neg-1-84);
}

.type-large-title-59 {
  font-family: var(--font-instrument-serif);
  font-size: var(--text-59);
  font-weight: 400;
  line-height: 0.91;
  letter-spacing: var(--tracking-neg-1-18886);
}

.type-h2-55,
.type-large-title-55 {
  font-family: var(--font-archivo);
  font-size: var(--text-55);
  font-weight: 800;
  line-height: 0.92;
  letter-spacing: var(--tracking-neg-1-376);
}

.type-link {
  font-family: var(--font-instrument-serif);
  font-size: var(--text-32);
  font-weight: 400;
  line-height: 1.00;
  letter-spacing: var(--tracking-neg-0-64);
}

.type-body-20,
.type-body-20-400 {
  font-family: var(--font-instrument-sans);
  font-size: var(--text-20);
  font-weight: 400;
  line-height: 1.45;
}

.type-h3,
.type-h3-16 {
  font-family: var(--font-instrument-sans);
  font-size: var(--text-16);
  font-weight: 600;
  line-height: 1.20;
}

.type-link-16,
.type-header,
.type-body-16 {
  font-family: var(--font-instrument-sans);
  font-size: var(--text-16);
  font-weight: 400;
  line-height: 1.50;
}

.type-subheading,
.type-subheading-15 {
  font-family: var(--font-archivo);
  font-size: var(--text-15);
  font-weight: 800;
  line-height: 1.00;
  letter-spacing: var(--tracking-0-9);
}

.type-button,
.type-link-13 {
  font-family: var(--font-instrument-sans);
  font-size: var(--text-13);
  font-weight: 600;
  line-height: 1.06;
}

.type-caption {
  font-family: var(--font-instrument-sans);
  font-size: var(--text-13);
  font-weight: 500;
  line-height: 1.06;
}

.type-caption-13,
.type-body-13 {
  font-family: var(--font-instrument-sans);
  font-size: var(--text-13);
  font-weight: 400;
  line-height: 1.55;
}

.type-link-12 {
  font-family: var(--font-ui-monospace);
  font-size: var(--text-12);
  font-weight: 600;
  line-height: 1.00;
  letter-spacing: var(--tracking-0-72);
}

.type-button-11,
.type-button-11-700 {
  font-family: var(--font-instrument-sans);
  font-size: var(--text-11);
  font-weight: 700;
  line-height: 1.00;
}

.type-small,
.type-h2-11 {
  font-family: var(--font-instrument-sans);
  font-size: var(--text-11);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: var(--tracking-1-6128);
}

.type-small-11 {
  font-family: var(--font-instrument-sans);
  font-size: var(--text-11);
  font-weight: 700;
  line-height: 1.00;
  letter-spacing: var(--tracking-0-88);
}

.type-small-11-700 {
  font-family: var(--font-instrument-sans);
  font-size: var(--text-11);
  font-weight: 700;
  line-height: 1.57;
  letter-spacing: var(--tracking-1-152);
}

.type-body-11 {
  font-family: var(--font-instrument-sans);
  font-size: var(--text-11);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: var(--tracking-1-3824);
}

.type-small-11-600 {
  font-family: var(--font-instrument-sans);
  font-size: var(--text-11);
  font-weight: 600;
  line-height: 1.05;
}

.type-body-11-600 {
  font-family: var(--font-instrument-sans);
  font-size: var(--text-11);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: var(--tracking-1-6128);
}

.type-body-11-400,
.type-small-11-400,
.type-link-11 {
  font-family: var(--font-instrument-sans);
  font-size: var(--text-11);
  font-weight: 400;
  line-height: 1.57;
  letter-spacing: var(--tracking-0-9216);
}
```

---

## 4. Reusable UI Components & States

### 4.1 Buttons
- **Primary Pill:** Background `var(--color-jet)` (`#17130f`), text `var(--color-cream)` (`#fbf6ee`), `box-shadow: var(--shadow-low-2)`. Hover: `box-shadow: var(--shadow-low-4)`.
- **Bag Pill Button:** Background `var(--color-jet)`, `box-shadow: var(--shadow-low-6)`. Hover: `box-shadow: var(--shadow-low-7)`.
- **Secondary Outlined Pill:** `border: 1.5px solid var(--color-jet)`. Hover: background `var(--color-jet)`, text `var(--color-cream)`.
- **Yellow CTA Pill:** Background `var(--color-butter)`, border `1.5px solid var(--color-jet)`, `box-shadow: var(--shadow-low-2)`.
- **Focus Ring:** Outline `2px solid var(--color-dark-slate-gray)` (`#0e4f4b`), `box-shadow: var(--shadow-low)`.

### 4.2 Cards & Modals
- **Product Card Hover:** `transform: translate3d(0, -6px, 0); box-shadow: var(--shadow-low-2);`.
- **Modal Containers & Search Box:** `border: 2px solid var(--color-jet); border-radius: 16px; box-shadow: var(--shadow-low-5);` (10px coral offset drop shadow).
- **Floating Rotating Sunburst Seal:** `filter: drop-shadow(0 8px 18px rgba(23, 19, 15, 0.18));` (`var(--shadow-high)`).
- **Awning Pattern:** `background-image: var(--gradient-repeating-linear);`.


1. **Primary Button (Dark Pill):**
   - Background: `#14140C` (or `#174A41` on PDP).
   - Text: `#FFFFFF`, 13px Bold.
   - Shape: Full pill (`rounded-full px-5 py-2.5`).
   - Suffix: Arrow icon (`->`) in circle or inline.
   - Hover: Transform `translateY(-1px)`, subtle brightness.
2. **Secondary Button (Outlined Pill):**
   - Background: Transparent or `#F8F4E9`.
   - Border: `1.5px solid #14140C`.
   - Text: `#14140C`, 13px Bold.
   - Hover: Background `#14140C`, text `#FFFFFF`.
3. **Yellow CTA Pill:**
   - Background: `#F7D66D`.
   - Border: `1.5px solid #14140C`.
   - Text: `#14140C`, 13px Bold.
   - Example: `See all shirts ->`.
4. **Circular Icon Buttons (Navbar):**
   - Size: `36px × 36px`.
   - Background: `#174A41` (Pine Teal) or `#14140C`.
   - Shape: Circle `rounded-full`.
   - Icon: White 16px Lucide SVG (`Search`, `User`, `Heart`).
   - Bag Button: Pill shape `px-3.5 py-1.5`, includes shopping bag icon and `Bag (0)` text.

### 4.2 Badges & Chips

1. **Card Status Badges (Top-Left of product image):**
   - `POPULAR`: Yellow badge `#FDEEAF` with black border `1px solid #14140C`, rounded pill, 10px uppercase bold.
   - `NEW`: Butter yellow badge `#FDEEAF` or `#F7D66D`.
   - `SALE`: Terracotta/red badge `#EF5E4B` with white bold text.
   - `LIMITED`: Black pill badge `#14140C` with white bold text.
2. **Wishlist Heart Badge (Top-Right of product image):**
   - Size: `28px × 28px`.
   - Background: `#F7D66D` (Yellow circle).
   - Border: `1px solid #14140C`.
   - Icon: Dark heart outline `♡`.
3. **Filter Pills:**
   - Active: Solid Black background, White text.
   - Inactive: Cream background, `1.5px solid #14140C` border, Dark text.

### 4.3 Rotating Sunburst Seal / Badge

- Circular scalloped / starburst SVG emblem.
- Diameter: ~72px – 80px.
- Background: `#FFFFFF` or `#FDEEAF` with black border.
- Text: SVG `<textPath>` curving along circle: `• 2026 • RAYÉ • STRIPES • 2026 • RAYÉ • STRIPES •`.
- Center: 12-ray sunburst icon in `#EF5E4B` or `#EA8265`.
- Animation: Continuous 360-degree rotation (20s linear infinite).

### 4.4 Floating Quick-Action Toast

- Position: Fixed bottom center (`bottom-6 z-50`).
- Background: `#14140C` (Jet Black) with `1.5px solid #2A2A20`.
- Text: White, 13px Medium.
- Structure:
  - Left icon: Green or White checkmark `✓`.
  - Content: `Added [Product Name], size [Size]`.
  - Right link: `View bag` (underlined or muted yellow `#F7D66D`).
- Entrance: Slide up from `translateY(100%)` with spring easing.
- Duration: Visible for 4.0 seconds or until dismissed.

