import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const ServiceCard = ({ number, title, bgImage, work }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -6, shadow: '12px 12px 0px rgba(0,0,0,1)' }}
      className="relative bg-[#A95CFF] border-[4px] border-black rounded-3xl p-8 pt-12 text-center flex flex-col items-center justify-between shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-300 group min-h-[360px]"
      style={{backgroundImage: `url(${bgImage})`, backgroundRepeat:'no-repeat',backgroundPosition:'center', backgroundSize:'cover'}}
    >
      {/* Floating Large name Badge */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[90%] h-10 lg-tablet:h-12 bg-[#15D08A] text-white border-[3px] lg-tablet:border-[4px] border-black rounded-[10px] flex items-center justify-center font-black text-base lg-tablet:text-xl lg-laptop:text-2xl shadow-[3px_3px_0px_#000] select-none group-hover:scale-105 transition-all duration-200 px-2 whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>

      {/* Content */}
      <div className="flex flex-col items-center">
        <h3 className="text-white text-xl lg-tablet:text-2xl font-black mb-4">
          {/* {title} */}
        </h3>
        {/* <p className="text-white text-sm lg-tablet:text-base leading-relaxed mb-6 font-medium max-w-xs">
          {description}
        </p> */}
      </div>

      {/* Button */}
      <Button 
        variant="secondary" 
        href={work}
        className="w-fit"
      >
        See Work
      </Button>
    </motion.div>
  );
};

export default ServiceCard;
