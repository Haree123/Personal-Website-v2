import Image from "next/image";

interface FooterLinks {
  id: number;
  icon: string;
  link: string;
  name: string;
}

const Footer = ({ isIcons }: { isIcons: boolean }) => {
  const links: FooterLinks[] = [
    {
      id: 1,
      icon: "/assets/LinkedIn.svg",
      link: "https://www.linkedin.com/in/haree-prasad-275180158/",
      name: "LinkedIn",
    },
    {
      id: 2,
      icon: "/assets/Mail.svg",
      link: "mailto:d390807@gmail.com",
      name: "Mail",
    },
    {
      id: 3,
      icon: "/assets/Github.svg",
      link: "https://github.com/Haree123",
      name: "Github",
    },
    {
      id: 4,
      icon: "/assets/Instagram.svg",
      link: "https://www.instagram.com/haree._.hp",
      name: "Instagram",
    },
  ];

  return (
    <div className="flex justify-between mt-20 mb-10">
      {isIcons ? (
        <div className="flex items-center space-x-3.5 md:space-x-5">
          {links.map((linkItem) => {
            return (
              <div key={linkItem.id}>
                <a
                  href={linkItem.link}
                  target="_blank"
                  className="h-[16.67px] w-[16.67px] md:h-[25px] md:w-[25px]"
                >
                  <Image
                    className="h-full w-full"
                    height={16.67}
                    width={16.67}
                    src={linkItem.icon}
                    alt={linkItem.name}
                  />
                </a>
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}

      <div className="flex flex-col">
        <h2 className="text-sm md:text-base">Haree Prasad</h2>
        <h6 className="text-[10px] md:text-base">FRONTEND DEVELOPER</h6>
      </div>
    </div>
  );
};

export default Footer;
