import { Product } from './product' // یا از جای دیگه‌ای که Product تعریف شده

export interface ProductGridProps {
  title?: string
  products: Product[]
  shopUrl: string
  columns?: number
  className?: string
}
