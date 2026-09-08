import React, { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Shield, Eye, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_EXPLODED_FRAMES = 96;

export default function ExplodedViewSection() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const frameIndexRef = useRef(0);

  // Draw frame on canvas with high DPI and smooth scaling
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

    const imgW = img.naturalWidth || 1280;
    const imgH = img.naturalHeight || 720;

    ctx.clearRect(0, 0, width, height);

    // Responsive scaling: centered and smooth
    const scale = Math.min(width / imgW, height / imgH) * (width < 768 ? 1.25 : 1.15);
    const renderW = imgW * scale;
    const renderH = imgH * scale;
    const renderX = (width - renderW) / 2;
    const renderY = (height - renderH) / 2;

    ctx.drawImage(img, 0, 0, imgW, imgH, renderX, renderY, renderW, renderH);
  }, []);

  // Preload all 96 frames
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

  // Silky Smooth GSAP ScrollTrigger Sequence
  useGSAP(() => {
    if (!containerRef.current) return;

    let animFrame = null;

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=1000',
      pin: true,
      scrub: 0.3,
      anticipatePin: 1,
      onUpdate: (self) => {
        const targetFrame = Math.min(
          TOTAL_EXPLODED_FRAMES - 1,
          Math.max(0, Math.floor(self.progress * (TOTAL_EXPLODED_FRAMES - 1)))
        );

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

  return (
    <section
      ref={containerRef}
      id="features"
      className="relative w-full h-[100svh] overflow-hidden bg-[#FAF8F5] select-none flex flex-col justify-between py-6 px-4 sm:px-8 border-t border-black/5"
    >
      {/* Top Header: Clean & Minimal */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-xl mx-auto pt-2 sm:pt-4 pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/8 mb-2 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.22em] text-[#8F7238] uppercase font-bold">
            Engineering & Anatomy
          </span>
        </div>
        
        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#141413] tracking-tight leading-tight">
          Precision In <span className="italic text-gold-gradient font-normal">Every Component</span>
        </h2>
      </div>

      {/* Center 96-Frame Canvas Stage (Smooth & Clean) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <canvas
          ref={canvasRef}
          className="w-full h-full block mix-blend-multiply"
          style={{
            width: '100%',
            height: '100%',
            maskImage: 'radial-gradient(circle at center, black 75%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 75%, transparent 100%)',
          }}
        />
      </div>

      {/* Bottom Minimal Specs Capsule */}
      <div className="relative z-20 max-w-xl mx-auto w-full pb-3 sm:pb-5 pointer-events-none flex justify-center">
        <div className="inline-flex items-center gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-black/8 shadow-sm">
          
          <div className="flex items-center gap-1.5 font-sans text-[10px] sm:text-xs text-[#2A2621] font-medium">
            <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Beta-Titanium</span>
          </div>

          <span className="text-black/20 text-xs">|</span>

          <div className="flex items-center gap-1.5 font-sans text-[10px] sm:text-xs text-[#2A2621] font-medium">
            <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Zeiss Optics</span>
          </div>

          <span className="text-black/20 text-xs">|</span>

          <div className="flex items-center gap-1.5 font-sans text-[10px] sm:text-xs text-[#2A2621] font-medium">
            <Cpu className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>5-Barrel Hinges</span>
          </div>

        </div>
      </div>

    </section>
  );
}
