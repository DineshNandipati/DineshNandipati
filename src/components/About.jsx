import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import aboutImg from '../assets/dp.png';

const About = () => {
  return (
    <section 
      id="about" 
      className="bg-[#F1D65C] py-16 px-4 lg-tablet:px-8"
    >
      {/* Outer wrapper to center the card */}
      <div className="max-w-6xl mx-auto">
        {/* Blue Rounded Container with Black Border and Shadow */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-[#1E6EEB] border-[4px] border-black rounded-[2.5rem] p-6 lg-tablet:p-12 lg-laptop:p-16 shadow-[8px_8px_0px_rgba(0,0,0,1)] grid grid-cols-1 lg-laptop:grid-cols-12 gap-12 items-center text-center lg-laptop:text-left"
        >
          {/* Left Side: Profile Illustration Card */}
          <div className="lg-laptop:col-span-5 flex justify-center">
            <div className="relative w-64 h-72 lg-tablet:w-72 lg-tablet:h-80 bg-[#00D9FF] border-[4px] border-black rounded-3xl shadow-[6px_6px_0px_rgba(0,0,0,1)] overflow-hidden flex items-end justify-center hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <img 
                src={aboutImg} 
                alt="Dinesh Profile" 
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg-laptop:col-span-7 flex flex-col items-center lg-laptop:items-start justify-center">
            <h2 className="text-white text-3xl lg-tablet:text-5xl font-black mb-3">
              Dinesh Nandipati
            </h2>
            
            <div className="text-[#F1D65C] font-bold text-lg lg-tablet:text-xl lg-laptop:text-2xl mb-5 flex flex-col lg-tablet:flex-row lg-tablet:gap-2 justify-center lg-laptop:justify-start items-center lg-laptop:items-start">
              {/* <span>UI/UX Designer</span> */}
              {/* <span className="hidden lg-tablet:inline">|</span> */}
              <span>Long and Short format Video Editor</span>
            </div>

            <p className="text-white text-sm lg-tablet:text-base leading-relaxed font-normal mb-8 max-w-xl">
              Hello! I'm a Video Editor. 
              I edit both short-form and long-form videos using Adobe Premiere Pro, 
              creating engaging reels, shorts, and YouTube content with smooth storytelling, clean cuts,
               and a strong focus on audience retention and professional quality.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg-laptop:justify-start">
              <Button variant="primary" href="#contact">
                Hire me
              </Button>
              <Button variant="primary" href="#about">
                Works
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
