import React from 'react';
import { ArrowUpRight, Award, Shield, Sparkles, Layers, Flame, Cpu, Eye, Check, Truck, RotateCcw, Clock } from 'lucide-react';

const ARCHIVE_PIECES = [
  {
    id: 'sabae-aviator',
    title: 'The Executive Aviator',
    category: 'Pure Titanium & Gold Accents',
    price: '₹4,999',
    originalPrice: '₹7,999',
    weight: '14.8g',
    specs: ['Aerospace Beta-Titanium', 'Polarized Anti-Glare', 'Anti-Corrosion Gold Polish'],
    badge: 'Bestseller',
    accentColor: '#B89758',
  },
  {
    id: 'milano-square',
    title: 'The Urban Acetate Square',
    category: 'Handcrafted Bio-Acetate',
    price: '₹3,499',
    originalPrice: '₹5,499',
    weight: '21.2g',
    specs: ['Italian Bio-Acetate Material', 'Steel Wire Core Temples', 'Blue-Block Computer Lenses'],
    badge: 'Daily Wear',
    accentColor: '#8C6239',
  },
  {
    id: 'sovereign-hex',
    title: 'The Sovereign Hexagon Rimless',
    category: 'Zero-Weight Tension Wire',
    price: '₹5,999',
    originalPrice: '₹8,999',
    weight: '9.4g',
    specs: ['Ultra-Light Rimless Mount', 'Diamond Polished Lens Edges', 'Prescription HD Crystal'],
    badge: 'Ultra-Light 9g',
    accentColor: '#52525B',
  },
  {
    id: 'kyoto-round',
    title: 'The Smart Round Intellectual',
    category: 'Architectural Geometric Round',
    price: '₹3,999',
    originalPrice: '₹6,499',
    weight: '12.6g',
    specs: ['Laser Engraved Temples', 'Blue Light Shield UV400', 'Flexible Spring Hinges'],
    badge: 'Trending',
    accentColor: '#059669',
  },
];

const TRUST_FACTORS = [
  { icon: Shield, title: '1-Year Full Warranty', desc: 'Hassle-free frame & lens replacement' },
  { icon: Truck, title: 'Free Pan-India Delivery', desc: 'Fast, secure shipping to 19,000+ pin codes' },
  { icon: Eye, title: 'Zeiss & Essilor Optics', desc: 'Precision digital power cutting' },
  { icon: RotateCcw, title: '7-Day Easy Exchange', desc: 'No questions asked frame exchange' },
];

export default function ShowcaseSection({ onOpenBooking }) {
  return (
    <section id="collection" className="relative py-20 px-4 sm:px-8 md:px-12 bg-[#F8F6F0] border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full gold-badge-light mb-2.5 shadow-sm">
              <Award className="w-3.5 h-3.5 text-[#B89758]" />
              <span className="font-sans text-[10px] tracking-wider text-[#8F7238] uppercase font-bold">
                Featured 2026 Collection
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#1A1918]">
              Trending Spectacles & <br />
              <span className="font-serif italic font-normal text-[#96783C]">
                Designer Eyewear
              </span>
            </h2>
          </div>

          <p className="font-sans text-[#736E65] text-xs sm:text-sm font-normal max-w-md leading-relaxed">
            Crafted for lightweight durability and fitted with custom prescription, zero-power, or blue-cut lenses.
          </p>
        </div>

        {/* 4 Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ARCHIVE_PIECES.map((piece) => (
            <div
              key={piece.id}
              className="group relative rounded-2xl glass-panel-light p-5 flex flex-col justify-between border border-black/5 hover:border-[#B89758]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-sans text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full gold-badge-light">
                    {piece.badge}
                  </span>
                  <span className="font-sans text-[11px] font-semibold text-[#736E65]">
                    {piece.weight}
                  </span>
                </div>

                {/* Eyewear Graphic Silhouette */}
                <div className="w-full aspect-[16/10] my-3 flex items-center justify-center rounded-xl bg-[#FDFBF7] border border-black/5 group-hover:border-[#B89758]/30 transition-all">
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

                <div className="font-sans text-[10px] text-[#9E9A91] uppercase font-semibold mb-1">
                  {piece.category}
                </div>
                <h3 className="font-sans text-base font-bold text-[#1A1918] group-hover:text-[#96783C] transition-colors mb-2">
                  {piece.title}
                </h3>

                <ul className="space-y-1 pt-2 border-t border-black/5 mb-4">
                  {piece.specs.map((spec, i) => (
                    <li key={i} className="font-sans text-xs text-[#736E65] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B89758]" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-black/5">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-sans text-lg font-extrabold text-[#1A1918]">{piece.price}</span>
                    <span className="font-sans text-xs text-[#9E9A91] line-through">{piece.originalPrice}</span>
                  </div>
                  <span className="font-sans text-[9px] text-[#059669] font-bold">Inclusive of all taxes</span>
                </div>

                <button
                  onClick={() => onOpenBooking({ piece: piece.title, price: piece.price })}
                  className="px-3.5 py-1.5 rounded-full bg-[#1A1918] text-[#FDFBF7] hover:bg-[#8F7238] transition-colors font-sans text-xs font-semibold flex items-center gap-1"
                  aria-label="Book frame"
                >
                  <span>Book Trial</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Signals Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {TRUST_FACTORS.map((factor, i) => {
            const Icon = factor.icon;
            return (
              <div key={i} className="p-4 rounded-2xl glass-panel-light border border-black/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#B89758]/15 flex items-center justify-center text-[#8F7238] flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-sans text-xs font-bold text-[#1A1918]">{factor.title}</div>
                  <div className="font-sans text-[10px] text-[#736E65] leading-snug">{factor.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Eye Test & Store Visit Banner */}
        <div id="store" className="rounded-3xl glass-panel-light p-6 sm:p-10 border border-black/5 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 text-[#8F7238] font-sans text-xs tracking-wider uppercase font-bold mb-2">
                <Eye className="w-4 h-4 text-[#B89758]" />
                <span>Visit Our Flagship Store in Delhi</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#1A1918] mb-2">
                Free Computerized Eye Testing & <br />
                <span className="font-serif italic font-normal text-[#96783C]">Frame Trial Consultation</span>
              </h3>
              <p className="font-sans text-[#736E65] text-xs sm:text-sm font-normal leading-relaxed mb-4">
                Walk into our South Extension showroom for precise computerized eye refraction, prescription verification, and try 500+ designer frames with our senior optometrists.
              </p>

              <div className="font-sans text-xs text-[#1A1918] font-semibold flex flex-wrap gap-4 pt-2">
                <span>📍 D-Block, South Extension Part-2, New Delhi</span>
                <span>⏰ Open Mon - Sun: 10:30 AM - 8:30 PM</span>
              </div>
            </div>

            {/* Quick Consultation Action */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#1A1918] text-[#FDFBF7] flex flex-col justify-between shadow-md">
              <div>
                <div className="flex items-center gap-1.5 text-[#B89758] font-sans text-[11px] tracking-wider uppercase font-bold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Zero-Cost Appointment</span>
                </div>
                <h4 className="font-sans text-xl font-bold uppercase mb-1">
                  Book Free In-Store Trial
                </h4>
                <p className="font-sans text-stone-300 text-xs font-normal leading-relaxed mb-5">
                  Get your eye power tested for free and receive instant consultation on blue-light and progressive lenses.
                </p>
              </div>

              <button
                onClick={() => onOpenBooking()}
                className="w-full py-3 rounded-full bg-[#B89758] hover:bg-[#C5A880] text-[#1A1918] font-sans font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Book Free Eye Checkup Now
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
