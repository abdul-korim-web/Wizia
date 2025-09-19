import React from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";


const Pricing = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "$29/mo",
      features: [
        "Up to 500 contacts",
        "Email Automation",
        "Basic Reporting",
      ],
    },
    {
      title: "Pro Plan",
      price: "$79/mo",
      features: [
        "Up to 2000 contacts",
        "Advanced Automation",
        "Custom Reports",
        "Priority Support",
      ],
    },
    {
      title: "Enterprise Plan",
      price: "Custom Pricing",
      features: [
        "Unlimited contacts",
        "Full Automation Suite",
        "Dedicated Account Manager",
        "Custom Integrations",
      ],
    },
  ];
  const ChoosePlanbtn = ()=>{
    alert(`This is a demo project So you can not Buy any Plan`)
    window.open("https://github.com/abdul-korim-web/abdul-korim-web")
  }

  return (
    <section className="px-[24px] py-[60px] md:px-[120px] md:py-[100px] bg-[#002228]">
      <div className="text-center mb-[60px]">
        <motion.h2
          className="text-[#0FF1F6] text-[20px] md:text-[24px] font-semibold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          Pricing Plans
        </motion.h2>
        <motion.p
          className="text-gray-200 text-[18px] md:text-[20px] mt-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Choose a plan that fits your business needs
        </motion.p>
      </div>

      <div className="flex flex-col space-y-[24px] md:flex-row md:space-x-[24px] md:space-y-0">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-[#183A40] rounded-[24px] p-[24px] flex-1 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-[#0FF1F6] text-[24px] md:text-[28px] font-semibold mb-2">
              {plan.title}
            </h3>
            <p className="text-white text-[28px] md:text-[32px] font-bold mb-4">
              {plan.price}
            </p>
            <ul className="flex flex-col space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-200 text-[16px] md:text-[18px]">
                  • {feature}
                </li>
              ))}
            </ul>
            <Button
              variant="contained" onClick={ChoosePlanbtn}
              sx={{
                background: "#0FF1F6",
                color: "#002228",
                padding: "12px 24px",
                borderRadius: "100px",
                fontWeight: 500,
              }}
            >
              Choose Plan
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
