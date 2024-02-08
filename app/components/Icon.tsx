"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

interface IconProps {
  darkIcon: string;
  icon: string;
  isAsterisk?: boolean;
  height: number;
  width: number;
}

const Icon = ({ darkIcon, icon, isAsterisk, height, width }: IconProps) => {
  const { theme } = useTheme();

  const img = theme === "light" ? darkIcon : icon;

  return (
    <>
      <Image
        className={isAsterisk ? "asterisk" : ""}
        src={img}
        alt="icon"
        height={height}
        width={width}
        quality={100}
      />
    </>
  );
};

export default Icon;
