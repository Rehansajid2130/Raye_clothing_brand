'use client';
// ponytail: Accessible native dialog/modal with dual range sliders and real-time chest ease calculations
import React, { useState, useMemo } from 'react';
import { ShirtSize } from '../../types/product';
import { calculateShirtSize, FitPreference } from '../../utils/sizingAlgorithm';

interface FindYourSizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplySize: (size: ShirtSize) => void;
  currentSize?: ShirtSize;
}

export const FindYourSizeModal: React.FC<FindYourSizeModalProps> = ({
  isOpen,
  onClose,
  onApplySize,
  currentSize = 'M',
}) => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'chart'>('calculator');
  const [heightCm, setHeightCm] = useState(165);
  const [weightKg, setWeightKg] = useState(60);
  const [fit, setFit] = useState<FitPreference>('as_cut');
  const [selectedSizeOverride, setSelectedSizeOverride] = useState<ShirtSize | null>(null);

  // Compute recommendation dynamically
  const sizingResult = useMemo(() => {
    return calculateShirtSize(heightCm, weightKg, fit);
  }, [heightCm, weightKg, fit]);

  const activeSize = selectedSizeOverride || sizingResult.recommendedSize;

  if (!isOpen) return null;

  const handleApply = () => {
    onApplySize(activeSize);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sizeModalTitle"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14140C]/60 backdrop-blur-sm select-none"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[480px] bg-[#FBF8F1] border-2 border-[#14140C] rounded-[20px] shadow-retro-modal p-6 sm:p-7 animate-modal-pop text-[#14140C]"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#14140C]/10 mb-5">
          <h2 id="sizeModalTitle" className="font-extrabold text-[18px] text-[#14140C]">
            Find your size
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full border border-[#14140C] bg-white flex items-center justify-center hover:bg-[#EF5E4B] hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Top Segmented Tabs */}
        <div className="flex border-[1.5px] border-[#14140C] rounded-full p-1 bg-white mb-6">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex-1 py-1.5 text-xs font-black rounded-full transition-all ${
              activeTab === 'calculator'
                ? 'bg-[#14140C] text-white shadow-retro-sm'
                : 'text-[#14140C] hover:bg-black/5'
            }`}
          >
            Height & weight
          </button>
          <button
            onClick={() => setActiveTab('chart')}
            className={`flex-1 py-1.5 text-xs font-black rounded-full transition-all ${
              activeTab === 'chart'
                ? 'bg-[#14140C] text-white shadow-retro-sm'
                : 'text-[#14140C] hover:bg-black/5'
            }`}
          >
            Size chart
          </button>
        </div>

        {activeTab === 'calculator' ? (
          <>
            {/* Sliders Container with Mannequin Graphic */}
            <div className="grid grid-cols-[80px_1fr] gap-4 items-center mb-6">
              {/* Minimalist Yellow Mannequin SVG */}
              <div className="flex flex-col items-center justify-center p-2 bg-[#FDEEAF] rounded-xl border-[1.5px] border-[#14140C]">
                <svg className="w-12 h-28" viewBox="0 0 50 110" fill="none">
                  {/* Head */}
                  <circle cx="25" cy="14" r="8" fill="#F7D66D" stroke="#14140C" strokeWidth="2" />
                  {/* Torso Shirt */}
                  <path
                    d="M12 28 L25 32 L38 28 L44 42 L36 46 L34 70 L16 70 L14 46 L6 42 Z"
                    fill="#EF5E4B"
                    stroke="#14140C"
                    strokeWidth="2"
                  />
                  {/* Chest Ease Indicator Line */}
                  <line x1="8" y1="48" x2="42" y2="48" stroke="#14140C" strokeWidth="1.5" strokeDasharray="2 2" />
                  {/* Legs */}
                  <line x1="20" y1="70" x2="18" y2="102" stroke="#14140C" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="30" y1="70" x2="32" y2="102" stroke="#14140C" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <span className="text-[9px] font-black uppercase tracking-wider text-[#14140C] mt-1">
                  RAYÉ FIT
                </span>
              </div>

              {/* Range Sliders */}
              <div className="space-y-4">
                {/* 1. Height Slider */}
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-[11px] font-black tracking-wider uppercase text-[#14140C]">
                      Height
                    </span>
                    <span className="text-[16px] font-extrabold text-[#14140C]">
                      {heightCm} <span className="text-[11px] font-semibold text-[#676358]">cm</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setHeightCm((h) => Math.max(150, h - 1))}
                      className="w-6 h-6 rounded-full border border-[#14140C] bg-white flex items-center justify-center font-bold text-xs hover:bg-[#F7D66D]"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min={150}
                      max={200}
                      value={heightCm}
                      onChange={(e) => setHeightCm(Number(e.target.value))}
                      className="w-full accent-[#EF5E4B] cursor-pointer h-2 bg-[#E5E0D8] rounded-lg"
                    />
                    <button
                      onClick={() => setHeightCm((h) => Math.min(200, h + 1))}
                      className="w-6 h-6 rounded-full border border-[#14140C] bg-white flex items-center justify-center font-bold text-xs hover:bg-[#F7D66D]"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* 2. Weight Slider */}
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-[11px] font-black tracking-wider uppercase text-[#14140C]">
                      Weight
                    </span>
                    <span className="text-[16px] font-extrabold text-[#14140C]">
                      {weightKg} <span className="text-[11px] font-semibold text-[#676358]">kg</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setWeightKg((w) => Math.max(45, w - 1))}
                      className="w-6 h-6 rounded-full border border-[#14140C] bg-white flex items-center justify-center font-bold text-xs hover:bg-[#F7D66D]"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min={45}
                      max={115}
                      value={weightKg}
                      onChange={(e) => setWeightKg(Number(e.target.value))}
                      className="w-full accent-[#EF5E4B] cursor-pointer h-2 bg-[#E5E0D8] rounded-lg"
                    />
                    <button
                      onClick={() => setWeightKg((w) => Math.min(115, w + 1))}
                      className="w-6 h-6 rounded-full border border-[#14140C] bg-white flex items-center justify-center font-bold text-xs hover:bg-[#F7D66D]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Fit Preference ("HOW YOU LIKE IT") */}
            <div className="mb-6">
              <span className="block text-[11px] font-black uppercase tracking-wider text-[#14140C] mb-2">
                HOW YOU LIKE IT
              </span>
              <div className="flex border-[1.5px] border-[#14140C] rounded-full p-1 bg-white">
                {(['close', 'as_cut', 'roomy'] as FitPreference[]).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => {
                      setFit(mode);
                      setSelectedSizeOverride(null);
                    }}
                    className={`flex-1 py-1 text-xs font-bold rounded-full capitalize transition-all ${
                      fit === mode
                        ? 'bg-[#14140C] text-white shadow-retro-sm'
                        : 'text-[#14140C] hover:bg-black/5'
                    }`}
                  >
                    {mode === 'as_cut' ? 'As cut' : mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Yellow Recommendation Card */}
            <div className="p-4 bg-[#F7D66D] border-[1.5px] border-[#14140C] rounded-xl mb-6 shadow-retro-sm flex items-center justify-between gap-4">
              <div>
                <span className="block text-[10px] font-black uppercase tracking-wider text-[#14140C]/80">
                  RECOMMENDED SIZE
                </span>
                <span className="font-extrabold text-[36px] leading-none text-[#14140C]">
                  {activeSize}
                </span>
                <p className="text-[11px] font-bold text-[#14140C] mt-1">
                  {sizingResult.garmentChestCm} cm across chest
                </p>
                <p className="text-[10px] text-[#14140C]/80 font-medium">
                  {sizingResult.drapeDescription}
                </p>
              </div>

              {/* Size Buttons Strip */}
              <div className="grid grid-cols-3 gap-1">
                {(['XS', 'S', 'M', 'L', 'XL', 'XXL'] as ShirtSize[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSizeOverride(s)}
                    className={`px-2 py-1 text-[11px] font-black rounded border border-[#14140C] transition-all ${
                      activeSize === s
                        ? 'bg-[#14140C] text-white'
                        : 'bg-white text-[#14140C] hover:bg-white/80'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Size Chart Table */
          <div className="overflow-x-auto mb-6 text-xs border border-[#14140C] rounded-xl bg-white p-3">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#14140C]">
                  <th className="p-2 font-black">Size</th>
                  <th className="p-2 font-black">Shirt Chest</th>
                  <th className="p-2 font-black">Body Chest</th>
                  <th className="p-2 font-black">Length</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-2 font-bold">XS</td><td className="p-2">100 cm</td><td className="p-2">~88 cm</td><td className="p-2">71 cm</td></tr>
                <tr><td className="p-2 font-bold">S</td><td className="p-2">106 cm</td><td className="p-2">~91 cm</td><td className="p-2">72 cm</td></tr>
                <tr><td className="p-2 font-bold">M</td><td className="p-2">112 cm</td><td className="p-2">~96 cm</td><td className="p-2">74 cm</td></tr>
                <tr><td className="p-2 font-bold">L</td><td className="p-2">118 cm</td><td className="p-2">~102 cm</td><td className="p-2">76 cm</td></tr>
                <tr><td className="p-2 font-bold">XL</td><td className="p-2">124 cm</td><td className="p-2">~108 cm</td><td className="p-2">78 cm</td></tr>
                <tr><td className="p-2 font-bold">XXL</td><td className="p-2">130 cm</td><td className="p-2">~114 cm</td><td className="p-2">80 cm</td></tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Primary CTA */}
        <button
          onClick={handleApply}
          className="w-full py-3.5 px-6 rounded-full bg-[#174A41] text-white font-extrabold text-[14px] flex items-center justify-between border-[1.5px] border-[#14140C] shadow-retro-md hover:-translate-y-0.5 active:translate-y-0 transition-all"
        >
          <span>Use size {activeSize}</span>
          <span className="w-6 h-6 rounded-full bg-[#EF5E4B] text-white flex items-center justify-center text-xs font-black">
            ✓
          </span>
        </button>
      </div>
    </div>
  );
};

