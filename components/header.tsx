import ThemeSwitcher from "./Theme-Switcher";
import MenuIcon from "./Menu-Icon";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-[12vh] px-4 md:px-[104px] flex items-center justify-between">
      <Link href="/">
        <h2 className="text-3xl lg:text-4xl font-black">Hp</h2>
      </Link>

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
