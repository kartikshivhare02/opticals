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
        className={`absolute inset-x-4 top-16 sm:top-24 flex flex-col items-center text-center max-w-xl mx-auto transition-all duration-700 ease-out ${
          isPhase1
            ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
            : 'opacity-0 -translate-y-6 pointer-events-none scale-95'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 backdrop-blur-md border border-black/10 mb-3 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.25em] text-[#8F7238] uppercase font-bold">
            Jasleen Opticals • Nagpur
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#141413] leading-[1.08] mb-2.5">
          The Architecture <br />
          <span className="italic text-gold-gradient">
            of Sight
          </span>
        </h1>

        <p className="font-sans text-[#524C44] text-xs sm:text-sm font-normal tracking-normal max-w-xs sm:max-w-md mb-4 leading-relaxed">
          Ultra-lightweight Japanese beta-titanium & precision anti-glare blue-cut lenses for all-day comfort.
        </p>

        <div className="flex flex-col items-center gap-1 text-[#8E867B] font-sans text-[10px] tracking-widest uppercase font-semibold animate-bounce">
          <span>Scroll down to explore</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#C5A059]" />
        </div>
      </div>

      {/* PHASE 2: METALLURGY (0.24 - 0.50) - PURE TRANSPARENT FLOATING TYPOGRAPHY */}
      <div
        className={`absolute inset-x-5 top-20 sm:top-auto sm:inset-auto sm:left-14 sm:top-1/2 sm:-translate-y-1/2 max-w-xs sm:max-w-sm transition-all duration-700 ease-out mx-auto sm:mx-0 ${
          isPhase2
            ? 'opacity-100 translate-y-0 sm:translate-x-0 pointer-events-auto scale-100'
            : 'opacity-0 -translate-y-4 sm:-translate-x-8 pointer-events-none scale-95'
        }`}
      >
        <div className="flex items-center gap-2 text-[#8F7238] font-sans text-[10px] tracking-[0.2em] uppercase mb-1.5 font-bold">
          <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Phase 01 / Metallurgy</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#141413] leading-[1.1] mb-2">
          Japanese <br />
          <span className="italic text-gold-gradient font-normal">Beta-Titanium</span>
        </h2>

        <p className="font-sans text-[#524C44] text-xs sm:text-sm font-normal leading-relaxed mb-3 max-w-xs">
          0.02mm precision milled chassis. Flexible memory metal leaves zero painful nose marks or ear pinching.
        </p>

        {/* Clean Minimal Floating Inline Metrics (No box, no grid) */}
        <div className="flex items-center gap-4 text-xs font-sans">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="font-bold text-[#141413]">14.8g</span>
            <span className="text-[#8E867B]">Weight</span>
          </div>
          <span className="text-black/20">|</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
            <span className="font-bold text-[#141413]">Zero Marks</span>
            <span className="text-[#8E867B]">Fit</span>
          </div>
        </div>
      </div>

      {/* PHASE 3: ZEISS OPTICS (0.50 - 0.74) - PURE TRANSPARENT FLOATING TYPOGRAPHY */}
      <div
        className={`absolute inset-x-5 top-20 sm:top-auto sm:inset-auto sm:right-14 sm:top-1/2 sm:-translate-y-1/2 max-w-xs sm:max-w-sm transition-all duration-700 ease-out mx-auto sm:mx-0 sm:text-right ${
          isPhase3
            ? 'opacity-100 translate-y-0 sm:translate-x-0 pointer-events-auto scale-100'
            : 'opacity-0 translate-y-4 sm:translate-x-8 pointer-events-none scale-95'
        }`}
      >
        <div className="flex items-center gap-2 text-[#8F7238] font-sans text-[10px] tracking-[0.2em] uppercase mb-1.5 font-bold sm:justify-end">
          <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Phase 02 / Optical Purity</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#141413] leading-[1.1] mb-2">
          Anti-Glare & <br />
          <span className="italic text-gold-gradient font-normal">Blue-Cut Optics</span>
        </h2>

        <p className="font-sans text-[#524C44] text-xs sm:text-sm font-normal leading-relaxed mb-3 max-w-xs sm:ml-auto">
          9-layer anti-reflective nanocoating shields your eyes from laptop screens, mobiles, and nighttime headlight glare.
        </p>

        {/* Clean Minimal Floating Inline Metrics */}
        <div className="flex items-center gap-4 text-xs font-sans sm:justify-end">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="font-bold text-[#141413]">Blue-Block</span>
            <span className="text-[#8E867B]">Guard</span>
          </div>
          <span className="text-black/20">|</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
            <span className="font-bold text-[#141413]">99.8%</span>
            <span className="text-[#8E867B]">HD Clear</span>
          </div>
        </div>
      </div>

      {/* PHASE 4: FINAL REVEAL & CTA (0.74 - 1.00) */}
      <div
        className={`absolute inset-x-4 top-24 sm:top-1/2 sm:-translate-y-1/2 flex flex-col items-center text-center max-w-sm sm:max-w-md mx-auto transition-all duration-700 ease-out ${
          isPhase4
            ? 'opacity-100 scale-100 pointer-events-auto translate-y-0'
            : 'opacity-0 scale-95 pointer-events-none translate-y-4'
        }`}
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 backdrop-blur-md border border-black/10 mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="font-sans text-[9px] tracking-[0.2em] text-[#8F7238] uppercase font-bold">
            100% Genuine • 1-Year Warranty
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141413] mb-2 leading-tight">
          Sculpted for the <br />
          <span className="italic text-gold-gradient font-normal">
            Discerning Visionary
          </span>
        </h2>

        <p className="font-sans text-[#524C44] text-xs sm:text-sm font-normal leading-relaxed max-w-xs mb-6">
          Visit our Dhantoli store in Nagpur or book a free computerized eye test & frame trial.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#141413] hover:bg-[#8F7238] text-[#FAF8F5] font-sans font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 shadow-md flex items-center justify-center gap-2 active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Book Free Eye Test</span>
          </button>

          <a
            href="#collection"
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-white/80 backdrop-blur-md border border-black/10 text-[#141413] hover:border-[#C5A059] font-sans font-medium text-xs uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>View All Frames</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Persistent Bottom Bar */}
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between font-sans text-[10px] text-[#8E867B] tracking-wider uppercase font-semibold pt-2 border-t border-black/5">
        <span>Dhantoli, Nagpur • Pan-India Delivery</span>
        <div className="flex items-center gap-1.5">
          <span className={`h-1 rounded-full transition-all duration-300 ${isPhase1 ? 'w-5 bg-[#C5A059]' : 'w-1.5 bg-stone-300'}`} />
          <span className={`h-1 rounded-full transition-all duration-300 ${isPhase2 ? 'w-5 bg-[#C5A059]' : 'w-1.5 bg-stone-300'}`} />
          <span className={`h-1 rounded-full transition-all duration-300 ${isPhase3 ? 'w-5 bg-[#C5A059]' : 'w-1.5 bg-stone-300'}`} />
          <span className={`h-1 rounded-full transition-all duration-300 ${isPhase4 ? 'w-5 bg-[#C5A059]' : 'w-1.5 bg-stone-300'}`} />
        </div>
      </div>

    </div>
  );
}
