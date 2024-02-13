import Image from "next/image";

import { projects } from "./constants";

type ProjectProps = {
  selectedProject: number;
};

const Project = ({ selectedProject }: ProjectProps) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <h2 className="font-semibold text-sm md:text-lg lg:text-2xl">
          Overview
        </h2>

        <div className="flex items-center space-x-5">
          {projects[selectedProject].github && (
            <a
              className="h-[15px] w-[15px] md:h-[18px] md:w-[18px] lg:h-[24px] lg:w-[24px]"
              href={projects[selectedProject].github}
              target="_blank"
            >
              <Image
                alt="Github"
                src="/assets/Github.svg"
                height={24}
                width={24}
                quality={100}
              />
            </a>
          )}

          {projects[selectedProject].links && selectedProject !== 0 && (
            <a
              className="h-[15px] w-[15px] md:h-[18px] md:w-[18px] lg:h-[24px] lg:w-[24px]"
              href={projects[selectedProject].links}
              target="_blank"
            >
              <Image
                src="/assets/Link.svg"
                alt="Link"
                quality={100}
                height={23}
                width={23}
              />
            </a>
          )}
        </div>
      </div>
      <p className="text-xs md:text-base lg:text-lg text-justify">
        {projects[selectedProject].description}
      </p>

      <h4 className="mt-5 font-semibold text-sm md:text-lg lg:text-2xl">
        Tools
      </h4>

      <div className="grid grid-cols-2 gap-y-2 lg:gap-y-5 mt-2 mb-5">
        {projects[selectedProject].tools.map((item, index) => {
          return (
            <div
              key={`${item.name} ${index}`}
              className="flex items-center space-x-3 lg:space-x-5"
            >
              <Image
                className="h-[20px] w-[20px] lg:h-[40px] lg:w-[40px]"
                src={item.assets}
                alt={item.name}
                height={40}
                width={40}
                quality={100}
              />

              <h2 className="font-semibold text-sm lg:text-lg">{item.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
