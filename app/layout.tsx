import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import Header from "../components/header";
import LayoutWrapper from "../components/Wrapper";

export const metadata: Metadata = {
  title: "Haree Prasad",
  description: "Created by Haree Prasad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-[#313130] text-white">
        <Header />

        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
