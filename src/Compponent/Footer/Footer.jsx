import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
        className=" bg-[#07292F] py-[40px] px-[24px] flex flex-col  justify-center items-center space-y-[30px] md:flex-row md:flex-wrap md:py-[30px] md:px-[120px] md:justify-between md:items-center"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center md:pt-[10px]"
        >
          <img
            className="w-[72px] h-[16px] md:h-full"
            src="image/FooterLogo.png"
            alt="FooterLogo.png"
          />
        </motion.div>

        <motion.h2
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="text-[#96ACAF] text-[16px]"
        >
          Copyright © 2023 Wizia. All rights reserved.
        </motion.h2>
      </motion.footer>
    </>
  );
};

export default Footer;
