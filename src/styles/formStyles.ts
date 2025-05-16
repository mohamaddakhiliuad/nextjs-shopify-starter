// src/styles/formStyles.ts
// ----------------------------------------------
// This file centralizes commonly used Tailwind CSS class names 
// for form elements and product UI components.
// Author: Mohammad Dakhili — Noura Template
// ----------------------------------------------

import clsx from 'clsx'

// ---------------------
// Inputs & Labels
// ---------------------
export const inputBase =
  'w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5e4033] transition'

export const textareaBase =
  'w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm resize-none h-32 focus:outline-none focus:ring-2 focus:ring-[#5e4033] transition'

export const labelBase =
  'block text-sm font-medium text-[#5e4033] mb-1'

// ---------------------
// Buttons
// ---------------------
export const buttonPrimary =
  'bg-[#5e4033] text-white px-4 py-2 rounded-full hover:bg-[#3e2f27] transition'

export const buttonOutline =
  'border border-[#5e4033] text-[#5e4033] px-4 py-2 rounded-full hover:bg-[#f8f1ee] transition'

export const toastButton = 'text-sm underline font-medium hover:text-[#3e2e24]'
export const quantityButton = 'text-lg px-2'

// ---------------------
// Layout
// ---------------------
export const quantityBox = 'flex items-center border rounded-full px-3 py-1 bg-white'
export const cardButtonGroup = 'mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center'

// ---------------------
// Product UI
// ---------------------
export const cardBase = 'bg-white p-6 rounded-xl shadow-md text-center flex flex-col justify-between h-full'
export const productImage = 'mx-auto h-32 object-cover mb-4 rounded-lg'
export const productTitleInsidGrid = 'text-lg font-medium text-[#5e4033]'
export const productDescription = 'text-sm text-gray-600 mt-1 line-clamp-3'
export const productPrice = 'text-[#5e4033] font-semibold text-sm mt-2'
export const productTitle = 'text-3xl font-serif text-[#5e4033]'
export const priceStyle = 'text-2xl font-semibold text-[#5e4033] mt-2'

// ---------------------
// Variant Selectors
// ---------------------
export const variantButtonClass = (active: boolean) =>
  clsx(
    'px-3 py-1 border rounded-full text-sm transition',
    active ? 'bg-[#5e4033] text-white' : 'bg-white text-[#5e4033]'
  )

// ---------------------
// Toasts
// ---------------------
export const toastSuccessBox = (extra?: string) =>
  clsx(
    'bg-[#fff8f2]',
    'border border-[#5e4033]',
    'shadow-lg',
    'rounded-xl',
    'p-4',
    'ring-1 ring-black ring-opacity-5',
    'text-[#5e4033]',
    extra
  )
