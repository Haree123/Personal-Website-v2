import Icon from "./Icon";

interface FooterLinks {
  id: number;
  darkIcon: string;
  icon: string;
  name: string;
}

const Footer = () => {
  const links: FooterLinks[] = [
    {
      id: 1,
      darkIcon: "/assets/Black-LinkedIn.svg",
      icon: "/assets/LinkedIn.svg",
      name: "LinkedIn",
    },
    {
      id: 2,
      darkIcon: "/assets/Black-Mail.svg",
      icon: "/assets/Mail.svg",
      name: "Mail",
    },
    {
      id: 3,
      darkIcon: "/assets/Black-Github.svg",
      icon: "/assets/Github.svg",
      name: "Github",
    },
    {
      id: 4,
      icon: "/assets/Instagram.svg",
      darkIcon: "/assets/Black-Instagram.svg",
      name: "Instagram",
    },
  ];

  return (
    <div className="flex justify-between mt-20 mb-10">
      <div className="flex items-center space-x-5">
        {links.map((linkItem) => {
          return (
            <div key={linkItem.id}>
              <div className="h-[16.67px] w-[16.67px] md:h-[25px] md:w-[25px]">
                <Icon
                  className="h-full w-full"
                  darkIcon={linkItem.darkIcon}
                  height={16.67}
                  width={16.67}
                  icon={linkItem.icon}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col space-y-2">
        <h2 className="text-xs md:text-base">Haree Prasad</h2>
        <h6 className="text-xs md:text-base">FRONTEND DEVELOPER</h6>
      </div>
    </div>
  );
};

export default Footer;
