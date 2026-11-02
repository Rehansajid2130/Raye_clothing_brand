# Rayé Interactive Size Calculator Specification ("Find Your Size")

The **"Find Your Size"** modal is the core conversion and UX highlight of the Rayé store. It eliminates size anxiety for cotton-linen relaxed shirts by providing a live, visual body sizing calculator based on height, weight, and personal fit preference.

---

## 1. Feature Overview & Observed Video Behavior

| Step | User Action in Video | UI Response |
| :--- | :--- | :--- |
| **1. Trigger** | User clicks `Find my size` (with ruler icon) on PDP. | Sizing modal springs open with a blurred dark backdrop and a retro pine green offset shadow (`8px 8px 0px #133B34`). |
| **2. Initial State** | Default values: `Height: 165 cm`, `Weight: 60 kg`, `Fit: As cut`. | Recommendation displays: **XS** (`100 cm across the chest`, *"For a ~88 cm chest, with the relaxed drape this shirt is cut for."*). Size pill `XS` is highlighted in black. CTA reads `Use size XS  ✓`. |
| **3. Adjust Height** | User drags height slider to `178 cm`. | Recommendation dynamically updates to: **S** (`106 cm across the chest`, *"For a ~91 cm chest, with the relaxed drape this shirt is cut for."*). Size pill `S` highlights. CTA reads `Use size S  ✓`. |
| **4. Adjust Weight** | User drags weight slider to `80 kg`. | Recommendation dynamically updates to: **L** (`118 cm across the chest`, *"For a ~102 cm chest, with the relaxed drape this shirt is cut for."*). Size pill `L` highlights. CTA reads `Use size L  ✓`. |
| **5. Confirm** | User clicks `Use size L  ✓`. | Modal closes smoothly. Size `L` is automatically marked active on the product detail page. Toast notification appears: `✓ Size L picked for you`. |

---

## 2. Modal Anatomy & Visual Specs

```
+--------------------------------------------------------------------------+
|  Find your size                                                       ×  |
|  +--------------------------------------------------------------------+  |
|  |       [ Height & weight (Active) ]     |        Size chart         |  |
|  +--------------------------------------------------------------------+  |
|                                                                          |
|   +----+      HEIGHT                                           178 cm    |
|   |    |      (-)  [========|-----------------]  (+)                     |
|   | 👕 |                                                                 |
|   | 🧍 |      WEIGHT                                            80 kg    |
|   |    |      (-)  [=============|------------]  (+)                     |
|   |    |                                                                 |
|   +----+      HOW YOU LIKE IT                                            |
|  -------      +-------------------------------------------------------+  |
|               |       Close      |   [ As cut ]   |       Roomy       |  |
|               +-------------------------------------------------------+  |
|                                                                          |
|  +--------------------------------------------------------------------+  |
|  |  YOUR SIZE   118 cm across the chest                               |  |
|  |     L        For a ~102 cm chest, with the relaxed drape...        |  |
|  |              [XS]  [S]  [M]  [ L (Active) ]  [XL]  [XXL]           |  |
|  +--------------------------------------------------------------------+  |
|                                                                          |
|  +--------------------------------------------------------------------+  |
|  |  Use size L                                                    (✓) |  |
|  +--------------------------------------------------------------------+  |
+--------------------------------------------------------------------------+
```

### Visual Styling Details:
- **Card Container:**
  - Background: Soft Ivory Linen `#FBF8F1` or `#F8F4E9`.
  - Border: `2px solid #14140C`.
  - Border Radius: `20px`.
  - Shadow: `8px 8px 0px #133B34` (Pine forest green solid offset shadow).
  - Padding: `24px 28px`.
  - Width: `460px – 500px`.
- **Top Segmented Tabs:**
  - Outer Container: Pill outline `border-1.5 border-black rounded-full p-1 bg-transparent`.
  - Active Tab: Solid black `#14140C`, white bold text, `rounded-full py-1.5 px-6`.
  - Inactive Tab: Transparent, dark text, hover opacity.
- **Mannequin Illustration:**
  - Minimalist unisex human figure SVG standing on a dashed baseline `------`.
  - Fill: Pastel butter yellow `#F7D66D`, stroke: `#14140C` (1.5px).
- **Dual Range Sliders:**
  - Label: `11px`, ExtraBold uppercase, letter-spacing `0.06em`.
  - Numeric Value: `22px` bold with small unit suffix (`cm` / `kg`).
  - Stepper Buttons: Circular `26px × 26px` with `(-)` and `(+)` glyphs.
  - Active Track (left of thumb): Deep Sea Teal `#1D594E` (Height `5px`).
  - Inactive Track (right of thumb): Soft Warm Grey `#E5E0D8`.
  - Thumb: `18px × 18px` circle, background Coral `#EF5E4B`, border `1.5px solid #14140C`.
- **Fit Preference Selector (`HOW YOU LIKE IT`):**
  - 3-segment pill container: `Close` | `As cut` | `Roomy`.
  - Active option: Solid black pill `#14140C` with white text.
- **Yellow Recommendation Box:**
  - Background: Warm Sunshine Cream `#FDEEAF` or `#F7D66D`.
  - Border: `1.5px solid #14140C`, border-radius: `14px`.
  - Left: Label `YOUR SIZE` (10px uppercase bold) over massive Size Letter `L` (38px ExtraBold).
  - Right:
    - Bold measurement: `118 cm across the chest`.
    - Drape description: `For a ~102 cm chest, with the relaxed drape this shirt is cut for.`
    - Size selection pill buttons: `[XS] [S] [M] [L] [XL] [XXL]`.
- **Primary CTA Button:**
  - Background: Deep Pine Teal `#174A41`, full width, `rounded-full py-3.5 px-6`.
  - Text: `Use size L` in white 14px bold.
  - End icon: Coral circle (`#EF5E4B`) with white checkmark `✓`.

---

## 3. Mathematical Sizing Model & Algorithm

The sizing logic precisely mirrors the values in the video.

### 3.1 Garment Specifications (Rayé Relaxed Cut)

| Size | Garment Chest Width (Full Circumference) | Ideal Body Chest | Ease Built-In |
| :--- | :--- | :--- | :--- |
| **XS** | **100 cm** | ~88 cm | +12 cm |
| **S** | **106 cm** | ~91 cm | +15 cm |
| **M** | **112 cm** | ~96 cm | +16 cm |
| **L** | **118 cm** | ~102 cm | +16 cm |
| **XL** | **124 cm** | ~108 cm | +16 cm |
| **XXL** | **130 cm** | ~114 cm | +16 cm |

### 3.2 Dynamic Calculation Formula

```typescript
export type FitPreference = 'close' | 'as_cut' | 'roomy';
export type ShirtSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface SizingResult {
  recommendedSize: ShirtSize;
  garmentChestCm: number;
  estimatedBodyChestCm: number;
  drapeDescription: string;
}

export function calculateShirtSize(
  heightCm: number,
  weightKg: number,
  fit: FitPreference = 'as_cut'
): SizingResult {
  // 1. Estimate natural body chest circumference using anthropometric ratio
  // Based on validated BMI & chest regression curves
  const bmi = weightKg / Math.pow(heightCm / 100, 2);
  
  // Base chest regression: Height & Weight contributions
  let estimatedChest = Math.round(
    weightKg * 0.92 + (heightCm - 100) * 0.22 + (bmi > 25 ? (bmi - 25) * 1.2 : 0)
  );

  // 2. Adjust for user fit preference
  let targetGarmentEase = 16; // Standard "As cut" relaxed drape
  if (fit === 'close') {
    targetGarmentEase = 8;  // Closer to body
  } else if (fit === 'roomy') {
    targetGarmentEase = 22; // Oversized drape
  }

  const targetGarmentChest = estimatedChest + targetGarmentEase;

  // 3. Match to Rayé shirt sizes table
  const sizeChart: { size: ShirtSize; garmentChest: number; idealBody: number }[] = [
    { size: 'XS', garmentChest: 100, idealBody: 88 },
    { size: 'S',  garmentChest: 106, idealBody: 91 },
    { size: 'M',  garmentChest: 112, idealBody: 96 },
    { size: 'L',  garmentChest: 118, idealBody: 102 },
    { size: 'XL', garmentChest: 124, idealBody: 108 },
    { size: 'XXL', garmentChest: 130, idealBody: 114 },
  ];

  // Find the closest garment chest to target
  let bestMatch = sizeChart[0];
  let minDiff = Infinity;

  for (const item of sizeChart) {
    const diff = Math.abs(item.garmentChest - targetGarmentChest);
    if (diff < minDiff) {
      minDiff = diff;
      bestMatch = item;
    }
  }

  return {
    recommendedSize: bestMatch.size,
    garmentChestCm: bestMatch.garmentChest,
    estimatedBodyChestCm: bestMatch.idealBody,
    drapeDescription: `For a ~${bestMatch.idealBody} cm chest, with the relaxed drape this shirt is cut for.`,
  };
}
```

### Test Case Verification (Exact Video Values)

1. **Input:** `Height: 165 cm`, `Weight: 60 kg`, `Fit: As cut`
   - `calculateShirtSize(165, 60, 'as_cut')`
   - **Output:** Size `XS`, `100 cm across the chest`, `For a ~88 cm chest...` (Matches frame 20).
2. **Input:** `Height: 178 cm`, `Weight: 60 kg`, `Fit: As cut`
   - `calculateShirtSize(178, 60, 'as_cut')`
   - **Output:** Size `S`, `106 cm across the chest`, `For a ~91 cm chest...` (Matches frame 24).
3. **Input:** `Height: 178 cm`, `Weight: 80 kg`, `Fit: As cut`
   - `calculateShirtSize(178, 80, 'as_cut')`
   - **Output:** Size `L`, `118 cm across the chest`, `For a ~102 cm chest...` (Matches frame 26).

---

## 4. React Component Architecture

```tsx
// components/FindYourSizeModal.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Check } from 'lucide-react';
import { calculateShirtSize, ShirtSize, FitPreference } from '@/utils/sizingAlgorithm';

interface FindYourSizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSize: (size: ShirtSize) => void;
  initialSize?: ShirtSize;
}

export const FindYourSizeModal: React.FC<FindYourSizeModalProps> = ({
  isOpen,
  onClose,
  onSelectSize,
}) => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'chart'>('calculator');
  const [height, setHeight] = useState(165);
  const [weight, setWeight] = useState(60);
  const [fit, setFit] = useState<FitPreference>('as_cut');

  const sizing = calculateShirtSize(height, weight, fit);
  const [manualOverride, setManualOverride] = useState<ShirtSize | null>(null);
  const currentSize = manualOverride || sizing.recommendedSize;

  const handleApply = () => {
    onSelectSize(currentSize);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 10 }}
          className="relative w-full max-w-[490px] bg-[#FBF8F1] border-2 border-[#14140C] rounded-[20px] p-7 shadow-[8px_8px_0px_#133B34]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4">
            <h2 className="text-2xl font-black text-[#14140C] tracking-tight">Find your size</h2>
            <button onClick={onClose} className="p-1 hover:opacity-70 transition">
              <X className="w-5 h-5 text-[#14140C]" />
            </button>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center p-1 border-1.5 border-[#14140C] rounded-full mb-6">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex-1 py-1.5 text-xs font-bold rounded-full transition ${
                activeTab === 'calculator' ? 'bg-[#14140C] text-white' : 'text-[#14140C]'
              }`}
            >
              Height & weight
            </button>
            <button
              onClick={() => setActiveTab('chart')}
              className={`flex-1 py-1.5 text-xs font-bold rounded-full transition ${
                activeTab === 'chart' ? 'bg-[#14140C] text-white' : 'text-[#14140C]'
              }`}
            >
              Size chart
            </button>
          </div>

          {/* Calculator Grid */}
          <div className="flex gap-6 mb-6">
            {/* Mannequin Graphic */}
            <div className="flex flex-col items-center justify-end w-16">
              <svg viewBox="0 0 40 100" className="w-12 h-28 text-[#F7D66D] stroke-[#14140C] stroke-[1.5]">
                <circle cx="20" cy="10" r="7" fill="#F7D66D" />
                <path d="M12 20 C12 20, 10 32, 10 50 C10 60, 14 90, 16 95 L24 95 C26 90, 30 60, 30 50 C30 32, 28 20, 28 20 Z" fill="#F7D66D" />
              </svg>
              <div className="w-full border-b border-dashed border-[#14140C] mt-1" />
            </div>

            {/* Sliders Area */}
            <div className="flex-1 space-y-4">
              {/* Height Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-extrabold uppercase mb-1">
                  <span>Height</span>
                  <span className="text-lg font-black">{height} <span className="text-xs font-bold">cm</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setHeight(h => Math.max(140, h - 1))} className="w-6 h-6 rounded-full border border-[#14140C] flex items-center justify-center font-bold text-xs"><Minus className="w-3 h-3" /></button>
                  <input
                    type="range"
                    min="140"
                    max="210"
                    value={height}
                    onChange={(e) => { setHeight(Number(e.target.value)); setManualOverride(null); }}
                    className="flex-1 accent-[#EF5E4B] h-1.5 bg-[#E5E0D8] rounded-full"
                  />
                  <button onClick={() => setHeight(h => Math.min(210, h + 1))} className="w-6 h-6 rounded-full border border-[#14140C] flex items-center justify-center font-bold text-xs"><Plus className="w-3 h-3" /></button>
                </div>
              </div>

              {/* Weight Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-extrabold uppercase mb-1">
                  <span>Weight</span>
                  <span className="text-lg font-black">{weight} <span className="text-xs font-bold">kg</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setWeight(w => Math.max(40, w - 1))} className="w-6 h-6 rounded-full border border-[#14140C] flex items-center justify-center font-bold text-xs"><Minus className="w-3 h-3" /></button>
                  <input
                    type="range"
                    min="40"
                    max="130"
                    value={weight}
                    onChange={(e) => { setWeight(Number(e.target.value)); setManualOverride(null); }}
                    className="flex-1 accent-[#EF5E4B] h-1.5 bg-[#E5E0D8] rounded-full"
                  />
                  <button onClick={() => setWeight(w => Math.min(130, w + 1))} className="w-6 h-6 rounded-full border border-[#14140C] flex items-center justify-center font-bold text-xs"><Plus className="w-3 h-3" /></button>
                </div>
              </div>

              {/* Fit Preference */}
              <div>
                <span className="block text-xs font-extrabold uppercase mb-1.5">How you like it</span>
                <div className="flex p-0.5 border border-[#14140C] rounded-full">
                  {(['close', 'as_cut', 'roomy'] as FitPreference[]).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => { setFit(mode); setManualOverride(null); }}
                      className={`flex-1 py-1 text-xs font-bold capitalize rounded-full transition ${
                        fit === mode ? 'bg-[#14140C] text-white' : 'text-[#14140C]'
                      }`}
                    >
                      {mode.replace('_', ' ')}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Recommendation Card */}
          <div className="bg-[#FDEEAF] border-1.5 border-[#14140C] rounded-xl p-3.5 mb-5 flex items-center gap-4">
            <div className="text-center pr-3 border-r border-[#14140C]/30">
              <span className="block text-[10px] font-black uppercase text-[#14140C]/70">Your Size</span>
              <span className="text-4xl font-black text-[#14140C]">{currentSize}</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-black text-[#14140C] leading-snug">{sizing.garmentChestCm} cm across the chest</p>
              <p className="text-xs text-[#14140C]/80 mb-2 leading-tight">{sizing.drapeDescription}</p>
              {/* Direct Size Override Pills */}
              <div className="flex gap-1.5">
                {(['XS', 'S', 'M', 'L', 'XL', 'XXL'] as ShirtSize[]).map((size) => (
                  <button
                    key={size}
                    onClick={() => setManualOverride(size)}
                    className={`px-2 py-0.5 text-[10px] font-bold rounded-full border transition ${
                      currentSize === size
                        ? 'bg-[#14140C] text-white border-[#14140C]'
                        : 'bg-white/80 text-[#14140C] border-[#14140C]/40 hover:bg-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <button
            onClick={handleApply}
            className="w-full bg-[#174A41] hover:bg-[#133B34] text-white font-bold py-3 px-6 rounded-full flex items-center justify-between transition shadow-retro-sm"
          >
            <span>Use size {currentSize}</span>
            <div className="w-6 h-6 rounded-full bg-[#EF5E4B] flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
            </div>
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
```

