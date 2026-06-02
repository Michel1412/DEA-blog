'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const INTERVAL_MS = 5500

type HeroBackgroundCarouselProps = {
  images: string[]
  overlay: string
}

export function HeroBackgroundCarousel({ images, overlay }: HeroBackgroundCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(media.matches)
    const onChange = () => setReduceMotion(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reduceMotion || images.length <= 1) return
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [images.length, reduceMotion])

  const displayImages = reduceMotion ? images.slice(0, 1) : images

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden"
      data-testid="hero-background-carousel"
      aria-hidden="true"
    >
      {displayImages.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1.2s] ease-in-out"
          style={{ opacity: index === activeIndex ? 1 : 0 }}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: overlay }}
      />
    </div>
  )
}
