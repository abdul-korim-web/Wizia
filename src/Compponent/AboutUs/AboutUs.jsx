import React from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";

const AboutUs = () => {
  const team = [
    {
      img: "/image/aboutusPersion1Image.jpg",
      name: "Abdul Korim",
      role: "Web Developer",
    },
    {
      img: "/image/aboutusPersion1Image.jpg",
      name: "Abdul Korim",
      role: "React Developer",
    },
    {
      img: "/image/aboutusPersion2Image.jpg",
      name: "Yousuf Hosain",
      role: "Graphic designer",
    },
  ];

  return (
    <section className="bg-[#002228] text-white">
      {/* Hero */}
      <div className="px-[24px] py-[80px] flex flex-col items-center text-center md:px-[120px]">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#0FF1F6] text-[20px] md:text-[24px]"
        >
          ABOUT US
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[36px] font-bold md:text-[48px] italic mt-4"
        >
          Who We Are
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-300 text-[18px] md:text-[20px] mt-4 md:w-[60%]"
        >
          We are a passionate team dedicated to building AI-driven tools that
          empower businesses to achieve more with less effort.
        </motion.p>
      </div>

      {/* Mission & Vision */}
      <div className="px-[24px] py-[60px] md:px-[120px] flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-[#07333A] p-6 rounded-[16px]"
        >
          <h2 className="text-[#0FF1F6] text-[24px] font-semibold mb-3">
            Our Mission
          </h2>
          <p className="text-gray-300 text-[18px]">
            To revolutionize outbound strategies with AI-powered solutions that
            save time, scale effortlessly, and deliver results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-[#07333A] p-6 rounded-[16px]"
        >
          <h2 className="text-[#0FF1F6] text-[24px] font-semibold mb-3">
            Our Vision
          </h2>
          <p className="text-gray-300 text-[18px]">
            To become the leading AI partner for businesses worldwide, helping
            them grow smarter and faster.
          </p>
        </motion.div>
      </div>

      {/* Team */}
      <div className="px-[24px] py-[60px] md:px-[120px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[28px] font-semibold md:text-[36px]"
        >
          Meet Our Team
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-[#07333A] p-6 rounded-[16px] flex flex-col items-center space-y-4"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-[100px] h-[100px] rounded-full object-cover"
              />
              <h3 className="text-[#0FF1F6] text-[20px] font-semibold">
                {member.name}
              </h3>
              <p className="text-gray-300 text-[16px]">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-[24px] py-[80px] flex flex-col items-center text-center md:px-[120px] bg-[#07333A]">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[28px] font-bold md:text-[36px]"
        >
          Want to work with us?
        </motion.h2>
        <Button
          variant="contained"
          sx={{
            background: "#0FF1F6",
            color: "#002228",
            padding: "12px 40px",
            marginTop: "20px",
            borderRadius: "100px",
            fontSize: "16px",
          }}
        >
          <a target="_blanck" href="https://github.com/abdul-korim-web/abdul-korim-web">Join Us</a> <i className="fa-solid fa-arrow-right pl-2"></i>
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;
