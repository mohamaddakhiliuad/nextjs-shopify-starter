'use client'

import { ChangeEvent } from 'react'
import {
  filterButton,
  filterButtonActive,
  filterGroup,
  filterDropdown,
} from '@/styles/formStyles'

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
 * Tag and category filter UI for product grids
 * - Tag filters rendered as buttons
 * - Category filter rendered as <select> dropdown
 * - Controlled through external handlers
 */
export default function ProductFilter({
  tags,
  categories,
  selectedTag,
  selectedCategory,
  onTagChange,
  onCategoryChange,
}: ProductFilterProps) {
  // Handle dropdown change event
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    onCategoryChange(value === '' ? null : value)
  }

  return (
    <div className={filterGroup}>

      {/* Tag Filters */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onTagChange(null)}
            className={selectedTag === null ? filterButtonActive : filterButton}
          >
            All
          </button>
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => onTagChange(tag)}
              className={selectedTag === tag ? filterButtonActive : filterButton}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Category Dropdown */}
      {categories.length > 0 && (
        <select
          value={selectedCategory || ''}
          onChange={handleCategoryChange}
          className={filterDropdown}
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      )}
    </div>
  )
}
