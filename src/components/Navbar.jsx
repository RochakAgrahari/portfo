import React from 'react';

const Navbar = () => (
  <nav className="bg-[#0a192f] fixed w-full z-10 border-b border-gray-700">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#64ffda]">Omvrat</h1>
      <div className="space-x-6 text-sm">
        <a href="#home" className="text-gray-300 hover:text-[#64ffda]">Home</a>
        <a href="#projects" className="text-gray-300 hover:text-[#64ffda]">Projects</a>
        
        <a href="#contact" className="text-gray-300 hover:text-[#64ffda]">Contact</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
