import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

const Embrace = () => {
  return (
    <>
      <section>
        <motion.div
          className="px-[24px] py-[80px] flex flex-col justify-center items-center space-y-[23px] md:py-[96px] md:px-[120px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // বারবার viewport এ এলে animate হবে
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-[#0FF1F6] text-[16px] md:text-[20px]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            GET STARTED
          </motion.h2>

          <motion.h2
            className="text-[36px] font-bold text-center w-[75%] md:text-[36px] italic"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Embrace the new era of outbound.
          </motion.h2>

          <motion.p
            className="text-gray-200 text-[18px] text-center md:text-[20px] md:w-[50%]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Wizia lets you train, activate, and optimize aiDRs. Take your
            outbound to new levels of performance and efficiency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              sx={{
                background: "#0FF1F6",
                color: "#002228",
                padding: "12px 40px",
                marginTop: "12px",
                borderRadius: "100px",
              }}
            >
              Sign Up for the Beta{" "}
              <i className="fa-solid fa-arrow-right pl-2 rotate-[-20deg]"></i>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Embrace;
