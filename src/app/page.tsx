'use client';
// ponytail: Clean single root page composition. All subcomponents keep single responsibilities
import React from 'react';
import { AnnouncementBar } from '../components/layout/AnnouncementBar';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/home/HeroSection';
import { MarqueeTicker } from '../components/layout/MarqueeTicker';
import { ProductGridSection } from '../components/home/ProductGridSection';
import { QuickActionToast } from '../components/interactive/QuickActionToast';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F4E9] text-[#14140C] flex flex-col font-sans selection:bg-[#EF5E4B] selection:text-white">
      {/* 1. Cycling Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Sticky Coral Header */}
      <Navbar />

      {/* 3. 50/50 Split Hero with Floating Sunburst Seal */}
      <HeroSection />

      {/* 4. Infinite Marquee Ticker */}
      <MarqueeTicker />

      {/* 5. Section 02: THE EDIT / 02 - Product Grid with Quick Add */}
      <ProductGridSection />

      {/* 6. Floating Action Toast */}
      <QuickActionToast />
    </main>
  );
}

