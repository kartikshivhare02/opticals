import React from 'react';
import { Hammer, Sparkles, Shield, Cpu, Flame, Layers, Award, CheckCircle2 } from 'lucide-react';

const CRAFT_PILLARS = [
  {
    step: '01',
    title: 'Aerospace Beta-Titanium Milling',
    subtitle: 'Sabae, Fukui Prefecture, Japan',
    desc: 'Each chassis is CNC milled from solid Ti-15V-3Cr billets with 0.02mm tolerances, delivering 2x the elasticity of standard titanium with half the density.',
    icon: Flame,
    metric: '0.02mm',
    metricLabel: 'Precision Tolerance',
  },
  {
    step: '02',
    title: '72-Hour Bamboo Barrel Polishing',
    subtitle: 'Ancestral Shokunin Technique',
    desc: 'Frames are submerged in organic Japanese bamboo chips and diamond compound for 3 full days to achieve an unyielding mirror sheen without softening architectural edges.',
    icon: Layers,
    metric: '72 Hours',
    metricLabel: 'Hand Tumbling',
  },
  {
    step: '03',
    title: '5-Barrel Micro-Cam Hinges',
    subtitle: 'Zero-Play Mechanical Architecture',
    desc: 'Custom-patented internal tensioning system tested to over 50,000 smooth cycles without loosening, sagging, or requiring screw re-tightening.',
    icon: Cpu,
    metric: '50,000+',
    metricLabel: 'Cycle Lifespan',
  },
  {
    step: '04',
    title: 'Zeiss Crystal Optical Mounting',
    subtitle: 'Oberkochen Optical Purity',
    desc: 'Lenses are laser-channeled directly into the titanium frame groove with zero stress-birefringence, ensuring true 100% chromatic accuracy across the peripheral field.',
    icon: Award,
    metric: '99.8%',
    metricLabel: 'True Transmittance',
  },
];

export default function CraftsmanshipSection() {
  return (
    <section id="craftsmanship" className="relative py-28 px-4 sm:px-8 md:px-12 bg-obsidian-950 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill mb-4">
            <Hammer className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-sans text-xs tracking-luxury text-gold-300 uppercase font-medium">
              The Sabae Manifesto
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-white mb-4">
            180 Steps of <br />
            <span className="font-serif italic font-normal bg-clip-text text-transparent bg-gold-gradient">
              Uncompromising Obsession
            </span>
          </h2>
          <p className="font-sans text-stone-400 text-sm md:text-base font-light max-w-2xl leading-relaxed">
            Where aerospace metallurgy meets the heritage of Fukui shokunin artisans. Every pair requires 6 months from raw titanium block to finished optical silhouette.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CRAFT_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.step}
                className="group relative rounded-3xl glass-panel p-8 md:p-10 border border-white/5 hover:border-gold-400/40 transition-all duration-500 hover:-translate-y-1 shadow-dark-glass overflow-hidden"
              >
                {/* Gold hairline top border */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 group-hover:via-gold-400/80 transition-all duration-500" />

                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl border border-white/10 group-hover:border-gold-400/40 bg-white/5 flex items-center justify-center text-gold-300 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="font-display text-3xl font-bold text-stone-700 group-hover:text-gold-400/40 transition-colors">
                    {pillar.step}
                  </div>
                </div>

                <div className="font-mono text-[10px] text-gold-400 uppercase tracking-widest mb-1.5">
                  {pillar.subtitle}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white uppercase tracking-wide mb-4 group-hover:text-gold-200 transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-sans text-stone-300/80 text-xs md:text-sm font-light leading-relaxed mb-8">
                  {pillar.desc}
                </p>

                {/* Metric Badge */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400">
                    {pillar.metricLabel}
                  </span>
                  <span className="font-display text-xl font-bold text-gold-300">
                    {pillar.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Atelier Heritage Strip */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="glass-panel p-6 rounded-2xl border border-white/5">
            <div className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
            <div className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">Japanese Beta-Ti</div>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/5">
            <div className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">14.8g</div>
            <div className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">Featherweight Chassis</div>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/5">
            <div className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">Zero</div>
            <div className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">Nickel / Hypoallergenic</div>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/5">
            <div className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">Lifetime</div>
            <div className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">Atelier Warranty</div>
          </div>
        </div>

      </div>
    </section>
  );
}
