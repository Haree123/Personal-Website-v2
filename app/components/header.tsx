import ThemeSwitcher from "./Theme-Switcher";
import MenuIcon from "./Menu-Icon";

const Header = () => {
  return (
    <header className="h-[12vh] px-4 md:px-[104px] flex items-center justify-between">
      <h2 className="text-3xl lg:text-4xl font-black">Hp</h2>

      <div className="flex space-x-7">
        <div className="hidden md:inline-block">
          <ThemeSwitcher />
        </div>

        <MenuIcon />
      </div>
    </header>
  );
};

export default Header;
