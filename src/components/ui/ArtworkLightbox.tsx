'use client'

import { useState, useEffect } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/plugins/captions.css'

import { Product } from '@/types/product'
import { LIGHTBOX_CONFIG } from '@/config/settings'

interface ArtworkLightboxProps {
  currentProduct: Product
  relatedProducts?: Product[]
}

export default function ArtworkLightbox({ currentProduct, relatedProducts = [] }: ArtworkLightboxProps) {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Build gallery from product images
  const galleryImages = currentProduct.gallery?.length
    ? currentProduct.gallery
    : [currentProduct.imageSrc]

  // Remove default captions by omitting description/title fields
  const gallerySlides = galleryImages.map((src) => ({
    src,
    handle: currentProduct.handle,
  }))

  const relatedSlides = relatedProducts.map((p) => ({
    src: p.imageSrc || '/fallback.jpg',
    handle: p.handle,
  }))

  const allSlides = [...gallerySlides, ...relatedSlides]
  const slides = LIGHTBOX_CONFIG.enableNext ? allSlides : gallerySlides

  useEffect(() => {
    if (slides.length > 0) {
      console.log('[Lightbox Slides Handles]', slides.map(s => s.handle))
    }

    if (LIGHTBOX_CONFIG.keyboardShortcuts) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [slides])

  return (
    <>
      <img
        src={galleryImages[0]}
        alt={currentProduct.title}
        onClick={() => setOpen(true)}
        className="cursor-zoom-in rounded-xl shadow-md transition hover:scale-105 duration-200"
      />

      <Lightbox
        open={open}
        close={() => {
          setOpen(false)
          setCurrentIndex(0)
        }}
        slides={slides}
        plugins={[Zoom, ...(LIGHTBOX_CONFIG.thumbnails ? [Thumbnails] : []), Captions]}
        index={currentIndex}
        on={{
          view: ({ index }) => setCurrentIndex(index),
        }}
        animation={LIGHTBOX_CONFIG.animationEffects ? { fade: 400 } : undefined}
        thumbnails={LIGHTBOX_CONFIG.thumbnails ? { position: 'bottom' } : undefined}
        captions={{
          showToggle: false,
          descriptionTextAlign: 'center',
          render: {
            description: () => null,
          },
        }}
        render={{
          slide: ({ slide }) => (
            <div className="flex flex-col items-center justify-center w-full h-full px-4 pb-[100px]">
              <img
                src={slide.src}
                alt="Artwork"
                className="max-h-[80vh] object-contain mt-[10vh] mb-4"
              />
              <div className="bg-black/70 text-white rounded-lg px-4 py-2 max-w-xl w-full text-center text-sm">
                <p>{slide.handle === currentProduct.handle ? `By ${currentProduct.title}` : 'Explore more artwork'}</p>
                {slide.handle && LIGHTBOX_CONFIG.shareButtons && (
                  <div className="mt-3 space-x-4">
                    <a
                      href={`/products/${slide.handle}`}
                      className="bg-white text-[#5e4033] px-4 py-2 rounded-full text-sm border border-[#5e4033] hover:bg-[#5e4033] hover:text-white transition"
                    >
                      View details →
                    </a>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(`Check this artwork: ${window.location.origin}/products/${slide.handle}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 underline"
                    >
                      Share
                    </a>
                  </div>
                )}
                {LIGHTBOX_CONFIG.previewOnWall && (
                  <div className="mt-4 italic text-xs text-gray-300">Preview on wall coming soon...</div>
                )}
              </div>
            </div>
          ),
        }}
      />

      {/* Optional dark vignette effect */}
      {open && LIGHTBOX_CONFIG.vignetteEffect && (
        <div className="fixed inset-0 pointer-events-none z-[9998] bg-black/40 backdrop-blur-sm" />
      )}
    </>
  )
}
