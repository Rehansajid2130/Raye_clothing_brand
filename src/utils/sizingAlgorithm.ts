// ponytail: Pure deterministic sizing math matching live Rayé fitEngine (0.3*H + 0.55*W + 5 + 14 ease). Zero external library
import { ShirtSize } from '../types/product';

export type FitPreference = 'close' | 'as_cut' | 'roomy';

export interface SizingResult {
  recommendedSize: ShirtSize;
  garmentChestCm: number;
  estimatedBodyChestCm: number;
  drapeDescription: string;
}

const SIZING_TABLE: { size: ShirtSize; garmentChest: number; length: number; shoulder: number }[] = [
  { size: 'XS', garmentChest: 100, length: 68, shoulder: 44 },
  { size: 'S',  garmentChest: 106, length: 70, shoulder: 46 },
  { size: 'M',  garmentChest: 112, length: 72, shoulder: 48 },
  { size: 'L',  garmentChest: 118, length: 74, shoulder: 50 },
  { size: 'XL', garmentChest: 124, length: 76, shoulder: 52 },
  { size: 'XXL', garmentChest: 130, length: 78, shoulder: 54 },
];

export function calculateShirtSize(
  heightCm: number,
  weightKg: number,
  fit: FitPreference = 'as_cut'
): SizingResult {
  // 1. Exact anthropometric chest estimate from Rayé fitEngine
  const ha = 14; // baseline ease in cm
  const estimatedChest = Math.round(0.3 * heightCm + 0.55 * weightKg + 5);
  const targetGarmentChest = estimatedChest + ha;

  // 2. Find base size threshold
  let idx = SIZING_TABLE.findIndex(item => item.garmentChest >= targetGarmentChest - 2);
  if (idx < 0) idx = SIZING_TABLE.length - 1;

  // 3. Apply fit modifier (-1 close, 0 as cut, +1 roomy)
  let modifier = 0;
  if (fit === 'close') modifier = -1;
  if (fit === 'roomy') modifier = 1;

  const adjustedIdx = Math.max(0, Math.min(SIZING_TABLE.length - 1, idx + modifier));
  const bestMatch = SIZING_TABLE[adjustedIdx];

  const easeCm = bestMatch.garmentChest - estimatedChest;
  const drapeLabel = fit === 'close' ? 'Fitted' : fit === 'roomy' ? 'Roomy' : 'Relaxed';

  return {
    recommendedSize: bestMatch.size,
    garmentChestCm: bestMatch.garmentChest,
    estimatedBodyChestCm: estimatedChest,
    drapeDescription: `${drapeLabel} drape with ~${easeCm} cm garment ease. Based on ${heightCm}cm / ${weightKg}kg.`,
  };
}

