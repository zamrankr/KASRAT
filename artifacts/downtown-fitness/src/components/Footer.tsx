import { Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'wouter';
import { business } from '@/config/business';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020202] border-t border-white/[0.04] pt-20 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bebas text-gradient">{business.name}</span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed mb-6">{business.description}</p>
            <div className="flex gap-3">
              {business.socialLinks.instagram && (
                <a href={business.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                  className="text-white/30 hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              )}
              {business.socialLinks.facebook && (
                <a href={business.socialLinks.facebook} target="_blank" rel="noopener noreferrer"
                  className="text-white/30 hover:text-primary transition-colors" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
              )}
              {business.socialLinks.youtube && (
                <a href={business.socialLinks.youtube} target="_blank" rel="noopener noreferrer"
                  className="text-white/30 hover:text-primary transition-colors" aria-label="YouTube">
                  <Youtube size={18} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-white/60 text-xs uppercase tracking-[0.2em] mb-6 font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Membership', 'Facilities', 'Trainers', 'Reviews'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} onClick={(e) => scrollToSection(e, link.toLowerCase())}
                    className="text-white/30 hover:text-primary transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/60 text-xs uppercase tracking-[0.2em] mb-6 font-semibold">Locations</h4>
            <ul className="space-y-4 text-sm text-white/30">
              {business.locations.map((loc, i) => (
                <li key={i}>
                  <div className="text-white/50 font-medium mb-1">{loc.name}</div>
                  <div className="text-xs">{loc.address}</div>
                </li>
              ))}
              <li className="pt-2">{business.phoneDisplay}</li>
              <li className="text-white/20 text-xs">{business.email}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/60 text-xs uppercase tracking-[0.2em] mb-6 font-semibold">Hours</h4>
            <ul className="space-y-3 text-sm text-white/30">
              {business.locations.map((loc, i) => (
                <li key={i}>
                  <div className="text-white/40 text-xs mb-1">{loc.name}</div>
                  {loc.hours.map((h, j) => (
                    <div key={j} className="flex justify-between text-xs">
                      <span>{h.day}</span>
                      <span className="text-white/50">{h.hours}</span>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs uppercase tracking-widest">
            © {currentYear} {business.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/20">
            <Link href="/privacy-policy" className="hover:text-white/50 transition-colors">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-white/50 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
