"use client";

import {
  SiTypescript,
  SiGo,
  SiJest,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
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
  SiApachekafka,
} from "react-icons/si";

export default function TechStack() {
  return (
    <div className="p-6 md:p-10 text-white w-full">
      <h1 className="text-3xl font-bold mb-10 text-center text-white">
        Tech Stack
      </h1>

      {/* ✅ Single Row */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        <SiTypescript className="w-10 h-10 hover:scale-110 transition" />
        <SiGo className="w-10 h-10 hover:scale-110 transition" />
        <SiCplusplus className="w-10 h-10 hover:scale-110 transition" />

        <SiReact className="w-10 h-10 hover:scale-110 transition" />
        <SiNextdotjs className="w-10 h-10 hover:scale-110 transition" />
        <SiTailwindcss className="w-10 h-10 hover:scale-110 transition" />

        <SiNodedotjs className="w-10 h-10 hover:scale-110 transition" />
        <SiExpress className="w-10 h-10 hover:scale-110 transition" />
        <SiSpringboot className="w-10 h-10 hover:scale-110 transition" />
        <SiSwagger className="w-10 h-10 hover:scale-110 transition" />
         <SiJest className="w-10 h-10 hover:scale-110 transition" />
        <SiMongodb className="w-10 h-10 hover:scale-110 transition" />
        <SiPostgresql className="w-10 h-10 hover:scale-110 transition" />
        <SiRedis className="w-10 h-10 hover:scale-110 transition" />

        <SiDocker className="w-10 h-10 hover:scale-110 transition" />
        <SiGit className="w-10 h-10 hover:scale-110 transition" />
        <SiGithub className="w-10 h-10 hover:scale-110 transition" />
        <SiGithubactions className="w-10 h-10 hover:scale-110 transition" />

        <SiApachekafka className="w-10 h-10 hover:scale-110 transition" />

        {/* BullMQ text */}
        <span >
          BullMQ
        </span>
      </div>
    </div>
  );
}
