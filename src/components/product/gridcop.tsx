'use client'

import clsx from 'clsx'
import ProductCard from './ProductCard'
import { ProductGridProps } from '@/types/ProductGridProps'

/**
 * ProductGrid
 * ------------------------------
 * A flexible and reusable grid for displaying multiple products.
 * - Dynamically generates a grid using ProductCard
 * - Accepts optional title, custom class, and column count
 * - Integrates seamlessly into homepage, product detail, category, etc.
 */
export default function ProductGrid({
  title,
  products,
  shopUrl,
  columns = 3,
  className,
}: ProductGridProps) {
  if (!products || products.length === 0) return null

  // Dynamically create grid columns
  const columnClass = `md:grid-cols-${columns}`

  return (
    <section className={clsx('w-full mt-10', className)}>
      {/* Optional section title */}
      {title && (
        <h3 className="text-xl mb-4 text-[#5e4033] font-serif">
          {title}
        </h3>
      )}

      {/* Product Grid */}
      <div className={clsx('grid gap-6', columnClass)}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} shopUrl={shopUrl} />
        ))}
      </div>
    </section>
  )
}
