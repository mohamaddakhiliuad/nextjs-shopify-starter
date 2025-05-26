'use client'

import { useEffect, useState } from 'react'
import { Product } from '@/types/product'
import clsx from 'clsx'

import Breadcrumb from '@/components/ui/Breadcrumb'
import QuantitySelector from '@/components/forms/QuantitySelector'
import ProductVariantSelector from '@/components/forms/ProductVariantSelector'
import AddToCartButton from '@/components/product/AddToCartButton'
import ProductGrid from '@/components/product/ProductGrid'
import ArtworkLightbox from '@/components/ui/ArtworkLightbox'

import { buttonOutline, sectionWrapper, sectionTitle } from '@/styles/formStyles'
import FormWrapper from '@/components/ui/FormWrapper'

interface Props {
  product: Product
}

/**
 * ProductDetail
 * ------------------------------------------------
 * Full product detail page with:
 * - Zoomable artwork
 * - Title, description, variant selector, quantity
 * - Add to cart functionality
 * - Related products
 */
export default function ProductDetail({ product }: Props) {
  const [quantity, setQuantity] = useState(1)
  const [selectedVariantId, setSelectedVariantId] = useState(product.variantId)

  // Selected variant logic
  const selectedVariant = product.variants?.find(v => v.id === selectedVariantId)

  // Fallback for image
  const imageToShow = selectedVariant?.image || product.imageSrc || ''

  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])

  useEffect(() => {
    import('@/services/shopify')
      .then(mod => mod.getRelatedProductsDynamic(product))
      .then(setRelatedProducts)
      .catch(err => console.error('Error loading related products:', err))
  }, [product])

  return (
    <section className={sectionWrapper}>
      <div className="grid md:grid-cols-2 gap-12">

        {/* Image preview with lightbox */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <ArtworkLightbox
            currentProduct={product}
            relatedProducts={relatedProducts}
          />
        </div>

        {/* Product content */}
        <div className="flex flex-col justify-center space-y-4">
          
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: product.title },
            ]}
          />

          {/* Product title */}
          <h1 className={sectionTitle}>{product.title}</h1>

          {/* Rating and description */}
          <p className="text-yellow-500 text-sm">★ 4.7 (1,250 reviews)</p>
          <p className="text-gray-600">{product.description?.split('\n')[0]}</p>

          {/* Variant selector */}
          {product.variants?.length > 0 && (
            <ProductVariantSelector
              variants={product.variants}
              selectedId={selectedVariantId}
              onSelect={setSelectedVariantId}
            />
          )}

          {/* Quantity selector */}
          <QuantitySelector quantity={quantity} onChange={setQuantity} />

          {/* Add to cart CTA */}
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

      {/* Related products grid */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <ProductGrid
            title="You may also like"
            products={relatedProducts}
            shopUrl={product.url || ''}
            columns={3}
          />
        </div>
      )}
    </section>
  )
}
