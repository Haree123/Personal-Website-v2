"use client";

import Image from "next/image";
import useGlobalStore from "@/store/global.store";

const MenuIcon = () => {
  const { isMenuOpen, handleMenuOpen } = useGlobalStore();

  return (
    <button onClick={handleMenuOpen}>
      <Image
        src={isMenuOpen ? "/assets/Close.svg" : "assets/Menu.svg"}
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
