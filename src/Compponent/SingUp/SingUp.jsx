import { motion } from "framer-motion";
import { useState } from "react";
import Button from "@mui/material/Button";
import { HashLoader } from "react-spinners";
import SignUpImage from "/image/aboutusPersion1Image.jpg"; // নিজের image path দাও

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [storedData, setStoredData] = useState({});

  // input change handler
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStoredData(formData);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <section className="relative py-16 px-5 md:px-20 bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-95 z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row gap-12 w-full max-w-6xl items-center">
        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={SignUpImage}
            alt="Sign Up"
            className="w-[80%] md:w-[75%] h-auto rounded-2xl object-cover shadow-2xl hover:scale-105 transform transition duration-500"
          />
        </motion.div>

        {/* Form Section */}
        <motion.form
          className="flex-1 flex flex-col space-y-6 p-10 rounded-2xl shadow-2xl bg-gray-800/80 backdrop-blur-md"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Create an Account
          </motion.h2>
          <p className="text-gray-400 mb-4">
            Sign up to get started with our amazing platform 🚀
          </p>

          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="p-4 rounded-lg bg-gray-700/70 border border-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 
                       placeholder-gray-300 text-white"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="p-4 rounded-lg bg-gray-700/70 border border-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 
                       placeholder-gray-300 text-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            className="p-4 rounded-lg bg-gray-700/70 border border-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 
                       placeholder-gray-300 text-white"
            required
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "#0FF1F6",
              color: "#002228",
              padding: "14px 20px",
              borderRadius: "100px",
              fontWeight: "bold",
              fontSize: "16px",
              width: "fit-content",
              margin: "0 auto",
            }}
          >
            {loading ? (
              <>
                <HashLoader size={25} color="#ffffff" /> &nbsp; Please wait...
              </>
            ) : (
              <>Sign Up</>
            )}
          </Button>

          {/* Submitted Data Preview */}
          {submitted && (
            <motion.div
              className="mt-6 text-gray-300 font-mono space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-cyan-400">
                🎉 Your Submitted Info:
              </h3>
              <p>Name: {storedData.name}</p>
              <p>Email: {storedData.email}</p>
              <p>Password: {storedData.password}</p>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default SignUp;
