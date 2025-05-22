'use client'

import { useEffect, useState } from 'react'
import { Product } from '@/types/product'
import clsx from 'clsx'

import Breadcrumb from '@/components/ui/Breadcrumb'
import QuantitySelector from '@/components/forms/QuantitySelector'
import ProductVariantSelector from '@/components/forms/ProductVariantSelector'
import AddToCartButton from '@/components/product/AddToCartButton'
import ProductGrid from '@/components/product/ProductGrid'

import { getRelatedProductsDynamic } from '@/services/shopify'
import { buttonOutline } from '@/styles/formStyles'
import ArtworkLightbox from '@/components/ui/ArtworkLightbox'

interface Props {
  product: Product
}

/**
 * ProductDetail
 * ------------------------------------------------
 * Displays full product detail page including:
 * - Artwork image with zoom
 * - Title, description, variant and quantity selectors
 * - Add to cart functionality
 * - Related product suggestions
 */
export default function ProductDetail({ product }: Props) {
  const [quantity, setQuantity] = useState(1)
  const [selectedVariantId, setSelectedVariantId] = useState(product.variantId)

  // Find selected variant object (safe check)
  const selectedVariant = product.variants?.find(v => v.id === selectedVariantId)

  // Determine which image to display
  const imageToShow = selectedVariant?.image || product.imageSrc || ''

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta))
  }

  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])

  useEffect(() => {
    getRelatedProductsDynamic(product)
      .then(setRelatedProducts)
      .catch(err => console.error('Error loading related products:', err))
  }, [product])

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12">

        {/* Zoomable image with lightbox */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <ArtworkLightbox
            currentProduct={product}
            relatedProducts={relatedProducts}
          />

        </div>

        {/* Product info and interaction */}
        <div className="flex flex-col justify-center space-y-4">
          {/* Breadcrumb navigation */}
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: product.title },
            ]}
          />

          {/* Product title and rating */}
          <h1 className="text-3xl font-serif text-[#5e4033]">{product.title}</h1>
          <p className="text-yellow-500 text-sm">★ 4.7 (1,250 reviews)</p>
          <p className="text-gray-600">{product.description?.split('\n')[0]}</p>

          {/* Variant selector (if applicable) */}
          {product.variants?.length > 0 && (
            <ProductVariantSelector
              variants={product.variants}
              selectedId={selectedVariantId}
              onSelect={setSelectedVariantId}
            />
          )}

          {/* Quantity selector */}
          <QuantitySelector quantity={quantity} onChange={handleQuantityChange} />

          {/* Add to cart */}
          <AddToCartButton
            quantity={quantity}
            variantId={selectedVariantId}
            productTitle={product.title}
            productUrl={product.url}
            color={selectedVariant?.color}
          />

          {/* External Shopify link */}
          {product.url && product.handle && (
            <a
              href={`${product.url}/products/${product.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(buttonOutline, 'px-6 py-3 text-sm')}
            >
              View on Store
            </a>
          )}
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <ProductGrid
          title="You may also like"
          products={relatedProducts}
          shopUrl={product.url || ''}
          columns={3}
        />
      )}
    </section>
  )
}
