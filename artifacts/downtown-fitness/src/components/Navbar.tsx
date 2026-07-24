import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { business } from '@/config/business';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Membership', href: '#membership' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > 50);
      setHidden(current > 200 && current > lastScroll);
      lastScroll = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const isHome = window.location.pathname === '/' || window.location.pathname === '';
    if (!isHome) {
      setLocation('/');
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 100);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-40 transition duration-500 ${
          isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/[0.04] py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <button onClick={() => { setMobileOpen(false); setLocation('/'); }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-bebas text-gradient tracking-tight">{business.name}</span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button key={link.name} onClick={() => scrollTo(link.href)}
                className="text-xs uppercase tracking-[0.15em] text-white/40 hover:text-white transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
            <button onClick={() => scrollTo('#membership')}
              className="px-5 py-2 bg-gradient-primary text-white text-xs uppercase tracking-[0.15em] font-semibold rounded hover:shadow-[0_0_20px_rgba(255,107,0,0.3)] transition"
            >
              Join Now
            </button>
          </nav>

          <button className="lg:hidden text-white/60 hover:text-white p-2" onClick={() => setMobileOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-[#080808] border-l border-white/[0.04] z-50 p-8 flex flex-col lg:hidden"
            >
              <div className="flex justify-end mb-10">
                <button onClick={() => setMobileOpen(false)} className="text-white/30 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <button key={link.name} onClick={() => scrollTo(link.href)}
                    className="text-3xl font-bebas tracking-tight text-left text-white/30 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <button onClick={() => scrollTo('#membership')}
                  className="mt-6 px-6 py-3 bg-gradient-primary text-white font-bebas tracking-wider rounded text-xl text-center"
                >
                  Join Now
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
