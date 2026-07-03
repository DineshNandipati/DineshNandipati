import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#services' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 90; // Adjust for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
      scrolled ? 'bg-[#F1D65C]/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      {/* Black Rounded Navbar Container */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 15 }}
        className="max-w-7xl mx-auto bg-black text-white rounded-full border-[3px] border-black px-6 py-3 flex items-center justify-between shadow-neo"
      >
        {/* Yellow Circular Badge Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-[#F1D65C] text-black border-[2.5px] border-black rounded-full font-black text-xl hover:rotate-12 transition-transform duration-200 cursor-pointer select-none"
        >
          D
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg-laptop:flex items-center gap-8 font-semibold text-sm md:text-base">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative py-1 hover:text-[#F1D65C] transition-colors duration-150 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F1D65C] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg-laptop:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-[#F1D65C] focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg-laptop:hidden mt-2 mx-auto max-w-sm bg-black text-white rounded-2xl border-[3px] border-black p-6 shadow-neo-lg"
          >
            <div className="flex flex-col gap-4 font-semibold text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="py-2 hover:text-[#F1D65C] border-b border-white/10 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
