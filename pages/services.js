import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ContentCreationIcon } from '@/icons/ContentCreationIcon';
import ConversionIcon from '@/icons/ConversionIcon';
import CRMIcon from '@/icons/CRMIcon';
import PayPerClickIcon from '@/icons/PayPerClickIcon';
import RobotIcon from '@/icons/RobotIcon';
import SeoIcon from '@/icons/SeoIcon';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { useRouter } from 'next/router';

// --- Data for the service cards (no changes here) ---
const servicesData = [
  {
    icon: <SeoIcon />,
    title: "Search Engine Optimization (SEO)",
    points: [
      "Site speed improvements, technical audits & schema fixes.",
      "Keyword opportunity mapping with topic cluster calendars.",
      "Relevant, high-authority backlinks built with outreach.",
      "Monthly competitor gap analysis & performance sprints."
    ]
  },
  {
    icon: <PayPerClickIcon />,
    title: "Pay-Per-Click Advertising",
    points: [
      "Google Ads: Smart keyword sculpting & high-performance campaign builds.",
      "Performance Max and search network mastery.",
      "Landing pages are optimized with A/B testing within 30 days.",
      "Meta Ads (Facebook/Instagram): Iterative testing across angles, hooks, and offers.",
      "Data-backed budget shifts to lower CPA over time."
    ]
  },
  {
    icon: <CRMIcon />,
    title: "CRM & Marketing Automation",
    points: [
      "CRM pipelines, workflows, and lead-nurturing systems.",
      "Missed-call text-back, lead enrichment, and auto-sequences.",
      "Staff onboarding with SOPs and dashboard training."
    ]
  },
  {
    icon: <ConversionIcon />,
    title: "Conversion-Driven Web & Landing Pages",
    points: [
      "Built for speed on Webflow or WordPress.",
      "UI/UX informed by 1,000+ real-world split tests.",
      "Heatmaps and session tracking integrated from day one."
    ]
  },
  {
    icon: <ContentCreationIcon />,
    title: "Content Creation & Branding",
    points: [
      "Core assets repurposed into blogs, videos & micro-content.",
      "Brand consistency across visuals, fonts, tone, and design."
    ]
  }
];


// --- Reusable component for the SVG card shape (no changes here) ---
const CardShape = ({ className }) => (
  <svg
    viewBox="0 0 585 607"
    xmlns="http://www.w3.org/2000/svg"
    className={`absolute inset-0 w-full h-full z-0 ${className}`}
    preserveAspectRatio="none"
  >
    <path
      d="M550 0C569.33 0 585 15.67 585 35V482C585 498.569 571.569 512 555 512H520C503.431 512 490 525.431 490 542V577C490 593.569 476.569 607 460 607H35C15.67 607 0 591.33 0 572V35C0 15.67 15.67 0 35 0H550Z"
      fill="currentColor"
    />
  </svg>
);


// --- ✨ NEW: Interactive Service Card Component ---
const ServiceCard = ({ icon, title, points, index }) => {
  const ref = useRef(null);
  const primaryTeal = "#27C9A3";

  // Motion values to track mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs to smoothly animate the rotation
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // Transform mouse position into a 3D rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12.5deg", "-12.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12.5deg", "12.5deg"]);
  
  // Parallax effect for the content inside the card
  const contentTranslateX = useTransform(rotateY, ["-12.5deg", "12.5deg"], ["-10px", "10px"]);
  const contentTranslateY = useTransform(rotateX, ["-12.5deg", "12.5deg"], ["-10px", "10px"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    // Normalize mouse position to a range of -0.5 to 0.5
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
<motion.div
  ref={ref}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  style={{
    rotateX,
    rotateY,
    transformStyle: "preserve-3d",
  }}
  className="relative p-1 min-h-[700px] "
>
  <div
    style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
    className="absolute inset-0"
  >
    <CardShape className="text-white drop-shadow-xl" />
    <motion.div
      style={{
        translateX: contentTranslateX,
        translateY: contentTranslateY,
      }}
      className="relative z-10 p-8 flex flex-col h-full"
    >
      <div className="mb-4" style={{ color: primaryTeal }}>
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        {title}
      </h3>

      <ul className="space-y-3 text-gray-600 list-disc list-inside flex-grow">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      {/* ✅ Bottom-right positioned arrow button */}
      <div className="mt-auto -mr-10 flex justify-end">
        <a
          href="#"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
          style={{ backgroundColor: primaryTeal }}
        >
          <MdOutlineArrowOutward className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>
    </motion.div>
  </div>
</motion.div>


  );
};

// --- Main Services Section Component ---
const ServicesSection = () => {
  const primaryTeal = "#27C9A3";
  const router = useRouter();
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 mb-32 mt-24">
      <div className="max-w-7xl mx-auto" style={{ perspective: "1000px" }}> {/* Add perspective to the container */}
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center gap-y-10 items-center justify-center text-center flex flex-col mb-16"
        >
          <p style={{ color: primaryTeal }} className="text-sm bg-white rounded-2xl py-2 w-fit px-2 text-center font-bold uppercase tracking-wider mb-2">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            What we are best at.
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
          {/* Map over data and render the new ServiceCard component */}
          {servicesData.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}

          {/* Call to Action Card with a simpler hover effect for consistency */}
          <motion.button
            onClick={()=>{router.push('/contact')}}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }} // Simple scale on hover
            transition={{ duration: 0.5, delay: servicesData.length * 0.1 }}
            className="relative cursor-pointer bg-[var(--turq)] text-white rounded-4xl p-1 min-h-[420px] lg:h-full lg:row-span-1"
          >
            <div className="relative z-10 p-8 flex flex-col items-center justify-center h-full text-white text-center">
              <RobotIcon />
              <h3 className="text-3xl font-bold">
                Book a Free Strategy Call
              </h3>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;