'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Step = 1 | 2 | 3

interface FormData {
  pieceType: string
  material: string
  finish: string
  engravingText: string
  font: string
  size: string
  name: string
  email: string
  notes: string
}

const PIECE_TYPES = ['Ring', 'Necklace', 'Bracelet', 'Earrings', 'Pendant', 'Locket']
const MATERIALS = ['925 Sterling Silver', '18K Gold Plated Stainless Steel', 'Rose Gold Stainless Steel']
const FONTS = ['Classic Serif', 'Modern Script', 'Block Letters', 'Coordinates Format']

const inputClass =
  'w-full px-4 py-3.5 bg-beige/50 border border-parchment focus:border-soft-brown focus:outline-none text-charcoal text-sm transition-colors font-body placeholder:text-rich-brown/30'

export default function CustomOrder() {
  const [step, setStep] = useState<Step>(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormData>({
    pieceType: '',
    material: '',
    finish: '',
    engravingText: '',
    font: '',
    size: '',
    name: '',
    email: '',
    notes: '',
  })

  const set = (key: keyof FormData, value: string) =>
    setForm(prev => ({ ...prev, [key]: value }))

  const canNext1 = form.pieceType && form.material
  const canNext2 = form.engravingText && form.font
  const canSubmit = form.name && form.email

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const StepIndicator = () => (
    <div className="flex items-center gap-3 mb-10">
      {([1, 2, 3] as Step[]).map((s, i) => (
        <div key={s} className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-body transition-all duration-300 ${
                step === s
                  ? 'bg-charcoal text-warm-white'
                  : step > s
                  ? 'bg-soft-brown text-warm-white'
                  : 'border border-parchment text-rich-brown/40'
              }`}
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              {step > s ? '✓' : s}
            </div>
            <span
              className={`text-xs tracking-wider uppercase font-body hidden sm:block transition-colors ${
                step === s ? 'text-charcoal' : 'text-rich-brown/40'
              }`}
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              {s === 1 ? 'Piece' : s === 2 ? 'Engraving' : 'Details'}
            </span>
          </div>
          {i < 2 && <div className={`flex-1 h-px w-8 transition-colors ${step > s ? 'bg-soft-brown' : 'bg-parchment'}`} />}
        </div>
      ))}
    </div>
  )

  if (submitted) {
    return (
      <section id="custom" className="py-28 px-6 md:px-10 bg-beige">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center"
        >
          <div className="w-20 h-20 rounded-full bg-warm-white mx-auto flex items-center justify-center mb-8 shadow-sm">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="1.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h2 className="font-heading font-light text-charcoal mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.5rem' }}>
            Request Received
          </h2>
          <p className="text-rich-brown/60 font-body text-sm leading-relaxed mb-8" style={{ fontFamily: 'var(--font-jost)' }}>
            Thank you, {form.name}. We&apos;ll review your custom piece request and reach out within 24 hours with a design preview and quote.
          </p>
          <button
            onClick={() => { setSubmitted(false); setStep(1); setForm({ pieceType: '', material: '', finish: '', engravingText: '', font: '', size: '', name: '', email: '', notes: '' }) }}
            className="text-soft-brown text-xs tracking-widest uppercase font-body border-b border-soft-brown/40 pb-0.5"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            Submit Another Request
          </button>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="custom" className="py-28 px-6 md:px-10 bg-beige">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:sticky lg:top-28"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-soft-brown mb-5 font-body" style={{ fontFamily: 'var(--font-jost)' }}>
            Bespoke Service
          </p>
          <h2
            className="font-heading font-light text-charcoal mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 5vw, 3.8rem)' }}
          >
            Design Your
            <br />
            <em className="text-soft-brown not-italic">Custom Piece</em>
          </h2>
          <p className="text-rich-brown/65 leading-relaxed mb-10 text-sm font-body" style={{ fontFamily: 'var(--font-jost)' }}>
            From a single initial to GPS coordinates of a place that changed your life — our laser engraving captures every detail with micro-precision on sterling silver, 18K gold, or rose gold.
          </p>

          {/* Feature list */}
          <ul className="space-y-5">
            {[
              { icon: '◈', label: 'Precision Laser Engraving', desc: 'Up to 0.1mm accuracy on any text or design' },
              { icon: '✦', label: 'Premium Metals', desc: 'Stainless steel, sterling silver, and gold alloys' },
              { icon: '◯', label: 'Gift Ready', desc: 'Arrives in our luxury branded box with ribbon' },
              { icon: '↻', label: '30-Day Guarantee', desc: 'We re-engrave free if anything is wrong' },
            ].map(item => (
              <li key={item.label} className="flex items-start gap-4">
                <span className="text-soft-brown mt-0.5 text-lg">{item.icon}</span>
                <div>
                  <p className="text-sm font-medium text-charcoal mb-0.5 font-body" style={{ fontFamily: 'var(--font-jost)' }}>{item.label}</p>
                  <p className="text-xs text-rich-brown/55 font-body" style={{ fontFamily: 'var(--font-jost)' }}>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="bg-warm-white p-8 md:p-10"
        >
          <StepIndicator />

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Step 1 */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-5"
                >
                  <h3 className="text-xl font-light text-charcoal mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Choose Your Piece
                  </h3>

                  {/* Piece type grid */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-rich-brown/60 mb-3 font-body" style={{ fontFamily: 'var(--font-jost)' }}>
                      Jewelry Type
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {PIECE_TYPES.map(type => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => set('pieceType', type)}
                          className={`py-3 text-xs tracking-wider uppercase font-body border transition-all duration-200 ${
                            form.pieceType === type
                              ? 'bg-charcoal text-warm-white border-charcoal'
                              : 'bg-transparent text-rich-brown/70 border-parchment hover:border-soft-brown/50'
                          }`}
                          style={{ fontFamily: 'var(--font-jost)' }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Material */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-rich-brown/60 mb-3 font-body" style={{ fontFamily: 'var(--font-jost)' }}>
                      Material
                    </label>
                    <div className="space-y-2">
                      {MATERIALS.map(mat => (
                        <button
                          key={mat}
                          type="button"
                          onClick={() => set('material', mat)}
                          className={`w-full px-4 py-3 text-left text-sm font-body border transition-all duration-200 flex items-center gap-3 ${
                            form.material === mat
                              ? 'border-charcoal bg-charcoal/5'
                              : 'border-parchment hover:border-soft-brown/40'
                          }`}
                          style={{ fontFamily: 'var(--font-jost)' }}
                        >
                          <span className={`w-3.5 h-3.5 rounded-full flex-shrink-0 ${
                            mat.includes('Rose') ? 'bg-rose-gold' :
                            mat.includes('Gold') ? 'bg-gold' : 'bg-silver'
                          }`} />
                          <span className="text-charcoal">{mat}</span>
                          {form.material === mat && <span className="ml-auto text-soft-brown">✓</span>}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!canNext1}
                    className="w-full py-4 bg-charcoal text-warm-white text-xs tracking-widest uppercase font-body disabled:opacity-40 disabled:cursor-not-allowed hover:bg-rich-brown transition-colors mt-2"
                    style={{ fontFamily: 'var(--font-jost)' }}
                  >
                    Continue
                  </button>
                </motion.div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-5"
                >
                  <h3 className="text-xl font-light text-charcoal mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Your Engraving
                  </h3>

                  <div>
                    <label className="block text-xs tracking-widest uppercase text-rich-brown/60 mb-2 font-body" style={{ fontFamily: 'var(--font-jost)' }}>
                      Text to Engrave
                    </label>
                    <textarea
                      value={form.engravingText}
                      onChange={e => set('engravingText', e.target.value)}
                      placeholder="e.g. Forever Yours · 14.06.2019 · 40.7128° N"
                      rows={3}
                      maxLength={80}
                      className={inputClass + ' resize-none'}
                      style={{ fontFamily: 'var(--font-jost)' }}
                    />
                    <p className="text-right text-[10px] text-rich-brown/40 mt-1 font-body" style={{ fontFamily: 'var(--font-jost)' }}>
                      {form.engravingText.length}/80
                    </p>
                  </div>

                  {/* Font selection */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-rich-brown/60 mb-3 font-body" style={{ fontFamily: 'var(--font-jost)' }}>
                      Engraving Style
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {FONTS.map(font => (
                        <button
                          key={font}
                          type="button"
                          onClick={() => set('font', font)}
                          className={`py-3 px-3 text-xs font-body border transition-all duration-200 text-left ${
                            form.font === font
                              ? 'bg-charcoal text-warm-white border-charcoal'
                              : 'bg-transparent text-rich-brown/70 border-parchment hover:border-soft-brown/50'
                          }`}
                          style={{ fontFamily: 'var(--font-jost)' }}
                        >
                          {font}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest uppercase text-rich-brown/60 mb-2 font-body" style={{ fontFamily: 'var(--font-jost)' }}>
                      Size / Ring Size (optional)
                    </label>
                    <input
                      type="text"
                      value={form.size}
                      onChange={e => set('size', e.target.value)}
                      placeholder="e.g. Ring size 7, or wrist 16cm"
                      className={inputClass}
                      style={{ fontFamily: 'var(--font-jost)' }}
                    />
                  </div>

                  <div className="flex gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-4 border border-parchment text-rich-brown/60 text-xs tracking-widest uppercase font-body hover:border-soft-brown/50 transition-colors"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!canNext2}
                      className="flex-1 py-4 bg-charcoal text-warm-white text-xs tracking-widest uppercase font-body disabled:opacity-40 disabled:cursor-not-allowed hover:bg-rich-brown transition-colors"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-5"
                >
                  <h3 className="text-xl font-light text-charcoal mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Your Details
                  </h3>

                  {/* Summary */}
                  <div className="bg-beige/60 p-4 space-y-2 text-xs font-body" style={{ fontFamily: 'var(--font-jost)' }}>
                    <p className="text-rich-brown/50 uppercase tracking-widest mb-3">Order Summary</p>
                    <div className="flex justify-between text-charcoal">
                      <span>Piece</span><span className="font-medium">{form.pieceType}</span>
                    </div>
                    <div className="flex justify-between text-charcoal">
                      <span>Material</span><span className="font-medium">{form.material.split(' ').slice(0, 2).join(' ')}</span>
                    </div>
                    <div className="flex justify-between text-charcoal">
                      <span>Engraving</span><span className="font-medium italic max-w-[140px] text-right">{form.engravingText || '—'}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-rich-brown/60 mb-2 font-body" style={{ fontFamily: 'var(--font-jost)' }}>
                        First Name
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => set('name', e.target.value)}
                        placeholder="Your name"
                        className={inputClass}
                        style={{ fontFamily: 'var(--font-jost)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-rich-brown/60 mb-2 font-body" style={{ fontFamily: 'var(--font-jost)' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => set('email', e.target.value)}
                        placeholder="you@email.com"
                        className={inputClass}
                        style={{ fontFamily: 'var(--font-jost)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest uppercase text-rich-brown/60 mb-2 font-body" style={{ fontFamily: 'var(--font-jost)' }}>
                      Additional Notes (optional)
                    </label>
                    <textarea
                      value={form.notes}
                      onChange={e => set('notes', e.target.value)}
                      placeholder="Special requests, reference images, occasion..."
                      rows={3}
                      className={inputClass + ' resize-none'}
                      style={{ fontFamily: 'var(--font-jost)' }}
                    />
                  </div>

                  <div className="flex gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-1/3 py-4 border border-parchment text-rich-brown/60 text-xs tracking-widest uppercase font-body hover:border-soft-brown/50 transition-colors"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className="flex-1 py-4 bg-gold text-warm-white text-xs tracking-widest uppercase font-body disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gold-dark transition-colors"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      Submit Request
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
