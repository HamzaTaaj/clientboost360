import React from "react";
import Newsletter from "./Newsletter";
const Footer = () => {
  return (
    <>
      <footer className="bg-[var(--foreground)] mx-4 max-sm:mx-2 -mt-32 mb-2 rounded-[50px] text-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Section */}
            <div className="space-y-8">
              {/* Main Heading */}
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Ready to Transform
                <br />
                Business
              </h2>

              {/* Email Input */}
              {/* <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-[var(--turq)] hover:bg-teal-600 text-white rounded-lg font-medium transition-colors duration-200 whitespace-nowrap">
                Contact us
              </button>
            </div> */}
              <Newsletter />
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Navigation Links */}
              <div>
                <nav className="flex flex-col space-y-4">
                  <a
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </a>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Services
                  </a>
                  <a
                    href="/pricing"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Pricing
                  </a>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </a>
                  <a
                    href="/privacy-policy"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/terms-conditions"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Terms & Conditions
                  </a>
                </nav>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Us */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>Tel : +1 (703) 831-5550</p>
                    <p>Fax : +1 (703) 831-5551</p>
                    <p>sales@clientboost360.com</p>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Location</h3>
                  <div className="text-gray-300">
                    <p>8200 Greensboro Dr STE 900,</p>
                    <p>Mclean, VA 22102</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="-mb-10 text-center text-gray-500 mt-12">
          © 2025 ClientBoost360 — A brand of Synergy Stream LLC
        </p>
      </footer>
    </>
  );
};

export default Footer;
