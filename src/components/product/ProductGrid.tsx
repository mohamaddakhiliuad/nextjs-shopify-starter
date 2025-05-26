'use client'

import { useState } from 'react'
import clsx from 'clsx'
import ProductCard from './ProductCard'
import ProductSkeleton from './ProductSkeleton'
import ProductFilter from './ProductFilter'
import { ProductGridProps } from '@/types/ProductGridProps'
import {
  sectionWrapper,
  sectionTitle,
  gridBase,
} from '@/styles/formStyles'

/**
 * ProductGrid
 * --------------------------------------------
 * Reusable product listing grid with tag and category filters.
 * - Supports SEO markup
 * - Handles loading and empty states
 * - Uses formStyles for consistent layout and spacing
 */
export default function ProductGrid({
  title,
  products = [],
  shopUrl,
  columns = 3,
  className,
  isLoading = false,
}: ProductGridProps & { isLoading?: boolean }) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Extract all unique tags from products
  const tags = Array.from(new Set(products.flatMap(p => p.tags || [])))

  // Extract all unique categories (productType)
  const categories = Array.from(
    new Set(products.map(p => p.category || '').filter(Boolean))
  )

  // Filter products by selected tag and category
  const filteredProducts = products.filter(p => {
    const tagMatch = selectedTag ? p.tags?.includes(selectedTag) : true
    const categoryMatch = selectedCategory ? p.category === selectedCategory : true
    return tagMatch && categoryMatch
  })

  // Dynamic grid column layout based on prop
  const columnClass = clsx(
    gridBase,
    `grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} lg:grid-cols-${Math.min(columns + 1, 4)}`
  )

  return (
    <section
      className={clsx(sectionWrapper, className)}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Optional section title */}
      {title && (
        <h2 className={sectionTitle}>{title}</h2>
      )}

      {/* Tag & Category Filter UI */}
      {(tags.length > 0 || categories.length > 0) && (
        <ProductFilter
          tags={tags}
          categories={categories}
          selectedTag={selectedTag}
          selectedCategory={selectedCategory}
          onTagChange={setSelectedTag}
          onCategoryChange={setSelectedCategory}
        />
      )}

      {/* Loading state (skeleton cards) */}
      {isLoading ? (
        <div className={columnClass}>
          {[...Array(3)].map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        // Empty state
        <div className="text-center text-gray-500 py-12">
          <p>No products found for the selected filters.</p>
        </div>
      ) : (
        // Product grid
        <div className={columnClass}>
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="position" content={index + 1} />
              <ProductCard product={product} shopUrl={shopUrl} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
