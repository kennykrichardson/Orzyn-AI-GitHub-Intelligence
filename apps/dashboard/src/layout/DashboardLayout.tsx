import {
  ReactNode,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import Sidebar from "../components/Sidebar";

import Topbar from "../components/Topbar";

import backgroundImage from "../assets/backgrounds/orzyn-bg.png";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  const [
    sidebarOpen,
    setSidebarOpen,
  ] = useState(false);

  const TopbarWithSidebarOpen = Topbar as React.ComponentType<{
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  }>;

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-20">
        <img
          src={backgroundImage}
          alt=""
          className="
          w-full
          h-full

          object-cover

          blur-[3px]

          scale-105
          "
        />

        <div
          className="
          absolute
          inset-0

          bg-[#F8F4EC]/55
          "
        />
      </div>

      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

<main
  className="
  min-h-screen

  px-3
  md:px-6

  pt-8
  pb-8
  "
>
        <TopbarWithSidebarOpen
          setSidebarOpen={
            setSidebarOpen
          }
        />
        {children}
      </main>
    </div>
  );
}