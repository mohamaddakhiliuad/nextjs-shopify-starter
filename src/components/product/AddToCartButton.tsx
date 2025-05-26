'use client'

import { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { showAddToCartToast } from '@/utils/toastUtils'
import clsx from 'clsx'

import { buttonCartFull } from '@/styles/formStyles'

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
 * Reusable call-to-action button to add an item to cart.
 * - Uses formStyles for consistent CTA styling
 * - Displays loading state while adding
 * - Triggers toast notification upon success
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
      // Simulate API delay (can be replaced with real logic)
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
        buttonCartFull,
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
