# Rayé Data Models & Complete Catalog Dataset

This document defines the TypeScript schemas and complete mock JSON dataset for all products, customer reviews, sizing profiles, and site announcements seen in the video.

---

## 1. TypeScript Interfaces

```typescript
export type ShirtSleeveType = 'short_sleeve' | 'long_sleeve' | 'oversized';

export type ProductBadge = 'POPULAR' | 'NEW' | 'SALE' | 'LIMITED';

export type ColorFamily = 'Coral' | 'Teal' | 'Blue' | 'Yellow' | 'Earth' | 'Green' | 'Mono';

export type ShirtSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface ProductColorOption {
  name: string;
  family: ColorFamily;
  hex: string;
  isPrimary?: boolean;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  isVerifiedBuyer: boolean;
  rating: number; // 1 to 5
  title: string;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  kicker: string;
  price: number; // in BDT (৳)
  originalPrice?: number; // for SALE items
  badge?: ProductBadge;
  rating: number;
  reviewCount: number;
  description: string;
  sleeveType: ShirtSleeveType;
  inStock: boolean;
  colors: ProductColorOption[];
  sizes: ShirtSize[];
  images: {
    flatHanger: string;
    onModel: string;
    detailCloseUp?: string;
  };
  details: string[];
  fabricCare: string[];
  shippingNotes: string[];
  reviews: Review[];
}

export interface CartItem {
  productId: string;
  productName: string;
  slug: string;
  size: ShirtSize;
  color: string;
  price: number;
  quantity: number;
  image: string;
}
```

---

## 2. Complete 12-Shirt Catalog Mock Data

```json
[
  {
    "id": "raye-01",
    "slug": "lido-stripe",
    "name": "Lido Stripe",
    "kicker": "SHORT SLEEVE",
    "price": 2890,
    "badge": "NEW",
    "rating": 4.9,
    "reviewCount": 168,
    "description": "Candy stripes in deep teal, cut short in the sleeve and easy everywhere else. Throw it open over a tee.",
    "sleeveType": "short_sleeve",
    "inStock": true,
    "colors": [
      { "name": "Teal / White", "family": "Teal", "hex": "#1D594E", "isPrimary": true },
      { "name": "Coral / White", "family": "Coral", "hex": "#EF5E4B" }
    ],
    "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "images": {
      "flatHanger": "/images/products/lido-stripe-hanger.jpg",
      "onModel": "/images/products/lido-stripe-model.jpg"
    },
    "details": [
      "Camp collar (Cuban open neck)",
      "Relaxed, boxy cut with dropped shoulders",
      "Side hem vents for easy movement",
      "Real carved ocean shell buttons"
    ],
    "fabricCare": [
      "70% combed long-staple cotton, 30% Belgian flax linen",
      "Pre-washed with enzyme bath for soft hand-feel from day one",
      "Machine wash cold (30°C) with similar colours",
      "Line dry in the shade to preserve vibrant stripe contrast"
    ],
    "shippingNotes": [
      "Free delivery over ৳3,000 across Bangladesh",
      "Next-day courier dispatch inside Dhaka",
      "14-day hassle-free size exchanges",
      "Cash on Delivery (COD), bKash, and Nagad accepted"
    ],
    "reviews": [
      {
        "id": "rev-101",
        "author": "Rafi A.",
        "location": "Chattogram",
        "isVerifiedBuyer": true,
        "rating": 5,
        "title": "Perfect summer shirt",
        "comment": "Wore it on a 36° day in Agrabad and stayed cool. The fit is relaxed without looking sloppy.",
        "date": "2 weeks ago"
      },
      {
        "id": "rev-102",
        "author": "Sumaiya T.",
        "location": "Sylhet",
        "isVerifiedBuyer": true,
        "rating": 4,
        "title": "Size down if between sizes",
        "comment": "Lovely fabric. It runs a little roomy, so I swapped my L for an M and it was perfect.",
        "date": "1 month ago"
      },
      {
        "id": "rev-103",
        "author": "Imran K.",
        "location": "Khulna",
        "isVerifiedBuyer": true,
        "rating": 5,
        "title": "Got compliments all day",
        "comment": "Three people asked where it was from before lunch. The colour is even better in person.",
        "date": "2 months ago"
      }
    ]
  },
  {
    "id": "raye-02",
    "slug": "sunday-stripe",
    "name": "Sunday Stripe",
    "kicker": "SHORT SLEEVE",
    "price": 2890,
    "badge": "POPULAR",
    "rating": 5.0,
    "reviewCount": 214,
    "description": "Warm coral and peach awning stripes crafted for slow Sunday mornings and coastal breeze.",
    "sleeveType": "short_sleeve",
    "inStock": true,
    "colors": [
      { "name": "Coral / Peach", "family": "Coral", "hex": "#EF5E4B", "isPrimary": true },
      { "name": "Sage Green", "family": "Green", "hex": "#609966" }
    ],
    "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "images": {
      "flatHanger": "/images/products/sunday-stripe-hanger.jpg",
      "onModel": "/images/products/sunday-stripe-model.jpg"
    },
    "details": ["Camp collar", "Relaxed fit", "Side vents", "Real shell buttons"],
    "fabricCare": ["70% cotton, 30% linen", "Machine wash cold", "Warm iron"],
    "shippingNotes": ["Free delivery over ৳3,000", "Cash on delivery"],
    "reviews": []
  },
  {
    "id": "raye-03",
    "slug": "harbour-stripe",
    "name": "Harbour Stripe",
    "kicker": "LONG SLEEVE",
    "price": 2690,
    "rating": 4.9,
    "reviewCount": 94,
    "description": "Clean, fine nautical stripe in soft slate blue. Roll up the cuffs or wear buttoned to the collar.",
    "sleeveType": "long_sleeve",
    "inStock": true,
    "colors": [
      { "name": "Slate Blue", "family": "Blue", "hex": "#5B8FB9", "isPrimary": true },
      { "name": "Chalk White", "family": "Mono", "hex": "#E0E0E0" }
    ],
    "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "images": {
      "flatHanger": "/images/products/harbour-stripe-hanger.jpg",
      "onModel": "/images/products/harbour-stripe-model.jpg"
    },
    "details": ["Classic point collar", "Long sleeve with button barrel cuffs", "Chest pocket"],
    "fabricCare": ["Cotton-linen blend", "Gentle wash"],
    "shippingNotes": ["Available nationwide"],
    "reviews": []
  },
  {
    "id": "raye-04",
    "slug": "clay-stripe",
    "name": "Clay Stripe",
    "kicker": "LONG SLEEVE",
    "price": 2690,
    "badge": "NEW",
    "rating": 5.0,
    "reviewCount": 62,
    "description": "Rich terracotta and earth-clay stripes with an artisanal woven structure.",
    "sleeveType": "long_sleeve",
    "inStock": true,
    "colors": [
      { "name": "Terracotta Earth", "family": "Earth", "hex": "#A0522D", "isPrimary": true }
    ],
    "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "images": {
      "flatHanger": "/images/products/clay-stripe-hanger.jpg",
      "onModel": "/images/products/clay-stripe-model.jpg"
    },
    "details": ["Spread collar", "Single chest patch pocket", "Curved hem"],
    "fabricCare": ["Yarn-dyed cotton-linen", "Pre-washed"],
    "shippingNotes": ["Ships within 24 hours"],
    "reviews": []
  },
  {
    "id": "raye-05",
    "slug": "butter-stripe",
    "name": "Butter Stripe",
    "kicker": "SHORT SLEEVE",
    "price": 2590,
    "rating": 4.8,
    "reviewCount": 81,
    "description": "Subtle, sunny buttermilk yellow stripes on unbleached linen.",
    "sleeveType": "short_sleeve",
    "inStock": true,
    "colors": [
      { "name": "Butter Yellow", "family": "Yellow", "hex": "#F6D365", "isPrimary": true }
    ],
    "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "images": {
      "flatHanger": "/images/products/butter-stripe-hanger.jpg",
      "onModel": "/images/products/butter-stripe-model.jpg"
    },
    "details": ["Relaxed notch lapel", "Boxy fit", "Breathable weave"],
    "fabricCare": ["Cotton-linen blend"],
    "shippingNotes": ["Standard delivery 2-3 days"],
    "reviews": []
  },
  {
    "id": "raye-06",
    "slug": "ink-stripe",
    "name": "Ink Stripe",
    "kicker": "LONG SLEEVE",
    "price": 2790,
    "rating": 5.0,
    "reviewCount": 110,
    "description": "Monochrome charcoal and soft grey pinstripes. Understated yet sharp.",
    "sleeveType": "long_sleeve",
    "inStock": true,
    "colors": [
      { "name": "Ink Charcoal", "family": "Mono", "hex": "#2B2B2B", "isPrimary": true }
    ],
    "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "images": {
      "flatHanger": "/images/products/ink-stripe-hanger.jpg",
      "onModel": "/images/products/ink-stripe-model.jpg"
    },
    "details": ["Mandarin band collar", "Button placket", "Clean straight hem"],
    "fabricCare": ["Dry flat in shade"],
    "shippingNotes": ["COD available"],
    "reviews": []
  },
  {
    "id": "raye-07",
    "slug": "marina-stripe",
    "name": "Marina Stripe",
    "kicker": "SHORT SLEEVE",
    "price": 2590,
    "originalPrice": 2890,
    "badge": "SALE",
    "rating": 4.7,
    "reviewCount": 73,
    "description": "Classic bright maritime blue awning stripes on crisp white cotton-linen.",
    "sleeveType": "short_sleeve",
    "inStock": true,
    "colors": [
      { "name": "Marina Sky", "family": "Blue", "hex": "#4A90E2", "isPrimary": true }
    ],
    "sizes": ["S", "M", "L", "XL"],
    "images": {
      "flatHanger": "/images/products/marina-stripe-hanger.jpg",
      "onModel": "/images/products/marina-stripe-model.jpg"
    },
    "details": ["Camp collar", "Side vents", "Sale item"],
    "fabricCare": ["Machine wash cold"],
    "shippingNotes": ["Express shipping available"],
    "reviews": []
  },
  {
    "id": "raye-08",
    "slug": "pistachio-stripe",
    "name": "Pistachio Stripe",
    "kicker": "LONG SLEEVE",
    "price": 2790,
    "badge": "NEW",
    "rating": 4.9,
    "reviewCount": 49,
    "description": "Subtle green stripe inspired by pale Mediterranean herbs and coastal grass.",
    "sleeveType": "long_sleeve",
    "inStock": true,
    "colors": [
      { "name": "Pistachio Green", "family": "Green", "hex": "#8EA885", "isPrimary": true }
    ],
    "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "images": {
      "flatHanger": "/images/products/pistachio-stripe-hanger.jpg",
      "onModel": "/images/products/pistachio-stripe-model.jpg"
    },
    "details": ["Band collar", "Long sleeve", "Natural mother-of-pearl buttons"],
    "fabricCare": ["Hand wash or gentle cycle"],
    "shippingNotes": ["Next day delivery in Dhaka"],
    "reviews": []
  },
  {
    "id": "raye-09",
    "slug": "rust-bengal",
    "name": "Rust Bengal",
    "kicker": "LONG SLEEVE",
    "price": 3190,
    "badge": "LIMITED",
    "rating": 5.0,
    "reviewCount": 35,
    "description": "Bold alternating Bengal stripe in deep rust brown and warm sand. Limited edition release.",
    "sleeveType": "long_sleeve",
    "inStock": true,
    "colors": [
      { "name": "Rust Bengal", "family": "Earth", "hex": "#8B3A2B", "isPrimary": true }
    ],
    "sizes": ["S", "M", "L", "XL"],
    "images": {
      "flatHanger": "/images/products/rust-bengal-hanger.jpg",
      "onModel": "/images/products/rust-bengal-model.jpg"
    },
    "details": ["Heavyweight 220gsm cotton-linen", "Limited run of 150 pieces", "Numbering inside collar"],
    "fabricCare": ["Dry clean or hand wash"],
    "shippingNotes": ["Complimentary tracked courier"],
    "reviews": []
  },
  {
    "id": "raye-10",
    "slug": "seafoam-stripe",
    "name": "Seafoam Stripe",
    "kicker": "SHORT SLEEVE",
    "price": 2590,
    "rating": 4.9,
    "reviewCount": 142,
    "description": "Light, sea-mist green stripe designed to be knotted at the waist or worn oversized.",
    "sleeveType": "short_sleeve",
    "inStock": true,
    "colors": [
      { "name": "Seafoam Teal", "family": "Teal", "hex": "#3A8E82", "isPrimary": true }
    ],
    "sizes": ["XS", "S", "M", "L", "XL"],
    "images": {
      "flatHanger": "/images/products/seafoam-stripe-hanger.jpg",
      "onModel": "/images/products/seafoam-stripe-model.jpg"
    },
    "details": ["Relaxed shoulders", "Camp collar", "Side split hem"],
    "fabricCare": ["Pre-shrunk cotton-linen"],
    "shippingNotes": ["Free delivery over ৳3,000"],
    "reviews": []
  },
  {
    "id": "raye-11",
    "slug": "navy-pinstripe",
    "name": "Navy Pinstripe",
    "kicker": "LONG SLEEVE",
    "price": 2890,
    "rating": 4.8,
    "reviewCount": 88,
    "description": "Deep midnight navy canvas with needle-fine white vertical lines.",
    "sleeveType": "long_sleeve",
    "inStock": true,
    "colors": [
      { "name": "Midnight Navy", "family": "Blue", "hex": "#1B2A4A", "isPrimary": true }
    ],
    "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "images": {
      "flatHanger": "/images/products/navy-pinstripe-hanger.jpg",
      "onModel": "/images/products/navy-pinstripe-model.jpg"
    },
    "details": ["Button-down collar", "Long sleeve", "Pocket on left chest"],
    "fabricCare": ["Machine wash cold"],
    "shippingNotes": ["All Bangladesh coverage"],
    "reviews": []
  },
  {
    "id": "raye-12",
    "slug": "isla-stripe",
    "name": "Isla Stripe",
    "kicker": "OVERSIZED",
    "price": 2790,
    "badge": "NEW",
    "rating": 5.0,
    "reviewCount": 54,
    "description": "Multi-tone deckchair stripe combining coral, lemon, and aqua on a breezy loose silhouette.",
    "sleeveType": "oversized",
    "inStock": true,
    "colors": [
      { "name": "Deckchair Coral", "family": "Coral", "hex": "#EF5E4B", "isPrimary": true },
      { "name": "Lemon Yellow", "family": "Yellow", "hex": "#F7D66D" }
    ],
    "sizes": ["XS", "S", "M", "L", "XL"],
    "images": {
      "flatHanger": "/images/products/isla-stripe-hanger.jpg",
      "onModel": "/images/products/isla-stripe-model.jpg"
    },
    "details": ["Extra dropped shoulder", "Longer body length", "Camp collar"],
    "fabricCare": ["Machine wash gentle"],
    "shippingNotes": ["COD and bKash available"],
    "reviews": []
  }
]
```

---

## 3. Top Announcement Messages Rotation

```json
[
  { "id": "promo-1", "text": "FREE DELIVERY ON ORDERS OVER ৳3,000" },
  { "id": "promo-2", "text": "CASH ON DELIVERY ACROSS BANGLADESH" },
  { "id": "promo-3", "text": "USE RAYE10 FOR 10% OFF YOUR FIRST ORDER" }
]
```

---

## 4. Polaroid Deck Mood Cards (Section 04)

```json
[
  {
    "id": "mood-1",
    "title": "Weekend picnic",
    "subtitle": "Picnic plans, maximum stripe energy.",
    "image": "/images/lifestyle/mood-picnic.jpg",
    "hasShopLookButton": true,
    "buttonLabel": "Shop look ->",
    "productLink": "/product/butter-stripe"
  },
  {
    "id": "mood-2",
    "title": "Studio, but easy",
    "subtitle": "Calls at ten, lunch outside at one.",
    "image": "/images/lifestyle/mood-studio.jpg",
    "hasShopLookButton": false,
    "productLink": "/product/harbour-stripe"
  },
  {
    "id": "mood-3",
    "title": "Dockside",
    "subtitle": "Golden hour, salt in the air.",
    "image": "/images/lifestyle/mood-dockside.jpg",
    "hasShopLookButton": false,
    "productLink": "/product/clay-stripe"
  }
]
```

