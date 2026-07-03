import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import SocialIcons from './SocialIcons';
import heroImg from '../assets/pic.png';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-[#F1D65C] pt-28 pb-16 px-4 lg-tablet:px-8 overflow-hidden flex items-center"
    >
      {/* Outer Wrapper to ensure vertical stacking of grid and mobile socials */}
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* Main Grid Container */}
        <div className="w-full grid grid-cols-1 lg-laptop:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg-laptop:col-span-7 flex flex-col justify-center text-left order-2 lg-laptop:order-1"
          >
            <h1 className="text-black leading-tight tracking-tight mb-2">
              <span className="block text-4xl lg-tablet:text-5xl lg-laptop:text-6xl font-bold">Hello,</span>
              <span className="block text-5xl lg-tablet:text-7xl lg-laptop:text-8xl font-black mt-2">I'm Dinesh</span>
            </h1>
            
            <h2 className="text-[#333333] text-lg lg-tablet:text-2xl lg-laptop:text-3xl font-semibold mt-4 mb-8">
              Long and Short format Video Editor
            </h2>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="#contact">
                Hire me
              </Button>
              <Button variant="primary" href="#services">
                Explore Works
              </Button>
            </div>
          </motion.div>

          {/* Right Side Illustration Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg-laptop:col-span-5 flex justify-center items-center relative order-1 lg-laptop:order-2 mb-8 lg-laptop:mb-0"
          >
            {/* Cyan Neo-brutalist Card Container */}
            <div className="relative w-72 h-80 lg-tablet:w-80 lg-tablet:h-[24rem] bg-[#00D9FF] border-[4px] border-black rounded-3xl shadow-[8px_8px_0px_rgba(0,0,0,1)] overflow-hidden flex items-end justify-center group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-all duration-300">
              {/* Cartoon Avatar Image */}
              <img 
                src={heroImg} 
                alt="Dinesh Illustration" 
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Social Icons for Mobile / Tablet (Bottom Centered) */}
        <div className="w-full flex justify-center mt-12 lg-laptop:hidden">
          <SocialIcons direction="horizontal" />
        </div>

      </div>

      {/* Floating Vertical Social Icons (Right Side - Desktop Only) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute right-4 lg-tablet:right-8 top-1/2 -translate-y-1/2 hidden lg-laptop:block z-10"
      >
        <SocialIcons direction="vertical" />
      </motion.div>
    </section>
  );
};

export default Hero;
