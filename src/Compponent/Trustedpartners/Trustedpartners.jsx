import React from 'react';
import { motion } from 'framer-motion';

const Trustedpartners = () => {
  return (
    <section className="trustedpartners flex flex-col justify-center items-center bg-[#07292F] py-10 space-y-[24px] ">

      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}  // প্রতিবার viewport এ আসলে animation চলবে
        transition={{ duration: 0.6 }}
      >
        <h2 className='text-[#0FF1F6] text-[16px] font-semibold md:text-2xl'>
          our trusted partners
        </h2>
      </motion.div>

      {/* Animated Logos */}
      <div className='grid grid-cols-2 justify-items-center items-center md:grid-cols-5 md:space-x-3 '>
        <motion.img
          className='w-[150px]'
          src="image/BackHub logo.png"
          alt="trusted partners"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          className='w-[130px]'
          src="image/CableLabs logo.png"
          alt="trusted partners"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <motion.img
          className='w-[110px]'
          src="image/DBS logo.png"
          alt="trusted partners"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.img
          className='w-[130px]'
          src="image/EasyEuro logo.png"
          alt="trusted partners"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.img
          className='w-[110px] col-span-2 md:col-span-1'
          src="image/AMD logo.png"
          alt="trusted partners"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </div>
    </section>
  );
}

export default Trustedpartners;
