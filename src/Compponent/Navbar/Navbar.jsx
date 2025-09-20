import React, { useState } from "react";
import Button from "@mui/material/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import "./Navbar.css"

const Navbar = () => {
  const navitems = [
    { item: "About Us", path: "/about" },
    { item: "Pricing", path: "/pricing" },
    { item: "Customers", path: "/customers" },
    { item: "Solutions", path: "/solutions" },
  ];
  const [baropen, setbaropen] = useState(false);
  let native = useNavigate();

  const openphonemenu = () => {
    setbaropen(!baropen);
  };

  // Variants for PC menu items
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 120 },
    }),
  };

    // BookADemoBtn 
    const [loadingBookADemoBtn,setloadingBookADemoBtn] = useState(false)
    let BookADemoBtn = ()=>{
      setloadingBookADemoBtn(true)
      setTimeout(() => {
        window.open(`https://github.com/abdul-korim-web/abdul-korim-web`)
        setloadingBookADemoBtn(false)
        setbaropen(!baropen)

      }, 2000);
    }

  return (
    <>
      <motion.nav
        className="w-full flex items-center px-10 py-3 justify-between text-white md:py-5 z-50 bg-[#183A40]"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }} 
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <Link to={`/`}>
            <img
              className="w-[63px] h-[14px]"
              src="/image/Logo.png"
              alt="wizia logo"
            />
          </Link>
        </motion.div>

        {/* Phone Hamburger */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.button
            onClick={openphonemenu}
            className="text-[22px]"
            whileTap={{ scale: 0.8, rotate: 90 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <i
              className={
                baropen ? "fa-solid fa-xmark" : "fa-solid fa-bars-staggered"
              }
            ></i>
          </motion.button>
        </motion.div>

        {/* PC Menu */}
        <div className="pcmenu hidden md:flex md:flex-col">
          <ul className="flex space-x-6 text-[16px] text-gray-200">
            {navitems.map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }} // repeated animation
                whileHover={{ scale: 1.1, color: "#0FF1F6", y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink to={item.path}>{item.item}</NavLink>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* PC Buttons */}
        <motion.div
          className="pc-button hidden md:flex md:space-x-3 md:items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false }} // repeated animation
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={BookADemoBtn}
              variant="contained"
              sx={{
                padding: "5px 16px",
                borderRadius: "100px",
                background: "#0FF1F6",
                color: "#002228",
                fontFamily: "Work Sans",
                fontWeight: "500",
                fontSize: "14px",
                boxShadow: "0px 4px 12px rgba(0, 255, 246, 0.4)",
              }}
            >
              {loadingBookADemoBtn? (
               <>
                <BeatLoader />
                </>
              ):(
                <>
                Book a Demo
                </>
              )}
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outlined"
              onClick={() => {
                native(`/contact`);
              }}
              sx={{
                padding: "5px 16px",
                borderRadius: "100px",
                color: "#FFFFFF",
                fontFamily: "Work Sans",
                fontWeight: "500",
                fontSize: "14px",
                border: "1px solid #FFFFFF",
              }}
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* Phone Menu */}
      <AnimatePresence>
        {baropen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden md:hidden bg-black/80 text-white py-5"
          >
            <ul className="flex flex-col space-y-3 font-semibold py-4 px-10">
              {navitems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10, color: "#0FF1F6" }}
                  transition={{ type: "spring", stiffness: 200 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <NavLink to={item.path} onClick={()=>{setbaropen(!baropen)}}>{item.item}</NavLink>
                </motion.li>
              ))}

              {/* Phone Buttons */}
              <motion.div
                className="flex flex-col mt-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Button 
                  onClick={BookADemoBtn}
                  variant="contained"
                  sx={{
                    borderRadius: "100px",
                    background: "#0FF1F6",
                    color: "#002228",
                    fontWeight: "500",
                    fontSize: "14px",
                    marginBottom: "10px",
                  }}
                >
                  {loadingBookADemoBtn?(
                    <>
                     <BeatLoader />
                     </>
                  ):(
                    <>Book a Demo</>
                  )}
                </Button>
                <Button
                  onClick={() => {
                    native(`/contact`);
                    setbaropen(false)
                  }}
                  variant="outlined"
                  sx={{
                    borderRadius: "100px",
                    color: "#FFFFFF",
                    fontWeight: "500",
                    fontSize: "14px",
                    border: "1px solid #FFFFFF",
                  }}
                >
                  Contact Us
                </Button>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
