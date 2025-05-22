export interface Product {
  id?: string
  title?: string
  description?: string
  imageSrc?: string
  price?: string
  currency?: string
  handle?: string
  url?: string
  tags?: string[]           // ✅ NEW: Shopify product tags for filtering
  category?: string         // ✅ NEW: Shopify productType (used as category)
  variantId?: string
  variants?: {
    id: string
    title: string
    color: string
    image?: string
  }[]
}
