export const runtime = 'nodejs'

import { getProductByHandle } from '@/services/shopify'
import { Product } from '@/types/product'
import ProductDetail from '@/components/product/ProductDetail'

interface Props {
  params: { handle: string }
}

export default async function ProductPage({ params }: Props) {
  const handle = params.handle
  const product: Product = await getProductByHandle(handle)
  return <ProductDetail product={product} />
}