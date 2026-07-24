import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { business } from '@/config/business';
import { UserCheck, Dumbbell, Tag, Maximize2, Heart, Zap, Activity, Users } from 'lucide-react';

const iconMap: Record<string, any> = { UserCheck, Dumbbell, Tag, Maximize2, Heart, Zap, Activity, Users };

export default function WhyUs() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-semibold">What Sets Us Apart</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bebas uppercase tracking-tight mt-2">
            Engineered for<br />
            <span className="text-gradient">Results</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {business.features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Dumbbell;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group border-t border-white/[0.03] last:border-b"
              >
                <div className="flex items-center gap-6 md:gap-10 py-6 md:py-8 hover:bg-white/[0.01] transition-colors px-4 md:px-8 -mx-4 md:-mx-8 rounded-lg">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/[0.06] flex items-center justify-center shrink-0 group-hover:bg-primary/[0.12] transition-colors">
                    <Icon className="text-primary/60 group-hover:text-primary transition-colors" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bebas tracking-wide">{feature.title}</h3>
                    <p className="text-xs md:text-sm text-white/30 leading-relaxed mt-0.5">{feature.desc}</p>
                  </div>
                  <div className="text-white/10 text-sm font-mono hidden md:block">{(i + 1).toString().padStart(2, '0')}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
