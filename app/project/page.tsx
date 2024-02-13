"use client";
import { useState } from "react";
import Image from "next/image";

import Footer from "@/components/footer";
import Project from "./project";
import { projects } from "./constants";

const ProjectWrapper = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <div className="my-5 md:my-20 px-4 md:px-[104px]">
      <h2 className="font-black text-2xl md:text-4xl lg:text-5xl">Projects</h2>

      <hr className="mt-5" />

      <div className="lg:hidden">
        {projects.map((projectItem) => {
          return (
            <div
              key={projectItem.id}
              className="flex flex-col cursor-pointer"
              onClick={() => {
                setSelectedProject(projectItem.id - 1);
              }}
            >
              <div className="flex justify-between">
                <h2 className="my-2 font-semibold text-lg md:text-xl lg:text-2xl">
                  {projectItem.name}
                </h2>

                {selectedProject === projectItem.id - 1 && (
                  <Image
                    className="mr-2"
                    src="/assets/Caret-Down.svg"
                    height={7}
                    width={7}
                    quality={100}
                    alt="Down"
                  />
                )}
              </div>

              {selectedProject === projectItem.id - 1 && (
                <Project selectedProject={selectedProject} />
              )}

              <hr />
            </div>
          );
        })}
      </div>

      <div className="hidden lg:flex lg:divide-x-2">
        <div className="lg:w-1/2">
          {projects.map((projectItem) => {
            return (
              <div
                key={projectItem.id}
                className="flex flex-col cursor-pointer"
                onClick={() => {
                  setSelectedProject(projectItem.id - 1);
                }}
              >
                <div className="flex justify-between">
                  <h2 className="my-12 font-semibold text-lg md:text-xl lg:text-2xl">
                    {projectItem.name}
                  </h2>

                  {selectedProject === projectItem.id - 1 && (
                    <Image
                      alt="Right"
                      quality={100}
                      src="/assets/Caret-Right.svg"
                      height={13}
                      width={13}
                      className="mr-10"
                    />
                  )}
                </div>
                <hr />
              </div>
            );
          })}
        </div>

        <div className="hidden lg:flex flex-col md:w-1/2 p-6">
          <Project selectedProject={selectedProject} />
        </div>
      </div>

      <Footer isIcons={true} />
    </div>
  );
};

export default ProjectWrapper;
