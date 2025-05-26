'use client'

import { quantityBox, quantityButton } from '@/styles/formStyles'

interface QuantitySelectorProps {
  quantity: number
  onChange: (delta: number) => void
}

/**
 * QuantitySelector
 * ----------------
 * Reusable UI component for selecting product quantity.
 * - Controlled via a single numeric value and delta function.
 * - Button events increment/decrement quantity.
 * - Styles are centralized in formStyles.ts for consistency.
 */
export default function QuantitySelector({
  quantity,
  onChange,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center space-x-4 mt-2">
      
      {/* Label for accessibility */}
      <label className="text-sm text-gray-600">Quantity:</label>

      {/* Quantity control container */}
      <div className={quantityBox}>
        
        {/* Decrement button */}
        <button onClick={() => onChange(-1)} className={quantityButton}>
          −
        </button>

        {/* Quantity value */}
        <span className="px-2">{quantity}</span>

        {/* Increment button */}
        <button onClick={() => onChange(1)} className={quantityButton}>
          +
        </button>
      </div>
    </div>
  )
}
