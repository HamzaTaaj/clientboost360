"use client";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const router = useRouter();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "https://clientboost360.com/blogs/", external: true },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          className="flex items-center space-x-2 pl-4 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-0 2xl:pl-30 cursor-pointer"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={72}
            height={60}
            className="md:w-[84px] md:h-[120px]"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`relative text-gray-600 hover:text-[#12C4A8] transition-colors duration-300 ${
                pathname === link.path ? "text-[#12C4A8] font-bold" : ""
              }`}
            >
              {link.name}
              {pathname === link.path && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#12C4A8]"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Let’s Talk Button */}
        <div className="hidden md:flex mr-2">
          <Link
            href="/contact"
            className="bg-[#1E1E1E] text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6 text-[#1E1E1E]" />
            ) : (
              <FaBars className="h-6 w-6 text-[#1E1E1E]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Right Side Drawer */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white rounded-l-lg shadow-lg p-6 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-gray-600 hover:text-[#12C4A8] ${
                pathname === link.path ? "text-[#12C4A8] font-bold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
              {pathname === link.path && (
                <div className="h-0.5 w-full bg-[#12C4A8]"></div>
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#1E1E1E] text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 mt-4 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
