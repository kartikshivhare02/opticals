import React, { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_EXPLODED_FRAMES = 96;

export default function ExplodedViewSection() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const frameIndexRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Draw frame on canvas with high DPI and seamless background blend
  const renderFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const safeIndex = Math.max(0, Math.min(TOTAL_EXPLODED_FRAMES - 1, Math.round(index)));
    frameIndexRef.current = safeIndex;

    const img = imagesRef.current[safeIndex] || imagesRef.current[0];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Frame aspect calculation (1280x720)
    const imgW = img.naturalWidth || 1280;
    const imgH = img.naturalHeight || 720;

    // Clear transparent
    ctx.clearRect(0, 0, width, height);

    // Responsive Mobile-First Scaling
    const isMobile = width < 768;
    const baseScale = Math.min(width / imgW, height / imgH);
    const scale = isMobile ? (width / imgW) * 1.35 : baseScale * 1.18;

    const renderW = imgW * scale;
    const renderH = imgH * scale;
    const renderX = (width - renderW) / 2;
    const renderY = (height - renderH) / 2;

    ctx.drawImage(img, 0, 0, imgW, imgH, renderX, renderY, renderW, renderH);
  }, []);

  // Preload all 96 exploded frames
  useEffect(() => {
    imagesRef.current = new Array(TOTAL_EXPLODED_FRAMES);

    for (let i = 0; i < TOTAL_EXPLODED_FRAMES; i++) {
      const img = new Image();
      const padded = String(i).padStart(6, '0');
      img.src = `/exploded/frame_${padded}.webp`;

      img.onload = () => {
        if (i === 0) {
          renderFrame(0);
        }
      };

      imagesRef.current[i] = img;
    }
  }, [renderFrame]);

  // Window Resize
  useEffect(() => {
    const handleResize = () => {
      renderFrame(frameIndexRef.current);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [renderFrame]);

  // GSAP ScrollTrigger Sequence
  useGSAP(() => {
    if (!containerRef.current) return;

    let animFrame = null;

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=1800',
      pin: true,
      scrub: 0.35,
      anticipatePin: 1,
      onUpdate: (self) => {
        const targetFrame = Math.min(
          TOTAL_EXPLODED_FRAMES - 1,
          Math.max(0, Math.floor(self.progress * (TOTAL_EXPLODED_FRAMES - 1)))
        );

        setScrollProgress(self.progress);

        if (animFrame) cancelAnimationFrame(animFrame);
        animFrame = requestAnimationFrame(() => {
          renderFrame(targetFrame);
        });
      },
    });

    return () => {
      st.kill();
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, { scope: containerRef, dependencies: [renderFrame] });

  // Phase transitions
  const isPhase1 = scrollProgress < 0.35;
  const isPhase2 = scrollProgress >= 0.35 && scrollProgress < 0.70;
  const isPhase3 = scrollProgress >= 0.70;

  return (
    <section
      ref={containerRef}
      id="features"
      className="relative w-full h-[100svh] overflow-hidden bg-[#FDFBF7] select-none flex flex-col justify-between p-4 sm:p-8 md:p-12 border-t border-black/5"
    >
      {/* Section Title */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-xl mx-auto pt-4 sm:pt-6 pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full gold-badge-light mb-1.5 sm:mb-2 shadow-sm">
          <Layers className="w-3 h-3 text-[#B89758]" />
          <span className="font-sans text-[10px] tracking-wider text-[#8F7238] uppercase font-bold">
            Built for Durability & Daily Comfort
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase text-[#1A1918] tracking-wide leading-tight">
          Precision In <span className="font-serif italic font-normal text-[#96783C]">Every Detail</span>
        </h2>
      </div>

      {/* Seamless Product Canvas with Multiply Blend */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <canvas
          ref={canvasRef}
          className="w-full h-full block mix-blend-multiply"
          style={{
            width: '100%',
            height: '100%',
            maskImage: 'radial-gradient(circle at center, black 65%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 65%, transparent 95%)',
          }}
        />
      </div>

      {/* Clear Indian-Friendly Feature Labels */}
      <div className="relative z-20 max-w-5xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center sm:items-end gap-3 sm:gap-6 pb-4 sm:pb-6 pointer-events-none text-center sm:text-left">
        
        {/* Left Feature */}
        <div
          className={`transition-all duration-700 ease-out max-w-xs ${
            isPhase1
              ? 'opacity-100 translate-y-0 scale-100'
              : isPhase2
              ? 'opacity-80 translate-y-0 scale-98'
              : 'opacity-30 translate-y-2 scale-95'
          }`}
        >
          <span className="font-sans text-[10px] text-[#8F7238] uppercase tracking-wider font-bold block mb-0.5">
            01 / Flexible Titanium Frame
          </span>
          <h3 className="font-sans text-sm sm:text-base font-bold text-[#1A1918]">
            Lightweight & Unbreakable Alloy
          </h3>
          <p className="font-sans text-xs text-[#736E65] font-normal leading-snug mt-0.5">
            Only 14.8g. Crafted to fit Indian facial contours comfortably without slipping or pinching.
          </p>
        </div>

        {/* Right Feature */}
        <div
          className={`transition-all duration-700 ease-out max-w-xs sm:text-right ${
            isPhase3
              ? 'opacity-100 translate-y-0 scale-100'
              : isPhase2
              ? 'opacity-85 translate-y-0 scale-98'
              : 'opacity-30 translate-y-2 scale-95'
          }`}
        >
          <span className="font-sans text-[10px] text-[#8F7238] uppercase tracking-wider font-bold block mb-0.5">
            02 / Screen & Driving Lenses
          </span>
          <h3 className="font-sans text-sm sm:text-base font-bold text-[#1A1918]">
            Blue-Cut Anti-Glare Optics
          </h3>
          <p className="font-sans text-xs text-[#736E65] font-normal leading-snug mt-0.5">
            Scratch-resistant lenses that protect eyes from screen fatigue and nighttime car headlights.
          </p>
        </div>

      </div>

    </section>
  );
}
