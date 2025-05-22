'use client'

import clsx from 'clsx'

/**
 * ProductSkeleton
 * --------------------------------
 * This component renders a skeleton-style placeholder for a product card.
 * It is used while product data is loading, creating a smooth visual experience.
 * - Styled using Tailwind CSS animate-pulse
 * - Mimics the shape of a ProductCard for consistency
 * - Can be used in a grid alongside other skeletons
 */
export default function ProductSkeleton() {
  return (
    <div
      className={clsx(
        'bg-white rounded-xl shadow-md p-4 animate-pulse space-y-4'
      )}
    >
      {/* Placeholder for product image */}
      <div className="bg-gray-200 h-48 w-full rounded-lg" />

      {/* Placeholder for product title */}
      <div className="h-4 bg-gray-200 rounded w-3/4" />

      {/* Placeholder for product price */}
      <div className="h-4 bg-gray-200 rounded w-1/3" />

      {/* Placeholder for action buttons */}
      <div className="flex gap-2 mt-4">
        <div className="h-8 w-24 bg-gray-200 rounded" />
        <div className="h-8 w-24 bg-gray-200 rounded" />
      </div>
    </div>
  )
}
