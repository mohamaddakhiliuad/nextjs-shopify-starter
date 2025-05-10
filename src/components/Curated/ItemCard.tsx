import { Product } from '@/types/product'

export default function ItemCard({ title, description, imageSrc,price, currency,id,handle }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <img src={imageSrc} alt={title} className="mx-auto h-32 object-cover mb-4 rounded" />
      <h3 className="text-lg font-medium text-[#5e4033]">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-[#5e4033] font-semibold text-sm mt-2"> ${price} {currency}</p>
    
      <a
  href={`https://xrxnq7-16.myshopify.com/products/${handle}`}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
>
  Shop Now
</a>




    </div>
  )
}
