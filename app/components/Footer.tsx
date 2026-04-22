'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = {
  Shop: ['All Jewelry', 'Rings', 'Necklaces', 'Bracelets', 'Earrings', 'Gift Cards'],
  Services: ['Custom Engraving', 'Design Consultation', 'Corporate Gifting', 'Repair & Re-engrave'],
  Company: ['Our Story', 'Craftsmanship', 'Sustainability', 'Press'],
  Support: ['FAQ', 'Shipping & Returns', 'Size Guide', 'Contact Us'],
}

const SOCIALS = [
  {
    label: 'Instagram',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="5"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'Pinterest',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.135-1.866 3.135-4.56 0-2.385-1.715-4.052-4.163-4.052-2.834 0-4.497 2.126-4.497 4.322 0 .856.33 1.772.741 2.274"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subDone, setSubDone] = useState(false)

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubDone(true) }
  }

  return (
    <footer className="bg-charcoal text-cream">
      {/* Newsletter band */}
      <div className="border-b border-warm-white/10 py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-2xl font-light mb-1"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Stay close to the craft
            </h3>
            <p className="text-cream/50 text-sm font-body" style={{ fontFamily: 'var(--font-jost)' }}>
              New designs, engraving inspiration, and member-only offers.
            </p>
          </div>

          {subDone ? (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-soft-brown text-sm tracking-wider font-body"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              ✓ You&apos;re on the list.
            </motion.p>
          ) : (
            <form onSubmit={handleSub} className="flex w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 md:w-72 px-5 py-3.5 bg-warm-white/10 border border-warm-white/20 text-cream placeholder:text-cream/30 text-sm font-body focus:outline-none focus:border-soft-brown transition-colors"
                style={{ fontFamily: 'var(--font-jost)' }}
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-soft-brown text-warm-white text-xs tracking-widest uppercase font-body hover:bg-gold transition-colors flex-shrink-0"
                style={{ fontFamily: 'var(--font-jost)' }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main footer */}
      <div className="py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#"
              className="font-heading text-3xl font-light tracking-[0.25em] text-cream hover:text-soft-brown transition-colors"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              AUREL
            </a>
            <p className="mt-4 text-xs text-cream/40 leading-relaxed font-body" style={{ fontFamily: 'var(--font-jost)' }}>
              Luxury laser-engraved jewelry.
              <br />
              Your story, in precious metal.
            </p>
            <div className="flex gap-4 mt-6">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="text-cream/40 hover:text-soft-brown transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4
                className="text-xs tracking-widest uppercase text-cream/40 mb-5 font-body"
                style={{ fontFamily: 'var(--font-jost)' }}
              >
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-cream/60 hover:text-cream transition-colors font-body"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-warm-white/10 py-6 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/30 font-body" style={{ fontFamily: 'var(--font-jost)' }}>
            © 2026 AUREL Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(item => (
              <a
                key={item}
                href="#"
                className="text-xs text-cream/30 hover:text-cream/60 transition-colors font-body"
                style={{ fontFamily: 'var(--font-jost)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
