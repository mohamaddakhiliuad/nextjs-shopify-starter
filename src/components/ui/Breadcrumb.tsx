'use client'

import Link from 'next/link'
import clsx from 'clsx'

interface BreadcrumbItem {
  label: string
  href?: string  // If href is absent, this item is the current page
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

/**
 * Breadcrumb
 * ----------
 * Renders a list of navigational links showing the current page position.
 * - Uses <nav aria-label="breadcrumb"> for accessibility / SEO.
 * - Items with href render as links; last item (no href) as plain text.
 * - Separator “/” is injected between items.
 *
 * Example usage:
 * <Breadcrumb
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Products', href: '/products' },
 *     { label: product.title }
 *   ]}
 * />
 */
export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className={clsx('text-sm text-gray-400 mb-2', className)}
    >
      {items.map((item, idx) => {
        // Render link for all but last item
        const isLast = idx === items.length - 1
        return (
          <span key={idx} className="inline-flex items-center">
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span
                aria-current={isLast ? 'page' : undefined}
                className={clsx(isLast && 'text-[#5e4033]')}
              >
                {item.label}
              </span>
            )}
            {/* Separator: show slash after every item except the last */}
            {!isLast && <span className="mx-2">/</span>}
          </span>
        )
      })}
    </nav>
  )
}
