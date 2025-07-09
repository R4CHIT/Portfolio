import React from "react";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="text-white">
      <div className="pb-20 mt-10 lg:mt-0 p-4 min-h-screen flex flex-col items-center justify-center relative">

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase font-bold text-xs sm:text-sm tracking-widest text-center"
        >
          from Nepal
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col text-center max-w-[90vw] sm:max-w-[85vw] md:max-w-[70vw] mt-4"
        >
          <div className="text-[34px] sm:text-[40px] md:text-[60px] lg:text-[72px] font-bold leading-tight tracking-wide flex flex-wrap justify-center gap-2">
            <span className="text-black dark:text-white">Bringing</span>
            <span className="text-[#3b82f5] dark:text-[#3b82f5]">UI</span>
            <span className="text-white dark:text-white">&</span>
            <span className="text-[#3b82f5] dark:text-[#3b82f5]">Backend</span>
          </div>
          <span className="block mt-2 sm:mt-0 sm:ml-2 text-[32px] sm:text-[40px] md:text-[60px] lg:text-[72px] font-bold tracking-wide">
            Together
          </span>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-5 pb-8 text-xs sm:text-sm md:text-base text-dark-200 dark:text-stone-200/70 max-w-2xl mx-auto"
          >
            I'm Rachit Tiwari, a 17-year-old full-stack developer who’s all about building dope web experiences.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
        >
          <a href="#work">
            <button
              className="relative inline-flex gap-2.5 h-10 sm:h-12 items-center justify-center 
                rounded-md border border-dark-700 
                bg-[linear-gradient(110deg,#1A1A1A,45%,#262626,55%,#1A1A1A)] 
                hover:bg-[linear-gradient(110deg,#262626,45%,#404040,55%,#262626)] 
                bg-[length:200%_100%] px-5 sm:px-6 
                font-medium text-xs sm:text-sm text-slate-200 
                transition-colors focus:outline-none 
                focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              style={{ overflow: "hidden" }}
            >
              See My Work
              <span
                className="absolute top-0 left-[-50%] h-[3px] w-1/2 bg-gradient-to-r from-slate-200 via-white to-slate-200 
                opacity-75 blur-md"
                style={{
                  animation: "slideSilver 2s linear infinite",
                }}
              />
            </button>
          </a>

          <div className="flex items-center gap-2 cursor-pointer text-sm sm:text-base text-blue-500 font-semibold">
            <FiDownload className="text-xl sm:text-2xl" />
            Download CV
          </div>
        </motion.div>

        <style>{`
          @keyframes slideSilver {
            0% { left: -50%; }
            100% { left: 150%; }
          }
        `}</style>
      </div>
    </div>
  );
}

export default Home;
