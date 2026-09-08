import React, { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import HeroOverlayText from './HeroOverlayText';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;

export default function HeroAnimation({ onOpenBooking }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const frameIndexRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Draw frame on canvas with high DPI and centered scaling
  const renderFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const safeIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(index)));
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

    // Frame aspect calculation (720x1280)
    const imgW = img.naturalWidth || 720;
    const imgH = img.naturalHeight || 1280;

    // Scale to fill and center
    const scale = Math.max(width / imgW, height / imgH);
    const renderW = imgW * scale;
    const renderH = imgH * scale;
    const renderX = (width - renderW) / 2;
    const renderY = (height - renderH) / 2;

    ctx.fillStyle = '#FDFBF7';
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, imgW, imgH, renderX, renderY, renderW, renderH);
  }, []);

  // Preload all 240 images
  useEffect(() => {
    imagesRef.current = new Array(TOTAL_FRAMES);

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const padded = String(i).padStart(6, '0');
      img.src = `/frames/frame_${padded}.webp`;

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

  // GSAP ScrollTrigger
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
          TOTAL_FRAMES - 1,
          Math.max(0, Math.floor(self.progress * (TOTAL_FRAMES - 1)))
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

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] overflow-hidden bg-[#FDFBF7] select-none"
    >
      {/* Subtle Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-10 flex justify-between px-6 sm:px-12 opacity-25">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#B89758]/40 to-transparent" />
        <div className="hidden md:block w-[1px] h-full bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#B89758]/40 to-transparent" />
      </div>

      {/* Primary HTML5 Canvas Renderer */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block relative z-0"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Scroll-Synced Floating Typography */}
      <HeroOverlayText
        scrollProgress={scrollProgress}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
}
