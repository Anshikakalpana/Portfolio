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
  SiApachekafka,
} from "react-icons/si";

const Slider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden w-full">
      <div className="group relative flex w-full">
        <div className="flex gap-6 items-center whitespace-nowrap flex-nowrap animate-marquee group-hover:[animation-play-state:paused]">
          {children}
          {children}
        </div>
      </div>
    </div>
  );
};

const Box = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="bg-[#150a25] w-full max-w-sm p-4 rounded-2xl shadow-xl border border-purple-600/20 hover:border-purple-500/40 hover:shadow-purple-700/30 transition-all duration-300">
      <h2 className="text-sm font-semibold mb-3 text-[#CEB5FD]">{title}</h2>
      {children}
    </div>
  );
};

export default function TechStack() {
  return (
    <div className="p-6 md:p-10 text-white w-full min-h-screen">
      <h1 className="text-3xl font-bold mb-10 text-center text-white">
        Tech Stack
      </h1>

      <div className="flex flex-col items-center gap-8 w-full">

        {/* ✅ Top (Languages) */}
        <Box title="Languages">
          <Slider>
            <SiC className="w-8 h-8 shrink-0" />
            <SiCplusplus className="w-8 h-8 shrink-0" />
            <SiTypescript className="w-8 h-8 shrink-0" />
            <SiJavascript className="w-8 h-8 shrink-0" />
            <SiHtml5 className="w-8 h-8 shrink-0" />
          </Slider>
        </Box>

        {/* ✅ Middle Row (Frontend + Backend) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
          <Box title="Frontend">
            <Slider>
              <SiReact className="w-8 h-8 shrink-0" />
              <SiNextdotjs className="w-8 h-8 shrink-0" />
              <SiTailwindcss className="w-8 h-8 shrink-0" />
              <SiCss3 className="w-8 h-8 shrink-0" />
              <SiHtml5 className="w-8 h-8 shrink-0" />
            </Slider>
          </Box>

          <Box title="Backend">
            <Slider>
              <SiNodedotjs className="w-16 h-8 shrink-0" />
              <SiExpress className="w-16 h-8 shrink-0" />
              <SiSpringboot className="w-16 h-8 shrink-0" />
              <SiSwagger className="w-16 h-8 shrink-0" />
                <SiNodedotjs className="w-16 h-8 shrink-0" />
              <SiExpress className="w-16 h-8 shrink-0" />
              <SiSpringboot className="w-16 h-8 shrink-0" />
              <SiSwagger className="w-16 h-8 shrink-0" />
            </Slider>
          </Box>
        </div>

        {/* ✅ Bottom Row (3 boxes) */}
        <div className="flex flex-col xl:flex-row justify-center items-center gap-16 w-full">
          <Box title="DevOps / Tools">
            <Slider>
              <SiDocker className="w-16 h-8 shrink-0" />
              <SiGit className="w-16 h-8 shrink-0" />
              <SiGithub className="w-16 h-8 shrink-0" />
              <SiGithubactions className="w-16 h-8 shrink-0" />
                 <SiDocker className="w-16 h-8 shrink-0" />
              <SiGit className="w-16 h-8 shrink-0" />
              <SiGithub className="w-16 h-8 shrink-0" />
              <SiGithubactions className="w-16 h-8 shrink-0" />
            </Slider>
          </Box>

          <Box title="Databases & Storage">
            <Slider>
              <SiMongodb className="w-16 h-8 shrink-0" />
              <SiPostgresql className="w-16 h-8 shrink-0" />
              <SiRedis className="w-16 h-8 shrink-0" />
                <SiMongodb className="w-16 h-8 shrink-0" />
              <SiPostgresql className="w-16 h-8 shrink-0" />
              <SiRedis className="w-16 h-8 shrink-0" />
            </Slider>
          </Box>

          <Box title="Message Queues">
            <Slider>
              <SiApachekafka className="w-8 h-8 shrink-0" />
              <div>
                bullmq
              </div>
                <SiApachekafka className="w-8 h-8 shrink-0" />
              <div>
                bullmq
              </div>
            </Slider>
          </Box>
        </div>

      </div>
    </div>
  );
}
