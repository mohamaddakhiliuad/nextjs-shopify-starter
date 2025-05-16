'use client'

import Link from 'next/link'
import { Product } from '@/types/product'
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
 * Reusable UI card for displaying product summary in grid/list views.
 * 
 * Props:
 * - product: Product object (title, price, image, handle, etc.)
 * - shopUrl: Full base URL for the product on external store
 *
 * Usage:
 * <ProductCard product={p} shopUrl="https://yourstore.com" />
 */
export default function ProductCard({ product, shopUrl }: ProductCardProps) {
  const productLink = `/products/${product.handle}`
  const imageSrc = product.imageSrc

  return (
    <div className={cardBase}>
      <Link href={productLink}>
        <img
          src={imageSrc}
          alt={product.title}
          className={productImage}
        />
      </Link>

      <h3 className={productTitleInsidGrid}>
        <Link href={productLink}>{product.title}</Link>
      </h3>

      <p className={productPrice}>
        ${product.price} {product.currency}
      </p>

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
