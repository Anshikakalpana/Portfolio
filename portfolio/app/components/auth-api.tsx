import React from 'react';

const AuthAPI = () => {
  return (

      <div className="max-w-5xl bg-[#1a112f] shadow-lg rounded-2xl flex flex-col md:flex-row items-center p-8 gap-8">

        {/* Image Section */}
        <div className="flex-shrink-0 flex flex-col items-center gap-3">
          <img
            src="/auth.png"
            alt="Authentication API Project"
            className="h-56 w-56 object-contain rounded-xl"
          />
          <a
            href="https://github.com/Anshikakalpana/backendapi1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github.png"
              alt="GitHub Link"
             className="h-10 w-10 object-contain  cursor-pointer hover:scale-110 transition-transform bg-blue-200 rounded-4xl"/>
          </a>
        </div>

        {/* Text Section */}
        <div className="text-white space-y-3 text-sm md:text-base leading-relaxed">
          <h1 className="text-2xl font-bold text-[#CEB5FD]">
            🔐 Authentication API
          </h1>

          <p className="font-medium">
            <span className="font-semibold">Stack:</span> Node.js, Express, Postgres, Redis, Nodemailer, Zod, Docker
          </p>

          <p>
            Secure, production-ready authentication system built with modular APIs for login, signup, and token refresh.  
            Implemented token rotation, IP-based rate limiting, and Redis-based session management to prevent token misuse and enhance scalability.
          </p>

          <p>
            Added email verification and password reset flows using Nodemailer with JWT links.  
            Fully Dockerized for easy deployment and consistent environment setup across systems.
          </p>

          <p className="text-[#b396ea]">
            <strong>Focus:</strong> Security • Reusability • Scalability • Reliability
          </p>
        </div>
      </div>

  );
};

export default AuthAPI;

