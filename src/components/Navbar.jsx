import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Layers, Award, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // On mobile & desktop: become visible once user starts scrolling past the hero intro / into the content
      const heroThreshold = window.innerWidth < 768 ? window.innerHeight * 0.65 : 40;
      setIsScrolledPastHero(window.scrollY > heroThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-3 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none transition-all duration-500 ease-out ${
          isScrolledPastHero
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-6 pointer-events-none'
        }`}
      >
        <nav className="pointer-events-auto flex items-center justify-between w-full max-w-5xl px-4 sm:px-8 py-2.5 sm:py-3 rounded-full glass-panel-light border border-[#B89758]/30 shadow-xl">
          
          {/* Mobile Left: Menu Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 rounded-full bg-black/5 hover:bg-[#B89758]/20 text-[#1A1918] transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4 text-[#1A1918]" />
            </button>
          </div>

          {/* Desktop Left Links */}
          <div className="hidden lg:flex items-center gap-7 font-sans text-[10px] uppercase tracking-[0.25em] text-[#55524D]">
            <a href="#features" className="hover:text-[#96783C] transition-colors">
              Anatomy
            </a>
            <a href="#collection" className="hover:text-[#96783C] transition-colors">
              Archive 2026
            </a>
            <a href="#brands" className="hover:text-[#96783C] transition-colors">
              Brands
            </a>
          </div>

          {/* Center Prestigious Brand Identity (Always Centered) */}
          <a href="#" className="flex flex-col items-center group text-center mx-auto lg:mx-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89758]" />
              <h1 className="font-display text-[11px] sm:text-sm font-bold tracking-[0.28em] sm:tracking-[0.32em] text-[#1A1918] uppercase group-hover:text-[#8F7238] transition-colors whitespace-nowrap">
                Jasleen Opticals
              </h1>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89758]" />
            </div>
            <span className="font-serif italic text-[8px] sm:text-[9px] tracking-[0.2em] text-[#8F7238] uppercase">
              Haute Lunetterie
            </span>
          </a>

          {/* Right Action CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#atelier"
              className="hidden lg:inline font-sans text-[10px] uppercase tracking-[0.25em] text-[#55524D] hover:text-[#96783C] transition-colors"
            >
              Atelier
            </a>

            <button
              onClick={onOpenBooking}
              className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#1A1918] hover:bg-[#8F7238] text-[#FDFBF7] font-sans font-semibold text-[9px] sm:text-[10px] uppercase tracking-[0.2em] transition-all duration-300 shadow-sm flex items-center gap-1"
            >
              <Calendar className="w-3 h-3 text-[#B89758]" />
              <span className="hidden xs:inline">VIP Fitting</span>
              <span className="xs:hidden">VIP</span>
            </button>
          </div>

        </nav>
      </header>

      {/* Mobile Full-Screen Luxury Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#FDFBF7]/98 backdrop-blur-2xl transition-all duration-400 lg:hidden flex flex-col justify-between p-6 sm:p-8 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-black/5 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border border-[#B89758] flex items-center justify-center text-[9px] font-display font-bold text-[#8F7238]">
              JO
            </div>
            <span className="font-display text-xs font-bold tracking-[0.25em] text-[#1A1918] uppercase">
              Jasleen Opticals
            </span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-full bg-black/5 text-[#1A1918] hover:bg-[#B89758]/20 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex flex-col gap-6 py-8">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between font-display text-xl uppercase tracking-[0.2em] text-[#1A1918] hover:text-[#8F7238] transition-colors py-2 border-b border-black/5"
          >
            <span>01 / Anatomy</span>
            <Layers className="w-4 h-4 text-[#B89758]" />
          </a>

          <a
            href="#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between font-display text-xl uppercase tracking-[0.2em] text-[#1A1918] hover:text-[#8F7238] transition-colors py-2 border-b border-black/5"
          >
            <span>02 / Archive 2026</span>
            <Award className="w-4 h-4 text-[#B89758]" />
          </a>

          <a
            href="#brands"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between font-display text-xl uppercase tracking-[0.2em] text-[#1A1918] hover:text-[#8F7238] transition-colors py-2 border-b border-black/5"
          >
            <span>03 / Luxury Brands</span>
            <Sparkles className="w-4 h-4 text-[#B89758]" />
          </a>

          <a
            href="#atelier"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between font-display text-xl uppercase tracking-[0.2em] text-[#1A1918] hover:text-[#8F7238] transition-colors py-2 border-b border-black/5"
          >
            <span>04 / Sabae Atelier</span>
            <span className="font-mono text-xs text-[#8F7238]">JP</span>
          </a>
        </div>

        {/* Drawer Footer CTA */}
        <div className="flex flex-col gap-3 pt-6 border-t border-black/5">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3.5 rounded-full bg-[#1A1918] hover:bg-[#8F7238] text-[#FDFBF7] font-sans font-bold text-xs uppercase tracking-[0.2em] transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5 text-[#B89758]" />
            <span>Book Private Fitting</span>
          </button>

          <div className="text-center font-mono text-[9px] text-[#9E9A91] uppercase tracking-[0.25em]">
            Authorized Luxury Retailer • Sabae & Milan
          </div>
        </div>
      </div>
    </>
  );
}
