import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, MapPin, Clock } from 'lucide-react';
import { business } from '@/config/business';
import MapView from './MapView';

export default function Contact() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  return (
    <section ref={sectionRef} id="contact" className="relative min-h-screen w-full bg-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          className="flex items-center px-8 md:px-16 py-20 lg:py-0"
        >
          <div className="max-w-md">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-semibold"
            >
              Connect
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bebas uppercase tracking-tight mt-2 mb-6 leading-none"
            >
              Let's<br />
              <span className="text-gradient">Talk</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/30 text-sm mb-10 leading-relaxed"
            >
              One message. That's all it takes. We reply instantly on WhatsApp.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href={`https://wa.me/${business.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366]/5 border border-[#25D366]/20 text-[#25D366] rounded-xl hover:bg-[#25D366]/10 transition-colors group mb-12"
            >
              <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
              <div>
                <div className="text-sm font-semibold">WhatsApp</div>
                <div className="text-xs opacity-50">{business.phoneDisplay}</div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {business.locations.map((loc, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                  <h4 className="text-sm font-semibold text-white/70 mb-2">{loc.name}</h4>
                  <div className="flex items-start gap-3 text-white/40 text-sm">
                    <MapPin size={14} className="shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-start gap-3 text-white/30 text-xs mt-2">
                    <Clock size={14} className="shrink-0 mt-0.5" />
                    <div>
                      {loc.hours.map((h, j) => (
                        <span key={j} className="block">{h.day}: {h.hours}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="h-[50vh] lg:h-screen"
        >
          <MapView />
        </motion.div>
      </div>
    </section>
  );
}
