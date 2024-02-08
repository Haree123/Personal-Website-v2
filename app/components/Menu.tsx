"use client";

import Link from "next/link";
import Icon from "./Icon";
import useGlobalStore from "@/store/global.store";

const Menu = () => {
  const { handleMenuOpen } = useGlobalStore();

  return (
    <div className="fixed top-25 left-0 pt-[25%] md:pt-[20%] lg:pt-[10%] pl-[15%] md:pl-[25%] flex flex-col space-y-12">
      <Link
        href="/"
        className="font-black text-4xl md:text-5xl lg:text-6xl"
        onClick={handleMenuOpen}
      >
        <span className="text-sm">01.</span> HOME
      </Link>
      <Link
        href="/about"
        className="font-black text-4xl md:text-5xl lg:text-6xll"
        onClick={handleMenuOpen}
      >
        <span className="text-sm">02.</span> ABOUT
      </Link>
      <Link
        href="/project"
        className="font-black text-4xl md:text-5xl lg:text-6xl"
        onClick={handleMenuOpen}
      >
        <span className="text-sm">03.</span> PROJECT
      </Link>
      <Link
        href="/contact"
        className="font-black text-4xl md:text-5xl lg:text-6xl"
        onClick={handleMenuOpen}
      >
        <span className="text-sm">04.</span> CONTACT
      </Link>

      <div className="flex space-x-5">
        <div className="flex">
          <Icon
            darkIcon="/assets/Black-Link.svg"
            icon="/assets/Link.svg"
            height={16}
            width={16}
          />

          <span className="pl-2 text-base md:text-xl lg:text-2xl tracking-wider">
            Github
          </span>
        </div>

        <div className="flex">
          <Icon
            darkIcon="/assets/Black-Link.svg"
            icon="/assets/Link.svg"
            height={16}
            width={16}
          />

          <span className="pl-2 text-base md:text-xl lg:text-2xl tracking-wider">
            LinkedIn
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
