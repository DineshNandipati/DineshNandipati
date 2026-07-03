import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";

const SocialIcons = ({ direction = 'vertical', className = '' }) => {
  const socials = [
    { name: 'Instagram', icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/meme_.os/', color: 'hover:text-[#E1306C]' },
    { name: 'Email', icon: <MdOutlineMail size={20} />, url: "https://mail.google.com/mail/?view=cm&fs=1&to=dineshnandipati@gmail.com&su=Project%20Enquiry", color: 'hover:text-[#C5221F]' },
    { name: 'Telegram', icon: <FaTelegramPlane size={20} />, url: 'https://t.me/dineshnandipati', color: 'hover:text-[#1DA1F2]' },
    { name: 'YouTube', icon: <FaYoutube size={20} />, url: 'https://www.youtube.com/@dinesh_lyricals', color: 'hover:text-[#FF0000]' },
  ];

  const listClasses = direction === 'vertical' 
    ? 'flex flex-col gap-4' 
    : 'flex flex-row gap-4 justify-center items-center';

  return (
    <div className={`${listClasses} ${className}`}>
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className={`flex items-center justify-center w-11 h-11 bg-white text-black border-[3px] border-black rounded-full shadow-[2px_2px_0px_#000] hover:shadow-[4px_4px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 transition-shadow duration-150 ${social.color}`}
          whileHover={{ rotate: 12, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
