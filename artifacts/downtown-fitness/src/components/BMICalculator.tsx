import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      const val = w / (h * h);
      setBmi(parseFloat(val.toFixed(1)));
      if (val < 18.5) { setCategory('Underweight'); setProgress(20); }
      else if (val <= 24.9) { setCategory('Normal'); setProgress(45); }
      else if (val <= 29.9) { setCategory('Overweight'); setProgress(70); }
      else { setCategory('Obese'); setProgress(95); }
    }
  };

  return (
    <section ref={sectionRef} className="section-panel relative overflow-hidden snap-start snap-always">
      <motion.div style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0]) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bebas text-white/[0.015] whitespace-nowrap pointer-events-none select-none">
        MEASURE
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/[0.04] bg-white/[0.02] p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bebas uppercase tracking-tight mb-2"
              >
                Your <span className="text-gradient">BMI</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/40 text-sm mb-8"
              >
                Know your numbers. Then crush your goals.
              </motion.p>

              <form onSubmit={calculate} className="space-y-5">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 block mb-1.5">Height (cm)</label>
                  <input type="number" value={height} onChange={e => setHeight(e.target.value)}
                    placeholder="e.g. 175"
                    className="w-full bg-white/[0.02] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/40 transition-colors"
                    required />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 block mb-1.5">Weight (kg)</label>
                  <input type="number" value={weight} onChange={e => setWeight(e.target.value)}
                    placeholder="e.g. 70"
                    className="w-full bg-white/[0.02] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/40 transition-colors"
                    required />
                </div>
                <button type="submit"
                  className="w-full py-4 bg-gradient-primary text-white font-bebas text-lg tracking-wider rounded-xl hover:shadow-[0_0_30px_rgba(255,107,0,0.2)] transition"
                >
                  Calculate
                </button>
              </form>
            </div>

            <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-8 h-full flex flex-col justify-center">
              {bmi !== null ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">Your Result</div>
                  <div className="text-6xl font-bebas text-gradient mb-1">{bmi}</div>
                  <div className="text-lg font-semibold text-white mb-8">{category}</div>

                  <div className="relative h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden mb-2">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`absolute top-0 left-0 h-full rounded-full ${
                        category === 'Normal' ? 'bg-green-500/60' :
                        category === 'Underweight' ? 'bg-blue-500/60' :
                        category === 'Overweight' ? 'bg-yellow-500/60' : 'bg-red-500/60'
                      }`} />
                  </div>
                  <div className="flex justify-between text-[9px] text-white/20 uppercase tracking-wider mb-8">
                    <span>Under</span><span>Normal</span><span>Over</span><span>Obese</span>
                  </div>

                  <p className="text-xs text-white/30">Visit us for a free fitness assessment.</p>
                </motion.div>
              ) : (
                <div className="text-center opacity-40 flex flex-col items-center justify-center h-full">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center mb-4">
                    <span className="text-xl">?</span>
                  </div>
                  <p className="text-xs text-white/30">Enter your details<br />to see your result</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
