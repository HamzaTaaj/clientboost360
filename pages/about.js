// components/AboutPage.js

'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MdArrowOutward } from 'react-icons/md';


const AboutPage = () => {
    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] },
        },
    };

    return (
        <div className="mt-24 mb-32 overflow-hidden">
            {/* --- Section 1: Fluffless Growth --- */}
            <motion.section
                className="py-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                        {/* Text Content */}
                        <div className="mb-16 lg:mb-0">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <span className="text-sm font-semibold text-[var(--turq)] bg-white rounded-full py-1.5 px-4">
                                        Our Motto
                                    </span>
                                    <h1 className="mt-6 text-4xl md:text-5xl font-bold text-[var(--text-dark)] tracking-tight">
                                        Fluffless Growth On Autopilot
                                    </h1>
                                </div>

                            </div>

                            <div className="mt-12">
                                <h2 className="text-2xl font-semibold text-gray-800">Who We Are</h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    ClientBoost360 is a digital marketing brand owned and operated by Synergy Stream LLC, a Virginia-based technology and marketing company. Our mission is to empower small and medium-sized businesses through results-driven digital marketing solutions under the trusted corporate umbrella of Synergy Stream LLC.
                                </p>
                            </div>

                            <div className="mt-12 grid grid-cols-2 gap-8 text-center">
                                <div>
                                    <p className="text-5xl font-bold text-[var(--text-dark)]">320<span className="text-3xl text-[var(--turq)]">+</span></p>
                                    <p className="mt-2 text-gray-500">Happy clients</p>
                                </div>
                                <div>
                                    <p className="text-5xl font-bold text-[var(--text-dark)]">99.9<span className="text-4xl text-[var(--turq)]">%</span></p>
                                    <p className="mt-2 text-gray-500">Growth Financial</p>
                                </div>
                            </div>
                        </div>

                        {/* Growth On Autopilot Image */}
                        <div className="relative w-full aspect-[810/552] mx-auto my-8">
                            <svg
                                width="600"
                                height="442"
                                viewBox="0 0 734 442"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-0 left-0 z-10"
                            >
                                <defs>
                                    <clipPath id="clip-shape">
                                        <path d="M734 274C734 290.569 720.569 304 704 304H611C594.431 304 581 317.431 581 334V412C581 428.569 567.569 442 551 442H30C13.4314 442 0 428.569 0 412V93C0 76.4315 13.4315 63 30 63H35C51.5685 63 65 49.5685 65 33V30C65 13.4315 78.4315 0 95 0H704C720.569 0 734 13.4315 734 30V274Z" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <img
                                src="/growth on autopilot.jpg"
                                alt="Clipped image"
                                className="w-full h-full object-contain rounded-2xl"
                                style={{ clipPath: 'url(#clip-shape)' }}
                            />
                        </div>

                    </div>
                </div>
            </motion.section>

            {/* --- Section 2: Vision & Mission --- */}
            <motion.section
                className="py-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                        {/* Image Placeholder (appears first on large screens) */}
                       
                        <div className="lg:order-2  flex justify-center items-center mb-0 lg:mb-0">

                            <div className="relative w-[910px] mb-12 h-[479px] mx-auto">
                                <svg
                                    width="600"
                                    height="479"
                                    viewBox="0 0 411 479"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute"
                                >
                                    <defs>
                                        <clipPath id="clip-shape-2">
                                            <path d="M380 304.295C380 312.855 386.94 319.795 395.5 319.795C404.06 319.795 411 326.734 411 335.295V449C411 465.569 397.569 479 381 479H85C68.4314 479 55 465.569 55 449V445.587C55 430.399 42.6878 418.087 27.5 418.087C12.3122 418.087 0 405.775 0 390.587V30C0 13.4315 13.4315 0 30 0H350C366.569 0 380 13.4315 380 30V304.295Z" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <img
                                    src="/growth partner.jpg" // replace with actual image path
                                    alt="Clipped"
                                    className="absolute w-full h-full object-cover"
                                    style={{ clipPath: 'url(#clip-shape-2)' }}
                                />
                            </div>



                            <div className="lg:order-2 ml-2 text-left">
                                <h3 className="text-3xl font-bold text-gray-800">Your Growth Partner</h3>
                                <motion.a
                                    href="/contact"
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-flex items-center mt-6 px-6 py-3 bg-[var(--turq)] text-white font-semibold rounded-[15px]  hover:bg-teal-600 transition-colors"
                                >
                                    Let's Grow <MdArrowOutward className="ml-2 h-5 w-5" />
                                </motion.a>
                            </div>

                        </div>

                        {/* Text Content */}
                        <div className="lg:order-1">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-800">Vision Statement</h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    To be the go-to growth partner for businesses that value clarity, efficiency, and impact, by simplifying digital marketing and delivering measurable outcomes across every channel.
                                </p>
                            </div>

                            <div className="mt-12">
                                <h2 className="text-2xl font-semibold text-gray-800">Mission Statement</h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    ClientBoost360 empowers modern businesses, from solo founders to fast-scaling teams, by making growth simple, strategic, and scalable. With performance marketing, smart automation, and content that converts, we help brands thrive in a competitive digital world.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* "Your Growth Partner" aligned with the image on large screens */}
                    <div className="mt-16 lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-end">
                        <div className="lg:order-1"></div> {/* Empty cell for alignment */}

                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default AboutPage;