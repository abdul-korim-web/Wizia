import React from 'react';
import { motion } from 'framer-motion';

const AiDRs = () => {
  const aiItems = [
    {
      image: `image/ph_magic-wand-duotone.png`,
      heading: `You’re in Control`,
      des: `aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.`,
    },
    {
      image: `image/ph_graph-duotone.png`,
      heading: `Infinitely Scalable`,
      des: `Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.`,
    },
    {
      image: `image/ph_arrows-out-cardinal-duotone.png`,
      heading: `Incredibly Flexible`,
      des: `Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.`,
    },
  ];

  return (
    <>
      <section className="bg-[#002228] px-[24px] py-[40px] flex flex-col space-y-[48px] md:flex-row md:p-[120px] md:space-x-[24px]">
        {aiItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col space-y-[8px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
          >
            <motion.img
              className="w-[40px] md:w-[64px]"
              src={item.image}
              alt={item.image}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            />
            <motion.h2
              className="text-white text-[24px] md:text-[28px] font-semibold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.4 }}
            >
              {item.heading}
            </motion.h2>
            <motion.p
              className="text-gray-200 md:w-[95%] md:text-[18px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.5 }}
            >
              {item.des}
            </motion.p>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default AiDRs;
