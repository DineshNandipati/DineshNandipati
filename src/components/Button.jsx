import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', // 'primary' (black/cyan), 'secondary' (yellow/black), 'outline' (black border only)
  className = '', 
  href,
  download,
  isBouncing = false,
}) => {
  // Base classes for Neo-brutalist style
  const baseClasses = "inline-flex items-center justify-center font-bold px-6 py-3 rounded-full border-[3px] border-black text-sm md:text-base cursor-pointer select-none transition-all duration-200 ease-out outline-none focus:ring-2 focus:ring-black focus:ring-offset-2";
  
  // Custom shadow and color variants
  const variants = {
    primary: "bg-black text-white hover:bg-black/90 shadow-[0px_4px_0px_#00D9FF] hover:shadow-[0px_6px_0px_#00D9FF] active:translate-y-0.5",
    secondary: "bg-[#A259FF] text-black hover:bg-[#ebd04e] shadow-[0px_4px_0px_#000000] hover:shadow-[0px_6px_0px_#000000] active:translate-y-0.5",
    outline: "bg-white text-black hover:bg-gray-100 shadow-[0px_4px_0px_#000000] hover:shadow-[0px_6px_0px_#000000] active:translate-y-0.5"
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${isBouncing ? 'animate-btn-bounce' : ''} ${className}`;

  const buttonContent = (
    <motion.span
      className="flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a 
        href={href} 
        download={download} 
        className={combinedClasses}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={combinedClasses}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
