import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import ContactImage from "/image/aboutusPersion1Image.jpg";
import { HashLoader } from "react-spinners";

const ContactUs = () => {
  const [loading, setloading] = useState(false);
  const [Submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    message: "",
  });
  const [storefromData, setstorefromData] = useState({});
  let handleChange = (property, value) => {
    setFormData((preData) => ({
      ...preData,
      [property]: value,
    }));
  };
  let handelClick = (e) => {
    e.preventDefault();

    //  loading part
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setstorefromData(formData);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <section className="relative py-20 px-5 md:px-20 bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90 z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row gap-10 w-full max-w-6xl items-center">
        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={ContactImage}
            alt="Contact Us"
            className=" w-[70%] md:w-[70%] h-auto rounded-xl object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Form Section */}
        <motion.form
          className="flex-1 flex flex-col space-y-6 p-10 rounded-xl shadow-2xl bg-gray-800/80 backdrop-blur-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          onSubmit={handelClick}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.Name}
            onChange={(e) => handleChange(`Name`, e.target.value)}
            className="p-4 rounded-lg bg-gray-700/70 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-300 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => handleChange(`email`, e.target.value)}
            className="p-4 rounded-lg bg-gray-700/70 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-300 text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => handleChange(`message`, e.target.value)}
            rows={6}
            className="p-4 rounded-lg bg-gray-700/70 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-300 text-white"
            required
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "#0FF1F6",
              color: "#002228",
              padding: "16px 18px",
              borderRadius: "100px",
              fontWeight: "bold",
              width: "fit-content",
              margin: "0 auto",
            }}
          >
            {loading ? (
              <>
                <HashLoader size={30} margin={3} color="#ffffff" /> Please
                wait...
              </>
            ) : (
              <>Send Message</>
            )}
          </Button>
          {Submitted && (
            <motion.div
              className="mt-2 text-gray-400 italic font-mono"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2>
                Name : <span>{storefromData.Name}</span>
              </h2>
              <h2>
                Email: <span>{storefromData.email}</span>
              </h2>
              <h2>
                Message : <span>{storefromData.message}</span>
              </h2>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
