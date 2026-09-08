import React from 'react';
import { ArrowUpRight, Award, Shield, Sparkles, Layers, Flame, Cpu, Eye, Check } from 'lucide-react';

const ARCHIVE_PIECES = [
  {
    id: 'sabae-aviator',
    title: 'The Sabae Aviator No. 01',
    category: 'Japanese Beta-Titanium',
    price: '$1,280',
    weight: '14.8g',
    specs: ['Ti-15V-3Cr Titanium', '24K Gold Inlays', 'Zeiss Polarized Cat.3'],
    badge: 'Limited Archive',
    accentColor: '#B89758',
  },
  {
    id: 'milano-square',
    title: 'The Milano Square Archetype',
    category: 'Mazzucchelli Bio-Acetate',
    price: '$1,150',
    weight: '21.2g',
    specs: ['Italian Bio-Acetate 8mm', 'Titanium Core Wire', 'Zeiss Amber Gradient'],
    badge: 'Atelier Favorite',
    accentColor: '#8C6239',
  },
  {
    id: 'sovereign-hex',
    title: 'The Sovereign Hexagon Rimless',
    category: 'Featherweight Tension Wire',
    price: '$1,420',
    weight: '9.4g',
    specs: ['Zero-Rim Tension Mount', 'Diamond Polished Edges', 'Zeiss Hydrophobic Rx'],
    badge: 'Ultra-Featherweight',
    accentColor: '#52525B',
  },
  {
    id: 'kyoto-round',
    title: 'The Kyoto Round Minimalist',
    category: 'Architectural Circle',
    price: '$1,190',
    weight: '12.6g',
    specs: ['Hand-Engraved Filigree', 'Surgical Grade 316L', 'Zeiss Emerald Alpine'],
    badge: 'New Release',
    accentColor: '#059669',
  },
];

const CRAFT_METRICS = [
  { value: '100%', label: 'Japanese Beta-Ti' },
  { value: '14.8g', label: 'Featherweight Profile' },
  { value: '0.02mm', label: 'Milling Tolerance' },
  { value: 'Lifetime', label: 'Atelier Warranty' },
];

export default function ShowcaseSection({ onOpenBooking }) {
  return (
    <section id="collection" className="relative py-24 px-4 sm:px-8 md:px-12 bg-[#F8F6F0] border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full gold-badge-light mb-3">
              <Award className="w-3.5 h-3.5 text-[#B89758]" />
              <span className="font-sans text-[11px] tracking-[0.2em] text-[#8F7238] uppercase font-medium">
                The 2026 Archive
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#1A1918]">
              Curated Eyewear <br />
              <span className="font-serif italic font-normal text-[#96783C]">
                Silhouettes
              </span>
            </h2>
          </div>

          <p className="font-sans text-[#736E65] text-xs sm:text-sm font-light max-w-md leading-relaxed">
            Manufactured in Sabae, Japan with surgical CNC beta-titanium and individually fitted at our private suites.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {ARCHIVE_PIECES.map((piece) => (
            <div
              key={piece.id}
              className="group relative rounded-2xl glass-panel-light p-6 flex flex-col justify-between border border-black/5 hover:border-[#B89758]/40 transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full gold-badge-light">
                    {piece.badge}
                  </span>
                  <span className="font-mono text-[10px] text-[#736E65]">
                    {piece.weight}
                  </span>
                </div>

                {/* Eyewear Graphic Silhouette */}
                <div className="w-full aspect-[16/10] my-4 flex items-center justify-center rounded-xl bg-[#FDFBF7] border border-black/5 group-hover:border-[#B89758]/30 transition-all">
                  <svg
                    className="w-4/5 h-4/5 transition-transform duration-300 group-hover:scale-105"
                    viewBox="0 0 300 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M125 60 Q150 50 175 60" stroke={piece.accentColor} strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M60 42 Q150 28 240 42" stroke={piece.accentColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                    
                    <rect x="45" y="42" width="80" height="60" rx="14" stroke={piece.accentColor} strokeWidth="3.5" fill="none" />
                    <rect x="48" y="45" width="74" height="54" rx="11" fill="rgba(184, 151, 88, 0.04)" />
                    
                    <rect x="175" y="42" width="80" height="60" rx="14" stroke={piece.accentColor} strokeWidth="3.5" fill="none" />
                    <rect x="178" y="45" width="74" height="54" rx="11" fill="rgba(184, 151, 88, 0.04)" />

                    <path d="M45 52 L15 48" stroke={piece.accentColor} strokeWidth="3" strokeLinecap="round" />
                    <path d="M255 52 L285 48" stroke={piece.accentColor} strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="font-mono text-[9px] text-[#9E9A91] uppercase tracking-wider mb-1">
                  {piece.category}
                </div>
                <h3 className="font-display text-base font-bold text-[#1A1918] group-hover:text-[#96783C] transition-colors mb-2">
                  {piece.title}
                </h3>

                <ul className="space-y-1 pt-2.5 border-t border-black/5 mb-4">
                  {piece.specs.map((spec, i) => (
                    <li key={i} className="font-sans text-[11px] text-[#736E65] flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#B89758]" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-black/5">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-[#9E9A91]">MSRP</div>
                  <div className="font-display text-lg font-bold text-[#1A1918]">{piece.price}</div>
                </div>

                <button
                  onClick={() => onOpenBooking({ piece: piece.title, price: piece.price })}
                  className="p-2.5 rounded-full bg-[#1A1918] text-[#FDFBF7] hover:bg-[#8F7238] transition-colors"
                  aria-label="Reserve piece"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sabae Manifesto / Craftsmanship Banner */}
        <div id="atelier" className="rounded-3xl glass-panel-light p-8 md:p-12 border border-black/5 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[#8F7238] font-mono text-[10px] tracking-widest uppercase mb-2">
                <Flame className="w-3.5 h-3.5" />
                <span>The Sabae Manifesto</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#1A1918] mb-3">
                180 Steps of Japanese <br />
                <span className="font-serif italic font-normal text-[#96783C]">Shokunin Precision</span>
              </h3>
              <p className="font-sans text-[#736E65] text-xs sm:text-sm font-light leading-relaxed mb-6">
                From 72-hour organic bamboo barrel tumbling to micro-laser hinge calibration, each Jasleen Opticals frame undergoes over 6 months of artisanal refinement before reaching the fitting suite.
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-black/5">
                {CRAFT_METRICS.map((metric, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#FDFBF7] border border-black/5 text-center">
                    <div className="font-display text-lg font-bold text-[#1A1918]">{metric.value}</div>
                    <div className="font-mono text-[9px] text-[#9E9A91] uppercase tracking-wider mt-0.5">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* VIP CTA Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#1A1918] text-[#FDFBF7] flex flex-col justify-between shadow-md">
              <div>
                <div className="flex items-center gap-1.5 text-[#B89758] font-mono text-[10px] tracking-widest uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Private Consultation</span>
                </div>
                <h4 className="font-display text-xl font-bold uppercase mb-2">
                  Book Atelier Fitting
                </h4>
                <p className="font-sans text-stone-300 text-xs font-light leading-relaxed mb-6">
                  Experience millimeter-precise 3D facial mapping and bespoke prescription lens mounting at our private suites.
                </p>
              </div>

              <button
                onClick={() => onOpenBooking()}
                className="w-full py-3.5 rounded-full bg-[#B89758] hover:bg-[#C5A880] text-[#1A1918] font-sans font-bold text-xs uppercase tracking-[0.2em] transition-colors"
              >
                Schedule VIP Consultation
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
