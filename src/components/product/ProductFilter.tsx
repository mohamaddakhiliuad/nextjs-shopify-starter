'use client'

import { ChangeEvent } from 'react'

interface ProductFilterProps {
  tags: string[]
  categories: string[]
  selectedTag: string | null
  selectedCategory: string | null
  onTagChange: (tag: string | null) => void
  onCategoryChange: (category: string | null) => void
}

/**
 * ProductFilter
 * --------------------------------------------
 * UI filter component for tag and category selection
 * - Prevents full page reload on change
 * - Accepts handlers for both tag and category filters
 */
export default function ProductFilter({
  tags,
  categories,
  selectedTag,
  selectedCategory,
  onTagChange,
  onCategoryChange,
}: ProductFilterProps) {
  // Handle <select> without triggering page reload
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    onCategoryChange(value === '' ? null : value)
  }

  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      {/* Tag filters (as buttons) */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onTagChange(null)}
            className={`px-4 py-1 border rounded-full text-sm transition ${
              selectedTag === null
                ? 'bg-[#5e4033] text-white'
                : 'border-[#5e4033] text-[#5e4033]'
            }`}
          >
            All
          </button>
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => onTagChange(tag)}
              className={`px-4 py-1 border rounded-full text-sm transition ${
                selectedTag === tag
                  ? 'bg-[#5e4033] text-white'
                  : 'border-[#5e4033] text-[#5e4033]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Category filter (as dropdown) */}
      {categories.length > 0 && (
        <select
          value={selectedCategory || ''}
          onChange={handleCategoryChange}
          className="px-3 py-1 border border-[#5e4033] text-sm rounded text-[#5e4033] bg-white"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}
