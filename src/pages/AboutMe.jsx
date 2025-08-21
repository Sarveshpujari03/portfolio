import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const AboutMe = ({ id }) => {
  return (
    <section
      id={id}
      className="w-full min-h-screen flex justify-center items-center px-6 py-16 bg-transparent text-white relative overflow-hidden"
    >
    
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
        className="relative z-10 max-w-5xl w-full bg-gray-900/50 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-14 border border-gray-700/40"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          

          {/* Title */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold font-poppins text-orange-400">
              About Me
            </h2>
            <p className="text-gray-400 mt-2">
              A little about who I am and what drives me 🚀
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 space-y-6 text-gray-300 text-lg leading-relaxed font-inter">
          <p>
            Hi! I’m{" "}
            <span className="text-orange-400 font-semibold">
              Sarvesh Pujari
            </span>
            , a curious mind driven by a desire to understand how things work —
            not just in tech, but in life. My journey into software development
            began with a simple question:{" "}
            <span className="italic text-orange-300">
              "How does this actually work?"
            </span>{" "}
            That question turned into a passion for building things from scratch
            and solving real-world problems through code.
          </p>

          <p>
            As a <span className="text-orange-400">Full-Stack Java Developer</span>, 
            I thrive at the intersection of logic and creativity. The backend —
            powered by Spring Boot — allows me to architect scalable systems,
            while the frontend — built with React — is where I bring those
            systems to life in sleek, intuitive interfaces.  
            <span className="block mt-2 text-orange-300 font-medium">
              The frontend shows how I present myself, the backend reveals how I think.
            </span>
          </p>

          <p>
            Beyond code, I find inspiration in{" "}
            <span className="text-orange-300">photography</span>,{" "}
            <span className="text-orange-300">cinematic videography</span>, and{" "}
            <span className="text-orange-300">travel</span>. Capturing moments
            and exploring new perspectives helps me stay creative, balanced, and
            endlessly curious.
          </p>
        </div>

        {/* Glow Accent Line */}
        <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mt-10 mx-auto md:mx-0"></div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
