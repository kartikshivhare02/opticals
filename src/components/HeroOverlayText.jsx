import React from 'react';
import { ArrowDown, Sparkles, Shield, Eye, Calendar, ArrowRight } from 'lucide-react';

export default function HeroOverlayText({ scrollProgress, onOpenBooking }) {
  const isPhase1 = scrollProgress >= 0.0 && scrollProgress < 0.24;
  const isPhase2 = scrollProgress >= 0.24 && scrollProgress < 0.50;
  const isPhase3 = scrollProgress >= 0.50 && scrollProgress < 0.74;
  const isPhase4 = scrollProgress >= 0.74;

  return (
    <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-4 sm:p-8 md:p-12 lg:p-16">
      
      {/* PHASE 1: BRAND INTRO (0.00 - 0.24) */}
      <div
        className={`transition-all duration-700 ease-out flex flex-col items-center text-center max-w-xl mx-auto mt-20 sm:mt-16 ${
          isPhase1
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-6 pointer-events-none'
        }`}
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full gold-badge-light mb-2.5">
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

        <p className="font-sans text-[#736E65] text-[11px] sm:text-xs font-light tracking-wide max-w-xs sm:max-w-md mb-4 leading-relaxed">
          Forged from Japanese aerospace beta-titanium in Sabae. Calibrated with Zeiss diamond crystal optics.
        </p>

        <div className="flex flex-col items-center gap-1 text-[#9E9A91] font-mono text-[9px] tracking-[0.2em] uppercase animate-bounce">
          <span>Scroll to Deconstruct</span>
          <ArrowDown className="w-3 h-3 text-[#B89758]" />
        </div>
      </div>

      {/* PHASE 2: METALLURGY (0.24 - 0.50) */}
      <div
        className={`transition-all duration-700 ease-out max-w-[280px] sm:max-w-sm mt-20 sm:my-auto ml-0 md:ml-6 lg:ml-12 ${
          isPhase2
            ? 'opacity-100 translate-x-0 pointer-events-auto'
            : 'opacity-0 -translate-x-8 pointer-events-none'
        }`}
      >
        <div className="glass-panel-light p-4 sm:p-6 rounded-2xl border border-black/5 shadow-md">
          <div className="flex items-center gap-1.5 text-[#8F7238] font-mono text-[9px] tracking-widest uppercase mb-1">
            <Shield className="w-3 h-3" />
            <span>Phase 01 / Metallurgy</span>
          </div>

          <h3 className="font-display text-lg sm:text-xl font-bold text-[#1A1918] uppercase tracking-wide mb-1.5">
            Japanese <br />
            <span className="text-[#96783C] font-serif italic">Beta-Titanium</span>
          </h3>

          <p className="font-sans text-[#736E65] text-[11px] font-light leading-relaxed mb-3">
            0.02mm surgical CNC tolerances for featherweight 14.8g structural memory.
          </p>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-black/5">
            <div>
              <div className="font-mono text-[8px] text-[#9E9A91] uppercase tracking-wider">Weight</div>
              <div className="font-display text-sm text-[#1A1918] font-semibold">14.8 Grams</div>
            </div>
            <div>
              <div className="font-mono text-[8px] text-[#9E9A91] uppercase tracking-wider">Tolerance</div>
              <div className="font-display text-sm text-[#1A1918] font-semibold">0.02 mm</div>
            </div>
          </div>
        </div>
      </div>

      {/* PHASE 3: ZEISS OPTICS (0.50 - 0.74) */}
      <div
        className={`transition-all duration-700 ease-out max-w-[280px] sm:max-w-sm mt-20 sm:my-auto ml-auto mr-0 md:mr-6 lg:mr-12 ${
          isPhase3
            ? 'opacity-100 translate-x-0 pointer-events-auto'
            : 'opacity-0 translate-x-8 pointer-events-none'
        }`}
      >
        <div className="glass-panel-light p-4 sm:p-6 rounded-2xl border border-black/5 shadow-md">
          <div className="flex items-center gap-1.5 text-[#8F7238] font-mono text-[9px] tracking-widest uppercase mb-1">
            <Eye className="w-3 h-3" />
            <span>Phase 02 / Purity</span>
          </div>

          <h3 className="font-display text-lg sm:text-xl font-bold text-[#1A1918] uppercase tracking-wide mb-1.5">
            Zeiss Diamond <br />
            <span className="text-[#96783C] font-serif italic">Crystal Optics</span>
          </h3>

          <p className="font-sans text-[#736E65] text-[11px] font-light leading-relaxed mb-3">
            9-layer anti-reflective nanocoating eliminates chromatic aberrations with UV400 shield.
          </p>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-black/5">
            <div>
              <div className="font-mono text-[8px] text-[#9E9A91] uppercase tracking-wider">Transmittance</div>
              <div className="font-display text-sm text-[#1A1918] font-semibold">99.8% Clear</div>
            </div>
            <div>
              <div className="font-mono text-[8px] text-[#9E9A91] uppercase tracking-wider">Protection</div>
              <div className="font-display text-sm text-[#1A1918] font-semibold">UV400 Cat. 3</div>
            </div>
          </div>
        </div>
      </div>

      {/* PHASE 4: FINAL REVEAL (0.74 - 1.00) */}
      <div
        className={`transition-all duration-700 ease-out flex flex-col items-center text-center max-w-sm sm:max-w-md mx-auto my-auto ${
          isPhase4
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full gold-badge-light mb-2">
          <Sparkles className="w-3 h-3 text-[#B89758]" />
          <span className="font-sans text-[9px] tracking-[0.2em] text-[#8F7238] uppercase font-medium">
            Phase 03 / Masterpiece
          </span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#1A1918] mb-1.5">
          Sculpted for the <br />
          <span className="text-[#96783C] font-serif italic font-normal">
            Discerning Visionary
          </span>
        </h3>

        <p className="font-sans text-[#736E65] text-[11px] font-light leading-relaxed max-w-xs mb-4">
          Individually serialized and hand-adjusted for your facial anatomy.
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
      <div className="flex items-center justify-between w-full pb-14 sm:pb-2 pt-2 border-t border-black/5 font-mono text-[9px] text-[#9E9A91] tracking-[0.2em] uppercase">
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
