'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { breadcrumbWrapper, breadcrumbLink, breadcrumbCurrent } from '@/styles/formStyles'

interface BreadcrumbItem {
  label: string
  href?: string // If href is absent, this item is the current page
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

/**
 * Breadcrumb
 * ----------
 * SEO-friendly navigation showing page hierarchy.
 * - Uses <nav aria-label="breadcrumb">
 * - Last item is plain text; others are links
 * - Uses formStyles for consistent styling
 */
export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className={clsx(breadcrumbWrapper, className)}>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1
        return (
          <span key={idx} className="inline-flex items-center">
            {item.href && !isLast ? (
              <Link href={item.href} className={breadcrumbLink}>
                {item.label}
              </Link>
            ) : (
              <span
                aria-current={isLast ? 'page' : undefined}
                className={breadcrumbCurrent}
              >
                {item.label}
              </span>
            )}
            {!isLast && <span className="mx-2">/</span>}
          </span>
        )
      })}
    </nav>
  )
}
