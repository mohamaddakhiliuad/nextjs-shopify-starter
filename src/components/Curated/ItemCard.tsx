import { Product } from '@/types/product'
import {
  buttonPrimary,
  buttonOutline,
  cardBase,
  productImage,
  productTitle,
  productDescription,
  productPrice,
  cardButtonGroup,
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
        <h3 className={productTitle}>{title}</h3>
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

          {/* Read More */}
          {onReadMoreClick ? (
            <button
              onClick={() => onReadMoreClick(handle, shopUrl)}
              className={buttonOutline + ' text-sm'}
            >
              Read More
            </button>
          ) : (
            <a
              href={`${baseUrl}/products/${handle}`}
              className={buttonOutline + ' text-sm'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          )}
        </div>
      )}
    </div>
  )
}
