'use client'

import { ReactNode } from 'react'
import clsx from 'clsx'
import {
  formSectionWrapper,
  formTitle,
  formDescription,
} from '@/styles/formStyles'

interface FormWrapperProps {
  title?: string         // Optional section title
  description?: string   // Optional subtitle
  children: ReactNode    // Form fields or inner content
  className?: string     // Optional override class
}

/**
 * FormWrapper
 * ----------------------------
 * Reusable UI wrapper for sections or forms
 * - Accepts optional title and description
 * - Ensures consistent padding and spacing
 * - Applies global form styles
 */
export default function FormWrapper({
  title,
  description,
  children,
  className,
}: FormWrapperProps) {
  return (
    <section className={clsx(formSectionWrapper, className)}>
      
      {/* Title */}
      {title && (
        <h2 className={formTitle}>
          {title}
        </h2>
      )}

      {/* Subtitle / Description */}
      {description && (
        <p className={formDescription}>
          {description}
        </p>
      )}

      {/* Form content */}
      <div className="space-y-6">
        {children}
      </div>
    </section>
  )
}
