import React from "react";
import { motion } from "framer-motion";

function Skill() {
  const skills = [
    {
      name: "JavaScript",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      description: "Modern ES6+ programming",
    },
    { name: "React", icon: "/react.png", description: "Frontend development" },
    { name: "Node.js", icon: "/node.png", description: "Backend server development" },
    { name: "Tailwind", icon: "/tailwind.png", description: "Styling & animations" },
    { name: "MongoDB", icon: "/mongo.png", description: "NoSQL database" },
    { name: "Git", icon: "/git.png", description: "Version control" },
    { name: "Django", icon: "/django.png", description: "Backend server development" },
    { name: "Postman", icon: "/postman.png", description: "Api Testing" },
    { name: "REST", icon: "/Rest.webp", description: "API query language" },
    { name: "PostgreSql", icon: "/postgresql.png", description: "SQL database" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen bg-black text-white py-0 md:py-29"
    >
      <div className="max-w-[84vw] mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-start mb-16"
        >
          <h2 className="text-[50px] font-bold mb-4 text-white">Skills</h2>
          <p className="text-[#a6a4a4] text-[15px]">
            I'm a full-stack dev skilled in crafting sleek UIs with React and
            powering them with robust Django backends. From APIs to real-time
            apps, I build responsive, scalable, and performance-driven web
            experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1, // staggered reveal
              }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-lg p-2.5 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-4"
            >
              <div>
                <img className="bg-white h-13 w-13 rounded-md" src={skill.icon} alt={skill.name} />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-white mb-1">
                  {skill.name}
                </h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
