import Image from "next/image";

import Icon from "@/components/Icon";
import { projects } from "./constants";

type ProjectProps = {
  selectedProject: number;
};

const Project = ({ selectedProject }: ProjectProps) => {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <h2 className="font-semibold text-lg lg:text-2xl">Overview</h2>

        <div className="flex items-center space-x-5">
          {projects[selectedProject].github && (
            <a href={projects[selectedProject].github} target="_blank">
              <Icon
                darkIcon="/assets/Black-Github.svg"
                icon="/assets/Github.svg"
                className=""
                height={20}
                width={20}
              />
            </a>
          )}

          {projects[selectedProject].links && selectedProject !== 0 && (
            <a href={projects[selectedProject].links} target="_blank">
              <Icon
                icon="/assets/Link.svg"
                darkIcon="/assets/Black-Link.svg"
                height={20}
                width={20}
                className=""
              />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm lg:text-lg text-justify">
        {projects[selectedProject].description}
      </p>

      <h4 className="mt-5 font-semibold text-2xl">Tools</h4>

      <div className="grid grid-cols-2 gap-y-2 lg:gap-y-10 my-5">
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
