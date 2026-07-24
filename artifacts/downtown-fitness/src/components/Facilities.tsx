import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const facilities = [
  { name: 'Strength Zone', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Cardio Arena', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Functional Training', img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Free Weights', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Recovery & Sauna', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop' },
  { name: 'PT Studios', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop' },
];

export default function Facilities() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <section ref={sectionRef} id="facilities" className="relative h-[150vh] w-full bg-[#050505] overflow-hidden">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute top-8 left-6 md:left-12 z-10"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-semibold">Facilities</span>
          <h2 className="text-4xl md:text-6xl font-bebas uppercase tracking-tight mt-1">
            The <span className="text-gradient">Space</span>
          </h2>
        </motion.div>

        <motion.div style={{ x }} className="flex h-full items-center gap-6 pl-[30vw]">
          {facilities.map((item, i) => (
            <div key={i} className="relative h-[60vh] w-[45vw] md:w-[35vw] lg:w-[28vw] shrink-0 rounded-xl overflow-hidden group">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl md:text-4xl font-bebas tracking-wide">{item.name}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
