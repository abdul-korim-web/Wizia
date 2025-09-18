import { motion } from "framer-motion";
import React from "react";

const Allocate = () => {
  const Improvement = [
    {
      persent: `32%`,
      heading: `Improvement in Open Rates`,
    },
    {
      persent: `75%`,
      heading: `Improvement in Ramp Time`,
    },
    {
      persent: `35%`,
      heading: `Improvement in Meetings Booked`,
    },
  ];

  return (
    <section className="px-[24px] py-[60px] md:p-[48px]">
      <div className='bg-[url("image/AllocatePhonebg.png")] md:bg-[url("image/Allocatepcbg.png")] py-[32px] px-[24px] flex flex-col space-y-[32px] bg-cover md:px-[120px] md:py-[90px]'>
        
        {/* Heading Section */}
        <motion.div
          className="flex flex-col space-y-[24px] md:space-y-[20px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // বারবার animation
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-white font-semibold text-[28px] md:text-[32px] md:w-[50%]">
            Allocate effort where your reps make an inpact.
          </h2>
          <h2 className="text-[#0FF1F6] text-[24px] italic font-medium md:text-[32px]">
            Let us handle the rest.
          </h2>
          <p className="text-gray-200 text-[18px] md:text-[20px] md:w-[55%]">
            Keep your reps “in the air” -- out in the field and on the phone
            where they can build relationships.
          </p>
        </motion.div>

        {/* Improvement Items */}
        <div className="flex flex-col space-y-[32px] md:space-x-[20px] md:flex-row flex-wrap">
          {Improvement.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col space-y-[10px] cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: false }} // বারবার animation
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h2 className="text-[#0FF1F6] text-[32px] font-bold md:text-[40px]">
                {item.persent}
              </h2>
              <h2 className="text-[#E9EEF1] text-[18px] font-medium md:text-[20px] md:w-[60%]">
                {item.heading}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Allocate;
