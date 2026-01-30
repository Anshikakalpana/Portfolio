
import { FiExternalLink } from "react-icons/fi";
import React from 'react';

const ReTraced = () => {
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
        href="https://github.com/Anshikakalpana/bullmq-ReTraced"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/github.png"
          alt="GitHub Link"
          className="h-10 w-10 object-contain  cursor-pointer hover:scale-110 transition-transform bg-blue-200 rounded-4xl"
        />
      </a>

       <a href="https://re-trace-five.vercel.app/">
        <FiExternalLink    className="h-9 w-9 object-contain  cursor-pointer hover:scale-110 transition-transform text-white py-1 "
                />
              </a>
    </div>

    {/* Text Section */}
    <div className="text-white space-y-3 text-sm md:text-base leading-relaxed">
      <h1 className="text-2xl font-bold text-[#CEB5FD]">
        Bullmq-ReTraced
      </h1>

      <p className="font-medium">
        <span className="font-semibold">Stack:</span> Node.js, Express,  Redis, Docker,  Jest
      </p>

      <p>
       ReTraced is a transparent and extensible distributed job scheduler built to make
retry behavior, failure handling, and job lifecycle transitions explicit and observable.
      </p>

      <p>
       ReTraced is designed in such a way that every job can define its own retry strategy. Although not every job requires a unique strategy, different classes of failures (network, infra, logic, business rules) demand different retry behaviors.
      </p>

      <p className="text-[#b396ea]">
        <strong>Focus:</strong> Security • Scalability • Reusability • Clean Architecture
      </p>
    </div>
  </div>



  );
};

export default ReTraced;

