import React from "react";

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
    <div className="min-h-screen bg-black text-white py-[-120px] md:py-0">
      <div className="max-w-[84vw] mx-auto">
        <div className="text-start mb-16">
          <h2 className="text-[50px] font-bold mb-4 text-white">Skills</h2>
          <p className="text-[#a6a4a4] text-[15px]">
            I'm a full-stack dev skilled in crafting sleek UIs with React and
            powering them with robust Django backends. From APIs to real-time
            apps, I build responsive, scalable, and performance-driven web
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-15">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-[#1a1a1a] rounded-2xl p-6 hover:bg-[#2a2a2a] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-[#333] hover:border-[#444] shadow-lg hover:shadow-xl"
            >
              
              <div className="relative z-10">
                <div className="mb-4 flex justify-center">
                  <div className="bg-[#2a2a2a] rounded-xl p-3 group-hover:bg-[#3a3a3a] transition-all duration-300">
                    <img 
                      className="h-12 w-12 rounded-lg object-contain" 
                      src={skill.icon} 
                      alt={skill.name}
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {skill.description}
                  </p>
                </div>

                {/* Subtle bottom accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white/20 group-hover:w-full transition-all duration-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;