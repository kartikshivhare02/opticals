import React, { useEffect, useState } from 'react';

export default function Preloader({ progress, onComplete }) {
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }, 800);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-obsidian-950 transition-opacity duration-700 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute w-96 h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Brand Monogram */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full border border-gold-400/30 flex items-center justify-center mb-6 relative group">
          <div className="absolute inset-0 rounded-full border border-gold-400/60 animate-ping opacity-25" />
          <svg
            className="w-10 h-10 text-gold-400"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="24" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="32" cy="24" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M23 24H25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 23L10 18M42 23L38 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <h1 className="font-display tracking-widest text-lg text-gold-200 uppercase font-semibold mb-2">
          Jasleen Opticals
        </h1>
        <p className="font-serif italic text-stone-400 text-sm tracking-widest mb-10">
          Haute Lunetterie • Atelier 2026
        </p>

        {/* Minimal Progress Bar */}
        <div className="w-56 h-[2px] bg-stone-800/80 rounded-full overflow-hidden relative mb-4">
          <div
            className="h-full bg-gradient-to-r from-gold-500 via-gold-300 to-gold-400 transition-all duration-200 ease-out shadow-gold-glow"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="flex items-center gap-2 font-mono text-xs text-gold-400/80 tracking-widest">
          <span>CALIBRATING OPTICAL ENGINE</span>
          <span className="text-gold-200 font-semibold">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
