

import React from 'react';
import { FiExternalLink } from "react-icons/fi";

const JaruratCare = () => {
  return (
 
  <div className="max-w-5xl bg-[#1a112f] shadow-lg rounded-2xl flex flex-col md:flex-row items-center p-8 gap-8">

    
    <div className="flex-shrink-0 flex flex-col items-center gap-3">
      <img
        src="/ecommerce.png"
        alt="E-commerce Project"
        className="h-56 w-56 object-contain rounded-xl"
      />
      <a
        href="https://www.jarurat.care/"
        target="_blank"
        rel="noopener noreferrer"
      >
       
       <FiExternalLink    className="h-10 w-10 object-contain  cursor-pointer hover:scale-110 transition-transform text-white rounded-4xl"
        />
      </a>
    </div>

    {/* Text Section */}
    <div className="text-white space-y-3 text-sm md:text-base leading-relaxed">
      <h1 className="text-2xl font-bold text-[#CEB5FD]">
        Full Stack Engineer
      </h1>

      <p className="font-medium">
        <span className="font-semibold">Stack:</span> Node.js, Express, MongoDB, Redis,Springboot , Java
      </p>

 <p>
  Working across the stack to build an <b>AI-powered chatbot</b> using <b>Spring Boot (Java)</b> and <b>OpenAI</b>. Focused on creating <b>scalable backend services</b>, integrating <b>intelligent responses</b>, and enabling <b>real-time communication</b>. Responsibilities include developing <b>robust APIs</b>, coordinating data flow, supporting frontend integration, and contributing to <b>architecture</b>, <b>performance optimization</b>, and <b>clean, production-ready code</b>.
</p>



      <p className="text-[#b396ea]">
       <strong>Focus:</strong> AI Integration • Scalable Backend Systems • Real-Time Communication • Clean Architecture • API Engineering
        </p>
    </div>
  </div>



  );
};

export default JaruratCare;

