import Icon from "./components/Icon";

const Home = () => {
  return (
    <main className="mt-[10vh]">
      <div className="flex flex-col h-[60vh] justify-between px-4 md:px-[104px]">
        <div>
          <p className="text-4xl md:text-5xl lg:text-7xl font-black">
            FRONTEND
          </p>
          <p className="text-4xl md:text-5xl lg:text-7xl font-black">
            DEVELOPER{" "}
            <sup className="inline-block">
              <Icon
                isAsterisk={true}
                darkIcon="/assets/Black-asterisk.svg"
                icon="/assets/asterisk.svg"
                height={25}
                width={25}
              />
            </sup>
          </p>
        </div>

        <div className="flex justify-between items-end">
          <div className="md:hidden"></div>

          <div className="hidden md:flex flex-col">
            <p className=" md:text-xl">OPEN TO WORK</p>
            <p>Based in India</p>
          </div>

          <div className="text-right">
            <p className="text-4xl md:text-5xl lg:text-7xl font-black">HAREE</p>
            <p className="text-4xl md:text-5xl lg:text-7xl font-black">
              PRASAD
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden w-full">
        <div className="flex space-x-5 items-center mt-[10vh] marquee text-xs">
          {Array.from({ length: 10 }).map((marqueeItem, index) => {
            return (
              <div className="flex space-x-5" key={`${marqueeItem}-${index}`}>
                <Icon
                  isAsterisk={true}
                  darkIcon="/assets/Black-asterisk.svg"
                  icon="/assets/asterisk.svg"
                  height={20}
                  width={20}
                />
                <p>/WEB DEVELOPER/FRONTEND DEVELOPER/FRONTEND LEAD</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
