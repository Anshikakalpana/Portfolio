"use client"
import React from 'react'
import Navbar from '../components/navbar'
import { redirect , useRouter } from 'next/navigation'


const Mainpage = () => {
  const route= useRouter();
  return (
    <div className="min-h-screen  flex flex-col">
     
      <Navbar />

   
      <section className="text-white flex justify-center items-center text-center flex-grow px-6 md:px-32 pt-16">
        
        <div className="max-w-4xl  ">
       
          <p className="text-white text-xl md:text-2xl leading-relaxed tracking-wide font-medium mb-8">
           
            I’m <span className="text-[#CEB5FD] font-bold text-3xl md:text-5xl">Anshika</span>, 
            a second-year <span className="text-[#CEB5FD]">Electronics and Communication Engineering  </span> 
            student at <span className="font-semibold">IIIT Allahabad</span>, driven by a deep interest in 
            <span className="text-[#CEB5FD]"> Backend Development</span>, 
            <span className="text-[#CEB5FD]"> DevOps</span>, and 
            <span className="text-[#CEB5FD]"> System Design</span>.
           
          </p>

          <p className=" text-lg md:text-xl leading-relaxed tracking-wide font-medium mb-10">
            I possess a strong foundation in <span className="font-semibold ">Data Structures and Algorithms</span>, 
            and I’m passionate about building scalable, reliable systems while continuously 
            enhancing my problem-solving and analytical skills.
          </p>

       
          <div className="flex justify-center gap-6">
            < a href="https://drive.google.com/file/d/1qSZ2pf5eta6e-ccNBKtoWUvEENbWDQ2Y/view?usp=drivesdk">
            <button className="px-6 py-2 bg-[#8c65d6] text-black font-semibold rounded-xl shadow-md hover:bg-[#774cc9] hover:scale-105 transition-all duration-200">
              Resume
            </button>
            </a>
            <button className="px-6 py-2 border-2 border-[#8c65d6] text-white font-semibold rounded-xl hover:bg-[#8c65d6] hover:text-white hover:scale-105 transition-all duration-200" onClick={() => route.push('/contact')}>
              Contact
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mainpage
