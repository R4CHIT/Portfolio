import React from "react";
import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const Myproject = () => {
  const projects = [
    {
      name: "Social Media App",
      image: "/proj2.png",
      skill: ["Rest", "React.js", "Django", "Sqlite3"],
      description:
        "A full-stack social media application built with modern technologies for seamless user experience.",
      github: "https://github.com/R4CHIT/SocialMediaAPP.git",
      live: "https://devconnect1-sable.vercel.app/",
    },
    {
      name: "Message APP",
      image: "/img.png",
      skill: ["React.js", "DJANGO", "REST", "JWT", "Sqlite3"],
      description: "A Message App where user can chat with each other.",
      github: "https://github.com/R4CHIT/ChatMessageAPP.git",
      live: "https://message-rachit.vercel.app/",
    },
    {
      name: "E-commerce web",
      image: "/e-commerce.png",
      skill: ["React.js", "Node.js", "Express.js", "Mongo.db"],
      description:
        "A Food E-com web where user can order food.",
      github: "https://github.com/R4CHIT/E-commerce.git",
      live: "https://mastercheif2.netlify.app/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen bg-black text-white py-24 px-4"
    >
      <div className="max-w-[84vw] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-[40px] md:text-[50px] font-bold text-white">
            My Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 
rounded-md overflow-hidden shadow-md transition-all duration-500 min-h-[600px]"

            >
              
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                              opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none z-10" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-t-md">
<img
  src={project.image}
  alt={project.name}
  className="w-full h-[300px] md:h-[400px] object-cover"
/>


                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* GitHub & Live Buttons */}
                <div
                  className="absolute top-4 right-4 flex gap-2 
                  opacity-100 md:opacity-0 md:group-hover:opacity-100 
                  transition-opacity duration-300 z-20"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/70 text-white rounded-full hover:bg-white hover:text-black transition"
                  >
                    {/* GitHub icon */}
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.371 0 0 5.373 0 12a12 12 0 008.207 11.387c.599.111.793-.261.793-.577v-2.237c-3.338.727-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.238 1.839 1.238 1.07 1.833 2.807 1.303 3.492.996.108-.775.418-1.304.762-1.604-2.665-.305-5.467-1.333-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.45 11.45 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.824 1.101.824 2.221v3.293c0 .319.193.694.801.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/70 text-white rounded-full hover:bg-white hover:text-black transition"
                  >
                    {/* Live icon */}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 relative z-20">
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skill.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-xs text-gray-300 
                        rounded-full border border-gray-600 hover:text-white 
                        transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/R4CHIT"
            target="_blank"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full 
              hover:from-blue-600 hover:to-purple-700 transition-all duration-300 
              shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Myproject;
