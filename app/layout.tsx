import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import Header from "./components/header";
import ThemeProvider from "./components/Theme-Provider";
import LayoutWrapper from "./components/Wrapper";

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
      <body className="bg-[#f9f9f9] text-[#2e2e2e] dark:bg-[#313130] dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />

          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
