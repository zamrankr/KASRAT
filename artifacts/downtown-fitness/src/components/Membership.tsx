import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Check, X, MessageCircle } from 'lucide-react';
import { business } from '@/config/business';

function SignupModal({ plan, onClose }: { plan: typeof business.plans[number]; onClose: () => void }) {
  const [form, setForm] = useState({ name: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', phone: '' });

  const validate = () => {
    const e = { name: '', phone: '' };
    if (!form.name.trim()) e.name = 'Required';
    if (!form.phone.trim()) e.phone = 'Required';
    else if (!/^[0-9\-\+\s]{7,15}$/.test(form.phone.trim())) e.phone = 'Invalid number';
    setErrors(e);
    return !e.name && !e.phone;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const msg = encodeURIComponent(
      `Hi ${business.name}! 👋\n\nI'd like to sign up for the *${plan.name} Plan* (PKR ${plan.price}/mo).\n\n` +
      `Name: ${form.name.trim()}\nPhone: ${form.phone.trim()}`
    );
    window.open(`https://wa.me/${business.whatsappNumber}?text=${msg}`, '_blank');
    onClose();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-sm bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-8">
        <button onClick={onClose} className="absolute top-5 right-5 text-white/20 hover:text-white"><X size={18} /></button>
        <h3 className="text-3xl font-bebas tracking-tight mb-1">{plan.name}</h3>
        <p className="text-white/30 text-sm mb-6">PKR {plan.price}/month</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
            placeholder="Your name" className="w-full bg-white/[0.02] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/40" />
          <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
            placeholder="Phone number" className="w-full bg-white/[0.02] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/40" />
          <button type="submit" className="w-full py-3.5 bg-gradient-primary text-white font-bebas tracking-wider rounded-xl text-lg flex items-center justify-center gap-2">
            <MessageCircle size={16} /> Confirm
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default function Membership() {
  const [selected, setSelected] = useState<typeof business.plans[number] | null>(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  const premium = business.plans.find(p => p.highlighted) || business.plans[1];
  const others = business.plans.filter(p => !p.highlighted);

  return (
    <>
      <section ref={sectionRef} id="membership" className="relative min-h-screen w-full bg-background overflow-hidden flex items-center">
        <motion.div style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0]) }}
          className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-secondary/[0.02]" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-semibold">Pricing</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bebas uppercase tracking-tight mt-2">
              One Price.<br />
              <span className="text-gradient">Full Access.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
            {others.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-white/[0.04] bg-white/[0.01]"
              >
                <h3 className="text-lg font-bebas tracking-wide text-white/40">{plan.name}</h3>
                <div className="mt-3 mb-6">
                  <span className="text-3xl font-bebas text-white">PKR {plan.price}</span>
                  <span className="text-white/20 text-sm">/{plan.period.replace('/', '')}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-white/30">
                      <Check size={10} className="text-primary/60" /> {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setSelected(plan)}
                  className="w-full py-2.5 rounded-lg border border-white/[0.06] text-white/60 text-xs uppercase tracking-[0.15em] hover:bg-white/[0.03] transition">
                  Select
                </button>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-xl bg-gradient-to-b from-primary/[0.04] to-transparent border border-primary/20 relative"
            >
              <div className="absolute -top-3 left-6 px-4 py-1 bg-gradient-primary rounded-full text-[9px] tracking-[0.2em] uppercase font-bold">
                Best Value
              </div>
              <h3 className="text-xl font-bebas tracking-wide mt-2">{premium.name}</h3>
              <div className="mt-3 mb-6">
                <span className="text-5xl font-bebas text-gradient">PKR {premium.price}</span>
                <span className="text-white/30 text-sm">/{premium.period.replace('/', '')}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {premium.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-white/50">
                    <Check size={12} className="text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => setSelected(premium)}
                className="w-full py-3.5 bg-gradient-primary text-white font-bebas tracking-wider rounded-xl text-lg hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] transition">
                GET STARTED
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && <SignupModal plan={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
}
