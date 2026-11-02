// ponytail: Minimal type surface covering all catalog and cart requirements without over-abstraction
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
  price: number; // BDT ৳
  originalPrice?: number;
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
  product: Product;
  size: ShirtSize;
  quantity: number;
}

