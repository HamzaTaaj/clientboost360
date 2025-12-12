// components/PricingPage.js
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdDone } from "react-icons/md";

const PricingPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const plans = [
    {
      name: 'Starter',
      description: 'Ideal For Local businesses & solo practices',
      price: '$1,250',
      features: ['1 channel (SEO or Ads)', '5 keywords/ad groups', 'Performance Dashboard', 'Quarterly strategy call'],
      isPopular: false,
    },
    {
      name: 'Growth',
      description: 'Ideal For Multi-location or e-commerce brands',
      price: '$2,500',
      features: ['SEO + Ads bundle', 'CRO landing page', 'Basic CRM setup', 'Bi-weekly calls'],
      isPopular: false,
    },
    {
      name: 'Scale',
      description: 'Ideal For Aggressive expansion & national reach',
      price: '$4,500',
      features: ['All channels', '4 landing pages', 'Full CRM automation', 'Dedicated strategist', 'Weekly sprint'],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      description: 'Need it all?',
      price: null,
      features: ['Tailored scope', 'API integrations', 'On-site workshops', 'and more'],
      isPopular: false,
    },
  ];

  return (
    <div className="mb-48 min-h-screen py-12 px-4 sm:px-6 mt-32 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-sm font-semibold text-[var(--turq)] bg-white rounded-full py-1 px-3 inline-block">
            Pricing
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            No Guesswork. Just Growth.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Transparent pricing. No hidden fees. Scalable plans designed for results.
          </p>
        </div>

        <motion.div
          className="mt-24 rounded-4xl bg-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {plans.map((plan, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                className="relative max-sm:py-24 rounded-4xl p-8 bg-white text-gray-900 cursor-pointer group transition-colors duration-300"
                onClick={() => setActiveIndex(isActive ? null : index)}
                animate={{
                  y: isActive ? -40 : 0,
                  scale: isActive ? 1.05 : 1,
                }}
                whileHover={{
                  y: -40,
                  scale: 1.05,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
              >
                {plan.isPopular && (
                  <div className="absolute top-5 right-8 -translate-y-0 opacity-100 transition-opacity duration-300">
                    <span className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-semibold border bg-white transition-colors duration-300 ${
                        isActive 
                        ? 'border-transparent text-teal-500' 
                        : 'border-[var(--turq)] text-[var(--turq)] md:group-hover:border-transparent md:group-hover:text-teal-500'
                      }`}>
                      Popular
                    </span>
                  </div>
                )}
                
                <div 
                  className={`absolute inset-0 rounded-4xl transition-opacity duration-300 -z-10 ${
                    isActive ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'
                  }`}
                  style={{
                    background: 'var(--turq)',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='291' height='409' viewBox='0 0 291 409' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M94.2676 -6.11987C119.488 5.56323 78.8799 107.929 201.084 107.929C265.62 107.929 251.711 191.566 290.655 197.5' stroke='rgba(246, 245, 250, 0.5)'/%3E%3Cpath d='M164.366 -33.3804C189.587 -21.6973 148.979 80.6689 271.183 80.6689C335.718 80.6689 321.81 164.305 360.754 170.239' stroke='rgba(246, 245, 250, 0.5)'/%3E%3Cpath d='M-17 65.5004C23.9335 58.0859 107.74 58.0752 90.9296 101.793C63.1127 174.134 128.606 245.205 303.451 259.254' stroke='rgba(255, 255, 255, 0.5)'/%3E%3Cpath d='M-92.6621 92.4638C-42.0638 83.3134 61.5303 83.3003 40.7508 137.252C6.36606 226.53 87.3234 314.24 303.451 331.577' stroke='rgba(255, 255, 255, 0.5)'/%3E%3Cpath d='M-144.958 137.575C-87.6791 127.213 29.5917 127.198 6.06894 188.295C-32.8554 289.394 58.7901 388.719 303.451 408.352' stroke='rgba(255, 255, 255, 0.5)'/%3E%3C/svg%3E")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
                
                <h3 className={`text-2xl font-bold relative z-10 transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-gray-900 md:group-hover:text-white'
                }`}>
                  {plan.name}
                </h3>
                
                <p className={`mt-4 text-sm relative z-10 transition-colors duration-300 ${
                  isActive ? 'text-teal-100' : 'text-gray-500 md:group-hover:text-teal-100'
                }`}>
                  {plan.description}
                </p>
                
                <ul className="mt-8 space-y-4 relative z-10">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className={`rounded-full p-0.5 transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-900 md:group-hover:text-white'
                      }`}>
                        <MdDone />
                      </div>
                      <span className={`text-base font-medium transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-900 md:group-hover:text-white'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {plan.price ? (
                  <p className="mt-8 relative z-10">
                    <span className={`text-4xl font-extrabold transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-gray-900 md:group-hover:text-white'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg font-medium transition-colors duration-300 ${
                      isActive ? 'text-teal-200' : 'text-gray-500 md:group-hover:text-teal-200'
                    }`}>
                      /month
                    </span>
                  </p>
                ) : (
                  <p className={`mt-8 text-xl font-bold transition-colors duration-300 relative z-10 ${
                    isActive ? 'text-white' : 'text-gray-900 md:group-hover:text-white'
                  }`}>
                    Schedule a Call
                  </p>
                )}
                
                {plan.name === 'Enterprise' && 
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full text-center mt-8 px-6 py-4 text-lg font-semibold rounded-2xl transition-colors duration-300 relative z-10 ${
                    isActive 
                      ? 'bg-white text-teal-500' 
                      : 'bg-teal-50 text-teal-600 hover:bg-teal-100 md:group-hover:bg-white md:group-hover:text-teal-500'
                  }`}
                >
                  {plan.name === 'Enterprise' ? "Let's Talk" : 'Choose'}
                </motion.a>
          }
              </motion.div>
                  
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;