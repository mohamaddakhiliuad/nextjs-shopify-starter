'use client'

import { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { showAddToCartToast } from '@/utils/toastUtils'
import { buttonPrimary } from '@/styles/formStyles'
import clsx from 'clsx'

interface AddToCartButtonProps {
  quantity: number
  variantId: string
  productTitle: string
  productUrl: string
  color?: string
}

/**
 * AddToCartButton
 * ----------------
 * Reusable call-to-action button component to add an item to the cart.
 * - Shows loading state while processing
 * - Uses toast on success (customized with product info)
 * - Pulls primary button style from design system
 */
export default function AddToCartButton({
  quantity,
  variantId,
  productTitle,
  productUrl,
  color,
}: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async () => {
    setIsAdding(true)

    try {
      // Simulate API delay (you can replace this with real logic later)
      await new Promise((res) => setTimeout(res, 800))

      // Fire toast notification with product info
      showAddToCartToast({
        title: productTitle,
        quantity,
        color,
        productUrl,
      })
    } catch (error) {
      console.error('Error adding to cart:', error)
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={clsx(
        buttonPrimary,
        'px-6 py-3 text-sm flex items-center gap-2',
        isAdding && 'opacity-50 cursor-not-allowed'
      )}
    >
      {isAdding ? 'Adding...' : (
        <>
          <FiShoppingCart />
          Add to Cart
        </>
      )}
    </button>
  )
}
