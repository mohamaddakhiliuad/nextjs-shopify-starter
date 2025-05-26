'use client'

import Link from 'next/link'
import { Product } from '@/types/product'

import {
  cardBase,
  productImage,
  productTitleInsidGrid,
  productDescription,
  productPrice,
  cardButtonGroup,
  buttonPrimary,
  buttonOutline,
} from '@/styles/formStyles'

interface Props extends Product {
  onShopNowClick?: (handle: string, shopUrl?: string) => void
  onAddToCartClick?: (variantId: string) => void
  onReadMoreClick?: (handle: string, shopUrl?: string) => void
  shopUrl?: string
}

/**
 * ItemCard
 * ---------------------------
 * Product listing card used in curated or related product sections.
 * Includes image, title, description, price, and action buttons.
 * - Reuses core styles from formStyles.ts
 * - Allows optional handlers or direct Shopify fallback links
 */
export default function ItemCard({
  title,
  description,
  imageSrc,
  price,
  currency,
  handle,
  variantId,
  onShopNowClick,
  onAddToCartClick,
  onReadMoreClick,
  shopUrl,
}: Props) {
  const baseUrl = shopUrl || 'https://xrxnq7-16.myshopify.com'

  return (
    <div className={cardBase}>
      
      {/* Product image */}
      <img src={imageSrc} alt={title} className={productImage} />

      {/* Product info block */}
      <div>
        {/* Title */}
        <h3 className={productTitleInsidGrid}>{title}</h3>

        {/* Optional description */}
        <p className={productDescription}>{description}</p>

        {/* Price */}
        {price && (
          <p className={productPrice}>
            ${price} {currency}
          </p>
        )}
      </div>

      {/* Button group */}
      {handle && (
        <div className={cardButtonGroup}>

          {/* Add to Cart */}
          {onAddToCartClick ? (
            <button
              onClick={() => onAddToCartClick(variantId || '')}
              className={`${buttonPrimary} text-sm`}
            >
              Add to Cart
            </button>
          ) : (
            <a
              href={`${baseUrl}/cart/add?id=${variantId}`}
              className={`${buttonPrimary} text-sm`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to Cart
            </a>
          )}

          {/* Read More */}
          <Link
            href={`/products/${handle}`}
            className={`${buttonOutline} text-sm text-center`}
          >
            Read More
          </Link>
        </div>
      )}
    </div>
  )
}
