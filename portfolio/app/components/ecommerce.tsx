

import React from 'react';

const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-12 px-6">
      <div className="max-w-6xl bg-gray-800 shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row items-center p-8 gap-8">
        
        {/* Image Section */}
        <div className="flex-shrink-0 flex flex-col">
          <img
            src="/ecommerce.png"
            alt="E-commerce Project"
            className="h-64 w-64 object-contain rounded-xl"
          />
          <img src="/github.png" alt="github-link"
            className="h-13 w-13 object-contain rounded-xl"
          />
        </div>

        {/* Text Section */}
        <div className="text-white space-y-4 text-sm md:text-base leading-relaxed">
          <h1 className="text-3xl font-bold text-blue-600">
            🛍️ E-Commerce Backend API
          </h1>
          
          <p className="text-white font-medium">
            <span className="font-semibold text-white">Tech Stack / Tools:</span> 
            &nbsp;Express, Node.js, Redis, MongoDB, Zod, Docker, Swagger
          </p>

          <div className="space-y-3 text-white text-[0.9rem]">
            <p>
              Designed and built a production-grade backend system for a multi-role e-commerce platform supporting Buyers, Sellers, Admins, and Customer-Support users. Focused on scalability, caching, and security through modular architecture, Redis integration, and strict input validation.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>🔐 Advanced Authentication, RBAC & Rate Limiting:</strong> 
                Implemented JWT-based authentication with Redis-powered token rotation and session caching, reducing login latency by ~35% and enabling secure multi-device logout. 
                Added <span className="font-medium text-gray-800">IP-based rate limiting</span> to mitigate brute-force attacks and ensure fair API usage.
              </li>
              <li>
                <strong>🧩 Role-based APIs:</strong> Buyers manage carts, Sellers perform CRUD on products, and Admins oversee platform data — enforced through custom Express middlewares.
              </li>
              <li>
                <strong>⚡ High-Performance Caching:</strong> Used Redis for user carts and active sessions, improving cart read/write response times by ~60%.
              </li>
              <li>
                <strong>🧠 Robust Validation:</strong> Integrated Zod for schema validation, lowering invalid request errors by over 40%.
              </li>
              <li>
                <strong>🐳 Containerized Deployment:</strong> Dockerized the stack for consistent environments and CI/CD integration.
              </li>
              <li>
                <strong>📘 API Documentation:</strong> Comprehensive Swagger documentation for authentication, products, and cart operations.
              </li>
              <li>
                <strong>🧾 Extensible Design:</strong> Built for future scalability, including subscriptions and order management.
              </li>
            </ul>

            <p className="text-white">
              <strong>Impact:</strong> Achieved ~2× faster API response times during benchmark tests through Redis caching and optimized middleware flow, while maintaining clean, modular code quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;

