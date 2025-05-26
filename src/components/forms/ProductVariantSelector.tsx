'use client'

import { variantButtonClass } from '@/styles/formStyles'

interface ProductVariant {
  id: string
  color: string
}

interface ProductVariantSelectorProps {
  variants: ProductVariant[]
  selectedId: string
  onSelect: (id: string) => void
}

/**
 * ProductVariantSelector
 * -----------------------
 * Reusable component for selecting product variants (e.g., colors or sizes).
 * - Controlled via selectedId and onSelect handler
 * - Uses centralized variant button styling from formStyles.ts
 */
export default function ProductVariantSelector({
  variants,
  selectedId,
  onSelect,
}: ProductVariantSelectorProps) {
  if (!variants || variants.length === 0) return null

  return (
    <div className="mt-4 space-x-3">

      {/* Label for variant selection */}
      <span className="text-sm text-gray-600">Color:</span>

      {/* Variant buttons */}
      {variants.map((variant) => (
        <button
          key={variant.id}
          onClick={() => onSelect(variant.id)}
          className={variantButtonClass(selectedId === variant.id)}
        >
          {variant.color}
        </button>
      ))}
    </div>
  )
}
