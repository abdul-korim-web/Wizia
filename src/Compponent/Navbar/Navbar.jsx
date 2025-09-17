import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  let navitems = [`About Us`, `Pricing`, `Customers`, `Solutions`];
  const [baropen, setbaropen] = useState(false);

  let openphonemenu = () => {
    setbaropen(!baropen);
  };

  // Variants for animation
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: 'spring', stiffness: 120 },
    }),
  };

  return (
    <>
      <motion.nav
        className="w-full flex items-center px-10 py-3 justify-between text-white md:py-5 fixed top-0 left-0 z-50 bg-[#183A40]"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            className="w-[63px] h-[14px]"
            src="image/Logo.png"
            alt="wizia logo"
          />
        </motion.div>

        {/* phone hamburger */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={openphonemenu}
            className="text-[22px]"
            whileTap={{ scale: 0.8, rotate: 90 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <i
              className={
                baropen
                  ? 'fa-solid fa-xmark'
                  : 'fa-solid fa-bars-staggered'
              }
            ></i>
          </motion.button>
        </motion.div>

        {/* pc menu */}
        <div className="pcmenu hidden md:flex md:flex-col">
          <ul className="flex space-x-6 text-[16px] text-gray-200">
            {navitems.map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  color: '#0FF1F6',
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="">{item}</a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* pc buttons */}
        <motion.div
          className="pc-button hidden md:flex md:space-x-3 md:items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              sx={{
                padding: '5px 16px',
                borderRadius: '100px',
                background: '#0FF1F6',
                color: '#002228',
                fontFamily: 'Work Sans',
                fontWeight: '500',
                fontSize: '14px',
                boxShadow: '0px 4px 12px rgba(0, 255, 246, 0.4)',
              }}
            >
              Book a Demo
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outlined"
              sx={{
                padding: '5px 16px',
                borderRadius: '100px',
                color: '#FFFFFF',
                fontFamily: 'Work Sans',
                fontWeight: '500',
                fontSize: '14px',
                border: '1px solid #FFFFFF',
              }}
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* phone menu */}
      <AnimatePresence>
        {baropen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden md:hidden bg-black/80 text-white py-5"
          >
            <ul className="flex flex-col space-y-3 font-semibold py-4 px-10">
              {navitems.map((items, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10, color: '#0FF1F6' }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <a href="">{items}</a>
                </motion.li>
              ))}
              {/* Phone buttons */}
              <motion.div
                className="flex flex-col  mt-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: '100px',
                    background: '#0FF1F6',
                    color: '#002228',
                    fontWeight: '500',
                    fontSize: '14px',
                    marginBottom:"10px"
                  }}
                >
                  Book a Demo
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: '100px',
                    color: '#FFFFFF',
                    fontWeight: '500',
                    fontSize: '14px',
                    border: '1px solid #FFFFFF',
                  }}
                >
                  Contact Us
                </Button>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
