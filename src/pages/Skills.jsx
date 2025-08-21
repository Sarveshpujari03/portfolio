import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    items: [
      { name: "C", icon: `${import.meta.env.BASE_URL}icons/C.png` },
      { name: "C++", icon: `${import.meta.env.BASE_URL}icons/Cpp.png` },
      { name: "Java", icon: `${import.meta.env.BASE_URL}icons/Java.png` },
      { name: "JavaScript", icon: `${import.meta.env.BASE_URL}icons/JS.png` },
      { name: "Python", icon: `${import.meta.env.BASE_URL}icons/Python.png` },
    ],
  },
  {
    category: "Core & Advanced Java",
    items: [
      { name: "OOP", icon: `${import.meta.env.BASE_URL}icons/OOP.png` },
      { name: "JDBC", icon: `${import.meta.env.BASE_URL}icons/JDBC.jpg` },
      { name: "Servlets", icon: `${import.meta.env.BASE_URL}icons/Servlet.jpg` },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: `${import.meta.env.BASE_URL}icons/HTML.png` },
      { name: "CSS", icon: `${import.meta.env.BASE_URL}icons/CSS.png` },
      { name: "JavaScript", icon: `${import.meta.env.BASE_URL}icons/JS.png` },
      { name: "Bootstrap", icon: `${import.meta.env.BASE_URL}icons/Bootstrap.png` },
      { name: "Tailwind", icon: `${import.meta.env.BASE_URL}icons/Tailwind.png` },
      { name: "React.js", icon: `${import.meta.env.BASE_URL}icons/React.png` },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", icon: `${import.meta.env.BASE_URL}icons/Springboot.png` },
      { name: "REST API", icon: `${import.meta.env.BASE_URL}icons/Rest.png` },
      { name: "Hibernate", icon: `${import.meta.env.BASE_URL}icons/Hibernate.png` },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "SQL", icon: `${import.meta.env.BASE_URL}icons/SQL.png` },
      { name: "MongoDB", icon: `${import.meta.env.BASE_URL}icons/mongodb.png` },
    ],
  },
  {
    category: "Tools & Version Control",
    items: [
      { name: "GitHub", icon: `${import.meta.env.BASE_URL}icons/github.png` },
      { name: "VS Code", icon: `${import.meta.env.BASE_URL}icons/vscode.png` },
      { name: "Eclipse", icon: `${import.meta.env.BASE_URL}icons/Eclipse.png` },
      { name: "IntelliJ", icon: `${import.meta.env.BASE_URL}icons/Intelij.jpg` },
      { name: "Postman", icon: `${import.meta.env.BASE_URL}icons/postman.png` },
    ],
  },
  {
    category: "Other Skills",
    items: [
      { name: "Agile" },
      { name: "Scrum" },
      { name: "SDLC" },
      { name: "OOP" },
      { name: "DSA" },
    ],
  },
];


const Skills = ({ id }) => {
  return (
    <section
      id={id}
      className="w-full bg-gradient-to-b from-gray-950 to-black text-white py-20 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,165,0,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-orange-400 mb-16"
        >
          Skills
        </motion.h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillsData.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-orange-500/20 transition"
            >
              {/* Section Title */}
              <h2 className="text-2xl font-semibold text-orange-300 mb-6">
                {section.category}
              </h2>

              {/* Icons / Labels */}
              <div className="flex flex-wrap gap-6">
                {section.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    {item.icon ? (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="h-14 w-14 object-contain bg-white/10 rounded-lg p-2 shadow-md group-hover:shadow-orange-400/40 transition"
                      />
                    ) : (
                      <span className="px-4 py-2 rounded-lg bg-gray-800 text-sm shadow-md group-hover:bg-orange-500/20 transition">
                        {item.name}
                      </span>
                    )}
                    <span className="mt-2 text-sm text-gray-300 group-hover:text-orange-400 transition">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
