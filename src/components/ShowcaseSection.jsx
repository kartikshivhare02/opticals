import React from 'react';
import { ArrowUpRight, Award, Shield, Sparkles, Eye, Check, Truck, RotateCcw, Clock, Sparkle } from 'lucide-react';

const ARCHIVE_PIECES = [
  {
    id: 'sabae-aviator',
    title: 'The Sovereign Aviator',
    category: 'Japanese Beta-Titanium',
    price: '₹4,999',
    originalPrice: '₹8,499',
    weight: '14.8g',
    specs: ['Aerospace Beta-Titanium Ti-15V', '24K Electroplated Gold Finish', 'Zeiss Polarized UV400 Cat.3'],
    badge: 'Bestseller Archive',
    accentColor: '#C5A059',
    lensGradient: 'linear-gradient(135deg, rgba(197, 160, 89, 0.25) 0%, rgba(143, 114, 56, 0.45) 100%)',
  },
  {
    id: 'milano-square',
    title: 'The Milano Square Archetype',
    category: 'Italian Mazzucchelli Acetate',
    price: '₹3,499',
    originalPrice: '₹5,999',
    weight: '21.2g',
    specs: ['Hand-Polished Bio-Acetate 8mm', 'Embedded Titanium Core Wire', 'Blue-Block Screen HD Crystal'],
    badge: 'Daily Luxury',
    accentColor: '#8C6239',
    lensGradient: 'linear-gradient(135deg, rgba(140, 98, 57, 0.2) 0%, rgba(68, 44, 21, 0.4) 100%)',
  },
  {
    id: 'sovereign-hex',
    title: 'The Minimalist Hexagon Rimless',
    category: 'Zero-Weight Tension Mount',
    price: '₹5,999',
    originalPrice: '₹9,499',
    weight: '9.4g',
    specs: ['Featherweight Tension Wire Mount', 'Diamond Chamfered Lens Edges', 'Zeiss Hydrophobic Anti-Glare'],
    badge: 'Ultra-Light 9.4g',
    accentColor: '#52525B',
    lensGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(200, 210, 220, 0.2) 100%)',
  },
  {
    id: 'kyoto-round',
    title: 'The Grand Round Intellectual',
    category: 'Laser-Engraved Titanium',
    price: '₹3,999',
    originalPrice: '₹6,999',
    weight: '12.6g',
    specs: ['Hand-Engraved Filigree Bridge', 'Zeiss Blue-Light Guard UV400', '5-Barrel Flexible Tension Cam'],
    badge: 'Trending Design',
    accentColor: '#059669',
    lensGradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(4, 120, 87, 0.35) 100%)',
  },
];

const TRUST_FACTORS = [
  { icon: Shield, title: '1-Year Full Warranty', desc: 'Complimentary frame repair & replacement' },
  { icon: Truck, title: 'Free Pan-India Delivery', desc: 'Secure doorstep dispatch across 19,000+ pin codes' },
  { icon: Eye, title: 'Zeiss & Essilor Certified', desc: 'Precision digital computerized power fitting' },
  { icon: RotateCcw, title: '7-Day Easy Exchange', desc: 'Hassle-free frame trial and exchange guarantee' },
];

export default function ShowcaseSection({ onOpenBooking }) {
  return (
    <section id="collection" className="relative py-24 px-4 sm:px-8 md:px-12 bg-[#FAF8F5] border-t border-black/5 overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gold-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-tag-luxury mb-3.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="font-sans text-[10px] tracking-[0.2em] text-[#8F7238] uppercase font-bold">
                The 2026 Archive
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#141413] leading-[1.08]">
              Curated Eyewear <br />
              <span className="italic text-gold-gradient font-normal">
                Masterpieces
              </span>
            </h2>
          </div>

          <p className="font-sans text-[#736E65] text-xs sm:text-sm font-normal max-w-md leading-relaxed">
            Every piece is precision-milled from aerospace beta-titanium and paired with anti-glare, blue-cut or prescription HD crystal lenses.
          </p>
        </div>

        {/* 4 Premium Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {ARCHIVE_PIECES.map((piece) => (
            <div
              key={piece.id}
              className="glass-card-luxury rounded-3xl p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top edge gold hairline */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent group-hover:via-[#C5A059] transition-all duration-500" />

              <div>
                {/* Header Tag & Weight */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full gold-tag-luxury">
                    {piece.badge}
                  </span>
                  <span className="font-sans text-xs font-semibold text-[#8F7238]">
                    {piece.weight}
                  </span>
                </div>

                {/* High-End Architectural Eyewear Visual */}
                <div className="w-full aspect-[16/11] my-4 flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#FAF8F5] to-[#F3EFEA] border border-black/5 group-hover:border-[#C5A059]/40 transition-all duration-500 relative overflow-hidden shadow-inner">
                  
                  {/* Subtle ambient lighting behind frame */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-xl pointer-events-none"
                    style={{ backgroundColor: piece.accentColor }}
                  />

                  {/* 3D Realistic Eyewear Vector Graphic */}
                  <svg
                    className="w-4/5 h-4/5 transition-transform duration-500 group-hover:scale-108 drop-shadow-md"
                    viewBox="0 0 320 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Top Browline Architectural Bar */}
                    <path
                      d="M50 44 Q160 26 270 44"
                      stroke={piece.accentColor}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.85"
                    />

                    {/* Bridge */}
                    <path
                      d="M132 64 Q160 52 188 64"
                      stroke={piece.accentColor}
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    {/* Left Frame Rim with Bevel */}
                    <rect
                      x="46"
                      y="46"
                      width="86"
                      height="64"
                      rx="16"
                      stroke={piece.accentColor}
                      strokeWidth="4"
                      fill="none"
                    />
                    {/* Left Lens Glass Surface with Tint */}
                    <rect
                      x="50"
                      y="50"
                      width="78"
                      height="56"
                      rx="12"
                      fill={piece.accentColor === '#52525B' ? 'rgba(255,255,255,0.45)' : 'rgba(197,160,89,0.12)'}
                    />

                    {/* Right Frame Rim with Bevel */}
                    <rect
                      x="188"
                      y="46"
                      width="86"
                      height="64"
                      rx="16"
                      stroke={piece.accentColor}
                      strokeWidth="4"
                      fill="none"
                    />
                    {/* Right Lens Glass Surface with Tint */}
                    <rect
                      x="192"
                      y="50"
                      width="78"
                      height="56"
                      rx="12"
                      fill={piece.accentColor === '#52525B' ? 'rgba(255,255,255,0.45)' : 'rgba(197,160,89,0.12)'}
                    />

                    {/* Left & Right Temples */}
                    <path d="M46 56 L15 50" stroke={piece.accentColor} strokeWidth="3" strokeLinecap="round" />
                    <path d="M274 56 L305 50" stroke={piece.accentColor} strokeWidth="3" strokeLinecap="round" />

                    {/* Realistic Optical Glare Sheen */}
                    <path
                      d="M58 58 L85 102"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M200 58 L227 102"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Category & Title */}
                <div className="font-sans text-[10px] text-[#8F7238] uppercase tracking-wider font-semibold mb-1">
                  {piece.category}
                </div>
                
                <h3 className="font-serif text-xl font-medium text-[#141413] group-hover:text-[#8F7238] transition-colors mb-2.5">
                  {piece.title}
                </h3>

                {/* Specs */}
                <ul className="space-y-1.5 pt-3 border-t border-black/5 mb-5">
                  {piece.specs.map((spec, i) => (
                    <li key={i} className="font-sans text-xs text-[#736E65] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-black/5">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans text-xl font-bold text-[#141413]">{piece.price}</span>
                    <span className="font-sans text-xs text-[#9E9A91] line-through">{piece.originalPrice}</span>
                  </div>
                  <span className="font-sans text-[9px] text-[#059669] font-bold block">Inclusive of all taxes</span>
                </div>

                <button
                  onClick={() => onOpenBooking({ piece: piece.title, price: piece.price })}
                  className="px-4 py-2 rounded-full bg-[#141413] hover:bg-[#8F7238] text-[#FAF8F5] font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1 shadow-sm group-hover:shadow-md active:scale-95"
                  aria-label="Book frame trial"
                >
                  <span>Book Trial</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* 4 Trust Signals Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {TRUST_FACTORS.map((factor, i) => {
            const Icon = factor.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl glass-card-luxury border border-black/5 flex items-center gap-3.5"
              >
                <div className="w-11 h-11 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center text-[#8F7238] flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-sans text-xs sm:text-sm font-bold text-[#141413]">{factor.title}</div>
                  <div className="font-sans text-[11px] text-[#736E65] leading-snug mt-0.5">{factor.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Luxury Store & Free Eye Test Appointment Banner */}
        <div id="store" className="rounded-3xl glass-card-luxury p-8 sm:p-12 border border-[#C5A059]/30 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[#8F7238] font-sans text-xs tracking-wider uppercase font-bold mb-2.5">
                <Eye className="w-4 h-4 text-[#C5A059]" />
                <span>Dhantoli Flagship Store • Nagpur</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#141413] mb-3 leading-tight">
                Complimentary Computerized Eye Testing & <br />
                <span className="italic text-gold-gradient">Private Frame Trial</span>
              </h3>

              <p className="font-sans text-[#736E65] text-xs sm:text-sm font-normal leading-relaxed mb-6 max-w-xl">
                Experience millimeter-precise digital eye refraction, progressive lens consultation, and try over 500+ curated designer frames with our master optometrists.
              </p>

              <div className="font-sans text-xs text-[#141413] font-semibold flex flex-col sm:flex-row gap-3 pt-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  Main Road, Dhantoli, Nagpur
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                  Open All 7 Days (10:30 AM – 8:30 PM)
                </span>
              </div>
            </div>

            {/* Quick Action Button Box */}
            <div className="lg:col-span-5 p-7 rounded-2xl bg-[#141413] text-[#FAF8F5] flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-[#C5A059] font-sans text-xs tracking-wider uppercase font-bold mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Zero-Cost VIP Protocol</span>
                </div>
                
                <h4 className="font-serif text-xl sm:text-2xl font-normal uppercase mb-1.5">
                  Book In-Store Eye Test
                </h4>
                
                <p className="font-sans text-stone-300 text-xs font-normal leading-relaxed mb-6">
                  Reserve your slot with a senior optometrist. Instant power verification & tailored blue-light consultation.
                </p>
              </div>

              <button
                onClick={() => onOpenBooking()}
                className="w-full py-3.5 rounded-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#141413] font-sans font-bold text-xs uppercase tracking-[0.18em] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
              >
                Schedule Free Eye Checkup
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
