"use client";
import { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MdOutlineArrowOutward } from "react-icons/md";
import { TrendingUp, BookOpen, ShoppingCart, LayoutDashboard } from 'lucide-react';
import { useRouter } from 'next/router';
const portfolioData = [
  {
    type: 'project',
    title: "Dashboard Ui/Ux for a Law Firm",
    imageUrl: "/law_firm.jpg",
    icon: <LayoutDashboard size={40} />
  },
  {
    type: 'cta',
    title: "Book Your Free Strategy Call Now!",
    description: "",
    buttonText: "Get Started"
  },
  {
    type: 'project',
    title: "Booking Automation for Dental Clinic",
    imageUrl: "/Section1_Dental.jpeg",
    icon: <BookOpen size={40} />
  },
  {
    type: 'project',
    title: "E-commerce Platform for a Local Retailer",
    imageUrl: "/e_commerce.png",
    icon: <ShoppingCart size={40} />
  },
];

const HorizontalScrollCarousel = () => {
  const router = useRouter();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const carouselRef = useRef(null);
  const [carouselOffset, setCarouselOffset] = useState(0);

  useLayoutEffect(() => {
    const calculateOffset = () => {
      const container = targetRef.current;
      const carousel = carouselRef.current;
      if (!container || !carousel) return;

      const offset = carousel.scrollWidth - container.clientWidth;
      setCarouselOffset(offset+ 500);
    };

    calculateOffset();
    window.addEventListener('resize', calculateOffset);
    return () => window.removeEventListener('resize', calculateOffset);
  }, []);

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -carouselOffset]);
  const x = useSpring(xRaw, { stiffness: 200, damping: 50, restDelta: 0.001 });

  return (
    <section
      ref={targetRef}
      className="relative h-[350vh] md:h-[180vh] pt-12 pb-12 bg-[var(--text-dark)] text-white"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <svg width="0" height="0">
          <defs>
            <clipPath id="project-card-mask" clipPathUnits="objectBoundingBox">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.228,0.087 C0.228,0.039,0.265,0,0.31,0 H0.918 C0.964,0,1,0.039,1,0.087 V0.751 C1,0.799,0.964,0.838,0.918,0.838 H0.886 C0.844,0.838,0.809,0.873,0.809,0.919 C0.809,0.965,0.774,1,0.734,1 H0.082 C0.036,1,0,0.961,0,0.913 V0.336 C0,0.288,0.036,0.249,0.082,0.249 H0.147 C0.192,0.249,0.228,0.21,0.228,0.162 V0.087 Z"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="w-full flex flex-col items-start text-left justify-start mb-12 px-6 sm:px-12 md:px-16 lg:px-24">
          <span className="bg-[var(--turq)] mt-10 text-white font-semibold py-1 px-4 rounded-full mb-4">
            Portfolio Preview
          </span>
          <h2 className="text-4xl leading-[1.2] md:text-5xl font-bold text-left">
            Over 150 projects <br /> delivered, spanning:
          </h2>
        </div>
        <div className="w-full">
          <motion.div
            ref={carouselRef}
            style={{ x }}
            className="flex gap-6 px-6 sm:px-12 md:px-16 lg:px-24"
          >
            {portfolioData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex-shrink-0 w-[320px] sm:w-[400px] ${
                  item.type === 'cta' ? 'h-[350px] self-center' : 'h-[450px] sm:h-[500px] max-sm:h-[350px]'
                }`}
              >
                {item.type === 'project' ? (
                  <div className="w-full h-full bg-[#131313] rounded-[30px] p-4 sm:p-6 flex flex-col justify-between">
                    <div className="absolute opacity-10">
                      {item.icon}
                    </div>
                    <div
                      className="w-full h-[70%] sm:h-[80%] bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${item.imageUrl})`,
                        clipPath: 'url(#project-card-mask)',
                      }}
                    />
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-lg font-semibold w-3/4">{item.title}</p>
                      <a href="/contact" className="text-white bg-[var(--turq)] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-white hover:text-black transition-colors">
                        <MdOutlineArrowOutward className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-[#131313] text-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">{item.title}</h3>
                    <p className="opacity-80 mb-6">{item.description}</p>
                    <button onClick={()=>{router.push('/contact')}} className="cursor-pointer bg-[var(--turq)] text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                      {item.buttonText} <MdOutlineArrowOutward className="inline ml-1" />
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
