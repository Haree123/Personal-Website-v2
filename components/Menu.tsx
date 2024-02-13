"use client";

import Link from "next/link";
import useGlobalStore from "@/store/global.store";
import Image from "next/image";

const Menu = () => {
  const { handleMenuOpen } = useGlobalStore();

  return (
    <div className="fixed left-0 pl-[15%] md:pl-[25%] flex flex-col justify-center h-[88vh] space-y-12">
      <Link
        href="/"
        className="font-black text-4xl md:text-5xl lg:text-6xl"
        onClick={handleMenuOpen}
      >
        <span className="text-sm">01.</span> HOME
      </Link>
      <Link
        href="/about"
        className="font-black text-4xl md:text-5xl lg:text-6xl"
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

      <div className="flex space-x-5 pb-10">
        <a href="https://github.com/Haree123" target="_blank" className="flex">
          <Image
            src="/assets/Link.svg"
            height={16}
            width={16}
            quality={100}
            alt="Link"
          />

          <span className="pl-2 text-base md:text-xl lg:text-2xl tracking-wider">
            Github
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/haree-prasad-275180158"
          target="_blank"
          className="flex"
        >
          <Image
            src="/assets/Link.svg"
            height={16}
            width={16}
            alt="Link"
            quality={100}
          />

          <span className="pl-2 text-base md:text-xl lg:text-2xl tracking-wider">
            LinkedIn
          </span>
        </a>
      </div>
    </div>
  );
};

export default Menu;
