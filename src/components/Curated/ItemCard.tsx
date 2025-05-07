import { Product } from '@/types/product'

export default function ItemCard({ title, description, imageSrc,price, currency }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <img src={imageSrc} alt={title} className="mx-auto h-32 object-cover mb-4 rounded" />
      <h3 className="text-lg font-medium text-[#5e4033]">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-[#5e4033] font-semibold text-sm mt-2"> ${price} {currency}</p>
    </div>
  )
}
