// components/TestimonialsSection.js
'use client';

import React, { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade'; // Effect style

// --- Testimonials Data ---
// You can add or remove testimonials here.
// The `shortQuote` is for the top navigation area.
const testimonialsData = [
  {
    quote: "From the very first call, the team understood our vision and translated it into a powerful digital presence. The leads haven't stopped coming since our campaign launch. They are our long-term growth partners now!",
    shortQuote: "The leads haven't stopped coming...",
    clientName: 'Emily Stone',
    clientTitle: 'Founder, Bloom Wellness',
    imageSrc: '/Section5_1.png', // 👈 Replace with your image
  },
  {
    quote: "It felt like working with an in-house team – just smarter. Their strategic insights doubled our conversion rate in just three months.",
    shortQuote: "They doubled our conversion rate...",
    clientName: 'David Chen',
    clientTitle: 'CEO, TechNova Solutions',
    imageSrc: '/t2.png', // 👈 Replace with your image
  },
  {
    quote: "Omar Reyes, Partner – Reyes Law Firm:Our intake is now 90% automated, and we doubled our case volume in just two months. Total game changer.",
    shortQuote: "200% ROI in the first quarter...",
    clientName: 'Sarah Jenkins',
    clientTitle: 'Marketing Director, Threads & Co.',
    imageSrc: '/Section5_3.jpeg',  // 👈 Replace with your image
  },
];


// --- Main Testimonials Section Component ---
export default function Section5() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiperInstance) => {
    setActiveIndex(swiperInstance.realIndex);
  };
  const prevSlide = useCallback(() => {
    swiper?.slidePrev();
  }, [swiper]);
  
  const nextSlide = useCallback(() => {
    swiper?.slideNext();
  }, [swiper]);

  // Safely get the next quote for the top navigation
  const nextQuoteIndex = (activeIndex + 1) % testimonialsData.length;
  const nextQuote = testimonialsData[nextQuoteIndex]?.shortQuote || '';

  return (
    <section className="bg-[#292929] text-white py-72 sm:py-72">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="bg-white text-[var(--turq)] text-sm font-bold px-4 py-1.5 rounded-full">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Top Quote Navigation */}
    {/* Top Quote Navigation */}
<div className="max-w-4xl mx-auto flex justify-between items-center mb-6 px-4">
  <p className="text-gray-400 italic text-left flex-grow truncate pr-4 text-lg">
    "{nextQuote}"
  </p>
  
  <div className="flex gap-3">
    {/* Back Button */}
    <button 
      onClick={prevSlide} 
      className="flex-shrink-0 p-2 border border-gray-700 rounded-full text-gray-500 hover:bg-gray-800 hover:border-teal-400 hover:text-white transition-all duration-300"
      aria-label="Previous testimonial"
    >
      <ChevronRight className="rotate-180" size={24} />
    </button>

    {/* Next Button */}
    <button 
      onClick={nextSlide} 
      className="flex-shrink-0 p-2 border border-gray-700 rounded-full text-gray-500 hover:bg-gray-800 hover:border-teal-400 hover:text-white transition-all duration-300"
      aria-label="Next testimonial"
    >
      <ChevronRight size={24} />
    </button>
  </div>
</div>


        {/* Swiper Carousel */}
        <div className="max-w-4xl mx-auto">
          <Swiper
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            modules={[Navigation, EffectFade, Autoplay]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            speed={800} // Transition speed in ms
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

// --- Individual Testimonial Card Component ---
function TestimonialCard({ quote, clientName, clientTitle, imageSrc }) {
  return (
    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[16/7] w-full rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={`Testimonial from ${clientName}`}
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      
      {/* Content Container */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8 md:p-10">
        {/* Quote Box */}
        <div className="bg-[var(--turq)] backdrop-blur-md p-2 rounded-2xl">
          <p className="text-[8px] sm:text-lg font-medium leading-relaxed text-white/90">
            "{quote}"
          </p>
        </div>

        {/* Client Info Pill */}
        {/* <div className="bg-white text-gray-900 py-3 px-5 rounded-full shadow-lg flex items-center gap-3 mt-5 self-start w-auto max-w-[90%]">
          <div>
            <p className="font-bold text-sm sm:text-base">{clientName}</p>
            <p className="text-xs sm:text-sm text-gray-600">{clientTitle}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}