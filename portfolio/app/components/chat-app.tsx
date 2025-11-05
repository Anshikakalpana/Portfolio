

import React from 'react';

const Chatapp = () => {
  return (
<div className="bg-gray-300 flex flex-col items-center py-12 px-6">
  <div className="max-w-5xl  shadow-lg rounded-2xl flex flex-col md:flex-row items-center p-8 gap-8">

    {/* Image Section */}
    <div className="flex-shrink-0 flex flex-col items-center gap-3">
      <img
        src="/chatapp.png"
        alt="Chat App Project"
        className="h-56 w-56 object-contain rounded-xl"
      />
      <a
        href="https://github.com/Anshikakalpana/chat-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/github.png"
          alt="GitHub Link"
          className="h-10 w-10 object-contain rounded-xl cursor-pointer hover:scale-110 transition-transform"
        />
      </a>
    </div>

    {/* Text Section */}
    <div className="text-black space-y-3 text-sm md:text-base leading-relaxed">
      <h1 className="text-2xl font-bold text-[#2899B4]">
        💬 Real-Time Chat Application
      </h1>

      <p className="font-medium">
        <span className="font-semibold">Stack:</span> React, Node.js, Express, MongoDB, Redis, Socket.io, Zustand, Docker
      </p>

      <p>
        Full-stack real-time chat platform supporting private and group messaging with live user status and media sharing.  
        Implemented Socket.io for low-latency communication and Redis for managing socket sessions and message queues.  
        Reused the authentication API for token management and session rotation, ensuring secure, reusable architecture.
      </p>

      <p>
        Features Reusability of auth API, Zustand state management, rate limiting, and Dockerized deployment for smooth scaling and reliability.  
        Designed with a focus on performance, modularity, and real-time experience.
      </p>

      <p className="text-black">
        <strong>Focus:</strong> Real-time • Scalability • Security • Clean Architecture
      </p>
    </div>
  </div>
</div>


  );
};

export default Chatapp ;

