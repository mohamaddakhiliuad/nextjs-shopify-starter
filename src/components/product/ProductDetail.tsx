// src/components/product/ProductDetail.tsx
'use client'

import { useEffect, useState } from 'react'
import { Product } from '@/types/product'
import clsx from 'clsx'

import Breadcrumb from '@/components/ui/Breadcrumb'
import QuantitySelector from '@/components/forms/QuantitySelector'
import ProductVariantSelector from '@/components/forms/ProductVariantSelector'
import AddToCartButton from '@/components/product/AddToCartButton'
import ProductGrid from '@/components/product/ProductGrid'

import { getProducts } from '@/services/shopify'
import { buttonOutline } from '@/styles/formStyles'

// Defines the expected props for this component
interface Props {
  product: Product
}

/**
 * ProductDetail
 * --------------------------------------------
 * This component renders a single product detail page,
 * including product information, variants, quantity selector,
 * add-to-cart action, and related products section.
 */
export default function ProductDetail({ product }: Props) {
  // State for selected quantity
  const [quantity, setQuantity] = useState(1)

  // State for selected variant
  const [selectedVariantId, setSelectedVariantId] = useState(product.variantId)

  // Find selected variant object
  const selectedVariant = product.variants.find(v => v.id === selectedVariantId)

  // Determine the image to display (fallback if needed)
  const imageToShow = selectedVariant?.image || product.imageSrc

  // Quantity handler (+/-)
  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta))
  }

  // State for related products
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])

  // Load demo/fallback products on mount
  useEffect(() => {
    getProducts(3)
      .then(setRelatedProducts)
      .catch(err => console.error('Error loading products:', err))
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12">

        {/* Product image */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <img
            src={imageToShow}
            alt={product.title}
            className="w-full h-auto rounded-lg object-cover transition duration-300 ease-in-out"
          />
        </div>

        {/* Product information */}
        <div className="flex flex-col justify-center space-y-4">

          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: product.title },
            ]}
          />

          {/* Title, rating, and short description */}
          <h1 className="text-3xl font-serif text-[#5e4033]">{product.title}</h1>
          <p className="text-yellow-500 text-sm">★ 4.7 (1,250 reviews)</p>
          <p className="text-gray-600">{product.description.split('\n')[0]}</p>

          {/* Variant selector */}
          <ProductVariantSelector
            variants={product.variants}
            selectedId={selectedVariantId}
            onSelect={setSelectedVariantId}
          />

          {/* Quantity selector */}
          <QuantitySelector quantity={quantity} onChange={handleQuantityChange} />

          {/* Add to Cart button */}
          <AddToCartButton
            quantity={quantity}
            variantId={selectedVariantId}
            productTitle={product.title}
            productUrl={product.url}
            color={selectedVariant?.color}
          />

          {/* View product on Shopify store */}
          <a
            href={`${product.url}/products/${product.handle}`}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(buttonOutline, 'px-6 py-3 text-sm')}
          >
            View on Store
          </a>
        </div>
      </div>

      {/* Related products section */}
      {relatedProducts.length > 0 && (
        <ProductGrid
          title="You may also like"
          products={relatedProducts}
          //shopUrl={product.url}
          columns={3}
        />
      )}
    </section>
  )
}
