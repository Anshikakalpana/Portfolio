"use client"
import React from 'react'
import Navbar from '../components/navbar'
import { redirect , useRouter } from 'next/navigation'


const Mainpage = () => {
  const route= useRouter();
  return (
    <div className="min-h-screen bg-[#e9e8f3] flex flex-col">
     
      <Navbar />

   
      <section className="flex justify-center items-center text-center flex-grow px-6 md:px-32 pt-16">
        <div className="max-w-4xl">
          <p className="text-black text-xl md:text-2xl leading-relaxed tracking-wide font-medium mb-8">
            I’m <span className="text-[#2899B4] font-bold text-5xl">Anshika</span>, 
            a second-year <span className="text-[#2899B4]">Electronics and Communication Engineering  </span> 
            student at <span className="font-semibold">IIIT Allahabad</span>, driven by a deep interest in 
            <span className="text-[#2899B4]"> Backend Development</span>, 
            <span className="text-[#2899B4]"> DevOps</span>, and 
            <span className="text-[#2899B4]"> System Design</span>.
          </p>

          <p className="text-black text-lg md:text-xl leading-relaxed tracking-wide font-medium mb-10">
            I possess a strong foundation in <span className="font-semibold text-black">Data Structures and Algorithms</span>, 
            and I’m passionate about building scalable, reliable systems while continuously 
            enhancing my problem-solving and analytical skills.
          </p>

       
          <div className="flex justify-center gap-6">
            <button className="px-6 py-2 bg-[#2899B4] text-black font-semibold rounded-xl shadow-md hover:bg-[#1f7e96] hover:scale-105 transition-all duration-200">
              Resume
            </button>
            <button className="px-6 py-2 border-2 border-[#2899B4] text-[#2899B4] font-semibold rounded-xl hover:bg-[#2899B4] hover:text-white hover:scale-105 transition-all duration-200" onClick={() => route.push('/contact')}>
              Contact
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mainpage

