import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { business } from '@/config/business';

const stats = business.stats;

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  return (
    <section ref={sectionRef} id="about" className="relative min-h-screen w-full bg-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left - Image */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]), scale: useTransform(scrollYProgress, [0, 1], [1.1, 1]) }}
          className="relative h-[50vh] lg:h-screen overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=2070&auto=format&fit=crop"
            alt="KASRAT"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/80 lg:via-black/20 lg:to-transparent" />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="flex items-center px-8 md:px-16 py-20 lg:py-0"
        >
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-semibold"
            >
              About
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bebas uppercase tracking-tight mt-3 mb-6 leading-none"
            >
              More Than<br />
              <span className="text-gradient">a Gym</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white/30 text-sm md:text-base leading-relaxed mb-8"
            >
              In the heart of {business.city}, {business.name} was built for those who refuse to settle. 
              20,000 sq ft of pure intensity. Every machine. Every rep. Every day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-bebas text-white tracking-tight">
                    {s.value}{s.suffix}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/30">{s.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 px-8 py-3 bg-gradient-primary text-white font-bebas text-lg tracking-wider rounded hover:shadow-[0_0_25px_rgba(255,107,0,0.3)] transition"
            >
              START YOUR JOURNEY
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
