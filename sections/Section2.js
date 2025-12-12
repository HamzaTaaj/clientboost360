// file: components/InteractiveServices.tsx
"use client";

import { useState, useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

// --- Data for our services ---
const services = [
  {
    id: 1,
    title: "SEO Optimization",
    description: "Climb the search rankings with proven SEO strategies tailored to your niche. Capture high-intent traffic and stay competitive with every algorithm shift.",
    imageUrl: "/SEO.png" // Replace with your actual image path
  },
  {
    id: 2,
    title: "Google Ads",
    description: "Drive targeted, high-quality traffic instantly. We manage and optimize your Google Ads campaigns for maximum ROI and lead generation.",
    imageUrl: "/Service1.png" // Replace with your actual image path
  },
  {
    id: 3,
    title: "Meta Ads (Facebook & Instagram)",
    description: "Engage your audience on the world's largest social platforms. We create compelling ad creatives that convert scrollers into customers.",
    imageUrl: "/meta.png"// Replace with your actual image path
  },
  {
    id: 4,
    title: "Content Creation",
    description: "Fuel your marketing with high-quality content. From blog posts to videos, we produce assets that build authority and engage your audience.",
    imageUrl: "/content_creation.png" // Replace with your actual image path
  },
  {
    id: 5,
    title: "CRM & Automation",
    description: "Streamline your sales and marketing process. We implement CRM systems and automation workflows to nurture leads and close deals efficiently.",
    imageUrl: "/crm.png"// Replace with your actual image path
  }
];

// --- Main Component ---
const Section2 = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const imageContainerRef = useRef(null);
  
  // --- Logic for mouse repulsion effect ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Apply a spring effect for smooth, natural movement
  const smoothX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });
  
  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return;

    const rect = imageContainerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate distance from center of the image container
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // The amount to push the image away. The closer the mouse, the bigger the push.
    const moveX = (mouseX - centerX) * -0.2; 
    const moveY = (mouseY - centerY) * -0.2; 
    
    x.set(moveX);
    y.set(moveY);
  };
  
  const handleMouseLeave = () => {
    // Reset to center when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      className="w-full py-20 px-4 sm:px-6 lg:px-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto">
        <span className="text-xl font-semibold bg-white border border-gray-200 text-[#12C4A8] py-1 px-4 rounded-full">
          Our Services
        </span>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: List of Services */}
          <div className="flex flex-col gap-4">
            {services.map((service, index) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveService(service)}
                className={`p-6 rounded-lg cursor-pointer transition-colors duration-300 ${
                  // Progressive left margin on desktop only (lg and up)
                  index === 0 ? 'lg:ml-0' :
                  index === 1 ? 'lg:ml-16' :
                  index === 2 ? 'lg:ml-32' :
                  index === 3 ? 'lg:ml-64' :
                  'lg:ml-100'
                }`}
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300
                      ${activeService.id === service.id 
                        ? 'bg-[#12C4A8] text-white' 
                        : 'bg-transparent border-2 border-gray-300 text-gray-500'}`
                    }
                  >
                    {service.id}
                  </motion.div>
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-semibold transition-colors duration-300 ${activeService.id === service.id ? 'text-[#1E1E1E]' : 'text-gray-400'}`}>
                      {service.title}
                    </h3>
                    <AnimatePresence>
                    {activeService.id === service.id && (
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-600 mt-2"
                        >
                          {service.description}
                        </motion.p>
                    )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Image Display */}
          <div 
            ref={imageContainerRef}
            className="hidden lg:flex items-center justify-center h-[500px] sticky top-20"
          >
            <motion.div
                style={{ x: smoothX, y: smoothY }}
                className="w-[250px] h-[250px] md:w-[200px] md:h-[400px]"
            >
                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeService.id}
                        src={activeService.imageUrl}
                        alt={activeService.title}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="w-full h-full object-contain"
                    />
                </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;