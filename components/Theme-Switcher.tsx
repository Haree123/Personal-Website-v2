"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <Image
        className="cursor-pointer"
        src={theme === "light" ? "/assets/Black-Sun.svg" : "/assets/Sun.svg"}
        height={35}
        width={35}
        quality={100}
        priority
        alt="Sun"
      />
    </button>
  );
};

export default ThemeSwitcher;
