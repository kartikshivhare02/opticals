import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Layers, Award, Sparkles, MapPin } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-3 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between w-full max-w-4xl px-3 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 ease-out bg-white/95 backdrop-blur-xl border border-black/10 shadow-lg ${
            isScrolled ? 'border-[#C5A059]/40 shadow-xl scale-[0.98]' : ''
          }`}
        >
          {/* 1. Menu Button (Left) */}
          <div className="flex items-center flex-shrink-0">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 sm:p-2 rounded-full hover:bg-black/5 text-[#141413] transition-colors flex items-center gap-1"
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4 text-[#141413]" />
              <span className="hidden sm:inline font-sans text-xs uppercase tracking-wider font-semibold text-[#141413]">
                Menu
              </span>
            </button>
          </div>

          {/* 2. Jasleen Opticals (Center - Perfectly Fitted for Mobile) */}
          <a href="#" className="flex items-center gap-1.5 sm:gap-2 group text-center px-1 overflow-hidden">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0" />
            <span className="font-serif text-xs sm:text-base font-bold tracking-[0.14em] sm:tracking-[0.2em] text-[#141413] uppercase group-hover:text-[#8F7238] transition-colors truncate">
              Jasleen Opticals
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0" />
          </a>

          {/* 3. Book Button (Right - Compact & 100% Mobile Safe) */}
          <div className="flex items-center flex-shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#141413] hover:bg-[#8F7238] text-[#FAF8F5] font-sans font-semibold text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 shadow-sm flex items-center gap-1 active:scale-95 whitespace-nowrap"
            >
              <Calendar className="w-3 h-3 text-[#C5A059]" />
              <span>Book</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Luxury Full Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#FAF8F5]/98 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between p-6 sm:p-10 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-black/5 pb-4 max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full border border-[#C5A059] flex items-center justify-center text-[10px] font-display font-bold text-[#8F7238]">
              JO
            </div>
            <span className="font-serif text-sm font-semibold tracking-[0.2em] text-[#141413] uppercase">
              Jasleen Opticals
            </span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-full bg-black/5 text-[#141413] hover:bg-[#C5A059]/20 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-5 py-6 max-w-4xl mx-auto w-full">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between font-serif text-xl sm:text-3xl text-[#141413] hover:text-[#8F7238] transition-colors py-2 border-b border-black/5"
          >
            <span>01 / Frame Anatomy</span>
            <Layers className="w-4 h-4 text-[#C5A059]" />
          </a>

          <a
            href="#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between font-serif text-xl sm:text-3xl text-[#141413] hover:text-[#8F7238] transition-colors py-2 border-b border-black/5"
          >
            <span>02 / The 2026 Archive</span>
            <Award className="w-4 h-4 text-[#C5A059]" />
          </a>

          <a
            href="#brands"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between font-serif text-xl sm:text-3xl text-[#141413] hover:text-[#8F7238] transition-colors py-2 border-b border-black/5"
          >
            <span>03 / Authorized Brands</span>
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
          </a>

          <a
            href="#store"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between font-serif text-xl sm:text-3xl text-[#141413] hover:text-[#8F7238] transition-colors py-2 border-b border-black/5"
          >
            <span>04 / Flagship Store</span>
            <MapPin className="w-4 h-4 text-[#C5A059]" />
          </a>
        </div>

        {/* Drawer Footer CTA */}
        <div className="flex flex-col gap-3 pt-4 border-t border-black/5 max-w-4xl mx-auto w-full">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3.5 rounded-full bg-[#141413] hover:bg-[#8F7238] text-[#FAF8F5] font-sans font-bold text-xs uppercase tracking-[0.18em] transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            <span>Book In-Store Eye Checkup</span>
          </button>

          <div className="text-center font-sans text-[10px] text-[#736E65]">
            Dhantoli, Nagpur • 100% Original Brand Guarantee
          </div>
        </div>
      </div>
    </>
  );
}
