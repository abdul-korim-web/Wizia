import React from "react";
import { motion } from "framer-motion";

const Customers = () => {
  const customerData = [
    {
      name: "Reyad Hasan",
      testimonial: "Wizia increased our lead conversion rate by 50%!",
      logo: "/image/customer1.png",
    },
    {
      name: "Musfikur Rhman Toufik",
      testimonial: "The AI SDRs saved our team countless hours.",
      logo: "/image/customer2.png",
    },
    {
      name: "SH AK IB ",
      testimonial: "Amazing tool for automating outbound campaigns.",
      logo: "/image/customer3.png",
    },
    {
      name: "RE JO UN ",
      testimonial: "Amazing tool for automating outbound campaigns.",
      logo: "/image/customer4.png",
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
          Our Customers
        </motion.h2>
        <motion.p
          className="text-gray-200 text-[18px] md:text-[20px] mt-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Companies who trust Wizia to boost their outbound efforts
        </motion.p>
      </div>

      {/* Customer Cards */}
      <div className="flex flex-col space-y-[24px] md:flex-row md:space-x-[24px] md:space-y-0">
        {customerData.map((customer, index) => (
          <motion.div
            key={index}
            className="bg-[#183A40] rounded-[24px] p-[24px] flex-1 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={customer.logo}
              alt={customer.name}
              className="w-[80px] object-cover h-[80px] rounded-full object-contain mb-4"
            />
            <p className="text-gray-200 text-[16px] md:text-[18px] mb-4">
              "{customer.testimonial}"
            </p>
            <h3 className="text-[#0FF1F6] text-[20px] md:text-[24px] font-semibold">
              {customer.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Customers;
