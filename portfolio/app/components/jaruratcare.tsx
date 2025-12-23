

import React from 'react';
import { FiExternalLink } from "react-icons/fi";

const JaruratCare = () => {
  return (
 
  <div className="max-w-5xl bg-[#1a112f] shadow-lg rounded-2xl flex flex-col md:flex-row items-center p-8 gap-8">

    
    <div className="flex-shrink-0 flex flex-col items-center">
      <img
        src="/jcl.png"
        alt="E-commerce Project"
        className="h-26 w-26 object-contain rounded-xl mb-4"
      />
      <a
        href="https://www.jarurat.care/"
        target="_blank"
        rel="noopener noreferrer"
      >
       
       <FiExternalLink    className="h-7 w-7 object-contain  cursor-pointer hover:scale-110 transition-transform text-white "
        />
      </a>
    </div>

    {/* Text Section */}
    <div className="text-white space-y-3 text-sm md:text-base leading-relaxed">
       <h1 className="text-2xl font-bold text-white items-center justify-between">
         <p>Full Stack Engineer</p>
     
       
      </h1>
      <h1 className="text-xl font-bold text-[#CEB5FD] flex flex-row items-center justify-between">
          <p>Jarurat Care</p>
        <p>Nov'25 - Present </p>
      </h1>

      <p className="font-medium">
        <span className="font-semibold">Stack:</span> Node.js, Express, MongoDB, Springboot , Java
      </p>

 <p>
  Working across the stack to build an <b>AI-powered chatbot</b> using <b>Spring Boot (Java)</b> and <b>OpenAI</b>. Focused on creating <b>scalable backend services</b>, integrating <b>intelligent responses</b>, and enabling <b>real-time communication</b>. Responsibilities include developing <b>robust APIs</b>, coordinating data flow, supporting frontend integration, and contributing to <b>architecture</b>, <b>performance optimization</b>, and <b>clean, production-ready code</b>.
</p>



      <p className="text-[#b396ea]">
       <strong>Focus:</strong> AI Integration • Scalable Backend Systems •  API Engineering
        </p>
    </div>
  </div>



  );
};

export default JaruratCare;

