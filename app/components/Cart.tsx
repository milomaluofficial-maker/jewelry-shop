'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, removeItem, updateQty, total, isOpen, setIsOpen } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-charcoal/30 backdrop-blur-sm z-50"
          />

          {/* Panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-warm-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-7 border-b border-parchment">
              <h2
                className="text-2xl font-light tracking-widest text-charcoal"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Your Selection
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-rich-brown/60 hover:text-charcoal transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-beige flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A87C" strokeWidth="1.5">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 01-8 0"/>
                    </svg>
                  </div>
                  <p className="text-rich-brown/60 font-body text-sm tracking-wide" style={{ fontFamily: 'var(--font-jost)' }}>
                    Your cart is empty
                  </p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-soft-brown text-sm underline underline-offset-4 font-body"
                    style={{ fontFamily: 'var(--font-jost)' }}
                  >
                    Continue shopping
                  </button>
                </div>
              ) : (
                items.map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 pb-6 border-b border-parchment last:border-none"
                  >
                    {/* Product swatch */}
                    <div className={`w-16 h-16 rounded-lg flex-shrink-0 flex items-center justify-center ${
                      item.finish === 'Gold' ? 'bg-gradient-to-br from-amber-100 to-yellow-200' :
                      item.finish === 'Rose Gold' ? 'bg-gradient-to-br from-rose-100 to-pink-200' :
                      'bg-gradient-to-br from-slate-100 to-gray-200'
                    }`}>
                      <span className="text-2xl">
                        {item.finish === 'Gold' ? '✦' : item.finish === 'Rose Gold' ? '✿' : '◈'}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4
                        className="text-base text-charcoal font-medium leading-snug"
                        style={{ fontFamily: 'var(--font-cormorant)' }}
                      >
                        {item.name}
                      </h4>
                      <p className="text-xs text-rich-brown/60 mt-0.5 font-body" style={{ fontFamily: 'var(--font-jost)' }}>
                        {item.material}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQty(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded border border-parchment text-rich-brown hover:border-soft-brown transition-colors text-sm"
                          >
                            −
                          </button>
                          <span className="text-sm w-4 text-center font-body" style={{ fontFamily: 'var(--font-jost)' }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded border border-parchment text-rich-brown hover:border-soft-brown transition-colors text-sm"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-charcoal font-body" style={{ fontFamily: 'var(--font-jost)' }}>
                            ${(item.price * item.quantity).toLocaleString()}
                          </span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-rich-brown/40 hover:text-rose-gold transition-colors"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="18" y1="6" x2="6" y2="18"/>
                              <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-8 py-7 border-t border-parchment space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm tracking-widest uppercase font-body text-rich-brown/70" style={{ fontFamily: 'var(--font-jost)' }}>
                    Total
                  </span>
                  <span className="text-2xl font-light text-charcoal" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    ${total.toLocaleString()}
                  </span>
                </div>
                <button className="w-full h-13 bg-charcoal text-warm-white text-sm tracking-widest uppercase font-body hover:bg-rich-brown transition-colors rounded-none py-4"
                  style={{ fontFamily: 'var(--font-jost)' }}>
                  Proceed to Checkout
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center text-xs text-rich-brown/50 hover:text-soft-brown transition-colors tracking-wider uppercase font-body"
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
