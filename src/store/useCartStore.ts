// ponytail: Simple atomic state store using zustand. Zero bloat, instant reactive updates across navbar & cards
import { create } from 'zustand';
import { Product, ShirtSize, CartItem } from '../types/product';

interface CartState {
  items: CartItem[];
  toastMessage: string | null;
  isCartOpen: boolean;
  
  // Actions
  addItem: (product: Product, size: ShirtSize) => void;
  removeItem: (productId: string, size: ShirtSize) => void;
  showToast: (message: string) => void;
  hideToast: () => void;
  toggleCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  toastMessage: null,
  isCartOpen: false,

  addItem: (product: Product, size: ShirtSize) => {
    set((state) => {
      const existingIndex = state.items.findIndex(
        (i) => i.product.id === product.id && i.size === size
      );

      if (existingIndex > -1) {
        const updated = [...state.items];
        updated[existingIndex].quantity += 1;
        return { items: updated };
      }

      return {
        items: [...state.items, { product, size, quantity: 1 }],
      };
    });
  },

  removeItem: (productId: string, size: ShirtSize) => {
    set((state) => ({
      items: state.items.filter(
        (i) => !(i.product.id === productId && i.size === size)
      ),
    }));
  },

  showToast: (message: string) => {
    set({ toastMessage: message });
  },

  hideToast: () => {
    set({ toastMessage: null });
  },

  toggleCart: () => {
    set((state) => ({ isCartOpen: !state.isCartOpen }));
  },

  totalItems: () => {
    return get().items.reduce((sum, item) => sum + item.quantity, 0);
  },

  totalPrice: () => {
    return get().items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  },
}));

