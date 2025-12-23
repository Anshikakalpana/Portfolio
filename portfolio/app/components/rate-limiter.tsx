import React from 'react';

const RateLimiter = () => {
  return (
    <div className="max-w-5xl bg-[#1a112f] shadow-lg rounded-2xl flex flex-col md:flex-row items-center p-8   gap-6">

      {/* Image Section */}
      <div className="flex-shrink-0 flex flex-col items-center gap-3">
        <img
          src="/rate-limiter.png"
          alt="Distributed Rate Limiter"
          className="h-56 w-56 object-contain rounded-xl"
        />
        <a
          href="https://github.com/Anshikakalpana/rate-limiter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/github.png"
            alt="GitHub Link"
            className="h-10 w-10 object-contain cursor-pointer hover:scale-110 transition-transform bg-blue-200 rounded-4xl"
          />
        </a>
      </div>

      {/* Text Section */}
      <div className="text-white space-y-3 text-sm md:text-base leading-relaxed">
        <h1 className="text-2xl font-bold text-[#CEB5FD]">
          🚦 Distributed Rate Limiter
        </h1>

        <p className="font-medium">
          <span className="font-semibold">Stack:</span> TypeScript, Node.js, Express, Redis, Lua, Docker, Zod
        </p>

        <p>
          Built a production-grade distributed rate limiter supporting
          <strong> Leaky Bucket, Fixed Window, Sliding Window, and Token Bucket</strong> algorithms,
          using <strong>Lua scripts</strong> for atomic Redis operations to ensure correctness under
          concurrent access.
        </p>

        <p>
          Deployed a horizontally scalable Redis cluster with
          <strong> 3 masters and 3 replicas</strong>, ensuring race-free consistency and
          fault tolerance under sustained peak traffic.
        </p>

        <p className="text-[#b396ea]">
          <strong>Focus:</strong> Concurrency • Scalability • Fault Tolerance • Backend Systems
        </p>
      </div>
    </div>
  );
};

export default RateLimiter;
