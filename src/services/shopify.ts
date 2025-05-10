import axios from 'axios'
import { Product } from '@/types/product'



export async function getProducts(count: number = 3): Promise<Product[]> {
    const res = await axios.get(`/api/products?count=${count}`)
    
    return res.data.products.edges.map((edge: any) => {
      const product = {
        id: edge.node.id,
        title: edge.node.title,
        description: edge.node.description,
        imageSrc: edge.node.featuredImage?.url || '/fallback.jpg',
        price: edge.node.priceRange?.minVariantPrice?.amount || '0.00',
        currency: edge.node.priceRange?.minVariantPrice?.currencyCode || 'USD',
        handle: edge.node.handle,

      }
      console.log("🧪 full node:", edge) // 
      console.log("🧪 full node:", edge.node) // 
      console.log("🧪 full node:",  edge.node.handle) // 
  
      return product
    })
  }