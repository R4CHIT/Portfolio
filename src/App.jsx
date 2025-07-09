import React from 'react';
import Navbar from './components/nav/Navbar';
import Home from './components/Hero/Home';
import Skill from './components/Skills/Skill';
import Myproject from './components/Projectpage/Myproject';
import Contact from './components/Conatct/Contact'
function App() {
  return (
    <div className="bg-black text-white m-0 p-0 box-border overflow-x-hidden">
      <Navbar />
      {/* Hero Section with Grid Background */}
      <div
        id="home"
        className="w-full min-h-screen "
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      >
        
        <Home />
      </div>

      {/* Skills Section */}
      <div id="about" className="min-h-screen bg-black text-white">
        <Skill />
      </div>

      {/* Projects Section */}
      <div id="work" className="bg-black text-white">
        <Myproject />
      </div>

      {/* Contact / About Us */}
      <div id="contact" className="min-h-screen bg-black text-white">
        <Contact />
      </div>
    </div>
  );
}

export default App;
