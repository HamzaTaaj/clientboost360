// components/HeroSection.js

import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const HeroSection = () => {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center bg-[var(--background)] pt-32 pb-20 px-4 sm:px-6">
      <div className="w-full max-w-screen-xl mx-auto">
        {/* Top Text */}
        <div className="w-full text-white py-4 px-2 lg:px-0 text-center lg:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight break-words"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span variants={itemVariants} className="text-[var(--turq)] block">
              Growth Without
            </motion.span>

            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start items-center gap-4 mt-2 mb-4 flex-wrap">
              <div className="hidden lg:flex items-center gap-x-2">
                <span className="bg-white text-gray-500 text-sm font-medium px-4 py-1 rounded-full">Meta Ads</span>
                <span className="bg-white text-gray-500 text-sm font-medium px-4 py-1 rounded-full">CRM</span>
                <span className="bg-[var(--turq)] text-white text-sm font-medium px-4 py-1 rounded-full">Growth</span>
              </div>
              <span className="text-[var(--text-dark)] block">
                The Overhead<span className="text-[var(--turq)]">.</span>
              </span>
            </motion.div>

            {/* Show tags for smaller screens too */}
            <motion.div variants={itemVariants} className="flex lg:hidden justify-center items-center gap-x-2 mt-4 flex-wrap">
              <span className="bg-white text-gray-500 text-sm font-medium px-4 py-1 rounded-full">Meta Ads</span>
              <span className="bg-white text-gray-500 text-sm font-medium px-4 py-1 rounded-full">CRM</span>
              <span className="bg-[var(--turq)] text-white text-sm font-medium px-4 py-1 rounded-full">Growth</span>
            </motion.div>
          </motion.h1>
        </div>

        {/* SVG Clip Mask */}
        <svg width="0" height="0">
          <defs>
            <clipPath id="hero-mask" clipPathUnits="objectBoundingBox">
              <path d="M1,0.619 C1,0.657,0.982,0.688,0.959,0.688 H0.833 C0.81,0.688,0.792,0.718,0.792,0.756 V0.932 C0.792,0.97,0.773,1,0.75,1 H0.041 C0.018,1,0,0.97,0,0.932 V0.21 C0,0.172,0.018,0.142,0.041,0.142 H0.048 C0.069,0.142,0.089,0.112,0.089,0.075 V0.068 C0.089,0.03,0.107,0,0.129,0 H0.959 C0.982,0,1,0.03,1,0.068 V0.619 Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
          {/* Left Side Content */}
          <motion.div
            className="text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              ClientBoost360 is a digital marketing brand owned and operated by Synergy Stream LLC, a Virginia-based technology and marketing company. A full-stack digital marketing partner for law firms, clinics, and professional service providers ready to grow, without the cost of building an in-house team.
            </motion.p>

            <motion.div variants={itemVariants}>
              <button
                onClick={() => router.push('/contact')}
                className="cursor-pointer hover:bg-black mt-8 bg-[var(--text-dark)] text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-opacity-80 transition-all duration-300"
              >
                Book Your Free Strategy Call
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <div className="text-left">
                <p className="text-gray-500 text-sm">Trusted by_</p>
                <p className="text-4xl font-bold text-[var(--text-dark)]">
                  320<sup className="text-[var(--turq)]">+</sup>
                </p>
                <p className="text-gray-500">Happy Clients</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4">
                <div>
                  <p className="font-bold text-lg">5.0</p>
                  <div className="flex text-yellow-400">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>

                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/150?img=1" alt="client 1" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/150?img=2" alt="client 2" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/150?img=3" alt="client 3" className="w-10 h-10 rounded-full border-2 border-white" />
                  <div className="w-10 h-10 rounded-full bg-[var(--turq)] flex items-center justify-center text-white font-bold border-2 border-white">
                    +
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Hero Video */}
          <div className="relative w-full aspect-[700/430] mx-auto lg:mx-0 max-w-2xl">
            <motion.video
              className="absolute inset-0 w-full h-full object-cover"
              style={{ clipPath: 'url(#hero-mask)' }}
              src="/IntroVideo_HeroSection_1.mp4"
              autoPlay
              loop
              muted
              playsInline
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
