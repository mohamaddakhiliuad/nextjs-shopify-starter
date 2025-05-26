'use client'

import { skeletonCard, skeletonBlock } from '@/styles/formStyles'

/**
 * ProductSkeleton
 * --------------------------------
 * Visual placeholder while product grid is loading
 * - Mimics shape of ProductCard
 * - Styled using animate-pulse and centralized styles
 */
export default function ProductSkeleton() {
  return (
    <div className={skeletonCard}>
      
      {/* Image Placeholder */}
      <div className="bg-gray-200 w-full aspect-[4/5] rounded-xl" />

      {/* Title Placeholder */}
      <div className={skeletonBlock + ' w-3/4'} />

      {/* Price Placeholder */}
      <div className={skeletonBlock + ' w-1/3'} />

      {/* Buttons Placeholder */}
      <div className="flex gap-2 mt-4">
        <div className={skeletonBlock + ' h-8 w-24'} />
        <div className={skeletonBlock + ' h-8 w-24'} />
      </div>
    </div>
  )
}
