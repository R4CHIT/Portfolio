import React, { useEffect, useState } from "react";

const ScrollNavbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY) {
        // Scrolling down
        setShowNav(false);
      } else {
        // Scrolling up
        setShowNav(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`flex justify-center fixed top-5 inset-x-0 z-[5000] transition-all duration-300 ${showNav ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div
        className="flex max-w-fit border border-[#4d4d4d] rounded-lg bg-[#1a1a1a]/70 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-8 py-4 items-center justify-center space-x-4 font-sans text-white text-[17px]"
        style={{ borderWidth: '1px' }}
      >
        <a href="#home" className="hover:text-gray-300 cursor-pointer">Home</a>
        <a href="#about" className="hover:text-gray-300 cursor-pointer">About</a>
        <a href="#work" className="hover:text-gray-300 cursor-pointer">Work</a>
        <a href="#contact" className="hover:text-gray-300 cursor-pointer">Contact</a>
      </div>
    </div>
  );
};

export default ScrollNavbar;
