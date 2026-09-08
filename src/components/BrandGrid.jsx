import React from 'react';

// Crisp, authentic SVG vectors for Ray-Ban, Oakley, Meta, Tommy Hilfiger
export default function BrandGrid() {
  return (
    <section id="brands" className="py-16 sm:py-20 px-4 sm:px-8 md:px-12 bg-[#FDFBF7] border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Clean Luxury Brand Logo Grid - No title/subtitle */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 items-center justify-items-center">
          
          {/* 1. Ray-Ban */}
          <div className="w-full h-24 sm:h-28 rounded-2xl glass-panel-light border border-black/5 flex items-center justify-center p-6 hover:border-[#B89758]/40 hover:shadow-sm transition-all duration-300 group">
            <svg
              className="w-32 sm:w-36 h-auto text-[#1A1918] group-hover:text-[#8F7238] transition-colors"
              viewBox="0 0 200 80"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ray-Ban Script Wordmark Vector */}
              <text
                x="10"
                y="55"
                fontFamily="'Brush Script MT', 'Cormorant Garamond', cursive, sans-serif"
                fontSize="48"
                fontWeight="bold"
                fontStyle="italic"
                letterSpacing="1"
              >
                Ray·Ban
              </text>
              <path
                d="M 15 62 Q 90 70 175 45"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* 2. Oakley */}
          <div className="w-full h-24 sm:h-28 rounded-2xl glass-panel-light border border-black/5 flex items-center justify-center p-6 hover:border-[#B89758]/40 hover:shadow-sm transition-all duration-300 group">
            <svg
              className="w-32 sm:w-36 h-auto text-[#1A1918] group-hover:text-[#8F7238] transition-colors"
              viewBox="0 0 200 80"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Oakley Oval Icon + Wordmark */}
              <ellipse cx="40" cy="40" rx="22" ry="14" fill="none" stroke="currentColor" strokeWidth="6" />
              <ellipse cx="40" cy="40" rx="10" ry="6" fill="currentColor" />
              <text
                x="75"
                y="48"
                fontFamily="'Plus Jakarta Sans', 'Arial Black', sans-serif"
                fontSize="22"
                fontWeight="900"
                letterSpacing="3"
              >
                OAKLEY
              </text>
            </svg>
          </div>

          {/* 3. Meta (Ray-Ban Meta) */}
          <div className="w-full h-24 sm:h-28 rounded-2xl glass-panel-light border border-black/5 flex items-center justify-center p-6 hover:border-[#B89758]/40 hover:shadow-sm transition-all duration-300 group">
            <svg
              className="w-32 sm:w-36 h-auto text-[#1A1918] group-hover:text-[#8F7238] transition-colors"
              viewBox="0 0 200 80"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Meta Infinity Loop + Typography */}
              <path
                d="M32 28 C24 28 16 35 16 43 C16 51 23 57 30 57 C37 57 43 51 49 44 L53 39 C59 32 65 28 72 28 C79 28 86 34 86 43 C86 52 79 57 71 57 C64 57 58 52 52 45 L48 40 C43 33 37 28 32 28 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <text
                x="98"
                y="48"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontSize="24"
                fontWeight="800"
                letterSpacing="2"
              >
                meta
              </text>
            </svg>
          </div>

          {/* 4. Tommy Hilfiger */}
          <div className="w-full h-24 sm:h-28 rounded-2xl glass-panel-light border border-black/5 flex items-center justify-center p-6 hover:border-[#B89758]/40 hover:shadow-sm transition-all duration-300 group">
            <svg
              className="w-36 sm:w-40 h-auto text-[#1A1918] group-hover:text-[#8F7238] transition-colors"
              viewBox="0 0 220 80"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Tommy Hilfiger Flag Block + Serif */}
              <rect x="25" y="16" width="30" height="9" fill="#00174F" />
              <rect x="25" y="25" width="15" height="10" fill="#FFFFFF" stroke="#00174F" strokeWidth="0.5" />
              <rect x="40" y="25" width="15" height="10" fill="#CC0000" />
              <rect x="25" y="35" width="30" height="9" fill="#00174F" />
              
              <text
                x="65"
                y="28"
                fontFamily="'Cinzel', 'Times New Roman', serif"
                fontSize="13"
                fontWeight="700"
                letterSpacing="2.5"
              >
                TOMMY
              </text>
              <text
                x="65"
                y="42"
                fontFamily="'Cinzel', 'Times New Roman', serif"
                fontSize="12"
                fontWeight="600"
                letterSpacing="2.5"
              >
                HILFIGER
              </text>
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}
