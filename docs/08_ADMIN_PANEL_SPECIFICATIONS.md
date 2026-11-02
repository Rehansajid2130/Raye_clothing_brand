# Rayé Admin Panel — Architecture & Operational Specifications

This document defines the back-office management system for **Rayé** (accessible locally via [`admin.html`](file:///c:/Users/lenovo/Desktop/web2api/raye-store-spec/admin.html) and [`admin/index.html`](file:///c:/Users/lenovo/Desktop/web2api/raye-store-spec/admin/index.html), matching the live reference at `https://demo.codeandchill.store/raye/admin/`).

---

## 1. Executive Summary & Design Archetype

The Rayé Admin is a high-speed, tactile, responsive Single Page Application (SPA) designed to manage daily storefront operations, sales performance, fulfillment pipelines, catalog inventory, customer intelligence, and fit engine insights.

- **Design Philosophy:** Soft-editorial modernism paired with tactile retro-brutalist accents. Smooth glassmorphic backdrops, pill navigation, pastel stage status indicators, real-time spline chart visualizations, and drag-and-drop Kanban interaction.
- **Theme Modes:** Native **Light Mode** (airy mist teal `#e4ecea` backdrop) and **Dark Mode** (`#161616` ink backdrop), persistent in `localStorage('raye:admin:v1')`.
- **Primary Font:** **Urbanist** (Weights 400 through 700).
- **Core Currency:** Bangladeshi Taka (`৳` BDT) with local currency formatting (`৳6,88,240`).

---

## 2. Navigation Architecture & Global Shell

### 2.1 Top Navigation Bar
- **Brand Identity:** Terracotta rounded square with bold serif `R`, followed by `rayé admin`.
- **Section Tabs:**
  - `Overview` (`#/overview`)
  - `Orders` (`#/orders`)
  - `Products` (`#/products`)
  - `Customers` (`#/customers`)
  - `Fit` (`#/fit`)
  - `Promotions` (`#/promos`)
- **Utility Actions:**
  - **View shop** (`btn btn--ghost btn--sm top__shop`): Navigates back to storefront (`./index.html`).
  - **Notifications Bell:** Unread badge counter with glassmorphic dropdown:
    - Order status updates (`● Order RY-51060 confirmed`)
    - Stock alerts (`● Sunday Stripe XS running low: 2 left`)
    - Action: `Mark all as read`.
  - **Account Avatar (`RA`):** Profile menu with settings and storefront navigation.

### 2.2 Left Tactile Dock (Floating Control Capsule)
A vertical pill dock fixed to the left viewport margin providing fast shortcuts:
1. **Search (`⌘K`):** Opens unified spotlight finder modal (searches Orders, Shirts, Customers, Pages).
2. **Quick Create (`+`):** Popover options:
   - *New discount code* (`#/promos?new=1`)
   - *Restock a shirt* (`#/products?filter=low`)
   - *Orders to pack* (`#/orders`)
3. **Bag Icon:** Instant link to Orders Kanban (`#/orders`).
4. **Ruler Icon:** Direct link to Sizing & Fit Insights (`#/fit`).
5. **Storefront Icon:** Product catalog & inventory manager (`#/products`).
6. **Gear Icon:** Back office settings (`#/settings`).
7. **Theme Switcher (`Moon` / `Sun`):** Instant toggle between Light & Dark themes with zero page flicker.

---

## 3. View Specifications & Features

### 3.1 Overview Dashboard (`#/overview`)
- **Key Metrics Row:**
  - *Sales in October:* `৳6,88,240` with percentage change badge (`+9% vs September`).
  - *Orders to Pack:* `13 Orders to pack`.
  - *Average Order Value:* `৳4,263 Average order`.
- **Interactive Sales Spline Chart:**
  - Timeframe selector: `6M` vs `12M` rolling view.
  - Performance context: `৳70,58,430 in 12 months · 6 of 12 months at target`.
  - Target benchmark: `--- Monthly target · ৳6.50L`.
  - Smooth SVG Bézier curve with gradient area fill and active point hover tooltip (e.g. `Mar: Sales ৳5,04,070, Target ৳6,50,000`).
- **"To Pack" Immediate Action Queue:**
  - Real-time horizontal card carousel showing orders waiting for fulfillment.
  - Card anatomy: Stage pill (`New`, `Packing`), order timestamp, customer name, district, item badges with shirt preview thumbnail, total amount, and quick click to open detail.
- **Operational Performance Widgets:**
  - *Drop 03 · Rust Bengal:* Progress doughnut ring showing units sold (`47 of 60 sold`).
  - *Sales by Cut:* Proportional share of monthly revenue across categories (Relaxed, Camp collar, Long sleeve, Oversized).
  - *Best Sellers:* Ranked horizontal progress bars with unit volume and total revenue (Lido Stripe, Sunday Stripe, Butter Stripe, Clay Stripe, Seafoam Stripe).
  - *Running Low:* Inventory alert list for sizes at 3 units or fewer with inline `Restock` shortcut.

### 3.2 Orders Kanban & Table (`#/orders`)
- **Interactive Drag & Drop Board:**
  - 4 Main Stages:
    1. **New** (Blue accent `#9fc3e0`)
    2. **Packing** (Coral accent `#ff6b4a`)
    3. **Shipped** (Teal accent `#0e4f4b`)
    4. **Delivered** (Violet accent `#1f2f4f`)
  - **Returns & Restock Slot:** Dragging any card into this slot triggers automatic inventory incrementation and registers return status.
- **Tactile Drag Physics:**
  - Lift animation with subtle rotation (`-2.5deg`), scale (`1.03`), and elevation shadow.
  - Destination drop column highlights with hover state.
- **Card Context Actions:**
  - `Open order`
  - `Move to [Next Stage]`
  - `Return and restock`
- **List / Table View Alternative (`#/orders?view=list`):**
  - Sortable columns: Order ID, Customer Name, District, Date/Time, Items, Total, Payment Method, Status.
- **Order Detail Drawer (`#/orders/:id`):**
  - Full shipping address, customer contact, items breakdown, payment rail verification (COD, bKash, Nagad), and audit event log.

### 3.3 Product Catalog & Stock Controller (`#/products`)
- **Filtering Pills:** `All shirts`, `Low stock`, `Best sellers`, `Out of stock`.
- **Item Breakdown Rows:**
  - High-res product thumbnail, shirt title, cut family, retail price (`৳2,890`).
  - Total on-hand inventory tally.
  - Size matrix (`XS`, `S`, `M`, `L`, `XL`, `XXL`): Displays real-time quantity per size with instant inline `+` / `-` adjustment steppers.
  - Restock action modal with custom batch quantities.

### 3.4 Customer Relationship Management (`#/customers`)
- **KPI Metrics:**
  - Total Customers (e.g. `36 Customers`).
  - Retention Rate (`72% Came back for another`).
  - High-Value VIPs (`8 VIPs, over ৳16,000 spent`).
- **Filter Pills:** `Everyone`, `VIP`, `Regular`, `New`.
- **Live Search Input:** Instant debounced filter across customer names, email addresses, and Bangladeshi districts (Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Mymensingh).
- **Customer Ledger Table:**
  - Monogram avatar with district initials.
  - Full name & verified email.
  - Home district.
  - Lifetime order count.
  - Cumulative spend (sortable).
  - Last purchase date.
  - Dynamic status tag (`VIP`, `Regular`, `New`).

### 3.5 Fit Engine Intelligence (`#/fit`)
- Harnesses data captured from the interactive storefront Sizing Calculator ([`05_INTERACTIVE_SIZE_CALCULATOR.md`](file:///c:/Users/lenovo/Desktop/web2api/raye-store-spec/05_INTERACTIVE_SIZE_CALCULATOR.md)):
  - Customer height & weight distribution histograms.
  - Sizing recommendation accuracy and return rates by size.
  - Fit preference breakdown (snug vs relaxed drape).

### 3.6 Promotions & Discount Codes (`#/promos`)
- Active promotion code matrix (Code name, discount percentage/fixed value, eligibility rules, usage counter).
- Quick modal to create single-use or sitewide marketing codes.

### 3.7 Back Office Settings (`#/settings`)
- **Store Configuration:** Store name, notification emails, support telephone, operational currency.
- **Inventory Threshold:** Dynamic stepper for `lowStock` trigger level (default: 3 units).
- **Logistics & Delivery:** Inside Dhaka fee (`৳70`), Outside Dhaka fee (`৳130`), Free delivery threshold (`৳5,000`).
- **Payment Rails:** Toggle switches for Cash on Delivery, bKash, Nagad, and Cards.
- **Appearance & Demo Reset:** Light / Dark theme picker, and one-click `Reset everything` factory reset.

---

## 4. Local File Mapping & Deployment

| File | Purpose |
| :--- | :--- |
| [`admin.html`](file:///c:/Users/lenovo/Desktop/web2api/raye-store-spec/admin.html) | Root entry point for opening the admin panel directly in any browser. |
| [`admin/index.html`](file:///c:/Users/lenovo/Desktop/web2api/raye-store-spec/admin/index.html) | Subdirectory entry point matching `demo.codeandchill.store/raye/admin/`. |
| [`admin_index.js`](file:///c:/Users/lenovo/Desktop/web2api/raye-store-spec/admin_index.js) | Complete bundled application logic, router, state store, drag & drop handlers. |
| [`admin_index.css`](file:///c:/Users/lenovo/Desktop/web2api/raye-store-spec/admin_index.css) | Complete responsive stylesheet supporting both Light & Dark modes. |
| [`fitEngine-CgMI6p5E.js`](file:///c:/Users/lenovo/Desktop/web2api/raye-store-spec/fitEngine-CgMI6p5E.js) | Product catalog, sizing model, inventory records, and photo CDN endpoints. |
| [`08_ADMIN_PANEL_SPECIFICATIONS.md`](file:///c:/Users/lenovo/Desktop/web2api/raye-store-spec/08_ADMIN_PANEL_SPECIFICATIONS.md) | Architectural and design specification document. |

