import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main content with Sidebar and children */}
      <div className="flex">
        {/* Sidebar with fixed width */}
        <div className="w-[327px]">
          <Sidebar />
        </div>

        {/* Children content taking remaining space */}
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
}
