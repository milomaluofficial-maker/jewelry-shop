'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useCart } from '../context/CartContext'

type Finish = 'Silver' | 'Gold' | 'Rose Gold'
type Category = 'rings' | 'necklaces' | 'bracelets' | 'earrings'

interface Product {
  id: number
  name: string
  tagline: string
  material: string
  finish: Finish
  price: number
  category: Category
  badge?: string
  image: string
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Eternal Band Ring',
    tagline: 'Engraved with your chosen coordinates or date',
    material: '925 Sterling Silver',
    finish: 'Silver',
    price: 149,
    category: 'rings',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9',
  },
  {
    id: 2,
    name: 'Lumiere Drop Necklace',
    tagline: 'Delicate pendant with hidden engraving inside',
    material: '18K Gold Plated Stainless Steel',
    finish: 'Gold',
    price: 219,
    category: 'necklaces',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a',
  },
  {
    id: 3,
    name: 'Bloom Bangle',
    tagline: 'Custom name or message in flowing script',
    material: 'Rose Gold Stainless Steel',
    finish: 'Rose Gold',
    price: 179,
    category: 'bracelets',
    image: 'https://images.unsplash.com/photo-1614107151491-6876eecbff89',
  },
  {
    id: 4,
    name: 'Crescent Pendant',
    tagline: 'Laser-cut lunar motif with custom text',
    material: '925 Sterling Silver',
    finish: 'Silver',
    price: 129,
    category: 'necklaces',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259',
  },
  {
    id: 5,
    name: 'Orbit Earrings',
    tagline: 'Engraved initial on each hooped drop',
    material: '18K Gold Plated Stainless Steel',
    finish: 'Gold',
    price: 99,
    category: 'earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908',
  },
  {
    id: 6,
    name: 'Heirloom Locket',
    tagline: 'Opens to reveal your engraved message',
    material: 'Rose Gold Stainless Steel',
    finish: 'Rose Gold',
    price: 199,
    category: 'necklaces',
    badge: 'Limited',
    image: 'https://images.unsplash.com/photo-1588099768523-f4e6a5679d88',
  },
  {
    id: 7,
    name: 'Signet Ring',
    tagline: 'Bold face engraved with monogram or crest',
    material: '18K Gold Plated Stainless Steel',
    finish: 'Gold',
    price: 169,
    category: 'rings',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638',
  },
  {
    id: 8,
    name: 'Infinity Bracelet',
    tagline: 'Names intertwined in the infinity symbol',
    material: '925 Sterling Silver',
    finish: 'Silver',
    price: 159,
    category: 'bracelets',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237',
  },
]

const FILTERS: { label: string; value: 'all' | Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Rings', value: 'rings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Bracelets', value: 'bracelets' },
  { label: 'Earrings', value: 'earrings' },
]

const BADGE_COLOR: Record<string, string> = {
  Bestseller: '#D4A853',
  New: '#2C1810',
  Limited: '#C4867F',
}

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const [hovered, setHovered] = useState(false)

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      material: product.material,
      finish: product.finish,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col bg-warm-white overflow-hidden cursor-pointer"
      style={{
        boxShadow: hovered
          ? '0 24px 64px rgba(44,24,16,0.14)'
          : '0 2px 20px rgba(44,24,16,0.06)',
        transition: 'box-shadow 0.4s ease',
      }}
    >
      {/* Badge */}
      {product.badge && (
        <span
          className="absolute top-4 left-4 z-20 px-3 py-1 text-xs uppercase tracking-widest font-body"
          style={{
            fontFamily: 'var(--font-jost)',
            background: BADGE_COLOR[product.badge] ?? '#2C1810',
            color: '#FFF8F0',
            letterSpacing: '0.15em',
          }}
        >
          {product.badge}
        </span>
      )}

      {/* Image area */}
      <div className="relative h-72 overflow-hidden bg-parchment">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </motion.div>

        {/* Subtle dark overlay on hover */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 0.25 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ background: 'linear-gradient(to top, rgba(44,24,16,0.6) 0%, transparent 60%)' }}
        />

        {/* Laser Engraved tag on hover */}
        <motion.div
          className="absolute bottom-4 left-0 right-0 text-center"
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.3 }}
        >
          <span
            className="text-xs uppercase tracking-widest font-body"
            style={{ fontFamily: 'var(--font-jost)', color: '#D4A853', letterSpacing: '0.2em' }}
          >
            Laser Engraved
          </span>
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="text-xl font-medium leading-tight mb-1"
          style={{ fontFamily: 'var(--font-cormorant)', color: '#2C1810' }}
        >
          {product.name}
        </h3>
        <p
          className="text-xs leading-relaxed mb-3 font-body"
          style={{ fontFamily: 'var(--font-jost)', color: 'rgba(92,61,46,0.6)' }}
        >
          {product.tagline}
        </p>
        <p
          className="text-xs uppercase tracking-widest font-body mb-4"
          style={{ fontFamily: 'var(--font-jost)', color: 'rgba(201,168,124,0.8)', letterSpacing: '0.12em' }}
        >
          {product.material}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span
            className="font-light"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', color: '#2C1810' }}
          >
            ${product.price}
          </span>
          <motion.button
            onClick={handleAdd}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 text-xs uppercase tracking-widest font-body transition-all duration-300"
            style={{
              fontFamily: 'var(--font-jost)',
              background: added ? '#D4A853' : '#2C1810',
              color: '#FEFCF8',
              letterSpacing: '0.15em',
            }}
          >
            {added ? '+ Added' : 'Add to Cart'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductShowcase() {
  const [activeFilter, setActiveFilter] = useState<'all' | Category>('all')

  const filtered =
    activeFilter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeFilter)

  return (
    <section id="collection" className="py-28 px-6 md:px-10 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs uppercase mb-4 font-body"
            style={{ fontFamily: 'var(--font-jost)', letterSpacing: '0.4em', color: '#C9A87C' }}
          >
            Handcrafted Collection
          </p>
          <h2
            className="font-light mb-4"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              color: '#2C1810',
            }}
          >
            Our Signature Pieces
          </h2>
          <p
            className="max-w-md mx-auto text-sm leading-relaxed font-body"
            style={{ fontFamily: 'var(--font-jost)', color: 'rgba(92,61,46,0.6)' }}
          >
            Each piece is made to order, laser-engraved with precision, and shipped in our
            signature gift packaging.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-1 mb-12 flex-wrap"
        >
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className="relative px-6 py-2.5 text-xs uppercase tracking-widest font-body transition-colors"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              <span
                className="relative z-10 transition-colors duration-300"
                style={{ color: activeFilter === f.value ? '#FEFCF8' : 'rgba(92,61,46,0.7)' }}
              >
                {f.label}
              </span>
              {activeFilter === f.value && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0"
                  style={{ background: '#2C1810' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Product grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p
            className="text-sm font-body mb-4"
            style={{ fontFamily: 'var(--font-jost)', color: 'rgba(92,61,46,0.5)' }}
          >
            Don&apos;t see exactly what you want?
          </p>
          <button
            onClick={() => document.querySelector('#custom')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm uppercase tracking-widest font-body border-b pb-0.5 transition-colors"
            style={{
              fontFamily: 'var(--font-jost)',
              color: '#C9A87C',
              borderColor: 'rgba(201,168,124,0.4)',
              letterSpacing: '0.15em',
            }}
          >
            Design Your Own Piece &rarr;
          </button>
        </motion.div>
      </div>
    </section>
  )
}
