import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between gap-4 sm:gap-10 px-5 sm:px-8 py-3 rounded-full ${
          isScrolled
            ? 'glass-panel-light shadow-xl border border-[#B89758]/30 scale-[0.97]'
            : 'glass-pill-light border border-black/8 shadow-md'
        }`}
      >
        {/* Left Links (Desktop) */}
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

        {/* Center Prestigious Brand Identity */}
        <a href="#" className="flex flex-col items-center group text-center px-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89758]" />
            <h1 className="font-display text-xs sm:text-sm font-bold tracking-[0.32em] text-[#1A1918] uppercase group-hover:text-[#8F7238] transition-colors">
              Jasleen Opticals
            </h1>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89758]" />
          </div>
          <span className="font-serif italic text-[9px] tracking-[0.22em] text-[#8F7238] uppercase mt-0.5">
            Haute Lunetterie • Sabae & Milan
          </span>
        </a>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#atelier"
            className="hidden lg:inline font-sans text-[10px] uppercase tracking-[0.25em] text-[#55524D] hover:text-[#96783C] transition-colors"
          >
            Atelier
          </a>

          <button
            onClick={onOpenBooking}
            className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#1A1918] hover:bg-[#8F7238] text-[#FDFBF7] font-sans font-semibold text-[9px] sm:text-[10px] uppercase tracking-[0.22em] transition-all duration-300 shadow-sm flex items-center gap-1.5"
          >
            <Calendar className="w-3 h-3 text-[#B89758]" />
            <span>VIP Fitting</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
