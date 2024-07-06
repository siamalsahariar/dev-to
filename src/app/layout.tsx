import type { Metadata } from "next";
import React, { ReactNode } from "react";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Main from "./pages/main";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Dev community",
  description: "Generated by create next app",
};

interface LayoutProps {
  children: ReactNode;
}

interface MainProps {
  children: ReactNode;
}

const MainComponent: React.FC<MainProps> = ({ children }) => {
  return <div>{children}</div>;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <html lang="en">
        <body>
          <>
            <Main></Main>
          </>
        </body>
      </html>
    </>
  );
};

export default Layout;
