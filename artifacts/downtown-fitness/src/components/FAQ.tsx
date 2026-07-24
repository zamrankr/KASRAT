import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { business } from '@/config/business';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="section-panel-alt relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <h2 className="text-5xl md:text-8xl font-bebas uppercase tracking-tight mb-6">
                Common <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-white/40 text-lg mb-8 font-light">
                Everything you need to know before stepping in.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 glass text-sm uppercase tracking-[0.2em] rounded-xl hover:bg-white/10 transition-colors font-semibold"
              >
                Contact Us
              </button>
            </motion.div>
          </div>

          <div className="lg:w-2/3 space-y-3">
            {business.faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className={`rounded-xl border transition duration-300 ${
                    isOpen ? 'bg-white/[0.03] border-primary/20' : 'bg-white/[0.01] border-white/[0.04]'
                  }`}
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="text-sm font-medium pr-4">{faq.q}</span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-primary/20 text-primary' : 'bg-white/[0.03] text-white/30'
                    }`}>
                      {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-sm text-white/40 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
