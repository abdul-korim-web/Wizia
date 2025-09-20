import React, { useState } from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const Hero = () => {
  const [loadingSingUpBtn,setloadingSingUpBtn] = useState(false)
  let native = useNavigate()
  const SingUpBtn = ()=>{
    setloadingSingUpBtn(true)
    setTimeout(() => {
      setloadingSingUpBtn(false)
      native(`/singup`)

      
    }, 2000);
  }
  return (
    <section className="herosection py-20 px-5 bg-[url('/image/bg.png')] bg-no-repeat bg-cover md:w-full md:py-50 md:px-10 md:flex">
      <motion.div
        className="flex flex-col space-y-[8px] md:w-1/2 md:flex md:flex-col w-full items-center md:items-start md:px-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h2
          className="text-[#0FF1F6] text-[16px] md:text-[24px]"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          AI SDRs (aiDRs)
        </motion.h2>

        <motion.h2
          className="italic text-[40px] md:text-[64px] font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          More leads, <br /> less people.
        </motion.h2>

        <motion.p
          className="text-[18px] text-gray-200 md:text-[20px] ml-5 md:w-[80%] md:ml-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Train an aiDR on your ICP and messaging matrix. Activate it on a
          patch. It will send personalized sequences to every target contact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button
            variant="contained"
            onClick={SingUpBtn}
            sx={{
              background: "#0FF1F6",
              color: "#002228",
              padding: "16px 18px",
              marginTop: "12px",
              borderRadius: "100px",
            }}
          >
            Sign Up for the Beta{" "}
            {loadingSingUpBtn?(
              <><ScaleLoader height={20} /></>
            ):(
              <><i className="fa-solid fa-arrow-right pl-2 rotate-[-20deg]"></i></>
            )}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
