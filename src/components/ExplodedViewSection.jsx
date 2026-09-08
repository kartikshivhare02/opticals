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
    const ctx = canvas.getContext('2d', { alpha: false });
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

    // Fill background with exact page color for seamless merge
    ctx.fillStyle = '#FDFBF7';
    ctx.fillRect(0, 0, width, height);

    // Contain / Fit inside canvas seamlessly
    const scale = Math.min(width / imgW, height / imgH) * (width < 768 ? 1.05 : 1.15);
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
      end: '+=2000',
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

  // Phase visibility based on progress
  const isPhase1 = scrollProgress < 0.3;
  const isPhase2 = scrollProgress >= 0.3 && scrollProgress < 0.65;
  const isPhase3 = scrollProgress >= 0.65;

  return (
    <section
      ref={containerRef}
      id="features"
      className="relative w-full h-[100svh] overflow-hidden bg-[#FDFBF7] select-none flex flex-col justify-between p-6 sm:p-12"
    >
      {/* Seamless Minimalist Section Title */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-xl mx-auto pt-4 pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full gold-badge-light mb-2">
          <Layers className="w-3 h-3 text-[#B89758]" />
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.25em] text-[#8F7238] uppercase font-medium">
            Structural Anatomy
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase text-[#1A1918] tracking-wide leading-tight">
          Precision <span className="font-serif italic font-normal text-[#96783C]">Deconstructed</span>
        </h2>
      </div>

      {/* Center Seamless Canvas (Product Only Floating) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Floating Dynamic Technical Callouts That Fade with Scroll Progress */}
      <div className="relative z-20 max-w-6xl mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pb-6 pointer-events-none">
        
        {/* Left Callout */}
        <div
          className={`transition-all duration-700 ease-out max-w-xs ${
            isPhase1
              ? 'opacity-100 translate-y-0'
              : isPhase2
              ? 'opacity-80 translate-y-0'
              : 'opacity-40 translate-y-2'
          }`}
        >
          <span className="font-mono text-[9px] text-[#8F7238] uppercase tracking-[0.25em] block mb-1">
            01 / Unified Monocoque
          </span>
          <h3 className="font-display text-base sm:text-lg font-bold text-[#1A1918] uppercase mb-1">
            Japanese Beta-Titanium
          </h3>
          <p className="font-sans text-[11px] sm:text-xs text-[#736E65] font-light leading-relaxed">
            0.02mm CNC precision milled from solid Ti-15V-3Cr billets for surgical weightless memory.
          </p>
        </div>

        {/* Center/Right Callout */}
        <div
          className={`transition-all duration-700 ease-out max-w-xs text-left sm:text-right ${
            isPhase3
              ? 'opacity-100 translate-y-0'
              : isPhase2
              ? 'opacity-80 translate-y-0'
              : 'opacity-40 translate-y-2'
          }`}
        >
          <span className="font-mono text-[9px] text-[#8F7238] uppercase tracking-[0.25em] block mb-1">
            02 / Optical Separation
          </span>
          <h3 className="font-display text-base sm:text-lg font-bold text-[#1A1918] uppercase mb-1">
            Zeiss Diamond Optics
          </h3>
          <p className="font-sans text-[11px] sm:text-xs text-[#736E65] font-light leading-relaxed">
            9-layer anti-reflective crystal array with 5-barrel micro-cam tension hinges.
          </p>
        </div>

      </div>

    </section>
  );
}
