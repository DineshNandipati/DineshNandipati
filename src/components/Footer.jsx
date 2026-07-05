import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  return (
    <footer 
      id="footer" 
      className="bg-[#15D08A] text-black pt-16 pb-8 px-4 lg-tablet:px-8 border-t-[4px] border-black flex flex-col items-center gap-10"
    >
      {/* 1. Branding: Circular Logo + Name */}
      <div className="flex items-center gap-4">
        {/* Logo Badge */}
        <div className="flex items-center justify-center w-12 h-12 bg-transparent text-black border-[3px] border-black border-dashed rounded-full font-black text-2xl animate-spin-slow">
          <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center font-black text-lg">
            D
          </div>
        </div>
        {/* Name */}
        <h2 className="text-xl lg-tablet:text-2xl font-black tracking-tight select-none">
          Dinesh Nandipati
        </h2>
      </div>

      {/* 2. Tagline */}
      <p className="max-w-2xl text-center text-base lg-tablet:text-lg lg-laptop:text-xl font-bold leading-relaxed px-4">
        I Make as soon as Possible. You really like my work contact me and let's Work Together.
      </p>

      {/* 3. Social Icons */}
      <div className="my-2">
        <SocialIcons direction="horizontal" />
      </div>

      {/* Divider */}
      <div className="w-full max-w-6xl h-[2px] bg-black/20 my-2" />

      {/* 4. Bottom Footer Metadata */}
      <div className="w-full max-w-6xl flex flex-col lg-tablet:flex-row items-center justify-between gap-6 text-xs lg-tablet:text-sm font-semibold text-[#333333]">
        {/* Left Side: Location */}
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-black" size={16} />
          <span>Hyderabad, India</span>
        </div>

        {/* Center: Copyright */}
        <div className="text-center">
          © 2024, All Rights By Dinesh.
        </div>

        {/* Right Side: Links */}
        {/* <div className="flex flex-wrap justify-center gap-4 lg-tablet:gap-6">
          <a href="#guides" onClick={handleLinkClick} className="hover:underline transition-all">Guides</a>
          <a href="#terms" onClick={handleLinkClick} className="hover:underline transition-all">Terms of Use</a>
          <a href="#privacy" onClick={handleLinkClick} className="hover:underline transition-all">Privacy Policy</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
