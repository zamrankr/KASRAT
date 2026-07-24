import { motion } from 'framer-motion';

export function StaggerText({ text, className = '', gradient = false }: { text: string; className?: string; gradient?: boolean }) {
  const chars = text.split('')

  return (
    <span className={`inline ${className}`}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.03, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className={`inline-block ${gradient ? 'text-gradient' : ''}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export function WordReveal({ text, className = '' }: { text: string; className?: string }) {
  const words = text.split(' ')

  return (
    <span className={`inline ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
