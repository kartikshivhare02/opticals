import React, { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Layers, Shield, Eye, Cpu, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_EXPLODED_FRAMES = 96;

const COMPONENTS = [
  {
    id: 'chassis',
    step: '01',
    name: 'Titanium Monocoque',
    desc: 'Milled from a single block of aerospace-grade beta-titanium with 0.02mm surgical CNC precision. Lightweight 14.8g with zero nose marks.',
    spec: 'Ti-15V Alloy • 14.8g',
    frameRange: [0, 32],
    icon: Shield,
  },
  {
    id: 'lenses',
    step: '02',
    name: 'Zeiss Blue-Cut Optics',
    desc: '9-layer hydrophobic and oleophobic crystal coating eliminates screen fatigue and blocks 100% of harmful UV400 rays.',
    spec: 'Anti-Glare • UV400',
    frameRange: [33, 64],
    icon: Eye,
  },
  {
    id: 'hinges',
    step: '03',
    name: '5-Barrel Tension Hinges',
    desc: 'Custom engineered micro-cam mechanical hinges tested for over 50,000 smooth cycles with zero loosening or screw drift.',
    spec: '50,000+ Cycles • Zero Play',
    frameRange: [65, 95],
    icon: Cpu,
  },
];

export default function ExplodedViewSection() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const frameIndexRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);

  // Touch drag scrub refs
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startFrameRef = useRef(0);

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

    // Responsive Mobile-First Dynamic Scaling:
    // On phone screens (e.g. 430x932), scale up to 1.45x so the exploded parts expand dynamically across the screen
    const isMobile = width < 768;
    const baseScale = Math.min(width / imgW, height / imgH);
    const scale = isMobile ? (width / imgW) * 1.45 : baseScale * 1.2;

    const renderW = imgW * scale;
    const renderH = imgH * scale;
    const renderX = (width - renderW) / 2;
    const renderY = (height - renderH) / 2;

    ctx.drawImage(img, 0, 0, imgW, imgH, renderX, renderY, renderW, renderH);
    setCurrentFrame(safeIndex);
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
      end: '+=1200',
      pin: true,
      scrub: 0.4,
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

  // Desktop Mouse Scrub (does not block mobile scrolling)
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startFrameRef.current = frameIndexRef.current;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const diffX = e.clientX - startXRef.current;
    const frameDelta = Math.floor(diffX / 3);
    const nextFrame = Math.max(0, Math.min(TOTAL_EXPLODED_FRAMES - 1, startFrameRef.current + frameDelta));
    renderFrame(nextFrame);
    setScrollProgress(nextFrame / (TOTAL_EXPLODED_FRAMES - 1));
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Jump to specific component on tap
  const jumpToComponent = (idx) => {
    const target = COMPONENTS[idx].frameRange[0];
    renderFrame(target);
    setScrollProgress(target / (TOTAL_EXPLODED_FRAMES - 1));
  };

  // Active component based on current frame
  const activeCompIdx = COMPONENTS.findIndex(
    (c) => currentFrame >= c.frameRange[0] && currentFrame <= c.frameRange[1]
  );
  const activeComponent = COMPONENTS[activeCompIdx >= 0 ? activeCompIdx : 0];
  const percentDeconstructed = Math.round((currentFrame / (TOTAL_EXPLODED_FRAMES - 1)) * 100);

  return (
    <section
      ref={containerRef}
      id="features"
      className="relative w-full h-[100svh] overflow-hidden bg-[#FAF8F5] select-none flex flex-col justify-between p-4 sm:p-8 md:p-12 border-t border-black/5 touch-pan-y"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />

      {/* Top Header & Dynamic Component Selector Pills */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-xl mx-auto pt-2 sm:pt-4 pointer-events-none w-full">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full gold-tag-luxury mb-1.5 shadow-sm">
          <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] text-[#8F7238] uppercase font-bold">
            Anatomy & Craftsmanship
          </span>
        </div>
        
        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#141413] tracking-tight leading-[1.1] mb-2.5">
          Precision In <span className="italic text-gold-gradient font-normal">Every Detail</span>
        </h2>

        {/* Dynamic Interactive Component Tabs (Tap on Phone) */}
        <div className="pointer-events-auto flex items-center justify-center gap-1.5 max-w-full overflow-x-auto py-1 scrollbar-none">
          {COMPONENTS.map((comp, idx) => (
            <button
              key={comp.id}
              onClick={() => jumpToComponent(idx)}
              className={`px-3 py-1 rounded-full font-sans text-[10px] uppercase font-bold tracking-wider transition-all duration-300 flex items-center gap-1.5 active:scale-95 ${
                activeCompIdx === idx
                  ? 'bg-[#141413] text-[#FAF8F5] shadow-md scale-102'
                  : 'bg-white/80 backdrop-blur-md text-[#736E65] border border-black/8 hover:border-[#C5A059]/40'
              }`}
            >
              <span className="text-[#C5A059]">{comp.step}</span>
              <span className="truncate max-w-[80px] sm:max-w-none">{comp.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Center Interactive Exploded Canvas Stage with Desktop Scrub */}
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="absolute inset-0 flex items-center justify-center cursor-ew-resize active:cursor-grabbing pointer-events-none sm:pointer-events-auto"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block mix-blend-multiply"
          style={{
            width: '100%',
            height: '100%',
            maskImage: 'radial-gradient(circle at center, black 70%, transparent 98%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 70%, transparent 98%)',
          }}
        />
      </div>

      {/* Dynamic Floating Active Feature Card for Phone & Desktop */}
      <div className="relative z-20 max-w-xl mx-auto w-full pb-3 sm:pb-5 pointer-events-none">
        <div className="glass-card-luxury p-3.5 sm:p-5 rounded-2xl border border-[#C5A059]/25 shadow-lg mx-auto max-w-md bg-white/95 backdrop-blur-xl transition-all duration-500">
          
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5 font-sans text-[10px] uppercase font-bold text-[#8F7238] tracking-wider">
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              <span>{activeComponent.step} / {activeComponent.name}</span>
            </div>
            
            {/* Live Progress Pill */}
            <span className="font-sans text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-gold-50 text-[#8F7238] border border-gold-200">
              {percentDeconstructed}% Deconstructed
            </span>
          </div>

          <p className="font-sans text-xs text-[#524C44] font-normal leading-relaxed mb-2">
            {activeComponent.desc}
          </p>

          <div className="flex items-center justify-between pt-1.5 border-t border-black/5 font-sans text-[10px]">
            <span className="font-semibold text-[#141413]">{activeComponent.spec}</span>
            <span className="text-[#8E867B] uppercase tracking-wider text-[9px] hidden sm:inline">Drag to scrub anatomy</span>
            <span className="text-[#8E867B] uppercase tracking-wider text-[9px] sm:hidden">Scroll to explore details</span>
          </div>

        </div>
      </div>

    </section>
  );
}
