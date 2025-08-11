import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

function Home() {
  const [age, setAge] = useState(0);
  useEffect(() => {
    const Age = () => {
      setAge(new Date().getFullYear() - 2008);
    };
    Age();
  }, []);
  return (
    <div className="text-white">
      <div className="min-h-screen h-[100vh] flex flex-col items-center justify-center px-4 sm:px-6 relative pt-2">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase font-bold text-sm sm:text-base tracking-widest text-center"
        >
          from Nepal
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col text-center w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[75vw] mt-6"
        >
          <div className="text-[44px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-bold leading-tight tracking-wide flex flex-wrap justify-center gap-2">
            <span className="text-black dark:text-white">Bringing</span>
            <span className="text-[#3b82f5] dark:text-[#3b82f5]">UI</span>
            <span className="text-white dark:text-white">&</span>
            <span className="text-[#3b82f5] dark:text-[#3b82f5]">Backend</span>
          </div>
          <span className="block mt-4 text-[40px] sm:text-[52px] md:text-[64px] font-bold tracking-wide">
            Together
          </span>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-6 pb-10 text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl mx-auto"
          >
            I'm Rachit Tiwari, a {age}-year-old full-stack dev crafting slick,
            modern, and performant web apps 🚀
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-7 sm:gap-8"
        >
          <a href="#work">
            <button
              className="relative inline-flex gap-3 h-14 sm:h-12 items-center justify-center 
      rounded-md border border-dark-700 
      bg-[linear-gradient(110deg,#1A1A1A,45%,#262626,55%,#1A1A1A)] 
      hover:bg-[linear-gradient(110deg,#262626,45%,#404040,55%,#262626)] 
      bg-[length:200%_100%] px-6 sm:px-5 
      font-medium text-base sm:text-sm text-slate-200 
      transition-all duration-200 focus:outline-none 
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

          <a href="/Rachit-Tiwari-cv.pdf" download="rachitTiwariCv.pdf">
  <div class="flex items-center gap-2 cursor-pointer text-base sm:text-lg text-blue-500 font-semibold">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-2xl sm:text-3xl">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
    Download CV
  </div>
</a>
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
