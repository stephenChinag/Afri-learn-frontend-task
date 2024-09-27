"use client";

import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/lib/data";

const Sidebar = () => {
  return (
    <div className="p-[20px] w-[80px] lg:w-[327px] h-[1049px] bg-white">
      {menuItems.map((menu) => (
        <div className="flex flex-col gap-2" key={menu.title}>
          <span className="hidden lg:block text-black-400 my-4">
            {menu.title}
          </span>
          {menu.items.map((item) => {
            return (
              <Link
                href={item.href}
                key={item.label}
                className={`flex items-center justify-center lg:justify-start gap-[20px] text-gray-500 py-[20px] md:px-2 rounded-md transition-colors 
             `} // Apply green color if active
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
