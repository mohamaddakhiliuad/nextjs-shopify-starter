export interface Product {
  id?: string
  title?: string
  description?: string
  imageSrc?: string
  price?: string
  currency?: string
  handle?: string
  url?: string
  tag?: string
  variantId?: string
  variants?: {
    id: string
    title: string
    color: string
     image?: string
  }[]
}
