import axios from 'axios'
import { Product } from '@/types/product'

const fallbackImage = '/fallback.jpg'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const shopifyUrl = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN!

/**
 * getProductByHandle
 * ------------------
 * Fetches a single product from Shopify based on its handle (slug).
 * Used for detailed product pages (ProductDetail).
 */
export async function getProductByHandle(handle: string): Promise<Product> {
  const res = await fetch(`${siteUrl}/api/products?handle=${handle}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.status}`)
  }

  const data = await res.json()
  const node = data.product

  const variants = node.variants?.edges.map((edge: any) => {
    const variantNode = edge.node
    const selectedColor = variantNode.selectedOptions?.find(
      (opt: any) => opt.name === 'Color'
    )?.value

    return {
      id: variantNode.id,
      title: variantNode.title,
      color: selectedColor || variantNode.title,
      image: variantNode.image?.url || node.featuredImage?.url || fallbackImage,
    }
  }) || []

  return {
    id: node.id,
    title: node.title,
    description: node.description,
    imageSrc: node.featuredImage?.url || fallbackImage,
    price: node.priceRange?.minVariantPrice?.amount || '0.00',
    currency: node.priceRange?.minVariantPrice?.currencyCode || 'USD',
    handle: node.handle,
    url: shopifyUrl,
    variantId: variants[0]?.id || '',
    variants,
  }
}

/**
 * getProducts
 * ------------------
 * Fetches a list of products from Shopify (used for general listing).
 * Used in homepage, related products, etc.
 */
export async function getProducts(count: number = 3): Promise<Product[]> {
  const res = await axios.get(`/api/products?count=${count}`)
  const nodes = res.data.products?.edges || []

  return nodes.map((edge: any) => {
    const node = edge.node

    return {
      id: node.id,
      title: node.title,
      description: node.description,
      imageSrc: node.featuredImage?.url || fallbackImage,
      price: node.priceRange?.minVariantPrice?.amount || '0.00',
      currency: node.priceRange?.minVariantPrice?.currencyCode || 'USD',
      handle: node.handle,
      url: shopifyUrl,
      variantId: node.variants?.edges?.[0]?.node?.id || '',
      variants: [], // For preview, we skip full variant loading
    }
  })
}

/**
 * getProductsByTag
 * ------------------
 * Fetches Shopify products filtered by tag (e.g., 'outdoor', 'lamp', 'holiday').
 * Used for related products, dynamic category sections, etc.
 */
export async function getProductsByTag(tag: string): Promise<Product[]> {
  const res = await axios.get(`/api/products?tag=${tag}`)
  const nodes = res.data.products?.edges || []

  return nodes.map((edge: any) => {
    const node = edge.node

    return {
      id: node.id,
      title: node.title,
      description: node.description,
      imageSrc: node.featuredImage?.url || fallbackImage,
      price: node.priceRange?.minVariantPrice?.amount || '0.00',
      currency: node.priceRange?.minVariantPrice?.currencyCode || 'USD',
      handle: node.handle,
      url: shopifyUrl,
      variantId: node.variants?.edges?.[0]?.node?.id || '',
      variants: [],
    }
  })
}
