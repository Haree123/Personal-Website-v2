"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import useGlobalStore from "@/store/global.store";

const MenuIcon = () => {
  const { theme } = useTheme();
  const { isMenuOpen, handleMenuOpen } = useGlobalStore();

  const isLightMode = Boolean(theme === "light");

  return (
    <button onClick={handleMenuOpen}>
      <Image
        src={
          isMenuOpen
            ? isLightMode
              ? "/assets/Black-Close.svg"
              : "/assets/Close.svg"
            : isLightMode
            ? "assets/Black-Menu.svg"
            : "assets/Menu.svg"
        }
        height={35}
        width={35}
        quality={100}
        priority
        alt="Menu"
        style={{ width: "auto", height: "auto" }}
      />
    </button>
  );
};

export default MenuIcon;
