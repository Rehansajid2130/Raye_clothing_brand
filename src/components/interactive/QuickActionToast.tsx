'use client';
// ponytail: Fixed bottom pill toast using zustand state. Self-dismisses after 3.5s or on click
import React, { useEffect } from 'react';
import { useCartStore } from '../../store/useCartStore';

export const QuickActionToast: React.FC = () => {
  const toastMessage = useCartStore((state) => state.toastMessage);
  const hideToast = useCartStore((state) => state.hideToast);
  const toggleCart = useCartStore((state) => state.toggleCart());

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage, hideToast]);

  if (!toastMessage) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3.5 bg-[#14140C] text-[#F8F4E9] px-5 py-2.5 rounded-full border-[1.5px] border-[#14140C] shadow-retro-md will-change-transform transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-retro-lg"
    >
      <span className="text-[13px] font-bold tracking-tight">
        {toastMessage}
      </span>
      <button
        onClick={() => {
          hideToast();
          toggleCart();
        }}
        className="px-3 py-1 rounded-full bg-[#F7D66D] text-[#14140C] text-[11px] font-black uppercase tracking-wider hover:bg-white transition-colors"
      >
        View bag
      </button>
      <button
        onClick={hideToast}
        aria-label="Close notification"
        className="text-[#F8F4E9]/60 hover:text-white text-xs pl-1 font-bold"
      >
        ✕
      </button>
    </div>
  );
};

