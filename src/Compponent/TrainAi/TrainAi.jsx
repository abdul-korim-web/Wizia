import React from "react";
import { motion } from "framer-motion";

const TrainAi = () => {
  const TrainaiFeature = [
    {
      icon: `image/TrainAiFeatureicon.png`,
      text: `Quick to ramp`,
    },
    {
      icon: `image/TrainAiFeatureicon.png`,
      text: `Easy to optimize`,
    },
    {
      icon: `image/TrainAiFeatureicon.png`,
      text: `Quick to scale up`,
    },
    {
      icon: `image/TrainAiFeatureicon.png`,
      text: `Works with all your existing tools`,
    },
  ];

  return (
    <>
      <section className="TrainAi px-[24px] py-[40px] md:px-[48px]">
        <motion.div
          className="bg-[url('image/TrainAIphonebg.png')] md:bg-[url('image/TrainAipcbg.png')] bg-no-repeat bg-cover py-[50px] px-[24px] rounded-[24px] flex flex-col space-y-[20px] md:flex md:py-[100px] md:items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {/* Heading */}
          <motion.h2
            className="font-semibold text-[28px] w-[90%] md:w-[100%] md:text-[40px] md:text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: false }}
          >
            Train your aiDR on your...
          </motion.h2>

          <motion.h2
            className="text-[#0FF1F6] text-[28px] italic md:text-[40px]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: false }}
          >
            prefered email st|
          </motion.h2>

          <motion.p
            className="text-[18px] text-gray-200 md:text-[24px] md:w-[40%]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: false }}
          >
            You’re in control. Train your aiDR on elements of your Marketing
            strategy.
          </motion.p>

          {/* Features */}
          <motion.div
            className="flex flex-col space-y-[8px] flex-wrap md:flex-row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: false }}
          >
            {TrainaiFeature.map((item, index) => (
              <motion.div
                key={index}
                className="flex space-x-[10px] items-center md:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: false }}
              >
                <img
                  className="w-[16px] h-[16px]"
                  src={item.icon}
                  alt={item.icon}
                />
                <h2 className="text-[#14BCB2] font-medium text-[16px]">
                  {item.text}
                </h2>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default TrainAi;
