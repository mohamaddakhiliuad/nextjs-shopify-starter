'use client'

import { ReactNode } from 'react'
import clsx from 'clsx'

interface FormWrapperProps {
  title?: string         // Optional title for the form section
  description?: string   // Optional subtitle or explanation
  children: ReactNode    // The actual form content (fields, buttons, etc.)
  className?: string     // Optional custom class for wrapper
}

/**
 * FormWrapper
 * ------------
 * A reusable UI component that wraps any form content with consistent styling.
 * Includes an optional title and description.
 *
 * Use this to ensure visual consistency across all forms in the app
 * (e.g., contact forms, clinical forms, registration forms, etc.)
 */
export default function FormWrapper({
  title,
  description,
  children,
  className
}: FormWrapperProps) {
  return (
    <section className={clsx('max-w-2xl mx-auto px-6 py-10', className)}>
      
      {/* Render title if provided */}
      {title && (
        <h2 className="text-2xl font-semibold text-[#5e4033] mb-2">
          {title}
        </h2>
      )}

      {/* Render description if provided */}
      {description && (
        <p className="text-sm text-gray-600 mb-6">
          {description}
        </p>
      )}

      {/* Form content goes here */}
      <div className="space-y-6">
        {children}
      </div>
    </section>
  )
}
