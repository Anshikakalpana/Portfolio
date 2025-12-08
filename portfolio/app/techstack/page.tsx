// "use client";

// export default function TechStack() {
//   return (
//     <div className="p-10 text-white w-full min-h-screen">
//       <h1 className="text-4xl font-bold mb-10 text-center">Tech Stack</h1>

//       <div className="flex flex-col lg:flex-row flex-wrap gap-8 w-full">

//         {/* Languages */}
//         <div className="flex-1 min-w-[300px] bg-[#1a112f] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
//           <h2 className="text-xl font-semibold mb-4">Languages</h2>
//           <div className="grid grid-cols-2 gap-3 text-white/90">
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">C</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">C++</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">Java</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">TypeScript</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">JavaScript</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">HTML</p>
//           </div>
//         </div>

//         {/* Frontend */}
//         <div className="flex-1 min-w-[300px] bg-[#1a112f] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
//           <h2 className="text-xl font-semibold mb-4">Frontend</h2>
//           <div className="space-y-2 text-white/90">
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">React.js</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">Next.js 15</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">Tailwind CSS</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">CSS Modules</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">Responsive UI Development</p>
//           </div>
//         </div>

//         {/* Backend */}
//         <div className="flex-1 min-w-[300px] bg-[#1a112f] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
//           <h2 className="text-xl font-semibold mb-4">Backend</h2>
//           <div className="space-y-2 text-white/90">
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">Node.js</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">Express.js</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">Spring Boot</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">REST API Design</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">Swagger / OpenAPI Documentation</p>
//           </div>
//         </div>

//         {/* Databases */}
//         <div className="flex-1 min-w-[300px] bg-[#1a112f] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
//           <h2 className="text-xl font-semibold mb-4">Databases & Storage</h2>
//           <div className="space-y-2 text-white/90">
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">MongoDB</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">PostgreSQL</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">Redis</p>
//           </div>
//         </div>

//         {/* DevOps */}
//         <div className="flex-1 min-w-[300px] bg-[#1a112f] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
//           <h2 className="text-xl font-semibold mb-4">DevOps / Tools</h2>
//           <div className="space-y-2 text-white/90">
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">Docker</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">Git</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">GitHub</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">GitHub Actions</p>
//             <p className="p-2 rounded-lg bg-white/5 border border-white/10">CI/CD Pipelines</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }
"use client";

import {
  SiTypescript,
  SiJavascript,
  SiC,
  SiCplusplus,

  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiSwagger,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
} from "react-icons/si";

export default function TechStack() {
  return (
    <div className="p-10 text-white w-full min-h-screen">
      <h1 className="text-3xl font-bold mb-10 text-center text-white">
        Tech Stack
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">

        {/* Languages */}
        <div className="bg-[#150a25] p-6 rounded-2xl shadow-xl border border-purple-600/20 hover:border-purple-500/40 hover:shadow-purple-700/30 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-4 text-[#CEB5FD]">Languages</h2>
          <div className="grid grid-cols-2 gap-3 text-white/90">
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiC /> C</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiCplusplus /> C++</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"> Java</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiTypescript /> TypeScript</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiJavascript /> JavaScript</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiHtml5 /> HTML</p>
          </div>
        </div>

        {/* Frontend */}
        <div className="bg-[#150a25] p-6 rounded-2xl shadow-xl border border-purple-600/20 hover:border-purple-500/40 hover:shadow-purple-700/30 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-4 text-[#CEB5FD]">Frontend</h2>
          <div className="space-y-2 text-white/90">
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiReact /> React.js</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiNextdotjs /> Next.js 15</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiTailwindcss /> Tailwind CSS</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiCss3 /> CSS Modules</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiReact /> Responsive UI Development</p>
          </div>
        </div>

        {/* Backend */}
        <div className="bg-[#150a25] p-6 rounded-2xl shadow-xl border border-purple-600/20 hover:border-purple-500/40 hover:shadow-purple-700/30 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-4 text-[#CEB5FD]">Backend</h2>
          <div className="space-y-2 text-white/90">
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiNodedotjs /> Node.js</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiExpress /> Express.js</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiSpringboot /> Spring Boot</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiSwagger /> REST API Design</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiSwagger /> Swagger / OpenAPI Docs</p>
          </div>
        </div>

        {/* Databases */}
        <div className="bg-[#150a25] p-6 rounded-2xl shadow-xl border border-purple-600/20 hover:border-purple-500/40 hover:shadow-purple-700/30 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-4 text-[#CEB5FD]">Databases & Storage</h2>
          <div className="space-y-2 text-white/90">
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiMongodb /> MongoDB</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiPostgresql /> PostgreSQL</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiRedis /> Redis</p>
          </div>
        </div>

        {/* DevOps */}
        <div className="bg-[#150a25] p-6 rounded-2xl shadow-xl border border-purple-600/20 hover:border-purple-500/40 hover:shadow-purple-700/30 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-4 text-[#CEB5FD]">DevOps / Tools</h2>
          <div className="space-y-2 text-white/90">
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiDocker /> Docker</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiGit /> Git</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiGithub /> GitHub</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiGithubactions /> GitHub Actions</p>
            <p className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition"><SiGithubactions /> CI/CD Pipelines</p>
          </div>
        </div>

      </div>
    </div>
  );
}
