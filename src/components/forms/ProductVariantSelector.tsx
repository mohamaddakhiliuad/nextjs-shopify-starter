'use client'

import clsx from 'clsx'
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
 * Reusable component for selecting product variants (e.g., colors).
 * 
 * Props:
 * - variants: array of variant objects with id and color
 * - selectedId: currently selected variant id
 * - onSelect: callback to change selected variant
 * 
 * Styling is pulled from formStyles to keep the UI consistent and DRY.
 */
export default function ProductVariantSelector({
  variants,
  selectedId,
  onSelect,
}: ProductVariantSelectorProps) {
  if (!variants || variants.length === 0) return null

  return (
    <div className="mt-4 space-x-3">
      <span className="text-sm text-gray-600">Color:</span>

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
