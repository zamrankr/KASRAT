import { motion, useScroll, useTransform } from 'framer-motion';
import { business } from '@/config/business';
import { ArrowDown } from 'lucide-react';
import WebpSequencePlayer from './WebpSequencePlayer';

export default function Hero() {
  const opacity = useTransform(useScroll().scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden bg-background">
      <WebpSequencePlayer className="absolute inset-0 z-0 w-full h-full object-cover" />

      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-background via-background/20 to-black/60" />

      <motion.div style={{ opacity }} className="relative z-[3] h-full flex flex-col items-center justify-center text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/30 font-medium mb-6"
        >
          {business.city} · {business.category}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[18vw] md:text-[12vw] lg:text-[10vw] font-bebas uppercase tracking-tight leading-none"
        >
          <span className="text-gradient">{business.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-4 text-sm md:text-base text-white/30 max-w-md font-light tracking-wide"
        >
          {business.heroTagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10"
        >
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-3.5 bg-white/[0.04] border border-white/[0.1] text-white text-xs uppercase tracking-[0.25em] rounded-full hover:bg-white/[0.08] hover:border-primary/30 transition duration-500 font-medium"
          >
            Explore
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-white/15">Scroll to discover</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-white/20">
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats integrated into hero - floating bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-[3] w-full max-w-4xl px-6"
      >
        <div className="flex justify-center gap-8 md:gap-16 py-4 px-8 rounded-full bg-white/[0.02] border border-white/[0.04] backdrop-blur-xl">
          {business.stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-lg md:text-2xl font-bebas text-white tracking-tight">
                {s.value}{s.suffix}
              </div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/20">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
