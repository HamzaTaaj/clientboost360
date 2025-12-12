// components/SpecialitySection.js
'use client';

import React, { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

// --- Data for the slides ---
const specialitiesData = [
  {
    number: '01',
    category: 'Automation',
    title: 'Law Firms',
    description: 'Intake automation, lead scoring, and local service area domination.',
    imageSrc: '/law_firm.jpg',
  },
  {
    number: '02',
    category: 'Campaigns Management',
    title: 'Medical & Dental Clinics',
    description: 'HIPAA-conscious patient acquisition campaigns and streamlined booking flows.',
    imageSrc: '/specialities_2.png',
  },
  {
    number: '03',
    category: 'Funnel & Retention',
    title: 'E-Commerce & DTC',
    description: 'Full-funnel customer acquisition, CRO, and long-term retention strategies.',
    imageSrc: '/e_commerce.png',
  },
  {
    number: '04',
    category: 'Other Services',
    title: 'Professional Services',
    description: 'Proven growth playbooks for Accountants, Consultants, and Real-estate Professionals.',
    imageSrc: '/specialities_4.png',
  },
];

export default function SepacialitiesSection() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlideIndex = (activeIndex + 1) % specialitiesData.length;
  const nextSlideData = specialitiesData[nextSlideIndex];
  
  const handleSlideChange = (swiperInstance) => {
    setActiveIndex(swiperInstance.realIndex);
  };

  const slideNext = useCallback(() => {
    swiper?.slideNext();
  }, [swiper]);

  const slidePrev = useCallback(() => {
    swiper?.slidePrev();
  }, [swiper]);

  // Animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <section className="font-sans w-full py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* --- FIX: Updated grid to 3 columns to align "How it Works" to the right --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-5xl md:text-6xl font-medium text-gray-900 tracking-tight">
              Our Speciality
            </h2>
          </div>
          <div className="lg:col-span-1 flex flex-col items-start text-left">
  <p className="text-[#2dd4bf] bg-white w-fit px-12 rounded-2xl font-medium mb-2 text-lg">
    How it Works
  </p>
  <p className="text-[#535353] w-[60%] max-w-md leading-relaxed mt-2">
    We solve growth bottlenecks across all sectors, but have deep playbooks for:
  </p>
</div>

        </div>

        {/* Carousel Section */}
        <div className="relative pt-12">
          {/* Left Side: Counter and Navigation - Fixed Position */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
            <div className="text-left">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-xl font-bold text-[var(--turq)] bg-white text-center w-fit p-2 px-4 rounded-2xl leading-none select-none"
                >
                  {specialitiesData[activeIndex].number}
                </motion.p>
              </AnimatePresence>
              <div className="flex items-center gap-3 mt-8 ml-4">
                <button
                  onClick={slidePrev}
                  className="w-12 h-12 border border-gray-300 rounded-full text-gray-400 hover:bg-white hover:border-[#2dd4bf] hover:text-[#2dd4bf] transition-all duration-300 flex items-center justify-center"
                  aria-label="Previous slide"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={slideNext}
                  className="w-12 h-12 border border-gray-300 rounded-full text-gray-400 hover:bg-white hover:border-[#2dd4bf] hover:text-[#2dd4bf] transition-all duration-300 flex items-center justify-center"
                  aria-label="Next slide"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Swiper Carousel */}
          <div>
            <Swiper
              onSwiper={setSwiper}
              onSlideChange={handleSlideChange}
              modules={[Autoplay, Controller, EffectFade]}
              loop={true}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              slidesPerView={1}
              centeredSlides={true}
              spaceBetween={40}
              className="!overflow-visible"
            >
              {specialitiesData.map((item, index) => (
                <SwiperSlide key={index} className="!flex justify-center items-center py-16">
                  <ActiveSlideCard data={item} active={index === activeIndex} />
                  <span className="max-sm:hidden">
                    <NextSlidePreview
                      data={nextSlideData}
                      onNextClick={slideNext}
                    />
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8 md:hidden">
            {/* ... mobile navigation remains the same ... */}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Active Slide Component (Shadows Removed) ---
const ActiveSlideCard = ({ data, active }) => {
  const router = useRouter();
  return (
    <div className="flex items-start scale-110 gap-4">
      {/* Back Card */}
      <div className="bg-white w-[300px] rounded-3xl p-7 flex-shrink-0 border border-gray-100">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src={data.imageSrc}
            alt={data.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div key={data.title}>
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, delay: 0.1 }}
                className="text-[#2dd4bf] font-medium">{data.category}</motion.p>
              <motion.h3
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, delay: 0.2 }}
                className="text-2xl font-medium text-gray-900 mt-1">{data.title}</motion.h3>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Front Card */}
      <div className="flex justify-center mt-24 max-sm:hidden">
        <div className="bg-white w-[300px] rounded-3xl p-12 min-h-[300px] flex flex-col justify-center items-center text-center flex-shrink-0 border border-gray-100">
          <AnimatePresence mode="wait">
            <motion.p
              key={data.description}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow"
            >
              {data.description}
            </motion.p>
          </AnimatePresence>
          <button onClick={()=>{router.push('/contact')}} className="cursor-pointer flex items-center gap-2 bg-[#2dd4bf] text-white font-semibold py-3 px-5 rounded-xl hover:bg-[#14b8a6] transition-colors">
            Get Started <MdOutlineArrowOutward size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Next Slide Preview Component (Shadows Removed) ---
const NextSlidePreview = ({ data, onNextClick }) => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      key={data.title}
      initial="hidden"
      animate="visible"
      variants={textVariants}
      className="rounded-2xl translate-y-48 translate-x-24 p-6 w-64 cursor-pointer"
      onClick={onNextClick}
    >
      <motion.div variants={itemVariants} className="text-[#2dd4bf] text-lg font-semibold mb-3">
        {data.number}
      </motion.div>
      <motion.h3 variants={itemVariants} className="text-gray-900 text-xl font-bold leading-tight mb-6">
        {data.title}
      </motion.h3>
      <motion.div variants={itemVariants} className="flex items-center gap-2 text-[#2dd4bf] font-semibold bg-white rounded-full py-3 px-5 w-fit hover:bg-teal-50 transition-colors">
        Next <ArrowRight size={16} />
      </motion.div>
    </motion.div>
  );
};