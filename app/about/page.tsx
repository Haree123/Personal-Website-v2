import Footer from "@/components/footer";

interface Curriculum {
  id: number;
  range: string;
  position: string;
  organization: string;
}

const About = () => {
  const curriculum: Curriculum[] = [
    {
      id: 1,
      range: "APR 2023 - PRESENT",
      position: "FRONTEND LEAD",
      organization: "Addup Networks",
    },
    {
      id: 2,
      range: "MAR 2022 - MAR 2023",
      position: "ASSOCIATE REACT DEVELOPER",
      organization: "Addup Networks",
    },
    {
      id: 3,
      range: "FEB 2022 - FEB 2022",
      position: "INTERNSHIP TRAINEE",
      organization: "Addup Networks",
    },
    {
      id: 4,
      range: "AUG 2021 - JAN 2022",
      position: "CAREER BREAK",
      organization: "Learning Web Development",
    },
    {
      id: 5,
      range: "JUL 2018 - JUL 2021",
      position: "BACHELOR'S OF COMPUTER APPLICATIONS",
      organization: "Park's College of Arts and Science",
    },
  ];

  return (
    <div className="px-4 md:px-[104px] pt-14 md:pt-[127px]">
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row justify-between">
        <h2 className="font-black text-3xl lg:text-5xl">About Me</h2>

        <p className="text-lg w-full lg:w-2/5">
          Hello! My name is Haree Prasad and I'm a passionate and creative
          frontend developer with a love for building engaging and user-friendly
          web applications. I thrive on turning ideas into interactive and my
          journey in the world of programming started in 2022.
          <br /> <br />
          Currently working remotely at Addup Networks from Tiruppur, Tamilnadu,
          India. Feel free to Contact Me!
        </p>
      </div>

      <div className="my-8 md:my-16 lg:my-32">
        <h2 className="font-black text-3xl lg:text-5xl">Curriculum Vitae</h2>

        <hr className="mt-4 md:mt-6 lg:mt-8" />

        <div className="flex flex-col">
          {curriculum.map((curriculumItem) => {
            return (
              <div key={curriculumItem.id}>
                <div className="flex justify-between space-x-10 my-3 md:my-7 lg:my-10">
                  <h3 className="text-xs md:text-xl lg:text-2xl w-1/3">
                    {curriculumItem.range}
                  </h3>

                  <div className="flex flex-col space-y-2 lg:space-y-5 w-2/3">
                    <h5 className="text-xs md:text-lg lg:text-xl">
                      {curriculumItem.position}
                    </h5>

                    <h3 className="font-semibold text-sm md:text-2xl lg:text-3xl">
                      {curriculumItem.organization || ""}
                    </h3>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>

      <Footer isIcons={true} />
    </div>
  );
};

export default About;
