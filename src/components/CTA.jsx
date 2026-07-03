import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const CTA = () => {
  return (
    <section 
      id="contact" 
      className="bg-[#15D08A] py-16 lg-tablet:py-24 px-4 lg-tablet:px-8 text-center border-t-[4px] border-b-[4px] border-black"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 lg-tablet:gap-10">
        
        {/* Call to Action Text */}
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white text-xl lg-tablet:text-3xl lg-laptop:text-4xl font-extrabold tracking-tight leading-relaxed max-w-2xl"
        >
          If You have any Query or Project ideas feel free to
        </motion.h2>

        {/* Large Bouncing Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Button
            variant="secondary"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dineshnandipati@gmail.com"
            isBouncing={true}
            className="text-lg lg-tablet:text-2xl lg-laptop:text-3xl px-6 py-3.5 lg-tablet:px-10 lg-tablet:py-5 border-[4px] border-black shadow-[6px_6px_0px_#000] font-black"
          >
            Contact me
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
