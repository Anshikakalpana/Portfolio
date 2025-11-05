"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-black shadow-md px-6 py-4 fixed top-0 left-0 w-full z-50">
   
      <h1 className="text-3xl font-bold text-[#2899B4]">Anshika Jain</h1>

     
      <ul className="hidden md:flex space-x-8 text-lg font-medium text-white">
        <li><a href="home" className="hover:text-blue-500 transition">Home</a></li>
        <li><a href="projects" className="hover:text-blue-500 transition">Projects</a></li>
        <li><a href="contact" className="hover:text-blue-500 transition">Contact</a></li>
        <li><a href="suggestions" className="hover:text-blue-500 transition">Suggestions</a></li>
      </ul>

     
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setMenuOpen(!menuOpen)}
       
      >
         <img src ="/homeicon.png"
        
         />
      
      </button>

     
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-black shadow-lg rounded-lg p-4 md:hidden ">
          <ul className="flex flex-col space-y-4 text-white">
            <li><a href="home" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="projects" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="contact" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li><a href="contact" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Suggestions</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
