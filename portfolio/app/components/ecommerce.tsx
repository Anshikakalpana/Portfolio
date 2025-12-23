

import React from 'react';

const Ecommerce = () => {
  return (
 
  <div className="max-w-5xl bg-[#1a112f] shadow-lg rounded-2xl flex flex-col md:flex-row items-center p-8  my-14">

    {/* Image Section */}
    <div className="flex-shrink-0 flex flex-col items-center gap-3">
      <img
        src="/ecommerce.png"
        alt="E-commerce Project"
        className="h-56 w-56 object-contain rounded-xl"
      />
      <a
        href="https://github.com/Anshikakalpana/ecommerce-backend"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/github.png"
          alt="GitHub Link"
          className="h-10 w-10 object-contain  cursor-pointer hover:scale-110 transition-transform bg-blue-200 rounded-4xl"
        />
      </a>
    </div>

    {/* Text Section */}
    <div className="text-white space-y-3 text-sm md:text-base leading-relaxed">
      <h1 className="text-2xl font-bold text-[#CEB5FD]">
        🛍️ E-Commerce Backend API
      </h1>

      <p className="font-medium">
        <span className="font-semibold">Stack:</span> Node.js, Express, MongoDB, Redis, Cloudinary , Zod, Docker, Swagger
      </p>

      <p>
        A scalable and production-grade backend designed for e-commerce applications.  
        Implemented role-based architecture, token rotation, and IP-based rate limiting to ensure secure and efficient access control.  
        Reused the authentication API for token management to simplify reusability and maintainability across different modules.
      </p>

      <p>
        Integrated cart management using Redis for high-performance caching and session persistence, ensuring minimal latency for real-time cart updates.  
        Added API documentation with Swagger for smooth developer onboarding and testing.  
        Includes Zod-based schema validation, Dockerized container setup, and environment-specific configurations for scalability.
      </p>

      <p className="text-[#b396ea]">
        <strong>Focus:</strong> Security • Scalability • Reusability • Clean Architecture
      </p>
    </div>
  </div>



  );
};

export default Ecommerce;

