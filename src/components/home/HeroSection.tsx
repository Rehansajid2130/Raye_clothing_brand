// ponytail: Pure CSS grid split, native SVG illustrations, and high-contrast typography hierarchy
import React from 'react';
import { SunburstBadge } from './SunburstBadge';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative border-b-2 border-[#14140C] bg-[#EF5E4B] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px] lg:min-h-[640px]">
        {/* Left Column: Bold Terracotta Editorial Block */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-20 bg-[#EF5E4B] z-10">
          {/* Kicker */}
          <div className="mb-4">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.14em] text-[#14140C] bg-[#F7D66D] px-2.5 py-1 rounded-full border border-[#14140C] shadow-retro-sm">
              STRIPES, REDRAWN — 2026
            </span>
          </div>

          {/* Stacked Display Headline */}
          <h1 className="font-extrabold text-[46px] sm:text-[56px] lg:text-[68px] leading-[0.92] tracking-[-0.03em] text-[#14140C] mb-6">
            <span className="block">Stripes</span>
            <span className="block">that</span>
            <span className="block">walk in</span>
            <span
              className="block font-serif italic font-normal text-[52px] sm:text-[64px] lg:text-[76px] mt-1 text-[#14140C]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              first.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-[15px] sm:text-[16px] text-[#14140C]/90 font-medium leading-relaxed max-w-[420px] mb-8">
            Easy summer shirts in breathable cotton-linen. Bold stripes, relaxed cuts, and colours borrowed from the coast.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href="#the-edit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#14140C] text-[#F8F4E9] font-bold text-[13px] border-[1.5px] border-[#14140C] shadow-retro-md hover:-translate-y-1 hover:shadow-retro-lg active:translate-y-0.5 active:shadow-retro-sm transition-all duration-200 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
            >
              <span>Shop the stripes</span>
              <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a
              href="#new-in"
              className="inline-flex items-center px-5 py-3 rounded-full bg-transparent text-[#14140C] font-bold text-[13px] border-[1.5px] border-[#14140C] hover:bg-[#14140C] hover:text-[#F8F4E9] hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-200 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
            >
              See what&apos;s new
            </a>
          </div>
        </div>

        {/* Right Column: Coastal Sky Blue Lifestyle Illustration / Media */}
        <div className="relative bg-[#4A90E2] border-t-2 lg:border-t-0 lg:border-l-[1.5px] border-[#14140C] min-h-[380px] lg:min-h-full flex items-center justify-center overflow-hidden">
          {/* Coastal Retro Geometric Sun & Sky Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#5FA3EF] to-[#3B82D6] opacity-90" />
          
          {/* Subtle Sun Radiance */}
          <div className="absolute -top-12 -right-12 w-96 h-96 bg-[#F7D66D]/30 rounded-full blur-3xl pointer-events-none" />

          {/* Stylized Coastal Scene SVG (High fidelity editorial vector) */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 text-center">
            {/* Editorial Shirt & Citrus Scene Representation */}
            <div className="relative w-[280px] sm:w-[340px] aspect-[4/5] bg-[#F8F4E9] rounded-2xl border-2 border-[#14140C] shadow-retro-md overflow-hidden flex flex-col items-center justify-between p-6 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-retro-lg hover:-rotate-0.5">
              {/* Awning stripe pattern inside card */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #14140C 0, #14140C 12px, transparent 12px, transparent 24px)',
                }}
              />

              {/* Top Tag */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EF5E4B] text-white border border-[#14140C]">
                  RAYÉ EDITORIAL
                </span>
                <span className="text-[11px] font-mono font-bold text-[#14140C]">01 / 12</span>
              </div>

              {/* Stylized Shirt & Fresh Citrus Vector */}
              <div className="relative z-10 my-auto flex flex-col items-center">
                <svg className="w-36 h-36" viewBox="0 0 160 160" fill="none">
                  {/* Camp collar striped shirt */}
                  <path
                    d="M35 55 L55 35 L80 50 L105 35 L125 55 L115 130 L45 130 Z"
                    fill="#FDEEAF"
                    stroke="#14140C"
                    strokeWidth="3"
                  />
                  {/* Stripes */}
                  <line x1="60" y1="45" x2="55" y2="130" stroke="#EF5E4B" strokeWidth="4" />
                  <line x1="75" y1="48" x2="72" y2="130" stroke="#EF5E4B" strokeWidth="4" />
                  <line x1="90" y1="48" x2="89" y2="130" stroke="#EF5E4B" strokeWidth="4" />
                  <line x1="105" y1="45" x2="105" y2="130" stroke="#EF5E4B" strokeWidth="4" />
                  {/* Open Camp Collar */}
                  <polygon points="55,35 80,68 62,62" fill="#F8F4E9" stroke="#14140C" strokeWidth="2.5" />
                  <polygon points="105,35 80,68 98,62" fill="#F8F4E9" stroke="#14140C" strokeWidth="2.5" />
                  {/* Shell buttons */}
                  <circle cx="80" cy="85" r="2.5" fill="#FFFFFF" stroke="#14140C" strokeWidth="1.5" />
                  <circle cx="80" cy="105" r="2.5" fill="#FFFFFF" stroke="#14140C" strokeWidth="1.5" />
                </svg>

                {/* Fresh mandarins cluster */}
                <div className="flex -mt-3 gap-1.5 items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#FF7A00] border-2 border-[#14140C] shadow-retro-sm relative">
                    <span className="absolute -top-1 left-3 w-1.5 h-2 bg-[#609966] rounded-full" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#FFA048] border-2 border-[#14140C] shadow-retro-sm relative">
                    <span className="absolute -top-1 left-2.5 w-1.5 h-2 bg-[#609966] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="relative z-10 w-full text-center">
                <p className="text-[13px] font-bold text-[#14140C]">Sunday Stripe in Mandarins</p>
                <p className="text-[11px] text-[#676358] font-medium">100% Breathable Cotton-Linen</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Center Sunburst Badge (Centered between left and right column on desktop) */}
      <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <SunburstBadge />
      </div>
    </section>
  );
};

