// src/utils/toastUtils.ts

import toast, { type Toast } from 'react-hot-toast'
import clsx from 'clsx'

// Toast box style generator
const toastBoxClass = (visible: boolean) =>
  clsx(
    'bg-[#fff8f2]',
    'border border-[#5e4033]',
    'shadow-lg',
    'rounded-xl',
    'p-4',
    'ring-1 ring-black ring-opacity-5',
    'text-[#5e4033]',
    'max-w-sm w-full',
    visible ? 'animate-enter' : 'animate-leave'
  )

// ✅ MAIN EXPORT FUNCTION
export const showAddToCartToast = ({
  title,
  quantity,
  color,
  productUrl,
}: {
  title: string
  quantity: number
  color?: string
  productUrl: string
}) => {
  toast.custom((t: Toast) => {
    return (
      <div className={toastBoxClass(t.visible)}>
        <div className="flex items-start">
          <div className="text-2xl mr-3">🛒</div>
          <div className="flex-1 text-sm">
            <p className="font-semibold">
              {quantity} × {title}
              {color ? ` (${color})` : ''}
            </p>
            <p className="text-[#5e4033]/70">added to your cart successfully.</p>
            <div className="mt-2 flex gap-4">
              <a href={`${productUrl}/cart`} className="underline text-[#5e4033]">
                View Cart
              </a>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="underline text-[#5e4033]"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  })
}
