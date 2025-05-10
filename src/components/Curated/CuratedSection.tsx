'use client'

import { useEffect, useState } from 'react'
import { Product } from '@/types/product'
import ItemCard from './ItemCard'
import axios from 'axios'
import { PRODUCT_SETTINGS } from '@/config/settings'
import { getProducts } from '@/services/shopify'

const shopBase = 'https://xrxnq7-16.myshopify.com/products'

export default function CuratedSection() {
  const [items, setItems] = useState<Product[]>([])
  useEffect(() => {
    getProducts(PRODUCT_SETTINGS.defaultCount)
      .then(setItems)
      .catch((err) => console.error("Error fetching products:", err))
  }, [])
  
  return (
    <section className="bg-[#fff8f2] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif text-[#5e4033] mb-8">
          Curated Collection to Brighten Your World
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
          <ItemCard
          key={idx}
          {...item}
          shopUrl={shopBase}
          onShopNowClick={(handle, url) => {
            if (url && handle) {
              window.open(`${url}/${handle}`, '_blank')
            }
          }}
        />
          ))}
        </div>
      </div>
    </section>
  )
}
