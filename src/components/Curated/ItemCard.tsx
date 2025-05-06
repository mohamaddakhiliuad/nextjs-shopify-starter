interface Props {
  title: string
  description: string
  imageSrc: string
}

export default function ItemCard({ title, description, imageSrc }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <img src={imageSrc} alt={title} className="mx-auto h-32 object-cover mb-4 rounded" />
      <h3 className="text-lg font-medium text-[#5e4033]">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
