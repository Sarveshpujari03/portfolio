import React from "react";
import { motion } from "framer-motion";
import bharatForgeLogo from "../assets/bharat_forge_ltd_logo.jpg";

const experiences = [
  {
    company: "Bharat Forge Ltd.",
    role: "Software Developer Intern (Full Stack Developer)",
    location: "Pune, India",
    duration: "1 July 2025 – Present",
    logo: bharatForgeLogo, 
  },
  
];

const Experience = ({ id }) => {
  return (
    <div
      id={id}
      className="w-full flex flex-col mb-48 gap-8 p-6 md:p-12 items-center text-white font-poppins"
    >
      <h1 className="z-40 text-3xl md:text-4xl font-semibold mt-6 w-full md:text-start">
        Experience
      </h1>

      <div className="w-full flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 25px rgba(0,0,0,0.4)" }}
            className="w-full md:w-3/4 max-w-3xl bg-gray-900/50 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg p-6 flex items-center gap-6 cursor-pointer transition-transform duration-300"
          >
            {/* Logo */}
            <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-xl bg-white p-2">
              <img
                src={exp.logo}
                alt={exp.company}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <h2 className="text-xl md:text-2xl font-semibold">
                {exp.company}
              </h2>
              <p className="text-sm md:text-base text-gray-300">{exp.role}</p>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mt-2 text-sm text-gray-400">
                <span>{exp.location}</span>
                <span className="hidden md:inline">•</span>
                <span>{exp.duration}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
