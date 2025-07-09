import React from "react";
import { motion } from "framer-motion";

function Aboutus() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-[90vw] md:max-w-[84vw] mx-auto border border-[#262626] flex flex-col gap-5">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10 border-b border-[#262626] p-6 sm:p-10"
        >
          <div className="w-full md:w-[70%] font-medium text-3xl sm:text-4xl md:text-6xl leading-tight">
            Like what you see? Reach out{" "}
            <a
              href="mailto:tiwarirachit50@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b82f5] border-b-4 border-[#3b82f5]"
            >
              via email
            </a>{" "}
            to collaborate!
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative self-start z-10 inline-flex gap-2.5 h-12 sm:h-14 items-center justify-center 
              rounded-md border border-dark-700 
              bg-[linear-gradient(110deg,#1A1A1A,45%,#262626,55%,#1A1A1A)] 
              hover:bg-[linear-gradient(110deg,#262626,45%,#404040,55%,#262626)] 
              bg-[length:200%_100%] px-6 sm:px-8 
              font-medium text-xs sm:text-base md:text-lg text-slate-200 
              transition-colors focus:outline-none 
              focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            style={{ overflow: "hidden" }}
          >
            Schedule Meeting
            <span
              className="absolute top-0 left-[-50%] h-[3px] w-1/2 bg-gradient-to-r from-slate-200 via-white to-slate-200 
              opacity-75 blur-md"
              style={{
                animation: "slideSilver 2s linear infinite",
              }}
            />
            <style>{`
              @keyframes slideSilver {
                0% { left: -50%; }
                100% { left: 150%; }
              }
            `}</style>
          </motion.button>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between border-[#262626] p-6 sm:p-10"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col gap-2"
          >
            <span className="text-[22px] sm:text-[25px] font-semibold font-serif">
              Rachit Tiwari
            </span>
            <span className="text-sm text-[#858585]">
              © {new Date().getFullYear()} | All rights reserved.
            </span>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-20">
            {/* Navigate */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col"
            >
              <span className="text-[18px] sm:text-[20px] font-semibold">Navigate</span>
              <div className="flex flex-col mt-2 space-y-1">
                <a href="#home" className="text-[#858585] hover:text-white transition">Home</a>
                <a href="#about" className="text-[#858585] hover:text-white transition">About</a>
                <a href="#work" className="text-[#858585] hover:text-white transition">Work</a>
                <a href="#contact" className="text-[#858585] hover:text-white transition">Contact</a>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col"
            >
              <span className="text-[18px] sm:text-[20px] font-semibold">Socials</span>
              <div className="flex flex-col mt-2 space-y-1">
                <a href="https://www.linkedin.com/in/rachit-tiwari-8726a1342/" target="blank" className="text-[#858585] hover:text-white transition">LinkedIn</a>
                <a href="https://github.com/R4CHIT" target="blank" className="text-[#858585] hover:text-white transition">GitHub</a>
                <a href="https://www.facebook.com/rachit.tiwari.619206" target="blank" className="text-[#858585] hover:text-white transition">Facebook</a>
                <a href="https://www.instagram.com/mr_______rachit/" target="blank" className="text-[#858585] hover:text-white transition">Instagram</a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Aboutus;
