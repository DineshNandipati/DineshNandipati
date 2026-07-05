import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import join from '../assets/join.jpeg';

const CTA = () => {
  return (
    <section 
      id="contact" 
      className="bg-[#F5DF3E] py-10 lg-tablet:py-1 px-4 lg-tablet:px-8 text-center border-t-[4px] border-b-[4px] border-black"
    >
      <div className="max-w-4xl mx-auto flex flex-col lg-tablet:flex-row items-center justify-center gap-8 lg-tablet:gap-10">
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=dineshnandipati@gmail.com'>
        <img src={join} alt='Join US' width={200} height={200} />
        </a>

        {/* Large Bouncing Contact Button */}
        {/* <motion.div
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
        </motion.div> */}

      </div>
    </section>
  );
};

export default CTA;
