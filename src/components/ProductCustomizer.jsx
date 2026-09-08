import React, { useState } from 'react';
import { Sliders, Sparkles, Check, ArrowRight, ShieldCheck, Eye } from 'lucide-react';

const FRAME_FINISHES = [
  {
    id: 'gold',
    name: '24K Imperial Gold',
    desc: 'Triple-dipped electroplated 24K gold over Japanese beta-titanium',
    colorClass: 'bg-gradient-to-br from-amber-200 via-yellow-400 to-yellow-600',
    borderClass: 'border-yellow-400/40',
    accentColor: '#E1BC55',
    price: '$1,250',
  },
  {
    id: 'obsidian',
    name: 'Obsidian PVD Matte',
    desc: 'Diamond-like carbon (DLC) vacuum deposit with zero reflectivity',
    colorClass: 'bg-gradient-to-br from-stone-800 via-stone-900 to-black',
    borderClass: 'border-stone-600',
    accentColor: '#475569',
    price: '$1,180',
  },
  {
    id: 'titanium',
    name: 'Raw Sabae Titanium',
    desc: 'Micro-bead blasted aerospace grade Ti-15V-3Cr with natural patina',
    colorClass: 'bg-gradient-to-br from-stone-200 via-stone-400 to-stone-600',
    borderClass: 'border-stone-400',
    accentColor: '#CBD5E1',
    price: '$1,320',
  },
  {
    id: 'havana',
    name: 'Mazzucchelli Havana',
    desc: 'Hand-sculpted Italian bio-acetate with warm amber tortoiseshell grain',
    colorClass: 'bg-gradient-to-br from-amber-700 via-yellow-900 to-stone-900',
    borderClass: 'border-amber-700/50',
    accentColor: '#B45309',
    price: '$1,150',
  },
];

const LENS_TINTS = [
  {
    id: 'amber',
    name: 'Zeiss Amber Sunset',
    desc: 'Optimized for high-contrast golden hour visual sharpness and blue light blocking',
    lensStyle: 'linear-gradient(135deg, rgba(245, 158, 11, 0.45) 0%, rgba(180, 83, 9, 0.65) 100%)',
    badge: 'Contrast Boost',
  },
  {
    id: 'polarized',
    name: 'Zeiss Obsidian Polarized',
    desc: 'Linear & circular polarization eliminating 99.9% of ocean & highway glare',
    lensStyle: 'linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(2, 6, 23, 0.9) 100%)',
    badge: 'Polarized Cat. 3',
  },
  {
    id: 'emerald',
    name: 'Zeiss Alpine Emerald',
    desc: 'Gradient emerald anti-fatigue coating engineered for alpine and maritime light',
    lensStyle: 'linear-gradient(135deg, rgba(16, 185, 129, 0.4) 0%, rgba(4, 120, 87, 0.7) 100%)',
    badge: 'Anti-Glare High Altitude',
  },
  {
    id: 'clear',
    name: 'Zeiss Diamond Clear Rx',
    desc: 'Ultra-thin 1.74 high-index prescription with oleophobic hydrophobic crystal seal',
    lensStyle: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
    badge: 'Prescription Ready',
  },
];

export default function ProductCustomizer({ onOpenBooking }) {
  const [selectedFinish, setSelectedFinish] = useState(FRAME_FINISHES[0]);
  const [selectedLens, setSelectedLens] = useState(LENS_TINTS[0]);

  const handleReserve = () => {
    if (onOpenBooking) {
      onOpenBooking({
        finish: selectedFinish.name,
        lens: selectedLens.name,
        price: selectedFinish.price,
      });
    }
  };

  return (
    <section id="configurator" className="relative py-28 px-4 sm:px-8 md:px-12 bg-obsidian-900 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill mb-4">
            <Sliders className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-sans text-xs tracking-luxury text-gold-300 uppercase font-medium">
              Atelier Configurator
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-white mb-4">
            Bespoke Finish <br />
            <span className="font-serif italic font-normal bg-clip-text text-transparent bg-gold-gradient">
              & Lens Calibration
            </span>
          </h2>
          <p className="font-sans text-stone-300/80 text-sm md:text-base font-light max-w-xl leading-relaxed">
            Personalize your titanium chassis and Zeiss optical prescription. Each bespoke piece is handcrafted individually at our Sabae workshop.
          </p>
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Showcase Stage (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] rounded-3xl glass-panel p-8 flex flex-col items-center justify-center overflow-hidden border border-white/10 shadow-dark-glass group">
              
              {/* Background ambient lighting matching selected finish */}
              <div
                className="absolute inset-0 opacity-20 blur-2xl transition-all duration-700 pointer-events-none"
                style={{ backgroundColor: selectedFinish.accentColor }}
              />

              {/* Dynamic Illustrated Eyewear Wireframe Mockup with Real-Time Tint & Finish */}
              <div className="relative w-full max-w-md h-56 flex items-center justify-center transition-all duration-500 transform group-hover:scale-105">
                <svg
                  className="w-full h-full drop-shadow-2xl"
                  viewBox="0 0 500 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Eyeglass Bridge */}
                  <path
                    d="M210 100 Q250 85 290 100"
                    stroke={selectedFinish.accentColor}
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    className="transition-colors duration-500"
                  />
                  {/* Top Bar Architectural Browline */}
                  <path
                    d="M100 70 Q250 45 400 70"
                    stroke={selectedFinish.accentColor}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.8"
                    className="transition-colors duration-500"
                  />

                  {/* Left Lens Frame Rim */}
                  <rect
                    x="80"
                    y="70"
                    width="140"
                    height="100"
                    rx="25"
                    stroke={selectedFinish.accentColor}
                    strokeWidth="5"
                    fill="none"
                    className="transition-colors duration-500"
                  />
                  {/* Left Lens Glass Surface */}
                  <rect
                    x="85"
                    y="75"
                    width="130"
                    height="90"
                    rx="20"
                    fill="url(#lensGradient)"
                    className="transition-all duration-500"
                  />

                  {/* Right Lens Frame Rim */}
                  <rect
                    x="280"
                    y="70"
                    width="140"
                    height="100"
                    rx="25"
                    stroke={selectedFinish.accentColor}
                    strokeWidth="5"
                    fill="none"
                    className="transition-colors duration-500"
                  />
                  {/* Right Lens Glass Surface */}
                  <rect
                    x="285"
                    y="75"
                    width="130"
                    height="90"
                    rx="20"
                    fill="url(#lensGradient)"
                    className="transition-all duration-500"
                  />

                  {/* Left & Right Temples */}
                  <path
                    d="M80 85 L20 75"
                    stroke={selectedFinish.accentColor}
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="transition-colors duration-500"
                  />
                  <path
                    d="M420 85 L480 75"
                    stroke={selectedFinish.accentColor}
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="transition-colors duration-500"
                  />

                  {/* Anti-reflective glare sheen overlay */}
                  <path
                    d="M95 85 L140 155"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M295 85 L340 155"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />

                  <defs>
                    <linearGradient id="lensGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={selectedLens.id === 'amber' ? '#f59e0b' : selectedLens.id === 'emerald' ? '#10b981' : selectedLens.id === 'clear' ? '#ffffff' : '#0f172a'} stopOpacity="0.5" />
                      <stop offset="100%" stopColor={selectedLens.id === 'amber' ? '#78350f' : selectedLens.id === 'emerald' ? '#064e3b' : selectedLens.id === 'clear' ? '#94a3b8' : '#020617'} stopOpacity="0.85" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Dynamic Live Tag Overlay */}
              <div className="w-full flex items-center justify-between pt-6 border-t border-white/10 mt-6 font-mono text-xs">
                <div className="flex items-center gap-2 text-stone-300">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedFinish.accentColor }} />
                  <span className="uppercase tracking-wider">{selectedFinish.name}</span>
                </div>
                <div className="text-gold-300 font-medium">
                  {selectedLens.name}
                </div>
              </div>
            </div>

            {/* Micro Specs Bar */}
            <div className="grid grid-cols-4 gap-2 w-full mt-4 font-mono text-[10px] text-stone-400 text-center">
              <div className="glass-panel py-2 px-1 rounded-xl">
                <div className="text-stone-500 uppercase">WEIGHT</div>
                <div className="text-stone-200 font-semibold mt-0.5">14.8g</div>
              </div>
              <div className="glass-panel py-2 px-1 rounded-xl">
                <div className="text-stone-500 uppercase">BASE CURVE</div>
                <div className="text-stone-200 font-semibold mt-0.5">4.5 Toric</div>
              </div>
              <div className="glass-panel py-2 px-1 rounded-xl">
                <div className="text-stone-500 uppercase">HINGE</div>
                <div className="text-stone-200 font-semibold mt-0.5">5-Barrel Cam</div>
              </div>
              <div className="glass-panel py-2 px-1 rounded-xl">
                <div className="text-stone-500 uppercase">ORIGIN</div>
                <div className="text-stone-200 font-semibold mt-0.5">Sabae, JP</div>
              </div>
            </div>
          </div>

          {/* Configurator Controls (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* 1. Frame Material Selection */}
            <div>
              <label className="block font-display text-sm uppercase tracking-widest text-gold-200 mb-3 flex items-center justify-between">
                <span>1. Frame Metallurgy & Finish</span>
                <span className="font-mono text-xs text-stone-400">{selectedFinish.price}</span>
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {FRAME_FINISHES.map((finish) => {
                  const isSelected = selectedFinish.id === finish.id;
                  return (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedFinish(finish)}
                      className={`p-3 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                        isSelected
                          ? 'bg-gold-500/10 border-gold-400 shadow-gold-subtle'
                          : 'glass-panel border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-5 h-5 rounded-full ${finish.colorClass} shadow-sm border border-black/30`} />
                        {isSelected && <Check className="w-3.5 h-3.5 text-gold-400" />}
                      </div>
                      <div>
                        <div className="font-sans font-medium text-xs text-stone-100">{finish.name}</div>
                        <div className="font-mono text-[10px] text-stone-400 mt-0.5">{finish.price}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Lens Calibration Selection */}
            <div>
              <label className="block font-display text-sm uppercase tracking-widest text-gold-200 mb-3">
                2. Zeiss Optical Calibration
              </label>
              <div className="flex flex-col gap-2">
                {LENS_TINTS.map((lens) => {
                  const isSelected = selectedLens.id === lens.id;
                  return (
                    <button
                      key={lens.id}
                      onClick={() => setSelectedLens(lens)}
                      className={`p-3.5 rounded-2xl text-left transition-all duration-200 border flex items-center justify-between ${
                        isSelected
                          ? 'bg-gold-500/10 border-gold-400 shadow-gold-subtle'
                          : 'glass-panel border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-7 h-7 rounded-lg border border-white/20 shadow-inner flex-shrink-0"
                          style={{ background: lens.lensStyle }}
                        />
                        <div>
                          <div className="font-sans font-medium text-xs text-stone-100 flex items-center gap-2">
                            <span>{lens.name}</span>
                            <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-stone-300">
                              {lens.badge}
                            </span>
                          </div>
                          <div className="font-sans text-[11px] text-stone-400 mt-0.5 line-clamp-1">
                            {lens.desc}
                          </div>
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-gold-400 ml-2 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Total & Reserve Action */}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-stone-400">Total Bespoke Value</div>
                  <div className="font-display text-2xl font-bold text-white text-glow-sm">{selectedFinish.price}</div>
                </div>
                <div className="font-mono text-[10px] text-right text-emerald-400">
                  <span>● 3 Bespoke Slots Available</span>
                  <div className="text-stone-500">Includes Custom Case & Cloth</div>
                </div>
              </div>

              <button
                onClick={handleReserve}
                className="w-full py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-obsidian-950 font-sans font-bold text-xs uppercase tracking-luxury shadow-gold-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Reserve This Bespoke Configuration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
