import { Product } from '@/types/product'
import Link from 'next/link'
import {
  buttonPrimary,
  buttonOutline,
  cardBase,
  productImage,
  productTitle,
  productDescription,
  productPrice,
  cardButtonGroup,
  productTitleInsidGrid,
} from '@/styles/formStyles'

interface Props extends Product {
  onShopNowClick?: (handle: string, shopUrl?: string) => void
  onAddToCartClick?: (variantId: string) => void
  onReadMoreClick?: (handle: string, shopUrl?: string) => void
  shopUrl?: string
}

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
      <img src={imageSrc} alt={title} className={productImage} />

      <div>
        <h3 className={productTitleInsidGrid}>{title}</h3>
        <p className={productDescription}>{description}</p>

        {price && (
          <p className={productPrice}>
            ${price} {currency}
          </p>
        )}
      </div>

      {handle && (
        <div className={cardButtonGroup}>
          {/* Add to Cart */}
          {onAddToCartClick ? (
            <button
              onClick={() => onAddToCartClick(variantId || '')}
              className={buttonPrimary + ' text-sm'}
            >
              Add to Cart
            </button>
          ) : (
            <a
              href={`${baseUrl}/cart/add?id=${variantId}`}
              className={buttonPrimary + ' text-sm'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to Cart
            </a>
          )}

         <Link
      href={`/products/${handle}`}
      className={buttonOutline + ' text-sm text-center'}
    >
      Read More
    </Link>
        </div>
      )}
    </div>
  )
}
