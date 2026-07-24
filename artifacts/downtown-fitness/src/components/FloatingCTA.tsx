import { motion } from 'framer-motion';

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed bottom-6 right-24 z-40 hidden md:block"
    >
      <button
        onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
        className="group relative px-7 py-3.5 bg-gradient-primary text-white font-bebas text-lg tracking-wider uppercase rounded-xl shadow-[0_0_25px_rgba(255,107,0,0.2)] transition duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.4)] overflow-hidden"
      >
        <span className="relative z-10">Join Now</span>
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </button>
    </motion.div>
  );
}
