'use client';

import Image from 'next/image';
import React, { useState } from 'react';

// Data for the puzzle pieces, now with absolute positioning classes.
const puzzlePieces = [
  {
    id: 1,
    baseSrc: '/1 Retention Strategy',
    alt: 'Retention Strategy',
    // Each piece has a width and is positioned absolutely within the parent.
    layoutClasses: 'w-32 h-auto absolute top-4 left-0',
  },
  {
    id: 2,
    baseSrc: '/2 Brand Positioning',
    alt: 'Brand Positioning',
    layoutClasses: 'w-[105px] h-auto absolute top-[16px] left-[104.4px]',
  },
  {
    id: 3,
    baseSrc: '/3 CRM + Automation',
    alt: 'CRM + Automation',
    layoutClasses: 'w-32 h-auto absolute top-[16.2px] left-[185.7px]',
  },
  {
    id: 4,
    baseSrc: '/4 Analytics',
    alt: 'Analytics',
    layoutClasses: 'w-32 h-auto absolute top-[7.52rem] -left-[0.1px]',
  },
  {
    id: 5,
    baseSrc: '/5 Conversion',
    alt: 'Conversion',
    layoutClasses: 'w-32 h-auto absolute top-[7.52rem] left-[104.6px]',
  },
  {
    id: 6,
    baseSrc: '/6 Full service',
    alt: 'Full Service',
    layoutClasses: 'w-[104.5px] h-auto absolute top-[97.7px] left-[209px]',
  },
];

const PuzzleShape = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    // Main container to ensure proper centering and padding.
    <div className="w-full  -mb-20 z-40 relative flex flex-col items-center py-8 px-4 overflow-hidden">
      {/* Your text content section */}
      <div className="flex flex-col gap-y-4 mb-12 items-center justify-center text-center">
        <h1 className="w-fit bg-white text-[var(--turq)] px-5 rounded-xl mb-2 font-medium">
          Why Us
        </h1>
        <h1 className="text-3xl text-center font-bold">The X-Factors</h1>
      </div>

      {/* --- ✨ FIX: Parent is now a relative "canvas" with a defined size --- */}
      <div
        className="
          relative w-[20rem] h-[16rem] /* Canvas with specific dimensions */
          mt-16 mb-4
          scale-100 sm:scale-115 md:scale-180 /* smaller, responsive */
          transition-transform duration-500 ease-in-out
        "
      >
        {puzzlePieces.map((piece, index) => {
          const isHovered = hoveredIndex === index;
          const imageSrc = `${piece.baseSrc} ${isHovered ? 'ON' : 'OFF'}.png`;
          const activeStateClasses = isHovered
            ? 'scale-110 -translate-y-2 z-20' // Hover effect is slightly smaller
            : 'scale-100  z-10';

          return (
            <Image
              key={piece.id}
              src={imageSrc}
              alt={piece.alt}
              width={1920}
              height={1080}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                object-contain
                ${piece.layoutClasses}
                ${activeStateClasses}
                cursor-pointer
                transition-all duration-300 ease-in-out
              `}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PuzzleShape;