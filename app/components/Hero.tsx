'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338"
        alt="Luxury gold jewelry"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        loading="eager"
      />

      {/* Layered overlays for drama and text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, rgba(44,24,16,0.72) 0%, rgba(44,24,16,0.45) 50%, rgba(92,61,46,0.55) 100%)',
        }}
      />
      {/* Subtle warm vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(28,16,10,0.5) 100%)',
        }}
      />

      {/* Floating decorative rings */}
      {[
        { size: 300, top: '8%', left: '-4%', delay: 0 },
        { size: 180, top: '65%', left: '2%', delay: 0.3 },
        { size: 420, top: '-10%', right: '-6%', delay: 0.1 },
        { size: 220, bottom: '5%', right: '5%', delay: 0.4 },
      ].map((ring, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: ring.size,
            height: ring.size,
            top: ring.top,
            left: (ring as any).left,
            right: (ring as any).right,
            bottom: (ring as any).bottom,
            border: '1px solid rgba(201,168,124,0.18)',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: ring.delay, ease: 'easeOut' }}
        />
      ))}

      {/* Parallax content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Pre-heading */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: '0.5em' }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs uppercase mb-8 font-body"
          style={{ fontFamily: 'var(--font-jost)', letterSpacing: '0.5em', color: '#C9A87C' }}
        >
          Laser-Engraved &middot; Personalized &middot; Timeless
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-light leading-none mb-6"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(3.2rem, 9vw, 7.5rem)',
            letterSpacing: '-0.02em',
            color: '#FFF8F0',
          }}
        >
          Where Metal
          <br />
          <em style={{ color: '#D4A853', fontStyle: 'normal' }}>Meets Memory</em>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="font-body max-w-xl mx-auto mb-12 leading-relaxed"
          style={{
            fontFamily: 'var(--font-jost)',
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            color: 'rgba(255,248,240,0.75)',
          }}
        >
          Every piece engraved by precision laser — in sterling silver, 18K gold,
          and rose gold. Wear your story, forever.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll('#collection')}
            className="px-10 py-4 text-xs tracking-widest uppercase font-body min-w-52 transition-all duration-300"
            style={{
              fontFamily: 'var(--font-jost)',
              background: '#D4A853',
              color: '#2C1810',
              letterSpacing: '0.2em',
            }}
          >
            Shop Collection
          </button>
          <button
            onClick={() => handleScroll('#custom')}
            className="px-10 py-4 text-xs tracking-widest uppercase font-body min-w-52 transition-all duration-300"
            style={{
              fontFamily: 'var(--font-jost)',
              border: '1px solid rgba(255,248,240,0.5)',
              color: '#FFF8F0',
              letterSpacing: '0.2em',
            }}
          >
            Order Custom
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex items-center justify-center gap-8 mt-16"
          style={{ color: 'rgba(255,248,240,0.4)' }}
        >
          {['Free Engraving', 'Gift Packaging', '30-Day Returns'].map(badge => (
            <span
              key={badge}
              className="flex items-center gap-2 text-xs uppercase tracking-wider font-body"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              <span
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: '#C9A87C' }}
              />
              {badge}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs uppercase tracking-widest font-body"
          style={{ fontFamily: 'var(--font-jost)', color: 'rgba(255,248,240,0.3)' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, rgba(201,168,124,0.5), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
