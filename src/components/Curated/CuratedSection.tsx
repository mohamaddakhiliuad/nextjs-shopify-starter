'use client'

import { useEffect, useState } from 'react'
import ItemCard from './ItemCard'

interface Product {
  title: string
  description: string
  imageSrc: string
}

export default function CuratedSection() {
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        const parsed = data.products.edges.map((edge: any) => ({
          title: edge.node.title,
          description: edge.node.description,
          imageSrc: edge.node.featuredImage?.url || '/fallback.jpg',
        }))
        setItems(parsed)
      })
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
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
