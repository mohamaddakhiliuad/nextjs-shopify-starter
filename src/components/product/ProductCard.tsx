'use client'

import Link from 'next/link'
import { Product } from '@/types/product'
import clsx from 'clsx'

import {
  cardBase,
  productImage,
  productTitleInsidGrid,
  productPrice,
  cardButtonGroup,
} from '@/styles/formStyles'

interface ProductCardProps {
  product: Product
  shopUrl: string
}

/**
 * ProductCard
 * ---------------------------
 * Clean and structured card for displaying a product with image, title, price, and actions.
 * - Uses centralized styles from formStyles.ts for consistency and maintainability
 * - Structured for SEO with schema.org/Product
 * - Includes both internal and external links (e.g., to Shopify)
 */
export default function ProductCard({ product, shopUrl }: ProductCardProps) {
  const productLink = `/products/${product.handle}`
  const imageSrc = product.imageSrc

  return (
    <div className={cardBase} itemScope itemType="https://schema.org/Product">
      
      {/* Product image with link to internal detail page */}
      <Link href={productLink}>
        <img
          src={imageSrc}
          alt={product.title}
          className={productImage}
          itemProp="image"
        />
      </Link>

      {/* Product title below the image */}
      <h3 className={productTitleInsidGrid}>
        <Link href={productLink} itemProp="name">
          {product.title}
        </Link>
      </h3>

      {/* Product price in main color */}
      <p className={productPrice}>
        ${product.price} {product.currency}
      </p>

      {/* Button group: internal detail + external store link */}
      <div className={cardButtonGroup}>
        <Link
          href={productLink}
          className="underline text-sm text-[#5e4033] hover:text-[#3e2e24]"
        >
          View Details
        </Link>
        <a
          href={`${shopUrl}/products/${product.handle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-sm text-[#5e4033] hover:text-[#3e2e24]"
        >
          View on Store →
        </a>
      </div>
    </div>
  )
}
