'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TESTIMONIALS = [
  {
    quote: 'The engraving was flawless — even our dog’s paw print came out perfectly. Wearing it every day.',
    author: 'Sarah M.',
    location: 'London',
  },
  {
    quote: 'Ordered a custom coordinate ring for our anniversary. The quality is unreal, especially at this price.',
    author: 'James & Priya',
    location: 'New York',
  },
  {
    quote: 'AUREL re-engraved my locket two years later when I wanted to update the text. No charge. No questions.',
    author: 'Claudette R.',
    location: 'Paris',
  },
]

const PILLARS = [
  {
    icon: (
      <svg viewBox="0 0 48 48" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4 L44 14 L44 34 L24 44 L4 34 L4 14 Z" />
        <path d="M24 4 L24 44 M4 14 L44 14 M4 34 L44 34" />
      </svg>
    ),
    title: 'Precision Laser',
    desc: 'Our industrial-grade fiber laser achieves 0.1mm detail — capturing text, dates, coordinates, and custom designs with jeweller-level accuracy.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="18" />
        <path d="M24 6 L24 24 L36 12" />
      </svg>
    ),
    title: 'Made to Order',
    desc: 'Every piece is crafted after your order is placed. No mass production — just your design, your metals, your story.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4 L30 18 L44 20 L34 30 L36 44 L24 38 L12 44 L14 30 L4 20 L18 18 Z" />
      </svg>
    ),
    title: 'Premium Metals',
    desc: 'We use 925 sterling silver, 316L stainless steel with 18K gold plating, and rose gold alloy — all hypoallergenic and tarnish-resistant.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="20" width="36" height="24" rx="2" />
        <path d="M16 20 V14 a8 8 0 0 1 16 0 V20" />
      </svg>
    ),
    title: 'Lifetime Promise',
    desc: 'If the engraving fades or you want to update it — we re-engrave free of charge, for life. Because your story may grow.',
  },
]

const STATS = [
  { value: '12,000+', label: 'Pieces Created' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '62', label: 'Countries Shipped' },
  { value: '< 24h', label: 'Response Time' },
]

export default function About() {
  return (
    <section id="about" className="bg-warm-white">
      {/* Brand story */}
      <div
        className="py-28 px-6 md:px-10 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #2C1810 0%, #5C3D2E 100%)' }}
      >
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border pointer-events-none" style={{ borderColor: 'rgba(254,252,248,0.05)' }} />
        <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full border pointer-events-none" style={{ borderColor: 'rgba(254,252,248,0.05)' }} />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p
              className="text-xs tracking-widest uppercase mb-5 font-body"
              style={{ fontFamily: 'var(--font-jost)', color: '#C9A87C', letterSpacing: '0.4em' }}
            >
              Our Story
            </p>
            <h2
              className="font-light leading-tight mb-8"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', color: '#FFF8F0' }}
            >
              Born from the Belief That
              <br />
              <em style={{ color: '#C9A87C', fontStyle: 'normal' }}>Jewelry Should Mean Something</em>
            </h2>
            <div
              className="space-y-4 leading-relaxed text-sm font-body"
              style={{ fontFamily: 'var(--font-jost)', color: 'rgba(255,248,240,0.65)' }}
            >
              <p>
                AUREL started in a small studio in 2019 with a single laser engraver and a belief: that the most precious jewelry is defined not by carats, but by what it carries.
              </p>
              <p>
                Every ring, necklace, and bracelet we create is a vessel for memory. A wedding date etched inside a band. A child&apos;s first words traced on a pendant. Coordinates of the place where everything changed.
              </p>
              <p>
                We work with premium metals — sterling silver, surgical-grade stainless steel in gold and rose gold — because something this personal deserves to last a lifetime.
              </p>
            </div>
          </motion.div>

          {/* Right: image + stats overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative h-[420px] lg:h-[500px] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
              alt="Gold jewelry detail"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(28,14,8,0.85) 0%, rgba(28,14,8,0.2) 50%, transparent 100%)' }}
            />
            {/* Stats pinned to bottom */}
            <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(254,252,248,0.08)' }}>
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-5 flex flex-col"
                  style={{ backgroundColor: 'rgba(44,24,16,0.55)', backdropFilter: 'blur(4px)' }}
                >
                  <span
                    className="font-light"
                    style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.8rem', color: '#FFF8F0' }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs uppercase tracking-widest font-body"
                    style={{ fontFamily: 'var(--font-jost)', color: 'rgba(255,248,240,0.45)' }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-width lifestyle image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative h-[480px] md:h-[580px] overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e"
          alt="Jewelry craftsmanship"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(44,24,16,0.65) 0%, rgba(44,24,16,0.2) 60%, transparent 100%)',
          }}
        />
        <div className="absolute inset-0 flex items-center px-10 md:px-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="max-w-md"
          >
            <p
              className="text-xs uppercase mb-4 font-body"
              style={{ fontFamily: 'var(--font-jost)', letterSpacing: '0.4em', color: '#D4A853' }}
            >
              The AUREL Promise
            </p>
            <h3
              className="font-light leading-tight mb-5"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFF8F0' }}
            >
              Every mark made with intention
            </h3>
            <p
              className="text-sm leading-relaxed font-body"
              style={{ fontFamily: 'var(--font-jost)', color: 'rgba(255,248,240,0.7)' }}
            >
              We spend more time on each piece than any mass-market brand would find profitable.
              That is precisely the point.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Pillars */}
      <div className="py-24 px-6 md:px-10" style={{ backgroundColor: 'rgba(245,239,230,0.4)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p
              className="text-xs uppercase mb-4 font-body"
              style={{ fontFamily: 'var(--font-jost)', letterSpacing: '0.4em', color: '#C9A87C' }}
            >
              Why AUREL
            </p>
            <h2
              className="font-light"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#2C1810' }}
            >
              Crafted with Intention
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group text-center p-8 transition-colors duration-300"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#FEFCF8' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent' }}
              >
                <div className="mb-6 flex justify-center transition-colors duration-300" style={{ color: '#C9A87C' }}>
                  {pillar.icon}
                </div>
                <h3
                  className="mb-3"
                  style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.25rem', fontWeight: 500, color: '#2C1810' }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-sm leading-relaxed font-body"
                  style={{ fontFamily: 'var(--font-jost)', color: 'rgba(92,61,46,0.6)' }}
                >
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-6 border-t" style={{ borderColor: '#EDE0D0' }}>
        <p
          className="text-center text-xs uppercase mb-10 font-body"
          style={{ fontFamily: 'var(--font-jost)', letterSpacing: '0.4em', color: 'rgba(92,61,46,0.4)' }}
        >
          What Our Customers Say
        </p>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 border-l-2"
              style={{ borderColor: 'rgba(201,168,124,0.3)' }}
            >
              <p
                className="text-sm italic leading-relaxed mb-4 font-body"
                style={{ fontFamily: 'var(--font-jost)', color: 'rgba(92,61,46,0.7)' }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  className="text-sm font-medium font-body"
                  style={{ fontFamily: 'var(--font-jost)', color: '#2C1810' }}
                >
                  {t.author}
                </p>
                <p
                  className="text-xs font-body"
                  style={{ fontFamily: 'var(--font-jost)', color: 'rgba(92,61,46,0.4)' }}
                >
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
