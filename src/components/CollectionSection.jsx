import React from 'react';
import { Sparkles, ArrowUpRight, Eye, ShieldCheck, Award } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'sabae-aviator',
    title: 'The Sabae Aviator No. 01',
    category: 'Titanium Signature Archive',
    price: '$1,280',
    edition: 'Edition of 100',
    weight: '14.8g',
    specs: ['Beta-Titanium Ti-15V-3Cr', '24K Gold Inlays', 'Zeiss Polarized Cat.3'],
    badge: 'Limited Archive',
    accentColor: '#E1BC55',
  },
  {
    id: 'milano-square',
    title: 'The Milano Square Archetype',
    category: 'Mazzucchelli Bio-Acetate',
    price: '$1,150',
    edition: 'Edition of 150',
    weight: '21.2g',
    specs: ['Italian Bio-Acetate 8mm', 'Titanium Wire Core', 'Zeiss Amber Gradient'],
    badge: 'Atelier Favorite',
    accentColor: '#B45309',
  },
  {
    id: 'sovereign-hex',
    title: 'The Sovereign Hexagon Rimless',
    category: 'Featherweight Tension Wire',
    price: '$1,420',
    edition: 'Bespoke Order Only',
    weight: '9.4g',
    specs: ['Zero-Rim Tension Mount', 'Diamond Polished Edges', 'Zeiss Hydrophobic Rx'],
    badge: 'Ultra-Featherweight',
    accentColor: '#CBD5E1',
  },
  {
    id: 'kyoto-round',
    title: 'The Kyoto Round Minimalist',
    category: 'Architectural Circle',
    price: '$1,190',
    edition: 'Edition of 120',
    weight: '12.6g',
    specs: ['Hand-Engraved Filigree', 'Surgical Grade 316L', 'Zeiss Emerald Alpine'],
    badge: 'New Release',
    accentColor: '#10B981',
  },
];

export default function CollectionSection({ onOpenBooking }) {
  return (
    <section id="collection" className="relative py-28 px-4 sm:px-8 md:px-12 bg-obsidian-950 overflow-hidden">
      {/* Subtle background luxury grid line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill mb-4">
              <Award className="w-3.5 h-3.5 text-gold-400" />
              <span className="font-sans text-xs tracking-luxury text-gold-300 uppercase font-medium">
                The 2026 Archive
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-white">
              Curated Eyewear <br />
              <span className="font-serif italic font-normal bg-clip-text text-transparent bg-gold-gradient">
                Masterpieces
              </span>
            </h2>
          </div>

          <p className="font-sans text-stone-400 text-sm max-w-md font-light leading-relaxed">
            Every frame in our capsule collection is manufactured in Sabae, Japan and hand-adjusted for individual cranial geometry.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-3xl glass-panel p-6 flex flex-col justify-between border border-white/5 hover:border-gold-400/40 transition-all duration-500 hover:-translate-y-1.5 shadow-dark-glass hover:shadow-gold-subtle overflow-hidden"
            >
              {/* Card top edge highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400/0 group-hover:via-gold-400/60 transition-all duration-500" />

              {/* Product Badge & Weight */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-gold-400/30 bg-gold-500/10 text-gold-300">
                    {product.badge}
                  </span>
                  <span className="font-mono text-[10px] text-stone-400">
                    {product.weight}
                  </span>
                </div>

                {/* Eyewear Graphic Silhouette */}
                <div className="relative w-full aspect-[16/10] my-6 flex items-center justify-center rounded-2xl bg-black/40 border border-white/5 group-hover:border-gold-400/20 transition-all overflow-hidden">
                  
                  {/* Subtle radial glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl pointer-events-none"
                    style={{ backgroundColor: product.accentColor }}
                  />

                  {/* Scalable Eyewear Vector Graphic */}
                  <svg
                    className="w-4/5 h-4/5 transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
                    viewBox="0 0 300 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Bridge */}
                    <path d="M125 60 Q150 50 175 60" stroke={product.accentColor} strokeWidth="3" strokeLinecap="round" />
                    <path d="M60 40 Q150 25 240 40" stroke={product.accentColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                    
                    {/* Left Frame */}
                    <rect x="45" y="42" width="80" height="60" rx="14" stroke={product.accentColor} strokeWidth="3" fill="none" />
                    <rect x="48" y="45" width="74" height="54" rx="11" fill="rgba(255,255,255,0.06)" />
                    
                    {/* Right Frame */}
                    <rect x="175" y="42" width="80" height="60" rx="14" stroke={product.accentColor} strokeWidth="3" fill="none" />
                    <rect x="178" y="45" width="74" height="54" rx="11" fill="rgba(255,255,255,0.06)" />

                    {/* Temples */}
                    <path d="M45 52 L15 48" stroke={product.accentColor} strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M255 52 L285 48" stroke={product.accentColor} strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Title & Category */}
                <div className="font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-1">
                  {product.category}
                </div>
                <h3 className="font-display text-lg font-semibold text-white group-hover:text-gold-200 transition-colors mb-2">
                  {product.title}
                </h3>

                {/* Specs List */}
                <ul className="space-y-1.5 pt-3 border-t border-white/5 mb-6">
                  {product.specs.map((spec, idx) => (
                    <li key={idx} className="font-sans text-[11px] text-stone-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gold-400" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-stone-500">MSRP</div>
                  <div className="font-display text-xl font-bold text-white">{product.price}</div>
                </div>

                <button
                  onClick={() => onOpenBooking && onOpenBooking({ piece: product.title, price: product.price })}
                  className="p-3 rounded-full bg-white/5 hover:bg-gold-500 text-stone-300 hover:text-obsidian-950 transition-all duration-300 group/btn"
                  aria-label="Reserve piece"
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bespoke Quote Banner */}
        <div className="mt-12 rounded-3xl gold-glass p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-gold-400/30">
          <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
            <div className="w-14 h-14 rounded-full border border-gold-400/40 flex items-center justify-center flex-shrink-0 bg-gold-500/10 text-gold-300">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-xl font-semibold text-white uppercase tracking-wider">
                Bespoke Cranial Scanning & Custom Prescription Fitting
              </h4>
              <p className="font-sans text-stone-300 text-xs md:text-sm font-light mt-1">
                Experience millimeter-accurate 3D facial mapping at our New Delhi and Milan flagship suites.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            className="px-6 py-3.5 rounded-full bg-gold-400 text-obsidian-950 font-sans font-semibold text-xs uppercase tracking-luxury hover:bg-gold-300 active:scale-95 transition-all shadow-gold-subtle flex-shrink-0"
          >
            Request Private Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
