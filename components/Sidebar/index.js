"use client";
import { Sidebar } from "flowbite-react";

import { navbarData } from "@/utils/constants";
import { Link } from "react-scroll";

export default function SidebarComponent({ sidebar, setSidebar }) {
  return (
    <div className="fixed top-0 right-0 w-full h-[calc(100vh-4rem)] lg:hidden block z-50 
      bg-white/95 backdrop-blur-sm shadow-lg transform transition-all duration-300 ease-in-out">
      <Sidebar aria-label="Navigation sidebar" className="w-full h-full">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-col gap-2 p-4">
            {navbarData.map((data) => (
              <Link 
                key={data.name}
                to={data.name.toLowerCase()} 
                smooth={true}
                duration={500}
                className="cursor-pointer w-full"
                onClick={() => setSidebar(false)}
              >
                <Sidebar.Item 
                  className="w-full px-6 py-4 rounded-lg hover:bg-[#A3B1E0]/10 hover:text-[#4059AC]
                    transition-all duration-300 active:scale-95 font-sans"
                >
                  {data.name}
                </Sidebar.Item>
              </Link>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
