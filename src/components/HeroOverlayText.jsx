import React from 'react';
import { ArrowDown, Sparkles, Shield, Eye, Calendar, ArrowRight } from 'lucide-react';

export default function HeroOverlayText({ scrollProgress, onOpenBooking }) {
  const isPhase1 = scrollProgress >= 0.0 && scrollProgress < 0.24;
  const isPhase2 = scrollProgress >= 0.24 && scrollProgress < 0.50;
  const isPhase3 = scrollProgress >= 0.50 && scrollProgress < 0.74;
  const isPhase4 = scrollProgress >= 0.74;

  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      
      {/* PHASE 1: BRAND INTRO (0.00 - 0.24) */}
      <div
        className={`absolute inset-x-4 top-20 sm:top-28 flex flex-col items-center text-center max-w-xl mx-auto transition-all duration-700 ease-out ${
          isPhase1
            ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
            : 'opacity-0 -translate-y-6 pointer-events-none scale-95'
        }`}
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/10 mb-2.5 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.22em] text-[#8F7238] uppercase font-bold">
            Nagpur Atelier
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#141413] leading-[1.08] mb-2 drop-shadow-sm">
          The Architecture <br />
          <span className="italic text-gold-gradient drop-shadow-sm">
            of Sight
          </span>
        </h1>

        <p className="font-sans text-[#2A2621] text-[11px] sm:text-sm font-medium max-w-[300px] sm:max-w-md mb-3 leading-relaxed drop-shadow-sm">
          Ultra-lightweight Japanese beta-titanium frames & precision anti-glare blue-cut lenses for all-day comfort.
        </p>

        {/* Scroll Indicator: Shows 'Scroll to Focus & Bye Bye Blur World' initially, then on first scroll switches to clean 'Scroll' */}
        <div className="flex flex-col items-center gap-1.5 mt-2 transition-all duration-500">
          {scrollProgress < 0.04 ? (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/10 shadow-sm animate-bounce">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-ping" />
              <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] text-[#141413] uppercase font-bold">
                Scroll to Focus & Bye Bye Blur World
              </span>
              <ArrowDown className="w-3.5 h-3.5 text-[#C5A059]" />
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 text-[#4A453E] font-sans text-[9px] sm:text-[10px] tracking-widest uppercase font-bold animate-pulse">
              <span>Scroll</span>
              <ArrowDown className="w-3 h-3 text-[#C5A059]" />
            </div>
          )}
        </div>
      </div>

      {/* PHASE 2: METALLURGY (0.24 - 0.50) */}
      <div
        className={`absolute inset-x-4 top-22 sm:top-auto sm:inset-auto sm:left-14 sm:top-1/2 sm:-translate-y-1/2 max-w-xs sm:max-w-sm transition-all duration-700 ease-out mx-auto sm:mx-0 ${
          isPhase2
            ? 'opacity-100 translate-y-0 sm:translate-x-0 pointer-events-auto scale-100'
            : 'opacity-0 -translate-y-4 sm:-translate-x-8 pointer-events-none scale-95'
        }`}
      >
        <div className="flex items-center gap-1.5 text-[#8F7238] font-sans text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-1 font-bold">
          <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>01 / Metallurgy</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#141413] leading-[1.1] mb-1.5 drop-shadow-sm">
          Japanese <br />
          <span className="italic text-gold-gradient font-normal">Beta-Titanium</span>
        </h2>

        <p className="font-sans text-[#2A2621] text-[11px] sm:text-xs font-medium leading-relaxed mb-2.5 max-w-[270px] sm:max-w-xs">
          0.02mm CNC milled chassis. Flexible memory metal leaves zero painful nose marks or ear pinching.
        </p>

        <div className="flex items-center gap-3 text-xs font-sans bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/5 inline-flex shadow-sm">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="font-bold text-[#141413]">14.8g</span>
            <span className="text-[#736E65] text-[11px]">Weight</span>
          </div>
          <span className="text-black/20">|</span>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
            <span className="font-bold text-[#141413]">Zero Marks</span>
            <span className="text-[#736E65] text-[11px]">Comfort</span>
          </div>
        </div>
      </div>

      {/* PHASE 3: ZEISS OPTICS (0.50 - 0.74) */}
      <div
        className={`absolute inset-x-4 top-22 sm:top-auto sm:inset-auto sm:right-14 sm:top-1/2 sm:-translate-y-1/2 max-w-xs sm:max-w-sm transition-all duration-700 ease-out mx-auto sm:mx-0 sm:text-right ${
          isPhase3
            ? 'opacity-100 translate-y-0 sm:translate-x-0 pointer-events-auto scale-100'
            : 'opacity-0 translate-y-4 sm:translate-x-8 pointer-events-none scale-95'
        }`}
      >
        <div className="flex items-center gap-1.5 text-[#8F7238] font-sans text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-1 font-bold sm:justify-end">
          <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>02 / Screen Protection</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#141413] leading-[1.1] mb-1.5 drop-shadow-sm">
          Anti-Glare & <br />
          <span className="italic text-gold-gradient font-normal">Blue-Cut Optics</span>
        </h2>

        <p className="font-sans text-[#2A2621] text-[11px] sm:text-xs font-medium leading-relaxed mb-2.5 max-w-[270px] sm:max-w-xs sm:ml-auto">
          9-layer anti-reflective nanocoating shields your eyes from laptop screens, mobiles, and nighttime glare.
        </p>

        <div className="flex items-center gap-3 text-xs font-sans sm:justify-end bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/5 inline-flex shadow-sm">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="font-bold text-[#141413]">Blue-Block</span>
            <span className="text-[#736E65] text-[11px]">Shield</span>
          </div>
          <span className="text-black/20">|</span>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
            <span className="font-bold text-[#141413]">99.8%</span>
            <span className="text-[#736E65] text-[11px]">HD Clear</span>
          </div>
        </div>
      </div>

      {/* PHASE 4: FINAL REVEAL & CTA (0.74 - 1.00) */}
      <div
        className={`absolute inset-x-4 top-22 sm:top-1/2 sm:-translate-y-1/2 flex flex-col items-center text-center max-w-sm sm:max-w-md mx-auto transition-all duration-700 ease-out ${
          isPhase4
            ? 'opacity-100 scale-100 pointer-events-auto translate-y-0'
            : 'opacity-0 scale-95 pointer-events-none translate-y-4'
        }`}
      >
        <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-black/8 mb-2 shadow-sm">
          <Sparkles className="w-3 h-3 text-[#C5A059]" />
          <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.18em] text-[#8F7238] uppercase font-bold">
            100% Genuine • 1-Year Warranty
          </span>
        </div>

        <h2 className="font-serif text-2xl sm:text-5xl font-normal text-[#141413] mb-1.5 leading-tight drop-shadow-sm">
          Sculpted for the <br />
          <span className="italic text-gold-gradient font-normal">
            Discerning Visionary
          </span>
        </h2>

        <p className="font-sans text-[#2A2621] text-[11px] sm:text-xs font-medium leading-relaxed max-w-[280px] mb-4">
          Visit our Dhantoli store in Nagpur or book a free computerized eye test & frame trial.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full max-w-[280px] sm:max-w-md justify-center">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#141413] hover:bg-[#8F7238] text-[#FAF8F5] font-sans font-semibold text-[11px] uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center justify-center gap-1.5 active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Book Free Eye Test</span>
          </button>

          <a
            href="#collection"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-black/10 text-[#141413] hover:border-[#C5A059] font-sans font-medium text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1 shadow-md"
          >
            <span>View All Frames</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Persistent Bottom Bar */}
      <div className="absolute inset-x-4 bottom-3 flex items-center justify-between font-sans text-[9px] text-[#4A453E] tracking-wider uppercase font-bold pt-2 border-t border-black/10">
        <span>Dhantoli, Nagpur • Pan-India</span>
        <div className="flex items-center gap-1">
          <span className={`h-1 rounded-full transition-all duration-300 ${isPhase1 ? 'w-4 bg-[#C5A059]' : 'w-1 bg-stone-400'}`} />
          <span className={`h-1 rounded-full transition-all duration-300 ${isPhase2 ? 'w-4 bg-[#C5A059]' : 'w-1 bg-stone-400'}`} />
          <span className={`h-1 rounded-full transition-all duration-300 ${isPhase3 ? 'w-4 bg-[#C5A059]' : 'w-1 bg-stone-300'}`} />
          <span className={`h-1 rounded-full transition-all duration-300 ${isPhase4 ? 'w-4 bg-[#C5A059]' : 'w-1 bg-stone-300'}`} />
        </div>
      </div>

    </div>
  );
}
