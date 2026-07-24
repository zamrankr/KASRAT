import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';
import { business } from '@/config/business';

export default function People() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  return (
    <section ref={sectionRef} id="trainers" className="relative min-h-screen w-full bg-background overflow-hidden flex items-center py-20">
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/[0.02] rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-semibold">Team</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bebas uppercase tracking-tight mt-2">
            The People <span className="text-gradient">Behind It</span>
          </h2>
        </motion.div>

        {/* Trainers */}
        <div className="flex gap-6 overflow-x-auto pb-8 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
          {business.trainers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="snap-start shrink-0 w-[280px] md:w-[320px] group"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" loading="lazy" />
              </div>
              <h3 className="text-2xl font-bebas tracking-wide">{t.name}</h3>
              <p className="text-primary/60 text-xs uppercase tracking-[0.15em]">{t.role}</p>
              <div className="flex gap-4 mt-2 text-xs text-white/30">
                <span>{t.exp}</span>
                <span>·</span>
                <span>{t.specialty}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reviews - compact strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-semibold">What members say</span>
            <div className="h-[1px] flex-1 bg-white/[0.04]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {business.reviews.slice(0, 4).map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-xl border border-white/[0.04] bg-white/[0.01]"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={10} fill="currentColor"
                      className={j < r.rating ? 'text-yellow-400' : 'text-yellow-400/10'} />
                  ))}
                </div>
                <p className="text-xs text-white/40 leading-relaxed mb-3 line-clamp-3">"{r.text}"</p>
                <div className="text-xs text-white/50 font-medium">{r.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
