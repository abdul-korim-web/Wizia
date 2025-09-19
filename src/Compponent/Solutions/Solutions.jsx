import React from "react";
import { motion } from "framer-motion";

const Solutions = () => {
  const solutionsData = [
    {
      icon: "https://zd-brightspot.s3.us-east-1.amazonaws.com/wp-content/uploads/2024/02/26091442/Shutterstock_1133982038.jpg",
      title: "Automation",
      description:
        "Automate repetitive outbound tasks to save time and reduce errors.",
    },
    {
      icon: "https://cdn.prod.website-files.com/64c2dbb9c4026648656ec0c3/65981b88a2d67798e3de007d_How_AI_SDRs_Will_Impact_Sales_Development_in_2024.png",
      title: "AI SDRs",
      description:
        "Train AI-driven SDRs to engage leads with personalized sequences.",
    },
    {
      icon: "https://onlinedegrees.sandiego.edu/wp-content/uploads/2022/11/what-is-data-analytics-mads.jpg",
      title: "Analytics",
      description:
        "Track performance metrics and optimize campaigns effectively.",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSru_e1Cb0JRAI1hBTC8DJ04T8p5Dg_0FOCJg&s",
      title: "Integrations",
      description:
        "Connect Wizia with your CRM, email, and other tools seamlessly.",
    },
  ];

  return (
    <section className="px-[24px] py-[60px] md:px-[120px] md:py-[100px] bg-[#002228]">
      {/* Heading */}
      <div className="text-center mb-[60px]">
        <motion.h2
          className="text-[#0FF1F6] text-[20px] md:text-[24px] font-semibold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          Our Solutions
        </motion.h2>
        <motion.p
          className="text-gray-200 text-[18px] md:text-[20px] mt-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Designed to boost your outbound efficiency
        </motion.p>
      </div>

      {/* Solutions Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
        {solutionsData.map((solution, index) => (
          <motion.div
            key={index}
            className="bg-[#183A40] rounded-[24px] p-[24px] flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={solution.icon}
              alt={solution.title}
              className="w-[80px] h-[80px] object-cover rounded-full mb-4"
            />
            <h3 className="text-[#0FF1F6] text-[20px] md:text-[22px] font-semibold mb-2">
              {solution.title}
            </h3>
            <p className="text-gray-200 text-[16px] md:text-[18px]">
              {solution.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
