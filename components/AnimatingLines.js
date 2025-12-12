'use client';

import { useEffect, useRef } from 'react';

const AnimatingLines = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const animateLine = (element, speed, reverse = false) => {
      let x = 0;
  
      const animate = () => {
        x += reverse ? speed : -speed; // direction
        if (x <= -100) x = 0;
        if (x >= 0 && reverse) x = -100;
  
        if (element) {
          element.style.transform = `translateX(${x}%)`;
        }
        requestAnimationFrame(animate);
      };
  
      animate();
    };
  
    if (line1Ref.current) animateLine(line1Ref.current, 0.01);         // scroll left
    if (line2Ref.current) animateLine(line2Ref.current, 0.02, true);   // scroll right (reverse)
  }, []);
  

  return (
    <div className="relative w-full overflow-hidden  py-6">
      {/* Left Gradient Overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/90 to-transparent z-10 pointer-events-none" />
      {/* Right Gradient Overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/90 to-transparent z-10 pointer-events-none" />

      {/* Line 1 - Turquoise (slow) */}
      <div className="whitespace-nowrap overflow-hidden relative">
        <div
          ref={line1Ref}
          className="inline-block  whitespace-nowrap text-[64px] sm:text-[64px] font-light text-[#12C4A8] hover:text-black transition-colors duration-300"
        >
          {"Let's Grow Together ".repeat(20)}
        </div>
      </div>

      {/* Line 2 - Black (fast) */}
      <div className="whitespace-nowrap overflow-hidden relative -mt-2">
        <div
          ref={line2Ref}
          className="inline-block whitespace-nowrap text-[64px] sm:text-[64px] font-light text-black hover:text-[#12C4A8] transition-colors duration-300"
        >
          {"Let's Grow Together ".repeat(20)}
        </div>
      </div>
    </div>
  );
};

export default AnimatingLines;
