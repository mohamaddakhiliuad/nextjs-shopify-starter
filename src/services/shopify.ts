import axios from 'axios'
import { Product } from '@/types/product'



export async function getProducts(count: number = 3): Promise<Product[]> {
    const res = await axios.get(`/api/products?count=${count}`)
    
    return res.data.products.edges.map((edge: any) => {
      const product = {
        title: edge.node.title,
        description: edge.node.description,
        imageSrc: edge.node.featuredImage?.url || '/fallback.jpg',
        price: edge.node.priceRange?.minVariantPrice?.amount || '0.00',
        currency: edge.node.priceRange?.minVariantPrice?.currencyCode || 'USD',
      }
  
    
  
      return product
    })
  }