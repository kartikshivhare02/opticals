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
        className={`absolute inset-x-4 top-16 sm:top-20 flex flex-col items-center text-center max-w-xl mx-auto transition-all duration-700 ease-out ${
          isPhase1
            ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
            : 'opacity-0 -translate-y-6 pointer-events-none scale-95'
        }`}
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full gold-badge-light mb-2.5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89758]" />
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.25em] text-[#8F7238] uppercase font-medium">
            Atelier Series • Est. 2026
          </span>
        </div>

        <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1918] uppercase leading-[1.1] mb-2">
          The Architecture <br />
          <span className="font-serif italic font-normal text-[#96783C]">
            of Sight
          </span>
        </h2>

        <p className="font-sans text-[#736E65] text-xs font-light tracking-wide max-w-xs sm:max-w-md mb-4 leading-relaxed">
          Forged from Japanese aerospace beta-titanium in Sabae. Calibrated with Zeiss diamond crystal optics.
        </p>

        <div className="flex flex-col items-center gap-1 text-[#9E9A91] font-mono text-[9px] tracking-[0.2em] uppercase animate-bounce">
          <span>Scroll to Deconstruct</span>
          <ArrowDown className="w-3 h-3 text-[#B89758]" />
        </div>
      </div>

      {/* PHASE 2: METALLURGY (0.24 - 0.50) - GUARANTEED VISIBLE ON MOBILE */}
      <div
        className={`absolute inset-x-4 top-20 sm:top-auto sm:inset-auto sm:left-12 sm:top-1/2 sm:-translate-y-1/2 max-w-xs sm:max-w-sm transition-all duration-700 ease-out mx-auto sm:mx-0 ${
          isPhase2
            ? 'opacity-100 translate-y-0 sm:translate-x-0 pointer-events-auto scale-100'
            : 'opacity-0 -translate-y-4 sm:-translate-x-8 pointer-events-none scale-95'
        }`}
      >
        <div className="glass-panel-light p-4 sm:p-6 rounded-2xl border border-black/8 shadow-lg">
          <div className="flex items-center gap-1.5 text-[#8F7238] font-mono text-[9px] sm:text-[10px] tracking-widest uppercase mb-1.5">
            <Shield className="w-3.5 h-3.5 text-[#B89758]" />
            <span>Phase 01 / Metallurgy</span>
          </div>

          <h3 className="font-display text-lg sm:text-2xl font-bold text-[#1A1918] uppercase tracking-wide mb-1.5">
            Japanese <br />
            <span className="text-[#96783C] font-serif italic">Beta-Titanium</span>
          </h3>

          <p className="font-sans text-[#736E65] text-[11px] sm:text-xs font-light leading-relaxed mb-3">
            0.02mm surgical CNC tolerances for featherweight 14.8g structural memory.
          </p>

          <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-black/8">
            <div>
              <div className="font-mono text-[8px] sm:text-[9px] text-[#9E9A91] uppercase tracking-wider">Weight</div>
              <div className="font-display text-sm sm:text-base text-[#1A1918] font-bold">14.8 Grams</div>
            </div>
            <div>
              <div className="font-mono text-[8px] sm:text-[9px] text-[#9E9A91] uppercase tracking-wider">Tolerance</div>
              <div className="font-display text-sm sm:text-base text-[#1A1918] font-bold">0.02 mm</div>
            </div>
          </div>
        </div>
      </div>

      {/* PHASE 3: ZEISS OPTICS (0.50 - 0.74) */}
      <div
        className={`absolute inset-x-4 top-20 sm:top-auto sm:inset-auto sm:right-12 sm:top-1/2 sm:-translate-y-1/2 max-w-xs sm:max-w-sm transition-all duration-700 ease-out mx-auto sm:mx-0 ${
          isPhase3
            ? 'opacity-100 translate-y-0 sm:translate-x-0 pointer-events-auto scale-100'
            : 'opacity-0 translate-y-4 sm:translate-x-8 pointer-events-none scale-95'
        }`}
      >
        <div className="glass-panel-light p-4 sm:p-6 rounded-2xl border border-black/8 shadow-lg">
          <div className="flex items-center gap-1.5 text-[#8F7238] font-mono text-[9px] sm:text-[10px] tracking-widest uppercase mb-1.5">
            <Eye className="w-3.5 h-3.5 text-[#B89758]" />
            <span>Phase 02 / Purity</span>
          </div>

          <h3 className="font-display text-lg sm:text-2xl font-bold text-[#1A1918] uppercase tracking-wide mb-1.5">
            Zeiss Diamond <br />
            <span className="text-[#96783C] font-serif italic">Crystal Optics</span>
          </h3>

          <p className="font-sans text-[#736E65] text-[11px] sm:text-xs font-light leading-relaxed mb-3">
            9-layer anti-reflective nanocoating eliminates chromatic aberrations with UV400 shield.
          </p>

          <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-black/8">
            <div>
              <div className="font-mono text-[8px] sm:text-[9px] text-[#9E9A91] uppercase tracking-wider">Transmittance</div>
              <div className="font-display text-sm sm:text-base text-[#1A1918] font-bold">99.8% Clear</div>
            </div>
            <div>
              <div className="font-mono text-[8px] sm:text-[9px] text-[#9E9A91] uppercase tracking-wider">Protection</div>
              <div className="font-display text-sm sm:text-base text-[#1A1918] font-bold">UV400 Cat. 3</div>
            </div>
          </div>
        </div>
      </div>

      {/* PHASE 4: FINAL REVEAL (0.74 - 1.00) */}
      <div
        className={`absolute inset-x-4 top-24 sm:top-1/2 sm:-translate-y-1/2 flex flex-col items-center text-center max-w-sm sm:max-w-md mx-auto transition-all duration-700 ease-out ${
          isPhase4
            ? 'opacity-100 scale-100 pointer-events-auto translate-y-0'
            : 'opacity-0 scale-95 pointer-events-none translate-y-4'
        }`}
      >
        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full gold-badge-light mb-2 shadow-sm">
          <Sparkles className="w-3 h-3 text-[#B89758]" />
          <span className="font-sans text-[9px] tracking-[0.2em] text-[#8F7238] uppercase font-medium">
            Phase 03 / Masterpiece
          </span>
        </div>

        <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-wide text-[#1A1918] mb-1.5">
          Sculpted for the <br />
          <span className="text-[#96783C] font-serif italic font-normal">
            Discerning Visionary
          </span>
        </h3>

        <p className="font-sans text-[#736E65] text-[11px] sm:text-xs font-light leading-relaxed max-w-xs mb-5">
          Individually serialized and hand-adjusted for your cranial anatomy.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full justify-center">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#1A1918] hover:bg-[#8F7238] text-[#FDFBF7] font-sans font-semibold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 shadow-md flex items-center justify-center gap-1.5"
          >
            <Calendar className="w-3 h-3 text-[#B89758]" />
            <span>Book Private Fitting</span>
          </button>

          <a
            href="#collection"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full glass-panel-light text-[#1A1918] hover:border-[#B89758] font-sans font-medium text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-1.5"
          >
            <span>Explore Archive</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Persistent Bottom Bar */}
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between font-mono text-[9px] text-[#9E9A91] tracking-[0.2em] uppercase pt-2 border-t border-black/5">
        <span>Sabae • Milan • New Delhi</span>
        <div className="flex items-center gap-1">
          <span className={`h-1 rounded-full transition-all duration-300 ${isPhase1 ? 'w-4 bg-[#B89758]' : 'w-1 bg-stone-300'}`} />
          <span className={`h-1 rounded-full transition-all duration-300 ${isPhase2 ? 'w-4 bg-[#B89758]' : 'w-1 bg-stone-300'}`} />
          <span className={`h-1 rounded-full transition-all duration-300 ${isPhase3 ? 'w-4 bg-[#B89758]' : 'w-1 bg-stone-300'}`} />
          <span className={`h-1 rounded-full transition-all duration-300 ${isPhase4 ? 'w-4 bg-[#B89758]' : 'w-1 bg-stone-300'}`} />
        </div>
      </div>

    </div>
  );
}
