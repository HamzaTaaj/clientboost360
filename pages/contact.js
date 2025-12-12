// components/ContactPage.js

"use client";

import EmailIcon from "@/icons/EmailIcon";
import LocationIcon from "@/icons/LocationIcon";
import PhoneIcon from "@/icons/PhoneIcon";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const ContactPage = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contactDetails = [
    {
      icon: <PhoneIcon />,
      title: "Call",
      info: "+1 (703) 831-5550",
    },
    {
      icon: <EmailIcon />,
      title: "Email",
      info: "sales@clientboost360.com",
    },
    {
      icon: <LocationIcon />,
      title: "Location",
      info: "8200 Greensboro Dr STE 900, McLean, VA 22102",
    },
  ];

  return (
    <div className=" mt-24 mb-32">
      {/* Section 1: Intro Header */}
      <motion.section
        className="py-12 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-sm font-semibold text-[var(--turq)] bg-white rounded-full py-1 px-4">
            Contact
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Let's Build Smarter Growth—Together.
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Have questions? Ready to scale? Looking for clarity before your next
            marketing move? You’re in the right place.{" "}
          </p>
        </div>
      </motion.section>

      {/* Section 4: Contact Form */}
      <section className=" ">
        <div className="max-w-6xl max-sm:w-full mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            {/* <h2 className="text-4xl font-bold text-gray-800">
              Prefer a Message?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We'll get back to you within 24 hours.
            </p> */}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            {/* Map Placeholder */}
            <div className="h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden ">
              {/* For a real map, you would integrate Google Maps, Mapbox, or Leaflet here. */}
              {/* This is a styled placeholder to match the design. */}
              {/* <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: "url('https://i.imgur.com/uVp8c95.png')" }}
                                aria-label="Map showing business location"
                            ></div> */}
              <Image
                src="/Map.jpeg"
                alt="Map Placeholder"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Form */}
            <form
              action="https://formspree.io/f/mnnzrzyr"
              method="POST"
              className="space-y-6 max-w-2/3 max-sm:max-w-full"
              onSubmit={() => {
                if (typeof window !== "undefined") {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({ event: "formSubmission" });
                }
              }}
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                  className="bg-white w-full px-5 py-4 rounded-xl border-0 focus:ring-2 focus:ring-inset focus:ring-teal-500 transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  required
                  className="bg-white w-full px-5 py-4 rounded-xl border-0 focus:ring-2 focus:ring-inset focus:ring-teal-500 transition"
                />
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number (optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number (optional)"
                  className="bg-white w-full px-5 py-4 rounded-xl border-0 focus:ring-2 focus:ring-inset focus:ring-teal-500 transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  placeholder="Message"
                  required
                  className="bg-white w-full px-5 py-4 rounded-xl border-0 focus:ring-2 focus:ring-inset focus:ring-teal-500 transition"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-[var(--turq)] text-white font-medium rounded-lg hover:bg-teal-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send now
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Contact Details */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {contactDetails.map((detail, index) => (
              <motion.div
                key={index}
                variants={sectionVariants}
                className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start gap-4 max-w-sm"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-full text-teal-600">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {detail.title}
                  </h3>
                  <p className="text-gray-600">{detail.info}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3: CTA Block */}
      <section className=" text-black">
        <motion.div
          className="max-w-5xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div>
            <h2 className="text-4xl font-bold">Book Your Free Strategy Call</h2>
            <p className="mt-4 text-lg">
              Get expert advice tailored to your goals, no fluff, no pressure.
            </p>
            {/* <motion.a
                            href="#"
                            className="inline-flex rounded-2xl items-center justify-center mt-8 px-4 py-4 bg-teal-500 text-white font-medium shadow-lg hover:bg-teal-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book Now <MdArrowOutward size={24} />
                        </motion.a> */}
          </div>
          <div className="">
            <p>
              We're here to make strategy calls easier, collaborative, smarter,
              and just plain faster. Whether you're running a solo practice or
              scaling a multi-location brand, let's talk about how we can help
              you grow without the guesswork.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
