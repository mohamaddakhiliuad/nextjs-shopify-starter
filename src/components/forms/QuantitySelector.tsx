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
 * 
 * Props:
 * - quantity: the current quantity number
 * - onChange: callback to increase or decrease quantity (+1 or -1)
 * 
 * Styling is managed via formStyles.ts to maintain visual consistency across the app.
 */
export default function QuantitySelector({
  quantity,
  onChange,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center space-x-4 mt-2">
      {/* Label for accessibility */}
      <label className="text-sm text-gray-600">Quantity:</label>

      {/* Container with +/- controls */}
      <div className={quantityBox}>
        <button onClick={() => onChange(-1)} className={quantityButton}>−</button>
        <span className="px-2">{quantity}</span>
        <button onClick={() => onChange(1)} className={quantityButton}>+</button>
      </div>
    </div>
  )
}
