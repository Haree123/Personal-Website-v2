"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

interface IconProps {
  className: string;
  darkIcon: string;
  icon: string;
  height: number;
  width: number;
}

const Icon = ({ className, darkIcon, icon, height, width }: IconProps) => {
  const { theme } = useTheme();

  const img = theme === "light" ? darkIcon : icon;

  return (
    <>
      <Image
        className={className}
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
