import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Slider = () => {
  const sliderData = [
    {
      text: "Success is built on small daily efforts, repeated consistently over time.",
      role: "Web Developer"
    },
    {
      text: "Challenges are not roadblocks; they are opportunities to grow stronger and wiser.",
      role: "React Developer"
    },
    {
      text: "Believe in yourself even when no one else does, and keep moving forward.",
      role: "JavaScript Developer"
    }
  ];

  const [sliderindex, setSliderIndex] = useState(0);

  const nextData = () => {
    setSliderIndex((prev) => (prev + 1) % sliderData.length);
  };

  const prevData = () => {
    setSliderIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextData();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section className='flex px-[10px] py-[30px] md:justify-around md:items-center'>
      
      {/* Left button */}
      <div className='hidden md:flex md:flex-col'>
        <button 
          onClick={prevData} 
          className='bg-[#1E3E43] p-3 rounded-[8px] hover:bg-[#0FF1F6] hover:text-[#002228] transition-colors duration-300'
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>

      {/* Text area */}
      <div className='flex flex-col justify-center items-center space-y-[44px]'>
        
        {/* Quote Icon */}
        <motion.div
          className='w-[56px] h-[56px] bg-[#183A40] flex justify-center items-center rounded-full md:w-[74px] md:h-[74px]'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img className='w-[27px] h-[27px] md:w-[36px] md:h-[28px]' src="image/qutetion.png" alt="qutetion.png" />
        </motion.div>

        {/* Animated Slider Text */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={sliderindex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className='text-center md:w-[70%]'
          >
            <h2 className='text-[24px] md:text-[32px]'>{sliderData[sliderindex].text}</h2>
          </motion.div>
        </AnimatePresence>

        {/* Name & Role */}
        <motion.div
          className='text-center flex flex-col space-y-2'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className='text-[#0FF1F6] font-semibold text-[25px] md:text-[30px]'>Abdul Korim</h2>
          <h2 className='text-[16px] text-[#96ACAF] font-semibold md:text-[20px]'>{sliderData[sliderindex].role}</h2>
        </motion.div>

        {/* Dots */}
        <div className='flex space-x-2'>
          {sliderData.map((_, index) => (
            <motion.span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer`}
              style={{ backgroundColor: index === sliderindex ? "#0FF1F6" : "#394648" }}
              whileHover={{ scale: 1.3 }}
              onClick={() => setSliderIndex(index)}
            ></motion.span>
          ))}
        </div>

        {/* Phone buttons */}
        <div className='w-full flex justify-around md:hidden'>
          <button onClick={prevData} className='bg-[#1E3E43] p-2 rounded-[8px] hover:bg-[#0FF1F6] hover:text-[#002228] transition-colors duration-300'>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button onClick={nextData} className='bg-[#1E3E43] p-2 rounded-[8px] hover:bg-[#0FF1F6] hover:text-[#002228] transition-colors duration-300'>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

      </div>

      {/* Right button */}
      <div className='hidden md:flex md:flex-col'>
        <button 
          onClick={nextData} 
          className='bg-[#1E3E43] p-3 rounded-[8px] hover:bg-[#0FF1F6] hover:text-[#002228] transition-colors duration-300'
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

    </section>
  );
};

export default Slider;
