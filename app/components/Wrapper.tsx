"use client";

import useGlobalStore from "@/store/global.store";
import Menu from "./Menu";

const LayoutWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isMenuOpen } = useGlobalStore();

  return <>{isMenuOpen ? <Menu /> : <>{children}</>}</>;
};

export default LayoutWrapper;
