import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ServiceCard from './ServiceCard';
import pranay from '../assets/pp.png';
import praneeth from '../assets/1ph.jpg';
import mouli from '../assets/1m.jpg';
import movie from '../assets/rukku.jpg';
import real from '../assets/real.jpg';
import seminar from '../assets/seminar.png';
import reels from '../assets/reels.jpeg';

const Services = () => {
  const serviceData = [
    {
      number: 1,
      title: 'Pranay Varma',
      bgImage: pranay,
      work: "https://drive.google.com/drive/folders/1S4Jix7of565OpI4gR3LLbtARNeC1DAmN"
    },
    {
      number: 2,
      title: 'Praneeth Hanumanthu',
      bgImage: praneeth ,
      work: "https://drive.google.com/drive/folders/1_Of-WcSckAOU-vzmiRmB3XJQyDZ72gTB"
    },
    {
      number: 3,
      title: 'Mouli Talks',
      bgImage: mouli ,
      work: "https://drive.google.com/drive/folders/16kcSr3XP1Cn21AzPo5CNS04wHE_oaqCf"
    },
    {
      number: 4,
      title: 'Real Estate',
      bgImage: real,
      work: "https://drive.google.com/drive/folders/1VeSvuO2tOPYzeqf0hogDex8OCGbp5rTw?usp=sharing"
    },
    {
      number: 5,
      title: 'Movie Edits',
      bgImage: movie ,
      work: "https://drive.google.com/drive/folders/1TzKVGu6VB8T1J2p2vUogHUAGygcf53rO?usp=sharing"
    },
    {
      number: 6,
      title: 'Editing Seminar',
      bgImage: seminar ,
      work: "https://drive.google.com/drive/folders/170ujRRcB117_rDUHKCPQegh3XTQwL7BT?usp=sharing"
    },
    {
      number: 7,
      title: 'Reels Editing',
      bgImage: reels ,
      work: "https://drive.google.com/drive/folders/1fKXJKcRduO7vCiuPdmuVF9gsDCnAkMvt?usp=sharing"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const containerRef = useRef(null);
  const isMobile = visibleCards === 1;

  // Dynamically calculate visible cards count based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 992) {
        setVisibleCards(3); // Desktop & Laptop
      } else if (width >= 768) {
        setVisibleCards(2); // Tablet
      } else {
        setVisibleCards(1); // Mobile
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Page-by-page calculations
  const totalPages = Math.ceil(serviceData.length / visibleCards);
  const maxIndex = totalPages - 1;
  
  // Ensure current index is always within safe boundaries if screen size changes
  const safeIndex = Math.min(currentIndex, maxIndex >= 0 ? maxIndex : 0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  };

  // Scroll to active index on mobile view
  useEffect(() => {
    if (isMobile && containerRef.current) {
      const width = containerRef.current.clientWidth;
      const targetScrollLeft = currentIndex * width;
      if (Math.abs(containerRef.current.scrollLeft - targetScrollLeft) > 10) {
        containerRef.current.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex, isMobile]);

  // Handle manual scroll swipe on mobile view
  const handleScroll = (e) => {
    if (!isMobile) return;
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.clientWidth;
    if (width === 0) return;
    const newIndex = Math.round(scrollLeft / width);
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex <= maxIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section 
      id="services" 
      className="bg-[#F47C08] py-20 px-4 lg-tablet:px-8 text-black"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 lg-tablet:mb-20"
        >
          <h2 className="text-4xl lg-tablet:text-5xl lg-laptop:text-6xl font-black mb-6">
            Portfolio
          </h2>
          {/* <p className="max-w-3xl mx-auto text-sm lg-tablet:text-base lg-laptop:text-lg font-semibold leading-relaxed text-black">
            Embark on a journey of digital transformation with services that blend design
            brilliance with cutting-edge development. Let's create experiences that resonate and
            applications that captivate.
          </p> */}
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full mx-auto">
          
          {/* Viewport for hiding overflow / scroll on mobile */}
          <div 
            ref={containerRef}
            onScroll={handleScroll}
            className={`w-full -mx-4 px-4 py-8 ${
              isMobile 
                ? 'overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth' 
                : 'overflow-hidden'
            }`}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: isMobile 
                  ? 'none' 
                  : `translate3d(-${safeIndex * (visibleCards / serviceData.length) * 100}%, 0, 0)`,
                width: `${(serviceData.length / visibleCards) * 100}%` 
              }}
            >
              {serviceData.map((service) => (
                <div 
                  key={service.number} 
                  className={`px-4 ${isMobile ? 'shrink-0 snap-center' : ''}`}
                  style={{ width: `${100 / serviceData.length}%` }}
                >
                  <ServiceCard 
                    number={service.number}
                    title={service.title}
                    bgImage={service.bgImage}
                    work={service.work}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls (Arrows & Dots) */}
          <div className="hidden lg-tablet:flex lg-tablet:flex-row items-center justify-center gap-6 mt-8">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous service"
              className="flex items-center justify-center w-12 h-12 bg-[#F1D65C] text-black border-[3px] border-black rounded-full shadow-[3px_3px_0px_#000] hover:shadow-[5px_5px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[2px_2px_0px_#000] transition-all duration-150 cursor-pointer text-xl font-bold"
            >
              <FiChevronLeft size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2.5">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-3.5 h-3.5 rounded-full border-2 border-black transition-colors duration-200 cursor-pointer ${
                    safeIndex === idx ? 'bg-[#15D08A]' : 'bg-white'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next service"
              className="flex items-center justify-center w-12 h-12 bg-[#F1D65C] text-black border-[3px] border-black rounded-full shadow-[3px_3px_0px_#000] hover:shadow-[5px_5px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[2px_2px_0px_#000] transition-all duration-150 cursor-pointer text-xl font-bold"
            >
              <FiChevronRight size={24} />
            </button>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default Services;
